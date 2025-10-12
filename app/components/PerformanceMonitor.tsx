'use client';
import React, { useState, useEffect } from 'react';

const PerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState({
    lcp: 0,
    fid: 0,
    cls: 0,
    fcp: 0,
    ttfb: 0
  });

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') {
      return;
    }

    // Toggle visibility with Ctrl+Shift+P
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setIsVisible(!isVisible);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Monitor performance metrics
    const updateMetrics = () => {
      if ('PerformanceObserver' in window) {
        // LCP
        try {
          const lcpObserver = new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            const lastEntry = entries[entries.length - 1];
            setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (error) {
          console.warn('LCP monitoring failed:', error);
        }

        // FID
        try {
          const fidObserver = new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            entries.forEach((entry) => {
              const fid = entry.processingStart - entry.startTime;
              setMetrics(prev => ({ ...prev, fid }));
            });
          });
          fidObserver.observe({ entryTypes: ['first-input'] });
        } catch (error) {
          console.warn('FID monitoring failed:', error);
        }

        // CLS
        try {
          let clsValue = 0;
          const clsObserver = new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
                setMetrics(prev => ({ ...prev, cls: clsValue }));
              }
            }
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (error) {
          console.warn('CLS monitoring failed:', error);
        }

        // FCP
        try {
          const fcpObserver = new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            entries.forEach((entry) => {
              if (entry.name === 'first-contentful-paint') {
                setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
              }
            });
          });
          fcpObserver.observe({ entryTypes: ['paint'] });
        } catch (error) {
          console.warn('FCP monitoring failed:', error);
        }

        // TTFB
        try {
          const ttfbObserver = new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            entries.forEach((entry) => {
              const ttfb = entry.responseStart - entry.requestStart;
              setMetrics(prev => ({ ...prev, ttfb }));
            });
          });
          ttfbObserver.observe({ entryTypes: ['navigation'] });
        } catch (error) {
          console.warn('TTFB monitoring failed:', error);
        }
      }
    };

    updateMetrics();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVisible]);

  if (!isVisible || process.env.NODE_ENV !== 'development') {
    return null;
  }

  const getScoreColor = (value: number, thresholds: [number, number]) => {
    if (value <= thresholds[0]) return 'text-green-400';
    if (value <= thresholds[1]) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreText = (value: number, thresholds: [number, number]) => {
    if (value <= thresholds[0]) return 'Good';
    if (value <= thresholds[1]) return 'Needs Improvement';
    return 'Poor';
  };

  return (
    <div className="fixed bottom-4 right-4 bg-gray-900 border border-gray-700 rounded-lg p-4 shadow-lg z-50 max-w-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white font-semibold">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-300">LCP:</span>
          <span className={getScoreColor(metrics.lcp, [2500, 4000])}>
            {Math.round(metrics.lcp)}ms ({getScoreText(metrics.lcp, [2500, 4000])})
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">FID:</span>
          <span className={getScoreColor(metrics.fid, [100, 300])}>
            {Math.round(metrics.fid)}ms ({getScoreText(metrics.fid, [100, 300])})
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">CLS:</span>
          <span className={getScoreColor(metrics.cls, [0.1, 0.25])}>
            {metrics.cls.toFixed(3)} ({getScoreText(metrics.cls, [0.1, 0.25])})
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">FCP:</span>
          <span className={getScoreColor(metrics.fcp, [1800, 3000])}>
            {Math.round(metrics.fcp)}ms ({getScoreText(metrics.fcp, [1800, 3000])})
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">TTFB:</span>
          <span className={getScoreColor(metrics.ttfb, [800, 1800])}>
            {Math.round(metrics.ttfb)}ms ({getScoreText(metrics.ttfb, [800, 1800])})
          </span>
        </div>
      </div>
      
      <div className="mt-3 pt-3 border-t border-gray-700">
        <p className="text-xs text-gray-400">
          Press Ctrl+Shift+P to toggle
        </p>
      </div>
    </div>
  );
};

export default PerformanceMonitor;