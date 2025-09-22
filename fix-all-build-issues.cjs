const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, 'app', 'content');
const blogDir = path.join(__dirname, 'app', 'blog');

function removeDuplicateImportsAndMetadata(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // Remove duplicate React imports
    content = content.replace(/(import React from 'react';[^]*?)(import React from 'react';)/g, '$1');

    // Remove duplicate Link imports
    content = content.replace(/(import Link from 'next\/link';[^]*?)(import Link from 'next\/link';)/g, '$1');

    // Remove duplicate metadata exports
    content = content.replace(/(export const metadata = {[^}]*?\};[^]*?)(export const metadata = {[^}]*?\};)/g, '$1');

    // Remove merge conflict markers
    content = content.replace(/<<<<<<< HEAD\n/g, '');
    content = content.replace(/=======\n/g, '');
    content = content.replace(/>>>>>>> [^\n]*\n/g, '');

    // Remove duplicate default exports if they are functions/components
    content = content.replace(/(export default function [A-Za-z0-9_]+\(\) {[^}]*?\}[^]*?)(export default function [A-Za-z0-9_]+\(\) {[^}]*?\})/g, '$1');
    content = content.replace(/(export default [A-Za-z0-9_]+;[^]*?)(export default [A-Za-z0-9_]+;)/g, '$1');
    content = content.replace(/(const [A-Za-z0-9_]+: React.FC = \(\) => {[^]*?};[^]*?)(const [A-Za-z0-9_]+: React.FC = \(\) => {[^]*?};)/g, '$1');

    // Fix missing closing braces for functions
    if (content.includes('export default function') && !content.match(/export default function[^}]*\{[^}]*\}[^}]*\}$/)) {
        // Add missing closing brace if function is not properly closed
        if (content.match(/export default function[^}]*\{[^}]*\);\s*$/)) {
            content = content.replace(/(export default function[^}]*\{[^}]*\);\s*)$/, '$1\n}');
        }
    }

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Fixed: ${filePath}`);
        return true;
    }
    return false;
}

function traverseDirectory(directory) {
    let fixedCount = 0;
    const files = fs.readdirSync(directory);

    for (const file of files) {
        const fullPath = path.join(directory, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            fixedCount += traverseDirectory(fullPath);
        } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
            if (removeDuplicateImportsAndMetadata(fullPath)) {
                fixedCount++;
            }
        }
    }
    return fixedCount;
}

console.log(`Checking blog files...`);
const blogFixed = traverseDirectory(blogDir);
console.log(`Fixed ${blogFixed} blog files`);

console.log(`Checking content files...`);
const contentFixed = traverseDirectory(contentDir);
console.log(`Fixed ${contentFixed} content files`);

console.log(`Total fixed: ${blogFixed + contentFixed} files`);