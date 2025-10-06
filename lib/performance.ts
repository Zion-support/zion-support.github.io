/**
 * Performance Monitoring Utility
 * Tracks and reports web vitals and performance metrics
 */
<<<<<<< HEAD
<<<<<<< HEAD
import { onCLS, onFCP, onLCP, onTTFB } from 'web-vitals';
import type { Metric } from 'web-vitals';

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
=======
import { onCLS, onFCP, onLCP, onTTFB, type Metric } from 'web-vitals';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3d1d
=======
import { onCLS, onFCP, onLCP, onTTFB, type Metric } from 'web-vitals';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4606

// Types
interface PerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
}

// Extended Performance interface for memory API
interface PerformanceMemory {
  usedJSHeapSize: number;
  totalJSHeapSize: number;
  jsHeapSizeLimit: number;
}

interface PerformanceWithMemory extends Performance {
  memory?: PerformanceMemory;
}

// Network connection interface
interface NetworkConnection {
  effectiveType?: string;
  type?: string;
  saveData?: boolean;
}

interface NavigatorWithConnection extends Navigator {
  connection?: NetworkConnection;
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
<<<<<<< HEAD
  TTFB: { good: 800, poor: 1800 },
=======
  TTFB: { good: 800, poor: 1800 }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3d1d
=======
  TTFB: { good: 800, poor: 1800 },
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4606
};
/**
 * Get rating based on metric value
 */
function getRating(
  name: string,
  value: number
): 'good' | 'needs-improvement' | 'poor' {
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4606
  };
  // Log in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Performance Metric:', performanceMetric);
  }
  // Send to analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      value: Math.round(
        metric.name === 'CLS' ? metric.value * 1000 : metric.value
      ),
      event_label: metric.id,
      non_interaction: true
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
        userAgent: navigator.userAgent
      }),
      keepalive: true,
    }).catch(error => console.error('Performance reporting error:', error));
  }
}
/**
 * Initialize performance monitoring
 */
export function initPerformanceMonitoring(): void {
  if (typeof window === 'undefined') return;
  try {
    // Core Web Vitals
    onCLS(sendToAnalytics);
    onFCP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);
  } catch (error) {
    console.error('Error initializing performance monitoring:', error);
  }
}

/**
 * Measure custom performance timing
 */
export function measurePerformance(name: string, startTime: number): number {
  const duration = performance.now() - startTime;

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'timing_complete', {
      name: name,
      value: Math.round(duration),
      event_category: 'Performance'
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
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-be22
  try {
    performance.mark(name);
  } catch (error) {
    console.error('Error marking performance:', error);
  }
}

/**
 * Measure between two performance marks
 */
export function measureBetween(
  name: string,
  startMark: string,
  endMark: string
): number {
  if (typeof performance === 'undefined') return 0;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-be22
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
<<<<<<< HEAD
const timing = performance.timing;
  const navigationStart = timing.navigationStart;
=======

  const timing = performance.timing;
  const navigationStart = timing.navigationStart;

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-be22
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
    domContentLoaded: timing.domContentLoadedEventEnd - navigationStart
  };
}

/**
 * Get resource timing metrics
 */
export function getResourceTiming(): PerformanceResourceTiming[] {
  if (typeof performance === 'undefined') return [];
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-be22
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
  if (
    typeof performance === 'undefined' ||
    !(performance as PerformanceWithMemory).memory
  ) {
    return null;
  }

<<<<<<< HEAD
  const memory = (performance as PerformanceWithMemory).memory!;
=======
  const memory = (performance as any).memory;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-be22
  return {
    usedJSHeapSize: memory.usedJSHeapSize,
    totalJSHeapSize: memory.totalJSHeapSize,
    jsHeapSizeLimit: memory.jsHeapSizeLimit,
    usedPercentage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100
  };
}
/**
 * Generate performance report
 */
export function generatePerformanceReport(): PerformanceReport | null {
  if (typeof window === 'undefined') return null;

  const navigationTiming = getNavigationTiming();
  const metrics: PerformanceMetric[] = [];
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-be22
  // Add navigation timing metrics
  if (navigationTiming) {
    Object.entries(navigationTiming).forEach(([name, value]) => {
      metrics.push({
        name,
        value,
        rating: value < 1000 ? 'good' : value < 3000 ? 'needs-improvement' : 'poor',
        delta: 0,
        id: `nav-${name}`
      });
    });
  }
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-be22
  return {
    metrics,
    timestamp: new Date().toISOString(),
    url: window.location.href,
<<<<<<< HEAD
<<<<<<< HEAD
    userAgent: navigator.userAgent
=======
    userAgent: navigator.userAgent,
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-bcb8
=======
    userAgent: navigator.userAgent
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-be22
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3d1d
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4606
  };
}
/**
 * Get performance score based on metrics
 */
export function getPerformanceScore(metrics: PerformanceMetric[]): number {
  if (metrics.length === 0) return 0;
  const scores = metrics.map(metric => {
    switch (metric.rating) {
      case 'good': return 100;
      case 'needs-improvement': return 50;
      case 'poor': return 0;
      default: return 0;
    }
  });
  return Math.round(scores.reduce((sum: number, score: number) => sum + score, 0) / scores.length);
}

/**
 * Monitor long tasks
 */
export function monitorLongTasks(
  callback: (entries: PerformanceEntry[]) => void
): PerformanceObserver | null {
  if (typeof PerformanceObserver === 'undefined') return null;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-be22
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
}

/**
 * Monitor layout shifts
 */
export function monitorLayoutShifts(
  callback: (entries: PerformanceEntry[]) => void
): PerformanceObserver | null {
  if (typeof PerformanceObserver === 'undefined') return null;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-be22
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
  if (
    typeof navigator === 'undefined' ||
    !(navigator as NavigatorWithConnection).connection
  ) {
    return false;
  }

<<<<<<< HEAD
  const connection = (navigator as NavigatorWithConnection).connection!;
=======
  const connection = (navigator as any).connection;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-be22
  const slowTypes = ['slow-2g', '2g'];
  return (
    (connection.effectiveType && slowTypes.includes(connection.effectiveType)) || 
    connection.saveData === true
  );
}

/**
 * Get connection type
 */
export function getConnectionType(): string {
  if (
    typeof navigator === 'undefined' ||
    !(navigator as NavigatorWithConnection).connection
  ) {
    return 'unknown';
  }

<<<<<<< HEAD
  const connection = (navigator as NavigatorWithConnection).connection!;
=======
  const connection = (navigator as any).connection;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-be22
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
<<<<<<< HEAD
  getPerformanceScore
<<<<<<< HEAD
};
<<<<<<< HEAD
=======
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-be22
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3d1d
=======
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4606
