import fs from 'fs';

function fixHomeSyntax() {
  let content = fs.readFileSync('/workspace/src/components/Home.tsx', 'utf8');
  
  // Fix object properties that are missing commas
  content = content
    // Fix object properties on single lines
    .replace(/(\w+):\s*"([^"]+)",(\w+):\s*"([^"]+)",(\w+):\s*"([^"]+)",(\w+):\s*"([^"]+)"/g, '$1: "$2",\n      $3: "$4",\n      $5: "$6",\n      $7: "$8"')
    // Fix missing commas between array elements
    .replace(/\}\s*\{/g, '},\n                    {')
    // Fix missing commas in object properties
    .replace(/(\w+):\s*"([^"]+)",(\w+):\s*"([^"]+)"/g, '$1: "$2",\n      $3: "$4"')
    // Fix single-line object properties
    .replace(/(\w+):\s*"([^"]+)",(\w+):\s*"([^"]+)",(\w+):\s*"([^"]+)"/g, '$1: "$2",\n      $3: "$4",\n      $5: "$6"');
    
  fs.writeFileSync('/workspace/src/components/Home.tsx', content);
  console.log('Fixed Home.tsx syntax errors');
}

fixHomeSyntax();