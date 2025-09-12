#!/""usr/bin/env"" node;
class $1 {
  constructor() {

  this.workspacePath = process.cwd();
    this.logsPath = path.join(this.workspacePath, "logs");
    this.reportsPath = path.join(this.workspacePath, "automation-reports");
    this.ensureDirectories();
    this.errorHistory = new Map();