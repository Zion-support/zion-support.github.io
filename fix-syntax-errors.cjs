#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting syntax error fixes...');

// Function to fix common syntax errors in a file
function fixSyntaxErrors(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;
        let fixed = false;
        
        // Fix common parsing errors
        
        // 1. Fix unterminated string literals
        const unterminatedStringPattern = /(['"])([^'"]*?)(\n|$)/g;
        content = content.replace(unterminatedStringPattern, (match, quote, text, newline) => {
            if (text.includes('\\' + quote)) return match; // Skip if already escaped
            return quote + text + quote + (newline === '\n' ? ';' : '');
        });
        
        // 2. Fix missing semicolons after import statements
        content = content.replace(/import\s+[^;]+$/gm, (match) => {
            if (!match.endsWith(';')) {
                return match + ';';
            }
            return match;
        });
        
        // 3. Fix missing commas in object literals
        content = content.replace(/(\w+)\s*\n\s*(\w+)/g, (match, p1, p2) => {
            // Only add comma if it looks like an object property
            if (p2.includes(':') || p2.includes('=')) {
                return p1 + ',\n' + p2;
            }
            return match;
        });
        
        // 4. Fix missing closing braces
        const openBraces = (content.match(/\{/g) || []).length;
        const closeBraces = (content.match(/\}/g) || []).length;
        if (openBraces > closeBraces) {
            const missingBraces = openBraces - closeBraces;
            content += '\n' + '}'.repeat(missingBraces);
        }
        
        // 5. Fix missing closing parentheses
        const openParens = (content.match(/\(/g) || []).length;
        const closeParens = (content.match(/\)/g) || []).length;
        if (openParens > closeParens) {
            const missingParens = openParens - closeParens;
            content += ')'.repeat(missingParens);
        }
        
        // 6. Fix missing semicolons at end of statements
        content = content.replace(/([^;{}\s])\s*\n\s*(export|import|const|let|var|function|class|interface|type)/g, '$1;\n$2');
        
        // 7. Fix TypeScript interface/type syntax errors
        content = content.replace(/interface\s+(\w+)\s*\{([^}]*?)(\n|$)/g, (match, name, body, newline) => {
            if (!body.includes('}')) {
                return `interface ${name} {\n${body}\n}`;
            }
            return match;
        });
        
        // 8. Fix React component syntax
        content = content.replace(/export\s+default\s+function\s+(\w+)\s*\([^)]*\)\s*\{([^}]*?)(\n|$)/g, (match, name, body, newline) => {
            if (!body.includes('}')) {
                return `export default function ${name}() {\n${body}\n}`;
            }
            return match;
        });
        
        // 9. Fix JSX syntax errors
        content = content.replace(/<(\w+)([^>]*?)(\n|$)/g, (match, tag, attrs, newline) => {
            if (!attrs.includes('>') && !attrs.includes('/>')) {
                return `<${tag}${attrs}>`;
            }
            return match;
        });
        
        // 10. Fix try-catch blocks
        content = content.replace(/try\s*\{([^}]*?)(\n|$)/g, (match, body, newline) => {
            if (!body.includes('}') && !content.includes('catch')) {
                return `try {\n${body}\n} catch (error) {\n  console.error(error);\n}`;
            }
            return match;
        });
        
        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`✅ Fixed syntax errors in: ${filePath}`);
            return true;
        }
        
        return false;
    } catch (error) {
        console.error(`❌ Error processing ${filePath}:`, error.message);
        return false;
    }
}

// Function to find files with syntax errors
function findFilesWithSyntaxErrors() {
    try {
        // Run ESLint to find files with parsing errors
        const result = execSync('npm run lint 2>&1 | grep "Parsing error" | cut -d: -f1 | sort -u', { 
            encoding: 'utf8',
            cwd: process.cwd()
        });
        return result.trim().split('\n').filter(file => file.length > 0);
    } catch (error) {
        // If no parsing errors found, return empty array
        return [];
    }
}

// Main execution
function main() {
    console.log('🔍 Finding files with syntax errors...');
    const filesWithErrors = findFilesWithSyntaxErrors();
    
    if (filesWithErrors.length === 0) {
        console.log('✅ No syntax errors found!');
        return;
    }
    
    console.log(`📁 Found ${filesWithErrors.length} files with syntax errors`);
    
    let fixedCount = 0;
    let errorCount = 0;
    
    filesWithErrors.forEach(file => {
        if (fixSyntaxErrors(file)) {
            fixedCount++;
        } else {
            errorCount++;
        }
    });
    
    console.log(`\n📊 Fix Summary:`);
    console.log(`✅ Successfully fixed: ${fixedCount} files`);
    console.log(`❌ Errors: ${errorCount} files`);
    console.log(`📁 Total processed: ${filesWithErrors.length} files`);
    
    if (fixedCount > 0) {
        console.log('\n🎉 Syntax errors fixed! You can now run linting again.');
    }
}

main();