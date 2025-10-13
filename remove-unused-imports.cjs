const fs = require('fs');
const path = require('path');

// Function to remove unused imports from a file
const removeUnusedImports = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Split into lines
    const lines = content.split('\n');
    const newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check if this is an import line with multiple imports
      if (line.trim().startsWith('import') && line.includes('{') && line.includes('}')) {
        // Extract the import names
        const importMatch = line.match(/import\s*{\s*([^}]+)\s*}\s*from/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim());
          const usedImports = [];
          
          // Check which imports are actually used in the file
          for (const imp of imports) {
            const importName = imp.replace(/\s+as\s+\w+/, '').trim();
            // Count occurrences - if it appears more than once, it's used
            const occurrences = (content.match(new RegExp(`\\b${importName}\\b`, 'g')) || []).length;
            if (occurrences > 1) {
              usedImports.push(imp);
            }
          }
          
          if (usedImports.length === 0) {
            // Remove the entire import line
            modified = true;
            continue;
          } else if (usedImports.length < imports.length) {
            // Replace with only used imports
            const newImport = line.replace(importMatch[1], usedImports.join(', '));
            newLines.push(newImport);
            modified = true;
            continue;
          }
        }
      }
      
      // Check for unused variable assignments
      const unusedVarPattern = /^\s*const\s+(\w+)\s*=\s*[^;]+;?\s*$/;
      const varMatch = line.match(unusedVarPattern);
      
      if (varMatch) {
        const varName = varMatch[1];
        // Count occurrences - if it appears more than once, it's used
        const occurrences = (content.match(new RegExp(`\\b${varName}\\b`, 'g')) || []).length;
        
        if (occurrences <= 1) {
          // Comment out the unused variable
          newLines.push(`// ${line}`);
          modified = true;
          continue;
        }
      }
      
      newLines.push(line);
    }
    
    if (modified) {
      fs.writeFileSync(filePath, newLines.join('\n'));
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
};

// List of files to fix
const filesToFix = [
  'app/ai-image-recognition-pro/page.tsx',
  'app/ai-quantum-financial-oracle/page.tsx',
  'app/ai-sentiment-analysis-pro/page.tsx',
  'app/ai-space-mission-optimizer/page.tsx',
  'app/ai-voice-cloning-studio/page.tsx',
  'app/cloud-infrastructure/page.tsx',
  'app/cloud-services/page.tsx',
  'app/community/page.tsx',
  'app/compliance/page.tsx',
  'app/consultation/page.tsx',
  'app/cybersecurity-solutions/page.tsx',
  'app/micro-saas-services/page.tsx',
  'app/quantum-computing-solutions/page.tsx',
  'app/quantum-data-encryption-vault/page.tsx',
  'app/smart-inventory-optimizer/page.tsx',
  'app/zion-ai-accounting-suite/page.tsx',
  'app/zion-ai-customer-insights/page.tsx',
  'app/zion-ai-cybersecurity-suite-pro/page.tsx',
  'app/zion-ai-inventory-manager/page.tsx',
  'app/zion-ai-invoice-generator/page.tsx',
  'app/zion-ai-meeting-transcriber/page.tsx',
  'app/zion-ai-neural-interface/page.tsx',
  'app/zion-ai-project-manager-pro/page.tsx',
  'app/zion-ai-sales-predictor/page.tsx'
];

// Process all files
let fixedCount = 0;
for (const file of filesToFix) {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    if (removeUnusedImports(fullPath)) {
      fixedCount++;
    }
  }
}

console.log(`Fixed ${fixedCount} files.`);