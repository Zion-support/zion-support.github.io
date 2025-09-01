#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs').promises;
const path = require('path');

class SyntaxErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'automation/logs/syntax-error-fixer.log');
    this.fixesApplied = [];
    this.startTime = new Date();
  }

  async log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    await fs.appendFile(this.logFile, logMessage + '\n');
  }

  async fixSyntaxErrors() {
    await this.log('🔧 Fixing syntax errors...');
    
    const filePatterns = [
      'src/**/*.{js,jsx,ts,tsx}',
      'scripts/**/*.{js,cjs}',
      'automation/**/*.{js,cjs}',
      '*.{js,cjs}'
    ];
    
    for (const pattern of filePatterns) {
      try {
        const files = require('glob').sync(pattern, { cwd: this.projectRoot });
        for (const file of files) {
          await this.fixFileSyntax(file);
        }
      } catch (error) {
        await this.log(`❌ Error processing pattern ${pattern}: ${error.message}`);
      }
    }
  }

  async fixFileSyntax(filePath) {
    try {
      const fullPath = path.join(this.projectRoot, filePath);
      let content = await fs.readFile(fullPath, 'utf8');
      let modified = false;
      
      // Fix missing commas in objects
      if (this.hasMissingCommas(content)) {
        content = this.fixMissingCommas(content);
        modified = true;
      }
      
      // Fix missing semicolons
      if (this.hasMissingSemicolons(content)) {
        content = this.fixMissingSemicolons(content);
        modified = true;
      }
      
      // Fix unclosed brackets/parentheses
      if (this.hasUnclosedBrackets(content)) {
        content = this.fixUnclosedBrackets(content);
        modified = true;
      }
      
      // Fix template literal syntax
      if (this.hasTemplateLiteralIssues(content)) {
        content = this.fixTemplateLiteralIssues(content);
        modified = true;
      }
      
      // Fix import/export syntax
      if (this.hasImportExportIssues(content)) {
        content = this.fixImportExportIssues(content);
        modified = true;
      }
      
      if (modified) {
        await fs.writeFile(fullPath, content);
        await this.log(`✅ Fixed syntax in ${filePath}`);
        this.fixesApplied.push({
          type: 'syntax-fix',
          file: filePath,
          timestamp: new Date().toISOString()
        });
      }
    } catch (error) {
      await this.log(`❌ Error fixing ${filePath}: ${error.message}`);
    }
  }

  hasMissingCommas(content) {
    return /(\w+:\s*[^,}]+)\s*\n\s*(\w+:)/.test(content) ||
           /(\w+:\s*\[[^\]]*\])\s*\n\s*(\w+:)/.test(content);
  }

  fixMissingCommas(content) {
    return content
      .replace(/(\w+:\s*[^,}]+)\s*\n\s*(\w+:)/g, '$1,\n  $2')
      .replace(/(\w+:\s*\[[^\]]*\])\s*\n\s*(\w+:)/g, '$1,\n  $2');
  }

  hasMissingSemicolons(content) {
    return /(\w+)\s*\n\s*(import|export|const|let|var|function|class)/.test(content);
  }

  fixMissingSemicolons(content) {
    return content.replace(/(\w+)\s*\n\s*(import|export|const|let|var|function|class)/g, '$1;\n$2');
  }

  hasUnclosedBrackets(content) {
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    const openBrackets = (content.match(/\[/g) || []).length;
    const closeBrackets = (content.match(/\]/g) || []).length;
    const openParens = (content.match(/\(/g) || []).length;
    const closeParens = (content.match(/\)/g) || []).length;
    
    return openBraces !== closeBraces || 
           openBrackets !== closeBrackets || 
           openParens !== closeParens;
  }

  fixUnclosedBrackets(content) {
    // Count brackets and add missing ones
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    const openBrackets = (content.match(/\[/g) || []).length;
    const closeBrackets = (content.match(/\]/g) || []).length;
    const openParens = (content.match(/\(/g) || []).length;
    const closeParens = (content.match(/\)/g) || []).length;
    
    let fixedContent = content;
    
    // Add missing closing braces
    for (let i = 0; i < openBraces - closeBraces; i++) {
      fixedContent += '\n}';
    }
    
    // Add missing closing brackets
    for (let i = 0; i < openBrackets - closeBrackets; i++) {
      fixedContent += ']';
    }
    
    // Add missing closing parentheses
    for (let i = 0; i < openParens - closeParens; i++) {
      fixedContent += ')';
    }
    
    return fixedContent;
  }

  hasTemplateLiteralIssues(content) {
    return /`[^`]*\$[^`]*`/.test(content) && !content.includes('${');
  }

  fixTemplateLiteralIssues(content) {
    return content.replace(/`([^`]*)\$([^`]*)`/g, '`$1\${$2}`');
  }

  hasImportExportIssues(content) {
    return /import\s+{\s*[^}]*\s*}\s*from\s*['"][^'"]*['"]\s*$/.test(content) ||
           /export\s+{\s*[^}]*\s*}\s*$/.test(content);
  }

  fixImportExportIssues(content) {
    return content
      .replace(/import\s+{\s*([^}]*)\s*}\s*from\s*['"]([^'"]*)['"]\s*$/gm, 'import { $1 } from "$2";')
      .replace(/export\s+{\s*([^}]*)\s*}\s*$/gm, 'export { $1 };');
  }

  async validateSyntax() {
    await this.log('🔍 Validating syntax...');
    
    const jsFiles = require('glob').sync('**/*.{js,jsx,ts,tsx}', { cwd: this.projectRoot });
    let validFiles = 0;
    let invalidFiles = 0;
    
    for (const file of jsFiles) {
      try {
        const fullPath = path.join(this.projectRoot, file);
        const content = await fs.readFile(fullPath, 'utf8');
        
        // Basic syntax validation
        if (this.isValidSyntax(content)) {
          validFiles++;
        } else {
          invalidFiles++;
          await this.log(`⚠️  Syntax issues detected in ${file}`);
        }
      } catch (error) {
        invalidFiles++;
        await this.log(`❌ Error validating ${file}: ${error.message}`);
      }
    }
    
    await this.log(`📊 Syntax validation: ${validFiles} valid, ${invalidFiles} invalid files`);
    return { validFiles, invalidFiles };
  }

  isValidSyntax(content) {
    try {
      // Try to parse as JSON if it looks like JSON
      if (content.trim().startsWith('{') || content.trim().startsWith('[')) {
        JSON.parse(content);
        return true;
      }
      
      // Basic JavaScript syntax checks
      const hasBalancedBraces = (content.match(/\{/g) || []).length === (content.match(/\}/g) || []).length;
      const hasBalancedBrackets = (content.match(/\[/g) || []).length === (content.match(/\]/g) || []).length;
      const hasBalancedParens = (content.match(/\(/g) || []).length === (content.match(/\)/g) || []).length;
      
      return hasBalancedBraces && hasBalancedBrackets && hasBalancedParens;
    } catch (error) {
      return false;
    }
  }

  async run() {
    try {
      await this.log('🚀 Starting Syntax Error Fixer');
      
      await this.fixSyntaxErrors();
      await this.validateSyntax();
      
      const endTime = new Date();
      const duration = endTime - this.startTime;
      
      await this.log(`✅ Syntax Error Fixer completed in ${duration.getTime()}ms`);
      await this.log(`📈 Fixes applied: ${this.fixesApplied.length}`);
      
      return {
        success: true,
        fixesApplied: this.fixesApplied.length,
        duration: duration.getTime()
      };
      
    } catch (error) {
      await this.log(`❌ Syntax Error Fixer failed: ${error.message}`);
      throw error;
    }
  }
}

// Run the fixer if called directly
if (require.main === module) {
  const fixer = new SyntaxErrorFixer();
  fixer.run()
    .then(result => {
      console.log('Syntax error fixer completed successfully');
      process.exit(0);
    })
    .catch(error => {
      console.error('Syntax error fixer failed:', error);
      process.exit(1);
    });
}

module.exports = SyntaxErrorFixer;