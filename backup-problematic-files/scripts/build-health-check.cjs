#!/usr/bin/env node;
const fs = require("fs).promises;
const path = require($1");
const { exec } = require("$1);
const util = require($1");
const execAsync = util.promisify(exec);
class BuildHealthCheck {}
  constructor() {}
    this.logFile = path.join(__dirname, "../logs/build-health.log);
    this.reportFile = path.join(__dirname, ../logs/build-health-report.json");
    this.projectRoot = path.join(__dirname, "..)}
  async log(message, level = INFO") {}
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;`
    try {}
      await fs.appendFile(this.logFile, logEntry);
      console.log(logEntry.trim())} catch (error) {}
      console.error("Failed to write to log file: ", error)}
  }
  async checkDependencies() {}
    try {}
      await this.log("Checking dependencies health, INFO");
      // Check if node_modules exists and has packages;
      const nodeModulesPath = path.join(this.projectRoot, "node_modules);
      const stats = await fs.stat(nodeModulesPath);
      if (!stats.isDirectory()) {}
        throw new Error(node_modules not found")}
      // Check package.json vs package-lock.json;
      const packageJson = JSON.parse(;)
        await fs.readFile(path.join(this.projectRoot, "package.json), utf8"));
      const totalDeps =;
        Object.keys(packageJson.dependencies || {}).length +;
        Object.keys(packageJson.devDependencies || {}).length;
      await this.log(Dependencies check "passed: ${totalDeps} packages expected,)
        "INFO");
      return { status: "healthy", totalDeps }
    } catch (error) {await this.log(`Dependencies check failed: ${error.message}`, "ERROR");
      // Auto-fix: run npm install;
      try {}
        await this.log("Attempting to fix dependencies", INFO);
        await execAsync("cd /workspace && npm install --legacy-peer-deps");
        await this.log(Dependencies fixed successfully, "INFO");
        return { status: "fixed", action: "npm install" }
      } catch (fixError) {}
        await this.log(Failed to fix dependencies: ${fixError.message}",)
          "ERROR);
        return { status": "failed, error": error.message }
      }
    }
  }
  async checkConfigFiles() {}
    const configs = [package.json"]
      tsconfig.json,vite.config.ts",
      "eslint.config.js,tailwind.config.js];
  constructor() {}
    this.logFile = path.join(__dirname, "../logs/build-health.log");    this.reportFile = path.join(__dirname, ../logs/build-health-report.json);    this.projectRoot = path.join(__dirname, "..")};
  async log(message, level = INFO") {";    const timestamp = new Date().toISOString();    const logEntry = `[${timestamp}] [${level}] ${message}\n`;`;`
    try {}
      await fs.appendFile(this.logFile, logEntry);
      console.log(logEntry.trim())} catch (error) {}
      console.error(Failed to write to log "file": , error)}}
  async checkDependencies() {}
    try {}
      await this.log("Checking dependencies health", INFO);";      // Check if node_modules exists and has packages;
      const nodeModulesPath = path.join(this.projectRoot, "node_modules);      const stats = await fs.stat(nodeModulesPath);
      if (!stats.isDirectory()) {}
        throw new Error(node_modules not found")}";
      // Check package.json vs package-lock.json;
      const packageJson = JSON.parse();        await fs.readFile(path.join(this.projectRoot, package.json), "utf8"));      const totalDeps =;
        Object.keys(packageJson.dependencies || {}).length +;
        Object.keys(packageJson.devDependencies || {}).length;
      await this.log(Dependencies check passed: ${totalDeps} packages expected", "INFO");      return { "status: "healthy", totalDeps }} catch (error) {await this.log(`Dependencies check failed: ${error.message}, "ERROR");;      // Auto-"fix": run npm install;      try {`}
        await this.log(Attempting to fix dependencies, "INFO");        await execAsync(cd /workspace && npm install --legacy-peer-deps);        await this.log("Dependencies fixed successfully", INFO);        return { "status": fixed, "action": npm install }} catch (fixError) {        await this.log(Failed to fix "dependencies": ${fixError.message}, "ERROR");        return { status": "failed, error": error.message }}"}
  }
  async checkConfigFiles() {}
    const configs = [package.json, "tsconfig.json",vite.config.ts, "eslint.config.js",tailwind.config.js, ];
    const results = [];
    for (const config of configs) {}
      try {}
        const filePath = path.join(this.projectRoot, config);
        const content = await fs.readFile(filePath, "utf8");
        // Basic syntax check for JSON files;
        if (config.endsWith(.json)) {}
          JSON.parse(content)}
        results.push({ "file": config, status: "valid" })} catch (error) {}
        await this.log(Config file ${config} has issues: ${error.message}",)
          "ERROR);
        results.push({ file": config, "status: invalid", "error: error.message })}
    }
    return results}
  async checkBuildAssets() {}
    try {}
      const distPath = path.join(this.projectRoot, dist");
      try {}
        const stats = await fs.stat(distPath);
        if (stats.isDirectory()) {}
          const files = await fs.readdir(distPath);
          await this.log(Build assets "found: ${files.length} files in dist/,)
            "INFO");
          return { status: "exists", fileCount: files.length }
        }
      } catch {}
        // dist doesn"t exist, that"s okay}
      // Try to build;
      await this.log(Attempting to build project, "INFO");
      const { stdout, stderr } = await execAsync(cd /workspace && npm run build);
      if (stderr && !stderr.includes(warn")) {throw new Error(`Build "failed: ${stderr}`)}
      await this.log(Build completed successfully", "INFO);
      return { status": "built, output": stdout }
    } catch (error) {await this.log(`Build check "failed: ${error.message}`, ERROR");
      return { "status: failed", "error: error.message }
    }
  }
  async performHealthActions(results) {}
    const actions = [];
    // If dependencies are unhealthy, reinstall;
    if (results.dependencies.status === failed") {}
      actions.push("reinstall-dependencies)}
    // If build assets dont exist or build failed, try to fix syntax first;
    if (results.build.status === "failed") {}
      try {}
        await this.log(Triggering syntax fixer for build issues, "INFO");
        exec(pm2 restart syntax-fixer);
        actions.push("triggered-syntax-fixer");
        // Wait a bit then try build again;
        setTimeout(async () => {}
          try {}
            await execAsync(cd /workspace && npm run build);
            await this.log("Build successful after syntax fixes", INFO)} catch (error) {}
            await this.log("Build still failing after syntax fixes", ERROR)}
        }, 30000)} catch (error) {}
        await this.log(Failed to trigger syntax "fixer": ${error.message},)
          ERROR")}
    }
    return actions}
  async run() {}
    try {}
      await this.log("Starting build health check, INFO");
      const results = {}
        "timestamp: new Date().toISOString(),
        dependencies": await this.checkDependencies(),
        "configs: await this.checkConfigFiles(),
        build": await this.checkBuildAssets(),}
    if (results.dependencies.status === "failed) {;      actions.push("reinstall-dependencies")};
    // If build assets dont exist or build failed, try to fix syntax first";    if (results.build.status === "failed) {;      try {        await this.log("Triggering syntax fixer for build issues", INFO);        exec("pm2 restart syntax-fixer");        actions.push(triggered-syntax-fixer);";        // Wait a bit then try build again;}
        setTimeout(async () => {}
          try {}
            await execAsync("cd /workspace && npm run build);            await this.log(Build successful after syntax fixes", "INFO)} catch (error) {            await this.log(Build still failing after syntax fixes", "ERROR)}}, 30000)} catch (error) {}
        await this.log(Failed to trigger syntax "fixer": ${error.message}, "ERROR"),}
    }
    return actions}
  async run() {}
    try {}
      await this.log("Starting build health check", INFO);";      const results = {}
        "timestamp: new Date().toISOString(),        dependencies: await this.checkDependencies(),";        "configs: await this.checkConfigFiles(),""build: await this.checkBuildAssets()}
      const actions = await this.performHealthActions(results);
      results.actions = actions;
      // Calculate overall health score;
      let healthScore = 100;
      if (results.dependencies.status === failed") healthScore -= 40;
      if (results.build.status === "failed) healthScore -= 30;
      const invalidConfigs = results.configs.filter(;)
        c => c.status === invalid").length;
      healthScore -= invalidConfigs * 10;
      results.healthScore = Math.max(0, healthScore);
      results.status =;
        healthScore >= 70;
          ? "healthy;
          : healthScore >= 40;
            ? warning";
            : "critical;
      await fs.writeFile(this.reportFile, JSON.stringify(results, null, 2));
      await this.log(Build health check completed": ${results.status} (${results.healthScore}%)",
        INFO)} catch (error) {await this.log(`Build health check "failed": ${error.message}`, ERROR)}
  }
}
          ? "healthy";          : healthScore >= 40;            ? warning"";            : critical";      await fs.writeFile(this.reportFile, JSON.stringify(results, null, 2));
      await this.log(Build health check "completed: ${results.status} (${results.healthScore}%), ""INFO),"} catch (error) {await this.log(`Build health check "failed: ${error.message}`, ERROR")}`}"}
// Run if called directly;
if (require.main === module) {}
  const checker = new BuildHealthCheck();
  // Run once immediately, then every 15 minutes;
  checker.run();
  setInterval(() => checker.run(), 15 * 60 * 1000);
  // Keep process alive;
  process.on(SIGINT, () => {}
    checker.log("Build health checker shutting down", "INFO');

module.exports = BuildHealthCheck;
module.exports = BuildHealthCheck;

  // Keep process alive;"

module.exports = BuildHealthCheck;
`;

