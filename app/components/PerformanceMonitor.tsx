'use client';
import React, { useEffect, useState } from 'react';

<<<<<<< HEAD
interface PerformanceMetrics {lcp?: number;}
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;}const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({})
=======
interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
  loadTime?: number;
  memoryUsage?: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
>>>>>>> cursor/website-audit-and-update-with-deployment-a217
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {if (typeof window === 'undefined') return;

<<<<<<< HEAD
    // Only show in development or when performance monitoring is enabled;
    const shouldMonitor = process.env.NODE_ENV === 'development' || 
                         localStorage.getItem('performance-monitoring') === 'true';

    if (!shouldMonitor) return;

    const updateMetrics = (newMetrics: Partial<PerformanceMetrics>) => {,
      setMetrics(prev => ({ ...prev, ...newMetrics)}));
    }

    // Monitor Core Web Vitals;
    if ('web-vitals' in window) {import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB)}) => {getCLS((metric) => updateMetrics({ cls: metric.value ,)}));
        getFID((metric) => updateMetrics({fid: metric.value ,)}));
        getFCP((metric) => updateMetrics({fcp: metric.value ,)}));
        getLCP((metric) => updateMetrics({lcp: metric.value ,)}));
        getTTFB((metric) => updateMetrics({ttfb: metric.value ,)}));
      })
    }

    // Monitor performance with Performance Observer;
    if ('PerformanceObserver' in window) {const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            updateMetrics({ lcp: entry.startTime ,)})
          }
          if (entry.entryType === 'first-input') {updateMetrics({ fid: entry.processingStart - entry.startTime ,)})
          }
          if (entry.entryType === 'paint') {if (entry.name === 'first-contentful-paint') {
              updateMetrics({ fcp: entry.startTime ,)})
            }
          }
        })
      })

      try {observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'paint'])}})
      } catch (e) {console.warn('Performance Observer not supported:', e);}return () => observer.disconnect();
    }

    // Show performance panel after 3 seconds;
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible || Object.keys(metrics).length === 0) {return null;}const getScoreColor = (value: number, thresholds: {good: number; poor: number ,}) => {if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.poor) return 'text-yellow-400';
    return 'text-red-400';}const getScoreText = (value: number, thresholds: {good: number; poor: number ,}) => {if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.poor) return 'Needs Improvement';
    return 'Poor';}return(<div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-lg p-4 text-xs text-white z-50 max-w-xs">)</div>
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-cyan-400">Performance</h3>
        <button;
          onClick={() =>setIsVisible(false)</button>}className="text-gray-400 hover: text-white",
=======
    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime;
      const lcp = performance.getEntriesByType('largest-contentful-paint')[0]?.startTime;
      
      const newMetrics: PerformanceMetrics = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        ttfb: navigation.responseStart - navigation.requestStart,
        fcp: fcp,
        lcp: lcp,
        memoryUsage: (performance as any).memory?.usedJSHeapSize
      };

      setMetrics(newMetrics);
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Monitor for LCP
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
    });

    try {
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      // LCP not supported
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
      observer.disconnect();
    };
  }, []);

  // Toggle visibility with Ctrl+Shift+P
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-slate-900/95 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-4 text-white text-xs font-mono z-50 max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-cyan-400 font-semibold">Performance</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
>>>>>>> cursor/website-audit-and-update-with-deployment-a217
        >
          ×
        </button>
      </div>
      
<<<<<<< HEAD
      <div className="space-y-1">{metrics.lcp && (</div>
          <div className="flex justify-between">
            <span>LCP: </span>,
            <span className={getScoreColor(metrics.lcp, { good: 2500, poor: 4000 ,)})}>{Math.round(metrics.lcp)</span>}ms({getScoreText(metrics.lcp, { good: 2500, poor: 4000 ,)})})
            </span>
          </div>
        )}
        
        {metrics.fid && (
          <div className="flex justify-between">
            <span>FID: </span>,
            <span className={getScoreColor(metrics.fid, { good: 100, poor: 300 ,)})}>{Math.round(metrics.fid)</span>}ms({getScoreText(metrics.fid, { good: 100, poor: 300 ,)})})
            </span>
          </div>
        )}
        
        {metrics.cls && (
          <div className="flex justify-between">
            <span>CLS: </span>,
            <span className={getScoreColor(metrics.cls, { good: 0.1, poor: 0.25 ,)})}>{metrics.cls.toFixed(3)</span>}({getScoreText(metrics.cls, { good: 0.1, poor: 0.25 ,)})})
            </span>
          </div>
        )}
        
        {metrics.fcp && (
          <div className="flex justify-between">
            <span>FCP: </span>,
            <span className={getScoreColor(metrics.fcp, { good: 1800, poor: 3000 ,)})}>{Math.round(metrics.fcp)</span>}ms({getScoreText(metrics.fcp, { good: 1800, poor: 3000 ,)})})
            </span>
          </div>
        )}
        
        {metrics.ttfb && (
          <div className="flex justify-between">
            <span>TTFB: </span>,
            <span className={getScoreColor(metrics.ttfb, { good: 800, poor: 1800 ,)})}>{Math.round(metrics.ttfb)</span>}ms({getScoreText(metrics.ttfb, { good: 800, poor: 1800 ,)})})
            </span>
          </div>
        )}
=======
      <div className="space-y-1">
        {metrics.loadTime && (
          <div>Load Time: <span className="text-green-400">{metrics.loadTime.toFixed(0)}ms</span></div>
        )}
        {metrics.ttfb && (
          <div>TTFB: <span className="text-yellow-400">{metrics.ttfb.toFixed(0)}ms</span></div>
        )}
        {metrics.fcp && (
          <div>FCP: <span className="text-blue-400">{metrics.fcp.toFixed(0)}ms</span></div>
        )}
        {metrics.lcp && (
          <div>LCP: <span className="text-purple-400">{metrics.lcp.toFixed(0)}ms</span></div>
        )}
        {metrics.memoryUsage && (
          <div>Memory: <span className="text-orange-400">{(metrics.memoryUsage / 1024 / 1024).toFixed(1)}MB</span></div>
        )}
      </div>
      
      <div className="mt-2 text-gray-400 text-xs">
        Press Ctrl+Shift+P to toggle
>>>>>>> cursor/website-audit-and-update-with-deployment-a217
      </div>
    </div>
  );
};

export default PerformanceMonitor;
