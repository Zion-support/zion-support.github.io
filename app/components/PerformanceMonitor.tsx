'use client';

import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  networkRequests: number;
}

interface PerformanceMonitorProps {
  children: React.ReactNode;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ children }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    networkRequests: 0
  });

  useEffect(() => {
    // Monitor page load time
    const updateLoadTime = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        setMetrics(prev => ({
          ...prev,
          loadTime: navigation.loadEventEnd - navigation.loadEventStart
        }));
      }
    };

    // Monitor memory usage
    const updateMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({
          ...prev,
          memoryUsage: memory.usedJSHeapSize / 1024 / 1024
        }));
      }
    };

    // Monitor network requests
    const updateNetworkRequests = () => {
      const resources = performance.getEntriesByType('resource');
      setMetrics(prev => ({
        ...prev,
        networkRequests: resources.length
      }));
    };

    // Set up performance observer
    const observer = new PerformanceObserver((list) => {
      updateLoadTime();
      updateNetworkRequests();
    });

    observer.observe({ entryTypes: ['navigation', 'measure'] });

    // Set up monitoring
    const interval = setInterval(() => {
      updateMemoryUsage();
      updateNetworkRequests();
    }, 1000);

    // Cleanup
    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  // Log performance metrics in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance Metrics:', metrics);
    }

    // Send metrics to analytics (if available)
    const sendMetrics = () => {
      if (typeof window !== 'undefined' && 'gtag' in window) {
        const gtag = (window as any).gtag;
        
        if (metrics.fcp) gtag('event', 'web_vitals', { name: 'FCP', value: Math.round(metrics.fcp) });
        if (metrics.lcp) gtag('event', 'web_vitals', { name: 'LCP', value: Math.round(metrics.lcp) });
        if (metrics.fid) gtag('event', 'web_vitals', { name: 'FID', value: Math.round(metrics.fid) });
        if (metrics.cls) gtag('event', 'web_vitals', { name: 'CLS', value: Math.round(metrics.cls * 1000) });
        if (metrics.ttfb) gtag('event', 'web_vitals', { name: 'TTFB', value: Math.round(metrics.ttfb) });
      }
    };

    // Send metrics after a delay to ensure all are collected
    const timeoutId = setTimeout(sendMetrics, 5000);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('load', measurePerformance);
    };
  }, [metrics]);

  // Don't render anything visible
  return null;
};

export default PerformanceMonitor;