const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix incorrectly escaped quotes in import statements
function fixImportQuotes(content) {
  let fixed = false;
  let originalContent = content;

  // Fix escaped quotes in import statements
  content = content.replace(/import\s+([^"']+)\s+from\s+"([^"]*&quot;[^"]*)"\s*;/g, (match, importName, modulePath) => {
    const fixedPath = modulePath.replace(/&quot;/g, '"');
    return `import ${importName} from "${fixedPath}";`;
  });

  content = content.replace(/import\s+([^"']+)\s+from\s+'([^']*&apos;[^']*)'\s*;/g, (match, importName, modulePath) => {
    const fixedPath = modulePath.replace(/&apos;/g, "'");
    return `import ${importName} from '${fixedPath}';`;
  });

  // Fix other common escaped entities in strings
  content = content.replace(/"([^"]*&quot;[^"]*)"/g, (match, str) => {
    const fixedStr = str.replace(/&quot;/g, '"');
    return `"${fixedStr}"`;
  });

  content = content.replace(/'([^']*&apos;[^']*)'/g, (match, str) => {
    const fixedStr = str.replace(/&apos;/g, "'");
    return `'${fixedStr}'`;
  });

  fixed = content !== originalContent;
  return { content, fixed };
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { content: fixedContent, fixed } = fixImportQuotes(content);
    
    if (fixed) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed import quotes in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.ts'
  ];
  
  let totalFixed = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: process.cwd() });
    files.forEach(file => {
      if (processFile(file)) {
        totalFixed++;
      }
    });
  });
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

main();