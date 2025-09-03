#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class SmartHealthMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/smart-health-monitor.log');
    this.reportFile = path.join(this.projectRoot, 'logs/smart-health-monitor-report.json');
    this.healthHistory = this.loadHealthHistory();
    this.ensureDirectories()}

  ensureDirectories() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir { recursive: true })}
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    console.log(logMessage);
    
    try {
      fs.appendFileSync(this.logFile, logMessage + '\n')} catch (error) {
      console.error('Failed to write to log file:', error.message)}
  }

  loadHealthHistory() {
    try {
      if (fs.existsSync(this.reportFile)) {
        const data = fs.readFileSync(this.reportFile, 'utf8');
        return JSON.parse(data).healthHistory || []}
    } catch (error) {
      this.log(`Failed to load health history: ${error.message}`, 'warn')}
    return []}

  saveHealthHistory() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        healthHistory: this.healthHistory,
        totalChecks: this.healthHistory.length,
        lastRun: Date.now()
      };
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2))} catch (error) {
      this.log(`Failed to save health history: ${error.message}`, 'error')}
  }

  async performHealthCheck() {
    this.log('🏥 Performing comprehensive health check...');
    
    const healthCheck = {
      system: await this.checkSystemHealth(),
      application: await this.checkApplicationHealth(),
      dependencies: await this.checkDependencyHealth(),
      build: await this.checkBuildHealth(),
      performance: await this.checkPerformanceHealth(),
      security: await this.checkSecurityHealth(),
      logs: await this.checkLogHealth()
    };

    this.log(`Health Check Results:`);
    this.log(`  - System Health: ${healthCheck.system.score}/100`);
    this.log(`  - Application Health: ${healthCheck.application.score}/100`);
    this.log(`  - Dependency Health: ${healthCheck.dependencies.score}/100`);
    this.log(`  - Build Health: ${healthCheck.build.score}/100`);
    this.log(`  - Performance Health: ${healthCheck.performance.score}/100`);
    this.log(`  - Security Health: ${healthCheck.security.score}/100`);
    this.log(`  - Log Health: ${healthCheck.logs.score}/100`);

    return healthCheck}

  async checkSystemHealth() {
    try {
      this.log('💻 Checking system health...');
      
      const systemHealth = {
        memory: await this.checkMemoryUsage(),
        disk: await this.checkDiskUsage(),
        cpu: await this.checkCpuUsage(),
        processes: await this.checkProcessHealth()
      };

      // Calculate overall system health score
      const memoryScore = systemHealth.memory.usage < 80 ? 100 : Math.max(0, 100 - (systemHealth.memory.usage - 80) * 2);
      const diskScore = systemHealth.disk.usage < 90 ? 100 : Math.max(0, 100 - (systemHealth.disk.usage - 90) * 5);
      const cpuScore = systemHealth.cpu.usage < 80 ? 100 : Math.max(0, 100 - (systemHealth.cpu.usage - 80) * 2);
      const processScore = systemHealth.processes.healthy ? 100 : 50;

      const overallScore = (memoryScore + diskScore + cpuScore + processScore) / 4;

      return {
        ...systemHealth,
        score: overallScore.toFixed(2),
        issues: this.identifySystemIssues(systemHealth)
      }} catch (error) {
      this.log(`System health check failed: ${error.message}`, 'error');
      return { score: 0, issues: ['System health check failed'], error: error.message }}
  }

  async checkMemoryUsage() {
    try {
      const usage = process.memoryUsage();
      const totalMemory = usage.heapTotal + usage.external;
      const usedMemory = usage.heapUsed + usage.external;
      const usagePercentage = (usedMemory / totalMemory) * 100;

      return {
        heapUsed: (usage.heapUsed / (1024 * 1024)).toFixed(2),
        heapTotal: (usage.heapTotal / (1024 * 1024)).toFixed(2),
        external: (usage.external / (1024 * 1024)).toFixed(2),
        usage: usagePercentage.toFixed(2)
      }} catch (error) {
      return { heapUsed: 0, heapTotal: 0, external: 0, usage: 0 }}
  }

  async checkDiskUsage() {
    try {
      const stats = fs.statSync(this.projectRoot);
      // This is a simplified check - in a real implementation, you'd use a proper disk usage library
      return {
        usage: 50, // Placeholder - would need proper disk usage calculation
        free: 'Unknown',
        total: 'Unknown'
      }} catch (error) {
      return { usage: 0, free: 'Unknown', total: 'Unknown' }}
  }

  async checkCpuUsage() {
    try {
      const usage = process.cpuUsage();
      // This is a simplified check - in a real implementation, you'd use a proper CPU monitoring library
      return {
        usage: 25, // Placeholder - would need proper CPU usage calculation
        user: usage.user,
        system: usage.system
      }} catch (error) {
      return { usage: 0, user: 0, system: 0 }}
  }

  async checkProcessHealth() {
    try {
      // Check if PM2 processes are running
      const pm2Status = execSync('pm2 jlist' { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        stdio: 'pipe' 
      });
      
      const processes = JSON.parse(pm2Status);
      const runningProcesses = processes.filter(proc => proc.pm2_env.status === 'online');
      const totalProcesses = processes.length;
      
      return {
        total: totalProcesses,
        running: runningProcesses.length,
        healthy: runningProcesses.length === totalProcesses && totalProcesses > 0,
        processes: runningProcesses.map(proc => ({
          name: proc.name,
          status: proc.pm2_env.status,
          uptime: proc.pm2_env.uptime,
          memory: proc.monit.memory,
          cpu: proc.monit.cpu
        }))
      }} catch (error) {
      return { total: 0, running: 0, healthy: false, processes: [] }}
  }

  identifySystemIssues(systemHealth) {
    const issues = [];
    
    if (systemHealth.memory.usage > 80) {
      issues.push('High memory usage detected')}
    
    if (systemHealth.disk.usage > 90) {
      issues.push('Low disk space')}
    
    if (systemHealth.cpu.usage > 80) {
      issues.push('High CPU usage detected')}
    
    if (!systemHealth.processes.healthy) {
      issues.push('Some processes are not running properly')}
    
    return issues}

  async checkApplicationHealth() {
    try {
      this.log('🚀 Checking application health...');
      
      const appHealth = {
        build: await this.checkBuildStatus(),
        tests: await this.checkTestStatus(),
        linting: await this.checkLintingStatus(),
        types: await this.checkTypeStatus()
      };

      // Calculate overall application health score
      const buildScore = appHealth.build.success ? 100 : 0;
      const testScore = appHealth.tests.success ? 100 : 0;
      const lintingScore = appHealth.linting.success ? 100 : 0;
      const typeScore = appHealth.types.success ? 100 : 0;

      const overallScore = (buildScore + testScore + lintingScore + typeScore) / 4;

      return {
        ...appHealth,
        score: overallScore.toFixed(2),
        issues: this.identifyApplicationIssues(appHealth)
      }} catch (error) {
      this.log(`Application health check failed: ${error.message}`, 'error');
      return { score: 0, issues: ['Application health check failed'], error: error.message }}
  }

  async checkBuildStatus() {
    try {
      execSync('npm run build' { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 300000 
      });
      return { success: true, message: 'Build successful' }} catch (error) {
      return { success: false, message: error.message }}
  }

  async checkTestStatus() {
    try {
      execSync('npm run test:ci' { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 120000 
      });
      return { success: true, message: 'Tests passed' }} catch (error) {
      return { success: false, message: error.message }}
  }

  async checkLintingStatus() {
    try {
      execSync('npm run lint' { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 60000 
      });
      return { success: true, message: 'Linting passed' }} catch (error) {
      return { success: false, message: error.message }}
  }

  async checkTypeStatus() {
    try {
      execSync('npm run type-check' { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 60000 
      });
      return { success: true, message: 'Type checking passed' }} catch (error) {
      return { success: false, message: error.message }}
  }

  identifyApplicationIssues(appHealth) {
    const issues = [];
    
    if (!appHealth.build.success) {
      issues.push('Build is failing')}
    
    if (!appHealth.tests.success) {
      issues.push('Tests are failing')}
    
    if (!appHealth.linting.success) {
      issues.push('Linting issues detected')}
    
    if (!appHealth.types.success) {
      issues.push('Type checking issues detected')}
    
    return issues}

  async checkDependencyHealth() {
    try {
      this.log('📦 Checking dependency health...');
      
      const depHealth = {
        outdated: await this.checkOutdatedDependencies(),
        vulnerabilities: await this.checkVulnerabilities(),
        duplicates: await this.checkDuplicateDependencies()
      };

      // Calculate dependency health score
      let score = 100;
      score -= depHealth.outdated.count * 2;
      score -= depHealth.vulnerabilities.critical * 20;
      score -= depHealth.vulnerabilities.high * 10;
      score -= depHealth.vulnerabilities.medium * 5;
      score -= depHealth.duplicates.count * 3;

      return {
        ...depHealth,
        score: Math.max(0, score).toFixed(2),
        issues: this.identifyDependencyIssues(depHealth)
      }} catch (error) {
      this.log(`Dependency health check failed: ${error.message}`, 'error');
      return { score: 0, issues: ['Dependency health check failed'], error: error.message }}
  }

  async checkOutdatedDependencies() {
    try {
      const output = execSync('npm outdated --json' { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        stdio: 'pipe' 
      });
      
      const outdated = JSON.parse(output);
      return { count: Object.keys(outdated).length, packages: Object.keys(outdated) }} catch (error) {
      if (error.stdout) {
        try {
          const outdated = JSON.parse(error.stdout);
          return { count: Object.keys(outdated).length, packages: Object.keys(outdated) }} catch (parseError) {
          return { count: 0, packages: [] }}
      }
      return { count: 0, packages: [] }}
  }

  async checkVulnerabilities() {
    try {
      const output = execSync('npm audit --json' { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        stdio: 'pipe' 
      });
      
      const audit = JSON.parse(output);
      const vulnerabilities = audit.vulnerabilities || {};
      
      return {
        critical: Object.values(vulnerabilities).filter(v => v.severity === 'critical').length,
        high: Object.values(vulnerabilities).filter(v => v.severity === 'high').length,
        medium: Object.values(vulnerabilities).filter(v => v.severity === 'medium').length,
        low: Object.values(vulnerabilities).filter(v => v.severity === 'low').length,
        total: Object.keys(vulnerabilities).length
      }} catch (error) {
      if (error.stdout) {
        try {
          const audit = JSON.parse(error.stdout);
          const vulnerabilities = audit.vulnerabilities || {};
          
          return {
            critical: Object.values(vulnerabilities).filter(v => v.severity === 'critical').length,
            high: Object.values(vulnerabilities).filter(v => v.severity === 'high').length,
            medium: Object.values(vulnerabilities).filter(v => v.severity === 'medium').length,
            low: Object.values(vulnerabilities).filter(v => v.severity === 'low').length,
            total: Object.keys(vulnerabilities).length
          }} catch (parseError) {
          return { critical: 0, high: 0, medium: 0, low: 0, total: 0 }}
      }
      return { critical: 0, high: 0, medium: 0, low: 0, total: 0 }}
  }

  async checkDuplicateDependencies() {
    try {
      const output = execSync('npm ls --json' { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        stdio: 'pipe' 
      });
      
      const tree = JSON.parse(output);
      const duplicates = [];
      
      const findDuplicates = (node, seen = new Set()) => {
        if (node.dependencies) {
          Object.keys(node.dependencies).forEach(dep => {
            if (seen.has(dep)) {
              duplicates.push(dep)} else {
              seen.add(dep);
              findDuplicates(node.dependencies[dep], seen)}
          })}
      };
      
      findDuplicates(tree);
      return { count: duplicates.length, packages: duplicates }} catch (error) {
      return { count: 0, packages: [] }}
  }

  identifyDependencyIssues(depHealth) {
    const issues = [];
    
    if (depHealth.outdated.count > 10) {
      issues.push('Many outdated dependencies')}
    
    if (depHealth.vulnerabilities.critical > 0) {
      issues.push('Critical security vulnerabilities found')}
    
    if (depHealth.vulnerabilities.high > 5) {
      issues.push('Multiple high-severity vulnerabilities')}
    
    if (depHealth.duplicates.count > 0) {
      issues.push('Duplicate dependencies detected')}
    
    return issues}

  async checkBuildHealth() {
    try {
      this.log('🏗️ Checking build health...');
      
      const buildHealth = {
        time: await this.measureBuildTime(),
        size: await this.measureBuildSize(),
        errors: await this.checkBuildErrors()
      };

      // Calculate build health score
      let score = 100;
      
      if (buildHealth.time > 120000) { // More than 2 minutes
        score -= 20}
      
      if (buildHealth.size > 10) { // More than 10MB
        score -= 15}
      
      if (buildHealth.errors.count > 0) {
        score -= buildHealth.errors.count * 10}

      return {
        ...buildHealth,
        score: Math.max(0, score).toFixed(2),
        issues: this.identifyBuildIssues(buildHealth)
      }} catch (error) {
      this.log(`Build health check failed: ${error.message}`, 'error');
      return { score: 0, issues: ['Build health check failed'], error: error.message }}
  }

  async measureBuildTime() {
    try {
      const startTime = Date.now();
      
      if (fs.existsSync('.next')) {
        execSync('rm -rf .next' { cwd: this.projectRoot, stdio: 'pipe' })}
      
      execSync('npm run build' { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 300000 
      });
      
      return Date.now() - startTime} catch (error) {
      return -1}
  }

  async measureBuildSize() {
    try {
      if (!fs.existsSync('.next')) {
        return 0}

      const calculateSize = (dir) => {
        let totalSize = 0;
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            totalSize += calculateSize(fullPath)} else {
            totalSize += stat.size}
        }
        
        return totalSize};

      const sizeInBytes = calculateSize('.next');
      return (sizeInBytes / (1024 * 1024)).toFixed(2); // Convert to MB
    } catch (error) {
      return 0}
  }

  async checkBuildErrors() {
    try {
      const logFiles = ['./logs/zion-website-error.log', './logs/build-monitor-error.log'];
      const errors = [];
      
      for (const logFile of logFiles) {
        if (fs.existsSync(logFile)) {
          const content = fs.readFileSync(logFile, 'utf8');
          const lines = content.split('\n');
          
          lines.forEach(line => {
            if (line.includes('error') || line.includes('Error') || line.includes('ERROR')) {
              errors.push(line.trim())}
          })}
      }
      
      return { count: errors.length, errors }} catch (error) {
      return { count: 0, errors: [] }}
  }

  identifyBuildIssues(buildHealth) {
    const issues = [];
    
    if (buildHealth.time > 120000) {
      issues.push('Build time is too long')}
    
    if (buildHealth.size > 10) {
      issues.push('Build size is too large')}
    
    if (buildHealth.errors.count > 0) {
      issues.push('Build errors detected')}
    
    return issues}

  async checkPerformanceHealth() {
    try {
      this.log('⚡ Checking performance health...');
      
      const perfHealth = {
        memory: await this.checkMemoryUsage(),
        responseTime: await this.checkResponseTime(),
        bundleSize: await this.measureBuildSize()
      };

      // Calculate performance health score
      let score = 100;
      
      if (perfHealth.memory.usage > 80) {
        score -= 20}
      
      if (perfHealth.responseTime > 1000) {
        score -= 15}
      
      if (perfHealth.bundleSize > 5) {
        score -= 10}

      return {
        ...perfHealth,
        score: Math.max(0, score).toFixed(2),
        issues: this.identifyPerformanceIssues(perfHealth)
      }} catch (error) {
      this.log(`Performance health check failed: ${error.message}`, 'error');
      return { score: 0, issues: ['Performance health check failed'], error: error.message }}
  }

  async checkResponseTime() {
    // This is a placeholder - in a real implementation, you'd test actual response times
    return 500; // Simulated response time in ms
  }

  identifyPerformanceIssues(perfHealth) {
    const issues = [];
    
    if (perfHealth.memory.usage > 80) {
      issues.push('High memory usage')}
    
    if (perfHealth.responseTime > 1000) {
      issues.push('Slow response time')}
    
    if (perfHealth.bundleSize > 5) {
      issues.push('Large bundle size')}
    
    return issues}

  async checkSecurityHealth() {
    try {
      this.log('🔒 Checking security health...');
      
      const securityHealth = {
        vulnerabilities: await this.checkVulnerabilities(),
        secrets: await this.checkForSecrets(),
        permissions: await this.checkFilePermissions()
      };

      // Calculate security health score
      let score = 100;
      score -= securityHealth.vulnerabilities.critical * 25;
      score -= securityHealth.vulnerabilities.high * 15;
      score -= securityHealth.vulnerabilities.medium * 5;
      score -= securityHealth.secrets.count * 10;
      score -= securityHealth.permissions.issues * 5;

      return {
        ...securityHealth,
        score: Math.max(0, score).toFixed(2),
        issues: this.identifySecurityIssues(securityHealth)
      }} catch (error) {
      this.log(`Security health check failed: ${error.message}`, 'error');
      return { score: 0, issues: ['Security health check failed'], error: error.message }}
  }

  async checkForSecrets() {
    try {
      const files = this.getSourceFiles();
      const secrets = [];
      
      for (const file of files) {
        const content = fs.readFileSync(file, 'utf8');
        const lines = content.split('\n');
        
        lines.forEach((line, index) => {
          if (line.includes('password') || line.includes('secret') || line.includes('api_key')) {
            secrets.push({
              file,
              line: index + 1,
              content: line.trim()
            })}
        })}
      
      return { count: secrets.length, secrets }} catch (error) {
      return { count: 0, secrets: [] }}
  }

  getSourceFiles() {
    const files = [];
    const extensions = ['.js', '.jsx', '.ts', '.tsx', '.json'];
    
    const scanDirectory = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            scanDirectory(fullPath)} else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
            files.push(fullPath)}
        }
      } catch (error) {
        // Skip directories we can't read
      }
    };
    
    scanDirectory(this.projectRoot);
    return files}

  async checkFilePermissions() {
    try {
      const keyFiles = ['package.json', 'next.config.js', 'next.config.cjs'];
      let issues = 0;
      
      for (const file of keyFiles) {
        if (fs.existsSync(file)) {
          const stats = fs.statSync(file);
          const mode = stats.mode;
          const permissions = (mode & parseInt('777', 8)).toString(8);
          
          if (permissions.includes('7')) {
            issues++}
        }
      }
      
      return { issues }} catch (error) {
      return { issues: 0 }}
  }

  identifySecurityIssues(securityHealth) {
    const issues = [];
    
    if (securityHealth.vulnerabilities.critical > 0) {
      issues.push('Critical security vulnerabilities')}
    
    if (securityHealth.vulnerabilities.high > 5) {
      issues.push('Multiple high-severity vulnerabilities')}
    
    if (securityHealth.secrets.count > 0) {
      issues.push('Potential secrets in code')}
    
    if (securityHealth.permissions.issues > 0) {
      issues.push('File permission issues')}
    
    return issues}

  async checkLogHealth() {
    try {
      this.log('📝 Checking log health...');
      
      const logHealth = {
        size: await this.checkLogSize(),
        errors: await this.checkLogErrors(),
        rotation: await this.checkLogRotation()
      };

      // Calculate log health score
      let score = 100;
      
      if (logHealth.size.total > 100) { // More than 100MB
        score -= 20}
      
      if (logHealth.errors.count > 100) {
        score -= 15}
      
      if (!logHealth.rotation.enabled) {
        score -= 10}

      return {
        ...logHealth,
        score: Math.max(0, score).toFixed(2),
        issues: this.identifyLogIssues(logHealth)
      }} catch (error) {
      this.log(`Log health check failed: ${error.message}`, 'error');
      return { score: 0, issues: ['Log health check failed'], error: error.message }}
  }

  async checkLogSize() {
    try {
      const logDir = path.join(this.projectRoot, 'logs');
      let totalSize = 0;
      let fileCount = 0;
      
      if (fs.existsSync(logDir)) {
        const items = fs.readdirSync(logDir);
        
        for (const item of items) {
          const fullPath = path.join(logDir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isFile()) {
            totalSize += stat.size;
            fileCount++}
        }
      }
      
      return {
        total: (totalSize / (1024 * 1024)).toFixed(2), // Convert to MB
        fileCount
      }} catch (error) {
      return { total: 0, fileCount: 0 }}
  }

  async checkLogErrors() {
    try {
      const logDir = path.join(this.projectRoot, 'logs');
      let errorCount = 0;
      
      if (fs.existsSync(logDir)) {
        const items = fs.readdirSync(logDir);
        
        for (const item of items) {
          const fullPath = path.join(logDir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isFile() && item.includes('error')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            const lines = content.split('\n');
            errorCount += lines.filter(line => line.includes('ERROR') || line.includes('error')).length}
        }
      }
      
      return { count: errorCount }} catch (error) {
      return { count: 0 }}
  }

  async checkLogRotation() {
    try {
      // Check if PM2 log rotation is enabled
      const pm2Config = execSync('pm2 show pm2-logrotate' { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        stdio: 'pipe' 
      });
      
      return { enabled: true }} catch (error) {
      return { enabled: false }}
  }

  identifyLogIssues(logHealth) {
    const issues = [];
    
    if (logHealth.size.total > 100) {
      issues.push('Log files are too large')}
    
    if (logHealth.errors.count > 100) {
      issues.push('Too many errors in logs')}
    
    if (!logHealth.rotation.enabled) {
      issues.push('Log rotation not enabled')}
    
    return issues}

  async autoRecover(healthCheck) {
    this.log('🔧 Attempting auto-recovery...');
    
    const recoveries = [];
    
    // Recover from system issues
    if (healthCheck.system.issues.length > 0) {
      try {
        this.log('Attempting system recovery...');
        // Restart PM2 processes
        execSync('pm2 restart all' { 
          cwd: this.projectRoot, 
          stdio: 'pipe' 
        });
        
        recoveries.push({
          type: 'system',
          success: true,
          action: 'restarted PM2 processes'
        });
        
        this.log('✅ System recovery completed')} catch (error) {
        recoveries.push({
          type: 'system',
          success: false,
          error: error.message
        });
        
        this.log(`❌ System recovery failed: ${error.message}`, 'error')}
    }
    
    // Recover from application issues
    if (healthCheck.application.issues.length > 0) {
      try {
        this.log('Attempting application recovery...');
        
        // Clean and rebuild
        execSync('rm -rf .next node_modules/.cache' { 
          cwd: this.projectRoot, 
          stdio: 'pipe' 
        });
        
        execSync('npm install' { 
          cwd: this.projectRoot, 
          stdio: 'pipe',
          timeout: 180000 
        });
        
        recoveries.push({
          type: 'application',
          success: true,
          action: 'cleaned and reinstalled dependencies'
        });
        
        this.log('✅ Application recovery completed')} catch (error) {
        recoveries.push({
          type: 'application',
          success: false,
          error: error.message
        });
        
        this.log(`❌ Application recovery failed: ${error.message}`, 'error')}
    }
    
    // Recover from dependency issues
    if (healthCheck.dependencies.issues.length > 0) {
      try {
        this.log('Attempting dependency recovery...');
        
        execSync('npm audit fix' { 
          cwd: this.projectRoot, 
          stdio: 'pipe',
          timeout: 120000 
        });
        
        recoveries.push({
          type: 'dependencies',
          success: true,
          action: 'fixed dependency vulnerabilities'
        });
        
        this.log('✅ Dependency recovery completed')} catch (error) {
        recoveries.push({
          type: 'dependencies',
          success: false,
          error: error.message
        });
        
        this.log(`❌ Dependency recovery failed: ${error.message}`, 'error')}
    }
    
    return recoveries}

  async generateHealthReport() {
    this.log('📊 Generating health monitoring report...');
    
    const healthCheck = await this.performHealthCheck();
    const recoveries = await this.autoRecover(healthCheck);
    
    // Calculate overall health score
    const overallScore = (
      parseFloat(healthCheck.system.score) +
      parseFloat(healthCheck.application.score) +
      parseFloat(healthCheck.dependencies.score) +
      parseFloat(healthCheck.build.score) +
      parseFloat(healthCheck.performance.score) +
      parseFloat(healthCheck.security.score) +
      parseFloat(healthCheck.logs.score)
    ) / 7;
    
    const report = {
      timestamp: new Date().toISOString(),
      healthCheck,
      recoveries,
      overallScore: overallScore.toFixed(2),
      summary: {
        overallHealth: overallScore.toFixed(2),
        systemHealth: healthCheck.system.score,
        applicationHealth: healthCheck.application.score,
        dependencyHealth: healthCheck.dependencies.score,
        buildHealth: healthCheck.build.score,
        performanceHealth: healthCheck.performance.score,
        securityHealth: healthCheck.security.score,
        logHealth: healthCheck.logs.score,
        totalIssues: healthCheck.system.issues.length + 
                    healthCheck.application.issues.length + 
                    healthCheck.dependencies.issues.length + 
                    healthCheck.build.issues.length + 
                    healthCheck.performance.issues.length + 
                    healthCheck.security.issues.length + 
                    healthCheck.logs.issues.length,
        recoveriesAttempted: recoveries.length,
        recoveriesSuccessful: recoveries.filter(r => r.success).length
      },
      recommendations: this.generateHealthRecommendations(healthCheck)
    };

    const reportFile = path.join(this.projectRoot, 'logs/smart-health-monitor-intelligence.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`📊 Health report saved to ${reportFile}`);
    return report}

  generateHealthRecommendations(healthCheck) {
    const recommendations = [];
    
    if (parseFloat(healthCheck.system.score) < 70) {
      recommendations.push('Address system health issues - check memory, disk, and CPU usage')}
    
    if (parseFloat(healthCheck.application.score) < 70) {
      recommendations.push('Fix application issues - ensure build, tests, and linting pass')}
    
    if (parseFloat(healthCheck.dependencies.score) < 70) {
      recommendations.push('Update dependencies and fix security vulnerabilities')}
    
    if (parseFloat(healthCheck.build.score) < 70) {
      recommendations.push('Optimize build process and reduce build time/size')}
    
    if (parseFloat(healthCheck.performance.score) < 70) {
      recommendations.push('Improve performance - optimize memory usage and response times')}
    
    if (parseFloat(healthCheck.security.score) < 70) {
      recommendations.push('Address security issues immediately')}
    
    if (parseFloat(healthCheck.logs.score) < 70) {
      recommendations.push('Implement log rotation and clean up log files')}

    return recommendations}

  async run() {
    this.log('🚀 Starting Smart Health Monitor...');
    
    try {
      // Generate comprehensive health report
      const report = await this.generateHealthReport();
      
      // Save health history
      this.healthHistory.push({
        timestamp: new Date().toISOString(),
        report: report,
        overallScore: report.overallScore
      });
      
      this.saveHealthHistory();

      this.log(`🎯 Health Monitoring Complete:`);
      this.log(`   - Overall Health Score: ${report.overallScore}/100`);
      this.log(`   - System Health: ${report.summary.systemHealth}/100`);
      this.log(`   - Application Health: ${report.summary.applicationHealth}/100`);
      this.log(`   - Dependency Health: ${report.summary.dependencyHealth}/100`);
      this.log(`   - Build Health: ${report.summary.buildHealth}/100`);
      this.log(`   - Performance Health: ${report.summary.performanceHealth}/100`);
      this.log(`   - Security Health: ${report.summary.securityHealth}/100`);
      this.log(`   - Log Health: ${report.summary.logHealth}/100`);
      this.log(`   - Total Issues: ${report.summary.totalIssues}`);
      this.log(`   - Recoveries Attempted: ${report.summary.recoveriesAttempted}`);
      this.log(`   - Recoveries Successful: ${report.summary.recoveriesSuccessful}`)} catch (error) {
      this.log(`❌ Health Monitor failed: ${error.message}`, 'error');
      throw error}
  }
}

// Run the health monitor
if (import.meta.url === `file://${process.argv[1]}`) {
  const monitor = new SmartHealthMonitor();
  monitor.run().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1)})}

export default SmartHealthMonitor;