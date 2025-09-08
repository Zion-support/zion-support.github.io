<<<<<<< HEAD
#!/usr/bin/env node;


const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

class TypeScriptFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixes = [];
    this.errors = [];
  }

  log(message, type = "INFO") {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${type}] ${message}`);
  }

  async fixTypeScriptConfig() {
    this.log("🔧 Fixing TypeScript configuration...");
    try {
      const tsConfigPath = path.join(this.projectRoot, "tsconfig.json");
      if (fs.existsSync(tsConfigPath)) {
        const tsConfig = JSON.parse(fs.readFileSync(tsConfigPath, "utf8"));
        
        // Ensure proper TypeScript configuration
        if (!tsConfig.compilerOptions) {
          tsConfig.compilerOptions = {};
        }
        
        // Set proper target and module
        tsConfig.compilerOptions.target = "ES2020";
        tsConfig.compilerOptions.module = "ESNext";
        tsConfig.compilerOptions.moduleResolution = "node";
        tsConfig.compilerOptions.allowSyntheticDefaultImports = true;
        tsConfig.compilerOptions.esModuleInterop = true;
        tsConfig.compilerOptions.allowJs = true;
        tsConfig.compilerOptions.strict = true;
        tsConfig.compilerOptions.skipLibCheck = true;
        tsConfig.compilerOptions.forceConsistentCasingInFileNames = true;
        tsConfig.compilerOptions.noEmit = true;
        tsConfig.compilerOptions.jsx = "preserve";
        tsConfig.compilerOptions.incremental = true;
        tsConfig.compilerOptions.plugins = [
          {
            "name": "next"
          }
        ];
        
        // Set include and exclude
        tsConfig.include = [
          "next-env.d.ts",
          "**/*.ts",
          "**/*.tsx",
          ".next/types/**/*.ts"
        ];
        tsConfig.exclude = [
          "node_modules"
        ];
        
        fs.writeFileSync(tsConfigPath, JSON.stringify(tsConfig, null, 2));
        this.fixes.push("Updated TypeScript configuration");
        this.log("✅ TypeScript configuration fixed");
      }
    } catch (error) {
      this.log(`❌ Failed to fix TypeScript config: ${error.message}`, "ERROR");
      this.errors.push(error.message);
    }
  }

  async fixTypeErrors() {
    this.log("🔍 Checking for TypeScript errors...");
    try {
      execSync("npx tsc --noEmit", {
        cwd: this.projectRoot,
        stdio: "pipe"
      });
      this.log("✅ No TypeScript errors found");
    } catch (error) {
      this.log(`⚠️ TypeScript errors found: ${error.message}`, "WARN");
      this.errors.push(`TypeScript errors: ${error.message}`);
    }
  }

  async fixImportStatements() {
    this.log("📦 Fixing import statements...");
    try {
      const files = this.getAllFiles(this.projectRoot, [".ts", ".tsx"]);
      let fixedFiles = 0;
      
      for (const file of files) {
        if (file.includes("node_modules")) continue;
        
        try {
          let content = fs.readFileSync(file, "utf8");
          let modified = false;
          
          // Fix React imports
          if (content.includes("import React from 'react'") && !content.includes("import * as React")) {
            content = content.replace(/import React from 'react'/g, "import * as React from 'react'");
            modified = true;
          }
          
          // Fix Next.js imports
          if (content.includes("import { useRouter } from 'next/router'")) {
            content = content.replace(/import { useRouter } from 'next\/router'/g, "import { useRouter } from 'next/navigation'");
            modified = true;
          }
          
          if (modified) {
            fs.writeFileSync(file, content);
            fixedFiles++;
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
      
      if (fixedFiles > 0) {
        this.fixes.push(`Fixed imports in ${fixedFiles} files`);
        this.log(`✅ Fixed imports in ${fixedFiles} files`);
      }
    } catch (error) {
      this.log(`❌ Failed to fix imports: ${error.message}`, "ERROR");
      this.errors.push(error.message);
    }
  }

  getAllFiles(dir, extensions) {
    const files = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...this.getAllFiles(fullPath, extensions));
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (extensions.includes(ext)) {
          files.push(fullPath);
        }
      }
    }
    
    return files;
  }

  async run() {
    this.log("🎯 Starting TypeScript Fixing Process...");
    this.log("=========================================");
    try {
      await this.fixTypeScriptConfig();
      await this.fixImportStatements();
      await this.fixTypeErrors();
      
      this.log("\n📊 TYPESCRIPT FIXING REPORT");
      this.log("============================");
      this.log(`Fixes Applied: ${this.fixes.length}`);
      this.log(`Errors Found: ${this.errors.length}`);
      
      if (this.fixes.length > 0) {
        this.log("\n✅ Fixes Applied:");
        this.fixes.forEach((fix, index) => {
          this.log(`  ${index + 1}. ${fix}`);
        });
      }
      
      if (this.errors.length > 0) {
        this.log("\n❌ Errors:");
        this.errors.forEach((error, index) => {
          this.log(`  ${index + 1}. ${error}`);
        });
      }
      
      this.log("\n🎉 TypeScript fixing completed!");
    } catch (error) {
      this.log(`💥 Fatal error: ${error.message}`, "ERROR");
      process.exit(1);
    }
  }
}

const fixer = new TypeScriptFixer();
fixer.run().catch(console.error);
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
