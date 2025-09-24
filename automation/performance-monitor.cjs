const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const PERFORMANCE_LOG_PATH = path.join(process.cwd(), 'performance-report.json');

async function monitorPerformance() {
  console.log('🔍 Monitoring application performance...');
  
  try {
    // Run performance audit
    const auditResult = await new Promise((resolve, reject) => {
      exec('npm run build', (error, stdout, stderr) => {
        if (error) {
          console.error(`Build failed: ${error}`);
          return reject(error);
        }
        resolve({ stdout, stderr });
      });
    });

    // Check bundle size
    const bundleSize = await new Promise((resolve) => {
      exec('du -sh .next/static', (error, stdout) => {
        if (error) {
          resolve('Unknown');
        } else {
          resolve(stdout.trim().split('\t')[0]);
        }
      });
    });

    // Check memory usage
    const memoryUsage = process.memoryUsage();
    
    const performanceReport = {
      timestamp: new Date().toISOString(),
      buildStatus: 'success',
      bundleSize: bundleSize,
      memoryUsage: {
        rss: Math.round(memoryUsage.rss / 1024 / 1024) + ' MB',
        heapUsed: Math.round(memoryUsage.heapUsed / 1024 / 1024) + ' MB',
        heapTotal: Math.round(memoryUsage.heapTotal / 1024 / 1024) + ' MB'
      },
      recommendations: []
    };

    // Add recommendations based on performance metrics
    if (memoryUsage.heapUsed > 100 * 1024 * 1024) { // 100MB
      performanceReport.recommendations.push('Consider optimizing memory usage - heap usage is high');
    }

    if (bundleSize.includes('M') && parseInt(bundleSize) > 10) {
      performanceReport.recommendations.push('Bundle size is large - consider code splitting');
    }

    fs.mkdirSync(path.dirname(PERFORMANCE_LOG_PATH), { recursive: true });
    fs.writeFileSync(PERFORMANCE_LOG_PATH, JSON.stringify(performanceReport, null, 2));
    
    console.log('✅ Performance monitoring completed');
    console.log(`📊 Bundle size: ${bundleSize}`);
    console.log(`💾 Memory usage: ${performanceReport.memoryUsage.heapUsed}`);
    
    if (performanceReport.recommendations.length > 0) {
      console.log('💡 Recommendations:');
      performanceReport.recommendations.forEach(rec => console.log(`   - ${rec}`));
    }

  } catch (error) {
    console.error('❌ Performance monitoring failed:', error);
    
    const errorReport = {
      timestamp: new Date().toISOString(),
      buildStatus: 'failed',
      error: error.message,
      recommendations: ['Fix build errors before performance optimization']
    };
    
    fs.writeFileSync(PERFORMANCE_LOG_PATH, JSON.stringify(errorReport, null, 2));
  }
}

// Run performance monitoring every 30 minutes
setInterval(monitorPerformance, 30 * 60 * 1000);
monitorPerformance(); // Run immediately on startup

console.log('🚀 Performance monitor started');