#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class DataFileErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.dataDir = path.join(this.projectRoot, 'data');
    this.reportsDir = path.join(this.projectRoot, 'reports');
    this.startTime = Date.now();
    this.results = {
      filesProcessed: 0,
      errorsFixed: 0,
      filesFixed: 0,
      errors: []
    };
    
    // Ensure reports directory exists
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [DataFileErrorFixer] ${message}`);
  }

  async fixAllDataFileErrors() {
    this.log('Starting data file error fixing process...');
    
    if (!fs.existsSync(this.dataDir)) {
      this.log('Data directory not found');
      return this.results;
    }
    
    const dataFiles = this.getAllDataFiles();
    this.log(`Found ${dataFiles.length} data files to process`);
    
    for (const file of dataFiles) {
      try {
        const fixed = await this.fixDataFile(file);
        if (fixed) {
          this.results.filesFixed++;
        }
        this.results.filesProcessed++;
      } catch (error) {
        this.log(`Error processing ${file}: ${error.message}`);
        this.results.errors.push({
          file: file,
          error: error.message
        });
      }
    }
    
    this.log(`Data file error fixing completed. Fixed ${this.results.errorsFixed} errors in ${this.results.filesFixed} files.`);
    
    // Generate report
    await this.generateReport();
    
    return this.results;
  }

  getAllDataFiles() {
    const files = [];
    
    if (!fs.existsSync(this.dataDir)) {
      return files;
    }
    
    const items = fs.readdirSync(this.dataDir);
    for (const item of items) {
      const fullPath = path.join(this.dataDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isFile() && (item.endsWith('.js') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.tsx'))) {
        files.push(fullPath);
      }
    }
    
    return files;
  }

  async fixDataFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Fix specific syntax issues found in data files
      
      // 1. Fix missing colons after property names (e.g., features[...] -> features: [...])
      content = this.fixMissingPropertyColons(content);
      
      // 2. Fix array syntax (e.g., features[...] -> features: [...])
      content = this.fixArraySyntax(content);
      
      // 3. Fix missing commas in object properties
      content = this.fixMissingCommas(content);
      
      // 4. Fix missing quotes around string values
      content = this.fixMissingQuotes(content);
      
      // 5. Fix JSX syntax issues
      content = this.fixJSXSyntax(content);
      
      // 6. Fix TypeScript syntax issues
      content = this.fixTypeScriptSyntax(content);
      
      if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.log(`Fixed errors in ${path.basename(filePath)}`);
        this.results.errorsFixed++;
        return true;
      }
      
    } catch (error) {
      this.log(`Failed to fix ${path.basename(filePath)}: ${error.message}`);
    }
    
    return false;
  }

  fixMissingPropertyColons(content) {
    let modified = false;
    
    // Fix missing colons after property names
    // Pattern: property[...] -> property: [...]
    const propertyColonRegex = /(\w+)\s*\[/g;
    if (propertyColonRegex.test(content)) {
      content = content.replace(/(\w+)\s*\[/g, '$1: [');
      modified = true;
    }
    
    // Fix missing colons after property names in object literals
    // Pattern: property value -> property: value
    const propertyValueRegex = /(\w+)\s+([^,\n{}[\]]+)(?=\s*[,}\n])/g;
    if (propertyValueRegex.test(content)) {
      content = content.replace(/(\w+)\s+([^,\n{}[\]]+)(?=\s*[,}\n])/g, '$1: $2');
      modified = true;
    }
    
    return content;
  }

  fixArraySyntax(content) {
    let modified = false;
    
    // Fix array syntax issues
    // Pattern: features[...] -> features: [...]
    const arraySyntaxRegex = /(\w+)\s*\[([^\]]*)\]/g;
    if (arraySyntaxRegex.test(content)) {
      content = content.replace(/(\w+)\s*\[([^\]]*)\]/g, '$1: [$2]');
      modified = true;
    }
    
    // Fix missing commas in arrays
    // Pattern: item\n  item -> item,\n  item
    const arrayCommaRegex = /([^,\n]+)\n\s*([^,\n]+)/g;
    if (arrayCommaRegex.test(content)) {
      content = content.replace(/([^,\n]+)\n\s*([^,\n]+)/g, '$1,\n  $2');
      modified = true;
    }
    
    return content;
  }

  fixMissingCommas(content) {
    let modified = false;
    
    // Fix missing commas after object properties
    // Pattern: property: value\n  property: value -> property: value,\n  property: value
    const objectCommaRegex = /(\w+:\s*[^,\n]+)\n\s*(\w+:\s*[^,\n]+)/g;
    if (objectCommaRegex.test(content)) {
      content = content.replace(/(\w+:\s*[^,\n]+)\n\s*(\w+:\s*[^,\n]+)/g, '$1,\n  $2');
      modified = true;
    }
    
    // Fix missing commas before closing braces
    // Pattern: property: value\n} -> property: value,\n}
    const closingCommaRegex = /(\w+:\s*[^,\n]+)\s*\n\s*}/g;
    if (closingCommaRegex.test(content)) {
      content = content.replace(/(\w+:\s*[^,\n]+)\s*\n\s*}/g, '$1,\n}');
      modified = true;
    }
    
    return content;
  }

  fixMissingQuotes(content) {
    let modified = false;
    
    // Fix missing quotes around string values
    // Pattern: : value, -> : "value",
    const stringQuoteRegex = /:\s*([a-zA-Z][a-zA-Z0-9\s-]*)\s*([,}])/g;
    if (stringQuoteRegex.test(content)) {
      content = content.replace(/:\s*([a-zA-Z][a-zA-Z0-9\s-]*)\s*([,}])/g, ': "$1"$2');
      modified = true;
    }
    
    // Fix missing quotes around property names
    // Pattern: property: -> "property":
    const propertyQuoteRegex = /(\w+):/g;
    if (propertyQuoteRegex.test(content)) {
      content = content.replace(/(\w+):/g, '"$1":');
      modified = true;
    }
    
    return content;
  }

  fixJSXSyntax(content) {
    let modified = false;
    
    // Fix JSX fragments
    content = content.replace(/<>\s*<\/>/g, '<div></div>');
    
    // Fix unclosed JSX tags
    content = content.replace(/<(\w+)([^>]*)>/g, (match, tag, attrs) => {
      if (content.includes(`</${tag}>`)) {
        return match;
      } else {
        return `<${tag}${attrs}></${tag}>`;
      }
    });
    
    return content;
  }

  fixTypeScriptSyntax(content) {
    let modified = false;
    
    // Fix missing type annotations
    content = content.replace(/:\s*,/g, ': any,');
    content = content.replace(/:\s*\)/g, ': any)');
    content = content.replace(/:\s*$/gm, ': any');
    
    // Fix interface syntax
    content = content.replace(/interface\s+(\w+)\s*{/g, 'interface $1 {');
    
    // Fix type syntax
    content = content.replace(/type\s+(\w+)\s*=/g, 'type $1 =');
    
    return content;
  }

  async generateReport() {
    const reportPath = path.join(this.reportsDir, 'data-file-error-fixer-report.json');
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      results: this.results
    };
    
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`Report generated: ${reportPath}`);
  }

  async startContinuousMode() {
    this.log('Starting continuous data file error fixing mode...');
    
    // Run initial fix
    await this.fixAllDataFileErrors();
    
    // Set up continuous monitoring
    const interval = parseInt(process.env.AUTOMATION_INTERVAL) || 1800000; // Default: 30 minutes
    
    setInterval(async () => {
      this.log('Running scheduled data file error check...');
      await this.fixAllDataFileErrors();
    }, interval);
    
    this.log(`Continuous mode active. Running every ${interval / 1000} seconds.`);
  }
}

// Main execution
if (require.main === module) {
  const fixer = new DataFileErrorFixer();
  
  if (process.argv.includes('--continuous')) {
    fixer.startContinuousMode();
  } else {
    fixer.fixAllDataFileErrors()
      .then(results => {
        console.log('Data file error fixing completed:', results);
        process.exit(results.errorsFixed > 0 ? 0 : 1);
      })
      .catch(error => {
        console.error('Data file error fixing failed:', error);
        process.exit(1);
      });
  }
}

module.exports = DataFileErrorFixer;