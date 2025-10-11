#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix common syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common issues
    const fixes = [
      // Fix broken import statements
      {
        pattern: /import\s+React\s+from\s+['"]react['"];\s*import\s+{\s*Helmet\s*}\s+from\s+['"]react-helmet-async['"];\s*import\s+{\s*[^}]*}\s+from\s+['"]lucide-react['"];\s*import\s+Navigation\s+from\s+['"]\.\.\/components\/Navigation['"];\s*import\s+Footer\s+from\s+['"]\.\.\/components\/Footer['"];/,
        replacement: `'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Target, Users, Award, ArrowRight } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'`
      },
      // Fix broken JSX fragments
      {
        pattern: /<>\s*<>\s*<Helmet>/,
        replacement: '<>\n      <Helmet>'
      },
      // Fix missing closing tags
      {
        pattern: /<h1[^>]*>([^<]*)<\/h1>\s*<h3[^>]*>([^<]*)<\/h3>\s*<p[^>]*>([^<]*)<\/p>\s*<\/>\s*<\/>/,
        replacement: '<h1>$1</h1>\n            <h3>$2</h3>\n            <p>$3</p>\n          </>\n        </>'
      },
      // Fix broken JSX structure
      {
        pattern: /<div[^>]*>\s*<h1[^>]*>([^<]*)<\/h1>\s*<h3[^>]*>([^<]*)<\/h3>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>/,
        replacement: '<div>\n            <h1>$1</h1>\n            <h3>$2</h3>\n            <p>$3</p>\n          </div>'
      },
      // Fix broken function declarations
      {
        pattern: /const\s+(\w+)\s*:\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{\s*const\s+(\w+)\s*=\s*\[/,
        replacement: 'const $1: React.FC = () => {\n  const $2 = ['
      },
      // Fix broken array declarations
      {
        pattern: /const\s+(\w+)\s*=\s*\[\s*{\s*icon:\s*(\w+),\s*title:\s*['"]([^'"]*)['"],\s*description:\s*['"]([^'"]*)['"],\s*benefits:\s*\[([^\]]*)\]\s*}\s*,\s*{\s*icon:\s*(\w+),\s*title:\s*['"]([^'"]*)['"],\s*description:\s*['"]([^'"]*)['"],\s*benefits:\s*\[([^\]]*)\]\s*}\s*,\s*{\s*icon:\s*(\w+),\s*title:\s*['"]([^'"]*)['"],\s*description:\s*['"]([^'"]*)['"],\s*benefits:\s*\[([^\]]*)\]\s*}\s*,\s*{\s*icon:\s*(\w+),\s*title:\s*['"]([^'"]*)['"],\s*description:\s*['"]([^'"]*)['"],\s*benefits:\s*\[([^\]]*)\]\s*}\s*,\s*{\s*icon:\s*(\w+),\s*title:\s*['"]([^'"]*)['"],\s*description:\s*['"]([^'"]*)['"],\s*benefits:\s*\[([^\]]*)\]\s*}\s*,\s*{\s*icon:\s*(\w+),\s*title:\s*['"]([^'"]*)['"],\s*description:\s*['"]([^'"]*)['"],\s*benefits:\s*\[([^\]]*)\]\s*}\s*\]/,
        replacement: `const $1 = [
    {
      icon: $2,
      title: '$3',
      description: '$4',
      benefits: [$5]
    },
    {
      icon: $6,
      title: '$7',
      description: '$8',
      benefits: [$9]
    },
    {
      icon: $10,
      title: '$11',
      description: '$12',
      benefits: [$13]
    },
    {
      icon: $14,
      title: '$15',
      description: '$16',
      benefits: [$17]
    },
    {
      icon: $18,
      title: '$19',
      description: '$20',
      benefits: [$21]
    },
    {
      icon: $22,
      title: '$23',
      description: '$24',
      benefits: [$25]
    }
  ]`
      }
    ];
    
    // Apply fixes
    for (const fix of fixes) {
      if (fix.pattern.test(content)) {
        content = content.replace(fix.pattern, fix.replacement);
        modified = true;
      }
    }
    
    // Additional specific fixes for common patterns
    content = content
      // Fix broken JSX fragments
      .replace(/<>\s*<>\s*<Helmet>/g, '<>\n      <Helmet>')
      .replace(/<\/Helmet>\s*<\/>\s*<\/>/g, '</Helmet>\n      </>\n    </>')
      // Fix missing semicolons
      .replace(/(\w+)\s*=\s*\[([^\]]*)\]\s*$/gm, '$1 = [$2];')
      // Fix broken function returns
      .replace(/return\s*\(\s*<>\s*<Helmet>/g, 'return (\n    <>\n      <Helmet>')
      // Fix broken JSX structure
      .replace(/<div[^>]*>\s*<h1[^>]*>([^<]*)<\/h1>\s*<h3[^>]*>([^<]*)<\/h3>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>/g, 
        '<div>\n            <h1>$1</h1>\n            <h3>$2</h3>\n            <p>$3</p>\n          </div>')
      // Fix broken closing tags
      .replace(/<\/h1>\s*<h3[^>]*>([^<]*)<\/h3>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>/g, 
        '</h1>\n            <h3>$1</h3>\n            <p>$2</p>\n          </div>');
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix syntax errors
function findAndFixSyntaxErrors(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other common directories
      if (['node_modules', '.git', 'dist', 'build', '.next'].includes(file)) {
        continue;
      }
      fixedCount += findAndFixSyntaxErrors(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting syntax error fixes...');
const fixedCount = findAndFixSyntaxErrors('/workspace');
console.log(`Fixed syntax errors in ${fixedCount} files.`);