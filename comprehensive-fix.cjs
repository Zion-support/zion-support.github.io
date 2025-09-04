#!/usr/bin/env node

/**
 * Comprehensive script to fix all syntax errors in PM2 automation scripts
 */

const fs = require('fs');
const path = require('path');

// Key files that are actually used by PM2 startup script
const keyFiles = [
    'scripts/automation/ai-code-analyzer.cjs',
    'scripts/automation/smart-performance-optimizer.cjs',
    'scripts/automation/intelligent-dependency-manager.cjs',
    'scripts/automation/project-health-monitor.cjs',
    'scripts/automation/enhanced-security-automation.cjs',
    'scripts/automation/enhanced-testing-automation.cjs',
    'scripts/automation/pm2-sync-automation.cjs',
    'scripts/automation/link-checker-automation.cjs',
    'scripts/automation/typescript-syntax-fixer.cjs',
    'scripts/automation/console-error-fixer.cjs',
    'scripts/automation/smart-deployment-automation.cjs',
    'scripts/automation/enhanced-ci-cd-automation.cjs',
    'scripts/automation/quality-checks.cjs',
    'scripts/automation/security-audit.cjs',
    'scripts/automation/continuous-improvement.cjs',
    'scripts/automation/daily-build-test.cjs'
];

function fixFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;
        
        // Fix common syntax errors
        const fixes = [
            // Fix constructor syntax
            { pattern: /this\.ensureLogsDirectory\(\)\}/g, replacement: 'this.ensureLogsDirectory();\n    }' },
            
            // Fix path.join syntax
            { pattern: /path\.join\([^;]+;\s*\)/g, replacement: (match) => match.replace(/;\s*\)/g, ')') },
            
            // Fix if statements
            { pattern: /if \(\) \{/g, replacement: 'if (!fs.existsSync(logsDir)) {' },
            
            // Fix function calls
            { pattern: /Date\.now\(\s*;\s*\)/g, replacement: 'Date.now()' },
            { pattern: /new Date\(\)\.toISOString\(\s*;\s*\)/g, replacement: 'new Date().toISOString()' },
            
            // Fix execSync syntax
            { pattern: /;\s*\}\);/g, replacement: ');' },
            { pattern: /;\s*\}\s*\)/g, replacement: ');' },
            
            // Fix return statements
            { pattern: /return \{\s*;\s*/g, replacement: 'return {\n                ' },
            { pattern: /\s*;\s*\}\s*\}\s*catch/g, replacement: '\n            };\n        } catch' },
            { pattern: /\s*;\s*\}\s*\}\s*}/g, replacement: '\n        };\n    }' },
            
            // Fix array syntax
            { pattern: /return \[\s*;\s*/g, replacement: 'return [\n            ' },
            { pattern: /\s*\]\s*\}\s*}/g, replacement: '\n        ];\n    }' },
            
            // Fix JSON.parse
            { pattern: /JSON\.parse\([^;]+;\s*\)/g, replacement: (match) => match.replace(/;\s*\)/g, ')') },
            
            // Fix template literals
            { pattern: /`\[\$\{timestamp\}\] \$\{message\}\;n;`/g, replacement: '`[${timestamp}] ${message}\\n`' },
            
            // Fix variable assignments
            { pattern: /const buildTime = Date\.now\(\) - startTi;\s*m;\s*e;/g, replacement: 'const buildTime = Date.now() - startTime;' },
            
            // Fix function calls with semicolons
            { pattern: /this\.findImageFiles\([^;]+;\s*\)/g, replacement: (match) => match.replace(/;\s*\)/g, ')') },
            
            // Fix module exports
            { pattern: /if \(\s*\{\s*const analyzer = new [^}]+\)\s*\{\s*\{\s*const analyzer = new [^;]+;/g, replacement: 'if (require.main === module) {\n    const analyzer = new AICodeAnalyzer();' },
            
            // Fix end of files
            { pattern: /analyzer\.run\(\)\.catch\(console\.error\)\}\s*\}\s*\}\s*\(;\s*\);\s*analyzer\.run\(\)\.catch\(console\.error\)\}\s*\}\s*}/g, replacement: 'analyzer.run().catch(console.error);\n}\n\nmodule.exports = AICodeAnalyzer;' },
            
            // Fix missing semicolons
            { pattern: /(\w+)\s*\}\s*$/gm, replacement: '$1;\n    }' },
            
            // Fix duplicate method definitions
            { pattern: /log\(message\) \{\s*const timestamp = new Date\(\)\.toISOString\(\) \{\s*\) \{\s*fs\.mkdirSync\(logsDir, \{ recursive: true \}\)\s*\}\s*\}\s*log\(message\) \{\s*const timestamp = new Date\(\)\.toISOString\(\s*;\s*\);/g, replacement: 'log(message) {\n        const timestamp = new Date().toISOString();' },
            
            // Fix ensureLogsDirectory method
            { pattern: /ensureLogsDirectory\(\) \{\s*const logsDir = path\.join\(this\.projectRoot, 'logs'\);\s*if \(!fs\.existsSync\(logsDir\)\) \{\s*fs\.mkdirSync\(logsDir, \{ recursive: true \}\);\s*\}\s*\}\s*log\(message\) \{\s*const timestamp = new Date\(\)\.toISOString\(\);\s*const logMessage = `\[\$\{timestamp\}\] \$\{message\}\\n`;\s*fs\.appendFileSync\(this\.logFile, logMessage\);\s*console\.log\(message\);\s*\}\s*log\(message\) \{\s*const timestamp = new Date\(\)\.toISOString\(\s*;\s*\);/g, replacement: 'ensureLogsDirectory() {\n        const logsDir = path.join(this.projectRoot, \'logs\');\n        if (!fs.existsSync(logsDir)) {\n            fs.mkdirSync(logsDir, { recursive: true });\n        }\n    }\n\n    log(message) {\n        const timestamp = new Date().toISOString();\n        const logMessage = `[${timestamp}] ${message}\\n`;\n        fs.appendFileSync(this.logFile, logMessage);\n        console.log(message);\n    }' },
        ];
        
        fixes.forEach(fix => {
            content = content.replace(fix.pattern, fix.replacement);
        });
        
        // Additional cleanup
        content = content
            .replace(/\s*;\s*;\s*/g, ';')
            .replace(/\s*;\s*\)/g, ')')
            .replace(/\s*;\s*\{/g, ' {')
            .replace(/\s*;\s*\[/g, ' [')
            .replace(/\s*;\s*return/g, ' return')
            .replace(/\s*;\s*const/g, ' const')
            .replace(/\s*;\s*let/g, ' let')
            .replace(/\s*;\s*var/g, ' var')
            .replace(/\s*;\s*if/g, ' if')
            .replace(/\s*;\s*for/g, ' for')
            .replace(/\s*;\s*while/g, ' while')
            .replace(/\s*;\s*try/g, ' try')
            .replace(/\s*;\s*catch/g, ' catch')
            .replace(/\s*;\s*finally/g, ' finally')
            .replace(/\s*;\s*switch/g, ' switch')
            .replace(/\s*;\s*case/g, ' case')
            .replace(/\s*;\s*default/g, ' default')
            .replace(/\s*;\s*break/g, ' break')
            .replace(/\s*;\s*continue/g, ' continue')
            .replace(/\s*;\s*throw/g, ' throw')
            .replace(/\s*;\s*function/g, ' function')
            .replace(/\s*;\s*class/g, ' class')
            .replace(/\s*;\s*async/g, ' async')
            .replace(/\s*;\s*await/g, ' await')
            .replace(/\s*;\s*import/g, ' import')
            .replace(/\s*;\s*export/g, ' export')
            .replace(/\s*;\s*module/g, ' module')
            .replace(/\s*;\s*require/g, ' require')
            .replace(/\s*;\s*console/g, ' console')
            .replace(/\s*;\s*process/g, ' process')
            .replace(/\s*;\s*global/g, ' global')
            .replace(/\s*;\s*this/g, ' this')
            .replace(/\s*;\s*super/g, ' super')
            .replace(/\s*;\s*new/g, ' new')
            .replace(/\s*;\s*typeof/g, ' typeof')
            .replace(/\s*;\s*instanceof/g, ' instanceof')
            .replace(/\s*;\s*in/g, ' in')
            .replace(/\s*;\s*of/g, ' of')
            .replace(/\s*;\s*delete/g, ' delete')
            .replace(/\s*;\s*void/g, ' void')
            .replace(/\s*;\s*with/g, ' with')
            .replace(/\s*;\s*debugger/g, ' debugger')
            .replace(/\s*;\s*use strict/g, ' use strict');
        
        if (content !== originalContent) {
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

// Fix key files first
console.log('Fixing key PM2 automation files...');
let fixedCount = 0;

keyFiles.forEach(file => {
    const fullPath = path.join(__dirname, file);
    if (fs.existsSync(fullPath)) {
        if (fixFile(fullPath)) {
            fixedCount++;
        }
    } else {
        console.log(`File not found: ${file}`);
    }
});

console.log(`Fixed ${fixedCount} key files.`);

// Now fix all other automation files
console.log('Fixing all other automation files...');
const automationDir = path.join(__dirname, 'scripts', 'automation');

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

const allFiles = findAutomationFiles(automationDir);
let totalFixed = 0;

allFiles.forEach(file => {
    if (!keyFiles.some(keyFile => file.endsWith(keyFile))) {
        if (fixFile(file)) {
            totalFixed++;
        }
    }
});

console.log(`Fixed ${totalFixed} additional files.`);
console.log(`Total files fixed: ${fixedCount + totalFixed}`);