#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');

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
        console.log(`File not found: ${filePath}`);`
        return;
      };
      let content = fs.readFileSync(filePath, 'utf8');
      let fixed = content;
      let hasChanges = false;

      // Fix duplicate semicolons in imports;
      fixed = fixed.replace(/import\s+([^;]+);;+/g, 'import $1;');
      if (fixed !== content) hasChanges = true;

      // Fix malformed import statements;
      fixed = fixed.replace(/import\s+([^;]+);';,';,/g, 'import $1;');
      if (fixed !== content) hasChanges = true;

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
        console.log(`Fixed: ${filePath}`);`
      } else {}
        console.log(`No changes needed: ${filePath}`);`
      };
    } catch (error) {}
      console.error(`Error fixing ${filePath}:`, error.message);`
    };
  };
  async run() {}
    console.log('Starting advanced syntax fixer...');
    
    for (const file of this.targetFiles) {}
      await this.fixFile(file);
    };
    console.log(`Fixed ${this.fixedFiles.length} files`);`
    console.log('Advanced syntax fixer completed!');
  };
};
// Run the fixer if this file is executed directly;
if (require.main === module) {}
  const fixer = new AdvancedSyntaxFixer();
  fixer.run();
};
module.exports = AdvancedSyntaxFixer;