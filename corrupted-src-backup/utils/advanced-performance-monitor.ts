/**
 * Advanced Performance Monitor
 * Real-time performance monitoring and optimization
 */

interface PerformanceData {
  timestamp: number;
  url: string;
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
  memoryUsage: number;
  networkInfo: NetworkInformation | null;
}

interface PerformanceThresholds {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

class AdvancedPerformanceMonitor {
  private data: PerformanceData[] = [];
  private thresholds: PerformanceThresholds;
  private observer: PerformanceObserver | null = null;
  private isMonitoring = false;

  constructor(thresholds: Partial<PerformanceThresholds> = {}) {
    this.thresholds = {
      loadTime: 3000,
      firstContentfulPaint: 1800,
      largestContentfulPaint: 2500,
      cumulativeLayoutShift: 0.1,
      firstInputDelay: 100,
      ...thresholds,
    };
  }

  /**
   * Start performance monitoring
   */
  public startMonitoring(): void {
    if (this.isMonitoring || typeof window === 'undefined') return;

    this.isMonitoring = true;
    this.setupPerformanceObserver();
    this.setupWebVitals();
    this.setupMemoryMonitoring();
    this.setupNetworkMonitoring();

    //     }

  /**
   * Stop performance monitoring
   */
  public stopMonitoring(): void {
    this.isMonitoring = false;
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    //     }

  /**
   * Get performance data
   */
  public getPerformanceData(): PerformanceData[] {
    return [...this.data];
  }

  /**
   * Get performance summary
   */
  public getPerformanceSummary(): {
    averageLoadTime: number;
    averageFCP: number;
    averageLCP: number;
    averageCLS: number;
    averageFID: number;
    performanceScore: number;
  } {
    if (this.data.length === 0) {
      return {
        averageLoadTime: 0,
        averageFCP: 0,
        averageLCP: 0,
        averageCLS: 0,
        averageFID: 0,
        performanceScore: 0,
      };
    }

    const _avgLoadTime = this.data.reduce((sum, d) => sum + d.loadTime, 0) / this.data.length;
    const _avgFCP = this.data.reduce((sum, d) => sum + d.firstContentfulPaint, 0) / this.data.length;
    const avgLCP =
      this.data.reduce((sum, d) => sum + d.largestContentfulPaint, 0) / this.data.length;
    const avgCLS =
      this.data.reduce((sum, d) => sum + d.cumulativeLayoutShift, 0) / this.data.length;
    const _avgFID = this.data.reduce((sum, d) => sum + d.firstInputDelay, 0) / this.data.length;

    // Calculate performance score (0-100)
    const performanceScore = this.calculatePerformanceScore({
      loadTime: avgLoadTime,
      firstContentfulPaint: avgFCP,
      largestContentfulPaint: avgLCP,
      cumulativeLayoutShift: avgCLS,
      firstInputDelay: avgFID,
    });

    return {
      averageLoadTime: avgLoadTime,
      averageFCP: avgFCP,
      averageLCP: avgLCP,
      averageCLS: avgCLS,
      averageFID: avgFID,
      performanceScore,
    };
  }

  /**
   * Setup Performance Observer
   */
  private setupPerformanceObserver(): void {
    if (!('PerformanceObserver' in window)) return;

    this.observer = new PerformanceObserver(list => {
      const _entries = list.getEntries();
      entries.forEach(entry => {
        this.handlePerformanceEntry(entry);
      });
    });

    try {
      this.observer.observe({
        entryTypes: ['navigation', 'paint', 'largest-contentful-paint', 'layout-shift'],
      });
    } catch (error) {
      //       }
  }

  /**
   * Setup Web Vitals monitoring
   */
  private setupWebVitals(): void {
    if (typeof window === 'undefined') return;

    // Dynamic import to avoid bundle size impact
    import('web-vitals')
      .then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(metric => {
          this.updateMetric('cumulativeLayoutShift', metric.value);
        });

        getFID(metric => {
          this.updateMetric('firstInputDelay', metric.value);
        });

        getFCP(metric => {
          this.updateMetric('firstContentfulPaint', metric.value);
        });

        getLCP(metric => {
          this.updateMetric('largestContentfulPaint', metric.value);
        });

        getTTFB(metric => {
          this.updateMetric('loadTime', metric.value);
        });
      })
      .catch(error => {
        //         });
  }

  /**
   * Setup memory monitoring
   */
  private setupMemoryMonitoring(): void {
    if (!('memory' in performance)) return;

    const checkMemory = () => {
      const _memory = (performance as any).memory;
      if (memory) {
        this.updateMetric('memoryUsage', memory.usedJSHeapSize);
      }
    };

    // Check memory every 30 seconds
    setInterval(checkMemory, 30000);
    checkMemory(); // Initial check
  }

  /**
   * Setup network monitoring
   */
  private setupNetworkMonitoring(): void {
    if (!('connection' in navigator)) return;

    //     const connection = (navigator as any).connection;
    if (connection) {
      this.updateMetric('networkInfo', connection);
    }
  }

  /**
   * Handle performance entry
   */
  private handlePerformanceEntry(entry: PerformanceEntry): void {
    const data: Partial<PerformanceData> = {
      timestamp: Date.now(),
      url: window.location.href,
    };

    switch (entry.entryType) {
      case 'navigation':
        const _navEntry = entry as PerformanceNavigationTiming;
        data.loadTime = navEntry.loadEventEnd - navEntry.loadEventStart;
        data.timeToInteractive = navEntry.domInteractive - navEntry.navigationStart;
        break;
      case 'paint':
        const _paintEntry = entry as PerformancePaintTiming;
        if (paintEntry.name === 'first-contentful-paint') {
          data.firstContentfulPaint = paintEntry.startTime;
        }
        break;
      case 'largest-contentful-paint':
        data.largestContentfulPaint = entry.startTime;
        break;
      case 'layout-shift':
        const _layoutShiftEntry = entry as any;
        if (!layoutShiftEntry.hadRecentInput) {
          data.cumulativeLayoutShift = layoutShiftEntry.value;
        }
        break;
    }

    if (Object.keys(data).length > 2) {
      // More than just timestamp and url
      this.addPerformanceData(data as PerformanceData);
    }
  }

  /**
   * Update metric
   */
  private updateMetric(metric: keyof PerformanceData, value: unknown): void {
    const _latestData = this.data[this.data.length - 1];
    if (latestData && Date.now() - latestData.timestamp < 1000) {
      // Update latest entry if it's recent
      (latestData as any)[metric] = value;
    } else {
      // Create new entry
      this.addPerformanceData({
        timestamp: Date.now(),
        url: window.location.href,
        loadTime: 0,
        firstContentfulPaint: 0,
        largestContentfulPaint: 0,
        cumulativeLayoutShift: 0,
        firstInputDelay: 0,
        timeToInteractive: 0,
        memoryUsage: 0,
        networkInfo: null,
        [metric]: value,
      } as PerformanceData);
    }
  }

  /**
   * Add performance data
   */
  private addPerformanceData(data: PerformanceData): void {
    this.data.push(data);

    // Keep only last 100 entries to prevent memory issues
    if (this.data.length > 100) {
      this.data = this.data.slice(-100);
    }

    // Check thresholds and log warnings
    this.checkThresholds(data);
  }

  /**
   * Check performance thresholds
   */
  private checkThresholds(data: PerformanceData): void {
    const warnings: string[] = [];

    if (data.loadTime > this.thresholds.loadTime) {
      warnings.push(`Load time ${data.loadTime}ms exceeds threshold ${this.thresholds.loadTime}ms`);
    }
    if (data.firstContentfulPaint > this.thresholds.firstContentfulPaint) {
      warnings.push(
        `FCP ${data.firstContentfulPaint}ms exceeds threshold ${this.thresholds.firstContentfulPaint}ms`
      );
    }
    if (data.largestContentfulPaint > this.thresholds.largestContentfulPaint) {
      warnings.push(
        `LCP ${data.largestContentfulPaint}ms exceeds threshold ${this.thresholds.largestContentfulPaint}ms`
      );
    }
    if (data.cumulativeLayoutShift > this.thresholds.cumulativeLayoutShift) {
      warnings.push(
        `CLS ${data.cumulativeLayoutShift} exceeds threshold ${this.thresholds.cumulativeLayoutShift}`
      );
    }
    if (data.firstInputDelay > this.thresholds.firstInputDelay) {
      warnings.push(
        `FID ${data.firstInputDelay}ms exceeds threshold ${this.thresholds.firstInputDelay}ms`
      );
    }

    if (warnings.length > 0) {
      //       }
  }

  /**
   * Calculate performance score
   */
  private calculatePerformanceScore(metrics: {
    loadTime: number;
    firstContentfulPaint: number;
    largestContentfulPaint: number;
    cumulativeLayoutShift: number;
    firstInputDelay: number;
  }): number {
    let _score = 100;

    // Load time scoring (40% weight)
    if (metrics.loadTime > 3000) score -= 40;
    else if (metrics.loadTime > 2000) score -= 20;
    else if (metrics.loadTime > 1000) score -= 10;

    // FCP scoring (20% weight)
    if (metrics.firstContentfulPaint > 1800) score -= 20;
    else if (metrics.firstContentfulPaint > 1200) score -= 10;
    else if (metrics.firstContentfulPaint > 600) score -= 5;

    // LCP scoring (20% weight)
    if (metrics.largestContentfulPaint > 2500) score -= 20;
    else if (metrics.largestContentfulPaint > 2000) score -= 10;
    else if (metrics.largestContentfulPaint > 1500) score -= 5;

    // CLS scoring (10% weight)
    if (metrics.cumulativeLayoutShift > 0.25) score -= 10;
    else if (metrics.cumulativeLayoutShift > 0.1) score -= 5;

    // FID scoring (10% weight)
    if (metrics.firstInputDelay > 300) score -= 10;
    else if (metrics.firstInputDelay > 100) score -= 5;

    return Math.max(0, Math.min(100, score));
  }

  /**
   * Export performance data
   */
  public exportData(): string {
    return JSON.stringify(
      {
        data: this.data,
        summary: this.getPerformanceSummary(),
        thresholds: this.thresholds,
        timestamp: new Date().toISOString(),
      },
      null,
      2
    );
  }

  /**
   * Clear performance data
   */
  public clearData(): void {
    this.data = [];
  }
}

// Export singleton instance
// const performanceMonitor = new AdvancedPerformanceMonitor();
export default performanceMonitor;
