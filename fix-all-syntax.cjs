const fs = require('fs');
const path = require('path');

const targetDirectory = './';

function fixSyntaxErrors(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix import statements ending with comma instead of semicolon
    const importRegex = /(import\s+.*from\s+['"].*['"])(,)/g;
    if (importRegex.test(content)) {
        content = content.replace(importRegex, '$1;');
        modified = true;
    }

    // Fix object/array properties ending with semicolon instead of comma
    const propertyRegex = /(\w+):\s*['"][^'"]*['"]\s*;/g;
    content = content.replace(propertyRegex, (match) => {
        return match.replace(';', ',');
    });

    // Fix array elements ending with semicolon instead of comma
    const arrayElementRegex = /(['"][^'"]*['"])\s*;/g;
    content = content.replace(arrayElementRegex, (match) => {
        // Only replace if it's not the last element (followed by ] or },)
        const beforeMatch = content.substring(0, content.indexOf(match));
        const afterMatch = content.substring(content.indexOf(match) + match.length);
        
        if (afterMatch.trim().startsWith(']') || afterMatch.trim().startsWith('}')) {
            return match; // Don't change if it's the last element
        }
        
        return match.replace(';', ',');
    });

    // Fix missing closing braces for function declarations
    if (content.includes('export default function') && !content.trim().endsWith('}')) {
        content = content.trim() + '\n}';
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Fixed: ${filePath}`);
        return true;
    }
    return false;
}

function traverseDirectory(directory) {
    const files = fs.readdirSync(directory);

    for (const file of files) {
        const filePath = path.join(directory, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            // Exclude node_modules and build directories
            if (file === 'node_modules' || file === '.next' || file === 'out' || file === 'dist' || file === 'build') {
                continue;
            }
            traverseDirectory(filePath);
        } else if (stats.isFile() && (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.tsx'))) {
            fixSyntaxErrors(filePath);
        }
    }
}

console.log('Fixing syntax errors...');
traverseDirectory(targetDirectory);
console.log('Done!');