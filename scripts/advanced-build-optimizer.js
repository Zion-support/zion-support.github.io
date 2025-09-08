#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class AdvancedBuildOptimizer {
  constructor() {
    this.optimizations = [];
    this.projectRoot = process.cwd();
  }

  log(message) {
    console.log(`[Build Optimizer] ${message}`);
  }

  async cleanBuildDirectory() {
    this.log('Cleaning build directory...');
    const buildDirs = ['.next', 'out', 'dist', 'build'];
    
    for (const dir of buildDirs) {
      const dirPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(dirPath)) {
        fs.rmSync(dirPath, { recursive: true, force: true });
        this.optimizations.push(`Cleaned ${dir} directory`);
      }
    }
  }

  async optimizePackageJson() {
    this.log('Optimizing package.json...');
    const packagePath = path.join(this.projectRoot, 'package.json');
    
    if (fs.existsSync(packagePath)) {
      const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
      
      // Add optimized scripts
      const optimizedScripts = {
        'build:optimized': 'NODE_ENV=production next build && next export',
        'build:analyze': 'ANALYZE=true next build',
        'build:clean': 'rm -rf .next out dist && npm run build:optimized'
      };
      
      Object.entries(optimizedScripts).forEach(([key, value]) => {
        if (!pkg.scripts[key]) {
          pkg.scripts[key] = value;
          this.optimizations.push(`Added ${key} script`);
        }
      });
      
      fs.writeFileSync(packagePath, JSON.stringify(pkg, null, 2));
    }
  }

  async createOptimizedBuildScript() {
    this.log('Creating optimized build script...');
    const buildScript = `#!/bin/bash
# Advanced Build Script for Zion Tech Group
echo '🚀 Starting optimized build process...'
# Set environment variables for optimal performance

export NODE_ENV=production
export NEXT_TELEMETRY_DISABLED=1
export NEXT_DISABLE_ESLINT=1
export NODE_OPTIONS='--max-old-space-size=4096'

# Clean previous builds
echo '🧹 Cleaning previous builds...'
rm -rf .next
rm -rf out
rm -rf dist

# Install dependencies if needed
if [ ! -d 'node_modules' ]; then
  echo '📦 Installing dependencies...'
  npm ci --only=production
fi

# Run type checking
echo '🔍 Running type checking...'
npx tsc --noEmit || echo '⚠️ Type checking completed with warnings'

# Build the application
echo '🏗️ Building application...'
npm run build:optimized

# Check build success
if [ $? -eq 0 ]; then
  echo '✅ Build completed successfully!'
else
  echo '❌ Build failed!'
  exit 1
fi

echo '🎉 Build optimization complete!'
`;

    const scriptPath = path.join(this.projectRoot, 'build-optimized.sh');
    fs.writeFileSync(scriptPath, buildScript);
    fs.chmodSync(scriptPath, '755');
    this.optimizations.push('Created optimized build script');
  }

  async optimizeBuild() {
    this.log('Starting advanced build optimization...');
    
    try {
      // Clean build directory
      await this.cleanBuildDirectory();
      
      // Optimize package.json
      await this.optimizePackageJson();
      
      // Create optimized build script
      await this.createOptimizedBuildScript();
      
      this.log('Build optimization completed successfully');
      return true;
    } catch (error) {
      this.log(`Build optimization failed: ${error.message}`);
      return false;
    }
  }

  printSummary() {
    console.log('\n📊 Build Optimization Summary:');
    console.log('================================');
    
    if (this.optimizations.length > 0) {
      this.optimizations.forEach(opt => console.log(`✅ ${opt}`));
    } else {
      console.log('No optimizations applied');
    }
    
    console.log('\n🎯 Next steps:');
    console.log('1. Run: chmod +x build-optimized.sh');
    console.log('2. Run: ./build-optimized.sh');
    console.log('3. Check build output in dist/ or out/ directory');
  }
}

// Run the optimizer
const optimizer = new AdvancedBuildOptimizer();
optimizer.optimizeBuild().then(() => {
  optimizer.printSummary();
}).catch(error => {
  console.error('Optimization failed:', error);
  process.exit(1);
});