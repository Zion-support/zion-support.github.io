#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class SyntaxErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixes = [];
  }

  log(message, type = 'INFO') {
    const prefix = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️'
    }[type] || 'ℹ️';
    console.log(`${prefix} ${message}`);
  }

  fixFile(filePath) {
    try {
      if (!fs.existsSync(filePath)) {
        this.log(`File not found: ${filePath}`, 'WARNING');
        return;
      }

      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      
      // Remove any trailing whitespace and ensure proper newline
      content = content.trim() + '\n';
      
      // Fix common syntax issues
      content = content.replace(/\r\n/g, '\n'); // Normalize line endings
      content = content.replace(/\r/g, '\n'); // Convert Mac line endings
      
      // Ensure proper function structure for API files
      if (filePath.includes('/api/') && !content.includes('export default function')) {
        if (content.includes('return res.status')) {
          content = `export default function handler(req, res) {\n${content}\n}`;
        }
      }
      
      // Ensure proper closing braces
      const openBraces = (content.match(/\{/g) || []).length;
      const closeBraces = (content.match(/\}/g) || []).length;
      
      if (openBraces > closeBraces) {
        const missingBraces = openBraces - closeBraces;
        content += '\n' + '}'.repeat(missingBraces) + '\n';
        this.log(`Added ${missingBraces} missing closing braces to ${filePath}`);
      }
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        this.fixes.push(`Fixed syntax in ${filePath}`);
        this.log(`Fixed syntax in ${filePath}`, 'SUCCESS');
      } else {
        this.log(`No syntax issues found in ${filePath}`, 'INFO');
      }
    } catch (error) {
      this.log(`Error fixing ${filePath}: ${error.message}`, 'ERROR');
    }
  }

  async run() {
    this.log('🔧 Starting syntax error fixing...');
    
    const filesToFix = [
      'app/about/page.tsx',
      'app/services/automation/page.tsx',
      'app/services/consulting/page.tsx',
      'pages/api/admin/notes-all.ts',
      'pages/api/admin/moderation/flags/index.ts'
    ];
    
    for (const file of filesToFix) {
      const filePath = path.join(this.projectRoot, file);
      this.fixFile(filePath);
    }
    
    this.log(`\n✅ Fixed ${this.fixes.length} files`);
    this.fixes.forEach(fix => this.log(`  - ${fix}`));
  }
}

// Run the fixer
if (require.main === module) {
  const fixer = new SyntaxErrorFixer();
  fixer.run().catch(console.error);
}

module.exports = SyntaxErrorFixer;