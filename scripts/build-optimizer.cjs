<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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

=======
    console.error(' Build optimization "failed")
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
    console.error(' Build optimization "failed")
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
    console.error(' Build optimization "failed")
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

    console.error(' Build optimization "failed")

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
const { execSync } = require('child_process')
const fs = require('fs')
// console.log(' Build Optimizer Starting...)
    console.log('🧹 Cleaning previous builds...)
    if (fs.existsSync('.next')

<<<<<<< HEAD
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
=======
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔍 Build Optimizer Starting...');
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910

const optimizationTasks = [
  {
    name: 'Clean Build Directory',
    task: () => {
      const buildDir = '.next';
      if (fs.existsSync(buildDir)) {
        fs.rmSync(buildDir, { recursive: true, force: true });
        console.log('🧹 Cleaned build directory');
      }
    }
  },
  {
    name: 'Clean Node Modules',
    task: () => {
      const nodeModulesDir = 'node_modules';
      if (fs.existsSync(nodeModulesDir)) {
        // Only clean if it's very large (over 500MB)
        const stats = fs.statSync(nodeModulesDir);
        if (stats.size > 500 * 1024 * 1024) {
          fs.rmSync(nodeModulesDir, { recursive: true, force: true });
          console.log('🧹 Cleaned node_modules (was too large)');
        }
      }
    }
  },
  {
    name: 'Clean Cache Files',
    task: () => {
      const cacheFiles = [
        '.next/cache',
        'node_modules/.cache',
        'tsconfig.tsbuildinfo'
      ];
      
      cacheFiles.forEach(file => {
        if (fs.existsSync(file)) {
          fs.rmSync(file, { recursive: true, force: true });
          console.log(`🧹 Cleaned ${file}`);
        }
      });
    }
  },
  {
    name: 'Reinstall Dependencies',
    task: () => {
      console.log('📦 Reinstalling dependencies...');
      execSync('npm install', { stdio: 'pipe' });
      console.log('✅ Dependencies reinstalled');
    }
  },
  {
    name: 'Run Build',
    task: () => {
      console.log('🏗️  Running build...');
      execSync('npm run build', { stdio: 'pipe' });
      console.log('✅ Build completed');
    }
  }
];

let completed = 0;
let failed = 0;

optimizationTasks.forEach(task => {
  try {
    console.log(`\n🔄 Running ${task.name}...`);
    task.task();
    console.log(`✅ ${task.name} completed`);
    completed++;
  } catch (error) {
    console.log(`❌ ${task.name} failed: ${error.message}`);
    failed++;
  }
});

console.log(`\n📊 Build Optimization Results:`);
console.log(`✅ Completed: ${completed}`);
console.log(`❌ Failed: ${failed}`);

<<<<<<< HEAD
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
=======
if (failed === 0) {
  console.log('\n🎉 Build optimization completed successfully!');
  process.exit(0);
} else {
  console.log('\n⚠️  Some optimization tasks failed. Please review the issues.');
  process.exit(1);
}
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910
