<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
const { execSync } = require('child_process')
const fs = require('fs')
// console.log(' Build Optimizer Starting...')
    console.log('🧹 Cleaning previous builds...')
    if (fs.existsSync('.next')
        execSync('rm -rf .next', { "stdio"})
        execSync('rm -rf out', { "stdio"})
    execSync('npm run build', { "stdio"})
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    console.error(' Build optimization "failed")

#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class BuildOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
  }

  async optimize() {
    console.log('🔨 Starting build optimization...');

    try {
      // Clean previous builds
      this.cleanBuild();

      // Run type checking
      this.runTypeCheck();

      // Run linting
      this.runLinting();

      // Build the application
      this.buildApplication();

      // Analyze bundle
      this.analyzeBundle();

      console.log('✅ Build optimization completed successfully');
    } catch (error) {
      console.error('❌ Build optimization failed:', error.message);
      process.exit(1);
    }
  }

  cleanBuild() {
    console.log('🧹 Cleaning previous builds...');
    const buildDirs = ['.next', 'dist', 'build'];

    buildDirs.forEach(dir => {
      const dirPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(dirPath)) {
        fs.rmSync(dirPath, { recursive: true, force: true });
      }
    });
  }

  runTypeCheck() {
    console.log('🔍 Running TypeScript type check...');
    execSync('npx tsc --noEmit', { stdio: 'inherit' });
  }

  runLinting() {
    console.log('🔧 Running ESLint...');
    execSync('npx eslint . --ext .ts,.tsx,.js,.jsx --fix', {
      stdio: 'inherit',
    });
  }

  buildApplication() {
    console.log('🏗️ Building application...');
    execSync('npm run build', { stdio: 'inherit' });
  }

  analyzeBundle() {
    console.log('📊 Analyzing bundle...');
    try {
      execSync('npm run analyze', { stdio: 'inherit' });
    } catch (error) {
      console.log('Bundle analysis not available');
    }
  }
}

// Run the optimizer
if (require.main === module) {
  const optimizer = new BuildOptimizer();
  optimizer.optimize().catch(console.error);
}

module.exports = BuildOptimizer;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
