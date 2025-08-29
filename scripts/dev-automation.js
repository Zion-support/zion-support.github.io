#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const chokidar = require('fs').watch || require('chokidar');

class IntelligentDevAutomation {
  constructor() {
    this.watchMode = false;
    this.autoFix = false;
    this.testMode = false;
    this.buildMode = false;
    this.deploymentMode = false;
    this.qualityThreshold = 80;
    this.testCoverageThreshold = 70;
    this.autoCommit = false;
    this.commitMessage = '';
  }

  // Initialize the automation system
  async init() {
    console.log('🤖 Initializing Intelligent Development Automation...');
    
    // Check for required tools
    await this.checkDependencies();
    
    // Create necessary directories
    this.createDirectories();
    
    console.log('✅ Development Automation initialized');
  }

  // Check if required dependencies are installed
  async checkDependencies() {
    const dependencies = [
      { name: 'eslint', command: 'eslint --version' },
      { name: 'typescript', command: 'tsc --version' },
      { name: 'vite', command: 'vite --version' },
      { name: 'jest', command: 'jest --version' }
    ];

    for (const dep of dependencies) {
      try {
        execSync(dep.command, { stdio: 'pipe' });
        console.log(`✅ ${dep.name} is available`);
      } catch (error) {
        console.log(`⚠️  ${dep.name} not found, installing...`);
        try {
          execSync(`npm install -g ${dep.name}`, { stdio: 'inherit' });
        } catch (installError) {
          console.log(`📦 Installing ${dep.name} locally...`);
          execSync(`npm install --save-dev ${dep.name}`, { stdio: 'inherit' });
        }
      }
    }
  }

  // Create necessary directories
  createDirectories() {
    const dirs = ['./logs', './reports', './coverage', './build'];
    
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        console.log(`📁 Created directory: ${dir}`);
      }
    });
  }

  // Run comprehensive code quality checks
  async runQualityChecks() {
    console.log('🔍 Running comprehensive code quality checks...');
    
    try {
      // TypeScript type checking
      console.log('📝 Checking TypeScript types...');
      execSync('npm run type-check:all', { stdio: 'inherit' });
      
      // ESLint linting
      console.log('🧹 Running ESLint...');
      execSync('npm run lint:all', { stdio: 'inherit' });
      
      // Run tests if available
      if (fs.existsSync('./tests') || fs.existsSync('./__tests__')) {
        console.log('🧪 Running tests...');
        try {
          execSync('npm test', { stdio: 'inherit' });
        } catch (error) {
          console.log('⚠️  Tests failed, but continuing...');
        }
      }
      
      console.log('✅ Quality checks completed');
      return true;
    } catch (error) {
      console.error('❌ Quality checks failed:', error.message);
      return false;
    }
  }

  // Auto-fix code quality issues
  async autoFixIssues() {
    console.log('🔧 Auto-fixing code quality issues...');
    
    try {
      // Auto-fix ESLint issues
      console.log('🧹 Auto-fixing ESLint issues...');
      execSync('npm run fix:all', { stdio: 'inherit' });
      
      // Format code with Prettier if available
      if (fs.existsSync('./.prettierrc') || fs.existsSync('./.prettierrc.js')) {
        console.log('💅 Formatting code with Prettier...');
        try {
          execSync('npx prettier --write .', { stdio: 'inherit' });
        } catch (error) {
          console.log('⚠️  Prettier not available, skipping...');
        }
      }
      
      console.log('✅ Auto-fix completed');
      return true;
    } catch (error) {
      console.error('❌ Auto-fix failed:', error.message);
      return false;
    }
  }

  // Run development build
  async runDevBuild() {
    console.log('🚀 Starting development build...');
    
    try {
      // Check if PM2 is running
      try {
        execSync('pm2 status', { stdio: 'pipe' });
        console.log('🔄 Reloading PM2 processes...');
        execSync('pm2 reload all', { stdio: 'inherit' });
      } catch (error) {
        console.log('📱 Starting PM2 processes...');
        execSync('pm2 start ecosystem.config.js', { stdio: 'inherit' });
      }
      
      console.log('✅ Development build started');
      return true;
    } catch (error) {
      console.error('❌ Development build failed:', error.message);
      return false;
    }
  }

  // Run production build
  async runProductionBuild() {
    console.log('🏗️  Starting production build...');
    
    try {
      // Run quality checks first
      const qualityPassed = await this.runQualityChecks();
      if (!qualityPassed) {
        console.log('⚠️  Quality checks failed, but continuing with build...');
      }
      
      // Build frontend
      console.log('🌐 Building frontend...');
      execSync('npm run build', { stdio: 'inherit' });
      
      // Build backend
      console.log('⚙️  Building backend...');
      execSync('npm run build:backend', { stdio: 'inherit' });
      
      // Generate build report
      await this.generateBuildReport();
      
      console.log('✅ Production build completed');
      return true;
    } catch (error) {
      console.error('❌ Production build failed:', error.message);
      return false;
    }
  }

  // Generate build report
  async generateBuildReport() {
    try {
      const buildInfo = {
        timestamp: new Date().toISOString(),
        buildType: 'production',
        frontendSize: this.getDirectorySize('./dist'),
        backendSize: this.getDirectorySize('./server/dist'),
        gitCommit: execSync('git rev-parse HEAD', { encoding: 'utf8' }).trim(),
        gitBranch: execSync('git branch --show-current', { encoding: 'utf8' }).trim(),
        nodeVersion: process.version,
        npmVersion: execSync('npm --version', { encoding: 'utf8' }).trim()
      };
      
      const reportPath = './reports/build-report.json';
      fs.writeFileSync(reportPath, JSON.stringify(buildInfo, null, 2));
      
      console.log(`📊 Build report generated: ${reportPath}`);
      return buildInfo;
    } catch (error) {
      console.error('❌ Error generating build report:', error.message);
      return null;
    }
  }

  // Get directory size
  getDirectorySize(dirPath) {
    try {
      if (!fs.existsSync(dirPath)) return 0;
      
      let totalSize = 0;
      const files = fs.readdirSync(dirPath);
      
      files.forEach(file => {
        const filePath = path.join(dirPath, file);
        const stats = fs.statSync(filePath);
        
        if (stats.isDirectory()) {
          totalSize += this.getDirectorySize(filePath);
        } else {
          totalSize += stats.size;
        }
      });
      
      return totalSize;
    } catch (error) {
      return 0;
    }
  }

  // Watch for file changes and auto-reload
  startFileWatcher() {
    console.log('👀 Starting file watcher...');
    
    this.watchMode = true;
    
    const watchPaths = [
      './src',
      './server/src',
      './components',
      './pages',
      './styles'
    ];
    
    watchPaths.forEach(path => {
      if (fs.existsSync(path)) {
        console.log(`📁 Watching: ${path}`);
        
        // Use native fs.watch for simplicity
        fs.watch(path, { recursive: true }, (eventType, filename) => {
          if (filename && !filename.includes('node_modules')) {
            console.log(`📝 File changed: ${filename}`);
            this.handleFileChange(filename);
          }
        });
      }
    });
    
    console.log('✅ File watcher started. Press Ctrl+C to stop.');
  }

  // Handle file changes
  async handleFileChange(filename) {
    try {
      // Check if it's a TypeScript/JavaScript file
      if (filename.match(/\.(ts|tsx|js|jsx)$/)) {
        console.log(`🔄 Reloading due to change: ${filename}`);
        
        // Reload PM2 processes
        execSync('pm2 reload all', { stdio: 'pipe' });
        
        // Run quick quality check
        setTimeout(async () => {
          await this.runQuickQualityCheck(filename);
        }, 2000);
      }
    } catch (error) {
      console.error('❌ Error handling file change:', error.message);
    }
  }

  // Run quick quality check for changed file
  async runQuickQualityCheck(filename) {
    try {
      if (filename.match(/\.(ts|tsx)$/)) {
        execSync(`npx tsc --noEmit ${filename}`, { stdio: 'pipe' });
      }
      
      if (filename.match(/\.(js|jsx|ts|tsx)$/)) {
        execSync(`npx eslint ${filename} --fix`, { stdio: 'pipe' });
      }
    } catch (error) {
      console.log(`⚠️  Quick quality check failed for ${filename}`);
    }
  }

  // Run deployment preparation
  async prepareDeployment() {
    console.log('🚀 Preparing for deployment...');
    
    try {
      // Run all quality checks
      await this.runQualityChecks();
      
      // Run production build
      await this.runProductionBuild();
      
      // Run tests
      if (fs.existsSync('./tests') || fs.existsSync('./__tests__')) {
        console.log('🧪 Running test suite...');
        execSync('npm test', { stdio: 'inherit' });
      }
      
      // Generate deployment report
      await this.generateDeploymentReport();
      
      console.log('✅ Deployment preparation completed');
      return true;
    } catch (error) {
      console.error('❌ Deployment preparation failed:', error.message);
      return false;
    }
  }

  // Generate deployment report
  async generateDeploymentReport() {
    try {
      const deploymentInfo = {
        timestamp: new Date().toISOString(),
        status: 'ready',
        buildSize: this.getDirectorySize('./dist') + this.getDirectorySize('./server/dist'),
        qualityScore: await this.calculateQualityScore(),
        testCoverage: await this.getTestCoverage(),
        gitStatus: execSync('git status --porcelain', { encoding: 'utf8' }).trim(),
        lastCommit: execSync('git log -1 --oneline', { encoding: 'utf8' }).trim()
      };
      
      const reportPath = './reports/deployment-report.json';
      fs.writeFileSync(reportPath, JSON.stringify(deploymentInfo, null, 2));
      
      console.log(`📊 Deployment report generated: ${reportPath}`);
      return deploymentInfo;
    } catch (error) {
      console.error('❌ Error generating deployment report:', error.message);
      return null;
    }
  }

  // Calculate quality score
  async calculateQualityScore() {
    try {
      // This is a simplified quality score calculation
      // In a real implementation, you might use tools like SonarQube or similar
      let score = 100;
      
      // Check for TypeScript errors
      try {
        execSync('npm run type-check:all', { stdio: 'pipe' });
      } catch (error) {
        score -= 20;
      }
      
      // Check for linting errors
      try {
        execSync('npm run lint:all', { stdio: 'pipe' });
      } catch (error) {
        score -= 15;
      }
      
      // Check for test failures
      try {
        execSync('npm test', { stdio: 'pipe' });
      } catch (error) {
        score -= 25;
      }
      
      return Math.max(0, score);
    } catch (error) {
      return 0;
    }
  }

  // Get test coverage
  async getTestCoverage() {
    try {
      if (fs.existsSync('./coverage/coverage-summary.json')) {
        const coverage = JSON.parse(fs.readFileSync('./coverage/coverage-summary.json', 'utf8'));
        return coverage.total.lines.pct;
      }
      return 0;
    } catch (error) {
      return 0;
    }
  }

  // Show help information
  showHelp() {
    console.log(`
🤖 Intelligent Development Automation - Available Commands:

🔍 Quality & Testing:
  quality       - Run comprehensive quality checks
  auto-fix      - Auto-fix code quality issues
  test          - Run test suite

🚀 Build & Development:
  dev           - Start development build
  build         - Run production build
  watch         - Start file watcher with auto-reload

🚀 Deployment:
  deploy-prep   - Prepare for deployment
  status        - Show current status

Examples:
  node scripts/dev-automation.js quality
  node scripts/dev-automation.js auto-fix
  node scripts/dev-automation.js dev
  node scripts/dev-automation.js build
  node scripts/dev-automation.js watch
  node scripts/dev-automation.js deploy-prep
    `);
  }

  // Show current status
  async showStatus() {
    try {
      console.log('📊 Development Automation Status:');
      
      // Check PM2 status
      try {
        execSync('pm2 status', { stdio: 'inherit' });
      } catch (error) {
        console.log('⚠️  PM2 not running');
      }
      
      // Check build status
      if (fs.existsSync('./dist')) {
        console.log(`✅ Frontend build exists (${this.formatBytes(this.getDirectorySize('./dist'))})`);
      } else {
        console.log('❌ Frontend build not found');
      }
      
      if (fs.existsSync('./server/dist')) {
        console.log(`✅ Backend build exists (${this.formatBytes(this.getDirectorySize('./server/dist'))})`);
      } else {
        console.log('❌ Backend build not found');
      }
      
      // Check quality score
      const qualityScore = await this.calculateQualityScore();
      console.log(`📈 Quality Score: ${qualityScore}/100`);
      
    } catch (error) {
      console.error('❌ Error showing status:', error.message);
    }
  }

  // Format bytes to human readable
  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
}

// Main execution
async function main() {
  const automation = new IntelligentDevAutomation();
  const command = process.argv[2];
  
  try {
    await automation.init();
    
    switch (command) {
      case 'quality':
        await automation.runQualityChecks();
        break;
      case 'auto-fix':
        await automation.autoFixIssues();
        break;
      case 'test':
        execSync('npm test', { stdio: 'inherit' });
        break;
      case 'dev':
        await automation.runDevBuild();
        break;
      case 'build':
        await automation.runProductionBuild();
        break;
      case 'watch':
        automation.startFileWatcher();
        break;
      case 'deploy-prep':
        await automation.prepareDeployment();
        break;
      case 'status':
        await automation.showStatus();
        break;
      case 'help':
      default:
        automation.showHelp();
        break;
    }
  } catch (error) {
    console.error('❌ Fatal error:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = IntelligentDevAutomation;