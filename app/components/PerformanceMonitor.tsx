import React, { useEffect, useState } from 'react';
import { Activity, TrendingUp, Clock, Zap } from 'lucide-react';

interface PerformanceMetrics {
  lcp?: number | null;
  fid?: number | null;
  cls?: number | null;
  fcp?: number | null;
  ttfb?: number | null;
}

interface PerformanceMonitorProps {
  showInProduction?: boolean;
}

export default function PerformanceMonitor({ showInProduction = false }: PerformanceMonitorProps) {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or if explicitly enabled
    if (process.env.NODE_ENV !== 'development' && !showInProduction) {
      return;
    }

    const updateMetrics = () => {
      // Get performance metrics from the browser
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      const lcp = paintEntries.find(entry => entry.name === 'largest-contentful-paint');
      
      setMetrics({
        lcp: lcp ? lcp.startTime : null,
        fid: null, // FID requires user interaction
        cls: null, // CLS requires more complex calculation
        fcp: fcp ? fcp.startTime : null,
        ttfb: navigation ? navigation.responseStart - navigation.requestStart : null
      });
    };

    // Update metrics after page load
    const timer = setTimeout(updateMetrics, 1000);
    
    // Show monitor after 2 seconds
    const visibilityTimer = setTimeout(() => setIsVisible(true), 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(visibilityTimer);
    };
  }, [showInProduction]);

  if (!isVisible) {
    return null;
  }

  const getScoreColor = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'text-gray-400';
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.poor) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreIcon = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return <Activity className="w-4 h-4" />;
    if (value <= thresholds.good) return <TrendingUp className="w-4 h-4" />;
    if (value <= thresholds.poor) return <Clock className="w-4 h-4" />;
    return <Zap className="w-4 h-4" />;
  };

  return (
    <div className="fixed bottom-4 right-4 bg-slate-900/95 backdrop-blur-md border border-cyan-500/20 rounded-lg p-4 shadow-2xl z-50 max-w-xs">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-cyan-400">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex items-center justify-between">
          <span className="text-gray-300">LCP</span>
          <div className="flex items-center space-x-1">
            {getScoreIcon(metrics.lcp, { good: 2500, poor: 4000 })}
            <span className={getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}>
              {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-300">FCP</span>
          <div className="flex items-center space-x-1">
            {getScoreIcon(metrics.fcp, { good: 1800, poor: 3000 })}
            <span className={getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}>
              {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-300">TTFB</span>
          <div className="flex items-center space-x-1">
            {getScoreIcon(metrics.ttfb, { good: 800, poor: 1800 })}
            <span className={getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}>
              {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-300">FID</span>
          <div className="flex items-center space-x-1">
            <Activity className="w-4 h-4" />
            <span className="text-gray-400">N/A</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-300">CLS</span>
          <div className="flex items-center space-x-1">
            <Activity className="w-4 h-4" />
            <span className="text-gray-400">N/A</span>
          </div>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-gray-700">
        <div className="text-xs text-gray-400">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Good</span>
          </div>
          <div className="flex items-center space-x-1 mt-1">
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <span>Needs Improvement</span>
          </div>
          <div className="flex items-center space-x-1 mt-1">
            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
            <span>Poor</span>
          </div>
        </div>
      </div>
    </div>
  );
}