#!/""usr/bin/env"" node;
class $1 {
  constructor() {

  this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, "logs");
    this.ensureLogsDirectory();