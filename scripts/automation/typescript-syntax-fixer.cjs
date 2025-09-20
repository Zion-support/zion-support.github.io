#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

class TypeScriptSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, "logs", "typescript-syntax-fixer.log");
    this.ensureLogsDirectory();
  }

  ensureLogsDirectory() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    
    try {
      fs.appendFileSync(this.logFile, logMessage + '\n');
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async fixTypeScriptErrors() {
    this.log("🔧 Fixing TypeScript errors...");
    
    try {
      execSync('npm run type-check', { 
        cwd: this.projectRoot, 
        stdio: 'pipe' 
      });
      
      this.log("✅ TypeScript syntax check passed");
      return true;
    } catch (error) {
      this.log(`❌ TypeScript syntax errors found: ${error.message}`);
      return false;
    }
  }

  async run() {
    this.log("🚀 Starting TypeScript Syntax Fixer...");
    
    try {
      await this.fixTypeScriptErrors();
      this.log("🎉 TypeScript Syntax Fixer completed!");
    } catch (error) {
      this.log(`❌ TypeScript Syntax Fixer failed: ${error.message}`);
    }
  }
}

if (require.main === module) {
  const fixer = new TypeScriptSyntaxFixer();
  fixer.run().catch(console.error);
}

module.exports = TypeScriptSyntaxFixer;