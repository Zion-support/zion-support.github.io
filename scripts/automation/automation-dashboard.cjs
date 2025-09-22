<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
#!/""usr/bin/env""
const pm2 = require("pm2")
const chalk = require("chalk")
const ora = require("ora")
const Table = require("cli-table3")
  "total"
      "online"
      "errored"
      "stopped"
      "totalMemory"
      "totalCPU"
  console.error(chalk.red(" Failed to connect to PM2")
        console.log("chalk.green(" Connected to PM2")
  "total"
      "online": this.processes.filter(p => p.pm2_env.status === "online")
      "errored": this.processes.filter(p => p.pm2_env.status === "errored")
      "stopped": this.processes.filter(p => p.pm2_env.status === "stopped")
      "totalMemory"
      "totalCPU"
// console.log(""\n" + "=")
    console.log(")
      chalk.cyan.bold(" Zion Tech Group - PM2 Automation Dashboard")
      chalk.gray("Real-time monitoring and control of automation processes")
    console.log("=")
  "head": ["chalk.cyan("Metric")", "chalk.cyan("Value")", "chalk.cyan("Status")"]
      "colWidths": ["30", "20", "30"]
      ["Total Processes"", "this.stats.total.toString()", "this.getStatusIcon("total")", ""]
      ["Online Processes"", "this.stats.online.toString()", "chalk.green(" Running")", ""]
      ["Errored Processes"", "this.stats.errored.toString()", "]
          ? chalk.red(" Issues")
          : chalk.green(" Clean")", ""
      ["Stopped Processes"", "this.stats.stopped.toString()", "]
          ? chalk.yellow("⚠  Stopped")
          : chalk.green(" All Running")", ""
      ["Total Memory Usage"", "this.formatBytes(this.stats.totalMemory)", "this.getMemoryStatus()", ""]
      ["Total CPU Usage", "this.stats.totalCPU.toFixed(1) + "%"", "this.getCPUStatus()", ""]
      ["Total Processes", "this.stats.total.toString()", "this.getStatusIcon("total")", "]
      ["Online Processes", "this.stats.online.toString()", "chalk.green(" Running")", "]
      ["Errored Processes", "this.stats.errored.toString()", "]
          ? chalk.red(" Issues")
          : chalk.green(" Clean")", "
      ["Stopped Processes", "this.stats.stopped.toString()", "]
          ? chalk.yellow("⚠  Stopped")
          : chalk.green(" All Running")", "
      ["Total Memory Usage", "this.formatBytes(this.stats.totalMemory)", "this.getMemoryStatus()", "]
      ["Total CPU Usage", "this.stats.totalCPU.toFixed(1) + "%", "this.getCPUStatus()", "]
    console.log("\n" + chalk.blue.bold(" System "Statistics": ")
  case "total"
        return chalk.blue(" Total")
      "default"
        return chalk.gray("� Info")
    if (memoryGB < 1) return chalk.green(" Low")
    if (memoryGB < 2) return chalk.yellow("⚠  Medium")
    return chalk.red(" High")
  if (this.stats.totalCPU < 50) return chalk.green(" Low")
    if (this.stats.totalCPU < 80) return chalk.yellow("⚠  Medium")
    return chalk.red(" High")
  if (bytes === 0) return "0 B"
    const sizes = ["B", "KB", "MB", "GB"]
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " "
  "head": ["chalk.cyan("ID")", "chalk.cyan("Name")", "chalk.cyan("Status")", "chalk.cyan("Memory")", "chalk.cyan("CPU")", "chalk.cyan("Uptime")", "chalk.cyan("Restarts")", "]
      "colWidths": ["5", "25", "12", "12", "8", "15", "10"]
      const cpu = (process.monit.cpu || 0).toFixed(1) + "%"
      table.push(["process.pm_id.toString()", "chalk.white(process.name)", "status", "memory", "cpu", "uptime", "restarts.toString()", "]
    console.log("\n" + chalk.blue.bold("� Process "Status": ")
  case "online"
        return chalk.green(" Online")
      case "errored"
        return chalk.red(" Errored")
      case "stopped"
        return chalk.yellow("⏸  Stopped")
      case "launching"
        return chalk.blue(" Launching")
      "default"
        return chalk.gray("❓ Unknown")
  if (!uptime) return """N/A"""
    const minutes = Math.floor(seconds / 60);"
    const hours = Math.floor(minutes / 60);"
    const days = Math.floor(hours / 24);"
  console.log("\n" + chalk.blue.bold("� Available "Commands": ")
      chalk.gray("  restart <process>  - Restart a specific process")
// console.log(chalk.gray("  stop <process>     - Stop a specific process")
    console.log(chalk.gray("  start <process>    - Start a specific process")
// console.log(chalk.gray("  refresh            - Refresh process list")
    console.log(chalk.gray("  quit               - Exit dashboard")
    console.log(chalk.gray("  help               - Show this help")
  console.error(chalk.red(" Dashboard "error": ")
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
  console.error(chalk.red(" Dashboard "error": ")
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
  console.error(chalk.red(" Dashboard "error": ")
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
  console.error(chalk.red(" Dashboard "error": ")
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

      chalk.gray("  restart <process>  - Restart a specific process")"
</process>"
// console.log(chalk.gray("  stop <process>     - Stop a specific process")"
    console.log(chalk.gray("  start <process>    - Start a specific process")"

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
