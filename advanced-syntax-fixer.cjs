<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"console.log(" Starting advanced syntax fixer.");/ Files that need fixingconst filesToFix = [" "pages/about.tsx"," "pages/ai-services.tsx"," "pages/blog.tsx"," "pages/contact.tsx"," "pages/index.tsx"," "pages/it-services.tsx"," "pages/micro-saas.tsx"," "pages/services.tsx"," "pages/talent.tsx"," "components/layout/MainLayout.tsx"];function fixImportStatements(content) { / Fix malformed import statements let fixed = content; / Fix import statements with extra characters" fixed = fixed.replace(/import\s+([^;]+);";,";,/g, "import $1;");" fixed = fixed.replace(/import\s+([^;]+);";,;,/g, "import $1;");" fixed = fixed.replace(/import\s+([^;]+);";,"";,/g, "import $1;");" fixed = fixed.replace(/import\s+([^;]+);";,;,";,/g, "import $1;");" fixed = fixed.replace(/import\s+([^;]+);";,";,";,/g, "import $1;"); / Fix specific patterns"" fixed = fixed.replace(/import React from "react";";,";,/g, "import React from "react";");"" fixed = fixed.replace(/import Head from "next\/head";";,";,/g, "import Head from "next/head";");"" fixed = fixed.replace(/import Link from "next\/link";";,;,/g, "import Link from "next/link";");"" fixed = fixed.replace(/import { motion\s+} from "framer-motion";";,"";,/g, "import { motion } from "framer-motion";");"" fixed = fixed.replace(/import { motion\s+} from "framer-motion";";,;,";,/g, "import { motion } from "framer-motion";"); / Fix variable declarations with quotes"" fixed = fixed.replace(/const\s+"([^"]+)":/g, "const $1:");"" fixed = fixed.replace(/const\s+"([^"]+)":\s+/g, "const $1: "); / Fix function declarations"" fixed = fixed.replace(/const\s+"([^"]+)":\s+React\.FC/g, "const $1: React.FC"); return fixed;}function fixFile(filePath) { try { if (!fs.existsSync(filePath)) { console.log(` File not found: ${filePath}`); return false; } ` console.log(` Fixing: ${filePath}`); " let content = fs.readFileSync(filePath, "utf8"); / Fix import statements content = fixImportStatements(content); / Write the fixed content back fs.writeFileSync(filePath, content);` console.log(` Fixed: ${filePath}`); return true; } catch (error) {` console.log(` Error fixing ${filePath}: ${error.message}`); return false; }}/ Fix all fileslet fixedCount = 0;let totalCount = filesToFix.length;for (const file of filesToFix) { if (fixFile(file)) { fixedCount++; }}`console.log(`\n Results: ${fixedCount}/${totalCount} files fixed`);"console.log("\n Advanced syntax fixer completed!");'"`'"`
=======
#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');

<<<<<<< HEAD

=======
class AdvancedSyntaxFixer {}
  constructor() {}
    this.fixedFiles = [];
    this.targetFiles = []
      'pages/about.tsx',
      'pages/ai-services.tsx',
      'pages/blog.tsx',
      'pages/contact.tsx',
      'pages/index.tsx',
      'pages/it-services.tsx',
      'pages/micro-saas.tsx',
      'pages/services.tsx',
      'pages/talent.tsx',
      'components/layout/MainLayout.tsx'
    ];
  };
  async fixFile(filePath) {}
    try {}
      if (!fs.existsSync(filePath)) {}
        console.log(`File not found: ${filePath}`);
        return;
      };
      let content = fs.readFileSync(filePath, 'utf8');
      let fixed = content;
      let hasChanges = false;
>>>>>>> main

      // Fix duplicate semicolons in imports;
      fixed = fixed.replace(/import\s+([^;]+);;+/g, 'import $1;');
      if (fixed !== content) hasChanges = true;

      // Fix malformed import statements;
      fixed = fixed.replace(/import\s+([^;]+);';,';,/g, 'import $1;');
      if (fixed !== content) hasChanges = true;

<<<<<<< HEAD
function fixFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      
      return false;
    }
    
    
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix import statements
    content = fixImportStatements(content);
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content);
    
    
    return true;
  } catch (error) {
    
    return false;
  }
}

// Fix all files
let fixedCount = 0;
let totalCount = filesToFix.length;

for (const file of filesToFix) {
  if (fixFile(file)) {
    fixedCount++;
  }
}


=======
      // Fix React imports;
      fixed = fixed.replace(/import React from 'react';';,';,/g, "import React from 'react';");
      if (fixed !== content) hasChanges = true;

      // Fix Next.js imports;
      fixed = fixed.replace(/import Head from 'next\/head';';,';,/g, "import Head from 'next/head';");
      if (fixed !== content) hasChanges = true;

      fixed = fixed.replace(/import Link from 'next\/link';';,;,/g, "import Link from 'next/link';");
      if (fixed !== content) hasChanges = true;

      // Fix Framer Motion imports;
      fixed = fixed.replace(/import { motion\s+} from "framer-motion";';,'";,/g, 'import { motion } from "framer-motion";');
      if (fixed !== content) hasChanges = true;

      // Fix const declarations;
      fixed = fixed.replace(/const\s+"([^"]+)"/g, 'const $1');
      if (fixed !== content) hasChanges = true;

      // Fix missing semicolons;
      fixed = fixed.replace(/([^;}])\s*$/gm, '$1;');
      if (fixed !== content) hasChanges = true;

      if (hasChanges) {}
        fs.writeFileSync(filePath, fixed);
        this.fixedFiles.push(filePath);
        console.log(`Fixed: ${filePath}`);
      } else {}
        console.log(`No changes needed: ${filePath}`);
      };
    } catch (error) {}
      console.error(`Error fixing ${filePath}:`, error.message);
    };
  };
  async run() {}
    console.log('Starting advanced syntax fixer...');
    
    for (const file of this.targetFiles) {}
      await this.fixFile(file);
    };
    console.log(`Fixed ${this.fixedFiles.length} files`);
    console.log('Advanced syntax fixer completed!');
  };
};
// Run the fixer if this file is executed directly;
if (require.main === module) {}
  const fixer = new AdvancedSyntaxFixer();
  fixer.run();
};
module.exports = AdvancedSyntaxFixer;
>>>>>>> main
>>>>>>> main
