/**
 * Performance Monitoring Utility
 * Tracks and reports web vitals and performance metrics
 */
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { onCLS, onFCP, onLCP, onTTFB, type Metric } from 'web-vitals';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3d1d
=======
import { onCLS, onFCP, onLCP, onTTFB, type Metric } from 'web-vitals';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4606
=======
import { onCLS, onFCP, onLCP, onTTFB, type Metric } from 'web-vitals';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2e3b
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7365
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6ac6
=======
import { onCLS, onFCP, onLCP, onTTFB, type Metric } from 'web-vitals';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-895b
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2068
=======
import { onCLS, onFCP, onLCP, onTTFB, type Metric } from 'web-vitals';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b781

=======
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';
import type { Metric } from 'web-vitals';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
=======
import { onCLS, onFCP, onLCP, onTTFB } from 'web-vitals';
import type { Metric } from 'web-vitals';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
import { onCLS, onFCP, onLCP, onTTFB, type Metric } from 'web-vitals';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
=======
import { getCLS, getFID, getFCP, getLCP, getTTFB, Metric } from 'web-vitals';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
// Types
interface PerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import { onCLS, onFCP, onLCP, onTTFB } from 'web-vitals';
import type { Metric } from 'web-vitals';

// Types
interface PerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8

=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  TTFB: { good: 800, poor: 1800 },
=======
  TTFB: { good: 800, poor: 1800 }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3d1d
=======
  TTFB: { good: 800, poor: 1800 },
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4606
=======
  TTFB: { good: 800, poor: 1800 }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2e3b
=======
  TTFB: { good: 800, poor: 1800 }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-895b
=======
  TTFB: { good: 800, poor: 1800 },
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b781
=======
  TTFB: { good: 800, poor: 1800 },
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======
  TTFB: { good: 800, poor: 1800 },
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
  TTFB: { good: 800, poor: 1800 },
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
};

/**
 * Get rating based on metric value
 */
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
function getRating(
  name: string,
  value: number
): 'good' | 'needs-improvement' | 'poor' {
<<<<<<< HEAD
<<<<<<< HEAD
=======
function getRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
  const threshold = THRESHOLDS[name as keyof typeof THRESHOLDS];
  if (!threshold) return 'good';
  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
}

/**
 * Send metric to analytics and custom endpoints
 */
function sendToAnalytics(metric: Metric): void {
<<<<<<< HEAD
=======
  TTFB: { good: 800, poor: 1800 }
};

function getRating(metricName: string, value: number): 'good' | 'needs-improvement' | 'poor' {
  const thresholds = THRESHOLDS[metricName as keyof typeof THRESHOLDS];
  if (!thresholds) return 'good';
  
  if (value <= thresholds.good) return 'good';
  if (value <= thresholds.poor) return 'needs-improvement';
  return 'poor';
}

function reportMetric(metric: Metric) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
  const performanceMetric: PerformanceMetric = {
    name: metric.name,
    value: metric.value,
    rating: getRating(metric.name, metric.value),
    delta: metric.delta,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6231
    id: metric.id
<<<<<<< HEAD
<<<<<<< HEAD
=======
    id: metric.id,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4606
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2e3b
=======
    id: metric.id,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6ac6
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-895b
=======
    id: metric.id,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b781
=======
    id: metric.id,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======
    id: metric.id,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
    id: metric.id
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
  };

  // Log in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Performance Metric:', performanceMetric);
  }

  // Send to analytics
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
=======
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
      event_category: 'Web Vitals',
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b781
      value: Math.round(
        metric.name === 'CLS' ? metric.value * 1000 : metric.value
      ),
      event_label: metric.id,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      non_interaction: true
=======
      non_interaction: true,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6ac6
=======
      non_interaction: true
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2068
=======
      non_interaction: true,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
      non_interaction: true
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
    });
  }

  // Send to custom endpoint
<<<<<<< HEAD
  if (process.env['NEXT_PUBLIC_PERFORMANCE_ENDPOINT']) {
    fetch(process.env['NEXT_PUBLIC_PERFORMANCE_ENDPOINT'], {
=======
  if (process.env.NEXT_PUBLIC_PERFORMANCE_ENDPOINT) {
    fetch(process.env.NEXT_PUBLIC_PERFORMANCE_ENDPOINT, {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...performanceMetric,
        timestamp: new Date().toISOString(),
        url: window.location.href,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2068
        userAgent: navigator.userAgent
=======
        userAgent: navigator.userAgent,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6ac6
=======
        userAgent: navigator.userAgent,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
        userAgent: navigator.userAgent
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
      }),
      keepalive: true,
    }).catch(error => console.error('Performance reporting error:', error));
  }
<<<<<<< HEAD
=======
      event_label: metric.id,
      value: Math.round(metric.value),
      non_interaction: true,
    });
  }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b781
=======
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: performanceMetric.rating,
      value: Math.round(metric.value),
      non_interaction: true,
    });
  }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
}

/**
 * Initialize performance monitoring
 */
export function initPerformanceMonitoring(): void {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b781
  if (typeof window === 'undefined') return;
  try {
    // Core Web Vitals
=======
  try {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
=======
  try {
    // Core Web Vitals
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======
  if (typeof window === 'undefined') return;

  try {
    // Core Web Vitals
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
    onCLS(sendToAnalytics);
    onFCP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);
  } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
    console.error('Error initializing performance monitoring:', error);
=======
    console.error('Failed to initialize performance monitoring:', error);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======
    console.error('Error initializing performance monitoring:', error);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
  if (typeof window === 'undefined') return;

  try {
    // Core Web Vitals
    getCLS(sendToAnalytics);
    getFID(sendToAnalytics);
    getFCP(sendToAnalytics);
    getLCP(sendToAnalytics);
    getTTFB(sendToAnalytics);
  } catch (error) {
    console.error('Error initializing performance monitoring:', error);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
/**
 * Generate performance report
 */
export function generatePerformanceReport(): PerformanceReport {
  const metrics: PerformanceMetric[] = [];
  
  return {
    metrics,
    timestamp: new Date().toISOString(),
    url: typeof window !== 'undefined' ? window.location.href : '',
<<<<<<< HEAD
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : ''
  };
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-895b
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b781
}

=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2068
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
/**
 * Measure custom performance timing
 */
export function measurePerformance(name: string, startTime: number): number {
  const duration = performance.now() - startTime;

<<<<<<< HEAD
<<<<<<< HEAD
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'timing_complete', {
      name: name,
<<<<<<< HEAD
      value: Math.round(duration),
<<<<<<< HEAD
<<<<<<< HEAD
      event_category: 'Performance'
=======
      event_category: 'Performance',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6ac6
=======
      event_category: 'Performance'
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2068
=======
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'timing_complete', {
      name: name,
      value: Math.round(duration),
      event_category: 'Performance',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'timing_complete', {
      name: name,
      value: Math.round(duration),
      event_category: 'Performance'
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
    });
  }

  if (process.env.NODE_ENV === 'development') {
    console.log(`Performance: ${name} took ${duration.toFixed(2)}ms`);
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
      value: Math.round(duration)
    });
  }

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-895b
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
  return duration;
}

/**
<<<<<<< HEAD
 * Mark performance milestone
 */
export function markPerformance(name: string): void {
  if (typeof performance === 'undefined') return;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-be22
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7365
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6ac6
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2068
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-be22
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7365
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6ac6
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2068
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const timing = performance.timing;
  const navigationStart = timing.navigationStart;
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7365
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6ac6
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2068
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58

  const timing = performance.timing;
  const navigationStart = timing.navigationStart;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-be22
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7365
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6ac6
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2068
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    domContentLoaded: timing.domContentLoadedEventEnd - navigationStart
=======
    domContentLoaded: timing.domContentLoadedEventEnd - navigationStart,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6ac6
=======
    domContentLoaded: timing.domContentLoadedEventEnd - navigationStart
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2068
=======
    domContentLoaded: timing.domContentLoadedEventEnd - navigationStart,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
    domContentLoaded: timing.domContentLoadedEventEnd - navigationStart
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
  };
}

/**
 * Get resource timing metrics
 */
export function getResourceTiming(): PerformanceResourceTiming[] {
  if (typeof performance === 'undefined') return [];
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-be22
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7365
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6ac6
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2068
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
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
<<<<<<< HEAD
<<<<<<< HEAD
  if (
    typeof performance === 'undefined' ||
    !(performance as PerformanceWithMemory).memory
  ) {
    return null;
  }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const memory = (performance as PerformanceWithMemory).memory!;
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7365
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6ac6
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2068
  const memory = (performance as any).memory;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-be22
=======
  if (typeof performance === 'undefined' || !(performance as any).memory) {
    return null;
  }
  const memory = (performance as any).memory;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
  if (typeof performance === 'undefined' || !(performance as any).memory) {
    return null;
  }

  const memory = (performance as any).memory;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
  return {
    usedJSHeapSize: memory.usedJSHeapSize,
    totalJSHeapSize: memory.totalJSHeapSize,
    jsHeapSizeLimit: memory.jsHeapSizeLimit,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    usedPercentage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100
=======
    usedPercentage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6ac6
=======
    usedPercentage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2068
=======
    usedPercentage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
    usedPercentage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
  };
}

/**
 * Generate performance report
 */
export function generatePerformanceReport(): PerformanceReport | null {
  if (typeof window === 'undefined') return null;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  const navigationTiming = getNavigationTiming();
  const metrics: PerformanceMetric[] = [];
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2068

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-be22
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6ac6

  const navigationTiming = getNavigationTiming();
  const metrics: PerformanceMetric[] = [];

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7365
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6ac6
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2068
=======

  const navigationTiming = getNavigationTiming();
=======

  const navigationTiming = getNavigationTiming();
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
  const memoryUsage = getMemoryUsage();
  const slowResources = getSlowResources();
  const metrics: PerformanceMetric[] = [];

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
  // Add navigation timing metrics
  if (navigationTiming) {
    Object.entries(navigationTiming).forEach(([name, value]) => {
      metrics.push({
        name,
        value,
        rating: value < 1000 ? 'good' : value < 3000 ? 'needs-improvement' : 'poor',
        delta: 0,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2068
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
        id: `nav-${name}`
      });
    });
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-be22
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7365
=======
        id: `nav-${name}`,
      });
    });
  }

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6ac6
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2068
=======
        id: `nav-${name}`,
      });
    });
  }

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
  return {
    metrics,
    timestamp: new Date().toISOString(),
    url: window.location.href,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    userAgent: navigator.userAgent
=======
    userAgent: navigator.userAgent,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2e3b
=======
    userAgent: navigator.userAgent
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7365
=======
    userAgent: navigator.userAgent,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6ac6
=======
    userAgent: navigator.userAgent
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2068
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b781
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6231
=======
/**
 * Generate performance report
 */
export function generatePerformanceReport(): PerformanceReport {
  const metrics: PerformanceMetric[] = [];
  
  return {
    metrics,
    timestamp: new Date().toISOString(),
    url: typeof window !== 'undefined' ? window.location.href : '',
    userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : '',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
  };
}

/**
 * Check if performance monitoring is supported
 */
<<<<<<< HEAD
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

=======
    userAgent: navigator.userAgent,
  };
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
    userAgent: navigator.userAgent
  };
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
/**
 * Monitor long tasks
 */
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
=======
 * Check if performance is good
 */
export function isPerformanceGood(): boolean {
  // This would be implemented based on collected metrics
  return true;
}

/**
 * Get performance score
 */
export function getPerformanceScore(): number {
  // This would calculate a score based on collected metrics
  return 100;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-895b
}

/**
 * Monitor long tasks
 */
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6ac6
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-895b
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2068
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b781
export function monitorLongTasks(
<<<<<<< HEAD
<<<<<<< HEAD
  callback: (entries: PerformanceEntry[]) => void
): PerformanceObserver | null {
  if (typeof PerformanceObserver === 'undefined') return null;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-be22
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7365
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6ac6
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2068
=======
  callback: (entries: PerformanceEntry[]) => void,
): PerformanceObserver | null {
  if (typeof PerformanceObserver === 'undefined') return null;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
  callback: (entries: PerformanceEntry[]) => void
): PerformanceObserver | null {
  if (typeof PerformanceObserver === 'undefined') return null;

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
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
<<<<<<< HEAD
<<<<<<< HEAD
  callback: (entries: PerformanceEntry[]) => void
): PerformanceObserver | null {
  if (typeof PerformanceObserver === 'undefined') return null;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-be22
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7365
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6ac6
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2068
=======
  callback: (entries: PerformanceEntry[]) => void,
): PerformanceObserver | null {
  if (typeof PerformanceObserver === 'undefined') return null;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
  callback: (entries: PerformanceEntry[]) => void
): PerformanceObserver | null {
  if (typeof PerformanceObserver === 'undefined') return null;

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
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
<<<<<<< HEAD
 * Get connection information
 */
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export function isSlowConnection(): boolean {
  if (
    typeof navigator === 'undefined' ||
<<<<<<< HEAD
    !(navigator as NavigatorWithConnection).connection
=======
    !(navigator as any).connection
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6ac6
  ) {
    return false;
=======
export function getConnectionType(): string | null {
  if (typeof navigator === 'undefined' || !('connection' in navigator)) {
    return null;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-895b
  }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const connection = (navigator as NavigatorWithConnection).connection!;
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7365
  const connection = (navigator as any).connection;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-be22
  const slowTypes = ['slow-2g', '2g'];
  return (
    (connection.effectiveType && slowTypes.includes(connection.effectiveType)) || 
    connection.saveData === true
=======
  const connection = (navigator as any).connection;
<<<<<<< HEAD
=======
export function isSlowConnection(): boolean {
  if (typeof navigator === 'undefined' || !(navigator as any).connection) {
    return false;
  }
  const connection = (navigator as any).connection;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
export function isSlowConnection(): boolean {
  if (typeof navigator === 'undefined' || !(navigator as any).connection) {
    return false;
  }

  const connection = (navigator as any).connection;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
  const slowTypes = ['slow-2g', '2g'];
  return (
    slowTypes.includes(connection.effectiveType) || connection.saveData === true
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6ac6
=======
 * Check if connection is slow
 */
export function isSlowConnection(): boolean {
  if (
    typeof navigator === 'undefined' ||
    !(navigator as any).connection
  ) {
    return false;
  }

  const connection = (navigator as any).connection;
  const slowTypes = ['slow-2g', '2g'];
  return (
    slowTypes.includes(connection.effectiveType) || connection.saveData === true
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2068
  );
}

/**
 * Get connection type
 */
export function getConnectionType(): string {
  if (
    typeof navigator === 'undefined' ||
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    !(navigator as NavigatorWithConnection).connection
=======
    !(navigator as any).connection
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6ac6
=======
    !(navigator as any).connection
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2068
=======
    !(navigator as any).connection
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
  ) {
    return 'unknown';
  }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const connection = (navigator as NavigatorWithConnection).connection!;
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7365
  const connection = (navigator as any).connection;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-be22
  return connection.effectiveType || connection.type || 'unknown';
}

<<<<<<< HEAD
=======
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

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7365
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2068
  const connection = (navigator as any).connection;
  return connection.effectiveType || connection.type || 'unknown';
}

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6ac6
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2068
=======
    !(navigator as any).connection
  ) {
    return 'unknown';
  }
  const connection = (navigator as any).connection;
  return connection.effectiveType || connection.type || 'unknown';
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
  const connection = (navigator as any).connection;
  return connection.effectiveType || connection.type || 'unknown';
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
  getPerformanceScore,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6ac6
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2068
  monitorLongTasks,
  monitorLayoutShifts,
  isSlowConnection,
<<<<<<< HEAD
  getConnectionType,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  getPerformanceScore
<<<<<<< HEAD
};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-be22
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3d1d
=======
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4606
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2e3b
=======
  getPerformanceScore
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7365
=======
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6ac6
=======
  return connection?.effectiveType || null;
}

// Export all functions
export {
  type PerformanceMetric,
  type PerformanceReport,
  getRating,
  sendToAnalytics,
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-895b
=======
  getPerformanceScore
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2068
=======
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
  };
}
/**
 * Check if performance is within acceptable thresholds
 */
export function isPerformanceAcceptable(): boolean {
  // This would typically check against stored metrics
  // For now, return true as a placeholder
  return true;
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b781
=======
export function isPerformanceMonitoringSupported(): boolean {
  return typeof window !== 'undefined' && 'performance' in window;
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
    id: metric.id
  };

  // Send to analytics service
  console.log('Performance Metric:', performanceMetric);
  
  // You can send this to your analytics service
  // analytics.track('performance_metric', performanceMetric);
}

// Initialize performance monitoring
export function initPerformanceMonitoring() {
  onCLS(reportMetric);
  // onFID is deprecated, using onINP instead
  // onFID(reportMetric);
  onFCP(reportMetric);
  onLCP(reportMetric);
  onTTFB(reportMetric);
}

export function generatePerformanceReport(): PerformanceReport {
  return {
    metrics: [],
    timestamp: new Date().toISOString(),
    url: typeof window !== 'undefined' ? window.location.href : '',
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : ''
  };
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
=======
  getConnectionType
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
