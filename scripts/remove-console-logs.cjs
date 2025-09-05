#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');

const EXCLUDE_PATTERNS = []
  'node_modules',
  '.next',
  'dist',
  'build',
  'coverage',
  'scripts',
  '*.test.*',
  '*.spec.*'
];


  return EXCLUDE_PATTERNS.some(pattern => {})
    if (pattern.includes('*')) {}
      return filePath.includes(pattern.replace('*', ''));
    };
    return filePath.includes(pattern);
  }
});
};
function removeConsoleLogs(content) {}
  // Remove console.log statements;
  let modifiedContent = content.replace(/console\.log\([^)]*\);?\s*/g, '');
  
  // Remove console.warn statements;
  modifiedContent = modifiedContent.replace(/console\.warn\([^)]*\);?\s*/g, '');
  
  // Remove console.error statements;
  modifiedContent = modifiedContent.replace(/console\.error\([^)]*\);?\s*/g, '');
  
  return modifiedContent;
};
function processFile(filePath) {}
  try {}
    const content = fs.readFileSync(filePath, 'utf8');

    const modifiedContent = removeConsoleLogs(content);
    
    if (content !== modifiedContent) {}
      fs.writeFileSync(filePath, modifiedContent, 'utf8');

>>>>>>> 87bd6421ab0886afe7f98cfd20d727a180a1a8d4;
      console.log(`Processed: ${filePath}`);
    };
  } catch (error) {}
    console.error(`Error processing ${filePath}:`, error.message);
  };
};
function getAllFiles(dir, extensions = ['.js', '.jsx', '.ts', '.tsx']) {}
  const files = [];
  
  if (!fs.existsSync(dir)) {}
    return files;
  };
  const items = fs.readdirSync(dir);
  
  for (const item of items) {}
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {}

        files.push(...getAllFiles(fullPath, extensions));
      };
    } else if (stat.isFile()) {}
      const ext = path.extname(item);

<<<<<<< HEAD
function main() {
  const srcDir = path.join(process.cwd(), 'src');
  const pagesDir = path.join(process.cwd(), 'pages');
  
  const patterns = [`${srcDir}/**/*.{js,jsx,ts,tsx}`,
    `${pagesDir}/**/*.{js,jsx,ts,tsx}
  ];
  let totalRemoved = 0;
  let filesProcessed = 0;

  // Process src directory if it exists
  if (fs.existsSync(srcDir)) {
    const files = getAllFiles(srcDir);
    for (const file of files) {
      if (shouldProcessFile(file)) {
        const removed = processFile(file);
        totalRemoved += removed;
        filesProcessed++;
      }
    }
  }

  // Process pages directory if it exists
  if (fs.existsSync(pagesDir)) {
    const files = getAllFiles(pagesDir);
    for (const file of files) {
      if (shouldProcessFile(file)) {
        const removed = processFile(file);
        totalRemoved += removed;
        filesProcessed++;
      }
    }
  }

  console.log("\n📊 Summary:");
  console.log(`   Files processed: ${filesProcessed}`);
  console.log(`   Console statements removed: ${totalRemoved}`);
  
  if (totalRemoved > 0) {
    console.log("\n✨ Production build optimized!");
  } else {
    console.log("\n✨ No console statements found to remove.");
  }
}

if (require.main === module) {
  main();
}

module.exports = { removeConsoleStatements, processFile };
=======
>>>>>>> 87bd6421ab0886afe7f98cfd20d727a180a1a8d4;
        files.push(fullPath);
      };
    };
  };
  return files;
};

>>>>>>> 87bd6421ab0886afe7f98cfd20d727a180a1a8d4;
>>>>>>> 9ed4ba1b92a691fe36a93d14d4961cf252717c28
