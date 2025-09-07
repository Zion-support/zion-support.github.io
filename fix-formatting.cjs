const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common formatting issues
    content = content
      // Add line breaks after semicolons
      .replace(/;([a-zA-Z])/g, ';\n$1')
      // Add line breaks after closing braces
      .replace(/}([a-zA-Z])/g, '}\n$1')
      // Add line breaks after export statements
      .replace(/export\s+([a-zA-Z])/g, 'export $1')
      // Fix interface declarations
      .replace(/interface\s+([a-zA-Z]+)\s*{([^}]+)}/g, (match, name, body) => {
        return `interface ${name} {\n${body.split(',').map(line => line.trim()).join(',\n')}\n}`;
      })
      // Fix function declarations
      .replace(/function\s+([a-zA-Z]+)\s*\(([^)]*)\)\s*{([^}]+)}/g, (match, name, params, body) => {
        return `function ${name}(${params}) {\n${body}\n}`;
      })
      // Add proper spacing around operators
      .replace(/([a-zA-Z0-9])([=<>!]+)([a-zA-Z0-9])/g, '$1 $2 $3')
      // Fix arrow functions
      .replace(/=>\s*{([^}]+)}/g, ' => {\n$1\n}')
      // Add line breaks after commas in object literals
      .replace(/,([a-zA-Z])/g, ',\n$1');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && !file.includes('node_modules')) {
      walkDir(filePath);
    } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) {
      fixFile(filePath);
    }
  });
}

// Fix main source directories
walkDir('./src');
walkDir('./app');
console.log('Formatting fixes completed');