/**
 * Performance Monitoring Utility
 * Tracks and reports web vitals and performance metrics
 */
import { onCLS, onFCP, onLCP, onTTFB } from 'web-vitals';
import type { Metric } from 'web-vitals';

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
import { onCLS, onFCP, onLCP, onTTFB, type Metric } from 'web-vitals';
import { onCLS, onFCP, onLCP, onTTFB, type Metric } from 'web-vitals';
import { onCLS, onFCP, onLCP, onTTFB, type Metric } from 'web-vitals';

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
  TTFB: { good: 800, poor: 1800 }
  TTFB: { good: 800, poor: 1800 }
  TTFB: { good: 800, poor: 1800 },
  TTFB: { good: 800, poor: 1800 },
  TTFB: { good: 800, poor: 1800 },
  TTFB: { good: 800, poor: 1800 },
  TTFB: { good: 800, poor: 1800 },
  TTFB: { good: 800, poor: 1800 },
  TTFB: { good: 800, poor: 1800 },
  TTFB: { good: 800, poor: 1800 },
  TTFB: { good: 800, poor: 1800 },
  TTFB: { good: 800, poor: 1800 },
  TTFB: { good: 800, poor: 1800 },
  TTFB: { good: 800, poor: 1800 },
};

/**
 * Get performance rating based on thresholds
 */
function getRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
function getRating(
  name: string,
  value: number
): 'good' | 'needs-improvement' | 'poor' {
function getRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
function getRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
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
    id: metric.id
    id: metric.id,
    id: metric.id,
    id: metric.id,
    id: metric.id,
    id: metric.id
    id: metric.id
    id: metric.id
    id: metric.id
    id: metric.id
    id: metric.id,
    id: metric.id,
    id: metric.id
    id: metric.id,
    id: metric.id,
  };

  // Log in development
    console.log('Performance Metric:', performanceMetric);
  }

    id: metric.id,
  };

  // Log in development
  if (process.env['NODE_ENV'] === 'development') {
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
      non_interaction: true
      non_interaction: true
      non_interaction: true
      non_interaction: true
      non_interaction: true
      non_interaction: true,
      non_interaction: true,
    });
  }

  // Send to custom endpoint
  if (process.env.NEXT_PUBLIC_PERFORMANCE_ENDPOINT) {
    fetch(process.env.NEXT_PUBLIC_PERFORMANCE_ENDPOINT, {
  if (process.env.NEXT_PUBLIC_PERFORMANCE_ENDPOINT) {
    fetch(process.env.NEXT_PUBLIC_PERFORMANCE_ENDPOINT, {
  if (process.env['NEXT_PUBLIC_PERFORMANCE_ENDPOINT']) {
    fetch(process.env['NEXT_PUBLIC_PERFORMANCE_ENDPOINT'], {
  if (process.env['NEXT_PUBLIC_PERFORMANCE_ENDPOINT']) {
    fetch(process.env['NEXT_PUBLIC_PERFORMANCE_ENDPOINT'], {
  if (process.env.NEXT_PUBLIC_PERFORMANCE_ENDPOINT) {
    fetch(process.env.NEXT_PUBLIC_PERFORMANCE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...performanceMetric,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        userAgent: navigator.userAgent
        userAgent: navigator.userAgent
        userAgent: navigator.userAgent
        userAgent: navigator.userAgent
      }),
      keepalive: true,
        userAgent: navigator.userAgent
      }),
      keepalive: true
        userAgent: navigator.userAgent,
      }),
      keepalive: true,
    }).catch(error => console.error('Performance reporting error:', error));
  }
    });
  }
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: performanceMetric.rating,
      value: Math.round(metric.value),
      non_interaction: true,
    });
  }
  // Send to analytics
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.value),
      non_interaction: true,
    });
  }
  // Send to analytics
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
    });
  }
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
  try {
    // Core Web Vitals
  if (typeof window === 'undefined') return;

  try {
    // Core Web Vitals
    onCLS(sendToAnalytics);
    onFCP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);
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
    onCLS(sendToAnalytics);
    onINP(sendToAnalytics);
    onFCP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);
  } catch (error) {
    console.error('Error initializing performance monitoring:', error);
  } catch (error) {
    console.error('Error initializing performance monitoring:', error);
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
}


  if (typeof window === 'undefined') return;

  // Track Core Web Vitals
  getCLS(sendToAnalytics);
  getFID(sendToAnalytics);
  getFCP(sendToAnalytics);
  getLCP(sendToAnalytics);
  getTTFB(sendToAnalytics);
}

/**
 * Get current performance report
 */
      event_category: 'Performance'
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'timing_complete', {
      name: name,
      value: Math.round(duration),
      event_category: 'Performance',
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'timing_complete', {
      name: name,
      value: Math.round(duration),
      event_category: 'Performance'
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'timing_complete', {
      name: name,
      value: Math.round(duration),
      event_category: 'Performance'
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'timing_complete', {
      name: name,
      value: Math.round(duration),
      event_category: 'Performance'
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'timing_complete', {
      name: name,
      value: Math.round(duration),
      event_category: 'Performance'
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'timing_complete', {
      name: name,
      value: Math.round(duration),
      event_category: 'Performance'
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'timing_complete', {
      name: name,
      value: Math.round(duration),
      event_category: 'Performance',
    });
  }

  if (process.env['NODE_ENV'] === 'development') {
    console.log(`Performance: ${name} took ${duration.toFixed(2)}ms`);
  }





  // Monitor Core Web Vitals
  onCLS(sendToAnalytics);
  onFCP(sendToAnalytics);
  onLCP(sendToAnalytics);
  onTTFB(sendToAnalytics);

  // Monitor custom metrics
  if (typeof window !== 'undefined') {
    // Monitor long tasks
    monitorLongTasks();
    
    // Monitor layout shifts
    monitorLayoutShifts();

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

  if (process.env['NODE_ENV'] === 'development') {
     
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






export function measureBetween(name: string, startMark: string, endMark: string): number {
  if (typeof performance === 'undefined') return 0;

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
    domContentLoaded: timing.domContentLoadedEventEnd - navigationStart
    domContentLoaded: timing.domContentLoadedEventEnd - navigationStart,
    domContentLoaded: timing.domContentLoadedEventEnd - navigationStart
    domContentLoaded: timing.domContentLoadedEventEnd - navigationStart
    domContentLoaded: timing.domContentLoadedEventEnd - navigationStart
    domContentLoaded: timing.domContentLoadedEventEnd - navigationStart
 * Measure between two marks
 */
export function measureBetween(name: string, startMark: string, endMark: string): number {
  if (typeof performance !== 'undefined' && performance.measure) {
    try {
      performance.measure(name, startMark, endMark);
      const entries = performance.getEntriesByName(name, 'measure');
      return entries.length > 0 ? entries[0]?.duration || 0 : 0;
    } catch (error) {
      console.warn('Performance measure failed:', error);
      return 0;
    }
  }
  return 0;
}

/**
 * Get navigation timing data
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
    !(performance as any).memory
  ) {
    return null;
  }

  const memory = (performance as any).memory;
  if (typeof performance === 'undefined' || !(performance as any).memory) {
    return null;
  }
  const memory = (performance as any).memory;
  if (typeof performance === 'undefined' || !(performance as any).memory) {
    return null;
  }

  const memory = (performance as any).memory;
  const memory = (performance as Record<string, unknown>).memory as Record<string, number>;
  if (typeof performance === 'undefined' || !(performance as any).memory) {
    return null;
  }

  const memory = (performance as any).memory;
  if (typeof performance === 'undefined' || !(performance as any).memory) {
    return null;
  }

  const memory = (performance as any).memory;
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
    usedPercentage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100
    usedPercentage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100
    usedPercentage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100
    usedPercentage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100
    usedPercentage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100
    usedPercentage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100,
    usedPercentage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100,
  };
}

/**
 * Generate performance report
 */

  const navigationTiming = getNavigationTiming();
  const metrics: PerformanceMetric[] = [];


  const navigationTiming = getNavigationTiming();

  const navigationTiming = getNavigationTiming();
  const memoryUsage = getMemoryUsage();
  const slowResources = getSlowResources();
  const metrics: PerformanceMetric[] = [];


  const navigationTiming = getNavigationTiming();
  // const memoryUsage = getMemoryUsage();
  // const slowResources = getSlowResources();

  const metrics: PerformanceMetric[] = [];

  const navigationTiming = getNavigationTiming();

  const navigationTiming = getNavigationTiming();

  const navigationTiming = getNavigationTiming();
export function generatePerformanceReport(): PerformanceReport | null {
  if (typeof window === 'undefined') return null;

  const navigationTiming = getNavigationTiming();
  const memoryUsage = getMemoryUsage();
  const slowResources = getSlowResources();

  const metrics: PerformanceMetric[] = [];

  // Add navigation timing metrics
  
  const metrics: PerformanceMetric[] = [];
  const navigationTiming = getNavigationTiming();
  
  if (navigationTiming) {
    Object.entries(navigationTiming).forEach(([name, value]) => {
      metrics.push({
        name: `navigation.${name}`,
        value,
        id: `nav-${name}`
      });
    });
  }
        id: `nav-${name}`,
      });
    });
  }

        id: `nav-${name}`,
      });
    });
  }





        rating: getRating(name, value),
        delta: value,
        id: `nav-${name}-${Date.now()}`
      });
    });
  }
  

        id: `nav-${name}`,
      });
    });
  }

  return {
    metrics,
    timestamp: new Date().toISOString(),
    url: window.location.href,
    userAgent: navigator.userAgent
    userAgent: navigator.userAgent
    userAgent: navigator.userAgent,
    userAgent: navigator.userAgent
/**
 * Generate performance report
 */
export function generatePerformanceReport(): PerformanceReport {
  const metrics: PerformanceMetric[] = [];
  return {
    metrics,
    timestamp: new Date().toISOString(),
    url: typeof window !== 'undefined' ? window.location.href : '',
    userAgent: navigator.userAgent
    userAgent: navigator.userAgent
export function generatePerformanceReport(): PerformanceReport {
  return {
    metrics: [],
    timestamp: new Date().toISOString(),
    url: typeof window !== 'undefined' ? window.location.href : '',
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
  };
}

/**
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
    userAgent: navigator.userAgent
  };
}

    userAgent: navigator.userAgent
  };
}

    userAgent: navigator.userAgent
  };
}

/**
 * Monitor long tasks
 */
}

/**
 * Monitor long tasks
 */
export function monitorLongTasks(


  callback: (entries: PerformanceEntry[]) => void,
): PerformanceObserver | null {
  if (typeof PerformanceObserver === 'undefined') return null;
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
    console.error('Error monitoring long tasks:', error);
    return null;
  }
}

/**
 * Monitor layout shifts
 */
export function monitorLayoutShifts(


  callback: (entries: PerformanceEntry[]) => void,
): PerformanceObserver | null {
  if (typeof PerformanceObserver === 'undefined') return null;
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
    console.error('Error monitoring layout shifts:', error);
    return null;
  }
}

/**
  ) {
    return false;
export function getConnectionType(): string | null {
  if (typeof navigator === 'undefined' || !('connection' in navigator)) {
    return null;
  }

  const connection = (navigator as any).connection;
  const slowTypes = ['slow-2g', '2g'];
  return (
    (connection.effectiveType && slowTypes.includes(connection.effectiveType)) || 
    connection.saveData === true
  const connection = (navigator as any).connection;
export function isSlowConnection(): boolean {
  if (typeof navigator === 'undefined' || !(navigator as any).connection) {
    return false;
  }

  const connection = (navigator as any).connection;
export function isSlowConnection(): boolean {
  if (typeof navigator === 'undefined' || !(navigator as any).connection) {
    return false;
  }

  const connection = (navigator as any).connection;
export function isSlowConnection(): boolean {
  if (typeof navigator === 'undefined' || !(navigator as any).connection) {
    return false;
  }

  const connection = (navigator as any).connection;
  const slowTypes = ['slow-2g', '2g'];
  return (
    slowTypes.includes(connection.effectiveType) || connection.saveData === true
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
export function isSlowConnection(): boolean {
  if (typeof navigator === 'undefined' ||
      !(navigator as Record<string, unknown>).connection
  ) {
    return false;
  }

  const connection = (navigator as Record<string, unknown>).connection as Record<string, unknown>;
  const slowTypes = ['slow-2g', '2g'];
  return (
    slowTypes.includes(connection.effectiveType as string) || 
    connection.saveData === true
  );
}

/**
 * Get connection type
 */
export function getConnectionType(): string {
  if (
    typeof navigator === 'undefined' ||
    !(navigator as any).connection
    !(navigator as any).connection
    !(navigator as Record<string, unknown>).connection
    !(navigator as any).connection
    !(navigator as any).connection
  ) {
    return 'unknown';
  }

  const connection = (navigator as any).connection;
  return connection.effectiveType || connection.type || 'unknown';
}

  const connection = (navigator as any).connection;
  return connection.effectiveType || connection.type || 'unknown';
}

    !(navigator as any).connection
  ) {
    return 'unknown';
  }
  const connection = (navigator as any).connection;
  return connection.effectiveType || connection.type || 'unknown';
}

  const connection = (navigator as any).connection;
  return connection.effectiveType || connection.type || 'unknown';
}

  const connection = (navigator as Record<string, unknown>).connection as Record<string, unknown>;
  return (connection.effectiveType as string) || (connection.type as string) || 'unknown';
}

  const connection = (navigator as any).connection;
  return connection.effectiveType || connection.type || 'unknown';
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
};
  getPerformanceScore
};
};
  return connection?.effectiveType || null;
}

// Export all functions
export {
  type PerformanceMetric,
  type PerformanceReport,
  getRating,
  sendToAnalytics,
};
  getPerformanceScore
};
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
  };
}
/**
 * Check if performance is within acceptable thresholds
 */
 * Check if performance is within acceptable limits
 */
export function isPerformanceAcceptable(): boolean {
  // This would typically check against stored metrics
  // For now, return true as a placeholder
  return true;
export function isPerformanceMonitoringSupported(): boolean {
  return typeof window !== 'undefined' && 'performance' in window;
}
};
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
  getConnectionType
};
  getConnectionType
};
  getConnectionType
};
  getConnectionType
};
}
  getConnectionType
};
 * Performance monitoring hook for React components
 */
export function usePerformanceMonitoring() {
  if (typeof window === 'undefined') return;

  // Initialize monitoring on mount
  initPerformanceMonitoring();
}
  getConnectionType,
};
}
  getConnectionType,
};

export default performanceUtils;
