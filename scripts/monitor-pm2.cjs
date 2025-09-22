<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
#!/usr/bin/env node;
=======
#!/usr/bin/env node
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
/**;
 * PM2 Monitoring Dashboard for Zion Application;
 * Provides real-time monitoring of all PM2 processes;
 */;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
  process.on(")
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
  process.on(")
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
  process.on(")
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
