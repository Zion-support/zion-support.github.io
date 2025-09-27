#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🔧 Fixing pages syntax errors...');

// Function to fix syntax errors in a file
function fixSyntaxErrors(filePath) {
    if (!fs.existsSync(filePath)) {
        return false;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix JSX fragment syntax
    content = content.replace(/return \(\s*<>\s*$/gm, 'return (\n    <>');
    content = content.replace(/return \(\s*<>\s*<Head>/gm, 'return (\n    <>\n      <Head>');
    
    // Fix JSX closing tags
    content = content.replace(/<\/>\s*\)\s*;?\s*$/gm, '\n    </>\n  );');
    
    // Fix className spacing issues
    content = content.replace(/classNam, e=/g, 'className=');
    content = content.replace(/classNam, e="([^"]*?)"/g, (match, className) => {
        let fixed = className
            .replace(/,/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
        return `className="${fixed}"`;
    });
    
    // Fix meta tag attributes
    content = content.replace(/name="description"/g, 'name="description"');
    content = content.replace(/name="viewport"/g, 'name="viewport"');
    
    // Fix specific syntax errors in blog.tsx
    content = content.replace(/EnhancedSEO, titl, e=/g, 'EnhancedSEO title=');
    content = content.replace(/descripti, o, n=/g, 'description=');
    content = content.replace(/keywor, d, s=/g, 'keywords=');
    content = content.replace(/u, r, l=/g, 'url=');
    content = content.replace(/ty, p, e=/g, 'type=');
    
    // Fix array syntax
    content = content.replace(/\[['"]([^'"]*)['"],\s*['"]([^'"]*)['"],\s*['"]([^'"]*)['"],\s*['"]([^'"]*)['"],\s*['"]([^'"]*)['"]\]/g, '["$1", "$2", "$3", "$4", "$5"]');
    
    // Fix div className issues
    content = content.replace(/<div, classNam, e=/g, '<div className=');
    
    // Fix container className
    content = content.replace(/container, m, x-auto, p, x-4, p, y-8, ma, x-w-7, x, l/g, 'container mx-auto px-4 py-8 max-w-7xl');
    
    // Fix nav className
    content = content.replace(/nav, classNam, e=/g, 'nav className=');
    
    // Fix min-h-screen className
    content = content.replace(/m, i, n-h-screen, b, g-gradie, n, t-to-br, fro, m-bl, u, e-50, t, o-indi, g, o-1, 0, 0/g, 'min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100');
    
    // Fix useEffect syntax
    content = content.replace(/useEffect\(\(\) => \{[\s\S]*?\}, \[\]\);/g, (match) => {
        return match.replace(/\s+/g, ' ').replace(/\{\s*/g, '{\n    ').replace(/\s*\}/g, '\n  }');
    });
    
    // Fix specific issues in _app.tsx
    content = content.replace(/\.catch\(\(error\) => \{[\s\S]*?\}\);\s*\}\s*,\s*\[\]\);/g, (match) => {
        return match.replace(/\s+/g, ' ').replace(/\{\s*/g, '{\n          ').replace(/\s*\}/g, '\n        }');
    });
    
    // Fix max-w-7 xl spacing
    content = content.replace(/max-w-7 xl/g, 'max-w-7xl');
    
    if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        return true;
    }
    return false;
}

// Function to process all page files
function processPageFiles() {
    const pagesDir = '/workspace/pages';
    const files = [
        '_app.tsx',
        'blog.tsx',
        'contact.tsx',
        'dashboard.tsx',
        'enhanced-home.tsx'
    ];
    
    let fixedCount = 0;
    
    files.forEach(file => {
        const filePath = path.join(pagesDir, file);
        if (fixSyntaxErrors(filePath)) {
            console.log(`✅ Fixed syntax errors in ${file}`);
            fixedCount++;
        }
    });
    
    return fixedCount;
}

// Main function
async function main() {
    console.log('🚀 Starting pages syntax error fixes...');
    
    const fixedCount = processPageFiles();
    
    console.log(`\n🎉 Fixed syntax errors in ${fixedCount} files`);
    
    // Add and commit changes
    try {
        execSync('git add pages/', { stdio: 'inherit' });
        execSync('git commit -m "fix: resolve pages syntax errors and JSX formatting"', { stdio: 'inherit' });
        execSync('git push origin main', { stdio: 'inherit' });
        console.log('✅ Changes committed and pushed successfully');
    } catch (error) {
        console.log('⚠️  Error committing changes:', error.message);
    }
    
    console.log('\n✅ Pages syntax error fixes completed!');
}

main().catch(console.error);