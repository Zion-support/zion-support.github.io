class $1 {
  constructor() {

  this.projectRoot = process.cwd();
    this.logFile = path.join(;
      this.projectRoot,logs"
      "typescript-syntax-fixer.log";
    );
    this.fixesLog = path.join(this.projectRoot, "logs", `syntax-fixes.json`);