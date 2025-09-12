#!/""usr/bin/env"" node;
    try {
  // Initialize PM2 if not already running;
      await this.initializePM2()



      this.log("PM2 Error Automation Orchestrator started successfully", "success")

      // Keep the process running;
      this.keepAlive(),
} catch (error) {  this.log(`Error starting orchestrator: ${error.message  }`, `error`)
      this.isRunning = false;
      process.exit(1),
}
  }
  async initializePM2() {
  this.log(`Initializing PM2...`, "info")
    try {
  // Check if PM2 is installed;
      execSync("pm2 --version", { stdio: "pipe" })
      this.log("PM2 is installed", "info"),
} catch (error) {
  this.log("PM2 not found, installing...", "info")
      execSync("npm install -g pm2", { stdio: "inherit"   }),
}    // Install PM2 logrotate module;