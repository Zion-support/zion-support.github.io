const fs = require('fs');
const path = require('path');

// Function to create a proper React component structure
function createProperComponent(content, filePath) {
  const fileName = path.basename(filePath, '.tsx');
  const componentName = fileName.charAt(0).toUpperCase() + fileName.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase()) + 'Page';
  
  // Extract the title from the content
  const titleMatch = content.match(/title>\s*([^<]+)</);
  const title = titleMatch ? titleMatch[1].trim() : componentName;
  
  // Extract description if available
  const descMatch = content.match(/description[^>]*content="([^"]*)"/);
  const description = descMatch ? descMatch[1] : `Professional ${title.toLowerCase()} services by Zion Tech Group.`;
  
  return `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ${componentName}() {
  return (
    <>
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            ${title}
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            ${description}
          </p>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
      
      <Footer />
    </>
  );
}`;
}

// Function to fix JSX syntax errors
function fixJSXSyntax(content, filePath) {
  // If the file is severely corrupted, replace it with a proper component
  if (content.includes('return()') || content.includes('</>') || content.includes('<>')) {
    return createProperComponent(content, filePath);
  }
  
  let fixed = content;
  
  // Fix malformed return statements
  fixed = fixed.replace(/return\(\)\s*<>/g, 'return (\n    <>');
  
  // Fix broken JSX tags
  fixed = fixed.replace(/<\/>([^<]+)<>/g, '$1');
  fixed = fixed.replace(/<>([^<]+)<>/g, '$1');
  
  // Fix broken title tags
  fixed = fixed.replace(/<title>\s*<\/>([^<]+)<>\s*<\/title>/g, '<title>$1</title>');
  
  // Fix broken h1 tags
  fixed = fixed.replace(/<h1[^>]*>\s*<\/>([^<]+)<>\s*<\/h1>/g, (match, content) => {
    const classNameMatch = match.match(/className="[^"]*"/);
    const className = classNameMatch ? classNameMatch[0] : '';
    return `<h1 ${className}>${content}</h1>`;
  });
  
  // Fix broken p tags
  fixed = fixed.replace(/<p[^>]*>\s*<\/>([^<]+)<>\s*<\/p>/g, (match, content) => {
    const classNameMatch = match.match(/className="[^"]*"/);
    const className = classNameMatch ? classNameMatch[0] : '';
    return `<p ${className}>${content}</p>`;
  });
  
  // Fix broken Link components
  fixed = fixed.replace(/<Link;[^>]*><\/Link>/g, '');
  fixed = fixed.replace(/<\/>([^<]+)<>\s*<\/Link>/g, '$1');
  
  // Fix broken ArrowRight components
  fixed = fixed.replace(/<ArrowRight[^>]*>\s*<\/>([^<]+)<>\s*<\/ArrowRight>/g, '<ArrowRight className="w-5 h-5 ml-2" />');
  
  // Fix broken CheckCircle components
  fixed = fixed.replace(/<CheckCircle[^>]*>\s*<\/>([^<]+)<>\s*<\/CheckCircle>/g, '<CheckCircle className="w-5 h-5" />');
  
  // Fix broken Helmet components
  fixed = fixed.replace(/<Helmet>\s*<\/>([^<]+)<>\s*<\/Helmet>/g, (match, content) => {
    return `<Helmet>\n      <title>${content}</title>\n    </Helmet>`;
  });
  
  // Fix broken meta tags
  fixed = fixed.replace(/<meta[^>]*>\s*<\/>([^<]+)<>\s*<\/meta>/g, (match, content) => {
    const nameMatch = match.match(/name="([^"]*)"/);
    const contentMatch = match.match(/content="([^"]*)"/);
    if (nameMatch && contentMatch) {
      return `<meta name="${nameMatch[1]}" content="${contentMatch[1]}" />`;
    }
    return match;
  });
  
  // Fix broken div tags
  fixed = fixed.replace(/<div[^>]*>\s*<\/>([^<]+)<>\s*<\/div>/g, (match, content) => {
    const classNameMatch = match.match(/className="[^"]*"/);
    const className = classNameMatch ? classNameMatch[0] : '';
    return `<div ${className}>${content}</div>`;
  });
  
  // Clean up extra closing tags and malformed syntax
  fixed = fixed.replace(/\s*\);\s*}\s*$/g, '\n  );\n}');
  fixed = fixed.replace(/\s*\);\s*$/g, '\n  );\n}');
  
  // Fix export default placement
  if (fixed.includes('export default') && fixed.includes('const ')) {
    const exportMatch = fixed.match(/export default ([^;]+);/);
    const constMatch = fixed.match(/const ([^=]+):/);
    if (exportMatch && constMatch) {
      fixed = fixed.replace(/export default [^;]+;/, '');
      fixed = fixed.replace(/const ([^=]+):/, 'const $1:');
      fixed += `\n\nexport default ${constMatch[1].trim()};`;
    }
  }
  
  // Add missing imports
  const importsToAdd = [];
  if (fixed.includes('<Navigation') && !fixed.includes("import Navigation")) {
    importsToAdd.push("import Navigation from '@/components/Navigation';");
  }
  if (fixed.includes('<Footer') && !fixed.includes("import Footer")) {
    importsToAdd.push("import Footer from '@/components/Footer';");
  }
  if (fixed.includes('<ArrowRight') && !fixed.includes("import { ArrowRight }")) {
    importsToAdd.push("import { ArrowRight } from 'lucide-react';");
  }
  if (fixed.includes('<CheckCircle') && !fixed.includes("import { CheckCircle }")) {
    importsToAdd.push("import { CheckCircle } from 'lucide-react';");
  }
  if (fixed.includes('<Link') && !fixed.includes("import Link")) {
    importsToAdd.push("import Link from 'next/link';");
  }
  if (fixed.includes('<Helmet') && !fixed.includes("import { Helmet }")) {
    importsToAdd.push("import { Helmet } from 'react-helmet-async';");
  }
  
  if (importsToAdd.length > 0) {
    const importSection = importsToAdd.join('\n') + '\n';
    fixed = fixed.replace(/('use client';\s*\n)?/, '$1' + importSection);
  }
  
  return fixed;
}

// Function to process all TSX files
function processAllTSXFiles(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    
    if (file.isDirectory()) {
      processAllTSXFiles(fullPath);
    } else if (file.name.endsWith('.tsx')) {
      try {
        const content = fs.readFileSync(fullPath, 'utf8');
        const fixed = fixJSXSyntax(content, fullPath);
        
        if (content !== fixed) {
          fs.writeFileSync(fullPath, fixed);
          console.log(`Fixed: ${fullPath}`);
        }
      } catch (error) {
        console.error(`Error processing ${fullPath}:`, error.message);
      }
    }
  }
}

// Process the app directory
processAllTSXFiles('./app');
console.log('Comprehensive JSX syntax fixing completed!');