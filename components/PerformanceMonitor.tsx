import React, { useEffect, useState } from 'react';
import { usePerformanceMetrics } from '../hooks/usePerformanceMetrics';
import { PerformanceMetrics } from '../types';

interface PerformanceMonitorProps {
  showMetrics?: boolean;
  logMetrics?: boolean;
  threshold?: {
    loadTime: number;
    firstContentfulPaint: number;
    largestContentfulPaint: number;
    cumulativeLayoutShift: number;
    firstInputDelay: number;
  };
  onThresholdExceeded?: (metrics: PerformanceMetrics) => void;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  showMetrics = false,
  logMetrics = true,
  threshold = {
    loadTime: 3000,
    firstContentfulPaint: 1500,
    largestContentfulPaint: 2500,
    cumulativeLayoutShift: 0.1,
    firstInputDelay: 100
  },
  onThresholdExceeded
}) => {
  const { metrics, isSupported } = usePerformanceMetrics();
  const [isVisible, setIsVisible] = useState(showMetrics);

  useEffect(() => {
    if (!metrics || !isSupported) return;

    if (logMetrics) {
      console.group('🚀 Performance Metrics');
      console.log('Load Time:', `${metrics.loadTime.toFixed(2)}ms`);
      console.log('First Contentful Paint:', `${metrics.firstContentfulPaint.toFixed(2)}ms`);
      console.log('Largest Contentful Paint:', `${metrics.largestContentfulPaint.toFixed(2)}ms`);
      console.log('Cumulative Layout Shift:', metrics.cumulativeLayoutShift.toFixed(4));
      console.log('First Input Delay:', `${metrics.firstInputDelay.toFixed(2)}ms`);
      console.groupEnd();
    }

    // Check thresholds
    const exceededThresholds = [];
    if (metrics.loadTime > threshold.loadTime) exceededThresholds.push('Load Time');
    if (metrics.firstContentfulPaint > threshold.firstContentfulPaint) exceededThresholds.push('FCP');
    if (metrics.largestContentfulPaint > threshold.largestContentfulPaint) exceededThresholds.push('LCP');
    if (metrics.cumulativeLayoutShift > threshold.cumulativeLayoutShift) exceededThresholds.push('CLS');
    if (metrics.firstInputDelay > threshold.firstInputDelay) exceededThresholds.push('FID');

    if (exceededThresholds.length > 0) {
      console.warn('⚠️ Performance thresholds exceeded:', exceededThresholds);
      if (onThresholdExceeded) {
        onThresholdExceeded(metrics);
      }
    }
  }, [metrics, isSupported, logMetrics, threshold, onThresholdExceeded]);

  if (!isSupported || !metrics) {
    return null;
  }

  const getScore = (value: number, threshold: number, reverse = false) => {
    const ratio = reverse ? threshold / value : value / threshold;
    if (ratio >= 1) return 'poor';
    if (ratio >= 0.7) return 'needs-improvement';
    return 'good';
  };

  const getScoreColor = (score: string) => {
    switch (score) {
      case 'good': return 'text-green-400';
      case 'needs-improvement': return 'text-yellow-400';
      case 'poor': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-slate-800 hover:bg-slate-700 text-white p-2 rounded-full shadow-lg transition-colors z-50"
        title="Show Performance Metrics"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-900 border border-slate-700 rounded-lg p-4 shadow-2xl z-50 max-w-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-white">Performance Metrics</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-slate-400 hover:text-white transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between items-center">
          <span className="text-slate-300">Load Time</span>
          <span className={getScoreColor(getScore(metrics.loadTime, threshold.loadTime))}>
            {metrics.loadTime.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-slate-300">FCP</span>
          <span className={getScoreColor(getScore(metrics.firstContentfulPaint, threshold.firstContentfulPaint))}>
            {metrics.firstContentfulPaint.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-slate-300">LCP</span>
          <span className={getScoreColor(getScore(metrics.largestContentfulPaint, threshold.largestContentfulPaint))}>
            {metrics.largestContentfulPaint.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-slate-300">CLS</span>
          <span className={getScoreColor(getScore(metrics.cumulativeLayoutShift, threshold.cumulativeLayoutShift, true))}>
            {metrics.cumulativeLayoutShift.toFixed(3)}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-slate-300">FID</span>
          <span className={getScoreColor(getScore(metrics.firstInputDelay, threshold.firstInputDelay))}>
            {metrics.firstInputDelay.toFixed(0)}ms
          </span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;