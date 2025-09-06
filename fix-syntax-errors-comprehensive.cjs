const fs = require('fs');
const path = require('path');

function fixSyntaxErrors(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let hasChanges = false;

        // Fix common syntax errors
        const fixes = [
            // Fix trailing commas in imports
            { pattern: /import\s+.*?from\s+['"][^'"]+['"],\s*;/, replacement: (match) => match.replace(/,\s*;/, ';') },
            
            // Fix missing function declarations
            { pattern: /^\s*return\s+JSON\.parse\(raw\)\s*$/, replacement: 'function parseData(raw) {\n  try {\n    return JSON.parse(raw)\n  } catch {\n    return {};\n  }\n}' },
            
            // Fix missing function declarations for return statements
            { pattern: /^\s*return\s+res\.status\(405\)\.end\('Method Not Allowed'\);\s*$/, replacement: 'export default function handler(req, res) {\n  return res.status(405).end(\'Method Not Allowed\');\n}' },
            
            // Fix missing closing braces
            { pattern: /}\s*;\s*$/, replacement: '}\n}' },
            
            // Fix missing function declarations for type definitions
            { pattern: /^\s*name:\s*string\s*$/, replacement: 'interface AnalyticsEvent {\n  name: string' },
            { pattern: /^\s*page\?\:\s*string\s*$/, replacement: '  page?: string' },
            { pattern: /^\s*userType\?\:\s*string\s*$/, replacement: '  userType?: string' },
            { pattern: /^\s*properties\?\:\s*Record<string,\s*any>\s*$/, replacement: '  properties?: Record<string, any>' },
            { pattern: /^\s*at:\s*string\s*$/, replacement: '  at: string\n}' },
            
            // Fix missing imports
            { pattern: /^import\s+.*?from\s+['"][^'"]+['"],\s*;/, replacement: (match) => match.replace(/,\s*;/, ';') },
        ];

        for (const fix of fixes) {
            if (fix.pattern.test(content)) {
                content = content.replace(fix.pattern, fix.replacement);
                hasChanges = true;
            }
        }

        if (hasChanges) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`✅ Fixed syntax errors in ${filePath}`);
            return true;
        }
        return false;
    } catch (error) {
        console.log(`❌ Error fixing ${filePath}: ${error.message}`);
        return false;
    }
}

function fixSyntaxErrorsInDirectory(directory) {
    let fixedCount = 0;
    
    try {
        const files = fs.readdirSync(directory);

        for (const file of files) {
            const filePath = path.join(directory, file);
            
            try {
                const stat = fs.statSync(filePath);

                if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
                    fixedCount += fixSyntaxErrorsInDirectory(filePath);
                } else if (stat.isFile() && /\.(ts|tsx|js|jsx)$/.test(file)) {
                    if (fixSyntaxErrors(filePath)) {
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

console.log('🔧 Starting comprehensive syntax error fixing...');
const fixedCount = fixSyntaxErrorsInDirectory('/workspace');
console.log(`✅ Finished fixing syntax errors. Fixed ${fixedCount} files.`);