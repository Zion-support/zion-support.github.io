import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  cls: number | null;
  inp: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
  loadTime: number | null;
}

interface PerformanceMonitorProps {
  children: React.ReactNode;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ children }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: null,
    inp: null,
    fcp: null,
    lcp: null,
    ttfb: null,
    loadTime: null
  });

  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    const handleMetric = (metric: any) => {
      setMetrics(prev => ({
        ...prev,
        [metric.name]: metric.value
      }));

      // Send to analytics service
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', metric.name, {
          event_category: 'Web Vitals',
          value: Math.round(metric.value),
          event_label: metric.id,
          non_interaction: true,
        });
      }
    };

    onCLS(handleMetric);
    onINP(handleMetric);
    onFCP(handleMetric);
    onLCP(handleMetric);
    onTTFB(handleMetric);

    // Track page load time
    const loadTime = performance.now();
    setMetrics(prev => ({
      ...prev,
      loadTime
    }));
  }, []);

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
<<<<<<< HEAD
      <h3 className="font-bold mb-2">Performance Metrics</h3>
      <div className="space-y-1">
        <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'Loading...'}</div>
        <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(2)}ms` : 'Loading...'}</div>
        <div>FID: {metrics.fid ? `${metrics.fid.toFixed(2)}ms` : 'Loading...'}</div>
        <div>CLS: {metrics.cls ? `${metrics.cls.toFixed(4)}` : 'Loading...'}</div>
        <div>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'Loading...'}</div>
=======

interface PerformanceMetrics {
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  useEffect(() => {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'paint') {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          }
        } else if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
        } else if (entry.entryType === 'first-input') {
          setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
        } else if (entry.entryType === 'layout-shift') {
          if (!entry.hadRecentInput) {
            setMetrics(prev => ({ 
              ...prev, 
              cls: (prev.cls || 0) + (entry as any).value 
            }));
          }
        }
      });
    });

    observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });

    // Get TTFB
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => ({ 
        ...prev, 
        ttfb: navigationEntry.responseStart - navigationEntry.requestStart 
      }));
    }

    return () => observer.disconnect();
  }, []);

  const getScore = (value: number | undefined, thresholds: { good: number; poor: number }) => {
    if (value === undefined) return 'N/A';
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.poor) return 'Needs Improvement';
    return 'Poor';
  };

  const getScoreColor = (value: number | undefined, thresholds: { good: number; poor: number }) => {
    if (value === undefined) return 'text-gray-400';
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.poor) return 'text-yellow-400';
    return 'text-red-400';
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-purple-600 text-white p-2 rounded-full shadow-lg hover:bg-purple-700 transition-colors z-50"
        title="Performance Monitor"
      >
        📊
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-xl border border-slate-600 z-50 max-w-sm">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-sm">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white text-sm"
        >
          ✕
        </button>
>>>>>>> cursor/website-audit-and-update-with-deployment-2b79
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className={getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}>
            {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className={getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}>
            {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>FID:</span>
          <span className={getScoreColor(metrics.fid, { good: 100, poor: 300 })}>
            {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'N/A'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>CLS:</span>
          <span className={getScoreColor(metrics.cls, { good: 0.1, poor: 0.25 })}>
            {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>TTFB:</span>
          <span className={getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}>
            {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}
          </span>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-slate-600">
        <div className="text-xs text-gray-400">
          <div>Good: Green | Needs Improvement: Yellow | Poor: Red</div>
        </div>
      </div>
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-2b79
    </div>
=======
    return <>{children}</>;
  }

  // Development mode - show performance metrics
  const getScoreColor = (value: number, thresholds: { good: number; needsImprovement: number }) => {
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.needsImprovement) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <>
      {children}
      <div className="fixed bottom-4 right-4 bg-slate-800 border border-slate-600 rounded-lg p-4 text-xs text-white z-50 max-w-xs">
        <h3 className="font-bold mb-2">Performance Metrics</h3>
        <div className="space-y-1">
          {metrics.fcp && (
            <div className="flex justify-between">
              <span className="text-gray-300">FCP:</span>
              <span className={getScoreColor(metrics.fcp, { good: 1800, needsImprovement: 3000 })}>
                {metrics.fcp.toFixed(0)}ms
              </span>
            </div>
          )}
          
          {metrics.lcp && (
            <div className="flex justify-between">
              <span className="text-gray-300">LCP:</span>
              <span className={getScoreColor(metrics.lcp, { good: 2500, needsImprovement: 4000 })}>
                {metrics.lcp.toFixed(0)}ms
              </span>
            </div>
          )}
          
          {metrics.inp && (
            <div className="flex justify-between">
              <span className="text-gray-300">INP:</span>
              <span className={getScoreColor(metrics.inp, { good: 100, needsImprovement: 300 })}>
                {metrics.inp.toFixed(0)}ms
              </span>
            </div>
          )}
          
          {metrics.cls !== null && (
            <div className="flex justify-between">
              <span className="text-gray-300">CLS:</span>
              <span className={getScoreColor(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}>
                {metrics.cls.toFixed(3)}
              </span>
            </div>
          )}

          {metrics.ttfb && (
            <div className="flex justify-between">
              <span className="text-gray-300">TTFB:</span>
              <span className={getScoreColor(metrics.ttfb, { good: 800, needsImprovement: 1800 })}>
                {metrics.ttfb.toFixed(0)}ms
              </span>
            </div>
          )}

          {metrics.loadTime && (
            <div className="flex justify-between">
              <span className="text-gray-300">Load:</span>
              <span className="text-blue-400">
                {metrics.loadTime.toFixed(0)}ms
              </span>
            </div>
          )}
        </div>
        
        <div className="mt-3 pt-2 border-t border-slate-600 text-xs text-gray-400">
          Press Ctrl+Shift+P to toggle
        </div>
      </div>
    </>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-10fb
  );
};

export default PerformanceMonitor;
