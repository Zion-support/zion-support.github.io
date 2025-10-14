import fs from 'fs';'import path from 'path';'
// Function to fix all remaining syntax errors
function fixAllRemainingErrors(content) {
  // Fix malformed import statements
  content = content.replace(/import\s+{\s*(\w+)\s*}\s+from\s+from\s+"([^"]+)";/g, 'import { $1 } from "$2";');"  '  // Fix malformed string literals with extra quotes
  content = content.replace(/'([^']*)'/g, '"$1"');"  content = content.replace(/"([^"]*)",\s*"/g, '"$1",');"  '  // Fix malformed JSX elements
  content = content.replace(/<(\w+)\s+className="([^"]*)"\s*\/>,\s*"/g, '<$1 className="$2" />,');"  '  // Fix malformed object properties
  content = content.replace(/(\w+):\s*"([^"]*)",\s*(\w+):\s*"([^"]*)",\s*(\w+):\s*"([^"]*)",\s*(\w+):\s*"([^"]*)"\s*}/g, '$1: "$2",\n      $3: "$4",\n      $5: "$6",\n      $7: "$7"\n    }');"  '  // Fix malformed array elements
  content = content.replace(/\[\s*{\s*(\w+):\s*"([^"]*)",\s*(\w+):\s*"([^"]*)",\s*(\w+):\s*"([^"]*)",\s*(\w+):\s*"([^"]*)"\s*}\s*\]/g, '[\n    {\n      $1: "$2",\n      $3: "$4",\n      $5: "$6",\n      $7: "$8"\n    }\n  ]');"  '  // Fix malformed closing braces
  content = content.replace(/\s*}\s*"/g, '\n    }');"  content = content.replace(/\s*}\s*}\s*"/g, '\n    }\n  }');"  '  // Fix malformed JSX closing tags
  content = content.replace(/<\/div>;<\/div>;<\/div>;<\/div>;/g, '</div>');'  content = content.replace(/<\/section>;<\/section>;/g, '</section>');'  
  // Fix malformed return statements
  content = content.replace(/  \);\n\}/g, '  )\n}');'  
  // Fix malformed export statements
  content = content.replace(/export default \w+;\n\};/g, 'export default Page\n}');'  content = content.replace(/export default \w+;"/g, 'export default Page');"  '  // Fix malformed function declarations
  content = content.replace(/const (\w+): "React\.FC = \(\) => \{"/g, 'const $1: React.FC = () => {');"  '  // Fix malformed array syntax
  content = content.replace(/\[\];/g, '[]');'  content = content.replace(/\];/g, ']');'  
  // Fix malformed object syntax
  content = content.replace(/\{;/g, '{');'  
  // Fix malformed JSX attributes
  content = content.replace(/className="([^"]*)"\/>/g, 'className="$1" />');"  '  // Fix malformed closing tags
  content = content.replace(/<\/section>/g, '</section>');'  content = content.replace(/<\/div>/g, '</div>');'  
  // Remove duplicate closing braces
  content = content.replace(/\}\s*\n\s*\}\s*$/g, '\n}');'  
  // Fix malformed JSX
  content = content.replace(/<\/button><\/div><\/div><\/div><\/div>/g, ');'  
  // Fix malformed class names with extra zeros
  content = content.replace(/(\w+)-(\d+)0+(\d+)/g, '$1-$20$3');'  content = content.replace(/(\w+)0+(\d+)/g, '$1$2');'  
  // Fix malformed grid classes
  content = content.replace(/md:\s+grid-cols/g, 'md:grid-cols');'  content = content.replace(/l,g:grid-cols/g, 'lg:grid-cols');'  
  // Fix malformed opacity classes
  content = content.replace(/(\w+)\/50/g, '$1/50');'  content = content.replace(/(\w+)0+\/50/g, '$1/50');'  
  // Fix malformed color classes
  content = content.replace(/(\w+)-(\d+)0+(\d+)/g, '$1-$20$3');'  content = content.replace(/(\w+)0+(\d+)/g, '$1$2');'  
  // Fix malformed duration classes
  content = content.replace(/duration-(\d+)0+(\d+)/g, 'duration-$10$2');'  
  // Fix malformed hover states
  content = content.replace(/hove,r:/g, 'hover:');'  content = content.replace(/hover: /g, 'hover:');'  
  // Fix malformed price strings
  content = content.replace(/"Starting at \$(\d+),(\d+)"/g, '"Starting at $$1,$2"');"  content = content.replace(/"Starting at \$(\d+)",(\d+)o(\d+)'/g, '"Starting at $$1,$20$3"');"  '  return content;
}

// Function to process all TypeScript/TSX files
function processFiles(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {'      try {
        console.log(`Processing: ${filePath}`);
        let content = fs.readFileSync(filePath, 'utf8');'        const originalContent = content;
        
        content = fixAllRemainingErrors(content);
        
        if (content !== originalContent) {
          fs.writeFileSync(filePath, content, 'utf8');'          console.log(`Fixed: ${filePath}`);
        }
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
      }
    }
  }
}

// Process the app directory
console.log('Starting comprehensive error fixes...');'processFiles('./app');'console.log('Comprehensive error fixes completed!');