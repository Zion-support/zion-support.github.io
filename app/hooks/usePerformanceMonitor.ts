<<<<<<< HEAD

import { useEffect, useCallback } from react;

export const usePerformanceMonitor = () => {;;;

  const measurePerformance = useCallback(() => {;;;

    // Measure page load time
    if (typeof window !== 'undefined' && 'performance in window) {
      const navigation = performance.getEntriesByType(navigation)[0] as PerformanceNavigationTiming;;

      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;;

        const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;;

        // Track performance metrics
        if (typeof window !== 'undefined && window.gtag) {
          window.gtag('event', 'performance_metric, {
            event_category: 'Performance,
            event_label: 'Page Load Time,
  const measureResourceTiming = useCallback(() => {;;

    if (typeof window !== 'undefined' && 'performance in window) {
      const resources = performance.getEntriesByType(resource);;

      resources.forEach((resource: PerformanceResourceTiming) => {
        const loadTime = resource.responseEnd - resource.startTime;;

        // Track slow resources
        if (loadTime > 1000) {
          if (typeof window !== 'undefined && window.gtag) {
            window.gtag('event', 'slow_resource, {
              event_category: 'Performance,
  const measureMemoryUsage = useCallback(() => {;;

    if (typeof window !== 'undefined' && 'performance in window && (performance as any).memory) {
      const memory = (performance as any).memory;;

      const memoryUsage = {;;


      if (memoryUsage.used > memoryUsage.limit * 0.8) {
        if (typeof window !== 'undefined && window.gtag) {
          window.gtag('event', 'high_memory_usage, {
            event_category: 'Performance,
            event_label: 'Memory Usage,
=======
import { useEffect, useCallback, useState } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetric {
  name: string;
  value: number;
  delta: number;
  id: string;
  rating: 'good' | 'needs-improvement' | 'poor';
}

interface PerformanceData {
  metrics: PerformanceMetric[];
  isMonitoring: boolean;
  startMonitoring: () => void;
  stopMonitoring: () => void;
}

export const usePerformanceMonitor = (): PerformanceData => {
  const [metrics, setMetrics] = useState<PerformanceMetric[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);

  const getRating = (name: string, value: number): 'good' | 'needs-improvement' | 'poor' => {
    const thresholds = {
      CLS: { good: 0.1, poor: 0.25 },
      INP: { good: 200, poor: 500 },
      FCP: { good: 1800, poor: 3000 },
      LCP: { good: 2500, poor: 4000 },
      TTFB: { good: 800, poor: 1800 }
    };

    const threshold = thresholds[name as keyof typeof thresholds];
    if (!threshold) return 'good';

    if (value <= threshold.good) return 'good';
    if (value <= threshold.poor) return 'needs-improvement';
    return 'poor';
  };

  const sendToAnalytics = useCallback((metric: PerformanceMetric) => {
    setMetrics(prev => [...prev, metric]);
    
    // Send to Google Analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', metric.name, {
        event_category: 'Web Vitals',
        event_label: metric.id,
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        non_interaction: true,
      });
    }

    // Send to custom analytics endpoint
    if (typeof window !== 'undefined' && process.env['NODE_ENV'] === 'production') {
      fetch('/api/analytics/performance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(metric),
      }).catch(console.error);
    }
  }, []);

  const startMonitoring = useCallback(() => {
    if (isMonitoring) return;
    
    setIsMonitoring(true);
    
    // Measure Core Web Vitals
    onCLS((metric) => sendToAnalytics({
      ...metric,
      rating: getRating('CLS', metric.value)
    }));
    
    onINP((metric) => sendToAnalytics({
      ...metric,
      rating: getRating('INP', metric.value)
    }));
    
    onFCP((metric) => sendToAnalytics({
      ...metric,
      rating: getRating('FCP', metric.value)
    }));
    
    onLCP((metric) => sendToAnalytics({
      ...metric,
      rating: getRating('LCP', metric.value)
    }));
    
    onTTFB((metric) => sendToAnalytics({
      ...metric,
      rating: getRating('TTFB', metric.value)
    }));

    // Measure additional performance metrics
    if (typeof window !== 'undefined') {
      // First Contentful Paint
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            sendToAnalytics({
              name: 'FCP',
              value: entry.startTime,
              delta: entry.startTime,
              id: 'fcp-custom',
              rating: getRating('FCP', entry.startTime)
            });
          }
        }
      });
      
      observer.observe({ entryTypes: ['paint'] });

      // Resource timing
      const resourceObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'resource') {
            const resourceEntry = entry as PerformanceResourceTiming;
            if (resourceEntry.duration > 1000) { // Only log slow resources
              sendToAnalytics({
                name: 'SLOW_RESOURCE',
                value: resourceEntry.duration,
                delta: resourceEntry.duration,
                id: resourceEntry.name,
                rating: resourceEntry.duration > 3000 ? 'poor' : 'needs-improvement'
              });
            }
          }
        }
      });
      
      resourceObserver.observe({ entryTypes: ['resource'] });

      // Long task detection
      const longTaskObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          sendToAnalytics({
            name: 'LONG_TASK',
            value: entry.duration,
            delta: entry.duration,
            id: 'long-task',
            rating: entry.duration > 50 ? 'poor' : 'good'
          });
        }
      });
      
      longTaskObserver.observe({ entryTypes: ['longtask'] });
    }
  }, [isMonitoring, sendToAnalytics]);

  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
  }, []);

  // Auto-start monitoring in production
  useEffect(() => {
    if (process.env['NODE_ENV'] === 'production') {
      startMonitoring();
    }
  }, [startMonitoring]);

  return {
    metrics,
    isMonitoring,
    startMonitoring,
    stopMonitoring
  };
};

// Additional performance utilities
export const useResourceTiming = () => {
  const [resourceMetrics, setResourceMetrics] = useState<any[]>([]);

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0d10
  useEffect(() => {
    const handleLoad = () => {;;

<<<<<<< HEAD
    if (document.readyState === 'complete) {
      window.addEventListener(load, handleLoad);

    return () => {
      window.removeEventListener(load, handleLoad);

export const usePerformanceMonitor = () => {useEffect(() => {
      // This is a simplified version - in production you'd use the web-vitals library;
      if ('performance' in window) {
      if ('performance' in window) {;
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          console.log('Page load time:', loadTime);}}
    // Run monitoring after page load;
    if (document.readyState === 'complete') {monitorWebVitals();}else {window.addEventListener('load', monitorWebVitals);}}return () => {window.removeEventListener('load', monitorWebVitals);}}, []);
=======
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries().map(entry => ({
        name: entry.name,
        duration: entry.duration,
        size: (entry as any).transferSize || 0,
        type: entry.initiatorType
      }));
      
      setResourceMetrics(prev => [...prev, ...entries]);
    });

    observer.observe({ entryTypes: ['resource'] });

    return () => observer.disconnect();
  }, []);

  return resourceMetrics;
};

export const useMemoryUsage = () => {
  const [memoryInfo, setMemoryInfo] = useState<any>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !(window as any).performance.memory) return;

    const updateMemoryInfo = () => {
      const memory = (window as any).performance.memory;
      setMemoryInfo({
        usedJSHeapSize: memory.usedJSHeapSize,
        totalJSHeapSize: memory.totalJSHeapSize,
        jsHeapSizeLimit: memory.jsHeapSizeLimit
      });
    };

    updateMemoryInfo();
    const interval = setInterval(updateMemoryInfo, 5000);

    return () => clearInterval(interval);
  }, []);

  return memoryInfo;
};
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0d10
