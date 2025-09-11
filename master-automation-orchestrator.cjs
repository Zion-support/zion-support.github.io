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
        gitOperations: { status: 'pending' },
      },
      summary: {
        scriptsRun: 0,
        testsPassed: 0,
        testsFailed: 0,
        improvementsCreated: 0,
        gitOperationsCompleted: 0,
      },
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

      // Try to run as a command first
      execSync(`node ${scriptPath}`, { stdio: 'inherit' });

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
      // Check if health check script exists, if not create a basic one
      if (!fs.existsSync('./scripts/health-check.cjs')) {
        this.log('📝 Creating basic health check script...');
        const healthCheckScript = `#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

console.log('🔍 Running health check...');

// Check basic project structure
const checks = [
  { name: 'package.json', path: 'package.json', required: true },
  { name: 'node_modules', path: 'node_modules', required: true },
  { name: 'pages directory', path: 'pages', required: true }
];

let allPassed = true;

for (const check of checks) {
  if (fs.existsSync(check.path)) {
    console.log(\`✅ \${check.name} exists\`);
  } else {
    console.log(\`❌ \${check.name} missing\`);
    if (check.required) allPassed = false;
  }
}

if (allPassed) {
  console.log('✅ Health check passed');
  process.exit(0);
} else {
  console.log('❌ Health check failed');
  process.exit(1);
}
`;
        fs.writeFileSync('./scripts/health-check.cjs', healthCheckScript);
      }

      const success = await this.runScript(
        './scripts/health-check.cjs',
        'Health Check'
      );
      this.results.phases.healthCheck.status = success ? 'completed' : 'failed';
      this.results.phases.healthCheck.success = success;
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
      const success = await this.runScript(
        './scripts/simple-performance-monitor.cjs',
        'Performance Monitor'
      );
      this.results.phases.performanceMonitor.status = success
        ? 'completed'
        : 'failed';
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
      const success = await this.runScript(
        './scripts/simple-code-quality.cjs',
        'Code Quality Check'
      );
      this.results.phases.codeQuality.status = success ? 'completed' : 'failed';
      this.results.phases.codeQuality.success = success;
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
      const success = await this.runScript(
        './scripts/automation-test-runner.cjs',
        'Test Runner'
      );
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
      const success = await this.runScript(
        './scripts/git-automation.cjs',
        'Git Operations'
      );
      this.results.phases.gitOperations.status = success
        ? 'completed'
        : 'failed';
      this.results.phases.gitOperations.success = success;
      if (success) {
        this.results.summary.gitOperationsCompleted++;
      }
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
      const reportPath = path.join(
        this.reportsDir,
        'master-automation-report.json'
      );
      fs.writeFileSync(reportPath, JSON.stringify(this.results, null, 2));

      this.log('\n🎉 Master Automation Orchestrator completed successfully!');
      this.log(`📄 Final report saved to: ${reportPath}`);
      this.log(`📝 Detailed log saved to: ${this.logFile}`);

      // Print summary
      console.log('\n📊 SUMMARY:');
      console.log(`- Scripts Run: ${this.results.summary.scriptsRun}`);
      console.log(
        `- Improvements Created: ${this.results.summary.improvementsCreated}`
      );
      console.log(
        `- Git Operations Completed: ${this.results.summary.gitOperationsCompleted}`
      );

      return this.results;
    } catch (error) {
      this.log(`❌ Master automation failed: ${error.message}`);
      this.results.status = 'failed';
      this.results.error = error.message;
      this.results.failedAt = new Date().toISOString();

      const reportPath = path.join(
        this.reportsDir,
        'master-automation-report.json'
      );
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
