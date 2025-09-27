#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🔧 Fixing JSX syntax errors...');

// Function to fix JSX syntax errors in a file
function fixJSXSyntax(filePath) {
    if (!fs.existsSync(filePath)) {
        return false;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix JSX fragment indentation
    content = content.replace(/return \(\s*<>\s*$/gm, 'return (\n    <>');
    content = content.replace(/return \(\s*<>\s*<Head>/gm, 'return (\n    <>\n      <Head>');
    content = content.replace(/return \(\s*<>\s*<SEO>/gm, 'return (\n    <>\n      <SEO>');
    
    // Fix JSX closing tags
    content = content.replace(/<\/>\s*\)\s*;?\s*$/gm, '\n    </>\n  );');
    
    // Fix specific indentation issues
    content = content.replace(/^\s*<>\s*$/gm, '    <>');
    content = content.replace(/^\s*<\/>\s*$/gm, '    </>');
    
    // Fix HelmetProvider import issue
    content = content.replace(/import { HelmetProvider\s+} from "react-helmet-async";/g, 'import { HelmetProvider } from "react-helmet-async";');
    
    // Fix JSX element indentation
    content = content.replace(/^\s*<Head>/gm, '      <Head>');
    content = content.replace(/^\s*<SEO>/gm, '      <SEO>');
    content = content.replace(/^\s*<div className=/gm, '      <div className=');
    
    // Fix specific blog.tsx issues
    content = content.replace(/^\s*\{\/\* <EnhancedSEO/gm, '      {/* <EnhancedSEO');
    content = content.replace(/^\s*\/\* \*\/\};/gm, '      /> */}');
    
    // Fix contact.tsx indentation
    content = content.replace(/^\s*<SEO \/>/gm, '      <SEO />');
    content = content.replace(/^\s*<Head>/gm, '      <Head>');
    content = content.replace(/^\s*<title>/gm, '        <title>');
    content = content.replace(/^\s*<meta name="description"/gm, '        <meta name="description"');
    content = content.replace(/^\s*<meta name="viewport"/gm, '        <meta name="viewport"');
    content = content.replace(/^\s*<\/Head>/gm, '      </Head>');
    
    // Fix dashboard.tsx indentation
    content = content.replace(/^\s*<Head>/gm, '      <Head>');
    content = content.replace(/^\s*<title>/gm, '        <title>');
    content = content.replace(/^\s*<meta name="description"/gm, '        <meta name="description"');
    content = content.replace(/^\s*<meta name="viewport"/gm, '        <meta name="viewport"');
    content = content.replace(/^\s*<\/Head>/gm, '      </Head>');
    content = content.replace(/^\s*<div className="min-h-screen bg-gray-50">/gm, '      <div className="min-h-screen bg-gray-50">');
    
    // Fix enhanced-home.tsx indentation
    content = content.replace(/^\s*<SEO \/>/gm, '      <SEO />');
    content = content.replace(/^\s*<Head>/gm, '      <Head>');
    content = content.replace(/^\s*<title>/gm, '        <title>');
    content = content.replace(/^\s*<meta name="description"/gm, '        <meta name="description"');
    content = content.replace(/^\s*<meta name="viewport"/gm, '        <meta name="viewport"');
    content = content.replace(/^\s*<\/Head>/gm, '      </Head>');
    content = content.replace(/^\s*<div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">/gm, '      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">');
    
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
        if (fixJSXSyntax(filePath)) {
            console.log(`✅ Fixed JSX syntax in ${file}`);
            fixedCount++;
        }
    });
    
    return fixedCount;
}

// Main function
async function main() {
    console.log('🚀 Starting JSX syntax fixes...');
    
    const fixedCount = processPageFiles();
    
    console.log(`\n🎉 Fixed JSX syntax in ${fixedCount} files`);
    
    // Add and commit changes
    try {
        execSync('git add pages/', { stdio: 'inherit' });
        execSync('git commit -m "fix: resolve JSX syntax and indentation issues"', { stdio: 'inherit' });
        execSync('git push origin main', { stdio: 'inherit' });
        console.log('✅ Changes committed and pushed successfully');
    } catch (error) {
        console.log('⚠️  Error committing changes:', error.message);
    }
    
    console.log('\n✅ JSX syntax fixes completed!');
}

main().catch(console.error);