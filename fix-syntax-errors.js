const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;

  // Fix missing commas in object literals
  fixed = fixed.replace(/(\w+):\s*"([^"]+)"\s*\n\s*(\w+):/g, '$1: "$2",\n    $3:');
  fixed = fixed.replace(/(\w+):\s*"([^"]+)"\s*\n\s*(\w+):/g, '$1: "$2",\n    $3:');
  fixed = fixed.replace(/(\w+):\s*\[([^\]]+)\]\s*\n\s*(\w+):/g, '$1: [$2],\n    $3:');
  fixed = fixed.replace(/(\w+):\s*([^,\n]+)\s*\n\s*(\w+):/g, '$1: $2,\n    $3:');

  // Fix missing commas in arrays
  fixed = fixed.replace(/"([^"]+)"\s*\n\s*"([^"]+)"/g, '"$1",\n    "$2"');
  fixed = fixed.replace(/(\w+)\s*\n\s*(\w+)/g, '$1,\n    $2');

  // Fix JSX structure issues
  fixed = fixed.replace(/<div><\/div>\s*<([^>]+)>/g, '<div>\n      <$1>');
  fixed = fixed.replace(/<\/div>\s*<div><\/div>/g, '</div>\n      <div>');
  
  // Fix missing closing tags
  fixed = fixed.replace(/<div([^>]*)>\s*<\/div>\s*<([^>]+)>/g, '<div$1>\n        <$2>');
  
  // Fix broken JSX attributes
  fixed = fixed.replace(/className="([^"]*)\s+([^"]*)"/g, 'className="$1 $2"');
  
  // Fix missing semicolons
  fixed = fixed.replace(/(\w+)\s*$/gm, '$1;');
  
  // Fix broken JSX elements
  fixed = fixed.replace(/<(\w+)\s*;\s*>/g, '<$1>');
  fixed = fixed.replace(/<\/\w+>\s*;\s*$/gm, '');
  
  // Fix array syntax
  fixed = fixed.replace(/\[\s*{\s*([^}]+)\s*}\s*\]/g, (match, content) => {
    const items = content.split(/\s*}\s*{\s*/);
    return '[\n    ' + items.map(item => `{${item}}`).join(',\n    ') + '\n  ]';
  });

  return fixed;
}

// Function to fix specific file patterns
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;

    // Fix missing commas in object literals (more specific patterns)
    content = content.replace(/(\w+):\s*"([^"]+)"\s*\n\s*(\w+):\s*"([^"]+)"/g, '$1: "$2",\n    $3: "$4"');
    content = content.replace(/(\w+):\s*"([^"]+)"\s*\n\s*(\w+):\s*\[([^\]]+)\]/g, '$1: "$2",\n    $3: [$4]');
    content = content.replace(/(\w+):\s*\[([^\]]+)\]\s*\n\s*(\w+):\s*"([^"]+)"/g, '$1: [$2],\n    $3: "$4"');

    // Fix JSX structure issues
    content = content.replace(/<div><\/div>\s*<Head>/g, '<div>\n      <Head>');
    content = content.replace(/<div><\/div>\s*<div/g, '<div>\n      <div');
    
    // Fix broken closing tags
    content = content.replace(/<\/div>\s*<\/div>\s*<\/div>/g, '</div>\n        </div>\n      </div>
      </div>
      </div>
      </div>
      </div>
      </div></div>
      </div></div>');
    
    // Fix missing closing tags in JSX
    content = content.replace(/<(\w+)([^>]*)>\s*<\/div>/g, '<$1$2></$1>');
    
    // Fix broken array syntax
    content = content.replace(/\[\s*{\s*icon:\s*(\w+)\s*title:\s*"([^"]+)"\s*description:\s*"([^"]+)"\s*benefits:\s*\[([^\]]+)\]\s*}\s*\]/g, 
      '[\n    {\n      icon: $1,\n      title: "$2",\n      description: "$3",\n      benefits: [$4]\n    }\n  ]');

    // Fix specific broken patterns
    content = content.replace(/<div><\/div>\s*<div className="min-h-screen/g, '<div>\n      <div className="min-h-screen');
    content = content.replace(/<div><\/div>\s*<section/g, '<div>\n      <section');
    content = content.replace(/<div><\/div>\s*<header/g, '<div>\n      <header');

    // Fix missing closing tags
    content = content.replace(/<div([^>]*)>\s*<\/div>\s*<div([^>]*)>/g, '<div$1>\n        <div$2>');

    // Fix broken JSX elements
    content = content.replace(/<(\w+)\s*;\s*>/g, '<$1>');
    content = content.replace(/<\/\w+>\s*;\s*$/gm, '');

    // Fix specific broken patterns in the files
    content = content.replace(/<div><\/div>\s*<Head>/g, '<div>\n      <Head>');
    content = content.replace(/<div><\/div>\s*<div className="min-h-screen/g, '<div>\n      <div className="min-h-screen');
    
    // Fix missing closing tags
    content = content.replace(/<div([^>]*)>\s*<\/div>\s*<div([^>]*)>/g, '<div$1>\n        <div$2>');
    
    // Fix broken array syntax
    content = content.replace(/\[\s*{\s*icon:\s*(\w+)\s*title:\s*"([^"]+)"\s*description:\s*"([^"]+)"\s*benefits:\s*\[([^\]]+)\]\s*}\s*\]/g, 
      '[\n    {\n      icon: $1,\n      title: "$2",\n      description: "$3",\n      benefits: [$4]\n    }\n  ]');

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix files
function fixFilesInDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip node_modules and other directories
      if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(file)) {
        fixedCount += fixFilesInDirectory(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Main execution
console.log('Starting syntax error fixes...');
const fixedCount = fixFilesInDirectory('/workspace');
console.log(`Fixed ${fixedCount} files`);
      </div>
      </div>
      </Head>
      </div>
      </Head>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </Head>
      </div>
      </Head>
      </div>
      </div>
      </div>
      </div>