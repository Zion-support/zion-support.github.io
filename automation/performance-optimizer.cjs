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

function optimizeImages(publicDir, report) {
  const images = findFiles(publicDir, ['.png', '.jpg', '.jpeg']);
  if (images.length === 0) {
    report.actions.push('No images found to optimize');
    return;
  }

  let sharp;
  try {
    sharp = require('sharp');
  } catch {
    report.actions.push('sharp not installed; skipping image optimization');
    return;
  }

  const optimized = [];
  for (const img of images) {
    const stat = fs.statSync(img);
    if (stat.size < 150 * 1024) continue; // skip small files
    
    const ext = path.extname(img).toLowerCase();
    const outPath = img.replace(new RegExp(`${ext}$`), '.webp');
    
    try {
      sharp(img).webp({ quality: 80 }).toFile(outPath);
      optimized.push({ from: img, to: outPath });
    } catch (e) {
      report.errors.push(`Failed optimizing ${img}: ${e.message}`);
    }
  }

  if (optimized.length > 0) {
    report.optimizedImages = optimized;
  }
  report.actions.push(`Optimized ${optimized.length} images to WebP`);
}

function ensureNextConfigFlags(rootDir, report) {
  const candidates = ['next.config.js', 'deployment/next.config.js'];
  
  for (const rel of candidates) {
    const file = path.join(rootDir, rel);
    if (!fs.existsSync(file)) continue;

    const original = fs.readFileSync(file, 'utf8');
    
    if (original.includes('optimizeCss: true')) {
      report.actions.push(`${rel}: optimizeCss already enabled`);
      continue;
    }

    // Attempt minimal enhancement by appending experimental.optimizeCss
    try {
      let updated = original;
      
      if (original.includes('experimental:')) {
        updated = original.replace(
          /experimental:\s*\{/,
          'experimental: {\n    optimizeCss: true,'
        );
      } else if (original.includes('nextConfig') || original.includes('module.exports')) {
        updated = original.replace(/\{([\s\S]*?)\}/, m => 
          m.replace(/\}$/, ',\n  experimental: { optimizeCss: true }\n}')
        );
      }

      if (updated !== original) {
        fs.writeFileSync(file, updated);
        report.modifiedFiles.push(file);
        report.actions.push(`${rel}: enabled experimental.optimizeCss`);
      }
    } catch (e) {
      report.errors.push(`Failed updating ${rel}: ${e.message}`);
    }
  }
}

// Run the performance optimizer
if (require.main === module) {
  const optimizer = new PerformanceOptimizer();
  optimizer.run().catch(console.error);
}

module.exports = PerformanceOptimizer;
const optimizer = new PerformanceOptimizer()
optimizer.runOptimizations().catch(console.error)
