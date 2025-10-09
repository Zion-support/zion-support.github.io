import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  renderTime: number;
  loadTime: number;
  memoryUsage: number;
  performanceScore: number;
}

const PerformanceDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    renderTime: 0,
    loadTime: 0,
    memoryUsage: 0,
    performanceScore: 0,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
      const memory = (performance as Performance & { memory?: { usedJSHeapSize: number; totalJSHeapSize: number } }).memory;

      const currentMetrics: PerformanceMetrics = {
        lcp: null,
        fid: null,
        cls: null,
        fcp: null,
        ttfb: null,
        renderTime: 0,
        loadTime: 0,
        memoryUsage: 0,
        performanceScore: 0,
      };

      if (navigation) {
        currentMetrics.renderTime = navigation.domContentLoadedEventEnd - navigation.navigationStart;
        currentMetrics.loadTime = navigation.loadEventEnd - navigation.navigationStart;
        currentMetrics.ttfb = navigation.responseStart - navigation.navigationStart;
      }

      if (memory) {
        currentMetrics.memoryUsage = (memory.usedJSHeapSize / memory.totalJSHeapSize) * 100;
      }

      // Calculate performance score
      let score = 100;
      if (currentMetrics.renderTime > 1500) score -= 15;
      if (currentMetrics.loadTime > 3000) score -= 20;
      if (currentMetrics.memoryUsage > 50) score -= 10;
      currentMetrics.performanceScore = Math.max(0, score);

      setMetrics(currentMetrics);
    };

    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
      });

      const fidObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry: PerformanceEntry & { processingStart: number; startTime: number }) => {
          setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
        });
      });

      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry: PerformanceEntry & { hadRecentInput: boolean; value: number }) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });

      const fcpObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          }
        });
      });

      try {
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        fidObserver.observe({ entryTypes: ['first-input'] });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
        fcpObserver.observe({ entryTypes: ['paint'] });
      } catch (error) {
        console.warn('Performance Observer not supported:', error);
      }

      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        fcpObserver.disconnect();
      };
    }

    // Initial metrics update
    updateMetrics();
    const interval = setInterval(updateMetrics, 5000);

    return () => clearInterval(interval);
  }, []);

  // Toggle visibility with Ctrl+Shift+P
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setIsVisible(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isVisible) return null;

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 90) return 'bg-green-100';
    if (score >= 70) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  return (
    <div className="fixed top-4 right-4 z-50 bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Performance Dashboard</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Performance Score */}
      <div className={`rounded-lg p-3 mb-4 ${getScoreBgColor(metrics.performanceScore)}`}>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">Performance Score</span>
          <span className={`text-2xl font-bold ${getScoreColor(metrics.performanceScore)}`}>
            {metrics.performanceScore}
          </span>
        </div>
      </div>

      {/* Core Web Vitals */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Core Web Vitals</h4>
        
        {metrics.lcp !== null && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">LCP</span>
            <span className={metrics.lcp < 2500 ? 'text-green-600' : 'text-red-600'}>
              {metrics.lcp.toFixed(0)}ms
            </span>
          </div>
        )}

        {metrics.fid !== null && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">FID</span>
            <span className={metrics.fid < 100 ? 'text-green-600' : 'text-red-600'}>
              {metrics.fid.toFixed(0)}ms
            </span>
          </div>
        )}

        {metrics.cls !== null && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">CLS</span>
            <span className={metrics.cls < 0.1 ? 'text-green-600' : 'text-red-600'}>
              {metrics.cls.toFixed(3)}
            </span>
          </div>
        )}

        {metrics.fcp !== null && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">FCP</span>
            <span className={metrics.fcp < 1800 ? 'text-green-600' : 'text-red-600'}>
              {metrics.fcp.toFixed(0)}ms
            </span>
          </div>
        )}

        {metrics.ttfb !== null && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">TTFB</span>
            <span className={metrics.ttfb < 800 ? 'text-green-600' : 'text-red-600'}>
              {metrics.ttfb.toFixed(0)}ms
            </span>
          </div>
        )}
      </div>

      {/* Additional Metrics */}
      <div className="mt-4 space-y-2">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Additional Metrics</h4>
        
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Render Time</span>
          <span className="text-gray-900">{metrics.renderTime.toFixed(0)}ms</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Load Time</span>
          <span className="text-gray-900">{metrics.loadTime.toFixed(0)}ms</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Memory Usage</span>
          <span className="text-gray-900">{metrics.memoryUsage.toFixed(1)}%</span>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-4 text-xs text-gray-500">
        Press Ctrl+Shift+P to toggle this dashboard
      </div>
    </div>
  );
};

export default PerformanceDashboard;