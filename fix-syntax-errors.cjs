const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors in TSX files
function fixSyntaxErrors(content) {
    // Fix semicolons after property names in objects
    content = content.replace(/(\w+):;/g, '$1:');
    
    // Fix misplaced commas and semicolons in arrays
    content = content.replace(/,\s*;/g, ',');
    content = content.replace(/}\s*,\s*;/g, '},');
    content = content.replace(/]\s*,\s*;/g, '],');
    
    // Fix JSX syntax errors
    content = content.replace(/<(\w+)>\s*<\/\1>/g, '<$1 />');
    
    // Fix unclosed JSX tags
    content = content.replace(/<meta>/g, '<meta />');
    content = content.replace(/<meta\s+name="[^"]*">/g, (match) => match.replace('>', ' />'));
    
    // Fix malformed JSX expressions
    content = content.replace(/\{\s*(\w+)\s*&&\s*\(;/g, '{$1 && (');
    content = content.replace(/\)\s*\)\s*}/g, '))}');
    
    // Fix function component syntax
    content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{/g, 'const $1: React.FC = () => {');
    
    // Fix return statement syntax
    content = content.replace(/return\s*\(\s*<>\s*<\/>\s*\)/g, 'return (\n        <>\n        </>');
    
    // Fix JSX element syntax
    content = content.replace(/<(\w+)>\s*<\/\1>/g, '<$1 />');
    
    // Fix malformed JSX expressions in map functions
    content = content.replace(/\{\s*(\w+)\.map\(\((\w+),\s*(\w+)\)\s*=>\s*\(\s*\}\s*\)/g, '{$1.map(($2, $3) => (');
    
    // Fix closing tags
    content = content.replace(/<\/\w+>\s*\)\s*\)/g, '</div>\n              ))');
    
    return content;
}

// Function to process a single file
function processFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const fixedContent = fixSyntaxErrors(content);
        
        if (content !== fixedContent) {
            fs.writeFileSync(filePath, fixedContent, 'utf8');
            console.log(`Fixed: ${filePath}`);
            return true;
        }
        return false;
    } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
        return false;
    }
}

// Function to recursively find and process TSX files
function processDirectory(dirPath) {
    const files = fs.readdirSync(dirPath);
    let fixedCount = 0;
    
    for (const file of files) {
        const filePath = path.join(dirPath, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
            fixedCount += processDirectory(filePath);
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            if (processFile(filePath)) {
                fixedCount++;
            }
        }
    }
    
    return fixedCount;
}

// Main execution
console.log('Starting syntax error fixes...');
const appDir = path.join(__dirname, 'app');
const fixedCount = processDirectory(appDir);
console.log(`Fixed ${fixedCount} files`);