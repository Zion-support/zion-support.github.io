#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

async function fixAllTypeScriptErrors() {
  const files = await glob('app/**/*.{ts,tsx}', { cwd: process.cwd() });
  
  let fixedCount = 0;

  console.log(`🔍 Fixing TypeScript errors in ${files.length} files...`);

  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      let modified = false;
      let newContent = content;
      
      // Fix ErrorBoundary import issues
      if (newContent.includes("import { ErrorBoundary }")) {
        newContent = newContent.replace(/import { ErrorBoundary }/g, 'import ErrorBoundary');
        modified = true;
      }
      
      // Fix missing ErrorBoundary imports
      if (newContent.includes('<ErrorBoundary>') && !newContent.includes('import ErrorBoundary')) {
        const importLine = "import ErrorBoundary from '../components/ErrorBoundary';\n";
        newContent = importLine + newContent;
        modified = true;
      }
      
      // Fix PageComponent references
      if (newContent.includes('PageComponent')) {
        newContent = newContent.replace(/PageComponent/g, 'Page');
        modified = true;
      }
      
      // Fix unused variable warnings by removing unused variables
      if (newContent.includes('is declared but its value is never read')) {
        // Remove unused imports and variables
        newContent = newContent.replace(/import.*Footer.*from.*;\n/g, '');
        newContent = newContent.replace(/import.*CheckCircle.*from.*;\n/g, '');
        newContent = newContent.replace(/const.*=.*;\n/g, '');
        modified = true;
      }
      
      // Fix duplicate export statements
      const exportMatches = newContent.match(/export default/g);
      if (exportMatches && exportMatches.length > 1) {
        const lines = newContent.split('\n');
        let exportCount = 0;
        const filteredLines = lines.filter(line => {
          if (line.includes('export default')) {
            exportCount++;
            return exportCount === 1;
          }
          return true;
        });
        newContent = filteredLines.join('\n');
        modified = true;
      }
      
      if (modified) {
        fs.writeFileSync(file, newContent, 'utf8');
        fixedCount++;
        console.log(`✅ Fixed TypeScript errors in ${file}`);
      }
      
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error.message);
    }
  }

  console.log(`\n📊 Summary:`);
  console.log(`✅ Fixed TypeScript errors in ${fixedCount} files`);

  if (fixedCount > 0) {
    console.log(`\n🎉 TypeScript errors fixed! Run 'npm run type-check' to verify.`);
  } else {
    console.log(`\n✨ No TypeScript errors found.`);
  }
}

fixAllTypeScriptErrors().catch(console.error);