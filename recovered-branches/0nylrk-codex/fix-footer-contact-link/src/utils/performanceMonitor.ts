/**,
 * Advanced Performance Monitoring,
 * Tracks Core Web Vitals, custom metrics, and user interactions,
 */,
export interface PerformanceMetrics {,
  // Core Web Vitals,
  LCP?: number, // Largest Contentful Paint,
  FID?: number, // First Input Delay,
  CLS?: number, // Cumulative Layout Shift,
  // Additional metrics,
  FCP?: number, // First Contentful Paint,
  TTFB?: number, // Time to First Byte,
  TTI?: number, // Time to Interactive,
  // Custom metrics,
  memory?: number, // Memory usage in MB,
  loadTime?: number, // Total page load time,
  domContentLoaded?: number, // DOMContentLoaded time,
  windowLoad?: number, // Window load time,
  // User interaction metrics,
  firstClick?: number, // Time to first click,
  scrollDepth?: number, // Maximum scroll depth,
  timeOnPage?: number, // Time spent on page,
}
export interface PerformanceThresholds {,
  LCP: number, // 2.5s,
  FID: number, // 100ms,
  CLS: number, // 0.1,
  FCP: number, // 1.8s,
  TTFB: number, // 600ms,
  TTI: number, // 3.8s,
}
export class PerformanceMonitor {,
  private static instance: PerformanceMonitor;
  private metrics: PerformanceMetrics = {};
  private thresholds: PerformanceThresholds = {,
    LCP: 2500;
    FID: 100;
    CLS: 0.1;
    FCP: 1800;
    TTFB: 600;
    TTI: 3800,};
  private observers: PerformanceObserver[] = [];
  private startTime: number = performance.now();
  private isInitialized = false;
  static getInstance(): PerformanceMonitor {,
    if (!PerformanceMonitor.instance) {,
      PerformanceMonitor.instance = new PerformanceMonitor(),
    }
    return PerformanceMonitor.instance;
  }
  init(): void {,
    if (this.isInitialized) return;
    this.startTime = performance.now();
    this.setupCoreWebVitals();
    this.setupCustomMetrics();
    this.setupUserInteractionTracking();
    this.setupMemoryMonitoring();
    this.isInitialized = true;
    console.log('Performance Monitor: Initialized'),}
  private setupCoreWebVitals(): void {,
    // Largest Contentful Paint,
    this.observeMetric('largest-contentful-paint', (entries) => {,
      const lastEntry = entries[entries.length - 1] as any;
      this.metrics.LCP = lastEntry.startTime;
      this.checkThreshold('LCP', lastEntry.startTime);
    });
    // First Input Delay,
    this.observeMetric('first-input', (entries) => {,
      entries.forEach((entry: any) => {,
        this.metrics.FID = entry.processingStart - entry.startTime;
        this.checkThreshold('FID', this.metrics.FID);
      });
    });
    // Cumulative Layout Shift,
    this.observeMetric('layout-shift', (entries) => {,
      let clsValue = 0;
      entries.forEach((entry: any) => {,
        if (!entry.hadRecentInput) {,
          clsValue += entry.value,}
      });
      this.metrics.CLS = clsValue;
      this.checkThreshold('CLS', clsValue);
    });
    // First Contentful Paint,
    this.observeMetric('paint', (entries) => {,
      entries.forEach((entry: any) => {,
        if (entry.name === 'first-contentful-paint') {,
          this.metrics.FCP = entry.startTime;
          this.checkThreshold('FCP', entry.startTime);
        }
      });
    });
  }
  private setupCustomMetrics(): void {,
    // Time to First Byte,
    if (performance.timing) {,
      this.metrics.TTFB = performance.timing.responseStart - performance.timing.navigationStart;
      this.checkThreshold('TTFB', this.metrics.TTFB);
    }
    // Navigation timing,
    if (performance.navigation) {,
      const navTiming = performance.getEntriesByType('navigation')[0] as any;
      if (navTiming) {,
        this.metrics.loadTime = navTiming.loadEventEnd - navTiming.navigationStart;
        this.metrics.domContentLoaded = navTiming.domContentLoadedEventEnd - navTiming.navigationStart;
        this.metrics.windowLoad = navTiming.loadEventEnd - navTiming.navigationStart;
      }
    }
  }
  private setupUserInteractionTracking(): void {,
    let firstClickTime: number | null = null;
    let maxScrollDepth = 0;
    let pageStartTime = Date.now();
    // Track first click,
    const clickHandler = () => {,
      if (!firstClickTime) {,
        firstClickTime = performance.now() - this.startTime;
        this.metrics.firstClick = firstClickTime;
        document.removeEventListener('click', clickHandler);
      }
    };
    document.addEventListener('click', clickHandler);
    // Track scroll depth,
    const scrollHandler = () => {,
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      maxScrollDepth = Math.max(maxScrollDepth, scrollPercent);
      this.metrics.scrollDepth = maxScrollDepth;
    };
    window.addEventListener('scroll', scrollHandler);
    // Track time on page,
    const beforeUnloadHandler = () => {,
      this.metrics.timeOnPage = Date.now() - pageStartTime;
    };
    window.addEventListener('beforeunload', beforeUnloadHandler);
  }
  private setupMemoryMonitoring(): void {,
    if ('memory' in performance) {,
      const updateMemory = () => {,
        const memoryInfo = (performance as any).memory;
        this.metrics.memory = memoryInfo.usedJSHeapSize / 1024 / 1024, // Convert to MB,
      };
      updateMemory();
      setInterval(updateMemory, 5000), // Update every 5 seconds,
    }
  }
  private observeMetric(entryType: string, callback: (entries: PerformanceEntry[]) => void): void {,
    if (!('PerformanceObserver' in window)) return;
    try {,
      const observer = new PerformanceObserver((list) => {,
        callback(list.getEntries()),
      });
      observer.observe({ entryTypes: [entryType] ,});
      this.observers.push(observer);
    } catch (error) {,
      console.warn(`Performance monitoring not supported for ${entryType}:`, error);
    }
  }
  private checkThreshold(metric: keyof PerformanceThresholds, value: number): void {,
    const threshold = this.thresholds[metric];
    if (value > threshold) {,
      console.warn(`Performance threshold exceeded: ${metric,} is ${value}ms (threshold: ${threshold,}ms)`);
      this.reportThresholdExceeded(metric, value, threshold);
    }
  }
  private reportThresholdExceeded(metric: string, value: number, threshold: number): void {,
    // Send to analytics,
    if (typeof window !== 'undefined' && (window as any).gtag) {,
      (window as any).gtag('eventperformance_threshold_exceeded', {,
        metric_name: metric;
        metric_value: value;
        threshold_value: threshold;
        event_category: 'Performance',});
    }
    // Send to custom analytics endpoint,
    this.sendToAnalytics({,
      type: 'performance_threshold_exceeded';
      metric;
      value;
      threshold;
      timestamp: Date.now();
      url: window.location.href;
      userAgent: navigator.userAgent,});
  }
  private sendToAnalytics(data: any): void {,
    // In a real application, you would send this to your analytics service,
    console.log('Analytics data:', data);
  }
  getMetrics(): PerformanceMetrics {,
    return { ...this.metrics };
  }
  getThresholds(): PerformanceThresholds {,
    return { ...this.thresholds };
  }
  setThresholds(thresholds: Partial<PerformanceThresholds>): void {,
    this.thresholds = { ...this.thresholds, ...thresholds };
  }
  reportMetrics(): void {,
    const metrics = this.getMetrics();
    console.log('Performance Metrics:', metrics);
    // Send to analytics,
    if (typeof window !== 'undefined' && (window as any).gtag) {,
      Object.entries(metrics).forEach(([key, value]) => {,
        if (value !== undefined) {,
          (window as any).gtag('eventperformance_metric', {,
            metric_name: key;
            metric_value: value;
            event_category: 'Performance',});
        }
      });
    }
    // Send comprehensive report,
    this.sendToAnalytics({,
      type: 'performance_report';
      metrics;
      timestamp: Date.now();
      url: window.location.href;
      userAgent: navigator.userAgent,});
  }
  getPerformanceScore(): number {,
    const metrics = this.getMetrics();
    const thresholds = this.getThresholds();
    let score = 100;
    // LCP scoring,
    if (metrics.LCP) {,
      if (metrics.LCP > thresholds.LCP * 2) score -= 30;
      else if (metrics.LCP > thresholds.LCP) score -= 15;
    }
    // FID scoring,
    if (metrics.FID) {,
      if (metrics.FID > thresholds.FID * 2) score -= 25;
      else if (metrics.FID > thresholds.FID) score -= 10;
    }
    // CLS scoring,
    if (metrics.CLS) {,
      if (metrics.CLS > thresholds.CLS * 2) score -= 25;
      else if (metrics.CLS > thresholds.CLS) score -= 10;
    }
    // FCP scoring,
    if (metrics.FCP) {,
      if (metrics.FCP > thresholds.FCP * 2) score -= 20;
      else if (metrics.FCP > thresholds.FCP) score -= 10;
    }
    return Math.max(0, score);
  }
  cleanup(): void {,
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    this.isInitialized = false;
    console.log('Performance Monitor: Cleaned up'),}
}
export default PerformanceMonitor;