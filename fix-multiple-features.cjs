const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix multiple features arrays
function fixMultipleFeatures(content, filePath) {
  let fixed = content;
  let changes = 0;

  // Pattern 1: Fix multiple const features = [ declarations
  // Replace multiple features arrays with a single one
  const featuresRegex = /const features = \[\s*\{[\s\S]*?\}\s*\];/g;
  const matches = [...content.matchAll(featuresRegex)];
  
  if (matches.length > 1) {
    // Extract all feature objects
    const featureObjects = [];
    matches.forEach(match => {
      const arrayContent = match[0];
      const objectMatches = [...arrayContent.matchAll(/\{\s*title:[\s\S]*?\}\s*(?=,|\])/g)];
      objectMatches.forEach(objMatch => {
        featureObjects.push(objMatch[0].trim());
      });
    });

    // Create single features array
    const singleFeaturesArray = `const features = [
    ${featureObjects.join(',\n    ')}
  ];`;

    // Replace all multiple features arrays with single one
    fixed = fixed.replace(featuresRegex, '');
    fixed = fixed.replace(/export default function \w+\(\) \{\s*\n/, `export default function AIAutomatedTesting() {\n  ${singleFeaturesArray}\n\n`);
    changes++;
  }

  // Pattern 2: Fix malformed object properties
  // Fix indentation and commas in feature objects
  fixed = fixed.replace(/(\s+)(title: "[^"]*")\s*\n\s*(description: "[^"]*")\s*\n\s*(icon: <[^>]+>)\s*\n\s*(included: \w+)\s*\n\s*(\})/g, 
    '$1$2,\n$1  $3,\n$1  $4,\n$1  $5\n$1$6');

  // Pattern 3: Fix missing commas between array elements
  fixed = fixed.replace(/\}\s*\n\s*\{\s*title:/g, '},\n    {\n      title:');

  // Pattern 4: Fix duplicate const declarations
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

  // Pattern 5: Fix orphaned closing brackets
  fixed = fixed.replace(/\n\s*\];\s*\n\s*\];\s*\n/g, '\n  ];\n\n');

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
      const result = fixMultipleFeatures(content, filePath);
      
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