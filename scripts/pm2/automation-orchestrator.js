#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class AutomationOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/automation-orchestrator.log');
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/automation-report.json');
    this.startTime = Date.now();
    this.processes = [];

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;

    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      // console.error('Failed to write to log file:', error.message);


  async runProcess(scriptName, description) {
    try {
      this.log(`🚀 Running ${description}...`);
      
      const scriptPath = path.join(this.projectRoot, 'scripts/pm2', scriptName);
      if (!fs.existsSync(scriptPath)) {
        this.log(`❌ Script not found: ${scriptPath}`);
        return { success: false, error: 'Script not found' };

      const startTime = Date.now();
      const result = execSync(`node ${scriptPath}`, { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 300000 // 5 minutes timeout
      });
      
      const duration = Date.now() - startTime;
      this.log(`✅ ${description} completed successfully in ${duration}ms`);
      
      return { success: true, duration, output: result.toString() };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`);
      return { success: false, error: error.message };


  async runSequentialProcesses() {
    this.log('🔄 Running sequential processes...');
    
    const sequentialScripts = [
      { script: 'file-integrity-checker.js', description: 'File Integrity Checker' },
      { script: 'typescript-error-fixer.js', description: 'TypeScript Error Fixer' },
      { script: 'build-health-monitor.js', description: 'Build Health Monitor' },
      { script: 'lint-fixer.js', description: 'Lint Fixer' },
      { script: 'code-quality-monitor.js', description: 'Code Quality Monitor' }
    ];

    const results = [];
    
    for (const script of sequentialScripts) {
      const result = await this.runProcess(script.script, script.description);
      results.push({
        script: script.script,
        description: script.description,
        ...result
      });
      
      // Wait a bit between processes to avoid overwhelming the system
      await new Promise(resolve => setTimeout(resolve, 2000));

    return results;

  async runParallelProcesses() {
    this.log('⚡ Running parallel processes...');
    
    const parallelScripts = [
      { script: 'dependency-monitor.js', description: 'Dependency Monitor' },
      { script: 'performance-monitor.js', description: 'Performance Monitor' },
      { script: 'auto-commit-fixes.js', description: 'Auto Commit Fixes' }
    ];

    const promises = parallelScripts.map(script => 
      this.runProcess(script.script, script.description)
        .then(result => ({ script: script.script, description: script.description, ...result }))
    );

    const results = await Promise.allSettled(promises);
    
    return results.map((result, index) => {
      if (result.status === 'fulfilled') {
        return result.value;
      } else {
        return {
          script: parallelScripts[index].script,
          description: parallelScripts[index].description,
          success: false,
          error: result.reason.message
        };

    });

  async checkSystemHealth() {
    this.log('🏥 Checking system health...');
    
    const healthChecks = [];
    
    // Check disk space
    try {
      const diskSpace = execSync('df -h .', { cwd: this.projectRoot, stdio: 'pipe' }).toString();
      const availableSpace = diskSpace.split('\n')[1].split(/\s+/)[3];
      healthChecks.push({
        type: 'disk-space',
        status: 'ok',
        message: `Available disk space: ${availableSpace}`,
        value: availableSpace
      });
    } catch (error) {
      healthChecks.push({
        type: 'disk-space',
        status: 'error',
        message: 'Could not check disk space',
        error: error.message
      });

    // Check memory usage
    try {
      const memoryInfo = execSync('free -h', { stdio: 'pipe' }).toString();
      const lines = memoryInfo.split('\n');
      const memLine = lines[1].split(/\s+/);
      const totalMem = memLine[1];
      const usedMem = memLine[2];
      const availableMem = memLine[6];
      
      healthChecks.push({
        type: 'memory',
        status: 'ok',
        message: `Memory: ${usedMem}/${totalMem} used, ${availableMem} available`,
        value: { total: totalMem, used: usedMem, available: availableMem }
      });
    } catch (error) {
      healthChecks.push({
        type: 'memory',
        status: 'error',
        message: 'Could not check memory usage',
        error: error.message
      });

    // Check git status
    try {
      const gitStatus = execSync('git status --porcelain', { cwd: this.projectRoot, stdio: 'pipe' }).toString();
      const hasChanges = gitStatus.trim().length > 0;
      
      healthChecks.push({
        type: 'git-status',
        status: hasChanges ? 'warning' : 'ok',
        message: hasChanges ? 'Uncommitted changes detected' : 'Git repository is clean',
        value: hasChanges
      });
    } catch (error) {
      healthChecks.push({
        type: 'git-status',
        status: 'error',
        message: 'Could not check git status',
        error: error.message
      });

    // Check PM2 status
    try {
      const pm2Status = execSync('pm2 status', { stdio: 'pipe' }).toString();
      const runningProcesses = pm2Status.split('\n').filter(line => line.includes('online')).length;
      
      healthChecks.push({
        type: 'pm2-status',
        status: 'ok',
        message: `${runningProcesses} PM2 processes running`,
        value: runningProcesses
      });
    } catch (error) {
      healthChecks.push({
        type: 'pm2-status',
        status: 'error',
        message: 'Could not check PM2 status',
        error: error.message
      });

    return healthChecks;

  async generateReport(sequentialResults, parallelResults, healthChecks) {
    const totalProcesses = sequentialResults.length + parallelResults.length;
    const successfulProcesses = sequentialResults.filter(r => r.success).length + 
                               parallelResults.filter(r => r.success).length;
    const failedProcesses = totalProcesses - successfulProcesses;

    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalProcesses,
        successfulProcesses,
        failedProcesses,
        successRate: Math.round((successfulProcesses / totalProcesses) * 100)
      },
      sequentialProcesses: sequentialResults,
      parallelProcesses: parallelResults,
      systemHealth: healthChecks,
      recommendations: []
    };

    // Generate recommendations based on results
    if (failedProcesses > 0) {
      report.recommendations.push({
        priority: 'high',
        message: `${failedProcesses} processes failed`,
        action: 'Review failed processes and fix underlying issues'
      });

    if (successRate < 80) {
      report.recommendations.push({
        priority: 'medium',
        message: 'Low success rate detected',
        action: 'Investigate and improve automation reliability'
      });

    const healthIssues = healthChecks.filter(check => check.status !== 'ok');
    if (healthIssues.length > 0) {
      report.recommendations.push({
        priority: 'medium',
        message: `${healthIssues.length} system health issues detected`,
        action: 'Address system health issues to improve automation performance'
      });

    return report;

  async saveReport(report) {
    try {
      const reportDir = path.dirname(this.reportFile);
      if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { recursive: true });

      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`Report saved to: ${this.reportFile}`);
    } catch (error) {
      this.log(`Error saving report: ${error.message}`);


  async run() {
    this.log('🎯 Starting Automation Orchestrator...');
    this.log(`Project root: ${this.projectRoot}`);

    try {
      // Create logs directory if it doesn't exist
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });

      // Check system health first
      const healthChecks = await this.checkSystemHealth();

      // Run sequential processes (critical fixes first)
      this.log('\n🔄 Phase 1: Running critical fixes sequentially...');
      const sequentialResults = await this.runSequentialProcesses();

      // Run parallel processes (monitoring and maintenance)
      this.log('\n⚡ Phase 2: Running monitoring processes in parallel...');
      const parallelResults = await this.runParallelProcesses();

      // Generate comprehensive report
      this.log('\n📊 Generating automation report...');
      const report = await this.generateReport(sequentialResults, parallelResults, healthChecks);

      // Save report
      await this.saveReport(report);

      const duration = Date.now() - this.startTime;

      // Log summary
      this.log('\n🎯 Automation Orchestrator Summary:');
      this.log(`Total processes: ${report.summary.totalProcesses}`);
      this.log(`Successful: ${report.summary.successfulProcesses}`);
      this.log(`Failed: ${report.summary.failedProcesses}`);
      this.log(`Success rate: ${report.summary.successRate}%`);
      this.log(`Duration: ${duration}ms`);

      // Log system health
      this.log('\n🏥 System Health:');
      healthChecks.forEach(check => {
        const status = check.status === 'ok' ? '✅' : check.status === 'warning' ? '⚠️' : '❌';
        this.log(`  ${status} ${check.type}: ${check.message}`);
      });

      // Log process results
      this.log('\n📋 Process Results:');
      [...sequentialResults, ...parallelResults].forEach(result => {
        const status = result.success ? '✅' : '❌';
        this.log(`  ${status} ${result.description}: ${result.success ? 'Success' : result.error}`);
      });

      if (report.recommendations.length > 0) {
        this.log('\n💡 Recommendations:');
        report.recommendations.forEach(rec => {
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`);
          this.log(`    Action: ${rec.action}`);
        });

      if (report.summary.successRate === 100) {
        this.log('\n🎉 All automation processes completed successfully!');
      } else {
        this.log(`\n⚠️  ${report.summary.failedProcesses} processes failed. Check logs for details.`);

    } catch (error) {
      this.log(`❌ Error running automation orchestrator: ${error.message}`);
      process.exit(1);



// Run the automation orchestrator
const orchestrator = new AutomationOrchestrator();
orchestrator.run().catch(error => {
  process.exit(1);
});
}}}}}}}}}}}}}}}}}}}}}}}}}}}}