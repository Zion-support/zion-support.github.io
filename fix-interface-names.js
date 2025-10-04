#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Files that need interface name fixes
const filesToFix = [
  'src/content/blog-posts.ts',
  'src/content/case-studies.ts',
  'src/content/content-config.ts',
  'src/content/enhanced-promotional-banners.ts',
  'src/content/latest-articles.ts',
  'src/content/new-articles-2025.ts',
  'src/content/new-insights.ts',
  'src/content/new-services-2026.ts',
  'src/content/october-2025-cutting-edge-innovations.ts',
  'src/content/revolutionary-ai-breakthroughs-2025.ts',
  'src/content/sept-30-breakthrough-articles-2025.ts',
  'src/data/blog-posts.ts',
  'src/types/index.ts',
  'src/types/next-stubs.d.ts'
];

function fixInterfaceNames(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    const content = fs.readFileSync(fullPath, 'utf8');
    
    // Extract the base name and convert to PascalCase
    const fileName = path.basename(filePath, '.ts');
    const componentName = fileName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
    
    // Fix the interface name
    const fixedContent = content
      .replace(/export interface [a-zA-Z0-9-]+Config/g, `export interface ${componentName}Config`)
      .replace(/export const default[a-zA-Z0-9-]+Config/g, `export const default${componentName}Config`);
    
    if (content !== fixedContent) {
      fs.writeFileSync(fullPath, fixedContent);
      console.log(`✓ Fixed interface names in: ${filePath}`);
    } else {
      console.log(`File looks OK: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

console.log('Starting interface name fixes...\n');

filesToFix.forEach(fixInterfaceNames);

console.log('\n✓ Interface name fixes completed!');