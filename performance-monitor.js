origin/cursor/automate-test-improve-and-merge-code-2533
      timestamp: this.metrics.timestamp,
      bundleSize: this.metrics.bundleSize,
      memoryUsage: this.metrics.memoryUsage,
      recommendations: []
    };

origin/cursor/automate-test-improve-and-merge-code-2533
    if (this.metrics.bundleSize > 1000000) {
      report.recommendations.push('Consider code splitting to reduce bundle size');
    }
    if (this.metrics.memoryUsage > 100) {
      report.recommendations.push('Consider optimizing memory usage');
    }
    
    return report;
  }
}

const monitor = new PerformanceMonitor();
monitor.measureBundleSize();
monitor.measureMemoryUsage();
const report = monitor.generateReport();
const reportPath = path.join(process.cwd(), 'performance-report.json');
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
console.log("Performance report generated:", reportPath);
origin/cursor/automate-test-improve-and-merge-code-2533
