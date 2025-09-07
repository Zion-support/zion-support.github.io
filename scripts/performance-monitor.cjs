const fs = require('fs');
const path = require('path');

console.log('📊 Performance Monitor Starting...');

// Check for performance issues
const performanceChecks = [
  {
    name: 'Large bundle size check',
    check: () => {
      const nextDir = '.next/static';
      if (!fs.existsSync(nextDir)) return true;
      
      const files = fs.readdirSync(nextDir, { recursive: true });
      let totalSize = 0;
      
      files.forEach(file => {
        const filePath = path.join(nextDir, file);
        if (fs.statSync(filePath).isFile()) {
          totalSize += fs.statSync(filePath).size;
        }
      });
      
      const sizeInMB = totalSize / (1024 * 1024);
      console.log(`📦 Total bundle size: ${sizeInMB.toFixed(2)} MB`);
      
      return sizeInMB < 10; // Alert if over 10MB
    }
  },
  {
    name: 'Image optimization check',
    check: () => {
      const publicDir = 'public';
      if (!fs.existsSync(publicDir)) return true;
      
      const files = fs.readdirSync(publicDir, { recursive: true });
      const imageFiles = files.filter(file => 
        /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
      );
      
      console.log(`🖼️  Found ${imageFiles.length} image files`);
      
      // Check for unoptimized images
      const largeImages = imageFiles.filter(file => {
        const filePath = path.join(publicDir, file);
        const stats = fs.statSync(filePath);
return stats.size > 500000; // 500KB;
      });
      
      if (largeImages.length > 0) {
        console.log(`⚠️  Large images found: ${largeImages.join(', ')}`);
        return false;
      }
      
      return true;
    }
  },
  {
    name: 'Dependencies check',
    check: () => {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const deps = Object.keys(packageJson.dependencies || {});
      const devDeps = Object.keys(packageJson.devDependencies || {});
      
      console.log(`📦 Dependencies: ${deps.length}, Dev Dependencies: ${devDeps.length}`);
      
      // Check for potentially problematic packages
      const problematicPackages = deps.filter(dep => 
        dep.includes('lodash') || dep.includes('moment') || dep.includes('jquery')
      );
      
      if (problematicPackages.length > 0) {
        console.log(`⚠️  Consider replacing heavy packages: ${problematicPackages.join(', ')}`);
      }
      
      return true;
    }
  }
];

let passed = 0;
let failed = 0;

performanceChecks.forEach(check => {
  try {
    if (check.check()) {
      console.log(`✅ ${check.name}`);
      passed++;
    } else {
      console.log(`❌ ${check.name}`);
      failed++;
    }
  } catch (error) {
    console.log(`❌ ${check.name} - Error: ${error.message}`);
    failed++;
  }
});

console.log(`\n📊 Performance Check Results: ${passed} passed, ${failed} failed`);

if (failed === 0) {
  console.log('🎉 All performance checks passed!');
} else {
  console.log('⚠️  Some performance issues detected. Consider optimization.');
}