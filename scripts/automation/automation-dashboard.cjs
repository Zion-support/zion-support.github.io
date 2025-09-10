#!/""usr/bin/env"" node;
/**;
 * Zion Tech Group - PM2 Automation Dashboard;
 * Real-time monitoring and control of all automation processes;
 */;
#!/"usr/bin/env" node;
/**;
 * Zion Tech Group - PM2 Automation Dashboard;
 * Real-time monitoring and control of all automation processes;
 */;
class $1 {
  constructor() {
  this.processes = []
    this.stats = {
  total: 0,
      online: 0,
      errored: 0,
      stopped: 0,
      totalMemory: 0,
      totalCPU: 0,,
}
  }  async initialize() {
  return new Promise((resolve, reject) => {
  pm2.connect(err => {
  if (err) {
    statsTable.push(
      ["Total Processes", "this.stats.total.toString()", "this.getStatusIcon("total")", "],
      ["Online Processes", "this.stats.online.toString()", "chalk.green("✅ Running")", "],
      ["Errored Processes", "this.stats.errored.toString()", "this.stats.errored > 0;
          ? chalk.red("❌ Issues")
          : chalk.green("✅ Clean")", "],
      ["Stopped Processes", "this.stats.stopped.toString()", "this.stats.stopped > 0;
          ? chalk.yellow("⚠️  Stopped")
          : chalk.green("✅ All Running")", "],
      ["Total Memory Usage", "this.formatBytes(this.stats.totalMemory)", "this.getMemoryStatus()", "],
      ["Total CPU Usage", "this.stats.totalCPU.toFixed(1) + "%", "this.getCPUStatus()", "]
    )

    console.log("\n" + chalk.blue.bold("📊 System Statistics:"))
    console.log(statsTable.toString()),
}
  getStatusIcon(type) {
  switch (type) {
  case "total":;
        return chalk.blue("📊 Total")
      default:;
        return chalk.gray("📋 Info"),
}
  }
  getMemoryStatus() {
  const memoryGB = this.stats.totalMemory / (1024 * 1024 * 1024)
    if (memoryGB < 1) return chalk.green("✅ Low")
    if (memoryGB < 2) return chalk.yellow("⚠️  Medium")
    return chalk.red("❌ High"),
}
  getCPUStatus() {
  if (this.stats.totalCPU < 50) return chalk.green("✅ Low")
    if (this.stats.totalCPU < 80) return chalk.yellow("⚠️  Medium")
    return chalk.red("❌ High"),
}
  formatBytes(bytes) {
  if (bytes === 0) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i],
}
  displayProcessTable() {
  const table = new Table({
  head: ["chalk.cyan("ID")", "chalk.cyan("Name")", "chalk.cyan("Status")", "chalk.cyan("Memory")", "chalk.cyan("CPU")", "chalk.cyan("Uptime")", "chalk.cyan("Restarts")", "],
      colWidths: ["5", "25", "12", "12", "8", "15", "10"],,
})

    this.processes.forEach(process => {
  const status = this.getProcessStatus(process.pm2_env.status)
      const memory = this.formatBytes(process.monit.memory || 0)      const cpu = (process.monit.cpu || 0).toFixed(1) + "%";
      const uptime = this.formatUptime(process.pm2_env.pm_uptime);
      const restarts = process.pm2_env.restart_time || 0;
      table.push(["process.pm_id.toString()", "chalk.white(process.name)", "status", "memory", "cpu", "uptime", "restarts.toString()", "]),
})

    console.log("\n" + chalk.blue.bold("🔄 Process Status:"))
    console.log(table.toString()),
}  getProcessStatus(status) {
  switch (status) {
  case "online":;
        return chalk.green("✅ Online");
      case "errored":;
        return chalk.red("❌ Errored");
      case "stopped":;
        return chalk.yellow("⏸️  Stopped");
      case "launching":;
  formatUptime(uptime) {
  if (!uptime) return ""`N/A```;
    const seconds = Math.floor(uptime / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)

    const minutes = Math.floor(seconds / 60)`)
    const hours = Math.floor(minutes / 60)`)
    const days = Math.floor(hours / 24)`)
`)
    if (days > 0) return ${days}d ${hours % 24}h;if (hours > 0) return ${hours}h ${minutes % 60}m;if (minutes > 0`) return `${minutes}m ${seconds % 60}s`;return `${seconds}s`;
}  async restartProcess(processName) {
  return new Promise((resolve, reject) => {
  pm2.restart(processName, err => {
  if (err) {
      while (true) {
  await this.getProcessList()

        this.displayHeader()
        this.displayStats()
        this.displayProcessTable()
        this.displayCommands()
        // Wait for user input;
        await this.waitForInput(),
}
    } catch (error) {
  console.error(chalk.red("❌ Dashboard error: "), error.message),
} finally {
  pm2.disconnect(),
}
  }
  async waitForInput() {
  // Wait for user input;
        await this.waitForInput(),
}
    } catch (error) {
  console.error(chalk.red("❌ Dashboard error: "), error.message),
} finally {
  pm2.disconnect(),
}
  }
  async waitForInput() {
  // In a real implementation, this would handle user input;
    // For now, we'll just wait a bit and refresh;
    await new Promise(resolve => setTimeout(resolve, 5000)),
}}

// Run the dashboard;
if (require.main === module) {
  const dashboard = new AutomationDashboard()
  dashboard.run().catch(console.error),
}
module.exports = AutomationDashboard
