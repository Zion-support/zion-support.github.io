#!/usr/bin/env node

/**
 * Script to fix syntax errors in all PM2 automation scripts
 */

const fs = require('fs');
const path = require('path');

// Common syntax fixes
const fixes = [
    // Fix constructor and method syntax
    { pattern: /this\.ensureLogsDirectory\(\)\}/g, replacement: 'this.ensureLogsDirectory();\n    }' },
    { pattern: /const logsDir = path\.join\(this\.projectRoot, 'logs';\s*\);/g, replacement: "const logsDir = path.join(this.projectRoot, 'logs');" },
    { pattern: /if \(\) \{/g, replacement: 'if (!fs.existsSync(logsDir)) {' },
    { pattern: /const timestamp = new Date\(\)\.toISOString\(\) \{/g, replacement: 'const timestamp = new Date().toISOString();' },
    { pattern: /const logMessage = `\[\$\{timestamp\}\] \$\{message\}\;n;`;/g, replacement: 'const logMessage = `[${timestamp}] ${message}\\n`;' },
    
    // Fix execSync syntax
    { pattern: /;\s*\}\);/g, replacement: ');' },
    { pattern: /;\s*\}\s*\)/g, replacement: ');' },
    { pattern: /;\s*\}\s*\)\s*;/g, replacement: ');' },
    
    // Fix return statements
    { pattern: /return \{\s*eslint:\s*'passed',\s*output:\s*eslintResult\s*;\s*\}\s*\}\s*catch/g, replacement: "return { eslint: 'passed', output: eslintResult };\n        } catch" },
    { pattern: /return \{\s*eslint:\s*'failed',\s*output:\s*error\.stdout\s*\|\|\s*error\.message\s*;\s*\}\s*\}\s*}/g, replacement: "return { eslint: 'failed', output: error.stdout || error.message };\n        }\n    }" },
    
    // Fix JSON.parse syntax
    { pattern: /JSON\.parse\([^;]+;\s*\);/g, replacement: (match) => match.replace(/;\s*\);/g, ');') },
    
    // Fix object syntax
    { pattern: /return \{\s*;\s*/g, replacement: 'return {\n                ' },
    { pattern: /\s*;\s*\}\s*\}\s*catch/g, replacement: '\n            };\n        } catch' },
    
    // Fix array syntax
    { pattern: /return \[\s*;\s*/g, replacement: 'return [\n            ' },
    { pattern: /\s*\]\s*\}\s*}/g, replacement: '\n        ];\n    }' },
    
    // Fix function calls
    { pattern: /this\.generateReport\(\s*;\s*\);/g, replacement: 'this.generateReport();' },
    
    // Fix module exports and main execution
    { pattern: /if \(\s*\{\s*const analyzer = new [^}]+\)\s*\{\s*\{\s*const analyzer = new [^;]+;/g, replacement: 'if (require.main === module) {\n    const analyzer = new AICodeAnalyzer();' },
    { pattern: /analyzer\.run\(\)\.catch\(console\.error\)\}\s*\}\s*\}\s*\(;\s*\);\s*analyzer\.run\(\)\.catch\(console\.error\)\}\s*\}\s*}/g, replacement: 'analyzer.run().catch(console.error);\n}\n\nmodule.exports = AICodeAnalyzer;' },
    
    // Fix variable declarations
    { pattern: /const startTime = Date\.now\(\s*;\s*\);/g, replacement: 'const startTime = Date.now();' },
    { pattern: /const buildTime = Date\.now\(\) - startTi;\s*m;\s*e;/g, replacement: 'const buildTime = Date.now() - startTime;' },
    
    // Fix path.join syntax
    { pattern: /path\.join\([^;]+;\s*\);/g, replacement: (match) => match.replace(/;\s*\);/g, ');') },
    
    // Fix findImageFiles calls
    { pattern: /this\.findImageFiles\([^;]+;\s*\);/g, replacement: (match) => match.replace(/;\s*\);/g, ');') },
];

function fixFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        
        fixes.forEach(fix => {
            const newContent = content.replace(fix.pattern, fix.replacement);
            if (newContent !== content) {
                content = newContent;
                modified = true;
            }
        });
        
        if (modified) {
            fs.writeFileSync(filePath, content);
            console.log(`Fixed: ${filePath}`);
            return true;
        }
        return false;
    } catch (error) {
        console.error(`Error fixing ${filePath}:`, error.message);
        return false;
    }
}

function findAutomationFiles(dir) {
    const files = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            files.push(...findAutomationFiles(fullPath));
        } else if (item.endsWith('.cjs') && item.includes('automation')) {
            files.push(fullPath);
        }
    }
    
    return files;
}

// Main execution
const automationDir = path.join(__dirname, 'scripts', 'automation');
const files = findAutomationFiles(automationDir);

console.log(`Found ${files.length} automation files to fix...`);

let fixedCount = 0;
files.forEach(file => {
    if (fixFile(file)) {
        fixedCount++;
    }
});

console.log(`Fixed ${fixedCount} files out of ${files.length} total files.`);