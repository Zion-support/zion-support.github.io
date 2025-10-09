#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

/**
 * Fix import statement syntax errors
 */

async function fixImportSyntax() {
  console.log('🔧 Fixing import syntax errors...\n');
  
  try {
    // Find all TypeScript/JavaScript files
    const files = await glob('app/**/*.{ts,tsx,js,jsx}', { cwd: '/workspace' });
    
    for (const file of files) {
      const fullPath = path.join('/workspace', file);
      
      try {
        let content = fs.readFileSync(fullPath, 'utf8');
        const originalContent = content;
        
        // Fix import statement syntax
        content = content
          // Fix 'use client' directive
          .replace(/'use client',/g, "'use client';")
          // Fix import statements
          .replace(/import\s+([^,]+),\s*$/gm, 'import $1;')
          .replace(/import\s+([^,]+),\s*$/gm, 'import $1;')
          .replace(/from\s+'([^']+)',\s*$/gm, "from '$1';")
          .replace(/from\s+"([^"]+)",\s*$/gm, 'from "$1";')
          // Fix export statements
          .replace(/export\s+default\s+([^,]+),\s*$/gm, 'export default $1;')
          // Fix function declarations
          .replace(/const\s+([^=]+)\s*=\s*\([^)]*\)\s*=>\s*{,\s*$/gm, 'const $1 = () => {')
          .replace(/React\.FC\s*=\s*\([^)]*\)\s*=>\s*{,\s*$/gm, 'React.FC = () => {')
          // Fix JSX closing tags
          .replace(/<\/[^>]+>,\s*$/gm, (match) => match.replace(',', ''))
          // Fix object properties
          .replace(/(\w+):\s*([^,}]+),\s*$/gm, '$1: $2,')
          .replace(/,(\s*})/g, '$1'); // Remove trailing commas before closing braces
        
        if (content !== originalContent) {
          fs.writeFileSync(fullPath, content);
          console.log(`✅ Fixed import syntax in ${file}`);
        }
        
      } catch (error) {
        console.warn(`⚠️  Could not process ${file}:`, error.message);
      }
    }
    
    console.log('\n✅ Import syntax fixes completed!');
  } catch (error) {
    console.error('❌ Error during import syntax fix:', error);
  }
}

// Run the fix
fixImportSyntax().catch(console.error);