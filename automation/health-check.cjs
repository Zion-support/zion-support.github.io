=======
=======
    return healthy;
  }
  async checkDependencies() {
    this.log('📦 Checking dependencies...');
    const depCheck = await this.runCommand(
      'npm audit --audit-level=moderate',
      'Dependency security check'
    );
    if (depCheck.success) {
      this.log('✅ Dependencies are secure');
    } else {
      this.log('⚠️ Dependency issues found', 'WARN');
    }
  }
  async checkDiskSpace() {
    this.log('💾 Checking disk space...');
    const diskCheck = await this.runCommand(
      'df -h /workspace',
      'Disk space check'
    );
    if (diskCheck.success) {
      this.log('✅ Disk space check completed');
    }
  }
  async generateHealthReport() {
    this.log('📊 Generating health report...');
    const report = {
      timestamp: new Date().toISOString(),
      healthStatus: this.healthStatus,
      lastCheck: this.lastCheck,
      checks: {
        application: 'completed',
        dependencies: 'completed',
        diskSpace: 'completed'
      },
      recommendations: this.generateRecommendations()
    };
    const reportFile = path.join(__dirname, 'logs', 'health-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`📄 Health report saved to: ${reportFile}`);
  }
  generateRecommendations() {
    const recommendations = [];
    if (this.healthStatus === 'unhealthy') {
      recommendations.push('Address build or test failures');
      recommendations.push('Check application logs for errors');
    }
    recommendations.push('Monitor application performance regularly');
    recommendations.push('Set up automated alerts for critical issues');
    return recommendations;
  }
  async check() {
    this.log('🔍 Starting health check...');
    await this.checkApplicationHealth();
    await this.checkDependencies();
    await this.checkDiskSpace();
    await this.generateHealthReport();
    this.log('🎉 Health check completed!');
  }
  async start() {
    this.log('🚀 Health Check Monitor started');
    // Initial health check
    await this.check();
    // Set up periodic health checks every 5 minutes
    setInterval(async () => {
      await this.check();
    }, 5 * 60 * 1000);
    this.log('🔄 Health Check Monitor is running. Checks every 5 minutes.');
  }
}
// Run if called directly
if (require.main === module) {
  const monitor = new HealthCheckMonitor();
  monitor.start().catch(console.error);
}
module.exports = HealthCheckMonitor;
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
=======
#!/usr/bin/env node
const { execSync } = require('child_process');
console.log('🏥 Running Health Check...');
const checks = [
  { name: 'Build Status', command: 'npm run build' },
  { name: 'Test Status', command: 'npm run test:smoke' },
  { name: 'Lint Status', command: 'npm run lint:check' },
  { name: 'Type Check', command: 'npm run type-check' }
];
checks.forEach(check => {
  try {
    execSync(check.command, { stdio: 'pipe' });
    console.log(`✅ ${check.name}: OK`);
  } catch (error) {
    console.log(`❌ ${check.name}: FAILED`);
  }
});
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d