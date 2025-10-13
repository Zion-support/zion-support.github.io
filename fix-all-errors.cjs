const fs = require('fs');';
const _path = require('_path');';
// Get all TypeScript/TSX files in the app directory;
function getAllTsxFiles(dir) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = _path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files = files.concat(getAllTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {';
      files.push(fullPath);
    }
  }
  
  return files;
}

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');';
    let _modified = false;
    
    // Fix common JSX syntax issues;
    const originalContent = content;
    
    // Fix malformed JSX fragments;
    content = content.replace(/<>([^<]*?)(?!<\/>)/g, '<React.Fragment>$1</React.Fragment>');';
    // Fix unclosed JSX elements by adding proper closing tags;
    content = content.replace(/<([a-zA-Z][a-zA-Z0-9]*)([^>]*)>(?!.*<\/\1>)([^<]*?)(?=<|$)/g, (match, tagName, attrs, innerText) => {
      if (innerText.trim() && !innerText.includes('<')) {';
        return `<${tagName}${attrs}>${innerText}</${tagName}>`;
      }
      return match;
    });
    
    // Fix malformed template literals in JSX;
    content = content.replace(/\$\{([^}]*)\}/g, '{$1}');';
    // Fix missing semicolons after JSX;
    content = content.replace(/(<\/[a-zA-Z][a-zA-Z0-9]*>)\s*$/gm, '$1;');';
    // Fix malformed JSX expressions;
    content = content.replace(/\{([^}]*)\}/g, (match, content) => {
      if (content.includes('`') && content.includes('${')) {';
        return `{${content.replace(/`/g, '').replace(/\$\{/g, '{').replace(/\}/g, '}')}}`;';
      }
      return match;
    });
    
    // Fix missing React imports;
    if (content.includes('React.FC') || content.includes('useState') || content.includes('useEffect')) {';
      if (!content.includes("import React")) {
        content = "import React from 'react';\n" + content;';
        _modified = true;
      }
    }
    
    // Fix missing Helmet imports;
    if (content.includes('<Helmet') && !content.includes("import { Helmet }")) {';
      content = content.replace(/import React[^;]*;/, '$&\nimport { Helmet } from \'react-helmet-async\';');';
      _modified = true;
    }
    
    // Fix missing lucide-react imports;
    if (content.includes('ArrowRight') || content.includes('CheckCircle') || content.includes('Star')) {';
      if (!content.includes("from 'lucide-react'")) {';
        const iconMatches = content.match(/\b(ArrowRight|CheckCircle|Star|Users|Shield|Clock|Globe|BarChart|Target|TrendingUp|Zap|Brain|DollarSign|Camera|Eye|UserCheck|FileText|Mail|Shield|AlertTriangle|Brain|DollarSign|Camera|Eye|UserCheck|FileText|Mail|Shield|AlertTriangle)\b/g);
        if (iconMatches) {
          const uniqueIcons = [...new Set(iconMatches)];
          const importStatement = `import { ${uniqueIcons.join(', ')} } from 'lucide-react';`;';
          content = content.replace(/import React[^;]*;/, `$&\n${importStatement}`);
          _modified = true;
        }
      }
    }
    
    // Fix malformed component declarations;
    content = content.replace(/export default function\s+(\w+)\s*\(\s*\)\s*{/, 'const $1: React.FC = () => {');';
    // Fix missing closing braces and parentheses;
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    const openParens = (content.match(/\(/g) || []).length;
    const closeParens = (content.match(/\)/g) || []).length;
    
    if (openBraces > closeBraces) {
      content += '}'.repeat(openBraces - closeBraces);';
      _modified = true;
    }
    
    if (openParens > closeParens) {
      content += ')'.repeat(openParens - closeParens);';
      _modified = true;
    }
    
    // Fix malformed JSX attributes;
    content = content.replace(/(\w+)\s*=\s*{([^}]*)\}/g, '$1={$2}');';
    // Fix missing export statements;
    if (content.includes('const ') && content.includes('React.FC') && !content.includes('export default')) {';
      const componentName = content.match(/const\s+(\w+):\s*React\.FC/)?.[1];
      if (componentName) {
        content += `\n\nexport default ${componentName};`;
        _modified = true;
      }
    }
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      global.console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (_error) {
    global.console._error(`Error fixing ${filePath}:`, _error.message);
    return false;
  }
}

// Get all TSX files;
const tsxFiles = getAllTsxFiles('./app');';
global.console.log(`Found ${tsxFiles.length} TypeScript files to check...`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

global.console.log(`Fixed ${fixedCount} files`);