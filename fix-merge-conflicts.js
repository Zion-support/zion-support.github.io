#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get list of files with merge conflicts
function getFilesWithMergeConflicts() {
  try {
    const result = execSync('grep -l "^<<<<<<<\\|^=======\\|^>>>>>>>" -r . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" | head -50', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file && !file.includes('node_modules') && !file.includes('.git'));
  } catch (error) {
    console.log('No merge conflicts found or error occurred:', error.message);
    return [];
  }
}

// Fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<<') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false;
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Remove merge conflict markers and keep the version after =======
    // This is a simple approach - keep everything after ======= and before >>>>>>>
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let keepContent = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim().startsWith('<<<<<<<')) {
        inConflict = true;
        keepContent = false;
        continue;
      }
      
      if (line.trim().startsWith('=======')) {
        keepContent = true;
        continue;
      }
      
      if (line.trim().startsWith('>>>>>>>')) {
        inConflict = false;
        keepContent = false;
        continue;
      }
      
      if (!inConflict || keepContent) {
        fixedLines.push(line);
      }
    }
    
    // Clean up any remaining syntax issues
    let fixedContent = fixedLines.join('\n');
    
    // Fix common syntax issues
    fixedContent = fixedContent
      .replace(/;\s*const\s+/g, ';\nconst ')
      .replace(/;\s*function\s+/g, ';\nfunction ')
      .replace(/;\s*export\s+/g, ';\nexport ')
      .replace(/;\s*import\s+/g, ';\nimport ')
      .replace(/;\s*}\s*$/gm, ';\n}')
      .replace(/;\s*}\s*const\s+/g, ';\n}\nconst ')
      .replace(/;\s*}\s*function\s+/g, ';\n}\nfunction ')
      .replace(/;\s*}\s*export\s+/g, ';\n}\nexport ')
      .replace(/;\s*}\s*import\s+/g, ';\n}\nimport ')
      .replace(/const\s+const\s+/g, 'const ')
      .replace(/function\s+function\s+/g, 'function ')
      .replace(/export\s+export\s+/g, 'export ')
      .replace(/import\s+import\s+/g, 'import ')
      .replace(/\s+;\s*$/gm, ';')
      .replace(/;\s*;\s*/g, ';')
      .replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, fixedContent);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
function main() {
  console.log('Starting merge conflict resolution...');
  
  const files = getFilesWithMergeConflicts();
  console.log(`Found ${files.length} files with merge conflicts`);
  
  let fixedCount = 0;
  for (const file of files) {
    if (fixMergeConflicts(file)) {
      fixedCount++;
    }
  }
  
  console.log(`Fixed merge conflicts in ${fixedCount} files`);
  
  // Also fix some specific problematic files
  const problematicFiles = [
    'app/ai-analytics/page.tsx',
    'app/ai-api-management/page.tsx',
    'app/ai-autonomous-systems/page.tsx',
    'app/ai-blockchain-analytics/page.tsx',
    'app/ai-blockchain-solutions/page.tsx',
    'app/ai-climate-solutions-pro/page.tsx',
    'app/ai-cloud-infrastructure/page.tsx'
  ];
  
  for (const file of problematicFiles) {
    const fullPath = path.join(process.cwd(), file);
    if (fs.existsSync(fullPath)) {
      fixMergeConflicts(fullPath);
    }
  }
  
  console.log('Merge conflict resolution completed');
}

main();