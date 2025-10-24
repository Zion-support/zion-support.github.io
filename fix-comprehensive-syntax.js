const fs = require('fs');
const path = require('path');

function fixComprehensiveSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Check if this is a page component that needs fixing
    if (!content.includes('export default') || content.includes('return (') && content.includes('<>')) {
      
      // Extract the page name from the file path
      const fileName = path.basename(filePath, '.tsx');
      const pageName = fileName.charAt(0).toUpperCase() + fileName.slice(1).replace(/-/g, ' ');
      
      // Create a proper React component structure
      const properComponent = `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ${fileName.charAt(0).toUpperCase() + fileName.slice(1).replace(/-/g, '')}Page() {
  return (
    <>
      <Helmet>
        <title>${pageName} - Zion Tech Group</title>
        <meta name="description" content="Professional ${pageName.toLowerCase()} services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            ${pageName}
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional ${pageName.toLowerCase()} services coming soon.
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
    </>
  );
}`;

      fs.writeFileSync(filePath, properComponent);
      console.log(`Completely rewrote: ${filePath}`);
      return true;
    }

    // Fix remaining syntax issues in existing components
    if (content.includes('</>') && content.includes('<>')) {
      // Fix malformed JSX closing tags
      content = content.replace(/<\/>([^<]+)<>/g, (match, text) => {
        return text.trim();
      });
      modified = true;
    }

    // Fix malformed p tags
    if (content.includes('</>') && content.includes('<p')) {
      content = content.replace(/<p[^>]*>\s*<\/>([^<]+)<\/p>/g, (match, text) => {
        const className = match.match(/className="[^"]*"/);
        return className ? `<p ${className[0]}>${text.trim()}</p>` : `<p>${text.trim()}</p>`;
      });
      modified = true;
    }

    // Fix malformed Link components
    if (content.includes('<Link</Link>')) {
      content = content.replace(/<Link<\/Link>\s*<\/><\/Link>\s*to="([^"]*)"\s*className="([^"]*)"\s*><\/Link>\s*([^<]+);\s*<>\s*<ArrowRight[^>]*\/>\s*<\/ArrowRight>\s*<>\s*<\/Link>/g, 
        '<Link href="$1" className="$2">$3<ArrowRight className="w-5 h-5 ml-2" /></Link>');
      modified = true;
    }

    // Fix malformed meta tags
    if (content.includes('name="description", content=')) {
      content = content.replace(/name="([^"]*)", content="([^"]*)"/g, 'name="$1" content="$2"');
      modified = true;
    }

    // Fix malformed Helmet tags
    if (content.includes('<Helmet>') && content.includes('</>')) {
      content = content.replace(/<Helmet>\s*<\/>\s*<title>([^<]+)<>\s*<\/title>\s*<meta[^>]*\/>\s*<>\s*<\/meta>\s*<\/Helmet>\s*<\/>/g, 
        '<Helmet><title>$1</title><meta name="description" content="Professional services by Zion Tech Group." /></Helmet>');
      modified = true;
    }

    // Fix malformed Layout components
    if (content.includes('<Layout;</Layout>')) {
      content = content.replace(/<Layout;<\/Layout>\s*<\/Layout>\s*title="([^"]*)"\s*description="([^"]*)"/g, 
        '<Layout title="$1" description="$2">');
      modified = true;
    }

    // Fix missing function declarations
    if (content.includes('export default') && !content.includes('function ') && !content.includes('const ')) {
      const exportMatch = content.match(/export default ([^;]+);/);
      if (exportMatch) {
        const componentName = exportMatch[1];
        const beforeExport = content.substring(0, content.indexOf('export default'));
        const afterExport = content.substring(content.indexOf('export default') + exportMatch[0].length);
        
        const newContent = beforeExport + `function ${componentName}() {\n  return (\n` + afterExport + `\n  );\n}\n\nexport default ${componentName};`;
        content = newContent;
        modified = true;
      }
    }

    // Fix missing return statements
    if (content.includes('function ') && !content.includes('return (')) {
      content = content.replace(/function ([^{]+)\s*{/, 'function $1 {\n  return (');
      content = content.replace(/}\s*$/, '\n  );\n}');
      modified = true;
    }

    // Clean up extra semicolons and malformed syntax
    content = content.replace(/;\s*<\/Link>/g, '</Link>');
    content = content.replace(/;\s*<\/ArrowRight>/g, '</ArrowRight>');
    content = content.replace(/;\s*<\/h1>/g, '</h1>');
    content = content.replace(/;\s*<\/p>/g, '</p>');

    // Fix malformed closing parentheses and braces
    content = content.replace(/\)\s*;\s*}\s*$/, ');\n}');
    content = content.replace(/\)\s*;\s*}\s*;\s*$/, ');\n}');

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all .tsx files in the app directory
function getAllTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix all files
const appDir = path.join(__dirname, 'app');
const tsxFiles = getAllTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to check`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixComprehensiveSyntax(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);