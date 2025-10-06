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
=======
import { getCLS, getFID, getFCP, getLCP, getTTFB, Metric } from 'web-vitals';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
import { getCLS, getFID, getFCP, getLCP, getTTFB, Metric } from 'web-vitals';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
import { getCLS, getFID, getFCP, getLCP, getTTFB, Metric } from 'web-vitals';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-698a
=======
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';
import type { Metric } from 'web-vitals';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
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
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
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
=======
  TTFB: { good: 800, poor: 1800 },
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
  TTFB: { good: 800, poor: 1800 },
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
  TTFB: { good: 800, poor: 1800 },
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======
  TTFB: { good: 800, poor: 1800 },
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
};

/**
 * Get rating based on metric value
 */
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-698a
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
function getRating(
  name: string,
  value: number
): 'good' | 'needs-improvement' | 'poor' {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
function getRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6231
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-698a
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
=======
    id: metric.id
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
    id: metric.id
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
    id: metric.id
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======
    id: metric.id
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
  };

  // Log in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Performance Metric:', performanceMetric);
  }

<<<<<<< HEAD
<<<<<<< HEAD
  // Send to analytics
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======
  // Send to analytics
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
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
=======
      non_interaction: true
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
      non_interaction: true
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
      non_interaction: true
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======
      non_interaction: true
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
    });
  }

  // Send to custom endpoint
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  if (process.env['NEXT_PUBLIC_PERFORMANCE_ENDPOINT']) {
    fetch(process.env['NEXT_PUBLIC_PERFORMANCE_ENDPOINT'], {
=======
  if (process.env.NEXT_PUBLIC_PERFORMANCE_ENDPOINT) {
    fetch(process.env.NEXT_PUBLIC_PERFORMANCE_ENDPOINT, {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
=======
  if (process.env.NEXT_PUBLIC_PERFORMANCE_ENDPOINT) {
    fetch(process.env.NEXT_PUBLIC_PERFORMANCE_ENDPOINT, {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
  if (process.env.NEXT_PUBLIC_PERFORMANCE_ENDPOINT) {
    fetch(process.env.NEXT_PUBLIC_PERFORMANCE_ENDPOINT, {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
  if (process.env.NEXT_PUBLIC_PERFORMANCE_ENDPOINT) {
    fetch(process.env.NEXT_PUBLIC_PERFORMANCE_ENDPOINT, {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======
  if (process.env['NEXT_PUBLIC_PERFORMANCE_ENDPOINT']) {
    fetch(process.env['NEXT_PUBLIC_PERFORMANCE_ENDPOINT'], {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
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
=======
        userAgent: navigator.userAgent
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
        userAgent: navigator.userAgent
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
        userAgent: navigator.userAgent
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
      }),
      keepalive: true,
=======
        userAgent: navigator.userAgent
      }),
      keepalive: true
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
    }).catch(error => console.error('Performance reporting error:', error));
  }
<<<<<<< HEAD
=======
      event_label: metric.id,
      value: Math.round(metric.value),
      non_interaction: true,
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-698a
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
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
  if (typeof window === 'undefined') return;

  try {
    // Core Web Vitals
<<<<<<< HEAD
    getCLS(sendToAnalytics);
    getFID(sendToAnalytics);
    getFCP(sendToAnalytics);
    getLCP(sendToAnalytics);
    getTTFB(sendToAnalytics);
  } catch (error) {
    console.error('Error initializing performance monitoring:', error);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======
    onCLS(sendToAnalytics);
    onINP(sendToAnalytics);
    onFCP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);
  } catch (error) {
    console.error('Error initializing performance monitoring:', error);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
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
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
/**
 * Measure custom performance timing
 */
export function measurePerformance(name: string, startTime: number): number {
  const duration = performance.now() - startTime;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'timing_complete', {
      name: name,
      value: Math.round(duration),
      event_category: 'Performance'
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'timing_complete', {
      name: name,
      value: Math.round(duration),
      event_category: 'Performance'
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'timing_complete', {
      name: name,
      value: Math.round(duration),
      event_category: 'Performance'
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'timing_complete', {
      name: name,
      value: Math.round(duration),
      event_category: 'Performance'
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
    });
  }

  if (process.env.NODE_ENV === 'development') {
    console.log(`Performance: ${name} took ${duration.toFixed(2)}ms`);
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======
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
=======

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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
  }
}

/**
 * Measure performance of a custom function
 */
export function measurePerformance(name: string, startTime: number): number {
  const endTime = performance.now();
  const duration = endTime - startTime;
  
  console.log(`${name} took ${duration.toFixed(2)}ms`);
  
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-698a
  return duration;
}

/**
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
  try {
    performance.mark(name);
  } catch (error) {
    console.error('Error marking performance:', error);
=======
 * Mark a performance point
 */
export function markPerformance(name: string): void {
  if (typeof performance !== 'undefined' && performance.mark) {
    performance.mark(name);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-698a
  }
}

/**
<<<<<<< HEAD
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
<<<<<<< HEAD
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
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
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
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9

  const timing = performance.timing;
  const navigationStart = timing.navigationStart;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
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
=======
    domContentLoaded: timing.domContentLoadedEventEnd - navigationStart
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
    domContentLoaded: timing.domContentLoadedEventEnd - navigationStart
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
    domContentLoaded: timing.domContentLoadedEventEnd - navigationStart
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-698a
=======
    domContentLoaded: timing.domContentLoadedEventEnd - navigationStart
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
  };
}

/**
<<<<<<< HEAD
 * Get resource timing metrics
 */
export function getResourceTiming(): PerformanceResourceTiming[] {
  if (typeof performance === 'undefined') return [];
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  if (
    typeof performance === 'undefined' ||
    !(performance as PerformanceWithMemory).memory
=======
  if (typeof performance === 'undefined' ||
      !(performance as Record<string, unknown>).memory
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
  if (
    typeof performance === 'undefined' ||
    !(performance as any).memory
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
  ) {
    return null;
  }

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  const memory = (performance as Record<string, unknown>).memory as Record<string, number>;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
  if (typeof performance === 'undefined' || !(performance as any).memory) {
    return null;
  }

  const memory = (performance as any).memory;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
  if (typeof performance === 'undefined' || !(performance as any).memory) {
    return null;
  }

  const memory = (performance as any).memory;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-698a
=======
  const memory = (performance as any).memory;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
  return {
    usedJSHeapSize: memory.usedJSHeapSize,
    totalJSHeapSize: memory.totalJSHeapSize,
    jsHeapSizeLimit: memory.jsHeapSizeLimit,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
    usedPercentage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
    usedPercentage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
    usedPercentage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-698a
=======
    usedPercentage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
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
=======

  const navigationTiming = getNavigationTiming();
  // const memoryUsage = getMemoryUsage();
  // const slowResources = getSlowResources();

  const metrics: PerformanceMetric[] = [];
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======

  const navigationTiming = getNavigationTiming();
=======

  const navigationTiming = getNavigationTiming();
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======

  const navigationTiming = getNavigationTiming();
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
  const memoryUsage = getMemoryUsage();
  const slowResources = getSlowResources();

  const metrics: PerformanceMetric[] = [];

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
  // Add navigation timing metrics
=======
  
  const metrics: PerformanceMetric[] = [];
  const navigationTiming = getNavigationTiming();
  
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-698a
  if (navigationTiming) {
<<<<<<< HEAD
    // Add navigation timing metrics
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
    Object.entries(navigationTiming).forEach(([name, value]) => {
      metrics.push({
        name: `navigation.${name}`,
        value,
<<<<<<< HEAD
        rating: value < 1000 ? 'good' : value < 3000 ? 'needs-improvement' : 'poor',
        delta: 0,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2068
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
        id: `nav-${name}`
      });
    });
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======
        rating: getRating(name, value),
        delta: value,
        id: `nav-${name}-${Date.now()}`
      });
    });
  }
  
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-698a
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
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
=======
    userAgent: navigator.userAgent
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-698a
=======
    userAgent: navigator.userAgent
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
  };
}

/**
<<<<<<< HEAD
 * Check if performance monitoring is supported
 */
<<<<<<< HEAD
=======
 * Monitor long tasks
 */
<<<<<<< HEAD
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
=======
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
    console.error('Error monitoring long tasks:', error);
    return null;
  }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
}

/**
 * Monitor layout shifts
 */
<<<<<<< HEAD
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
=======
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
    console.error('Error monitoring layout shifts:', error);
    return null;
  }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
}

/**
 * Check if connection is slow
 */
export function isSlowConnection(): boolean {
<<<<<<< HEAD
  if (typeof window === 'undefined' || !(navigator as any).connection) return false;
  
  const connection = (navigator as any).connection;
  return connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g';
=======
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
  );
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
}

/**
 * Get connection type
 */
export function getConnectionType(): string {
<<<<<<< HEAD
  if (typeof window === 'undefined' || !(navigator as any).connection) return 'unknown';
  
  return (navigator as any).connection.effectiveType || 'unknown';
=======
  if (
    typeof navigator === 'undefined' ||
    !(navigator as any).connection
  ) {
    return 'unknown';
  }

  const connection = (navigator as any).connection;
  return connection.effectiveType || connection.type || 'unknown';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
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
<<<<<<< HEAD
  getConnectionType,
};

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-698a
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
<<<<<<< HEAD
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
=======
    userAgent: navigator.userAgent
  };
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
    userAgent: navigator.userAgent
  };
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
    userAgent: navigator.userAgent
  };
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
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
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
  callback: (entries: PerformanceEntry[]) => void
): PerformanceObserver | null {
  if (typeof PerformanceObserver === 'undefined') return null;

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
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
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
  callback: (entries: PerformanceEntry[]) => void
): PerformanceObserver | null {
  if (typeof PerformanceObserver === 'undefined') return null;

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
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
=======
export function isSlowConnection(): boolean {
  if (typeof navigator === 'undefined' || !(navigator as any).connection) {
    return false;
  }

  const connection = (navigator as any).connection;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
export function isSlowConnection(): boolean {
  if (typeof navigator === 'undefined' || !(navigator as any).connection) {
    return false;
  }

  const connection = (navigator as any).connection;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
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
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
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
=======
    !(navigator as Record<string, unknown>).connection
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
    !(navigator as any).connection
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
    !(navigator as any).connection
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
  ) {
    return 'unknown';
  }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  const connection = (navigator as Record<string, unknown>).connection as Record<string, unknown>;
  return (connection.effectiveType as string) || (connection.type as string) || 'unknown';
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
  const connection = (navigator as any).connection;
  return connection.effectiveType || connection.type || 'unknown';
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
  const connection = (navigator as any).connection;
  return connection.effectiveType || connection.type || 'unknown';
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
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
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  getConnectionType
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
  getConnectionType
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
  getConnectionType
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-698a
=======
  getConnectionType
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
