  log(level, message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    console.log(logMessage);
    // Write to log file;
    const logFile = path.join(this.logDir, "auto-fixer.log");
    fs.appendFileSync(logFile, logMessage + "\n")}

  getAllSourceFiles() {
    const sourceFiles = [];
    const scanDirectory = (dir) => {
      if (!fs.existsSync(dir)) return;
      const files = fs.readdirSync(dir);