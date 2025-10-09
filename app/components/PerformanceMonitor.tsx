'use client';
import React, { useEffect, useState } from 'react';
import { Activity, Zap, Clock, Shield } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  loadTime: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    const measurePerformance = () => {
      // Measure Core Web Vitals
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigation) {
        const fcp = performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0;
        const lcp = performance.getEntriesByType('largest-contentful-paint')[0]?.startTime || 0;
        const fid = performance.getEntriesByType('first-input')[0]?.processingStart || 0;
        const cls = performance.getEntriesByType('layout-shift').reduce((acc, entry) => acc + (entry as any).value, 0);
        const ttfb = navigation.responseStart - navigation.requestStart;
        const loadTime = navigation.loadEventEnd - navigation.navigationStart;

        setMetrics({
          fcp: Math.round(fcp),
          lcp: Math.round(lcp),
          fid: Math.round(fid),
          cls: Math.round(cls * 1000) / 1000,
          ttfb: Math.round(ttfb),
          loadTime: Math.round(loadTime)
        });

        // Send to analytics (if available)
        if (typeof window !== 'undefined' && 'gtag' in window) {
          (window as any).gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'Core Web Vitals',
            custom_map: {
              fcp: fcp,
              lcp: lcp,
              fid: fid,
              cls: cls,
              ttfb: ttfb
            }
          });
        }
      }
    };

    // Wait for page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Show performance monitor after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  if (!isVisible || !metrics) return null;

  const getScore = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'good';
    if (value <= thresholds.poor) return 'needs-improvement';
    return 'poor';
  };

  const fcpScore = getScore(metrics.fcp, { good: 1800, poor: 3000 });
  const lcpScore = getScore(metrics.lcp, { good: 2500, poor: 4000 });
  const fidScore = getScore(metrics.fid, { good: 100, poor: 300 });
  const clsScore = getScore(metrics.cls, { good: 0.1, poor: 0.25 });

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-slate-900/95 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-4 max-w-xs">
      <div className="flex items-center space-x-2 mb-3">
        <Activity className="w-5 h-5 text-cyan-400" />
        <h3 className="text-sm font-semibold text-white">Performance</h3>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between items-center">
          <span className="text-gray-300">FCP</span>
          <span className={`font-mono ${
            fcpScore === 'good' ? 'text-green-400' : 
            fcpScore === 'needs-improvement' ? 'text-yellow-400' : 'text-red-400'
          }`}>
            {metrics.fcp}ms
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300">LCP</span>
          <span className={`font-mono ${
            lcpScore === 'good' ? 'text-green-400' : 
            lcpScore === 'needs-improvement' ? 'text-yellow-400' : 'text-red-400'
          }`}>
            {metrics.lcp}ms
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300">FID</span>
          <span className={`font-mono ${
            fidScore === 'good' ? 'text-green-400' : 
            fidScore === 'needs-improvement' ? 'text-yellow-400' : 'text-red-400'
          }`}>
            {metrics.fid}ms
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300">CLS</span>
          <span className={`font-mono ${
            clsScore === 'good' ? 'text-green-400' : 
            clsScore === 'needs-improvement' ? 'text-yellow-400' : 'text-red-400'
          }`}>
            {metrics.cls}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300">Load Time</span>
          <span className="font-mono text-cyan-400">{metrics.loadTime}ms</span>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-gray-700">
        <div className="flex items-center space-x-1 text-xs text-gray-400">
          <Shield className="w-3 h-3" />
          <span>Enterprise Grade</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;