#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class AdvancedSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = 0;
    this.totalErrors = 0;
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  async fixAllSyntaxErrors() {
    this.log('🔧 Starting advanced syntax error fixing...');
    
    try {
      // Get all TypeScript and JavaScript files
      const files = this.getAllCodeFiles();
      this.log(`Found ${files.length} files to check`);
      
      for (const file of files) {
        await this.fixFileSyntax(file);
      }
      
      this.log(`✅ Fixed syntax errors in ${this.fixedFiles} files`);
      this.log(`📊 Total errors fixed: ${this.totalErrors}`);
      
    } catch (error) {
      this.log(`❌ Error during syntax fixing: ${error.message}`);
      throw error;
    }
  }

  getAllCodeFiles() {
    const files = [];
    
    const scanDirectory = (dir) => {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip node_modules and other irrelevant directories
          if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
            scanDirectory(fullPath);
          }
        } else if (this.isCodeFile(item)) {
          files.push(fullPath);
        }
      }
    };
    
    scanDirectory(this.projectRoot);
    return files;
  }

  isCodeFile(filename) {
    const ext = path.extname(filename);
    return ['.ts', '.tsx', '.js', '.jsx', '.cjs', '.mjs'].includes(ext);
  }

  async fixFileSyntax(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const fixedContent = this.fixSyntaxErrors(content, filePath);
      
      if (content !== fixedContent) {
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        this.fixedFiles++;
        this.log(`✅ Fixed syntax errors in ${path.relative(this.projectRoot, filePath)}`);
      }
    } catch (error) {
      this.log(`⚠️  Could not fix ${path.relative(this.projectRoot, filePath)}: ${error.message}`);
    }
  }

  fixSyntaxErrors(content, filePath) {
    let fixed = content;
    let errorCount = 0;

    // Fix object property semicolons to commas
    fixed = fixed.replace(/(\w+):\s*([^,;}\n]+);\s*(\w+):/g, '$1: $2,\n    $3:');
    fixed = fixed.replace(/(\w+):\s*([^,;}\n]+);\s*}/g, '$1: $2\n  }');
    
    // Fix array element semicolons
    fixed = fixed.replace(/\[\s*([^[\]]+);\s*([^[\]]+);\s*\]/g, '[\n    $1,\n    $2\n  ]');
    
    // Fix function parameter semicolons
    fixed = fixed.replace(/\(\s*([^,)]+);\s*([^,)]+);\s*([^,)]+);\s*\)/g, '($1, $2, $3)');
    fixed = fixed.replace(/\(\s*([^,)]+);\s*([^,)]+);\s*\)/g, '($1, $2)');
    
    // Fix object literal semicolons in function calls
    fixed = fixed.replace(/\{\s*([^,;{}]+);\s*([^,;{}]+);\s*\}/g, '{\n    $1,\n    $2\n  }');
    
    // Fix specific patterns
    fixed = fixed.replace(/id:\s*'([^']+)';\s*title:/g, 'id: \'$1\',\n      title:');
    fixed = fixed.replace(/title:\s*'([^']+)';\s*description:/g, 'title: \'$1\',\n      description:');
    fixed = fixed.replace(/description:\s*'([^']+)';\s*path:/g, 'description: \'$1\',\n      path:');
    
    // Fix array literals
    fixed = fixed.replace(/\[\s*([^[\]]+);\s*([^[\]]+);\s*\]/g, '[\n    $1,\n    $2\n  ]');
    
    // Fix specific API patterns
    fixed = fixed.replace(/activeUsers30d:\s*(\d+);/g, 'activeUsers30d: $1,');
    fixed = fixed.replace(/gmv:\s*(\d+);/g, 'gmv: $1,');
    fixed = fixed.replace(/mrr:\s*(\d+);/g, 'mrr: $1,');
    fixed = fixed.replace(/yoyGrowth:\s*([\d.]+);/g, 'yoyGrowth: $1,');
    
    // Fix string literals in objects
    fixed = fixed.replace(/title:\s*'([^']+)';\s*content:/g, 'title: \'$1\',\n    content:');
    
    // Fix long string concatenations
    fixed = fixed.replace(/'([^']+)';\s*'([^']+)'\]/g, '\'$1\',\n    \'$2\'\n  ]');
    
    // Fix object property declarations
    fixed = fixed.replace(/(\w+):\s*([^,;}\n]+);\s*(\w+):/g, '$1: $2,\n    $3:');
    
    // Fix array declarations
    fixed = fixed.replace(/(\w+):\s*(\w+)\[\]\s*=\s*\[\],/g, '$1: $2[] = [];');
    
    // Fix function declarations
    fixed = fixed.replace(/(\w+):\s*(\w+)\[\]\s*=\s*\[\],\s*export/g, '$1: $2[] = [];\n\nexport');
    
    // Fix object property semicolons in complex objects
    fixed = fixed.replace(/(\w+):\s*\{([^}]+)\};\s*(\w+):/g, '$1: {\n      $2\n    },\n    $3:');
    
    // Fix specific patterns in API docs
    fixed = fixed.replace(/required:\s*\[([^\]]+)\]\s*};/g, 'required: [$1]\n    };');
    
    // Fix method declarations
    fixed = fixed.replace(/(\w+):\s*'([^']+)';\s*(\w+):/g, '$1: \'$2\',\n    $3:');
    
    // Fix response body schema
    fixed = fixed.replace(/responseBodySchema:\s*\{([^}]+)\};\s*(\w+):/g, 'responseBodySchema: {\n      $1\n    },\n    $3:');
    
    // Fix samples array
    fixed = fixed.replace(/samples:\s*\[([^\]]+)\];/g, 'samples: [
      \n      $1\n    
    ];');
    
    // Fix curl examples
    fixed = fixed.replace(/code:\s*`([^`]+)`\s*};/g, 'code: `$1`\n      };');
    
    // Fix ATS actions
    fixed = fixed.replace(/async\s+(\w+)\([^)]+\)\s*\{\s*return\s+simulateAction\([^)]+\)\s*\};/g, 'async $1($2) {\n    return simulateAction($3);\n  },');
    
    // Fix forEach declarations
    fixed = fixed.replace(/(\w+):\s*(\w+)\[\]\s*=\s*\[\],\s*(\w+)\.forEach/g, '$1: $2[] = [];\n    $3.forEach');
    
    // Fix duplicate variable declarations
    fixed = fixed.replace(/(\w+):\s*(\w+)\[\]\s*=\s*\[\],\s*(\w+):\s*(\w+)\[\]\s*=\s*\[\],/g, '$1: $2[] = [];\n    $3: $4[] = [];');
    
    // Fix role content patterns
    fixed = fixed.replace(/role:\s*'([^']+)',\s*content:\s*'([^']+)';\s*(\w+):/g, 'role: \'$1\',\n        content: \'$2\'\n      },\n      { $3:');
    
    // Fix temperature patterns
    fixed = fixed.replace(/temperature:\s*([\d.]+)\}\s*\);/g, 'temperature: $1\n      });');
    
    // Fix stage value patterns
    fixed = fixed.replace(/stage:\s*'([^']+)',\s*value:\s*(\d+)\s*};/g, 'stage: \'$1\', value: $2\n    };');
    
    // Fix funnel array
    fixed = fixed.replace(/funnel:\s*\[([^\]]+)\];/g, 'funnel: [
      \n      $1\n    
    ];');
    
    // Count errors fixed
    const originalSemicolons = (content.match(/;/g) || []).length;
    const fixedSemicolons = (fixed.match(/;/g) || []).length;
    errorCount = originalSemicolons - fixedSemicolons;
    
    this.totalErrors += errorCount;
    
    return fixed;
  }
}

// Run the fixer
const fixer = new AdvancedSyntaxFixer();
fixer.fixAllSyntaxErrors().catch(console.error);
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Advanced Syntax Fixer');

// Fix specific syntax issues
function fixAdvancedSyntaxIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;

    // Fix HTML entity issues
    content = content.replace(/&amp;apos;/g, "'");
    content = content.replace(/&amp;quot;/g, '"');
    content = content.replace(/&amp;lt;/g, '<');
    content = content.replace(/&amp;gt;/g, '>');
    content = content.replace(/&apos;/g, "'");
    content = content.replace(/&quot;/g, '"');
    content = content.replace(/&lt;/g, '<');
    content = content.replace(/&gt;/g, '>');

    // Fix import statements
    content = content.replace(
      /import React from 'react',/g,
      "import React from 'react';"
    );
    content = content.replace(
      /import React from "react",/g,
      'import React from "react";'
    );
    content = content.replace(
      /import { JSX } from 'react',/g,
      "import { JSX } from 'react';"
    );

    // Fix export statements
    content = content.replace(
      /export default function (\w+)\(\):JSX\.Element \{/g,
      'export default function $1():JSX.Element {'
    );
    content = content.replace(
      /export interface (\w+) \{;/g,
      'export interface $1 {'
    );
    content = content.replace(
      /export const (\w+):(\w+)\[\] = \[;/g,
      'export const $1:$2[] = [];'
    );

    // Fix JSX syntax
    content = content.replace(/&lt;main&gt;/g, '<main>');
    content = content.replace(/&lt;\/main&gt;/g, '</main>');
    content = content.replace(/&lt;div&gt;/g, '<div>');
    content = content.replace(/&lt;\/div&gt;/g, '</div>');

    // Fix object syntax issues
    content = content.replace(/\{\s*,/g, '{');
    content = content.replace(/,\s*\}/g, '}');
    content = content.replace(/,\s*,/g, ',');

    // Fix array syntax issues
    content = content.replace(/\[\s*,/g, '[');
    content = content.replace(/,\s*\]/g, ']');

    // Fix function parameter issues
    content = content.replace(/\(\s*,/g, '(');
    content = content.replace(/,\s*\)/g, ')');

    // Fix semicolon issues
    content = content.replace(/;\s*,/g, ';');
    content = content.replace(/,\s*;/g, ';');

    // Fix React component syntax
    content = content.replace(
      /const (\w+) = \(\) => \{/g,
      'const $1 = () => {'
    );
    content = content.replace(/export default (\w+),/g, 'export default $1;');

    // Fix TypeScript interface syntax
    content = content.replace(/interface (\w+) \{;/g, 'interface $1 {');
    content = content.replace(/type (\w+) = \{;/g, 'type $1 = {');

    // Fix JSX syntax
    content = content.replace(/<(\w+)\s*,/g, '<$1');
    content = content.replace(/,\s*>/g, '>');

    // Fix performance API issues
    if (content.includes('performance.')) {
      content = content.replace(/performance\./g, 'window.performance.');
    }

    // Fix React hooks issues
    content = content.replace(/useEffect\(\(\) => \{/g, 'useEffect(() => {');

    // Fix console statements
    content = content.replace(/console\.log\(/g, '// console.log(');

    // Fix specific parsing errors
    content = content.replace(
      /import React from 'react',/g,
      "import React from 'react';"
    );
    content = content.replace(
      /import { JSX } from 'react',/g,
      "import { JSX } from 'react';"
    );
    content = content.replace(
      /export default function App\(\):JSX\.Element \{/g,
      'export default function App():JSX.Element {'
    );

    // Fix vite config issues
    if (filePath.includes('vite.config.ts')) {
      content = content.replace(
        /import { defineConfig,splitVendorChunkPlugin } from 'vite', import react from '@vitejs\/plugin-react', import path from 'nod:e:path', export default defineConfig\(\{/g,
        `import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'nod:e:path';

export default defineConfig({`
      );

      content = content.replace(
        /plugin:s:\[ react\(\{ includ:e:'\*\*\/\*\.\{jsx,js,ts,tsx\}',fastRefres:h:true,jsxRuntim:e:'automatic'\}\),splitVendorChunkPlugin\(\) \]/g,
        `plugin:s:[
    react({
      includ:e:'**/*.{jsx,js,ts,tsx}',
      fastRefres:h:true,
      jsxRuntim:e:'automatic'
    }),
    splitVendorChunkPlugin();
  ]`
      );
    }

    if (fixed || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath} `, error.message);
    return false;
  }
}

// Get all TypeScript/JavaScript files
function getAllFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (
      stat.isDirectory() &&
      !item.startsWith('.') &&
      item !== 'node_modules'
    ) {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }

  return files;
}

// Main execution
try {
  const files = getAllFiles('/workspace');
  let fixedCount = 0;

  console.log(`Found ${files.length} files to check`);

  for (const file of files) {
    if (fixAdvancedSyntaxIssues(file)) {
      fixedCount++;
      console.log(`✅ Fixed: ${file}`);
    }
  }

  console.log(`\n🎯 Fixed ${fixedCount} files`);
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}
}
