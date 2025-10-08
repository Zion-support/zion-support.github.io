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
=======
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';
import type { Metric } from 'web-vitals';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======
import { getCLS, getFID, getFCP, getLCP, getTTFB, Metric } from 'web-vitals';
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';
import type { Metric } from 'web-vitals';
>>>>>>> 73aae067a8789e7f94c7cf242d65c42e6717fb43
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
=======
import { onCLS, onFCP, onLCP, onTTFB, type Metric } from 'web-vitals';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======
import { getCLS, getFID, getFCP, getLCP, getTTFB, Metric } from 'web-vitals';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
// Types
interface PerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
}


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
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
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
=======
  TTFB: { good: 800, poor: 1800 },
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======
  TTFB: { good: 800, poor: 1800 },
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======
  TTFB: { good: 800, poor: 1800 },
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
};

/**
 * Get rating based on metric value
 */
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
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======
function getRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
>>>>>>> 73aae067a8789e7f94c7cf242d65c42e6717fb43
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
function getRating(
  name: string,
  value: number
): 'good' | 'needs-improvement' | 'poor' {
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
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======
function getRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======
function getRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
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
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
  const performanceMetric: PerformanceMetric = {
    name: metric.name,
    value: metric.value,
    rating: getRating(metric.name, metric.value),
    delta: metric.delta,
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-698a
    id: metric.id
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
=======
    id: metric.id,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======
    id: metric.id,
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
    id: metric.id
>>>>>>> 73aae067a8789e7f94c7cf242d65c42e6717fb43
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
=======
    id: metric.id,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======
    id: metric.id,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
  };

  // Log in development
  if (process.env['NODE_ENV'] === 'development') {
    console.log('Performance Metric:', performanceMetric);
  }

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
=======
  // Send to analytics
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
      event_category: 'Web Vitals',
      value: Math.round(
        metric.name === 'CLS' ? metric.value * 1000 : metric.value
      ),
      event_label: metric.id,
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
=======
      non_interaction: true,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
    });
  }

  // Send to custom endpoint
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
=======
  if (process.env['NEXT_PUBLIC_PERFORMANCE_ENDPOINT']) {
    fetch(process.env['NEXT_PUBLIC_PERFORMANCE_ENDPOINT'], {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...performanceMetric,
        timestamp: new Date().toISOString(),
        url: window.location.href,
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
=======
        userAgent: navigator.userAgent,
      }),
      keepalive: true,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
    }).catch(error => console.error('Performance reporting error:', error));
  }
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
=======
  // Send to analytics
=======
>>>>>>> 73aae067a8789e7f94c7cf242d65c42e6717fb43
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.value),
      non_interaction: true,
    });
>>>>>>> 73aae067a8789e7f94c7cf242d65c42e6717fb43
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
  }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======
  // Send to analytics
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
    });
  }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
}

/**
 * Initialize performance monitoring
 */
export function initPerformanceMonitoring(): void {
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
=======
  if (typeof window === 'undefined') return;
  try {
    // Core Web Vitals
  try {
>>>>>>> 73aae067a8789e7f94c7cf242d65c42e6717fb43
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
=======
  if (typeof window === 'undefined') return;

  try {
    // Core Web Vitals
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
    onCLS(sendToAnalytics);
    onFCP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);
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
    getCLS(sendToAnalytics);
    getFID(sendToAnalytics);
    getFCP(sendToAnalytics);
    getLCP(sendToAnalytics);
    getTTFB(sendToAnalytics);
>>>>>>> 73aae067a8789e7f94c7cf242d65c42e6717fb43
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
  } catch (error) {
    console.error('Error initializing performance monitoring:', error);
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
=======
  } catch (error) {
    console.error('Error initializing performance monitoring:', error);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
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
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======
  if (typeof window === 'undefined') return;

  // Track Core Web Vitals
  getCLS(sendToAnalytics);
  getFID(sendToAnalytics);
  getFCP(sendToAnalytics);
  getLCP(sendToAnalytics);
  getTTFB(sendToAnalytics);
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
/**
 * Get current performance report
 */
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
=======
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'timing_complete', {
      name: name,
      value: Math.round(duration),
      event_category: 'Performance',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
    });
  }

  if (process.env['NODE_ENV'] === 'development') {
    console.log(`Performance: ${name} took ${duration.toFixed(2)}ms`);
  }
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
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd

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
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
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
=======
export function measureBetween(name: string, startMark: string, endMark: string): number {
  if (typeof performance === 'undefined') return 0;

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
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
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd

  const timing = performance.timing;
  const navigationStart = timing.navigationStart;

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
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
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
=======
    domContentLoaded: timing.domContentLoadedEventEnd - navigationStart,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
  };
}

/**
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
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
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
=======
  if (
    typeof performance === 'undefined' ||
    !(performance as any).memory
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
  ) {
    return null;
  }

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
=======
  if (typeof performance === 'undefined' || !(performance as any).memory) {
    return null;
  }

  const memory = (performance as any).memory;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
  return {
    usedJSHeapSize: memory.usedJSHeapSize,
    totalJSHeapSize: memory.totalJSHeapSize,
    jsHeapSizeLimit: memory.jsHeapSizeLimit,
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
=======
    usedPercentage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
  };
=======
  if (typeof window === 'undefined') return;

  // Track all web vitals
  onCLS(sendToAnalytics);
  onINP(sendToAnalytics);
  onFCP(sendToAnalytics);
  onLCP(sendToAnalytics);
  onTTFB(sendToAnalytics);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
}

/**
 * Generate performance report
 */

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-be22
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6ac6

  const navigationTiming = getNavigationTiming();
  const metrics: PerformanceMetric[] = [];

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
=======
export function generatePerformanceReport(): PerformanceReport | null {
  if (typeof window === 'undefined') return null;

  const navigationTiming = getNavigationTiming();
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
  const memoryUsage = getMemoryUsage();
  const slowResources = getSlowResources();

  const metrics: PerformanceMetric[] = [];

=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
  // Add navigation timing metrics
=======
  
  const metrics: PerformanceMetric[] = [];
  const navigationTiming = getNavigationTiming();
  
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-698a
  if (navigationTiming) {
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
    Object.entries(navigationTiming).forEach(([name, value]) => {
      metrics.push({
        name: `navigation.${name}`,
        value,
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
=======
        id: `nav-${name}`,
      });
    });
  }

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
  return {
    metrics,
    timestamp: new Date().toISOString(),
    url: window.location.href,
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
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
/**
 * Generate performance report
 */
export function generatePerformanceReport(): PerformanceReport {
  const metrics: PerformanceMetric[] = [];
  return {
    metrics,
    timestamp: new Date().toISOString(),
    url: typeof window !== 'undefined' ? window.location.href : '',
=======
    userAgent: navigator.userAgent
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-698a
=======
    userAgent: navigator.userAgent
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
=======
export function generatePerformanceReport(): PerformanceReport {
  return {
    metrics: [],
    timestamp: new Date().toISOString(),
    url: typeof window !== 'undefined' ? window.location.href : '',
    userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : '',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
>>>>>>> 73aae067a8789e7f94c7cf242d65c42e6717fb43
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
=======
    userAgent: navigator.userAgent,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======
export function getPerformanceReport(): PerformanceReport {
  const metrics: PerformanceMetric[] = [];
  
  return {
    metrics,
    timestamp: new Date().toISOString(),
    url: typeof window !== 'undefined' ? window.location.href : '',
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
  };
}

/**
export function monitorLongTasks(
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
  if (
    typeof navigator === 'undefined' ||
    !(navigator as any).connection
  ) {
    return 'unknown';
  }

  const connection = (navigator as any).connection;
  return connection.effectiveType || connection.type || 'unknown';
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
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
}

/**
 * Monitor long tasks
 */
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-895b
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2068
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b781
export function monitorLongTasks(
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
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
  callback: (entries: PerformanceEntry[]) => void
): PerformanceObserver | null {
  if (typeof PerformanceObserver === 'undefined') return null;

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
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
  callback: (entries: PerformanceEntry[]) => void
): PerformanceObserver | null {
  if (typeof PerformanceObserver === 'undefined') return null;

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
  ) {
    return false;
=======
export function getConnectionType(): string | null {
  if (typeof navigator === 'undefined' || !('connection' in navigator)) {
    return null;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-895b
  }

  const connection = (navigator as any).connection;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-be22
  const slowTypes = ['slow-2g', '2g'];
  return (
    (connection.effectiveType && slowTypes.includes(connection.effectiveType)) || 
    connection.saveData === true
=======
  const connection = (navigator as any).connection;
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

  const connection = (navigator as any).connection;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-be22
  return connection.effectiveType || connection.type || 'unknown';
}

=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2068
  const connection = (navigator as any).connection;
  return connection.effectiveType || connection.type || 'unknown';
}

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
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2068
  monitorLongTasks,
  monitorLayoutShifts,
  isSlowConnection,
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
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
=======
 * Check if performance is within acceptable limits
 */
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
export function isPerformanceAcceptable(): boolean {
  // This would typically check against stored metrics
  // For now, return true as a placeholder
  return true;
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
=======
 * Performance monitoring hook for React components
 */
export function usePerformanceMonitoring() {
  if (typeof window === 'undefined') return;

  // Initialize monitoring on mount
  initPerformanceMonitoring();
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======
>>>>>>> 73aae067a8789e7f94c7cf242d65c42e6717fb43
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
=======
  getConnectionType,
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
