#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import http from 'http';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class HealthChecker {
  constructor() {
    this.projectRoot = path.join(__dirname, '..');
    this.logDir = path.join(this.projectRoot, 'logs');
    this.port = process.env.PORT || 3000;
    this.healthEndpoint = `http://localhost:${this.port}/health`;
    this.maxResponseTime = 5000; // 5 seconds
    this.checks = [];
    
    this.ensureDirectories()}
  
  ensureDirectories() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir { recursive: true })}
  }
  
  log(level, message, data = null) {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      level,
      message,
      data
    };
    
    console.log(`[${timestamp}] ${level.toUpperCase()}: ${message}`);
    if (data) {
      console.log(JSON.stringify(data, null, 2))}
    
    // Write to log file
    const logFile = path.join(this.logDir, 'health-checker.log');
    fs.appendFileSync(logFile, JSON.stringify(logEntry) + '\n')}
  
  async checkApplicationHealth() {
    return new Promise(resolve => {
      const startTime = Date.now();
      
      const req = http.get(this.healthEndpoint, res => {
        const responseTime = Date.now() - startTime;
        
        if (res.statusCode === 200) {
          this.log('info', 'Application health check passed' {
            statusCode: res.statusCode,
            responseTime: `${responseTime}ms`
          });
          resolve({ healthy: true, responseTime, statusCode: res.statusCode })} else {
          this.log('warn', 'Application health check failed' {
            statusCode: res.statusCode,
            responseTime: `${responseTime}ms`
          });
          resolve({ healthy: false, responseTime, statusCode: res.statusCode })}
      });
      
      req.on('error', err => {
        const responseTime = Date.now() - startTime;
        this.log('error', 'Application health check error' {
          error: err.message,
          responseTime: `${responseTime}ms`
        });
        resolve({ healthy: false, responseTime, error: err.message })});
      
      req.setTimeout(this.maxResponseTime, () => {
        req.destroy();
        const responseTime = Date.now() - startTime;
        this.log('error', 'Application health check timeout' {
          responseTime: `${responseTime}ms`,
          timeout: this.maxResponseTime
        });
        resolve({ healthy: false, responseTime, error: 'timeout' })})})}
  
  async checkBuildHealth() {
    try {
      this.log('info', 'Checking build health...');
      
      // Check if build files exist
      const buildDir = path.join(this.projectRoot, '.next');
      const buildExists = fs.existsSync(buildDir);
      
      if (!buildExists) {
        this.log('warn', 'Build directory not found, attempting to build...');
        execSync('npm run build' { cwd: this.projectRoot, stdio: 'pipe' });
        this.log('info', 'Build completed successfully');
        return { healthy: true, message: 'Build completed' }}
      
      this.log('info', 'Build directory exists');
      return { healthy: true, message: 'Build exists' }} catch (error) {
      this.log('error', 'Build health check failed' { error: error.message });
      return { healthy: false, error: error.message }}
  }
  
  async checkDependencies() {
    try {
      this.log('info', 'Checking dependencies...');
      
      // Check if node_modules exists
      const nodeModulesDir = path.join(this.projectRoot, 'node_modules');
      const depsExist = fs.existsSync(nodeModulesDir);
      
      if (!depsExist) {
        this.log('warn', 'Dependencies not found, attempting to install...');
        execSync('npm install' { cwd: this.projectRoot, stdio: 'pipe' });
        this.log('info', 'Dependencies installed successfully');
        return { healthy: true, message: 'Dependencies installed' }}
      
      this.log('info', 'Dependencies exist');
      return { healthy: true, message: 'Dependencies exist' }} catch (error) {
      this.log('error', 'Dependency check failed' { error: error.message });
      return { healthy: false, error: error.message }}
  }
  
  async runAllChecks() {
    this.log('info', 'Starting comprehensive health checks...');
    
    const results = {
      timestamp: new Date().toISOString(),
      checks: {}
    };
    
    // Run all checks
    results.checks.application = await this.checkApplicationHealth();
    results.checks.build = await this.checkBuildHealth();
    results.checks.dependencies = await this.checkDependencies();
    
    // Calculate overall health
    const allHealthy = Object.values(results.checks).every(check => check.healthy);
    results.overall = { healthy: allHealthy };
    
    // Save results
    const reportFile = path.join(this.logDir, 'health-check-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(results, null, 2));
    
    this.log('info', 'Health checks completed', results);
    
    return results}
}

// Run health checks if this script is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const checker = new HealthChecker();
  checker.runAllChecks().then(results => {
    process.exit(results.overall.healthy ? 0 : 1)}).catch(error => {
    console.error('Health check failed:', error);
    process.exit(1)})}

export default HealthChecker;