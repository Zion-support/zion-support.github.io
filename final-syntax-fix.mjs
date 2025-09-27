#!/usr/bin/env node

import fs from 'fs';

const filesToFix = [
  'pages/index.tsx',
  'pages/enhanced-home.tsx', 
  'pages/faq.tsx',
  'pages/about.tsx',
  'pages/dashboard.tsx'
];

function fixRemainingIssues(content) {
  // Fix malformed array destructuring with extra spaces
  content = content.replace(/const \[\s*([^,\]]+),\s*([^,\]]+)\s*\] = useState/g, 'const [$1, $2] = useState');
  content = content.replace(/const \[\s*([^,\]]+)\s+([^,\]]+)\s*\] = useState/g, 'const [$1, $2] = useState');
  
  // Fix malformed object destructuring with extra spaces
  content = content.replace(/const \{\s*([^,}]+),\s*([^,}]+)\s*\} =/g, 'const { $1, $2 } =');
  content = content.replace(/const \{\s*([^,}]+)\s+([^,}]+)\s*\} =/g, 'const { $1, $2 } =');
  
  // Fix malformed import statements with extra spaces
  content = content.replace(/import \{\s*([^,}]+),\s*([^,}]+)\s*\} from/g, 'import { $1, $2 } from');
  content = content.replace(/import \{\s*([^,}]+)\s+([^,}]+)\s*\} from/g, 'import { $1, $2 } from');
  
  // Fix malformed function calls with extra spaces
  content = content.replace(/const \{([^}]+)\s+\} =/g, 'const { $1 } =');
  
  // Fix malformed useState calls
  content = content.replace(/useState<Set<number>>\(new Set\(\)\)/g, 'useState<Set<number>>(new Set())');
  
  // Fix malformed comments
  content = content.replace(/\/\/ Lazyloadheavy/g, '// Lazy load heavy');
  content = content.replace(/\/\/ constPerformanceTracker/g, '// const PerformanceTracker');
  
  // Fix malformed dynamic imports
  content = content.replace(/dynamic\(\(\) => import\("([^"]+)"\),\{/g, 'dynamic(() => import("$1"), {\n\t\tssr: false');
  
  // Fix malformed JSX comments
  content = content.replace(/\/\/ \s*ssr: false/g, '\t\tssr: false');
  
  // Fix malformed loading components
  content = content.replace(/loading: \(\) => <divclassName="([^"]+)"/g, 'loading: () => <div className="$1"');
  
  // Fix malformed className attributes
  content = content.replace(/className="([^"]*),([^"]*)"/g, 'className="$1$2"');
  
  // Fix malformed object properties
  content = content.replace(/(\w+):\s*"([^"]*),([^"]*)"/g, '$1: "$2$3"');
  
  // Fix malformed template literals
  content = content.replace(/`([^`]*),([^`]*)`/g, '`$1$2`');
  
  // Fix malformed function parameters
  content = content.replace(/\(([^)]*),([^)]*)\) =>/g, '($1, $2) =>');
  
  // Fix malformed array methods
  content = content.replace(/\.map\(\(([^,)]+),([^,)]+)\) =>/g, '.map(($1, $2) =>');
  content = content.replace(/\.forEach\(\(([^,)]+),([^,)]+)\) =>/g, '.forEach(($1, $2) =>');
  
  // Fix malformed destructuring in function parameters
  content = content.replace(/const (\w+) = \(([^)]*),([^)]*)\) =>/g, 'const $1 = ($2, $3) =>');
  
  // Fix malformed object destructuring
  content = content.replace(/const \{([^}]*),([^}]*)\} =/g, 'const { $1, $2 } =');
  
  // Fix malformed array destructuring
  content = content.replace(/const \[([^\]]*),([^\]]*)\] =/g, 'const [ $1, $2 ] =');
  
  // Fix malformed imports (clean up any remaining issues)
  content = content.replace(/import = \{/g, 'import {');
  content = content.replace(/import = /g, 'import ');
  
  // Fix malformed export statements
  content = content.replace(/export default function (\w+)\(\): JSX\.Element = \{/g, 'export default function $1(): JSX.Element {');
  
  // Fix malformed function declarations
  content = content.replace(/const (\w+) = \(\) => \{/g, 'const $1 = () => {');
  
  // Fix malformed object literals
  content = content.replace(/\{([^}]*),([^}]*)\}/g, '{ $1, $2 }');
  
  // Fix malformed array literals
  content = content.replace(/\[([^\]]*),([^\]]*)\]/g, '[ $1, $2 ]');
  
  // Fix malformed string concatenation
  content = content.replace(/"([^"]*),([^"]*)"/g, '"$1$2"');
  
  // Fix malformed comments
  content = content.replace(/\/\/([^/]*),([^/]*)\//g, '// $1$2');
  
  // Fix malformed JSX attributes
  content = content.replace(/className="([^"]*),([^"]*)"/g, 'className="$1$2"');
  content = content.replace(/href="([^"]*),([^"]*)"/g, 'href="$1$2"');
  content = content.replace(/src="([^"]*),([^"]*)"/g, 'src="$1$2"');
  
  // Fix malformed conditional statements
  content = content.replace(/if \(([^)]*),([^)]*)\)/g, 'if ($1 && $2)');
  content = content.replace(/if \(([^)]*),([^)]*)\)/g, 'if ($1 || $2)');
  
  // Fix malformed ternary operators
  content = content.replace(/\? ([^:]*),([^:]*):/g, '? $1 : $2 :');
  
  // Fix malformed logical operators
  content = content.replace(/(\w+) && (\w+)/g, '$1 && $2');
  content = content.replace(/(\w+) \|\| (\w+)/g, '$1 || $2');
  
  // Fix malformed assignment operators
  content = content.replace(/(\w+) = (\w+),(\w+)/g, '$1 = $2, $3');
  
  // Fix malformed comparison operators
  content = content.replace(/(\w+) === (\w+),(\w+)/g, '$1 === $2 && $3');
  content = content.replace(/(\w+) !== (\w+),(\w+)/g, '$1 !== $2 && $3');
  
  // Fix malformed function calls with multiple parameters
  content = content.replace(/(\w+)\(([^)]*),([^)]*)\)/g, '$1($2, $3)');
  
  // Fix malformed object method calls
  content = content.replace(/(\w+)\.(\w+)\(([^)]*),([^)]*)\)/g, '$1.$2($3, $4)');
  
  // Fix malformed array access
  content = content.replace(/(\w+)\[([^\]]*),([^\]]*)\]/g, '$1[$2, $3]');
  
  // Fix malformed property access
  content = content.replace(/(\w+)\.(\w+),(\w+)/g, '$1.$2, $3');
  
  return content;
}

async function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixRemainingIssues(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`✅ Fixed syntax errors in ${filePath}`);
    } else {
      console.log(`ℹ️  No changes needed for ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
  }
}

async function main() {
  console.log('🔧 Final syntax error fixing...\n');
  
  for (const file of filesToFix) {
    if (fs.existsSync(file)) {
      await fixFile(file);
    } else {
      console.log(`⚠️  File not found: ${file}`);
    }
  }
  
  console.log('\n✨ Final syntax fixing completed!');
}

main().catch(console.error);