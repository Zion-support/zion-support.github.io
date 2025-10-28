#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

async function fixJSXSyntaxErrors() {
  // Find all TypeScript/TSX files in the app directory
  const files = await glob('app/**/*.{ts,tsx}', { cwd: process.cwd() });

  let fixedCount = 0;

  console.log(`🔍 Found ${files.length} TypeScript files to check...`);

  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      let modified = false;
      
      // Check for JSX syntax errors around line 65-100
      if (content.includes('JSX fragment has no corresponding closing tag') || 
          content.includes('JSX element') && content.includes('has no corresponding closing tag')) {
        
        // Look for unclosed JSX fragments and divs
        let newContent = content;
        
        // Fix unclosed JSX fragments
        if (newContent.includes('<>') && !newContent.includes('</>')) {
          newContent = newContent.replace(/<>/g, '<div>').replace(/<\/>/g, '</div>');
          modified = true;
        }
        
        // Fix unclosed div tags
        const divMatches = newContent.match(/<div[^>]*>/g);
        const closingDivMatches = newContent.match(/<\/div>/g);
        
        if (divMatches && closingDivMatches && divMatches.length > closingDivMatches.length) {
          // Add missing closing div tags
          const missingDivs = divMatches.length - closingDivMatches.length;
          for (let i = 0; i < missingDivs; i++) {
            newContent += '\n        </div>';
          }
          modified = true;
        }
        
        // Fix malformed JSX around line 92-100
        newContent = newContent.replace(/\s*>\s*</g, '>\n        <');
        newContent = newContent.replace(/\s*>\s*$/gm, '>\n        </div>');
        
        if (modified) {
          fs.writeFileSync(file, newContent, 'utf8');
          fixedCount++;
          console.log(`✅ Fixed JSX syntax in ${file}`);
        }
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

fixJSXSyntaxErrors().catch(console.error);