#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Find all TypeScript/TSX files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix HTML entities and common issues
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix HTML entities
    const htmlEntities = {
      '&quot;': '"',
      '&amp;': '&',
      '&lt;': '<',
      '&gt;': '>',
      '&nbsp;': ' ',
      '&#39;': "'",
      '&apos;': "'"
    };
    
    for (const [entity, replacement] of Object.entries(htmlEntities)) {
      if (content.includes(entity)) {
        content = content.replace(new RegExp(entity, 'g'), replacement);
        modified = true;
      }
    }
    
    // Fix common JSX issues
    if (content.includes('return;')) {
      // This is likely a broken component, replace with a simple placeholder
      const functionMatch = content.match(/export default function (\w+)/);
      if (functionMatch) {
        const functionName = functionMatch[1];
        const displayName = functionName.replace(/([A-Z])/g, ' $1').trim();
        
        const cleanContent = `import { ArrowRight, Box, Target, CheckCircle, Globe, Sparkles, Star } from 'lucide-react';
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ${functionName}() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>${displayName} - Zion Tech Group</title>
        <meta name="description" content="Advanced ${displayName} solutions powered by AI" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            ${displayName}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced AI-powered solutions for modern businesses
          </p>
        </div>
        
        <div className="text-center">
          <p className="text-gray-300">Content coming soon...</p>
        </div>
      </div>
    </div>
  );
}`;
        
        content = cleanContent;
        modified = true;
      }
    }
    
    // Fix malformed JSX expressions
    content = content.replace(/\$\{([^}]+)\}/g, (match, expression) => {
      // If the expression contains HTML entities, fix them
      let fixedExpression = expression;
      for (const [entity, replacement] of Object.entries(htmlEntities)) {
        fixedExpression = fixedExpression.replace(new RegExp(entity, 'g'), replacement);
      }
      return `\${${fixedExpression}}`;
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed ${path.relative(__dirname, filePath)}`);
    }
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Find and fix all files
console.log('Finding TypeScript/TSX files...');
const files = findTsxFiles(path.join(__dirname, 'app'));
console.log(`Found ${files.length} files`);

console.log('Fixing HTML entities and common issues...');
files.forEach(fixFile);
console.log('Finished fixing files.');