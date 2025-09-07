

  this.log(" Monitoring automation status...")
  this.log( Monitoring automation status...)
      await this.generateHealthReport()} catch (error) {  this.log(` Error during "monitoring"`})

      return JSON.parse(status)} catch (error) {  this.log(` Could not get PM2 "status"`})
        if (app.pm2_env && app.pm2_env.status === errored)
          this.log(⚠ ${app.name} using high memory (${Math.round(app.monit.memory / 1024 / 1024)}MB), restarting..."
            "⚠ ${app.name} using high CPU (${app.monit.cpu}%), monitoring...
        if (app.pm2_env && app.pm2_env.status === errored") {this.log("⚠ ${app.name} is in error state, attempting restart...)
          this.log(⚠ ${app.name} using high memory (${Math.round(app.monit.memory / 1024 / 1024)}MB), restarting...
  try {this.log(`� Restarting ${name}...`);execSync(`pm2 restart ${name}`, { "stdio": pipe`})
  "stdio": pipe
  try {this.log(`� Stopping ${name}...`);execSync(`pm2 stop ${name}`, { "stdio": pipe`})
  try {this.log(`� Stopping ${name}...`);execSync(`pm2 stop ${name}`, { "stdio": pipe`})
  "timestamp"
        controllerStatus
          "automationsCount"
        pm2Status
        "automationHealth"

=======
        recommendations
      this.log(" Health report generated")} catch (error) {  this.log(` Failed to generate health report`})
    for (const ["name", automation)]
  health[name] = { "status": unknown, "error": No status method}
  health[name] = { "status": error, "error"}
  health[name] = { status: "error", error}
  "type": high_error_rate
          "message": High error rate detected, consider reviewing automation logic
          severity": "high
      if (memoryUsage.trend === increasing")
  "type: memory_leak"
          "message: Memory usage increasing, potential memory leak detected"
          "severity: medium"
  "type: dependencies","message
          severity": "low
      if (memoryUsage.trend === increasing")
  "type: memory_leak"
          "message: Memory usage increasing, potential memory leak detected"
          "severity: medium"
  "type: dependencies","message
          severity": "low
    } catch (error) {  this.log(`⚠ Could not generate recommendations"`})
  const logDir = path.join(this.projectRoot, "logs)
        .filter(file => file.includes(error")
  const content = fs.readFileSync(path.join(logDir, logFile), "utf8
            .split(\n")
                line.includes("ERROR)
                line.includes(Error")
                line.includes("error)
        .filter(file => file.includes(error")
            .split(\n")
                line.includes("ERROR)
                line.includes(Error")
                line.includes("error)
  name"
        "memory
        timestamp"
        const trend = last.memory > first.memory ? "increasing : decreasing"
        return { trend, "data}
      return { trend": "stable, data"}
  return { "trend: unknown", "data}
  const result = execSync(npm outdated --json", { "encoding: utf8"})
  this.log("� EMERGENCY STOP ACTIVATED)
      execSync(pm2 stop all", { "stdio: pipe"})
      this.log(" All PM2 processes stopped)
      this.stop()} catch (error) {  this.log(` Emergency stop failed"`})
  "isRunning
      automationsCount"
      "automations
      lastCheck"
      "logFile
  try {this.log(` Running command": ${command} ${args.join(" `})
  case start"
  case "start
        case stop"
        case "restart
        case status"
        case "health
        case emergency-stop"
        case "health
        case emergency-stop"
        "default
    } catch (error) {  this.log(` Command failed"`})
  process.on("SIGINT)
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6


  process.on(SIGTERM")

  process.on("SIGTERM)
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
  process.on(SIGTERM")

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======

>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
