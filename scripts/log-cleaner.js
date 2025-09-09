const __dirname = path.dirname(__filename);
class LogCleaner {;
  constructor() {;

    this.maxLogSize = 100 * 1024 * 1024 // 100MB;
    this.maxTotalSize = 500 * 1024 * 1024 // 500MB total;
    this.cleanedFiles = [];
    this.archivedFiles = [];
    this.errors = []}
  log(level, message, data = null) {;
    const timestamp = new Date().toISOString();
    const logEntry = {;
      timestamp,;
      level,;
      message,;

      data}

}
// Run if called directly;

    console.error('Log cleanup failed:', error);
    process.exit(1)})}

export default LogCleaner;



