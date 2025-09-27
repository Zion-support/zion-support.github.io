import React, { useState, useEffect, useRef } from 'react';
import { BarChart3, Activity, Zap, TrendingUp, AlertCircle } from 'lucide-react';

interface PerformanceData {
  timestamp: number;
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  loadTime: number;
  memoryUsage: number;
  renderTime: number;
}

interface ComponentPerformance {
  name: string;
  renderTime: number;
  mountTime: number;
  updateCount: number;
  lastUpdate: number;
}

const PerformanceProfiler: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [performanceData, setPerformanceData] = useState<PerformanceData[]>([]);
  const [componentData, setComponentData] = useState<ComponentPerformance[]>([]);
  const [isProfiling, setIsProfiling] = useState(false);
  const [selectedTimeRange, setSelectedTimeRange] = useState<'1m' | '5m' | '15m' | '1h'>('5m');
  
  const observerRef = useRef<PerformanceObserver | null>(null);

  useEffect(() => {
    // Only show in development or when explicitly enabled
    const shouldShow = process.env.NODE_ENV === 'development' || 
                      localStorage.getItem('showPerformanceProfiler') === 'true';
    
    if (!shouldShow) return;

    if (isProfiling) {
      startProfiling();
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [isProfiling]);

  const startProfiling = () => {
    // Clear existing data
    setPerformanceData([]);
    setComponentData([]);

    // Set up performance observer
    if ('PerformanceObserver' in window) {
      observerRef.current = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (entry.entryType === 'measure') {
            const measure = entry as PerformanceMeasure;
            updateComponentPerformance(measure.name, measure.duration);
          }
        });
      });

      observerRef.current.observe({ entryTypes: ['measure', 'navigation', 'paint'] });
    }

    // Start collecting performance data
    const interval = setInterval(() => {
      collectPerformanceData();
    }, 1000);

    // Clean up interval after time range
    const timeout = setTimeout(() => {
      clearInterval(interval);
      setIsProfiling(false);
    }, getTimeRangeMs(selectedTimeRange));

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  };

  const collectPerformanceData = () => {
    const now = Date.now();
    
    // Get Core Web Vitals
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paintEntries = performance.getEntriesByType('paint');
    const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    
    const fcp = fcpEntry ? fcpEntry.startTime : 0;
    const lcp = performance.now(); // Simplified LCP
    const fid = 0; // Would need to measure this
    const cls = 0; // Would need to measure this
    const ttfb = navigation ? navigation.responseStart - navigation.requestStart : 0;
    const loadTime = navigation ? navigation.loadEventEnd - navigation.fetchStart : 0;
    
    // Get memory usage
    const memoryUsage = (performance as any).memory ? 
      (performance as any).memory.usedJSHeapSize / 1024 / 1024 : 0; // MB
    
    // Calculate render time (simplified)
    const renderTime = performance.now() - (performanceData[performanceData.length - 1]?.timestamp || now);

    const newData: PerformanceData = {
      timestamp: now,
      fcp,
      lcp,
      fid,
      cls,
      ttfb,
      loadTime,
      memoryUsage,
      renderTime
    };

    setPerformanceData(prev => {
      const updated = [...prev, newData];
      // Keep only data within selected time range
      const cutoff = now - getTimeRangeMs(selectedTimeRange);
      return updated.filter(data => data.timestamp > cutoff);
    });
  };

  const updateComponentPerformance = (componentName: string, duration: number) => {
    setComponentData(prev => {
      const existing = prev.find(comp => comp.name === componentName);
      if (existing) {
        return prev.map(comp => 
          comp.name === componentName 
            ? {
                ...comp,
                renderTime: (comp.renderTime + duration) / 2, // Average
                updateCount: comp.updateCount + 1,
                lastUpdate: Date.now()
              }
            : comp
        );
      } else {
        return [...prev, {
          name: componentName,
          renderTime: duration,
          mountTime: duration,
          updateCount: 1,
          lastUpdate: Date.now()
        }];
      }
    });
  };

  const getTimeRangeMs = (range: string): number => {
    switch (range) {
      case '1m': return 60 * 1000;
      case '5m': return 5 * 60 * 1000;
      case '15m': return 15 * 60 * 1000;
      case '1h': return 60 * 60 * 1000;
      default: return 5 * 60 * 1000;
    }
  };

  const getPerformanceScore = (data: PerformanceData): number => {
    // Simplified performance score calculation
    let score = 100;
    
    if (data.fcp > 1800) score -= 20;
    if (data.lcp > 2500) score -= 20;
    if (data.fid > 100) score -= 20;
    if (data.cls > 0.1) score -= 20;
    if (data.ttfb > 800) score -= 20;
    
    return Math.max(0, score);
  };

  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };


  const formatTime = (ms: number): string => {
    if (ms < 1000) return `${Math.round(ms)}ms`;
    return `${(ms / 1000).toFixed(2)}s`;
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed top-4 right-4 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-colors"
        aria-label="Show performance profiler"
      >
        <BarChart3 className="w-5 h-5" />
      </button>
    );
  }

  const latestData = performanceData[performanceData.length - 1];
  const avgScore = performanceData.length > 0 
    ? performanceData.reduce((sum, data) => sum + getPerformanceScore(data), 0) / performanceData.length 
    : 0;

  return (
    <div className="fixed top-4 right-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-xl p-4 max-w-lg z-50">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
          <BarChart3 className="w-5 h-5 mr-2" />
          Performance Profiler
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          aria-label="Close performance profiler"
        >
          ×
        </button>
      </div>

      {/* Controls */}
      <div className="flex space-x-2 mb-4">
        <button
          onClick={() => setIsProfiling(!isProfiling)}
          className={`px-3 py-1 rounded text-sm ${
            isProfiling 
              ? 'bg-red-600 text-white hover:bg-red-700' 
              : 'bg-green-600 text-white hover:bg-green-700'
          }`}
        >
          {isProfiling ? 'Stop' : 'Start'} Profiling
        </button>
        <select
          value={selectedTimeRange}
          onChange={(e) => setSelectedTimeRange(e.target.value as any)}
          className="px-2 py-1 border border-gray-300 rounded text-sm"
        >
          <option value="1m">1 minute</option>
          <option value="5m">5 minutes</option>
          <option value="15m">15 minutes</option>
          <option value="1h">1 hour</option>
        </select>
      </div>

      {/* Performance Overview */}
      {latestData && (
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 mb-4">
          <h4 className="font-medium text-gray-900 dark:text-white mb-2 flex items-center">
            <Activity className="w-4 h-4 mr-2" />
            Current Performance
          </h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Score:</span>
              <span className={getScoreColor(getPerformanceScore(latestData))}>
                {Math.round(getPerformanceScore(latestData))}/100
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">FCP:</span>
              <span>{formatTime(latestData.fcp)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">LCP:</span>
              <span>{formatTime(latestData.lcp)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Memory:</span>
              <span>{latestData.memoryUsage.toFixed(1)} MB</span>
            </div>
          </div>
        </div>
      )}

      {/* Performance History */}
      {performanceData.length > 0 && (
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 mb-4">
          <h4 className="font-medium text-gray-900 dark:text-white mb-2 flex items-center">
            <TrendingUp className="w-4 h-4 mr-2" />
            Performance History
          </h4>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Average Score:</span>
              <span className={getScoreColor(avgScore)}>
                {Math.round(avgScore)}/100
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Data Points:</span>
              <span>{performanceData.length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Duration:</span>
              <span>{formatTime(performanceData.length * 1000)}</span>
            </div>
          </div>
        </div>
      )}

      {/* Component Performance */}
      {componentData.length > 0 && (
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 mb-4">
          <h4 className="font-medium text-gray-900 dark:text-white mb-2 flex items-center">
            <Zap className="w-4 h-4 mr-2" />
            Component Performance
          </h4>
          <div className="space-y-1 text-sm max-h-32 overflow-y-auto">
            {componentData.map((comp, index) => (
              <div key={index} className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400 truncate">
                  {comp.name}
                </span>
                <span className="text-gray-900 dark:text-white">
                  {formatTime(comp.renderTime)} ({comp.updateCount}x)
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Performance Tips */}
      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
        <h4 className="font-medium text-gray-900 dark:text-white mb-2 flex items-center">
          <AlertCircle className="w-4 h-4 mr-2" />
          Performance Tips
        </h4>
        <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
          <p>• Keep FCP under 1.8s for good performance</p>
          <p>• LCP should be under 2.5s</p>
          <p>• Minimize CLS (Cumulative Layout Shift)</p>
          <p>• Monitor memory usage for leaks</p>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-600">
        <button
          onClick={() => {
            localStorage.setItem('showPerformanceProfiler', 'false');
            setIsVisible(false);
          }}
          className="text-xs text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-200"
        >
          Hide permanently
        </button>
      </div>
    </div>
  );
};

export default PerformanceProfiler;