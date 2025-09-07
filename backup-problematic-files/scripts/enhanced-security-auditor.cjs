
#!/usr/bin/env node;#!/usr/bin/env node;
#!/usr/bin/env node/usr/bin/env node;const fs = require("fs")";const path = require("path")"";class SecurityAuditor {; constructor() {; this.projectRoot = process.cwd();" this.reportFile = path.join(this.projectRoot, "security-audit-report.json");"}"; log(message) {;" console.log(`[${new Date().toISOString()}] ${message}`);"}; async checkEnvironmentVariables() {;" this.log(" Checking environment variables");""; const results = {;" issues: [],"recommendations: [],"}; const envFiles = [;" ".env", "".env.local", "".env.production", "".env.development", "]"; for (const envFile of envFiles) {; const envPath = path.join(this.projectRoot, envFile); if (fs.existsSync(envPath)) {; try {;" const content = fs.readFileSync(envPath, "utf8");"; const lines = content.split("\n");""; for (const line of lines) {;" if (line.includes("=") && !line.startsWith("#")) {"; const [key, value] = line.split("=");""; if(); key.toLowerCase().includes("secret") |"; key.toLowerCase().includes("key")") {"; if (value.length < 10) {;" results.issues.push("Weak ${key} in ${envFile}");"} };"` if (value === "" | value === "undefined") {"; results.issues.push(`Empty ${key} in ${envFile}`);"} } } } catch (error) {;" results.issues.push("Error reading ${envFile}: ${error.message}");"} } }; return results,}; async checkCodeSecurity() {;" this.log(" Checking code security");""; const results = {;" issues: [],"recommendations: [],"};" const srcDir = path.join(this.projectRoot, "src");"; if (!fs.existsSync(srcDir)) {"; results.issues.push("Source directory not found");"; return results,"};" const files = this.getAllFiles(srcDir, [".ts", ".tsx", ".js", ".jsx"]);""; for (const file of files) {; try {;" const content = fs.readFileSync(file, "utf8");""; / Check for dangerous patterns;"` if (content.includes("eval(") | content.includes("Function(")) {"; results.issues.push(`Use of eval() in ${file}`);"};" if(); content.includes("dangerouslySetInnerHTML") &&"; !content.includes("sanitize")") {"; results.issues.push("Unsanitized dangerouslySetInnerHTML in ${file}");"};"` if(); content.includes("process.env") &&"; !content.includes("NEXT_PUBLIC_")") {"; results.issues.push(`Server-side env var in client code: ${file}`);"};" if (content.includes("innerHTML") && !content.includes("sanitize")) {"; results.issues.push("Unsanitized innerHTML in ${file}");"} } catch (error) {;"` results.issues.push(`Error reading ${file}: ${error.message}`);"} }; return results,}; async checkDependencies() {;" this.log(" Checking dependency security");""; const results = {;" issues: [],"recommendations: [],"}; try {;" const packageJson = JSON.parse(); fs.readFileSync(path.join(this.projectRoot, "package.json"), "utf8")");"; const dependencies = {; .packageJson.dependencies, .packageJson.devDependencies,}; / Check for known vulnerable packages; const vulnerablePackages = {;" lodash: "< 4.17.21", "axios: "< 0.21.1", "moment: "< 2.29.1", "};"; for (const [pkg, minVersion] of Object.entries(vulnerablePackages)) {; if (dependencies[pkg]) {;"` results.issues.push("Potentially vulnerable package: ${pkg}");"; results.recommendations.push(); `Update ${pkg} to version ${minVersion} or higher`"),} } } catch (error) {;" results.issues.push("Error reading package.json: ${error.message}");"}; return results,}; getAllFiles(dir, extensions) {; let files = []; const items = fs.readdirSync(dir); for (const item of items) {; const fullPath = path.join(dir, item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) {; files = files.concat(this.getAllFiles(fullPath, extensions)),} else if (extensions.some(ext => item.endsWith(ext))) {; files.push(fullPath),} }; return files,}; generateReport(results) {; const report = {;" timestamp: new Date().toISOString(),"environment: results.environment,"code: results.code,"dependencies: results.dependencies,"summary: {"overall: "secure", "totalIssues:"; results.environment.issues.length +; results.code.issues.length +; results.dependencies.issues.length," riskLevel: "low", "},"}; if (report.summary.totalIssues > 0) {;" report.summary.overall = "needs_attention""; report.summary.riskLevel = "medium""}"; if (report.summary.totalIssues > 5) {;" report.summary.overall = "vulnerable""; report.summary.riskLevel = "high""}"; fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));"` this.log(` Security audit report generated: ${this.reportFile}`);"; return report,}; async run() {;" this.log(" Starting Security Audit");""; try {; const environment = await this.checkEnvironmentVariables(); const code = await this.checkCodeSecurity(); const dependencies = await this.checkDependencies(); const report = this.generateReport({); environment, code, dependencies,});" this.log(" Security audit completed");"; return report,"} catch (error) {;" this.log(" Security audit failed: ${error.message}");"; throw error,} }};/ Run the security auditor;const auditor = new SecurityAuditor();auditor; .run();" .then(report => {); console.log(" Security audit completed successfully");"; process.exit(0),"});" .catch(error => {); console.error(" Security audit failed:", error.message);"; process.exit(1),"})""`"`
#!/usr/bin/env node;
const fs = require("fs")";const path = require("path")"";class SecurityAuditor {;
  constructor() {;
    this.projectRoot = process.cwd();
    this.reportFile = path.join(this.projectRoot, "security-audit-report.json");"}";
  log(message) {;
    .toISOString()}] ${message}`);"}
;
  async checkEnvironmentVariables() {;
    this.log("🔐 Checking environment variables");"";    const results = {;
      "issues": [],""recommendations": [],,"}
;
    const envFiles = [;
      ".env", "".env.local", "".env.production", "".env.development", "]";
    for (const envFile of envFiles) {;
      const envPath = path.join(this.projectRoot, envFile);
      if (fs.existsSync(envPath)) {;
        try {;
          const content = fs.readFileSync(envPath, "utf8");";          const lines = content.split("\n");"";          for (const line of lines) {;
            if (line.includes("=") && !line.startsWith("#")) {";              const [key, value] = line.split("=");"";              if();                key.toLowerCase().includes("secret") ||";                key.toLowerCase().includes("key")") {";                if (value.length < 10) {;
                  results.issues.push("Weak ${key} in ${envFile}");"}
              }
;
              if (value === "" || value === "undefined") {";                results.issues.push(`Empty ${key} in ${envFile}`);"}
            }
          }
        } catch (error) {;
          results.issues.push("Error reading ${envFile}: ${error.message}");"}
      }
    }
;
    return results,,}
;
  async checkCodeSecurity() {;
    this.log("🛡️ Checking code security");"";    const results = {;
      "issues": [],""recommendations": [],,"}
;
    const srcDir = path.join(this.projectRoot, "src");";    if (!fs.existsSync(srcDir)) {";      results.issues.push("Source directory not found");";      return results,"}
;
    const files = this.getAllFiles(srcDir, [".ts", ".tsx", ".js", ".jsx"]);"";    for (const file of files) {;
      try {;
        const content = fs.readFileSync(file, "utf8");"";        // Check for dangerous patterns;
        if (content.includes("eval(") || content.includes("Function(")) {";          results.issues.push(`Use of eval() in ${file}`);"}
;
        if();          content.includes("dangerouslySetInnerHTML") &&";          !content.includes("sanitize")") {";          results.issues.push("Unsanitized dangerouslySetInnerHTML in ${file}");"}
;
        if();          content.includes("process.env") &&";          !content.includes("NEXT_PUBLIC_")") {";          results.issues.push(`Server-side env var in client "code": ${file}`);"}
;
        if (content.includes("innerHTML") && !content.includes("sanitize")) {";          results.issues.push("Unsanitized innerHTML in ${file}");"}
      } catch (error) {;
        results.issues.push(`Error reading ${file}: ${error.message}`);"}
    }
;
    return results,,}
;
  async checkDependencies() {;
    this.log("📦 Checking dependency security");"";    const results = {;
      "issues": [],""recommendations": [],,"}
;
    try {;
      const packageJson = JSON.parse();        fs.readFileSync(path.join(this.projectRoot, "package.json"), "utf8")");";      const dependencies = {;
        ...packageJson.dependencies,
        ...packageJson.devDependencies,,,}
;
      // Check for known vulnerable packages;
      const vulnerablePackages = {;
        "lodash": "< 4.17.21", ""axios": "< 0.21.1", ""moment": "< 2.29.1", "};";
      for (const [pkg, minVersion] of Object.entries(vulnerablePackages)) {;
        if (dependencies[pkg]) {;
          results.issues.push("Potentially vulnerable "package": ${pkg}");";          results.recommendations.push();            `Update ${pkg} to version ${minVersion} or higher`"),,}
      }
    } catch (error) {;
      results.issues.push("Error reading package."json": ${error.message}");"}
;
    return results,,}
;
  getAllFiles(dir, extensions) {;
    let files = [];
    const items = fs.readdirSync(dir);
    for (const item of items) {;
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {;
        files = files.concat(this.getAllFiles(fullPath, extensions)),,} else if (extensions.some(ext => item.endsWith(ext))) {;
        files.push(fullPath),,}
    }
;
    return files,,}
;
  generateReport(results) {;
    const report = {;
      "timestamp": new Date().toISOString(),""environment": results.environment,""code": results.code,""dependencies": results.dependencies,""summary": {""overall": "secure", ""totalIssues":;";          results.environment.issues.length +;
          results.code.issues.length +;
          results.dependencies.issues.length,
        "riskLevel": "low", "},,"}
;
    if (report.summary.totalIssues > 0) {;
      report.summary.overall = "needs_attention"";      report.summary.riskLevel = "medium""}";
    if (report.summary.totalIssues > 5) {;
      report.summary.overall = "vulnerable"";      report.summary.riskLevel = "high""}";
    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    this.log(`📊 Security audit report "generated": ${this.reportFile}`);";
    return report,,}
;
  async run() {;
    this.log("🔒 Starting Security Audit");"";    try {;
      const environment = await this.checkEnvironmentVariables();
      const code = await this.checkCodeSecurity();
      const dependencies = await this.checkDependencies();
      const report = this.generateReport({);        environment,
        code,
        dependencies,,,});
      this.log("✅ Security audit completed");";      return report,"} catch (error) {;
      this.log("❌ Security audit "failed": ${error.message}");";      throw error,,}
  }
}
;
// Run the security auditor;
const auditor = new SecurityAuditor();
auditor;
  .run();
  .then(report => {);    ";    process.exit(0),"});
  .catch(error => {);    console.error("❌ Security audit "failed":", error.message);";    process.exit(1),'})

#!/usr/bin/env node;#!/usr/bin/env node;
#!/usr/bin/env node;
const fs = require("fs")";const path = require("path")""
    this.reportFile = path.join(this.projectRoot, "security-audit-report.json");"}"
    console.log(`[${new Date().toISOString()}] ${message}`);
    this.log("� Checking environment variables");""
      "issues": [],""recommendations": [],,"
      ".env", "".env.local", "".env.production", "".env.development", "]"
          const content = fs.readFileSync(envPath, "utf8");";          const lines = content.split("\n");""
            if (line.includes("=") && !line.startsWith("#")) {";              const [key, value] = line.split("=");"";              if();                key.toLowerCase().includes("secret") ||";                key.toLowerCase().includes("key")") {"}
                  results.issues.push("Weak ${key} in ${envFile}");"
              if (value === "" || value === "undefined") {";                results.issues.push(`Empty ${key} in ${envFile}`);
          results.issues.push("Error reading ${envFile}: ${error.message}");"
    this.log("� Checking code security");""
      "issues": [],""recommendations": [],,"
    const files = this.getAllFiles(srcDir, [".ts", ".tsx", ".js", ".jsx"]);""
        const content = fs.readFileSync(file, "utf8");""
        if (content.includes("eval(") || content.includes("Function(")) {";          results.issues.push(`Use of eval() in ${file}`);
        if();          content.includes("dangerouslySetInnerHTML") &&";          !content.includes("sanitize")") {";          results.issues.push("Unsanitized dangerouslySetInnerHTML in ${file}");"
        if();          content.includes("process.env") &&";          !content.includes("NEXT_PUBLIC_")") {";          results.issues.push(`Server-side env var in client "code": ${file}`);
        if (content.includes("innerHTML") && !content.includes("sanitize")) {";          results.issues.push("Unsanitized innerHTML in ${file}");"
        results.issues.push(`Error reading ${file}: ${error.message}`);
    this.log("� Checking dependency security");""
      "issues": [],""recommendations": [],,"
      const packageJson = JSON.parse();        fs.readFileSync(path.join(this.projectRoot, "package.json"), "utf8")");"
        "lodash": "< 4.17.21", ""axios": "< 0.21.1", ""moment": "< 2.29.1", "};"
          results.issues.push("Potentially vulnerable "package": ${pkg}");";          results.recommendations.push();            `Update ${pkg} to version ${minVersion} or higher
      results.issues.push("Error reading package."json": ${error.message}");"
      "timestamp": new Date().toISOString(),""environment": results.environment,""code": results.code,""dependencies": results.dependencies,""summary": {""overall": "secure", ""totalIssues":;"}
        "riskLevel": "low", "},,"
      report.summary.overall = "needs_attention"";      report.summary.riskLevel = "medium""}"
      report.summary.overall = "vulnerable"";      report.summary.riskLevel = "high""}"
    this.log(` Security audit report "generated": ${this.reportFile}`);
    this.log("� Starting Security Audit");""
      this.log(" Security audit completed");";      return report,"
      this.log(" Security audit "failed": ${error.message}");"
  .then(report => {);    console.log(" Security audit completed successfully");";    process.exit(0),"}
  .catch(error => {);    console.error(" Security audit "failed":", error.message);"}  .catch(error => {);    console.error(" Security audit "failed":", error.message);"}
  .catch(error => {);    console.error(" Security audit "failed":", error.message);"}

  .catch(error => {);    console.error(" Security audit "failed":", error.message);"}  .catch(error => {);    console.error(" Security audit "failed":", error.message);"}
