<<<<<<< HEAD
'use client'
=======
'use client';

/**
 * Comprehensive Monitoring Utility;
 * Real-time application monitoring, performance tracking, and error reporting;
 */

const performanceConfig = {monitoring: {
    enableLongTaskDetection: true,
    enableMemoryMonitoring: true,
    sampleRate: 0.1;
  },
  webVitals: {lcp: { good: 2500, needsImprovement: 4000 },
    fid: {good: 100, needsImprovement: 300 },
    cls: {good: 0.1, needsImprovement: 0.25 },
    fcp: {good: 1800, needsImprovement: 3000 },
    ttfb: {good: 800, needsImprovement: 1800 },
    inp: {good: 200, needsImprovement: 500 }
  }
};

export default monitoring;
:app/utils/monitoring.ts
'use client';
'use client'
import { Download } from 'lucide-react'
import Navigation from './Navigation'
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
/**
 * Comprehensive Monitoring Utility
 * Real-time application monitoring, performance tracking, and error reporting
 */
<<<<<<< HEAD

const performanceConfig = {
  monitoring: {
    enableLongTaskDetection: true,
    enableMemoryMonitoring: true,
    sampleRate: 0.1
  },
  webVitals: {
    lcp: { good: 2500, needsImprovement: 4000 },
    fid: { good: 100, needsImprovement: 300 },
    cls: { good: 0.1, needsImprovement: 0.25 },
    fcp: { good: 1800, needsImprovement: 3000 },
    ttfb: { good: 800, needsImprovement: 1800 },
    inp: { good: 200, needsImprovement: 500 }
  }
}

export interface PerformanceMetrics {
  lcp?: number
  fid?: number
  cls?: number
  fcp?: number
  ttfb?: number
  inp?: number
}

export interface ErrorReport {
  message: string
  stack?: string
  component?: string
  timestamp: number
  userAgent: string
  url: string
}

class MonitoringService {
  private metrics: PerformanceMetrics = {}
  private errors: ErrorReport[] = []
  private observer: PerformanceObserver | null = null

  constructor() {
    if (typeof window !== 'undefined') {
      this.initializeMonitoring()
    }
  }

  private initializeMonitoring(): void {
    // Monitor Web Vitals
    this.monitorWebVitals()
    // Monitor Long Tasks
    this.monitorLongTasks()
    // Monitor Resource Loading
    this.monitorResourceTiming()
    // Global Error Handler
    this.setupErrorHandling()
  }

  private monitorWebVitals(): void {
    if ('PerformanceObserver' in window) {
      try {
        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1] as PerformanceEntry & { renderTime?: number; loadTime?: number }
          this.metrics.lcp = lastEntry.renderTime || lastEntry.loadTime || 0
          this.reportMetric('lcp', this.metrics.lcp)
        })
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry: PerformanceEntry) => {
            this.metrics.fid = (entry as any).processingStart - entry.startTime
            this.reportMetric('fid', this.metrics.fid)
          })
        })
        fidObserver.observe({ entryTypes: ['first-input'] })

        // Cumulative Layout Shift
        let clsValue = 0
        const clsObserver = new PerformanceObserver(list => {
          const entries = list.getEntries()
          entries.forEach((entry: PerformanceEntry) => {
            if (!(entry as any).hadRecentInput) {
              clsValue += entry.value
              this.metrics.cls = clsValue
              this.reportMetric('cls', clsValue)
            }
          })
        })
        clsObserver.observe({ entryTypes: ['layout-shift'] })

        // First Contentful Paint
        const fcpObserver = new PerformanceObserver(list => {
          const entries = list.getEntries()
          entries.forEach(entry => {
            this.metrics.fcp = entry.startTime
            this.reportMetric('fcp', entry.startTime)
          })
        })
        fcpObserver.observe({ entryTypes: ['paint'] })
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error setting up Web Vitals monitoring:', error)
=======
import React from 'react'
import { performanceConfig } from '../../performance.config'
export interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
  inp?: number;
};

  export interface ErrorReport {message: string;
  stack?: string;
  url: string;
  line?: number;
  column?: number;
  timestamp: number;
  userAgent: string;
  userId?: string;
}

export interface MonitoringConfig {enablePerformanceMonitoring: boolean;
  enableErrorReporting: boolean;
  enableUserTracking: boolean;
  sampleRate: number;
  endpoint: string;
}

class PerformanceMonitor {private config: MonitoringConfig;
  private metrics: PerformanceMetrics = {};
  private observers: PerformanceObserver[] = [];

  constructor(config: MonitoringConfig) {this.config = config;
    this.initializeMonitoring();
  }

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
    const lcpObserver = new PerformanceObserver((list) =>{
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as PerformanceEntry;
      this.metrics.lcp = lastEntry.startTime;
      this.reportMetric('lcp', lastEntry.startTime);
    });
    lcpObserver.observe({entryTypes: ['largest-contentful-paint'] });
    this.observers.push(lcpObserver);

    // FID - First Input Delay;
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        this.metrics.fid = entry.processingStart - entry.startTime;
        this.reportMetric('fid', this.metrics.fid);
      });
    });
    fidObserver.observe({entryTypes: ['first-input'] });
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
        // // // console.error('Error setting up performance observers:', error)
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
      }
    }
  }

  private monitorLongTasks(): void {
    if ('PerformanceObserver' in window && performanceConfig.monitoring.enableLongTaskDetection) {
      try {
        const longTaskObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
<<<<<<< HEAD
            // eslint-disable-next-line no-console
        console.log('Long task detected:', entry.duration)
=======
:app/utils/monitoring.ts
            }
            // // // console.warn('Long task detected:', {
            //   duration: entry.duration,
            //   startTime: entry.startTime
            // })
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
          }
        })
        longTaskObserver.observe({ entryTypes: ['longtask'] })
      } catch (error) {
        // Long task API might not be available
        // eslint-disable-next-line no-console
        console.warn('Long task monitoring not available:', error)
      }
    }
  }

  private monitorResourceTiming(): void {
    if ('PerformanceObserver' in window) {
      try {
        const resourceObserver = new PerformanceObserver((list) => {
<<<<<<< HEAD
          const entries = list.getEntries()
          entries.forEach((entry: PerformanceResourceTiming) => {
            if (entry.duration > 1000) {
              // eslint-disable-next-line no-console
              console.log('Slow resource:', entry.name, entry.duration)
=======
:app/utils/monitoring.ts
          const entries = list.getEntries();
          entries.forEach((entry: PerformanceResourceTiming) => {
            if (entry.duration > 1000) {
              }
          });
        });
        resourceObserver.observe({ entryTypes: ['resource'] });
      } catch (_error) {
        }
          const entries = list.getEntries()
          entries.forEach((entry: PerformanceEntry) => {
            const resourceEntry = entry as PerformanceResourceTiming
            if (resourceEntry.duration > 1000) {
              // // // console.warn('Slow resource detected:', {
              //   name: resourceEntry.name,
              //   duration: resourceEntry.duration,
              //   type: resourceEntry.initiatorType
              // })
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
            }
          })
        })
        resourceObserver.observe({ entryTypes: ['resource'] })
      } catch (error) {
        // eslint-disable-next-line no-console
        console.warn('Resource timing monitoring not available:', error)
      }
    }
  }

<<<<<<< HEAD
  private setupErrorHandling(): void {
    // Global error handler
=======
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

  private setupErrorHandling(): void {if (typeof window === 'undefined') return;

    // Global error handler;
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
    window.addEventListener('error', (event) => {
      this.reportError({
        message: event.message,
        stack: event.error?.stack,
        url: event.filename,
        line: event.lineno,
        column: event.colno,
        timestamp: Date.now(),
<<<<<<< HEAD
        userAgent: navigator.userAgent,
        url: window.location.href
      })
    })

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      this.logError({
=======
        userAgent: navigator.userAgent;
      });
    });

    // Unhandled promise rejection handler;
    window.addEventListener('unhandledrejection', (event) => {this.reportError({
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
        message: `Unhandled Promise Rejection: ${event.reason}`,
        stack: event.reason?.stack,
        url: window.location.href,
        timestamp: Date.now(),
        userAgent: navigator.userAgent;
      , });
    });
  }

  private reportMetric(name: string, value: number): void {
    // Sample rate
    if (Math.random() > performanceConfig.monitoring.sampleRate) {
      return
    }

    const thresholds = performanceConfig.webVitals[name as keyof typeof performanceConfig.webVitals]
    if (thresholds) {
      const rating = value <= thresholds.good ? 'good' : value <= thresholds.needsImprovement ? 'needs-improvement' : 'poor'
<<<<<<< HEAD
      // eslint-disable-next-line no-console
      console.log(`Web Vital ${name}:`, value, `(${rating})`)
    }

=======
:app/utils/monitoring.ts
      }
      // // // console.log(`[Performance] ${name}:`, {
      //   value,
      //   rating,
      //   unit: name === 'cls' ? 'score' : 'ms'
      // })
    }
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
    // Send to analytics (if configured)
    if (typeof gtag === 'function') {
      gtag('event', name, {
        value: Math.round(name === 'cls' ? value * 1000 : value),
        event_category: 'Web Vitals'
      })
    }
  }

  public logError(error: ErrorReport): void {
    this.errors.push(error)
    // Keep only last 50 errors
    if (this.errors.length > 50) {
      this.errors = this.errors.slice(-50)
    }
<<<<<<< HEAD

    // eslint-disable-next-line no-console
    console.error('Error logged:', error)

=======
:app/utils/monitoring.ts
    // // // console.error('[Error]', error)
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
    // Send to error tracking service (if configured)
    if (typeof gtag === 'function') {
      gtag('event', 'exception', {
        description: error.message,
        fatal: false
      })
    }
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  public getErrors(): ErrorReport[] {
    return [...this.errors]
  }

  public clearErrors(): void {
    this.errors = []
  }

  public measureMemory(): void {
    if ('memory' in performance && performanceConfig.monitoring.enableMemoryMonitoring) {
      const memory = (performance as Performance & { memory?: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory
      if (memory) {
<<<<<<< HEAD
        // eslint-disable-next-line no-console
        console.log('Memory usage:', {
          used: `${Math.round(memory.usedJSHeapSize / 1048576)}MB`,
          total: `${Math.round(memory.totalJSHeapSize / 1048576)}MB`,
          limit: `${Math.round(memory.jsHeapSizeLimit / 1048576)}MB`
        })
=======
:app/utils/monitoring.ts
        this.metrics.memory = {
          used: `${Math.round(memory.usedJSHeapSize / 1048576)}MB`,
          total: `${Math.round(memory.totalJSHeapSize / 1048576)}MB`,
          limit: `${Math.round(memory.jsHeapSizeLimit / 1048576)}MB`
        }
        // // // console.log('[Memory]', {
        //   used: `${Math.round(memory.usedJSHeapSize / 1048576)}MB`,
        //   total: `${Math.round(memory.totalJSHeapSize / 1048576)}MB`,
        //   limit: `${Math.round(memory.jsHeapSizeLimit / 1048576)}MB`
        // })
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
      }
    }
  }

  public measureNavigationTiming(): void {
    if ('performance' in window && 'getEntriesByType' in performance) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigation) {
<<<<<<< HEAD
        // eslint-disable-next-line no-console
=======
:app/utils/monitoring.ts
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
        console.log('Performance metrics:', {
          'DNS Lookup': `${Math.round(navigation.domainLookupEnd - navigation.domainLookupStart)}ms`,
          'TCP Connect': `${Math.round(navigation.connectEnd - navigation.connectStart)}ms`,
          'TTFB': `${Math.round(navigation.responseStart - navigation.requestStart)}ms`,
          'Download': `${Math.round(navigation.responseEnd - navigation.responseStart)}ms`,
          'DOM Interactive': `${Math.round(navigation.domInteractive - navigation.fetchStart)}ms`,
          'DOM Complete': `${Math.round(navigation.domComplete - navigation.fetchStart)}ms`,
          'Load Complete': `${Math.round(navigation.loadEventEnd - navigation.fetchStart)}ms`
        })
<<<<<<< HEAD
=======
        // // // console.log('[Navigation Timing]', {
        //   'DNS Lookup': `${Math.round(navigation.domainLookupEnd - navigation.domainLookupStart)}ms`,
        //   'TCP Connect': `${Math.round(navigation.connectEnd - navigation.connectStart)}ms`,
        //   'TTFB': `${Math.round(navigation.responseStart - navigation.requestStart)}ms`,
        //   'Download': `${Math.round(navigation.responseEnd - navigation.responseStart)}ms`,
        //   'DOM Interactive': `${Math.round(navigation.domInteractive - navigation.fetchStart)}ms`,
        //   'DOM Complete': `${Math.round(navigation.domComplete - navigation.fetchStart)}ms`,
        //   'Load Complete': `${Math.round(navigation.loadEventEnd - navigation.fetchStart)}ms`
        // })
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
      }
    }
  }
}

<<<<<<< HEAD
// Singleton instance
const monitoring = new MonitoringService()
export default monitoring
=======
// Default configuration;
const defaultConfig: MonitoringConfig = {enablePerformanceMonitoring: true,
  enableErrorReporting: true,
  enableUserTracking: false,
  sampleRate: 0.1,
  endpoint: ''
};

// Create singleton instance;
let monitor: PerformanceMonitor | null = null;

export const initializeMonitoring = (config: Partial<MonitoringConfig>= {, }): PerformanceMonitor => {
  if (monitor) {
    return monitor;
  };

  const finalConfig = { ...defaultConfig, ...config };
  monitor = new PerformanceMonitor(finalConfig);
  return monitor;
};

export const getPerformanceMetrics = (): PerformanceMetrics => {
  return monitor?.getMetrics() || {};
};

export const disconnectMonitoring = (): void =</ {
  monitor?.disconnect();
  monitor = null;
};

export default PerformanceMonitor;
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
