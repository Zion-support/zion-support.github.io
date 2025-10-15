const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix common syntax errors in TSX files
function fixSyntaxErrors(content, filePath) {
  let fixed = content;
  let changes = 0;

  // Fix 1: Remove orphaned object literals that are not part of arrays or assignments
  // Pattern: lines that start with { and are not part of proper declarations
  const lines = fixed.split('\n');
  const fixedLines = [];
  let inObjectLiteral = false;
  let objectLiteralStart = -1;
  let braceCount = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Check if this line starts an object literal
    if (trimmed.startsWith('{') && !trimmed.includes('=') && !trimmed.includes(':')) {
      if (!inObjectLiteral) {
        inObjectLiteral = true;
        objectLiteralStart = i;
        braceCount = 0;
      }
    }

    if (inObjectLiteral) {
      // Count braces
      for (const char of line) {
        if (char === '{') braceCount++;
        if (char === '}') braceCount--;
      }

      // If we've closed all braces, check if this is a valid object
      if (braceCount === 0) {
        const objectContent = lines.slice(objectLiteralStart, i + 1).join('\n');
        
        // Check if this looks like a valid object (has properties with colons)
        if (objectContent.includes(':') && objectContent.includes('title')) {
          // This looks like a valid object, keep it
          fixedLines.push(...lines.slice(objectLiteralStart, i + 1));
        } else {
          // This is an orphaned object, skip it
          changes++;
        }
        
        inObjectLiteral = false;
        objectLiteralStart = -1;
      }
    } else {
      fixedLines.push(line);
    }
  }

  fixed = fixedLines.join('\n');

  // Fix 2: Fix malformed function declarations
  // Pattern: "const Component = () => { return; },"
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\(\)\s*=>\s*\{\s*return\s*;\s*\},/g, (match, componentName) => {
    changes++;
    return `const ${componentName} = () => {
  const features = [`;
  });

  // Fix 3: Fix missing array declarations
  // Look for orphaned objects that should be in arrays
  fixed = fixed.replace(/\n\s*\{\s*\n\s*title:/g, '\n  {\n    title:');

  // Fix 4: Fix JSX closing tag issues
  // Look for unclosed JSX elements
  const openTags = [];
  const tagRegex = /<(\w+)(?:\s[^>]*)?(?:\s*\/>|>)/g;
  const closeTagRegex = /<\/(\w+)>/g;
  
  let match;
  while ((match = tagRegex.exec(fixed)) !== null) {
    if (!match[0].endsWith('/>')) {
      openTags.push(match[1]);
    }
  }

  // Fix 5: Fix missing semicolons and commas in object literals
  fixed = fixed.replace(/(\w+)\s*:\s*"[^"]*"\s*\n\s*(\w+)/g, '$1: "$1",\n    $2');
  fixed = fixed.replace(/(\w+)\s*:\s*<[^>]+>\s*\n\s*(\w+)/g, '$1: <$1>,\n    $2');

  // Fix 6: Fix malformed imports
  fixed = fixed.replace(/import\s+\{([^}]+)\}\s+from\s+'([^']+)';\s*const\s+(\w+)\s*=\s*\(\)\s*=>\s*\{\s*return\s*;\s*\},/g, 
    'import { $1 } from \'$2\';\n\nconst $3 = () => {\n  const features = [');

  // Fix 7: Fix missing closing braces and parentheses
  const openBraces = (fixed.match(/\{/g) || []).length;
  const closeBraces = (fixed.match(/\}/g) || []).length;
  const openParens = (fixed.match(/\(/g) || []).length;
  const closeParens = (fixed.match(/\)/g) || []).length;

  if (openBraces > closeBraces) {
    fixed += '\n' + '}'.repeat(openBraces - closeBraces);
    changes++;
  }

  if (openParens > closeParens) {
    fixed += '\n' + ')'.repeat(openParens - closeParens);
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
      const result = fixSyntaxErrors(content, filePath);
      
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