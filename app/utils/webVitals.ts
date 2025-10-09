'use client';

// Web Vitals measurement and reporting utility
export interface WebVitalMetric {
  name: string;
  value: number;
  delta: number;
  id: string;
  rating: 'good' | 'needs-improvement' | 'poor';
}

export interface WebVitalsConfig {
  reportAllChanges?: boolean;
  debug?: boolean;
  onPerfEntry?: (metric: WebVitalMetric) => void;
}

// Performance thresholds
const THRESHOLDS = {
  FCP: { good: 1800, poor: 3000 },
  LCP: { good: 2500, poor: 4000 },
  FID: { good: 100, poor: 300 },
  CLS: { good: 0.1, poor: 0.25 },
  TTFB: { good: 800, poor: 1800 }
};

// Get performance rating
function getRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
  const threshold = THRESHOLDS[name as keyof typeof THRESHOLDS];
  if (!threshold) return 'good';
  
  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
}

// Generate unique ID
function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

// Report metric to analytics
function reportMetric(metric: WebVitalMetric) {
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'web_vitals', {
      metric_name: metric.name,
      metric_value: Math.round(metric.value),
      metric_rating: metric.rating,
      metric_delta: Math.round(metric.delta),
      metric_id: metric.id
    });
  }

  // Console logging in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Web Vitals] ${metric.name}:`, {
      value: metric.value,
      rating: metric.rating,
      delta: metric.delta
    });
  }
}

// Measure First Contentful Paint
export function measureFCP(onPerfEntry?: (metric: WebVitalMetric) => void) {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          const metric: WebVitalMetric = {
            name: 'FCP',
            value: entry.startTime,
            delta: entry.startTime,
            id: generateId(),
            rating: getRating('FCP', entry.startTime)
          };
          
          reportMetric(metric);
          onPerfEntry?.(metric);
        }
      });
    });
    
    observer.observe({ entryTypes: ['paint'] });
  } catch (error) {
    console.warn('FCP measurement failed:', error);
  }
}

// Measure Largest Contentful Paint
export function measureLCP(onPerfEntry?: (metric: WebVitalMetric) => void) {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      
      const metric: WebVitalMetric = {
        name: 'LCP',
        value: lastEntry.startTime,
        delta: lastEntry.startTime,
        id: generateId(),
        rating: getRating('LCP', lastEntry.startTime)
      };
      
      reportMetric(metric);
      onPerfEntry?.(metric);
    });
    
    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  } catch (error) {
    console.warn('LCP measurement failed:', error);
  }
}

// Measure First Input Delay
export function measureFID(onPerfEntry?: (metric: WebVitalMetric) => void) {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        const fid = entry.processingStart - entry.startTime;
        
        const metric: WebVitalMetric = {
          name: 'FID',
          value: fid,
          delta: fid,
          id: generateId(),
          rating: getRating('FID', fid)
        };
        
        reportMetric(metric);
        onPerfEntry?.(metric);
      });
    });
    
    observer.observe({ entryTypes: ['first-input'] });
  } catch (error) {
    console.warn('FID measurement failed:', error);
  }
}

// Measure Cumulative Layout Shift
export function measureCLS(onPerfEntry?: (metric: WebVitalMetric) => void) {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

  try {
    let clsValue = 0;
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      
      const metric: WebVitalMetric = {
        name: 'CLS',
        value: clsValue,
        delta: clsValue,
        id: generateId(),
        rating: getRating('CLS', clsValue)
      };
      
      reportMetric(metric);
      onPerfEntry?.(metric);
    });
    
    observer.observe({ entryTypes: ['layout-shift'] });
  } catch (error) {
    console.warn('CLS measurement failed:', error);
  }
}

// Measure Time to First Byte
export function measureTTFB(onPerfEntry?: (metric: WebVitalMetric) => void) {
  if (typeof window === 'undefined' || !('performance' in window)) return;

  try {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      const ttfb = navigation.responseStart - navigation.requestStart;
      
      const metric: WebVitalMetric = {
        name: 'TTFB',
        value: ttfb,
        delta: ttfb,
        id: generateId(),
        rating: getRating('TTFB', ttfb)
      };
      
      reportMetric(metric);
      onPerfEntry?.(metric);
    }
  } catch (error) {
    console.warn('TTFB measurement failed:', error);
  }
}

// Measure all Web Vitals
export function measureWebVitals(config: WebVitalsConfig = {}) {
  const { onPerfEntry, debug = false } = config;

  if (debug) {
    console.log('Starting Web Vitals measurement...');
  }

  // Measure all Core Web Vitals
  measureFCP(onPerfEntry);
  measureLCP(onPerfEntry);
  measureFID(onPerfEntry);
  measureCLS(onPerfEntry);
  measureTTFB(onPerfEntry);

  // Additional performance metrics
  if (typeof window !== 'undefined' && 'performance' in window) {
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        // Page load time
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        const metric: WebVitalMetric = {
          name: 'LOAD_TIME',
          value: loadTime,
          delta: loadTime,
          id: generateId(),
          rating: loadTime < 2000 ? 'good' : loadTime < 4000 ? 'needs-improvement' : 'poor'
        };
        
        reportMetric(metric);
        onPerfEntry?.(metric);
      }
    });
  }
}

// Export default function for easy usage
export default measureWebVitals;