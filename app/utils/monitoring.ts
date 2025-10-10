// Monitoring utility

export interface MonitoringConfig {
  enablePerformanceMonitoring?: boolean;
  enableErrorMonitoring?: boolean;
  enableUserMonitoring?: boolean;
  enableNetworkMonitoring?: boolean;
  enableMemoryMonitoring?: boolean;
  enableCustomMetrics?: boolean;
  sampleRate?: number;
  batchSize?: number;
  flushInterval?: number;
}

export interface PerformanceMetric {
  name: string;
  value: number;
  unit: string;
  timestamp: number;
  context?: Record<string, any>;
}

export interface ErrorMetric {
  name: string;
  message: string;
  stack?: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  timestamp: number;
  context?: Record<string, any>;
}

export interface UserMetric {
  action: string;
  element?: string;
  value?: any;
  timestamp: number;
  context?: Record<string, any>;
}

export interface NetworkMetric {
  url: string;
  method: string;
  status: number;
  duration: number;
  size: number;
  timestamp: number;
  context?: Record<string, any>;
}

export class Monitoring {
  private config: Required<MonitoringConfig>;
  private metrics: {
    performance: PerformanceMetric[];
    errors: ErrorMetric[];
    users: UserMetric[];
    network: NetworkMetric[];
  } = {
    performance: [],
    errors: [],
    users: [],
    network: []
  };
  private flushTimer?: NodeJS.Timeout;

  constructor(config: MonitoringConfig = {}) {
    this.config = {
      enablePerformanceMonitoring: true,
      enableErrorMonitoring: true,
      enableUserMonitoring: true,
      enableNetworkMonitoring: true,
      enableMemoryMonitoring: true,
      enableCustomMetrics: true,
      sampleRate: 1.0,
      batchSize: 50,
      flushInterval: 30000, // 30 seconds
      ...config
    };

    this.initializeMonitoring();
    this.startFlushTimer();
  }

  /**
   * Track performance metric
   */
  trackPerformance(name: string, value: number, unit: string = 'ms', context?: Record<string, any>): void {
    if (!this.config.enablePerformanceMonitoring) return;

    const metric: PerformanceMetric = {
      name,
      value,
      unit,
      timestamp: Date.now(),
      context
    };

    this.metrics.performance.push(metric);
    this.checkFlush();
  }

  /**
   * Track error metric
   */
  trackError(name: string, message: string, severity: 'low' | 'medium' | 'high' | 'critical', stack?: string, context?: Record<string, any>): void {
    if (!this.config.enableErrorMonitoring) return;

    const metric: ErrorMetric = {
      name,
      message,
      stack,
      severity,
      timestamp: Date.now(),
      context
    };

    this.metrics.errors.push(metric);
    this.checkFlush();
  }

  /**
   * Track user action
   */
  trackUserAction(action: string, element?: string, value?: any, context?: Record<string, any>): void {
    if (!this.config.enableUserMonitoring) return;

    const metric: UserMetric = {
      action,
      element,
      value,
      timestamp: Date.now(),
      context
    };

    this.metrics.users.push(metric);
    this.checkFlush();
  }

  /**
   * Track network request
   */
  trackNetworkRequest(url: string, method: string, status: number, duration: number, size: number, context?: Record<string, any>): void {
    if (!this.config.enableNetworkMonitoring) return;

    const metric: NetworkMetric = {
      url,
      method,
      status,
      duration,
      size,
      timestamp: Date.now(),
      context
    };

    this.metrics.network.push(metric);
    this.checkFlush();
  }

  /**
   * Track custom metric
   */
  trackCustomMetric(type: string, name: string, value: any, context?: Record<string, any>): void {
    if (!this.config.enableCustomMetrics) return;

    const metric = {
      type,
      name,
      value,
      timestamp: Date.now(),
      context
    };

    // Add to appropriate array based on type
    if (type === 'performance') {
      this.metrics.performance.push(metric as PerformanceMetric);
    } else if (type === 'error') {
      this.metrics.errors.push(metric as ErrorMetric);
    } else if (type === 'user') {
      this.metrics.users.push(metric as UserMetric);
    } else if (type === 'network') {
      this.metrics.network.push(metric as NetworkMetric);
    }

    this.checkFlush();
  }

  /**
   * Initialize monitoring
   */
  private initializeMonitoring(): void {
    if (this.config.enablePerformanceMonitoring) {
      this.initializePerformanceMonitoring();
    }

    if (this.config.enableErrorMonitoring) {
      this.initializeErrorMonitoring();
    }

    if (this.config.enableUserMonitoring) {
      this.initializeUserMonitoring();
    }

    if (this.config.enableNetworkMonitoring) {
      this.initializeNetworkMonitoring();
    }

    if (this.config.enableMemoryMonitoring) {
      this.initializeMemoryMonitoring();
    }
  }

  /**
   * Initialize performance monitoring
   */
  private initializePerformanceMonitoring(): void {
    // Track page load time
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        this.trackPerformance('page_load_time', navigation.loadEventEnd - navigation.loadEventStart);
        this.trackPerformance('dom_content_loaded', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart);
        this.trackPerformance('first_paint', navigation.loadEventEnd - navigation.fetchStart);
      }
    });

    // Track Web Vitals
    this.trackWebVitals();
  }

  /**
   * Track Web Vitals
   */
  private trackWebVitals(): void {
    // Largest Contentful Paint
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            this.trackPerformance('lcp', entry.startTime);
          }
        }
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }

    // First Input Delay
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'first-input') {
            this.trackPerformance('fid', entry.processingStart - entry.startTime);
          }
        }
      });
      observer.observe({ entryTypes: ['first-input'] });
    }
  }

  /**
   * Initialize error monitoring
   */
  private initializeErrorMonitoring(): void {
    // Global error handler
    window.addEventListener('error', (event) => {
      this.trackError('global_error', event.message, 'high', event.error?.stack, {
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno
      });
    });

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      this.trackError('unhandled_rejection', event.reason, 'medium', undefined, {
        type: 'unhandled_promise_rejection'
      });
    });
  }

  /**
   * Initialize user monitoring
   */
  private initializeUserMonitoring(): void {
    // Track clicks
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      this.trackUserAction('click', target.tagName.toLowerCase(), {
        text: target.textContent?.slice(0, 100),
        className: target.className,
        id: target.id
      });
    });

    // Track form submissions
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      this.trackUserAction('form_submit', 'form', {
        action: form.action,
        method: form.method
      });
    });
  }

  /**
   * Initialize network monitoring
   */
  private initializeNetworkMonitoring(): void {
    // Override fetch to track requests
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      const startTime = performance.now();
      const url = args[0] as string;
      const method = args[1]?.method || 'GET';

      try {
        const response = await originalFetch(...args);
        const duration = performance.now() - startTime;
        
        this.trackNetworkRequest(url, method, response.status, duration, 0);
        
        return response;
      } catch (error) {
        const duration = performance.now() - startTime;
        this.trackNetworkRequest(url, method, 0, duration, 0);
        throw error;
      }
    };
  }

  /**
   * Initialize memory monitoring
   */
  private initializeMemoryMonitoring(): void {
    setInterval(() => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        this.trackPerformance('memory_used', memory.usedJSHeapSize, 'bytes');
        this.trackPerformance('memory_total', memory.totalJSHeapSize, 'bytes');
        this.trackPerformance('memory_limit', memory.jsHeapSizeLimit, 'bytes');
      }
    }, 30000); // Check every 30 seconds
  }

  /**
   * Check if metrics should be flushed
   */
  private checkFlush(): void {
    const totalMetrics = this.metrics.performance.length + 
                        this.metrics.errors.length + 
                        this.metrics.users.length + 
                        this.metrics.network.length;

    if (totalMetrics >= this.config.batchSize) {
      this.flushMetrics();
    }
  }

  /**
   * Start flush timer
   */
  private startFlushTimer(): void {
    this.flushTimer = setInterval(() => {
      this.flushMetrics();
    }, this.config.flushInterval);
  }

  /**
   * Flush metrics to server
   */
  private flushMetrics(): void {
    if (this.metrics.performance.length === 0 && 
        this.metrics.errors.length === 0 && 
        this.metrics.users.length === 0 && 
        this.metrics.network.length === 0) {
      return;
    }

    const metricsToSend = { ...this.metrics };
    
    // Clear metrics
    this.metrics = {
      performance: [],
      errors: [],
      users: [],
      network: []
    };

    // Send to server
    fetch('/api/monitoring/metrics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(metricsToSend)
    }).catch(error => {
      console.error('Failed to send metrics to server:', error);
    });
  }

  /**
   * Get metrics summary
   */
  getMetricsSummary(): {
    performance: number;
    errors: number;
    users: number;
    network: number;
    total: number;
  } {
    return {
      performance: this.metrics.performance.length,
      errors: this.metrics.errors.length,
      users: this.metrics.users.length,
      network: this.metrics.network.length,
      total: this.metrics.performance.length + 
             this.metrics.errors.length + 
             this.metrics.users.length + 
             this.metrics.network.length
    };
  }

  /**
   * Clear all metrics
   */
  clearMetrics(): void {
    this.metrics = {
      performance: [],
      errors: [],
      users: [],
      network: []
    };
  }

  /**
   * Destroy monitoring
   */
  destroy(): void {
    if (this.flushTimer) {
      clearInterval(this.flushTimer);
    }
    this.flushMetrics();
  }
}

export default Monitoring;