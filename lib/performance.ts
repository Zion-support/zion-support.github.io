/**
 * Performance Monitoring Utility
 * Tracks and reports web vitals and performance metrics
 */
<<<<<<< HEAD
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';
import type { Metric } from 'web-vitals';
=======
import { onCLS, onFCP, onLCP, onTTFB, type Metric } from 'web-vitals';
>>>>>>> cursor/fix-errors-and-merge-to-main-13eb

// Types
interface PerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
}

interface PerformanceReport {
  metrics: PerformanceMetric[];
  timestamp: string;
  url: string;
  userAgent: string;
}

// Thresholds for ratings (from web.dev)
const THRESHOLDS = {
  CLS: { good: 0.1, poor: 0.25 },
  FID: { good: 100, poor: 300 },
  FCP: { good: 1800, poor: 3000 },
  LCP: { good: 2500, poor: 4000 },
<<<<<<< HEAD
  TTFB: { good: 800, poor: 1800 }
=======
  TTFB: { good: 800, poor: 1800 },
>>>>>>> cursor/fix-errors-and-merge-to-main-13eb
};

/**
 * Get rating based on metric value
 */
function getRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
  const threshold = THRESHOLDS[name as keyof typeof THRESHOLDS];
  if (!threshold) return 'good';
  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
}

/**
 * Send metric to analytics endpoint
 */
function sendToAnalytics(metric: Metric): void {
  const performanceMetric: PerformanceMetric = {
    name: metric.name,
    value: metric.value,
    rating: getRating(metric.name, metric.value),
    delta: metric.delta,
<<<<<<< HEAD
    id: metric.id
=======
    id: metric.id,
>>>>>>> cursor/fix-errors-and-merge-to-main-13eb
  };

  // Log in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Performance Metric:', performanceMetric);
  }

  // Send to analytics
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
      event_category: 'Web Vitals',
<<<<<<< HEAD
      event_label: performanceMetric.rating,
      value: Math.round(metric.value),
      non_interaction: true
    });
  }
=======
      value: Math.round(
        metric.name === 'CLS' ? metric.value * 1000 : metric.value
      ),
      event_label: metric.id,
      non_interaction: true,
    });
  }

  // Send to custom endpoint
  if (process.env['NEXT_PUBLIC_PERFORMANCE_ENDPOINT']) {
    fetch(process.env['NEXT_PUBLIC_PERFORMANCE_ENDPOINT'], {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...performanceMetric,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
      }),
      keepalive: true,
    }).catch(error => console.error('Performance reporting error:', error));
  }
>>>>>>> cursor/fix-errors-and-merge-to-main-13eb
}

/**
 * Initialize performance monitoring
 */
export function initPerformanceMonitoring(): void {
<<<<<<< HEAD
  try {
    onCLS(sendToAnalytics);
    onINP(sendToAnalytics);
=======
  if (typeof window === 'undefined') return;

  try {
    // Core Web Vitals
    onCLS(sendToAnalytics);
>>>>>>> cursor/fix-errors-and-merge-to-main-13eb
    onFCP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);
  } catch (error) {
<<<<<<< HEAD
    console.error('Failed to initialize performance monitoring:', error);
  }
}

/**
 * Generate performance report
 */
export function generatePerformanceReport(): PerformanceReport {
  const metrics: PerformanceMetric[] = [];
  
  return {
    metrics,
    timestamp: new Date().toISOString(),
    url: typeof window !== 'undefined' ? window.location.href : '',
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : ''
=======
    console.error('Error initializing performance monitoring:', error);
  }
}

/**
 * Measure custom performance timing
 */
export function measurePerformance(name: string, startTime: number): number {
  const duration = performance.now() - startTime;

  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'timing_complete', {
      name: name,
      value: Math.round(duration),
      event_category: 'Performance',
    });
  }

  if (process.env.NODE_ENV === 'development') {
    console.log(`Performance: ${name} took ${duration.toFixed(2)}ms`);
  }

  return duration;
}

/**
 * Mark performance milestone
 */
export function markPerformance(name: string): void {
  if (typeof performance === 'undefined') return;

  try {
    performance.mark(name);
  } catch (error) {
    console.error('Error marking performance:', error);
  }
}

/**
 * Measure between two performance marks
 */
export function measureBetween(name: string, startMark: string, endMark: string): number {
  if (typeof performance === 'undefined') return 0;

  try {
    performance.measure(name, startMark, endMark);
    const measure = performance.getEntriesByName(name)[0] as PerformanceEntry;
    return measure.duration;
  } catch (error) {
    console.error('Error measuring between marks:', error);
    return 0;
  }
}

/**
 * Get navigation timing metrics
 */
export function getNavigationTiming(): Record<string, number> | null {
  if (typeof performance === 'undefined' || !performance.timing) return null;

  const timing = performance.timing;
  const navigationStart = timing.navigationStart;

  return {
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
export function getResourceTiming(): PerformanceResourceTiming[] {
  if (typeof performance === 'undefined') return [];

  try {
    return performance.getEntriesByType('resource') as PerformanceResourceTiming[];
  } catch (error) {
    console.error('Error getting resource timing:', error);
    return [];
  }
}

/**
 * Analyze slow resources
 */
export function getSlowResources(threshold: number = 1000): PerformanceResourceTiming[] {
  const resources = getResourceTiming();
  return resources.filter(resource => resource.duration > threshold);
}

/**
 * Get memory usage (if available)
 */
export function getMemoryUsage(): Record<string, number> | null {
  if (typeof performance === 'undefined' || !(performance as any).memory) {
    return null;
  }

  const memory = (performance as any).memory;
  return {
    usedJSHeapSize: memory.usedJSHeapSize,
    totalJSHeapSize: memory.totalJSHeapSize,
    jsHeapSizeLimit: memory.jsHeapSizeLimit,
    usedPercentage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100,
  };
}

/**
 * Generate performance report
 */
export function generatePerformanceReport(): PerformanceReport | null {
  if (typeof window === 'undefined') return null;

  const navigationTiming = getNavigationTiming();
  const memoryUsage = getMemoryUsage();
  const slowResources = getSlowResources();

  const metrics: PerformanceMetric[] = [];

  // Add navigation timing metrics
  if (navigationTiming) {
    Object.entries(navigationTiming).forEach(([name, value]) => {
      metrics.push({
        name,
        value,
        rating: value < 1000 ? 'good' : value < 3000 ? 'needs-improvement' : 'poor',
        delta: 0,
        id: `nav-${name}`,
      });
    });
  }

  return {
    metrics,
    timestamp: new Date().toISOString(),
    url: window.location.href,
    userAgent: navigator.userAgent,
>>>>>>> cursor/fix-errors-and-merge-to-main-13eb
  };
}

/**
 * Check if performance is good
 */
<<<<<<< HEAD
export function isPerformanceGood(): boolean {
  // This would be implemented based on collected metrics
  return true;
=======
export function monitorLongTasks(
  callback: (entries: PerformanceEntry[]) => void,
): PerformanceObserver | null {
  if (typeof PerformanceObserver === 'undefined') return null;

  try {
    const observer = new PerformanceObserver(list => {
      const entries = list.getEntries();
      callback(entries);
    });
    observer.observe({ entryTypes: ['longtask'] });
    return observer;
  } catch (error) {
    console.error('Error monitoring long tasks:', error);
    return null;
  }
>>>>>>> cursor/fix-errors-and-merge-to-main-13eb
}

/**
 * Get performance score
 */
<<<<<<< HEAD
export function getPerformanceScore(): number {
  // This would calculate a score based on collected metrics
  return 100;
}
=======
export function monitorLayoutShifts(
  callback: (entries: PerformanceEntry[]) => void,
): PerformanceObserver | null {
  if (typeof PerformanceObserver === 'undefined') return null;

  try {
    const observer = new PerformanceObserver(list => {
      const entries = list.getEntries();
      callback(entries);
    });
    observer.observe({ entryTypes: ['layout-shift'] });
    return observer;
  } catch (error) {
    console.error('Error monitoring layout shifts:', error);
    return null;
  }
}

/**
 * Check if connection is slow
 */
export function isSlowConnection(): boolean {
  if (typeof navigator === 'undefined' || !(navigator as any).connection) {
    return false;
  }

  const connection = (navigator as any).connection;
  const slowTypes = ['slow-2g', '2g'];
  return (
    slowTypes.includes(connection.effectiveType) || connection.saveData === true
  );
}

/**
 * Get connection type
 */
export function getConnectionType(): string {
  if (
    typeof navigator === 'undefined' ||
    !(navigator as any).connection
  ) {
    return 'unknown';
  }

  const connection = (navigator as any).connection;
  return connection.effectiveType || connection.type || 'unknown';
}

export default {
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
>>>>>>> cursor/fix-errors-and-merge-to-main-13eb
