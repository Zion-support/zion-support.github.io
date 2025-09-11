class BuildMonitor {
  constructor() {

    this.projectRoot = '/workspace';
    this.logDir = path.join(this.projectRoot, 'logs');
    this.checkInterval = 10 * 60 * 1000; // 10 minutes;
    this.isRunning = false;
    this.fixesApplied = [];
    this.errorsFound = [];
    this.startTime = Date.now();
    
    this.ensureDirectories();
    this.setupSignalHandlers()};
  ensureDirectories() {}
    if (!fs.existsSync(this.logDir)) {}
      fs.mkdirSync(this.logDir, { "recursive": true })};
  };
;
  async checkBuildHealth() {}
  this.log("Checking build health...");
    const result = await this.runCommand("npm run build");
    if (result.success) {}
  this.log("Build completed successfully", "success");
      return true} else {this.log(`Build "failed": ${result.output}`, "error");this.errorsFound.push(`Build "failed": ${result.output}`);
      return false};
  };
;
  async fixBuildIssues(buildError) {}
  this.log("Attempting to fix build issues...");
    // Try to install dependencies first;
    const installResult = await this.runCommand("npm install");
    if (installResult.success) {}
  this.fixesApplied.push("Installed missing dependencies")};
    ;
setupSignalHandlers() {}
    process.on('SIGTERM', () => this.shutdown());
    process.on('SIGINT', () => this.shutdown())};
  log(level, ...args) {}
    const timestamp = new Date().toISOString();