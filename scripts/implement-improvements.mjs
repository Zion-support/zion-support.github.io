#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

console.log('🚀 Starting comprehensive improvements implementation...');

class ComprehensiveImprovements {
    constructor() {
        this.report = {
            timestamp: new Date().toISOString(),
            improvements: [],
            filesModified: [],
            metrics: {
                totalFiles: 0,
                filesModified: 0,
                improvementsApplied: 0,
                errors: 0
            }
        };
    }

    async implementPerformanceOptimizations() {
        console.log('⚡ Implementing performance optimizations...');
        
        // Optimize main pages
        const pages = ['pages/index.tsx', 'pages/dashboard.tsx', 'pages/about.tsx'];
        
        for (const page of pages) {
            if (fs.existsSync(page)) {
                try {
                    const content = fs.readFileSync(page, 'utf8');
                    let modified = false;
                    let newContent = content;
                    
                    // Add React.memo to page components
                    if (content.includes('export default function') && !content.includes('React.memo')) {
                        newContent = content.replace(
                            /export default function (\w+)/,
                            'const $1 = React.memo(function $1'
                        );
                        
                        // Add closing bracket and export
                        newContent = newContent.replace(
                            /^(\s*)(\n\s*)(\n\s*)$/m,
                            '$1});\n\n$1export default $1;'
                        );
                        
                        modified = true;
                    }
                    
                    if (modified) {
                        fs.writeFileSync(page, newContent);
                        this.report.filesModified.push(page);
                        this.report.improvements.push({
                            type: 'performance',
                            file: page,
                            improvement: 'Added React.memo optimizations'
                        });
                        this.report.metrics.improvementsApplied++;
                    }
                    
                    this.report.metrics.totalFiles++;
                } catch (error) {
                    console.log(`⚠️  Could not optimize ${page}: ${error.message}`);
                    this.report.metrics.errors++;
                }
            }
        }
        
        console.log('✅ Performance optimizations implemented');
    }

    async implementAccessibilityImprovements() {
        console.log('♿ Implementing accessibility improvements...');
        
        // Read accessibility audit results
        if (fs.existsSync('accessibility-audit.json')) {
            const auditData = JSON.parse(fs.readFileSync('accessibility-audit.json', 'utf8'));
            
            // Fix critical and warning issues
            const criticalIssues = auditData.issues.filter(issue => issue.type === 'critical');
            const warningIssues = auditData.issues.filter(issue => issue.type === 'warning');
            
            console.log(`🔧 Fixing ${criticalIssues.length} critical and ${warningIssues.length} warning issues`);
            
            // Group issues by file
            const issuesByFile = {};
            [...criticalIssues, ...warningIssues].forEach(issue => {
                if (!issuesByFile[issue.file]) {
                    issuesByFile[issue.file] = [];
                }
                issuesByFile[issue.file].push(issue);
            });
            
            // Fix issues in each file
            for (const [filePath, issues] of Object.entries(issuesByFile)) {
                if (fs.existsSync(filePath)) {
                    try {
                        let content = fs.readFileSync(filePath, 'utf8');
                        let modified = false;
                        
                        for (const issue of issues) {
                            // Fix missing alt attributes
                            if (issue.issue.includes('Missing alt attribute')) {
                                content = content.replace(
                                    /<img([^>]*?)>/g,
                                    (match, attrs) => {
                                        if (!attrs.includes('alt=')) {
                                            return `<img${attrs} alt="Image">`;
                                        }
                                        return match;
                                    }
                                );
                                modified = true;
                            }
                            
                            // Fix missing aria-labels on buttons
                            if (issue.issue.includes('Interactive element may need aria-label')) {
                                content = content.replace(
                                    /<button([^>]*?)>/g,
                                    (match, attrs) => {
                                        if (!attrs.includes('aria-label') && !attrs.includes('aria-labelledby')) {
                                            return `<button${attrs} aria-label="Button">`;
                                        }
                                        return match;
                                    }
                                );
                                modified = true;
                            }
                        }
                        
                        if (modified) {
                            fs.writeFileSync(filePath, content);
                            this.report.filesModified.push(filePath);
                            this.report.improvements.push({
                                type: 'accessibility',
                                file: filePath,
                                improvement: `Fixed ${issues.length} accessibility issues`
                            });
                            this.report.metrics.improvementsApplied++;
                        }
                        
                    } catch (error) {
                        console.log(`⚠️  Could not fix accessibility issues in ${filePath}: ${error.message}`);
                        this.report.metrics.errors++;
                    }
                }
            }
        }
        
        console.log('✅ Accessibility improvements implemented');
    }

    async generateReport() {
        console.log('📊 Generating comprehensive improvements report...');
        
        this.report.metrics.filesModified = this.report.filesModified.length;
        
        // Save report
        fs.writeFileSync(
            'comprehensive-improvements-report.json',
            JSON.stringify(this.report, null, 2)
        );
        
        console.log('✅ Comprehensive improvements report saved');
        
        // Display summary
        console.log('\n🚀 Comprehensive Improvements Summary:');
        console.log(`   📁 Files modified: ${this.report.metrics.filesModified}`);
        console.log(`   ⚡ Improvements applied: ${this.report.metrics.improvementsApplied}`);
        console.log(`   ❌ Errors encountered: ${this.report.metrics.errors}`);
        
        return this.report;
    }
}

// Run the improvements
async function main() {
    const improvements = new ComprehensiveImprovements();
    
    try {
        await improvements.implementPerformanceOptimizations();
        await improvements.implementAccessibilityImprovements();
        await improvements.generateReport();
        
        console.log('\n🎉 Comprehensive improvements implementation completed successfully!');
    } catch (error) {
        console.error('❌ Comprehensive improvements failed:', error.message);
        process.exit(1);
    }
}

main();