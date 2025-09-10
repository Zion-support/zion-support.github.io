#!/""usr/bin/env"" node;
class $1 {
  constructor() {  this.projectRoot = "/workspace";
    this.logDir = path.join(this.projectRoot, "logs");
    this.reportDir = path.join(this.projectRoot, "error-reports");
    this.checkInterval = 5 * 60 * 1000; // 5 minutes;
    this.isRunning = false;
    this.ensureDirectories();