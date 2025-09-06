#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('📊 Performance Monitor Started...');

// Monitor build performance
function monitorBuildPerformance() {
  const startTime = Date.now();
  
  try {
    const { execSync } = require('child_process');
    execSync('npm run build', { stdio: 'pipe', cwd: '/workspace' });
    
    const endTime = Date.now();
    const duration = endTime - startTime;
    
    console.log(`✅ Build completed in ${duration}ms`);
    
    // Save performance data
    const performanceData = {
      timestamp: new Date().toISOString(),
      buildDuration: duration,
      status: 'success'
    };
    
    fs.writeFileSync('/workspace/performance-data.json', JSON.stringify(performanceData, null, 2));
    
  } catch (error) {
    console.log(`❌ Build failed: ${error.message}`);
  }
}

// Monitor file changes
function monitorFileChanges() {
  const chokidar = require('chokidar');
  
  const watcher = chokidar.watch('/workspace/src', {
    ignored: /(^|[/\\])../, // ignore dotfiles
    persistent: true
  });
  
  watcher.on('change', (filePath) => {
    console.log(`📝 File changed: ${filePath}`);
    // Trigger rebuild or other actions
  });
  
  console.log('👀 Watching for file changes...');
}

// Start monitoring
monitorBuildPerformance();
monitorFileChanges();
