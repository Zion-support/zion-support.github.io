#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class MasterAutomationSuite {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'automation-reports');
    this.ensureDirectories();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  async runCommand(command, description) {
    this.log(`🚀 Starting: ${description}`);
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 600000, // 10 minutes timeout
      });
      this.log(`✅ Completed: ${description}`);
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ Failed: ${description} - ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async runScript(scriptPath, description) {
    this.log(`🚀 Starting: ${description}`);
    try {
      const result = execSync(`node ${scriptPath}`, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 300000,
      });
      this.log(`✅ Completed: ${description}`);
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ Failed: ${description} - ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async runAllAutomations() {
    this.log('🎯 Starting Master Automation Suite');
    
    const results = [];

    // 1. Run comprehensive error fixing
    results.push(await this.runScript('scripts/comprehensive-error-fixer.cjs', 'Comprehensive Error Fixing'));

    // 2. Run enhanced automation suite
    results.push(await this.runScript('scripts/enhanced-automation-suite.cjs', 'Enhanced Automation Suite'));

    // 3. Run app optimization
    results.push(await this.runScript('scripts/app-optimizer.cjs', 'App Optimization'));

    // 4. Run security audit
    results.push(await this.runScript('scripts/security-audit.cjs', 'Security Audit'));

    // 5. Run build test
    results.push(await this.runCommand('npm run build', 'Final Build Test'));

    // 6. Generate sitemap
    results.push(await this.runCommand('npm run sitemap', 'Sitemap Generation'));

    // 7. Run performance monitoring
    results.push(await this.runCommand('npm run perf:monitor', 'Performance Monitoring'));

    return results;
  }

  async generateMasterReport(results) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalTasks: results.length,
        successful: results.filter(r => r.success).length,
        failed: results.filter(r => !r.success).length,
        successRate: Math.round((results.filter(r => r.success).length / results.length) * 100)
      },
      results: results,
      recommendations: this.generateMasterRecommendations(results)
    };

    const reportFile = path.join(this.reportsDir, 'master-automation-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`📊 Master automation report generated: ${reportFile}`);
    return report;
  }

  generateMasterRecommendations(results) {
    const recommendations = [];

    const failedTasks = results.filter(r => !r.success);
    if (failedTasks.length > 0) {
      recommendations.push({
        type: 'critical',
        message: `${failedTasks.length} critical tasks failed. Review and fix immediately.`,
        tasks: failedTasks.map(t => t.description || 'Unknown task')
      });
    }

    const successRate = Math.round((results.filter(r => r.success).length / results.length) * 100);
    if (successRate < 80) {
      recommendations.push({
        type: 'performance',
        message: `Success rate is ${successRate}%. Consider improving automation reliability.`,
        currentRate: successRate
      });
    }

    // Check for specific improvements
    const buildResult = results.find(r => r.description === 'Final Build Test');
    if (buildResult && buildResult.success) {
      recommendations.push({
        type: 'success',
        message: 'Build is successful! Ready for deployment.',
        action: 'Proceed with deployment'
      });
    }

    return recommendations;
  }

  async run() {
    this.log('🎯 Starting Master Automation Suite');
    
    const results = await this.runAllAutomations();
    const report = await this.generateMasterReport(results);

    this.log('🎉 Master Automation Suite Completed');
    this.log(`📊 Summary: ${report.summary.successful}/${report.summary.totalTasks} tasks successful (${report.summary.successRate}%)`);
    
    if (report.recommendations.length > 0) {
      this.log('💡 Recommendations:');
      report.recommendations.forEach(rec => {
        this.log(`   - ${rec.message}`);
      });
    }

    // Final status
    if (report.summary.successRate >= 80) {
      this.log('🎉 Automation suite completed successfully! App is ready for deployment.');
    } else {
      this.log('⚠️ Some issues were found. Please review the recommendations above.');
    }

    return report;
  }
}

// Run the master automation suite
if (require.main === module) {
  const suite = new MasterAutomationSuite();
  suite.run().catch(console.error);
}

module.exports = MasterAutomationSuite;