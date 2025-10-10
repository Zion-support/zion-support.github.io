// Performance monitor utility

export interface PerformanceMonitorConfig {
  enableRealTimeMonitoring?: boolean;
  enableResourceMonitoring?: boolean;
  enableMemoryMonitoring?: boolean;
  enableNetworkMonitoring?: boolean;
  enableUserInteractionMonitoring?: boolean;
  sampleRate?: number;
  reportInterval?: number;
  enableAlerts?: boolean;
  alertThresholds?: {
    memoryUsage?: number;
    responseTime?: number;
    errorRate?: number;
  };
}

export interface PerformanceData {
  timestamp: number;
  memory: {
    used: number;
    total: number;
    limit: number;
  };
  resources: {
    count: number;
    totalSize: number;
    loadTime: number;
  };
  network: {
    requests: number;
    totalSize: number;
    averageResponseTime: number;
  };
  userInteractions: {
    clicks: number;
    scrolls: number;
    keypresses: number;
  };
  errors: {
    count: number;
    rate: number;
  };
}

export class PerformanceMonitor {
  private config: Required<PerformanceMonitorConfig>;
  private data: PerformanceData[] = [];
  private reportTimer?: NodeJS.Timeout;
  private isMonitoring = false;

  constructor(config: PerformanceMonitorConfig = {}) {
    this.config = {
      enableRealTimeMonitoring: true,
      enableResourceMonitoring: true,
      enableMemoryMonitoring: true,
      enableNetworkMonitoring: true,
      enableUserInteractionMonitoring: true,
      sampleRate: 1.0,
      reportInterval: 5000, // 5 seconds
      enableAlerts: true,
      alertThresholds: {
        memoryUsage: 80, // 80%
        responseTime: 2000, // 2 seconds
        errorRate: 5 // 5%
      },
      ...config
    };

    this.initializeMonitoring();
  }

  /**
   * Start monitoring
   */
  start(): void {
    if (this.isMonitoring) return;

    this.isMonitoring = true;
    this.startDataCollection();
    this.startReporting();
  }

  /**
   * Stop monitoring
   */
  stop(): void {
    this.isMonitoring = false;
    this.stopDataCollection();
    this.stopReporting();
  }

  /**
   * Initialize monitoring
   */
  private initializeMonitoring(): void {
    if (this.config.enableRealTimeMonitoring) {
      this.setupRealTimeMonitoring();
    }

    if (this.config.enableResourceMonitoring) {
      this.setupResourceMonitoring();
    }

    if (this.config.enableMemoryMonitoring) {
      this.setupMemoryMonitoring();
    }

    if (this.config.enableNetworkMonitoring) {
      this.setupNetworkMonitoring();
    }

    if (this.config.enableUserInteractionMonitoring) {
      this.setupUserInteractionMonitoring();
    }
  }

  /**
   * Setup real-time monitoring
   */
  private setupRealTimeMonitoring(): void {
    // Monitor page visibility changes
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.pauseMonitoring();
      } else {
        this.resumeMonitoring();
      }
    });

    // Monitor window focus changes
    window.addEventListener('focus', () => {
      this.resumeMonitoring();
    });

    window.addEventListener('blur', () => {
      this.pauseMonitoring();
    });
  }

  /**
   * Setup resource monitoring
   */
  private setupResourceMonitoring(): void {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (entry.entryType === 'resource') {
            this.trackResource(entry as PerformanceResourceTiming);
          }
        });
      });
      observer.observe({ entryTypes: ['resource'] });
    }
  }

  /**
   * Setup memory monitoring
   */
  private setupMemoryMonitoring(): void {
    if ('memory' in performance) {
      setInterval(() => {
        this.collectMemoryData();
      }, 1000);
    }
  }

  /**
   * Setup network monitoring
   */
  private setupNetworkMonitoring(): void {
    // Override fetch to track requests
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      const startTime = performance.now();
      const url = args[0] as string;
      const method = args[1]?.method || 'GET';

      try {
        const response = await originalFetch(...args);
        const duration = performance.now() - startTime;
        
        this.trackNetworkRequest(url, method, response.status, duration);
        
        return response;
      } catch (error) {
        const duration = performance.now() - startTime;
        this.trackNetworkRequest(url, method, 0, duration);
        throw error;
      }
    };
  }

  /**
   * Setup user interaction monitoring
   */
  private setupUserInteractionMonitoring(): void {
    let clickCount = 0;
    let scrollCount = 0;
    let keypressCount = 0;

    document.addEventListener('click', () => {
      clickCount++;
    });

    document.addEventListener('scroll', () => {
      scrollCount++;
    });

    document.addEventListener('keypress', () => {
      keypressCount++;
    });

    // Reset counters periodically
    setInterval(() => {
      this.trackUserInteractions(clickCount, scrollCount, keypressCount);
      clickCount = 0;
      scrollCount = 0;
      keypressCount = 0;
    }, 1000);
  }

  /**
   * Start data collection
   */
  private startDataCollection(): void {
    setInterval(() => {
      if (this.isMonitoring && Math.random() < this.config.sampleRate) {
        this.collectData();
      }
    }, 1000);
  }

  /**
   * Stop data collection
   */
  private stopDataCollection(): void {
    // Clear any existing timers
    if (this.reportTimer) {
      clearInterval(this.reportTimer);
    }
  }

  /**
   * Start reporting
   */
  private startReporting(): void {
    this.reportTimer = setInterval(() => {
      this.reportData();
    }, this.config.reportInterval);
  }

  /**
   * Stop reporting
   */
  private stopReporting(): void {
    if (this.reportTimer) {
      clearInterval(this.reportTimer);
    }
  }

  /**
   * Collect performance data
   */
  private collectData(): void {
    const data: PerformanceData = {
      timestamp: Date.now(),
      memory: this.getMemoryData(),
      resources: this.getResourceData(),
      network: this.getNetworkData(),
      userInteractions: this.getUserInteractionData(),
      errors: this.getErrorData()
    };

    this.data.push(data);

    // Keep only last 100 data points
    if (this.data.length > 100) {
      this.data.shift();
    }

    // Check for alerts
    if (this.config.enableAlerts) {
      this.checkAlerts(data);
    }
  }

  /**
   * Get memory data
   */
  private getMemoryData(): { used: number; total: number; limit: number } {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      return {
        used: memory.usedJSHeapSize,
        total: memory.totalJSHeapSize,
        limit: memory.jsHeapSizeLimit
      };
    }
    return { used: 0, total: 0, limit: 0 };
  }

  /**
   * Get resource data
   */
  private getResourceData(): { count: number; totalSize: number; loadTime: number } {
    const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    let totalSize = 0;
    let totalLoadTime = 0;

    resources.forEach(resource => {
      totalSize += resource.transferSize || 0;
      totalLoadTime += resource.responseEnd - resource.responseStart;
    });

    return {
      count: resources.length,
      totalSize,
      loadTime: totalLoadTime
    };
  }

  /**
   * Get network data
   */
  private getNetworkData(): { requests: number; totalSize: number; averageResponseTime: number } {
    // This would be populated by the network monitoring
    return {
      requests: 0,
      totalSize: 0,
      averageResponseTime: 0
    };
  }

  /**
   * Get user interaction data
   */
  private getUserInteractionData(): { clicks: number; scrolls: number; keypresses: number } {
    // This would be populated by the user interaction monitoring
    return {
      clicks: 0,
      scrolls: 0,
      keypresses: 0
    };
  }

  /**
   * Get error data
   */
  private getErrorData(): { count: number; rate: number } {
    // This would be populated by error monitoring
    return {
      count: 0,
      rate: 0
    };
  }

  /**
   * Track resource
   */
  private trackResource(resource: PerformanceResourceTiming): void {
    // Track resource performance
    console.log('Resource loaded:', resource.name, resource.duration);
  }

  /**
   * Track network request
   */
  private trackNetworkRequest(url: string, method: string, status: number, duration: number): void {
    // Track network request performance
    console.log('Network request:', method, url, status, duration);
  }

  /**
   * Track user interactions
   */
  private trackUserInteractions(clicks: number, scrolls: number, keypresses: number): void {
    // Track user interaction metrics
    console.log('User interactions:', { clicks, scrolls, keypresses });
  }

  /**
   * Collect memory data
   */
  private collectMemoryData(): void {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      const usage = (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100;
      
      if (usage > this.config.alertThresholds.memoryUsage) {
        this.alert('High memory usage detected', { usage });
      }
    }
  }

  /**
   * Check for alerts
   */
  private checkAlerts(data: PerformanceData): void {
    const memoryUsage = (data.memory.used / data.memory.limit) * 100;
    
    if (memoryUsage > this.config.alertThresholds.memoryUsage) {
      this.alert('High memory usage', { usage: memoryUsage });
    }

    if (data.network.averageResponseTime > this.config.alertThresholds.responseTime) {
      this.alert('Slow network response', { responseTime: data.network.averageResponseTime });
    }

    if (data.errors.rate > this.config.alertThresholds.errorRate) {
      this.alert('High error rate', { rate: data.errors.rate });
    }
  }

  /**
   * Show alert
   */
  private alert(message: string, data: any): void {
    console.warn('Performance Alert:', message, data);
    
    // You could also send alerts to a monitoring service
    // or show user notifications
  }

  /**
   * Pause monitoring
   */
  private pauseMonitoring(): void {
    // Pause data collection when page is not visible
    this.isMonitoring = false;
  }

  /**
   * Resume monitoring
   */
  private resumeMonitoring(): void {
    // Resume data collection when page becomes visible
    this.isMonitoring = true;
  }

  /**
   * Report data
   */
  private reportData(): void {
    if (this.data.length === 0) return;

    const latestData = this.data[this.data.length - 1];
    
    // Send data to monitoring service
    fetch('/api/performance/monitor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(latestData)
    }).catch(error => {
      console.error('Failed to send performance data:', error);
    });
  }

  /**
   * Get performance data
   */
  getPerformanceData(): PerformanceData[] {
    return [...this.data];
  }

  /**
   * Get latest performance data
   */
  getLatestPerformanceData(): PerformanceData | null {
    return this.data.length > 0 ? this.data[this.data.length - 1] : null;
  }

  /**
   * Clear performance data
   */
  clearPerformanceData(): void {
    this.data = [];
  }

  /**
   * Get performance summary
   */
  getPerformanceSummary(): {
    averageMemoryUsage: number;
    averageResponseTime: number;
    totalResources: number;
    totalErrors: number;
    uptime: number;
  } {
    if (this.data.length === 0) {
      return {
        averageMemoryUsage: 0,
        averageResponseTime: 0,
        totalResources: 0,
        totalErrors: 0,
        uptime: 0
      };
    }

    const totalMemoryUsage = this.data.reduce((sum, data) => {
      return sum + (data.memory.used / data.memory.limit) * 100;
    }, 0);

    const totalResponseTime = this.data.reduce((sum, data) => {
      return sum + data.network.averageResponseTime;
    }, 0);

    const totalResources = this.data.reduce((sum, data) => {
      return sum + data.resources.count;
    }, 0);

    const totalErrors = this.data.reduce((sum, data) => {
      return sum + data.errors.count;
    }, 0);

    const uptime = this.data.length > 0 ? 
      this.data[this.data.length - 1].timestamp - this.data[0].timestamp : 0;

    return {
      averageMemoryUsage: totalMemoryUsage / this.data.length,
      averageResponseTime: totalResponseTime / this.data.length,
      totalResources,
      totalErrors,
      uptime
    };
  }
}

export default PerformanceMonitor;