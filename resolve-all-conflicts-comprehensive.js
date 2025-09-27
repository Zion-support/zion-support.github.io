#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Starting comprehensive merge conflict resolution...');

// Function to resolve common merge conflicts
function resolveMergeConflicts(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;
        let changes = 0;

        // Remove merge conflict markers and choose the better version
        if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
            console.log(`🔧 Resolving conflicts in ${filePath}`);
            
            // Strategy 1: Remove conflict markers and keep the version after =======
            content = content.replace(/<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>> [^\n]+/g, '$1');
            
            // Strategy 2: Remove any remaining conflict markers
            content = content.replace(/<<<<<<< [^\n]+\n/g, '');
            content = content.replace(/=======\n/g, '');
            content = content.replace(/>>>>>>> [^\n]+\n/g, '');
            
            // Strategy 3: Clean up duplicate lines
            const lines = content.split('\n');
            const cleanedLines = [];
            let prevLine = '';
            
            for (const line of lines) {
                if (line.trim() !== prevLine.trim() || line.trim() === '') {
                    cleanedLines.push(line);
                    prevLine = line;
                }
            }
            
            content = cleanedLines.join('\n');
            changes++;
        }

        // Fix common syntax issues
        if (content.includes('className=') && content.includes(' ')) {
            // Fix className spacing issues
            content = content.replace(/className\s*=\s*{`([^`]+)`}/g, (match, className) => {
                const cleaned = className.replace(/\s+/g, ' ').trim();
                return `className={\`${cleaned}\`}`;
            });
            changes++;
        }

        // Fix template literal issues
        if (content.includes('${') && content.includes('`')) {
            content = content.replace(/\$\{\s*([^}]+)\s*\}/g, '${$1}');
            changes++;
        }

        // Fix TypeScript interface issues
        if (content.includes('interface') && content.includes(',')) {
            content = content.replace(/interface\s+(\w+)\s*{([^}]+)}/g, (match, name, body) => {
                const cleanedBody = body
                    .replace(/,\s*}/g, '}')
                    .replace(/,\s*,/g, ',')
                    .replace(/\s+/g, ' ')
                    .trim();
                return `interface ${name} {${cleanedBody}}`;
            });
            changes++;
        }

        // Fix JSX syntax issues
        if (content.includes('<') && content.includes('>')) {
            // Fix self-closing tags
            content = content.replace(/<(\w+)([^>]*?)\s*\/\s*>/g, '<$1$2 />');
            
            // Fix className spacing in JSX
            content = content.replace(/className\s*=\s*"([^"]*?)"/g, (match, className) => {
                const cleaned = className.replace(/\s+/g, ' ').trim();
                return `className="${cleaned}"`;
            });
            changes++;
        }

        // Fix import statements
        if (content.includes('import') && content.includes('from')) {
            content = content.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]/g, (match, imports, module) => {
                const cleanedImports = imports.replace(/\s+/g, ' ').trim();
                return `import { ${cleanedImports} } from '${module}'`;
            });
            changes++;
        }

        if (changes > 0) {
            fs.writeFileSync(filePath, content);
            console.log(`✅ Fixed ${changes} issues in ${filePath}`);
            return true;
        }

        return false;
    } catch (error) {
        console.error(`❌ Error processing ${filePath}:`, error.message);
        return false;
    }
}

// Function to find all relevant files
function findFiles(dir, extensions = ['.tsx', '.ts', '.js', '.jsx']) {
    const files = [];
    
    function traverse(currentDir) {
        try {
            const items = fs.readdirSync(currentDir);
            
            for (const item of items) {
                const fullPath = path.join(currentDir, item);
                const stat = fs.statSync(fullPath);
                
                if (stat.isDirectory()) {
                    // Skip node_modules and other irrelevant directories
                    if (!['node_modules', '.git', 'dist', 'build'].includes(item)) {
                        traverse(fullPath);
                    }
                } else if (extensions.some(ext => item.endsWith(ext))) {
                    files.push(fullPath);
                }
            }
        } catch (error) {
            // Skip directories we can't read
        }
    }
    
    traverse(dir);
    return files;
}

// Main execution
try {
    const files = findFiles('.');
    console.log(`📋 Found ${files.length} files to process`);
    
    let totalFixed = 0;
    const fixedFiles = [];
    
    for (const file of files) {
        if (resolveMergeConflicts(file)) {
            totalFixed++;
            fixedFiles.push(file);
        }
    }
    
    console.log(`\n📊 Resolution Summary:`);
    console.log(`✅ Files processed: ${files.length}`);
    console.log(`🔧 Files fixed: ${totalFixed}`);
    console.log(`📁 Fixed files:`, fixedFiles.slice(0, 10).join(', '));
    
    if (fixedFiles.length > 10) {
        console.log(`... and ${fixedFiles.length - 10} more files`);
    }
    
    // Generate report
    const report = {
        timestamp: new Date().toISOString(),
        summary: {
            totalFiles: files.length,
            filesFixed: totalFixed,
            successRate: `${((totalFixed / files.length) * 100).toFixed(2)}%`
        },
        fixedFiles: fixedFiles,
        recommendations: [
            'Run npm run build to verify all fixes',
            'Run npm run lint to check for remaining issues',
            'Test the application to ensure functionality is preserved'
        ]
    };
    
    fs.writeFileSync('conflict-resolution-report.json', JSON.stringify(report, null, 2));
    console.log(`\n📄 Detailed report saved to conflict-resolution-report.json`);
    
} catch (error) {
    console.error('💥 Fatal error:', error.message);
    process.exit(1);
}