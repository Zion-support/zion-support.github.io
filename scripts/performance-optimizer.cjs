#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('⚡ Performance Optimizer - Zion Tech Group');
console.log('==========================================');

const optimizations = {
  bundleAnalysis: () => {
    console.log('📦 Analyzing bundle size...');
    try {
      const buildDir = path.join(process.cwd(), '.next');
      if (!fs.existsSync(buildDir)) {
        console.log('⚠️  Build directory not found. Run npm run build first.');
        return false;
      }
      
      // Check for large files
      const staticDir = path.join(buildDir, 'static');
      if (fs.existsSync(staticDir)) {
        const files = fs.readdirSync(staticDir, { recursive: true });
        let totalSize = 0;
        let largeFiles = [];
        
        files.forEach(file => {
          const filePath = path.join(staticDir, file);
          if (fs.statSync(filePath).isFile()) {
            const size = fs.statSync(filePath).size;
            totalSize += size;
            if (size > 1024 * 1024) { // Files larger than 1MB
              largeFiles.push({ file, size: (size / 1024 / 1024).toFixed(2) + 'MB' });
            }
          }
        });
        
        console.log(`📊 Total bundle size: ${(totalSize / 1024 / 1024).toFixed(2)}MB`);
        if (largeFiles.length > 0) {
          console.log('🔍 Large files found:');
          largeFiles.forEach(({ file, size }) => {
            console.log(`   - ${file}: ${size}`);
          });
        }
      }
      return true;
    } catch (error) {
      console.log(`❌ Bundle analysis failed: ${error.message}`);
      return false;
    }
  },
  
  imageOptimization: () => {
    console.log('🖼️  Checking image optimization...');
    try {
      const publicDir = path.join(process.cwd(), 'public');
      if (!fs.existsSync(publicDir)) {
        console.log('⚠️  Public directory not found.');
        return false;
      }
      
      const images = [];
      const findImages = (dir) => {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
          const filePath = path.join(dir, file);
          if (fs.statSync(filePath).isDirectory()) {
            findImages(filePath);
          } else if (/\.(jpg|jpeg|png|gif|webp|svg)$/i.test(file)) {
            const size = fs.statSync(filePath).size;
            images.push({ file, size: (size / 1024).toFixed(2) + 'KB' });
          }
        });
      };
      
      findImages(publicDir);
      
      if (images.length > 0) {
        console.log(`📸 Found ${images.length} images:`);
        images.forEach(({ file, size }) => {
          console.log(`   - ${file}: ${size}`);
        });
        
        const largeImages = images.filter(img => 
          parseFloat(img.size) > 500 // Images larger than 500KB
        );
        
        if (largeImages.length > 0) {
          console.log('⚠️  Large images detected. Consider optimizing:');
          largeImages.forEach(({ file, size }) => {
            console.log(`   - ${file}: ${size}`);
          });
        }
      } else {
        console.log('✅ No images found in public directory.');
      }
      return true;
    } catch (error) {
      console.log(`❌ Image optimization check failed: ${error.message}`);
      return false;
    }
  },
  
  codeOptimization: () => {
    console.log('🔧 Checking code optimization...');
    try {
      const pagesDir = path.join(process.cwd(), 'pages');
      const componentsDir = path.join(process.cwd(), 'components');
      
      let totalFiles = 0;
      let largeFiles = [];
      
      const checkDirectory = (dir) => {
        if (!fs.existsSync(dir)) return;
        
        const files = fs.readdirSync(dir);
        files.forEach(file => {
          const filePath = path.join(dir, file);
          if (fs.statSync(filePath).isDirectory()) {
            checkDirectory(filePath);
          } else if (/\.(tsx|ts|jsx|js)$/.test(file)) {
            totalFiles++;
            const content = fs.readFileSync(filePath, 'utf8');
            const lines = content.split('\n').length;
            
            if (lines > 200) {
              largeFiles.push({ file, lines });
            }
          }
        });
      };
      
      checkDirectory(pagesDir);
      checkDirectory(componentsDir);
      
      console.log(`📄 Total files analyzed: ${totalFiles}`);
      
      if (largeFiles.length > 0) {
        console.log('⚠️  Large files detected (over 200 lines):');
        largeFiles.forEach(({ file, lines }) => {
          console.log(`   - ${file}: ${lines} lines`);
        });
        console.log('💡 Consider breaking large files into smaller components.');
      } else {
        console.log('✅ All files are reasonably sized.');
      }
      return true;
    } catch (error) {
      console.log(`❌ Code optimization check failed: ${error.message}`);
      return false;
    }
  }
};

const results = {};
let overallScore = 0;
const totalChecks = Object.keys(optimizations).length;

console.log('\n🚀 Starting Performance Optimization...\n');

for (const [optimizationName, optimizationFunction] of Object.entries(optimizations)) {
  try {
    const result = optimizationFunction();
    results[optimizationName] = result;
    if (result) overallScore++;
    console.log('');
  } catch (error) {
    results[optimizationName] = false;
    console.log(`❌ ${optimizationName} failed: ${error.message}\n`);
  }
}

const score = Math.round((overallScore / totalChecks) * 100);

console.log('📊 Performance Optimization Results');
console.log('===================================');
console.log(`Overall Score: ${score}% (${overallScore}/${totalChecks} checks passed)`);

if (score >= 80) {
  console.log('🎉 Excellent performance! Your app is well optimized.');
} else if (score >= 60) {
  console.log('👍 Good performance with room for improvement.');
} else {
  console.log('⚠️  Performance needs attention. Consider the recommendations above.');
}

// Generate performance report
const report = {
  timestamp: new Date().toISOString(),
  score,
  results,
  recommendations: []
};

if (score < 80) {
  report.recommendations.push('Consider implementing code splitting for large components');
  report.recommendations.push('Optimize images using WebP format and proper sizing');
  report.recommendations.push('Implement lazy loading for non-critical components');
  report.recommendations.push('Use dynamic imports for heavy libraries');
}

// Save report
const reportPath = path.join(process.cwd(), 'performance-report.json');
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

console.log(`\n📄 Performance report saved to: ${reportPath}`);

if (report.recommendations.length > 0) {
  console.log('\n💡 Recommendations:');
  report.recommendations.forEach((rec, index) => {
    console.log(`   ${index + 1}. ${rec}`);
  });
}

console.log('\n🎯 Performance optimization completed!');