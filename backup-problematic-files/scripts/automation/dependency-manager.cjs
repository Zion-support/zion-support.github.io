<<<<<<< HEAD
#!/"usr/bin/env" node;
=======
#!/usr/bin/env node;"
>>>>>>> origin/chore/fix-lint-and-merge
/**;
 * Dependency Manager - PM2 Automation;
 * Automatically manages and fixes dependency issues;
 */;
#!/usr/bin/env node
/**;
<<<<<<< HEAD
 * Dependency Manager - PM2 Automation;
 * Automatically manages and fixes dependency issues;
 */;
const fs = require("fs);
const path = require(path");
const { execSync, spawn } = require("child_process);

class $1 {}
  constructor() {}
  this.projectRoot = process.cwd();
    this.logFile = path.join(;)
      this.projectRoot,logs,
      "dependency-manager.log";
    );
    this.reportsDir = path.join(this.projectRoot, logs, "dependency-reports");
    this.ensureLogsDirectory()}
  ensureLogsDirectory() {}
  const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {}
  fs.mkdirSync(logsDir, { recursive: true })}
    if (!fs.existsSync(this.reportsDir)) {}
  fs.mkdirSync(this.reportsDir, { "recursive": true })}
  }
  log(message, level = INFO) {}
=======
 */;"
const fs = require("fs");
const path = require("path");
const { execSync, spawn } = require("child_process");"
class $1 {}
  constructor() {}
  this.projectRoot = process.cwd();
    this.logFile = path.join(;)"
      this.projectRoot,logs",
      "dependency-manager.log";"
    );"
    this.reportsDir = path.join(this.projectRoot, "logs", "dependency-reports");"
    this.ensureLogsDirectory()};
;
  ensureLogsDirectory() {}
  const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {}"
  fs.mkdirSync(logsDir, { "recursive": true })};"
    if (!fs.existsSync(this.reportsDir)) {}"
  fs.mkdirSync(this.reportsDir, { "recursive": true })};"
  };
;"
>>>>>>> origin/chore/fix-lint-and-merge
  log(message, level = "INFO") {}
  log(message, level = "INFO") {}"
  const timestamp = new Date().toISOString();
<<<<<<< HEAD
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;`
    fs.appendFileSync(this.logFile, logEntry);console.log(`[${level}] ${message}`)}
  async runDependencyManagement() {}
  this.log(Starting dependency management automation...);
=======

  async runDependencyManagement() {}"
  this.log("Starting dependency management automation...");"
>>>>>>> origin/chore/fix-lint-and-merge
    const actions = [];
    const errors = [];
    try {}
  // 1. Check current dependency status;
      const status = await this.checkDependencyStatus();
      // 2. Fix package.json issues;
      if (status.packageJsonIssues.length > 0) {}
  const packageFixes = await this.fixPackageJsonIssues(;)
          status.packageJsonIssues;
        );
<<<<<<< HEAD
        actions.push(...packageFixes)}
      // 3. Clean corrupted dependencies;
      if (status.corruptedDeps.length > 0) {}
  const cleanupActions = await this.cleanCorruptedDependencies();
        actions.push(...cleanupActions)}
      // 4. Reinstall dependencies if needed;
      if (status.needsReinstall) {}
  const reinstallActions = await this.reinstallDependencies();
        actions.push(...reinstallActions)}
=======
        actions.push(...packageFixes)};
      // 3. Clean corrupted dependencies;
      if (status.corruptedDeps.length > 0) {}
  const cleanupActions = await this.cleanCorruptedDependencies();
        actions.push(...cleanupActions)};
      // 4. Reinstall dependencies if needed;
      if (status.needsReinstall) {}
  const reinstallActions = await this.reinstallDependencies();
        actions.push(...reinstallActions)};
>>>>>>> origin/chore/fix-lint-and-merge
      // 5. Update outdated dependencies;
      const updateActions = await this.updateDependencies();
      actions.push(...updateActions);
      // 6. Generate dependency report;
      const report = await this.generateDependencyReport(;)
        status,
        actions,
        errors;
      // 7. Commit changes if successful;
      if (actions.length > 0 && errors.length === 0) {}
<<<<<<< HEAD
  await this.commitDependencyChanges(actions)}
    } catch (error) {  this.log(`Dependency management "failed": ${error.message  }`, ERROR);
      errors.push({})
  "type": SYSTEM_ERROR,
        "message": error.message,
        timestamp: new Date().toISOString(),

      // 3. Clean corrupted dependencies;
      if (status.corruptedDeps.length > 0) {}
        actions.push(...cleanupActions)}
      // 4. Reinstall dependencies if needed;
      if (status.needsReinstall) {}
        actions.push(...reinstallActions)}
      // 5. Update outdated dependencies;
      actions.push(...updateActions);

      // 6. Generate dependency report;
        status,
        actions,
        errors;
      );

      // 7. Commit changes if successful;
      if (actions.length > 0 && errors.length === 0) {}
  await this.commitDependencyChanges(actions)}
    } catch (error) {this.log(`Dependency management "failed": ${error.message}`, ERROR);
      errors.push({})
  "type": SYSTEM_ERROR,
        "message": error.message,
        timestamp: new Date().toISOString()})}
    return { actions, errors }
  }
=======

      errors.push({})"
  "type": "SYSTEM_ERROR",
        "message": error.message,
        "timestamp": new Date().toISOString(),"
      // 3. Clean corrupted dependencies;
      // 4. Reinstall dependencies if needed;
      // 5. Update outdated dependencies;

      // 6. Generate dependency report;

      // 7. Commit changes if successful;

        "timestamp": new Date().toISOString()})};"
    return { actions, errors };
>>>>>>> origin/chore/fix-lint-and-merge
  async checkDependencyStatus() {}
  const status = {}"
  "packageJsonIssues": [],
      corruptedDeps: [],
      "needsReinstall": false,
<<<<<<< HEAD
      outdatedDeps: []}
    try {}
  // Check package.json;
      const packagePath = path.join(this.projectRoot, "package.json");
      if (fs.existsSync(packagePath)) {}
  try {}
  const packageContent = fs.readFileSync(packagePath, utf8);
          const packageJson = JSON.parse(packageContent);
          // Check for invalid versions;
          if (packageJson.dependencies) {}
  for (const ["dep", version] of Object.entries(;)
              packageJson.dependencies;
            )) {}
  if (typeof version !== "string" || version.trim() === ) {}
  status.packageJsonIssues.push({})
  "type": INVALID_VERSION,
                  "dependency": dep,
                  current: version,

          // Check for invalid versions;
          if (packageJson.dependencies) {}
  for (const ["dep", version] of Object.entries(;)
              packageJson.dependencies;
            )) {}
  if (typeof version !== "string" || version.trim() === ) {}
  status.packageJsonIssues.push({})
  type": "INVALID_VERSION,
                  dependency": dep,
                  "current: version})}
            }
          }
          if (packageJson.devDependencies) {}
  for (const [dep", "version] of Object.entries(;)
=======
      "outdatedDeps": []};"
  // Check package.json;"
      const packagePath = path.join(this.projectRoot, "package.json");"
      if (fs.existsSync(packagePath)) {}
  try {}"
  const packageContent = fs.readFileSync(packagePath, "utf8");"
          const packageJson = JSON.parse(packageContent);
          // Check for invalid versions;
          if (packageJson.dependencies) {}"
  for (const ["dep", "version"] of Object.entries(;)"
              packageJson.dependencies;
            )) {}"
  if (typeof version !== "string" || version.trim() === ) {}"
  status.packageJsonIssues.push({})"
  "type": "INVALID_VERSION",
                  "dependency": dep,
                  "current": version,"
          // Check for invalid versions;
  if (typeof version !== "string" || version.trim() === ") {}"

                  "current": version})};"
          if (packageJson.devDependencies) {}"
>>>>>>> origin/chore/fix-lint-and-merge
              packageJson.devDependencies;
<<<<<<< HEAD
            )) {}
  if (typeof version !== string" || version.trim() === ") {}
  status.packageJsonIssues.push({})
  type": "INVALID_DEV_VERSION,
                  dependency": dep,
                  "current: version})}
            }
          }
        } catch (error) {}
  status.packageJsonIssues.push({})
  type": "PARSE_ERROR,
            error": error.message})}
      }
      // Check node_modules;
      const nodeModulesPath = path.join(this.projectRoot, "node_modules);
      if (fs.existsSync(nodeModulesPath)) {}
<<<<<<< HEAD

=======
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
} catch (error) {}
  status.packageJsonIssues.push({})
  type": "PARSE_ERROR,
            error": error.message})}
      }
      // Check node_modules;
<<<<<<< HEAD
=======
      const nodeModulesPath = path.join(this.projectRoot, "node_modules");
=======

            "error": error.message})};"
      // Check node_modules;"
      const nodeModulesPath = path.join(this.projectRoot, "node_modules");"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> origin/chore/fix-lint-and-merge
      if (fs.existsSync(nodeModulesPath)) {}

      // Check node_modules;"
  const corrupted = await this.findCorruptedPackages(nodeModulesPath);
        status.corruptedDeps = corrupted;

        if (corrupted.length > 0) {}
  status.needsReinstall = true}
      } else {}
<<<<<<< HEAD
  status.needsReinstall = true}
=======
>>>>>>> origin/chore/fix-lint-and-merge
      // Check for outdated dependencies;
  const outdated = await this.checkOutdatedDependencies();
<<<<<<< HEAD
        status.outdatedDeps = outdated} catch (error) {}
  this.log(Failed to check outdated dependencies": ${error.message  }",)
          WARN;
        )}
    } catch (error) {  this.log("Dependency status check "failed: ${error.message  }, "ERROR")}
    return status}
=======
        status.outdatedDeps = outdated} catch (error) {}"
  this.log(Failed to check outdated "dependencies": ${error.message  }")
          "WARN";"
        )};"
    } catch (error) {  this.log("Dependency status check "failed": ${error.message  }", "ERROR")};"
    return status};
>>>>>>> origin/chore/fix-lint-and-merge
  async findCorruptedPackages(nodeModulesPath) {}
  const corrupted = [];

  const packages = fs.readdirSync(nodeModulesPath);
<<<<<<< HEAD
      for (const pkg of packages) {}
  if (pkg.startsWith(.)) continue;

      for (const pkg of packages) {}
  if (pkg.startsWith(".")) continue;

        const pkgPath = path.join(nodeModulesPath, pkg);
        const pkgJsonPath = path.join(pkgPath, "package.json");
=======
      for (const pkg of packages) {}"
  if (pkg.startsWith(".")) continue;"
>>>>>>> origin/chore/fix-lint-and-merge

        const pkgJsonPath = path.join(pkgPath", "package.json");"
        if (fs.existsSync(pkgJsonPath)) {}
<<<<<<< HEAD
  try {}
  const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, utf8));
=======
  const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, "utf8"));"
>>>>>>> origin/chore/fix-lint-and-merge
            if (!pkgJson.name || !pkgJson.version) {}
  corrupted.push({})"
  "name": pkg,
<<<<<<< HEAD
                issue: "Missing name or version",
                path: pkgPath})}
          } catch {}
  corrupted.push({})
  "name": pkg,
              issue: "Invalid package.json",
              path: pkgPath})}
        } else {}
  corrupted.push({})
  "name": pkg,
            issue: "Missing package.json",
            path: pkgPath})}
      }
    } catch (error) {  this.log(`Error scanning "packages": ${error.message  }`, WARN)}
    return corrupted}
  async checkOutdatedDependencies() {}
  try {}
  const result = execSync("npm outdated --json", {})
  cwd: this.projectRoot,
        "stdio": pipe,
        "encoding": utf8,
=======
                "issue": "Missing name or version",
                "path": pkgPath})};"
          } catch {}
>>>>>>> origin/chore/fix-lint-and-merge

    return corrupted};
  async checkOutdatedDependencies() {}
<<<<<<< HEAD
  try {}
  cwd: this.projectRoot,
        "stdio": pipe,
        "encoding": utf8}
});

      const outdated = JSON.parse(result);
      return Object.entries(outdated).map((["name", info]) => ({})
  name,
        "current": info.current,
        wanted: info.wanted,
        "latest": info.latest}))} catch (error) {}
=======

        "encoding": "utf8"}"
});

      const outdated = JSON.parse(result);"
      return Object.entries(outdated).map((["name", "info"]) => ({})"
  name,"
        "current": info.current,
        "wanted": info.wanted,
        "latest": info.latest}))} catch (error) {}"
>>>>>>> origin/chore/fix-lint-and-merge
  // npm outdated returns non-zero exit code when there are outdated deps;
      if (error.stdout) {}
<<<<<<< HEAD
  try {}
  const outdated = JSON.parse(error.stdout);
          return Object.entries(outdated).map(([name, "info"]) => ({})
  name,
            current: info.current,
            "wanted": info.wanted,
<<<<<<< HEAD
            latest: info.latest}))} catch {}
=======
            "latest": info.latest}))} catch {}
<<<<<<< HEAD

=======
>>>>>>> origin/chore/fix-lint-and-merge
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
} catch (error) {}
=======
  const outdated = JSON.parse(error.stdout);"

            "latest": info.latest}))} catch {}"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  // npm outdated returns non-zero exit code when there are outdated deps;
<<<<<<< HEAD
      if (error.stdout) {}
  try {}
          return Object.entries(outdated).map((["name", info]) => ({})
  name,
            "current": info.current,
            wanted: info.wanted,
            "latest": info.latest}))} catch {}
  return []} catch {}
  return []}
      }
      return []}
  }
  async fixPackageJsonIssues(issues) {}
  const fixes = [];

    try {}
  const packagePath = path.join(this.projectRoot, package.json);
      const packageContent = fs.readFileSync(packagePath, "utf8");
      let modified = false;
      for (const issue of issues) {}
  if (;)
          issue.type === INVALID_VERSION ||;
          issue.type === "INVALID_DEV_VERSION";
        ) {}
  const deps =;
            issue.type === INVALID_VERSION;
=======

  return []} catch {}
  return []};
  async fixPackageJsonIssues(issues) {}
  const fixes = [];


      let modified = false;
      for (const issue of issues) {}
  if (;)"
          issue.type === "INVALID_VERSION" ||;
          issue.type === "INVALID_DEV_VERSION";"
        ) {}
  const deps =;"
            issue.type === "INVALID_VERSION";"
>>>>>>> origin/chore/fix-lint-and-merge
              ? packageJson.dependencies;
              : packageJson.devDependencies;
          if (deps && deps[issue.dependency]) {}
  // Set a reasonable default version;"
            deps[issue.dependency] = "^1.0.0";"
            modified = true;
<<<<<<< HEAD
            fixes.push({})
  type: "PACKAGE_JSON_FIX",
              dependency: issue.dependency,"action": `Fixed invalid version for ${issue.dependency}`,`
              timestamp: new Date().toISOString(),

      for (const issue of issues) {}
  if (;)
          issue.type === "INVALID_VERSION" ||;
          issue.type === INVALID_DEV_VERSION;
        ) {}
            issue.type === "INVALID_VERSION";
              ? packageJson.dependencies;
              : packageJson.devDependencies;

          if (deps && deps[issue.dependency]) {}
  // Set a reasonable default version;
            deps[issue.dependency] = ^1.0.0;
            modified = true;

            fixes.push({})
  "type": PACKAGE_JSON_FIX,
              "dependency": issue.dependency,action: `Fixed invalid version for ${issue.dependency}`,`
              "timestamp": new Date().toISOString()})}
        }
      }
      if (modified) {}
  fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
        this.log(Fixed package.json issues)}
    } catch (error) {  this.log(`Failed to fix package."json": ${error.message  }`, ERROR)}
    return fixes}
  async cleanCorruptedDependencies() {}
    try {}
  this.log("Cleaning corrupted dependencies...");
      const nodeModulesPath = path.join(this.projectRoot, node_modules);
      const packageLockPath = path.join(this.projectRoot, "package-lock.json");

      if (fs.existsSync(nodeModulesPath)) {}
  fs.rmSync(nodeModulesPath, { recursive: true, "force": true }
});
        this.log(Removed corrupted node_modules);

        actions.push({})
  "type": CLEANUP,
          "action": Removed corrupted node_modules directory,
          "timestamp": new Date().toISOString()})}
      if (fs.existsSync(packageLockPath)) {}
  fs.unlinkSync(packageLockPath);
        this.log(Removed package-lock.json);
        actions.push({})
  "type": CLEANUP,
          "action": Removed package-lock.json,
          "timestamp": new Date().toISOString(),

        actions.push({})
  type: "CLEANUP",
          action: "Removed package-lock.json",
          timestamp: new Date().toISOString()})}
    } catch (error) {  this.log(`Failed to clean "dependencies": ${error.message  }`, ERROR)}
    return actions}
  async reinstallDependencies() {}
    try {}
  this.log("Reinstalling dependencies...");
      // Run npm install;
      execSync(npm install, {})
  "cwd": this.projectRoot,
        stdio: "pipe"}
});

      this.log(Dependencies reinstalled successfully);
      actions.push({})
  "type": REINSTALL,
        "action": Successfully reinstalled all dependencies,
        "timestamp": new Date().toISOString(),

      actions.push({})
  type: "REINSTALL",
        action: "Successfully reinstalled all dependencies",
        timestamp: new Date().toISOString()})} catch (error) {  this.log(`Failed to reinstall "dependencies": ${error.message  }`, ERROR);
      throw error}
    return actions}
  async updateDependencies() {}
    try {}
  // Check for outdated dependencies;

      if (outdated.length > 0) {this.log(`Found ${outdated.length} outdated dependencies`);
        // Update minor and patch versions only (safe updates);
        for (const dep of outdated) {}
  try {}
  if (this.isSafeUpdate(dep.current, dep.wanted)) {execSync(`npm update ${dep.name}`, {`})
  "cwd": this.projectRoot,
                stdio: "pipe"}
});
              actions.push({})
  type: "UPDATE",
                dependency: dep.name,"action": `Updated ${dep.name} from ${dep.current} to ${dep.wanted}`,`
                timestamp: new Date().toISOString(),

        // Update minor and patch versions only (safe updates);
        for (const dep of outdated) {}
  try {}
  if (this.isSafeUpdate(dep.current, dep.wanted)) {execSync(`npm update ${dep.name}`, {`})
  "cwd": this.projectRoot,
                stdio: "pipe"}
});

              actions.push({})
  type: "UPDATE",
                dependency: dep.name,"action": `Updated ${dep.name} from ${dep.current} to ${dep.wanted}`,`
                timestamp: new Date().toISOString()})}
          } catch (error) {  this.log(`Failed to update ${dep.name  }: ${error.message}`, "WARN")}
        }
      }
    } catch (error) {  this.log(`Failed to update dependencies: ${error.message  }`, "WARN")}
    return actions}
  isSafeUpdate(current, wanted) {}
  // Only allow minor and patch updates (semver);
    const currentParts = current.split(.).map(Number);
    const wantedParts = wanted.split(".").map(Number);
    // Major version should be the same;
    if (currentParts[0] !== wantedParts[0]) {}
  return false}
    return true}
  async generateDependencyReport(status, actions, errors) {}
  const report = {}
  timestamp: new Date().toISOString(),
      "summary": {}
  totalActions: actions.length,
        totalErrors: errors.length,
=======
            fixes.push({})"


  // Set a reasonable default version;"


    return fixes};
  async cleanCorruptedDependencies() {}

      const packageLockPath = path.join(this.projectRoot, "package-lock.json");"
      if (fs.existsSync(nodeModulesPath)) {}"
  fs.rmSync(nodeModulesPath, { "recursive": true, "force": true }")
});"
        this.log("Removed corrupted node_modules");"
        actions.push({})"

    return actions};
  async reinstallDependencies() {}
  this.log("Reinstalling dependencies...");"
      // Run npm install;"

        "stdio": "pipe"}"
"
      this.log("Dependencies reinstalled successfully");"

      throw error};
  async updateDependencies() {}
  // Check for outdated dependencies;
`;
      if (outdated.length > 0) {this.log(`Found ${outdated.length} outdated dependencies`);
        // Update minor and patch versions only (safe updates);
        for (const dep of outdated) {}

  isSafeUpdate(current, wanted) {}
  // Only allow minor and patch updates (semver);"
    const currentParts = current.split(".").map(Number);
    const wantedParts = wanted.split(".").map(Number);"
    // Major version should be the same;
    if (currentParts[0] !== wantedParts[0]) {}
  return false};
    return true};
  async generateDependencyReport(status, actions, errors) {}
  const report = {}"
  "timestamp": new Date().toISOString(),
      "summary": {}"
  totalActions: actions.length,"
        "totalErrors": errors.length,
>>>>>>> origin/chore/fix-lint-and-merge
        "packageJsonIssues": status.packageJsonIssues.length,
        corruptedDeps: status.corruptedDeps.length,
        "outdatedDeps": status.outdatedDeps.length},
      status: status,
      "actions": actions,
<<<<<<< HEAD
      errors: errors}
    const reportFile = path.join(;)
      this.reportsDir,dependency-report-${Date.now()}.json`;`

      this.reportsDir,dependency-report-${Date.now()}.json";
    );
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
this.log(`Dependency report "generated: ${reportFile});

    return report}
  async commitDependencyChanges(actions) {}
  try {}
  this.log("Committing dependency changes...");
      // Add package.json and package-lock.json;
      execSync(git add package.json package-lock.json', {})
  cwd": this.projectRoot,
        "stdio: pipe"}
});
      // Commitconst commitMessage = `"chore: Auto-manage dependencies (${actions.length} actions)`;execSync(`git commit -m ${commitMessage}"`, {`})
  "cwd: this.projectRoot,
        stdio": "pipe}
});
      this.log(Dependency changes committed successfully")} catch (error) {  this.log(`Failed to commit dependency "changes: ${error.message  }`, WARN")}
  }
}
=======
      "errors": errors};"
    const reportFile = path.join(;)`;
      this.reportsDir,dependency-report-${Date.now()}.json`;`

    const reportFile = path.join(;)"
      this.reportsDir,dependency-report-${Date.now()}.json";"
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));"`;
this.log(`Dependency report "generated": ${reportFile}");"
    return report};
  async commitDependencyChanges(actions) {}
  this.log("Committing dependency changes...");"
      // Add package.json and package-lock.json;"

>>>>>>> origin/chore/fix-lint-and-merge
// Main execution;
async function $1() {}
  const manager = new DependencyManager();

  const result = await manager.runDependencyManagement();
    if (result.errors.length === 0 && result.actions.length > 0) {}
  process.exit(0); // Success} else if (result.errors.length > 0) {}
  process.exit(1); // Errors occurred} else {}
<<<<<<< HEAD
  if (result.errors.length === 0 && result.actions.length > 0) {}
  process.exit(0); // Success} else if (result.errors.length > 0) {}
  process.exit(1); // Errors occurred} else {}
  process.exit(2); // No actions needed}
  } catch (error) {  manager.log(`Fatal "error: ${error.message  }`, ERROR");
    process.exit(1)}
}
if (require.main === module) {}
  main()}

=======

    process.exit(1)};
if (require.main === module) {}
  main()};
<<<<<<< HEAD
;
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
module.exports = DependencyManager;
module.exports = DependencyManager;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
module.exports = DependencyManager;
"`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> origin/chore/fix-lint-and-merge
