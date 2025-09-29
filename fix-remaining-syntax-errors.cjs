#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class TargetedSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = []}

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`)}

  fixSpecificErrors(filePath) {
    try {
      if (!fs.existsSync(filePath)) {
        return false}

      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      let changes = 0;

      // Fix specific syntax errors found
      const fixes = [
        // Fix broken template literals in catch blocks
        {
          pattern: /} catch \(error\) \{  this\.log\(❌ Fatal error in orchestrator: \$\{error\.message\}, `ERROR``\);/g,
          replacement: '} catch (error) { this.log(`❌ Fatal error in orchestrator: ${error.message}`, \'ERROR\');'
        },
        
        // Fix broken console.log statements
        {
          pattern: /console\.log\(🎯 Automations to run: \$\{automationsToRun\.join\(', `\)\}\`\);/g,
          replacement: 'console.log(`🎯 Automations to run: ${automationsToRun.join(\', \')}`);'
        },
        
        // Fix broken template literals with backticks
        {
          pattern: /`([^`]*)\$\{([^}]*)\}([^`]*)`/g,
          replacement: '`$1${$2}$3`'
        },
        
        // Fix missing closing backticks
        {
          pattern: /console\.log\(`([^`]*)\$\{([^}]*)\}([^`]*)\`\);/g,
          replacement: 'console.log(`$1${$2}$3`);'
        },
        
        // Fix broken string concatenation
        {
          pattern: /'([^']*)\$\{([^}]*)\}([^']*)'/g,
          replacement: '`$1${$2}$3`'
        },
        
        // Fix missing semicolons after template literals
        {
          pattern: /`([^`]*)\$\{([^}]*)\}([^`]*)`\)/g,
          replacement: '`$1${$2}$3`);'
        }
      ];

      fixes.forEach(fix => {
        const newContent = content.replace(fix.pattern, fix.replacement);
        if (newContent !== content) {
          content = newContent;
          changes++}
      });

      if (changes > 0) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.fixedFiles.push({ file: filePath, changes });
        this.log(`✅ Fixed ${changes} issues in ${filePath}`);
        return true}

      return false} catch (error) {
      this.log(`❌ Error fixing ${filePath}: ${error.message}`);
      return false}
  }

    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;

    const filesToFix = [
      'scripts/automation/master-automation-orchestrator.cjs',
      'scripts/automation/intelligent-automation-orchestrator.cjs',
      'scripts/automation/comprehensive-error-fixer.cjs',
      'scripts/automation/syntax-fixer.cjs'
    ];

    let fixedCount = 0;
    for (const file of filesToFix) {
      const fullPath = path.join(this.projectRoot, file);
      if (this.fixSpecificErrors(fullPath)) {
        fixedCount++}
    }

    this.log(`🎉 Fixed ${fixedCount} files with targeted syntax errors`);
    return { fixed: this.fixedFiles }}
}

// Run the fixer
const fixer = new TargetedSyntaxFixer();
fixer.fixAllFiles()
  .then(result => {
    console.log('\n🎯 Targeted syntax fixing completed!');
    process.exit(0)})
  .catch(error => {
    console.error('❌ Fatal error:', error);
    process.exit(1)});