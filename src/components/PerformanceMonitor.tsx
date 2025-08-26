import React, { useEffect, useState, useCallback } from 'react';
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
  showDetails?: boolean;
  autoHide?: boolean;
}

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  showDetails = false,
  autoHide = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  const calculateScore = useCallback((metrics: Partial<PerformanceMetrics>): number => {
    let score = 100;
    
    // FCP scoring (0-2500ms is good)
    if (metrics.fcp && metrics.fcp > 2500) {
      score -= Math.min(20, (metrics.fcp - 2500) / 100);
    }
    
    // LCP scoring (0-2500ms is good)
    if (metrics.lcp && metrics.lcp > 2500) {
      score -= Math.min(25, (metrics.lcp - 2500) / 100);
    }
    
    // CLS scoring (0-0.1 is good)
    if (metrics.cls && metrics.cls > 0.1) {
      score -= Math.min(15, metrics.cls * 100);
    }
    
    // TTFB scoring (0-800ms is good)
    if (metrics.ttfb && metrics.ttfb > 800) {
      score -= Math.min(20, (metrics.ttfb - 800) / 100);
    }
    
    return Math.max(0, Math.round(score));
  }, []);

  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreBgColor = (score: number): string => {
    if (score >= 90) return 'bg-green-500/20 border-green-400/30';
    if (score >= 70) return 'bg-yellow-500/20 border-yellow-400/30';
    return 'bg-red-500/20 border-red-400/30';
  };

  const measurePerformance = useCallback(async () => {
    try {
      // Wait for page to be fully loaded
      if (document.readyState !== 'complete') {
        return;
      }

      // Measure FCP
      const fcpEntry = performance.getEntriesByType('paint').find(
        entry => entry.name === 'first-contentful-paint'
      );
      const fcp = fcpEntry ? fcpEntry.startTime : 0;

      // Measure LCP
      const lcpEntry = performance.getEntriesByType('largest-contentful-paint')[0];
      const lcp = lcpEntry ? lcpEntry.startTime : 0;

      // Measure TTFB
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const ttfb = navigationEntry ? navigationEntry.responseStart - navigationEntry.requestStart : 0;

      // Measure CLS
      let cls = 0;
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
              cls += (entry as any).value;
            }
          }
        });
        observer.observe({ entryTypes: ['layout-shift'] });
      }

      // FID measurement (simplified)
      const fid = 0; // Would need user interaction to measure

      const newMetrics: PerformanceMetrics = {
        fcp: Math.round(fcp),
        lcp: Math.round(lcp),
        fid: Math.round(fid),
        cls: Math.round(cls * 1000) / 1000,
        ttfb: Math.round(ttfb),
        score: 0
      };

      newMetrics.score = calculateScore(newMetrics);
      setMetrics(newMetrics);

      // Auto-hide after 5 seconds if enabled
      if (autoHide) {
        setTimeout(() => setIsVisible(false), 5000);
      }
    } catch (error) {
      console.error('Performance measurement failed:', error);
    }
  }, [calculateScore, autoHide]);

  useEffect(() => {
    // Initial measurement
    const timer = setTimeout(measurePerformance, 1000);
    
    // Measure on route changes
    const handleRouteChange = () => {
      setTimeout(measurePerformance, 500);
    };

    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [measurePerformance]);

  if (!metrics || !isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className={`fixed top-4 right-4 z-50 ${getScoreBgColor(metrics.score)} border rounded-lg p-4 backdrop-blur-sm transition-all duration-300 ${
          isExpanded ? 'w-80' : 'w-auto'
        }`}
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-white font-medium text-sm">Performance</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-white/70 hover:text-white transition-colors"
            >
              {isExpanded ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              )}
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white/70 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="text-center mb-3">
          <div className={`text-2xl font-bold ${getScoreColor(metrics.score)}`}>
            {metrics.score}/100
          </div>
          <div className="text-white/70 text-xs">
            {metrics.score >= 90 ? 'Excellent' : metrics.score >= 70 ? 'Good' : 'Needs Improvement'}
          </div>
        </div>

        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-2 text-xs"
          >
            <div className="flex justify-between">
              <span className="text-white/70">FCP:</span>
              <span className={`font-mono ${metrics.fcp <= 2500 ? 'text-green-400' : 'text-red-400'}`}>
                {metrics.fcp}ms
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70">LCP:</span>
              <span className={`font-mono ${metrics.lcp <= 2500 ? 'text-green-400' : 'text-red-400'}`}>
                {metrics.lcp}ms
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70">CLS:</span>
              <span className={`font-mono ${metrics.cls <= 0.1 ? 'text-green-400' : 'text-red-400'}`}>
                {metrics.cls}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70">TTFB:</span>
              <span className={`font-mono ${metrics.ttfb <= 800 ? 'text-green-400' : 'text-red-400'}`}>
                {metrics.ttfb}ms
              </span>
            </div>
          </motion.div>
        )}

        <div className="mt-3 pt-3 border-t border-white/20">
          <button
            onClick={measurePerformance}
            className="w-full bg-white/10 hover:bg-white/20 text-white text-xs py-2 px-3 rounded transition-colors"
          >
            Refresh Metrics
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PerformanceMonitor;