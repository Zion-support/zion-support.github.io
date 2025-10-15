const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix orphaned object literals in TSX files
function fixOrphanedObjects(content, filePath) {
  let fixed = content;
  let changes = 0;

  // Pattern 1: Fix orphaned objects that should be in a features array
  // Look for lines that start with { and have title property
  const lines = fixed.split('\n');
  const fixedLines = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // Check if this line starts an orphaned object with title
    if (trimmed.startsWith('{') && lines[i + 1] && lines[i + 1].trim().startsWith('title:')) {
      // This looks like an orphaned object, we need to find where it should go
      let objectLines = [];
      let braceCount = 0;
      let j = i;

      // Collect the entire object
      while (j < lines.length) {
        const currentLine = lines[j];
        objectLines.push(currentLine);
        
        // Count braces
        for (const char of currentLine) {
          if (char === '{') braceCount++;
          if (char === '}') braceCount--;
        }

        if (braceCount === 0) {
          break;
        }
        j++;
      }

      // Check if this should be a features array
      const objectContent = objectLines.join('\n');
      if (objectContent.includes('title:') && objectContent.includes('description:')) {
        // Look for the function declaration before this object
        let functionFound = false;
        for (let k = i - 1; k >= 0; k--) {
          if (lines[k].includes('export default function') || lines[k].includes('const ') && lines[k].includes('= () =>')) {
            // Insert features array declaration
            fixedLines.push('  const features = [');
            fixedLines.push(...objectLines.map(l => '  ' + l));
            fixedLines.push('  ];');
            fixedLines.push('');
            changes++;
            functionFound = true;
            break;
          }
        }

        if (!functionFound) {
          // Just fix the object structure
          fixedLines.push('  const features = [');
          fixedLines.push(...objectLines.map(l => '  ' + l));
          fixedLines.push('  ];');
          fixedLines.push('');
          changes++;
        }
      } else {
        // Keep the original lines
        fixedLines.push(...objectLines);
      }

      i = j + 1;
    } else {
      fixedLines.push(line);
      i++;
    }
  }

  fixed = fixedLines.join('\n');

  // Pattern 2: Fix malformed function declarations
  // Look for "const Component = () => { return; },"
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\(\)\s*=>\s*\{\s*return\s*;\s*\},/g, (match, componentName) => {
    changes++;
    return `const ${componentName} = () => {
  const features = [`;
  });

  // Pattern 3: Fix missing array declarations after function declarations
  fixed = fixed.replace(/(export default function \w+\(\) \{\s*\n)\s*\{/g, '$1  const features = [\n    {');
  fixed = fixed.replace(/(const \w+ = \(\) => \{\s*\n)\s*\{/g, '$1  const features = [\n    {');

  // Pattern 4: Fix JSX syntax errors
  // Fix unclosed JSX elements
  fixed = fixed.replace(/<(\w+)([^>]*?)(?<!\/)>/g, (match, tagName, attributes) => {
    if (!match.endsWith('/>') && !match.includes('</')) {
      return match;
    }
    return match;
  });

  // Pattern 5: Fix missing semicolons and commas
  fixed = fixed.replace(/(\w+)\s*:\s*"[^"]*"\s*\n\s*(\w+)/g, '$1: "$1",\n    $2');
  fixed = fixed.replace(/(\w+)\s*:\s*<[^>]+>\s*\n\s*(\w+)/g, '$1: <$1>,\n    $2');

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
      const result = fixOrphanedObjects(content, filePath);
      
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