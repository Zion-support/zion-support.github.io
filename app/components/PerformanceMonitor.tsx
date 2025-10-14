import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';
<<<<<<< HEAD
=======
import React, { useState, useEffect } from 'react';
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-4227

>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
=======

>>>>>>> cursor/analyze-improve-and-deploy-application-19e3
interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkLatency: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
<<<<<<< HEAD
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkLatency: 0,
=======
    cls: null,
    inp: null,
    fcp: null,
    lcp: null,
    ttfb: null,
    loadTime: null
>>>>>>> cursor/analyze-improve-and-deploy-application-19e3
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in development mode
    if (process.env.NODE_ENV !== 'development') {
      return;
    }

    const measurePerformance = () => {
      if (typeof window !== 'undefined' && window.performance) {
        const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = window.performance.getEntriesByType('paint');
        
        const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
        const renderTime = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
        
        // Memory usage (if available)
        const memoryUsage = (window as any).performance?.memory?.usedJSHeapSize || 0;
        
        // Network latency (simplified)
        const networkLatency = navigation ? navigation.responseEnd - navigation.requestStart : 0;

<<<<<<< HEAD
        setMetrics({
          loadTime: Math.round(loadTime),
          renderTime: Math.round(renderTime),
          memoryUsage: Math.round(memoryUsage / 1024 / 1024), // Convert to MB
          networkLatency: Math.round(networkLatency),
        });
      }
<<<<<<< HEAD
    }
=======
      // Send to analytics service
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', metric.name, {
          event_category: 'Web Vitals',
          value: Math.round(metric.value),
          event_label: metric.id,
          non_interaction: true,
        });
      }
    };

>>>>>>> cursor/analyze-improve-and-deploy-application-19e3
    onCLS(handleMetric);
    onINP(handleMetric);
    onFCP(handleMetric);
    onLCP(handleMetric);
    onTTFB(handleMetric);

    // Track page load time
    const loadTime = performance.now();
    setMetrics(prev => ({
      ...prev,
      loadTime
    }));
  }, []);

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg text-xs max-w-xs">
      <h3 className="font-bold mb-2">Performance Metrics</h3>
      <div className="space-y-1">
        <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'Loading...'}</div>
        <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(2)}ms` : 'Loading...'}</div>
        <div>INP: {metrics.inp ? `${metrics.inp.toFixed(2)}ms` : 'Loading...'}</div>
        <div>CLS: {metrics.cls ? `${metrics.cls.toFixed(4)}` : 'Loading...'}</div>
<<<<<<< HEAD
        <div>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'Loading...'}</div>      </div>
=======
    ttfb: null,
    loadTime: null
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;

    // Get performance metrics
    const getPerformanceMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      const lcp = performance.getEntriesByType('largest-contentful-paint');
      
      setMetrics({
        cls: 0, // Would need to be calculated with observer
        inp: 0, // Would need to be calculated with observer
        fcp: fcp ? fcp.startTime : null,
        lcp: lcp.length > 0 ? lcp[lcp.length - 1].startTime : null,
        ttfb: navigation ? navigation.responseStart - navigation.requestStart : null,
        loadTime: navigation ? navigation.loadEventEnd - navigation.navigationStart : null
      });
    };

    // Wait for page load
    if (document.readyState === 'complete') {
      getPerformanceMetrics();
    } else {
      window.addEventListener('load', getPerformanceMetrics);
    }

    return () => {
      window.removeEventListener('load', getPerformanceMetrics);
    };
  }, []);

  const getScoreColor = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'text-gray-500';
    if (value <= thresholds.good) return 'text-green-500';
    if (value <= thresholds.poor) return 'text-yellow-500';
    return 'text-red-500';
  };

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
      >
        Performance
      </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
      
      {isVisible && (
        <div className="absolute bottom-12 right-0 bg-white border border-gray-200 rounded-lg shadow-lg p-4 w-64">
          <h3 className="font-semibold text-gray-900 mb-3">Performance Metrics</h3>
          
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span>FCP:</span>
              <span className={getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}>
                {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}
              </span>
            </div>
            <div className="flex justify-between">
              <span>LCP:</span>
              <span className={getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}>
                {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}
              </span>
            </div>
            <div className="flex justify-between">
              <span>TTFB:</span>
              <span className={getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}>
                {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Load Time:</span>
              <span className={getScoreColor(metrics.loadTime, { good: 3000, poor: 5000 })}>
                {metrics.loadTime ? `${Math.round(metrics.loadTime)}ms` : 'N/A'}
              </span>
            </div>
          </div>
        </div>
<<<<<<< HEAD
=======
    };

    // Measure after initial load
    const timer = setTimeout(measurePerformance, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Toggle visibility with keyboard shortcut
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'P') {
        setIsVisible(!isVisible);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isVisible]);

  // Don't render in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800/95 backdrop-blur-sm border border-slate-700 rounded-lg p-4 shadow-lg z-50 max-w-xs">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-white">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white text-xs"
        >
          ✕
        </button>
=======
        <div>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'Loading...'}</div>
        <div>Load: {metrics.loadTime ? `${metrics.loadTime.toFixed(2)}ms` : 'Loading...'}</div>
>>>>>>> cursor/analyze-improve-and-deploy-application-19e3
      </div>
      
      <div className="space-y-2 text-xs mt-3">
        <div className="flex justify-between">
<<<<<<< HEAD
          <span className="text-gray-400">Load Time:</span>
          <span className={`font-mono ${metrics.loadTime > 1000 ? 'text-red-400' : 'text-green-400'}`}>
            {metrics.loadTime}ms
=======
          <span>FCP:</span>
          <span className={metrics.fcp && metrics.fcp < 1800 ? 'text-green-400' : 'text-red-400'}>
            {metrics.fcp ? (metrics.fcp < 1800 ? 'Good' : 'Needs Improvement') : 'Loading...'}
>>>>>>> cursor/analyze-improve-and-deploy-application-19e3
          </span>
        </div>
        
>>>>>>> cursor/analyze-improve-and-deploy-application-4227
        <div className="flex justify-between">
<<<<<<< HEAD
          <span className="text-gray-400">Render Time:</span>
          <span className={`font-mono ${metrics.renderTime > 100 ? 'text-red-400' : 'text-green-400'}`}>
            {metrics.renderTime}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-400">Memory:</span>
          <span className={`font-mono ${metrics.memoryUsage > 50 ? 'text-red-400' : 'text-green-400'}`}>
            {metrics.memoryUsage}MB
=======
          <span>LCP:</span>
          <span className={metrics.lcp && metrics.lcp < 2500 ? 'text-green-400' : 'text-red-400'}>
            {metrics.lcp ? (metrics.lcp < 2500 ? 'Good' : 'Needs Improvement') : 'Loading...'}
>>>>>>> cursor/analyze-improve-and-deploy-application-19e3
          </span>
        </div>
        
        <div className="flex justify-between">
<<<<<<< HEAD
          <span className="text-gray-400">Network:</span>
          <span className={`font-mono ${metrics.networkLatency > 500 ? 'text-red-400' : 'text-green-400'}`}>
            {metrics.networkLatency}ms
          </span>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-slate-700 text-xs text-gray-500">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
<<<<<<< HEAD
import React from 'react';

const PerformanceMonitor: React.FC = () => {
  return null;
}
export default PerformanceMonitor;
=======
      )}
    </div>
  );
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-4227
};

export default PerformanceMonitor;
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
=======
          <span>CLS:</span>
          <span className={metrics.cls && metrics.cls < 0.1 ? 'text-green-400' : 'text-red-400'}>
            {metrics.cls ? (metrics.cls < 0.1 ? 'Good' : 'Needs Improvement') : 'Loading...'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;
>>>>>>> cursor/analyze-improve-and-deploy-application-19e3
