#!/usr/bin/env node;
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
class $1 {;
  constructor() {;
  this.projectRoot = process.cwd();
    this.vulnerabilities = [];
    this.recommendations = [];,;,
}
;
  async scanDependencies() {;
  console.log("🔍 Scanning dependencies for vulnerabilities...");
    try {;
  execSync("npm audit", { stdio: "pipe" });
      console.log("✅ No critical vulnerabilities found");,;,
} catch (error) {;
  this.vulnerabilities.push("Dependency vulnerabilities detected");
      this.recommendations.push("Run npm audit fix");,;,
}
  }
;
  async scanSecrets() {;
  console.log("🔐 Scanning for exposed secrets...");
    const sensitivePatterns = [;
  /password\s*[:=]\s*[""][^""]+[""]/gi,;
      /api[_-]?key\s*[:=]\s*[""][^""]+[""]/gi,;
      /secret\s*[:=]\s*[""][^""]+[""]/gi,;
      /token\s*[:=]\s*[""][^""]+[""]/gi;
    ];
    ;
    const files = this.findSourceFiles();
    for (const file of files) {;
  try {;
  const content = fs.readFileSync(file, "utf8");
        for (const pattern of sensitivePatterns) {;
  if (pattern.test(content)) {;
  this.vulnerabilities.push(`Potential secret in ${path.relative(this.projectRoot, file)}`);
            this.recommendations.push(`Review ${path.relative(this.projectRoot, file)} for exposed secrets`);,;,
}
        }
      } catch (error) {;
  // Skip files that can"t be read;,;,
}
    }
    ;
    console.log("✅ Secret scanning completed");,;,
}
;
  findSourceFiles() {;
  const files = [];
    const dirs = ["src", "components", "pages", "utils", "hooks"];
    dirs.forEach(dir => {;
  const fullPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(fullPath)) {;
  this.findFilesRecursively(fullPath, files);,;,
}
    });
    return files.filter(file => ;
      file.endsWith(".js") || ;
      file.endsWith(".jsx") || ;
      file.endsWith(".ts") || ;
      file.endsWith(".tsx");
    );,;,
}
;
  findFilesRecursively(dir, files) {;
  const items = fs.readdirSync(dir);
    for (const item of items) {;
  const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {;
  this.findFilesRecursively(fullPath, files);,;,
} else {;
  files.push(fullPath);,;,
}
    }
  }
;
  async scanConfiguration() {;
  console.log("⚙️  Scanning configuration files...");
    const configFiles = ["package.json", "next.config.js", ".env", ".env.local"];
    for (const file of configFiles) {;
  const filePath = path.join(this.projectRoot, file);
      if (fs.existsSync(filePath)) {;
  try {;
  const content = fs.readFileSync(filePath, "utf8");
          // Check for insecure configurations;
          if (content.includes("NODE_ENV=development") && file.includes(".env")) {;
  this.recommendations.push(`Review ${file} for production-ready configuration`);,;,
}
        } catch (error) {;
  // Skip files that can"t be read;,;,
}
      }
    }
    ;
    console.log("✅ Configuration scanning completed");,;,
}
;
  async runSecurityScan() {;
  console.log("🛡️  Starting security scan...\n");
    await this.scanDependencies();
    await this.scanSecrets();
    await this.scanConfiguration();
    console.log("\n📊 Security Scan Summary:");
    console.log(`Vulnerabilities found: ${this.vulnerabilities.length}`);
    console.log(`Recommendations: ${this.recommendations.length}`);
    if (this.vulnerabilities.length > 0) {;
  console.log("\n⚠️  Vulnerabilities:");
      this.vulnerabilities.forEach((vuln, index) => console.log(`${index + 1}. ${vuln}`));,;,
}
    ;
    if (this.recommendations.length > 0) {;
  console.log("\n💡 Recommendations:");
      this.recommendations.forEach((rec, index) => console.log(`${index + 1}. ${rec}`));,;,
}
    ;
    if (this.vulnerabilities.length === 0) {;
  console.log("\n🎉 No security issues found!");,;,
}
  }
}
;
const scanner = new SecurityScanner();
scanner.runSecurityScan().catch(console.error)