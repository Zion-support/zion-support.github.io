<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env node;const fs = require("$1");"const path = require("$1");"const { execSync, spawn } = require("child_process");class PM2AutomationLauncher {; constructor() {; this.processes = new Map(); this.logFile = path.join(;" __dirname,."," "logs",pm2-automation-launcher.log"; this.logFile = path.join(;" __dirname,."," "logs",pm2-automation-launcher.log"); this.ensureLogDirectory(); this.config = this.loadConfig(),}"const fs = require("fs")";const path = require("path")";const { execSync, spawn } = require("child_process")"";class PM2AutomationLauncher {; constructor() {; this.processes = new Map();" this.logFile = path.join(); __dirname,.", ""logs",pm2-automation-launcher.log"");"; this.ensureLogDirectory(); this.config = this.loadConfig(),} ensureLogDirectory() {; const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) {;" fs.mkdirSync(logDir, { recursive: true }),}" fs.mkdirSync(logDir, { "recursive: true })} }; log(message) {; const timestamp = new Date().toISOString();" const logMessage = `[${timestamp}] ${message}\n`;"; console.log(message); fs.appendFileSync(this.logFile, logMessage)}; loadConfig() {; try {;" const configPath = path.join(__dirname, ".", "ecosystem.config.cjs");"; if (fs.existsSync(configPath)) {"; delete require.cache[require.resolve(configPath)]; return require(configPath),}" throw new Error("ecosystem.config.cjs not found");"} catch (error) {this.log(" Failed to load "config: ${error.message}");"; return null,} }; loadConfig() {; try {;" const configPath = path.join(__dirname, ".", "ecosystem.config.cjs"); if (fs.existsSync(configPath)) {; loadConfig() {; try {;" const configPath = path.join(__dirname, ".", "ecosystem.config.cjs"); if (fs.existsSync(configPath)) {; delete require.cache[require.resolve(configPath)]; return require(configPath),}"` throw new Error("ecosystem.config.cjs not found"),} catch (error) { this.log(` Failed to load config: ${error.message }`); return null,} }; async checkPM2Status() {; try {;" const output = execSync("pm2 jlist", { encoding: "utf8" }); const processes = JSON.parse(output);"` return processes.filter(proc => proc.name !== "pm2-logrotate"),} catch (error) { this.log(` Failed to get PM2 status: ${error.message }`); return [],} }; async startAutomationProcesses() {; if (!this.config | !this.config.automation) {;" this.log(" No automation configuration found"); return false,};" this.log(" Starting PM2 automation processes."); for (const process of this.config.automation) {;` try {this.log(` Starting ${process.name}.`); / Check if process already exists; const existingProcesses = await this.checkPM2Status(); const exists = existingProcesses.find(p => p.name === process.name);"` if (exists) {this.log(` Process ${process.name} already exists, restarting.`);execSync(`pm2 restart ${process.name}`, { stdio: "pipe" }),} else {; / Start new process;" const scriptPath = path.resolve(__dirname, ".", process.script);` if (fs.existsSync(scriptPath)) {execSync(`pm2 start ${scriptPath} --name ${process.name}`, {;" stdio: "pipe"," env: { .process.env, .process.env }, async startAutomationProcesses() {; if (!this.config | !this.config.automation) {;" this.log(" No automation configuration found"); return false,};" this.log(" Starting PM2 automation processes."); for (const process of this.config.automation) {;` try {this.log(` Starting ${process.name}.`); async checkPM2Status() {; try {;"` const output = execSync("pm2 jlist", { "encoding: "utf8" }); const processes = JSON.parse(output); return processes.filter(proc => proc.name !== "pm2-logrotate")} catch (error) {this.log(` Failed to get PM2 status": ${error.message}`);"; return []} }; async startAutomationProcesses() {; if (!this.config | !this.config.automation) {;" this.log(" No automation configuration found"); return false,"};" this.log(" Starting PM2 automation processes.");"; for (const process of this.config.automation) {;" try {this.log(" Starting ${process.name}.");"; / Check if process already exists; const existingProcesses = await this.checkPM2Status(); const exists = existingProcesses.find(p => p.name === process.name);"` if (exists) {this.log(` Process ${process.name} already exists, restarting.`);execSync(`pm2 restart ${process.name}`, { stdio: "pipe" }),} else {; / Start new process;" const scriptPath = path.resolve(__dirname, ".", process.script);` if (fs.existsSync(scriptPath)) {execSync(`pm2 start ${scriptPath} --name ${process.name}`, {;" stdio: "pipe","` env: { .process.env, .process.env },});this.log(` Started ${process.name}`),} else {this.log(` Script not found: ${scriptPath}`),} }; / Add delay between starts;` await this.sleep(2000),} catch (error) { this.log(` Failed to start ${process.name }: ${error.message}`),} };" this.log(" PM2 automation processes started");" this.log(" PM2 automation processes started"); return true,}; async stopAutomationProcesses() {;" this.log(" Stopping PM2 automation processes."); try {; const processes = await this.checkPM2Status(); for (const proc of processes) {;"` if (proc.name !== "pm2-logrotate") {execSync(`pm2 stop ${proc.name}`, { stdio: "pipe" });this.log(` Stopped ${proc.name}`),} }"` this.log(" All automation processes stopped"),} catch (error) { this.log(` Error stopping processes: ${error.message }`),} }; async restartAutomationProcesses() {;" this.log(" Restarting PM2 automation processes."); try {; const processes = await this.checkPM2Status(); for (const proc of processes) {;"` if (proc.name !== "pm2-logrotate") {execSync(`pm2 restart ${proc.name}`, { stdio: "pipe" });this.log(` Restarted ${proc.name}`); async restartAutomationProcesses() {;" this.log(" Restarting PM2 automation processes."); try {; const processes = await this.checkPM2Status(); for (const proc of processes) {;"` if (proc.name !== "pm2-logrotate") {execSync(`pm2 restart ${proc.name}`, { stdio: "pipe" });this.log(` Restarted ${proc.name}`),} }"` this.log(" All automation processes restarted"),} catch (error) { this.log(` Error restarting processes: ${error.message }`),} }; async deleteAutomationProcesses() {;" this.log(" Deleting PM2 automation processes."); try {; const processes = await this.checkPM2Status(); for (const proc of processes) {;"` if (proc.name !== "pm2-logrotate") {execSync(`pm2 delete ${proc.name}`, { stdio: "pipe" });this.log(` Deleted ${proc.name}`),} }"` this.log(" All automation processes deleted"),} catch (error) { this.log(` Error deleting processes: ${error.message }`),} }; async showStatus() {;" this.log(" PM2 Automation Status: "); try {; async showStatus() {;" this.log(" PM2 Automation Status:"); try {; const processes = await this.checkPM2Status(); if (processes.length === 0) {;" this.log(" No automation processes running"); return,};" console.log("\n Automation Processes: ");" console.log("==="); for (const proc of processes) {; const statusIcon =;" proc.pm2_env.status === "online";" ? "";" : proc.pm2_env.status === "errored";" ? "";" : ""; const uptime = this.formatUptime(proc.pm2_env.pm_uptime);"`console.log(`\n${statusIcon} ${proc.name}`);console.log(` Status: ${proc.pm2_env.status}`);console.log(` Uptime: ${uptime}`);console.log(` Restarts: ${proc.pm2_env.restart_time}`);" console.log( Memory: ${Math.round(proc.monit.memory / 1024 / 1024)}MB");" console.log(" CPU: ${proc.monit.cpu}%"),}; const onlineCount = processes.filter(;"` p => p.pm2_env.status === "online`).length; const totalCount = processes.length;"` console.log(\n Summary: ${onlineCount}/${totalCount} processes online`),} catch (error) { this.log(` Error getting status: ${error.message }`),}"` if (exists) {this.log(` Process ${process.name} already exists, restarting.`);execSync(`pm2 restart ${process.name}`, { stdio": "pipe" });"} else {"; / Start new process;"` const scriptPath = path.resolve(__dirname, ".", process.script);"; if (fs.existsSync(scriptPath)) {execSync("pm2 start ${scriptPath} --name ${process.name}", {"; stdio: "pipe", "; env: { .process.env, .process.env },)});this.log(` Started ${process.name}`);"} else {this.log(" Script not "found: ${scriptPath}");"} }; / Add delay between starts;"` await this.sleep(2000)} catch (error) {this.log(` Failed to start ${process.name}: ${error.message}`);"} };" this.log(" PM2 automation processes started"); return true,"}; async stopAutomationProcesses() {;" this.log(" Stopping PM2 automation processes.");"; try {; const processes = await this.checkPM2Status(); for (const proc of processes) {;"` if (proc.name !== "pm2-logrotate") {execSync("pm2 stop ${proc.name}", { stdio": "pipe" });this.log(" Stopped ${proc.name}");"}"}"; this.log(" All automation processes stopped");"} catch (error) {this.log(` Error stopping processes: ${error.message}`);"} }; async showLogs(processName = null, lines = 20) {; try {;" if (processName) {this.log(" Showing logs for ${processName}:");execSync("pm2 logs ${processName} --lines ${lines}", {;" stdio: "inherit", async restartAutomationProcesses() {;" this.log(" Restarting PM2 automation processes.");"; try {; const processes = await this.checkPM2Status(); for (const proc of processes) {;"` if (proc.name !== "pm2-logrotate") {execSync(`pm2 restart ${proc.name}`, { stdio": "pipe" });this.log(` Restarted ${proc.name}`)}"}"; this.log(" All automation processes restarted")} catch (error) {this.log(" Error restarting "processes: ${error.message}");"} }; async deleteAutomationProcesses() {;" this.log(" Deleting PM2 automation processes.");"; try {; const processes = await this.checkPM2Status(); for (const proc of processes) {;"` if (proc.name !== "pm2-logrotate") {execSync(`pm2 delete ${proc.name}`, { stdio": "pipe" });this.log(` Deleted ${proc.name}`)}"}"; this.log(" All automation processes deleted")} catch (error) {this.log(" Error deleting "processes: ${error.message}");"} }; async showStatus() {;" this.log(" PM2 Automation Status":");"; try {; const processes = await this.checkPM2Status(); if (processes.length === 0) {;" this.log(" No automation processes running"); return,"};" console.log("\n Automation "Processes: "); console.log("===");"; for (const proc of processes) {; const statusIcon =;" proc.pm2_env.status === "online""; ? """; : proc.pm2_env.status === "errored""; ? """; : ""; const uptime = this.formatUptime(proc.pm2_env.pm_uptime);"`console.log(`\n${statusIcon} ${proc.name}`);console.log(` Status": ${proc.pm2_env.status}`);console.log(` "Uptime: ${uptime}`);console.log(` Restarts": ${proc.pm2_env.restart_time}"); console.log( "Memory: ${Math.round(proc.monit.memory / 1024 / 1024)}MB"`));");"; console.log(` CPU": ${proc.monit.cpu}%`);`};" const onlineCount = processes.filter(); p => p.pm2_env.status === "online"").length; const totalCount = processes.length;"` console.log(\n "Summary: ${onlineCount}/${totalCount} processes online""),"} catch (error) {this.log(` Error getting status": ${error.message}");"} }; async showLogs(processName = null, lines = 20) {; try {;` if (processName) {this.log(` Showing logs for ${processName}:`);execSync(`pm2 logs ${processName} --lines ${lines}`, {;" stdio: "inherit",}),} else {;" this.log(" Showing all automation logs: ");" execSync("pm2 logs --lines 10", { stdio: "inherit" }),}"` } catch (error) { this.log(` Error showing logs: ${error.message }`),} }; async openMonitoring() {;" this.log(" Opening PM2 monitoring interface."); try {;"` execSync("pm2 monit", { stdio: "inherit" }),} catch (error) { this.log(` Error opening monitoring: ${error.message }`),} }; async generateReport() {;" this.log(" Generating automation report."); try {; const processes = await this.checkPM2Status(); const report = {;" timestamp: new Date().toISOString()," totalProcesses: processes.length," onlineProcesses: processes.filter(p => p.pm2_env.status === "online"); .length," erroredProcesses: processes.filter(p => p.pm2_env.status === "errored"); .length," stoppedProcesses: processes.filter(p => p.pm2_env.status === "stopped"); .length," processes: processes.map(proc => ({; name: proc.name," status: proc.pm2_env.status," uptime: proc.pm2_env.pm_uptime," restarts: proc.pm2_env.restart_time," memory: proc.monit.memory," cpu: proc.monit.cpu,})),} const reportPath = path.join(;" __dirname,."," "logs",automation-report.json"; const reportPath = path.join(;" __dirname,."," "logs",automation-report.json"); fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));"`this.log(` Report generated: ${reportPath}`);"` return report,} catch (error) { this.log(` Error generating report: ${error.message }`); return null,} }; formatUptime(uptime) {;" if (!uptime) return "N/A"; const seconds = Math.floor(uptime / 1000); const minutes = Math.floor(seconds / 60); const hours = Math.floor(minutes / 60); const days = Math.floor(hours / 24);`if (days > 0) return `${days}d ${hours % 24}h`;if (hours > 0) return `${hours}h ${minutes % 60}m`;if (minutes > 0) return `${minutes}m ${seconds % 60}s`;return `${seconds}s`,}; sleep(ms) {; return new Promise(resolve => setTimeout(resolve, ms)),}; showHelp() {;" console.log("\n PM2 Automation Launcher"); showHelp() {;" console.log("\n PM2 Automation Launcher");" console.log("=====\n");" console.log("Available commands: ");" console.log(" start - Start all automation processes");" console.log(" stop - Stop all automation processes");" console.log(" restart - Restart all automation processes");" console.log(" delete - Delete all automation processes");" console.log(" status - Show status of all processes");" console.log(" logs - Show logs (all or specific process)");" console.log(" monit - Open PM2 monitoring interface");" console.log(" report - Generate automation report");" console.log(" help - Show this help message");" console.log("\nExamples:");" console.log(" node pm2-automation-launcher.cjs start");" console.log( node pm2-automation-launcher.cjs logs enhanced-link-checker");" console.log(" node pm2-automation-launcher.cjs status"),}};/ CLI handling;const launcher = new PM2AutomationLauncher();const command = process.argv[2];const subCommand = process.argv[3];async function main() {; try {; switch (command) {;" case start: await launcher.startAutomationProcesses(); break;" case stop: await launcher.stopAutomationProcesses(); break;" case restart: await launcher.restartAutomationProcesses(); break;" case delete: await launcher.deleteAutomationProcesses(); break;" case status: await launcher.showStatus(); break;" case logs: await launcher.showLogs(subCommand); break;" case monit: await launcher.openMonitoring(); break;" case report: await launcher.generateReport(); break;" case help:" default:" case help: default: launcher.showHelp(); break,}"` } catch (error) { launcher.log(` Command failed: ${error.message }`); process.exit(1),}};/ Graceful shutdown;"process.on("SIGINT", () => {;" launcher.log("\n Shutting down PM2 automation launcher."); process.exit(0),});if (require.main === module) {; main(),}" case start:"; await launcher.startAutomationProcesses(); break;" case stop:"; await launcher.stopAutomationProcesses(); break;" case restart:"; await launcher.restartAutomationProcesses(); break;" case delete:"; await launcher.deleteAutomationProcesses(); break;" case status:"; await launcher.showStatus();"; break;" case logs:"; await launcher.showLogs(subCommand);"; break;" case monit:"; await launcher.openMonitoring();"; break;" case report:"; await launcher.generateReport();"; break;" case help:"; default": launcher.showHelp(); break,}"` } catch (error) {launcher.log(` Command failed": ${error.message}`);`; process.exit(1),}};/ Graceful shutdown;"process.on("SIGINT", () => {"; launcher.log("\n Shutting down PM2 automation launcher."); process.exit(0),"});if (require.main === module) {; main(),}module.exports = PM2AutomationLauncher}}}}}}}}}}}}}}}}}}"`"`
=======
#!/usr/bin/env node;
<<<<<<< HEAD
const fs = require("$1");
const path = require("$1");
const { execSync, spawn } = require("child_process");
class PM2AutomationLauncher {;
  constructor() {;
    this.processes = new Map();
    this.logFile = path.join(;
      __dirname,..",
      "logs",pm2-automation-launcher.log";
    this.logFile = path.join(;
      __dirname,..",
      "logs",pm2-automation-launcher.log");
    this.ensureLogDirectory();
    this.config = this.loadConfig(),}
const fs = require("fs")";const path = require("path")";const { execSync, spawn } = require("child_process")"";class PM2AutomationLauncher {;
  constructor() {;
    this.processes = new Map();
    this.logFile = path.join();      __dirname,..", ""logs",pm2-automation-launcher.log"");";    this.ensureLogDirectory();
    this.config = this.loadConfig(),,}
  ensureLogDirectory() {;
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {;
      fs.mkdirSync(logDir, { "recursive": true }),}
      fs.mkdirSync(logDir, { ""recursive": true })}
  }
;
  log(message) {;
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;";    
    fs.appendFileSync(this.logFile, logMessage)}
;
  loadConfig() {;
    try {;
      const configPath = path.join(__dirname, "..", "ecosystem.config.cjs");";      if (fs.existsSync(configPath)) {";        delete require.cache[require.resolve(configPath)];
        return require(configPath),,}
      throw new Error("ecosystem.config.cjs not found");"} catch (error) {this.log("❌ Failed to load ""config": ${error.message}");";      return null,,}  }
;
  loadConfig() {;
    try {;
      const configPath = path.join(__dirname, "..", "ecosystem.config.cjs");
      if (fs.existsSync(configPath)) {;

  loadConfig() {;
    try {;
      const configPath = path.join(__dirname, "..", "ecosystem.config.cjs");
      if (fs.existsSync(configPath)) {;
        delete require.cache[require.resolve(configPath)];
        return require(configPath),}
      throw new Error("ecosystem.config.cjs not found"),} catch (error) { this.log(`❌ Failed to load "config": ${error.message }`);
      return null,}
  }
;
  async checkPM2Status() {;
    try {;
      const output = execSync("pm2 jlist", { "encoding": "utf8" });
      const processes = JSON.parse(output);
      return processes.filter(proc => proc.name !== "pm2-logrotate"),} catch (error) { this.log(`❌ Failed to get PM2 "status": ${error.message }`);
      return [],}
  }
;
  async startAutomationProcesses() {;
    if (!this.config || !this.config.automation) {;
      this.log("❌ No automation configuration found");
      return false,}
;
    this.log("🚀 Starting PM2 automation processes...");
    for (const process of this.config.automation) {;
      try {this.log(`🔧 Starting ${process.name}...`);
        // Check if process already exists;
        const existingProcesses = await this.checkPM2Status();
        const exists = existingProcesses.find(p => p.name === process.name);
        if (exists) {this.log(`⚠️ Process ${process.name} already exists, restarting...`);execSync(`pm2 restart ${process.name}`, { "stdio": "pipe" }),} else {;
          // Start new process;
          const scriptPath = path.resolve(__dirname, "..", process.script);
          if (fs.existsSync(scriptPath)) {execSync(`pm2 start ${scriptPath} --name ${process.name}`, {;
              "stdio": "pipe",
              "env": { ...process.env, ...process.env },
  async startAutomationProcesses() {;
    if (!this.config || !this.config.automation) {;
      this.log("❌ No automation configuration found");
      return false,}
;
    this.log("🚀 Starting PM2 automation processes...");
    for (const process of this.config.automation) {;
      try {this.log(`🔧 Starting ${process.name}...`);
  async checkPM2Status() {;
    try {;
      const output = execSync("pm2 jlist", { ""encoding": "utf8" });      const processes = JSON.parse(output);      return processes.filter(proc => proc.name !== "pm2-logrotate")} catch (error) {this.log(`❌ Failed to get PM2 status": ${error.message}`);";      return []}
  }
;
  async startAutomationProcesses() {;
    if (!this.config || !this.config.automation) {;
      this.log("❌ No automation configuration found");      return false,"}
;
    this.log("🚀 Starting PM2 automation processes...");";    for (const process of this.config.automation) {;
      try {this.log("🔧 Starting ${process.name}...");";
        // Check if process already exists;
        const existingProcesses = await this.checkPM2Status();
        const exists = existingProcesses.find(p => p.name === process.name);
        if (exists) {this.log(`⚠️ Process ${process.name} already exists, restarting...`);execSync(`pm2 restart ${process.name}`, { "stdio": "pipe" }),} else {;
          // Start new process;
          const scriptPath = path.resolve(__dirname, "..", process.script);
          if (fs.existsSync(scriptPath)) {execSync(`pm2 start ${scriptPath} --name ${process.name}`, {;
              "stdio": "pipe",
              "env": { ...process.env, ...process.env },,});this.log(`✅ Started ${process.name}`),} else {this.log(`❌ Script not "found": ${scriptPath}`),}
        }
;
        // Add delay between starts;
        await this.sleep(2000),} catch (error) { this.log(`❌ Failed to start ${process.name }: ${error.message}`),}
    }
;
    this.log("📊 PM2 automation processes started");
    this.log("📊 PM2 automation processes started");
    return true,}
;
  async stopAutomationProcesses() {;
    this.log("🛑 Stopping PM2 automation processes...");
    try {;
      const processes = await this.checkPM2Status();
      for (const proc of processes) {;
        if (proc.name !== "pm2-logrotate") {execSync(`pm2 stop ${proc.name}`, { "stdio": "pipe" });this.log(`🛑 Stopped ${proc.name}`),}
      }
      this.log("✅ All automation processes stopped"),} catch (error) { this.log(`❌ Error stopping "processes": ${error.message }`),}
  }
;
  async restartAutomationProcesses() {;
    this.log("🔄 Restarting PM2 automation processes...");
    try {;
      const processes = await this.checkPM2Status();
      for (const proc of processes) {;
        if (proc.name !== "pm2-logrotate") {execSync(`pm2 restart ${proc.name}`, { "stdio": "pipe" });this.log(`🔄 Restarted ${proc.name}`);
  async restartAutomationProcesses() {;
    this.log("🔄 Restarting PM2 automation processes...");
    try {;
      const processes = await this.checkPM2Status();
      for (const proc of processes) {;
        if (proc.name !== "pm2-logrotate") {execSync(`pm2 restart ${proc.name}`, { "stdio": "pipe" });this.log(`🔄 Restarted ${proc.name}`),}
      }
      this.log("✅ All automation processes restarted"),} catch (error) { this.log(`❌ Error restarting "processes": ${error.message }`),}
  }
;
  async deleteAutomationProcesses() {;
    this.log("🗑️ Deleting PM2 automation processes...");
    try {;
      const processes = await this.checkPM2Status();
      for (const proc of processes) {;
        if (proc.name !== "pm2-logrotate") {execSync(`pm2 delete ${proc.name}`, { "stdio": "pipe" });this.log(`🗑️ Deleted ${proc.name}`),}
      }
      this.log("✅ All automation processes deleted"),} catch (error) { this.log(`❌ Error deleting "processes": ${error.message }`),}
  }
;
  async showStatus() {;
    this.log("📊 PM2 Automation "Status": ");
    try {;

  async showStatus() {;
    this.log("📊 PM2 Automation Status:");
    try {;
      const processes = await this.checkPM2Status();
      if (processes.length === 0) {;
        this.log("ℹ️ No automation processes running");
        return,}
;
      
      
      for (const proc of processes) {;
        const statusIcon =;
          proc.pm2_env.status === "online";
            ? "🟢";
            : proc.pm2_env.status === "errored";
              ? "🔴";
              : "🟡";
        const uptime = this.formatUptime(proc.pm2_env.pm_uptime);

        }MB");
        ,}
;
      const onlineCount = processes.filter(;
        p => p.pm2_env.status === "online`).length;
      const totalCount = processes.length;
      ,} catch (error) { this.log(`❌ Error getting "status": ${error.message }`),}
        if (exists) {this.log(`⚠️ Process ${process.name} already exists, restarting...`);execSync(`pm2 restart ${process.name}`, { stdio": "pipe" });"} else {";          // Start new process;
          const scriptPath = path.resolve(__dirname, "..", process.script);";          if (fs.existsSync(scriptPath)) {execSync("pm2 start ${scriptPath} --name ${process.name}", {";              "stdio": "pipe", ";              "env": { ...process.env, ...process.env },)});this.log(`✅ Started ${process.name}`);"} else {this.log("❌ Script not ""found": ${scriptPath}");"}        }
;
        // Add delay between starts;
        await this.sleep(2000)} catch (error) {this.log(`❌ Failed to start ${process.name}: ${error.message}`);"}
    }
;
    this.log("📊 PM2 automation processes started");    return true,"}
;
  async stopAutomationProcesses() {;
    this.log("🛑 Stopping PM2 automation processes...");";    try {;
      const processes = await this.checkPM2Status();
      for (const proc of processes) {;
        if (proc.name !== "pm2-logrotate") {execSync("pm2 stop ${proc.name}", { stdio": "pipe" });this.log("🛑 Stopped ${proc.name}");"}"}";      this.log("✅ All automation processes stopped");"} catch (error) {this.log(`❌ Error stopping "processes": ${error.message}`);"}  }
;
  async showLogs(processName = null, lines = 20) {;
    try {;
      if (processName) {this.log("📝 Showing logs for ${processName}:");execSync("pm2 logs ${processName} --lines ${lines}", {;
          "stdio": "inherit",
  async restartAutomationProcesses() {;
    this.log("🔄 Restarting PM2 automation processes...");";    try {;
      const processes = await this.checkPM2Status();
      for (const proc of processes) {;
        if (proc.name !== "pm2-logrotate") {execSync(`pm2 restart ${proc.name}`, { stdio": "pipe" });this.log(`🔄 Restarted ${proc.name}`)}"}";      this.log("✅ All automation processes restarted")} catch (error) {this.log("❌ Error restarting ""processes": ${error.message}");"}
  }
;
  async deleteAutomationProcesses() {;
    this.log("🗑️ Deleting PM2 automation processes...");";    try {;
      const processes = await this.checkPM2Status();
      for (const proc of processes) {;
        if (proc.name !== "pm2-logrotate") {execSync(`pm2 delete ${proc.name}`, { stdio": "pipe" });this.log(`🗑️ Deleted ${proc.name}`)}"}";      this.log("✅ All automation processes deleted")} catch (error) {this.log("❌ Error deleting ""processes": ${error.message}");"}
  }
;
  async showStatus() {;
    this.log("📊 PM2 Automation Status":");";    try {;
      const processes = await this.checkPM2Status();
      if (processes.length === 0) {;
        this.log("ℹ️ No automation processes running");        return,"}
;
            ";      for (const proc of processes) {;
        const statusIcon =;
          proc.pm2_env.status === "online"";            ? "🟢"";            : proc.pm2_env.status === "errored"";              ? "🔴"";              : "🟡";        const uptime = this.formatUptime(proc.pm2_env.pm_uptime);
        }MB"`));");";        `}
;
      const onlineCount = processes.filter();        p => p.pm2_env.status === "online"").length;      const totalCount = processes.length;
      ,"} catch (error) {this.log(`❌ Error getting status": ${error.message}");"}
  }
;
  async showLogs(processName = null, lines = 20) {;
    try {;
      if (processName) {this.log(`📝 Showing logs for ${processName}:`);execSync(`pm2 logs ${processName} --lines ${lines}`, {;
          "stdio": "inherit",,}),} else {;
        this.log("📝 Showing all automation "logs": ");
        execSync("pm2 logs --lines 10", { "stdio": "inherit" }),}
    } catch (error) { this.log(`❌ Error showing "logs": ${error.message }`),}
  }
;
  async openMonitoring() {;
    this.log("📊 Opening PM2 monitoring interface...");
    try {;
      execSync("pm2 monit", { "stdio": "inherit" }),} catch (error) { this.log(`❌ Error opening "monitoring": ${error.message }`),}
  }
;
  async generateReport() {;
    this.log("📊 Generating automation report...");
    try {;
      const processes = await this.checkPM2Status();
      const report = {;
        "timestamp": new Date().toISOString(),
        "totalProcesses": processes.length,
        "onlineProcesses": processes.filter(p => p.pm2_env.status === "online");
          .length,
        "erroredProcesses": processes.filter(p => p.pm2_env.status === "errored");
          .length,
        "stoppedProcesses": processes.filter(p => p.pm2_env.status === "stopped");
          .length,
        "processes": processes.map(proc => ({;
          name: proc.name,
          "status": proc.pm2_env.status,
          "uptime": proc.pm2_env.pm_uptime,
          "restarts": proc.pm2_env.restart_time,
          "memory": proc.monit.memory,
          "cpu": proc.monit.cpu,,})),,}
      const reportPath = path.join(;
        __dirname,..",
        "logs",automation-report.json";
      const reportPath = path.join(;
        __dirname,..",
        "logs",automation-report.json");
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
this.log(`✅ Report "generated": ${reportPath}`);
      return report,} catch (error) { this.log(`❌ Error generating "report": ${error.message }`);
      return null,}
  }
;
  formatUptime(uptime) {;
    if (!uptime) return "N/A";
    const seconds = Math.floor(uptime / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
if (days > 0) return `${days}d ${hours % 24}h`;if (hours > 0) return `${hours}h ${minutes % 60}m`;if (minutes > 0) return `${minutes}m ${seconds % 60}s`;return `${seconds}s`,}
;
  sleep(ms) {;
    return new Promise(resolve => setTimeout(resolve, ms)),}
;
  showHelp() {;
    
  showHelp() {;
    
    
    
    
    
    
    
    
    ");
    
    
    
    
    
    
    ,}
}
;
// CLI handling;
const launcher = new PM2AutomationLauncher();
const command = process.argv[2];
const subCommand = process.argv[3];
async function main() {;
  try {;
    switch (command) {;
      case "start":;
        await launcher.startAutomationProcesses();
        break;
      case "stop":;
        await launcher.stopAutomationProcesses();
        break;
      case "restart":;
        await launcher.restartAutomationProcesses();
        break;
      case "delete":;
        await launcher.deleteAutomationProcesses();
        break;
      case "status":;
        await launcher.showStatus();
        break;
      case "logs":;
        await launcher.showLogs(subCommand);
        break;
      case "monit":;
        await launcher.openMonitoring();
        break;
      case "report":;
        await launcher.generateReport();
        break;
      case "help":;
      "default": ;
      case "help":;
      default:;
        launcher.showHelp();
        break,}
  } catch (error) { launcher.log(`❌ Command "failed": ${error.message }`);
    process.exit(1),}
}
;
// Graceful shutdown;
process.on("SIGINT", () => {;
  launcher.log("\n🛑 Shutting down PM2 automation launcher...");
  process.exit(0),});
if (require.main === module) {;
  main(),}
      case "start":";        await launcher.startAutomationProcesses();
        break;
      case "stop":";        await launcher.stopAutomationProcesses();
        break;
      case "restart":";        await launcher.restartAutomationProcesses();
        break;
      case "delete":";        await launcher.deleteAutomationProcesses();
        break;
      case "status":";        await launcher.showStatus();";        break;
      case "logs":";        await launcher.showLogs(subCommand);";        break;
      case "monit":";        await launcher.openMonitoring();";        break;
      case "report":";        await launcher.generateReport();";        break;
      case "help":";      default":;        launcher.showHelp();
        break,,}
  } catch (error) {launcher.log(`❌ Command failed": ${error.message}`);`;    process.exit(1),,}}
;
// Graceful shutdown;
process.on("SIGINT", () => {";  launcher.log("\n🛑 Shutting down PM2 automation launcher...");  process.exit(0),"});
if (require.main === module) {;
  main(),,}
module.exports = PM2AutomationLauncher}}}}}}}}}}}}}}}}}}
=======
const fs = require("$1")
const path = require("$1")
const { execSync, spawn } = require("child_process")
      __dirname,.."
      "logs",pm2-automation-launcher.log"
      __dirname,.."
      "logs",pm2-automation-launcher.log"
const fs = require("fs")";const path = require("path")";const { execSync, spawn } = require("child_process")""
    this.logFile = path.join();      __dirname,..", ""logs",pm2-automation-launcher.log"");"
      fs.mkdirSync(logDir, { "recursive"})
      fs.mkdirSync(logDir, { ""recursive"})
    const logMessage = `[${timestamp}] ${message}\n`;``
      const configPath = path.join(__dirname, "..", "ecosystem.config.cjs");";      if (fs.existsSync(configPath)) {"}
      throw new Error("ecosystem.config.cjs not found");"} catch (error) {this.log(" Failed to load ""config": ${error.message}");"
      const configPath = path.join(__dirname, "..", "ecosystem.config.cjs")
      const configPath = path.join(__dirname, "..", "ecosystem.config.cjs")
      throw new Error("ecosystem.config.cjs not found"),} catch (error) { this.log(` Failed to load "config"`})
      const output = execSync("pm2 jlist", { "encoding": "utf8"})
      return processes.filter(proc => proc.name !== "pm2-logrotate"),} catch (error) { this.log(` Failed to get PM2 "status"`})
      this.log(" No automation configuration found")
    this.log(" Starting PM2 automation processes...")
        if (exists) {this.log(`⚠ Process ${process.name} already exists, restarting...`);execSync(`pm2 restart ${process.name}`, { "stdio": "pipe"`})
          const scriptPath = path.resolve(__dirname, "..")
              "stdio": "pipe"
              "env"
      this.log(" No automation configuration found")
    this.log(" Starting PM2 automation processes...")
      const output = execSync("pm2 jlist", { ""encoding": "utf8" }
});      const processes = JSON.parse(output);      return processes.filter(proc => proc.name !== "pm2-logrotate")} catch (error) {this.log(` Failed to get PM2 status": ${error.message}`);
      this.log(" No automation configuration found");      return false,"
    this.log(" Starting PM2 automation processes...");"
      try {this.log(" Starting ${process.name}...");"
        if (exists) {this.log(`⚠ Process ${process.name} already exists, restarting...`);execSync(`pm2 restart ${process.name}`, { "stdio": "pipe"`})
          const scriptPath = path.resolve(__dirname, "..")
              "stdio": "pipe"
              "env": { ...process.env, ...process.env },,}
});this.log(` Started ${process.name}`),} else {this.log(` Script not "found"`})
    this.log(" PM2 automation processes started")
    this.log(" PM2 automation processes started")
    this.log("� Stopping PM2 automation processes...")
        if (proc.name !== "pm2-logrotate") {execSync(`pm2 stop ${proc.name}`, { "stdio": "pipe"`})
      this.log(" All automation processes stopped"),} catch (error) { this.log(` Error stopping "processes"`})
    this.log("� Restarting PM2 automation processes...")
        if (proc.name !== "pm2-logrotate") {execSync(`pm2 restart ${proc.name}`, { "stdio": "pipe"`})
    this.log("� Restarting PM2 automation processes...")
        if (proc.name !== "pm2-logrotate") {execSync(`pm2 restart ${proc.name}`, { "stdio": "pipe"`})
      this.log(" All automation processes restarted"),} catch (error) { this.log(` Error restarting "processes"`})
    this.log("� Deleting PM2 automation processes...")
        if (proc.name !== "pm2-logrotate") {execSync(`pm2 delete ${proc.name}`, { "stdio": "pipe"`})
      this.log(" All automation processes deleted"),} catch (error) { this.log(` Error deleting "processes"`})
    this.log(" PM2 Automation "Status": ")
    this.log(" PM2 Automation Status:")
        this.log("ℹ No automation processes running")
// console.log("\n� Automation "Processes": ")
      console.log("===")
          proc.pm2_env.status === "online"
            ? "�"
            : proc.pm2_env.status === "errored"
              ? "�"
              : "�"
// console.log(`\n${statusIcon} ${proc.name}`);console.log(`   "Status": ${proc.pm2_env.status}`);console.log(`   "Uptime": ${uptime}`);console.log(`   "Restarts"`)
        console.log(   "Memory": ${Math.round(proc.monit.memory / 1024 / 1024)}MB"
        console.log("   "CPU": ${proc.monit.cpu}%")
        p => p.pm2_env.status === "
      console.log(\n "Summary": ${onlineCount}/${totalCount} processes online`),} catch (error) { this.log(` Error getting "status"`})
        if (exists) {this.log(`⚠ Process ${process.name} already exists, restarting...`);execSync(`pm2 restart ${process.name}`, { stdio": "pipe" }
});"} else {"`}
          const scriptPath = path.resolve(__dirname, "..", process.script);";          if (fs.existsSync(scriptPath)) {execSync("pm2 start ${scriptPath} --name ${process.name}", {";              "stdio": "pipe", ";              "env": { ...process.env, ...process.env },)}
});this.log(` Started ${process.name}`);"} else {this.log(" Script not ""found": ${scriptPath}");"
        await this.sleep(2000)} catch (error) {this.log(` Failed to start ${process.name}: ${error.message}`);
    this.log(" PM2 automation processes started");    return true,"
    this.log("� Stopping PM2 automation processes...");"
        if (proc.name !== "pm2-logrotate") {execSync("pm2 stop ${proc.name}", { stdio": "pipe" }
});this.log("� Stopped ${proc.name}");"}"}";      this.log(" All automation processes stopped");"} catch (error) {this.log(` Error stopping "processes": ${error.message}`);
      if (processName) {this.log("� Showing logs for ${processName}:");execSync("pm2 logs ${processName} --lines ${lines}")
          "stdio": "inherit"
    this.log("� Restarting PM2 automation processes...");"
        if (proc.name !== "pm2-logrotate") {execSync(`pm2 restart ${proc.name}`, { stdio": "pipe" }
});this.log(`� Restarted ${proc.name}`)}"}";      this.log(" All automation processes restarted")} catch (error) {this.log(" Error restarting ""processes": ${error.message}");"
    this.log("� Deleting PM2 automation processes...");"
        if (proc.name !== "pm2-logrotate") {execSync(`pm2 delete ${proc.name}`, { stdio": "pipe" }
});this.log(`� Deleted ${proc.name}`)}"}";      this.log(" All automation processes deleted")} catch (error) {this.log(" Error deleting ""processes": ${error.message}");"
    this.log(" PM2 Automation Status":");"
        this.log("ℹ No automation processes running");        return,"
      console.log("\n� Automation ""Processes": ");      console.log("===");"
          proc.pm2_env.status === "online"";            ? "�"";            : proc.pm2_env.status === "errored"";              ? "�"";              : "�"
console.log(`\n${statusIcon} ${proc.name}`);console.log(`   Status": ${proc.pm2_env.status}`);console.log(`   ""Uptime": ${uptime}`);console.log(`   Restarts": ${proc.pm2_env.restart_time}");        console.log(   ""Memory": ${Math.round(proc.monit.memory / 1024 / 1024)}MB"`));");";        console.log(`   CPU``)
      const onlineCount = processes.filter();        p => p.pm2_env.status === "online""
      console.log(\n ""Summary": ${onlineCount}/${totalCount} processes online""),"} catch (error) {this.log(` Error getting status": ${error.message}");"
          "stdio": "inherit"
        this.log("� Showing all automation "logs": ")
        execSync("pm2 logs --lines 10", { "stdio": "inherit"})
    } catch (error) { this.log(` Error showing "logs"`})
    this.log(" Opening PM2 monitoring interface...")
      execSync("pm2 monit", { "stdio": "inherit" }),} catch (error) { this.log(` Error opening "monitoring"`})
    this.log(" Generating automation report...")
        "timestamp"
        "totalProcesses"
        "onlineProcesses": processes.filter(p => p.pm2_env.status === "online")
        "erroredProcesses": processes.filter(p => p.pm2_env.status === "errored")
        "stoppedProcesses": processes.filter(p => p.pm2_env.status === "stopped")
        "processes"
          "status"
          "uptime"
          "restarts"
          "memory"
          "cpu"
        __dirname,.."
        "logs",automation-report.json"
        __dirname,.."
        "logs",automation-report.json"
this.log(` Report "generated"`)
      return report,} catch (error) { this.log(` Error generating "report"`})
    if (!uptime) return "N/A"
// console.log("\n PM2 Automation Launcher")
    console.log("\n PM2 Automation Launcher")
// console.log("=====\n")
    console.log("Available "commands": ")
// console.log("  start     - Start all automation processes")
    console.log("  stop      - Stop all automation processes")
// console.log("  restart   - Restart all automation processes")
    console.log("  delete    - Delete all automation processes")
// console.log("  status    - Show status of all processes")
    console.log("  logs      - Show logs (all or specific process)"
// console.log("  monit     - Open PM2 monitoring interface")
    console.log("  report    - Generate automation report")
// console.log("  help      - Show this help message")
    console.log("\nExamples:")
// console.log("  node pm2-automation-launcher.cjs start")
    console.log(  node pm2-automation-launcher.cjs logs enhanced-link-checker")
    console.log("  node pm2-automation-launcher.cjs status")
      case "start"
      case "stop"
      case "restart"
      case "delete"
      case "status"
      case "logs"
      case "monit"
      case "report"
      case "help"
      "default"
      case "help"
  } catch (error) { launcher.log(` Command "failed"`})
process.on("SIGINT")
  launcher.log("\n� Shutting down PM2 automation launcher...")
      case "start":"
      case "stop":"
      case "restart":"
      case "delete":"
      case "status":";        await launcher.showStatus();"
      case "logs":";        await launcher.showLogs(subCommand);"
      case "monit":";        await launcher.openMonitoring();"
      case "report":";        await launcher.generateReport();"
      case "help":";      default"
  } catch (error) {launcher.log(` Command failed``})
process.on("SIGINT", () => {";  launcher.log("\n� Shutting down PM2 automation launcher...");  process.exit(0),"}
>>>>>>> main
>>>>>>> main
