import fs from 'fs';
import path from 'path';

// Function to fix string literal issues
function fixStringLiterals(content) {
  // Fix malformed string literals with extra quotes
  content = content.replace(/(\w+):\s*"([^"]*)",\s*"/g, '$1: "$2",');
  content = content.replace(/(\w+):\s*"([^"]*)",\s*"/g, '$1: "$2",');
  
  // Fix malformed object properties
  content = content.replace(/(\w+):\s*"([^"]*)",\s*(\w+):\s*"([^"]*)",\s*(\w+):\s*"([^"]*)",\s*(\w+):\s*"([^"]*)"\s*}/g, '$1: "$2",\n      $3: "$4",\n      $5: "$6",\n      $7: "$8"\n    }');
  
  // Fix malformed JSX elements
  content = content.replace(/<(\w+)\s+className="([^"]*)"\s*\/>,\s*"/g, '<$1 className="$2" />,');
  
  // Fix malformed color properties
  content = content.replace(/(\w+):\s*"([^"]*)",\s*(\w+):\s*"([^"]*)"\s*}/g, '$1: "$2",\n      $3: "$3"\n    }');
  
  // Fix malformed closing braces
  content = content.replace(/\s*}\s*"/g, '\n    }');
  
  // Fix malformed array elements
  content = content.replace(/\[\s*{\s*(\w+):\s*"([^"]*)",\s*(\w+):\s*"([^"]*)",\s*(\w+):\s*"([^"]*)",\s*(\w+):\s*"([^"]*)"\s*}\s*\]/g, '[\n    {\n      $1: "$2",\n      $3: "$4",\n      $5: "$6",\n      $7: "$8"\n    }\n  ]');
  
  return content;
}

// Function to process all TypeScript/TSX files
function processFiles(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      try {
        console.log(`Processing: ${filePath}`);
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        
        content = fixStringLiterals(content);
        
        if (content !== originalContent) {
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`Fixed: ${filePath}`);
        }
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
      }
    }
  }
}

// Process the app directory
console.log('Starting string literal fixes...');
processFiles('./app');
console.log('String literal fixes completed!');