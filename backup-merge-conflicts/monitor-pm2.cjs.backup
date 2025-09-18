<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env node;const { exec } = require("$1");"const fs = require("$1");"const path = require("path");class PM2Monitor {; constructor() {;" this.logsDir = "./logs"; this.interval = 5000; / 5 seconds; this.isRunning = false,}"const { exec } = require("$1");"const fs = require("$1");"const path = require("path")";class PM2Monitor {; constructor() {;" this.logsDir = "./logs"; this.interval = 5000; / 5 seconds; this.isRunning = false}; / Get PM2 status; async getStatus() {; return new Promise((resolve, reject) => {;" exec("pm2 status --no-daemon", (error, stdout, stderr) => {; if (error) {; reject(error); return,} resolve(stdout),}),}),}; / Get PM2 logs for a specific process; async getLogs(processName, lines = 10) {; return new Promise((resolve, reject) => {;" exec(pm2 logs ${processName} --lines ${lines} --nostream", (error, stdout, stderr) => {; if (error) {;" exec(pm2 logs ${processName} --lines ${lines} --nostream", "; (error, stdout, stderr) => { if (error) {; reject(error); return} resolve(stdout)} )})}; / Get system information; async getSystemInfo() {; return new Promise((resolve, reject) => {;" exec("pm2 monit --no-daemon", (error, stdout, stderr) => {"; if (error) { reject(error); return} resolve(stdout)})})};" / Create logs directory if it doesn"t exist"; ensureLogsDir() { if (!fs.existsSync(this.logsDir)) {;" fs.mkdirSync(this.logsDir, { "recursive: true })} }; / Get system information; async getSystemInfo() {; return new Promise((resolve, reject) => {;" exec("pm2 monit --no-daemon", (error, stdout, stderr) => {; if (error) {; reject(error); return,} resolve(stdout),}),}),};" / Create logs directory if it doesn"t exist; ensureLogsDir() {; if (!fs.existsSync(this.logsDir)) {;" fs.mkdirSync(this.logsDir, { recursive: true }),} },}; / Parse PM2 status output; parseStatus(statusOutput) {;" const lines = statusOutput.split("\n"); const processes = []; for (const line of lines) {;" if (line.includes("") && !line.includes("") && !line.includes("id")) {; const parts = line;" .split(""); .map(part => part.trim()); .filter(part => part); if (parts.length >= 6) {; processes.push({;" id: parts[0]," name: parts[1]," mode: parts[2]," restarts: parts[3]," status: parts[4]," cpu: parts[5]," memory: parts[6] | "N/A",}),} } }; return processes,}" const lines = statusOutput.split("\n"); const processes = []; for (const line of lines) {;" if (line.includes("") && !line.includes("") && !line.includes("id")) {"; const parts = line; .split("")"; .map(part => part.trim()); .filter(part => part); if (parts.length >= 6) {;" processes.push({); id: parts[0], name": parts[1],"; mode: parts[2],""restarts: parts[3], status: parts[4], cpu": parts[5],"; memory: parts[6] | "N/A", "}),"} } }; return processes}; / Generate summary statistics; generateSummary(statusOutput) {; const processes = this.parseStatus(statusOutput); const summary = {;" total: processes.length," online: processes.filter(p => p.status === "online").length," errored: processes.filter(p => p.status === "errored").length," stopped: processes.filter(p => p.status === "stopped").length," launching: processes.filter(p => p.status === "launching").length," totalRestarts: processes.reduce(; (sum, p) => sum + parseInt(p.restarts | 0), 0)," averageMemory: 0," totalMemory: 0,}; / Calculate memory statistics; const memoryValues = processes;" .filter(p => p.memory && p.memory !== "N/A"); .map(p => this.parseMemory(p.memory)); if (memoryValues.length > 0) {; summary.totalMemory = memoryValues.reduce((sum, mem) => sum + mem, 0); summary.averageMemory = summary.totalMemory / memoryValues.length,}; return summary,}; / Parse memory string to bytes; parseMemory(memoryStr) {; const match = memoryStr.match(/(\d+(?:\.\d+)?)\s*(mb|kb|b)/i); if (!match) return 0; const value = parseFloat(match[1]); const unit = match[2].toLowerCase(); switch (unit) {;" case mb: return value * 1024 * 1024;" case kb: return value * 1024;" case b: return value;" default: return 0,}" case mb:"; return value * 1024 * 1024; case kb:"; return value * 1024; case b:"; return value; default: return 0} }; / Start monitoring; start() {; if (this.isRunning) {;" console.log("Monitoring is already running"); return,}; this.isRunning = true;" console.log(" Starting PM2 Monitoring Dashboard.");" console.log("Press Ctrl+C to stop\n"); this.monitor(),}; / Stop monitoring; stop() {; this.isRunning = false;" console.log("\n Monitoring stopped"); process.exit(0),}" console.log("\n Monitoring stopped"); process.exit(0),"}; / Main monitoring loop; async monitor() {; while (this.isRunning) {; try {; console.clear();" console.log(" PM2 Monitoring Dashboard - Zion Application");" console.log("=".repeat(60));" console.log(` Last Updated: ${new Date().toLocaleString()}\n`); / Get and display status; const status = await this.getStatus(); console.log(status); / Generate and display summary; const summary = this.generateSummary(status);"` console.log("\n Summary Statistics: ");console.log(` Total Processes: ${summary.total}`);console.log(` Online: ${summary.online} `);console.log(` Errored: ${summary.errored} `);console.log(` Stopped: ${summary.stopped} `);console.log(` Launching: ${summary.launching} `);console.log(` Total Restarts: ${summary.totalRestarts}");" console.log( Average Memory: ${(summary.averageMemory / (1024 * 1024)).toFixed(2)} MB"); console.log(;"` ` Total Memory: ${(summary.totalMemory / (1024 * 1024)).toFixed(2)} MB"); / Check for issues; if (summary.errored > 0) {;" console.log("\n WARNING: Some processes are in error state!"),}; if (summary.totalRestarts > 50) {;" console.log("\n WARNING: High number of restarts detected!"),};" console.log("\n Summary Statistics":");console.log(" Total "Processes: ${summary.total}");console.log(" Online": ${summary.online} ");console.log(" "Errored: ${summary.errored} ");console.log(" Stopped": ${summary.stopped} ");console.log(" "Launching: ${summary.launching} ");console.log(" Total Restarts": ${summary.totalRestarts}"); console.log( Average "Memory: ${(summary.averageMemory / (1024 * 1024)).toFixed(2)} MB");");");"; console.log(");");"; " Total Memory": ${(summary.totalMemory / (1024 * 1024)).toFixed(2)} MB""); / Check for issues; if (summary.errored > 0) {;" console.log("\n "WARNING: Some processes are in error state!")}"; if (summary.totalRestarts > 50) {;" console.log("\n WARNING": High number of restarts detected!")}"; / Generate report; await this.generateReport(); / Wait for next update; await this.sleep(this.interval),} catch (error) {;" console.error("Error in monitoring loop: ", error); await this.sleep(this.interval),} } }; / Utility function to sleep; sleep(ms) {; return new Promise(resolve => setTimeout(resolve, ms)),}; / Display help information; showHelp() {;" console.log(";PM2 Monitoring Dashboard - Usage;"Commands: start - Start monitoring dashboard; status - Show current PM2 status; logs <name> - Show logs for specific process; report - Generate status report; help - Show this help message;Examples: node scripts/monitor-pm2.js start; node scripts/monitor-pm2.js status; node scripts/monitor-pm2.js logs console-error-fixer; node scripts/monitor-pm2.js report),}};/ Main execution;async function main() {; const monitor = new PM2Monitor();" const command = process.argv[2] | "start"; / Ensure logs directory exists; return new Promise(resolve => setTimeout(resolve, ms))}; / Display help information; showHelp() {;" console.log("";PM2 Monitoring Dashboard - Usage);"Commands: start - Start monitoring dashboard; status - Show current PM2 status; logs <name> - Show logs for specific process; report - Generate status report; help - Show this help message;"Examples:"; node scripts/monitor-pm2.js start; node scripts/monitor-pm2.js status; node scripts/monitor-pm2.js logs console-error-fixer; node scripts/monitor-pm2.js report)}};/ Main execution;async function main() {; const monitor = new PM2Monitor();" const command = process.argv[2] | "start""; / Ensure logs directory exists; monitor.ensureLogsDir(); / Handle commands; switch (command) {;" case start: monitor.start(); break;" case status: const status = await monitor.getStatus(); console.log(status); break;" case logs: const processName = process.argv[3]; if (!processName) {;" console.error("Please specify a process name"); process.exit(1),} const logs = await monitor.getLogs(processName); console.log(logs); break;" case report: const report = await monitor.generateReport(); console.log(JSON.stringify(report, null, 2)); break;" case help: monitor.showHelp(); break;"` default: console.error(`Unknown command: ${command}`); monitor.showHelp(); process.exit(1),}; / Handle graceful shutdown;" process.on("SIGINT", () => {; monitor.stop(),});" process.on("SIGTERM", () => {; monitor.stop(),}),};/ Run if called directly;if (require.main === module) {; main().catch(console.error),};module.exports = PM2Monitor""`"`
=======
#!/usr/bin/env node;
/**;
 * PM2 Monitoring Dashboard for Zion Application;
 * Provides real-time monitoring of all PM2 processes;
 */;
<<<<<<< HEAD
const { exec } = require("$1");
const fs = require("$1");
const path = require("path");
class PM2Monitor {;
  constructor() {;
    this.logsDir = "./logs";
    this.interval = 5000; // 5 seconds;
    this.isRunning = false,}
const { exec } = require("$1");
const fs = require("$1");
const path = require("path")";class PM2Monitor {;
  constructor() {;
    this.logsDir = "./logs";    this.interval = 5000; // 5 seconds;    this.isRunning = false}
;
  // Get PM2 status;
  async getStatus() {;
    return new Promise((resolve, reject) => {;
      exec("pm2 status --no-daemon", (error, stdout, stderr) => {;
        if (error) {;
          reject(error);
          return,}
        resolve(stdout),}),}),}
;
  // Get PM2 logs for a specific process;
  async getLogs(processName, lines = 10) {;
    return new Promise((resolve, reject) => {;
      exec(pm2 logs ${processName} --lines ${lines} --nostream",
        (error, stdout, stderr) => {;
          if (error) {;
      exec(pm2 logs ${processName} --lines ${lines} --nostream", ";        (error, stdout, stderr) => {          if (error) {;
            reject(error);
            return}
          resolve(stdout)}
      )})}
;
  // Get system information;
  async getSystemInfo() {;
    return new Promise((resolve, reject) => {;
      exec("pm2 monit --no-daemon", (error, stdout, stderr) => {";        if (error) {          reject(error);
          return}
        resolve(stdout)})})}
;
  // Create logs directory if it doesn"t exist";  ensureLogsDir() {    if (!fs.existsSync(this.logsDir)) {;
      fs.mkdirSync(this.logsDir, { ""recursive": true })}
  }
;
  // Get system information;
  async getSystemInfo() {;
    return new Promise((resolve, reject) => {;
      exec("pm2 monit --no-daemon", (error, stdout, stderr) => {;
        if (error) {;
          reject(error);
          return,}
        resolve(stdout),}),}),}
;
  // Create logs directory if it doesn"t exist;
  ensureLogsDir() {;
    if (!fs.existsSync(this.logsDir)) {;
      fs.mkdirSync(this.logsDir, { "recursive": true }),}
  }
,}
;
  // Parse PM2 status output;
  parseStatus(statusOutput) {;
    const lines = statusOutput.split("\n");
    const processes = [];
    for (const line of lines) {;
      if (line.includes("│") && !line.includes("──") && !line.includes("id")) {;
        const parts = line;
          .split("│");
          .map(part => part.trim());
          .filter(part => part);
        if (parts.length >= 6) {;
          processes.push({;
            "id": parts[0],
            "name": parts[1],
            "mode": parts[2],
            "restarts": parts[3],
            "status": parts[4],
            "cpu": parts[5],
            "memory": parts[6] || "N/A",,}),}
      }
    }
;
    return processes,}
    const lines = statusOutput.split("\n");    const processes = [];
    for (const line of lines) {;
      if (line.includes("│") && !line.includes("──") && !line.includes("id")) {";        const parts = line;          .split("│")";          .map(part => part.trim());          .filter(part => part);
        if (parts.length >= 6) {;
          processes.push({);            "id": parts[0],            name": parts[1],";            "mode": parts[2],"""restarts": parts[3],            "status": parts[4],            cpu": parts[5],";            "memory": parts[6] || "N/A", "}),"}
      }
    }
;
    return processes}
;
  // Generate summary statistics;
  generateSummary(statusOutput) {;
    const processes = this.parseStatus(statusOutput);
    const summary = {;
      "total": processes.length,
      "online": processes.filter(p => p.status === "online").length,
      "errored": processes.filter(p => p.status === "errored").length,
      "stopped": processes.filter(p => p.status === "stopped").length,
      "launching": processes.filter(p => p.status === "launching").length,
      "totalRestarts": processes.reduce(;
        (sum, p) => sum + parseInt(p.restarts || 0),
        0),
      "averageMemory": 0,
      "totalMemory": 0,,}
;
    // Calculate memory statistics;
    const memoryValues = processes;
      .filter(p => p.memory && p.memory !== "N/A");
      .map(p => this.parseMemory(p.memory));
    if (memoryValues.length > 0) {;
      summary.totalMemory = memoryValues.reduce((sum, mem) => sum + mem, 0);
      summary.averageMemory = summary.totalMemory / memoryValues.length,}
;
    return summary,}
;
  // Parse memory string to bytes;
  parseMemory(memoryStr) {;
    const match = memoryStr.match(/(\d+(?:\.\d+)?)\s*(mb|kb|b)/i);
    if (!match) return 0;
    const value = parseFloat(match[1]);
    const unit = match[2].toLowerCase();
    switch (unit) {;
      case "mb":;
        return value * 1024 * 1024;
      case "kb":;
        return value * 1024;
      case "b":;
        return value;
      "default": ;
        return 0,}
      case "mb":";        return value * 1024 * 1024;      case "kb":";        return value * 1024;      case "b":";        return value;      "default":;        return 0}
  }
;
  // Start monitoring;
  start() {;
    if (this.isRunning) {;
      
      return,}
;
    this.isRunning = true;
    
    
    this.monitor(),}
;
  // Stop monitoring;
  stop() {;
    this.isRunning = false;
    
    process.exit(0),}
        process.exit(0),"}
;
  // Main monitoring loop;
  async monitor() {;
    while (this.isRunning) {;
      try {;
        console.clear();
        
        );
        .toLocaleString()}\n`);
        // Get and display status;
        const status = await this.getStatus();
        
        // Generate and display summary;
        const summary = this.generateSummary(status);
        
        ).toFixed(2)} MB");
        ).toFixed(2)} MB");
        // Check for issues;
        if (summary.errored > 0) {;
          ,}
;
        if (summary.totalRestarts > 50) {;
          ,}
;
                ).toFixed(2)} MB");");");";        ");";          "   Total Memory": ${(summary.totalMemory / (1024 * 1024)).toFixed(2)} MB"");
        // Check for issues;
        if (summary.errored > 0) {;
          }";
        if (summary.totalRestarts > 50) {;
          }";
        // Generate report;
        await this.generateReport();
        // Wait for next update;
        await this.sleep(this.interval),} catch (error) {;
        console.error("Error in monitoring "loop": ", error);
        await this.sleep(this.interval),}
    }
  }
;
  // Utility function to sleep;
  sleep(ms) {;
    return new Promise(resolve => setTimeout(resolve, ms)),}
;
  // Display help information;
  showHelp() {;
    ,}
}
;
// Main execution;
async function main() {;
  const monitor = new PM2Monitor();
  const command = process.argv[2] || "start";
  // Ensure logs directory exists;
    return new Promise(resolve => setTimeout(resolve, ms))}
;
  // Display help information;
  showHelp() {;
    ""Commands": ;  start     - Start monitoring dashboard;
  status    - Show current PM2 status;
  logs <name> - Show logs for specific process;
  report    - Generate status report;
  help      - Show this help message;
"Examples":;";  node scripts/monitor-pm2.js start;
  node scripts/monitor-pm2.js status;
  node scripts/monitor-pm2.js logs console-error-fixer;
  node scripts/monitor-pm2.js report)}
}
;
// Main execution;
async function main() {;
  const monitor = new PM2Monitor();
  const command = process.argv[2] || "start"";  // Ensure logs directory exists;
  monitor.ensureLogsDir();
  // Handle commands;
  switch (command) {;
    case "start":;
      monitor.start();
      break;
    case "status":;
      const status = await monitor.getStatus();
      
      break;
    case "logs":;
      const processName = process.argv[3];
      if (!processName) {;
        console.error("Please specify a process name");
        process.exit(1),}
      const logs = await monitor.getLogs(processName);
      
      break;
    case "report":;
      const report = await monitor.generateReport();
      );
      break;
    case "help":;
      monitor.showHelp();
      break;
    "default": console.error(`Unknown command: ${command}`);
      monitor.showHelp();
      process.exit(1),}
;
  // Handle graceful shutdown;
  process.on("SIGINT", () => {;
    monitor.stop(),});
  process.on("SIGTERM', () => {;
    monitor.stop(),}),}
;
// Run if called directly;
if (require.main === module) {;
  main().catch(console.error),}
;
module.exports = PM2Monitor
=======
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
>>>>>>> main
>>>>>>> main
