<<<<<<< HEAD
#!/""usr/bin/env"" node;
/**;
 * Dependency Manager - PM2 Automation;
 * Automatically manages and fixes dependency issues;
 */;
#!/"usr/bin/env" node;
/**;
 * Dependency Manager - PM2 Automation;
 * Automatically manages and fixes dependency issues;
 */;
const fs = require("fs");
const path = require("path");
const { execSync, spawn } = require("child_process");

class $1 {
  constructor() {
  this.projectRoot = process.cwd();
    this.logFile = path.join(;
      this.projectRoot,logs";
      "dependency-manager.log";
    );
    this.reportsDir = path.join(this.projectRoot, "logs", `dependency-reports`);
    this.ensureLogsDirectory(),
}
;
  ensureLogsDirectory() {
  const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true }),
}
;
    if (!fs.existsSync(this.reportsDir)) {
  fs.mkdirSync(this.reportsDir, { recursive: true }),
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
  async runDependencyManagement() {
  this.log(`Starting dependency management automation...`);
    const actions = [];
    const errors = [];
    try {
  // 1. Check current dependency status;
      const status = await this.checkDependencyStatus();
      // 2. Fix package.json issues;
      if (status.packageJsonIssues.length > 0) {
  const packageFixes = await this.fixPackageJsonIssues(;
          status.packageJsonIssues;
        );
        actions.push(...packageFixes),
}
;
      // 3. Clean corrupted dependencies;
      if (status.corruptedDeps.length > 0) {
  const cleanupActions = await this.cleanCorruptedDependencies();
        actions.push(...cleanupActions),
}
;
      // 4. Reinstall dependencies if needed;
      if (status.needsReinstall) {
  const reinstallActions = await this.reinstallDependencies();
        actions.push(...reinstallActions),
}
;
      // 5. Update outdated dependencies;
      const updateActions = await this.updateDependencies();
      actions.push(...updateActions);
      // 6. Generate dependency report;
      const report = await this.generateDependencyReport(;
        status;
        actions;
        errors;
      );
      // 7. Commit changes if successful;
      if (actions.length > 0 && errors.length === 0) {
  await this.commitDependencyChanges(actions),
}
    } catch (error) {  this.log(`Dependency management failed: ${error.message  }`, `ERROR`);
      errors.push({
  type: `SYSTEM_ERROR`;
        message: error.message;
        timestamp: new Date().toISOString();

      // 3. Clean corrupted dependencies;
      if (status.corruptedDeps.length > 0) {
  const cleanupActions = await this.cleanCorruptedDependencies();
        actions.push(...cleanupActions),
}
;
      // 4. Reinstall dependencies if needed;
      if (status.needsReinstall) {
  const reinstallActions = await this.reinstallDependencies();
        actions.push(...reinstallActions),
}
;
      // 5. Update outdated dependencies;
      const updateActions = await this.updateDependencies();
      actions.push(...updateActions);

      // 6. Generate dependency report;
      const report = await this.generateDependencyReport(;
        status;
        actions;
        errors;
      );

      // 7. Commit changes if successful;
      if (actions.length > 0 && errors.length === 0) {
  await this.commitDependencyChanges(actions),
}
    } catch (error) {this.log(`Dependency management failed: ${error.message}`, "ERROR");
      errors.push({
  type: "SYSTEM_ERROR";
        message: error.message;
        timestamp: new Date().toISOString(),
}),
}
;
    return { actions, errors }
  }
;
  async checkDependencyStatus() {
  const status = {
  packageJsonIssues: [];
      corruptedDeps: [];
      needsReinstall: false;
      outdatedDeps: [],
}
    try {
  // Check package.json;
      const packagePath = path.join(this.projectRoot, "package.json");
      if (fs.existsSync(packagePath)) {
  try {
  const packageContent = fs.readFileSync(packagePath, "utf8");
          const packageJson = JSON.parse(packageContent);
          // Check for invalid versions;
          if (packageJson.dependencies) {
  for (const ["dep", "version"] of Object.entries(;
              packageJson.dependencies;
            )) {
  if (typeof version !== "string" || version.trim() === "") {
  status.packageJsonIssues.push({
  type: "INVALID_VERSION";
                  dependency: dep;
                  current: version;

          // Check for invalid versions;
          if (packageJson.dependencies) {
  for (const ["dep", "version"] of Object.entries(;
              packageJson.dependencies;
            )) {
  if (typeof version !== "string" || version.trim() === ") {
  status.packageJsonIssues.push({
  type: "INVALID_VERSION";
                  dependency: dep;
                  current: version,
}),
}
            }
          }
;
          if (packageJson.devDependencies) {
  for (const ["dep", "version"] of Object.entries(;
              packageJson.devDependencies;
            )) {
  if (typeof version !== "string" || version.trim() === "") {
  status.packageJsonIssues.push({
  type: "INVALID_DEV_VERSION";
                  dependency: dep;
                  current: version,
}),
}
            }
          }
        } catch (error) {
  status.packageJsonIssues.push({
  type: `PARSE_ERROR`;
            error: error.message}),
}
      }
;
      // Check node_modules;
      const nodeModulesPath = path.join(this.projectRoot, `node_modules`);
      if (fs.existsSync(nodeModulesPath)) {} catch (error) {
  status.packageJsonIssues.push({
  type: "PARSE_ERROR";
            error: error.message,
}),
}
      }
;
      // Check node_modules;
      const nodeModulesPath = path.join(this.projectRoot, "node_modules");
      if (fs.existsSync(nodeModulesPath)) {
  const corrupted = await this.findCorruptedPackages(nodeModulesPath);
        status.corruptedDeps = corrupted;

        if (corrupted.length > 0) {
  status.needsReinstall = true,
}
      } else {
  status.needsReinstall = true,
}
;
      // Check for outdated dependencies;
      try {
  const outdated = await this.checkOutdatedDependencies();
        status.outdatedDeps = outdated,
} catch (error) {
  this.log(Failed to check outdated dependencies: ${error.message  }`;
          `WARN`;
        ),
}
    } catch (error) {  this.log(`Dependency status check failed: ${error.message  }`, `ERROR`),
}
;
    return status,
}
;
  async findCorruptedPackages(nodeModulesPath) {
  const corrupted = [];

    try {
  const packages = fs.readdirSync(nodeModulesPath);
      for (const pkg of packages) {
  if (pkg.startsWith(`.")) continue;

      for (const pkg of packages) {
  if (pkg.startsWith(".")) continue;

        const pkgPath = path.join(nodeModulesPath, "pkg);
        const pkgJsonPath = path.join(pkgPath", "package.json");

        if (fs.existsSync(pkgJsonPath)) {
  try {
  const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, "utf8"));
            if (!pkgJson.name || !pkgJson.version) {
  corrupted.push({
  name: pkg;
                issue: "Missing name or version";
                path: pkgPath,
}),
}
          } catch {
  corrupted.push({
  name: pkg;
              issue: `Invalid package.json`;
              path: pkgPath}),
}
        } else {
  corrupted.push({
  name: pkg;
            issue: `Missing package.json`;
            path: pkgPath,          }),
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
      return Object.entries(outdated).map((["name", "info"]) => ({
  name;
        current: info.current;
        wanted: info.wanted;
        latest: info.latest,
})),
} catch (error) {
  // npm outdated returns non-zero exit code when there are outdated deps;
      if (error.stdout) {
  try {
  const outdated = JSON.parse(error.stdout);
          return Object.entries(outdated).map((["name", "info"]) => ({
  name;
            current: info.current;
            wanted: info.wanted;
            latest: info.latest})),
} catch {} catch (error) {
  // npm outdated returns non-zero exit code when there are outdated deps;
      if (error.stdout) {
  try {
  const outdated = JSON.parse(error.stdout);
          return Object.entries(outdated).map((["name", "info"]) => ({
  name;
            current: info.current;
            wanted: info.wanted;
            latest: info.latest,
})),
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
  async fixPackageJsonIssues(issues) {
  const fixes = [];

    try {
  const packagePath = path.join(this.projectRoot, "package.json");
      const packageContent = fs.readFileSync(packagePath, "utf8");
      const packageJson = JSON.parse(packageContent);
      let modified = false;
      for (const issue of issues) {
  if (;
          issue.type === "INVALID_VERSION" ||;
          issue.type === "INVALID_DEV_VERSION";
        ) {
  const deps =;
            issue.type === "INVALID_VERSION";
              ? packageJson.dependencies;
              : packageJson.devDependencies;
          if (deps && deps[issue.dependency]) {
  // Set a reasonable default version;
            deps[issue.dependency] = `^1.0.0`;
            modified = true;
            fixes.push({
  type: `PACKAGE_JSON_FIX`;
              dependency: issue.dependency,action: `Fixed invalid version for ${issue.dependency}`;
              timestamp: new Date().toISOString();

      for (const issue of issues) {
  if (;
          issue.type === "INVALID_VERSION" ||;
          issue.type === "INVALID_DEV_VERSION";
        ) {
  const deps =;
            issue.type === "INVALID_VERSION";
              ? packageJson.dependencies;
              : packageJson.devDependencies;

          if (deps && deps[issue.dependency]) {
  // Set a reasonable default version;
            deps[issue.dependency] = "^1.0.0";
            modified = true;

            fixes.push({
  type: "PACKAGE_JSON_FIX";
              dependency: issue.dependency,action: `Fixed invalid version for ${issue.dependency}`;
              timestamp: new Date().toISOString(),
}),
}
        }
      }
;
      if (modified) {
  fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
        this.log(`Fixed package.json issues`),
}
    } catch (error) {  this.log(`Failed to fix package.json: ${error.message  }`, `ERROR`),
}
;
    return fixes,
}
;
  async cleanCorruptedDependencies() {
  const actions = [];
    try {
  this.log(`Cleaning corrupted dependencies...`);
      const nodeModulesPath = path.join(this.projectRoot, "node_modules");
      const packageLockPath = path.join(this.projectRoot, "package-lock.json");

      if (fs.existsSync(nodeModulesPath)) {
  fs.rmSync(nodeModulesPath, { recursive: true, force: true });
        this.log("Removed corrupted node_modules");

        actions.push({
  type: "CLEANUP";
          action: "Removed corrupted node_modules directory";
          timestamp: new Date().toISOString(),
}),
}
;
      if (fs.existsSync(packageLockPath)) {
  fs.unlinkSync(packageLockPath);
        this.log("Removed package-lock.json");
        actions.push({
  type: `CLEANUP`;
          action: `Removed package-lock.json`;
          timestamp: new Date().toISOString();

        actions.push({
  type: "CLEANUP";
          action: "Removed package-lock.json";
          timestamp: new Date().toISOString(),
}),
}
    } catch (error) {  this.log(`Failed to clean dependencies: ${error.message  }`, `ERROR`),
}
;
    return actions,
}
;
  async reinstallDependencies() {
  const actions = [];
    try {
  this.log(`Reinstalling dependencies...`);
      // Run npm install;
      execSync("npm install", {
  cwd: this.projectRoot;
        stdio: "pipe",
});

      this.log("Dependencies reinstalled successfully");
      actions.push({
  type: `REINSTALL`;
        action: `Successfully reinstalled all dependencies`;
        timestamp: new Date().toISOString();

      actions.push({
  type: "REINSTALL";
        action: "Successfully reinstalled all dependencies";
        timestamp: new Date().toISOString(),
}),
} catch (error) {  this.log(`Failed to reinstall dependencies: ${error.message  }`, `ERROR`);
      throw error,
}
;
    return actions,
}
;
  async updateDependencies() {
  const actions = [];
    try {
  // Check for outdated dependencies;
      const outdated = await this.checkOutdatedDependencies();

      if (outdated.length > 0) {this.log(`Found ${outdated.length} outdated dependencies`);
        // Update minor and patch versions only (safe updates);
        for (const dep of outdated) {
  try {
  if (this.isSafeUpdate(dep.current, dep.wanted)) {execSync(`npm update ${dep.name}`, {
  cwd: this.projectRoot;
                stdio: `pipe`});
              actions.push({
  type: `UPDATE`;
                dependency: dep.name,action: `Updated ${dep.name} from ${dep.current} to ${dep.wanted}`;
                timestamp: new Date().toISOString();

        // Update minor and patch versions only (safe updates);
        for (const dep of outdated) {
  try {
  if (this.isSafeUpdate(dep.current, dep.wanted)) {execSync(`npm update ${dep.name}`, {
  cwd: this.projectRoot;
                stdio: "pipe",
});

              actions.push({
  type: "UPDATE";
                dependency: dep.name,action: `Updated ${dep.name} from ${dep.current} to ${dep.wanted}`;
                timestamp: new Date().toISOString(),
}),
}
          } catch (error) {  this.log(`Failed to update ${dep.name  }: ${error.message}`, `WARN`),
}
        }
      }
    } catch (error) {  this.log(`Failed to update dependencies: ${error.message  }`, `WARN`),
}
;
    return actions,
}
;
  isSafeUpdate(current, wanted) {
  // Only allow minor and patch updates (semver);
    const currentParts = current.split(`.`).map(Number);
    const wantedParts = wanted.split(`.`).map(Number);
    // Major version should be the same;
    if (currentParts[0] !== wantedParts[0]) {
  return false,
}
;
    return true,
}
;
  async generateDependencyReport(status, actions, errors) {
  const report = {
  timestamp: new Date().toISOString();
      summary: {
  totalActions: actions.length;
        totalErrors: errors.length;
        packageJsonIssues: status.packageJsonIssues.length;
        corruptedDeps: status.corruptedDeps.length;
        outdatedDeps: status.outdatedDeps.length,
};
      status: status;
      actions: actions;
      errors: errors,
}
    const reportFile = path.join(;
      this.reportsDir,dependency-report-${Date.now()}.json`;

    const reportFile = path.join(;
      this.reportsDir,dependency-report-${Date.now()}.json";
    );
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
this.log(`Dependency report generated: ${reportFile}`);

    return report,
}
;
  async commitDependencyChanges(actions) {
  try {
  this.log(`Committing dependency changes...`);
      // Add package.json and package-lock.json;
      execSync(`git add package.json package-lock.json', {
  cwd: this.projectRoot;
        stdio: `pipe`});
      // Commitconst commitMessage = `chore: Auto-manage dependencies (${actions.length} actions)`;execSync(`git commit -m "${commitMessage}"`, {
  cwd: this.projectRoot;
        stdio: `pipe`});
      this.log(`Dependency changes committed successfully`),
} catch (error) {  this.log(`Failed to commit dependency changes: ${error.message  }`, `WARN`),
}
  }
}
;
// Main execution;
async function $1() {
  const manager = new DependencyManager();

  try {
  const result = await manager.runDependencyManagement();
    if (result.errors.length === 0 && result.actions.length > 0) {
  process.exit(0); // Success,
} else if (result.errors.length > 0) {
  process.exit(1); // Errors occurred,
} else {
  if (result.errors.length === 0 && result.actions.length > 0) {
  process.exit(0); // Success,
} else if (result.errors.length > 0) {
  process.exit(1); // Errors occurred,
} else {
  process.exit(2); // No actions needed,
}
  } catch (error) {  manager.log(`Fatal error: ${error.message  }`, `ERROR`);
    process.exit(1),
}
}
;
if (require.main === module) {
  main(),
}
;
module.exports = DependencyManager
=======
#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('📦 Starting Dependency Manager...');

class DependencyManager {
  constructor() {
    this.managerLogDir = path.join(process.cwd(), 'logs');
    this.ensureLogDirectory();
    this.managerMetrics = {
      dependenciesUpdated: 0,
      vulnerabilitiesFixed: 0,
      outdatedPackages: 0,
      totalDependencies: 0,
      lastUpdate: null
    };
    this.managerHistory = [];
    this.maxManagerHistory = 30;
    this.updateStrategy = 'conservative'; // conservative, moderate, aggressive
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.managerLogDir)) {
      fs.mkdirSync(this.managerLogDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    
    const logFile = path.join(this.managerLogDir, 'dependency-manager.log');
    fs.appendFileSync(logFile, logMessage);
  }

  async manageDependencies() {
    this.log('📦 Managing dependencies...');
    
    try {
      let dependenciesUpdated = 0;
      let vulnerabilitiesFixed = 0;
      let outdatedPackages = 0;
      
      // Check current dependency status
      const dependencyStatus = await this.checkDependencyStatus();
      outdatedPackages = dependencyStatus.outdatedCount;
      
      // Fix security vulnerabilities first
      const securityResult = await this.fixSecurityVulnerabilities();
      vulnerabilitiesFixed = securityResult.fixed;
      
      // Update outdated dependencies based on strategy
      const updateResult = await this.updateOutdatedDependencies();
      dependenciesUpdated = updateResult.updated;
      
      // Clean up unused dependencies
      await this.cleanupUnusedDependencies();
      
      // Update dependency metrics
      this.updateManagerMetrics({
        dependenciesUpdated,
        vulnerabilitiesFixed,
        outdatedPackages,
        totalDependencies: dependencyStatus.totalCount,
        lastUpdate: new Date().toISOString()
      });
      
      // Log management summary
      this.log(`📦 Dependency Management Summary:`);
      this.log(`🔒 Vulnerabilities Fixed: ${vulnerabilitiesFixed}`);
      this.log(`🔄 Dependencies Updated: ${dependenciesUpdated}`);
      this.log(`📊 Outdated Packages: ${outdatedPackages}`);
      this.log(`📦 Total Dependencies: ${dependencyStatus.totalCount}`);
      
      return {
        dependenciesUpdated,
        vulnerabilitiesFixed,
        outdatedPackages,
        totalDependencies: dependencyStatus.totalCount
      };
      
    } catch (error) {
      this.log(`❌ Dependency management failed: ${error.message}`);
      return { dependenciesUpdated: 0, vulnerabilitiesFixed: 0, outdatedPackages: 0, totalDependencies: 0 };
    }
  }

  async checkDependencyStatus() {
    try {
      this.log('🔍 Checking dependency status...');
      
      // Read package.json
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const totalCount = Object.keys(packageJson.dependencies || {}).length + 
                        Object.keys(packageJson.devDependencies || {}).length;
      
      // Check for outdated packages
      let outdatedCount = 0;
      try {
        const outdatedResult = execSync('npm outdated --json --silent', { 
          encoding: 'utf8',
          stdio: 'pipe'
        });
        
        const outdated = JSON.parse(outdatedResult);
        outdatedCount = Object.keys(outdated).length;
        
      } catch (error) {
        // npm outdated returns non-zero exit code when there are outdated packages
        if (error.stdout) {
          try {
            const outdated = JSON.parse(error.stdout);
            outdatedCount = Object.keys(outdated).length;
          } catch (parseError) {
            // Ignore parse errors
          }
        }
      }
      
      return { totalCount, outdatedCount };
      
    } catch (error) {
      this.log(`❌ Failed to check dependency status: ${error.message}`);
      return { totalCount: 0, outdatedCount: 0 };
    }
  }

  async fixSecurityVulnerabilities() {
    try {
      this.log('🔒 Fixing security vulnerabilities...');
      
      let vulnerabilitiesFixed = 0;
      
      // Run security audit
      try {
        const auditResult = execSync('npm audit --json --silent', { 
          encoding: 'utf8',
          stdio: 'pipe'
        });
        
        const audit = JSON.parse(auditResult);
        const totalVulnerabilities = audit.metadata?.vulnerabilities?.total || 0;
        
        if (totalVulnerabilities > 0) {
          this.log(`🚨 Found ${totalVulnerabilities} security vulnerabilities`);
          
          // Try to fix vulnerabilities automatically
          try {
            execSync('npm audit fix --silent', { 
              stdio: 'pipe',
              timeout: 60000
            });
            
            // Check if vulnerabilities were fixed
            const fixedAuditResult = execSync('npm audit --json --silent', { 
              encoding: 'utf8',
              stdio: 'pipe'
            });
            
            const fixedAudit = JSON.parse(fixedAuditResult);
            const remainingVulnerabilities = fixedAudit.metadata?.vulnerabilities?.total || 0;
            
            vulnerabilitiesFixed = totalVulnerabilities - remainingVulnerabilities;
            
            if (remainingVulnerabilities > 0) {
              this.log(`⚠️ ${remainingVulnerabilities} vulnerabilities remain after automatic fix`);
            }
            
          } catch (fixError) {
            this.log(`⚠️ Automatic fix failed: ${fixError.message}`);
          }
        } else {
          this.log('✅ No security vulnerabilities found');
        }
        
      } catch (error) {
        // Audit failed, but we still have points
        this.log(`⚠️ Security audit failed: ${error.message}`);
      }
      
      return { fixed: vulnerabilitiesFixed };
      
    } catch (error) {
      this.log(`❌ Failed to fix security vulnerabilities: ${error.message}`);
      return { fixed: 0 };
    }
  }

  async updateOutdatedDependencies() {
    try {
      this.log('🔄 Updating outdated dependencies...');
      
      let updated = 0;
      
      // Get list of outdated packages
      let outdatedPackages = [];
      try {
        const outdatedResult = execSync('npm outdated --json --silent', { 
          encoding: 'utf8',
          stdio: 'pipe'
        });
        
        const outdated = JSON.parse(outdatedResult);
        outdatedPackages = Object.keys(outdated);
        
      } catch (error) {
        // npm outdated returns non-zero exit code when there are outdated packages
        if (error.stdout) {
          try {
            const outdated = JSON.parse(error.stdout);
            outdatedPackages = Object.keys(outdated);
          } catch (parseError) {
            // Ignore parse errors
          }
        }
      }
      
      if (outdatedPackages.length === 0) {
        this.log('✅ All dependencies are up to date');
        return { updated: 0 };
      }
      
      this.log(`📦 Found ${outdatedPackages.length} outdated packages`);
      
      // Apply update strategy
      switch (this.updateStrategy) {
        case 'conservative':
          updated = await this.conservativeUpdate(outdatedPackages);
          break;
        case 'moderate':
          updated = await this.moderateUpdate(outdatedPackages);
          break;
        case 'aggressive':
          updated = await this.aggressiveUpdate(outdatedPackages);
          break;
        default:
          updated = await this.conservativeUpdate(outdatedPackages);
      }
      
      return { updated };
      
    } catch (error) {
      this.log(`❌ Failed to update outdated dependencies: ${error.message}`);
      return { updated: 0 };
    }
  }

  async conservativeUpdate(outdatedPackages) {
    this.log('🔄 Applying conservative update strategy...');
    
    let updated = 0;
    
    // Only update patch versions for production dependencies
    for (const packageName of outdatedPackages) {
      try {
        // Check if it's a production dependency
        const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
        const isProduction = packageJson.dependencies && packageJson.dependencies[packageName];
        
        if (isProduction) {
          // Update to latest patch version
          execSync(`npm update ${packageName} --silent`, { 
            stdio: 'pipe',
            timeout: 30000
          });
          updated++;
          this.log(`✅ Updated ${packageName} (patch version)`);
        }
      } catch (error) {
        this.log(`⚠️ Failed to update ${packageName}: ${error.message}`);
      }
    }
    
    return updated;
  }

  async moderateUpdate(outdatedPackages) {
    this.log('🔄 Applying moderate update strategy...');
    
    let updated = 0;
    
    // Update patch and minor versions
    for (const packageName of outdatedPackages) {
      try {
        // Check current version
        const currentVersion = this.getCurrentVersion(packageName);
        const latestVersion = this.getLatestVersion(packageName);
        
        if (this.isMinorUpdate(currentVersion, latestVersion)) {
          // Update to latest minor version
          execSync(`npm install ${packageName}@latest --silent`, { 
            stdio: 'pipe',
            timeout: 30000
          });
          updated++;
          this.log(`✅ Updated ${packageName} to latest minor version`);
        } else if (this.isPatchUpdate(currentVersion, latestVersion)) {
          // Update to latest patch version
          execSync(`npm update ${packageName} --silent`, { 
            stdio: 'pipe',
            timeout: 30000
          });
          updated++;
          this.log(`✅ Updated ${packageName} (patch version)`);
        }
      } catch (error) {
        this.log(`⚠️ Failed to update ${packageName}: ${error.message}`);
      }
    }
    
    return updated;
  }

  async aggressiveUpdate(outdatedPackages) {
    this.log('🔄 Applying aggressive update strategy...');
    
    let updated = 0;
    
    // Update all packages to latest versions
    try {
      execSync('npm update --silent', { 
        stdio: 'pipe',
        timeout: 120000
      });
      
      // Count how many were actually updated
      const newOutdatedResult = execSync('npm outdated --json --silent', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      try {
        const newOutdated = JSON.parse(newOutdatedResult);
        const newOutdatedCount = Object.keys(newOutdated).length;
        updated = outdatedPackages.length - newOutdatedCount;
      } catch (parseError) {
        updated = outdatedPackages.length;
      }
      
      this.log(`✅ Aggressively updated ${updated} packages`);
      
    } catch (error) {
      this.log(`❌ Aggressive update failed: ${error.message}`);
    }
    
    return updated;
  }

  getCurrentVersion(packageName) {
    try {
      const packageLockPath = 'package-lock.json';
      if (fs.existsSync(packageLockPath)) {
        const packageLock = JSON.parse(fs.readFileSync(packageLockPath, 'utf8'));
        return packageLock.dependencies?.[packageName]?.version || '0.0.0';
      }
      
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      return packageJson.dependencies?.[packageName] || packageJson.devDependencies?.[packageName] || '0.0.0';
    } catch (error) {
      return '0.0.0';
    }
  }

  getLatestVersion(packageName) {
    try {
      const result = execSync(`npm view ${packageName} version --silent`, { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      return result.trim();
    } catch (error) {
      return '0.0.0';
    }
  }

  isMinorUpdate(current, latest) {
    const currentParts = current.split('.').map(Number);
    const latestParts = latest.split('.').map(Number);
    
    return latestParts[1] > currentParts[1] && latestParts[0] === currentParts[0];
  }

  isPatchUpdate(current, latest) {
    const currentParts = current.split('.').map(Number);
    const latestParts = latest.split('.').map(Number);
    
    return latestParts[2] > currentParts[2] && 
           latestParts[1] === currentParts[1] && 
           latestParts[0] === currentParts[0];
  }

  async cleanupUnusedDependencies() {
    try {
      this.log('🧹 Cleaning up unused dependencies...');
      
      // Check for unused dependencies
      try {
        execSync('npm prune --silent', { 
          stdio: 'pipe',
          timeout: 30000
        });
        this.log('✅ Cleaned up unused dependencies');
      } catch (error) {
        this.log(`⚠️ Cleanup failed: ${error.message}`);
      }
      
      // Check for duplicate dependencies
      try {
        const dedupeResult = execSync('npm dedupe --silent', { 
          stdio: 'pipe',
          timeout: 30000
        });
        this.log('✅ Deduplicated dependencies');
      } catch (error) {
        this.log(`⚠️ Deduplication failed: ${error.message}`);
      }
      
    } catch (error) {
      this.log(`❌ Failed to cleanup dependencies: ${error.message}`);
    }
  }

  updateManagerMetrics(metrics) {
    this.managerMetrics = { ...metrics };
    
    // Record manager history
    this.managerHistory.push({
      timestamp: new Date().toISOString(),
      ...metrics
    });
    
    // Keep only recent history
    if (this.managerHistory.length > this.maxManagerHistory) {
      this.managerHistory = this.managerHistory.slice(-this.maxManagerHistory);
    }
    
    // Save manager metrics
    const metricsFile = path.join(this.managerLogDir, 'dependency-manager-metrics.json');
    fs.writeFileSync(metricsFile, JSON.stringify({
      ...this.managerMetrics,
      history: this.managerHistory
    }, null, 2));
  }

  generateManagerReport() {
    const totalRuns = this.managerHistory.length;
    const successfulRuns = this.managerHistory.filter(h => h.dependenciesUpdated > 0 || h.vulnerabilitiesFixed > 0).length;
    const highUpdateRuns = this.managerHistory.filter(h => h.dependenciesUpdated > 5).length;
    
    const report = {
      currentStatus: this.getManagerStatus(),
      summary: {
        totalRuns,
        successfulRuns,
        highUpdateRuns,
        averageUpdates: totalRuns > 0 ? Math.round(this.managerHistory.reduce((sum, h) => sum + h.dependenciesUpdated, 0) / totalRuns) : 0,
        averageVulnerabilities: totalRuns > 0 ? Math.round(this.managerHistory.reduce((sum, h) => sum + h.vulnerabilitiesFixed, 0) / totalRuns) : 0
      },
      recentHistory: this.managerHistory.slice(-5),
      recommendations: this.generateManagerRecommendations()
    };
    
    return report;
  }

  getManagerStatus() {
    if (this.managerHistory.length === 0) return 'unknown';
    
    const recentRuns = this.managerHistory.slice(-3);
    const avgUpdates = recentRuns.reduce((sum, h) => sum + h.dependenciesUpdated, 0) / recentRuns.length;
    const avgVulnerabilities = recentRuns.reduce((sum, h) => sum + h.vulnerabilitiesFixed, 0) / recentRuns.length;
    
    if (avgVulnerabilities > 0) return 'security_issues';
    if (avgUpdates > 10) return 'frequent_updates';
    if (avgUpdates > 0) return 'stable_updates';
    return 'clean';
  }

  generateManagerRecommendations() {
    const recommendations = [];
    
    if (this.managerHistory.length > 0) {
      const recentRuns = this.managerHistory.slice(-3);
      const avgUpdates = recentRuns.reduce((sum, h) => sum + h.dependenciesUpdated, 0) / recentRuns.length;
      const avgVulnerabilities = recentRuns.reduce((sum, h) => sum + h.vulnerabilitiesFixed, 0) / recentRuns.length;
      
      if (avgVulnerabilities > 0) {
        recommendations.push('🚨 Security vulnerabilities detected regularly. Review dependency choices.');
      }
      
      if (avgUpdates > 15) {
        recommendations.push('🔄 Many dependency updates. Consider pinning critical versions.');
      } else if (avgUpdates > 5) {
        recommendations.push('📦 Moderate dependency updates. Current strategy is working well.');
      } else if (avgUpdates === 0) {
        recommendations.push('✅ Dependencies are stable. Consider more frequent updates for security.');
      }
      
      if (this.managerMetrics.outdatedPackages > 20) {
        recommendations.push('📊 Many outdated packages. Consider batch update strategy.');
      }
    }
    
    return recommendations;
  }

  async startContinuousManagement() {
    this.log('🔄 Starting continuous dependency management...');
    
    const interval = parseInt(process.env.AUTOMATION_INTERVAL) || 1800000; // 30 minutes default
    
    // Run initial dependency management
    await this.manageDependencies();
    
    // Set up continuous management
    setInterval(async () => {
      this.log('🔄 Running scheduled dependency management...');
      await this.manageDependencies();
      
      // Generate and log report
      const report = this.generateManagerReport();
      this.log(`📊 Manager Report: ${report.currentStatus} (${report.summary.averageUpdates} avg updates)`);
      
      if (report.recommendations.length > 0) {
        this.log('💡 Recommendations:');
        report.recommendations.forEach(rec => this.log(`   ${rec}`));
      }
    }, interval);
    
    this.log(`⏰ Dependency management active. Running every ${interval / 60000} minutes.`);
  }
}

// Main execution
async function main() {
  const dependencyManager = new DependencyManager();
  
  try {
    await dependencyManager.startContinuousManagement();
  } catch (error) {
    console.error('❌ Dependency manager failed:', error);
    process.exit(1);
  }
}

// Start the dependency manager
main().catch(console.error);
>>>>>>> origin/enhance-app-with-new-services-and-advertising
