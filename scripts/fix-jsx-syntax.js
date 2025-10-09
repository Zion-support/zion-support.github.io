#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

/**
 * Fix JSX syntax errors in the codebase
 */

async function fixJSXSyntax() {
  console.log('🔧 Fixing JSX syntax errors...\n');
  
  try {
    // Find all page files
    const files = await glob('app/**/*.tsx', { cwd: '/workspace' });
    
    for (const file of files) {
      const fullPath = path.join('/workspace', file);
      
      try {
        let content = fs.readFileSync(fullPath, 'utf8');
        const originalContent = content;
        
        // Fix common JSX syntax errors
        content = content
          // Fix semicolons in JSX attributes
          .replace(/className="([^"]*)"\s*;/g, 'className="$1"')
          .replace(/href="([^"]*)"\s*;/g, 'href="$1"')
          .replace(/onClick={([^}]*)}\s*;/g, 'onClick={$1}')
          .replace(/onKeyDown={([^}]*)}\s*;/g, 'onKeyDown={$1}')
          // Fix object property semicolons
          .replace(/popular:\s*false\s*;/g, 'popular: false')
          .replace(/benefit:\s*'([^']*)'\s*;/g, "benefit: '$1'")
          // Fix JSX tag syntax
          .replace(/<a"\s*/g, '<a ')
          .replace(/<button"\s*/g, '<button ')
          .replace(/<div"\s*/g, '<div ')
          .replace(/<span"\s*/g, '<span ')
          // Fix closing tag syntax
          .replace(/<\/a"\s*>/g, '</a>')
          .replace(/<\/button"\s*>/g, '</button>')
          .replace(/<\/div"\s*>/g, '</div>')
          .replace(/<\/span"\s*>/g, '</span>')
          // Fix aria attributes
          .replace(/aria-expanded={([^}]*)}\s*;/g, 'aria-expanded={$1}')
          .replace(/aria-haspopup={([^}]*)}\s*;/g, 'aria-haspopup={$1}')
          // Fix text content with quotes
          .replace(/>\s*"([^"]*)"\s*</g, '>$1<')
          .replace(/>\s*"([^"]*)"\s*$/gm, '>$1')
          // Fix extra quotes in attributes
          .replace(/href="([^"]*)"\s*"/g, 'href="$1"')
          .replace(/className="([^"]*)"\s*"/g, 'className="$1"')
          // Fix semicolons in object properties
          .replace(/(\w+):\s*([^,}]+)\s*;/g, '$1: $2,')
          .replace(/,(\s*})/g, '$1'); // Remove trailing commas before closing braces
        
        if (content !== originalContent) {
          fs.writeFileSync(fullPath, content);
          console.log(`✅ Fixed JSX syntax in ${file}`);
        }
        
      } catch (error) {
        console.warn(`⚠️  Could not process ${file}:`, error.message);
      }
    }
    
    console.log('\n✅ JSX syntax fixes completed!');
  } catch (error) {
    console.error('❌ Error during JSX syntax fix:', error);
  }
}

// Run the fix
fixJSXSyntax().catch(console.error);