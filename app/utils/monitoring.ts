// Monitoring utility for application performance and error tracking

export interface MonitoringConfig {
  enablePerformanceMonitoring?: boolean;
  enableErrorTracking?: boolean;
  enableUserTracking?: boolean;
  sampleRate?: number;
}

export interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkLatency: number;
}

class Monitoring {
  private config: Required<MonitoringConfig>;
  private metrics: PerformanceMetrics[] = [];
  private errors: Error[] = [];

  constructor(config: MonitoringConfig = {}) {
    this.config = {
      enablePerformanceMonitoring: config.enablePerformanceMonitoring ?? true,
      enableErrorTracking: config.enableErrorTracking ?? true,
      enableUserTracking: config.enableUserTracking ?? false,
      sampleRate: config.sampleRate ?? 1.0,
    };

    this.initialize();
  }

  private initialize(): void {
    if (typeof window === 'undefined') return;

    if (this.config.enablePerformanceMonitoring) {
      this.setupPerformanceMonitoring();
    }

    if (this.config.enableErrorTracking) {
      this.setupErrorTracking();
    }
  }

  private setupPerformanceMonitoring(): void {
    // Monitor page load performance
    window.addEventListener('load', () => {
      const loadTime = performance.now();
      this.recordMetric('loadTime', loadTime);
    });

    // Monitor memory usage
    if ('memory' in performance) {
      setInterval(() => {
        const memory = (performance as any).memory;
        if (memory) {
          this.recordMetric('memoryUsage', memory.usedJSHeapSize);
        }
      }, 5000);
    }
  }

  private setupErrorTracking(): void {
    window.addEventListener('error', (event) => {
      this.recordError(event.error);
    });

    window.addEventListener('unhandledrejection', (event) => {
      this.recordError(new Error(event.reason));
    });
  }

  public recordMetric(name: keyof PerformanceMetrics, value: number): void {
    if (Math.random() > this.config.sampleRate) return;

    const metric: PerformanceMetrics = {
      loadTime: 0,
      renderTime: 0,
      memoryUsage: 0,
      networkLatency: 0,
      [name]: value,
    };

    this.metrics.push(metric);
  }

  public recordError(error: Error): void {
    this.errors.push(error);
    
    // Send to analytics if available
    if ((window as any).gtag) {
      (window as any).gtag('event', 'exception', {
        description: error.message,
        fatal: false,
      });
    }
  }

  public getMetrics(): PerformanceMetrics[] {
    return [...this.metrics];
  }

  public getErrors(): Error[] {
    return [...this.errors];
  }

  public clearMetrics(): void {
    this.metrics = [];
  }

  public clearErrors(): void {
    this.errors = [];
  }
}

// Create monitoring instance
const monitoring = new Monitoring();

export default monitoring;