class $1 {
  constructor() {

  this.projectRoot = path.resolve(__dirname, "../../");
    this.logFile = path.join(;
      this.projectRoot,link-reports"
      "link-checker-automation.log";
    );
    this.reportFile = path.join(;
      this.projectRoot,link-reports"
      "link-checker-report.json";
    );
    this.ensureDirectories();}

  ensureDirectories() {
  const dirs = [""this."projectRoot/link-reports", ""this."projectRoot/link-check-results", ``];