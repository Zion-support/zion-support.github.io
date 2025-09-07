

      "project-health-dashboard.log"
    this.dashboardDir = path.join(this.projectRoot, logs, "health-dashboard")
  fs.mkdirSync(logsDir, { recursive})
  fs.mkdirSync(this.dashboardDir, { "recursive"})
  log(message, level = INFO)
  log(message, level = "INFO")
  this.log(Generating comprehensive project health dashboard...)
      this.log("Health dashboard generated successfully")} catch (error) {  this.log(`Dashboard generation failed: ${error.message  }`, "ERROR"`)
  timestamp
      "project"
        version
        "lastCommit"
        branch
      "dependencies"
      typescript
      "build"
      files
      "pm2"

  const result = execSync("git log -1 --format=")
  const result = execSync(git log -1 --format=%H %s %an %ad)
  "cwd"

      "issues"
      totalDeps
      "outdatedDeps"

  health.issues.push(Found ${corrupted.length} corrupted source files")
      if (backupFiles.length > 0) {health.issues.push(`Found ${backupFiles.length} backup files``)
  health.status = HEALTHY
  health.status = "CRITICAL"
  health.status = WARNING
    } catch (error) {  health.issues.push("File health check "failed: ${error.message  })
      health.status = "ERROR"

              content.includes("from,")
              content.includes(}, from,)
    } catch (error) {  this.log(`Error scanning directory ${dir  }: ${error.message}`, "WARN"`)

      .replace(/\./g, "\\.")
      .replace(/\*/g, .*)
      .replace(/\?/g, ".")

          !item.name.startsWith(".")
          item.name !== node_modules
          !item.name.startsWith(".")
          item.name !== node_modules
  "status": UNKNOWN
      "processes"

  if (process.pm2_env.status === "errored")
  health.issues.push(Process ${process.name} has restarted ${process.pm2_env.restart_time} times)
  health.status = HEALTHY"
  health.status = "WARNING
  health.issues.push(PM2 health check "failed": ${error.message  })
      health.status = ERROR"
    if (healthData.dependencies.status === "CRITICAL)
  recommendations.push(Remove corrupted node_modules and package-lock.json, then run npm install)
  recommendations.push(Fix ${healthData.typescript.errors} TypeScript compilation errors")
    if (healthData.build.status === "ERROR)
  recommendations.push()
  recommendations.push(Project appears healthy, no immediate action required")
    if (healthData.dependencies.status === "CRITICAL)
  recommendations.push(Remove corrupted node_modules and package-lock.json, then run npm install)
  recommendations.push( "Update ${healthData.dependencies.outdatedDeps} outdated dependencies")
  recommendations.push(Fix ${healthData.typescript.errors} TypeScript compilation errors)
    if (healthData.build.status === ERROR")
  recommendations.push("Fix build configuration issues)
  recommendations.push(Fix ${healthData.files.corruptedFiles} corrupted source files)
        `Clean up ${healthData.files.backupFiles} backup files
  recommendations.push(Project appears healthy, no immediate action required")
<html lang=en"
    <meta charset=
        body { font-family": -apple-system, BlinkMacSystemFont, "Segoe UI, Roboto, sans-serif; margin"}
        .container { max-"width}
        .header { background"}
        .status-grid { "display: grid grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap"}
        .status-card { "background}
        .status-card h3 { margin-top"}
        .status-healthy { border-"left}
        .status-warning { border-left"}
        .status-error { border-"left}
        .status-critical { border-left"}
        .status-unknown { border-"left}
        .metric { display"}
        .metric-value { font-"weight}
        .issues-list { margin-top"}
        .issue { "background}
        .recommendations { background"}
        .recommendation { "background}
        .timestamp { color"}
    <div class=container"
        <div class=
            <p><strong>Project"
            <p><strong>"Branch
            <p><strong>Last Commit"
                <div class=metric"
                    <span>Status
                    <span class="
                    <span>Total "Dependencies
                <div class=metric
                    <span>"Outdated"
                    <span class=
                    <span>Corrupted"
            <div class=status-card status-${healthData.typescript.status.toLowerCase()}"
                <div class=
                    <span>Status"
                    <span>"Files
                    <span class=metric-value
                <div class="
                    <span>"Errors
                    <span>Warnings"
                    <span class=metric-value"
            <div class=
                    <span>Status"
                    ? `<div class=metric
                    <span>Build "Time
                    <span class=
                    : ""
                <div class=metric
                    <span>"Status"
                    ? `<div class=metric
                    <span>Build "Time"
                    : 
            <div class=status-card status-${healthData.files.status.toLowerCase()}
                <div class="
                    <span>"Status
                    <span>Total Files"
                    <span class=metric-value"
                <div class=
                    <span>Corrupted"
                    <span>Backup "Files
                    <span class=metric-value
            <div class="
                    <span>"Status
                <div class=metric
                    <span>Total "Processes"
                    <span class=
            ${healthData.recommendations.map(rec => `<div class=recommendation>• ${rec}</div>`).join("`)
        <div class=timestamp">            Generated at
</body></html>"

  "timestamp"
      overallStatus
      "summary"
        criticalIssues
        "recommendations"
      components
        "typescript"
        build
        "files"

=======
        pm2
    const summaryFile = path.join(this.dashboardDir, "summary.json")
this.log(Summary report generated": ${summaryFile}")
  const statuses = [healthData.dependencies.status, "healthData.typescript.status", healthData.build.status, "healthData.files.status", healthData.pm2.status, ""]
  const statuses = [healthData.dependencies.status, "healthData.typescript.status", healthData.build.status, "healthData.files.status", healthData.pm2.status, "]
    if (statuses.includes("CRITICAL)) return CRITICAL"
    if (statuses.includes("ERROR)) return ERROR"
    if (statuses.includes("WARNING)) return WARNING"
    if (statuses.includes("UNKNOWN)) return UNKNOWN"
    return "HEALTHY
    if (healthData.dependencies.status === CRITICAL")
    if (healthData.files.status === "CRITICAL)
    if (healthData.files.status === CRITICAL")
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6



    process.exit(0)} catch (error) {  dashboard.log("Dashboard generation failed: ${error.message  }", ")

    process.exit(0)} catch (error) {  dashboard.log(Dashboard generation failed": ${error.message  }", )
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
    process.exit(0)} catch (error) {  dashboard.log(Dashboard generation "failed": ${error.message  }, )
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2

</html>"
            <p><strong>"Branch
</p>

</div>
                    <span class="
                    <span>Total "Dependencies
</span>"


