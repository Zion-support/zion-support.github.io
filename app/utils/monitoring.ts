// Monitoring utility functions

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