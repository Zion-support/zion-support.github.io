// Performance monitoring utilities
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number> = new Map();
  private observers: PerformanceObserver[] = [];

  private constructor() {
    this.initializeObservers();
  }

  public static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  private initializeObservers() {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    // Monitor Core Web Vitals
    try {
      const vitalsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.recordMetric(entry.name, entry.startTime);
        }
      });
      vitalsObserver.observe({ entryTypes: ['measure', 'navigation', 'paint'] });
      this.observers.push(vitalsObserver);
    } catch (error) {
      // // console.warn('Performance monitoring not available:', error);
    }

    // Monitor resource loading
    try {
      const resourceObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'resource') {
            const resource = entry as PerformanceResourceTiming;
            this.recordMetric(`resource_${resource.name}`, resource.duration);
          }
        }
      });
      resourceObserver.observe({ entryTypes: ['resource'] });
      this.observers.push(resourceObserver);
    } catch (error) {
      // // console.warn('Resource monitoring not available:', error);
    }
  }

  public recordMetric(name: string, value: number): void {
    this.metrics.set(name, value);
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      // // console.log(`Performance Metric: ${name} = ${value}ms`);
    }
  }

  public getMetric(name: string): number | undefined {
    return this.metrics.get(name);
  }

  public getAllMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }

  public measureFunction<T>(name: string, fn: () => T): T {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    this.recordMetric(name, end - start);
    return result;
  }

  public async measureAsyncFunction<T>(name: string, fn: () => Promise<T>): Promise<T> {
    const start = performance.now();
    const result = await fn();
    const end = performance.now();
    this.recordMetric(name, end - start);
    return result;
  }

  public getCoreWebVitals() {
    return {
      FCP: this.getMetric('first-contentful-paint'),
      LCP: this.getMetric('largest-contentful-paint'),
      FID: this.getMetric('first-input-delay'),
      CLS: this.getMetric('cumulative-layout-shift'),
      TTFB: this.getMetric('time-to-first-byte'),
    };
  }

  public cleanup() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// React hook for performance monitoring
export function usePerformanceMonitor() {
  const monitor = PerformanceMonitor.getInstance();
  
  return {
    recordMetric: monitor.recordMetric.bind(monitor),
    measureFunction: monitor.measureFunction.bind(monitor),
    measureAsyncFunction: monitor.measureAsyncFunction.bind(monitor),
    getCoreWebVitals: monitor.getCoreWebVitals.bind(monitor),
  };
}

// Error boundary for performance monitoring
export class PerformanceErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    const monitor = PerformanceMonitor.getInstance();
    monitor.recordMetric('error_boundary_triggered', 1);
    
    // // console.error('Performance Error Boundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Please refresh the page.</div>;
    }

    return this.props.children;
  }
}