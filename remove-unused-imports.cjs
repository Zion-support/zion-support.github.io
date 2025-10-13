const fs = require('fs');
const path = require('path');

// List of files with unused imports (from the lint output)
const filesToFix = [
  'app/ai-image-recognition-pro/page.tsx',
  'app/ai-quantum-financial-oracle/page.tsx',
  'app/ai-sentiment-analysis-pro/page.tsx',
  'app/ai-space-mission-optimizer/page.tsx',
  'app/ai-voice-cloning-studio/page.tsx',
  'app/cloud-infrastructure/page.tsx',
  'app/community/page.tsx',
  'app/compliance/page.tsx',
  'app/consultation/page.tsx',
  'app/cybersecurity-solutions/page.tsx',
  'app/micro-saas-services/page.tsx',
  'app/partners/page.tsx',
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

function removeUnusedImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    // Find all import lines
    const importLines = [];
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].trim().startsWith('import ')) {
        importLines.push({ line: lines[i], index: i });
      }
    }
    
    // For each import line, check which imports are actually used
    const newLines = [...lines];
    
    importLines.forEach(({ line, index }) => {
      // Extract imports from the line
      const importMatch = line.match(/import\s+{([^}]+)}\s+from\s+['"]([^'"]+)['"]/);
      if (importMatch) {
        const imports = importMatch[1].split(',').map(imp => imp.trim());
        const source = importMatch[2];
        
        // Check which imports are actually used in the file
        const usedImports = imports.filter(imp => {
          // Create a regex to find usage of this import
          const regex = new RegExp(`\\b${imp}\\b`, 'g');
          const matches = content.match(regex);
          // If we find more than just the import line, it's used
          return matches && matches.length > 1;
        });
        
        if (usedImports.length > 0) {
          // Replace the import line with only used imports
          newLines[index] = `import { ${usedImports.join(', ')} } from '${source}';`;
        } else {
          // Remove the entire import line
          newLines[index] = '';
        }
      }
    });
    
    // Write the cleaned content back
    const cleanedContent = newLines.filter(line => line !== '').join('\n');
    fs.writeFileSync(filePath, cleanedContent);
    console.log(`Fixed imports in ${filePath}`);
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Process each file
filesToFix.forEach(filePath => {
  const fullPath = path.join('/workspace', filePath);
  if (fs.existsSync(fullPath)) {
    removeUnusedImports(fullPath);
  }
});

console.log('Import cleanup completed');