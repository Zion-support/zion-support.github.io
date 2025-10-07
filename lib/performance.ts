/**
 * Performance Monitoring Utility
 * Tracks and reports web vitals and performance metrics
 */
import { onCLS, onFCP, onLCP, onTTFB, type Metric } from 'web-vitals';

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
interface PerformanceWithMemory extends Performance {
  memory?: {
    usedJSHeapSize: number;
    totalJSHeapSize: number;
    jsHeapSizeLimit: number;
  };
}

// Network connection interface
interface NetworkConnection {
  effectiveType: string;
  downlink: number;
  rtt: number;
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

// Get rating based on thresholds
function getRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
  const threshold = THRESHOLDS[name as keyof typeof THRESHOLDS];
  if (!threshold) return 'good';
  
  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
}

// Convert metric to our format
function convertMetric(metric: Metric): PerformanceMetric {
  const performanceMetric: PerformanceMetric = {
    name: metric.name,
    value: metric.value,
    rating: getRating(metric.name, metric.value),
    delta: metric.delta,
    id: metric.id,
  };

  // Log in development (removed console.log for production)
  // if (process.env.NODE_ENV === 'development') {
  //   console.log('Performance Metric:', performanceMetric);
  // }

  // Send to analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      value: Math.round(
        metric.name === 'CLS' ? metric.value * 1000 : metric.value
      ),
      event_label: metric.id,
      non_interaction: true,
    });
  }

  return performanceMetric;
}

// Collect performance metrics
export function collectPerformanceMetrics(): PerformanceReport {
  const metrics: PerformanceMetric[] = [];
  
  // Collect Web Vitals
  onCLS((metric) => metrics.push(convertMetric(metric)));
  onFCP((metric) => metrics.push(convertMetric(metric)));
  onLCP((metric) => metrics.push(convertMetric(metric)));
  onTTFB((metric) => metrics.push(convertMetric(metric)));

  return {
    metrics,
    timestamp: new Date().toISOString(),
    url: typeof window !== 'undefined' ? window.location.href : '',
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
  };
}

// Monitor memory usage
export function monitorMemoryUsage(): void {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const performance = window.performance as PerformanceWithMemory;
    
    if (performance.memory) {
      const memoryInfo = performance.memory;
      const memoryUsage = {
        used: Math.round(memoryInfo.usedJSHeapSize / 1048576), // Convert to MB
        total: Math.round(memoryInfo.totalJSHeapSize / 1048576),
        limit: Math.round(memoryInfo.jsHeapSizeLimit / 1048576),
      };

      // Log memory usage in development
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.log('Memory Usage:', memoryUsage);
      }

      // Send to analytics
      if (window.gtag) {
        window.gtag('event', 'memory_usage', {
          event_category: 'Performance',
          value: memoryUsage.used,
          custom_parameters: {
            total_memory: memoryUsage.total,
            memory_limit: memoryUsage.limit,
          },
        });
      }
    }
  }
}

// Monitor network connection
export function monitorNetworkConnection(): void {
  if (typeof navigator !== 'undefined' && 'connection' in navigator) {
    const connection = (navigator as NavigatorWithConnection).connection;
    
    if (connection) {
      const networkInfo = {
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt,
      };

      // Log network info in development
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.log('Network Connection:', networkInfo);
      }

      // Send to analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'network_connection', {
          event_category: 'Performance',
          custom_parameters: networkInfo,
        });
      }
    }
  }
}

// Initialize performance monitoring
export function initializePerformanceMonitoring(): void {
  // Collect initial metrics
  collectPerformanceMetrics();
  
  // Monitor memory usage
  monitorMemoryUsage();
  
  // Monitor network connection
  monitorNetworkConnection();
  
  // Set up periodic monitoring
  if (typeof window !== 'undefined') {
    // Monitor memory every 30 seconds
    setInterval(monitorMemoryUsage, 30000);
    
    // Monitor network connection every 60 seconds
    setInterval(monitorNetworkConnection, 60000);
  }
}

// Export the main function
export default initializePerformanceMonitoring;
