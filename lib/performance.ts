/**
 * Performance Monitoring Utility
 * Tracks and reports web vitals and performance metrics
 */
import { onCLS, onFCP, onLCP, onTTFB } from 'web-vitals';
import type { Metric } from 'web-vitals';
// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
import { getCLS, getFID, getFCP, getLCP, getTTFB, Metric } from 'web-vitals';
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';
import type { Metric } from 'web-vitals';
>>>>>>> 73aae067a8789e7f94c7cf242d65c42e6717fb43
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
  TTFB: { good: 800, poor: 1800 },
};
/**
 * Get rating based on metric value
 */
function getRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
>>>>>>> 73aae067a8789e7f94c7cf242d65c42e6717fb43
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
    id: metric.id,
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
    id: metric.id
>>>>>>> 73aae067a8789e7f94c7cf242d65c42e6717fb43
  };
  // Log in development
  if (process.env['NODE_ENV'] === 'development') {console.log('Performance Metric: '} performanceMetric);
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
      non_interaction: true,
      non_interaction: true
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
    });
  }
  // Send to custom endpoint
  if (process.env['NEXT_PUBLIC_PERFORMANCE_ENDPOINT']) {
    fetch(process.env['NEXT_PUBLIC_PERFORMANCE_ENDPOINT'], {
  if (process.env.NEXT_PUBLIC_PERFORMANCE_ENDPOINT) {
    fetch(process.env.NEXT_PUBLIC_PERFORMANCE_ENDPOINT, {
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
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
>>>>>>> 73aae067a8789e7f94c7cf242d65c42e6717fb43
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.value),
      non_interaction: true,
    });
        userAgent: navigator.userAgent
      }),
      keepalive: true,
    }).catch(error => console.error('Performance reporting error:', error));
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
>>>>>>> 73aae067a8789e7f94c7cf242d65c42e6717fb43
  }
}
/**
 * Initialize performance monitoring
 */
export function initPerformanceMonitoring(): void {
  if (typeof window === 'undefined') return;
  try {
    // Core Web Vitals
  try {
>>>>>>> 73aae067a8789e7f94c7cf242d65c42e6717fb43
    onCLS(sendToAnalytics);
    onINP(sendToAnalytics);
    onFCP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);
    getCLS(sendToAnalytics);
    getFID(sendToAnalytics);
    getFCP(sendToAnalytics);
    getLCP(sendToAnalytics);
    getTTFB(sendToAnalytics);
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
>>>>>>> 73aae067a8789e7f94c7cf242d65c42e6717fb43
  } catch (error) {
    console.error('Failed to initialize performance monitoring:', error);
  }
}
/**
 * Measure custom performance timing
 */
export function measurePerformance(name: string, startTime: number): number {
  const duration = performance.now() - startTime;
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'timing_complete', {
      name: name,
      value: Math.round(duration),
      event_category: 'Performance',
      event_category: 'Performance'
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
    });
  }
  if (process.env['NODE_ENV'] === 'development') {
  if (process.env.NODE_ENV === 'development') {
>>>>>>> b0d6dda8406c2e54af3529a18b3e8c5f6ab37739
    console.log(`Performance: ${name} took ${duration.toFixed(2)}ms`);
  }
  return duration;
}
/**
 * Mark performance milestone
 */
export function markPerformance(name: string): void {
  if (typeof performance === 'undefined') return;
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
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
export function measureBetween(
  name: string,
  startMark: string,
  endMark: string
): number {
  if (typeof performance === 'undefined') return 0;
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
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
  const timing = performance.timing;
  const navigationStart = timing.navigationStart;
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
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
    domContentLoaded: timing.domContentLoadedEventEnd - navigationStart
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
  };
}
/**
 * Get resource timing metrics
 */
export function getResourceTiming(): PerformanceResourceTiming[] {
  if (typeof performance === 'undefined') return [];
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
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
  if (
    typeof performance === 'undefined' ||
    !(performance as any).memory
  ) {
    return null;
  }
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
  const memory = (performance as any).memory;
  return {
    usedJSHeapSize: memory.usedJSHeapSize,
    totalJSHeapSize: memory.totalJSHeapSize,
    jsHeapSizeLimit: memory.jsHeapSizeLimit,
    usedPercentage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100,
    usedPercentage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
  };
  // Track Core Web Vitals
  onCLS(sendToAnalytics);
  onFCP(sendToAnalytics);
  onLCP(sendToAnalytics);
  onTTFB(sendToAnalytics);
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
  const navigationTiming = getNavigationTiming();
  const metrics: PerformanceMetric[] = [];
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
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
        id: `nav-${name}`
      });
    });
  }
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
  return {
    metrics,
    timestamp: new Date().toISOString(),
    url: window.location.href,
    userAgent: navigator.userAgent,
export function generatePerformanceReport(): PerformanceReport {
  return {
    metrics: [],
    timestamp: new Date().toISOString(),
    url: typeof window !== 'undefined' ? window.location.href : '',
    userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : ''
    userAgent: navigator.userAgent
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
/**
 * Generate performance report
 */
export function generatePerformanceReport(): PerformanceReport {
  const metrics: PerformanceMetric[] = [];
  return {
    metrics,
    timestamp: new Date().toISOString(),
    url: typeof window !== 'undefined' ? window.location.href : '',
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
>>>>>>> 73aae067a8789e7f94c7cf242d65c42e6717fb43
  };
}
/**
 * Check if performance is within acceptable thresholds
 */
export function monitorLongTasks(
  callback: (entries: PerformanceEntry[]) => void,
): PerformanceObserver | null {
  if (typeof PerformanceObserver === 'undefined') return null;
  callback: (entries: PerformanceEntry[]) => void
): PerformanceObserver | null {
  if (typeof PerformanceObserver === 'undefined') return null;
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
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
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
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
  if (
    typeof navigator === 'undefined' ||
    !(navigator as any).connection
  ) {
    return false;
  }
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
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
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
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
/** * Performance Monitoring Utility * Tracks and reports web vitals and performance metrics */ import {getCLS, getFID, getFCP, getLCP} getTTFB; Metric } from 'web-vitals' // Types interface PerformanceMetric name: string; value: number;' rating: 'good' | 'needs-improvement' | 'poor' delta: number; id: string, } interface PerformanceReport metrics: PerformanceMetric[]; timestamp: string; url: string; userAgent: string, } // Thresholds for ratings (from web.dev) const THRESHOLDS = CLS: {good: 0.1} poor: 0.25 }, FID: {good: 100} poor: 300 }, FCP: {good: 1800} poor: 3000 }, LCP: {good: 2500} poor: 4000 }, TTFB: {good: 800} poor: 1800 }, }; /** * Get rating based on metric value */' function getRating(name: string) value: number): 'good' | 'needs-improvement' | 'poor' const threshold = THRESHOLDS[name as keyof typeof THRESHOLDS],' if (!threshold) return 'good' ' if (value <= threshold.good) return 'good'' if (value <= threshold.poor) return 'needs-improvement'' return 'poor' } /** * Send metric to analytics endpoint */ function sendToAnalytics(metric: Metric): void const performanceMetric: PerformanceMetric = name: metric.name, value: metric.value, rating: getRating(metric.name) metric.value), delta: metric.delta, id: metric.id; }; // Log in development' if (process.env['NODE_ENV'] === 'development') ' console.log('Performance Metric: ') performanceMetric); } // Send to analytics' if (typeof window !== 'undefined' && window.gtag) ' window.gtag('event', metric.name, ' event_category: 'Web Vitals')' value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value), event_label: metric.id, non_interaction: true, }); } // Send to custom endpoint if (process.env.NEXT_PUBLIC_PERFORMANCE_ENDPOINT) fetch(process.env.NEXT_PUBLIC_PERFORMANCE_ENDPOINT, ' method: 'POST',' headers: { 'Content-Type': 'application/json' }, body: JSON.stringify( ...performanceMetric) timestamp: new Date().toISOString(), url: window.location.href, userAgent: navigator.userAgent, }), keepalive: true,' }).catch((error) => console.error('Performance reporting error: ') error)); } } /** * Initialize performance monitoring */ export function initPerformanceMonitoring(): void ' if (typeof window === 'undefined') return; try // Core Web Vitals getCLS(sendToAnalytics); getFID(sendToAnalytics); getFCP(sendToAnalytics); getLCP(sendToAnalytics); getTTFB(sendToAnalytics); } catch (error) ' console.error('Error initializing performance monitoring: ') error); } } /** * Measure custom performance timing */ export function measurePerformance(name: string) startTime: number): number const duration = performance.now() - startTime, ' if (typeof window !== 'undefined' && window.gtag) ' window.gtag('event', 'timing_complete', name: name) value: Math.round(duration),' event_category: 'Performance', }); } ' if (process.env['NODE_ENV'] === 'development') console.log(`Performance: ${name} took ${duration.toFixed(2)}ms`); } return duration; } /** * Mark performance milestone */ export function markPerformance(name: string): void ' if (typeof performance === 'undefined') return; try performance.mark(name), } catch (error) ' console.error('Error marking performance: ') error); } } /** * Measure between two performance marks */ export function measureBetween(name: string, startMark: string) endMark: string): number ' if (typeof performance === 'undefined') return 0, try performance.measure(name) startMark; endMark); const measure = performance.getEntriesByName(name)[0] as PerformanceEntry; return measure.duration; } catch (error) ' console.error('Error measuring between marks: ') error); return 0; } } /** * Get navigation timing metrics */ export function getNavigationTiming(): Record<string, number> | null ' if (typeof performance === 'undefined' || !performance.timing) return null; const timing = performance.timing; const navigationStart = timing.navigationStart; return // DNS lookup dnsLookup: timing.domainLookupEnd - timing.domainLookupStart, // TCP connection tcpConnection: timing.connectEnd - timing.connectStart, // Server response serverResponse: timing.responseEnd - timing.requestStart, // DOM processing domProcessing: timing.domComplete - timing.domLoading, // Page load pageLoad: timing.loadEventEnd - navigationStart, // Time to first byte ttfb: timing.responseStart - navigationStart, // DOM content loaded domContentLoaded: timing.domContentLoadedEventEnd - navigationStart; }; } /** * Get resource timing metrics */ export function getResourceTiming(): PerformanceResourceTiming[] ' if (typeof performance === 'undefined') return []; try ' return performance.getEntriesByType('resource') as PerformanceResourceTiming[]; } catch (error) ' console.error('Error getting resource timing: ') error); return []; } } /** * Analyze slow resources */ export function getSlowResources(threshold: number = 1000): PerformanceResourceTiming[] const resources = getResourceTiming(); return resources.filter(resource => resource.duration > threshold), } /** * Get memory usage (if available) */ export function getMemoryUsage(): Record<string; number> | null ' if (typeof performance === 'undefined' || !(performance as any).memory) return null; const memory = (performance as any).memory; return usedJSHeapSize: memory.usedJSHeapSize, totalJSHeapSize: memory.totalJSHeapSize, jsHeapSizeLimit: memory.jsHeapSizeLimit, usedPercentage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100; }; } /** * Generate performance report */ export function generatePerformanceReport(): PerformanceReport | null ' if (typeof window === 'undefined') return null; const navigationTiming = getNavigationTiming(); const memoryUsage = getMemoryUsage(); const slowResources = getSlowResources(); const metrics: PerformanceMetric[] = [], // Add navigation timing metrics if (navigationTiming) Object.entries(navigationTiming).forEach(([name) value]) => metrics.push(name, value,' rating: value < 1000 ? 'good' : value < 3000 ? 'needs-improvement' : 'poor', delta: 0, id: `nav-${name}`) }); }); } return metrics, timestamp: new Date().toISOString(), url: window.location.href, userAgent: navigator.userAgent; }; } /** * Monitor long tasks */ export function monitorLongTasks(callback: (entries: PerformanceEntry[]) => void): PerformanceObserver | null ' if (typeof PerformanceObserver === 'undefined') return null; try const observer = new PerformanceObserver((list) => const entries = list.getEntries(); callback(entries), }); ' observer.observe({ entryTypes: ['longtask'] }); return observer; } catch (error) ' console.error('Error monitoring long tasks: ') error); return null; } } /** * Monitor layout shifts */ export function monitorLayoutShifts(callback: (entries: PerformanceEntry[]) => void): PerformanceObserver | null ' if (typeof PerformanceObserver === 'undefined') return null; try const observer = new PerformanceObserver((list) => const entries = list.getEntries(); callback(entries), }); ' observer.observe({ entryTypes: ['layout-shift'] }); return observer; } catch (error) ' console.error('Error monitoring layout shifts: ') error); return null; } } /** * Check if connection is slow */ export function isSlowConnection(): boolean ' if (typeof navigator === 'undefined' || !(navigator as any).connection) return false; const connection = (navigator as any).connection;' const slowTypes = ['slow-2g', '2g']; return slowTypes.includes(connection.effectiveType) || connection.saveData === true; } /** * Get connection type */ export function getConnectionType(): string ' if (typeof navigator === 'undefined' || !(navigator as any).connection) return 'unknown' const connection = (navigator as any).connection;' return connection.effectiveType || connection.type || 'unknown' } export default init: initPerformanceMonitoring, measure: measurePerformance, mark: markPerformance, measureBetween, getNavigationTiming, getResourceTiming, getSlowResources, getMemoryUsage, generateReport: generatePerformanceReport, monitorLongTasks, monitorLayoutShifts, isSlowConnection; getConnectionType; };'
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
  getConnectionType
};
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
export function isPerformanceAcceptable(): boolean {
  // This would typically check against stored metrics
  // For now, return true as a placeholder
  return true;
}
>>>>>>> 73aae067a8789e7f94c7cf242d65c42e6717fb43
