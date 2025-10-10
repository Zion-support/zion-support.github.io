'use client';

import React, { useState, useEffect } from 'react';
import { usePerformanceMonitor } from '../hooks/usePerformanceMonitor';

const PerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const metrics = usePerformanceMonitor();

  useEffect(() => {
    // Show performance monitor in development
    if (process.env.NODE_ENV === 'development') {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) {
    return null;
  }

  const getScoreColor = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.poor) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreText = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.poor) return 'Needs Improvement';
    return 'Poor';
  };

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-lg p-4 text-xs text-white z-50 max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-cyan-400">Performance</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2">
        {metrics.fcp && (
          <div className="flex justify-between">
            <span>FCP:</span>
            <span className={getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}>
              {Math.round(metrics.fcp)}ms
            </span>
          </div>
        )}
        
        {metrics.lcp && (
          <div className="flex justify-between">
            <span>LCP:</span>
            <span className={getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}>
              {Math.round(metrics.lcp)}ms
            </span>
          </div>
        )}
        
        {metrics.fid && (
          <div className="flex justify-between">
            <span>FID:</span>
            <span className={getScoreColor(metrics.fid, { good: 100, poor: 300 })}>
              {Math.round(metrics.fid)}ms
            </span>
          </div>
        )}
        
        {metrics.cls && (
          <div className="flex justify-between">
            <span>CLS:</span>
            <span className={getScoreColor(metrics.cls, { good: 0.1, poor: 0.25 })}>
              {metrics.cls.toFixed(3)}
            </span>
          </div>
        )}
        
        {metrics.ttfb && (
          <div className="flex justify-between">
            <span>TTFB:</span>
            <span className={getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}>
              {Math.round(metrics.ttfb)}ms
            </span>
          </div>
        )}
        
        {metrics.memoryUsage && (
          <div className="pt-2 border-t border-slate-600">
            <div className="text-xs text-gray-400 mb-1">Memory Usage</div>
            <div className="flex justify-between">
              <span>Used:</span>
              <span>{metrics.memoryUsage.used}MB</span>
            </div>
            <div className="flex justify-between">
              <span>Total:</span>
              <span>{metrics.memoryUsage.total}MB</span>
            </div>
            <div className="flex justify-between">
              <span>Limit:</span>
              <span>{metrics.memoryUsage.limit}MB</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceMonitor;