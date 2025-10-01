
// Performance monitoring script
class PerformanceMonitor {
  constructor() {
    this.metrics = {};
    this.observers = [];
    this.init();
  }

  init() {
    // Monitor Core Web Vitals
    if ('web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(this.handleMetric);
        getFID(this.handleMetric);
        getFCP(this.handleMetric);
        getLCP(this.handleMetric);
        getTTFB(this.handleMetric);
      });
    }

    // Monitor memory usage
    if ('memory' in performance) {
      setInterval(() => {
        const memory = performance.memory;
        this.metrics.memory = {
          used: memory.usedJSHeapSize,
          total: memory.totalJSHeapSize,
          limit: memory.jsHeapSizeLimit
        };
      }, 5000);
    }

    // Monitor long tasks
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.duration > 50) {
            console.warn('Long task detected:', entry);
          }
        });
      });
      observer.observe({ entryTypes: ['longtask'] });
      this.observers.push(observer);
    }
  }

  handleMetric = (metric) => {
    this.metrics[metric.name] = {
      value: metric.value,
      rating: metric.rating,
      delta: metric.delta
    };
    
    // Report poor metrics
    if (metric.rating === 'poor') {
      console.warn('Poor performance metric:', metric);
      // Send to analytics
      this.reportToAnalytics(metric);
    }
  };

  reportToAnalytics(metric) {
    // Send to your analytics service
    if (typeof gtag !== 'undefined') {
      gtag('event', 'performance_metric', {
        metric_name: metric.name,
        metric_value: metric.value,
        metric_rating: metric.rating
      });
    }
  }

  getMetrics() {
    return this.metrics;
  }

  destroy() {
    this.observers.forEach(observer => observer.disconnect());
  }
}

// Initialize performance monitoring
window.performanceMonitor = new PerformanceMonitor();
