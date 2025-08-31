import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Zap, Clock, TrendingUp, AlertTriangle } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or when explicitly enabled
    if (process.env.NODE_ENV === 'development' || localStorage.getItem('showPerformanceMonitor') === 'true') {
      setIsVisible(true);
    }

    // Measure First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
      }
    });

    // Measure Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lcpEntry = entries[entries.length - 1];
      if (lcpEntry) {
        setMetrics(prev => ({ ...prev, lcp: lcpEntry.startTime }));
      }
    });

    // Measure First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        if (entry.entryType === 'first-input') {
          setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
        }
      });
    });

    // Measure Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        if (entry.entryType === 'layout-shift' && !entry.hadRecentInput) {
          clsValue += (entry as any).value;
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        }
      });
    });

    // Measure Time to First Byte (TTFB)
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
    }

    try {
      fcpObserver.observe({ entryTypes: ['paint'] });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      fidObserver.observe({ entryTypes: ['first-input'] });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (error) {
      console.warn('PerformanceObserver not supported:', error);
    }

    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);

  const getPerformanceScore = (metric: keyof PerformanceMetrics): { score: number; color: string; label: string } => {
    const value = metrics[metric];
    if (value === null) return { score: 0, color: 'text-gray-400', label: 'N/A' };

    let score = 0;
    let color = 'text-red-500';
    let label = 'Poor';

    switch (metric) {
      case 'fcp':
        if (value < 1800) { score = 100; color = 'text-green-500'; label = 'Good'; }
        else if (value < 3000) { score = 50; color = 'text-yellow-500'; label = 'Needs Improvement'; }
        break;
      case 'lcp':
        if (value < 2500) { score = 100; color = 'text-green-500'; label = 'Good'; }
        else if (value < 4000) { score = 50; color = 'text-yellow-500'; label = 'Needs Improvement'; }
        break;
      case 'fid':
        if (value < 100) { score = 100; color = 'text-green-500'; label = 'Good'; }
        else if (value < 300) { score = 50; color = 'text-yellow-500'; label = 'Needs Improvement'; }
        break;
      case 'cls':
        if (value < 0.1) { score = 100; color = 'text-green-500'; label = 'Good'; }
        else if (value < 0.25) { score = 50; color = 'text-yellow-500'; label = 'Needs Improvement'; }
        break;
      case 'ttfb':
        if (value < 800) { score = 100; color = 'text-green-500'; label = 'Good'; }
        else if (value < 1800) { score = 50; color = 'text-yellow-500'; label = 'Needs Improvement'; }
        break;
    }

    return { score, color, label };
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-4 right-4 bg-slate-900/95 backdrop-blur-sm border border-slate-700 rounded-lg p-4 shadow-xl z-50 max-w-sm"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-white flex items-center gap-2">
          <Activity className="w-4 h-4" />
          Performance Monitor
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          ×
        </button>
      </div>

      <div className="space-y-3">
        {Object.entries(metrics).map(([key, value]) => {
          const { score, color, label } = getPerformanceScore(key as keyof PerformanceMetrics);
          const metricName = key.toUpperCase();
          
          return (
            <div key={key} className="flex items-center justify-between text-xs">
              <span className="text-gray-300">{metricName}:</span>
              <div className="flex items-center gap-2">
                <span className={color}>{label}</span>
                {value !== null && (
                  <span className="text-gray-400">
                    {key === 'cls' ? value.toFixed(3) : `${Math.round(value)}ms`}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-3 pt-3 border-t border-slate-700">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-300">Overall Score:</span>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-green-400 font-medium">
              {Math.round(
                Object.keys(metrics).reduce((acc, key) => {
                  const { score } = getPerformanceScore(key as keyof PerformanceMetrics);
                  return acc + score;
                }, 0) / Object.keys(metrics).length
              )}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PerformanceMonitor;
