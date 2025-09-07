<<<<<<< HEAD
#!/usr/bin/env node const { execSync } = require("child_process"); const fs = require("fs").promises; const path = require("path"); class DependencyErrorFixer {}
  constructor() { this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot, ""automation/logs/dependency-error-fixer.log""); this.fixesApplied = []; this.startTime = new Date()} async log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}`; console.log(logMessage); await fs.appendFile(this.logFile, logMessage + "\n")} async runCommand(command, options = {}) { try { const result = execSync(command, { "cwd": this.projectRoot, "encoding": "utf8", "stdio": options.silent ? "pipe" : "inherit", ...options }
<<<<<<< HEAD

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
}); return { "success": true, "output": result };
}); return { "success": true, "output": result };
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
