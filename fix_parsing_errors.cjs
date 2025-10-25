const fs = require('fs');
const path = require('path');

console.log('Starting comprehensive parsing error fix...');

// Function to fix parsing errors in a file
function fixParsingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common parsing errors
    const fixes = [
      // Fix missing imports at the top
      {
        pattern: /^import\s+Head\s+from\s+'next\/head';/m,
        replacement: "import Head from 'next/head';\nimport Link from 'next/link';\nimport { ArrowRight, CheckCircle, Star, ImageIcon, Upload, Zap, Download, Clock, X, Circle } from 'lucide-react';"
      },
      // Fix expression expected errors
      {
        pattern: /^import\s+Link\s+from\s+'next\/link';/m,
        replacement: "import Link from 'next/link';\nimport { ArrowRight, CheckCircle, Star, ImageIcon, Upload, Zap, Download, Clock, X, Circle } from 'lucide-react';"
      },
      // Fix missing closing tags
      {
        pattern: /<div([^>]*)>\s*$/gm,
        replacement: '<div$1></div>'
      },
      {
        pattern: /<section([^>]*)>\s*$/gm,
        replacement: '<section$1></section>'
      },
      {
        pattern: /<main([^>]*)>\s*$/gm,
        replacement: '<main$1></main>'
      },
      // Fix JSX structure
      {
        pattern: /<>\s*$/gm,
        replacement: '<div>'
      },
      {
        pattern: /<\/>\s*$/gm,
        replacement: '</div>'
      },
      // Fix function declarations
      {
        pattern: /function\s+(\d+)/g,
        replacement: 'function function$1'
      },
      {
        pattern: /const\s+(\d+)/g,
        replacement: 'const const$1'
      },
      // Fix typeof issues
      {
        pattern: /typeof\s+(\w+)/g,
        replacement: 'typeof $1'
      },
      // Fix missing parentheses
      {
        pattern: /\)\s*$/gm,
        replacement: '))'
      },
      // Fix unexpected keywords
      {
        pattern: /^\s*[a-zA-Z_$][a-zA-Z0-9_$]*\s*$/gm,
        replacement: (match) => {
          if (match.trim() && !match.includes('=') && !match.includes('(') && !match.includes('{')) {
            return `const ${match.trim()} = null;`;
          }
          return match;
        }
      }
    ];
    
    for (const fix of fixes) {
      if (fix.pattern.test(content)) {
        content = content.replace(fix.pattern, fix.replacement);
        modified = true;
      }
    }
    
    // Add missing imports if they don't exist
    if (content.includes('<Head') && !content.includes("import Head from 'next/head'")) {
      content = "import Head from 'next/head';\n" + content;
      modified = true;
    }
    
    if (content.includes('<Link') && !content.includes("import Link from 'next/link'")) {
      content = "import Link from 'next/link';\n" + content;
      modified = true;
    }
    
    if ((content.includes('<ArrowRight') || content.includes('<CheckCircle') || content.includes('<Star')) && !content.includes("from 'lucide-react'")) {
      content = "import { ArrowRight, CheckCircle, Star, ImageIcon, Upload, Zap, Download, Clock, X, Circle } from 'lucide-react';\n" + content;
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed parsing errors in: ${filePath}`);
    }
  } catch (error) {
    console.log(`Error fixing ${filePath}: ${error.message}`);
  }
}

// Function to recursively find and fix all files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules' && file !== 'components-disabled') {
      fixAllFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      fixParsingErrors(filePath);
    }
  }
}

// Start fixing
console.log('Scanning for files with parsing errors...');
fixAllFiles('./app');

console.log('Parsing error fix completed!');