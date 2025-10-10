'use client';

import React, { useState, useEffect } from 'react';
import { Activity, Zap, Clock, AlertTriangle } from 'lucide-react';

interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  fcp: number;
  ttfb: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: 0,
    fid: 0,
    cls: 0,
    fcp: 0,
    ttfb: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
        }
        if (entry.entryType === 'first-input') {
          setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
        }
        if (entry.entryType === 'layout-shift') {
          setMetrics(prev => ({ ...prev, cls: entry.value }));
        }
        if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
          setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
        }
      });
    });

    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint'] });
    } catch (e) {
      console.warn('Performance Observer not supported');
    }

    // TTFB measurement
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
    }

    // Show monitor after 3 seconds
    const timer = setTimeout(() => setIsVisible(true), 3000);

    return () => {
      observer?.disconnect();
      clearTimeout(timer);
    };
  }, []);

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

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-slate-800/90 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4 shadow-lg">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-white flex items-center">
          <Activity className="w-4 h-4 mr-2 text-cyan-400" />
          Performance
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between items-center">
          <span className="text-gray-300">LCP</span>
          <span className={getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}>
            {metrics.lcp.toFixed(0)}ms
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-300">FID</span>
          <span className={getScoreColor(metrics.fid, { good: 100, poor: 300 })}>
            {metrics.fid.toFixed(0)}ms
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-300">CLS</span>
          <span className={getScoreColor(metrics.cls, { good: 0.1, poor: 0.25 })}>
            {metrics.cls.toFixed(3)}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-300">FCP</span>
          <span className={getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}>
            {metrics.fcp.toFixed(0)}ms
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-300">TTFB</span>
          <span className={getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}>
            {metrics.ttfb.toFixed(0)}ms
          </span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;