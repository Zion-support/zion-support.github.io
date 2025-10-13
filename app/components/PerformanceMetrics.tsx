import React, { useEffect, useState } from 'react';
import { BarChart3, Clock, Zap, Shield } from 'lucide-react';

interface PerformanceMetricsProps {
  showDetails?: boolean;
}

const PerformanceMetrics: React.FC<PerformanceMetricsProps> = ({ showDetails = false }) => {
  const [metrics, setMetrics] = useState({
    lcp: 0,
    fid: 0,
    cls: 0,
    fcp: 0,
    ttfb: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or when explicitly enabled
    if (process.env.NODE_ENV === 'development' || showDetails) {
      setIsVisible(true);
    }

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
        } else if (entry.entryType === 'first-input') {
          setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
        } else if (entry.entryType === 'layout-shift') {
          setMetrics(prev => ({ ...prev, cls: prev.cls + (entry as any).value }));
        } else if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
          setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
        }
      }
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint'] });

    // TTFB measurement
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
    }

    return () => observer.disconnect();
  }, [showDetails]);

  if (!isVisible) return null;

  const getScoreColor = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.poor) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreIcon = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return '🟢';
    if (value <= thresholds.poor) return '🟡';
    return '🔴';
  };

  return (
    <div className="fixed bottom-4 right-4 bg-slate-900/95 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-white text-xs max-w-xs z-50">
      <div className="flex items-center space-x-2 mb-3">
        <BarChart3 className="w-4 h-4 text-cyan-400" />
        <span className="font-semibold">Performance Metrics</span>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="flex items-center space-x-1">
            <Clock className="w-3 h-3" />
            <span>LCP</span>
          </span>
          <span className={getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}>
            {getScoreIcon(metrics.lcp, { good: 2500, poor: 4000 })} {metrics.lcp.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="flex items-center space-x-1">
            <Zap className="w-3 h-3" />
            <span>FID</span>
          </span>
          <span className={getScoreColor(metrics.fid, { good: 100, poor: 300 })}>
            {getScoreIcon(metrics.fid, { good: 100, poor: 300 })} {metrics.fid.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="flex items-center space-x-1">
            <Shield className="w-3 h-3" />
            <span>CLS</span>
          </span>
          <span className={getScoreColor(metrics.cls, { good: 0.1, poor: 0.25 })}>
            {getScoreIcon(metrics.cls, { good: 0.1, poor: 0.25 })} {metrics.cls.toFixed(3)}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="flex items-center space-x-1">
            <Clock className="w-3 h-3" />
            <span>FCP</span>
          </span>
          <span className={getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}>
            {getScoreIcon(metrics.fcp, { good: 1800, poor: 3000 })} {metrics.fcp.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="flex items-center space-x-1">
            <Zap className="w-3 h-3" />
            <span>TTFB</span>
          </span>
          <span className={getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}>
            {getScoreIcon(metrics.ttfb, { good: 800, poor: 1800 })} {metrics.ttfb.toFixed(0)}ms
          </span>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-white/20 text-xs text-gray-400">
        <div>🟢 Good 🟡 Needs Improvement 🔴 Poor</div>
      </div>
    </div>
  );
};

export default PerformanceMetrics;