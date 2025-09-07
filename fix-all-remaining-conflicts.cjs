const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let hasChanges = false;

        // Remove merge conflict markers
        const conflictPatterns = [
            /origin\/cursor\/fix-lint-push-and-merge-to-main-[a-f0-9]+/g,
        ];

        for (const pattern of conflictPatterns) {
            if (pattern.test(content)) {
                content = content.replace(pattern, '');
                hasChanges = true;
            }
        }

        // Fix common syntax errors
        const syntaxFixes = [
            // Fix trailing commas in imports
            { pattern: /import\s+.*?from\s+['"][^'"]+['"],\s*;/, replacement: (match) => match.replace(/,\s*;/, ';') },
            
            // Fix missing commas in objects
            { pattern: /(\w+):\s*["'][^"']*["']\s*\n\s*(\w+):/, replacement: '$1: "$1",\n    $2:' },
            
            // Fix missing semicolons
            { pattern: /(\w+)\s*\n\s*(\w+):/, replacement: '$1;\n    $2:' },
            
            // Fix malformed JSX
            { pattern: /<(\w+)\s*;\s*>/g, replacement: '<$1>' },
            
            // Fix malformed function declarations
            { pattern: /export default function\s+(\w+)\s*\(\s*\)\s*{\s*return null\s*}/g, replacement: 'export default function $1() {\n  return null;\n}' },
            
            // Fix malformed imports
            { pattern: /import\s+(\w+)\s+from\s+['"][^'"]+['"],\s*;/g, replacement: 'import $1 from "$1";' },
            
            // Fix duplicate imports
            { pattern: /import\s+(\w+)\s+from\s+['"][^'"]+['"];\s*import\s+\1\s+from\s+['"][^'"]+['"];/g, replacement: 'import $1 from "$1";' },
            
            // Fix malformed export statements
            { pattern: /export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*{\s*return\s+null\s*}\s*export\s+default\s+function\s+\1/g, replacement: 'export default function $1() {\n  return null;\n}' }
        ];

        for (const fix of syntaxFixes) {
            if (fix.pattern.test(content)) {
                content = content.replace(fix.pattern, fix.replacement);
                hasChanges = true;
            }
        }

        // Clean up extra whitespace and empty lines
        content = content
            .replace(/\n\s*\n\s*\n/g, '\n\n')
            .replace(/^\s*\n/gm, '')
            .trim();

        if (hasChanges) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`✅ Fixed conflicts in ${filePath}`);
            return true;
        }
        return false;
    } catch (error) {
        console.log(`❌ Error fixing ${filePath}: ${error.message}`);
        return false;
    }
}

function fixAllConflictsInDirectory(directory) {
    let fixedCount = 0;
    
    try {
        const files = fs.readdirSync(directory);

        for (const file of files) {
            const filePath = path.join(directory, file);
            
            try {
                const stat = fs.statSync(filePath);

                if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
                    fixedCount += fixAllConflictsInDirectory(filePath);
                } else if (stat.isFile() && /\.(ts|tsx|js|jsx|cjs|mjs)$/.test(file)) {
                    if (fixMergeConflicts(filePath)) {
                        fixedCount++;
                    }
                }
            } catch (error) {
                console.log(`⚠️  Skipping ${filePath}: ${error.message}`);
                continue;
            }
        }
    } catch (error) {
        console.log(`⚠️  Skipping directory ${directory}: ${error.message}`);
    }
    
    return fixedCount;
}

console.log('🔧 Starting comprehensive merge conflict and syntax error fixing...');
const fixedCount = fixAllConflictsInDirectory('/workspace');
console.log(`✅ Finished fixing conflicts. Fixed ${fixedCount} files.`);