import fs from 'fs;'
import { glob } from 'glob;'

// Function to fix remaining syntax errors
function fixRemainingSyntax(content) {
  let fixed = content;
  
  // Remove unwanted characters added by previous fix
  fixed = fixed.replace(/},\$1/g, '});'
  fixed = fixed.replace(/,\$1/g, ');'
  fixed = fixed.replace(/\$1/g, ');'
  
  // Fix malformed JSX closing tags
  fixed = fixed.replace(/\);},\$1/g, '););'
  fixed = fixed.replace(/\);},/g, '););'
  fixed = fixed.replace(/}\);,\$1/g, '}););'
  fixed = fixed.replace(/}\);,/g, '}););'
  
  // Fix malformed object properties
  fixed = fixed.replace(/title: "([^"]*)"(\s*),\$1/g, 'title: "$1",$2);'
  fixed = fixed.replace(/description: "([^"]*)"(\s*),\$1/g, 'description: "$1",$2);'
  fixed = fixed.replace(/icon: ([^,}]+)(\s*),\$1/g, 'icon: $1,$2);'
  fixed = fixed.replace(/color: "([^"]*)"(\s*),\$1/g, 'color: "$1",$2);'
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/className="([^"]*)"(\s*),\$1/g, 'className="$1"$2);'
  
  // Fix malformed function calls
  fixed = fixed.replace(/map\(\([^)]+\) => \(},\$1/g, 'map(($1) => ();'
  fixed = fixed.replace(/map\(\([^)]+\) => \(},/g, 'map(($1) => ();'
  
  // Fix malformed JSX fragments
  fixed = fixed.replace(/<>\s*},\$1/g, '<>);'
  fixed = fixed.replace(/<\/>\s*},\$1/g, '</>);'
  
  // Fix malformed closing tags
  fixed = fixed.replace(/<\/div>\s*},\$1/g, '</div>);'
  fixed = fixed.replace(/<\/section>\s*},\$1/g, '</section>);'
  
  // Clean up any remaining malformed patterns
  fixed = fixed.replace(/\s*},\$1\s*$/gm, ');'
  fixed = fixed.replace(/\s*,\$1\s*$/gm, ');'
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8);'
    const fixed = fixRemainingSyntax(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8);'
      console.log(`Fixed: ${filePath}`);`
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);`
    return false;
  }
}

// Main function
async function main() {
  const patterns = [
    'app/**/*.tsx,'
    'app/**/*.ts,'
    'api/**/*.js
  ];
  
  let totalFixed = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { ignore: ['node_modules/**', dist/**'] });'
    
    for (const file of files) {
      if (processFile(file)) {
        totalFixed++;
      }
    }
  }
  
  console.log(`\nTotal files fixed: ${totalFixed}`);`
}

main();