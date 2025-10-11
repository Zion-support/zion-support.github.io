// Measure page load time;
    window.addEventListener('load', () => 
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      this.metrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart;
  }
    })
// Measure Core Web Vitals;
    this.measureCoreWebVitals();
  }
private measureCoreWebVitals(): void {
    // First Contentful Paint;
    this.observePaint('first-contentful-paint', (entry) => 
      this.metrics.firstContentfulPaint = entry.startTime;
  }
    })
// Largest Contentful Paint;
    this.observeLCP();
// First Input Delay;
    this.observeFID();
// Cumulative Layout Shift;
    this.observeCLS();
  }
private observePaint(type: string, callback: (entry: PerformanceEntry) => void): void {,}
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return,
try {
