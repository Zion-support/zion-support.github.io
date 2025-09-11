#!/""usr/bin/env"" node;
/**;
 * Project Health Dashboard - PM2 Automation;
 * Provides comprehensive project health monitoring and reporting;
 */;
#!/usr/bin/env node
/**;
 * Project Health Dashboard - PM2 Automation;
 * Provides comprehensive project health monitoring and reporting;
 */;
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
class $1 {
  constructor() {
  this.projectRoot = process.cwd();
    this.logFile = path.join(;
      this.projectRoot,logs",
      "project-health-dashboard.log";
    );
    this.dashboardDir = path.join(this.projectRoot, "logs", "health-dashboard");
    this.ensureLogsDirectory()}
;
  ensureLogsDirectory() {
  const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { "recursive": true })}
;
    if (!fs.existsSync(this.dashboardDir)) {
  fs.mkdirSync(this.dashboardDir, { "recursive": true })}
  }
;
  log(message, level = "INFO") {
  log(message, level = "INFO") {
  const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    fs.appendFileSync(this.logFile, logEntry);}
;
  async generateHealthDashboard() {
  this.log("Generating comprehensive project health dashboard...");
    try {
  // 1. Collect all health data;
      const healthData = await this.collectHealthData();
      // 2. Generate dashboard HTML;
      const dashboardHtml = this.generateDashboardHtml(healthData);
      // 3. Save dashboard files;
      await this.saveDashboardFiles(dashboardHtml, healthData);
      // 4. Generate summary report;
      await this.generateSummaryReport(healthData);
      this.log("Health dashboard generated successfully")} catch (error) {  this.log(`Dashboard generation "failed": ${error.message  }`, "ERROR")}
  }
;
  async collectHealthData() {
  const healthData = {
  "timestamp": new Date().toISOString(),
      "project": {
  name: this.getProjectName(),
        "version": this.getProjectVersion(),
        "lastCommit": this.getLastCommit(),
        "branch": this.getCurrentBranch()},
      "dependencies": await this.getDependencyHealth(),
      "typescript": await this.getTypeScriptHealth(),
      "build": await this.getBuildHealth(),
      "files": await this.getFileHealth(),
      "pm2": await this.getPM2Health(),
      "recommendations": []}
;
    // Generate recommendations based on health data;
    healthData.recommendations = this.generateRecommendations(healthData);
    return healthData}
;
  getProjectName() {
  try {
  const packagePath = path.join(this.projectRoot, "package.json");
      if (fs.existsSync(packagePath)) {
  const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8"));
        return packageJson.name || "Unknown"}
    } catch (error) {  this.log(`Failed to get project "name": ${error.message  }`, "WARN")}
    return "Unknown"}
;
  getProjectVersion() {
  try {
  const packagePath = path.join(this.projectRoot, "package.json");
      if (fs.existsSync(packagePath)) {
  const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8"));
        return packageJson.version || "Unknown";
      if (fs.existsSync(packagePath)) {
  const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8"));
        return packageJson.version || "Unknown"}
    } catch (error) {  this.log(`Failed to get project "version": ${error.message  }`, "WARN")}
    return "Unknown"}
;
  getLastCommit() {
  try {
  const result = execSync("git log -1 --format="%H %s %an %ad, {
  const result = execSync("git log -1 --format=%H %s %an %ad", {
  "cwd": this.projectRoot,
        "stdio": "pipe",
        "encoding": "utf8"});
      return result.trim()} catch (error) {
} catch (error) {
  return "Unknown"} catch (error) {
  return "Unknown"}
  }
;
  getCurrentBranch() {
  try {
  const result = execSync("git branch --show-current", {
  "cwd": this.projectRoot,
        "stdio": "pipe",
        "encoding": "utf8"});
      return result.trim()} catch (error) {
} catch (error) {
  return "Unknown"}
  }
;
  async getDependencyHealth() {
  const health = {
  "status": "UNKNOWN",
      "issues": [],
      "totalDeps": 0,
      "outdatedDeps": 0,
      "corruptedDeps": 0}
    try {
  // Check package.json;
      const packagePath = path.join(this.projectRoot, "package.json");
      if (fs.existsSync(packagePath)) {
  const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8"));
        const deps = packageJson.dependencies || {}
        const devDeps = packageJson.devDependencies || {}
        health.totalDeps =;
          Object.keys(deps).length + Object.keys(devDeps).length;
        // Check for invalid versions;
        for (const ["dep", "version"] of Object.entries(deps)) {
  if (typeof version !== "string" || version.trim() === "") {health.issues.push(`Invalid version for ${dep}: ${version}`)}
        }
      }
;
      // Check node_modules;
      const nodeModulesPath = path.join(this.projectRoot, "node_modules");
      if (fs.existsSync(nodeModulesPath)) {
  // Check for invalid versions;
        for (const ["dep", "version"] of Object.entries(deps)) {
  if (typeof version !== "string" || version.trim() === ") {health.issues.push(`Invalid version for ${dep}: ${version}`)}
        }
      }
;
      // Check node_modules;
      const nodeModulesPath = path.join(this.projectRoot, "node_modules");
      if (fs.existsSync(nodeModulesPath)) {
  const corrupted = await this.findCorruptedPackages(nodeModulesPath);
        health.corruptedDeps = corrupted.length;
        if (corrupted.length > 0) {health.issues.push(`Found ${corrupted.length} corrupted packages`)}
      } else {
  health.issues.push("node_modules directory not found")}
;
      // Check for outdated dependencies;
      try {
} else {
  health.issues.push("node_modules directory not found")}
;
      // Check for outdated dependencies;
      try {
  const outdated = await this.checkOutdatedDependencies();
      try {
  const outdated = await this.checkOutdatedDependencies();
health.outdatedDeps = outdated.length;
        if (outdated.length > 0) {health.issues.push(`Found ${outdated.length} outdated dependencies`)}
      } catch (error) {
  // npm outdated returns non-zero when there are outdated deps}
;
      // Determine overall status;
      if (health.issues.length === 0) {
  health.status = "HEALTHY"} else if (health.corruptedDeps > 0) {
  health.status = "CRITICAL"} else if (health.issues.length > 0) {
  health.status = "WARNING"} catch (error) {
  // npm outdated returns non-zero when there are outdated deps}
;
      // Determine overall status;
      if (health.issues.length === 0) {
  health.status = "HEALTHY"} else if (health.corruptedDeps > 0) {
  health.status = "CRITICAL"} else if (health.issues.length > 0) {
  health.status = "WARNING"}
    } catch (error) {  health.issues.push(`Dependency check "failed": ${error.message  }`);
      health.status = "ERROR"}
;
    return health}
;
  async findCorruptedPackages(nodeModulesPath) {
  const corrupted = [];
    try {
  const packages = fs.readdirSync(nodeModulesPath);
      for (const pkg of packages) {
  if (pkg.startsWith(".")) continue;
        const pkgPath = path.join(nodeModulesPath, pkg);
        const pkgJsonPath = path.join(pkgPath, "package.json");
        if (fs.existsSync(pkgJsonPath)) {
  try {
  const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, "utf8"));
            if (!pkgJson.name || !pkgJson.version) {
  corrupted.push(pkg)}
          } catch {
  corrupted.push(pkg)}
        } else {
  corrupted.push(pkg)}
      }
    } catch (error) {  this.log(`Error scanning "packages": ${error.message  }`, "WARN")}
;
    return corrupted}
;
  async checkOutdatedDependencies() {
  try {
  const result = execSync("npm outdated --json", {
  "cwd": this.projectRoot,
        "stdio": "pipe",
        "encoding": "utf8",
  async checkOutdatedDependencies() {
  try {
  const result = execSync("npm outdated --json", {
  "cwd": this.projectRoot,
        "stdio": "pipe",
        "encoding": "utf8"});
      const outdated = JSON.parse(result);
      return Object.keys(outdated)} catch (error) {
  if (error.stdout) {
  try {
  const outdated = JSON.parse(error.stdout);
          return Object.keys(outdated)} catch {
} catch (error) {
  if (error.stdout) {
  try {
  const outdated = JSON.parse(error.stdout);
          return Object.keys(outdated)} catch {
  return []} catch {
  return []}
      }
      return []}
  }
;
  async getTypeScriptHealth() {
  const health = {
  "status": "UNKNOWN",
      "errors": 0,
      "warnings": 0,
      "files": 0,
      "issues": []}
    try {
  // Count ""TypeScript/TSX"" files;
    try {
  // Count "TypeScript/TSX" files;
      const srcPath = path.join(this.projectRoot, "src");
      if (fs.existsSync(srcPath)) {
  health.files = await this.countTypeScriptFiles(srcPath)}
;
      // Run type check;
      try {
  execSync("npm run type-check", {
  "cwd": this.projectRoot,
          "stdio": "pipe"});
        health.status = "HEALTHY"} catch (error) {
  const output = error.stdout || error.stderr || "";
        const errorMatches = output.match(/error ""TS/g"") || [];
        const warningMatches = output.match(/warning ""TS/g"") || [];
        health.errors = errorMatches.length;
        health.warnings = warningMatches.length;
        if (health.errors > 0) {
  health.status = "ERROR";
          health.issues.push(TypeScript compilation failed with ${health.errors  } errors";
          )} else if (health.warnings > 0) {
  health.status = "WARNING`;
          health.issues.push(TypeScript compilation succeeded with ${health.warnings} warnings`;
          )}
      }
    } catch (error) {  health.issues.push(`TypeScript check "failed": ${error.message  }`);
      health.status = "ERROR"}
;
    return health}
;
  async countTypeScriptFiles(dir) {
  let count = 0;
    try {
  const items = fs.readdirSync(dir, { "withFileTypes": true });
      for (const item of items) {
  const fullPath = path.join(dir, item.name);
        if (;
          item.isDirectory() &&;
          !item.name.startsWith(".") &&;
          item.name !== "node_modules";
        ) {
  count += await this.countTypeScriptFiles(fullPath)} else if (;
          item.isFile() &&;
          (item.name.endsWith(".ts") || item.name.endsWith(".tsx"));
        ) {
  count++}
      }
    } catch (error) {
  // Skip inaccessible directories}
} catch (error) {
  // Skip inaccessible directories}
;
    return count}
;
  async getBuildHealth() {
  const health = {
  "status": "UNKNOWN",
      "issues": [],
      "buildTime": null,
      "bundleSize": null}
    try {
  // Check if build script exists;
      const packagePath = path.join(this.projectRoot, "package.json");
      if (fs.existsSync(packagePath)) {
  const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8"));
        if (!packageJson.scripts || !packageJson.scripts.build) {
  health.issues.push("Build script not found in package.json")}
      }
;
      // Check build configuration files;
      const viteConfigPath = path.join(this.projectRoot, "vite.config.ts");
      const tsConfigPath = path.join(this.projectRoot, "tsconfig.json");
      if (!fs.existsSync(viteConfigPath)) {
  health.issues.push("Vite configuration not found")}
;
      if (!fs.existsSync(tsConfigPath)) {
  health.issues.push("TypeScript configuration not found")}
;
      // Try to run build;
      try {
  const startTime = Date.now();
        execSync("npm run build", {
  "cwd": this.projectRoot,
          "stdio": "pipe"});
        health.buildTime = Date.now() - startTime;
        health.status = "HEALTHY"} catch (error) {  health.issues.push(`Build "failed": ${error.message  }`);
        health.status = "ERROR"}
    } catch (error) {  health.issues.push(`Build health check "failed": ${error.message  }`);
      health.status = "ERROR"}
;
    return health}
;
  async getFileHealth() {
  const health = {
  "status": "UNKNOWN",
      "totalFiles": 0,
      "corruptedFiles": 0,
      "backupFiles": 0,
      "issues": []}
    try {
  // Scan for corrupted files;
      const srcPath = path.join(this.projectRoot, "src");
      if (fs.existsSync(srcPath)) {
  const corrupted = await this.scanForCorruptedFiles(srcPath);
        health.corruptedFiles = corrupted.length;
        if (corrupted.length > 0) {
  health.issues.push(Found ${corrupted.length} corrupted source files`;
          )}
      }
;
  async getFileHealth() {
  const health = {
  "status": "UNKNOWN",
      "totalFiles": 0,
      "corruptedFiles": 0,
      "backupFiles": 0,
      "issues": []}
;
    try {
  // Scan for corrupted files;
      const srcPath = path.join(this.projectRoot, "src");
      if (fs.existsSync(srcPath)) {
  const corrupted = await this.scanForCorruptedFiles(srcPath);
        health.corruptedFiles = corrupted.length;
        if (corrupted.length > 0) {
  health.issues.push(Found ${corrupted.length} corrupted source files";
          )}
      }
;
      // Find backup files;
      const backupFiles = await this.findBackupFiles();
      health.backupFiles = backupFiles.length;
      if (backupFiles.length > 0) {health.issues.push(`Found ${backupFiles.length} backup files")}
;
      // Count total files;
      health.totalFiles = await this.countTotalFiles(this.projectRoot);
      // Determine status;
      if (health.issues.length === 0) {
  health.status = "HEALTHY"} else if (health.corruptedFiles > 0) {
  health.status = "CRITICAL"} else if (health.issues.length > 0) {
  health.status = "WARNING"}
    } catch (error) {  health.issues.push("File health check "failed": ${error.message  }");
      health.status = "ERROR"}
;
    return health}
;
  async scanForCorruptedFiles(dir) {
  const corrupted = [];
    try {
  const files = fs.readdirSync(dir, { "withFileTypes": true });
      for (const file of files) {
  const fullPath = path.join(dir, file.name);
        if (file.isDirectory()) {
  corrupted.push(...(await this.scanForCorruptedFiles(fullPath)))} else if (;
          file.isFile() &&;
          (file.name.endsWith(".tsx") || file.name.endsWith(".ts"));
        ) {
  try {
  const content = fs.readFileSync(fullPath, "utf8");
            // Check for corruption patterns;
            if (;
              content.includes("import {") ||;
              content.includes(""const": ") ||;
              content.includes("from,") ||;
              content.includes("}, from,");
            ) {
  corrupted.push(fullPath)}
          } catch (error) {
} else if (;
          file.isFile() &&;
          (file.name.endsWith(".tsx") || file.name.endsWith(".ts"));
        ) {
  try {
  const content = fs.readFileSync(fullPath, "utf8");
            // Check for corruption patterns;
            if (;
              content.includes("import {") ||;
              content.includes(""const": ") ||;
              content.includes("from,") ||;
              content.includes("}, from,");
            ) {
  corrupted.push(fullPath)}
          } catch (error) {
  corrupted.push(fullPath)}
        }
      }
    } catch (error) {  this.log(`Error scanning directory ${dir  }: ${error.message}`, "WARN")}
;
    return corrupted}
;
  async findBackupFiles() {
  const backupFiles = [];
    const backupPatterns = ["*.backup.*"", "*.old.*", "*.bak"", "*_backup.*", "*_old.*"", ""];
    try {
  const allFiles = await this.getAllFiles(this.projectRoot);
      for (const file of allFiles) {
  const fileName = path.basename(file);
        for (const pattern of backupPatterns) {
  if (this.matchesPattern(fileName, pattern)) {
  backupFiles.push(file);
            break}
        }
      }
    } catch (error) {  this.log(`Error finding backup "files": ${error.message  }`, "WARN")}
;
    return backupFiles}
;
  async getAllFiles(dir) {
  const files = [];
    try {
  const items = fs.readdirSync(dir, { "withFileTypes": true });
      for (const item of items) {
  const fullPath = path.join(dir, item.name);
        if (;
          item.isDirectory() &&;
          !item.name.startsWith(".") &&;
          item.name !== "node_modules";
        ) {
  if (;
          item.isDirectory() &&;
          !item.name.startsWith(".") &&;
          item.name !== "node_modules";
        ) {
  files.push(...(await this.getAllFiles(fullPath)))} else if (item.isFile()) {
  files.push(fullPath)}
      }
    } catch (error) {
  // Skip directories we can"t access}
;
    return files}
;
  matchesPattern(fileName, pattern) {
  const regex = pattern;
      .replace(/\./g, "\\.");
      .replace(/\*/g, ".*");
      .replace(/\?/g, ".");return new RegExp(`^${regex}$`).test(fileName)}
;
  async countTotalFiles(dir) {
  let count = 0;
    try {
  const items = fs.readdirSync(dir, { "withFileTypes": true });
      for (const item of items) {
  const fullPath = path.join(dir, item.name);
        if (;
          item.isDirectory() &&;
          !item.name.startsWith(".") &&;
          item.name !== "node_modules";
        ) {
  if (;
          item.isDirectory() &&;
          !item.name.startsWith(".") &&;
          item.name !== "node_modules";
        ) {
  count += await this.countTotalFiles(fullPath)} else if (item.isFile()) {
  count++}
      }
    } catch (error) {
  // Skip inaccessible directories}
} catch (error) {
  // Skip inaccessible directories}
;
    return count;
    return count}
;
  async getPM2Health() {
  const health = {
  "status": "UNKNOWN",
      "processes": [],
      "issues": []}
    try {
  // Get PM2 process list;
      const result = execSync("pm2 list --json", {
  "stdio": "pipe",
        "encoding": "utf8",
    try {
  // Get PM2 process list;
      const result = execSync("pm2 list --json", {
  "stdio": "pipe",
        "encoding": "utf8"});
      const processes = JSON.parse(result);
      health.processes = processes;
      // Check for issues;
      for (const process of processes) {
  if (process.pm2_env.status === "errored") {health.issues.push(`Process ${process.name} is in error state`)}
;
        if (process.pm2_env.restart_time > 10) {
  health.issues.push(Process ${process.name} has restarted ${process.pm2_env.restart_time} times";
          )}
      }
;
      if (health.issues.length === 0) {
  health.status = "HEALTHY"} else {
  health.status = "WARNING"}
    } catch (error) {
  health.issues.push("PM2 health check "failed": ${error.message  }");
      health.status = "ERROR"}
;
    return health}
;
  generateRecommendations(healthData) {
  const recommendations = [];
    // Dependency recommendations;
    if (healthData.dependencies.status === "CRITICAL") {
  recommendations.push(Remove corrupted node_modules and package-lock.json, then run npm install";
      )}
;
    if (healthData.dependencies.outdatedDeps > 0) {
  recommendations.push( `Update ${healthData.dependencies.outdatedDeps} outdated dependencies`;
      )}
;
    // TypeScript recommendations;
    if (healthData.typescript.errors > 0) {
  recommendations.push(Fix ${healthData.typescript.errors} TypeScript compilation errors";
      )}
;
    // Build recommendations;
    if (healthData.build.status === "ERROR") {
  recommendations.push("Fix build configuration issues`)}
;
    // File recommendations;
    if (healthData.files.corruptedFiles > 0) {
  recommendations.push(Fix ${healthData.files.corruptedFiles} corrupted source files`;
      )}
;
    if (healthData.files.backupFiles > 0) {
  recommendations.push(;
        `Clean up ${healthData.files.backupFiles} backup files`;
      )}
;
    if (recommendations.length === 0) {
  recommendations.push(Project appears healthy, no immediate action required";
    // Dependency recommendations;
    if (healthData.dependencies.status === "CRITICAL") {
  recommendations.push(Remove corrupted node_modules and package-lock.json, then run npm install";
      )}
;
    if (healthData.dependencies.outdatedDeps > 0) {
  recommendations.push( "Update ${healthData.dependencies.outdatedDeps} outdated dependencies";
      )}
;
    // TypeScript recommendations;
    if (healthData.typescript.errors > 0) {
  recommendations.push(Fix ${healthData.typescript.errors} TypeScript compilation errors";
      )}
;
    // Build recommendations;
    if (healthData.build.status === "ERROR") {
  recommendations.push("Fix build configuration issues")}
;
    // File recommendations;
    if (healthData.files.corruptedFiles > 0) {
  recommendations.push(Fix ${healthData.files.corruptedFiles} corrupted source files";
      )}
;
    if (healthData.files.backupFiles > 0) {
  recommendations.push(;
        `Clean up ${healthData.files.backupFiles} backup files";
      )}
;
    if (recommendations.length === 0) {
  recommendations.push(Project appears healthy, no immediate action required";
      )}
;
    return recommendations}
;
  generateDashboardHtml(healthData) {return `;
<!DOCTYPE html>;
<html lang=en">;
<head>;
    <meta charset="UTF-8>;
    <meta name=viewport content=width=device-width, initial-scale=1.0>;
    <title>Project Health Dashboard</title>;
    <style>;
        body { font-"family": -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; "margin": 0 padding: 20px background: #f5f5f5}
        .container { max-"width": 1200px margin: 0 auto}
        .header { "background": white padding: 20px border-radius: 8px margin-bottom: 20px box-shadow: 0 2px 4px rgba(0,0,0,0.1)}
        .status-grid { "display": grid grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); "gap": 20px margin-bottom: 20px}
        .status-card { "background": white padding: 20px border-radius: 8px box-shadow: 0 2px 4px rgba(0,0,0,0.1)}
        .status-card h3 { margin-"top": 0 color: #333}
        .status-healthy { border-"left": 4px solid #10b981}
        .status-warning { border-"left": 4px solid #f59e0b}
        .status-error { border-"left": 4px solid #ef4444}
        .status-critical { border-"left": 4px solid #dc2626}
        .status-unknown { border-"left": 4px solid #6b7280}
        .metric { "display": flex justify-content: space-between; margin: 10px 0}
        .metric-value { font-"weight": bold}
        .issues-list { margin-"top": 15px}
        .issue { "background": #fef2f2; color: #dc2626; padding: 8px 12px; margin: 5px 0; border-radius: 4px font-size: 14px}
        .recommendations { "background": white padding: 20px border-radius: 8px box-shadow: 0 2px 4px rgba(0,0,0,0.1)}
        .recommendation { "background": #f0f9ff; color: #0369a1; padding: 8px 12px; margin: 5px 0; border-radius: 4px}
        .timestamp { "color": #6b7280; font-size: 14px margin-top: 20px text-align: center}
    </style>;
</head>;
<body>;
    <div class=container">;
        <div class="header>;
            <h1>🚀 Project Health Dashboard</h1>;
            <p><strong>"Project": </strong> ${healthData.project.name} v${healthData.project.version}</p>;
            <p><strong>"Branch": </strong> ${healthData.project.branch}</p>;
            <p><strong>Last "Commit": </strong> ${healthData.project.lastCommit}</p>;
        </div>;
        <div class=status-grid>;
            <div class=status-card status-${healthData.dependencies.status.toLowerCase()}>;
                <h3>📦 Dependencies</h3>;
                <div class=metric">;
                    <span>"Status": </span>;
                    <span class="metric-value>${healthData.dependencies.status}</span>;
                </div>;
                <div class=metric>;
                    <span>Total "Dependencies": </span>;
                    <span class=metric-value>${healthData.dependencies.totalDeps}</span>;
                </div>;
                <div class=metric">;
                    <span>"Outdated": </span>;
                    <span class="metric-value>${healthData.dependencies.outdatedDeps}</span>;
                </div>;
                <div class=metric>;
                    <span>"Corrupted": </span>;
                    <span class=metric-value>${healthData.dependencies.corruptedDeps}</span>;
                </div>;
                ${this.renderIssues(healthData.dependencies.issues)}
            </div>;
            <div class=status-card status-${healthData.typescript.status.toLowerCase()}">;
                <h3>🔧 TypeScript</h3>;
                <div class="metric>;
                    <span>"Status": </span>;
                    <span class=metric-value>${healthData.typescript.status}</span>;
                </div>;
                <div class=metric>;
                    <span>"Files": </span>;
                    <span class=metric-value">${healthData.typescript.files}</span>;
                </div>;
                <div class="metric>;
                    <span>"Errors": </span>;
                    <span class=metric-value>${healthData.typescript.errors}</span>;
                </div>;
                <div class=metric>;
                    <span>"Warnings": </span>;
                    <span class=metric-value">${healthData.typescript.warnings}</span>;
                </div>;
                ${this.renderIssues(healthData.typescript.issues)}
            </div>;
            <div class="status-card status-${healthData.build.status.toLowerCase()}>;
                <h3>🏗️ Build</h3>;
                <div class=metric>;
                    <span>"Status": </span>;
                    <span class=metric-value>${healthData.build.status}</span>;
                </div>;
                ${
  healthData.build.buildTime;
                    ? `<div class=metric">;
                    <span>Build "Time": </span>;
                    <span class="metric-value>${healthData.build.buildTime}ms</span></div>`;
                    : "";
            </div>;
            <div class=status-card status-${healthData.build.status.toLowerCase()}>;
                <h3>🏗️ Build</h3>;
                <div class="metric">;
                    <span>"Status": </span>;
                    <span class=metric-value>${healthData.build.status}</span>;
                </div>;
                ${
  healthData.build.buildTime;
                    ? `<div class="metric">;
                    <span>Build "Time": </span>;
                    <span class=metric-value>${healthData.build.buildTime}ms</span></div>`;
                    : "}
                ${this.renderIssues(healthData.build.issues)}
            </div>;
            <div class=status-card status-${healthData.files.status.toLowerCase()}">;
                <h3>📁 Files</h3>;
                <div class="metric>;
                    <span>"Status": </span>;
                    <span class=metric-value>${healthData.files.status}</span>;
                </div>;
                <div class=metric>;
                    <span>Total "Files": </span>;
                    <span class=metric-value">${healthData.files.totalFiles}</span>;
                </div>;
                <div class="metric>;
                    <span>"Corrupted": </span>;
                    <span class=metric-value>${healthData.files.corruptedFiles}</span>;
                </div>;
                <div class=metric>;
                    <span>Backup "Files": </span>;
                    <span class=metric-value">${healthData.files.backupFiles}</span>;
                </div>;
                ${this.renderIssues(healthData.files.issues)}
            </div>;
            <div class="status-card status-${healthData.pm2.status.toLowerCase()}>;
                <h3>⚡ PM2 Processes</h3>;
                <div class=metric>;
                    <span>"Status": </span>;
                    <span class=metric-value>${healthData.pm2.status}</span>;
                </div>;
                <div class=metric">;
                    <span>Total "Processes": </span>;
                    <span class="metric-value>${healthData.pm2.processes.length}</span>;
                </div>;
                ${this.renderIssues(healthData.pm2.issues)}
            </div>;
        </div>;
        <div class=recommendations>;
            <h3>💡 Recommendations</h3>;
            ${healthData.recommendations.map(rec => `<div class=recommendation>• ${rec}</div>`).join("")}
        </div>;
        <div class=timestamp">            Generated "at": ${new Date(healthData.timestamp).toLocaleString()}
        </div>;
    </div>;
</body></html>"}
;
  renderIssues(issues) {
  if (!issues || issues.length === 0) {
  return "<div class="issues-list><div class=issue style="background": #f0fdf4; color: #059669;>✓ No issues found</div></div>"}
;
    return "<div class=issues-list">${issues.map(issue => `<div class="issue>⚠️ ${issue}</div>`).join("")}</div>"}
;
  async saveDashboardFiles(dashboardHtml, healthData) {
  // Save HTML dashboard;
    const htmlFile = path.join(this.dashboardDir, "index.html");
    fs.writeFileSync(htmlFile, dashboardHtml);
    // Save JSON data;
    const jsonFile = path.join(this.dashboardDir, "health-data.json");
    fs.writeFileSync(jsonFile, JSON.stringify(healthData, null, 2));
    // Save timestamp;
    const timestampFile = path.join(this.dashboardDir, "last-updated.txt");
  renderIssues(issues) {
  if (!issues || issues.length === 0) {
  return "<div class=issues-list"><div class="issue style="background": #f0fdf4; color: #059669;">✓ No issues found</div></div>"}
;
    return "<div class="issues-list>${issues.map(issue => `<div class=issue">⚠️ ${issue}</div>`).join(")}</div>"}
;
  async saveDashboardFiles(dashboardHtml, healthData) {
  // Save HTML dashboard;
    const htmlFile = path.join(this.dashboardDir, "index.html");
    fs.writeFileSync(htmlFile, dashboardHtml);
    // Save JSON data;
    const jsonFile = path.join(this.dashboardDir, "health-data.json");
    fs.writeFileSync(jsonFile, JSON.stringify(healthData, null, 2));
    // Save timestamp;
    const timestampFile = path.join(this.dashboardDir, "last-updated.txt");
    fs.writeFileSync(timestampFile, new Date().toISOString())}
;
  async generateSummaryReport(healthData) {
  const summary = {
  "timestamp": healthData.timestamp,
      "overallStatus": this.calculateOverallStatus(healthData),
      "summary": {
  totalIssues: this.countTotalIssues(healthData),
        "criticalIssues": this.countCriticalIssues(healthData),
        "recommendations": healthData.recommendations.length},
      "components": {
  dependencies: healthData.dependencies.status,
        "typescript": healthData.typescript.status,
        "build": healthData.build.status,
        "files": healthData.files.status,
        "pm2": healthData.pm2.status}}
    const summaryFile = path.join(this.dashboardDir, "summary.json");
    fs.writeFileSync(summaryFile, JSON.stringify(summary, null, 2));
this.log("Summary report "generated": ${summaryFile}");
    return summary}
;
  calculateOverallStatus(healthData) {
  const statuses = ["healthData.dependencies.status", "healthData.typescript.status", "healthData.build.status", "healthData.files.status", "healthData.pm2.status", ""];
  calculateOverallStatus(healthData) {
  const statuses = ["healthData.dependencies.status", "healthData.typescript.status", "healthData.build.status", "healthData.files.status", "healthData.pm2.status", "];
    if (statuses.includes("CRITICAL")) return "CRITICAL";
    if (statuses.includes("ERROR")) return "ERROR";
    if (statuses.includes("WARNING")) return "WARNING";
    if (statuses.includes("UNKNOWN")) return "UNKNOWN";
    return "HEALTHY"}
;
  countTotalIssues(healthData) {
  return (;
      healthData.dependencies.issues.length +;
      healthData.typescript.issues.length +;
      healthData.build.issues.length +;
      healthData.files.issues.length +;
      healthData.pm2.issues.length;
    )}
;
  countCriticalIssues(healthData) {
  let count = 0;
    if (healthData.dependencies.status === "CRITICAL") count++;
    if (healthData.files.status === "CRITICAL") count++;
    return count}
}
;
// Main execution;
async function $1() {
    if (healthData.files.status === "CRITICAL") count++;
    return count}
}
;
// Main execution;
async function main() {
  const dashboard = new ProjectHealthDashboard();
  try {
  await dashboard.generateHealthDashboard();
    process.exit(0)} catch (error) {  dashboard.log("Dashboard generation "failed": ${error.message  }", "ERROR`);
    process.exit(1)}
}
;
if (require.main === module) {
  main()}
;
module.exports = ProjectHealthDashboard
#!/usr/bin/env node/""usr/bin/env"" node;#!/usr/bin/env node;"const fs = require("fs");"const path = require("path");"const { execSync } = require("child_process");class $1 { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join(;" this.projectRoot,logs"," "project-health-dashboard.log"; );" this.dashboardDir = path.join(this.projectRoot, "logs", "health-dashboard"); this.ensureLogsDirectory()}; ensureLogsDirectory() { const logsDir = path.dirname(this.logFile); if (!fs.existsSync(logsDir)) {" fs.mkdirSync(logsDir, { recursive: true })}; if (!fs.existsSync(this.dashboardDir)) {" fs.mkdirSync(this.dashboardDir, { recursive: true })} };" log(message, level = "INFO") {" log(message, level = "INFO") { const timestamp = new Date().toISOString(); const logEntry = `[${timestamp}] [${level}] ${message}\n`;` fs.appendFileSync(this.logFile, logEntry);console.log(`[${level}] ${message}`)}; async generateHealthDashboard() {" this.log("Generating comprehensive project health dashboard."); try { / 1. Collect all health data; const healthData = await this.collectHealthData(); / 2. Generate dashboard HTML; const dashboardHtml = this.generateDashboardHtml(healthData); / 3. Save dashboard files; await this.saveDashboardFiles(dashboardHtml, healthData); / 4. Generate summary report; await this.generateSummaryReport(healthData);"` this.log("Health dashboard generated successfully")} catch (error) { this.log(`Dashboard generation failed: ${error.message }`, "ERROR")} }; async collectHealthData() { const healthData = {" timestamp: new Date().toISOString()," project: { name: this.getProjectName()," version: this.getProjectVersion()," lastCommit: this.getLastCommit()," branch: this.getCurrentBranch()}," dependencies: await this.getDependencyHealth()," typescript: await this.getTypeScriptHealth()," build: await this.getBuildHealth()," files: await this.getFileHealth()," pm2: await this.getPM2Health()," recommendations: []}; / Generate recommendations based on health data; healthData.recommendations = this.generateRecommendations(healthData); return healthData}; getProjectName() { try {" const packagePath = path.join(this.projectRoot, "package.json"); if (fs.existsSync(packagePath)) {" const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8"));" return packageJson.name | "Unknown"}"` } catch (error) { this.log(`Failed to get project name: ${error.message }`, "WARN")}" return "Unknown"}; getProjectVersion() { try {" const packagePath = path.join(this.projectRoot, "package.json"); if (fs.existsSync(packagePath)) {" const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8"));" return packageJson.version | "Unknown"; if (fs.existsSync(packagePath)) {" const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8"));" return packageJson.version | "Unknown"}"` } catch (error) { this.log(`Failed to get project version: ${error.message }`, "WARN")}" return "Unknown"}; getLastCommit() { try {" const result = execSync("git log -1 --format="%H %s %an %ad, {" const result = execSync("git log -1 --format=%H %s %an %ad", {" cwd: this.projectRoot," stdio: "pipe"," encoding: "utf8"}); return result.trim()} catch (error) {} catch (error) {" return "Unknown"} catch (error) {" return "Unknown"} }; getCurrentBranch() { try {" const result = execSync("git branch --show-current", {" cwd: this.projectRoot," stdio: "pipe"," encoding: "utf8"}); return result.trim()} catch (error) {} catch (error) {" return "Unknown"} }; async getDependencyHealth() { const health = {" status: "UNKNOWN"," issues: []," totalDeps: 0," outdatedDeps: 0," corruptedDeps: 0} try { / Check package.json;" const packagePath = path.join(this.projectRoot, "package.json"); if (fs.existsSync(packagePath)) {" const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8")); const deps = packageJson.dependencies | {} const devDeps = packageJson.devDependencies | {} health.totalDeps =; Object.keys(deps).length + Object.keys(devDeps).length; / Check for invalid versions;" for (const ["dep", "version"] of Object.entries(deps)) {"` if (typeof version !== "string" | version.trim() === "") {health.issues.push(`Invalid version for ${dep}: ${version}`)} } }; / Check node_modules;" const nodeModulesPath = path.join(this.projectRoot, "node_modules"); if (fs.existsSync(nodeModulesPath)) { / Check for invalid versions;" for (const ["dep", "version"] of Object.entries(deps)) {"` if (typeof version !== "string" | version.trim() === ") {health.issues.push(`Invalid version for ${dep}: ${version}`)} } }; / Check node_modules;" const nodeModulesPath = path.join(this.projectRoot, "node_modules"); if (fs.existsSync(nodeModulesPath)) { const corrupted = await this.findCorruptedPackages(nodeModulesPath); health.corruptedDeps = corrupted.length;` if (corrupted.length > 0) {health.issues.push(`Found ${corrupted.length} corrupted packages`)} } else {" health.issues.push("node_modules directory not found")}; / Check for outdated dependencies; try {} else {" health.issues.push("node_modules directory not found")}; / Check for outdated dependencies; try { const outdated = await this.checkOutdatedDependencies(); try { const outdated = await this.checkOutdatedDependencies();health.outdatedDeps = outdated.length;` if (outdated.length > 0) {health.issues.push(`Found ${outdated.length} outdated dependencies`)} } catch (error) { / npm outdated returns non-zero when there are outdated deps}; / Determine overall status; if (health.issues.length === 0) {" health.status = "HEALTHY"} else if (health.corruptedDeps > 0) {" health.status = "CRITICAL"} else if (health.issues.length > 0) {" health.status = "WARNING"} catch (error) { / npm outdated returns non-zero when there are outdated deps}; / Determine overall status; if (health.issues.length === 0) {" health.status = "HEALTHY"} else if (health.corruptedDeps > 0) {" health.status = "CRITICAL"} else if (health.issues.length > 0) {" health.status = "WARNING"}"` } catch (error) { health.issues.push(`Dependency check failed: ${error.message }`);" health.status = "ERROR"}; return health}; async findCorruptedPackages(nodeModulesPath) { const corrupted = []; try { const packages = fs.readdirSync(nodeModulesPath); for (const pkg of packages) {" if (pkg.startsWith(".")) continue; const pkgPath = path.join(nodeModulesPath, pkg);" const pkgJsonPath = path.join(pkgPath, "package.json"); if (fs.existsSync(pkgJsonPath)) { try {" const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, "utf8")); if (!pkgJson.name | !pkgJson.version) { corrupted.push(pkg)} } catch { corrupted.push(pkg)} } else { corrupted.push(pkg)} }"` } catch (error) { this.log(`Error scanning packages: ${error.message }`, "WARN")}; return corrupted}; async checkOutdatedDependencies() { try {" const result = execSync("npm outdated --json", {" cwd: this.projectRoot," stdio: "pipe"," encoding: "utf8", async checkOutdatedDependencies() { try {" const result = execSync("npm outdated --json", {" cwd: this.projectRoot," stdio: "pipe"," encoding: "utf8"}); const outdated = JSON.parse(result); return Object.keys(outdated)} catch (error) { if (error.stdout) { try { const outdated = JSON.parse(error.stdout); return Object.keys(outdated)} catch {} catch (error) { if (error.stdout) { try { const outdated = JSON.parse(error.stdout); return Object.keys(outdated)} catch { return []} catch { return []} } return []} }; async getTypeScriptHealth() { const health = {" status: "UNKNOWN"," errors: 0," warnings: 0," files: 0," issues: []} try {" / Count ""TypeScript/TSX"" files; try {" / Count "TypeScript/TSX" files;" const srcPath = path.join(this.projectRoot, "src"); if (fs.existsSync(srcPath)) { health.files = await this.countTypeScriptFiles(srcPath)}; / Run type check; try {" execSync("npm run type-check", {" cwd: this.projectRoot," stdio: "pipe"});" health.status = "HEALTHY"} catch (error) {" const output = error.stdout | error.stderr | "";" const errorMatches = output.match(/error ""TS/g"") | [];" const warningMatches = output.match(/warning ""TS/g"") | []; health.errors = errorMatches.length; health.warnings = warningMatches.length; if (health.errors > 0) {" health.status = "ERROR";" health.issues.push(TypeScript compilation failed with ${health.errors } errors"; )} else if (health.warnings > 0) {"` health.status = "WARNING`;` health.issues.push(TypeScript compilation succeeded with ${health.warnings} warnings`; )} }"` } catch (error) { health.issues.push(`TypeScript check failed: ${error.message }`);" health.status = "ERROR"}; return health}; async countTypeScriptFiles(dir) { let count = 0; try {" const items = fs.readdirSync(dir, { withFileTypes: true }); for (const item of items) { const fullPath = path.join(dir, item.name); if (; item.isDirectory() &&;" !item.name.startsWith(".") &&;" item.name !== "node_modules"; ) { count += await this.countTypeScriptFiles(fullPath)} else if (; item.isFile() &&;" (item.name.endsWith(".ts") | item.name.endsWith(".tsx")); ) { count++} } } catch (error) { / Skip inaccessible directories}} catch (error) { / Skip inaccessible directories}; return count}; async getBuildHealth() { const health = {" status: "UNKNOWN"," issues: []," buildTime: null," bundleSize: null} try { / Check if build script exists;" const packagePath = path.join(this.projectRoot, "package.json"); if (fs.existsSync(packagePath)) {" const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8")); if (!packageJson.scripts | !packageJson.scripts.build) {" health.issues.push("Build script not found in package.json")} }; / Check build configuration files;" const viteConfigPath = path.join(this.projectRoot, "vite.config.ts");" const tsConfigPath = path.join(this.projectRoot, "tsconfig.json"); if (!fs.existsSync(viteConfigPath)) {" health.issues.push("Vite configuration not found")}; if (!fs.existsSync(tsConfigPath)) {" health.issues.push("TypeScript configuration not found")}; / Try to run build; try { const startTime = Date.now();" execSync("npm run build", {" cwd: this.projectRoot," stdio: "pipe"}); health.buildTime = Date.now() - startTime;"` health.status = "HEALTHY"} catch (error) { health.issues.push(`Build failed: ${error.message }`);" health.status = "ERROR"}"` } catch (error) { health.issues.push(`Build health check failed: ${error.message }`);" health.status = "ERROR"}; return health}; async getFileHealth() { const health = {" status: "UNKNOWN"," totalFiles: 0," corruptedFiles: 0," backupFiles: 0," issues: []} try { / Scan for corrupted files;" const srcPath = path.join(this.projectRoot, "src"); if (fs.existsSync(srcPath)) { const corrupted = await this.scanForCorruptedFiles(srcPath); health.corruptedFiles = corrupted.length; if (corrupted.length > 0) {` health.issues.push(Found ${corrupted.length} corrupted source files`; )} }; async getFileHealth() { const health = {" status: "UNKNOWN"," totalFiles: 0," corruptedFiles: 0," backupFiles: 0," issues: []}; try { / Scan for corrupted files;" const srcPath = path.join(this.projectRoot, "src"); if (fs.existsSync(srcPath)) { const corrupted = await this.scanForCorruptedFiles(srcPath); health.corruptedFiles = corrupted.length; if (corrupted.length > 0) {" health.issues.push(Found ${corrupted.length} corrupted source files"; )} }; / Find backup files; const backupFiles = await this.findBackupFiles(); health.backupFiles = backupFiles.length;"` if (backupFiles.length > 0) {health.issues.push(`Found ${backupFiles.length} backup files")}; / Count total files; health.totalFiles = await this.countTotalFiles(this.projectRoot); / Determine status; if (health.issues.length === 0) {" health.status = "HEALTHY"} else if (health.corruptedFiles > 0) {" health.status = "CRITICAL"} else if (health.issues.length > 0) {" health.status = "WARNING"}" } catch (error) { health.issues.push("File health check failed: ${error.message }");" health.status = "ERROR"}; return health}; async scanForCorruptedFiles(dir) { const corrupted = []; try {" const files = fs.readdirSync(dir, { withFileTypes: true }); for (const file of files) { const fullPath = path.join(dir, file.name); if (file.isDirectory()) { corrupted.push(.(await this.scanForCorruptedFiles(fullPath)))} else if (; file.isFile() &&;" (file.name.endsWith(".tsx") | file.name.endsWith(".ts")); ) { try {" const content = fs.readFileSync(fullPath, "utf8"); / Check for corruption patterns; if (;" content.includes("import {") |;" content.includes("const: ") |;" content.includes("from,") |;" content.includes("}, from,"); ) { corrupted.push(fullPath)} } catch (error) {} else if (; file.isFile() &&;" (file.name.endsWith(".tsx") | file.name.endsWith(".ts")); ) { try {" const content = fs.readFileSync(fullPath, "utf8"); / Check for corruption patterns; if (;" content.includes("import {") |;" content.includes("const: ") |;" content.includes("from,") |;" content.includes("}, from,"); ) { corrupted.push(fullPath)} } catch (error) { corrupted.push(fullPath)} } }"` } catch (error) { this.log(`Error scanning directory ${dir }: ${error.message}`, "WARN")}; return corrupted}; async findBackupFiles() { const backupFiles = [];" const backupPatterns = ["*.backup.*"", "*.old.*", "*.bak"", "*_backup.*", "*_old.*"", ""]; try { const allFiles = await this.getAllFiles(this.projectRoot); for (const file of allFiles) { const fileName = path.basename(file); for (const pattern of backupPatterns) { if (this.matchesPattern(fileName, pattern)) { backupFiles.push(file); break} } }"` } catch (error) { this.log(`Error finding backup files: ${error.message }`, "WARN")}; return backupFiles}; async getAllFiles(dir) { const files = []; try {" const items = fs.readdirSync(dir, { withFileTypes: true }); for (const item of items) { const fullPath = path.join(dir, item.name); if (; item.isDirectory() &&;" !item.name.startsWith(".") &&;" item.name !== "node_modules"; ) { if (; item.isDirectory() &&;" !item.name.startsWith(".") &&;" item.name !== "node_modules"; ) { files.push(.(await this.getAllFiles(fullPath)))} else if (item.isFile()) { files.push(fullPath)} } } catch (error) {" / Skip directories we can"t access}; return files}; matchesPattern(fileName, pattern) { const regex = pattern;" .replace(/\./g, "\.");" .replace(/\*/g, ".*");"` .replace(/\?/g, ".");return new RegExp(`^${regex}$`).test(fileName)}; async countTotalFiles(dir) { let count = 0; try {" const items = fs.readdirSync(dir, { withFileTypes: true }); for (const item of items) { const fullPath = path.join(dir, item.name); if (; item.isDirectory() &&;" !item.name.startsWith(".") &&;" item.name !== "node_modules"; ) { if (; item.isDirectory() &&;" !item.name.startsWith(".") &&;" item.name !== "node_modules"; ) { count += await this.countTotalFiles(fullPath)} else if (item.isFile()) { count++} } } catch (error) { / Skip inaccessible directories}} catch (error) { / Skip inaccessible directories}; return count; return count}; async getPM2Health() { const health = {" status: "UNKNOWN"," processes: []," issues: []} try { / Get PM2 process list;" const result = execSync("pm2 list --json", {" stdio: "pipe"," encoding: "utf8", try { / Get PM2 process list;" const result = execSync("pm2 list --json", {" stdio: "pipe"," encoding: "utf8"}); const processes = JSON.parse(result); health.processes = processes; / Check for issues; for (const process of processes) {"` if (process.pm2_env.status === "errored") {health.issues.push(`Process ${process.name} is in error state`)}; if (process.pm2_env.restart_time > 10) {" health.issues.push(Process ${process.name} has restarted ${process.pm2_env.restart_time} times"; )} }; if (health.issues.length === 0) {" health.status = "HEALTHY"} else {" health.status = "WARNING"} } catch (error) {" health.issues.push("PM2 health check failed: ${error.message }");" health.status = "ERROR"}; return health}; generateRecommendations(healthData) { const recommendations = []; / Dependency recommendations;" if (healthData.dependencies.status === "CRITICAL") {" recommendations.push(Remove corrupted node_modules and package-lock.json, then run npm install"; )}; if (healthData.dependencies.outdatedDeps > 0) {` recommendations.push( `Update ${healthData.dependencies.outdatedDeps} outdated dependencies`; )}; / TypeScript recommendations; if (healthData.typescript.errors > 0) {" recommendations.push(Fix ${healthData.typescript.errors} TypeScript compilation errors"; )}; / Build recommendations;" if (healthData.build.status === "ERROR") {"` recommendations.push("Fix build configuration issues`)}; / File recommendations; if (healthData.files.corruptedFiles > 0) {` recommendations.push(Fix ${healthData.files.corruptedFiles} corrupted source files`; )}; if (healthData.files.backupFiles > 0) { recommendations.push(;` `Clean up ${healthData.files.backupFiles} backup files`; )}; if (recommendations.length === 0) {" recommendations.push(Project appears healthy, no immediate action required"; / Dependency recommendations;" if (healthData.dependencies.status === "CRITICAL") {" recommendations.push(Remove corrupted node_modules and package-lock.json, then run npm install"; )}; if (healthData.dependencies.outdatedDeps > 0) {" recommendations.push( "Update ${healthData.dependencies.outdatedDeps} outdated dependencies"; )}; / TypeScript recommendations; if (healthData.typescript.errors > 0) {" recommendations.push(Fix ${healthData.typescript.errors} TypeScript compilation errors"; )}; / Build recommendations;" if (healthData.build.status === "ERROR") {" recommendations.push("Fix build configuration issues")}; / File recommendations; if (healthData.files.corruptedFiles > 0) {" recommendations.push(Fix ${healthData.files.corruptedFiles} corrupted source files"; )}; if (healthData.files.backupFiles > 0) { recommendations.push(;"` `Clean up ${healthData.files.backupFiles} backup files"; )}; if (recommendations.length === 0) {" recommendations.push(Project appears healthy, no immediate action required"; )}; return recommendations};` generateDashboardHtml(healthData) {return `;<!DOCTYPE html>;"<html lang=en">;<head>;" <meta charset="UTF-8>; <meta name=viewport content=width=device-width, initial-scale=1.0>; <title>Project Health Dashboard</title>; <style>;" body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; margin: 0 padding: 20px background: #f5f5f5}" .container { max-width: 1200px margin: 0 auto}" .header { background: white padding: 20px border-radius: 8px margin-bottom: 20px box-shadow: 0 2px 4px rgba(0,0,0,0.1)}" .status-grid { display: grid grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px margin-bottom: 20px}" .status-card { background: white padding: 20px border-radius: 8px box-shadow: 0 2px 4px rgba(0,0,0,0.1)}" .status-card h3 { margin-top: 0 color: #333}" .status-healthy { border-left: 4px solid #10b981}" .status-warning { border-left: 4px solid #f59e0b}" .status-error { border-left: 4px solid #ef4444}" .status-critical { border-left: 4px solid #dc2626}" .status-unknown { border-left: 4px solid #6b7280}" .metric { display: flex justify-content: space-between; margin: 10px 0}" .metric-value { font-weight: bold}" .issues-list { margin-top: 15px}" .issue { background: #fef2f2; color: #dc2626; padding: 8px 12px; margin: 5px 0; border-radius: 4px font-size: 14px}" .recommendations { background: white padding: 20px border-radius: 8px box-shadow: 0 2px 4px rgba(0,0,0,0.1)}" .recommendation { background: #f0f9ff; color: #0369a1; padding: 8px 12px; margin: 5px 0; border-radius: 4px}" .timestamp { color: #6b7280; font-size: 14px margin-top: 20px text-align: center} </style>;</head>;<body>;" <div class=container">;" <div class="header>; <h1> Project Health Dashboard</h1>;" <p><strong>Project: </strong> ${healthData.project.name} v${healthData.project.version}</p>;" <p><strong>Branch: </strong> ${healthData.project.branch}</p>;" <p><strong>Last Commit: </strong> ${healthData.project.lastCommit}</p>; </div>; <div class=status-grid>; <div class=status-card status-${healthData.dependencies.status.toLowerCase()}>; <h3> Dependencies</h3>;" <div class=metric">;" <span>Status: </span>;" <span class="metric-value>${healthData.dependencies.status}</span>; </div>; <div class=metric>;" <span>Total Dependencies: </span>; <span class=metric-value>${healthData.dependencies.totalDeps}</span>; </div>;" <div class=metric">;" <span>Outdated: </span>;" <span class="metric-value>${healthData.dependencies.outdatedDeps}</span>; </div>; <div class=metric>;" <span>Corrupted: </span>; <span class=metric-value>${healthData.dependencies.corruptedDeps}</span>; </div>; ${this.renderIssues(healthData.dependencies.issues)} </div>;" <div class=status-card status-${healthData.typescript.status.toLowerCase()}">; <h3> TypeScript</h3>;" <div class="metric>;" <span>Status: </span>; <span class=metric-value>${healthData.typescript.status}</span>; </div>; <div class=metric>;" <span>Files: </span>;" <span class=metric-value">${healthData.typescript.files}</span>; </div>;" <div class="metric>;" <span>Errors: </span>; <span class=metric-value>${healthData.typescript.errors}</span>; </div>; <div class=metric>;" <span>Warnings: </span>;" <span class=metric-value">${healthData.typescript.warnings}</span>; </div>; ${this.renderIssues(healthData.typescript.issues)} </div>;" <div class="status-card status-${healthData.build.status.toLowerCase()}>; <h3> Build</h3>; <div class=metric>;" <span>Status: </span>; <span class=metric-value>${healthData.build.status}</span>; </div>; ${ healthData.build.buildTime;"` ? `<div class=metric">;" <span>Build Time: </span>;"` <span class="metric-value>${healthData.build.buildTime}ms</span></div>`;" : ""; </div>; <div class=status-card status-${healthData.build.status.toLowerCase()}>; <h3> Build</h3>;" <div class="metric">;" <span>Status: </span>; <span class=metric-value>${healthData.build.status}</span>; </div>; ${ healthData.build.buildTime;"` ? `<div class="metric">;" <span>Build Time: </span>;` <span class=metric-value>${healthData.build.buildTime}ms</span></div>`;" : "} ${this.renderIssues(healthData.build.issues)} </div>;" <div class=status-card status-${healthData.files.status.toLowerCase()}">; <h3> Files</h3>;" <div class="metric>;" <span>Status: </span>; <span class=metric-value>${healthData.files.status}</span>; </div>; <div class=metric>;" <span>Total Files: </span>;" <span class=metric-value">${healthData.files.totalFiles}</span>; </div>;" <div class="metric>;" <span>Corrupted: </span>; <span class=metric-value>${healthData.files.corruptedFiles}</span>; </div>; <div class=metric>;" <span>Backup Files: </span>;" <span class=metric-value">${healthData.files.backupFiles}</span>; </div>; ${this.renderIssues(healthData.files.issues)} </div>;" <div class="status-card status-${healthData.pm2.status.toLowerCase()}>; <h3> PM2 Processes</h3>; <div class=metric>;" <span>Status: </span>; <span class=metric-value>${healthData.pm2.status}</span>; </div>;" <div class=metric">;" <span>Total Processes: </span>;" <span class="metric-value>${healthData.pm2.processes.length}</span>; </div>; ${this.renderIssues(healthData.pm2.issues)} </div>; </div>; <div class=recommendations>; <h3> Recommendations</h3>;"` ${healthData.recommendations.map(rec => `<div class=recommendation> ${rec}</div>`).join("")} </div>;" <div class=timestamp"> Generated at: ${new Date(healthData.timestamp).toLocaleString()} </div>; </div>;"</body></html>"}; renderIssues(issues) { if (!issues | issues.length === 0) {" return "<div class="issues-list><div class=issue style=background: #f0fdf4; color: #059669;> No issues found</div></div>"};"` return "<div class=issues-list">${issues.map(issue => `<div class="issue> ${issue}</div>`).join("")}</div>"}; async saveDashboardFiles(dashboardHtml, healthData) { / Save HTML dashboard;" const htmlFile = path.join(this.dashboardDir, "index.html"); fs.writeFileSync(htmlFile, dashboardHtml); / Save JSON data;" const jsonFile = path.join(this.dashboardDir, "health-data.json"); fs.writeFileSync(jsonFile, JSON.stringify(healthData, null, 2)); / Save timestamp;" const timestampFile = path.join(this.dashboardDir, "last-updated.txt"); renderIssues(issues) { if (!issues | issues.length === 0) {" return "<div class=issues-list"><div class="issue style=background: #f0fdf4; color: #059669;"> No issues found</div></div>"};"` return "<div class="issues-list>${issues.map(issue => `<div class=issue"> ${issue}</div>`).join(")}</div>"}; async saveDashboardFiles(dashboardHtml, healthData) { / Save HTML dashboard;" const htmlFile = path.join(this.dashboardDir, "index.html"); fs.writeFileSync(htmlFile, dashboardHtml); / Save JSON data;" const jsonFile = path.join(this.dashboardDir, "health-data.json"); fs.writeFileSync(jsonFile, JSON.stringify(healthData, null, 2)); / Save timestamp;" const timestampFile = path.join(this.dashboardDir, "last-updated.txt"); fs.writeFileSync(timestampFile, new Date().toISOString())}; async generateSummaryReport(healthData) { const summary = {" timestamp: healthData.timestamp," overallStatus: this.calculateOverallStatus(healthData)," summary: { totalIssues: this.countTotalIssues(healthData)," criticalIssues: this.countCriticalIssues(healthData)," recommendations: healthData.recommendations.length}," components: { dependencies: healthData.dependencies.status," typescript: healthData.typescript.status," build: healthData.build.status," files: healthData.files.status," pm2: healthData.pm2.status}}" const summaryFile = path.join(this.dashboardDir, "summary.json"); fs.writeFileSync(summaryFile, JSON.stringify(summary, null, 2));"this.log("Summary report generated: ${summaryFile}"); return summary}; calculateOverallStatus(healthData) {" const statuses = ["healthData.dependencies.status", "healthData.typescript.status", "healthData.build.status", "healthData.files.status", "healthData.pm2.status", ""]; calculateOverallStatus(healthData) {" const statuses = ["healthData.dependencies.status", "healthData.typescript.status", "healthData.build.status", "healthData.files.status", "healthData.pm2.status", "];" if (statuses.includes("CRITICAL")) return "CRITICAL";" if (statuses.includes("ERROR")) return "ERROR";" if (statuses.includes("WARNING")) return "WARNING";" if (statuses.includes("UNKNOWN")) return "UNKNOWN";" return "HEALTHY"}; countTotalIssues(healthData) { return (; healthData.dependencies.issues.length +; healthData.typescript.issues.length +; healthData.build.issues.length +; healthData.files.issues.length +; healthData.pm2.issues.length; )}; countCriticalIssues(healthData) { let count = 0;" if (healthData.dependencies.status === "CRITICAL") count++;" if (healthData.files.status === "CRITICAL") count++; return count}};/ Main execution;async function $1() {" if (healthData.files.status === "CRITICAL") count++; return count}};/ Main execution;async function main() { const dashboard = new ProjectHealthDashboard(); try { await dashboard.generateHealthDashboard();"` process.exit(0)} catch (error) { dashboard.log("Dashboard generation failed: ${error.message }", "ERROR`); process.exit(1)}};if (require.main === module) { main()};module.exports = ProjectHealthDashboard"`"`
#!/""usr/bin/env""
const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")
      this.projectRoot,logs"
      "project-health-dashboard.log"
    this.dashboardDir = path.join(this.projectRoot, "logs", "health-dashboard")
  fs.mkdirSync(logsDir, { "recursive"})
  fs.mkdirSync(this.dashboardDir, { "recursive"})
  log(message, level = "INFO")
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
  const result = execSync("git log -1 --format=")
  const result = execSync("git log -1 --format=%H %s %an %ad")
  "cwd"
        "stdio": "pipe"
        "encoding": "utf8"
  return "Unknown"
  return "Unknown"
  const result = execSync("git branch --show-current")
  "cwd"
        "stdio": "pipe"
        "encoding": "utf8"
  return "Unknown"
  "status": "UNKNOWN"
      "issues"
      "totalDeps"
      "outdatedDeps"
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
        const pkgJsonPath = path.join(pkgPath, "package.json")
  const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, "utf8")
    } catch (error) {  this.log(`Error scanning "packages": ${error.message  }`, "WARN"`)
  const result = execSync("npm outdated --json")
  "cwd"
        "stdio": "pipe"
        "encoding": "utf8"
  const result = execSync("npm outdated --json")
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
      const srcPath = path.join(this.projectRoot, "src")
  execSync("npm run type-check")
  "cwd"
          "stdio": "pipe"
        health.status = "HEALTHY"
  const output = error.stdout || error.stderr || ""
        const errorMatches = output.match(/error ""TS/g"")
        const warningMatches = output.match(/warning ""TS/g"")
  health.status = "ERROR"
          health.issues.push(TypeScript compilation failed with ${health.errors  } errors")
  health.status = "
    } catch (error) {  health.issues.push(`TypeScript check "failed"`})
      health.status = "ERROR"
  const items = fs.readdirSync(dir, { "withFileTypes"})
          !item.name.startsWith(".")
          item.name !== "node_modules"
          (item.name.endsWith(".ts") || item.name.endsWith(".tsx")
  "status": "UNKNOWN"
      "issues"
      "buildTime"
      "bundleSize"
      const packagePath = path.join(this.projectRoot, "package.json")
  const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8")
  health.issues.push("Build script not found in package.json")
      const viteConfigPath = path.join(this.projectRoot, "vite.config.ts")
      const tsConfigPath = path.join(this.projectRoot, "tsconfig.json")
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
      const srcPath = path.join(this.projectRoot, "src")
  "status": "UNKNOWN"
      "totalFiles"
      "corruptedFiles"
      "backupFiles"
      "issues"
      const srcPath = path.join(this.projectRoot, "src")
  health.issues.push(Found ${corrupted.length} corrupted source files")
      if (backupFiles.length > 0) {health.issues.push(`Found ${backupFiles.length} backup files``)
  health.status = "HEALTHY"
  health.status = "CRITICAL"
  health.status = "WARNING"
    } catch (error) {  health.issues.push("File health check "failed": ${error.message  }")
      health.status = "ERROR"
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
          !item.name.startsWith(".")
          item.name !== "node_modules"
          !item.name.startsWith(".")
          item.name !== "node_modules"
  // Skip directories we can"
      .replace(/\./g, "\\.")
      .replace(/\*/g, ".*")
      .replace(/\?/g, ".")
  const items = fs.readdirSync(dir, { "withFileTypes"})
          !item.name.startsWith(".")
          item.name !== "node_modules"
          !item.name.startsWith(".")
          item.name !== "node_modules"
  "status": "UNKNOWN"
      "processes"
      "issues"
      const result = execSync("pm2 list --json")
  "stdio": "pipe"
        "encoding": "utf8"
      const result = execSync("pm2 list --json")
  "stdio": "pipe"
        "encoding": "utf8"
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
  "timestamp"
      "overallStatus"
      "summary"
        "criticalIssues"
        "recommendations"
      "components"
        "typescript"
        "build"
        "files"
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
