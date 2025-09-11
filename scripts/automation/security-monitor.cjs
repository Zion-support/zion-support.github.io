  this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, "error-reports", `security-monitor-report.json`);
    this.fixesApplied = [];
    this.errorsFound = [];
    this.startTime = Date.now();}

  log(message, type = `info`) {
  const timestamp = new Date().toISOString();
monitor.run().catch(console.error);
