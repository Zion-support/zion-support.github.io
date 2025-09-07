#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class AllSyntaxErrorFixer {
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
      
      // Fix specific patterns
      content = content.replace(/,\s*;/g, ';'); // Fix comma followed by semicolon
      content = content.replace(/,\s*$/gm, ''); // Remove trailing commas
      content = content.replace(/\$2/g, '{ error: "Invalid request" }'); // Replace $2 placeholders
      content = content.replace(/usingPlaceholder/g, 'false'); // Replace usingPlaceholder
      
      // Fix missing function declarations for API files
      if (filePath.includes('/api/') && !content.includes('export default function')) {
        if (content.includes('return res.status')) {
          content = `import type { NextApiRequest, NextApiResponse } from 'next';\n\nexport default function handler(req: NextApiRequest, res: NextApiResponse) {\n${content}\n}`;
        }
      }
      
      // Fix missing imports
      if (filePath.includes('/api/') && content.includes('NextApiRequest') && !content.includes("import type { NextApiRequest")) {
        content = `import type { NextApiRequest, NextApiResponse } from 'next';\n\n${content}`;
      }
      
      // Ensure proper closing braces
      const openBraces = (content.match(/\{/g) || []).length;
      const closeBraces = (content.match(/\}/g) || []).length;
      
      if (openBraces > closeBraces) {
        const missingBraces = openBraces - closeBraces;
        content += '\n' + '}'.repeat(missingBraces) + '\n';
        this.log(`Added ${missingBraces} missing closing braces to ${filePath}`);
      }
      
      // Fix specific file issues
      if (filePath.includes('about/page.tsx')) {
        // Check for regex issues
        content = content.replace(/'/g, "'"); // Normalize quotes
      }
      
      if (filePath.includes('tokens/issue.ts') || filePath.includes('tokens/revoke.ts')) {
        // Fix missing semicolons and syntax
        content = content.replace(/,\s*$/gm, ';');
        content = content.replace(/if \(!userId \|\| typeof amount !== "number"\) return res\.status\(400\)\.json\(\$2\);/g, 
          'if (!userId || typeof amount !== "number") return res.status(400).json({ error: "Invalid request" });');
      }
      
      if (filePath.includes('tokens/config.ts')) {
        // Add missing closing brace
        if (!content.includes('}')) {
          content += '\n}';
        }
      }
      
      if (filePath.includes('pitch/export.ts')) {
        // Fix missing function declaration
        if (!content.includes('export default function')) {
          content = `import type { NextApiRequest, NextApiResponse } from 'next';\n\nexport default function handler(req: NextApiRequest, res: NextApiResponse) {\n${content}\n}`;
        }
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
    this.log('🔧 Starting comprehensive syntax error fixing...');
    
    const filesToFix = [
      'app/about/page.tsx',
      'pages/api/admin/pitch/export.ts',
      'pages/api/admin/tokens/config.ts',
      'pages/api/admin/tokens/issue.ts',
      'pages/api/admin/tokens/revoke.ts'
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
  const fixer = new AllSyntaxErrorFixer();
  fixer.run().catch(console.error);
}

module.exports = AllSyntaxErrorFixer;