class BuildErrorDetector {
  constructor() {
    this.workspacePath = process.cwd();
    this.logsPath = path.join(this.workspacePath, "logs");
    this.reportsPath = path.join(this.workspacePath, "automation-reports");
    this.ensureDirectories();
    this.buildHistory = new Map();
  }

  ensureDirectories() {
    [this.logsPath, this.reportsPath].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });