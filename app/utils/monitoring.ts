// Monitoring utility functions

interface PerformanceData {
  timestamp: number;
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
}

class PerformanceMonitor {
  private data: PerformanceData[] = [];
  private isEnabled: boolean = false;

  init() {
    if (typeof window === 'undefined') return;
    
    this.isEnabled = true;
    this.observePerformance();
  }

  private observePerformance() {
    if (!this.isEnabled) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      
      entries.forEach((entry) => {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          this.recordMetric({
            timestamp: Date.now(),
            loadTime: navEntry.loadEventEnd - navEntry.loadEventStart,
            firstContentfulPaint: 0,
            largestContentfulPaint: 0,
            firstInputDelay: 0,
            cumulativeLayoutShift: 0
          });
        }
      });
    });

    observer.observe({ entryTypes: ['navigation'] });
  }

  private recordMetric(data: PerformanceData) {
    this.data.push(data);
    
    // Keep only last 100 entries
    if (this.data.length > 100) {
      this.data = this.data.slice(-100);
    }
  }

  getMetrics(): PerformanceData[] {
    return [...this.data];
  }

  getAverageLoadTime(): number {
    if (this.data.length === 0) return 0;
    return this.data.reduce((sum, metric) => sum + metric.loadTime, 0) / this.data.length;
  }

  clear() {
    this.data = [];
  }

  stop() {
    this.isEnabled = false;
  }
}

export const monitoring = new PerformanceMonitor();

export default monitoring;