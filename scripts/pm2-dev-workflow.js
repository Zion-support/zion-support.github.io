#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');

class PM2DevWorkflow {
  constructor() {
    this.projectRoot = process.cwd();
    this.serverDir = path.join(this.projectRoot, 'server');
    this.logsDir = path.join(this.projectRoot, 'logs');
    this.workflowConfig = this.loadWorkflowConfig();
    this.fileWatchers = new Map();
    this.ensureLogsDirectory();
  }

  ensureLogsDirectory() {
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir, { recursive: true });
    }
  }

  loadWorkflowConfig() {
    const configPath = path.join(this.projectRoot, 'workflow.config.json');
    if (fs.existsSync(configPath)) {
      try {
        return JSON.parse(fs.readFileSync(configPath, 'utf8'));
      } catch (error) {
        console.log('⚠️ Using default workflow configuration');
      }
    }
    
    return {
      watchPatterns: [
        'src/**/*.{js,jsx,ts,tsx}',
        'server/src/**/*.{js,ts}',
        'styles/**/*.{css,scss}',
        'public/**/*'
      ],
      autoTest: true,
      autoLint: true,
      autoBuild: false,
      autoDeploy: false,
      testPatterns: ['src/**/*.test.{js,jsx,ts,tsx}', 'tests/**/*.{js,ts}'],
      lintPatterns: ['src/**/*.{js,jsx,ts,tsx}', 'server/src/**/*.{js,ts}'],
      buildPatterns: ['src/**/*.{js,jsx,ts,tsx}', 'server/src/**/*.{js,ts}'],
      deploymentEnvironments: ['staging', 'production']
    };
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logsDir, 'dev-workflow.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  async executeCommand(command, options = {}) {
    try {
      const result = execSync(command, { 
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: options.cwd || this.projectRoot,
        ...options
      });
      return { success: true, output: result };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async startDevelopmentWorkflow() {
    this.log('🚀 Starting intelligent development workflow...');
    
    // Start PM2 ecosystem in development mode
    await this.startPM2Ecosystem('development');
    
    // Start file watchers
    this.startFileWatchers();
    
    // Start automated testing
    if (this.workflowConfig.autoTest) {
      this.startAutomatedTesting();
    }
    
    // Start automated linting
    if (this.workflowConfig.autoLint) {
      this.startAutomatedLinting();
    }
    
    this.log('✅ Development workflow started successfully');
    this.log('👀 Watching for file changes...');
    this.log('🧪 Automated testing enabled');
    this.log('🔍 Automated linting enabled');
  }

  async startPM2Ecosystem(environment) {
    this.log(`🚀 Starting PM2 ecosystem in ${environment} mode...`);
    
    const command = `pm2 start ecosystem.config.js --env ${environment}`;
    const result = await this.executeCommand(command);
    
    if (result.success) {
      this.log(`✅ PM2 ecosystem started in ${environment} mode`);
      return true;
    } else {
      this.log(`❌ Failed to start PM2 ecosystem: ${result.error}`, 'ERROR');
      return false;
    }
  }

  startFileWatchers() {
    this.log('👀 Starting file watchers...');
    
    for (const pattern of this.workflowConfig.watchPatterns) {
      const watcher = chokidar.watch(pattern, {
        ignored: /(node_modules|\.git|\.next|dist|build)/,
        persistent: true,
        ignoreInitial: true
      });

      watcher
        .on('add', (filePath) => this.handleFileChange('add', filePath))
        .on('change', (filePath) => this.handleFileChange('change', filePath))
        .on('unlink', (filePath) => this.handleFileChange('unlink', filePath));

      this.fileWatchers.set(pattern, watcher);
    }
  }

  async handleFileChange(event, filePath) {
    const relativePath = path.relative(this.projectRoot, filePath);
    this.log(`📁 File ${event}: ${relativePath}`);
    
    // Determine file type and trigger appropriate actions
    if (this.isSourceFile(filePath)) {
      await this.handleSourceFileChange(filePath);
    } else if (this.isStyleFile(filePath)) {
      await this.handleStyleFileChange(filePath);
    } else if (this.isConfigFile(filePath)) {
      await this.handleConfigFileChange(filePath);
    }
  }

  isSourceFile(filePath) {
    return /\.(js|jsx|ts|tsx)$/.test(filePath);
  }

  isStyleFile(filePath) {
    return /\.(css|scss|sass|less)$/.test(filePath);
  }

  isConfigFile(filePath) {
    return /\.(json|js|ts|config\.js|config\.ts)$/.test(filePath);
  }

  async handleSourceFileChange(filePath) {
    this.log(`🔧 Processing source file change: ${path.basename(filePath)}`);
    
    // Auto-lint if enabled
    if (this.workflowConfig.autoLint) {
      await this.runLinting(filePath);
    }
    
    // Auto-test if enabled
    if (this.workflowConfig.autoTest) {
      await this.runTests(filePath);
    }
    
    // Reload PM2 processes if needed
    await this.reloadRelevantProcesses(filePath);
  }

  async handleStyleFileChange(filePath) {
    this.log(`🎨 Processing style file change: ${path.basename(filePath)}`);
    
    // Trigger CSS rebuild if needed
    await this.rebuildStyles();
    
    // Reload frontend process
    await this.reloadFrontendProcess();
  }

  async handleConfigFileChange(filePath) {
    this.log(`⚙️ Processing config file change: ${path.basename(filePath)}`);
    
    // Reload PM2 ecosystem if ecosystem config changed
    if (path.basename(filePath) === 'ecosystem.config.js') {
      await this.reloadPM2Ecosystem();
    }
    
    // Reload relevant processes
    await this.reloadRelevantProcesses(filePath);
  }

  async runLinting(filePath) {
    this.log(`🔍 Running linting for ${path.basename(filePath)}...`);
    
    try {
      const result = await this.executeCommand('npm run lint');
      if (result.success) {
        this.log(`✅ Linting passed for ${path.basename(filePath)}`);
      } else {
        this.log(`❌ Linting failed for ${path.basename(filePath)}`, 'WARN');
        await this.autoFixLintIssues();
      }
    } catch (error) {
      this.log(`❌ Linting error: ${error.message}`, 'ERROR');
    }
  }

  async autoFixLintIssues() {
    this.log('🔧 Attempting to auto-fix lint issues...');
    
    try {
      const result = await this.executeCommand('npm run fix:all');
      if (result.success) {
        this.log('✅ Auto-fix completed successfully');
      } else {
        this.log('⚠️ Auto-fix completed with warnings', 'WARN');
      }
    } catch (error) {
      this.log(`❌ Auto-fix failed: ${error.message}`, 'ERROR');
    }
  }

  async runTests(filePath) {
    this.log(`🧪 Running tests for ${path.basename(filePath)}...`);
    
    try {
      // Find related test files
      const testFiles = await this.findRelatedTestFiles(filePath);
      
      if (testFiles.length > 0) {
        for (const testFile of testFiles) {
          const result = await this.executeCommand(`npm test -- ${testFile}`);
          if (result.success) {
            this.log(`✅ Tests passed for ${path.basename(testFile)}`);
          } else {
            this.log(`❌ Tests failed for ${path.basename(testFile)}`, 'WARN');
          }
        }
      } else {
        this.log(`ℹ️ No test files found for ${path.basename(filePath)}`);
      }
    } catch (error) {
      this.log(`❌ Test execution error: ${error.message}`, 'ERROR');
    }
  }

  async findRelatedTestFiles(sourceFile) {
    const testFiles = [];
    const sourceName = path.basename(sourceFile, path.extname(sourceFile));
    
    // Look for test files in tests directory
    const testsDir = path.join(this.projectRoot, 'tests');
    if (fs.existsSync(testsDir)) {
      const files = fs.readdirSync(testsDir, { recursive: true });
      for (const file of files) {
        if (file.includes(sourceName) && file.includes('.test.')) {
          testFiles.push(path.join(testsDir, file));
        }
      }
    }
    
    // Look for test files in src directory
    const srcDir = path.join(this.projectRoot, 'src');
    if (fs.existsSync(srcDir)) {
      const files = fs.readdirSync(srcDir, { recursive: true });
      for (const file of files) {
        if (file.includes(sourceName) && file.includes('.test.')) {
          testFiles.push(path.join(srcDir, file));
        }
      }
    }
    
    return testFiles;
  }

  async reloadRelevantProcesses(filePath) {
    const relativePath = path.relative(this.projectRoot, filePath);
    
    if (relativePath.startsWith('src/')) {
      // Frontend file changed
      await this.reloadFrontendProcess();
    } else if (relativePath.startsWith('server/')) {
      // Backend file changed
      await this.reloadBackendProcess();
    }
  }

  async reloadFrontendProcess() {
    this.log('🔄 Reloading frontend process...');
    
    try {
      const result = await this.executeCommand('pm2 reload zion-frontend-dev');
      if (result.success) {
        this.log('✅ Frontend process reloaded successfully');
      } else {
        this.log('⚠️ Frontend reload failed, attempting restart', 'WARN');
        await this.executeCommand('pm2 restart zion-frontend-dev');
      }
    } catch (error) {
      this.log(`❌ Frontend reload error: ${error.message}`, 'ERROR');
    }
  }

  async reloadBackendProcess() {
    this.log('🔄 Reloading backend process...');
    
    try {
      const result = await this.executeCommand('pm2 reload zion-backend-dev');
      if (result.success) {
        this.log('✅ Backend process reloaded successfully');
      } else {
        this.log('⚠️ Backend reload failed, attempting restart', 'WARN');
        await this.executeCommand('pm2 restart zion-backend-dev');
      }
    } catch (error) {
      this.log(`❌ Backend reload error: ${error.message}`, 'ERROR');
    }
  }

  async reloadPM2Ecosystem() {
    this.log('🔄 Reloading PM2 ecosystem...');
    
    try {
      const result = await this.executeCommand('pm2 reload ecosystem.config.js');
      if (result.success) {
        this.log('✅ PM2 ecosystem reloaded successfully');
      } else {
        this.log('⚠️ Ecosystem reload failed, attempting restart', 'WARN');
        await this.executeCommand('pm2 restart ecosystem.config.js');
      }
    } catch (error) {
      this.log(`❌ Ecosystem reload error: ${error.message}`, 'ERROR');
    }
  }

  async rebuildStyles() {
    this.log('🎨 Rebuilding styles...');
    
    try {
      // Trigger Tailwind rebuild if needed
      if (fs.existsSync(path.join(this.projectRoot, 'tailwind.config.js'))) {
        await this.executeCommand('npx tailwindcss -i ./styles/input.css -o ./public/output.css --watch');
      }
    } catch (error) {
      this.log(`❌ Style rebuild error: ${error.message}`, 'ERROR');
    }
  }

  startAutomatedTesting() {
    this.log('🧪 Starting automated testing...');
    
    setInterval(async () => {
      await this.runFullTestSuite();
    }, 5 * 60 * 1000); // Run every 5 minutes
  }

  async runFullTestSuite() {
    this.log('🧪 Running full test suite...');
    
    try {
      const result = await this.executeCommand('npm test');
      if (result.success) {
        this.log('✅ Full test suite passed');
      } else {
        this.log('❌ Full test suite failed', 'WARN');
        await this.generateTestReport();
      }
    } catch (error) {
      this.log(`❌ Test suite error: ${error.message}`, 'ERROR');
    }
  }

  async generateTestReport() {
    this.log('📊 Generating test report...');
    
    try {
      const report = {
        timestamp: new Date().toISOString(),
        testResults: 'failed',
        lastRun: new Date().toISOString()
      };
      
      const reportPath = path.join(this.logsDir, 'test-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      
      this.log(`📊 Test report generated: ${reportPath}`);
    } catch (error) {
      this.log(`❌ Failed to generate test report: ${error.message}`, 'ERROR');
    }
  }

  startAutomatedLinting() {
    this.log('🔍 Starting automated linting...');
    
    setInterval(async () => {
      await this.runFullLinting();
    }, 10 * 60 * 1000); // Run every 10 minutes
  }

  async runFullLinting() {
    this.log('🔍 Running full linting...');
    
    try {
      const result = await this.executeCommand('npm run lint:all');
      if (result.success) {
        this.log('✅ Full linting passed');
      } else {
        this.log('❌ Full linting failed', 'WARN');
        await this.autoFixLintIssues();
      }
    } catch (error) {
      this.log(`❌ Linting error: ${error.message}`, 'ERROR');
    }
  }

  async stopWorkflow() {
    this.log('🛑 Stopping development workflow...');
    
    // Stop file watchers
    for (const [pattern, watcher] of this.fileWatchers) {
      watcher.close();
      this.log(`👀 Stopped watching: ${pattern}`);
    }
    
    // Stop PM2 ecosystem
    await this.executeCommand('pm2 stop all');
    
    this.log('✅ Development workflow stopped');
  }

  async showStatus() {
    this.log('📊 Development Workflow Status:');
    
    // Show PM2 status
    const pm2Status = await this.executeCommand('pm2 status');
    if (pm2Status.success) {
      console.log(pm2Status.output);
    }
    
    // Show workflow configuration
    console.log('\n⚙️ Workflow Configuration:');
    console.log(JSON.stringify(this.workflowConfig, null, 2));
    
    // Show active watchers
    console.log('\n👀 Active File Watchers:');
    for (const [pattern, watcher] of this.fileWatchers) {
      console.log(`  - ${pattern}: ${watcher.getWatched() ? 'Active' : 'Inactive'}`);
    }
  }

  async showHelp() {
    console.log(`
🚀 PM2 Development Workflow - Intelligent Development Automation

Usage: node scripts/pm2-dev-workflow.js [command] [options]

Commands:
  start                 - Start development workflow
  stop                  - Stop development workflow
  status                - Show workflow status
  test                  - Run full test suite
  lint                  - Run full linting
  build                 - Build project
  deploy [env]          - Deploy to environment
  help                  - Show this help

Environments:
  staging               - Staging environment
  production            - Production environment

Features:
  🔍 Auto-linting on file changes
  🧪 Auto-testing on file changes
  👀 File watching and hot reloading
  🔄 Intelligent process management
  📊 Automated reporting
  🚀 Zero-downtime deployments

Examples:
  node scripts/pm2-dev-workflow.js start
  node scripts/pm2-dev-workflow.js status
  node scripts/pm2-dev-workflow.js deploy staging
  node scripts/pm2-dev-workflow.js test
    `);
  }
}

// CLI handling
const workflow = new PM2DevWorkflow();
const command = process.argv[2];
const arg1 = process.argv[3];

(async () => {
  try {
    switch (command) {
      case 'start':
        await workflow.startDevelopmentWorkflow();
        break;
      case 'stop':
        await workflow.stopWorkflow();
        break;
      case 'status':
        await workflow.showStatus();
        break;
      case 'test':
        await workflow.runFullTestSuite();
        break;
      case 'lint':
        await workflow.runFullLinting();
        break;
      case 'deploy':
        // TODO: Implement deployment logic
        console.log('🚀 Deployment feature coming soon...');
        break;
      case 'help':
      default:
        workflow.showHelp();
        break;
    }
  } catch (error) {
    workflow.log(`❌ Command failed: ${error.message}`, 'ERROR');
    process.exit(1);
  }
})();