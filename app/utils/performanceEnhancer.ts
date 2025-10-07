/**
 * Advanced Performance Enhancement Utilities
 * Provides comprehensive performance monitoring, optimization, and analytics
 */

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
  totalBlockingTime: number;
}

interface PerformanceConfig {
  enableRealTimeMonitoring: boolean;
  enableWebVitals: boolean;
  enableResourceTiming: boolean;
  enableUserTiming: boolean;
  enableLongTaskDetection: boolean;
  enableMemoryMonitoring: boolean;
  enableNetworkMonitoring: boolean;
  enableErrorTracking: boolean;
  enablePerformanceBudget: boolean;
  budgetThresholds: {
    loadTime: number;
    firstContentfulPaint: number;
    largestContentfulPaint: number;
    firstInputDelay: number;
    cumulativeLayoutShift: number;
  };
}

class PerformanceEnhancer {
  private config: PerformanceConfig;
  private metrics: PerformanceMetrics;
  private observers: PerformanceObserver[];
  private longTaskObserver: PerformanceObserver | null = null;
  private memoryObserver: PerformanceObserver | null = null;
  private networkObserver: PerformanceObserver | null = null;
  private errorObserver: PerformanceObserver | null = null;
  private performanceBudget: Map<string, number> = new Map();
  private isMonitoring: boolean = false;

  constructor(config: Partial<PerformanceConfig> = {}) {
    this.config = {
      enableRealTimeMonitoring: true,
      enableWebVitals: true,
      enableResourceTiming: true,
      enableUserTiming: true,
      enableLongTaskDetection: true,
      enableMemoryMonitoring: true,
      enableNetworkMonitoring: true,
      enableErrorTracking: true,
      enablePerformanceBudget: true,
      budgetThresholds: {
        loadTime: 3000,
        firstContentfulPaint: 1800,
        largestContentfulPaint: 2500,
        firstInputDelay: 100,
        cumulativeLayoutShift: 0.1,
      },
      ...config,
    };

    this.metrics = {
      loadTime: 0,
      firstContentfulPaint: 0,
      largestContentfulPaint: 0,
      firstInputDelay: 0,
      cumulativeLayoutShift: 0,
      timeToInteractive: 0,
      totalBlockingTime: 0,
    };

    this.observers = [];
    this.initializePerformanceBudget();
  }

  /**
   * Initialize performance budget thresholds
   */
  private initializePerformanceBudget(): void {
    if (!this.config.enablePerformanceBudget) return;

    Object.entries(this.config.budgetThresholds).forEach(([key, value]) => {
      this.performanceBudget.set(key, value);
    });
  }

  /**
   * Start comprehensive performance monitoring
   */
  public startMonitoring(): void {
    if (this.isMonitoring) return;

    this.isMonitoring = true;
    this.initializeWebVitals();
    this.initializeResourceTiming();
    this.initializeUserTiming();
    this.initializeLongTaskDetection();
    this.initializeMemoryMonitoring();
    this.initializeNetworkMonitoring();
    this.initializeErrorTracking();
    this.initializeRealTimeMonitoring();

    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
console.log('🚀 Performance monitoring started');
    }
  }

  /**
   * Stop all performance monitoring
   */
  public stopMonitoring(): void {
    if (!this.isMonitoring) return;

    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    this.isMonitoring = false;

    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
console.log('⏹️ Performance monitoring stopped');
    }
  }

  /**
   * Initialize Web Vitals monitoring
   */
  private initializeWebVitals(): void {
    if (!this.config.enableWebVitals) return;

    // First Contentful Paint
    this.observePerformanceEntry('paint', (entries) => {
      entries.forEach(entry => {
        if (entry.name === 'first-contentful-paint') {
          this.metrics.firstContentfulPaint = entry.startTime;
          this.checkPerformanceBudget('firstContentfulPaint', entry.startTime);
        }
      });
    });

    // Largest Contentful Paint
    this.observePerformanceEntry('largest-contentful-paint', (entries) => {
      const lastEntry = entries[entries.length - 1];
      this.metrics.largestContentfulPaint = lastEntry.startTime;
      this.checkPerformanceBudget('largestContentfulPaint', lastEntry.startTime);
    });

    // First Input Delay
    this.observePerformanceEntry('first-input', (entries) => {
      const firstInput = entries[0] as PerformanceEventTiming;
      this.metrics.firstInputDelay = (firstInput as PerformanceEventTiming & { processingStart: number }).processingStart - firstInput.startTime;
      this.checkPerformanceBudget('firstInputDelay', this.metrics.firstInputDelay);
    });

    // Cumulative Layout Shift
    this.observePerformanceEntry('layout-shift', (entries) => {
      let clsValue = 0;
      entries.forEach(entry => {
        const layoutShiftEntry = entry as PerformanceEntry & { hadRecentInput: boolean; value: number };
        if (!layoutShiftEntry.hadRecentInput) {
          clsValue += layoutShiftEntry.value;
        }
      });
      this.metrics.cumulativeLayoutShift = clsValue;
      this.checkPerformanceBudget('cumulativeLayoutShift', clsValue);
    });
  }

  /**
   * Initialize resource timing monitoring
   */
  private initializeResourceTiming(): void {
    if (!this.config.enableResourceTiming) return;

    this.observePerformanceEntry('resource', (entries) => {
      entries.forEach(entry => {
        const resourceEntry = entry as PerformanceResourceTiming;
        this.analyzeResourcePerformance(resourceEntry);
      });
    });
  }

  /**
   * Initialize user timing monitoring
   */
  private initializeUserTiming(): void {
    if (!this.config.enableUserTiming) return;

    this.observePerformanceEntry('measure', (entries) => {
      entries.forEach(entry => {
        if (process.env.NODE_ENV === 'development') {
          // eslint-disable-next-line no-console
console.log(`📊 User Timing: ${entry.name} - ${entry.duration.toFixed(2)}ms`);
        }
      });
    });

    this.observePerformanceEntry('mark', (entries) => {
      entries.forEach(entry => {
        if (process.env.NODE_ENV === 'development') {
          // eslint-disable-next-line no-console
console.log(`📍 Performance Mark: ${entry.name}`);
        }
      });
    });
  }

  /**
   * Initialize long task detection
   */
  private initializeLongTaskDetection(): void {
    if (!this.config.enableLongTaskDetection) return;

    this.observePerformanceEntry('longtask', (entries) => {
      entries.forEach(entry => {
        if (process.env.NODE_ENV === 'development') {
          // eslint-disable-next-line no-console
console.warn(`⚠️ Long Task detected: ${entry.duration.toFixed(2)}ms`);
        }
        this.metrics.totalBlockingTime += entry.duration - 50; // 50ms threshold
      });
    });
  }

  /**
   * Initialize memory monitoring
   */
  private initializeMemoryMonitoring(): void {
    if (!this.config.enableMemoryMonitoring) return;

    // Memory API is not available in all browsers
    if ('memory' in performance) {
      setInterval(() => {
        const memory = (performance as Performance & { memory: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory;
        if (process.env.NODE_ENV === 'development') {
          // eslint-disable-next-line no-console
console.log('🧠 Memory Usage:', {
            used: `${(memory.usedJSHeapSize / 1024 / 1024).toFixed(2)} MB`,
            total: `${(memory.totalJSHeapSize / 1024 / 1024).toFixed(2)} MB`,
            limit: `${(memory.jsHeapSizeLimit / 1024 / 1024).toFixed(2)} MB`,
          });
        }
      }, 10000); // Check every 10 seconds
    }
  }

  /**
   * Initialize network monitoring
   */
  private initializeNetworkMonitoring(): void {
    if (!this.config.enableNetworkMonitoring) return;

    // Monitor connection changes
    if ('connection' in navigator) {
      const connection = (navigator as Navigator & { connection: { effectiveType: string; downlink: number; rtt: number; saveData: boolean; addEventListener: (event: string, listener: () => void) => void } }).connection;
      // eslint-disable-next-line no-console
console.log('🌐 Network Info:', {
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt,
        saveData: connection.saveData,
      });

      connection.addEventListener('change', () => {
        // eslint-disable-next-line no-console
console.log('🔄 Network changed:', {
          effectiveType: connection.effectiveType,
          downlink: connection.downlink,
          rtt: connection.rtt,
        });
      });
    }
  }

  /**
   * Initialize error tracking
   */
  private initializeErrorTracking(): void {
    if (!this.config.enableErrorTracking) return;

    // JavaScript errors
    window.addEventListener('error', (event) => {
      // eslint-disable-next-line no-console
console.error('🚨 JavaScript Error:', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error,
      });
    });

    // Unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      // eslint-disable-next-line no-console
console.error('🚨 Unhandled Promise Rejection:', event.reason);
    });

    // Resource loading errors
    window.addEventListener('error', (event) => {
      if (event.target !== window) {
        const target = event.target as HTMLElement & { src?: string; href?: string };
        // eslint-disable-next-line no-console
console.error('🚨 Resource Error:', {
          type: event.target?.constructor.name,
          src: target?.src || target?.href,
        });
      }
    }, true);
  }

  /**
   * Initialize real-time monitoring
   */
  private initializeRealTimeMonitoring(): void {
    if (!this.config.enableRealTimeMonitoring) return;

    // Monitor page load performance
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      this.metrics.loadTime = navigation.loadEventEnd - navigation.fetchStart;
      this.metrics.timeToInteractive = this.calculateTimeToInteractive();
      
      this.checkPerformanceBudget('loadTime', this.metrics.loadTime);
      this.generatePerformanceReport();
    });
  }

  /**
   * Generic performance entry observer
   */
  private observePerformanceEntry(type: string, callback: (entries: PerformanceEntry[]) => void): void {
    if (!('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        callback(list.getEntries());
      });
      observer.observe({ type, buffered: true });
      this.observers.push(observer);
    } catch (error) {
      // eslint-disable-next-line no-console
console.warn(`Failed to observe ${type}:`, error);
    }
  }

  /**
   * Analyze resource performance
   */
  private analyzeResourcePerformance(entry: PerformanceResourceTiming): void {
    const loadTime = entry.responseEnd - entry.requestStart;
    const size = entry.transferSize || 0;
    
    if (loadTime > 1000) { // Resources taking more than 1 second
      // eslint-disable-next-line no-console
console.warn(`🐌 Slow Resource: ${entry.name} - ${loadTime.toFixed(2)}ms (${(size / 1024).toFixed(2)}KB)`);
    }
  }

  /**
   * Check performance budget
   */
  private checkPerformanceBudget(metric: string, value: number): void {
    const threshold = this.performanceBudget.get(metric);
    if (threshold && value > threshold) {
      // eslint-disable-next-line no-console
console.warn(`⚠️ Performance Budget Exceeded: ${metric} (${value.toFixed(2)}ms > ${threshold}ms)`);
    }
  }

  /**
   * Calculate Time to Interactive
   */
  private calculateTimeToInteractive(): number {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const longTasks = performance.getEntriesByType('longtask');
    const totalBlockingTime = longTasks.reduce((total, task) => total + task.duration - 50, 0);
    
    return navigation.domContentLoadedEventEnd + totalBlockingTime;
  }

  /**
   * Generate comprehensive performance report
   */
  private generatePerformanceReport(): void {
    const report = {
      timestamp: new Date().toISOString(),
      metrics: this.metrics,
      budgetStatus: this.getBudgetStatus(),
      recommendations: this.generateRecommendations(),
    };

    // eslint-disable-next-line no-console
console.log('📊 Performance Report:', report);
    
    // Send to analytics if available
    if ('gtag' in window) {
      (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag('event', 'performance_report', {
        event_category: 'Performance',
        custom_map: report,
      });
    }
  }

  /**
   * Get budget status
   */
  private getBudgetStatus(): Record<string, { value: number; threshold: number; status: 'pass' | 'fail' }> {
    const status: Record<string, { value: number; threshold: number; status: 'pass' | 'fail' }> = {};
    
    Object.entries(this.config.budgetThresholds).forEach(([key, threshold]) => {
      const value = this.metrics[key as keyof PerformanceMetrics];
      status[key] = {
        value,
        threshold,
        status: value <= threshold ? 'pass' : 'fail',
      };
    });

    return status;
  }

  /**
   * Generate performance recommendations
   */
  private generateRecommendations(): string[] {
    const recommendations: string[] = [];

    if (this.metrics.loadTime > 3000) {
      recommendations.push('Consider code splitting and lazy loading to reduce initial bundle size');
    }

    if (this.metrics.firstContentfulPaint > 1800) {
      recommendations.push('Optimize critical rendering path and reduce render-blocking resources');
    }

    if (this.metrics.largestContentfulPaint > 2500) {
      recommendations.push('Optimize images and consider using WebP format');
    }

    if (this.metrics.firstInputDelay > 100) {
      recommendations.push('Reduce JavaScript execution time and consider using Web Workers');
    }

    if (this.metrics.cumulativeLayoutShift > 0.1) {
      recommendations.push('Add size attributes to images and avoid inserting content above existing content');
    }

    if (this.metrics.totalBlockingTime > 200) {
      recommendations.push('Break up long tasks and optimize JavaScript execution');
    }

    return recommendations;
  }

  /**
   * Get current metrics
   */
  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  /**
   * Get performance score (0-100)
   */
  public getPerformanceScore(): number {
    let score = 100;
    
    Object.entries(this.config.budgetThresholds).forEach(([key, threshold]) => {
      const value = this.metrics[key as keyof PerformanceMetrics];
      if (value > threshold) {
        score -= Math.min(20, (value - threshold) / threshold * 20);
      }
    });

    return Math.max(0, Math.round(score));
  }

  /**
   * Export performance data
   */
  public exportData(): string {
    return JSON.stringify({
      metrics: this.metrics,
      budgetStatus: this.getBudgetStatus(),
      performanceScore: this.getPerformanceScore(),
      timestamp: new Date().toISOString(),
    }, null, 2);
  }
}

// Export singleton instance
export const performanceEnhancer = new PerformanceEnhancer();

// Export class for custom instances
export { PerformanceEnhancer, type PerformanceMetrics, type PerformanceConfig };