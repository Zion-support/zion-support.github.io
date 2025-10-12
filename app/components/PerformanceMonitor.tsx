'use client';
import React, { useEffect, useState } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  cls: number | null;
  inp: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: null,
    inp: null,
    fcp: null,
    lcp: null,
    ttfb: null
  });

  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    const updateMetrics = (metric: any) => {
      setMetrics(prev => ({
        ...prev,
        [metric.name]: metric.value
      }));

      // Send to analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }

      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`Performance Metric - ${metric.name}:`, metric.value);
      }
    };

    // Measure Core Web Vitals
    onCLS(updateMetrics);
    onINP(updateMetrics);
    onFCP(updateMetrics);
    onLCP(updateMetrics);
    onTTFB(updateMetrics);

    // Monitor resource loading
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          console.log('Navigation timing:', {
            domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
            loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
            totalTime: navEntry.loadEventEnd - navEntry.fetchStart
          });
        }
      }
    });

    observer.observe({ entryTypes: ['navigation', 'resource'] });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Performance optimization suggestions
  const getPerformanceSuggestions = () => {
    const suggestions = [];
    
    if (metrics.lcp && metrics.lcp > 2500) {
      suggestions.push('LCP is slow - consider optimizing images and reducing render-blocking resources');
    }
    
    if (metrics.inp && metrics.inp > 200) {
      suggestions.push('INP is slow - consider reducing JavaScript execution time');
    }
    
    if (metrics.cls && metrics.cls > 0.1) {
      suggestions.push('CLS is high - ensure images and ads have defined dimensions');
    }
    
    if (metrics.fcp && metrics.fcp > 1800) {
      suggestions.push('FCP is slow - consider optimizing critical rendering path');
    }
    
    return suggestions;
  };

  const suggestions = getPerformanceSuggestions();

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg max-w-sm z-50">
      <h3 className="font-bold mb-2">Performance Metrics</h3>
      <div className="space-y-1 text-sm">
        {metrics.lcp && <div>LCP: {Math.round(metrics.lcp)}ms</div>}
        {metrics.inp && <div>INP: {Math.round(metrics.inp)}ms</div>}
        {metrics.cls && <div>CLS: {metrics.cls.toFixed(3)}</div>}
        {metrics.fcp && <div>FCP: {Math.round(metrics.fcp)}ms</div>}
        {metrics.ttfb && <div>TTFB: {Math.round(metrics.ttfb)}ms</div>}
      </div>
      
      {suggestions.length > 0 && (
        <div className="mt-2">
          <h4 className="font-semibold text-yellow-400">Suggestions:</h4>
          <ul className="text-xs space-y-1">
            {suggestions.map((suggestion, index) => (
              <li key={index} className="text-yellow-300">• {suggestion}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;