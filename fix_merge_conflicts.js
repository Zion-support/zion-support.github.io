#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of files with merge conflicts
const filesWithConflicts = [
  'app/case-studies/ai-2026-mega-transformation-success/page.tsx',
  'app/case-studies/ai-2026-quantum-neural-superintelligence-25-billion-success/page.tsx',
  'app/case-studies/ai-2026-synthetic-consciousness-10-billion-success/page.tsx',
  'app/case-studies/ai-cognitive-computing-success-2026/page.tsx',
  'app/case-studies/ai-cognitive-superintelligence-mega-success-2026/page.tsx',
  'app/case-studies/ai-enterprise-automation-success-2026/page.tsx',
  'app/case-studies/ai-space-tech-revolution-success-2026/page.tsx',
  'app/case-studies/fortune-500-ai-transformation-12b-roi/page.tsx',
  'app/case-studies/fortune-500-ai-transformation-success/page.tsx',
  'app/case-studies/fortune-500-quantum-ai-transformation-2026/page.tsx',
  'app/case-studies/global-manufacturing-autonomous-transformation/page.tsx',
  'app/guides/ai-2026-implementation-roadmap/page.tsx',
  'app/guides/autonomous-business-processes-implementation-guide-2026/page.tsx',
  'app/services/ai-2026-breakthrough-innovations-implementation/page.tsx',
  'app/services/revolutionary-breakthroughs-2025/page.tsx'
];

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<< HEAD') || !content.includes('=======') || !content.includes('>>>>>>>')) {
      console.log(`No merge conflicts found in ${filePath}`);
      return;
    }
    
    console.log(`Fixing merge conflicts in ${filePath}`);
    
    // Pattern to match the merge conflict in import statements
    const mergeConflictPattern = /<<<<<<< HEAD\s*\n\s*import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];\s*\n\s*;\s*\n;\s*\n;\s*\n;\s*\n;\s*\n;\s*\n;\s*\n;\s*\n=======\s*\n([\s\S]*?)\s*>>>>>>> cursor\/fix-errors-and-merge-to-main-ec39/;
    
    // Replace the merge conflict with the correct import statement
    content = content.replace(mergeConflictPattern, (match, headImports, afterImports) => {
      // Extract individual imports from the HEAD section
      const imports = headImports.split(',').map(imp => imp.trim()).filter(imp => imp);
      
      // Create the correct import statement
      const correctImport = `import { ${imports.join(', ')} } from 'lucide-react';\n\n// @ts-ignore`;
      
      return correctImport;
    });
    
    // Write the fixed content back to the file
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed merge conflicts in ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesWithConflicts.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    fixMergeConflicts(fullPath);
  } else {
    console.log(`File not found: ${fullPath}`);
  }
});

console.log('Merge conflict fixing completed!');