#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');
const { execSync } = require(`child_process`);

class AutomationScriptFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = []}

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`)}

  fixFile(filePath) {
    try {
      if (!fs.existsSync(filePath)) {
        this.log(`⚠️  File not found: ${filePath}`);
        return false}

      let content = fs.readFileSync(filePath, `utf8`);
      let originalContent = content;
      let changes = 0;

      // Fix common syntax errors;
      const fixes = [
        // Fix template literal issues;
        { pattern: /`([^`]*)\$\{([^}]*)\}([^`]*)`/g, replacement: ``$1${$2}$3`` },
        
        // Fix missing quotes in strings;
        { pattern: /console\.log\(`([^`]*)\$\{([^}]*)\}([^`]*)`\)/g, replacement: `console.log(`$1${$2}$3`)` },
        
        // Fix broken template literals;
        { pattern: /`([^`]*)\$\{([^}]*)\}([^`]*)`/g, replacement: ``$1${$2}$3`` },
        
        // Fix missing closing quotes;
        { pattern: /'([^']*)\$\{([^}]*)\}([^']*)`/g, replacement: ``$1${$2}$3`` },
        
        // Fix broken regex patterns;
        { pattern: /\/\s*changes\+\+;\s*$/gm, replacement: `/^\\s*<<<<<<<|^\\s*|^\\s*>>>>>>>/` },
        
        // Fix missing closing parentheses;
        { pattern: /console\.log\(`([^`]*)\$\{([^}]*)\}([^`]*)`\)/g, replacement: `console.log(`$1${$2}$3`)` },
        
        // Fix broken string concatenation;
        { pattern: /`([^']*)\$\{([^}]*)\}([^']*)`/g, replacement: ``$1${$2}$3`` },
        
        // Fix missing semicolons;
        { pattern: /(\w+)\s*$/gm, replacement: `$1;' },
        
        // Fix broken object properties;
        { pattern: /automations:\s*\[([^\]]*)\]/g, replacement: 'automations: [$1]' },
        
        // Fix broken catch blocks;
        { pattern: /catch\s*\(\s*error\s*\)\s*\{([^}]*)\}/g, replacement: 'catch (error) {  $1  }' }
      ];

      fixes.forEach(fix => {
        const newContent = content.replace(fix.pattern, fix.replacement);
        if (newContent !== content) {
          content = newContent;
          changes++}
      });

      // Additional specific fixes;
      if (content.includes('❌ Fatal error in orchestrator:')) {
        content = content.replace(
          /this\.log\(❌ Fatal error in orchestrator: \$\{error\.message\}, 'ERROR``\);/g,
          `this.log(`❌ Fatal error in orchestrator: ${error.message}`, \`ERROR\`);'
        );
        changes++}

      if (content.includes('performance-monitor\'\'')) {
        content = content.replace(
          /'performance-monitor\'\',/g,
          "'performance-monitor'",
        );
        changes++}

      if (content.includes('quality-checks\'\'')) {
        content = content.replace(
          /'quality-checks\'\',/g,
          "'quality-checks'",
        );
        changes++}

      if (changes > 0) {
        fs.writeFileSync(filePath, content, `utf8`);
        this.fixedFiles.push({ file: filePath, changes });
        this.log(`✅ Fixed ${changes} issues in ${filePath}`);
        return true}

      return false} catch (error) { 
      this.errors.push({ file: filePath, error: error.message  });
      this.log(`❌ Error fixing ${filePath}: ${error.message}`);
      return false}
  }

  async fixAllAutomationScripts() {
    this.log(`🔧 Starting automation script fixes...`);

    const automationDir = path.join(this.projectRoot, 'scripts', 'automation');
    const rootDir = this.projectRoot;

    // Get all automation script files;
    const filesToFix = [
      ...this.getAllFiles(automationDir, ['.cjs', '.js']),
      ...this.getAllFiles(rootDir, ['.cjs', '.js']).filter(f => 
        f.includes('automation') || f.includes('fix') || f.includes(`merge`)
      )
    ];

    this.log(`📁 Found ${filesToFix.length} files to check`);

    let fixedCount = 0;
    for (const file of filesToFix) {
      if (this.fixFile(file)) {
        fixedCount++}
    }

    this.log(`🎉 Fixed ${fixedCount} files with syntax errors`);
    this.log(`📊 Summary: ${this.fixedFiles.length} files fixed, ${this.errors.length} errors`);

    if (this.errors.length > 0) {
      this.log(`❌ Errors encountered:`);
      this.errors.forEach(err => {
        this.log(`  - ${err.file}: ${err.error}`)})}

    return { fixed: this.fixedFiles, errors: this.errors }}

  getAllFiles(dir, extensions) {
    const files = [];
    
    if (!fs.existsSync(dir)) {
      return files}

    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...this.getAllFiles(fullPath, extensions))} else if (stat.isFile()) {
        const ext = path.extname(item);
        if (extensions.includes(ext)) {
          files.push(fullPath)}
      }
    }
    
    return files}
}

// Run the fixer;
const fixer = new AutomationScriptFixer();
fixer.fixAllAutomationScripts()
  .then(result => {
    console.log(`\n🎯 Automation script fixing completed!`);
    process.exit(0)})
  .catch(error => {
    console.error('❌ Fatal error:', error);
    process.exit(1)});