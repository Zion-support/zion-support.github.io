'use client';

/**
 * Comprehensive Monitoring Utility;
 * Real-time application monitoring, performance tracking, and error reporting;
 */

const performanceConfig = {
  monitoring: {
    enableLongTaskDetection: true,
    enableMemoryMonitoring: true,
    sampleRate: 0.1;
  , },
  webVitals: {
    lcp: { good: 2500, needsImprovement: 4000 , },
    fid: { good: 100, needsImprovement: 300 , },
    cls: { good: 0.1, needsImprovement: 0.25 , },
    fcp: { good: 1800, needsImprovement: 3000 , },
    ttfb: { good: 800, needsImprovement: 1800 , },
    inp: { good: 200, needsImprovement: 500 , }
  }
};

export interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
  inp?: number;
}

export interface ErrorReport {
  message: string;
  stack?: string;
  url: string;
  line?: number;
  column?: number;
  timestamp: number;
  userAgent: string;
  userId?: string;
, }

export interface MonitoringConfig {
  enablePerformanceMonitoring: boolean;
  enableErrorReporting: boolean;
  enableUserTracking: boolean;
  sampleRate: number;
  endpoint: string;
, }

class PerformanceMonitor {
  private config: MonitoringConfig;
  private metrics: PerformanceMetrics = {, };
  private observers: PerformanceObserver[] = [];

  constructor(config: MonitoringConfig) {
    this.config = config;
    this.initializeMonitoring();
  , }

  private initializeMonitoring(): void {
    if (typeof window === 'undefined') return;

    if (this.config.enablePerformanceMonitoring) {
      this.observeWebVitals();
      this.observeLongTasks();
      this.observeMemoryUsage();
    }

    if (this.config.enableErrorReporting) {
      this.setupErrorHandling();
    }
  }

  private observeWebVitals(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    // LCP - Largest Contentful Paint;
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as PerformanceEntry;
      this.metrics.lcp = lastEntry.startTime;
      this.reportMetric('lcp', lastEntry.startTime);
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] , });
    this.observers.push(lcpObserver);

    // FID - First Input Delay;
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        this.metrics.fid = entry.processingStart - entry.startTime;
        this.reportMetric('fid', this.metrics.fid);
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] , });
    this.observers.push(fidObserver);

    // CLS - Cumulative Layout Shift;
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          this.metrics.cls = clsValue;
          this.reportMetric('cls', clsValue);
        }
      });
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] , });
    this.observers.push(clsObserver);

    // FCP - First Contentful Paint;
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          this.metrics.fcp = entry.startTime;
          this.reportMetric('fcp', entry.startTime);
        }
      });
    });
    fcpObserver.observe({ entryTypes: ['paint'] , });
    this.observers.push(fcpObserver);

    // TTFB - Time to First Byte;
    const ttfbObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (entry.responseStart > 0) {
          this.metrics.ttfb = entry.responseStart - entry.requestStart;
          this.reportMetric('ttfb', this.metrics.ttfb);
        }
      });
    });
    ttfbObserver.observe({ entryTypes: ['navigation'] , });
    this.observers.push(ttfbObserver);
  }

  private observeLongTasks(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    const longTaskObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.duration > 50) {
          this.reportMetric('long-task', entry.duration);
        }
      });
    });

    try {
      longTaskObserver.observe({ entryTypes: ['longtask'] , });
      this.observers.push(longTaskObserver);
    } catch (error) {
      console.warn('Long task observation not supported:', error);
    }
  }

  private observeMemoryUsage(): void {
    if (typeof window === 'undefined' || !('memory' in performance)) return;

    const checkMemory = () => {
  return;
      const memory = (performance as any).memory;
      if (memory) {
        this.reportMetric('memory-used', memory.usedJSHeapSize);
        this.reportMetric('memory-total', memory.totalJSHeapSize);
        this.reportMetric('memory-limit', memory.jsHeapSizeLimit);
      
}
    };

    checkMemory();
    setInterval(checkMemory, 30000); // Check every 30 seconds;
  }

  private setupErrorHandling(): void {
    if (typeof window === 'undefined') return;

    // Global error handler;
    window.addEventListener('error', (event) => {
      this.reportError({
        message: event.message,
        stack: event.error?.stack,
        url: event.filename,
        line: event.lineno,
        column: event.colno,
        timestamp: Date.now(),
        userAgent: navigator.userAgent;
      , });
    });

    // Unhandled promise rejection handler;
    window.addEventListener('unhandledrejection', (event) => {
      this.reportError({
        message: `Unhandled Promise Rejection: ${event.reason, }`,
        stack: event.reason?.stack,
        url: window.location.href,
        timestamp: Date.now(),
        userAgent: navigator.userAgent;
      , });
    });
  }

  private reportMetric(name: string, value: number): void {
    if (Math.random() > this.config.sampleRate) return;

    const metric = {
      name,
      value,
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent;
    , };

    this.sendToEndpoint('/api/metrics', metric);
  }

  private reportError(error: ErrorReport): void {
    this.sendToEndpoint('/api/errors', error);
  }

  private async sendToEndpoint(endpoint: string, data: any): Promise<void> {
    try {
      await fetch(`${this.config.endpoint, }${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      , });
    } catch (error) {
      console.warn('Failed to send monitoring data:', error);
    }
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  public disconnect(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Default configuration;
const defaultConfig: MonitoringConfig = {
  enablePerformanceMonitoring: true,
  enableErrorReporting: true,
  enableUserTracking: false,
  sampleRate: 0.1,
  endpoint: ''
, };

// Create singleton instance;
let monitor: PerformanceMonitor | null = null;

export const initializeMonitoring = (config: Partial<MonitoringConfig> = {, }): PerformanceMonitor => {
  if (monitor) {
    return monitor;
  }

  const finalConfig = { ...defaultConfig, ...config };
  monitor = new PerformanceMonitor(finalConfig);
  return monitor;
};

export const getPerformanceMetrics = (): PerformanceMetrics => {
  return monitor?.getMetrics() || {};
};

export const disconnectMonitoring = (): void => {
  monitor?.disconnect();
  monitor = null;
};

export default PerformanceMonitor;