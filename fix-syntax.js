const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Fix missing closing parenthesis in return statements
    if (content.includes('  ;\n};\n\nexport default Page;')) {
      content = content.replace(/  ;\n};\n\nexport default Page;/g, '  );\n};\n\nexport default Page;');
      fixed = true;
    }
    
    // Fix missing closing parenthesis in return statements (alternative pattern)
    if (content.includes('  ;\n};\n\nexport default')) {
      content = content.replace(/  ;\n};\n\nexport default/g, '  );\n};\n\nexport default');
      fixed = true;
    }
    
    // Fix missing closing parenthesis before semicolon
    if (content.includes('    </>\n  ;\n};')) {
      content = content.replace(/    <\/>\n  ;\n};/g, '    </>\n  );\n};');
      fixed = true;
    }
    
    // Fix missing closing parenthesis in JSX return
    if (content.includes('  return (\n    <>\n      <Navigation />')) {
      // This is already correct, but let's make sure it's properly closed
      if (!content.includes('  );\n};')) {
        // Find the last </> and add closing parenthesis
        const lastDiv = content.lastIndexOf('    </>');
        if (lastDiv !== -1) {
          const beforeDiv = content.substring(0, lastDiv);
          const afterDiv = content.substring(lastDiv);
          const afterDivFixed = afterDiv.replace('    </>', '    </>\n  );');
          content = beforeDiv + afterDivFixed;
          fixed = true;
        }
      }
    }
    
    if (fixed) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed syntax: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to find all TypeScript/JavaScript files in app directory
function findFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix all files in the app directory
const appDir = './app';
const files = findFiles(appDir);

console.log(`Found ${files.length} files to fix...`);

files.forEach(fixSyntaxErrors);

console.log('Done fixing syntax errors!');