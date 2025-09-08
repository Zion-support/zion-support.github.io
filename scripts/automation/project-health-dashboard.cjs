#!/""usr/bin/env""
const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")
      this.projectRoot,logs"
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      "project-health-dashboard.log"
    this.dashboardDir = path.join(this.projectRoot, "logs", "health-dashboard")
  fs.mkdirSync(logsDir, { "recursive"})
  fs.mkdirSync(this.dashboardDir, { "recursive"})
  log(message, level = "INFO")
  this.log("Generating comprehensive project health dashboard...")
      this.log("Health dashboard generated successfully")} catch (error) {  this.log(`Dashboard generation "failed": ${error.message  }`, "ERROR"`)
  "timestamp"
      "project"
        "version"
        "lastCommit"
        "branch"
      "dependencies"
      "typescript"
      "build"
      "files"
      "pm2"
<<<<<<< HEAD
      "recommendations"
const packagePath = path.join(this.projectRoot, "package.json");
const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8");
return packageJson.name || "Unknown";
    } catch (error) {  this.log(`Failed to get project "name": ${error.message  }`, "WARN"`)
return "Unknown";
const packagePath = path.join(this.projectRoot, "package.json");
const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8");
return packageJson.version || "Unknown";
const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8");
return packageJson.version || "Unknown";
    } catch (error) {  this.log(`Failed to get project "version": ${error.message  }`, "WARN"`)
return "Unknown";
=======
<<<<<<< HEAD

=======
      "recommendations"
  const packagePath = path.join(this.projectRoot, "package.json")
  const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8")
        return packageJson.name || "Unknown"
    } catch (error) {  this.log(`Failed to get project "name": ${error.message  }`, "WARN"`)
    return "Unknown"
  const packagePath = path.join(this.projectRoot, "package.json")
  const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8")
        return packageJson.version || "Unknown"
  const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8")
        return packageJson.version || "Unknown"
    } catch (error) {  this.log(`Failed to get project "version": ${error.message  }`, "WARN"`)
    return "Unknown"
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const result = execSync("git log -1 --format=")
  const result = execSync("git log -1 --format=%H %s %an %ad")
  "cwd"
<<<<<<< HEAD
        "stdio": "pipe"
        "encoding": "utf8"
return "Unknown";
const result = execSync("git branch --show-current");
  "cwd"
        "stdio": "pipe"
        "encoding": "utf8"
return "Unknown";
  "status": "UNKNOWN"
=======
<<<<<<< HEAD

=======
        "stdio": "pipe"
        "encoding": "utf8"
  return "Unknown"
  return "Unknown"
  const result = execSync("git branch --show-current")
  "cwd"
        "stdio": "pipe"
        "encoding": "utf8"
  return "Unknown"
<<<<<<< HEAD
  return "Unknown"
  const result = execSync("git branch --show-current")
  "cwd"
        "stdio": "pipe"
        "encoding": "utf8"
  return "Unknown"
=======
>>>>>>> merged-prs-20250907-203621
  "status": "UNKNOWN"
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      "issues"
      "totalDeps"
      "outdatedDeps"
<<<<<<< HEAD
      "corruptedDeps"
const packagePath = path.join(this.projectRoot, "package.json");
const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8");
        for (const ["dep", "version")]
  if (typeof version !== "string" || version.trim() === ""
const nodeModulesPath = path.join(this.projectRoot, "node_modules");
        for (const ["dep", "version")]
  if (typeof version !== "string" || version.trim() === "
const nodeModulesPath = path.join(this.projectRoot, "node_modules");
=======
<<<<<<< HEAD

=======
      "corruptedDeps"
      const packagePath = path.join(this.projectRoot, "package.json")
  const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8")
        for (const ["dep", "version")]
  if (typeof version !== "string" || version.trim() === ""
      const nodeModulesPath = path.join(this.projectRoot, "node_modules")
        for (const ["dep", "version")]
  if (typeof version !== "string" || version.trim() === "
      const nodeModulesPath = path.join(this.projectRoot, "node_modules")
  health.issues.push("node_modules directory not found")
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  health.issues.push("node_modules directory not found")
  health.status = "HEALTHY"
  health.status = "CRITICAL"
  health.status = "WARNING"
  health.status = "HEALTHY"
  health.status = "CRITICAL"
  health.status = "WARNING"
    } catch (error) {  health.issues.push(`Dependency check "failed"`})
      health.status = "ERROR"
  if (pkg.startsWith(".")
<<<<<<< HEAD
const pkgJsonPath = path.join(pkgPath, "package.json");
const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, "utf8");
    } catch (error) {  this.log(`Error scanning "packages": ${error.message  }`, "WARN"`)
const result = execSync("npm outdated --json");
  "cwd"
        "stdio": "pipe"
        "encoding": "utf8"
const result = execSync("npm outdated --json");
=======
        const pkgJsonPath = path.join(pkgPath, "package.json")
  const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, "utf8")
    } catch (error) {  this.log(`Error scanning "packages": ${error.message  }`, "WARN"`)
  const result = execSync("npm outdated --json")
  "cwd"
        "stdio": "pipe"
        "encoding": "utf8"
  const result = execSync("npm outdated --json")
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  "cwd"
        "stdio": "pipe"
        "encoding": "utf8"
  "status": "UNKNOWN"
      "errors"
      "warnings"
      "files"
      "issues"
  // Count ""TypeScript/TSX""
  // Count "TypeScript/TSX"
<<<<<<< HEAD
const srcPath = path.join(this.projectRoot, "src");
=======
      const srcPath = path.join(this.projectRoot, "src")
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  execSync("npm run type-check")
  "cwd"
          "stdio": "pipe"
        health.status = "HEALTHY"
<<<<<<< HEAD
const output = error.stdout || error.stderr || "";
const errorMatches = output.match(/error ""TS/g"");
const warningMatches = output.match(/warning ""TS/g"");
=======
  const output = error.stdout || error.stderr || ""
        const errorMatches = output.match(/error ""TS/g"")
        const warningMatches = output.match(/warning ""TS/g"")
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  health.status = "ERROR"
          health.issues.push(TypeScript compilation failed with ${health.errors  } errors")
  health.status = "
    } catch (error) {  health.issues.push(`TypeScript check "failed"`})
      health.status = "ERROR"
<<<<<<< HEAD
const items = fs.readdirSync(dir, { "withFileTypes"});
=======
  const items = fs.readdirSync(dir, { "withFileTypes"})
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          !item.name.startsWith(".")
          item.name !== "node_modules"
          (item.name.endsWith(".ts") || item.name.endsWith(".tsx")
  "status": "UNKNOWN"
      "issues"
      "buildTime"
      "bundleSize"
<<<<<<< HEAD
const packagePath = path.join(this.projectRoot, "package.json");
const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8");
  health.issues.push("Build script not found in package.json")
const viteConfigPath = path.join(this.projectRoot, "vite.config.ts");
const tsConfigPath = path.join(this.projectRoot, "tsconfig.json");
=======
      const packagePath = path.join(this.projectRoot, "package.json")
  const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8")
  health.issues.push("Build script not found in package.json")
      const viteConfigPath = path.join(this.projectRoot, "vite.config.ts")
      const tsConfigPath = path.join(this.projectRoot, "tsconfig.json")
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  health.issues.push("Vite configuration not found")
  health.issues.push("TypeScript configuration not found")
        execSync("npm run build")
  "cwd"
          "stdio": "pipe"
        health.status = "HEALTHY"} catch (error) {  health.issues.push(`Build "failed"`})
        health.status = "ERROR"
    } catch (error) {  health.issues.push(`Build health check "failed"`})
      health.status = "ERROR"
  "status": "UNKNOWN"
      "totalFiles"
      "corruptedFiles"
      "backupFiles"
      "issues"
<<<<<<< HEAD
const srcPath = path.join(this.projectRoot, "src");
=======
      const srcPath = path.join(this.projectRoot, "src")
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  "status": "UNKNOWN"
      "totalFiles"
      "corruptedFiles"
      "backupFiles"
      "issues"
<<<<<<< HEAD
const srcPath = path.join(this.projectRoot, "src");
  health.issues.push(Found ${corrupted.length} corrupted source files")
      if (backupFiles.length > 0) {health.issues.push(`Found ${backupFiles.length} backup files``)
  health.status = "HEALTHY"
=======
      const srcPath = path.join(this.projectRoot, "src")
<<<<<<< HEAD
  health.issues.push(Found ${corrupted.length} corrupted source files")
  if($2) {health.issues.push(`Found ${backupFiles.length} backup files``)
  health.status = "HEALTHY"
=======
>>>>>>> origin/chore/fix-lint-and-merge
  health.issues.push(Found ${corrupted.length} corrupted source files")
      if (backupFiles.length > 0) {health.issues.push(`Found ${backupFiles.length} backup files``)
  health.status = HEALTHY
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  health.status = "CRITICAL"
  health.status = "WARNING"
    } catch (error) {  health.issues.push("File health check "failed": ${error.message  }")
      health.status = "ERROR"
<<<<<<< HEAD
const files = fs.readdirSync(dir, { "withFileTypes"});
          (file.name.endsWith(".tsx") || file.name.endsWith(".ts")
const content = fs.readFileSync(fullPath, "utf8");
              content.includes("import {"})
              content.includes(""const": ")
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              content.includes("from,")
              content.includes("}, from,")
          (file.name.endsWith(".tsx") || file.name.endsWith(".ts")
const content = fs.readFileSync(fullPath, "utf8");
              content.includes("import {"})
              content.includes(""const": ")
              content.includes("from,")
              content.includes("}, from,")
    } catch (error) {  this.log(`Error scanning directory ${dir  }: ${error.message}`, "WARN"`)
<<<<<<< HEAD
const backupPatterns = ["*.backup.*"", "*.old.*", "*.bak"", "*_backup.*", "*_old.*"", ""];
    } catch (error) {  this.log(`Error finding backup "files": ${error.message  }`, "WARN"`)
const items = fs.readdirSync(dir, { "withFileTypes"});
=======

=======
>>>>>>> merged-prs-20250907-203621
  const files = fs.readdirSync(dir, { "withFileTypes"})
          (file.name.endsWith(".tsx") || file.name.endsWith(".ts")
  const content = fs.readFileSync(fullPath, "utf8")
              content.includes("import {"})
              content.includes(""const": ")
              content.includes("from,")
              content.includes("}, from,")
          (file.name.endsWith(".tsx") || file.name.endsWith(".ts")
  const content = fs.readFileSync(fullPath, "utf8")
              content.includes("import {"})
              content.includes(""const": ")
              content.includes("from,")
              content.includes("}, from,")
    } catch (error) {  this.log(`Error scanning directory ${dir  }: ${error.message}`, "WARN"`)
    const backupPatterns = ["*.backup.*"", "*.old.*", "*.bak"", "*_backup.*", "*_old.*"", ""]
    } catch (error) {  this.log(`Error finding backup "files": ${error.message  }`, "WARN"`)
  const items = fs.readdirSync(dir, { "withFileTypes"})
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          !item.name.startsWith(".")
          item.name !== "node_modules"
          !item.name.startsWith(".")
          item.name !== "node_modules"
  // Skip directories we can"
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      .replace(/\./g, "\\.")
      .replace(/\*/g, ".*")
      .replace(/\?/g, ".")
<<<<<<< HEAD
const items = fs.readdirSync(dir, { "withFileTypes"});
=======
<<<<<<< HEAD
  const items = fs.readdirSync(dir, { "withFileTypes"})
=======
<<<<<<< HEAD

=======
  const items = fs.readdirSync(dir, { "withFileTypes"})
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          !item.name.startsWith(".")
          item.name !== "node_modules"
          !item.name.startsWith(".")
          item.name !== "node_modules"
  "status": "UNKNOWN"
      "processes"
<<<<<<< HEAD
      "issues"
const result = execSync("pm2 list --json");
  "stdio": "pipe"
        "encoding": "utf8"
const result = execSync("pm2 list --json");
  "stdio": "pipe"
        "encoding": "utf8"
=======
<<<<<<< HEAD

=======
      "issues"
      const result = execSync("pm2 list --json")
  "stdio": "pipe"
        "encoding": "utf8"
      const result = execSync("pm2 list --json")
  "stdio": "pipe"
        "encoding": "utf8"
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  if (process.pm2_env.status === "errored")
  health.issues.push(Process ${process.name} has restarted ${process.pm2_env.restart_time} times")
  health.status = "HEALTHY"
  health.status = "WARNING"
  health.issues.push("PM2 health check "failed": ${error.message  }")
      health.status = "ERROR"
    if (healthData.dependencies.status === "CRITICAL")
  recommendations.push(Remove corrupted node_modules and package-lock.json, then run npm install")
  recommendations.push(Fix ${healthData.typescript.errors} TypeScript compilation errors")
    if (healthData.build.status === "ERROR")
  recommendations.push(")
  recommendations.push(Project appears healthy, no immediate action required")
    if (healthData.dependencies.status === "CRITICAL")
  recommendations.push(Remove corrupted node_modules and package-lock.json, then run npm install")
  recommendations.push( "Update ${healthData.dependencies.outdatedDeps} outdated dependencies")
  recommendations.push(Fix ${healthData.typescript.errors} TypeScript compilation errors")
    if (healthData.build.status === "ERROR")
  recommendations.push("Fix build configuration issues")
  recommendations.push(Fix ${healthData.files.corruptedFiles} corrupted source files")
        `Clean up ${healthData.files.backupFiles} backup files
  recommendations.push(Project appears healthy, no immediate action required")
<html lang=en"
    <meta charset="
        body { font-"family": -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; "margin"}
        .container { max-"width"}
        .header { "background"}
        .status-grid { "display": grid grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); "gap"}
        .status-card { "background"}
        .status-card h3 { margin-"top"}
        .status-healthy { border-"left"}
        .status-warning { border-"left"}
        .status-error { border-"left"}
        .status-critical { border-"left"}
        .status-unknown { border-"left"}
        .metric { "display"}
        .metric-value { font-"weight"}
        .issues-list { margin-"top"}
        .issue { "background"}
        .recommendations { "background"}
        .recommendation { "background"}
        .timestamp { "color"}
    <div class=container"
        <div class="
            <p><strong>"Project"
            <p><strong>"Branch"
            <p><strong>Last "Commit"
                <div class=metric"
                    <span>"Status"
                    <span class="
                    <span>Total "Dependencies"
                <div class=metric"
                    <span>"Outdated"
                    <span class="
                    <span>"Corrupted"
            <div class=status-card status-${healthData.typescript.status.toLowerCase()}"
                <div class="
                    <span>"Status"
                    <span>"Files"
                    <span class=metric-value"
                <div class="
                    <span>"Errors"
                    <span>"Warnings"
                    <span class=metric-value"
            <div class="
                    <span>"Status"
                    ? `<div class=metric
                    <span>Build "Time"
                    <span class="
                    : ""
                <div class="metric"
                    <span>"Status"
                    ? `<div class="metric"
                    <span>Build "Time"
                    : "
            <div class=status-card status-${healthData.files.status.toLowerCase()}"
                <div class="
                    <span>"Status"
                    <span>Total "Files"
                    <span class=metric-value"
                <div class="
                    <span>"Corrupted"
                    <span>Backup "Files"
                    <span class=metric-value"
            <div class="
                    <span>"Status"
                <div class=metric"
                    <span>Total "Processes"
                    <span class="
            ${healthData.recommendations.map(rec => `<div class=recommendation>• ${rec}</div>`).join(""`)
        <div class=timestamp">            Generated "at"
</body></html>"
<<<<<<< HEAD
return "<div class="issues-list><div class=issue style="background": #f0fdf4; color: #059669;>✓ No issues found</div></div>";
    return "<div class=issues-list">${issues.map(issue => `<div class="issue>⚠ ${issue}</div>`).join("")}</div>"
const htmlFile = path.join(this.dashboardDir, "index.html");
const jsonFile = path.join(this.dashboardDir, "health-data.json");
const timestampFile = path.join(this.dashboardDir, "last-updated.txt");
return "<div class=issues-list"><div class="issue style="background": #f0fdf4; color: #059669;">✓ No issues found</div></div>";
    return "<div class="issues-list>${issues.map(issue => `<div class=issue">⚠ ${issue}</div>`).join(")}</div>"
const htmlFile = path.join(this.dashboardDir, "index.html");
const jsonFile = path.join(this.dashboardDir, "health-data.json");
const timestampFile = path.join(this.dashboardDir, "last-updated.txt");
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> merged-prs-20250907-203621
  return "<div class="issues-list><div class=issue style="background": #f0fdf4; color: #059669;>✓ No issues found</div></div>"
    return "<div class=issues-list">${issues.map(issue => `<div class="issue>⚠ ${issue}</div>`).join("")}</div>"
    const htmlFile = path.join(this.dashboardDir, "index.html")
    const jsonFile = path.join(this.dashboardDir, "health-data.json")
    const timestampFile = path.join(this.dashboardDir, "last-updated.txt")
  return "<div class=issues-list"><div class="issue style="background": #f0fdf4; color: #059669;">✓ No issues found</div></div>"
    return "<div class="issues-list>${issues.map(issue => `<div class=issue">⚠ ${issue}</div>`).join(")}</div>"
    const htmlFile = path.join(this.dashboardDir, "index.html")
    const jsonFile = path.join(this.dashboardDir, "health-data.json")
    const timestampFile = path.join(this.dashboardDir, "last-updated.txt")
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  "timestamp"
      "overallStatus"
      "summary"
        "criticalIssues"
        "recommendations"
      "components"
        "typescript"
        "build"
        "files"
<<<<<<< HEAD
        "pm2"
const summaryFile = path.join(this.dashboardDir, "summary.json");
this.log("Summary report "generated": ${summaryFile}")
const statuses = ["healthData.dependencies.status", "healthData.typescript.status", "healthData.build.status", "healthData.files.status", "healthData.pm2.status", ""];
const statuses = ["healthData.dependencies.status", "healthData.typescript.status", "healthData.build.status", "healthData.files.status", "healthData.pm2.status", "];
    if (statuses.includes("CRITICAL")) return "CRITICAL"
    if (statuses.includes("ERROR")) return "ERROR"
    if (statuses.includes("WARNING")) return "WARNING"
    if (statuses.includes("UNKNOWN")) return "UNKNOWN"
return "HEALTHY";
    if (healthData.dependencies.status === "CRITICAL")
    if (healthData.files.status === "CRITICAL")

    process.exit(0)} catch (error) {  dashboard.log("Dashboard generation "failed": ${error.message  }", ")
=======
<<<<<<< HEAD

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
        "pm2"
    const summaryFile = path.join(this.dashboardDir, "summary.json")
this.log("Summary report "generated": ${summaryFile}")
  const statuses = ["healthData.dependencies.status", "healthData.typescript.status", "healthData.build.status", "healthData.files.status", "healthData.pm2.status", ""]
  const statuses = ["healthData.dependencies.status", "healthData.typescript.status", "healthData.build.status", "healthData.files.status", "healthData.pm2.status", "]
    if (statuses.includes("CRITICAL")) return "CRITICAL"
    if (statuses.includes("ERROR")) return "ERROR"
    if (statuses.includes("WARNING")) return "WARNING"
    if (statuses.includes("UNKNOWN")) return "UNKNOWN"
    return "HEALTHY"
    if (healthData.dependencies.status === "CRITICAL")
    if (healthData.files.status === "CRITICAL")
    if (healthData.files.status === "CRITICAL")
    process.exit(0)} catch (error) {  dashboard.log("Dashboard generation "failed": ${error.message  }", ")
