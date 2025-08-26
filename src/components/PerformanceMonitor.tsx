import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  score: number;
}

interface PerformanceMonitorProps {
  isVisible?: boolean;
}

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ isVisible = true }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      startMonitoring();
    }
  }, []);

  const startMonitoring = () => {
    setIsMonitoring(true);
    
    // FCP (First Contentful Paint)
    if ('PerformanceObserver' in window) {
      try {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            setMetrics(prev => ({
              ...prev,
              fcp: Math.round(fcpEntry.startTime)
            } as PerformanceMetrics));
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });
      } catch (e) {
        console.warn('FCP monitoring not supported');
      }
    }

    // LCP (Largest Contentful Paint)
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            setMetrics(prev => ({
              ...prev,
              lcp: Math.round(lastEntry.startTime)
            } as PerformanceMetrics));
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        console.warn('LCP monitoring not supported');
      }
    }

    // CLS (Cumulative Layout Shift)
    if ('PerformanceObserver' in window) {
      try {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
                  for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
          setMetrics(prev => ({
            ...prev,
            cls: Math.round(clsValue * 1000) / 1000
          } as PerformanceMetrics));
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        console.warn('CLS monitoring not supported');
      }
    }

    // TTFB (Time to First Byte)
    if ('PerformanceObserver' in window) {
      try {
        const navigationObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const navigationEntry = entries.find(entry => entry.entryType === 'navigation');
          if (navigationEntry) {
            const ttfb = (navigationEntry as any).responseStart - (navigationEntry as any).requestStart;
            setMetrics(prev => ({
              ...prev,
              ttfb: Math.round(ttfb)
            } as PerformanceMetrics));
          }
        });
        navigationObserver.observe({ entryTypes: ['navigation'] });
      } catch (e) {
        console.warn('TTFB monitoring not supported');
      }
    }

    // Calculate performance score
    setTimeout(() => {
      calculatePerformanceScore();
    }, 2000);
  };

  const calculatePerformanceScore = () => {
    if (!metrics) return;

    let score = 100;
    
    // FCP scoring (0-2500ms is good)
    if (metrics.fcp > 2500) score -= 20;
    else if (metrics.fcp > 1000) score -= 10;
    
    // LCP scoring (0-2500ms is good)
    if (metrics.lcp > 4000) score -= 25;
    else if (metrics.lcp > 2500) score -= 15;
    
    // CLS scoring (0-0.1 is good)
    if (metrics.cls > 0.25) score -= 25;
    else if (metrics.cls > 0.1) score -= 15;
    
    // TTFB scoring (0-800ms is good)
    if (metrics.ttfb > 1800) score -= 20;
    else if (metrics.ttfb > 800) score -= 10;

    setMetrics(prev => ({
      ...prev,
      score: Math.max(0, score)
    } as PerformanceMetrics));
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return 'Excellent';
    if (score >= 70) return 'Good';
    if (score >= 50) return 'Needs Improvement';
    return 'Poor';
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed bottom-4 right-4 z-50"
      >
        <div className="bg-slate-800/90 backdrop-blur-sm border border-slate-600/50 rounded-lg p-4 shadow-xl">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-white">Performance Monitor</h3>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              {showDetails ? '−' : '+'}
            </button>
          </div>

          {metrics?.score !== undefined && (
            <div className="mb-3">
              <div className="flex items-center space-x-2">
                <div className={`text-2xl font-bold ${getScoreColor(metrics.score)}`}>
                  {metrics.score}
                </div>
                <div className="text-sm text-slate-300">/100</div>
                <div className={`text-xs px-2 py-1 rounded-full ${
                  metrics.score >= 90 ? 'bg-green-500/20 text-green-400' :
                  metrics.score >= 70 ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {getScoreLabel(metrics.score)}
                </div>
              </div>
            </div>
          )}

          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-2 text-xs"
              >
                {metrics?.fcp && (
                  <div className="flex justify-between">
                    <span className="text-slate-400">FCP:</span>
                    <span className={`font-mono ${
                      metrics.fcp <= 1000 ? 'text-green-400' :
                      metrics.fcp <= 2500 ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {metrics.fcp}ms
                    </span>
                  </div>
                )}
                {metrics?.lcp && (
                  <div className="flex justify-between">
                    <span className="text-slate-400">LCP:</span>
                    <span className={`font-mono ${
                      metrics.lcp <= 2500 ? 'text-green-400' :
                      metrics.lcp <= 4000 ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {metrics.lcp}ms
                    </span>
                  </div>
                )}
                {metrics?.cls && (
                  <div className="flex justify-between">
                    <span className="text-slate-400">CLS:</span>
                    <span className={`font-mono ${
                      metrics.cls <= 0.1 ? 'text-green-400' :
                      metrics.cls <= 0.25 ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {metrics.cls}
                    </span>
                  </div>
                )}
                {metrics?.ttfb && (
                  <div className="flex justify-between">
                    <span className="text-slate-400">TTFB:</span>
                    <span className={`font-mono ${
                      metrics.ttfb <= 800 ? 'text-green-400' :
                      metrics.ttfb <= 1800 ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {metrics.ttfb}ms
                    </span>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="text-xs text-slate-500 mt-2">
            {isMonitoring ? 'Monitoring...' : 'Not monitoring'}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};