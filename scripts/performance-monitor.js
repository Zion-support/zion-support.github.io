// Performance monitoring script
class PerformanceMonitor {
  constructor() {
    this.metrics = {};
    this.init();
  }

  init() {
    this.measurePageLoad();
    this.measureCoreWebVitals();
    this.measureUserInteractions();
  }

  measurePageLoad() {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0];
        const paint = performance.getEntriesByType('paint');
        
        this.metrics = {
          ...this.metrics,
          pageLoadTime: navigation.loadEventEnd - navigation.fetchStart,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
          firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime || 0,
          firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
        };

        this.reportMetrics('page_load', this.metrics);
      }, 0);
    });
  }

  measureCoreWebVitals() {
    // Largest Contentful Paint
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      this.metrics.lcp = lastEntry.startTime;
      this.reportMetrics('lcp', { lcp: lastEntry.startTime });
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        this.metrics.fid = entry.processingStart - entry.startTime;
        this.reportMetrics('fid', { fid: entry.processingStart - entry.startTime });
      });
    }).observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift
    let clsValue = 0;
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      this.metrics.cls = clsValue;
      this.reportMetrics('cls', { cls: clsValue });
    }).observe({ entryTypes: ['layout-shift'] });
  }

  measureUserInteractions() {
    // Track click events
    document.addEventListener('click', (event) => {
      const target = event.target;
      const element = target.closest('a, button, [role="button"]');
      if (element) {
        this.reportMetrics('click', {
          element: element.tagName,
          text: element.textContent?.slice(0, 50),
          href: element.href || null
        });
      }
    });

    // Track scroll depth
    let maxScrollDepth = 0;
    window.addEventListener('scroll', () => {
      const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        this.reportMetrics('scroll_depth', { depth: maxScrollDepth });
      }
    });
  }

  reportMetrics(eventType, data) {
    // Send to analytics service
    if (typeof gtag !== 'undefined') {
      gtag('event', eventType, {
        custom_parameter: JSON.stringify(data)
      });
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`Performance Metric - ${eventType}:`, data);
    }
  }

  getMetrics() {
    return this.metrics;
  }
}

// Initialize performance monitoring
if (typeof window !== 'undefined') {
  window.performanceMonitor = new PerformanceMonitor();
}

export default PerformanceMonitor;