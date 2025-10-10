// Performance metrics utility

export interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstPaint: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
  speedIndex: number;
  totalBlockingTime: number;
}

export interface PerformanceObserverConfig {
  enableLCP?: boolean;
  enableFID?: boolean;
  enableCLS?: boolean;
  enableFCP?: boolean;
  enableTTI?: boolean;
  enableTBT?: boolean;
  enableSI?: boolean;
}

export class PerformanceMetricsCollector {
  private config: Required<PerformanceObserverConfig>;
  private metrics: Partial<PerformanceMetrics> = {};
  private observers: PerformanceObserver[] = [];

  constructor(config: PerformanceObserverConfig = {}) {
    this.config = {
      enableLCP: true,
      enableFID: true,
      enableCLS: true,
      enableFCP: true,
      enableTTI: true,
      enableTBT: true,
      enableSI: true,
      ...config
    };

    this.initializeMetrics();
    this.setupObservers();
  }

  /**
   * Initialize basic metrics
   */
  private initializeMetrics(): void {
    // Navigation timing
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      this.metrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      this.metrics.domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
    }

    // Paint timing
    const paint = performance.getEntriesByType('paint');
    this.metrics.firstPaint = paint.find(entry => entry.name === 'first-paint')?.startTime || 0;
    this.metrics.firstContentfulPaint = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
  }

  /**
   * Setup performance observers
   */
  private setupObservers(): void {
    if (!('PerformanceObserver' in window)) {
      console.warn('PerformanceObserver not supported');
      return;
    }

    if (this.config.enableLCP) {
      this.setupLCPObserver();
    }

    if (this.config.enableFID) {
      this.setupFIDObserver();
    }

    if (this.config.enableCLS) {
      this.setupCLSObserver();
    }

    if (this.config.enableFCP) {
      this.setupFCPObserver();
    }
  }

  /**
   * Setup Largest Contentful Paint observer
   */
  private setupLCPObserver(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.largestContentfulPaint = lastEntry.startTime;
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('LCP observer setup failed:', error);
    }
  }

  /**
   * Setup First Input Delay observer
   */
  private setupFIDObserver(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          this.metrics.firstInputDelay = entry.processingStart - entry.startTime;
        });
      });
      observer.observe({ entryTypes: ['first-input'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('FID observer setup failed:', error);
    }
  }

  /**
   * Setup Cumulative Layout Shift observer
   */
  private setupCLSObserver(): void {
    try {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        this.metrics.cumulativeLayoutShift = clsValue;
      });
      observer.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('CLS observer setup failed:', error);
    }
  }

  /**
   * Setup First Contentful Paint observer
   */
  private setupFCPObserver(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (entry.name === 'first-contentful-paint') {
            this.metrics.firstContentfulPaint = entry.startTime;
          }
        });
      });
      observer.observe({ entryTypes: ['paint'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('FCP observer setup failed:', error);
    }
  }

  /**
   * Calculate Time to Interactive
   */
  calculateTTI(): number {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (!navigation) return 0;

    const loadEventEnd = navigation.loadEventEnd;
    const domContentLoaded = navigation.domContentLoadedEventEnd;
    
    // TTI is typically calculated as the time when the main thread is quiet for 5 seconds
    // This is a simplified calculation
    return loadEventEnd - domContentLoaded;
  }

  /**
   * Calculate Speed Index
   */
  calculateSpeedIndex(): number {
    // Speed Index is calculated by measuring how quickly content is visually displayed
    // This is a simplified calculation based on paint timing
    const firstPaint = this.metrics.firstPaint || 0;
    const firstContentfulPaint = this.metrics.firstContentfulPaint || 0;
    
    return Math.max(firstPaint, firstContentfulPaint);
  }

  /**
   * Calculate Total Blocking Time
   */
  calculateTBT(): number {
    const longTasks = performance.getEntriesByType('longtask');
    let totalBlockingTime = 0;
    
    longTasks.forEach(task => {
      totalBlockingTime += task.duration - 50; // Subtract 50ms threshold
    });
    
    return Math.max(0, totalBlockingTime);
  }

  /**
   * Get all metrics
   */
  getMetrics(): PerformanceMetrics {
    return {
      loadTime: this.metrics.loadTime || 0,
      domContentLoaded: this.metrics.domContentLoaded || 0,
      firstPaint: this.metrics.firstPaint || 0,
      firstContentfulPaint: this.metrics.firstContentfulPaint || 0,
      largestContentfulPaint: this.metrics.largestContentfulPaint || 0,
      firstInputDelay: this.metrics.firstInputDelay || 0,
      cumulativeLayoutShift: this.metrics.cumulativeLayoutShift || 0,
      timeToInteractive: this.calculateTTI(),
      speedIndex: this.calculateSpeedIndex(),
      totalBlockingTime: this.calculateTBT()
    };
  }

  /**
   * Get Core Web Vitals
   */
  getCoreWebVitals(): {
    LCP: number;
    FID: number;
    CLS: number;
  } {
    return {
      LCP: this.metrics.largestContentfulPaint || 0,
      FID: this.metrics.firstInputDelay || 0,
      CLS: this.metrics.cumulativeLayoutShift || 0
    };
  }

  /**
   * Get performance score
   */
  getPerformanceScore(): number {
    const metrics = this.getMetrics();
    let score = 100;

    // LCP scoring (0-2.5s = 100, 2.5-4s = 50, >4s = 0)
    if (metrics.largestContentfulPaint > 4000) score -= 50;
    else if (metrics.largestContentfulPaint > 2500) score -= 25;

    // FID scoring (0-100ms = 100, 100-300ms = 50, >300ms = 0)
    if (metrics.firstInputDelay > 300) score -= 50;
    else if (metrics.firstInputDelay > 100) score -= 25;

    // CLS scoring (0-0.1 = 100, 0.1-0.25 = 50, >0.25 = 0)
    if (metrics.cumulativeLayoutShift > 0.25) score -= 50;
    else if (metrics.cumulativeLayoutShift > 0.1) score -= 25;

    return Math.max(0, score);
  }

  /**
   * Get performance recommendations
   */
  getRecommendations(): string[] {
    const recommendations: string[] = [];
    const metrics = this.getMetrics();

    if (metrics.largestContentfulPaint > 2500) {
      recommendations.push('Optimize Largest Contentful Paint - consider image optimization and critical resource loading');
    }

    if (metrics.firstInputDelay > 100) {
      recommendations.push('Reduce First Input Delay - minimize JavaScript execution time');
    }

    if (metrics.cumulativeLayoutShift > 0.1) {
      recommendations.push('Improve Cumulative Layout Shift - ensure stable layout and avoid dynamic content insertion');
    }

    if (metrics.loadTime > 3000) {
      recommendations.push('Optimize page load time - consider code splitting and lazy loading');
    }

    if (metrics.totalBlockingTime > 200) {
      recommendations.push('Reduce Total Blocking Time - break up long tasks and optimize JavaScript');
    }

    return recommendations;
  }

  /**
   * Send metrics to server
   */
  sendMetrics(endpoint: string = '/api/performance/metrics'): void {
    const metrics = this.getMetrics();
    
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(metrics)
    }).catch(error => {
      console.error('Failed to send performance metrics:', error);
    });
  }

  /**
   * Clear all observers
   */
  destroy(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

export default PerformanceMetricsCollector;