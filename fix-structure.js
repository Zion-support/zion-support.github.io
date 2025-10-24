const fs = require('fs');
const path = require('path');

// Function to fix structural issues in React components
function fixStructure(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Fix missing closing brace for features array before return statement
    if (content.includes('  ];\n\n  return (\n    <>')) {
      // This is already correct, but let's make sure the structure is right
      if (!content.includes('  );\n};')) {
        // Find the last </> and add proper closing
        const lastDiv = content.lastIndexOf('    </>');
        if (lastDiv !== -1) {
          const beforeDiv = content.substring(0, lastDiv);
          const afterDiv = content.substring(lastDiv);
          const afterDivFixed = afterDiv.replace('    </>', '    </>\n  );\n};');
          content = beforeDiv + afterDivFixed;
          fixed = true;
        }
      }
    }
    
    // Fix double closing parentheses
    if (content.includes('  );\n  );')) {
      content = content.replace(/  \);\n  \);/g, '  );');
      fixed = true;
    }
    
    // Fix missing closing brace in function declaration
    if (content.includes('const Page: React.FC = () => {\n  const features = [') && !content.includes('  };\n\n  return (')) {
      // Find the features array end and add the missing closing brace
      const featuresEnd = content.indexOf('  ];');
      if (featuresEnd !== -1) {
        const beforeFeatures = content.substring(0, featuresEnd + 4);
        const afterFeatures = content.substring(featuresEnd + 4);
        content = beforeFeatures + '\n\n  return (' + afterFeatures;
        fixed = true;
      }
    }
    
    if (fixed) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed structure: ${filePath}`);
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

files.forEach(fixStructure);

console.log('Done fixing structure!');