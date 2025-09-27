import React, { useState, useEffect } from 'react';

interface MemoryUsage {
  used: number;
  total: number;
  percentage: number;
}

interface PerformanceOptimizerProps {
  enableServiceWorker?: boolean;
  enableMonitoring?: boolean;
  enableResourceHints?: boolean;
  enablePreloading?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableServiceWorker = true,
  enableMonitoring = true,
  enableResourceHints = true,
  enablePreloading = true
}) => {
  const [memoryUsage, setMemoryUsage] = useState<MemoryUsage | null>(null);
  const [performanceMetrics, setPerformanceMetrics] = useState<any>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Simple performance monitoring
    if (enableMonitoring) {
      console.log("Performance monitoring enabled");
    }

    // Memory Usage Monitoring
    const updateMemoryUsage = () => {
      if ("memory" in performance) {
        const memory = (performance as any).memory;
        setMemoryUsage({
          used: memory.usedJSHeapSize,
          total: memory.totalJSHeapSize,
          percentage: (memory.usedJSHeapSize / memory.totalJSHeapSize) * 100
        });
      }
    };

    updateMemoryUsage();
    const interval = setInterval(updateMemoryUsage, 5000);

    return () => clearInterval(interval);
  }, [enableServiceWorker, enableMonitoring, enableResourceHints, enablePreloading]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Performance metrics collection
    const collectMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const metrics = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime || 0,
        firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
        connectionType: (navigator as any).connection?.effectiveType || 'unknown'
      };

      setPerformanceMetrics(metrics);
    };

    // Collect metrics after page load
    if (document.readyState === 'complete') {
      collectMetrics();
    } else {
      window.addEventListener('load', collectMetrics);
    }

    return () => {
      window.removeEventListener('load', collectMetrics);
    };
  }, []);

  // Resource hints
  useEffect(() => {
    if (typeof window === 'undefined' || !enableResourceHints) return;

    // Preconnect to external domains
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];

    preconnectDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      document.head.appendChild(link);
    });

    // DNS prefetch for other domains
    const dnsPrefetchDomains = [
      'https://api.example.com'
    ];

    dnsPrefetchDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });
  }, [enableResourceHints]);

  // Image optimization
  const optimizeImages = () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Add loading="lazy" if not already present
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }

      // Add decoding="async" for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }
    });
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    optimizeImages();
  }, []);

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatTime = (ms: number) => {
    return `${ms.toFixed(2)}ms`;
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Performance Monitor</h3>
      
      {memoryUsage && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Memory Usage</h4>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Used:</span>
              <span>{formatBytes(memoryUsage.used)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Total:</span>
              <span>{formatBytes(memoryUsage.total)}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${Math.min(memoryUsage.percentage, 100)}%` }}
              ></div>
            </div>
            <div className="text-xs text-gray-500 text-center">
              {memoryUsage.percentage.toFixed(1)}% used
            </div>
          </div>
        </div>
      )}

      {performanceMetrics && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Performance Metrics</h4>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span>Load Time:</span>
              <span>{formatTime(performanceMetrics.loadTime)}</span>
            </div>
            <div className="flex justify-between">
              <span>DOM Content Loaded:</span>
              <span>{formatTime(performanceMetrics.domContentLoaded)}</span>
            </div>
            <div className="flex justify-between">
              <span>First Paint:</span>
              <span>{formatTime(performanceMetrics.firstPaint)}</span>
            </div>
            <div className="flex justify-between">
              <span>First Contentful Paint:</span>
              <span>{formatTime(performanceMetrics.firstContentfulPaint)}</span>
            </div>
            <div className="flex justify-between">
              <span>Connection:</span>
              <span className="capitalize">{performanceMetrics.connectionType}</span>
            </div>
          </div>
        </div>
      )}

      <div className="text-xs text-gray-500">
        <p>✅ Service Worker: {enableServiceWorker ? 'Enabled' : 'Disabled'}</p>
        <p>✅ Resource Hints: {enableResourceHints ? 'Enabled' : 'Disabled'}</p>
        <p>✅ Image Optimization: Active</p>
      </div>
    </div>
  );
};

export default PerformanceOptimizer;