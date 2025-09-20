// Monitoring and analytics utilities

interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any>;
  timestamp?: number;
}

interface PerformanceMetric {
  name: string;
  value: number;
  unit: string;
  timestamp: number;
}

// Analytics manager
export class AnalyticsManager {
  private events: AnalyticsEvent[] = [];
  private isEnabled: boolean = true;

  constructor(enabled: boolean = true) {
    this.isEnabled = enabled;
  }

  track(event: AnalyticsEvent): void {
    if (!this.isEnabled) return;

    const eventWithTimestamp = {
      ...event,
      timestamp: event.timestamp || Date.now()
    };

    this.events.push(eventWithTimestamp);
    
    // Send to analytics service (implement based on your provider)
    this.sendToAnalytics(eventWithTimestamp);
  }

  private sendToAnalytics(event: AnalyticsEvent): void {
    // Example implementation for Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', event.name, event.properties);
    }

    // Example implementation for custom analytics
    if (typeof window !== 'undefined' && (window as any).analytics) {
      (window as any).analytics.track(event.name, event.properties);
    }
  }

  getEvents(): AnalyticsEvent[] {
    return [...this.events];
  }

  clearEvents(): void {
    this.events = [];
  }
}

// Performance monitoring
export class PerformanceMonitor {
  private metrics: PerformanceMetric[] = [];
  private observer?: PerformanceObserver;

  constructor() {
    this.initializeObserver();
  }

  private initializeObserver(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    this.observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        this.recordMetric(entry);
      }
    });

    // Observe different types of performance entries
    try {
      this.observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (error) {
      console.warn('Performance monitoring not fully supported:', error);
    }
  }

  private recordMetric(entry: PerformanceEntry): void {
    const metric: PerformanceMetric = {
      name: entry.name,
      value: entry.startTime,
      unit: 'ms',
      timestamp: Date.now()
    };

    this.metrics.push(metric);
  }

  getCoreWebVitals(): {
    FCP?: number;
    LCP?: number;
    FID?: number;
    CLS?: number;
  } {
    const vitals: any = {};

    this.metrics.forEach(metric => {
      switch (metric.name) {
        case 'first-contentful-paint':
          vitals.FCP = metric.value;
          break;
        case 'largest-contentful-paint':
          vitals.LCP = metric.value;
          break;
        case 'first-input':
          vitals.FID = metric.value;
          break;
        case 'layout-shift':
          vitals.CLS = metric.value;
          break;
      }
    });

    return vitals;
  }

  getMetrics(): PerformanceMetric[] {
    return [...this.metrics];
  }

  clearMetrics(): void {
    this.metrics = [];
  }

  destroy(): void {
    this.observer?.disconnect();
  }
}

// Error tracking
export class ErrorTracker {
  private errors: Error[] = [];
  private isEnabled: boolean = true;

  constructor(enabled: boolean = true) {
    this.isEnabled = enabled;
    this.setupGlobalErrorHandling();
  }

  private setupGlobalErrorHandling(): void {
    if (typeof window === 'undefined') return;

    // Global error handler
    window.addEventListener('error', (event) => {
      this.trackError(new Error(event.message), {
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        type: 'javascript'
      });
    });

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      this.trackError(new Error(event.reason), {
        type: 'promise'
      });
    });
  }

  trackError(error: Error, context?: Record<string, any>): void {
    if (!this.isEnabled) return;

    const errorWithContext = {
      ...error,
      context,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      url: window.location.href
    };

    this.errors.push(errorWithContext as Error);
    
    // Send to error tracking service
    this.sendToErrorService(errorWithContext);
  }

  private sendToErrorService(error: any): void {
    // Example implementation for Sentry
    if (typeof window !== 'undefined' && (window as any).Sentry) {
      (window as any).Sentry.captureException(error);
    }

    // Example implementation for custom error service
    console.error('Error tracked:', error);
  }

  getErrors(): Error[] {
    return [...this.errors];
  }

  clearErrors(): void {
    this.errors = [];
  }
}

// Uptime monitoring
export class UptimeMonitor {
  private startTime: number;
  private isOnline: boolean = true;
  private offlineTime: number = 0;
  private onlineTime: number = 0;

  constructor() {
    this.startTime = Date.now();
    this.setupNetworkMonitoring();
  }

  private setupNetworkMonitoring(): void {
    if (typeof window === 'undefined') return;

    window.addEventListener('online', () => {
      this.isOnline = true;
      this.offlineTime += Date.now() - this.startTime;
    });

    window.addEventListener('offline', () => {
      this.isOnline = false;
      this.onlineTime += Date.now() - this.startTime;
    });
  }

  getUptime(): number {
    const totalTime = Date.now() - this.startTime;
    return this.isOnline ? 
      (this.onlineTime + (Date.now() - this.startTime)) / totalTime : 
      this.onlineTime / totalTime;
  }

  isCurrentlyOnline(): boolean {
    return this.isOnline;
  }

  getOfflineDuration(): number {
    return this.offlineTime;
  }
}

// Resource monitoring
export class ResourceMonitor {
  private resources: PerformanceResourceTiming[] = [];

  constructor() {
    this.collectResources();
  }

  private collectResources(): void {
    if (typeof window === 'undefined') return;

    const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    this.resources = resources;
  }

  getSlowResources(threshold: number = 1000): PerformanceResourceTiming[] {
    return this.resources.filter(resource => resource.duration > threshold);
  }

  getResourceStats(): {
    total: number;
    average: number;
    slowest: PerformanceResourceTiming | null;
    fastest: PerformanceResourceTiming | null;
  } {
    if (this.resources.length === 0) {
      return { total: 0, average: 0, slowest: null, fastest: null };
    }

    const durations = this.resources.map(r => r.duration);
    const total = durations.reduce((sum, duration) => sum + duration, 0);
    const average = total / durations.length;
    const slowest = this.resources.reduce((prev, current) => 
      prev.duration > current.duration ? prev : current
    );
    const fastest = this.resources.reduce((prev, current) => 
      prev.duration < current.duration ? prev : current
    );

    return { total, average, slowest, fastest };
  }
}

// Memory monitoring
export class MemoryMonitor {
  getMemoryUsage(): {
    used: number;
    total: number;
    limit: number;
    percentage: number;
  } | null {
    if (typeof window === 'undefined' || !('memory' in performance)) {
      return null;
    }

    const memory = (performance as any).memory;
    const used = memory.usedJSHeapSize / 1048576; // MB
    const total = memory.totalJSHeapSize / 1048576; // MB
    const limit = memory.jsHeapSizeLimit / 1048576; // MB
    const percentage = (used / limit) * 100;

    return { used, total, limit, percentage };
  }

  isMemoryPressure(): boolean {
    const usage = this.getMemoryUsage();
    return usage ? usage.percentage > 80 : false;
  }
}

// Create global instances
export const analytics = new AnalyticsManager();
export const performanceMonitor = new PerformanceMonitor();
export const errorTracker = new ErrorTracker();
export const uptimeMonitor = new UptimeMonitor();
export const resourceMonitor = new ResourceMonitor();
export const memoryMonitor = new MemoryMonitor();