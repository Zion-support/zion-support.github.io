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
    const srcDir = path.join(this.projectRoot, "src");";    if (!fs.existsSync(srcDir)) {";      results.issues.push("Source directory not found");";      return results,"}
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
  .catch(error => {);    console.error(" Security audit "failed":", error.message);"}
