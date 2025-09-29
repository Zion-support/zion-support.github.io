#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"function log(message, type = "INFO") {" const icons = { INFO: "", SUCCESS: "", ERROR: "", WARNING: "" };" console.log(`${icons[type] | ""} ${message}`);}function ensureDir(dir) {" fs.mkdirSync(dir, { recursive: true });}function findFiles(dir, exts) { if (!fs.existsSync(dir)) return []; const results = []; for (const entry of fs.readdirSync(dir)) { const p = path.join(dir, entry); const stat = fs.statSync(p); if (stat.isDirectory()) results.push(.findFiles(p, exts)); else if (exts.includes(path.extname(entry).toLowerCase())) results.push(p); } return results;}function optimizeImages(publicDir, report) {" const images = findFiles(publicDir, [".png", ".jpg", ".jpeg"]); if (images.length === 0) {" report.actions.push("No images found to optimize"); return; } let sharp; try {" sharp = require("sharp"); } catch {" report.actions.push("sharp not installed; skipping image optimization"); return; } const optimized = []; for (const img of images) { const stat = fs.statSync(img); if (stat.size < 150 * 1024) continue; / skip small files const ext = path.extname(img).toLowerCase();"` const outPath = img.replace(new RegExp(`${ext}$`), ".webp"); try {" sharp(img).webp({ quality: 80 }).toFile(outPath);" optimized.push({ from: img, to: outPath }); } catch (e) {` report.errors.push(`Failed optimizing ${img}: ${e.message}`); } } if (optimized.length > 0) report.optimizedImages = optimized;` report.actions.push(`Optimized ${optimized.length} images to WebP`);}function ensureNextConfigFlags(rootDir, report) {" const candidates = ["next.config.js", "deployment/next.config.js"]; for (const rel of candidates) { const file = path.join(rootDir, rel); if (!fs.existsSync(file)) continue;" const original = fs.readFileSync(file, "utf8");"" if (original.includes("optimizeCss: true")) {` report.actions.push(`${rel}: optimizeCss already enabled`); continue; } / Attempt minimal enhancement by appending experimental.optimizeCss try { let updated = original;"" if (original.includes("experimental: ")) { updated = original.replace( /experimental:\s*\{/,"" "experimental: {\n optimizeCss: true," ); } else if (" original.includes("nextConfig") |" original.includes("module.exports") ) { updated = original.replace(/\{([\s\S]*?)\}/, m =>"" m.replace(/\}$/, ",\n experimental: { optimizeCss: true }\n}") ); } if (updated !== original) { fs.writeFileSync(file, updated); report.modifiedFiles.push(file);` report.actions.push(`${rel}: enabled experimental.optimizeCss`); } } catch (e) {` report.errors.push(`Failed updating ${rel}: ${e.message}`); } }}function main() { const root = process.cwd(); const timestamp = Date.now(); const report = { timestamp," actions: []," optimizedImages: []," modifiedFiles: []," errors: []};" log("Starting Performance Optimizer.");" ensureDir(path.join(root, "automation-reports")); / Image optimization in public/" optimizeImages(path.join(root, "public"), report); / Ensure Next.js config flags ensureNextConfigFlags(root, report); const outFile = path.join( root,` `performance-optimizer-report-${timestamp}.json` ); fs.writeFileSync(outFile, JSON.stringify(report, null, 2)); log("` `Performance optimization complete. Report: ${path.basename(outFile)}`," "SUCCESS" );}try { main();} catch (e) {""` log(`Performance optimizer failed: ${e.message}`, "ERROR"); process.exit(1);}'"`'"`
#!/usr/bin/env node;

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');


    if (!config.includes('optimizeCss')) {}
      optimizations.push('Add CSS optimization');
    };
    if (!config.includes('experimental')) {}
      optimizations.push('Add experimental features');
    };
    if (!config.includes('compress')) {}
      optimizations.push('Enable compression');
    };
    if (optimizations.length > 0) {}
      this.report.recommendations.push({})
        file: configPath,
        optimizations;
      }
});
      log(`Found ${optimizations.length} optimization opportunities in next.config.js`, 'WARNING');
    } else {}
      log('next.config.js is well optimized', 'SUCCESS');
    };
  };
  async optimizeImages() {}
    const publicDir = 'public';
    if (!fs.existsSync(publicDir)) {}
      log('Public directory not found', 'WARNING');
      return;
    };
    try {}
      // Check if sharp is available;
      execSync('npx sharp --version', { stdio: 'pipe' }
});
      const imageFiles = this.findImageFiles(publicDir);
      let optimizedCount = 0;
      for (const imagePath of imageFiles) {}
        const stats = fs.statSync(imagePath);
        const sizeKB = Math.round(stats.size / 1024);
        if (sizeKB > 100) { // Optimize images larger than 100KB;}
          try {}
            const outputPath = imagePath.replace(/(\.[^.]+)$/, '_optimized$1');
            execSync(`npx sharp -i "${imagePath}" -o "${outputPath}" --quality 80`, { stdio: 'pipe' }
});
            const newStats = fs.statSync(outputPath);
            const newSizeKB = Math.round(newStats.size / 1024);
            const savings = Math.round(((sizeKB - newSizeKB) / sizeKB) * 100);
            this.report.optimizations.push({})
              file: imagePath,
              originalSize: sizeKB,
              optimizedSize: newSizeKB,
              savings: `${savings}%``
            }
});
            optimizedCount++;
            log(`Optimized ${path.basename(imagePath)}: ${sizeKB}KB → ${newSizeKB}KB (${savings}% savings)`, 'SUCCESS');
          } catch (error) {}
            log(`Failed to optimize ${imagePath}: ${error.message}`, 'ERROR');
          };
        };
      };
      if (optimizedCount === 0) {}
        log('No large images found to optimize', 'INFO');
      };
    } catch (error) {}
      log('Sharp not available, skipping image optimization', 'WARNING');
    };
  };
  findImageFiles(dir) {}
    const imageFiles = [];
    const files = fs.readdirSync(dir, { withFileTypes: true }
});
    for (const file of files) {}
      const fullPath = path.join(dir, file.name);
      if (file.isDirectory()) {}
        imageFiles.push(...this.findImageFiles(fullPath));
      } else if (file.isFile() && /\.(jpg|jpeg|png|gif|webp)$/i.test(file.name)) {}
        imageFiles.push(fullPath);
      };
    };
    return imageFiles;
  };
  async checkBundleSize() {}
    try {}
      log('Checking bundle size...', 'INFO');
      // Run build to get bundle analysis;
      execSync('npm run build', { stdio: 'pipe' }
});
      const nextDir = '.next';
      if (fs.existsSync(nextDir)) {}
        const staticDir = path.join(nextDir, 'static');
        if (fs.existsSync(staticDir)) {}
          const totalSize = this.getDirectorySize(staticDir);
          const sizeMB = Math.round(totalSize / (1024 * 1024) * 100) / 100;
          this.report.optimizations.push({})
            type: 'bundle_size',
            size: `${sizeMB}MB`,`
            status: sizeMB < 5 ? 'good' : sizeMB < 10 ? 'warning' : 'large'
          }
});
          if (sizeMB > 10) {}
            this.report.recommendations.push({})
              type: 'bundle_size',
              message: 'Bundle size is large, consider code splitting and lazy loading'
            }
});
          };
          log(`Bundle size: ${sizeMB}MB`, sizeMB < 5 ? 'SUCCESS' : sizeMB < 10 ? 'WARNING' : 'ERROR');
        };
      };
    } catch (error) {}
      log(`Failed to check bundle size: ${error.message}`, 'ERROR');
    };
  };
  getDirectorySize(dir) {}
    let totalSize = 0;
    const files = fs.readdirSync(dir, { withFileTypes: true }
});
    for (const file of files) {}
      const fullPath = path.join(dir, file.name);
      if (file.isDirectory()) {}
        totalSize += this.getDirectorySize(fullPath);
      } else {}
        totalSize += fs.statSync(fullPath).size;
      };
    };
    return totalSize;
  };
  async checkLighthouse() {}
    try {}
      // Check if lighthouse is available;
      execSync('npx lighthouse --version', { stdio: 'pipe' }
});
      log('Lighthouse available, consider running: npx lighthouse http://localhost:3000', 'INFO');
    } catch (error) {}
      log('Lighthouse not available, install with: npm install -g lighthouse', 'WARNING');
    };
  };
  generateReport() {}
    const reportPath = 'performance-optimization-report.json';
    fs.writeFileSync(reportPath, JSON.stringify(this.report, null, 2));
    log(`Performance report saved to ${reportPath}`, 'SUCCESS');
  };
};
// Run if called directly;
if (require.main === module) {}
  const optimizer = new PerformanceOptimizer();
  optimizer.optimize().then(success => {})
    process.exit(success ? 0 : 1);
  }
});
};
module.exports = PerformanceOptimizer;
console.log('⚡ Zion Tech Group - Performance Optimizer');
console.log('');
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
function main() {
  const root = process.cwd();
  const timestamp = Date.now();
  const report = {
    timestamp,
    actions: [],
    optimizedImages: [],
    modifiedFiles: [],
    errors: [],
  };
  log('Starting Performance Optimizer...');
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
  log(
    `Performance optimization complete. Report: ${path.basename(outFile)}`,
    'SUCCESS'
  );
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
console.log('=');
console.log(`Recommendations: ${performanceReport.recommendations.length}`);
console.log(`High Priority: ${performanceReport.recommendations.filter(r => r.priority === 'high').length}`);
console.log(`Medium Priority: ${performanceReport.recommendations.filter(r => r.priority === 'medium').length}`);
console.log(`\n📄 Report saved to: ${reportPath}`);
process.exit(0);
