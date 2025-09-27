#!/usr/bin/env node

import fs from 'fs';
import { glob    } from "glob";

// Comprehensive function to fix all parsing errors
function fixAllErrors(content) {
  // Fix malformed onClick handlers with aria-label
  content = content.replace(/onClick=\{\(\) = aria-label="([^"]+)\}/g'onClick={() => $1}');
  
  // Fix malformed JSX with unexpected tokens and missing closing tags
  content = content.replace(/(\w+="[^"]*")\s*>\s*([^<]+)\s*>\s*([^<]+)\s*<\/\w+>/g'$1>$2</$3>');
  
  // Fix malformed className attributes
  content = content.replace(/className=\{`([^`]+)`\}\s*>\s*([^<]+)\s*className=\{`([^`]+)`\}/g'className={`$1`}>$2');
  
  // Fix missing semicolons in object literals
  content = content.replace(/(\w+):\s*([^}]+)\s*(\w+):/g'$1: $2$3:');
  
  // Fix malformed motion.button tags
  content = content.replace(/<motion\.button([^>]*)>\s*([^<]+)\s*>\s*([^<]+)\s*<\/motion\.button>/g'<motion.button$1>$2</motion.button>');
  
  // Fix malformed button tags
  content = content.replace(/<button([^>]*)>\s*([^<]+)\s*>\s*([^<]+)\s*<\/button>/g'<button$1>$2</button>');
  
  // Fix malformed JSX expressions with unexpected tokens
  content = content.replace(/(\w+="[^"]*")\s*>\s*([^<]+)\s*>\s*([^<]+)\s*<\/\w+>/g'$1>$2</$3>');
  
  // Fix missing closing braces in JSX
  content = content.replace(/(\w+="[^"]*")\s*>\s*([^<]+)\s*>\s*([^<]+)\s*<\/\w+>/g'$1>$2</$3>');
  
  // Fix malformed onClick handlers with unexpected tokens
  content = content.replace(/onClick=\{\(\) => ([^}]+)\}\s*>\s*([^<]+)\s*>\s*([^<]+)\s*<\/button>/g'onClick={() => $1}>$2</button>');
  
  // Fix malformed className attributes with spaces
  content = content.replace(/className="([^"]*)\s+([^"]*)"/g'className="$1$2"');
  
  // Fix malformed hover classes
  content = content.replace(/hover:\s+([^"]*)/g'hover:$1');
  
  // Fix malformed focus classes
  content = content.replace(/focus:\s+([^"]*)/g'focus:$1');
  
  // Fix malformed JSX with missing closing tags
  content = content.replace(/(\w+="[^"]*")\s*>\s*([^<]+)\s*>\s*([^<]+)\s*<\/\w+>/g'$1>$2</$3>');
  
  // Fix malformed JSX expressions
  content = content.replace(/(\w+="[^"]*")\s*>\s*([^<]+)\s*>\s*([^<]+)\s*<\/\w+>/g'$1>$2</$3>');
  
  // Fix missing semicolons in function calls
  content = content.replace(/(\w+)\s*\(\s*\)\s*(\w+)/g'$1(); $2');
  
  // Fix malformed JSX with unexpected tokens
  content = content.replace(/(\w+="[^"]*")\s*>\s*([^<]+)\s*>\s*([^<]+)\s*<\/\w+>/g'$1>$2</$3>');
  
  return content;
}

async function main() {// Get all TypeScript/JavaScript files in src/components
  const files = await glob("src/components/**/*.{tstsxjsjsx}");

  let fixedFiles = 0;

  files.forEach(file => {try {
      const content = fs.readFileSync(file'utf8");
      let fixedContent = content;
      
      // Apply comprehensive fixes
      fixedContent = fixAllErrors(fixedContent);
      
      // Only write if content changed
      if (fixedContent !== content) {
        fs.writeFileSync(filefixedContent "utf8');
        console.log(`Fixed: ${file}`);
        fixedFiles++;
      }
    } catch (error) {
      console.error(`Error processing ${file}:`error.message);
    }
  });

  console.log(`\nFixed ${fixedFiles} files`);
}

main().catch(console.error);