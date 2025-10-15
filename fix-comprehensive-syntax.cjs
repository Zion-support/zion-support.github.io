const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix comprehensive syntax errors
function fixComprehensiveSyntax(content, filePath) {
  let fixed = content;
  let changes = 0;

  // Pattern 1: Fix incomplete features arrays
  // Look for features arrays that are missing their content
  const featuresRegex = /const features = \[\s*\{\s*title:[\s\S]*?\}\s*\];/g;
  const matches = [...content.matchAll(featuresRegex)];
  
  if (matches.length > 0) {
    // Extract all feature objects from the entire file
    const allFeatureObjects = [];
    const objectMatches = [...content.matchAll(/\{\s*title:[\s\S]*?\}\s*(?=,|\]|$)/g)];
    objectMatches.forEach(objMatch => {
      const obj = objMatch[0].trim();
      if (obj.includes('title:') && obj.includes('description:')) {
        allFeatureObjects.push(obj);
      }
    });

    // Remove all existing features arrays
    fixed = fixed.replace(featuresRegex, '');
    
    // Create a single complete features array
    if (allFeatureObjects.length > 0) {
      const singleFeaturesArray = `const features = [
    ${allFeatureObjects.join(',\n    ')}
  ];`;
      
      // Insert after the function declaration
      fixed = fixed.replace(/(export default function \w+\(\) \{\s*\n)/, `$1  ${singleFeaturesArray}\n\n`);
      changes++;
    }
  }

  // Pattern 2: Fix malformed object properties
  // Fix indentation and commas in feature objects
  fixed = fixed.replace(/(\s+)(title: "[^"]*")\s*\n\s*(description: "[^"]*")\s*\n\s*(icon: <[^>]+>)\s*\n\s*(included: \w+)\s*\n\s*(\})/g, 
    '$1$2,\n$1  $3,\n$1  $4,\n$1  $5\n$1$6');

  // Pattern 3: Fix missing commas between array elements
  fixed = fixed.replace(/\}\s*\n\s*\{\s*title:/g, '},\n    {\n      title:');

  // Pattern 4: Fix orphaned closing brackets and semicolons
  fixed = fixed.replace(/\n\s*\];\s*\n\s*\];\s*\n/g, '\n  ];\n\n');
  fixed = fixed.replace(/\n\s*\];\s*\n\s*const/g, '\n  ];\n\n  const');

  // Pattern 5: Fix missing closing braces for functions
  // Count opening and closing braces
  const openBraces = (fixed.match(/\{/g) || []).length;
  const closeBraces = (fixed.match(/\}/g) || []).length;
  
  if (openBraces > closeBraces) {
    const missingBraces = openBraces - closeBraces;
    // Add missing closing braces at the end
    fixed = fixed.trim() + '\n' + '}'.repeat(missingBraces);
    changes++;
  }

  // Pattern 6: Fix JSX syntax errors
  // Fix unclosed JSX elements
  const jsxTags = [...fixed.matchAll(/<(\w+)([^>]*?)(?<!\/)>/g)];
  const jsxCloseTags = [...fixed.matchAll(/<\/(\w+)>/g)];
  
  const openTags = jsxTags.map(match => match[1]);
  const closeTags = jsxCloseTags.map(match => match[1]);
  
  // Find unclosed tags
  const unclosedTags = [];
  openTags.forEach(tag => {
    const openCount = openTags.filter(t => t === tag).length;
    const closeCount = closeTags.filter(t => t === tag).length;
    if (openCount > closeCount) {
      unclosedTags.push(tag);
    }
  });

  // Add missing closing tags
  unclosedTags.forEach(tag => {
    const missingCount = openTags.filter(t => t === tag).length - closeTags.filter(t => t === tag).length;
    for (let i = 0; i < missingCount; i++) {
      fixed += `\n</${tag}>`;
      changes++;
    }
  });

  // Pattern 7: Fix malformed function returns
  // Look for functions that don't have proper return statements
  fixed = fixed.replace(/(export default function \w+\(\) \{\s*\n)(?!\s*return)/g, '$1  return (\n    <>\n');

  // Pattern 8: Fix missing closing tags for the main return
  if (fixed.includes('return (') && !fixed.includes('</>')) {
    fixed = fixed.trim() + '\n    </>\n  );\n}';
    changes++;
  }

  // Pattern 9: Fix duplicate const declarations
  const constDeclarations = [...fixed.matchAll(/const (\w+) = /g)];
  const seen = new Set();
  const duplicates = [];
  
  constDeclarations.forEach(match => {
    const varName = match[1];
    if (seen.has(varName)) {
      duplicates.push(varName);
    } else {
      seen.add(varName);
    }
  });

  // Remove duplicate const declarations (keep the first one)
  duplicates.forEach(varName => {
    const regex = new RegExp(`const ${varName} = [^;]+;\\s*`, 'g');
    let match;
    let first = true;
    while ((match = regex.exec(fixed)) !== null) {
      if (first) {
        first = false;
      } else {
        fixed = fixed.replace(match[0], '');
        changes++;
      }
    }
  });

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
      const result = fixComprehensiveSyntax(content, filePath);
      
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