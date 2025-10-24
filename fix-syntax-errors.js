const fs = require('fs');
const path = require('path');

// Common imports that are missing
const commonImports = {
  'Navigation': "import Navigation from '@/components/Navigation';",
  'ArrowRight': "import { ArrowRight } from 'lucide-react';",
  'CheckCircle': "import { CheckCircle } from 'lucide-react';",
  'Footer': "import Footer from '@/components/Footer';",
  'Link': "import Link from 'next/link';",
  'Helmet': "import { Helmet } from 'react-helmet-async';"
};

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix return() statements
    if (content.includes('return()')) {
      content = content.replace(/return\(\)/g, 'return (');
      modified = true;
    }

    // Fix malformed JSX closing tags like </>text<>
    content = content.replace(/<\/>([^<]+)<>/g, (match, text) => {
      return text.trim();
    });
    
    // Fix malformed opening tags like <title>text</>
    content = content.replace(/<title>\s*<\/>([^<]+)<>/g, '<title>$1</title>');
    
    // Fix malformed h1 tags
    content = content.replace(/<h1[^>]*>\s*<\/>([^<]+)<>/g, (match, text) => {
      const className = match.match(/className="[^"]*"/);
      return className ? `<h1 ${className[0]}>${text.trim()}</h1>` : `<h1>${text.trim()}</h1>`;
    });
    
    // Fix malformed p tags
    content = content.replace(/<p[^>]*>\s*<\/>([^<]+)<>/g, (match, text) => {
      const className = match.match(/className="[^"]*"/);
      return className ? `<p ${className[0]}>${text.trim()}</p>` : `<p>${text.trim()}</p>`;
    });

    // Fix malformed Link components
    content = content.replace(/<Link;<\/Link>\s*<\/><\/Link>\s*to="([^"]*)"\s*className="([^"]*)"\s*><\/Link>\s*([^<]+);\s*<>\s*<ArrowRight[^>]*\/>\s*<\/ArrowRight>\s*<>\s*<\/Link>/g, 
      '<Link href="$1" className="$2">$3<ArrowRight className="w-5 h-5 ml-2" /></Link>');

    // Fix malformed meta tags
    content = content.replace(/<meta name="([^"]*)", content="([^"]*)" \/>\s*<>\s*<\/meta>/g, 
      '<meta name="$1" content="$2" />');

    // Fix malformed Helmet tags
    content = content.replace(/<Helmet>\s*<\/>\s*<title>([^<]+)<>\s*<\/title>\s*<meta[^>]*\/>\s*<>\s*<\/meta>\s*<\/Helmet>\s*<\/>/g, 
      '<Helmet><title>$1</title><meta name="description" content="Professional services by Zion Tech Group." /></Helmet>');

    // Fix malformed div structures
    content = content.replace(/<div[^>]*>\s*<\/>\s*<\/div>/g, '</div>');

    // Add missing imports
    const lines = content.split('\n');
    const importLines = [];
    const otherLines = [];
    
    let inImports = true;
    for (const line of lines) {
      if (inImports && (line.startsWith('import ') || line.startsWith("'use client';") || line.trim() === '')) {
        importLines.push(line);
      } else {
        inImports = false;
        otherLines.push(line);
      }
    }

    // Check what imports are needed
    const neededImports = [];
    for (const [component, importStatement] of Object.entries(commonImports)) {
      if (content.includes(`<${component}`) && !content.includes(importStatement.split(' ')[1])) {
        neededImports.push(importStatement);
      }
    }

    // Add missing imports
    if (neededImports.length > 0) {
      const newContent = [...importLines, ...neededImports, ...otherLines].join('\n');
      content = newContent;
      modified = true;
    }

    // Fix component structure issues
    if (content.includes('export default') && content.includes('const ') && content.includes('React.FC')) {
      // Fix the order: const first, then export default
      const exportMatch = content.match(/export default ([^;]+);/);
      const constMatch = content.match(/const ([^:]+): React\.FC[^}]+}/);
      
      if (exportMatch && constMatch) {
        const componentName = constMatch[1];
        const componentBody = constMatch[0];
        
        content = content.replace(/export default [^;]+;/, '');
        content = content.replace(/const [^:]+: React\.FC[^}]+}/, '');
        
        // Reconstruct properly
        const newContent = componentBody + '\n\nexport default ' + componentName + ';';
        content = content.replace(/const [^:]+: React\.FC[^}]+}/, newContent);
        modified = true;
      }
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
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);