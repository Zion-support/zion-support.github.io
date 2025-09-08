#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
>>>>>>> merged-prs-20250907-203621
// console.log(' Zion Tech Group - Enhanced Automation Suite')


class EnhancedAutomationSuite {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'automation-reports');
    this.logFile = path.join(this.reportsDir, 'enhanced-automation-suite.log');
    this.ensureDirectories()}

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir { recursive: true })}
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n')}

  async runCommand(command, description) {
    this.log(`🚀 Starting: ${description}`);
    try {
      const result = execSync(command {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 300000, // 5 minutes timeout
      });
      this.log(`✅ Completed: ${description}`);
      return { success: true, output: result }} catch (error) {
      this.log(`❌ Failed: ${description} - ${error.message}`);
      return { success: false, error: error.message }}
  }

  async runLintingAndFormatting() {
    this.log('🔍 Running Linting and Formatting');

    const commands = [
      {
        command: 'npm run format',
        description: 'Prettier Formatting' }, {
        command: 'npx eslint . --ext .js,.jsx,.ts,.tsx --fix --max-warnings 0',
        description: 'ESLint Auto-fix' } ];

    const results = [];
    for (const cmd of commands) {
      const result = await this.runCommand(cmd.command, cmd.description);
      results.push({ ...cmd, ...result })}

    return results}

  async runTypeChecking() {
    this.log('🔍 Running TypeScript Type Checking');

    try {
      const result = await this.runCommand(
        'npx tsc --noEmit',
        'TypeScript Type Check'
      );
      return result} catch (error) {
      this.log(`⚠️ Type checking failed: ${error.message}`);
      return { success: false, error: error.message }}
  }

  async runBuild() {
    this.log('🏗️ Running Build Process');

    try {
      const result = await this.runCommand('npm run build', 'Next.js Build');
      return result} catch (error) {
      this.log(`⚠️ Build failed: ${error.message}`);
      return { success: false, error: error.message }}
  }

  async analyzeCodeQuality() {
    this.log('📊 Analyzing Code Quality');

    const analysis = {
      totalFiles: 0,
      jsFiles: 0,
      tsFiles: 0,
      jsxFiles: 0,
      tsxFiles: 0,
      issues: [] };

    const srcDir = path.join(this.projectRoot, 'src');
    if (fs.existsSync(srcDir)) {
      const files = this.getAllFiles(srcDir, ['.js', '.jsx', '.ts', '.tsx']);
      analysis.totalFiles = files.length;

      for (const file of files) {
        const ext = path.extname(file);
        switch (ext) {
          case '.js':
            analysis.jsFiles++;
            break;
          case '.ts':
            analysis.tsFiles++;
            break;
          case '.jsx':
            analysis.jsxFiles++;
            break;
          case '.tsx':
            analysis.tsxFiles++;
            break}

        // Check for common issues
        try {
          const content = fs.readFileSync(file, 'utf8');
          if (content.includes('console.log')) {
            analysis.issues.push({
              file,
              type: 'console.log',
              message: 'Console.log found' })}
          if (content.includes('TODO') || content.includes('FIXME')) {
            analysis.issues.push({
              file,
              type: 'todo',
              message: 'TODO/FIXME found' })}
        } catch (error) {
          analysis.issues.push({
            file,
            type: 'read_error',
            message: error.message })}
      }
    }

    return analysis}

  getAllFiles(dir, extensions) {
    let files = [];
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        files = files.concat(this.getAllFiles(fullPath, extensions))} else if (extensions.includes(path.extname(item))) {
        files.push(fullPath)}
    }

    return files}

  async generateReport(results) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalTasks: results.length,
        successful: results.filter(r => r.success).length,
        failed: results.filter(r => !r.success).length },
      results: results,
      recommendations: this.generateRecommendations(results) };

    const reportFile = path.join(
      this.reportsDir,
      'enhanced-automation-report.json'
    );
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

    this.log(`📊 Report generated: ${reportFile}`);
    return report}

  generateRecommendations(results) {
    const recommendations = [];

    const failedTasks = results.filter(r => !r.success);
    if (failedTasks.length > 0) {
      recommendations.push({
        type: 'error',
        message: `${failedTasks.length} tasks failed. Review and fix the issues.`,
        tasks: failedTasks.map(t => t.description) })}

    const lintingResult = results.find(
      r => r.description === 'ESLint Auto-fix'
    );
    if (lintingResult && !lintingResult.success) {
      recommendations.push({
        type: 'linting',
        message: 'ESLint issues found. Consider fixing them manually.',
        action: 'Run: npx eslint . --ext .js,.jsx,.ts,.tsx' })}

    return recommendations}

  async run() {
    this.log('🎯 Starting Enhanced Automation Suite');

    const results = [];

    // Run linting and formatting
    const lintingResults = await this.runLintingAndFormatting();
    results.push(...lintingResults);

    // Run type checking
    const typeCheckResult = await this.runTypeChecking();
    results.push(typeCheckResult);

    // Run build
    const buildResult = await this.runBuild();
    results.push(buildResult);

    // Analyze code quality
    const codeQuality = await this.analyzeCodeQuality();
    this.log(
      `📊 Code Quality Analysis: ${codeQuality.totalFiles} files analyzed`
    );
    this.log(`   - JS: ${codeQuality.jsFiles}, TS: ${codeQuality.tsFiles}`);
    this.log(`   - JSX: ${codeQuality.jsxFiles}, TSX: ${codeQuality.tsxFiles}`);
    this.log(`   - Issues found: ${codeQuality.issues.length}`);

    // Generate report
    const report = await this.generateReport(results);

    this.log('🎉 Enhanced Automation Suite Completed');
    this.log(
      `📊 Summary: ${report.summary.successful}/${report.summary.totalTasks} successful`
    );

    if (report.recommendations.length > 0) {
      this.log('💡 Recommendations:');
      report.recommendations.forEach(rec => {
        this.log(`   - ${rec.message}`)})}

    return report}
}

// Run the automation suite
if (require.main === module) {
  const suite = new EnhancedAutomationSuite();
  suite.run().catch(console.error)}

module.exports = EnhancedAutomationSuite;
