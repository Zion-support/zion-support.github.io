#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AISecurityIntelligence {
  constructor() {
    this.workspaceRoot = '/workspace';
    this.reportFile = path.join(this.workspaceRoot, 'automation_logs', 'ai-security-report.json');
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.reportFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });

  log(message) {
    console.log(`[AI Security Intelligence] ${message}`);

  async runSecurityAnalysis() {
    this.log('Starting AI-powered security analysis...');
    
    const analysis = {
      timestamp: new Date().toISOString(),
      vulnerabilities: [],
      securityIssues: [],
      recommendations: [],
      riskScore: 0,
      status: 'safe
    };

    try {
      // Run npm audit
      await this.runNpmAudit(analysis);
      
      // Analyze environment variables
      await this.analyzeEnvironmentVariables(analysis);
      
      // Analyze dependencies
      await this.analyzeDependencies(analysis);
      
      // Analyze code for security issues
      await this.analyzeCodeSecurity(analysis);
      
      // Analyze configuration files
      await this.analyzeConfigurationFiles(analysis);
      
      // Calculate risk score
      analysis.riskScore = this.calculateRiskScore(analysis);
      analysis.status = this.determineSecurityStatus(analysis.riskScore);
      
      // Generate recommendations
      this.generateSecurityRecommendations(analysis);
      
      // Save report
      fs.writeFileSync(this.reportFile, JSON.stringify(analysis, null, 2));
      `;
      this.log(`Security analysis complete. Risk score: ${analysis.riskScore}/100`);`;
      this.log(`Security status: ${analysis.status}`);`;
      this.log(`Report saved to: ${this.reportFile}`);
      
      return analysis;
    } catch (error) {`;
      this.log(`Error during security analysis: ${error.message}`);
      analysis.error = error.message;

  async runNpmAudit(analysis) {
    this.log('Running npm audit...');
    
      const auditResult = execSync('npm audit --json', { 
        encoding: 'utf8', 
        cwd: this.workspaceRoot,
        stdio: 'pipe
      });
      
      const auditData = JSON.parse(auditResult);
      
      if (auditData.vulnerabilities) {
        Object.entries(auditData.vulnerabilities).forEach(([name, vuln]) => {
          analysis.vulnerabilities.push({
            package: name,
            severity: vuln.severity,
            title: vuln.title,
            description: vuln.description,
            recommendation: vuln.recommendation
      
      analysis.metrics = {
        totalVulnerabilities: auditData.metadata?.vulnerabilities?.total || 0,
        high: auditData.metadata?.vulnerabilities?.high || 0,
        moderate: auditData.metadata?.vulnerabilities?.moderate || 0,
        low: auditData.metadata?.vulnerabilities?.low || 0,
        info: auditData.metadata?.vulnerabilities?.info || 0
      
    } catch (error) {
      this.log('npm audit failed or no vulnerabilities found');
      analysis.metrics = { totalVulnerabilities: 0, high: 0, moderate: 0, low: 0, info: 0 };

  async analyzeEnvironmentVariables(analysis) {
    this.log('Analyzing environment variables...');
    
    const envFiles = ['.env', '.env.local', '.env.production', '.env.development'];
    const envIssues = [];
    
    envFiles.forEach(envFile => {
      const envPath = path.join(this.workspaceRoot, envFile);
      if (fs.existsSync(envPath)) {
        const content = fs.readFileSync(envPath, 'utf8');
        const lines = content.split('\n');
        
        lines.forEach((line, index) => {
          if (line.includes('PASSWORD') || line.includes('SECRET') || line.includes('KEY')) {
            if (line.includes('=') && !line.includes('=')) {
              envIssues.push({
                file: envFile,
                line: index + 1,
                issue: 'Potential hardcoded secret',
                severity: 'high
          
          if (line.includes('NODE_ENV=development') && envFile.includes('production')) {
              issue: 'Development environment in production file',
              severity: 'medium
    
    analysis.securityIssues = analysis.securityIssues.concat(envIssues);

  async analyzeDependencies(analysis) {
    this.log('Analyzing dependencies...');
    
    const packageJsonPath = path.join(this.workspaceRoot, 'package.json');
    if (!fs.existsSync(packageJsonPath)) {
      return;
    
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
    
    const suspiciousPackages = [];
    const knownVulnerablePackages = [
      'lodash', 'moment', 'jquery', 'express', 'request
    ];
    
    Object.keys(dependencies).forEach(dep => {
      if (knownVulnerablePackages.includes(dep)) {
        suspiciousPackages.push({
          package: dep,
          version: dependencies[dep],
          issue: 'Known vulnerable package',
      
      // Check for packages with suspicious names
      if (dep.includes('crypto') || dep.includes('hash') || dep.includes('encrypt')) {
          issue: 'Crypto-related package - verify authenticity',
          severity: 'low
    
    analysis.securityIssues = analysis.securityIssues.concat(suspiciousPackages);

  async analyzeCodeSecurity(analysis) {
    this.log('Analyzing code for security issues...');
    
    const srcDir = path.join(this.workspaceRoot, 'src');
    if (!fs.existsSync(srcDir)) {
    
    const codeFiles = this.findFiles(srcDir, ['.ts', '.tsx', '.js', '.jsx']);
    const codeIssues = [];
    
    codeFiles.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      
      // Check for dangerous patterns
      if (content.includes('eval(') || content.includes('Function(')) {
        codeIssues.push({
          file: path.relative(this.workspaceRoot, file),
          issue: 'Use of eval() or Function() constructor',
          severity: 'high',
          recommendation: 'Avoid dynamic code execution
      
      if (content.includes('innerHTML') && !content.includes('textContent')) {
          issue: 'Potential XSS vulnerability with innerHTML',
          severity: 'medium',
          recommendation: 'Use textContent or sanitize HTML
      
      if (content.includes('localStorage') && content.includes('password')) {
          issue: 'Potential password storage in localStorage',
          recommendation: 'Use secure storage methods
      
      if (content.includes('http://') && !content.includes('localhost')) {
          issue: 'Insecure HTTP protocol usage',
          recommendation: 'Use HTTPS for production
    
    analysis.securityIssues = analysis.securityIssues.concat(codeIssues);

  async analyzeConfigurationFiles(analysis) {
    this.log('Analyzing configuration files...');
    
    const configFiles = [
      'next.config.js',
      'vite.config.ts',
      'tsconfig.json',
      'eslint.config.js',
      'netlify.toml
    
    const configIssues = [];
    
    configFiles.forEach(configFile => {
      const configPath = path.join(this.workspaceRoot, configFile);
      if (fs.existsSync(configPath)) {
        const content = fs.readFileSync(configPath, 'utf8');
        
        // Check for security-related configurations
        if (content.includes('cors') && !content.includes('origin')) {
          configIssues.push({
            file: configFile,
            issue: 'CORS configuration may be too permissive',
            recommendation: 'Specify allowed origins
        
        if (content.includes('helmet') && !content.includes('contentSecurityPolicy')) {
            issue: 'Missing Content Security Policy',
            recommendation: 'Implement CSP headers
    
    analysis.securityIssues = analysis.securityIssues.concat(configIssues);

  findFiles(dir, extensions) {
    let files = [];
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files = files.concat(this.findFiles(fullPath, extensions));
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
    
    return files;

  calculateRiskScore(analysis) {
    let score = 0;
    
    // Add points for vulnerabilities
    analysis.vulnerabilities.forEach(vuln => {
      switch (vuln.severity) {
        case 'high':
          score += 20;
          break;
        case 'moderate':
          score += 10;
        case 'low':
          score += 5;
        case 'info':
          score += 1;
    
    // Add points for security issues
    analysis.securityIssues.forEach(issue => {
      switch (issue.severity) {
          score += 15;
        case 'medium':
          score += 8;
          score += 3;
    
    return Math.min(100, score);

  determineSecurityStatus(riskScore) {
    if (riskScore >= 70) return 'critical';
    if (riskScore >= 40) return 'high';
    if (riskScore >= 20) return 'medium';
    if (riskScore >= 5) return 'low';
    return 'safe';

  generateSecurityRecommendations(analysis) {
    if (analysis.metrics?.high > 0) {
      analysis.recommendations.push({
        priority: 'critical',
        category: 'vulnerabilities',
        message: 'Address high-severity vulnerabilities immediately
    
    if (analysis.metrics?.moderate > 0) {
        priority: 'high',
        message: 'Update packages with moderate vulnerabilities
    
    const highSeverityIssues = analysis.securityIssues.filter(issue => issue.severity === 'high');
    if (highSeverityIssues.length > 0) {
        category: 'code',
        message: 'Fix high-severity security issues in code
    
      priority: 'medium',
      category: 'general',
      message: 'Implement security headers and CSP
    
      priority: 'low',
      category: 'monitoring',
      message: 'Set up automated security monitoring

// CLI interface
if (require.main === module) {
  const security = new AISecurityIntelligence();
  security.runSecurityAnalysis().catch(console.error);

module.exports = AISecurityIntelligence;`;