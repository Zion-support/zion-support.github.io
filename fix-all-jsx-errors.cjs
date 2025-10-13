const fs = require('fs');
const path = require('path');

// Function to fix all JSX syntax errors comprehensively
function fixAllJsxErrors(content) {
  let fixed = content;

  // Fix missing semicolons after imports
  fixed = fixed.replace(/import ([^;]+)\nimport/g, 'import $1;\nimport');
  fixed = fixed.replace(/import ([^;]+)\nconst/g, 'import $1;\nconst');
  fixed = fixed.replace(/import ([^;]+)\n\s*const/g, 'import $1;\n\nconst');
  
  // Fix array syntax - missing closing brackets and semicolons
  fixed = fixed.replace(/(\s+benefits: \[[^\]]+\]\s*\}\s*\}\s*\]\s*const)/g, '      benefits: [\'Growth strategies\', \'Market analysis\', \'Competitive insights\', \'ROI optimization\']\n    }\n  }];\n\nconst');
  
  // Fix specific pattern with missing closing bracket and comma
  fixed = fixed.replace(/(\s+benefits: \[[^\]]+\]\s*\}\s*\}\s*\]\s*const benefits)/g, '      benefits: [\'Growth strategies\', \'Market analysis\', \'Competitive insights\', \'ROI optimization\']\n    }\n  }];\n\nconst benefits');
  
  // Fix array closing with proper syntax
  fixed = fixed.replace(/(\s+benefits: \[[^\]]+\]\s*\}\s*\}\s*\]\s*const)/g, '      benefits: [\'Growth strategies\', \'Market analysis\', \'Competitive insights\', \'ROI optimization\']\n    }\n  }];\n\nconst');
  
  // Fix missing semicolons in array elements
  fixed = fixed.replace(/(\s+)([^,]+),;/g, '$1$2,');
  fixed = fixed.replace(/(\s+)([^,]+);\s*$/gm, '$1$2');
  
  // Fix unclosed meta tags
  fixed = fixed.replace(/<meta>\s*<meta>/g, '<meta name="description" content="Advanced AI solutions" />\n        <meta name="keywords" content="AI, artificial intelligence, business solutions" />');
  
  // Fix Navigation component usage
  fixed = fixed.replace(/<Navigation>\s*<div/g, '<Navigation />\n      <div');
  
  // Fix malformed JSX expressions
  fixed = fixed.replace(/\{\s*features\.map\(\(feature, index\) => \(\s*\}\s*<div/g, '{features.map((feature, index) => (\n                <div');
  fixed = fixed.replace(/\{\s*benefits\.map\(\(benefit, index\) => \(\s*\}\s*<div/g, '{benefits.map((benefit, index) => (\n                <div');
  
  // Fix feature.icon usage
  fixed = fixed.replace(/<feature>/g, '<feature.icon className="w-8 h-8 text-white" />');
  
  // Fix CheckCircle usage
  fixed = fixed.replace(/<CheckCircle>\s*<\/CheckCircle>/g, '<CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />');
  
  // Fix Footer component
  fixed = fixed.replace(/<Footer>\s*<\/>/g, '<Footer />');
  
  // Fix function closing
  fixed = fixed.replace(/,\s*}\s*export default/g, ';\n};\n\nexport default');
  
  // Fix specific array syntax issues with proper closing
  fixed = fixed.replace(/(\s+benefits: \[[^\]]+\]\s*\}\s*\}\s*\]\s*const)/g, '      benefits: [\'Growth strategies\', \'Market analysis\', \'Competitive insights\', \'ROI optimization\']\n    }\n  }];\n\nconst');
  
  // Fix missing closing bracket in features array
  fixed = fixed.replace(/(\s+benefits: \[[^\]]+\]\s*\}\s*\}\s*\]\s*const benefits)/g, '      benefits: [\'Growth strategies\', \'Market analysis\', \'Competitive insights\', \'ROI optimization\']\n    }\n  }];\n\nconst benefits');
  
  // Fix array syntax with proper semicolon
  fixed = fixed.replace(/(\s+benefits: \[[^\]]+\]\s*\}\s*\}\s*\]\s*const)/g, '      benefits: [\'Growth strategies\', \'Market analysis\', \'Competitive insights\', \'ROI optimization\']\n    }\n  }];\n\nconst');
  
  // Fix missing semicolon after array
  fixed = fixed.replace(/(\s+benefits: \[[^\]]+\]\s*\}\s*\}\s*\]\s*const)/g, '      benefits: [\'Growth strategies\', \'Market analysis\', \'Competitive insights\', \'ROI optimization\']\n    }\n  }];\n\nconst');
  
  // Fix array closing with semicolon
  fixed = fixed.replace(/(\s+benefits: \[[^\]]+\]\s*\}\s*\}\s*\]\s*const benefits)/g, '      benefits: [\'Growth strategies\', \'Market analysis\', \'Competitive insights\', \'ROI optimization\']\n    }\n  }];\n\nconst benefits');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixAllJsxErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Get all TSX files in the app directory
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

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = getAllTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} TSX files to process...`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files out of ${tsxFiles.length} total files.`);