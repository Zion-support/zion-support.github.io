const fs = require('fs');
const path = require('path');

// Function to fix concatenated import statements
function fixImportStatements(content) {
  // Fix concatenated import statements
  content = content.replace(/import\s+([^;]+);'import\s+/g, (match, firstImport) => {
    return firstImport + ';\nimport ';
  });
  
  // Fix concatenated interface declarations
  content = content.replace(/interface\s+([^{]+){([^}]+)}'export\s+/g, (match, interfaceName, interfaceBody) => {
    return `interface ${interfaceName.trim()}{\n${interfaceBody}\n}\n\nexport `;
  });
  
  // Fix concatenated const declarations
  content = content.replace(/const\s+([^=]+)=([^;]+);'const\s+/g, (match, constName, constValue) => {
    return `${constName.trim()}=${constValue.trim()};\n\nconst `;
  });
  
  // Fix concatenated function declarations
  content = content.replace(/function\s+([^(]+)\(([^)]*)\)\s*{([^}]+)}'function\s+/g, (match, funcName, params, body) => {
    return `function ${funcName.trim()}(${params.trim()}) {\n${body}\n}\n\nfunction `;
  });
  
  // Fix concatenated arrow functions
  content = content.replace(/const\s+([^=]+)=\s*\(([^)]*)\)\s*=>\s*{([^}]+)}'const\s+/g, (match, varName, params, body) => {
    return `const ${varName.trim()} = (${params.trim()}) => {\n${body}\n};\n\nconst `;
  });
  
  // Fix concatenated JSX elements
  content = content.replace(/<([^>]+)>([^<]+)<\/\1>'<([^>]+)>/g, (match, tag1, content1, tag2) => {
    return `<${tag1}>${content1}</${tag1}>\n<${tag2}>`;
  });
  
  // Fix concatenated string literals
  content = content.replace(/([^;])\s*'([^']+)'/g, (match, before, stringContent) => {
    return `${before}\n  '${stringContent}'`;
  });
  
  // Fix concatenated object properties
  content = content.replace(/([^,}])\s*'([^:]+):\s*([^,}]+)'/g, (match, before, key, value) => {
    return `${before},\n  ${key.trim()}: ${value.trim()}`;
  });
  
  // Fix concatenated array elements
  content = content.replace(/([^,[])\s*'([^,]]+)'/g, (match, before, element) => {
    return `${before},\n  '${element.trim()}'`;
  });
  
  // Fix concatenated comments
  content = content.replace(/([^/])\s*'\/\*([^*]+)\*\/'/g, (match, before, comment) => {
    return `${before}\n/*${comment}*/`;
  });
  
  // Fix concatenated single-line comments
  content = content.replace(/([^/])\s*'\/\/([^\n]+)'/g, (match, before, comment) => {
    return `${before}\n//${comment}`;
  });
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixImportStatements(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      processDirectory(fullPath);
    } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js'))) {
      processFile(fullPath);
    }
  }
}

// Start processing from the current directory
console.log('Starting syntax error fixes...');
processDirectory('.');
console.log('Syntax error fixes completed!');