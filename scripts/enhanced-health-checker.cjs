<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
#!/usr/bin/env node;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
#!/usr/bin/env node;
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
#!/usr/bin/env node;
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
const fs = require("fs")";const path = require("path")";const { execSync } = require("child_process")""
    this.reportFile = path.join(this.projectRoot, "health-check-report.json");"}"
    console.log(`[${new Date().toISOString()}] ${message}`);
<<<<<<< HEAD
    this.log("� Checking file structure");"";    const requiredDirs = ["src", "public", "pages"];";    const requiredFiles = ["package.json", "next.config.js", "tsconfig.json"];""
      "directories": {},""files": {},""issues": [],,"
        results.issues.push("Missing "directory": ${dir}");"
        results.issues.push(`Missing "file": ${file}`);
    this.log("⚙ Checking configuration files");""
      "packageJson": { "valid": false, "issues": [] },""nextConfig": { "valid": false, "issues": [] },""tsConfig": { "valid": false, "issues": [] },,"
      const packageJson = JSON.parse();        fs.readFileSync(path.join(this.projectRoot, "package.json"), "utf8")");"
        results.packageJson.issues.push("Missing build script");"}"
        results.packageJson.issues.push("Missing dev script");"}"
      results.packageJson.issues.push("Invalid "JSON": ${error.message}");"
      const nextConfigPath = path.join(this.projectRoot, "next.config.js");";      if (fs.existsSync(nextConfigPath)) {";        const content = fs.readFileSync(nextConfigPath, "utf8");";        if (content.includes("export default")) {";          results.nextConfig.valid = true,"}
          results.nextConfig.issues.push("Invalid export format");"}"
        results.nextConfig.issues.push("File not found");"}"
      results.nextConfig.issues.push(`Error reading "file": ${error.message}`);
      const tsConfigPath = path.join(this.projectRoot, "tsconfig.json");";      if (fs.existsSync(tsConfigPath)) {";        const tsConfig = JSON.parse(fs.readFileSync(tsConfigPath, "utf8"));";        results.tsConfig.valid = true;"}
          results.tsConfig.issues.push("Missing compilerOptions");"}"
        results.tsConfig.issues.push("File not found");"}"
      results.tsConfig.issues.push("Invalid "JSON": ${error.message}");"
    this.log("� Checking dependencies");""
      const packageJson = JSON.parse();        fs.readFileSync(path.join(this.projectRoot, "package.json"), "utf8")");"
        "total": Object.keys(dependencies).length,""missing": [],""outdated": [],,"
      const criticalDeps = ["react", "next", "typescript"];";      for (const dep of criticalDeps) {"}
      return { "error": error.message },"
      "timestamp": new Date().toISOString(),""fileStructure": results.fileStructure,""configuration": results.configuration,""dependencies": results.dependencies,""summary": {""overall": "healthy", ""issues": ["}]
      report.summary.overall = "needs_attention""}"
    this.log(` Health check report "generated": ${this.reportFile}`);
    this.log("� Starting Health Check");""
      this.log(" Health check completed");";      return report,"
      this.log(" Health check "failed": ${error.message}");"
  .then(report => {);    console.log(" Health check completed successfully");";    process.exit(0),"}
<<<<<<< HEAD
<<<<<<< HEAD

=======
  .catch(error => {);    console.error(" Health check "failed":", error.message);"}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
  .catch(error => {);    console.error(" Health check "failed":", error.message);"}
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
  .catch(error => {);    console.error(" Health check "failed":", error.message);"}
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
=======

<<<<<<< HEAD
#!/usr/bin/env node;
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

const fs = require("fs")";const path = require("path")";const { execSync } = require("child_process")""
    this.reportFile = path.join(this.projectRoot, "health-check-report.json");"}"
    console.log(`[${new Date().toISOString()}] ${message}`);
<<<<<<< HEAD
<<<<<<< HEAD

  .catch(error => {);    console.error(" Health check "failed":", error.message);"}

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  }

  async checkFileStructure() {
    this.log('📁 Checking file structure');

    const requiredDirs = ['src', 'public', 'pages'];
    const requiredFiles = ['package.json', 'next.config.js', 'tsconfig.json'];

    const results = {
      directories: {},
      files: {},
      issues: [],
    };

    for (const dir of requiredDirs) {
      const dirPath = path.join(this.projectRoot, dir);
      results.directories[dir] = fs.existsSync(dirPath);
      if (!results.directories[dir]) {
        results.issues.push(`Missing directory: ${dir}`);
      }
    }

    for (const file of requiredFiles) {
      const filePath = path.join(this.projectRoot, file);
      results.files[file] = fs.existsSync(filePath);
      if (!results.files[file]) {
        results.issues.push(`Missing file: ${file}`);
      }
    }

    return results;
  }

  async checkConfiguration() {
    this.log('⚙️ Checking configuration files');

    const results = {
      packageJson: { valid: false, issues: [] },
      nextConfig: { valid: false, issues: [] },
      tsConfig: { valid: false, issues: [] },
    };

    // Check package.json
    try {
      const packageJson = JSON.parse(
        fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8')
      );
      results.packageJson.valid = true;

      if (!packageJson.scripts?.build) {
        results.packageJson.issues.push('Missing build script');
      }
      if (!packageJson.scripts?.dev) {
        results.packageJson.issues.push('Missing dev script');
      }
    } catch (error) {
      results.packageJson.issues.push(`Invalid JSON: ${error.message}`);
    }

    // Check next.config.js
    try {
      const nextConfigPath = path.join(this.projectRoot, 'next.config.js');
      if (fs.existsSync(nextConfigPath)) {
        const content = fs.readFileSync(nextConfigPath, 'utf8');
        if (content.includes('export default')) {
          results.nextConfig.valid = true;
        } else {
          results.nextConfig.issues.push('Invalid export format');
        }
      } else {
        results.nextConfig.issues.push('File not found');
      }
    } catch (error) {
      results.nextConfig.issues.push(`Error reading file: ${error.message}`);
    }

    // Check tsconfig.json
    try {
      const tsConfigPath = path.join(this.projectRoot, 'tsconfig.json');
      if (fs.existsSync(tsConfigPath)) {
        const tsConfig = JSON.parse(fs.readFileSync(tsConfigPath, 'utf8'));
        results.tsConfig.valid = true;

        if (!tsConfig.compilerOptions) {
          results.tsConfig.issues.push('Missing compilerOptions');
        }
      } else {
        results.tsConfig.issues.push('File not found');
      }
    } catch (error) {
      results.tsConfig.issues.push(`Invalid JSON: ${error.message}`);
    }

    return results;
  }

  async checkDependencies() {
    this.log('📦 Checking dependencies');

    try {
      const packageJson = JSON.parse(
        fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8')
      );
      const dependencies = {
        ...packageJson.dependencies,
        ...packageJson.devDependencies,
      };

      const results = {
        total: Object.keys(dependencies).length,
        missing: [],
        outdated: [],
      };

      // Check for critical dependencies
      const criticalDeps = ['react', 'next', 'typescript'];
      for (const dep of criticalDeps) {
        if (!dependencies[dep]) {
          results.missing.push(dep);
        }
      }

      return results;
    } catch (error) {
      return { error: error.message };
    }
  }

  generateReport(results) {
    const report = {
      timestamp: new Date().toISOString(),
      fileStructure: results.fileStructure,
      configuration: results.configuration,
      dependencies: results.dependencies,
      summary: {
        overall: 'healthy',
        issues: [
          ...results.fileStructure.issues,
          ...results.configuration.packageJson.issues,
          ...results.configuration.nextConfig.issues,
          ...results.configuration.tsConfig.issues,
        ],
      },
    };

    if (report.summary.issues.length > 0) {
      report.summary.overall = 'needs_attention';
    }

    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    this.log(`📊 Health check report generated: ${this.reportFile}`);

    return report;
  }

  async run() {
    this.log('🏥 Starting Health Check');

    try {
      const fileStructure = await this.checkFileStructure();
      const configuration = await this.checkConfiguration();
      const dependencies = await this.checkDependencies();

      const report = this.generateReport({
        fileStructure,
        configuration,
        dependencies,
      });

      this.log('✅ Health check completed');
      return report;
    } catch (error) {
      this.log(`❌ Health check failed: ${error.message}`);
      throw error;
    }
  }
}

// Run the health checker
const checker = new HealthChecker();
checker
  .run()
  .then(report => {
    console.log('✅ Health check completed successfully');
    process.exit(0);
  })
  .catch(error => {
    console.error('❌ Health check failed:', error.message);
    process.exit(1);
  });
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======
    this.log("� Checking file structure");"";    const requiredDirs = ["src", "public", "pages"];";    const requiredFiles = ["package.json", "next.config.js", "tsconfig.json"];""
      "directories": {},""files": {},""issues": [],,"
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        results.issues.push("Missing "directory": ${dir}");"
        results.issues.push(`Missing "file": ${file});
    this.log("⚙ Checking configuration files");
      "packageJson": { "valid": false, "issues": [] },nextConfig": { "valid": false, "issues": [] },tsConfig": { "valid": false, "issues": [] },,"
      const packageJson = JSON.parse();        fs.readFileSync(path.join(this.projectRoot, "package.json"), "utf8")");"
        results.packageJson.issues.push("Missing build script");"}"
        results.packageJson.issues.push("Missing dev script");"}"
      results.packageJson.issues.push("Invalid "JSON": ${error.message}");"
      const nextConfigPath = path.join(this.projectRoot, "next.config.js");";      if (fs.existsSync(nextConfigPath)) {";        const content = fs.readFileSync(nextConfigPath, "utf8");";        if (content.includes("export default")) {";          results.nextConfig.valid = true,"}
          results.nextConfig.issues.push("Invalid export format");"}"
        results.nextConfig.issues.push("File not found");"}"
      results.nextConfig.issues.push(`Error reading "file": ${error.message});
      const tsConfigPath = path.join(this.projectRoot, "tsconfig.json");";      if (fs.existsSync(tsConfigPath)) {";        const tsConfig = JSON.parse(fs.readFileSync(tsConfigPath, "utf8"));";        results.tsConfig.valid = true;"}
          results.tsConfig.issues.push("Missing compilerOptions");"}"
        results.tsConfig.issues.push("File not found");"}"
      results.tsConfig.issues.push("Invalid "JSON": ${error.message}");"
    this.log("� Checking dependencies");
      const packageJson = JSON.parse();        fs.readFileSync(path.join(this.projectRoot, "package.json"), "utf8")");"
        "total": Object.keys(dependencies).length,missing": [],outdated": [],,"
      const criticalDeps = ["react", "next", "typescript"];";      for (const dep of criticalDeps) {"}
      return { "error": error.message },"
      "timestamp": new Date().toISOString(),fileStructure": results.fileStructure,configuration": results.configuration,dependencies": results.dependencies,summary": {overall": "healthy", issues": ["}]
      report.summary.overall = "needs_attention}"
    this.log(` Health check report "generated": ${this.reportFile});
    this.log("� Starting Health Check");
      this.log(" Health check completed");";      return report,"
      this.log(" Health check "failed": ${error.message}");"

<<<<<<< HEAD
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======





>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
