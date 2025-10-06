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
    id: metric.id
  };

  // Log in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Performance Metric:', performanceMetric);
  }

  // Send to Google Analytics if available
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'web_vitals', {
      event_category: 'Performance',
      event_label: metric.name,
      value: Math.round(metric.value),
      custom_map: {
        metric_rating: performanceMetric.rating,
        metric_delta: performanceMetric.delta,
        metric_id: performanceMetric.id,
      },
    });
  }
}

/**
 * Initialize performance monitoring
 */
export function initPerformanceMonitoring(): void {
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
  }
}

/**
 * Measure performance of a custom function
 */
export function measurePerformance(name: string, startTime: number): number {
  const endTime = performance.now();
  const duration = endTime - startTime;
  
  console.log(`${name} took ${duration.toFixed(2)}ms`);
  
  return duration;
}

/**
 * Mark a performance point
 */
export function markPerformance(name: string): void {
  if (typeof performance !== 'undefined' && performance.mark) {
    performance.mark(name);
  }
}

/**
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
  
  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  if (!navigation) return null;

  return {
    domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
    loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
    domInteractive: navigation.domInteractive - navigation.fetchStart,
    firstByte: navigation.responseStart - navigation.fetchStart,
    dns: navigation.domainLookupEnd - navigation.domainLookupStart,
    tcp: navigation.connectEnd - navigation.connectStart,
    ssl: navigation.secureConnectionStart ? navigation.connectEnd - navigation.secureConnectionStart : 0,
  };
}

/**
 * Get resource timing data
 */
export function getResourceTiming(): PerformanceResourceTiming[] {
  if (typeof window === 'undefined' || !window.performance) return [];
  
  return performance.getEntriesByType('resource') as PerformanceResourceTiming[];
}

/**
 * Get slow resources
 */
export function getSlowResources(threshold: number = 1000): PerformanceResourceTiming[] {
  return getResourceTiming().filter(resource => resource.duration > threshold);
}

/**
 * Get memory usage (Chrome only)
 */
export function getMemoryUsage(): Record<string, number> | null {
  if (typeof window === 'undefined' || !(window as any).performance?.memory) return null;
  
  const memory = (window as any).performance.memory;
  return {
    usedJSHeapSize: memory.usedJSHeapSize,
    totalJSHeapSize: memory.totalJSHeapSize,
    jsHeapSizeLimit: memory.jsHeapSizeLimit,
  };
}

/**
 * Generate performance report
 */
export function generatePerformanceReport(): PerformanceReport | null {
  if (typeof window === 'undefined') return null;
  
  const metrics: PerformanceMetric[] = [];
  const navigationTiming = getNavigationTiming();
  
  if (navigationTiming) {
    // Add navigation timing metrics
    Object.entries(navigationTiming).forEach(([name, value]) => {
      metrics.push({
        name: `navigation.${name}`,
        value,
        rating: getRating(name, value),
        delta: value,
        id: `nav-${name}-${Date.now()}`
      });
    });
  }
  
  return {
    metrics,
    timestamp: new Date().toISOString(),
    url: window.location.href,
    userAgent: navigator.userAgent
  };
}

/**
 * Monitor long tasks
 */
export function monitorLongTasks(): void {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;
  
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      if (entry.duration > 50) {
        // Log long task without sending to analytics as it's not a web-vitals metric
        console.warn('Long task detected:', entry);
      }
    });
  });
  
  observer.observe({ entryTypes: ['longtask'] });
}

/**
 * Monitor layout shifts
 */
export function monitorLayoutShifts(): void {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;
  
  let clsValue = 0;
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry: any) => {
      if (!entry.hadRecentInput) {
        clsValue += entry.value;
      }
    });
    
    if (clsValue > 0.1) {
      console.warn('Layout shift detected:', clsValue);
    }
  });
  
  observer.observe({ entryTypes: ['layout-shift'] });
}

/**
 * Check if connection is slow
 */
export function isSlowConnection(): boolean {
  if (typeof window === 'undefined' || !(navigator as any).connection) return false;
  
  const connection = (navigator as any).connection;
  return connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g';
}

/**
 * Get connection type
 */
export function getConnectionType(): string {
  if (typeof window === 'undefined' || !(navigator as any).connection) return 'unknown';
  
  return (navigator as any).connection.effectiveType || 'unknown';
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