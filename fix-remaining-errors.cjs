const fs = require('fs');
const path = require('path');

// Function to fix remaining syntax errors
function fixRemainingErrors(content) {
    // Fix array syntax issues
    content = content.replace(/(\w+):\s*(\w+),/g, '$1: $2,');
    content = content.replace(/(\w+):\s*\[([^\]]+)\],/g, '$1: [$2],');
    
    // Fix object property syntax
    content = content.replace(/(\w+):\s*'([^']+)',/g, '$1: \'$2\',');
    content = content.replace(/(\w+):\s*"([^"]+)",/g, '$1: "$2",');
    
    // Fix JSX closing tags
    content = content.replace(/<li>\s*<CheckCircle>\s*<\/li>/g, '<li><CheckCircle /></li>');
    content = content.replace(/<li>\s*<CheckCircle>\s*([^<]+)\s*<\/li>/g, '<li><CheckCircle />$1</li>');
    
    // Fix malformed JSX expressions
    content = content.replace(/\{\s*(\w+)\.map\(\((\w+),\s*(\w+)\)\s*=>\s*\(\s*\)/g, '{$1.map(($2, $3) => (');
    
    // Fix array destructuring in map functions
    content = content.replace(/features\.map\(\(feature,\s*index\)\s*=>\s*\(\s*\)/g, 'features.map((feature, index) => (');
    
    // Fix JSX element syntax
    content = content.replace(/<(\w+)>\s*<\/\1>/g, '<$1 />');
    
    // Fix unclosed JSX tags
    content = content.replace(/<meta>/g, '<meta />');
    content = content.replace(/<meta\s+name="[^"]*">/g, (match) => match.replace('>', ' />'));
    
    // Fix malformed object properties
    content = content.replace(/(\w+):\s*(\w+),/g, '$1: $2,');
    
    // Fix array syntax
    content = content.replace(/\[\s*(\w+):\s*(\w+),/g, '[$1: $2,');
    
    // Fix JSX closing tags for CheckCircle
    content = content.replace(/<CheckCircle>\s*<\/CheckCircle>/g, '<CheckCircle />');
    
    // Fix malformed JSX expressions in benefits mapping
    content = content.replace(/\{\s*feature\.benefits\.map\(\(benefit,\s*idx\)\s*=>\s*\(\s*\)/g, '{feature.benefits.map((benefit, idx) => (');
    
    // Fix closing parentheses and brackets
    content = content.replace(/\)\s*\)\s*}/g, '))}');
    
    // Fix array element syntax
    content = content.replace(/\[\s*'([^']+)',\s*'([^']+)',\s*'([^']+)',\s*'([^']+)'\s*\]/g, '[\'$1\', \'$2\', \'$3\', \'$4\']');
    
    // Fix object property syntax in arrays
    content = content.replace(/(\w+):\s*(\w+),/g, '$1: $2,');
    
    return content;
}

// Function to process a single file
function processFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const fixedContent = fixRemainingErrors(content);
        
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
console.log('Starting remaining syntax error fixes...');
const appDir = path.join(__dirname, 'app');
const fixedCount = processDirectory(appDir);
console.log(`Fixed ${fixedCount} files`);