import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Zap, Clock, TrendingUp, AlertTriangle } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

interface PerformanceMonitorProps {
  showDetails?: boolean;
  className?: string;
}

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  showDetails = false,
  className = ''
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  });
  const [isVisible, setIsVisible] = useState(false);
  const [performanceScore, setPerformanceScore] = useState<number>(0);

  useEffect(() => {
    // Only show in development or when explicitly enabled
    if (process.env.NODE_ENV === 'development' || showDetails) {
      setIsVisible(true);
    }

    // Measure First Contentful Paint (FCP)
    const measureFCP = () => {
      const fcpEntry = performance.getEntriesByType('paint').find(
        entry => entry.name === 'first-contentful-paint'
      );
      if (fcpEntry) {
        setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
      }
    };

    // Measure Largest Contentful Paint (LCP)
    const measureLCP = () => {
      const lcpEntry = performance.getEntriesByType('largest-contentful-paint')[0];
      if (lcpEntry) {
        setMetrics(prev => ({ ...prev, lcp: lcpEntry.startTime }));
      }
    };

    // Measure Time to First Byte (TTFB)
    const measureTTFB = () => {
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
      }
    };

    // Calculate performance score
    const calculateScore = () => {
      let score = 100;
      
      if (metrics.fcp && metrics.fcp > 1800) score -= 20;
      if (metrics.lcp && metrics.lcp > 2500) score -= 25;
      if (metrics.fid && metrics.fid > 100) score -= 15;
      if (metrics.cls && metrics.cls > 0.1) score -= 20;
      if (metrics.ttfb && metrics.ttfb > 600) score -= 20;
      
      setPerformanceScore(Math.max(0, score));
    };

    // Set up observers
    if ('PerformanceObserver' in window) {
      // FCP observer
      const fcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          }
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // LCP observer
      const lcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // FID observer
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // CLS observer
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }

    // Fallback measurements
    measureFCP();
    measureTTFB();
    
    // Measure LCP after a delay
    setTimeout(measureLCP, 1000);

    // Calculate score when metrics change
    calculateScore();
  }, [showDetails]);

  useEffect(() => {
    // Recalculate score when metrics change
    const calculateScore = () => {
      let score = 100;
      
      if (metrics.fcp && metrics.fcp > 1800) score -= 20;
      if (metrics.lcp && metrics.lcp > 2500) score -= 25;
      if (metrics.fid && metrics.fid > 100) score -= 15;
      if (metrics.cls && metrics.cls > 0.1) score -= 20;
      if (metrics.ttfb && metrics.ttfb > 600) score -= 20;
      
      setPerformanceScore(Math.max(0, score));
    };

    calculateScore();
  }, [metrics]);

  if (!isVisible) return null;

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <TrendingUp className="w-4 h-4" />;
    if (score >= 70) return <Zap className="w-4 h-4" />;
    return <AlertTriangle className="w-4 h-4" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed bottom-4 right-4 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-white text-sm z-50 ${className}`}
    >
      <div className="flex items-center gap-2 mb-3">
        <Activity className="w-4 h-4 text-cyan-400" />
        <span className="font-semibold">Performance</span>
        <div className={`flex items-center gap-1 ml-auto ${getScoreColor(performanceScore)}`}>
          {getScoreIcon(performanceScore)}
          <span className="font-bold">{performanceScore}</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-gray-300">FCP:</span>
          <span className={metrics.fcp && metrics.fcp > 1800 ? 'text-red-400' : 'text-green-400'}>
            {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : '...'}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-300">LCP:</span>
          <span className={metrics.lcp && metrics.lcp > 2500 ? 'text-red-400' : 'text-green-400'}>
            {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : '...'}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-300">TTFB:</span>
          <span className={metrics.ttfb && metrics.ttfb > 600 ? 'text-red-400' : 'text-green-400'}>
            {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : '...'}
          </span>
        </div>
        {metrics.fid && (
          <div className="flex justify-between items-center">
            <span className="text-gray-300">FID:</span>
            <span className={metrics.fid > 100 ? 'text-red-400' : 'text-green-400'}>
              {Math.round(metrics.fid)}ms
            </span>
          </div>
        )}
        {metrics.cls && (
          <div className="flex justify-between items-center">
            <span className="text-gray-300">CLS:</span>
            <span className={metrics.cls > 0.1 ? 'text-red-400' : 'text-green-400'}>
              {metrics.cls.toFixed(3)}
            </span>
          </div>
        )}
      </div>

      <div className="mt-3 pt-3 border-t border-white/20">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>Targets:</span>
          <span>FCP: &lt;1.8s | LCP: &lt;2.5s | TTFB: &lt;600ms</span>
        </div>
      </div>
    </motion.div>
  );
};

export default PerformanceMonitor;
