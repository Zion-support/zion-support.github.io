import fs from 'fs';
import { glob } from 'glob';
<<<<<<< HEAD

// Very specific and safe JSX fixes
=======
// Very specific and safe JSX fixes;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
const fixes = [
];
  // Fix corrupted closing tags
  {
    pattern: /<\/di><\/div>/g,
    replacement: '</div>'
  },
  {
    pattern: /<\/Ap><\/App>/g,
    replacement: '</App>'
  },
  {
    pattern: /<\/HomePag><\/HomePage>/g,
    replacement: '</HomePage>'
  },
  {
    pattern: /<\/LoadingSpinne><\/LoadingSpinner>/g,
    replacement: '</LoadingSpinner>'
  },
  {
    pattern: /<\/Reac><\/React>/g,
    replacement: '</React>'
  },
  // Fix other corrupted patterns
  {
    pattern: /<\/\w+><\/\w+>/g,
    replacement: (match) => {
<<<<<<< HEAD
      // Extract the first closing tag
      const firstTag = match.match(/<\/(\w+)>/)[1];
      return `</${firstTag}>`;
    }
  }
=======
return (
      // Extract the first closing tag;
const firstTag = match.match(/<\/(\w+)>/)[1];
      return `</${firstTag}>
);
}`};
  };
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    // Apply fixes
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
<<<<<<< HEAD
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  // Focus on the most problematic files first
  const priorityFiles = [
=======
        modified = true};
    };
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      // console.log removed for production
return true};
    return false} catch (error) {
    // console.error removed for production
return false};
};
// Main function
async function main() {
  // Focus on the most problematic files first;
const priorityFiles = [
];
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    'app/**/*.tsx',
    'app/**/*.ts',
    'App.tsx'
  ];
  
  let allFiles = [];
  for (const pattern of priorityFiles) {
    const files = await glob(pattern, {
      ignore: ['node_modules/**', 'dist/**', '.next/**', 'out/**']
    });
<<<<<<< HEAD
    allFiles = [...allFiles, ...files];
  }
  
  // Remove duplicates
  allFiles = [...new Set(allFiles)];
  
  console.log(`Found ${allFiles.length} files to check...`);

  let fixedCount = 0;
  for (const file of allFiles) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }

  console.log(`Fixed ${fixedCount} files`);
}

=======
    allFiles = [...allFiles, ...files]};
  // Remove duplicates
  allFiles = [...new Set(allFiles)];
  // console.log removed for production
;
let fixedCount = 0;
  for (const file of allFiles) {
    if (fixFile(file)) {
      fixedCount++};
  };
  // console.log removed for production
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
main().catch(console.error);