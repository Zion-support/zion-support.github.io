const fs = require('fs');
const path = require('path');

function convertToConst(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Convert export default function to const
    const functionRegex = /export\s+default\s+function\s+(\w+)\s*\(([^)]*)\)\s*\{([^}]*)\}/gs;
    const matches = content.match(functionRegex);
    
    if (matches) {
      for (const match of matches) {
        const funcMatch = match.match(/export\s+default\s+function\s+(\w+)\s*\(([^)]*)\)\s*\{([^}]*)\}/s);
        if (funcMatch) {
          const funcName = funcMatch[1];
          const params = funcMatch[2];
          const body = funcMatch[3];
          
          const constDeclaration = `const ${funcName}: React.FC = (${params}) => {\n${body}\n};\n\nexport default ${funcName};`;
          
          content = content.replace(match, constDeclaration);
          fixed = true;
        }
      }
    }
    
    // Remove duplicate declarations
    const lines = content.split('\n');
    const seenDeclarations = new Set();
    const fixedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check for duplicate const declarations
      const constMatch = line.match(/const\s+(\w+)\s*=/);
      if (constMatch) {
        const constName = constMatch[1];
        if (seenDeclarations.has(constName)) {
          // Skip duplicate const declaration
          fixed = true;
          continue;
        }
        seenDeclarations.add(constName);
      }
      
      // Check for duplicate function declarations
      const functionMatch = line.match(/^(export\s+default\s+)?function\s+(\w+)\s*\(/);
      if (functionMatch) {
        const funcName = functionMatch[2];
        if (seenDeclarations.has(funcName)) {
          // Skip duplicate function declaration
          fixed = true;
          continue;
        }
        seenDeclarations.add(funcName);
      }
      
      fixedLines.push(line);
    }
    
    content = fixedLines.join('\n');
    
    // Clean up empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^\s*\n/gm, '');
    
    if (fixed) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Converted to const: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error converting ${filePath}:`, error.message);
    return false;
  }
}

function convertAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let convertedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      convertedCount += convertAllFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (convertToConst(filePath)) {
        convertedCount++;
      }
    }
  }
  
  return convertedCount;
}

// Convert all files
console.log('Converting all function declarations to const...');
const convertedCount = convertAllFiles('./app');
console.log(`Converted ${convertedCount} files`);

console.log('Conversion complete!');