const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class IntelligentMonitoringSystem {
  constructor() {
    this.logsDir = path.join(__dirname, '../logs');
    this.ensureLogsDir();
    this.metrics = {
      performance: [],
      errors: [],
      warnings: [],
      successes: [],
    };
  }

  ensureLogsDir() {
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir, { recursive: true });
    }
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
    console.log(logMessage);

    const logFile = path.join(this.logsDir, 'intelligent-monitoring.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  async runCommand(command, description) {
    const startTime = Date.now();
    try {
      this.log(`Running: ${description}`);
      const output = execSync(command, {
        encoding: 'utf8',
        cwd: '/workspace',
        stdio: 'pipe',
      });
      const duration = Date.now() - startTime;
      this.log(`✅ ${description} completed successfully in ${duration}ms`);

      this.metrics.successes.push({
        command: description,
        duration,
        timestamp: new Date().toISOString(),
      });

      return { success: true, output, duration };
    } catch (error) {
      const duration = Date.now() - startTime;
      this.log(`❌ ${description} failed: ${error.message}`, 'error');

      this.metrics.errors.push({
        command: description,
        error: error.message,
        duration,
        timestamp: new Date().toISOString(),
      });

      return { success: false, error: error.message, duration };
    }
  }

  async monitorPerformance() {
    this.log('⚡ Monitoring performance...');

    const performanceChecks = [
      { command: 'npm run build', description: 'Build performance' },
      { command: 'npm run test:smoke', description: 'Test performance' },
    ];

    const results = [];
    for (const check of performanceChecks) {
      const result = await this.runCommand(check.command, check.description);
      results.push({ ...check, result });

      if (result.success) {
        this.metrics.performance.push({
          check: check.description,
          duration: result.duration,
          timestamp: new Date().toISOString(),
        });
      }
    }

    return { success: true, results };
  }

  async monitorHealth() {
    this.log('🏥 Monitoring health...');

    const healthChecks = [
      { command: 'npm run lint', description: 'Code health' },
      { command: 'npm run type-check', description: 'Type health' },
    ];

    const results = [];
    for (const check of healthChecks) {
      const result = await this.runCommand(check.command, check.description);
      results.push({ ...check, result });

      if (!result.success) {
        this.metrics.warnings.push({
          check: check.description,
          warning: result.error,
          timestamp: new Date().toISOString(),
        });
      }
    }

    return { success: true, results };
  }

  async monitorSecurity() {
    this.log('🔒 Monitoring security...');

    const securityChecks = [
      { command: 'npm audit', description: 'Security audit' },
      { command: 'npm run security:scan', description: 'Security scan' },
    ];

    const results = [];
    for (const check of securityChecks) {
      const result = await this.runCommand(check.command, check.description);
      results.push({ ...check, result });
    }

    return { success: true, results };
  }

  async generateIntelligentReport() {
    this.log('📊 Generating intelligent monitoring report...');

    const report = {
      timestamp: new Date().toISOString(),
      metrics: this.metrics,
      analysis: {
        totalChecks: this.metrics.successes.length + this.metrics.errors.length,
        successRate:
          (this.metrics.successes.length /
            (this.metrics.successes.length + this.metrics.errors.length)) *
          100,
        averagePerformance:
          this.metrics.performance.length > 0
            ? this.metrics.performance.reduce((sum, p) => sum + p.duration, 0) /
              this.metrics.performance.length
            : 0,
        errorCount: this.metrics.errors.length,
        warningCount: this.metrics.warnings.length,
      },
      recommendations: this.generateRecommendations(),
    };

    // Save report
    const reportFile = path.join(
      this.logsDir,
      `intelligent-monitoring-report-${Date.now()}.json`
    );
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

    this.log(`📄 Report saved to: ${reportFile}`);
    return report;
  }

  generateRecommendations() {
    const recommendations = [];

    if (this.metrics.errors.length > 0) {
      recommendations.push('Fix failing commands to improve system stability');
    }

    if (this.metrics.warnings.length > 0) {
      recommendations.push('Address warnings to improve code quality');
    }

    if (this.metrics.performance.length > 0) {
      const avgPerf =
        this.metrics.performance.reduce((sum, p) => sum + p.duration, 0) /
        this.metrics.performance.length;
      if (avgPerf > 10000) {
        recommendations.push('Consider optimizing slow operations');
      }
    }

    if (this.metrics.successes.length === 0) {
      recommendations.push(

      );
    }

    return recommendations;
  }

  async start() {
    this.log('🎯 Starting Intelligent Monitoring System...');

    try {
      await this.monitorPerformance();
      await this.monitorHealth();
      await this.monitorSecurity();

      const report = await this.generateIntelligentReport();

      this.log('🏁 Intelligent Monitoring System completed');
      this.log(`📊 Success rate: ${report.analysis.successRate.toFixed(2)}%`);
      this.log(`📊 Total checks: ${report.analysis.totalChecks}`);
      this.log(`📊 Errors: ${report.analysis.errorCount}`);
      this.log(`📊 Warnings: ${report.analysis.warningCount}`);

      return report;
    } catch (error) {
      this.log(
        `❌ Intelligent Monitoring System failed: ${error.message}`,

      );
      throw error;
    }
  }
}

// CLI interface
if (require.main === module) {
  const monitor = new IntelligentMonitoringSystem();
  monitor
    .start()
    .then(report => {
      console.log('Intelligent monitoring completed:', report.analysis);
      process.exit(0);
    })
    .catch(error => {
      console.error('Intelligent monitoring failed:', error);
      process.exit(1);
    });
}

module.exports = IntelligentMonitoringSystem;
