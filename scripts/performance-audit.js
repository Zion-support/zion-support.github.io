import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
// #!/usr/bin/env node


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// /**
 * Performance Audit Script
 * Analyzes the codebase for performance issues and provides recommendations
 */

const performanceIssues = [];
const recommendations = [];

// Check for large bundle files
function checkBundleSize() {
  const distPath = path.join(__dirname, '..', 'dist');
  if (!fs.existsSync(distPath)) {
    // console.log('⚠️  No dist folder found. Run build first.');
    return;
  }

  const files = fs.readdirSync(distPath, { recursive: true });
  const jsFiles = files.filter(file => file.endsWith('.js'));
  
  jsFiles.forEach(file => {
    const filePath = path.join(distPath, file);
    const stats = fs.statSync(filePath);
    const sizeInKB = stats.size / 1024;
    
    if (sizeInKB > 500) {
      performanceIssues.push({
        type: 'Large Bundle',
//         file: file,
        size: `${sizeInKB.toFixed(2)} KB`,
//         severity: sizeInKB > 1000 ? 'high' : 'medium'
      });
    }
  });
}

// Check for unused imports
function checkUnusedImports() {
  const srcPath = path.join(process.cwd(), 'app');
  if (!fs.existsSync(srcPath)) {
    return;
  }

  const files = getAllFiles(srcPath, ['.tsx', '.ts']);
  
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    
    lines.forEach((line, index) => {
      if (line.includes('import') && line.includes('{') && line.includes('}')) {
        // Simple check for potentially unused imports
        const importMatch = line.match(/import\s*{\s*([^}]+)\s*}\s*from/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim());
          imports.forEach(imp => {
            const importName = imp.split(' as ')[0].trim();
            if (!content.includes(importName) || content.split(importName).length < 3) {
              performanceIssues.push({
                type: 'Potentially Unused Import',
                file: path.relative(process.cwd(), file),
//                 line: index + 1,
                import: importName,
//                 severity: 'low'
              });
            }
          });
        }
      }
    });
  });
}

// Check for missing lazy loading
function checkLazyLoading() {
  const srcPath = path.join(process.cwd(), 'app');
  const files = getAllFiles(srcPath, ['.tsx', '.ts']);
  
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    // Check for large components that should be lazy loaded
    if (content.includes('export default function') && content.length > 2000) {
      const fileName = path.basename(file);
      if (!content.includes('React.lazy') && !fileName.includes('page.tsx')) {
        recommendations.push({
          type: 'Lazy Loading',
          file: path.relative(process.cwd(), file),
          suggestion: 'Consider using React.lazy() for this large component'
        });
      }
    }
  });
}

// Check for missing memoization
function checkMemoization() {
  const srcPath = path.join(process.cwd(), 'app');
  const files = getAllFiles(srcPath, ['.tsx', '.ts']);
  
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    // Check for components that could benefit from memoization
    if (content.includes('useState') && content.includes('useEffect')) {
      const fileName = path.basename(file);
      if (!content.includes('React.memo') && !content.includes('useMemo') && !content.includes('useCallback')) {
        recommendations.push({
          type: 'Memoization',
          file: path.relative(process.cwd(), file),
          suggestion: 'Consider using React.memo, useMemo, or useCallback for performance optimization'
        });
      }
    }
  });
}

// Utility function to get all files
function getAllFiles(dir, extensions) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  });
  
  return files;
}

// Generate performance report
function generateReport() {
  const report = {
    timestamp: new Date().toISOString(),
    issues: performanceIssues,
//     recommendations: recommendations,
    summary: {
      totalIssues: performanceIssues.length,
      highSeverity: performanceIssues.filter(issue => issue.severity === 'high').length,
      mediumSeverity: performanceIssues.filter(issue => issue.severity === 'medium').length,
      lowSeverity: performanceIssues.filter(issue => issue.severity === 'low').length,
//       totalRecommendations: recommendations.length
    }
  };

  fs.writeFileSync(
    path.join(__dirname, '..', 'performance-audit-report.json'),
    JSON.stringify(report, null, 2)
  );

  return report;
}

// Main execution
function main() {
  // console.log('🔍 Running performance audit...\n');
  
  checkBundleSize();
  checkUnusedImports();
  checkLazyLoading();
  checkMemoization();
  
  const report = generateReport();
  
  // console.log('📊 Performance Audit Results:');
  // console.log(`   Total Issues: ${report.summary.totalIssues}`);
  // console.log(`   High Severity: ${report.summary.highSeverity}`);
  // console.log(`   Medium Severity: ${report.summary.mediumSeverity}`);
  // console.log(`   Low Severity: ${report.summary.lowSeverity}`);
  // console.log(`   Recommendations: ${report.summary.totalRecommendations}\n`);
  
  if (performanceIssues.length > 0) {
    // console.log('🚨 Issues Found:');
    performanceIssues.forEach(issue => {
      const severity = issue.severity === 'high' ? '🔴' : issue.severity === 'medium' ? '🟡' : '🟢';
      // console.log(`   ${severity} ${issue.type}: ${issue.file || issue.import || 'N/A'}`);
    });
    // console.log('');
  }
  
  if (recommendations.length > 0) {
    // console.log('💡 Recommendations:');
    recommendations.forEach(rec => {
      // console.log(`   📝 ${rec.type}: ${rec.file}`);
      // console.log(`      ${rec.suggestion}`);
    });
    // console.log('');
  }
  
  // console.log('✅ Performance audit complete! Report saved to performance-audit-report.json');
}

main();