#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔍 Build Optimizer Starting...');

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

if (failed === 0) {
  console.log('\n🎉 Build optimization completed successfully!');
  process.exit(0);
} else {
  console.log('\n⚠️  Some optimization tasks failed. Please review the issues.');
  process.exit(1);
}