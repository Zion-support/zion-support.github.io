const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix critical syntax errors
function fixCriticalErrors(content, filePath) {
  let fixed = content;
  let changes = 0;

  // Pattern 1: Fix missing closing parentheses for functions
  if (content.includes('export default function') && content.includes('return (') && !content.includes(');')) {
    // Count opening and closing parentheses in the return statement
    const returnStart = content.indexOf('return (');
    const returnContent = content.substring(returnStart);
    const openParens = (returnContent.match(/\(/g) || []).length;
    const closeParens = (returnContent.match(/\)/g) || []).length;
    
    if (openParens > closeParens) {
      const missingParens = openParens - closeParens;
      fixed = fixed.trim() + '\n' + ')'.repeat(missingParens) + ';';
      changes++;
    }
  }

  // Pattern 2: Fix missing closing braces for functions
  const openBraces = (fixed.match(/\{/g) || []).length;
  const closeBraces = (fixed.match(/\}/g) || []).length;
  
  if (openBraces > closeBraces) {
    const missingBraces = openBraces - closeBraces;
    fixed = fixed.trim() + '\n' + '}'.repeat(missingBraces);
    changes++;
  }

  // Pattern 3: Fix malformed object literals
  // Look for lines that start with { and are not properly formatted
  const lines = fixed.split('\n');
  const fixedLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    
    // Fix malformed object properties
    if (trimmed.startsWith('{') && trimmed.includes('title:') && !trimmed.includes('}')) {
      // This is a malformed object, try to fix it
      let objectLines = [line];
      let j = i + 1;
      let braceCount = 1;
      
      while (j < lines.length && braceCount > 0) {
        const currentLine = lines[j];
        objectLines.push(currentLine);
        
        for (const char of currentLine) {
          if (char === '{') braceCount++;
          if (char === '}') braceCount--;
        }
        
        j++;
      }
      
      // Fix the object structure
      const objectContent = objectLines.join('\n');
      if (objectContent.includes('title:') && objectContent.includes('description:')) {
        // This looks like a valid object, fix the formatting
        const fixedObject = objectContent
          .replace(/(\s+)(title: "[^"]*")\s*\n\s*(description: "[^"]*")\s*\n\s*(icon: <[^>]+>)\s*\n\s*(included: \w+)\s*\n\s*(\})/g, 
            '$1$2,\n$1  $3,\n$1  $4,\n$1  $5\n$1$6');
        
        fixedLines.push(fixedObject);
        i = j - 1;
        changes++;
      } else {
        fixedLines.push(...objectLines);
        i = j - 1;
      }
    } else {
      fixedLines.push(line);
    }
  }
  
  fixed = fixedLines.join('\n');

  // Pattern 4: Fix missing semicolons
  fixed = fixed.replace(/(\w+)\s*=\s*\[[\s\S]*?\]\s*(?=\n\s*const|\n\s*return|\n\s*$)/g, (match) => {
    if (!match.endsWith(';')) {
      changes++;
      return match + ';';
    }
    return match;
  });

  // Pattern 5: Fix malformed function declarations
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\(\)\s*=>\s*\{\s*return\s*;\s*\},/g, (match, componentName) => {
    changes++;
    return `const ${componentName} = () => {
  const features = [`;
  });

  // Pattern 6: Fix JSX fragment issues
  if (fixed.includes('<>') && !fixed.includes('</>')) {
    fixed = fixed + '\n    </>\n  );\n}';
    changes++;
  }

  return { content: fixed, changes };
}

// Function to process all TSX files
function processFiles() {
  const pattern = 'app/**/*.tsx';
  const files = glob.sync(pattern);
  let totalChanges = 0;
  let processedFiles = 0;

  console.log(`Found ${files.length} TSX files to process...`);

  files.forEach(filePath => {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const result = fixCriticalErrors(content, filePath);
      
      if (result.changes > 0) {
        fs.writeFileSync(filePath, result.content);
        console.log(`Fixed ${result.changes} issues in ${filePath}`);
        totalChanges += result.changes;
        processedFiles++;
      }
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
    }
  });

  console.log(`\nProcessed ${processedFiles} files with ${totalChanges} total changes.`);
}

// Run the fix
processFiles();