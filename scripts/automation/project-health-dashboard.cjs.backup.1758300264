<<<<<<< HEAD
#!/""usr/bin/env"" node;
/**;
 * Project Health Dashboard - PM2 Automation;
 * Provides comprehensive project health monitoring and reporting;
 */;
#!/"usr/bin/env" node;
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
      this.projectRoot,logs";
      "project-health-dashboard.log";
    );
    this.dashboardDir = path.join(this.projectRoot, "logs", `health-dashboard`);
    this.ensureLogsDirectory(),
}
;
  ensureLogsDirectory() {
  const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true }),
}
;
    if (!fs.existsSync(this.dashboardDir)) {
  fs.mkdirSync(this.dashboardDir, { recursive: true }),
}
  }
;
  log(message, level = `INFO`) {
  log(message, level = "INFO") {
  const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    fs.appendFileSync(this.logFile, logEntry);console.log(`[${level}] ${message}`),
}
;
  async generateHealthDashboard() {
  this.log(`Generating comprehensive project health dashboard...`);
    try {
  // 1. Collect all health data;
      const healthData = await this.collectHealthData();
      // 2. Generate dashboard HTML;
      const dashboardHtml = this.generateDashboardHtml(healthData);
      // 3. Save dashboard files;
      await this.saveDashboardFiles(dashboardHtml, healthData);
      // 4. Generate summary report;
      await this.generateSummaryReport(healthData);
      this.log(`Health dashboard generated successfully`),
} catch (error) {  this.log(`Dashboard generation failed: ${error.message  }`, `ERROR`),
}
  }
;
  async collectHealthData() {
  const healthData = {
  timestamp: new Date().toISOString();
      project: {
  name: this.getProjectName();
        version: this.getProjectVersion();
        lastCommit: this.getLastCommit();
        branch: this.getCurrentBranch(),
};
      dependencies: await this.getDependencyHealth();
      typescript: await this.getTypeScriptHealth();
      build: await this.getBuildHealth();
      files: await this.getFileHealth();
      pm2: await this.getPM2Health();
      recommendations: [],
}
;
    // Generate recommendations based on health data;
    healthData.recommendations = this.generateRecommendations(healthData);

    return healthData,
}
;
  getProjectName() {
  try {
  const packagePath = path.join(this.projectRoot, `package.json`);
      if (fs.existsSync(packagePath)) {
  const packageJson = JSON.parse(fs.readFileSync(packagePath, `utf8`));
        return packageJson.name || `Unknown`,
}
    } catch (error) {  this.log(`Failed to get project name: ${error.message  }`, `WARN`),
}
    return `Unknown`,
}
;
  getProjectVersion() {
  try {
  const packagePath = path.join(this.projectRoot, "package.json");
      if (fs.existsSync(packagePath)) {
  const packageJson = JSON.parse(fs.readFileSync(packagePath, `utf8`));
        return packageJson.version || `Unknown`;
      if (fs.existsSync(packagePath)) {
  const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8"));
        return packageJson.version || "Unknown",
}
    } catch (error) {  this.log(`Failed to get project version: ${error.message  }`, `WARN`),
}
    return `Unknown`,
}
;
  getLastCommit() {
  try {
  const result = execSync("git log -1 --format="%H %s %an %ad, {
  const result = execSync("git log -1 --format=%H %s %an %ad", {
          cwd: this.projectRoot;
        stdio: "pipe";
        encoding: "utf8",
});
      return result.trim(),
} catch (error) {} catch (error) {
  return "Unknown",
} catch (error) {
  return "Unknown";
}
  }
;
  getCurrentBranch() {
  try {
  const result = execSync("git branch --show-current", {
  cwd: this.projectRoot;
        stdio: "pipe";
        encoding: "utf8",
});
      return result.trim(),
} catch (error) {} catch (error) {
  return "Unknown",
}
  }
;
  async getDependencyHealth() {
  const health = {
  status: "UNKNOWN";
      issues: [];
      totalDeps: 0;
      outdatedDeps: 0;
      corruptedDeps: 0,
}
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
  if (typeof version !== `string` || version.trim() === ``) {health.issues.push(`Invalid version for ${dep}: ${version}`),
}
        }
      }
;
      // Check node_modules;
      const nodeModulesPath = path.join(this.projectRoot, `node_modules`);
      if (fs.existsSync(nodeModulesPath)) {
  // Check for invalid versions;
        for (const ["dep", "version"] of Object.entries(deps)) {
  if (typeof version !== "string" || version.trim() === ") {health.issues.push(`Invalid version for ${dep}: ${version}`),
}
        }
      }
;
      // Check node_modules;
      const nodeModulesPath = path.join(this.projectRoot, "node_modules");
      if (fs.existsSync(nodeModulesPath)) {
  const corrupted = await this.findCorruptedPackages(nodeModulesPath);
        health.corruptedDeps = corrupted.length;

        if (corrupted.length > 0) {health.issues.push(`Found ${corrupted.length} corrupted packages`),
}
      } else {
  health.issues.push(`node_modules directory not found`),
}
;
      // Check for outdated dependencies;
      try {} else {
  health.issues.push("node_modules directory not found"),
}
;
      // Check for outdated dependencies;
      try {
  const outdated = await this.checkOutdatedDependencies();
      try {
  const outdated = await this.checkOutdatedDependencies();
        health.outdatedDeps = outdated.length;

        if (outdated.length > 0) {health.issues.push(`Found ${outdated.length} outdated dependencies`),
}
      } catch (error) {
  // npm outdated returns non-zero when there are outdated deps,
}
;
      // Determine overall status;
      if (health.issues.length === 0) {
  health.status = `HEALTHY`,
} else if (health.corruptedDeps > 0) {
  health.status = `CRITICAL`,
} else if (health.issues.length > 0) {
  health.status = `WARNING`,
} catch (error) {
  // npm outdated returns non-zero when there are outdated deps,
}
;
      // Determine overall status;
      if (health.issues.length === 0) {
  health.status = "HEALTHY",
} else if (health.corruptedDeps > 0) {
  health.status = "CRITICAL",
} else if (health.issues.length > 0) {
  health.status = "WARNING",
}
    } catch (error) {  health.issues.push(`Dependency check failed: ${error.message  }`);
      health.status = `ERROR`,
}
;
    return health,
}
;
  async findCorruptedPackages(nodeModulesPath) {
  const corrupted = [];

    try {
  const packages = fs.readdirSync(nodeModulesPath);
      for (const pkg of packages) {
  if (pkg.startsWith(`.`)) continue;
        const pkgPath = path.join(nodeModulesPath, pkg);
        const pkgJsonPath = path.join(pkgPath, `package.json`);
        if (fs.existsSync(pkgJsonPath)) {
  try {
  const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, `utf8`));
            if (!pkgJson.name || !pkgJson.version) {
  corrupted.push(pkg),
}
          } catch {
  corrupted.push(pkg),
}
        } else {
  corrupted.push(pkg),
}
      }
    } catch (error) {  this.log(`Error scanning packages: ${error.message  }`, `WARN`),
}
;
    return corrupted,
}
;
  async checkOutdatedDependencies() {
  try {
  const result = execSync(`npm outdated --json`, {
  cwd: this.projectRoot;
        stdio: "pipe";
        encoding: "utf8";

  async checkOutdatedDependencies() {
  try {
  const result = execSync("npm outdated --json", {
  cwd: this.projectRoot;
        stdio: "pipe";
        encoding: "utf8",
});

      const outdated = JSON.parse(result);
      return Object.keys(outdated),
} catch (error) {
  if (error.stdout) {
  try {
  const outdated = JSON.parse(error.stdout);
          return Object.keys(outdated),
} catch {} catch (error) {
  if (error.stdout) {
  try {
  const outdated = JSON.parse(error.stdout);
          return Object.keys(outdated),
} catch {
  return [],
} catch {
  return [];
}
      }
      return [],
}
  }
;
  async getTypeScriptHealth() {
  const health = {
  status: "UNKNOWN";
      errors: 0;
      warnings: 0;
      files: 0;
      issues: [],
}
    try {
  // Count ""TypeScript/TSX"" files;

    try {
  // Count "TypeScript/TSX" files;
      const srcPath = path.join(this.projectRoot, "src");
      if (fs.existsSync(srcPath)) {
  health.files = await this.countTypeScriptFiles(srcPath),
}
;
      // Run type check;
      try {
  execSync("npm run type-check", {
  cwd: this.projectRoot;
          stdio: "pipe"});
        health.status = "HEALTHY",
} catch (error) {
  const output = error.stdout || error.stderr || "";
        const errorMatches = output.match(/error ""TS/g"") || [];
        const warningMatches = output.match(/warning ""TS/g``) || [];
        health.errors = errorMatches.length;
        health.warnings = warningMatches.length;
        if (health.errors > 0) {
  health.status = `ERROR`;
          health.issues.push(TypeScript compilation failed with ${health.errors  } errors`;
          ),
} else if (health.warnings > 0) {
  health.status = `WARNING`;
          health.issues.push(TypeScript compilation succeeded with ${health.warnings} warnings`;
          ),
}
      }
    } catch (error) {  health.issues.push(`TypeScript check failed: ${error.message  }`);
      health.status = `ERROR`,
}
;
    return health,
}
;
  async countTypeScriptFiles(dir) {
  let count = 0;

    try {
  const items = fs.readdirSync(dir, { withFileTypes: true });

      for (const item of items) {
  const fullPath = path.join(dir, item.name);

        if (;
          item.isDirectory() &&;
          !item.name.startsWith(".") &&;
          item.name !== "node_modules";
        ) {
  count += await this.countTypeScriptFiles(fullPath),
} else if (;
          item.isFile() &&;
          (item.name.endsWith(".ts") || item.name.endsWith(".tsx"));
        ) {
  count++,
}
      }
    } catch (error) {
  // Skip inaccessible directories,
}
,
} catch (error) {
  // Skip inaccessible directories,
}
;
    return count,
}
;
  async getBuildHealth() {
  const health = {
  status: "UNKNOWN";
      issues: [];
      buildTime: null;
      bundleSize: null,
}
    try {
  // Check if build script exists;
      const packagePath = path.join(this.projectRoot, "package.json");
      if (fs.existsSync(packagePath)) {
  const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8"));

        if (!packageJson.scripts || !packageJson.scripts.build) {
  health.issues.push("Build script not found in package.json"),
}
      }
;

      // Check build configuration files;
      const viteConfigPath = path.join(this.projectRoot, "vite.config.ts");
      const tsConfigPath = path.join(this.projectRoot, "tsconfig.json");

      if (!fs.existsSync(viteConfigPath)) {
  health.issues.push("Vite configuration not found"),
}
;
      if (!fs.existsSync(tsConfigPath)) {
  health.issues.push("TypeScript configuration not found"),
}
;
      // Try to run build;
      try {
  const startTime = Date.now();
        execSync("npm run build", {
  cwd: this.projectRoot;
          stdio: `pipe`,
});
        health.buildTime = Date.now() - startTime;
        health.status = `HEALTHY`,
} catch (error) {  health.issues.push(`Build failed: ${error.message  }`);
        health.status = `ERROR`,
}
    } catch (error) {  health.issues.push(`Build health check failed: ${error.message  }`);
      health.status = `ERROR`,
}
;
    return health,
}
;
  async getFileHealth() {
  const health = {
  status: `UNKNOWN`;
      totalFiles: 0;
      corruptedFiles: 0;
      backupFiles: 0;
      issues: []}
    try {
  // Scan for corrupted files;
      const srcPath = path.join(this.projectRoot, `src`);
      if (fs.existsSync(srcPath)) {
  const corrupted = await this.scanForCorruptedFiles(srcPath);
        health.corruptedFiles = corrupted.length;
        if (corrupted.length > 0) {
  health.issues.push(Found ${corrupted.length} corrupted source files`;
          ),
}
      }
;

  async getFileHealth() {
  const health = {
  status: "UNKNOWN";
      totalFiles: 0;
      corruptedFiles: 0;
      backupFiles: 0;
      issues: [],
}
;
    try {
  // Scan for corrupted files;
      const srcPath = path.join(this.projectRoot, "src");
      if (fs.existsSync(srcPath)) {
  const corrupted = await this.scanForCorruptedFiles(srcPath);
        health.corruptedFiles = corrupted.length;

        if (corrupted.length > 0) {
  health.issues.push(Found ${corrupted.length} corrupted source files";
          ),
}
      }
;
      // Find backup files;
      const backupFiles = await this.findBackupFiles();
      health.backupFiles = backupFiles.length;

      if (backupFiles.length > 0) {health.issues.push(`Found ${backupFiles.length} backup files`),
}
;
      // Count total files;
      health.totalFiles = await this.countTotalFiles(this.projectRoot);
      // Determine status;
      if (health.issues.length === 0) {
  health.status = `HEALTHY`,
} else if (health.corruptedFiles > 0) {
  health.status = `CRITICAL`,
} else if (health.issues.length > 0) {
  health.status = `WARNING`,
}
    } catch (error) {  health.issues.push(`File health check failed: ${error.message  }`);
      health.status = `ERROR`,
}
;
    return health,
}
;
  async scanForCorruptedFiles(dir) {
  const corrupted = [];

    try {
  const files = fs.readdirSync(dir, { withFileTypes: true });

      for (const file of files) {
  const fullPath = path.join(dir, file.name);

        if (file.isDirectory()) {
  corrupted.push(...(await this.scanForCorruptedFiles(fullPath))),
} else if (;
          file.isFile() &&;
          (file.name.endsWith(`.tsx") || file.name.endsWith(".ts"));
        ) {
  try {
  const content = fs.readFileSync(fullPath, "utf8");
            // Check for corruption patterns;
            if (;
              content.includes("import {") ||;
              content.includes("const: ") ||;
              content.includes(`from,`) ||;
              content.includes(`}, from,`);
            ) {
  corrupted.push(fullPath),
}
          } catch (error) {} else if (;
          file.isFile() &&;
          (file.name.endsWith(".tsx") || file.name.endsWith(".ts"));
        ) {
  try {
  const content = fs.readFileSync(fullPath, "utf8");

            // Check for corruption patterns;
            if (;
              content.includes("import {") ||;
              content.includes("const: ") ||;
              content.includes("from,") ||;
              content.includes("}, from,");
            ) {
  corrupted.push(fullPath),
}
          } catch (error) {
  corrupted.push(fullPath),
}
        }
      }
    } catch (error) {  this.log(`Error scanning directory ${dir  }: ${error.message}`, `WARN`),
}
;
    return corrupted,
}
;
  async findBackupFiles() {
  const backupFiles = [];
    const backupPatterns = [`*.backup.*`", "*.old.*", "*.bak"", "*_backup.*", "*_old.*``, ``];
    try {
  const allFiles = await this.getAllFiles(this.projectRoot);

      for (const file of allFiles) {
  const fileName = path.basename(file);
        for (const pattern of backupPatterns) {
  if (this.matchesPattern(fileName, pattern)) {
  backupFiles.push(file);
            break,
}
        }
      }
    } catch (error) {  this.log(`Error finding backup files: ${error.message  }`, `WARN`),
}
;
    return backupFiles,
}
;
  async getAllFiles(dir) {
  const files = [];

    try {
  const items = fs.readdirSync(dir, { withFileTypes: true });

      for (const item of items) {
  const fullPath = path.join(dir, item.name);
        if (;
          item.isDirectory() &&;
          !item.name.startsWith(`.`) &&;
          item.name !== "node_modules";
        ) {
  if (;
          item.isDirectory() &&;
          !item.name.startsWith(".") &&;
          item.name !== "node_modules";
        ) {
  files.push(...(await this.getAllFiles(fullPath))),
} else if (item.isFile()) {
  files.push(fullPath),
}
      }
    } catch (error) {
  // Skip directories we can"t access,
}
;
    return files,
}
;
  matchesPattern(fileName, pattern) {
  const regex = pattern;
      .replace(/\./g, "\\.");
      .replace(/\*/g, `.*`);
      .replace(/\?/g, `.`);return new RegExp(`^${regex}$`).test(fileName),
}
;
  async countTotalFiles(dir) {
  let count = 0;

    try {
  const items = fs.readdirSync(dir, { withFileTypes: true });

      for (const item of items) {
  const fullPath = path.join(dir, item.name);
        if (;
          item.isDirectory() &&;
          !item.name.startsWith(`.`) &&;
          item.name !== `node_modules`;
        ) {
  if (;
          item.isDirectory() &&;
          !item.name.startsWith(".") &&;
          item.name !== "node_modules";
        ) {
  count += await this.countTotalFiles(fullPath),
} else if (item.isFile()) {
  count++,
}
      }
    } catch (error) {
  // Skip inaccessible directories,
}
,
} catch (error) {
  // Skip inaccessible directories,
}
;
    return count;
    return count;
}
;
  async getPM2Health() {
  const health = {
  status: "UNKNOWN";
      processes: [];
      issues: [],
}
    try {
  // Get PM2 process list;
      const result = execSync("pm2 list --json", {
  stdio: "pipe";
        encoding: `utf8`;

    try {
  // Get PM2 process list;
      const result = execSync("pm2 list --json", {
  stdio: "pipe";
        encoding: "utf8",
});

      const processes = JSON.parse(result);
      health.processes = processes;
      // Check for issues;
      for (const process of processes) {
  if (process.pm2_env.status === `errored`) {health.issues.push(`Process ${process.name} is in error state`),
}
;
        if (process.pm2_env.restart_time > 10) {
  health.issues.push(Process ${process.name} has restarted ${process.pm2_env.restart_time} times`;
          ),
}
      }
;
      if (health.issues.length === 0) {
  health.status = `HEALTHY`,
} else {
  health.status = `WARNING`,
}
    } catch (error) {
  health.issues.push(`PM2 health check failed: ${error.message  }`);
      health.status = `ERROR`,
}
;
    return health,
}
;
  generateRecommendations(healthData) {
  const recommendations = [];
    // Dependency recommendations;
    if (healthData.dependencies.status === `CRITICAL`) {
  recommendations.push(Remove corrupted node_modules and package-lock.json, then run npm install`;
      ),
}
;
    if (healthData.dependencies.outdatedDeps > 0) {
  recommendations.push( `Update ${healthData.dependencies.outdatedDeps} outdated dependencies`;
      ),
}
;
    // TypeScript recommendations;
    if (healthData.typescript.errors > 0) {
  recommendations.push(Fix ${healthData.typescript.errors} TypeScript compilation errors`;
      ),
}
;
    // Build recommendations;
    if (healthData.build.status === `ERROR`) {
  recommendations.push(`Fix build configuration issues`),
}
;
    // File recommendations;
    if (healthData.files.corruptedFiles > 0) {
  recommendations.push(Fix ${healthData.files.corruptedFiles} corrupted source files`;
      ),
}
;
    if (healthData.files.backupFiles > 0) {
  recommendations.push(;
        `Clean up ${healthData.files.backupFiles} backup files`;
      ),
}
;
    if (recommendations.length === 0) {
  recommendations.push(Project appears healthy, no immediate action required`;

    // Dependency recommendations;
    if (healthData.dependencies.status === "CRITICAL") {
  recommendations.push(Remove corrupted node_modules and package-lock.json, then run npm install";
      ),
}
;
    if (healthData.dependencies.outdatedDeps > 0) {
  recommendations.push( `Update ${healthData.dependencies.outdatedDeps} outdated dependencies";
      ),
}
;
    // TypeScript recommendations;
    if (healthData.typescript.errors > 0) {
  recommendations.push(Fix ${healthData.typescript.errors} TypeScript compilation errors";
      ),
}
;
    // Build recommendations;
    if (healthData.build.status === "ERROR") {
  recommendations.push("Fix build configuration issues"),
}
;
    // File recommendations;
    if (healthData.files.corruptedFiles > 0) {
  recommendations.push(Fix ${healthData.files.corruptedFiles} corrupted source files";
      ),
}
;
    if (healthData.files.backupFiles > 0) {
  recommendations.push(;
        `Clean up ${healthData.files.backupFiles} backup files";
      ),
}
;
    if (recommendations.length === 0) {
  recommendations.push(Project appears healthy, no immediate action required";
      ),
}
;
    return recommendations,
}
;
  generateDashboardHtml(healthData) {return `;
<!DOCTYPE html>;
<html lang=en">;
<head>;
    <meta charset="UTF-8>;
    <meta name=viewport content=width=device-width, initial-scale=1.0>;
    <title>Project Health Dashboard</title>;
    <style>;
        body { font-family: -apple-system, BlinkMacSystemFont, `Segoe UI`, Roboto, sans-serif; margin: 0 padding: 20px background: #f5f5f5}
        .container { max-width: 1200px margin: 0 auto}
        .header { background: white padding: 20px border-radius: 8px margin-bottom: 20px box-shadow: 0 2px 4px rgba(0,0,0,0.1)}
        .status-grid { display: grid grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px margin-bottom: 20px}
        .status-card { background: white padding: 20px border-radius: 8px box-shadow: 0 2px 4px rgba(0,0,0,0.1)}
        .status-card h3 { margin-top: 0 color: #333}
        .status-healthy { border-left: 4px solid #10b981}
        .status-warning { border-left: 4px solid #f59e0b}
        .status-error { border-left: 4px solid #ef4444}
        .status-critical { border-left: 4px solid #dc2626}
        .status-unknown { border-left: 4px solid #6b7280}
        .metric { display: flex justify-content: space-between; margin: 10px 0}
        .metric-value { font-weight: bold}
        .issues-list { margin-top: 15px}
        .issue { background: #fef2f2; color: #dc2626; padding: 8px 12px; margin: 5px 0; border-radius: 4px font-size: 14px}
        .recommendations { background: white padding: 20px border-radius: 8px box-shadow: 0 2px 4px rgba(0,0,0,0.1)}
        .recommendation { background: #f0f9ff; color: #0369a1; padding: 8px 12px; margin: 5px 0; border-radius: 4px}
        .timestamp { color: #6b7280; font-size: 14px margin-top: 20px text-align: center}
    </style>;
</head>;
<body>;
    <div class=container">;
        <div class="header>;
            <h1>🚀 Project Health Dashboard</h1>;
            <p><strong>Project:</strong> ${healthData.project.name} v${healthData.project.version}</p>;
            <p><strong>Branch:</strong> ${healthData.project.branch}</p>;
            <p><strong>Last Commit:</strong> ${healthData.project.lastCommit}</p>;
        </div>;
        ;
        <div class=status-grid>;
            <div class=status-card status-${healthData.dependencies.status.toLowerCase()}>;
                <h3>📦 Dependencies</h3>;
                <div class=metric">;
                    <span>Status:</span>;
                    <span class="metric-value>${healthData.dependencies.status}</span>;
                </div>;
                <div class=metric>;
                    <span>Total Dependencies:</span>;
                    <span class=metric-value>${healthData.dependencies.totalDeps}</span>;
                </div>;
                <div class=metric">;
                    <span>Outdated:</span>;
                    <span class="metric-value>${healthData.dependencies.outdatedDeps}</span>;
                </div>;
                <div class=metric>;
                    <span>Corrupted:</span>;
                    <span class=metric-value>${healthData.dependencies.corruptedDeps}</span>;
                </div>;
                ${this.renderIssues(healthData.dependencies.issues)}
            </div>;
            ;
            <div class=status-card status-${healthData.typescript.status.toLowerCase()}">;
                <h3>🔧 TypeScript</h3>;
                <div class="metric>;
                    <span>Status:</span>;
                    <span class=metric-value>${healthData.typescript.status}</span>;
                </div>;
                <div class=metric>;
                    <span>Files:</span>;
                    <span class=metric-value">${healthData.typescript.files}</span>;
                </div>;
                <div class="metric>;
                    <span>Errors:</span>;
                    <span class=metric-value>${healthData.typescript.errors}</span>;
                </div>;
                <div class=metric>;
                    <span>Warnings:</span>;
                    <span class=metric-value">${healthData.typescript.warnings}</span>;
                </div>;
                ${this.renderIssues(healthData.typescript.issues)}
            </div>;
            ;
            <div class="status-card status-${healthData.build.status.toLowerCase()}>;
                <h3>🏗️ Build</h3>;
                <div class=metric>;
                    <span>Status:</span>;
                    <span class=metric-value>${healthData.build.status}</span>;
                </div>;
                ${
  healthData.build.buildTime;
                    ? `<div class=metric">;
                    <span>Build Time:</span>;
                    <span class="metric-value>${healthData.build.buildTime}ms</span></div>`;
                    : ``;
            </div>;
            ;
            <div class=status-card status-${healthData.build.status.toLowerCase()}>;
                <h3>🏗️ Build</h3>;
                <div class="metric">;
                    <span>Status:</span>;
                    <span class=metric-value>${healthData.build.status}</span>;
                </div>;
                ${
  healthData.build.buildTime;
                    ? `<div class="metric">;
                    <span>Build Time:</span>;
                    <span class=metric-value>${healthData.build.buildTime}ms</span></div>`;
                    : ",
}
                ${this.renderIssues(healthData.build.issues)}
            </div>;
            ;
            <div class=status-card status-${healthData.files.status.toLowerCase()}">;
                <h3>📁 Files</h3>;
                <div class="metric>;
                    <span>Status:</span>;
                    <span class=metric-value>${healthData.files.status}</span>;
                </div>;
                <div class=metric>;
                    <span>Total Files:</span>;
                    <span class=metric-value">${healthData.files.totalFiles}</span>;
                </div>;
                <div class="metric>;
                    <span>Corrupted:</span>;
                    <span class=metric-value>${healthData.files.corruptedFiles}</span>;
                </div>;
                <div class=metric>;
                    <span>Backup Files:</span>;
                    <span class=metric-value">${healthData.files.backupFiles}</span>;
                </div>;
                ${this.renderIssues(healthData.files.issues)}
            </div>;
            ;
            <div class="status-card status-${healthData.pm2.status.toLowerCase()}>;
                <h3>⚡ PM2 Processes</h3>;
                <div class=metric>;
                    <span>Status:</span>;
                    <span class=metric-value>${healthData.pm2.status}</span>;
                </div>;
                <div class=metric">;
                    <span>Total Processes:</span>;
                    <span class="metric-value>${healthData.pm2.processes.length}</span>;
                </div>;
                ${this.renderIssues(healthData.pm2.issues)}
            </div>;
        </div>;
        ;
        <div class=recommendations>;
            <h3>💡 Recommendations</h3>;
            ${healthData.recommendations.map(rec => `<div class=recommendation>• ${rec}</div>`).join(``)}
        </div>;
        ;
        <div class=timestamp">            Generated at: ${new Date(healthData.timestamp).toLocaleString()}
        </div>;
    </div>;
</body></html>`,
}
;
  renderIssues(issues) {
  if (!issues || issues.length === 0) {
  return `<div class="issues-list><div class=issue style=background: #f0fdf4; color: #059669;>✓ No issues found</div></div>`,
}
;
    return `<div class=issues-list">${issues.map(issue => `<div class="issue>⚠️ ${issue}</div>`).join(``)}</div>`,
}
;
  async saveDashboardFiles(dashboardHtml, healthData) {
  // Save HTML dashboard;
    const htmlFile = path.join(this.dashboardDir, "index.html");
    fs.writeFileSync(htmlFile, dashboardHtml);
    // Save JSON data;
    const jsonFile = path.join(this.dashboardDir, "health-data.json");
    fs.writeFileSync(jsonFile, JSON.stringify(healthData, null, 2));
    // Save timestamp;
    const timestampFile = path.join(this.dashboardDir, `last-updated.txt`);

  renderIssues(issues) {
  if (!issues || issues.length === 0) {
  return "<div class=issues-list"><div class="issue style=background: #f0fdf4; color: #059669;">✓ No issues found</div></div>",
}
;
    return `<div class="issues-list>${issues.map(issue => `<div class=issue">⚠️ ${issue}</div>`).join(")}</div>`,
}
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
    fs.writeFileSync(timestampFile, new Date().toISOString()),
}
;
  async generateSummaryReport(healthData) {
  const summary = {
  timestamp: healthData.timestamp;
      overallStatus: this.calculateOverallStatus(healthData);
      summary: {
  totalIssues: this.countTotalIssues(healthData);
        criticalIssues: this.countCriticalIssues(healthData);
        recommendations: healthData.recommendations.length,
};
      components: {
  dependencies: healthData.dependencies.status;
        typescript: healthData.typescript.status;
        build: healthData.build.status;
        files: healthData.files.status;
        pm2: healthData.pm2.status,
},
}
    const summaryFile = path.join(this.dashboardDir, `summary.json`);
    fs.writeFileSync(summaryFile, JSON.stringify(summary, null, 2));
this.log(`Summary report generated: ${summaryFile}`);

    return summary,
}
;
  calculateOverallStatus(healthData) {
  const statuses = [`healthData.dependencies.status`, `healthData.typescript.status`, "healthData.build.status", "healthData.files.status", "healthData.pm2.status", ""];

  calculateOverallStatus(healthData) {
  const statuses = ["healthData.dependencies.status", "healthData.typescript.status", "healthData.build.status", "healthData.files.status", "healthData.pm2.status", "];

    if (statuses.includes("CRITICAL")) return "CRITICAL";
    if (statuses.includes("ERROR")) return "ERROR";
    if (statuses.includes("WARNING")) return "WARNING";
    if (statuses.includes("UNKNOWN")) return "UNKNOWN";
    return "HEALTHY",
}
;
  countTotalIssues(healthData) {
  return (;
      healthData.dependencies.issues.length +;
      healthData.typescript.issues.length +;
      healthData.build.issues.length +;
      healthData.files.issues.length +;
      healthData.pm2.issues.length;
    ),
}
;
  countCriticalIssues(healthData) {
  let count = 0;

    if (healthData.dependencies.status === "CRITICAL") count++;
    if (healthData.files.status === `CRITICAL`) count++;
    return count,
}
}
;
// Main execution;
async function $1() {
    if (healthData.files.status === "CRITICAL") count++;

    return count,
}
}
;
// Main execution;
async function main() {
  const dashboard = new ProjectHealthDashboard();

  try {
  await dashboard.generateHealthDashboard();
    process.exit(0),
} catch (error) {  dashboard.log(`Dashboard generation failed: ${error.message  }`, `ERROR`);
    process.exit(1),
}
}
;
if (require.main === module) {
  main(),
}
;
module.exports = ProjectHealthDashboard
=======
#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('📊 Starting Project Health Dashboard...');

class ProjectHealthDashboard {
  constructor() {
    this.dashboardLogDir = path.join(process.cwd(), 'logs');
    this.ensureLogDirectory();
    this.healthMetrics = {
      buildHealth: 0,
      codeQuality: 0,
      dependencyHealth: 0,
      fileIntegrity: 0,
      securityHealth: 0,
      overallHealth: 0,
      lastUpdate: null
    };
    this.healthHistory = [];
    this.maxHealthHistory = 30;
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.dashboardLogDir)) {
      fs.mkdirSync(this.dashboardLogDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    
    const logFile = path.join(this.dashboardLogDir, 'project-health-dashboard.log');
    fs.appendFileSync(logFile, logMessage);
  }

  async generateHealthDashboard() {
    this.log('📊 Generating project health dashboard...');
    
    try {
      // Collect health metrics from various sources
      const buildHealth = await this.getBuildHealth();
      const codeQuality = await this.getCodeQuality();
      const dependencyHealth = await this.getDependencyHealth();
      const fileIntegrity = await this.getFileIntegrity();
      const securityHealth = await this.getSecurityHealth();
      
      // Calculate overall health score
      const overallHealth = this.calculateOverallHealth({
        buildHealth,
        codeQuality,
        dependencyHealth,
        fileIntegrity,
        securityHealth
      });
      
      // Update health metrics
      this.updateHealthMetrics({
        buildHealth,
        codeQuality,
        dependencyHealth,
        fileIntegrity,
        securityHealth,
        overallHealth,
        lastUpdate: new Date().toISOString()
      });
      
      // Generate dashboard report
      const dashboard = this.generateDashboardReport();
      
      // Log dashboard summary
      this.log(`📊 Project Health Dashboard Generated:`);
      this.log(`🏗️ Build Health: ${buildHealth}/100`);
      this.log(`🔍 Code Quality: ${codeQuality}/100`);
      this.log(`📦 Dependency Health: ${dependencyHealth}/100`);
      this.log(`🔒 File Integrity: ${fileIntegrity}/100`);
      this.log(`🛡️ Security Health: ${securityHealth}/100`);
      this.log(`⭐ Overall Health: ${overallHealth}/100`);
      
      return dashboard;
      
    } catch (error) {
      this.log(`❌ Dashboard generation failed: ${error.message}`);
      return null;
    }
  }

  async getBuildHealth() {
    try {
      const buildMetricsFile = path.join(this.dashboardLogDir, 'build-health-metrics.json');
      if (fs.existsSync(buildMetricsFile)) {
        const metrics = JSON.parse(fs.readFileSync(buildMetricsFile, 'utf8'));
        return metrics.systemHealth === 'excellent' ? 100 : 
               metrics.systemHealth === 'good' ? 80 :
               metrics.systemHealth === 'fair' ? 60 :
               metrics.systemHealth === 'poor' ? 40 : 20;
      }
      
      // Fallback: check if build directories exist
      const buildDirs = ['dist', '.next', 'out', 'build'];
      const existingDirs = buildDirs.filter(dir => fs.existsSync(dir));
      return existingDirs.length > 0 ? 70 : 30;
      
    } catch (error) {
      return 50;
    }
  }

  async getCodeQuality() {
    try {
      const qualityMetricsFile = path.join(this.dashboardLogDir, 'code-quality-metrics.json');
      if (fs.existsSync(qualityMetricsFile)) {
        const metrics = JSON.parse(fs.readFileSync(qualityMetricsFile, 'utf8'));
        return metrics.overallScore || 50;
      }
      
      // Fallback: run basic quality checks
      return await this.runBasicQualityCheck();
      
    } catch (error) {
      return 50;
    }
  }

  async runBasicQualityCheck() {
    try {
      let score = 100;
      
      // Check for TypeScript files
      const tsFiles = this.countFilesByExtension(['.ts', '.tsx']);
      if (tsFiles > 0) score += 10;
      
      // Check for test files
      const testFiles = this.countFilesByExtension(['.test.js', '.test.ts', '.spec.js', '.spec.ts']);
      if (testFiles > 0) score += 10;
      
      // Check for configuration files
      const configFiles = ['package.json', 'tsconfig.json', 'next.config.js', 'tailwind.config.js'];
      const existingConfigs = configFiles.filter(file => fs.existsSync(file));
      score += (existingConfigs.length / configFiles.length) * 20;
      
      return Math.min(100, score);
      
    } catch (error) {
      return 50;
    }
  }

  countFilesByExtension(extensions) {
    let count = 0;
    
    try {
      const srcDir = path.join(process.cwd(), 'src');
      const componentsDir = path.join(process.cwd(), 'components');
      
      if (fs.existsSync(srcDir)) {
        count += this.countFilesInDirectory(srcDir, extensions);
      }
      
      if (fs.existsSync(componentsDir)) {
        count += this.countFilesInDirectory(componentsDir, extensions);
      }
    } catch (error) {
      // Ignore errors
    }
    
    return count;
  }

  countFilesInDirectory(dirPath, extensions) {
    let count = 0;
    
    try {
      const items = fs.readdirSync(dirPath);
      for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          count += this.countFilesInDirectory(fullPath, extensions);
        } else if (extensions.some(ext => item.endsWith(ext))) {
          count++;
        }
      }
    } catch (error) {
      // Ignore errors
    }
    
    return count;
  }

  async getDependencyHealth() {
    try {
      const dependencyMetricsFile = path.join(this.dashboardLogDir, 'dependency-metrics.json');
      if (fs.existsSync(dependencyMetricsFile)) {
        const metrics = JSON.parse(fs.readFileSync(dependencyMetricsFile, 'utf8'));
        
        let score = 100;
        if (metrics.vulnerableDependencies > 0) score -= 40;
        if (metrics.outdatedDependencies > 10) score -= 20;
        if (metrics.outdatedDependencies > 5) score -= 10;
        
        return Math.max(0, score);
      }
      
      // Fallback: check package.json
      if (fs.existsSync('package.json')) {
        return 70;
      }
      
      return 30;
      
    } catch (error) {
      return 50;
    }
  }

  async getFileIntegrity() {
    try {
      const integrityMetricsFile = path.join(this.dashboardLogDir, 'file-integrity-metrics.json');
      if (fs.existsSync(integrityMetricsFile)) {
        const metrics = JSON.parse(fs.readFileSync(integrityMetricsFile, 'utf8'));
        
        let score = 100;
        if (metrics.corruptedFiles > 0) score -= 50;
        if (metrics.modifiedFiles > 20) score -= 20;
        if (metrics.modifiedFiles > 10) score -= 10;
        
        return Math.max(0, score);
      }
      
      // Fallback: check critical files
      const criticalFiles = ['package.json', 'next.config.js', 'tsconfig.json'];
      const existingFiles = criticalFiles.filter(file => fs.existsSync(file));
      return (existingFiles.length / criticalFiles.length) * 100;
      
    } catch (error) {
      return 50;
    }
  }

  async getSecurityHealth() {
    try {
      // Check for security configuration files
      const securityFiles = ['.env.example', 'security.md', 'SECURITY.md'];
      const existingSecurityFiles = securityFiles.filter(file => fs.existsSync(file));
      
      let score = 50;
      score += (existingSecurityFiles.length / securityFiles.length) * 30;
      
      // Check for HTTPS configuration
      if (fs.existsSync('next.config.js')) {
        const config = fs.readFileSync('next.config.js', 'utf8');
        if (config.includes('https') || config.includes('secure')) {
          score += 20;
        }
      }
      
      return Math.min(100, score);
      
    } catch (error) {
      return 50;
    }
  }

  calculateOverallHealth(metrics) {
    const weights = {
      buildHealth: 0.25,
      codeQuality: 0.25,
      dependencyHealth: 0.20,
      fileIntegrity: 0.20,
      securityHealth: 0.10
    };
    
    const overallScore = Object.entries(metrics).reduce((total, [key, value]) => {
      if (key !== 'overallHealth' && weights[key]) {
        return total + (value * weights[key]);
      }
      return total;
    }, 0);
    
    return Math.round(overallScore);
  }

  updateHealthMetrics(metrics) {
    this.healthMetrics = { ...metrics };
    
    // Record health history
    this.healthHistory.push({
      timestamp: new Date().toISOString(),
      ...metrics
    });
    
    // Keep only recent history
    if (this.healthHistory.length > this.maxHealthHistory) {
      this.healthHistory = this.healthHistory.slice(-this.maxHealthHistory);
    }
    
    // Save health metrics
    const metricsFile = path.join(this.dashboardLogDir, 'project-health-metrics.json');
    fs.writeFileSync(metricsFile, JSON.stringify({
      ...this.healthMetrics,
      history: this.healthHistory
    }, null, 2));
  }

  generateDashboardReport() {
    const totalChecks = this.healthHistory.length;
    const excellentChecks = this.healthHistory.filter(h => h.overallHealth >= 90).length;
    const goodChecks = this.healthHistory.filter(h => h.overallHealth >= 80 && h.overallHealth < 90).length;
    const fairChecks = this.healthHistory.filter(h => h.overallHealth >= 70 && h.overallHealth < 80).length;
    const poorChecks = this.healthHistory.filter(h => h.overallHealth >= 60 && h.overallHealth < 70).length;
    const criticalChecks = this.healthHistory.filter(h => h.overallHealth < 60).length;
    
    const report = {
      currentHealth: this.healthMetrics.overallHealth,
      healthBreakdown: {
        build: this.healthMetrics.buildHealth,
        codeQuality: this.healthMetrics.codeQuality,
        dependencies: this.healthMetrics.dependencyHealth,
        fileIntegrity: this.healthMetrics.fileIntegrity,
        security: this.healthMetrics.securityHealth
      },
      summary: {
        totalChecks,
        excellent: excellentChecks,
        good: goodChecks,
        fair: fairChecks,
        poor: poorChecks,
        critical: criticalChecks
      },
      recentHistory: this.healthHistory.slice(-10),
      recommendations: this.generateDashboardRecommendations(),
      trends: this.analyzeHealthTrends()
    };
    
    return report;
  }

  generateDashboardRecommendations() {
    const recommendations = [];
    
    if (this.healthMetrics.buildHealth < 70) {
      recommendations.push('🏗️ Build health is poor. Check build configuration and dependencies.');
    }
    
    if (this.healthMetrics.codeQuality < 70) {
      recommendations.push('🔍 Code quality needs improvement. Run linting and fix issues.');
    }
    
    if (this.healthMetrics.dependencyHealth < 70) {
      recommendations.push('📦 Dependency health is poor. Update packages and fix vulnerabilities.');
    }
    
    if (this.healthMetrics.fileIntegrity < 70) {
      recommendations.push('🔒 File integrity issues detected. Check for corruption or unauthorized changes.');
    }
    
    if (this.healthMetrics.securityHealth < 70) {
      recommendations.push('🛡️ Security configuration needs improvement. Review security settings.');
    }
    
    if (this.healthMetrics.overallHealth >= 90) {
      recommendations.push('✅ Project health is excellent! Maintain current standards.');
    } else if (this.healthMetrics.overallHealth >= 80) {
      recommendations.push('👍 Project health is good. Minor improvements can be made.');
    } else if (this.healthMetrics.overallHealth >= 70) {
      recommendations.push('⚠️ Project health is fair. Several areas need attention.');
    } else {
      recommendations.push('🚨 Project health is poor. Immediate action required.');
    }
    
    return recommendations;
  }

  analyzeHealthTrends() {
    if (this.healthHistory.length < 3) {
      return { trend: 'insufficient_data', direction: 'unknown', change: 0 };
    }
    
    const recent = this.healthHistory.slice(-3);
    const older = this.healthHistory.slice(-6, -3);
    
    if (older.length === 0) {
      return { trend: 'insufficient_data', direction: 'unknown', change: 0 };
    }
    
    const recentAvg = recent.reduce((sum, h) => sum + h.overallHealth, 0) / recent.length;
    const olderAvg = older.reduce((sum, h) => sum + h.overallHealth, 0) / older.length;
    
    const change = recentAvg - olderAvg;
    const direction = change > 0 ? 'improving' : change < 0 ? 'declining' : 'stable';
    
    let trend = 'stable';
    if (Math.abs(change) > 10) {
      trend = change > 0 ? 'significant_improvement' : 'significant_decline';
    } else if (Math.abs(change) > 5) {
      trend = change > 0 ? 'improvement' : 'decline';
    }
    
    return { trend, direction, change: Math.round(change) };
  }

  async startContinuousDashboard() {
    this.log('🔄 Starting continuous health dashboard...');
    
    const interval = parseInt(process.env.AUTOMATION_INTERVAL) || 300000; // 5 minutes default
    
    // Generate initial dashboard
    await this.generateHealthDashboard();
    
    // Set up continuous dashboard updates
    setInterval(async () => {
      this.log('🔄 Updating health dashboard...');
      await this.generateHealthDashboard();
      
      // Generate and log report
      const report = this.generateDashboardReport();
      this.log(`📊 Dashboard Updated: ${report.currentHealth}/100 (${report.trends.direction})`);
      
      if (report.recommendations.length > 0) {
        this.log('💡 Top Recommendations:');
        report.recommendations.slice(0, 3).forEach(rec => this.log(`   ${rec}`));
      }
    }, interval);
    
    this.log(`⏰ Health dashboard active. Updating every ${interval / 60000} minutes.`);
  }
}

// Main execution
async function main() {
  const dashboard = new ProjectHealthDashboard();
  
  try {
    await dashboard.startContinuousDashboard();
  } catch (error) {
    console.error('❌ Project health dashboard failed:', error);
    process.exit(1);
  }
}

// Start the health dashboard
main().catch(console.error);
>>>>>>> origin/enhance-app-with-new-services-and-advertising
