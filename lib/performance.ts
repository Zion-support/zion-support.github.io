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
function sendToAnalytics(metric: Metric) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
    });
  }
}

/**
 * Initialize performance monitoring
 */
export function initPerformanceMonitoring() {
  if (typeof window === 'undefined') return;

  // Track Core Web Vitals
  onCLS((metric) => {
    sendToAnalytics(metric);
  });

  onFCP((metric) => {
    sendToAnalytics(metric);
  });

  onLCP((metric) => {
    sendToAnalytics(metric);
  });

  onTTFB((metric) => {
    sendToAnalytics(metric);
  });
}

/**
 * Get current performance metrics
 */
export function getPerformanceMetrics(): PerformanceMetric[] {
  if (typeof window === 'undefined') return [];

  const metrics: PerformanceMetric[] = [];
  const performance = window.performance as PerformanceWithMemory;

  // Get navigation timing
  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  if (navigation) {
    const ttfb = navigation.responseStart - navigation.requestStart;
    metrics.push({
      name: 'TTFB',
      value: ttfb,
      rating: getRating('TTFB', ttfb),
      delta: ttfb,
      id: 'ttfb-' + Date.now(),
    });
  }

  // Get memory usage if available
  if (performance.memory) {
    const memory = performance.memory;
    const memoryUsage = (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100;
    metrics.push({
      name: 'Memory',
      value: memoryUsage,
      rating: memoryUsage < 50 ? 'good' : memoryUsage < 80 ? 'needs-improvement' : 'poor',
      delta: memoryUsage,
      id: 'memory-' + Date.now(),
    });
  }

  return metrics;
}

/**
 * Generate performance report
 */
export function generatePerformanceReport(): PerformanceReport {
  return {
    metrics: getPerformanceMetrics(),
    timestamp: new Date().toISOString(),
    url: typeof window !== 'undefined' ? window.location.href : '',
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
  };
}

/**
 * Check if performance is good
 */
export function isPerformanceGood(): boolean {
  const metrics = getPerformanceMetrics();
  return metrics.every(metric => metric.rating === 'good');
}

/**
 * Get performance score (0-100)
 */
export function getPerformanceScore(): number {
  const metrics = getPerformanceMetrics();
  if (metrics.length === 0) return 100;

  const scores = metrics.map(metric => {
    switch (metric.rating) {
      case 'good': return 100;
      case 'needs-improvement': return 60;
      case 'poor': return 20;
      default: return 50;
    }
  });

  return Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length);
}