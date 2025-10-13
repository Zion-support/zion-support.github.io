// monitoring utility functions

export interface monitoringConfig {
  enabled: boolean;
}

export class monitoring {
  private config: monitoringConfig;

  constructor(config: Partial<monitoringConfig> = {}) {
    this.config = {
      enabled: true,
      ...config
    };
  }

  init(): void {
    if (this.config.enabled) {
      console.log('monitoring initialized');
    }
  }
}

export const monitoringInstance = new monitoring();
export default monitoringInstance;
// monitoring
export const monitoring = () => {
  // Utility function implementation
  return null;
};

// Monitoring utility functions

export const Monitoring = {
  init: () => {
    },

  process: (data: any) => {
    return data;
  },

  cleanup: () => {
    },
};

export default Monitoring;

// monitoring utility
export const monitoring = {
  // Utility implementation,
    init: () => {
    console.log('monitoring initialized');
  }
};

// Monitoring utility functions
    // Initialize monitoring
    console.log('Monitoring initialized');
  },

  track: (event: string, data?: any) => {
    // Track events
    console.log('Event tracked:', event, data);
  },

  error: (error: Error, context?: string) => {
    // Track errors
    console.error('Error tracked:', error, context);
  }
};

interface MonitoringConfig {
  apiEndpoint?: string;
  enableConsoleLogging?: boolean;
  enablePerformanceTracking?: boolean;
}

interface PerformanceMetric {
  name: string;
  value: number;
  timestamp: number;
}

class MonitoringService {
  private config: MonitoringConfig;
  private metrics: PerformanceMetric[] = [];

  constructor(config: MonitoringConfig = {}) {
    this.config = {
      apiEndpoint: '/api/metrics',
      enableConsoleLogging: true,
      enablePerformanceTracking: true,
      ...config
    };
  }

  init(): void {
    if (this.config.enablePerformanceTracking) {
      this.startPerformanceTracking();
    }

    if (this.config.enableConsoleLogging) {
      console.log('Monitoring service initialized');
    }
  }

  private startPerformanceTracking(): void {
    if (typeof window === 'undefined') return;

    // Track page load time
    window.addEventListener('load', () => {
      const loadTime = performance.now();
      this.trackMetric('page_load_time', loadTime);
    });

    // Track Core Web Vitals
    this.trackWebVitals();
  }

  private trackWebVitals(): void {
    if (typeof window === 'undefined') return;

    // Track First Contentful Paint
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          this.trackMetric('first_contentful_paint', entry.startTime);
        }
      }
    });

    observer.observe({ entryTypes: ['paint'] });
  }

  trackMetric(name: string, value: number): void {
    const metric: PerformanceMetric = {
      name,
      value,
      timestamp: Date.now()
    };

    this.metrics.push(metric);

    if (this.config.enableConsoleLogging) {
      console.log(`Metric tracked: ${name} = ${value}`);
    }
  }

  getMetrics(): PerformanceMetric[] {
    return [...this.metrics];
  }

  clearMetrics(): void {
    this.metrics = [];
  }

  async sendMetrics(): Promise<void> {
    if (!this.config.apiEndpoint) return;

    try {
      await fetch(this.config.apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.metrics),
      });
    } catch (error) {
      console.error('Failed to send metrics:', error);
    }
  }
}

// Create singleton instance
const monitoringService = new MonitoringService();

// Export functions
export const Monitoring = {
  init: () => monitoringService.init(),
  trackMetric: (name: string, value: number) => monitoringService.trackMetric(name, value),
  getMetrics: () => monitoringService.getMetrics(),
  clearMetrics: () => monitoringService.clearMetrics(),
  sendMetrics: () => monitoringService.sendMetrics(),
};

export default Monitoring;
export default monitoring;
    console.log('Monitoring initialized');
  },

  trackEvent: (eventName: string, properties?: Record<string, any>) => {
    console.log('Event tracked:', eventName, properties);
  },

  trackError: (error: Error, context?: string) => {
    console.error('Error tracked:', error, context);
  },

  trackPerformance: (metricName: string, value: number) => {
    console.log('Performance metric:', metricName, value);
  }
};

export function monitoring() {
  return Monitoring;
}

export default monitoring;
// Monitoring utility functions

export interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  errorCount: number;
}

export interface ErrorInfo {
  message: string;
  stack?: string;
  timestamp: Date;
  url: string;
  userAgent: string;
}

export class PerformanceMonitor {
  private metrics: PerformanceMetrics = {
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    errorCount: 0,
  };

  private errors: ErrorInfo[] = [];

  init(): void {
    this.startPerformanceTracking();
    this.setupErrorHandling();
  }

  private startPerformanceTracking(): void {
    if (typeof window !== 'undefined' && window.performance) {
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        this.metrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        this.metrics.renderTime = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
      });
    }
  }

  private setupErrorHandling(): void {
    if (typeof window !== 'undefined') {
      window.addEventListener('error', (event) => {
        this.trackError({
          message: event.message,
          stack: event.error?.stack,
          timestamp: new Date(),
          url: window.location.href,
          userAgent: navigator.userAgent,
        });
      });

      window.addEventListener('unhandledrejection', (event) => {
        this.trackError({
          message: `Unhandled Promise Rejection: ${event.reason}`,
          timestamp: new Date(),
          url: window.location.href,
          userAgent: navigator.userAgent,
        });
      });
    }
  }

  trackError(error: ErrorInfo): void {
    this.errors.push(error);
    this.metrics.errorCount++;

    // Send to monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      this.sendToMonitoringService(error);
    }
  }

  private sendToMonitoringService(error: ErrorInfo): void {
    // Implementation for sending errors to monitoring service
    console.log('Error sent to monitoring service:', error);
  }

  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  getErrors(): ErrorInfo[] {
    return [...this.errors];
  }

  reset(): void {
    this.metrics = {
      loadTime: 0,
      renderTime: 0,
      memoryUsage: 0,
      errorCount: 0,
    };
    this.errors = [];
  }
}

export const performanceMonitor = new PerformanceMonitor();

export function initMonitoring(): void {
  performanceMonitor.init();
}

export function trackError(error: ErrorInfo): void {
  performanceMonitor.trackError(error);
}

export function getPerformanceMetrics(): PerformanceMetrics {
  return performanceMonitor.getMetrics();
}

export function getErrors(): ErrorInfo[] {
  return performanceMonitor.getErrors();
}

export default performanceMonitor;
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
