import React, { useState, useEffect, useCallback } from 'react';
import { X } from 'lucide-react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  memoryUsage: number;
}

interface PerformanceMonitorProps {
  enableConsoleLogging?: boolean;
  enableReporting?: boolean;
  reportInterval?: number;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enableConsoleLogging = false,
  enableReporting = true,
  reportInterval = 5000,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    memoryUsage: 0,
  });

  const [performanceScore, setPerformanceScore] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const calculatePerformanceScore = useCallback((currentMetrics: PerformanceMetrics): number => {
    let score = 100;
    
    // LCP scoring (0-100)
    if (currentMetrics.lcp !== null) {
      if (currentMetrics.lcp <= 2500) score -= 0;
      else if (currentMetrics.lcp <= 4000) score -= 10;
      else score -= 20;
    }
    
    // FID scoring (0-100)
    if (currentMetrics.fid !== null) {
      if (currentMetrics.fid <= 100) score -= 0;
      else if (currentMetrics.fid <= 300) score -= 10;
      else score -= 20;
    }
    
    // CLS scoring (0-100)
    if (currentMetrics.cls !== null) {
      if (currentMetrics.cls <= 0.1) score -= 0;
      else if (currentMetrics.cls <= 0.25) score -= 10;
      else score -= 20;
    }
    
    // FCP scoring (0-100)
    if (currentMetrics.fcp !== null) {
      if (currentMetrics.fcp <= 1800) score -= 0;
      else if (currentMetrics.fcp <= 3000) score -= 10;
      else score -= 20;
    }
    
    // TTFB scoring (0-100)
    if (currentMetrics.ttfb !== null) {
      if (currentMetrics.ttfb <= 800) score -= 0;
      else if (currentMetrics.ttfb <= 1800) score -= 10;
      else score -= 20;
    }
    
    return Math.max(0, score);
  }, []);

  const collectWebVitals = useCallback(() => {
    if (typeof window === 'undefined') return;

    const newMetrics: PerformanceMetrics = {
      lcp: null,
      fid: null,
      cls: null,
      fcp: null,
      ttfb: null,
      memoryUsage: 0,
    };

    // Get LCP
    try {
      const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
      if (lcpEntries.length > 0) {
        const lcp = lcpEntries[lcpEntries.length - 1] as PerformanceEntry;
        newMetrics.lcp = lcp.startTime;
      }
    } catch (error) {
      if (enableConsoleLogging) {
        console.warn('Failed to get LCP:', error);
      }
    }

    // Get FID
    try {
      const fidEntries = performance.getEntriesByType('first-input');
      if (fidEntries.length > 0) {
        const fid = fidEntries[0] as PerformanceEventTiming;
        newMetrics.fid = fid.processingStart - fid.startTime;
      }
    } catch (error) {
      if (enableConsoleLogging) {
        console.warn('Failed to get FID:', error);
      }
    }

    // Get CLS
    try {
      let clsValue = 0;
      const clsEntries = performance.getEntriesByType('layout-shift');
      clsEntries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      newMetrics.cls = clsValue;
    } catch (error) {
      if (enableConsoleLogging) {
        console.warn('Failed to get CLS:', error);
      }
    }

    // Get FCP
    try {
      const fcpEntries = performance.getEntriesByType('paint');
      const fcpEntry = fcpEntries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        newMetrics.fcp = fcpEntry.startTime;
      }
    } catch (error) {
      if (enableConsoleLogging) {
        console.warn('Failed to get FCP:', error);
      }
    }

    // Get TTFB
    try {
      const navigationEntries = performance.getEntriesByType('navigation');
      if (navigationEntries.length > 0) {
        const nav = navigationEntries[0] as PerformanceNavigationTiming;
        newMetrics.ttfb = nav.responseStart - nav.requestStart;
      }
    } catch (error) {
      if (enableConsoleLogging) {
        console.warn('Failed to get TTFB:', error);
      }
    }

    // Get memory usage
    try {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        newMetrics.memoryUsage = memory.usedJSHeapSize / (1024 * 1024); // Convert to MB
      }
    } catch (error) {
      if (enableConsoleLogging) {
        console.warn('Failed to get memory usage:', error);
      }
    }

    setMetrics(newMetrics);
    const score = calculatePerformanceScore(newMetrics);
    setPerformanceScore(score);
  }, [enableConsoleLogging, calculatePerformanceScore]);

  useEffect(() => {
    // Initial collection
    collectWebVitals();

    // Set up interval for periodic collection
    const interval = setInterval(collectWebVitals, reportInterval);

    // Cleanup
    return () => clearInterval(interval);
  }, [collectWebVitals, reportInterval]);

  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (score: number): string => {
    if (score >= 90) return 'bg-green-100';
    if (score >= 70) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  const formatMetric = (value: number | null, unit: string = 'ms'): string => {
    if (value === null) return 'N/A';
    return `${Math.round(value)}${unit}`;
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        title="Show Performance Monitor"
      >
        📊
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-xl border border-gray-200 p-4 w-80 z-50">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-4">
        {/* Performance Score */}
        <div className="text-center">
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${getScoreBgColor(performanceScore)} ${getScoreColor(performanceScore)}`}>
            Score: {performanceScore}/100
          </div>
        </div>

        {/* Metrics */}
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">LCP:</span>
            <span className="font-mono">{formatMetric(metrics.lcp)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">FID:</span>
            <span className="font-mono">{formatMetric(metrics.fid)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">CLS:</span>
            <span className="font-mono">{formatMetric(metrics.cls, '')}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">FCP:</span>
            <span className="font-mono">{formatMetric(metrics.fcp)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">TTFB:</span>
            <span className="font-mono">{formatMetric(metrics.ttfb)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Memory:</span>
            <span className="font-mono">{formatMetric(metrics.memoryUsage, 'MB')}</span>
          </div>
        </div>

        {/* Refresh Button */}
        <button
          onClick={collectWebVitals}
          className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg transition-colors text-sm"
        >
          Refresh Metrics
        </button>
      </div>
    </div>
  );
};

export default PerformanceMonitor;