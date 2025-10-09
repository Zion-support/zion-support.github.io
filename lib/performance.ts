// Performance monitoring utilities

interface Metric {
  name: string;
  value: number;
  delta: number;
  id: string;
}

interface PerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
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
function getRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
  const threshold = THRESHOLDS[name as keyof typeof THRESHOLDS];
  if (!threshold) return 'good';

  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
}

/**
 * Send performance metric to analytics
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
  if (process.env['NODE_ENV'] === 'development') {
    // eslint-disable-next-line no-console
    console.log('Performance Metric:', performanceMetric);
  }

  // Send to Google Analytics if available
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'web_vitals', {
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
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(performanceMetric),
    }).catch(console.error);
  }
}

/**
 * Measure Core Web Vitals
 */
export function measureWebVitals(): void {
  if (typeof window === 'undefined') return;

  // Measure Largest Contentful Paint (LCP)
  if ('PerformanceObserver' in window) {
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        sendToAnalytics({
          name: 'LCP',
          value: lastEntry.startTime,
          delta: lastEntry.startTime,
          id: lastEntry.id,
        });
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (error) {
      console.warn('LCP observer not supported:', error);
    }
  }

  // Measure First Input Delay (FID)
  if ('PerformanceObserver' in window) {
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          sendToAnalytics({
            name: 'FID',
            value: entry.processingStart - entry.startTime,
            delta: entry.processingStart - entry.startTime,
            id: entry.id,
          });
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (error) {
      console.warn('FID observer not supported:', error);
    }
  }

  // Measure Cumulative Layout Shift (CLS)
  if ('PerformanceObserver' in window) {
    try {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        });
        sendToAnalytics({
          name: 'CLS',
          value: clsValue,
          delta: clsValue,
          id: 'cls-' + Date.now(),
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (error) {
      console.warn('CLS observer not supported:', error);
    }
  }

  // Measure First Contentful Paint (FCP)
  if ('PerformanceObserver' in window) {
    try {
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          sendToAnalytics({
            name: 'FCP',
            value: entry.startTime,
            delta: entry.startTime,
            id: entry.name,
          });
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
    } catch (error) {
      console.warn('FCP observer not supported:', error);
    }
  }

  // Measure Time to First Byte (TTFB)
  try {
    const navigationEntries = performance.getEntriesByType?.('navigation') || [];
    if (navigationEntries.length > 0) {
      const navEntry = navigationEntries[0] as PerformanceNavigationTiming;
      const ttfb = navEntry.responseStart - navEntry.requestStart;
      sendToAnalytics({
        name: 'TTFB',
        value: ttfb,
        delta: ttfb,
        id: 'ttfb-' + Date.now(),
      });
    }
  } catch (error) {
    console.warn('TTFB measurement failed:', error);
  }
}

/**
 * Get performance score
 */
export function getPerformanceScore(): number {
  if (typeof window === 'undefined') return 0;

  let score = 100;

  // Get LCP
  const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
  if (lcpEntries.length > 0) {
    const lcp = lcpEntries[lcpEntries.length - 1].startTime;
    if (lcp > 4000) score -= 40;
    else if (lcp > 2500) score -= 20;
  }

  // Get FID
  const fidEntries = performance.getEntriesByType('first-input');
  if (fidEntries.length > 0) {
    const fid = fidEntries[0].processingStart - fidEntries[0].startTime;
    if (fid > 300) score -= 40;
    else if (fid > 100) score -= 20;
  }

  // Get CLS
  let clsValue = 0;
  const clsEntries = performance.getEntriesByType('layout-shift');
  clsEntries.forEach((entry) => {
    if (!(entry as any).hadRecentInput) {
      clsValue += (entry as any).value;
    }
  });
  if (clsValue > 0.25) score -= 40;
  else if (clsValue > 0.1) score -= 20;

  return Math.max(0, score);
}

export default {
  measureWebVitals,
  getPerformanceScore,
};