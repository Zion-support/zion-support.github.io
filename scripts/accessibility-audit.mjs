#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

console.log('♿ Starting comprehensive accessibility audit...');

class AccessibilityAuditor {
    constructor() {
        this.report = {
            timestamp: new Date().toISOString(),
            issues: [],
            recommendations: [],
            metrics: {
                totalComponents: 0,
                componentsWithIssues: 0,
                criticalIssues: 0,
                warningIssues: 0,
                infoIssues: 0
            }
        };
    }

    async auditComponents() {
        console.log('🔍 Auditing React components for accessibility...');
        
        const componentFiles = this.findFiles('src/components', ['.tsx', '.jsx']);
        let auditedCount = 0;
        
        for (const file of componentFiles) {
            try {
                const content = fs.readFileSync(file, 'utf8');
                const issues = this.analyzeAccessibility(content, file);
                this.report.issues.push(...issues);
                
                if (issues.length > 0) {
                    this.report.metrics.componentsWithIssues++;
                }
                
                auditedCount++;
            } catch (error) {
                console.log(`⚠️  Could not audit ${file}: ${error.message}`);
            }
        }
        
        this.report.metrics.totalComponents = auditedCount;
        console.log(`✅ Audited ${auditedCount} components`);
        return auditedCount;
    }

    async auditPages() {
        console.log('📄 Auditing pages for accessibility...');
        
        const pageFiles = this.findFiles('pages', ['.tsx', '.jsx']);
        let auditedCount = 0;
        
        for (const file of pageFiles) {
            try {
                const content = fs.readFileSync(file, 'utf8');
                const issues = this.analyzeAccessibility(content, file);
                this.report.issues.push(...issues);
                
                if (issues.length > 0) {
                    this.report.metrics.componentsWithIssues++;
                }
                
                auditedCount++;
            } catch (error) {
                console.log(`⚠️  Could not audit ${file}: ${error.message}`);
            }
        }
        
        console.log(`✅ Audited ${auditedCount} pages`);
        return auditedCount;
    }

    analyzeAccessibility(content, filePath) {
        const issues = [];
        const lines = content.split('\n');
        
        // Check for missing alt attributes on images
        lines.forEach((line, index) => {
            if (line.includes('<img') && !line.includes('alt=')) {
                issues.push({
                    type: 'critical',
                    file: filePath,
                    line: index + 1,
                    issue: 'Missing alt attribute on image',
                    code: line.trim(),
                    suggestion: 'Add descriptive alt attribute for screen readers'
                });
            }
        });
        
        // Check for missing aria-labels on interactive elements
        lines.forEach((line, index) => {
            if ((line.includes('<button') || line.includes('<input') || line.includes('<a')) && 
                !line.includes('aria-label') && !line.includes('aria-labelledby') &&
                !line.includes('>') && !line.includes('</button>') && !line.includes('</a>')) {
                
                if (line.includes('className=') && !line.includes('aria-label')) {
                    issues.push({
                        type: 'warning',
                        file: filePath,
                        line: index + 1,
                        issue: 'Interactive element may need aria-label',
                        code: line.trim(),
                        suggestion: 'Add aria-label for better accessibility'
                    });
                }
            }
        });
        
        // Check for proper heading hierarchy
        const headingLines = lines.filter(line => line.includes('<h1') || line.includes('<h2') || 
                                                      line.includes('<h3') || line.includes('<h4'));
        if (headingLines.length > 0) {
            // Check if h1 exists
            const hasH1 = headingLines.some(line => line.includes('<h1'));
            if (!hasH1) {
                issues.push({
                    type: 'warning',
                    file: filePath,
                    line: headingLines[0] ? lines.indexOf(headingLines[0]) + 1 : 1,
                    issue: 'Missing H1 heading',
                    code: headingLines[0] || 'N/A',
                    suggestion: 'Add H1 heading for proper document structure'
                });
            }
        }
        
        // Check for proper form labels
        lines.forEach((line, index) => {
            if (line.includes('<input') && !line.includes('aria-label') && 
                !line.includes('aria-labelledby') && !line.includes('id=')) {
                issues.push({
                    type: 'warning',
                    file: filePath,
                    line: index + 1,
                    issue: 'Input without proper label',
                    code: line.trim(),
                    suggestion: 'Add label element or aria-label for form accessibility'
                });
            }
        });
        
        // Check for proper focus management
        if (content.includes('onClick') && !content.includes('onKeyDown') && !content.includes('onKeyPress')) {
            const clickLines = lines.filter(line => line.includes('onClick'));
            clickLines.forEach((line, index) => {
                if (!line.includes('onKeyDown') && !line.includes('onKeyPress')) {
                    issues.push({
                        type: 'warning',
                        file: filePath,
                        line: lines.indexOf(line) + 1,
                        issue: 'Click handler without keyboard support',
                        code: line.trim(),
                        suggestion: 'Add keyboard event handlers for accessibility'
                    });
                }
            });
        }
        
        // Check for proper color contrast (basic check)
        lines.forEach((line, index) => {
            if (line.includes('color:') || line.includes('backgroundColor:')) {
                if (line.includes('#000') || line.includes('#fff') || line.includes('#000000') || line.includes('#ffffff')) {
                    issues.push({
                        type: 'info',
                        file: filePath,
                        line: index + 1,
                        issue: 'Potential color contrast issue',
                        code: line.trim(),
                        suggestion: 'Verify color contrast meets WCAG 2.1 AA standards'
                    });
                }
            }
        });
        
        return issues;
    }

    generateRecommendations() {
        console.log('💡 Generating accessibility recommendations...');
        
        const criticalCount = this.report.issues.filter(i => i.type === 'critical').length;
        const warningCount = this.report.issues.filter(i => i.type === 'warning').length;
        const infoCount = this.report.issues.filter(i => i.type === 'info').length;
        
        this.report.metrics.criticalIssues = criticalCount;
        this.report.metrics.warningIssues = warningCount;
        this.report.metrics.infoIssues = infoCount;
        
        // Generate recommendations based on findings
        if (criticalCount > 0) {
            this.report.recommendations.push({
                priority: 'high',
                category: 'images',
                issue: 'Missing alt attributes',
                suggestion: 'Add descriptive alt attributes to all images for screen reader compatibility'
            });
        }
        
        if (warningCount > 0) {
            this.report.recommendations.push({
                priority: 'medium',
                category: 'interactive_elements',
                issue: 'Interactive elements need labels',
                suggestion: 'Add aria-labels or proper labels to interactive elements'
            });
            
            this.report.recommendations.push({
                priority: 'medium',
                category: 'keyboard_navigation',
                issue: 'Keyboard accessibility',
                suggestion: 'Ensure all interactive elements are keyboard accessible'
            });
        }
        
        // General recommendations
        this.report.recommendations.push({
            priority: 'low',
            category: 'testing',
            issue: 'Accessibility testing',
            suggestion: 'Implement automated accessibility testing with axe-core'
        });
        
        this.report.recommendations.push({
            priority: 'low',
            category: 'standards',
            issue: 'WCAG compliance',
            suggestion: 'Aim for WCAG 2.1 AA compliance across all components'
        });
    }

    findFiles(dir, extensions) {
        const files = [];
        
        if (!fs.existsSync(dir)) return files;
        
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
            const fullPath = path.join(dir, item);
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory()) {
                files.push(...this.findFiles(fullPath, extensions));
            } else {
                const ext = path.extname(item);
                if (extensions.includes(ext)) {
                    files.push(fullPath);
                }
            }
        }
        
        return files;
    }

    async generateReport() {
        console.log('📊 Generating accessibility audit report...');
        
        this.generateRecommendations();
        
        // Save detailed report
        fs.writeFileSync(
            'accessibility-audit.json',
            JSON.stringify(this.report, null, 2)
        );
        
        console.log('✅ Accessibility audit report saved to accessibility-audit.json');
        
        // Display summary
        console.log('\n♿ Accessibility Audit Summary:');
        console.log(`   📊 Total components audited: ${this.report.metrics.totalComponents}`);
        console.log(`   ❌ Critical issues: ${this.report.metrics.criticalIssues}`);
        console.log(`   ⚠️  Warning issues: ${this.report.metrics.warningIssues}`);
        console.log(`   ℹ️  Info issues: ${this.report.metrics.infoIssues}`);
        console.log(`   💡 Recommendations: ${this.report.recommendations.length}`);
        
        // Display critical issues
        const criticalIssues = this.report.issues.filter(i => i.type === 'critical');
        if (criticalIssues.length > 0) {
            console.log('\n🚨 Critical Issues Found:');
            criticalIssues.slice(0, 5).forEach(issue => {
                console.log(`   • ${issue.file}:${issue.line} - ${issue.issue}`);
            });
            if (criticalIssues.length > 5) {
                console.log(`   ... and ${criticalIssues.length - 5} more`);
            }
        }
        
        return this.report;
    }
}

// Run the audit
async function main() {
    const auditor = new AccessibilityAuditor();
    
    try {
        await auditor.auditComponents();
        await auditor.auditPages();
        await auditor.generateReport();
        
        console.log('\n🎉 Accessibility audit completed successfully!');
    } catch (error) {
        console.error('❌ Accessibility audit failed:', error.message);
        process.exit(1);
    }
}

main();