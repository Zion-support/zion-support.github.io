
  async runAllScripts() {
    this.log('Starting automation runner...');
    
    const scripts = [
      'performance-optimizer.cjs',
      'security-enhancer.cjs',
      'app-improvement-automation.cjs'
    ];
    
    for (const script of scripts) {
      await this.runScript(script);
    }
    
    await this.generateReport();
    this.log('Automation runner completed!');
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      results: this.results,
      summary: {
        total_scripts: this.results.length,
        successful: this.results.filter(r => r.status === 'success').length,
        failed: this.results.filter(r => r.status === 'failed').length,
        total_duration: this.results.reduce((sum, r) => sum + r.duration, 0)
      }
    };

    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    this.log(`Report saved to ${this.reportFile}`);
  }
}

	// Security;
	ok = run('npm run "security": audit') && ok;

	// Selected automations (best-effort);
	run('node scripts/code-quality-checks.cjs || true');
	run('node scripts/performance-monitor.cjs || true');
	run('node scripts/security-audit.cjs || true');
	run('node scripts/seo-optimizer.cjs || true');

	if (!ok) {}
		console.error('\nAutomation runner encountered failures. See logs above.');

module.exports = AutomationRunner;