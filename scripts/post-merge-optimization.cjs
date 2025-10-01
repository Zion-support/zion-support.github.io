#!/usr/bin/env node

/**
 * Post-Merge Optimization Script
 * 
 * This script performs comprehensive optimizations after merging PRs:
 * - Analyzes bundle sizes
 * - Identifies duplicate code
 * - Suggests component consolidations
 * - Generates performance reports
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Post-Merge Optimization...\n');

// Configuration
const config = {
  componentsDir: path.join(__dirname, '../components'),
  appFile: path.join(__dirname, '../App.tsx'),
  reportDir: path.join(__dirname, '../optimization-reports'),
};

// Ensure report directory exists
if (!fs.existsSync(config.reportDir)) {
  fs.mkdirSync(config.reportDir, { recursive: true });
}

/**
 * Analyze component imports in App.tsx
 */
function analyzeImports() {
  console.log('📊 Analyzing component imports...');
  
  try {
    const appContent = fs.readFileSync(config.appFile, 'utf-8');
    const importMatches = appContent.match(/import .+ from ['"]\.\/.+['"]/g) || [];
    
    const analysis = {
      totalImports: importMatches.length,
      componentImports: importMatches.filter(imp => imp.includes('./components')).length,
      srcImports: importMatches.filter(imp => imp.includes('./src')).length,
      duplicates: findDuplicateImports(importMatches),
    };
    
    console.log(`  ✓ Total imports: ${analysis.totalImports}`);
    console.log(`  ✓ Component imports: ${analysis.componentImports}`);
    console.log(`  ✓ Src imports: ${analysis.srcImports}`);
    
    if (analysis.duplicates.length > 0) {
      console.log(`  ⚠️  Found ${analysis.duplicates.length} duplicate imports`);
    }
    
    return analysis;
  } catch (error) {
    console.error('  ❌ Error analyzing imports:', error.message);
    return null;
  }
}

/**
 * Find duplicate imports
 */
function findDuplicateImports(imports) {
  const seen = new Set();
  const duplicates = [];
  
  imports.forEach(imp => {
    const normalized = imp.trim().toLowerCase();
    if (seen.has(normalized)) {
      duplicates.push(imp);
    } else {
      seen.add(normalized);
    }
  });
  
  return duplicates;
}

/**
 * Analyze component sizes
 */
function analyzeComponentSizes() {
  console.log('\n📦 Analyzing component sizes...');
  
  try {
    if (!fs.existsSync(config.componentsDir)) {
      console.log('  ⚠️  Components directory not found');
      return null;
    }
    
    const components = fs.readdirSync(config.componentsDir)
      .filter(file => file.endsWith('.tsx') || file.endsWith('.ts'));
    
    const sizeAnalysis = components.map(file => {
      const filePath = path.join(config.componentsDir, file);
      const stats = fs.statSync(filePath);
      const content = fs.readFileSync(filePath, 'utf-8');
      
      return {
        name: file,
        sizeKB: (stats.size / 1024).toFixed(2),
        lines: content.split('\n').length,
        complexity: calculateComplexity(content),
      };
    }).sort((a, b) => parseFloat(b.sizeKB) - parseFloat(a.sizeKB));
    
    const topLarge = sizeAnalysis.slice(0, 10);
    console.log(`  ✓ Analyzed ${components.length} components`);
    console.log(`  ✓ Top 5 largest components:`);
    topLarge.slice(0, 5).forEach((comp, i) => {
      console.log(`    ${i + 1}. ${comp.name}: ${comp.sizeKB} KB (${comp.lines} lines)`);
    });
    
    return sizeAnalysis;
  } catch (error) {
    console.error('  ❌ Error analyzing component sizes:', error.message);
    return null;
  }
}

/**
 * Calculate basic code complexity
 */
function calculateComplexity(content) {
  const conditionals = (content.match(/if\s*\(|else|switch|case|while|for/g) || []).length;
  const functions = (content.match(/function\s+|const\s+\w+\s*=\s*\(/g) || []).length;
  const returns = (content.match(/return\s+/g) || []).length;
  
  return conditionals + functions + returns;
}

/**
 * Identify similar components
 */
function identifySimilarComponents() {
  console.log('\n🔍 Identifying similar components...');
  
  try {
    if (!fs.existsSync(config.componentsDir)) {
      return null;
    }
    
    const components = fs.readdirSync(config.componentsDir)
      .filter(file => file.endsWith('.tsx'));
    
    const similarGroups = [];
    const patterns = [
      { name: 'Banner', pattern: /Banner\.tsx$/ },
      { name: 'Showcase', pattern: /Showcase\.tsx$/ },
      { name: '2025', pattern: /2025/ },
      { name: '2026', pattern: /2026/ },
      { name: '2027', pattern: /2027/ },
      { name: 'Breakthrough', pattern: /Breakthrough/ },
      { name: 'Content', pattern: /Content/ },
    ];
    
    patterns.forEach(({ name, pattern }) => {
      const matches = components.filter(file => pattern.test(file));
      if (matches.length > 5) {
        similarGroups.push({ pattern: name, count: matches.length });
      }
    });
    
    console.log(`  ✓ Found ${similarGroups.length} groups of similar components:`);
    similarGroups.forEach(group => {
      console.log(`    - ${group.pattern}: ${group.count} components`);
    });
    
    return similarGroups;
  } catch (error) {
    console.error('  ❌ Error identifying similar components:', error.message);
    return null;
  }
}

/**
 * Generate optimization recommendations
 */
function generateRecommendations(analysis) {
  console.log('\n💡 Optimization Recommendations:\n');
  
  const recommendations = [];
  
  // Check for duplicate imports
  if (analysis.imports && analysis.imports.duplicates.length > 0) {
    recommendations.push({
      priority: 'HIGH',
      category: 'Code Quality',
      issue: `Found ${analysis.imports.duplicates.length} duplicate imports`,
      recommendation: 'Remove duplicate import statements to improve code maintainability',
      impact: 'Medium',
    });
  }
  
  // Check component count
  if (analysis.imports && analysis.imports.componentImports > 100) {
    recommendations.push({
      priority: 'MEDIUM',
      category: 'Performance',
      issue: `High number of component imports (${analysis.imports.componentImports})`,
      recommendation: 'Consider lazy loading or code splitting for banner components',
      impact: 'High',
    });
  }
  
  // Check large components
  if (analysis.sizes) {
    const largeComponents = analysis.sizes.filter(c => parseFloat(c.sizeKB) > 10);
    if (largeComponents.length > 0) {
      recommendations.push({
        priority: 'LOW',
        category: 'Code Organization',
        issue: `${largeComponents.length} components exceed 10KB`,
        recommendation: 'Review large components for potential splitting',
        impact: 'Low',
      });
    }
  }
  
  // Check similar components
  if (analysis.similar) {
    const largeGroups = analysis.similar.filter(g => g.count > 10);
    if (largeGroups.length > 0) {
      recommendations.push({
        priority: 'MEDIUM',
        category: 'Code Reuse',
        issue: `Multiple similar component groups found`,
        recommendation: 'Create base components to reduce code duplication',
        impact: 'High',
      });
    }
  }
  
  // Display recommendations
  if (recommendations.length === 0) {
    console.log('  ✅ No critical optimizations needed!\n');
  } else {
    recommendations.forEach((rec, i) => {
      console.log(`${i + 1}. [${rec.priority}] ${rec.category}`);
      console.log(`   Issue: ${rec.issue}`);
      console.log(`   Recommendation: ${rec.recommendation}`);
      console.log(`   Impact: ${rec.impact}\n`);
    });
  }
  
  return recommendations;
}

/**
 * Save optimization report
 */
function saveReport(analysis, recommendations) {
  const timestamp = new Date().toISOString().replace(/:/g, '-').split('.')[0];
  const reportPath = path.join(config.reportDir, `optimization-${timestamp}.json`);
  
  const report = {
    timestamp: new Date().toISOString(),
    analysis,
    recommendations,
    summary: {
      totalImports: analysis.imports?.totalImports || 0,
      totalComponents: analysis.sizes?.length || 0,
      duplicateImports: analysis.imports?.duplicates?.length || 0,
      recommendationsCount: recommendations.length,
    },
  };
  
  try {
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`\n📄 Report saved to: ${reportPath}`);
  } catch (error) {
    console.error('\n❌ Error saving report:', error.message);
  }
}

/**
 * Main execution
 */
async function main() {
  const analysis = {
    imports: analyzeImports(),
    sizes: analyzeComponentSizes(),
    similar: identifySimilarComponents(),
  };
  
  const recommendations = generateRecommendations(analysis);
  saveReport(analysis, recommendations);
  
  console.log('\n✅ Post-merge optimization complete!\n');
}

// Run the script
main().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
