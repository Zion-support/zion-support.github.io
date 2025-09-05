const fs = require('fs');
const path = require('path');

// Function to fix all syntax errors
function fixAllSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix malformed arrow functions with (} instead of (
    content = content.replace(/\.map\([^)]*\) => \(\)/g, (match) => {
      return match.replace(/\(\)/g, '');
    }
});
    
    // Fix malformed JSX elements with } instead of >
    content = content.replace(/<motion\.article\}/g, '<motion.article');
    content = content.replace(/<motion\.div\}/g, '<motion.div');
    content = content.replace(/<div\}/g, '<div');
    content = content.replace(/<section\}/g, '<section');
    content = content.replace(/<h1\}/g, '<h1');
    content = content.replace(/<h2\}/g, '<h2');
    content = content.replace(/<h3\}/g, '<h3');
    content = content.replace(/<p\}/g, '<p');
    content = content.replace(/<span\}/g, '<span');
    content = content.replace(/<a\}/g, '<a');
    content = content.replace(/<Link\}/g, '<Link');
    content = content.replace(/<button\}/g, '<button');
    content = content.replace(/<input\}/g, '<input');
    content = content.replace(/<table\}/g, '<table');
    content = content.replace(/<thead\}/g, '<thead');
    content = content.replace(/<tbody\}/g, '<tbody');
    content = content.replace(/<tr\}/g, '<tr');
    content = content.replace(/<th\}/g, '<th');
    content = content.replace(/<td\}/g, '<td');
    content = content.replace(/<ul\}/g, '<ul');
    content = content.replace(/<li\}/g, '<li');
    content = content.replace(/<form\}/g, '<form');
    content = content.replace(/<label\}/g, '<label');
    content = content.replace(/<select\}/g, '<select');
    content = content.replace(/<option\}/g, '<option');
    content = content.replace(/<textarea\}/g, '<textarea');
    content = content.replace(/<img\}/g, '<img');
    content = content.replace(/<video\}/g, '<video');
    content = content.replace(/<audio\}/g, '<audio');
    content = content.replace(/<iframe\}/g, '<iframe');
    content = content.replace(/<canvas\}/g, '<canvas');
    content = content.replace(/<svg\}/g, '<svg');
    content = content.replace(/<path\}/g, '<path');
    content = content.replace(/<circle\}/g, '<circle');
    content = content.replace(/<rect\}/g, '<rect');
    content = content.replace(/<line\}/g, '<line');
    content = content.replace(/<polygon\}/g, '<polygon');
    content = content.replace(/<g\}/g, '<g');
    content = content.replace(/<defs\}/g, '<defs');
    content = content.replace(/<clipPath\}/g, '<clipPath');
    content = content.replace(/<mask\}/g, '<mask');
    content = content.replace(/<pattern\}/g, '<pattern');
    content = content.replace(/<linearGradient\}/g, '<linearGradient');
    content = content.replace(/<radialGradient\}/g, '<radialGradient');
    content = content.replace(/<stop\}/g, '<stop');
    content = content.replace(/<text\}/g, '<text');
    content = content.replace(/<tspan\}/g, '<tspan');
    content = content.replace(/<foreignObject\}/g, '<foreignObject');
    
    // Fix malformed template literals
    content = content.replace(/`([^`]*)\s*$/gm, (match, content) => {
      if (content.includes('${') && !content.endsWith('`')) {
        return match + '`';
      }
      return match;
    }
});
    
    // Fix malformed JSX expressions
    content = content.replace(/\{([^}]*)\s*$/gm, (match, content) => {
      if (content.includes('map') && !content.includes('}')) {
        return match + '}';
      }
      return match;
    }
});
    
    // Fix missing closing braces in function components
    if (content.includes('export default function') && !content.trim().endsWith('}')) {
      content = content.trim() + '\n}';
    }
    
    // Fix missing closing braces in arrow functions
    if (content.includes('const') && content.includes('=>') && !content.trim().endsWith('}')) {
      content = content.trim() + '\n}';
    }
    
    // Fix unterminated string constants
    content = content.replace(/from 'react';''/g, "from 'react';");
    content = content.replace(/from 'next\/link';''/g, "from 'next/link';");
    content = content.replace(/from 'next\/head';''/g, "from 'next/head';");
    content = content.replace(/from 'framer-motion';'/g, "from 'framer-motion';");
    content = content.replace(/from 'lucide-react';'/g, "from 'lucide-react';");
    
    // Fix malformed import blocks
    content = content.replace(/import \{\s*\/\/ TODO: Implement\s*\}\s*([^}]+)\s*\} from 'lucide-react';'/g, (match, imports) => {
      const cleanImports = imports
        .split(',')
        .map(imp => imp.trim())
        .filter(imp => imp && !imp.includes('//'))
        .join(',\n  ');
      return `import {\n  ${cleanImports}\n} from 'lucide-react';`;
    }
});
    
    // Fix object syntax errors
    content = content.replace(/"([^"]+)",""/g, '"$1"');
    content = content.replace(/([a-zA-Z_][a-zA-Z0-9_]*):\s*"([^"]+)",\s*"/g, '$1: "$2",');
    content = content.replace(/([a-zA-Z_][a-zA-Z0-9_]*):\s*([^,}]+);/g, '$1: $2,');
    content = content.replace(/([a-zA-Z_][a-zA-Z0-9_]*):\s*([^,}]+),\]/g, '$1: $2]');
    
    // Fix array syntax errors
    content = content.replace(/\[\s*"([^"]+)",""/g, '["$1"');
    content = content.replace(/"([^"]+)",""/g, '"$1"');
    content = content.replace(/([a-zA-Z_][a-zA-Z0-9_]*),\]/g, '$1]');
    
    // Fix JSX syntax errors
    content = content.replace(/<([A-Z][a-zA-Z0-9]*);/g, '<$1');
    content = content.replace(/<\/[A-Z][a-zA-Z0-9]*>"/g, '</$1>');
    content = content.replace(/className="([^"]+)""/g, 'className="$1"');
    content = content.replace(/href="([^"]+)""/g, 'href="$1"');
    content = content.replace(/title="([^"]+)""/g, 'title="$1"');
    content = content.replace(/description="([^"]+)""/g, 'description="$1"');
    
    // Fix closing tags
    content = content.replace(/<\/MainLayout>"/g, '</MainLayout>');
    content = content.replace(/<\/motion\.div>"/g, '</motion.div>');
    content = content.replace(/<\/div>"/g, '</div>');
    content = content.replace(/<\/section>"/g, '</section>');
    content = content.replace(/<\/h1>"/g, '</h1>');
    content = content.replace(/<\/h2>"/g, '</h2>');
    content = content.replace(/<\/h3>"/g, '</h3>');
    content = content.replace(/<\/p>"/g, '</p>');
    content = content.replace(/<\/span>"/g, '</span>');
    content = content.replace(/<\/a>"/g, '</a>');
    content = content.replace(/<\/Link>"/g, '</Link>');
    
    // Fix function syntax
    content = content.replace(/export default function ([A-Z][a-zA-Z0-9]*)\(\) \{"/g, 'export default function $1() {');
    content = content.replace(/return \("/g, 'return (');
    
    // Fix template literals
    content = content.replace(/\$\{([^}]+)\}\`/g, '${$1}');
    
    // Fix conditional expressions
    content = content.replace(/\?\s*'([^']+)'\s*:/g, '? "$1" :');
    content = content.replace(/\?\s*"([^"]+)"\s*:/g, '? "$1" :');
    
    // Fix extra closing parentheses and braces at the end
    content = content.replace(/\s*\),\s*\}\s*$/, '');
    content = content.replace(/\s*\}\s*$/, '');
    
    // Fix malformed template literals
    content = content.replace(/toLowerCase\(\)\.replace\(/g, 'toLowerCase().replace(');
    content = content.replace(/replace\(/g, 'replace(');
    
    // Fix missing closing quotes in template literals
    content = content.replace(/`([^`]*)\s*$/gm, (match, content) => {
      if (content.includes('${') && !content.endsWith('`')) {
        return match + '`';
      }
      return match;
    }
});
    
    // Fix malformed JSX expressions
    content = content.replace(/\{([^}]*)\s*$/gm, (match, content) => {
      if (content.includes('map') && !content.includes('}')) {
        return match + '}';
      }
      return match;
    }
});
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed all syntax in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing all syntax in ${filePath}:`, error.message);
    return false;
  }
}

// Get all TypeScript/JavaScript files in pages directory
function getAllPageFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllPageFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const pagesDir = '/workspace/pages';
const pageFiles = getAllPageFiles(pagesDir);

console.log(`Found ${pageFiles.length} page files to check for all syntax errors...`);

let fixedCount = 0;
for (const file of pageFiles) {
  if (fixAllSyntax(file)) {
    fixedCount++;
  }
}

console.log(`Fixed all syntax in ${fixedCount} files out of ${pageFiles.length} total files.`);