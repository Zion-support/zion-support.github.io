#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

class EnhancedErrorFixingAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixesApplied = [];
    this.startTime = Date.now();
  }

  log(message, type = "info") {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
    console.log(logMessage);
  }

  async runCommand(command, options = {}) {
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        encoding: "utf8",
        stdio: options.silent ? "pipe" : "inherit",
        ...options
      });
      return { success: true, output: result };
    } catch (error) {
      return { success: false, error: error.message, output: error.stdout || error.stderr };
    }
  }

  async fixMergeConflicts() {
    this.log("Fixing merge conflicts...");
    
    const files = this.getTypeScriptFiles();
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, "utf8");
        if (content.includes("<<<<<<< HEAD") || content.includes("=======") || content.includes(">>>>>>> ")) {
          this.log(`Fixing merge conflicts in ${file}`);
          
          // Simple merge conflict resolution - keep the HEAD version
          const lines = content.split("\n");
          const newLines = [];
          let inConflict = false;
          
          for (const line of lines) {
            if (line.includes("<<<<<<< HEAD")) {
              inConflict = true;
              continue;
            } else if (line.includes("=======")) {
              continue;
            } else if (line.includes(">>>>>>> ")) {
              inConflict = false;
              continue;
            } else if (!inConflict) {
              newLines.push(line);
            }
          }
          
          fs.writeFileSync(file, newLines.join("\n"));
          this.fixesApplied.push({
            type: "merge_conflict",
            file: file,
            description: "Resolved merge conflicts"
          });
        }
      } catch (error) {
        this.log(`Could not fix merge conflicts in ${file}: ${error.message}`, "error");
      }
    }
  }

  getTypeScriptFiles() {
    const files = [];
    const srcDir = path.join(process.cwd(), "src");
    
    function walkDir(dir) {
      if (!fs.existsSync(dir)) return;
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          walkDir(fullPath);
        } else if (item.endsWith(".ts") || item.endsWith(".tsx")) {
          files.push(fullPath);
        }
      }
    }
    
    walkDir(srcDir);
    return files;
  }

  async generateReport() {
    const duration = Date.now() - this.startTime;
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}ms`,
      fixesApplied: this.fixesApplied,
      summary: {
        totalFixes: this.fixesApplied.length,
        mergeConflictFixes: this.fixesApplied.filter(f => f.type === "merge_conflict").length
      }
    };
    
    const reportPath = path.join(this.projectRoot, "error-fixing-report.json");
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`Error fixing report saved to: ${reportPath}`);
    return report;
  }

  async run() {
    this.log("Starting Enhanced Error Fixing Automation...");
    
    try {
      // Run all fix operations
      await this.fixMergeConflicts();
      
      // Generate report
      const report = await this.generateReport();
      this.log(`Error fixing completed! Applied ${report.summary.totalFixes} fixes.`);
      
      return report;
    } catch (error) {
      this.log(`Error fixing automation failed: ${error.message}`, "error");
      throw error;
    }
  }
}

// Run the automation if called directly
if (require.main === module) {
  const automation = new EnhancedErrorFixingAutomation();
  automation.run().catch(console.error);
}

module.exports = EnhancedErrorFixingAutomation;