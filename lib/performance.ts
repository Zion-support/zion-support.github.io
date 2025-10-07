/**
 * Performance Monitoring Utility
 * Tracks and reports web vitals and performance metrics
 */
import { onCLS, onFCP, onLCP, onTTFB } from 'web-vitals';
import type { Metric } from 'web-vitals';

// Window interface for gtag is already declared in types/global.d.ts
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
  TTFB: { good: 800, poor: 1800 },
};

/**
 * Get performance rating based on thresholds
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
 * Send performance data to analytics
 */
function sendToAnalytics(metric: Metric): void {
  const performanceMetric: PerformanceMetric = {
    name: metric.name,
    value: metric.value,
    rating: getRating(metric.name, metric.value),
    delta: metric.delta,
    id: metric.id,
  };

  // Log in development
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
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
      non_interaction: true,
    });
  }

  // Send to custom endpoint
  if (process.env.NEXT_PUBLIC_PERFORMANCE_ENDPOINT) {
    fetch(process.env.NEXT_PUBLIC_PERFORMANCE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...performanceMetric,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
      }),
      keepalive: true,
    }).catch(error => {
      // eslint-disable-next-line no-console
      console.error('Performance reporting error:', error);
    });
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
    // eslint-disable-next-line no-console
    console.error('Error initializing performance monitoring:', error);
  }
}

/**
 * Generate performance report
 */
export function getPerformanceMetrics(): PerformanceMetric[] {
  if (typeof window === 'undefined') return [];
  return [];
}

/**
 * Measure performance of a custom function
 */
export function measurePerformance(name: string, startTime: number): number {
  const duration = performance.now() - startTime;

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'timing_complete', {
      name: name,
      value: Math.round(duration),
      event_category: 'Performance',
    });
  }

  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
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
    // eslint-disable-next-line no-console
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

  try {
    performance.measure(name, startMark, endMark);
    const measure = performance.getEntriesByName(name)[0] as PerformanceEntry;
    return measure.duration;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error measuring between marks:', error);
    return 0;
  }
}

/**
 * Get navigation timing metrics
 */
export function getNavigationTiming(): Record<string, number> | null {
  if (typeof window === 'undefined' || !window.performance) return null;

  const navigation = performance.getEntriesByType(
    'navigation'
  )[0] as PerformanceNavigationTiming;
  if (!navigation) return null;

  return {
    domContentLoaded:
      navigation.domContentLoadedEventEnd -
      navigation.domContentLoadedEventStart,
    loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
    domInteractive: navigation.domInteractive - navigation.fetchStart,
    firstByte: navigation.responseStart - navigation.fetchStart,
    dns: navigation.domainLookupEnd - navigation.domainLookupStart,
    tcp: navigation.connectEnd - navigation.connectStart,
    ssl: navigation.secureConnectionStart
      ? navigation.connectEnd - navigation.secureConnectionStart
      : 0,
  };
}

/**
 * Get resource timing data
 */
export function getResourceTiming(): PerformanceResourceTiming[] {
  if (typeof window === 'undefined' || !window.performance) return [];

  return performance.getEntriesByType(
    'resource'
  ) as PerformanceResourceTiming[];
}

/**
 * Get slow resources
 */
export function getSlowResources(
  threshold: number = 1000
): PerformanceResourceTiming[] {
  return getResourceTiming().filter(resource => resource.duration > threshold);
}

/**
 * Get memory usage (Chrome only)
 */
export function getMemoryUsage(): Record<string, number> | null {
  if (
    typeof window === 'undefined' ||
    !(
      window as Window & {
        performance: Performance & { memory?: PerformanceMemory };
      }
    ).performance?.memory
  )
    return null;

  const memory = (
    window as Window & {
      performance: Performance & { memory?: PerformanceMemory };
    }
  ).performance.memory;
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
export function generatePerformanceReport(): PerformanceReport {
  return {
    metrics: [],
    timestamp: new Date().toISOString(),
    url: typeof window !== 'undefined' ? window.location.href : '',
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
  };
}

/**
 * Monitor long tasks
 */
export function monitorLongTasks(
  callback: (entries: PerformanceEntry[]) => void
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
    // eslint-disable-next-line no-console
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

  try {
    const observer = new PerformanceObserver(list => {
      const entries = list.getEntries();
      callback(entries);
    });
    observer.observe({ entryTypes: ['layout-shift'] });
    return observer;
  } catch (error) {
    // eslint-disable-next-line no-console
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

  const connection = (navigator as NavigatorWithConnection).connection;
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
    !(navigator as NavigatorWithConnection).connection
  ) {
    return 'unknown';
  }

  const connection = (navigator as NavigatorWithConnection).connection;
  return connection.effectiveType || connection.type || 'unknown';
}

const performanceUtils = {
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

export default performanceUtils;
