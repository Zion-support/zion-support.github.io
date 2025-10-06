/**
 * Performance Monitoring Utility
 * Tracks and reports web vitals and performance metrics
 */
import { onCLS, onFCP, onLCP, onTTFB, type Metric } from 'web-vitals';

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
  TTFB: { good: 800, poor: 1800 }
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
 * Send metric to analytics and custom endpoints
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

  // Send to analytics
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
      event_category: 'Web Vitals',
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
 * Generate performance report
 */
export function generatePerformanceReport(): PerformanceReport {
  const metrics: PerformanceMetric[] = [];
  
  return {
    metrics,
    timestamp: new Date().toISOString(),
    url: typeof window !== 'undefined' ? window.location.href : '',
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : ''
  };
}

/**
 * Measure custom performance timing
 */
export function measurePerformance(name: string, startTime: number): number {
  const duration = performance.now() - startTime;

  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'timing_complete', {
      name: name,
      value: Math.round(duration)
    });
  }

  return duration;
}

/**
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
}

/**
 * Monitor long tasks
 */
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
}

/**
 * Monitor layout shifts
 */
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
 * Get connection information
 */
export function getConnectionType(): string | null {
  if (typeof navigator === 'undefined' || !('connection' in navigator)) {
    return null;
  }

  const connection = (navigator as any).connection;
  return connection?.effectiveType || null;
}

// Export all functions
export {
  type PerformanceMetric,
  type PerformanceReport,
  getRating,
  sendToAnalytics,
};
