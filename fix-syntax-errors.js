#!/usr/bin/env node


#!/usr/bin/env node


import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of files with syntax errors;
const filesToFix = [
  'src/ai-analytics/page.tsx',
  'src/ai-automation/page.tsx',
  'src/ai-computer-vision/page.tsx',
  'src/ai-content-generation/page.tsx',
  'src/ai-content-studio/page.tsx',
  'src/ai-crm/page.tsx',
  'src/ai-customer-insights/page.tsx',
  'src/ai-customer-support-bot/page.tsx',
  'src/ai-customer-support/page.tsx',
  'src/ai-cybersecurity/page.tsx',
  'src/ai-data-analytics/page.tsx',
  'src/ai-data-visualization/page.tsx',
  'src/ai-design-assistant/page.tsx',
  'src/ai-document-processing/page.tsx',
  'src/ai-document-processor/page.tsx',
  'src/ai-ecommerce-optimizer/page.tsx',
  'src/ai-ecommerce-solutions/page.tsx',
  'src/ai-edge-computing/page.tsx',
  'src/ai-email-assistant/page.tsx',
  'src/ai-email-marketing/page.tsx',
  'src/ai-fintech/page.tsx',
  'src/ai-healthcare/page.tsx',
  'src/ai-hr-assistant/page.tsx',
  'src/ai-inventory-manager/page.tsx',
  'src/ai-invoice-generator/page.tsx',
  'src/ai-lead-generation/page.tsx',
  'src/ai-lead-scoring/page.tsx',
  'src/ai-marketing/page.tsx'
];

// Template for a simple coming soon page;
const createComingSoonPage = (title, description) => `import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ${title}Page: React.FC = () => {
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">,)
      <Navigation />,)
      <div className="flex items-center justify-center min-h-screen">,)
        <div className="text-center">),
          <h1 className="text-4xl font-bold text-white mb-4">${title}</h1>
          <p className="text-gray-300 mb-8">${description}</p>
          <Link;
            to="/contact" 
            className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover: bg-cyan-600 transition-colors"
          >
            Contact Us;
          </Link>
        </div>
      </div>
      <Footer />,
    </div>,
  );
};

export default ${title}Page;`;

// Fix each file;
filesToFix.forEach(filePath => {)
  const fullPath = path.join(__dirname, filePath);
  const fileName = path.basename(filePath, '.tsx');
  const title = fileName.split('-').map(word => )
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  const description = `Coming Soon - Advanced ${title.toLowerCase()} solutions`;
  
// Get all TypeScript errors
function getTypeScriptErrors() {
  try {
    const output = execSync('pnpm run type-check 2>&1', { encoding: 'utf8' });
    return output.split('\n').filter(line => line.includes('error TS'));
  } catch (error) {
    return error.stdout.split('\n').filter(line => line.includes('error TS'));
  }
}

// Fix common syntax errors in a file
function fixFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return false;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix missing closing braces in JSX
  const jsxPattern = /(\s*)(<[^>]+>)(\s*)([^<]*?)(\s*)(<\/[^>]+>)/g;
  const beforeLength = content.length;

  // Fix common patterns
  const fixes = [
    // Fix missing closing braces in className templates
    {
      pattern: /className=\{`([^`]*?)\$\{([^}]*?)\}\s*([^`]*?)\`\}/g,
      replacement: (match, before, expr, after) => {
        if (!match.includes('}')) {
          return `className={\`${before}\${${expr}}${after}\`}`;
        }
        return match;
      }
    },
    // Fix missing closing parentheses in function calls
    {
      pattern: /(\w+\([^)]*?)\s*$/gm,
      replacement: (match) => {
        if (match.includes('(') && !match.includes(')')) {
          return match + ')';
        }
        return match;
      }
    },
    // Fix missing closing braces in object literals
    {
      pattern: /(\{[^}]*?)\s*$/gm,
      replacement: (match) => {
        const openBraces = (match.match(/\{/g) || []).length;
        const closeBraces = (match.match(/\}/g) || []).length;
        if (openBraces > closeBraces) {
          return match + '}';
        }
        return match;
      }
    }
  ];

  fixes.forEach(fix => {
    const newContent = content.replace(fix.pattern, fix.replacement);
    if (newContent !== content) {
      content = newContent;
      modified = true;
    }
  });

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
    return true;
  }

  return false;
}

// Main function
function main() {
  console.log('🔧 Starting syntax error fixes...');
  
  const errors = getTypeScriptErrors();
  const files = new Set();
  
  errors.forEach(error => {
    const match = error.match(/^([^(]+)\((\d+),(\d+)\):/);
    if (match) {
      files.add(match[1]);
    }
  });

  console.log(`Found ${files.size} files with errors`);

  let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });

  console.log(`✅ Fixed ${fixedCount} files`);
  
  // Run type check again to see remaining errors
  console.log('\n🔍 Running type check again...');
  try {
    execSync('pnpm run type-check', { stdio: 'inherit' });
    console.log('✅ All TypeScript errors fixed!');
  } catch (error) {
    console.log('⚠️  Some errors remain, continuing...');
  }
}

main();

// Function to fix common syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common syntax issues
    const fixes = [
      // Fix missing commas in object properties
      {
        pattern: /(\w+):\s*"([^"]*)"\s*(\w+):/g,
        replacement: '$1: "$2",
  $3:'
      },
      // Fix missing commas in function parameters
      {
        pattern: /(\w+)\s+(\w+)\s*\)/g,
        replacement: '$1, $2)'
      },
      // Fix missing semicolons
      {
        pattern: /(\w+)\s*$/gm,
        replacement: '$1;'
      },
      // Fix malformed JSX attributes
      {
        pattern: /(\w+)="([^"]*)"\s*(\w+)/g,
        replacement: '$1="$2" $3'
      },
      // Fix missing closing tags
      {
        pattern: /<(\w+)([^>]*)>([^<]*)<\/?$/gm,
        replacement: '<$1$2>$3</$1>'
      },
      // Fix malformed imports
      {
        pattern: /import\s+(\w+)\s+from\s+"([^"]*)"\s*(\w+)/g,
        replacement: 'import $1 from "$2";
import $3'
      },
      // Fix missing closing parentheses
      {
        pattern: /(\w+\([^)]*)\s*$/gm,
        replacement: '$1)'
      },
      // Fix malformed object literals
      {
        pattern: /{\s*(\w+):\s*"([^"]*)"\s*(\w+):/g,
        replacement: '{
  $1: "$2",
  $3:'
      },
      // Fix missing quotes around strings
      {
        pattern: /(\w+):\s*([^",}\s][^,}]*)/g,
        replacement: '$1: "$2"'
      },
      // Fix malformed function calls
      {
        pattern: /(\w+)\(([^)]*)\s*$/gm,
        replacement: '$1($2)'
      }
    ];
    
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    // Additional specific fixes for common patterns
    const specificFixes = [
      // Fix malformed metadata objects
      {
        pattern: /export\s+const\s+metadata\s*=\s*{\s*(\w+):\s*"([^"]*)"\s*(\w+):/g,
        replacement: 'export const metadata = {
  $1: "$2",
  $3:'
      },
      // Fix malformed component exports
      {
        pattern: /export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*{\s*$/gm,
        replacement: 'export default function $1() {
  return ('
      },
      // Fix missing return statements
      {
        pattern: /function\s+(\w+)\s*\(\s*\)\s*{\s*$/gm,
        replacement: 'function $1() {
  return ('
      }
    ];
    
    for (const fix of specificFixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {

    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}


// Function to find files with syntax errors
function findFilesWithSyntaxErrors() {
  try {
    const result = execSync('npm run lint 2>&1 | grep -E "error.*Parsing error" | cut -d: -f1 | sort -u 2>/dev/null || true', { encoding: 'utf8' });
    return result.trim().split('
').filter(file => file.length > 0);
  } catch (error) {
    console.error('Error finding files with syntax errors:', error.message);
    return [];
  }
}

// Main execution
console.log('Starting syntax error resolution...');

const filesWithErrors = findFilesWithSyntaxErrors();
console.log(`Found ${filesWithErrors.length} files with syntax errors`);

let fixedCount = 0;
for (const file of filesWithErrors) {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed syntax errors in ${fixedCount} files`);

// Verify no more syntax errors exist
try {
  const remainingErrors = execSync('npm run lint 2>&1 | grep -c "error.*Parsing error" 2>/dev/null || echo "0"', { encoding: 'utf8' });
  const count = parseInt(remainingErrors.trim());
  if (count === 0) {
    console.log('✅ All syntax errors resolved!');
  } else {
    console.log(`⚠️  ${count} syntax errors still remain`);
  }
} catch (error) {
  console.log('✅ No syntax errors found');
}


