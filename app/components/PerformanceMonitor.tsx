 origin/cursor/analyze-improve-and-deploy-application-1091
;
    const measurePerformance = () => {
      // Measure load time;
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
      // Measure render time (FCP)
      const paintEntries = performance.getEntriesByType('paint');
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      const renderTime = fcp ? fcp.startTime : 0;
          requestAnimationFrame(measureFrame);
        };
        requestAnimationFrame(measureFrame);
    if (typeof window === 'undefined') return;
    // Only show in development or when performance monitoring is enabled;
    const shouldMonitor = process.env['NODE_ENV'] === 'development' ||
                         localStorage.getItem('performance-monitoring') === 'true';
    if (!shouldMonitor) return;
    const updateMetrics = (newMetrics: Partial<PerformanceMetrics>) => {
      setMetrics(prev => ({ ...prev, ...newMetrics }));
    };
    // Monitor Core Web Vitals;
 cursor/fix-errors-and-merge-to-main-f512;
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          console.log('Navigation timing:', entry);
        }
      }
    });
 origin/cursor/analyze-improve-and-deploy-application-1507;
interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
loadTime: number | null; origin/cursor/analyze-improve-and-deploy-application-1507;
}
const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState</PerformanceMetrics><PerformanceMetrics>({
lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    loadTime: null origin/cursor/analyze-improve-and-deploy-application-1507;
  });
  const [isVisible, setIsVisible] = useState(false);
 origin/cursor/analyze-improve-and-deploy-application-10c6;
    // Only run in production;
    if (process.env['NODE_ENV'] !== 'production') return;
    const updateMetric = (name: keyof PerformanceMetrics, value: number) => {
      setMetrics(prev => ({ ...prev, [name]: value }));
 origin/cursor/analyze-improve-and-deploy-application-0f74;
    };
    // Measure Core Web Vitals;
    onCLS((metric) => updateMetric('cls', metric.value));
    onINP((metric) => updateMetric('inp', metric.value));
    onFCP((metric) => updateMetric('fcp', metric.value));
    onLCP((metric) => updateMetric('lcp', metric.value));
    onTTFB((metric) => updateMetric('ttfb', metric.value));
'use client';
import React, { useEffect, useState } from 'react';
interface PerformanceMetrics {
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
}
const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState</PerformanceMetrics><PerformanceMetrics>({});
 origin/cursor/analyze-improve-and-deploy-application-1091;
          }
        }
      });
return () => {
      // Cleanup observers if needed;
    };
  }, []); origin/cursor/analyze-improve-and-deploy-application-0f74
;
  return null;
};
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
;
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };
  const score = getPerformanceScore();
  if (!isVisible && score >= 90) return null;
  return (
    </PerformanceMetrics><div className="fixed bottom-4 left-4 z-50 bg-gray-900 text-white p-4 rounded-lg shadow-lg max-w-sm" /><div className="flex items-center justify-between mb-2" /><h3 className="text-sm font-semibold">Performance Monitor</h3>
        <button;
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ed4;
 origin/cursor/analyze-improve-and-deploy-application-13a2;
 origin/cursor/analyze-improve-and-deploy-application-1507;
        >
          ×</button>
        </button>
      </div>
<div className="space-y-1" /><div className="flex justify-between" /><span>LCP:</span>
          <span className={metrics.lcp && metrics.lcp > 2.5 ? 'text-red-400' : 'text-green-400'}>
            {metrics.lcp ? `${metrics.lcp.toFixed(2)}s` : 'Measuring...'} origin/cursor/analyze-improve-and-deploy-application-13a2</span>
          </span>
 origin/cursor/analyze-improve-and-deploy-application-0e37
;
observer.observe({ entryTypes: ['navigation'] }); cursor/fix-errors-and-merge-to-main-f512
;
    return () => {
      observer.disconnect();
    };
  }, []);
  return null; // This component doesn't render anything;
};
import React, { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';
interface PerformanceMetrics {
  CLS: number;
  INP: number;
  FCP: number;
  LCP: number;
  TTFB: number;
}
const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    const metrics: PerformanceMetrics = {
      CLS: 0,
      INP: 0,
      FCP: 0,
      LCP: 0,
      TTFB: 0,
    };
    const sendToAnalytics = (metric: any) => {
      // Send to your analytics service;
      console.log('Performance Metric:', metric);
      // Example: Send to Google Analytics;
      if (typeof gtag !== 'undefined') {
        gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }
    };
    onCLS(sendToAnalytics);
    onINP(sendToAnalytics);
    onFCP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);
    // Monitor resource loading;
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          console.log('Navigation timing:', {
            domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
            loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
            totalTime: navEntry.loadEventEnd - navEntry.fetchStart,
          });
        }
      }
    });
    observer.observe({ entryTypes: ['navigation', 'resource'] });
    return () => {
      observer.disconnect();
 origin/cursor/analyze-improve-and-deploy-application-0fdb;
 origin/cursor/analyze-improve-and-deploy-application-1091;
 origin/cursor/analyze-improve-and-deploy-application-10c6;
 origin/cursor/analyze-improve-and-deploy-application-1247
;
interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
}
interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableConsoleLogging?: boolean;
  updateInterval?: number;
}
const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableConsoleLogging = false,
  updateInterval = 1000;
}) => {
  const [metrics, setMetrics] = useState</PerformanceMonitorProps><PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0,
  });
  const [performanceScore, setPerformanceScore] = useState(100);
  useEffect(() => {
    const reportWebVitals = (metric: { name: string; value: number }) => {
      // Log to console in development (only on client side)
      if (typeof window !== 'undefined' && enableConsoleLogging) {
        console.log('Web Vital:', metric.name, metric.value);
      }
    };
    // Monitor Core Web Vitals;
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
    const memory = (performance as Performance & { memory?: { usedJSHeapSize: number; totalJSHeapSize: number } }).memory;
    const getPerformanceScore = (): number => {
      let score = 100;
      if (metrics.renderTime > 1500) score -= 15;
      if (metrics.loadTime > 3000) score -= 20;
      if (metrics.memoryUsage > 50) score -= 10;
      return Math.max(0, score);
    };
    const updateMetrics = () => {
      const currentMetrics = {
        loadTime: navigation?.loadEventEnd ?? 0,
        memoryUsage: memory?.usedJSHeapSize ? memory.usedJSHeapSize / 1024 / 1024 : 0,
        renderTime: performance.now(),
        fps: 60, // Placeholder - would need actual FPS calculation;
      };
      setMetrics(currentMetrics);
      const score = getPerformanceScore();
      setPerformanceScore(score);
      if (enableConsoleLogging) {
        if (typeof console !== 'undefined') {
          console.group('Performance Metrics');
          console.debug('Metrics', { metrics: currentMetrics });
          console.debug('Score', { score });
          console.groupEnd();
        }
      }
      if (onMetricsUpdate) {
        onMetricsUpdate(currentMetrics);
      }
    };
    // Initial update;
    updateMetrics();
    // Set up interval for continuous monitoring;
    const interval = setInterval(updateMetrics, updateInterval);
    return () => clearInterval(interval);
  }, [onMetricsUpdate, enableConsoleLogging, updateInterval, metrics.renderTime, metrics.loadTime, metrics.memoryUsage]);
  // Only show when explicitly enabled via props;
  if (!enableConsoleLogging) {
    return null;
  }
  return (
    </PerformanceMetrics><div className="fixed bottom-4 right-4 z-50 bg-white border border-gray-200 rounded-lg shadow-lg p-4 min-w-64" /><h3 className="text-sm font-semibold text-gray-900 mb-3">
        Performance Monitor</h3>
      </h3>
      <div className="space-y-2 text-xs" /><div className="flex justify-between" /><span className="text-gray-600">Load Time:</span>
          <span className="font-mono">{metrics.loadTime.toFixed(2)}ms</span>
        </div>
        <div className="flex justify-between" /><span className="text-gray-600">Memory:</span>
          <span className="font-mono">
            {metrics.memoryUsage.toFixed(2)}MB</span>
          </span>
        </div>
        <div className="flex justify-between" /><span className="text-gray-600">FPS:</span>
          <span className="font-mono">{metrics.fps.toFixed(1)}</span>
        </div>
        <div className="flex justify-between" /><span className="text-gray-600">Score:</span>
          <span className={`font-mono ${performanceScore > 80 ? 'text-green-600' : performanceScore > 60 ? 'text-yellow-600' : 'text-red-600'}`}>
            {performanceScore}</span>
          </span>
        </div>
 cursor/fix-errors-and-merge-to-main-f512
;