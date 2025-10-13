#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Icon corrections
const iconCorrections = {
  'watch': 'Watch',
  'Paste': 'Copy',
  'Flash': 'Zap',
  'Passport': 'FileText',
  'CalendarTrash': 'CalendarX',
  'CalendarTreasure': 'CalendarHeart',
  'CalendarHassium': 'CalendarCheck',
  'Scanner': 'Scan',
  'Fax': 'FileText',
  'Stop': 'Square',
  'Shuffle2': 'Shuffle',
  'Stopwatch': 'Timer'
};

// Common missing imports
const commonImports = {
  'Globe': 'Globe',
  'ArrowRight': 'ArrowRight',
  'Star': 'Star',
  'Zap': 'Zap',
  'Brain': 'Brain',
  'Activity': 'Activity',
  'Clock': 'Clock',
  'Store': 'Store',
  'ShoppingCart': 'ShoppingCart',
  'Code': 'Code',
  'Calendar': 'Calendar'
};

async function fixRemainingErrors() {
  const filesToProcess = await glob('app/**/*.tsx', { cwd: process.cwd() });
  
  console.log(`Processing ${filesToProcess.length} files...`);
  
  filesToProcess.forEach(filePath => {
    const fullPath = path.join(process.cwd(), filePath);
    let content = fs.readFileSync(fullPath, 'utf8');
    let modified = false;
    
    // Fix icon name corrections
    Object.entries(iconCorrections).forEach(([wrong, correct]) => {
      if (content.includes(`'${wrong}'`)) {
        content = content.replace(new RegExp(`'${wrong}'`, 'g'), `'${correct}'`);
        modified = true;
      }
    });
    
    // Fix duplicate imports
    if (content.includes('Duplicate identifier')) {
      // Remove duplicate Cloud imports
      const cloudMatches = content.match(/Cloud[,\s]*Cloud/g);
      if (cloudMatches) {
        content = content.replace(/Cloud[,\s]*Cloud/g, 'Cloud');
        modified = true;
      }
      
      // Remove duplicate Castle imports
      const castleMatches = content.match(/Castle[,\s]*Castle/g);
      if (castleMatches) {
        content = content.replace(/Castle[,\s]*Castle/g, 'Castle');
        modified = true;
      }
    }
    
    // Find missing imports by looking for JSX usage
    const missingImports = [];
    Object.entries(commonImports).forEach(([iconName, importName]) => {
      if (content.includes(`<${iconName}`) && !content.includes(importName)) {
        missingImports.push(importName);
      }
    });
    
    // Add missing imports
    if (missingImports.length > 0) {
      const importMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/);
      if (importMatch) {
        const existingImports = importMatch[1].split(',').map(imp => imp.trim());
        const allImports = [...new Set([...existingImports, ...missingImports])];
        const newImport = `import { ${allImports.join(', ')} } from "lucide-react";`;
        content = content.replace(importMatch[0], newImport);
        modified = true;
      }
    }
    
    // Add missing data arrays
    if (content.includes('testimonials.map(') && !content.includes('const testimonials =')) {
      const testimonialsData = `const testimonials = [
        {
          name: "John Smith",
          role: "CEO, TechCorp",
          content: "Zion Tech Group transformed our business with their innovative AI solutions. Highly recommended!",
          rating: 5
        },
        {
          name: "Sarah Johnson",
          role: "CTO, InnovateLabs", 
          content: "The team's expertise and dedication to excellence is unmatched. Our productivity increased by 300%.",
          rating: 5
        },
        {
          name: "Mike Chen",
          role: "Founder, StartupXYZ",
          content: "Professional, reliable, and innovative. They delivered exactly what we needed and more.",
          rating: 5
        }
      ];`;
      
      const firstConstMatch = content.match(/(const \w+ = \[[\s\S]*?\];)/);
      if (firstConstMatch) {
        content = content.replace(firstConstMatch[0], `${firstConstMatch[0]}\n\n  ${testimonialsData}`);
        modified = true;
      }
    }
    
    // Fix type annotations
    content = content.replace(/testimonials\.map\(\(testimonial, index\)/g, 'testimonials.map((testimonial: any, index: number)');
    
    // Remove SEOOptimizer usage
    if (content.includes('SEOOptimizer')) {
      content = content.replace(/<SEOOptimizer[^>]*\/>/g, '');
      content = content.replace(/<SEOOptimizer[^>]*>[\s\S]*?<\/SEOOptimizer>/g, '');
      content = content.replace(/import.*SEOOptimizer.*from.*['"][^'"]*['"];?\n?/g, '');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(fullPath, content);
      console.log(`Fixed: ${filePath}`);
    }
  });
  
  console.log('Remaining errors fixed!');
}

fixRemainingErrors().catch(console.error);