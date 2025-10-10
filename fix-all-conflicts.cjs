const fs = require('fs');
const glob = require('glob');

// Get all page files that might have merge conflicts
const files = glob.sync('app/**/page.tsx');

console.log(`Found ${files.length} page files to check for merge conflicts`);

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;
    
    // Remove all merge conflict markers and keep the newer version (after =======)
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======\s*([\s\S]*?)>>>>>>> cursor\/website-audit-and-update-with-deployment-26c5/g, '$1');
    
    // Clean up common syntax issues
    content = content.replace(/;\s*]/g, ']');
    content = content.replace(/]\s*;\s*]/g, ']');
    content = content.replace(/;\s*;\s*]/g, ']');
    content = content.replace(/;\s*;\s*;\s*]/g, ']');
    
    // Fix missing commas in object properties
    content = content.replace(/(\w+):\s*'[^']+'\s*(\w+):/g, '$1: \'$2\',\n      $3:');
    
    // Fix missing commas after benefits arrays
    content = content.replace(/benefits:\s*\[[^\]]+\];/g, (match) => match.replace(';', ''));
    
    // Fix missing commas after icon properties
    content = content.replace(/{\s*icon:\s*(\w+),\s*title:/g, '{\n      icon: $1,\n      title:');
    
    // Fix missing commas after title properties
    content = content.replace(/title:\s*'[^']+',\s*description:/g, (match) => match.replace(/,(\s*description:)/, ',\n      $1'));
    
    // Fix missing commas after description properties
    content = content.replace(/description:\s*'[^']+',\s*benefits:/g, (match) => match.replace(/,(\s*benefits:)/, ',\n      $1'));
    
    // Fix missing commas after closing brackets
    content = content.replace(/}\s*{\s*icon:/g, '},\n    {\n      icon:');
    
    // Fix missing commas in object properties
    content = content.replace(/(\w+):\s*'[^']+'\s*(\w+):/g, '$1: \'$2\',\n      $3:');
    
    // Fix missing commas in features array
    content = content.replace(/benefits:\s*\[[^\]]+\]\s*}/g, (match) => {
      return match.replace(']', '],');
    });
    
    // Fix missing commas after closing brackets in features array
    content = content.replace(/}\s*];/g, '}\n  ];');
    
    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Fixed: ${file}`);
    } else {
      console.log(`No changes needed: ${file}`);
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log('All merge conflicts and syntax errors fixed!');