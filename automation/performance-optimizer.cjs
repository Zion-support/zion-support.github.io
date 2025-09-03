#!/usr/bin/env node

/**
 * Performance Optimization Script for Zion Tech Group
 * Analyzes and optimizes application performance
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('⚡ Zion Tech Group - Performance Optimizer');
console.log('==========================================');

const performanceReport = {
    timestamp: new Date().toISOString(),
    optimizations: [],
    recommendations: [],
    metrics: {}
};

function analyzeBundleSize() {
    console.log('\n📦 Analyzing bundle size...');
    
    try {
        if (fs.existsSync('.next')) {
            const stats = execSync('du -sh .next', { encoding: 'utf8' });
            const size = stats.trim().split('\t')[0];
            
            performanceReport.metrics.bundleSize = size;
            console.log(`✅ Bundle size: ${size}`);
            
            if (size.includes('M') && parseInt(size) > 50) {
                performanceReport.recommendations.push({
                    type: 'bundle_size',
                    message: 'Bundle size is large, consider code splitting',
                    priority: 'high'
                });
            }
        } else {
            console.log('⚠️  No build found, run npm run build first');
        }
    } catch (error) {
        console.log(`❌ Error analyzing bundle: ${error.message}`);
    }
}

function analyzeDependencies() {
    console.log('\n📚 Analyzing dependencies...');
    
    try {
        if (fs.existsSync('package.json')) {
            const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
            const dependencies = Object.keys(packageJson.dependencies || {});
            const devDependencies = Object.keys(packageJson.devDependencies || {});
            
            performanceReport.metrics.dependencies = {
                production: dependencies.length,
                development: devDependencies.length,
                total: dependencies.length + devDependencies.length
            };
            
            console.log(`✅ Dependencies: ${dependencies.length} production, ${devDependencies.length} development`);
            
            // Check for heavy dependencies
            const heavyDeps = ['lodash', 'moment', 'jquery', 'bootstrap'];
            const foundHeavy = dependencies.filter(dep => heavyDeps.includes(dep));
            
            if (foundHeavy.length > 0) {
                performanceReport.recommendations.push({
                    type: 'heavy_dependencies',
                    message: `Consider replacing heavy dependencies: ${foundHeavy.join(', ')}`,
                    priority: 'medium'
                });
            }
        }
    } catch (error) {
        console.log(`❌ Error analyzing dependencies: ${error.message}`);
    }
}

function generateOptimizationRecommendations() {
    console.log('\n💡 Generating optimization recommendations...');
    
    // Image optimization
    performanceReport.recommendations.push({
        type: 'image_optimization',
        message: 'Implement image optimization with next/image',
        priority: 'high'
    });
    
    // Code splitting
    performanceReport.recommendations.push({
        type: 'code_splitting',
        message: 'Implement dynamic imports for code splitting',
        priority: 'medium'
    });
    
    // Caching
    performanceReport.recommendations.push({
        type: 'caching',
        message: 'Implement proper caching strategies',
        priority: 'medium'
    });
    
    console.log(`✅ Generated ${performanceReport.recommendations.length} recommendations`);
}

// Run analysis
analyzeBundleSize();
analyzeDependencies();
generateOptimizationRecommendations();

// Save report
const reportPath = 'performance-optimization-report.json';
fs.writeFileSync(reportPath, JSON.stringify(performanceReport, null, 2));

console.log('\n📊 Performance Optimization Summary');
console.log('====================================');
console.log(`Recommendations: ${performanceReport.recommendations.length}`);
console.log(`High Priority: ${performanceReport.recommendations.filter(r => r.priority === 'high').length}`);
console.log(`Medium Priority: ${performanceReport.recommendations.filter(r => r.priority === 'medium').length}`);

console.log(`\n📄 Report saved to: ${reportPath}`);

process.exit(0);