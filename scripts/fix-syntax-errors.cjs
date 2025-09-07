#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

class SyntaxErrorFixer {
  constructor() {
    this.fixedFiles = [];
    this.errors = [];
  }

  async fixAllFiles() {
    console.log('🔧 Fixing syntax errors...');
    
    const serviceDir = path.join(process.cwd(), 'app/services');
    if (fs.existsSync(serviceDir)) {
      const files = fs.readdirSync(serviceDir, { withFileTypes: true });
      
      for (const file of files) {
        if (file.isDirectory()) {
          const pageFile = path.join(serviceDir, file.name, 'page.tsx');
          if (fs.existsSync(pageFile)) {
            await this.fixFile(pageFile);
          }
        }
      }
    }
    
    console.log(`✅ Fixed ${this.fixedFiles.length} files`);
    console.log(`❌ ${this.errors.length} errors encountered`);
  }

  async fixFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Fix common syntax errors
      const fixes = [
        // Fix missing closing braces
        {
          pattern: /(\s+)\]\s*return\s*\(/g,
          replacement: '$1  ];\n  return ('
        },
        // Fix malformed JSX closing tags
        {
          pattern: /(\s+)<\/div>\s*<\/section>\s*\)\s*export/g,
          replacement: '$1  </div>\n    </section>\n  );\n}\n\nexport'
        },
        // Fix missing function closing
        {
          pattern: /(\s+)\)\s*export\s*default/g,
          replacement: '$1  );\n}\n\nexport default'
        },
        // Fix incomplete JSX structure
        {
          pattern: /(\s+)<\/div>\s*<\/section>\s*\)\s*;\s*}\s*export\s*default/g,
          replacement: '$1  </div>\n    </section>\n  );\n}\n\nexport default'
        }
      ];
      
      for (const fix of fixes) {
        const newContent = content.replace(fix.pattern, fix.replacement);
        if (newContent !== content) {
          content = newContent;
          modified = true;
        }
      }
      
      if (modified) {
        fs.writeFileSync(filePath, content);
        this.fixedFiles.push(filePath);
        console.log(`✅ Fixed: ${path.basename(filePath)}`);
      }
      
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      console.log(`❌ Error fixing ${path.basename(filePath)}: ${error.message}`);
    }
  }
}

// Run if called directly
if (require.main === module) {
  const fixer = new SyntaxErrorFixer();
  fixer.fixAllFiles().catch(console.error);
}

module.exports = SyntaxErrorFixer;