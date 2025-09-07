=======
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
console.log('⚡ Starting Performance Optimizer...');
class PerformanceOptimizer {
  constructor() {
    this.reportsDir = path.join(process.cwd(), 'automation-reports');
    this.ensureReportsDir();
  }
  ensureReportsDir() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }
  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }
  async optimizePerformance() {
    const optimizations = [
      { name: 'Bundle Analysis', command: 'npm run analyze', description: 'Analyzing bundle size' },
      { name: 'Image Optimization', command: 'npm run optimize:images', description: 'Optimizing images' },
      { name: 'Code Splitting', command: 'npm run build:analyze', description: 'Analyzing code splitting' },
      { name: 'Lighthouse Audit', command: 'npm run perf:lighthouse', description: 'Running Lighthouse audit' },
      { name: 'Performance Monitor', command: 'npm run perf:monitor', description: 'Monitoring performance' }
    ];
    const results = [];
    let successfulOptimizations = 0;
    for (const optimization of optimizations) {
      try {
        this.log(`🔧 Running ${optimization.name}...`);
        this.log(`📝 ${optimization.description}`);
        execSync(optimization.command, { stdio: 'pipe' });
        console.log(`✅ ${optimization.name} completed successfully`);
        results.push({ 
          name: optimization.name, 
          status: 'success', 
          description: optimization.description,
          error: null 
        });
        successfulOptimizations++;
      } catch (error) {
        console.log(`❌ ${optimization.name} failed`);
        results.push({ 
          name: optimization.name, 
          status: 'failed', 
          description: optimization.description,
          error: error.message 
        });
      }
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
console.log('⚡ Starting Performance Optimizer...');
class PerformanceOptimizer {
  constructor() {
    this.reportsDir = path.join(process.cwd(), 'automation-reports');
    this.ensureReportsDir();
  }
  ensureReportsDir() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }
  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }
  async optimizePerformance() {
    const optimizations = [
      { name: 'Bundle Analysis', command: 'npm run analyze', description: 'Analyzing bundle size' },
      { name: 'Image Optimization', command: 'npm run optimize:images', description: 'Optimizing images' },
      { name: 'Code Splitting', command: 'npm run build:analyze', description: 'Analyzing code splitting' },
      { name: 'Lighthouse Audit', command: 'npm run perf:lighthouse', description: 'Running Lighthouse audit' },
      { name: 'Performance Monitor', command: 'npm run perf:monitor', description: 'Monitoring performance' }
    ];
    const results = [];
    let successfulOptimizations = 0;
    for (const optimization of optimizations) {
      try {
        this.log(`🔧 Running ${optimization.name}...`);
        this.log(`📝 ${optimization.description}`);
        execSync(optimization.command, { stdio: 'pipe' });
        console.log(`✅ ${optimization.name} completed successfully`);
        results.push({ 
          name: optimization.name, 
          status: 'success', 
          description: optimization.description,
          error: null 
        });
        successfulOptimizations++;
      } catch (error) {
        console.log(`❌ ${optimization.name} failed`);
        results.push({ 
          name: optimization.name, 
          status: 'failed', 
          description: optimization.description,
          error: error.message 
        });
      }
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
function log(message, type = 'INFO') {
  const icons = { INFO: 'ℹ️', SUCCESS: '✅', ERROR: '❌', WARNING: '⚠️' };
  console.log(`${icons[type] || ''} ${message}`);
}
function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}
function findFiles(dir, exts) {
  if (!fs.existsSync(dir)) return [];
  const results = [];
  for (const entry of fs.readdirSync(dir)) {
    const p = path.join(dir, entry);
    const stat = fs.statSync(p);
    if (stat.isDirectory()) {
      results.push(...findFiles(p, exts));
    } else if (exts.includes(path.extname(entry).toLowerCase())) {
      results.push(p);
    }
  }
  return results;
}
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
const { execSync } = require('child_process');
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
const fs = require('fs');
const path = require('path');
    } catch (error) {
      this.errors.push(`Build test failed: ${error.message}`);
      this.log(`❌ Build test failed: ${error.message}`, "ERROR");
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
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
    } catch (error) {
      this.log(`💥 Fatal error: ${error.message}`, "ERROR");
      process.exit(1);
    }
  }
  ensureReportsDir() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }
  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }
  async optimizePerformance() {
    const optimizations = [
      { name: 'Bundle Analysis', command: 'npm run analyze', description: 'Analyzing bundle size' },
      { name: 'Image Optimization', command: 'npm run optimize:images', description: 'Optimizing images' },
      { name: 'Code Splitting', command: 'npm run build:analyze', description: 'Analyzing code splitting' },
      { name: 'Lighthouse Audit', command: 'npm run perf:lighthouse', description: 'Running Lighthouse audit' },
      { name: 'Performance Monitor', command: 'npm run perf:monitor', description: 'Monitoring performance' }
    ];
    const results = [];
    let successfulOptimizations = 0;
      if (buildResult.success) {
        // Analyze bundle size
        const buildDir = path.join(this.projectRoot, '.next');
        if (fs.existsSync(buildDir)) {
          const stats = fs.statSync(buildDir);
          const sizeInMB = stats.size / (1024 * 1024);
          this.results.bundleAnalysis = {
            success: true,
            size: sizeInMB,
            recommendations: this.generateBundleRecommendations(sizeInMB)
          };
        }
      }
    } catch (error) {
      this.results.bundleAnalysis = {
        success: false,
        size: 0,
        recommendations: ['Failed to analyze bundle size']
      };
    }
  }
  async optimizeImages() {
    this.log('\n🖼️ OPTIMIZING IMAGES');
    try {
      // Check if images directory exists
      const imagesDir = path.join(this.projectRoot, 'public', 'images');
      if (fs.existsSync(imagesDir)) {
        const imageFiles = fs.readdirSync(imagesDir).filter(file => 
          /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
        );
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
        execSync(optimization.command, { stdio: 'pipe' });
        console.log(`✅ ${optimization.name} completed successfully`);
        results.push({ 
          name: optimization.name, 
          status: 'success', 
          description: optimization.description,
          error: null 
        });
        successfulOptimizations++;
      } catch (error) {
        console.log(`❌ ${optimization.name} failed`);
        results.push({ 
          name: optimization.name, 
          status: 'failed', 
          description: optimization.description,
          error: error.message 
        });
    for (const optimization of optimizations) {
      try {
        this.log(`🔧 Running ${optimization.name}...`);
        this.log(`📝 ${optimization.description}`);
function main() {
  const root = process.cwd();
  const timestamp = Date.now();
  const report = {
    timestamp,
    actions: [],
    optimizedImages: [],
    modifiedFiles: [],
    errors: []
  };
  log('Starting Performance Optimizer.');
  ensureDir(path.join(root, 'automation-reports'));
  // Image optimization in public/
  optimizeImages(path.join(root, 'public'), report);
  // Ensure Next.js config flags
  ensureNextConfigFlags(root, report);
  const outFile = path.join(
    root,
    `performance-optimizer-report-${timestamp}.json`
  );
  fs.writeFileSync(outFile, JSON.stringify(report, null, 2));
  log(`Performance optimization complete. Report: ${path.basename(outFile)}`, 'SUCCESS');
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
});
};
module.exports = PerformanceOptimizer;
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
=======
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
class PerformanceOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.optimizations = [];
    this.errors = [];
  }
  log(message, type = "INFO") {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${type}] ${message}`);
  }
  async optimizeNextConfig() {
    this.log("⚙️ Optimizing Next.js configuration...");
    try {
      const nextConfigPath = path.join(this.projectRoot, "next.config.js");
      if (fs.existsSync(nextConfigPath)) {
        let content = fs.readFileSync(nextConfigPath, "utf8");
        let modified = false;
        // Add performance optimizations
        if (!content.includes("experimental")) {
          content = content.replace(
            /module\.exports = \{/,
            `module.exports = {
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },`
          );
          modified = true;
        }
        if (modified) {
          fs.writeFileSync(nextConfigPath, content);
          this.optimizations.push("Updated Next.js configuration with performance optimizations");
          this.log("✅ Next.js configuration optimized");
        }
      } else {
        // Create a new Next.js config with optimizations
        const configContent = `/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  poweredByHeader: false,
  compress: true,
}
module.exports = nextConfig`;
        fs.writeFileSync(nextConfigPath, configContent);
        this.optimizations.push("Created Next.js configuration with performance optimizations");
        this.log("✅ Created optimized Next.js configuration");
      }
    } catch (error) {
      this.log(`❌ Failed to optimize Next.js config: ${error.message}`, "ERROR");
      this.errors.push(error.message);
    }
  }
  async runPerformanceTest() {
    this.log("🏃 Running performance test...");
    try {
      execSync("npm run build", {
        cwd: this.projectRoot,
        stdio: "pipe",
        timeout: 120000
      });
      this.optimizations.push("Build test successful");
      this.log("✅ Build test successful");
>>>>>>> main
    } catch (error) {
      this.errors.push(`Build test failed: ${error.message}`);
      this.log(`❌ Build test failed: ${error.message}`, "ERROR");
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
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
    } catch (error) {
      this.log(`💥 Fatal error: ${error.message}`, "ERROR");
      process.exit(1);
    }
  }
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
}
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
}
// Run if called directly
if (require.main === module) {
  const optimizer = new PerformanceOptimizer();
  optimizer.start().catch(console.error);
}
module.exports = PerformanceOptimizer;
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d