#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Common icon imports that are often used
const commonIcons = [
  'ArrowRight', 'ArrowLeft', 'CheckCircle', 'Users', 'Target', 'Award', 'Shield', 
  'Database', 'Lock', 'Clock', 'Home', 'Brain', 'Github', 'Linkedin', 'Twitter', 
  'Mail', 'Phone', 'MapPin', 'X', 'Menu', 'Search', 'Star', 'Zap', 'Globe'
];

// Fix specific files with known issues
function fixSpecificFiles() {
  const fixes = [
    {
      file: '/workspace/app/about/page.tsx',
      fixes: [
        { from: "import { Metadata } from 'next';", to: "import type { Metadata } from 'next';" },
        { from: "import { CheckCircle, Users, Target, Award, ArrowRight } from 'lucide-react';", to: "import { CheckCircle, Users, Target, Award, ArrowRight } from 'lucide-react';" }
      ]
    },
    {
      file: '/workspace/app/components/Footer.tsx',
      fixes: [
        { from: "import { Brain, Github, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';", to: "import { Brain, Github, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';" }
      ]
    },
    {
      file: '/workspace/app/components/Navigation.tsx',
      fixes: [
        { from: "import { Home } from 'lucide-react';", to: "import { Home } from 'lucide-react';" }
      ]
    },
    {
      file: '/workspace/app/compliance/page-backup.tsx',
      fixes: [
        { from: "import { Shield, Database, Lock, CheckCircle, Clock, ArrowRight } from 'lucide-react';", to: "import { Shield, Database, Lock, CheckCircle, Clock, ArrowRight } from 'lucide-react';" }
      ]
    },
    {
      file: '/workspace/app/compliance/page-fixed.tsx',
      fixes: [
        { from: "import { Shield, Database, Lock, CheckCircle, Clock, ArrowRight } from 'lucide-react';", to: "import { Shield, Database, Lock, CheckCircle, Clock, ArrowRight } from 'lucide-react';" }
      ]
    }
  ];

  for (const fix of fixes) {
    try {
      if (fs.existsSync(fix.file)) {
        let content = fs.readFileSync(fix.file, 'utf8');
        let modified = false;

        for (const replacement of fix.fixes) {
          if (content.includes(replacement.from)) {
            content = content.replace(replacement.from, replacement.to);
            modified = true;
          }
        }

        if (modified) {
          fs.writeFileSync(fix.file, content);
          console.log(`Fixed: ${fix.file}`);
        }
      }
    } catch (error) {
      console.error(`Error fixing ${fix.file}:`, error.message);
    }
  }
}

// Fix component files that have missing React imports
function fixComponentFiles() {
  const componentDir = path.join(__dirname, 'app', 'components');
  
  if (!fs.existsSync(componentDir)) return;

  const files = fs.readdirSync(componentDir);
  
  for (const file of files) {
    const filePath = path.join(componentDir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isFile() && file.endsWith('.tsx')) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;

        // Add React import if JSX is used but React is not imported
        if (content.includes('<') && !content.includes("import React") && !content.includes("import * as React")) {
          content = "import React from 'react';\n" + content;
          modified = true;
        }

        // Add missing React hooks imports
        if (content.includes('useState') && !content.includes("import { useState }")) {
          if (content.includes("import React from 'react';")) {
            content = content.replace("import React from 'react';", "import React, { useState } from 'react';");
          } else {
            content = "import React, { useState } from 'react';\n" + content;
          }
          modified = true;
        }

        if (content.includes('useEffect') && !content.includes("import { useEffect }")) {
          if (content.includes("import React from 'react';")) {
            content = content.replace("import React from 'react';", "import React, { useEffect } from 'react';");
          } else if (content.includes("import React, { useState } from 'react';")) {
            content = content.replace("import React, { useState } from 'react';", "import React, { useState, useEffect } from 'react';");
          } else {
            content = "import React, { useEffect } from 'react';\n" + content;
          }
          modified = true;
        }

        // Add missing createContext import
        if (content.includes('createContext') && !content.includes("import { createContext }")) {
          if (content.includes("import React from 'react';")) {
            content = content.replace("import React from 'react';", "import React, { createContext } from 'react';");
          } else {
            content = "import React, { createContext } from 'react';\n" + content;
          }
          modified = true;
        }

        // Remove unused interface definitions
        content = content.replace(/interface\s+\w+Props\s*{[^}]*}\s*\n(?![^]*\w+Props[^]*[^:])/g, '');

        if (modified) {
          fs.writeFileSync(filePath, content);
          console.log(`Fixed component: ${filePath}`);
        }
      } catch (error) {
        console.error(`Error fixing component ${filePath}:`, error.message);
      }
    }
  }
}

// Fix parsing errors in specific files
function fixParsingErrors() {
  const filesWithParsingErrors = [
    '/workspace/app/components/utils/accessibilityUtils.ts',
    '/workspace/app/hooks/useEnhancedPerformance.ts',
    '/workspace/app/hooks/useErrorMonitoring.ts',
    '/workspace/app/hooks/useForm.ts',
    '/workspace/app/hooks/useIntersectionObserver.ts'
  ];

  for (const filePath of filesWithParsingErrors) {
    try {
      if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Fix common parsing issues
        content = content.replace(/export\s*{\s*}\s*;?\s*$/gm, '');
        content = content.replace(/;\s*$/gm, '');
        content = content.replace(/,\s*$/gm, '');
        
        // Ensure proper export structure
        if (content.trim() && !content.includes('export')) {
          content = content.trim() + '\n';
        }

        fs.writeFileSync(filePath, content);
        console.log(`Fixed parsing errors in: ${filePath}`);
      }
    } catch (error) {
      console.error(`Error fixing parsing errors in ${filePath}:`, error.message);
    }
  }
}

// Remove unused imports from specific files
function removeUnusedImports() {
  const filesToFix = [
    '/workspace/app/5g-data-analytics/page.tsx',
    '/workspace/app/5g-edge-computing/page.tsx',
    '/workspace/app/5g-implementation/page.tsx',
    '/workspace/app/5g-iot-solutions/page.tsx',
    '/workspace/app/accessibility-page/page.tsx'
  ];

  for (const filePath of filesToFix) {
    try {
      if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Remove unused Link imports
        if (content.includes("import { Link } from 'next/link';") && !content.includes('<Link')) {
          content = content.replace(/import\s*{\s*Link\s*}\s*from\s*'next\/link';\s*\n?/g, '');
        }

        // Remove unused ArrowRight imports
        if (content.includes("import { ArrowRight } from 'lucide-react';") && !content.includes('<ArrowRight')) {
          content = content.replace(/import\s*{\s*ArrowRight\s*}\s*from\s*'lucide-react';\s*\n?/g, '');
        }

        fs.writeFileSync(filePath, content);
        console.log(`Removed unused imports from: ${filePath}`);
      }
    } catch (error) {
      console.error(`Error removing unused imports from ${filePath}:`, error.message);
    }
  }
}

// Main execution
console.log('Starting comprehensive error fixes...');

fixSpecificFiles();
fixComponentFiles();
fixParsingErrors();
removeUnusedImports();

console.log('Comprehensive error fixes completed!');

// Run ESLint with --fix one more time
try {
  console.log('Running final ESLint --fix...');
  execSync('npx eslint app --ext .ts,.tsx --fix', { stdio: 'inherit' });
  console.log('Final ESLint fixes completed');
} catch (error) {
  console.log('ESLint completed with some remaining issues');
}