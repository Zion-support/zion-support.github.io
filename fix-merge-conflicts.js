const fs = require('fs');
const path = require('path');

// Files with merge conflicts that need fixing
const filesToFix = [
  'api/shipping-rates.js',
  'api/subscribe.js',
  'api/wallet.js',
  'components/LoadingComponents.tsx',
  'src/hooks/usePerformance.ts',
];

function cleanMergeConflicts(content) {
  const lines = content.split('\n');
  const cleanedLines = [];
  let inConflict = false;
  let inOursSection = false;
  let collectOurs = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check for conflict start marker
    if (line.match(/^<<<<<<< /)) {
      inConflict = true;
      inOursSection = true;
      collectOurs = [];
      continue;
    }
    
    // Check for conflict separator
    if (line.match(/^=======/)) {
      inOursSection = false;
      continue;
    }
    
    // Check for conflict end marker
    if (line.match(/^>>>>>>> /)) {
      // Keep our version (the one before =======)
      cleanedLines.push(...collectOurs);
      inConflict = false;
      inOursSection = false;
      collectOurs = [];
      continue;
    }
    
    // If in conflict and in our section, collect lines
    if (inConflict && inOursSection) {
      collectOurs.push(line);
      continue;
    }
    
    // If in conflict but in their section, skip
    if (inConflict && !inOursSection) {
      continue;
    }
    
    // Normal line, keep it
    cleanedLines.push(line);
  }
  
  return cleanedLines.join('\n');
}

// Fix each file
for (const file of filesToFix) {
  const filePath = path.join(__dirname, file);
  
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${file}`);
    continue;
  }
  
  console.log(`Fixing: ${file}`);
  const content = fs.readFileSync(filePath, 'utf8');
  const cleaned = cleanMergeConflicts(content);
  fs.writeFileSync(filePath, cleaned, 'utf8');
  console.log(`Fixed: ${file}`);
}

console.log('All merge conflicts fixed!');