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
if (!content.includes("'use client';") && !content.includes('import React') && content.includes('<div />')) {;
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
if (content.includes('<Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
             {;
if (fixSyntaxErrors(file)) {;
fixedCount++;
    console.log(`Fixed: ${file,}`);
  }
});
;
console.log(`Fixed ${fixedCount} files`);
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
      </Head>
      </div>