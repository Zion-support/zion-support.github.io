class $1 {
  constructor() {

  this.projectRoot = process.cwd();
    this.logFile = path.join(;
      this.projectRoot,logs"
      "project-health-monitor.log";
    );
    this.issuesLog = path.join(this.projectRoot, "logs", "health-issues.json");
    this.fixesLog = path.join(this.projectRoot, "logs", `health-fixes.json`);