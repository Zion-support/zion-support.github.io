#!/usr/bin/env node
/**
 * Syntax Fix Launcher
 * Launches syntax fixing operations
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SyntaxFixLauncher {
  constructor() {
    this.logsDir = path.join(__dirname, 'logs');
    this.ensureLogsDir();
  }

  ensureLogsDir() {
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }

  async quickFix() {
    this.log('🔧 Running quick syntax fixes...');
    
    try {
      // Fix common merge conflict patterns
      this.fixMergeConflicts();
      
      // Fix common syntax errors
      this.fixCommonSyntaxErrors();
      
      this.log('✅ Quick syntax fixes completed');
      return { success: true };
    } catch (error) {
      this.log(`❌ Quick syntax fixes failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  fixMergeConflicts() {
    this.log('🔍 Fixing merge conflicts...');
    
    const filesToFix = [
      'eslint.config.js',
      'src/pages/Home.tsx',
      'src/pages/Contact.tsx',
      'src/pages/Services.tsx',
      'app/page.tsx',
      'app/about/page.tsx',
      'app/contact/page.tsx'
    ];

    filesToFix.forEach(file => {
      const filePath = path.join(process.cwd(), file);
      if (fs.existsSync(filePath)) {
        try {
          let content = fs.readFileSync(filePath, 'utf8');
          
          // Remove merge conflict markers
          content = content.replace(/<<<<<<< .*\n/g, '');
          content = content.replace(/======= .*\n/g, '');
          content = content.replace(/>>>>>>> .*\n/g, '');
          
          // Clean up extra whitespace
          content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
          
          fs.writeFileSync(filePath, content);
          this.log(`✅ Fixed merge conflicts in ${file}`);
        } catch (error) {
          this.log(`⚠️ Could not fix ${file}: ${error.message}`);
        }
      }
    });
  }

  fixCommonSyntaxErrors() {
    this.log('🔧 Fixing common syntax errors...');
    
    // Fix semicolon issues
    const jsFiles = this.findFiles('**/*.{js,jsx,ts,tsx}', ['node_modules', 'dist', 'build']);
    
    jsFiles.forEach(file => {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;
        
        // Fix missing semicolons
        if (content.includes('const ') && !content.includes(';')) {
          content = content.replace(/(const [^=]+ = [^;]+)\n/g, '$1;\n');
          modified = true;
        }
        
        // Fix duplicate imports
        content = this.removeDuplicateImports(content);
        
        if (modified) {
          fs.writeFileSync(file, content);
          this.log(`✅ Fixed syntax errors in ${file}`);
        }
      } catch (error) {
        // Skip files that can't be processed
      }
    });
  }

  removeDuplicateImports(content) {
    const lines = content.split('\n');
    const importLines = [];
    const nonImportLines = [];
    
    lines.forEach(line => {
      if (line.trim().startsWith('import ') || line.trim().startsWith('const ') && line.includes('require(')) {
        if (!importLines.includes(line.trim())) {
          importLines.push(line.trim());
        }
      } else {
        nonImportLines.push(line);
      }
    });
    
    return [...importLines, ...nonImportLines].join('\n');
  }

  findFiles(pattern, excludeDirs = []) {
    const files = [];
    const searchDir = process.cwd();
    
    function walkDir(dir) {
      try {
        const items = fs.readdirSync(dir);
        
        items.forEach(item => {
          const fullPath = path.join(dir, item);
          try {
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory()) {
              if (!excludeDirs.some(exclude => fullPath.includes(exclude))) {
                walkDir(fullPath);
              }
            } else if (stat.isFile()) {
              if (item.match(/\.(js|jsx|ts|tsx)$/)) {
                files.push(fullPath);
              }
            }
          } catch (error) {
            // Skip files that can't be accessed
          }
        });
      } catch (error) {
        // Skip directories that can't be accessed
      }
    }
    
    walkDir(searchDir);
    return files;
  }
}

// Command line interface
const args = process.argv.slice(2);
const launcher = new SyntaxFixLauncher();

if (args.includes('quick-fix')) {
  launcher.quickFix().then(result => {
    process.exit(result.success ? 0 : 1);
  });
} else {
  console.log('Usage: node syntax-fix-launcher.js quick-fix');
  process.exit(1);
}