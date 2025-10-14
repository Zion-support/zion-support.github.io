#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix component and CSS issues
function fixComponentIssues(content) {
  let fixed = content;

  // Fix malformed component names
  fixed = fixed.replace(/<BarChart\s+3/g, '<BarChart3');
  fixed = fixed.replace(/<PieChart\s+3/g, '<PieChart3');
  fixed = fixed.replace(/<LineChart\s+3/g, '<LineChart3');
  fixed = fixed.replace(/<AreaChart\s+3/g, '<AreaChart3');
  fixed = fixed.replace(/<ScatterChart\s+3/g, '<ScatterChart3');
  fixed = fixed.replace(/<RadarChart\s+3/g, '<RadarChart3');
  fixed = fixed.replace(/<FunnelChart\s+3/g, '<FunnelChart3');
  fixed = fixed.replace(/<TreemapChart\s+3/g, '<TreemapChart3');
  fixed = fixed.replace(/<SankeyChart\s+3/g, '<SankeyChart3');
  fixed = fixed.replace(/<HeatmapChart\s+3/g, '<HeatmapChart3');
  
  // Fix malformed CSS classes
  fixed = fixed.replace(/bg-white\/1\s+0backdrop-blur-smrounded-lgp-6borderborder-white\/2\s+0/g, 'bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20');
  fixed = fixed.replace(/w\s+-1\s+2h-12/g, 'w-12 h-12');
  fixed = fixed.replace(/text-blue-400mb-4/g, 'text-blue-400 mb-4');
  fixed = fixed.replace(/text-xlfont-semiboldtext-whitemb-3/g, 'text-xl font-semibold text-white mb-3');
  fixed = fixed.replace(/text-gray-3\s+0\s+0/g, 'text-gray-300');
  
  // Fix more CSS class patterns
  fixed = fixed.replace(/(\w+)-(\d+)\s+(\d+)\s+(\d+)/g, '$1-$2$3$4');
  fixed = fixed.replace(/(\w+)-(\d+)\s+(\d+)/g, '$1-$2$3');
  fixed = fixed.replace(/(\w+)-(\d+)\s+(\d+)\s+(\d+)\s+(\d+)/g, '$1-$2$3$4$5');
  fixed = fixed.replace(/(\w+)-(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)/g, '$1-$2$3$4$5$6');
  
  // Fix specific patterns
  fixed = fixed.replace(/bg-gradient-to-br\s+from-slate-9\s+0\s+0\s+via-purple-9\s+0\s+0\s+to-slate-9\s+0\s+0/g, 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900');
  fixed = fixed.replace(/text-4xl\s+font-bold\s+text-white\s+mb-8/g, 'text-4xl font-bold text-white mb-8');
  fixed = fixed.replace(/text-xl\s+text-gray-3\s+0\s+0\s+mb-8/g, 'text-xl text-gray-300 mb-8');
  fixed = fixed.replace(/grid\s+md:grid-cols-2\s+lg:grid-cols-3\s+gap-8\s+mt-1\s+2/g, 'grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12');
  
  // Fix malformed JSX tags
  fixed = fixed.replace(/<h\s+1/g, '<h1');
  fixed = fixed.replace(/<h\s+2/g, '<h2');
  fixed = fixed.replace(/<h\s+3/g, '<h3');
  
  // Fix malformed function declarations
  fixed = fixed.replace(/function\s+(\w+)\(\)\s*=>/g, 'function $1()');
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\(\)\s*=>\s*\{\s*\{/g, 'const $1 = () => {');
  
  // Fix malformed array syntax
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\[\s*\{/g, 'const $1 = [\n    {');
  fixed = fixed.replace(/title:\s*'([^']+)',\s*description:\s*'([^']+)',\s*;\s*\},/g, 'title: \'$1\',\n      description: \'$2\',\n    },');
  fixed = fixed.replace(/title:\s*'([^']+)',\s*description:\s*'([^']+)',\s*;\s*\}/g, 'title: \'$1\',\n      description: \'$2\',\n    }');
  fixed = fixed.replace(/\]\s*return\s*\(/g, '];\n  return (');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixComponentIssues(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
function main() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    '*.tsx',
    '*.ts'
  ];
  
  let totalFixed = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: process.cwd() });
    files.forEach(file => {
      if (processFile(file)) {
        totalFixed++;
      }
    });
  });
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

if (require.main === module) {
  main();
}

module.exports = { fixComponentIssues, processFile };