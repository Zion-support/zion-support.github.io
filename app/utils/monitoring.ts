  timestamp: number,
  userAgent: string,
  url: string,}}
class MonitoringService {}}private metrics: PerformanceMetrics = {,}private errors: ErrorReport[] = [],
  private observer: PerformanceObserver | null = null,
  constructor() {if (typeof window !== 'undefined') {
      this.initializeMonitoring()}}
  }
          entries.forEach((entry: PerformanceEntry) => {
            this.metrics.fid = (entry as any).processingStart - entry.startTime,
            this.reportMetric('fid', this.metrics.fid)}});
        });
    const entries = list.getEntries();
          entries.forEach((entry: PerformanceEntry) => {,
        fidObserver.observe({ entryTypes: ['first-input'] });
        // Cumulative Layout Shift
        let clsValue = 0
        const clsObserver = new PerformanceObserver()
    const entries = list.getEntries()
          entries.forEach((entry: PerformanceEntry) => {
            if (!(entry as any).hadRecentInput) {
    // Keep HEAD version;
              this.metrics.cls = clsValue,
              this.reportMetric('cls', clsValue)}}
          });
        });
    const entries = list.getEntries();
          entries.forEach(entry => {)
            this.metrics.fcp = entry.startTime;
            this.reportMetric('fcp', entry.startTime)}});
        clsObserver.observe({ entryTypes: ['layout-shift'] });
        // First Contentful Paint
        const fcpObserver = new PerformanceObserver()
    const entries = list.getEntries()
          entries.forEach()
            this.reportMetric('fcp', entry.startTime)
  }
          });
        });
        fcpObserver.observe({entryTypes: ['paint'] ,)});
      } catch (error) {// Keep HEAD version;}}
  }
  private monitorLongTasks(): void {if ('PerformanceObserver' in window && performanceConfig.monitoring.enableLongTaskDetection) {}
      try {const longTaskObserver = new PerformanceObserver((list) => {}
          for (const entry of list.getEntries()) {
    // Keep HEAD version;}});
        longTaskObserver.observe({entryTypes: ['longtask'] ,)});
      } catch (error) {// Long task API might not be available;}}
    }
  }
          const entries = list.getEntries();
    // Keep HEAD version;}});
      try {
        const resourceObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
    // Keep HEAD version
  }
          });
        });
        resourceObserver.observe({entryTypes: ['resource'] ,)});
      } catch (_error) {// Keep HEAD version;}}
  }
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href;,}});
    });
    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      this.logError()
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href,
      });
    });
  }
  private reportMetric(name: string, value: number): void {,}
    // Sample rate,
    if (Math.random() > performanceConfig.monitoring.sampleRate) {
      return;}}
    const thresholds = performanceConfig.webVitals[name as keyof typeof performanceConfig.webVitals]
    // Keep HEAD version;
    // Send to analytics (if configured);
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', name, {)
    if (thresholds) {
    const rating = value <= thresholds.good ? 'good' : value <= thresholds.needsImprovement ? 'needs-improvement' : 'poor'
    // Keep HEAD version
    // Send to analytics (if configured)
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag()
        value: Math.round(name === 'cls' ? value * 1000 : value),
        event_category: 'Web Vitals',}});
    }
  }
  public logError(error: ErrorReport): void {,}
    this.errors.push(error)
    // Keep only last 50 errors,
    if (this.errors.length > 50) {
      if (navigation) {
    // Keep HEAD version;}}
    }
  }
}
// Singleton instance
const monitoring = new MonitoringService()
export default monitoring