const fs = require('fs');
const path = require('path');

// Function to fix comprehensive syntax errors
function fixComprehensiveSyntaxErrors(content) {
  // Fix function declarations with missing spaces
  content = content.replace(/function(\w+)\(/g, 'function $1(');
  content = content.replace(/export default function(\w+)\(/g, 'export default function $1(');
  content = content.replace(/const(\w+) =/g, 'const $1 =');
  content = content.replace(/let(\w+) =/g, 'let $1 =');
  content = content.replace(/var(\w+) =/g, 'var $1 =');
  
  // Fix React.memo function declarations
  content = content.replace(/React\.memo\(function(\w+)/g, 'React.memo(function $1');
  
  // Fix JSX elements with missing spaces
  content = content.replace(/<(\w+)(\w+)/g, '<$1 $2');
  content = content.replace(/<(\w+)lang=/g, '<$1 lang=');
  content = content.replace(/<(\w+)className=/g, '<$1 className=');
  content = content.replace(/<(\w+)id=/g, '<$1 id=');
  content = content.replace(/<(\w+)src=/g, '<$1 src=');
  content = content.replace(/<(\w+)alt=/g, '<$1 alt=');
  content = content.replace(/<(\w+)href=/g, '<$1 href=');
  content = content.replace(/<(\w+)onClick=/g, '<$1 onClick=');
  content = content.replace(/<(\w+)onChange=/g, '<$1 onChange=');
  content = content.replace(/<(\w+)onSubmit=/g, '<$1 onSubmit=');
  content = content.replace(/<(\w+)type=/g, '<$1 type=');
  content = content.replace(/<(\w+)value=/g, '<$1 value=');
  content = content.replace(/<(\w+)placeholder=/g, '<$1 placeholder=');
  content = content.replace(/<(\w+)disabled=/g, '<$1 disabled=');
  content = content.replace(/<(\w+)required=/g, '<$1 required=');
  
  // Fix array destructuring
  content = content.replace(/const\[/g, 'const [');
  content = content.replace(/let\[/g, 'let [');
  content = content.replace(/var\[/g, 'var [');
  
  // Fix object destructuring
  content = content.replace(/const\{/g, 'const {');
  content = content.replace(/let\{/g, 'let {');
  content = content.replace(/var\{/g, 'var {');
  
  // Fix return statements
  content = content.replace(/return\(/g, 'return (');
  
  // Fix useEffect and other hooks
  content = content.replace(/useEffect\(/g, 'useEffect(');
  content = content.replace(/useState\(/g, 'useState(');
  content = content.replace(/useCallback\(/g, 'useCallback(');
  content = content.replace(/useMemo\(/g, 'useMemo(');
  content = content.replace(/useRef\(/g, 'useRef(');
  
  // Fix JSX closing tags
  content = content.replace(/<\/(\w+)>/g, '</$1>');
  
  // Fix className attributes
  content = content.replace(/className="([^"]*)\s+([^"]*)"/g, (match, part1, part2) => {
    const cleanClass = part1.replace(/\s+/g, ' ').trim() + ' ' + part2.replace(/\s+/g, ' ').trim();
    return `className="${cleanClass}"`;
  });
  
  // Fix string concatenation issues
  content = content.replace(/'([^']*)\s+([^']*)'/g, (match, part1, part2) => {
    if (part1.length > 0 && part2.length > 0) {
      return `'${part1}${part2}'`;
    }
    return match;
  });
  
  // Fix template literals
  content = content.replace(/`([^`]*)\s+([^`]*)`/g, (match, part1, part2) => {
    if (part1.length > 0 && part2.length > 0) {
      return `\`${part1}${part2}\``;
    }
    return match;
  });
  
  // Fix object property access
  content = content.replace(/\.(\w+)(\w+)/g, '.$1.$2');
  
  // Fix method calls
  content = content.replace(/(\w+)\.(\w+)\(/g, '$1.$2(');
  
  // Fix arrow functions
  content = content.replace(/=>\s*{/g, ' => {');
  content = content.replace(/=>\s*\(/g, ' => (');
  
  // Fix TypeScript type annotations
  content = content.replace(/:(\w+)/g, ': $1');
  
  // Fix missing spaces in operators
  content = content.replace(/=(\w+)/g, '= $1');
  content = content.replace(/(\w+)=/g, '$1 =');
  content = content.replace(/\+(\w+)/g, '+ $1');
  content = content.replace(/(\w+)\+/g, '$1 +');
  content = content.replace(/-(\w+)/g, '- $1');
  content = content.replace(/(\w+)-/g, '$1 -');
  content = content.replace(/\*(\w+)/g, '* $1');
  content = content.replace(/(\w+)\*/g, '$1 *');
  content = content.replace(/\/(\w+)/g, '/ $1');
  content = content.replace(/(\w+)\//g, '$1 /');
  
  // Fix comparison operators
  content = content.replace(/==(\w+)/g, '== $1');
  content = content.replace(/(\w+)==/g, '$1 ==');
  content = content.replace(/!=(\w+)/g, '!= $1');
  content = content.replace(/(\w+)!=/g, '$1 !=');
  content = content.replace(/<=(\w+)/g, '<= $1');
  content = content.replace(/(\w+)<=/g, '$1 <=');
  content = content.replace(/>=(\w+)/g, '>= $1');
  content = content.replace(/(\w+)>=/g, '$1 >=');
  
  // Fix logical operators
  content = content.replace(/&&(\w+)/g, '&& $1');
  content = content.replace(/(\w+)&&/g, '$1 &&');
  content = content.replace(/\|\|(\w+)/g, '|| $1');
  content = content.replace(/(\w+)\|\|/g, '$1 ||');
  
  // Fix ternary operators
  content = content.replace(/\?(\w+)/g, '? $1');
  content = content.replace(/(\w+)\?/g, '$1 ?');
  content = content.replace(/:(\w+)/g, ': $1');
  
  // Fix function parameters
  content = content.replace(/\((\w+)(\w+)/g, '($1, $2');
  
  // Fix object literals
  content = content.replace(/\{(\w+)(\w+)/g, '{$1: $2');
  
  // Fix array literals
  content = content.replace(/\[(\w+)(\w+)/g, '[$1, $2');
  
  // Fix comments
  content = content.replace(/\/\/(\w+)/g, '// $1');
  content = content.replace(/\/\*(\w+)/g, '/* $1');
  
  // Fix import statements
  content = content.replace(/import\s+(\w+)\s+from/g, 'import $1 from');
  content = content.replace(/import\s+\{([^}]+)\}\s+from/g, (match, imports) => {
    const cleanImports = imports.replace(/\s+/g, ' ').trim();
    return `import { ${cleanImports} } from`;
  });
  
  // Fix export statements
  content = content.replace(/export\s+(\w+)/g, 'export $1');
  content = content.replace(/export\s+default\s+(\w+)/g, 'export default $1');
  
  // Fix JSX attributes
  content = content.replace(/(\w+)=/g, '$1 =');
  content = content.replace(/=(\w+)/g, '= $1');
  
  // Fix missing semicolons
  content = content.replace(/(\w+)\s*$/gm, '$1;');
  
  // Fix missing commas in objects
  content = content.replace(/(\w+):\s*'([^']+)'\s*(\w+):/g, '$1: \'$2\',\n    $3:');
  content = content.replace(/(\w+):\s*"([^"]+)"\s*(\w+):/g, '$1: "$2",\n    $3:');
  
  // Fix missing commas in arrays
  content = content.replace(/(\w+)\s*(\w+)\s*\[/g, '$1, $2[');
  
  // Fix missing commas in function parameters
  content = content.replace(/(\w+)\s*(\w+)\s*\)/g, '$1, $2)');
  
  // Fix missing commas in destructuring
  content = content.replace(/(\w+)\s*(\w+)\s*\}/g, '$1, $2}');
  content = content.replace(/(\w+)\s*(\w+)\s*\]/g, '$1, $2]');
  
  // Fix missing commas in JSX props
  content = content.replace(/(\w+)=\s*"([^"]+)"\s*(\w+)=/g, '$1="$2",\n    $3=');
  content = content.replace(/(\w+)=\s*'([^']+)'\s*(\w+)=/g, "$1='$2',\n    $3=");
  
  // Fix missing commas in function calls
  content = content.replace(/(\w+)\s*(\w+)\s*\)/g, '$1, $2)');
  
  // Fix missing commas in object methods
  content = content.replace(/(\w+)\s*(\w+)\s*\(/g, '$1, $2(');
  
  // Fix missing commas in array methods
  content = content.replace(/(\w+)\s*(\w+)\s*\[/g, '$1, $2[');
  
  // Fix missing commas in object properties
  content = content.replace(/(\w+)\s*(\w+)\s*:/g, '$1, $2:');
  
  // Fix missing commas in array elements
  content = content.replace(/(\w+)\s*(\w+)\s*\]/g, '$1, $2]');
  
  // Fix missing commas in function parameters
  content = content.replace(/(\w+)\s*(\w+)\s*\)/g, '$1, $2)');
  
  // Fix missing commas in destructuring
  content = content.replace(/(\w+)\s*(\w+)\s*\}/g, '$1, $2}');
  content = content.replace(/(\w+)\s*(\w+)\s*\]/g, '$1, $2]');
  
  // Fix missing commas in JSX props
  content = content.replace(/(\w+)=\s*"([^"]+)"\s*(\w+)=/g, '$1="$2",\n    $3=');
  content = content.replace(/(\w+)=\s*'([^']+)'\s*(\w+)=/g, "$1='$2',\n    $3=");
  
  // Fix missing commas in function calls
  content = content.replace(/(\w+)\s*(\w+)\s*\)/g, '$1, $2)');
  
  // Fix missing commas in object methods
  content = content.replace(/(\w+)\s*(\w+)\s*\(/g, '$1, $2(');
  
  // Fix missing commas in array methods
  content = content.replace(/(\w+)\s*(\w+)\s*\[/g, '$1, $2[');
  
  // Fix missing commas in object properties
  content = content.replace(/(\w+)\s*(\w+)\s*:/g, '$1, $2:');
  
  // Fix missing commas in array elements
  content = content.replace(/(\w+)\s*(\w+)\s*\]/g, '$1, $2]');
  
  return content;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixComprehensiveSyntaxErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (processFile(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Main execution
console.log('Starting comprehensive syntax error fixes...');
const fixedCount = processDirectory('./pages');
console.log(`Fixed ${fixedCount} files in pages directory`);

const srcFixedCount = processDirectory('./src');
console.log(`Fixed ${srcFixedCount} files in src directory`);

console.log('Comprehensive syntax error fixes completed!');