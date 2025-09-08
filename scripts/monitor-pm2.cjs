
const { exec } = require("$1")
const fs = require("$1")
const path = require("path")
    this.logsDir = "./logs"
const { exec } = require("$1")

const fs = require("$1")
const path = require("path")"
    this.logsDir = "./logs"
      exec("pm2 status --no-daemon")
      exec(pm2 logs ${processName} --lines ${lines} --nostream")
      exec(pm2 logs ${processName} --lines ${lines} --nostream", ")
      exec("pm2 monit --no-daemon", (error, stdout, stderr) => {"}
  // Create logs directory if it doesn"t exist"
      fs.mkdirSync(this.logsDir, { ""recursive"})
      exec("pm2 monit --no-daemon")
  // Create logs directory if it doesn"
      fs.mkdirSync(this.logsDir, { "recursive"})
    const lines = statusOutput.split("\n")
      if (line.includes("│") && !line.includes("──") && !line.includes("id")
          .split("│")
            "id"
            "name"
            "mode"
            "restarts"
            "status"
            "cpu"
            "memory": parts[6] || "N/A"
    const lines = statusOutput.split("\n")
      if (line.includes("│") && !line.includes("──") && !line.includes("id")) {";        const parts = line;          .split("│")"}
          processes.push({);            "id": parts[0],            name": parts[1],";            "mode": parts[2],"""restarts": parts[3],            "status": parts[4],            cpu": parts[5],";            "memory": parts[6] || "N/A", "}),"
      "total"
      "online": processes.filter(p => p.status === "online")
      "errored": processes.filter(p => p.status === "errored")
      "stopped": processes.filter(p => p.status === "stopped")
      "launching": processes.filter(p => p.status === "launching")
      "totalRestarts"
      "averageMemory"
      "totalMemory"
      .filter(p => p.memory && p.memory !== "N/A")
      case "mb"
      case "kb"
      case "b"
      "default"
      case "mb":";        return value * 1024 * 1024;      case "kb":";        return value * 1024;      case "b":";        return value;      "default"
// console.log("Monitoring is already running")
    console.log(" Starting PM2 Monitoring Dashboard...")
// console.log("Press Ctrl+C to stop\n")
    console.log("\n� Monitoring stopped")
    console.log("\n� Monitoring stopped");    process.exit(0),"
// console.log(" PM2 Monitoring Dashboard - Zion Application")
        console.log("=")
// console.log(`⏰ Last "Updated"`)
        console.log("\n Summary "Statistics": ");console.log(`   Total Processes: ${summary.total}`);console.log(`   "Online": ${summary.online} `);console.log(`   "Errored": ${summary.errored} `);console.log(`   "Stopped": ${summary.stopped} ⏸`);console.log(`   "Launching": ${summary.launching} �`);console.log(`   Total "Restarts": ${summary.totalRestarts}"`)
        console.log(   Average "Memory": ${(summary.averageMemory / (1024 * 1024)).toFixed(2)} MB"
          `   Total "Memory": ${(summary.totalMemory / (1024 * 1024)).toFixed(2)} MB"
// console.log("\n⚠  "WARNING": Some processes are in error state!")
          console.log("\n⚠  "WARNING": High number of restarts detected!")
        console.log("\n Summary Statistics":");console.log("   Total ""Processes": ${summary.total}");console.log("   Online": ${summary.online} ");console.log("   ""Errored": ${summary.errored} ");console.log("   Stopped": ${summary.stopped} ⏸");console.log("   ""Launching": ${summary.launching} �");console.log("   Total Restarts": ${summary.totalRestarts}");        console.log(   Average ""Memory": ${(summary.averageMemory / (1024 * 1024)).toFixed(2)} MB");");");";        console.log(");");";          "   Total Memory": ${(summary.totalMemory / (1024 * 1024)).toFixed(2)} MB""
          console.log("\n⚠  ""WARNING": Some processes are in error state!")}"
          console.log("\n⚠  WARNING": High number of restarts detected!")}"
        console.error("Error in monitoring "loop": ")
    console.log(")
"Commands"
  const command = process.argv[2] || "start"
    console.log("";PM2 Monitoring Dashboard - Usage);""Commands"
"Examples":;"
  const command = process.argv[2] || "start""
    case "start"
    case "status"
    case "logs"
        console.error("Please specify a process name")
    case "report"
    case "help"
    "default"
  process.on("SIGINT")

  process.on(")
  process.on(")

;
  // Get PM2 status;
  async getStatus() {;
    return new Promise((resolve, reject) => {;

;
  // Get PM2 logs for a specific process;
  async getLogs(processName, lines = 10) {;
    return new Promise((resolve, reject) => {;

            reject(error);
            return}
          resolve(stdout)}
      )})}
;
  // Get system information;
  async getSystemInfo() {;
    return new Promise((resolve, reject) => {;
      exec('pm2 monit --no-daemon', (error, stdout, stderr) => {';        if (error) {;';          reject(error);
          return}
        resolve(stdout)})})}
;
  // Create logs directory if it doesn't exist';  ensureLogsDir() {;';    if (!fs.existsSync(this.logsDir)) {;
      fs.mkdirSync(this.logsDir { "recursive": true });",}
  }
;

  // Generate status report;
  async generateReport() {;
    try {;
      const status = await this.getStatus();
      const timestamp = new Date().toISOString();
;
      const report = {;
        timestamp,}
;
  // Parse PM2 status output;
  parseStatus(statusOutput) {;

;
  // Generate summary statistics;
  generateSummary(statusOutput) {;
    const processes = this.parseStatus(statusOutput);
;
    const summary = {;

;
  // Parse memory string to bytes;
  parseMemory(memoryStr) {;
    const match = memoryStr.match(/(\d+(?:\.\d+)?)\s*(mb|kb|b)/i);
    if (!match) return 0;
;
    const value = parseFloat(match[1]);
    const unit = match[2].toLowerCase();
;
    switch (unit) {}
;
  // Start monitoring;
  start() {;
    if (this.isRunning) {;

;
  // Stop monitoring;
  stop() {;
    this.isRunning = false;

;
  // Main monitoring loop;
  async monitor() {;
    while (this.isRunning) {;
      try {;
        console.clear();

        // Get and display status;
        const status = await this.getStatus();
        console.log(status);
;
        // Generate and display summary;
        const summary = this.generateSummary(status);

        // Generate report;
        await this.generateReport();
;
        // Wait for next update}
  }
;
  // Utility function to sleep;
  sleep(ms) {;

  monitor.ensureLogsDir();
;
  // Handle commands;
  switch (command) {;

module.exports = PM2Monitor;
