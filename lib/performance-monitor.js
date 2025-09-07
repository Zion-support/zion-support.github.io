
// Enhanced Performance Monitor
export class PerformanceMonitor {
  constructor() {
    this.metrics = {
      loadTime: 0,
      renderTime: 0,
      interactionTime: 0,
      memoryUsage: 0
    };
  }

  startMonitoring() {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined') {
      // Largest Contentful Paint
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        // Store LCP metric instead of logging
        this.metrics.lcp = lastEntry.startTime;
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          // Store FID metric instead of logging
          this.metrics.fid = entry.processingStart - entry.startTime;
        });
      }).observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            // Store CLS metric instead of logging
            this.metrics.cls = entry.value;
          }
        });
      }).observe({ entryTypes: ['layout-shift'] });
    }
  }

  generateReport() {
    return {
      timestamp: new Date().toISOString(),
      metrics: this.metrics,
      recommendations: this.getRecommendations()
    };
  }

  getRecommendations() {
    const recommendations = [];
    
    if (this.metrics.loadTime > 3000) {
      recommendations.push('Consider code splitting and lazy loading');
    }
    
    if (this.metrics.memoryUsage > 50) {
      recommendations.push('Optimize memory usage and clean up event listeners');
    }
    
    return recommendations;
  }
}

export default PerformanceMonitor;
