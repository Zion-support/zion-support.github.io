#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

async function fixJSXErrors() {
  const problematicFiles = [
    'app/ai-powered-devops/page.tsx',
    'app/ai-powered-email-analyzer/page.tsx',
    'app/it-services/cybersecurity-audit/page.tsx',
    'app/legal-document-manager/page.tsx',
    'app/medical-records-manager/page.tsx',
    'app/online-learning-platform/page.tsx',
    'app/property-management-ai/page.tsx',
    'app/supply-chain-optimizer/page.tsx',
    'app/test/page.tsx'
  ];

  let fixedCount = 0;

  console.log(`🔍 Fixing JSX errors in ${problematicFiles.length} files...`);

  for (const file of problematicFiles) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      let modified = false;
      let newContent = content;
      
      // Fix unclosed JSX fragments
      if (newContent.includes('<>') && !newContent.includes('</>')) {
        newContent = newContent.replace(/<>/g, '<div>').replace(/<\/>/g, '</div>');
        modified = true;
      }
      
      // Fix missing closing div tags
      const divMatches = newContent.match(/<div[^>]*>/g);
      const closingDivMatches = newContent.match(/<\/div>/g);
      
      if (divMatches && closingDivMatches && divMatches.length > closingDivMatches.length) {
        const missingDivs = divMatches.length - closingDivMatches.length;
        for (let i = 0; i < missingDivs; i++) {
          newContent += '\n      </div>';
        }
        modified = true;
      }
      
      // Remove duplicate export statements
      const exportMatches = newContent.match(/export default/g);
      if (exportMatches && exportMatches.length > 1) {
        // Keep only the first export default
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
      
      // Fix malformed JSX around problematic areas
      newContent = newContent.replace(/\s*>\s*</g, '>\n        <');
      newContent = newContent.replace(/\s*>\s*$/gm, '>\n      </div>');
      
      if (modified) {
        fs.writeFileSync(file, newContent, 'utf8');
        fixedCount++;
        console.log(`✅ Fixed JSX syntax in ${file}`);
      }
      
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error.message);
    }
  }

  console.log(`\n📊 Summary:`);
  console.log(`✅ Fixed ${fixedCount} files with JSX syntax errors`);

  if (fixedCount > 0) {
    console.log(`\n🎉 JSX syntax errors fixed! Run 'npm run type-check' to verify.`);
  } else {
    console.log(`\n✨ No JSX syntax issues found.`);
  }
}

fixJSXErrors().catch(console.error);