#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🚀 Starting comprehensive performance optimization...');

class PerformanceOptimizer {
    constructor() {
        this.report = {
            timestamp: new Date().toISOString(),
            optimizations: [],
            metrics: {},
            recommendations: []
        };
    }

    async optimizeImages() {
        console.log('🖼️  Optimizing images...');
        
        const imageDirs = ['public', 'src/assets', 'pages/api'];
        let optimizedCount = 0;
        
        for (const dir of imageDirs) {
            if (fs.existsSync(dir)) {
                const files = this.findFiles(dir, ['.png', '.jpg', '.jpeg', '.gif', '.webp']);
                
                for (const file of files) {
                    try {
                        // Check if file is already optimized (basic check)
                        const stats = fs.statSync(file);
                        const sizeKB = Math.round(stats.size / 1024);
                        
                        if (sizeKB > 100) { // Only optimize files larger than 100KB
                            this.report.optimizations.push({
                                type: 'image',
                                file: file,
                                sizeKB: sizeKB,
                                status: 'needs_optimization'
                            });
                        }
                        
                        optimizedCount++;
                    } catch (error) {
                        console.log(`⚠️  Could not process ${file}: ${error.message}`);
                    }
                }
            }
        }
        
        console.log(`✅ Analyzed ${optimizedCount} images`);
        return optimizedCount;
    }

    async optimizeBundle() {
        console.log('📦 Analyzing bundle size...');
        
        try {
            // Check if package.json exists
            if (fs.existsSync('package.json')) {
                const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
                
                // Analyze dependencies
                const dependencies = Object.keys(packageJson.dependencies || {});
                const devDependencies = Object.keys(packageJson.devDependencies || {});
                
                this.report.metrics.dependencies = dependencies.length;
                this.report.metrics.devDependencies = devDependencies.length;
                
                // Check for potentially heavy dependencies
                const heavyDeps = dependencies.filter(dep => 
                    ['lodash', 'moment', 'jquery', 'bootstrap', 'material-ui'].includes(dep.split('@')[0])
                );
                
                if (heavyDeps.length > 0) {
                    this.report.recommendations.push({
                        type: 'bundle',
                        issue: 'Heavy dependencies detected',
                        dependencies: heavyDeps,
                        suggestion: 'Consider lighter alternatives or tree-shaking'
                    });
                }
                
                console.log(`✅ Bundle analysis complete - ${dependencies.length} dependencies`);
            }
        } catch (error) {
            console.log(`⚠️  Bundle analysis failed: ${error.message}`);
        }
    }

    async optimizeComponents() {
        console.log('⚛️  Analyzing React components...');
        
        const componentFiles = this.findFiles('src/components', ['.tsx', '.jsx']);
        let optimizedCount = 0;
        
        for (const file of componentFiles) {
            try {
                const content = fs.readFileSync(file, 'utf8');
                
                // Check for optimization opportunities
                const optimizations = this.analyzeComponent(content, file);
                this.report.optimizations.push(...optimizations);
                
                optimizedCount++;
            } catch (error) {
                console.log(`⚠️  Could not analyze ${file}: ${error.message}`);
            }
        }
        
        console.log(`✅ Analyzed ${optimizedCount} components`);
        return optimizedCount;
    }

    analyzeComponent(content, filePath) {
        const optimizations = [];
        
        // Check for React.memo opportunities
        if (content.includes('export default function') && !content.includes('React.memo')) {
            optimizations.push({
                type: 'component',
                file: filePath,
                issue: 'Component could benefit from React.memo',
                suggestion: 'Wrap component with React.memo for performance'
            });
        }
        
        // Check for useMemo/useCallback opportunities
        if (content.includes('useState') && !content.includes('useMemo') && !content.includes('useCallback')) {
            optimizations.push({
                type: 'component',
                file: filePath,
                issue: 'Component might benefit from useMemo/useCallback',
                suggestion: 'Consider memoizing expensive calculations and functions'
            });
        }
        
        // Check for large components
        const lines = content.split('\n').length;
        if (lines > 200) {
            optimizations.push({
                type: 'component',
                file: filePath,
                issue: 'Large component detected',
                suggestion: 'Consider breaking into smaller components'
            });
        }
        
        return optimizations;
    }

    async optimizeImports() {
        console.log('📥 Analyzing import statements...');
        
        const sourceFiles = this.findFiles('.', ['.ts', '.tsx', '.js', '.jsx']).filter(file => 
            !file.includes('node_modules') && 
            !file.includes('.next') && 
            !file.includes('dist')
        );
        
        let optimizedCount = 0;
        
        for (const file of sourceFiles) {
            try {
                const content = fs.readFileSync(file, 'utf8');
                const lines = content.split('\n');
                
                // Check for unused imports
                const imports = lines.filter(line => line.trim().startsWith('import'));
                const importNames = new Set();
                
                imports.forEach(importLine => {
                    const match = importLine.match(/import\s+{([^}]+)}/);
                    if (match) {
                        match[1].split(',').forEach(name => {
                            const cleanName = name.trim().split(' as ')[0];
                            importNames.add(cleanName);
                        });
                    }
                });
                
                // Check if imported names are actually used
                const fileContent = content.replace(/import.*\n/g, '');
                const unusedImports = [];
                
                importNames.forEach(name => {
                    if (!fileContent.includes(name)) {
                        unusedImports.push(name);
                    }
                });
                
                if (unusedImports.length > 0) {
                    this.report.optimizations.push({
                        type: 'import',
                        file: filePath,
                        issue: 'Unused imports detected',
                        unusedImports: unusedImports,
                        suggestion: 'Remove unused imports to reduce bundle size'
                    });
                }
                
                optimizedCount++;
            } catch (error) {
                console.log(`⚠️  Could not analyze imports in ${file}: ${error.message}`);
            }
        }
        
        console.log(`✅ Analyzed ${optimizedCount} files for import optimization`);
        return optimizedCount;
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
        console.log('📊 Generating performance optimization report...');
        
        // Calculate metrics
        this.report.metrics.totalOptimizations = this.report.optimizations.length;
        this.report.metrics.imagesAnalyzed = this.report.optimizations.filter(o => o.type === 'image').length;
        this.report.metrics.componentsAnalyzed = this.report.optimizations.filter(o => o.type === 'component').length;
        this.report.metrics.importsAnalyzed = this.report.optimizations.filter(o => o.type === 'import').length;
        
        // Save report
        fs.writeFileSync(
            'performance-optimization-report.json',
            JSON.stringify(this.report, null, 2)
        );
        
        console.log('✅ Performance optimization report saved to performance-optimization-report.json');
        
        // Display summary
        console.log('\n📈 Performance Optimization Summary:');
        console.log(`   📦 Bundle optimizations: ${this.report.metrics.totalOptimizations}`);
        console.log(`   🖼️  Images analyzed: ${this.report.metrics.imagesAnalyzed}`);
        console.log(`   ⚛️  Components analyzed: ${this.report.metrics.componentsAnalyzed}`);
        console.log(`   📥 Imports analyzed: ${this.report.metrics.importsAnalyzed}`);
        console.log(`   💡 Recommendations: ${this.report.recommendations.length}`);
        
        return this.report;
    }
}

// Run the optimization
async function main() {
    const optimizer = new PerformanceOptimizer();
    
    try {
        await optimizer.optimizeImages();
        await optimizer.optimizeBundle();
        await optimizer.optimizeComponents();
        await optimizer.optimizeImports();
        await optimizer.generateReport();
        
        console.log('\n🎉 Performance optimization analysis completed successfully!');
    } catch (error) {
        console.error('❌ Performance optimization failed:', error.message);
        process.exit(1);
    }
}

main();