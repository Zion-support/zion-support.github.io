/**
 * Performance Monitoring Utility
 * Tracks and reports web vitals and performance metrics
 */

import { getCLS, getFID, getFCP, getLCP, getTTFB, Metric } from 'web-vitals';

// Types
interface PerformanceMetric {/* content */}
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
}

interface PerformanceReport {/* content */}
  metrics: PerformanceMetric[];
  timestamp: string;
  url: string;
  userAgent: string;
}

// Thresholds for ratings (from web.dev)
const THRESHOLDS = {/* content */}
  CLS: { good: 0.1, poor: 0.25 },
  FID: { good: 100, poor: 300 },
  FCP: { good: 1800, poor: 3000 },
  LCP: { good: 2500, poor: 4000 },
  TTFB: { good: 800, poor: 1800 },
};

/**
 * Get rating based on metric value
 */
function getRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {/* content */}
  const threshold = THRESHOLDS[name as keyof typeof THRESHOLDS];
  if (!threshold) return 'good';
  
  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
}

/**
 * Send metric to analytics endpoint
 */
function sendToAnalytics(metric: Metric): void {/* content */}
  const performanceMetric: PerformanceMetric = {/* content */}
    name: metric.name,
    value: metric.value,
    rating: getRating(metric.name, metric.value),
    delta: metric.delta,
    id: metric.id,
  };

  // Log in development
  if (process.env.NODE_ENV === 'development') {/* content */}
    console.log('Performance Metric:', performanceMetric);
  }

  // Send to analytics
  if (typeof window !== 'undefined' && window.gtag) {/* content */}
    window.gtag('event', metric.name, {/* content */}
      event_category: 'Web Vitals',
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_label: metric.id,
      non_interaction: true,
    });
  }

  // Send to custom endpoint
  if (process.env.NEXT_PUBLIC_PERFORMANCE_ENDPOINT) {/* content */}
    fetch(process.env.NEXT_PUBLIC_PERFORMANCE_ENDPOINT, {/* content */}
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({/* content */}
        ...performanceMetric,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
      }),
      keepalive: true,
    }).catch((error) => console.error('Performance reporting error:', error));
  }
}

/**
 * Initialize performance monitoring
 */
export function initPerformanceMonitoring(): void {/* content */}
  if (typeof window === 'undefined') return;

  try {/* content */}
    // Core Web Vitals
    getCLS(sendToAnalytics);
    getFID(sendToAnalytics);
    getFCP(sendToAnalytics);
    getLCP(sendToAnalytics);
    getTTFB(sendToAnalytics);
  } catch (error) {/* content */}
    console.error('Error initializing performance monitoring:', error);
  }
}

/**
 * Measure custom performance timing
 */
export function measurePerformance(name: string, startTime: number): number {/* content */}
  const duration = performance.now() - startTime;
  
  if (typeof window !== 'undefined' && window.gtag) {/* content */}
    window.gtag('event', 'timing_complete', {/* content */}
      name: name,
      value: Math.round(duration),
      event_category: 'Performance',
    });
  }

  if (process.env.NODE_ENV === 'development') {/* content */}
    console.log(`Performance: ${name} took ${duration.toFixed(2)}ms`);
  }

  return duration;
}

/**
 * Mark performance milestone
 */
export function markPerformance(name: string): void {/* content */}
  if (typeof performance === 'undefined') return;
  
  try {/* content */}
    performance.mark(name);
  } catch (error) {/* content */}
    console.error('Error marking performance:', error);
  }
}

/**
 * Measure between two performance marks
 */
export function measureBetween(name: string, startMark: string, endMark: string): number {/* content */}
  if (typeof performance === 'undefined') return 0;

  try {/* content */}
    performance.measure(name, startMark, endMark);
    const measure = performance.getEntriesByName(name)[0] as PerformanceEntry;
    return measure.duration;
  } catch (error) {/* content */}
    console.error('Error measuring between marks:', error);
    return 0;
  }
}

/**
 * Get navigation timing metrics
 */
export function getNavigationTiming(): Record<string, number> | null {/* content */}
  if (typeof performance === 'undefined' || !performance.timing) return null;

  const timing = performance.timing;
  const navigationStart = timing.navigationStart;

  return {/* content */}
    // DNS lookup
    dnsLookup: timing.domainLookupEnd - timing.domainLookupStart,
    // TCP connection
    tcpConnection: timing.connectEnd - timing.connectStart,
    // Server response
    serverResponse: timing.responseEnd - timing.requestStart,
    // DOM processing
    domProcessing: timing.domComplete - timing.domLoading,
    // Page load
    pageLoad: timing.loadEventEnd - navigationStart,
    // Time to first byte
    ttfb: timing.responseStart - navigationStart,
    // DOM content loaded
    domContentLoaded: timing.domContentLoadedEventEnd - navigationStart,
  };
}

/**
 * Get resource timing metrics
 */
export function getResourceTiming(): PerformanceResourceTiming[] {/* content */}
  if (typeof performance === 'undefined') return [];

  try {/* content */}
    return performance.getEntriesByType('resource') as PerformanceResourceTiming[];
  } catch (error) {/* content */}
    console.error('Error getting resource timing:', error);
    return [];
  }
}

/**
 * Analyze slow resources
 */
export function getSlowResources(threshold: number = 1000): PerformanceResourceTiming[] {/* content */}
  const resources = getResourceTiming();
  return resources.filter(resource => resource.duration > threshold);
}

/**
 * Get memory usage (if available)
 */
export function getMemoryUsage(): Record<string, number> | null {/* content */}
  if (typeof performance === 'undefined' || !(performance as any).memory) return null;

  const memory = (performance as any).memory;
  return {/* content */}
    usedJSHeapSize: memory.usedJSHeapSize,
    totalJSHeapSize: memory.totalJSHeapSize,
    jsHeapSizeLimit: memory.jsHeapSizeLimit,
    usedPercentage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100,
  };
}

/**
 * Generate performance report
 */
export function generatePerformanceReport(): PerformanceReport | null {/* content */}
  if (typeof window === 'undefined') return null;

  const navigationTiming = getNavigationTiming();
  const memoryUsage = getMemoryUsage();
  const slowResources = getSlowResources();

  const metrics: PerformanceMetric[] = [];

  // Add navigation timing metrics
  if (navigationTiming) {/* content */}
    Object.entries(navigationTiming).forEach(([name, value]) => {/* content */}
      metrics.push({/* content */}
        name,
        value,
        rating: value < 1000 ? 'good' : value < 3000 ? 'needs-improvement' : 'poor',
        delta: 0,
        id: `nav-${name}`,
      });
    });
  }

  return {/* content */}
    metrics,
    timestamp: new Date().toISOString(),
    url: window.location.href,
    userAgent: navigator.userAgent,
  };
}

/**
 * Monitor long tasks
 */
export function monitorLongTasks(callback: (entries: PerformanceEntry[]) => void): PerformanceObserver | null {/* content */}
  if (typeof PerformanceObserver === 'undefined') return null;

  try {/* content */}
    const observer = new PerformanceObserver((list) => {/* content */}
      const entries = list.getEntries();
      callback(entries);
    });

    observer.observe({ entryTypes: ['longtask'] });
    return observer;
  } catch (error) {/* content */}
    console.error('Error monitoring long tasks:', error);
    return null;
  }
}

/**
 * Monitor layout shifts
 */
export function monitorLayoutShifts(callback: (entries: PerformanceEntry[]) => void): PerformanceObserver | null {/* content */}
  if (typeof PerformanceObserver === 'undefined') return null;

  try {/* content */}
    const observer = new PerformanceObserver((list) => {/* content */}
      const entries = list.getEntries();
      callback(entries);
    });

    observer.observe({ entryTypes: ['layout-shift'] });
    return observer;
  } catch (error) {/* content */}
    console.error('Error monitoring layout shifts:', error);
    return null;
  }
}

/**
 * Check if connection is slow
 */
export function isSlowConnection(): boolean {/* content */}
  if (typeof navigator === 'undefined' || !(navigator as any).connection) return false;

  const connection = (navigator as any).connection;
  const slowTypes = ['slow-2g', '2g'];
  
  return slowTypes.includes(connection.effectiveType) || connection.saveData === true;
}

/**
 * Get connection type
 */
export function getConnectionType(): string {/* content */}
  if (typeof navigator === 'undefined' || !(navigator as any).connection) return 'unknown';

  const connection = (navigator as any).connection;
  return connection.effectiveType || connection.type || 'unknown';
}

export default {/* content */}
  init: initPerformanceMonitoring,
  measure: measurePerformance,
  mark: markPerformance,
  measureBetween,
  getNavigationTiming,
  getResourceTiming,
  getSlowResources,
  getMemoryUsage,
  generateReport: generatePerformanceReport,
  monitorLongTasks,
  monitorLayoutShifts,
  isSlowConnection,
  getConnectionType,
};