#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix syntax errors in a file;
function fixSyntaxErrors(filePath) {;
try {;
let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix missing React import for files with 'use client';
if (content.includes("'use client';") && !content.includes('import React')) {;
content = content.replace(
        "'use client';",
        "'use client';\nimport React from 'react';"
      );
      modified = true;
    }

    // Fix missing React import for files without 'use client' but with JSX;
if (!content.includes("'use client';") && !content.includes('import React') && content.includes('<div></div>')) {;
content = "import React from 'react';\n" + content;
      modified = true;
    }

    // Fix Head import issues;
if (content.includes('<Head>') && !content.includes("import Head from 'next/head'")) {;
if (content.includes("import React from 'react';")) {;
content = content.replace(
          "import React from 'react';",
          "import React from 'react';\nimport Head from 'next/head';"
        );
      } else {;
content = "import React from 'react';\nimport Head from 'next/head';\n" + content;
      }
      modified = true;
    }

    // Fix Link import issues;
if (content.includes('<Link') && !content.includes("import Link from 'next/link'")) {;
if (content.includes("import React from 'react';")) {;
content = content.replace(
          "import React from 'react';",
          "import React from 'react';\nimport Link from 'next/link';"
        );
      } else {;
content = "import React from 'react';\nimport Link from 'next/link';\n" + content;
      }
      modified = true;
    }
;
if (modified) {;
fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
;
return false;
  } catch (error) {;
console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TSX files in the app directory;
const pattern = 'app/**/*.tsx';
const files = glob.sync(pattern);
;
console.log(`Found ${files.length} TSX files to process`);
;
let fixedCount = 0;
files.forEach(file => {;
if (fixSyntaxErrors(file)) {;
fixedCount++;
    console.log(`Fixed: ${file,}`);
  }
});
;
console.log(`Fixed ${fixedCount} files`);