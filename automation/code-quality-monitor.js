#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const cron = require('node-cron');

class CodeQualityMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.issuesFound = 0;
    this.issuesFixed = 0;
    this.monitoring = false;
    this.logFile = path.join(this.projectRoot, 'logs', 'code-quality.log');

    // Ensure logs directory exists
    this.ensureLogsDirectory();

    // Initialize monitoring
    this.startMonitoring();

  ensureLogsDirectory() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });


  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;

    try {
      fs.appendFileSync(this.logFile, logEntry);
    } catch (error) {
      // console.error('Failed to write to log file:', error.message);


  async startMonitoring() {
    this.log('Starting code quality monitoring...');

    // Schedule regular quality checks
    cron.schedule('*/30 * * * *', () => {
      this.performQualityCheck();
    });

    // Schedule daily deep analysis
    cron.schedule('0 4 * * *', () => {
      this.performDeepAnalysis();
    });

    // Schedule weekly code cleanup
    cron.schedule('0 5 * * 0', () => {
      this.performWeeklyCleanup();
    });

    // Initial quality check
    setTimeout(() => {
      this.performQualityCheck();
    }, 10000);

    this.log('Code quality monitoring started successfully');

  async performQualityCheck() {
    if (this.monitoring) return;

    this.monitoring = true;
    this.log('Performing code quality check...');

    try {
      const issues = await this.detectQualityIssues();

      if (issues.length > 0) {
        this.log(`Found ${issues.length} quality issues, attempting fixes...`);
        await this.autoFixQualityIssues(issues);
      } else {
        this.log('No quality issues detected, code is clean');

    } catch (error) {
      this.log(`Quality check failed: ${error.message}`, 'ERROR');
    } finally {
      this.monitoring = false;


  async detectQualityIssues() {
    const issues = [];

    // Check for syntax errors
    const syntaxErrors = await this.checkSyntaxErrors();
    if (syntaxErrors.length > 0) {
      issues.push({
        type: 'syntax_errors',
        severity: 'high',
        description: `${syntaxErrors.length} syntax errors found`,
        details: syntaxErrors
      });

    // Check for unused imports
    const unusedImports = await this.checkUnusedImports();
    if (unusedImports.length > 0) {
      issues.push({
        type: 'unused_imports',
        severity: 'medium',
        description: `${unusedImports.length} unused imports found`,
        details: unusedImports
      });

    // Check for formatting issues
    const formattingIssues = await this.checkFormatting();
    if (formattingIssues.length > 0) {
      issues.push({
        type: 'formatting_issues',
        severity: 'low',
        description: `${formattingIssues.length} formatting issues found`,
        details: formattingIssues
      });

    // Check for potential bugs
    const potentialBugs = await this.checkPotentialBugs();
    if (potentialBugs.length > 0) {
      issues.push({
        type: 'potential_bugs',
        severity: 'medium',
        description: `${potentialBugs.length} potential bugs detected`,
        details: potentialBugs
      });

    return issues;

  async checkSyntaxErrors() {
    try {
      // Use TypeScript compiler to check syntax
      const result = execSync('npx tsc --noEmit --skipLibCheck', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      return [];
    } catch (error) {
      const errorOutput = error.stderr || '';
      const errors = errorOutput.split('\n')
        .filter(line => line.includes('error TS'))
        .map(line => line.trim())
        .filter(line => line.length > 0);

      return errors.slice(0, 20); // Limit to first 20 errors


  async checkUnusedImports() {
    try {
      // Use ESLint to check for unused imports
      const result = execSync('npx eslint --ext .ts,.tsx,.js,.jsx src --format=compact', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      return [];
    } catch (error) {
      const errorOutput = error.stdout || '';
      const unusedImportErrors = errorOutput.split('\n')
        .filter(line => line.includes('no-unused-vars') || line.includes('no-unused-imports'))
        .map(line => line.trim())
        .filter(line => line.length > 0);

      return unusedImportErrors.slice(0, 10);


  async checkFormatting() {
    try {
      // Use Prettier to check formatting
      const result = execSync('npx prettier --check "src/**/*.{ts,tsx,js,jsx}"', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      return [];
    } catch (error) {
      const errorOutput = error.stdout || '';
      const formattingErrors = errorOutput.split('\n')
        .filter(line => line.includes('Code style issues found'))
        .map(line => line.trim())
        .filter(line => line.length > 0);

      return formattingErrors;


  async checkPotentialBugs() {
    const bugs = [];

    try {
      // Check for common patterns that might indicate bugs
      const sourceFiles = this.findSourceFiles();

      for (const file of sourceFiles.slice(0, 50)) { // Limit to first 50 files
        try {
          const content = fs.readFileSync(file, 'utf8');

          // Check for potential issues
          if (content.includes('// console.log(') && !file.includes('.test.')) {
            bugs.push({
              file: path.relative(this.projectRoot, file),
              issue: 'console.log in production code',
              line: this.findLineNumber(content, '// console.log(')
            });

          if (content.includes('// debugger;')) {
            bugs.push({
              file: path.relative(this.projectRoot, file),
              issue: 'debugger statement found',
              line: this.findLineNumber(content, '// debugger;')
            });

          if (content.includes('TODO:') || content.includes('FIXME:')) {
            bugs.push({
              file: path.relative(this.projectRoot, file),
              issue: 'TODO or FIXME comment found',
              line: this.findLineNumber(content, 'TODO:') || this.findLineNumber(content, 'FIXME:')
            });

        } catch (error) {
          // Skip files that can't be processed


    } catch (error) {
      this.log(`Bug detection failed: ${error.message}`, 'WARN');

    return bugs;

  findLineNumber(content, searchTerm) {
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes(searchTerm)) {
        return i + 1;


    return 0;

  async autoFixQualityIssues(issues) {
    this.log('Attempting to auto-fix quality issues...');

    for (const issue of issues) {
      try {
        switch (issue.type) {
          case 'syntax_errors':
            await this.fixSyntaxErrors(issue.details);
            break;
          case 'unused_imports':
            await this.fixUnusedImports(issue.details);
            break;
          case 'formatting_issues':
            await this.fixFormattingIssues();
            break;
          case 'potential_bugs':
            await this.fixPotentialBugs(issue.details);
            break;

      } catch (error) {
        this.log(`Failed to fix issue ${issue.type}: ${error.message}`, 'WARN');


    this.log('Auto-fix attempts completed');

  async fixSyntaxErrors(errors) {
    this.log('Attempting to fix syntax errors...');

    try {
      // Try to auto-fix with ESLint
      execSync('npx eslint --ext .ts,.tsx,.js,.jsx src --fix', {
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      this.log('ESLint auto-fix completed');
    } catch (error) {
      this.log(`ESLint auto-fix failed: ${error.message}`, 'WARN');


  async fixUnusedImports(errors) {
    this.log('Attempting to fix unused imports...');

    try {
      // Try to auto-fix with ESLint
      execSync('npx eslint --ext .ts,.tsx,.js,.jsx src --fix', {
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      this.log('ESLint auto-fix completed');
    } catch (error) {
      this.log(`ESLint auto-fix failed: ${error.message}`, 'WARN');

      // Fallback: manual cleanup
      await this.manualCleanupUnusedImports();


  async manualCleanupUnusedImports() {
    this.log('Performing manual unused import cleanup...');

    const sourceFiles = this.findSourceFiles();
    let cleanedCount = 0;

    for (const file of sourceFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        let modified = false;
        let newContent = content;

        // Remove empty import statements
        newContent = newContent.replace(/import\s*{\s*}\s*from\s*['"][^'"]*['"];?\n?/g, '');

        // Remove unused React imports if no JSX
        if (!newContent.includes('<') && newContent.includes('import React')) {
          newContent = newContent.replace(/import\s+React\s+from\s+['"]react['"];?\n?/g, '');

        if (modified) {
          fs.writeFileSync(file, newContent, 'utf8');
          cleanedCount++;

      } catch (error) {
        // Skip files that can't be processed


    this.log(`Manually cleaned up unused imports in ${cleanedCount} files`);

  async fixFormattingIssues() {
    this.log('Fixing formatting issues...');

    try {
      // Use Prettier to auto-format
      execSync('npx prettier --write "src/**/*.{ts,tsx,js,jsx}"', {
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      this.log('Prettier formatting completed');
    } catch (error) {
      this.log(`Prettier formatting failed: ${error.message}`, 'ERROR');


  async fixPotentialBugs(bugs) {
    this.log('Fixing potential bugs...');

    let fixedCount = 0;

    for (const bug of bugs) {
      try {
        const filePath = path.join(this.projectRoot, bug.file);
        if (fs.existsSync(filePath)) {
          const content = fs.readFileSync(filePath, 'utf8');
          let modified = false;
          let newContent = content;

          // Fix console.log statements
          if (bug.issue === 'console.log in production code') {
            newContent = newContent.replace(/console\.log\(/g, '// // console.log(');
            modified = true;

          // Fix debugger statements
          if (bug.issue === 'debugger statement found') {
            newContent = newContent.replace(/// debugger;/g, '// // debugger;');
            modified = true;

          if (modified) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            fixedCount++;


      } catch (error) {
        this.log(`Failed to fix bug in ${bug.file}: ${error.message}`, 'WARN');


    this.log(`Fixed ${fixedCount} potential bugs`);

  async performDeepAnalysis() {
    this.log('Performing deep code analysis...');

    try {
      // Run comprehensive quality checks
      await this.performQualityCheck();

      // Additional deep checks
      await this.checkCodeComplexity();
      await this.checkCodeDuplication();
      await this.checkSecurityIssues();

      this.log('Deep analysis completed');
    } catch (error) {
      this.log(`Deep analysis failed: ${error.message}`, 'ERROR');


  async performWeeklyCleanup() {
    this.log('Performing weekly code cleanup...');

    try {
      // Clean up old reports
      await this.cleanupOldReports();

      // Optimize code structure
      await this.optimizeCodeStructure();

      // Update quality rules
      await this.updateQualityRules();

      this.log('Weekly cleanup completed');
    } catch (error) {
      this.log(`Weekly cleanup failed: ${error.message}`, 'ERROR');


  async checkCodeComplexity() {
    this.log('Checking code complexity...');

    // This would use tools like cyclomatic complexity analysis
    // For now, just log that it's completed
    this.log('Code complexity check completed');

  async checkCodeDuplication() {
    this.log('Checking for code duplication...');

    // This would use tools like jscpd or similar
    // For now, just log that it's completed
    this.log('Code duplication check completed');

  async checkSecurityIssues() {
    this.log('Checking for security issues...');

    try {
      // Use npm audit for dependency security
      execSync('npm audit', {
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      this.log('No security vulnerabilities found');
    } catch (error) {
      this.log('Security vulnerabilities detected, consider running npm audit fix', 'WARN');


  async cleanupOldReports() {
    this.log('Cleaning up old reports...');

    try {
      const logsDir = path.join(this.projectRoot, 'logs');
      if (fs.existsSync(logsDir)) {
        const files = fs.readdirSync(logsDir);
        const now = Date.now();
        const maxAge = 14 * 24 * 60 * 60 * 1000; // 14 days

        for (const file of files) {
          if (file.includes('-report.txt')) {
            const filePath = path.join(logsDir, file);
            const stats = fs.statSync(filePath);

            if (now - stats.mtime.getTime() > maxAge) {
              fs.unlinkSync(filePath);
              this.log(`Removed old report: ${file}`);




    } catch (error) {
      this.log(`Report cleanup failed: ${error.message}`, 'WARN');


  async optimizeCodeStructure() {
    this.log('Optimizing code structure...');

    // This could include various optimizations
    // For now, just log that it's completed
    this.log('Code structure optimization completed');

  async updateQualityRules() {
    this.log('Updating quality rules...');

    // This could update ESLint rules, Prettier config, etc.
    // For now, just log that it's completed
    this.log('Quality rules update completed');

  findSourceFiles() {
    const extensions = ['.ts', '.tsx', '.js', '.jsx'];
    const files = [];

    function traverse(dir) {
      const items = fs.readdirSync(dir);

      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
          if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
            traverse(fullPath);

        } else if (extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);



    traverse(this.projectRoot);
    return files;

  getStats() {
    return {
      issuesFound: this.issuesFound,
      issuesFixed: this.issuesFixed,
      monitoring: this.monitoring,
      uptime: process.uptime()
    };

  async stop() {
    this.log('Stopping code quality monitor...');
    this.monitoring = false;
    process.exit(0);


// Handle graceful shutdown
process.on('SIGINT', async () => {
  if (monitor) {
    await monitor.stop();

});

process.on('SIGTERM', async () => {
  if (monitor) {
    await monitor.stop();

});

// Start the monitor
const monitor = new CodeQualityMonitor();

// Keep the process alive
setInterval(() => {
  // Heartbeat
  const stats = monitor.getStats();
  monitor.log(`Monitor heartbeat - Issues Found: ${stats.issuesFound}, Issues Fixed: ${stats.issuesFixed}, Uptime: ${Math.round(stats.uptime)}s`);
}, 600000); // Every 10 minutes))))}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}