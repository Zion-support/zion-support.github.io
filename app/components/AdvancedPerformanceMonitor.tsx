'use client';

import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
  tbt?: number;
  si?: number;
  fmp?: number;
  tti?: number;
}

interface PerformanceData {
  metrics: PerformanceMetrics;
  timestamp: number;
  url: string;
  userAgent: string;
}

const AdvancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [history, setHistory] = useState<PerformanceData[]>([]);
  const [isRecording, setIsRecording] = useState(false);

  const updateMetrics = useCallback((newMetrics: Partial<PerformanceMetrics>) => {
    setMetrics(prev => ({ ...prev, ...newMetrics }));
  }, []);

  const recordPerformanceData = useCallback(() => {
    const data: PerformanceData = {
      metrics,
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent
    };
    
    setHistory(prev => [...prev.slice(-9), data]);
    
    // Send to analytics if available
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
      gtag('event', 'performance_metrics', {
        event_category: 'performance',
        custom_map: {
          lcp: metrics.lcp,
          fid: metrics.fid,
          cls: metrics.cls,
          fcp: metrics.fcp,
          ttfb: metrics.ttfb
        }
      });
    }
  }, [metrics]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const shouldMonitor = process.env.NODE_ENV === 'development' || 
                         localStorage.getItem('performance-monitoring') === 'true';

    if (!shouldMonitor) return;

    const observeWebVitals = () => {
      if ('PerformanceObserver' in window) {
        // LCP - Largest Contentful Paint
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            updateMetrics({ lcp: lastEntry.startTime });
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (e) {
          console.warn('LCP observation not supported');
        }

        // FID - First Input Delay
        try {
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              updateMetrics({ fid: entry.processingStart - entry.startTime });
            });
          });
          fidObserver.observe({ entryTypes: ['first-input'] });
        } catch (e) {
          console.warn('FID observation not supported');
        }

        // CLS - Cumulative Layout Shift
        try {
          let clsValue = 0;
          const clsObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
                updateMetrics({ cls: clsValue });
              }
            });
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
          console.warn('CLS observation not supported');
        }

        // FCP - First Contentful Paint
        try {
          const fcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              if (entry.name === 'first-contentful-paint') {
                updateMetrics({ fcp: entry.startTime });
              }
            });
          });
          fcpObserver.observe({ entryTypes: ['paint'] });
        } catch (e) {
          console.warn('FCP observation not supported');
        }

        // TBT - Total Blocking Time
        try {
          const tbtObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            let totalBlockingTime = 0;
            entries.forEach((entry: any) => {
              if (entry.duration > 50) {
                totalBlockingTime += entry.duration - 50;
              }
            });
            updateMetrics({ tbt: totalBlockingTime });
          });
          tbtObserver.observe({ entryTypes: ['longtask'] });
        } catch (e) {
          console.warn('TBT observation not supported');
        }
      }
    };

    const measureTTFB = () => {
      if ('performance' in window && 'timing' in window.performance) {
        const timing = window.performance.timing;
        const ttfb = timing.responseStart - timing.navigationStart;
        updateMetrics({ ttfb });
      }
    };

    observeWebVitals();
    measureTTFB();

    const timer = setTimeout(() => setIsVisible(true), 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [updateMetrics]);

  useEffect(() => {
    if (isRecording) {
      const interval = setInterval(recordPerformanceData, 5000);
      return () => clearInterval(interval);
    }
  }, [isRecording, recordPerformanceData]);

  if (process.env.NODE_ENV === 'production' && localStorage.getItem('performance-monitoring') !== 'true') {
    return null;
  }

  if (!isVisible) return null;

  const getScoreColor = (metric: string, value?: number) => {
    if (value === undefined) return 'text-gray-400';
    
    const thresholds: Record<string, { good: number; needsImprovement: number }> = {
      lcp: { good: 2500, needsImprovement: 4000 },
      fid: { good: 100, needsImprovement: 300 },
      cls: { good: 0.1, needsImprovement: 0.25 },
      fcp: { good: 1800, needsImprovement: 3000 },
      ttfb: { good: 800, needsImprovement: 1800 },
      tbt: { good: 200, needsImprovement: 600 }
    };

    const threshold = thresholds[metric];
    if (!threshold) return 'text-gray-400';

    if (value <= threshold.good) return 'text-green-400';
    if (value <= threshold.needsImprovement) return 'text-yellow-400';
    return 'text-red-400';
  };

  const formatValue = (metric: string, value?: number) => {
    if (value === undefined) return 'N/A';
    
    if (metric === 'cls') {
      return value.toFixed(3);
    }
    
    return `${Math.round(value)}ms`;
  };

  const getOverallScore = () => {
    const scores = Object.entries(metrics).map(([key, value]) => {
      if (value === undefined) return 0;
      
      const thresholds: Record<string, { good: number; needsImprovement: number }> = {
        lcp: { good: 2500, needsImprovement: 4000 },
        fid: { good: 100, needsImprovement: 300 },
        cls: { good: 0.1, needsImprovement: 0.25 },
        fcp: { good: 1800, needsImprovement: 3000 },
        ttfb: { good: 800, needsImprovement: 1800 },
        tbt: { good: 200, needsImprovement: 600 }
      };

      const threshold = thresholds[key];
      if (!threshold) return 0;

      if (value <= threshold.good) return 3;
      if (value <= threshold.needsImprovement) return 2;
      return 1;
    });

    const validScores = scores.filter(score => score > 0);
    if (validScores.length === 0) return 0;
    
    return Math.round((validScores.reduce((a, b) => a + b, 0) / validScores.length) * 100 / 3);
  };

  const overallScore = getOverallScore();

  return (
    <div className={`fixed bottom-4 right-4 bg-slate-900/95 backdrop-blur-sm border border-slate-700 rounded-lg z-50 transition-all duration-300 ${
      isMinimized ? 'w-12 h-12' : 'w-80'
    }`}>
      {isMinimized ? (
        <button
          onClick={() => setIsMinimized(false)}
          className="w-full h-full flex items-center justify-center text-white hover:bg-slate-800 rounded-lg transition-colors"
          aria-label="Expand performance monitor"
        >
          📊
        </button>
      ) : (
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <h3 className="text-white font-semibold text-sm">Performance Monitor</h3>
              <div className={`px-2 py-1 rounded text-xs font-bold ${
                overallScore >= 80 ? 'bg-green-500/20 text-green-400' :
                overallScore >= 60 ? 'bg-yellow-500/20 text-yellow-400' :
                'bg-red-500/20 text-red-400'
              }`}>
                {overallScore}%
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setIsRecording(!isRecording)}
                className={`px-2 py-1 rounded text-xs ${
                  isRecording ? 'bg-red-500/20 text-red-400' : 'bg-gray-500/20 text-gray-400'
                }`}
                title={isRecording ? 'Stop recording' : 'Start recording'}
              >
                {isRecording ? '⏹️' : '⏺️'}
              </button>
              <button
                onClick={() => setIsMinimized(true)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Minimize performance monitor"
              >
                −
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close performance monitor"
              >
                ×
              </button>
            </div>
          </div>
          
          <div className="space-y-2 text-xs font-mono">
            <div className="flex justify-between">
              <span className="text-gray-300">LCP:</span>
              <span className={getScoreColor('lcp', metrics.lcp)}>
                {formatValue('lcp', metrics.lcp)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">FID:</span>
              <span className={getScoreColor('fid', metrics.fid)}>
                {formatValue('fid', metrics.fid)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">CLS:</span>
              <span className={getScoreColor('cls', metrics.cls)}>
                {formatValue('cls', metrics.cls)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">FCP:</span>
              <span className={getScoreColor('fcp', metrics.fcp)}>
                {formatValue('fcp', metrics.fcp)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">TTFB:</span>
              <span className={getScoreColor('ttfb', metrics.ttfb)}>
                {formatValue('ttfb', metrics.ttfb)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">TBT:</span>
              <span className={getScoreColor('tbt', metrics.tbt)}>
                {formatValue('tbt', metrics.tbt)}
              </span>
            </div>
          </div>
          
          {history.length > 0 && (
            <div className="mt-3 pt-2 border-t border-slate-700">
              <div className="text-gray-400 text-xs mb-1">History ({history.length})</div>
              <div className="space-y-1 max-h-20 overflow-y-auto">
                {history.slice(-3).map((entry, index) => (
                  <div key={index} className="text-xs text-gray-500">
                    {new Date(entry.timestamp).toLocaleTimeString()}: {entry.url.split('/').pop()}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="mt-2 pt-2 border-t border-slate-700">
            <div className="text-gray-400 text-xs">
              <div>🟢 Good 🟡 Needs Improvement 🔴 Poor</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedPerformanceMonitor;