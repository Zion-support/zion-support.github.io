<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
const { execSync } = require('child_process')
const fs = require('fs')
// console.log(' Build Optimizer Starting...)
    console.log('🧹 Cleaning previous builds...)
    if (fs.existsSync('.next')
<<<<<<< HEAD
<<<<<<< HEAD
        execSync('rm -rf .next', { "stdio"})
        execSync('rm -rf out', { "stdio"})
    execSync('npm run build', { "stdio"})
<<<<<<< HEAD


    console.error(' Build optimization "failed")

=======
<<<<<<< HEAD
<<<<<<< HEAD
    console.error(' Build optimization "failed")
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
    console.error(' Build optimization "failed")
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
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
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
        execSync('rm -rf .next', { "stdio"})""
        execSync('rm -rf out', { "stdio"})""
    execSync('npm run build', { "stdio"})""
>>>>>>> pr-12325
=======
        execSync('rm -rf .next, { "stdio"})
        execSync('rm -rf out, { "stdio"})
    execSync('npm run build, { "stdio"})
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
>>>>>>> 505950bb5f65df61118ac41ff4bde74d3caba4f4
