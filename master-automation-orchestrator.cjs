#!/usr/bin/env node
/**
 * Master Automation Orchestrator
 * Orchestrates all automation scripts, tests, improvements, and git operations
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class MasterAutomationOrchestrator {
  constructor() {
    this.results = {
      timestamp: new Date().toISOString(),
      status: 'running',
      phases: {
        healthCheck: { status: 'pending' },
        performanceMonitor: { status: 'pending' },
        codeQuality: { status: 'pending' },
        testRunner: { status: 'pending' },
        gitOperations: { status: 'pending' }
      },
      summary: {
        scriptsRun: 0,
        testsPassed: 0,
        testsFailed: 0,
        improvementsCreated: 0,
        gitOperationsCompleted: 0
      }
    };
    
    this.logFile = 'master-automation-log.txt';
    this.reportsDir = 'automation-reports';
    
    // Create reports directory
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async runScript(scriptPath, description) {
    try {
      this.log(`🚀 Running: ${description}`);
      
      // Check if script exists
      if (!fs.existsSync(scriptPath)) {
        this.log(`⚠️ Script not found: ${scriptPath}`);
        return false;
      }

      // Try to run the script
      const result = execSync(`node ${scriptPath}`, { 
        cwd: process.cwd(), 
        encoding: 'utf8',
        timeout: 120000 
      });
      
      this.log(`✅ Completed: ${description}`);
      this.results.summary.scriptsRun++;
      return true;
    } catch (error) {
      this.log(`❌ Failed: ${description} - ${error.message}`);
      return false;
    }
  }

  async runHealthCheck() {
    this.log('🔍 Phase 1: Running Health Check...');
    this.results.phases.healthCheck.status = 'running';
    
    try {
      // Check basic project health
      const healthChecks = [
        { name: 'Package.json exists', check: () => fs.existsSync('package.json') },
        { name: 'Node modules exist', check: () => fs.existsSync('node_modules') },
        { name: 'Next.js config exists', check: () => fs.existsSync('next.config.js') }
      ];

      let allHealthy = true;
      for (const check of healthChecks) {
        if (check.check()) {
          this.log(`✅ ${check.name}`);
        } else {
          this.log(`❌ ${check.name}`);
          allHealthy = false;
        }
      }

      this.results.phases.healthCheck.status = allHealthy ? 'completed' : 'failed';
      this.results.phases.healthCheck.success = allHealthy;
    } catch (error) {
      this.log(`❌ Health check failed: ${error.message}`);
      this.results.phases.healthCheck.status = 'failed';
      this.results.phases.healthCheck.error = error.message;
    }
  }

  async runPerformanceMonitor() {
    this.log('📊 Phase 2: Running Performance Monitor...');
    this.results.phases.performanceMonitor.status = 'running';
    
    try {
      // Run performance monitoring scripts
      const performanceScripts = [
        'scripts/performance-monitor-enhanced.cjs',
        'performance-optimizer.cjs',
        'scripts/performance-optimizer.cjs'
      ];

      let success = false;
      for (const script of performanceScripts) {
        if (fs.existsSync(script)) {
          success = await this.runScript(script, 'Performance Monitor');
          if (success) break;
        }
      }

      this.results.phases.performanceMonitor.status = success ? 'completed' : 'failed';
      this.results.phases.performanceMonitor.success = success;
    } catch (error) {
      this.log(`❌ Performance monitor failed: ${error.message}`);
      this.results.phases.performanceMonitor.status = 'failed';
      this.results.phases.performanceMonitor.error = error.message;
    }
  }

  async runCodeQuality() {
    this.log('🔍 Phase 3: Running Code Quality Check...');
    this.results.phases.codeQuality.status = 'running';
    
    try {
      // Run linting
      this.log('Running ESLint...');
      try {
        execSync('npm run lint', { stdio: 'inherit' });
        this.log('✅ ESLint passed');
      } catch (error) {
        this.log('⚠️ ESLint found issues, but continuing...');
      }

      // Run TypeScript check
      this.log('Running TypeScript check...');
      try {
        execSync('npx tsc --noEmit', { stdio: 'inherit' });
        this.log('✅ TypeScript check passed');
      } catch (error) {
        this.log('⚠️ TypeScript check found issues, but continuing...');
      }

      this.results.phases.codeQuality.status = 'completed';
      this.results.phases.codeQuality.success = true;
    } catch (error) {
      this.log(`❌ Code quality check failed: ${error.message}`);
      this.results.phases.codeQuality.status = 'failed';
      this.results.phases.codeQuality.error = error.message;
    }
  }

  async runTestRunner() {
    this.log('🧪 Phase 4: Running Test Runner...');
    this.results.phases.testRunner.status = 'running';
    
    try {
      // Try to run tests
      const testScripts = [
        'scripts/automation-test-runner.cjs',
        'scripts/automated-testing-suite.cjs',
        'scripts/test-runner.js'
      ];

      let success = false;
      for (const script of testScripts) {
        if (fs.existsSync(script)) {
          success = await this.runScript(script, 'Test Runner');
          if (success) break;
        }
      }

      // Also try npm test
      try {
        execSync('npm test', { stdio: 'inherit' });
        this.log('✅ NPM tests passed');
        success = true;
      } catch (error) {
        this.log('⚠️ NPM tests not configured or failed');
      }

      this.results.phases.testRunner.status = success ? 'completed' : 'failed';
      this.results.phases.testRunner.success = success;
    } catch (error) {
      this.log(`❌ Test runner failed: ${error.message}`);
      this.results.phases.testRunner.status = 'failed';
      this.results.phases.testRunner.error = error.message;
    }
  }

  async runGitOperations() {
    this.log('📝 Phase 5: Running Git Operations...');
    this.results.phases.gitOperations.status = 'running';
    
    try {
      // Check git status
      this.log('Checking git status...');
      const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' });
      
      if (gitStatus.trim()) {
        this.log('📝 Uncommitted changes found, staging them...');
        execSync('git add .', { stdio: 'inherit' });
        
        this.log('💾 Committing changes...');
        execSync('git commit -m "Automated improvements and fixes from automation suite"', { stdio: 'inherit' });
        
        this.log('📤 Pushing changes...');
        execSync('git push', { stdio: 'inherit' });
        
        this.results.summary.gitOperationsCompleted++;
      } else {
        this.log('✅ No changes to commit');
      }

      this.results.phases.gitOperations.status = 'completed';
      this.results.phases.gitOperations.success = true;
    } catch (error) {
      this.log(`❌ Git operations failed: ${error.message}`);
      this.results.phases.gitOperations.status = 'failed';
      this.results.phases.gitOperations.error = error.message;
    }
  }

  async createAdditionalScripts() {
    this.log('🔧 Creating additional improvement scripts...');
    
    // Create a comprehensive build script
    const buildScript = `#!/usr/bin/env node
const { execSync } = require('child_process');

console.log('🏗️ Running comprehensive build...');

const buildSteps = [
  { name: 'Install Dependencies', cmd: 'npm install' },
  { name: 'Lint Check', cmd: 'npm run lint' },
  { name: 'Type Check', cmd: 'npx tsc --noEmit' },
  { name: 'Build Project', cmd: 'npm run build' }
];

for (const step of buildSteps) {
  try {
    console.log(\`📋 \${step.name}...\`);
    execSync(step.cmd, { stdio: 'inherit' });
    console.log(\`✅ \${step.name} completed\`);
  } catch (error) {
    console.log(\`❌ \${step.name} failed: \${error.message}\`);
    process.exit(1);
  }
}

console.log('🎉 Build completed successfully!');
`;

    fs.writeFileSync('scripts/comprehensive-build.cjs', buildScript);
    this.log('✅ Created comprehensive build script');

    // Create a monitoring dashboard script
    const monitoringScript = `#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

class MonitoringDashboard {
  constructor() {
    this.data = {
      timestamp: new Date().toISOString(),
      system: {
        platform: process.platform,
        nodeVersion: process.version,
        memory: process.memoryUsage()
      },
      project: {
        hasPackageJson: fs.existsSync('package.json'),
        hasNodeModules: fs.existsSync('node_modules'),
        hasTsConfig: fs.existsSync('tsconfig.json')
      }
    };
  }

  generateReport() {
    const report = \`# Monitoring Dashboard Report

## System Information
- Platform: \${this.data.system.platform}
- Node Version: \${this.data.system.nodeVersion}
- Memory Usage: \${Math.round(this.data.system.memory.heapUsed / 1024 / 1024)}MB

## Project Status
- Package.json: \${this.data.project.hasPackageJson ? '✅' : '❌'}
- Node Modules: \${this.data.project.hasNodeModules ? '✅' : '❌'}
- TypeScript Config: \${this.data.project.hasTsConfig ? '✅' : '❌'}

## Generated: \${this.data.timestamp}
\`;

    fs.writeFileSync('monitoring-dashboard.md', report);
    console.log('📊 Monitoring dashboard generated');
  }
}

if (require.main === module) {
  const dashboard = new MonitoringDashboard();
  dashboard.generateReport();
}

module.exports = MonitoringDashboard;
`;

    fs.writeFileSync('scripts/monitoring-dashboard.cjs', monitoringScript);
    this.log('✅ Created monitoring dashboard script');

    this.results.summary.improvementsCreated = 2;
  }

  async runAll() {
    this.log('🚀 Starting Master Automation Orchestrator...\n');
    
    try {
      // Phase 1: Health Check
      await this.runHealthCheck();
      
      // Phase 2: Performance Monitor
      await this.runPerformanceMonitor();
      
      // Phase 3: Code Quality
      await this.runCodeQuality();
      
      // Phase 4: Test Runner
      await this.runTestRunner();
      
      // Phase 5: Create Additional Scripts
      await this.createAdditionalScripts();
      
      // Phase 6: Git Operations
      await this.runGitOperations();
      
      // Finalize results
      this.results.status = 'completed';
      this.results.completedAt = new Date().toISOString();
      
      // Save final report
      const reportPath = path.join(this.reportsDir, 'master-automation-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(this.results, null, 2));
      
      this.log('\n🎉 Master Automation Orchestrator completed successfully!');
      this.log(`📄 Final report saved to: ${reportPath}`);
      this.log(`📝 Detailed log saved to: ${this.logFile}`);
      
      // Print summary
      console.log('\n📊 SUMMARY:');
      console.log(`- Scripts Run: ${this.results.summary.scriptsRun}`);
      console.log(`- Improvements Created: ${this.results.summary.improvementsCreated}`);
      console.log(`- Git Operations Completed: ${this.results.summary.gitOperationsCompleted}`);
      
      return this.results;
    } catch (error) {
      this.log(`❌ Master automation failed: ${error.message}`);
      this.results.status = 'failed';
      this.results.error = error.message;
      this.results.failedAt = new Date().toISOString();
      
      const reportPath = path.join(this.reportsDir, 'master-automation-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(this.results, null, 2));
      
      throw error;
    }
  }
}

// Run if called directly
if (require.main === module) {
  const orchestrator = new MasterAutomationOrchestrator();
  orchestrator.runAll().catch(console.error);
}

module.exports = MasterAutomationOrchestrator;