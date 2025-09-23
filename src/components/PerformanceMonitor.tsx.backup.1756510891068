import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Zap, Clock, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

interface PerformanceMonitorProps {
  className?: string;
  showDetails?: boolean;
}

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  className = '',
  showDetails = false 
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

  const calculatePerformanceScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 0;
    let totalMetrics = 0;

    // FCP scoring (0-100)
    if (metrics.fcp !== null) {
      if (metrics.fcp < 1800) score += 100;
      else if (metrics.fcp < 3000) score += 50;
      else if (metrics.fcp < 4000) score += 25;
      totalMetrics++;
    }

    // LCP scoring (0-100)
    if (metrics.lcp !== null) {
      if (metrics.lcp < 2500) score += 100;
      else if (metrics.lcp < 4000) score += 50;
      else if (metrics.lcp < 5000) score += 25;
      totalMetrics++;
    }

    // FID scoring (0-100)
    if (metrics.fid !== null) {
      if (metrics.fid < 100) score += 100;
      else if (metrics.fid < 300) score += 50;
      else if (metrics.fid < 500) score += 25;
      totalMetrics++;
    }

    // CLS scoring (0-100)
    if (metrics.cls !== null) {
      if (metrics.cls < 0.1) score += 100;
      else if (metrics.cls < 0.25) score += 50;
      else if (metrics.cls < 0.4) score += 25;
      totalMetrics++;
    }

    // TTFB scoring (0-100)
    if (metrics.ttfb !== null) {
      if (metrics.ttfb < 800) score += 100;
      else if (metrics.ttfb < 1800) score += 50;
      else if (metrics.ttfb < 3000) score += 25;
      totalMetrics++;
    }

    return totalMetrics > 0 ? Math.round(score / totalMetrics) : 0;
  }, []);

  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    if (score >= 50) return 'text-orange-400';
    return 'text-red-400';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="w-5 h-5 text-green-400" />;
    if (score >= 70) return <TrendingUp className="w-5 h-5 text-yellow-400" />;
    if (score >= 50) return <AlertTriangle className="w-5 h-5 text-orange-400" />;
    return <AlertTriangle className="w-5 h-5 text-red-400" />;
  };

  const getMetricStatus = (metric: keyof PerformanceMetrics, value: number | null): {
    status: 'good' | 'needs-improvement' | 'poor';
    color: string;
    icon: React.ReactNode;
  } => {
    if (value === null) return { status: 'poor', color: 'text-gray-400', icon: <Clock className="w-4 h-4" /> };

    const thresholds = {
      fcp: { good: 1800, needsImprovement: 3000 },
      lcp: { good: 2500, needsImprovement: 4000 },
      fid: { good: 100, needsImprovement: 300 },
      cls: { good: 0.1, needsImprovement: 0.25 },
      ttfb: { good: 800, needsImprovement: 1800 }
    };

    const threshold = thresholds[metric];
    if (value <= threshold.good) {
      return { status: 'good', color: 'text-green-400', icon: <CheckCircle className="w-4 h-4" /> };
    } else if (value <= threshold.needsImprovement) {
      return { status: 'needs-improvement', color: 'text-yellow-400', icon: <AlertTriangle className="w-4 h-4" /> };
    } else {
      return { status: 'poor', color: 'text-red-400', icon: <AlertTriangle className="w-4 h-4" /> };
    }
  };

  useEffect(() => {
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcpEntry = entries[entries.length - 1];
        if (lcpEntry) {
          setMetrics(prev => ({ ...prev, lcp: lcpEntry.startTime }));
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fidEntry = entries[entries.length - 1];
        if (fidEntry) {
          setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }));
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
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

      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
      }

      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);

  useEffect(() => {
    const score = calculatePerformanceScore(metrics);
    setPerformanceScore(score);
  }, [metrics, calculatePerformanceScore]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className={`bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-4 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Activity className="w-5 h-5 text-cyan-400" />
          <h3 className="text-lg font-semibold text-white">Performance Monitor</h3>
        </div>
        <div className="flex items-center space-x-2">
          {getScoreIcon(performanceScore)}
          <span className={`text-2xl font-bold ${getScoreColor(performanceScore)}`}>
            {performanceScore}
          </span>
        </div>
      </div>

      {showDetails && (
        <div className="space-y-3">
          {Object.entries(metrics).map(([key, value]) => {
            const status = getMetricStatus(key as keyof PerformanceMetrics, value);
            const label = {
              fcp: 'First Contentful Paint',
              lcp: 'Largest Contentful Paint',
              fid: 'First Input Delay',
              cls: 'Cumulative Layout Shift',
              ttfb: 'Time to First Byte'
            }[key];

            return (
              <div key={key} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className={status.color}>{status.icon}</div>
                  <span className="text-sm text-gray-300">{label}</span>
                </div>
                <span className="text-sm font-mono text-white">
                  {value !== null ? `${value.toFixed(2)}${key === 'cls' ? '' : 'ms'}` : 'N/A'}
                </span>
              </div>
            );
          })}
        </div>
      )}

      <div className="mt-4 pt-3 border-t border-cyan-400/20">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">Performance Score</span>
          <div className="flex items-center space-x-2">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className={`font-semibold ${getScoreColor(performanceScore)}`}>
              {performanceScore >= 90 ? 'Excellent' : 
               performanceScore >= 70 ? 'Good' : 
               performanceScore >= 50 ? 'Needs Improvement' : 'Poor'}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PerformanceMonitor;
