import fs from 'fs';
import path from 'path';

const monitorPerformance = () => {
  console.log('🔍 Performance Monitoring Report');
  console.log('================================\n');

  // Check bundle sizes
  const distPath = './dist';
  if (fs.existsSync(distPath)) {
    const files = fs.readdirSync(distPath, { recursive: true });
    const jsFiles = files.filter(file => file.endsWith('.js'));
    const cssFiles = files.filter(file => file.endsWith('.css'));
    
    let totalJsSize = 0;
    let totalCssSize = 0;
    
    console.log('📦 Bundle Analysis:');
    jsFiles.forEach(file => {
      const filePath = path.join(distPath, file);
      const stats = fs.statSync(filePath);
      const sizeKB = (stats.size / 1024).toFixed(2);
      totalJsSize += stats.size;
      console.log(`  ${file}: ${sizeKB} KB`);
    });
    
    cssFiles.forEach(file => {
      const filePath = path.join(distPath, file);
      const stats = fs.statSync(filePath);
      const sizeKB = (stats.size / 1024).toFixed(2);
      totalCssSize += stats.size;
      console.log(`  ${file}: ${sizeKB} KB`);
    });
    
    const totalSize = totalJsSize + totalCssSize;
    const totalSizeKB = (totalSize / 1024).toFixed(2);
  
  console.log(`\n📊 Total Bundle Size: ${totalSizeKB} KB`);
  
  // Performance recommendations
  if (totalSize > 500 * 1024) {
    console.log('\n⚠️  Performance Warnings:');
    console.log('  - Bundle size is large (>500KB)');
    console.log('  - Consider code splitting and lazy loading');
  } else {
    console.log('\n✅ Bundle size is optimal');
  }
  } else {
    console.log('❌ Dist folder not found. Run npm run build first.');
  }

  // Check for unused dependencies
  console.log('\n🔍 Dependency Analysis:');
  try {
    const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
    const dependencies = Object.keys(packageJson.dependencies || {});
    const devDependencies = Object.keys(packageJson.devDependencies || {});
    
    console.log(`  Production dependencies: ${dependencies.length}`);
    console.log(`  Development dependencies: ${devDependencies.length}`);
    
    // Check for potential issues
    const largeDeps = ['framer-motion', 'recharts', 'lucide-react'];
    const foundLargeDeps = dependencies.filter(dep => largeDeps.includes(dep));
    
    if (foundLargeDeps.length > 0) {
      console.log(`\n⚠️  Large dependencies found: ${foundLargeDeps.join(', ')}`);
      console.log('  - Consider tree shaking and dynamic imports');
    }
  } catch (error) {
    console.log('❌ Could not analyze dependencies');
  }

  // Check for performance optimizations
  console.log('\n🚀 Performance Optimizations:');
  
  // Check if critical CSS exists
  const criticalCSSPath = './dist/critical.css';
  if (fs.existsSync(criticalCSSPath)) {
    console.log('  ✅ Critical CSS found');
  } else {
    console.log('  ⚠️  Critical CSS not found - consider implementing');
  }

  // Check for service worker
  const swPath = './dist/sw.js';
  if (fs.existsSync(swPath)) {
    console.log('  ✅ Service Worker found');
  } else {
    console.log('  ⚠️  Service Worker not found - consider implementing');
  }

  // Check for sitemap
  const sitemapPath = './dist/sitemap.xml';
  if (fs.existsSync(sitemapPath)) {
    console.log('  ✅ Sitemap found');
  } else {
    console.log('  ⚠️  Sitemap not found - consider implementing');
  }

  console.log('\n📈 Performance Score:');
  let score = 100;
  
  if (totalSize > 500 * 1024) score -= 20;
  if (jsFiles.length > 10) score -= 10;
  if (!fs.existsSync(criticalCSSPath)) score -= 15;
  if (!fs.existsSync(swPath)) score -= 10;
  if (!fs.existsSync(sitemapPath)) score -= 5;
  
  console.log(`  Overall Score: ${score}/100`);
  
  if (score >= 90) {
    console.log('  🎉 Excellent performance!');
  } else if (score >= 70) {
    console.log('  👍 Good performance, some optimizations possible');
  } else {
    console.log('  ⚠️  Performance needs improvement');
  }

  console.log('\n✅ Performance monitoring complete!');
};

monitorPerformance();