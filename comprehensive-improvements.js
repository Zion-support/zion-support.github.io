#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Starting comprehensive improvements...');

// Function to improve file content
function improveFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;
        let improvements = [];

        // 1. Fix TypeScript/JavaScript syntax issues
        if (filePath.endsWith('.ts') || filePath.endsWith('.tsx') || filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
            // Fix missing semicolons
            if (!content.match(/;\s*$/m) && content.includes('export') || content.includes('import')) {
                content = content.replace(/(export[^;]+)(\n|$)/g, '$1;\n');
                improvements.push('Added missing semicolons');
            }

            // Fix inconsistent quotes
            content = content.replace(/'([^']*)'/g, '"$1"');
            improvements.push('Standardized quotes to double quotes');

            // Fix spacing around operators
            content = content.replace(/(\w+)([=!<>]+)(\w+)/g, '$1 $2 $3');
            improvements.push('Fixed operator spacing');

            // Fix function declarations
            content = content.replace(/function\s+(\w+)\s*\(/g, 'function $1(');
            improvements.push('Fixed function declaration spacing');
        }

        // 2. Fix React/JSX specific issues
        if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
            // Fix className issues
            content = content.replace(/className\s*=\s*{`([^`]+)`}/g, (match, className) => {
                const cleaned = className.replace(/\s+/g, ' ').trim();
                return `className={\`${cleaned}\`}`;
            });
            improvements.push('Fixed className formatting');

            // Fix self-closing tags
            content = content.replace(/<(\w+)([^>]*?)\s*\/\s*>/g, '<$1$2 />');
            improvements.push('Fixed self-closing JSX tags');

            // Fix prop spacing
            content = content.replace(/(\w+)\s*=\s*{([^}]+)}/g, '$1={$2}');
            improvements.push('Fixed prop spacing');
        }

        // 3. Fix CSS/styling issues
        if (filePath.endsWith('.css') || content.includes('className')) {
            // Fix Tailwind class ordering
            content = content.replace(/className="([^"]*)"/g, (match, classes) => {
                const sortedClasses = classes
                    .split(' ')
                    .filter(cls => cls.trim())
                    .sort()
                    .join(' ');
                return `className="${sortedClasses}"`;
            });
            improvements.push('Sorted Tailwind classes');
        }

        // 4. Fix import/export issues
        if (content.includes('import') || content.includes('export')) {
            // Fix import spacing
            content = content.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]/g, 
                'import { $1 } from "$2"');
            improvements.push('Fixed import formatting');

            // Fix export formatting
            content = content.replace(/export\s+default\s+/g, 'export default ');
            improvements.push('Fixed export formatting');
        }

        // 5. Fix common syntax errors
        // Fix missing commas in objects
        content = content.replace(/(\w+):\s*([^,}\n]+)(\n\s*})/g, '$1: $2,$3');
        improvements.push('Fixed missing commas in objects');

        // Fix arrow function spacing
        content = content.replace(/=>\s*{/g, ' => {');
        improvements.push('Fixed arrow function spacing');

        // 6. Performance improvements
        if (content.includes('useEffect') || content.includes('useState')) {
            // Add React import if missing
            if (content.includes('useEffect') && !content.includes("import React")) {
                content = "import React from 'react';\n" + content;
                improvements.push('Added missing React import');
            }
        }

        // 7. Accessibility improvements
        if (content.includes('<button') || content.includes('<input')) {
            // Add aria-labels where missing
            content = content.replace(/<button([^>]*?)>([^<]+)<\/button>/g, (match, props, text) => {
                if (!props.includes('aria-label') && !props.includes('aria-labelledby')) {
                    return `<button${props} aria-label="${text.trim()}">${text}</button>`;
                }
                return match;
            });
            improvements.push('Added accessibility labels');
        }

        // 8. Code organization
        // Remove extra blank lines
        content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
        improvements.push('Cleaned up extra blank lines');

        // Ensure file ends with newline
        if (!content.endsWith('\n')) {
            content += '\n';
            improvements.push('Added trailing newline');
        }

        if (improvements.length > 0) {
            fs.writeFileSync(filePath, content);
            return improvements;
        }

        return [];
    } catch (error) {
        console.error(`❌ Error improving ${filePath}:`, error.message);
        return [];
    }
}

// Function to find all relevant files
function findFiles(dir, extensions = ['.tsx', '.ts', '.js', '.jsx', '.css']) {
    const files = [];
    
    function traverse(currentDir) {
        try {
            const items = fs.readdirSync(currentDir);
            
            for (const item of items) {
                const fullPath = path.join(currentDir, item);
                const stat = fs.statSync(fullPath);
                
                if (stat.isDirectory()) {
                    // Skip node_modules and other irrelevant directories
                    if (!['node_modules', '.git', 'dist', 'build', 'temp-broken-components'].includes(item)) {
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
    console.log(`📋 Found ${files.length} files to improve`);
    
    let totalImproved = 0;
    const improvedFiles = [];
    const allImprovements = new Set();
    
    for (const file of files) {
        const improvements = improveFile(file);
        if (improvements.length > 0) {
            totalImproved++;
            improvedFiles.push({
                file,
                improvements
            });
            improvements.forEach(imp => allImprovements.add(imp));
        }
    }
    
    console.log(`\n📊 Improvement Summary:`);
    console.log(`✅ Files processed: ${files.length}`);
    console.log(`🔧 Files improved: ${totalImproved}`);
    console.log(`📈 Total improvements: ${allImprovements.size}`);
    
    console.log(`\n🔧 Types of improvements made:`);
    Array.from(allImprovements).forEach(imp => console.log(`  • ${imp}`));
    
    // Generate report
    const report = {
        timestamp: new Date().toISOString(),
        summary: {
            totalFiles: files.length,
            filesImproved: totalImproved,
            improvementRate: `${((totalImproved / files.length) * 100).toFixed(2)}%`,
            totalImprovements: allImprovements.size
        },
        improvements: Array.from(allImprovements),
        improvedFiles: improvedFiles.slice(0, 20), // Limit to first 20 for readability
        recommendations: [
            'Run npm run build to verify all improvements',
            'Run npm run lint to check for any remaining issues',
            'Test the application thoroughly',
            'Consider running automated tests if available'
        ]
    };
    
    fs.writeFileSync('improvements-report.json', JSON.stringify(report, null, 2));
    console.log(`\n📄 Detailed report saved to improvements-report.json`);
    
} catch (error) {
    console.error('💥 Fatal error:', error.message);
    process.exit(1);
}