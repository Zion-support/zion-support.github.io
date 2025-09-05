const fs = require('fs');
const { execSync } = require('child_process');

class CompleteImprovementSuite {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = './automation-reports';
    this.stats = {
      "mergeConflicts": { resolved: 0, "failed": 0 },
      "syntaxErrors": { fixed: 0, "failed": 0 },
      "prsProcessed": { merged: 0, "failed": 0 },
      "improvements": { applied: 0, "failed": 0 }
    };
  }

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { "recursive": true });
    }
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  async runCommand(command, description, timeout = 60000) {
    this.log(`🚀 Starting: ${description}`);
    try {
      const result = execSync(command, {
        "cwd": this.projectRoot,
        "encoding": 'utf8',
        "timeout": timeout
      });
      this.log(`✅ Completed: ${description}`);
      return { "success": true, "output": result };
    } catch (error) {
      this.log(`❌ Failed: ${description} - ${error.message}`);
      return { "success": false, "error": error.message };
    }
  }

  async run() {
    this.log('🎯 Starting Complete Improvement Suite...');
    this.ensureDirectories();

    // Phase 1: Fix syntax errors
    this.log('📝 Phase 1: Fixing syntax errors...');
    const syntaxFixResult = await this.runCommand('npm run lint:fix', 'Fix syntax errors');
    if (syntaxFixResult.success) {
      this.stats.syntaxErrors.fixed++;
    } else {
      this.stats.syntaxErrors.failed++;
    }

    // Phase 2: Run tests
    this.log('🧪 Phase 2: Running tests...');
    const testResult = await this.runCommand('npm run test:smoke', 'Run smoke tests');
    if (testResult.success) {
      this.stats.improvements.applied++;
    } else {
      this.stats.improvements.failed++;
    }

    // Phase 3: Build application
    this.log('🏗️ Phase 3: Building application...');
    const buildResult = await this.runCommand('npm run build', 'Build application');
    if (buildResult.success) {
      this.stats.improvements.applied++;
    } else {
      this.stats.improvements.failed++;
    }

    // Phase 4: Generate report
    this.log('📊 Phase 4: Generating report...');
    this.generateReport();

    this.log('🎉 Complete Improvement Suite finished!');
    return this.stats;
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      stats: this.stats,
      summary: {
        totalProcessed: Object.values(this.stats).reduce((sum, category) => 
          sum + Object.values(category).reduce((catSum, val) => catSum + val, 0), 0
        ),
        successRate: this.calculateSuccessRate()
      }
    };

    const reportPath = `${this.reportsDir}/complete-improvement-report.json`;
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📊 Report saved to: ${reportPath}`);
  }

  calculateSuccessRate() {
    const total = Object.values(this.stats).reduce((sum, category) => 
      sum + Object.values(category).reduce((catSum, val) => catSum + val, 0), 0
    );
    const successful = Object.values(this.stats).reduce((sum, category) => 
      sum + (category.resolved || 0) + (category.fixed || 0) + (category.merged || 0) + (category.applied || 0), 0
    );
    return total > 0 ? Math.round((successful / total) * 100) : 0;
  }
}

// Run the suite if this file is executed directly
if (require.main === module) {
  const suite = new CompleteImprovementSuite();
  suite.run().catch(console.error);
}

module.exports = CompleteImprovementSuite;