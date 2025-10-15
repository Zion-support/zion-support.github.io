const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to resolve merge conflicts by choosing the HEAD version
function resolveMergeConflict(content) {
  // Remove merge conflict markers and keep the HEAD version (before =======)
  return content
    .replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+\n?/g, '$1')
    .replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g, '$1');
}

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  return content
    // Fix 'buttonton' typos to 'button'
    .replace(/buttonton/g, 'button')
    // Fix missing commas in object properties
    .replace(/(\w+)\s+(\w+):/g, '$1,\n  $2:')
    // Fix missing semicolons
    .replace(/(\w+)\s*\n\s*(\w+)/g, '$1;\n$2')
    // Fix JSX attribute issues
    .replace(/hre\s+f=/g, 'href=')
    // Fix interface declarations
    .replace(/interface\s+(\w+)\s*\{/g, 'interface $1 {')
    // Fix function declarations
    .replace(/function\s+(\w+)\s*\(/g, 'function $1(')
    // Fix arrow function syntax
    .replace(/=>\s*\{/g, ' => {')
    // Fix import statements
    .replace(/import\s+(\w+)\s*,\s*\{/g, 'import $1, {')
    // Fix React component syntax
    .replace(/React\.FC\s*=\s*\(\)\s*=>/g, 'React.FC = () =>')
    // Fix object property syntax
    .replace(/(\w+):\s*(\w+)\s*(\w+):/g, '$1: $2,\n  $3:')
    // Fix missing closing braces
    .replace(/(\w+)\s*$/gm, '$1;')
    // Fix JSX closing tags
    .replace(/<\/buttonton>/g, '</button>')
    // Fix missing quotes in JSX attributes
    .replace(/=(\w+)(\s|>)/g, '="$1"$2')
    // Fix TypeScript interface syntax
    .replace(/interface\s+(\w+)\s*\{([^}]*)\}/g, (match, name, body) => {
      const fixedBody = body
        .replace(/(\w+):\s*(\w+)(\s|$)/g, '$1: $2;')
        .replace(/(\w+):\s*(\w+)\[\]/g, '$1: $2[];')
        .replace(/(\w+):\s*(\w+)\?/g, '$1?: $2;');
      return `interface ${name} {\n  ${fixedBody}\n}`;
    });
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`Processing merge conflicts in: ${filePath}`);
      const resolvedContent = resolveMergeConflict(content);
      const fixedContent = fixSyntaxErrors(resolvedContent);
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      return true;
    }
    
    // Check for syntax errors even without merge conflicts
    if (content.includes('buttonton') || content.includes('hre f=') || content.includes('interface ')) {
      console.log(`Fixing syntax errors in: ${filePath}`);
      const fixedContent = fixSyntaxErrors(content);
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function to process all files
function main() {
  console.log('Starting merge conflict resolution and syntax fixes...');
  
  // Get all TypeScript and JavaScript files
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'app/**/*.js',
    'app/**/*.jsx',
    'components/**/*.tsx',
    'components/**/*.ts',
    'utils/**/*.ts',
    'utils/**/*.js',
    'hooks/**/*.ts',
    'contexts/**/*.tsx',
    'types/**/*.ts',
    'lib/**/*.ts',
    'config/**/*.ts',
    'constants/**/*.ts',
    'data/**/*.ts'
  ];
  
  let processedFiles = 0;
  let fixedFiles = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: process.cwd() });
    files.forEach(file => {
      processedFiles++;
      if (processFile(file)) {
        fixedFiles++;
      }
    });
  });
  
  console.log(`\nProcessed ${processedFiles} files`);
  console.log(`Fixed ${fixedFiles} files`);
  console.log('Merge conflict resolution and syntax fixes completed!');
}

// Run the script
main();