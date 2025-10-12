'use client';
import React, { useEffect, useState } from 'react';
import { Activity, Zap, Clock, Database, Cpu, MemoryStick } from 'lucide-react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate performance monitoring
    const interval = setInterval(() => {
      setMetrics(prev => ({
        lcp: Math.random() * 2.5 + 0.5,
        fid: Math.random() * 100 + 10,
        cls: Math.random() * 0.1 + 0.05,
        fcp: Math.random() * 1.5 + 0.3,
        ttfb: Math.random() * 200 + 50
      }));
    }, 5000);

    // Show monitor after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  const getPerformanceColor = (value: number, thresholds: { good: number; needsImprovement: number }) => {
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.needsImprovement) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getPerformanceLabel = (value: number, thresholds: { good: number; needsImprovement: number }) => {
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.needsImprovement) return 'Needs Improvement';
    return 'Poor';
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-slate-900/95 backdrop-blur-lg border border-cyan-500/20 rounded-xl p-4 shadow-lg shadow-cyan-500/10">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <Activity className="w-4 h-4 text-cyan-400" />
          <span className="text-sm font-semibold text-white">Performance</span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        {metrics.lcp && (
          <div className="flex items-center justify-between">
            <span className="text-gray-300">LCP:</span>
            <span className={getPerformanceColor(metrics.lcp, { good: 2.5, needsImprovement: 4.0 })}>
              {metrics.lcp.toFixed(2)}s
            </span>
          </div>
        )}
        
        {metrics.fcp && (
          <div className="flex items-center justify-between">
            <span className="text-gray-300">FCP:</span>
            <span className={getPerformanceColor(metrics.fcp, { good: 1.8, needsImprovement: 3.0 })}>
              {metrics.fcp.toFixed(2)}s
            </span>
          </div>
        )}
        
        {metrics.cls && (
          <div className="flex items-center justify-between">
            <span className="text-gray-300">CLS:</span>
            <span className={getPerformanceColor(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}>
              {metrics.cls.toFixed(3)}
            </span>
          </div>
        )}
        
        {metrics.ttfb && (
          <div className="flex items-center justify-between">
            <span className="text-gray-300">TTFB:</span>
            <span className={getPerformanceColor(metrics.ttfb, { good: 200, needsImprovement: 500 })}>
              {metrics.ttfb.toFixed(0)}ms
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceMonitor;
