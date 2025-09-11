class HealthChecker {
  constructor() {
    this.checks = [];
  }

  checkFileExists(filePath, description) {
    const exists = fs.existsSync(filePath);
    this.checks.push({
      name: description,
      status: exists ? 'PASS' : 'FAIL',
      details: exists ? 'File exists' : 'File missing'
    });
    return exists;
  }

  checkPackageJson() {
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      this.checks.push({
        name: 'Package.json validation',
        status: 'PASS',
        details: `Valid package.json (version: ${packageJson.version})`
      });
      return true;
    } catch (error) {
      this.checks.push({
        name: 'Package.json validation',
        status: 'FAIL',
        details: `Invalid package.json: ${error.message}`
      });
      return false;
    }
  }

  checkNodeModules() {
    const exists = fs.existsSync('node_modules');
    this.checks.push({
      name: 'Node modules',
      status: exists ? 'PASS' : 'FAIL',
      details: exists ? 'Dependencies installed' : 'Run npm install'
    });
    return exists;
  }

  generateReport() {
    const passed = this.checks.filter(c => c.status === 'PASS').length;
    const total = this.checks.length;
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        total,
        passed,
        failed: total - passed,
        healthScore: Math.round((passed / total) * 100)
      },
      checks: this.checks
    };
    
    const reportPath = path.join(process.cwd(), 'health-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`Health Check Report: ${passed}/${total} checks passed (${report.summary.healthScore}%)`);
    return report;
  }
}

const checker = new HealthChecker();
checker.checkFileExists('src/App.tsx', 'Main App component');
checker.checkFileExists('package.json', 'Package configuration');
checker.checkFileExists('next.config.js', 'Next.js configuration');
checker.checkPackageJson();
checker.checkNodeModules();
checker.generateReport();
