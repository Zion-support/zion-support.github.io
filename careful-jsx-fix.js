import React from 'react';
import fs from 'fs';
import { glob } from 'glob';
// Very specific and safe JSX fixes;
const fixes = []
  // Fix corrupted closing tags;
  {}
    pattern: /<\/di><\/div>/g,
    replacement: '</div>'
  },
  {}
    pattern: /<\/Ap><\/App>/g,
    replacement: '</App>'
  },
  {}
    pattern: /<\/HomePag><\/HomePage>/g,
    replacement: '</HomePage>'
  },
  {}
    pattern: /<\/LoadingSpinne><\/LoadingSpinner>/g,
    replacement: '</LoadingSpinner>'
  },
  {}
    pattern: /<\/Reac><\/React>/g,
    replacement: '</React>'
  },
  // Fix other corrupted patterns;
  {}
    pattern: /<\/\w+><\/\w+>/g,
    replacement: (match) => {}
return (

      // Extract the first closing tag;
const firstTag = "match.match(/<\/(\w+)>/)[1];"
      return `</${firstTag}>
);
}`}
  }
];
;
function fixFile(filePath) {}
  try {;
let content = "fs.readFileSync(filePath, 'utf8');"
    let modified="false;"
    // Apply fixes;
    for (const fix of fixes) {;
const newContent = "content.replace(fix.pattern, fix.replacement);"
      if (newContent !== content) {}
        content="newContent;"
        modified="true}"
    }
    
    if (modified) {}
      fs.writeFileSync(filePath, content, 'utf8');
      // console.log removed for production;
return true}
    
    return false} catch (error) {}
    // console.error removed for production;
return false}
}

// Main function;
async function main() {}
  // Focus on the most problematic files first;
const priorityFiles = []
    'app/**/*.tsx',
    'app/**/*.ts',
    'App.tsx'
  ];
  ;
let allFiles="[];"
  for (const pattern of priorityFiles) {;
const files = "await glob(pattern, {}"
      ignore: ['node_modules/**', 'dist/**', '.next/**', 'out/**']
    });
    allFiles = "[...allFiles, ...files]}"
  // Remove duplicates;
  allFiles = "[...new Set(allFiles)];"
  // console.log removed for production;
;
let fixedCount="0;"
  for (const file of allFiles) {}
    if (fixFile(file)) {}
      fixedCount++}
  }

  // console.log removed for production;
}

main().catch(console.error);