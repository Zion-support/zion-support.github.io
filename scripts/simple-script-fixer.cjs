#!/usr/bin/env node
/**
 * Simple Script Fixer
 * Fixes basic syntax errors and merge conflicts in automation scripts
 */
const fs = require("fs");
const path = require("path");

class SimpleScriptFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.scriptsDir = path.join(this.projectRoot, "scripts");
    this.fixedCount = 0;
    this.errorCount = 0;
  }

  log(message, type = "info") {
    const timestamp = new Date().toISOString();
    const prefix = type === "error" ? "❌" : type === "success" ? "✅" : "ℹ️";
    console.log(`[${timestamp}] ${prefix} ${message}`);
  }

  fixScript(scriptPath) {
    try {
      this.log(`Fixing ${path.basename(scriptPath)}...`);
      
      let content = fs.readFileSync(scriptPath, 'utf8');
      const originalContent = content;
      
      // Remove merge conflict markers
      content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
      content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
      content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
      
      // Remove cursor branch references
      content = content.replace(/cursor\/[^;]+;/g, '');
      
      // Fix common syntax issues
      content = content.replace(/#!/usr\/bin\/env node import/g, '#!/usr/bin/env node\nimport');
      content = content.replace(/#!/usr\/bin\/env node;\s*import/g, '#!/usr/bin/env node\nimport');
      
      // Fix missing closing parentheses
      content = content.replace(/(fileURLToPath\(import\.meta\.url)\s*$/gm, '$1)');
      
      // Fix missing semicolons after require statements
      content = content.replace(/(const\s+\w+\s*=\s*require\([^)]+\))\s*\n/g, '$1;\n');
      
      // Fix missing semicolons after variable declarations
      content = content.replace(/(let\s+\w+\s*=\s*[^;]+)\s*\n/g, '$1;\n');
      
      // Fix missing commas in object literals
      content = content.replace(/(\w+:\s*[^,}]+)\s*\n(\s*[a-zA-Z_])/g, '$1,\n$2');
      
      // Convert ES modules to CommonJS
      content = content.replace(/import\s+(\w+)\s+from\s+['"]([^'"]+)['"];?/g, 'const $1 = require("$2");');
      content = content.replace(/import\s*{\s*([^}]+)\s*}\s+from\s+['"]([^'"]+)['"];?/g, 'const { $1 } = require("$2");');
      content = content.replace(/export\s+default\s+/g, 'module.exports = ');
      
      // Remove fileURLToPath usage
      content = content.replace(/const\s+__filename\s*=\s*fileURLToPath\(import\.meta\.url\);?/g, '');
      content = content.replace(/const\s+__dirname\s*=\s*path\.dirname\(__filename\);?/g, 'const __dirname = __dirname || path.dirname(__filename);');
      
      // Only write if content changed
      if (content !== originalContent) {
        fs.writeFileSync(scriptPath, content, 'utf8');
        this.fixedCount++;
        this.log(`Fixed ${path.basename(scriptPath)}`, "success");
      } else {
        this.log(`No changes needed for ${path.basename(scriptPath)}`);
      }
      
    } catch (error) {
      this.errorCount++;
      this.log(`Failed to fix ${path.basename(scriptPath)}: ${error.message}`, "error");
    }
  }

  async fixAllScripts() {
    this.log("🔧 Starting simple script fixing process...");
    
    if (!fs.existsSync(this.scriptsDir)) {
      this.log("Scripts directory not found", "error");
      return;
    }
    
    const files = fs.readdirSync(this.scriptsDir);
    const scriptFiles = files.filter(file => 
      file.endsWith('.js') || file.endsWith('.cjs') || file.endsWith('.mjs')
    );
    
    this.log(`Found ${scriptFiles.length} script files to check`);
    
    for (const file of scriptFiles) {
      const scriptPath = path.join(this.scriptsDir, file);
      this.fixScript(scriptPath);
    }
    
    this.log(`✅ Script fixing completed!`);
    this.log(`Fixed: ${this.fixedCount} scripts`);
    this.log(`Errors: ${this.errorCount} scripts`);
  }
}

// Run the script fixer
const fixer = new SimpleScriptFixer();
fixer.fixAllScripts().catch(console.error);