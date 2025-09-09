      this.log(';info', ';Checking build errors...');
      const result = execSync(';npm run build', {;
        "cwd": path.join(__dirname,
,
  ..'),
        "encoding": 'utf8,
        "timeout": 300000 // 5 minutes});
      this.log(';info', ';Build check passed')      return { "success": true, "errors": [] }
    } catch (error) {;
      const errorOutput = error.stdout || error.message;
      const errors = this.parseBuildErrors(errorOutput);
      this.log(';error', `Build check failed with ${errors.length} errors`)      return { "success": false, errors }
    }
  }

  parseTypeScriptErrors(output) {
    const errors = [];


  parseESLintErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    for (const line of lines) {
      if (line.includes('error') || line.includes('warning')) {
        errors.push({
          type: 'eslint',
          message: line.trim(),
          raw: line
        });
      }
    }
    return errors;
  }

  parseBuildErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    for (const line of lines) {
      if (line.includes('Error: ') || line.includes('ERROR')) {
        errors.push({
          type: 'build',
          message: line.trim(),
          raw: line
        });
      }
    }
    return errors;
  }

  async triggerAutoFixer(errors) {
    try {
      this.log('info', `Triggering auto-fixer for ${errors.length} errors`);
      const errorFile = path.join(this.errorReportDir, `errors-${Date.now()}.json`);
      fs.writeFileSync(errorFile, JSON.stringify(errors, null, 2));

      const autoFixerScript = path.join(__dirname, 'auto-fixer.js');
      spawn('node', [autoFixerScript, errorFile], {
        detached: true,
        stdio: 'ignore'
      }).unref();

      this.log('info', 'Auto-fixer triggered successfully');
    } catch (error) {
      this.log('error', 'Failed to trigger auto-fixer', error);
    }
  }

  async generateReport() {
    const timestamp = new Date().toISOString();
    const reportFile = path.join(this.errorReportDir, `error-monitor-report-${Date.now()}.json`);
    const report = {
      timestamp,
      summary: {
        totalErrors: this.errors.length,
        typescriptErrors: this.errors.filter(e => e.type === 'typescript').length,
        eslintErrors: this.errors.filter(e => e.type === 'eslint').length,
        buildErrors: this.errors.filter(e => e.type === 'build').length
      },
      errors: this.errors,
      recommendations: this.generateRecommendations()
    };

    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log('info', `Error report generated: ${reportFile}`);
    return report;
  }

  generateRecommendations() {
    const recommendations = [];
    if (this.errors.some(e => e.type === 'typescript')) {
      recommendations.push('Run TypeScript auto-fixer to resolve type errors');
    }
    if (this.errors.some(e => e.type === 'eslint')) {
      recommendations.push('Run ESLint auto-fix to resolve code quality issues');
    }
    if (this.errors.some(e => e.type === 'build')) {
      recommendations.push('Check dependencies and build configuration');
    }
    return recommendations;
  }

  async run() {
    try {
      this.log('info', 'Starting error monitoring cycle...');

      const checks = await Promise.allSettled([
        this.checkTypeScriptErrors(),
        this.checkLintingErrors(),
        this.checkBuildErrors()
      ]);

      this.errors = [];
      checks.forEach((check, index) => {
        if (check.status === 'fulfilled' && !check.value.success) {
          this.errors.push(...check.value.errors);
        }
      });

      const report = await this.generateReport();

      if (this.errors.length >= this.errorThreshold) {
        await this.triggerAutoFixer(this.errors);
      }

      this.log('info', `Error monitoring cycle completed. Found ${this.errors.length} errors.`);
    } catch (error) {
      this.log('error', 'Error monitoring cycle failed', error);
    }
  }
}

const isMainModule = import.meta.url === `file://${process.argv[1]}`;
if (isMainModule) {
  const monitor = new ErrorMonitor();
  monitor.run().then(() => {
    setInterval(() => {
      monitor.run();
    }, 10 * 60 * 1000); // Run every 10 minutes
  }).catch(error => {
    console.error('Failed to start error monitor:', error);
    process.exit(1);
  });
}



