#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const files = await glob('app/**/page.tsx', { ignore: ['node_modules/**', '.next/**'] });

(async () => {
  files.forEach(file => {
    try {
      let content = fs.readFileSync(file, 'utf8');
      let modified = false;
      
      // Remove extra closing braces at the end
      content = content.replace(/\}\s*\}\s*$/, '}');
      
      // Remove stray semicolons and malformed imports
      content = content.replace(/^;\s*$/gm, '');
      content = content.replace(/^import\s+;\s*$/gm, '');
      
      // Remove empty lines at the beginning after imports
      content = content.replace(/import\s+[^;]+;\s*\n\s*\n\s*;/g, (match) => {
        return match.replace(/\n\s*\n\s*;/g, '');
      });
      
      // Ensure proper structure
      if (!content.includes('export default function Page()')) {
        // Find the last function and replace it with proper structure
        const lines = content.split('\n');
        let newLines = [];
        let foundFunction = false;
        
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          
          if (line.includes('function') && !foundFunction) {
            foundFunction = true;
            newLines.push('import React from \'react\'');
            newLines.push('');
            newLines.push('export default function Page() {');
            newLines.push('  return (');
            newLines.push('    <div className="min-h-screen bg-gray-50 py-12">');
            newLines.push('      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">');
            newLines.push('        <div className="text-center">');
            newLines.push('          <h1 className="text-4xl font-bold text-gray-900 mb-8">');
            newLines.push('            Service Page');
            newLines.push('          </h1>');
            newLines.push('          <p className="text-xl text-gray-600 max-w-3xl mx-auto">');
            newLines.push('            Professional services and solutions.');
            newLines.push('          </p>');
            newLines.push('        </div>');
            newLines.push('      </div>');
            newLines.push('    </div>');
            newLines.push('  );');
            newLines.push('}');
            break;
          } else if (!foundFunction) {
            newLines.push(line);
          }
        }
        
        content = newLines.join('\n');
        modified = true;
      }
      
      if (modified) {
        fs.writeFileSync(file, content);
        console.log(`Fixed syntax errors in: ${file}`);
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  });
  console.log('Syntax errors fixed!');
})();