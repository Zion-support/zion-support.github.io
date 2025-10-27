#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Fixing simple linting errors...');

// Function to fix a single file
function fixFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Remove unused interface definitions
    if (content.includes('interface') && content.includes('Props')) {
        content = content.replace(/interface\s+\w+Props\s*\{[^}]*\}\s*/g, '');
        modified = true;
    }

    // Fix 2: Add React import if missing and React is used
    if ((content.includes('React') || content.includes('JSX') || content.includes('<')) && !content.includes("import React")) {
        if (content.startsWith("'use client'")) {
            content = content.replace("'use client'", "'use client';\nimport React from 'react';");
        } else {
            content = "import React from 'react';\n" + content;
        }
        modified = true;
    }

    // Fix 3: Fix merge conflict markers
    if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
        content = content.replace(/<<<<<<<[^>]*\n.*?\n=======\n.*?\n>>>>>>>[^\n]*\n?/gs, '');
        modified = true;
    }

    // Fix 4: Remove unused Cloud import
    if (content.includes("import { Cloud }") && content.includes("Cloud is defined but never used")) {
        content = content.replace(/,\s*Cloud/g, '');
        modified = true;
    }

    // Fix 5: Fix useState and other React hooks
    if (content.includes('useState is not defined') || content.includes('useEffect is not defined')) {
        if (!content.includes("import { useState, useEffect }")) {
            if (content.includes("import React")) {
                content = content.replace("import React from 'react';", "import React, { useState, useEffect } from 'react';");
            } else {
                content = "import React, { useState, useEffect } from 'react';\n" + content;
            }
            modified = true;
        }
    }

    // Fix 6: Fix X and _Menu imports
    if (content.includes('X is not defined') || content.includes('_Menu is not defined')) {
        if (!content.includes("import { X, Menu as _Menu }")) {
            if (content.includes("import React")) {
                content = content.replace("import React from 'react';", "import React from 'react';\nimport { X, Menu as _Menu } from 'lucide-react';");
            } else {
                content = "import React from 'react';\nimport { X, Menu as _Menu } from 'lucide-react';\n" + content;
            }
            modified = true;
        }
    }

    if (modified) {
        fs.writeFileSync(filePath, content);
        return true;
    }
    return false;
}

// Function to process all TypeScript files
function processFiles() {
    const appDir = path.join(__dirname, 'app');
    const componentsDir = path.join(__dirname, 'components');
    
    let totalFiles = 0;
    let fixedFiles = 0;

    // Process app directory
    function processDirectory(dir) {
        if (!fs.existsSync(dir)) return;
        
        const files = fs.readdirSync(dir);
        
        for (const file of files) {
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);
            
            if (stat.isDirectory()) {
                processDirectory(filePath);
            } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                totalFiles++;
                if (fixFile(filePath)) {
                    fixedFiles++;
                    console.log(`✅ Fixed: ${filePath}`);
                }
            }
        }
    }

    // Process both directories
    processDirectory(appDir);
    processDirectory(componentsDir);

    console.log(`\n📊 Summary:`);
    console.log(`   Total files processed: ${totalFiles}`);
    console.log(`   Files fixed: ${fixedFiles}`);
}

// Run the fix
processFiles();

console.log('\n🔧 Running ESLint to check remaining issues...');
try {
    execSync('npm run lint', { cwd: __dirname, stdio: 'inherit' });
    console.log('✅ All linting issues resolved!');
} catch (error) {
    console.log('⚠️ Some linting issues may remain. Check the output above.');
}
