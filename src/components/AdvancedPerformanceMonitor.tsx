import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Zap, Clock, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  loadTime: number | null;
}

interface PerformanceScore {
  score: number;
  grade: 'A' | 'B' | 'C' | 'D' | 'F';
  color: string;
}

export const AdvancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    loadTime: null
  });
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const calculateScore = useCallback((metrics: PerformanceMetrics): PerformanceScore => {
    let totalScore = 0;
    let metricCount = 0;

    // FCP scoring (0-100)
    if (metrics.fcp !== null) {
      if (metrics.fcp < 1800) totalScore += 100;
      else if (metrics.fcp < 3000) totalScore += 80;
      else if (metrics.fcp < 4000) totalScore += 60;
      else totalScore += 40;
      metricCount++;
    }

    // LCP scoring (0-100)
    if (metrics.lcp !== null) {
      if (metrics.lcp < 2500) totalScore += 100;
      else if (metrics.lcp < 4000) totalScore += 80;
      else if (metrics.lcp < 6000) totalScore += 60;
      else totalScore += 40;
      metricCount++;
    }

    // FID scoring (0-100)
    if (metrics.fid !== null) {
      if (metrics.fid < 100) totalScore += 100;
      else if (metrics.fid < 300) totalScore += 80;
      else if (metrics.fid < 500) totalScore += 60;
      else totalScore += 40;
      metricCount++;
    }

    // CLS scoring (0-100)
    if (metrics.cls !== null) {
      if (metrics.cls < 0.1) totalScore += 100;
      else if (metrics.cls < 0.25) totalScore += 80;
      else if (metrics.cls < 0.4) totalScore += 60;
      else totalScore += 40;
      metricCount++;
    }

    const averageScore = metricCount > 0 ? Math.round(totalScore / metricCount) : 0;

    let grade: 'A' | 'B' | 'C' | 'D' | 'F';
    let color: string;

    if (averageScore >= 90) {
      grade = 'A';
      color = 'text-green-500';
    } else if (averageScore >= 80) {
      grade = 'B';
      color = 'text-blue-500';
    } else if (averageScore >= 70) {
      grade = 'C';
      color = 'text-yellow-500';
    } else if (averageScore >= 60) {
      grade = 'D';
      color = 'text-orange-500';
    } else {
      grade = 'F';
      color = 'text-red-500';
    }

    return { score: averageScore, grade, color };
  }, []);

  const measurePerformance = useCallback(() => {
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcp = entries[entries.length - 1];
        if (fcp) {
          setMetrics(prev => ({ ...prev, fcp: fcp.startTime }));
        }
      }).observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcp = entries[entries.length - 1];
        if (lcp) {
          setMetrics(prev => ({ ...prev, lcp: lcp.startTime }));
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fid = entries[entries.length - 1];
        if (fid) {
          setMetrics(prev => ({ ...prev, fid: fid.processingStart - fid.startTime }));
        }
      }).observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      new PerformanceObserver((list) => {
        let cls = 0;
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            cls += (entry as any).value;
          }
        }
        setMetrics(prev => ({ ...prev, cls }));
      }).observe({ entryTypes: ['layout-shift'] });
    }

    // Time to First Byte
    if (performance.timing) {
      const ttfb = performance.timing.responseStart - performance.timing.requestStart;
      setMetrics(prev => ({ ...prev, ttfb }));
    }

    // Page Load Time
    window.addEventListener('load', () => {
      const loadTime = performance.now();
      setMetrics(prev => ({ ...prev, loadTime }));
    });
  }, []);

  useEffect(() => {
    measurePerformance();
    
    // Show monitor after 3 seconds
    const timer = setTimeout(() => setIsVisible(true), 3000);
    
    return () => clearTimeout(timer);
  }, [measurePerformance]);

  const performanceScore = calculateScore(metrics);

  const getMetricStatus = (value: number | null, threshold: number, lowerIsBetter: boolean = true) => {
    if (value === null) return { icon: Clock, color: 'text-gray-400', status: 'Measuring...' };
    
    const isGood = lowerIsBetter ? value <= threshold : value >= threshold;
    return {
      icon: isGood ? CheckCircle : AlertTriangle,
      color: isGood ? 'text-green-500' : 'text-yellow-500',
      status: isGood ? 'Good' : 'Needs Improvement'
    };
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 z-50"
    >
      <div className="bg-slate-800/90 backdrop-blur-sm rounded-lg shadow-2xl border border-slate-700/50">
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b border-slate-700/50">
          <div className="flex items-center space-x-2">
            <Activity className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-white">Performance Monitor</span>
          </div>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-slate-400 hover:text-white transition-colors"
          >
            {showDetails ? '−' : '+'}
          </button>
        </div>

        {/* Score Display */}
        <div className="p-3 text-center">
          <div className={`text-2xl font-bold ${performanceScore.color}`}>
            {performanceScore.score}
          </div>
          <div className={`text-lg font-semibold ${performanceScore.color}`}>
            Grade: {performanceScore.grade}
          </div>
        </div>

        {/* Detailed Metrics */}
        <AnimatePresence>
          {showDetails && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="p-3 space-y-2 border-t border-slate-700/50">
                {/* FCP */}
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300">FCP</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-white">
                      {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : '...'}
                    </span>
                    {(() => {
                      const status = getMetricStatus(metrics.fcp, 1800);
                      const Icon = status.icon;
                      return <Icon className={`w-3 h-3 ${status.color}`} />;
                    })()}
                  </div>
                </div>

                {/* LCP */}
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300">LCP</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-white">
                      {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : '...'}
                    </span>
                    {(() => {
                      const status = getMetricStatus(metrics.lcp, 2500);
                      const Icon = status.icon;
                      return <Icon className={`w-3 h-3 ${status.color}`} />;
                    })()}
                  </div>
                </div>

                {/* FID */}
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300">FID</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-white">
                      {metrics.fid ? `${Math.round(metrics.fid)}ms` : '...'}
                    </span>
                    {(() => {
                      const status = getMetricStatus(metrics.fid, 100);
                      const Icon = status.icon;
                      return <Icon className={`w-3 h-3 ${status.color}`} />;
                    })()}
                  </div>
                </div>

                {/* CLS */}
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300">CLS</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-white">
                      {metrics.cls ? metrics.cls.toFixed(3) : '...'}
                    </span>
                    {(() => {
                      const status = getMetricStatus(metrics.cls, 0.1);
                      const Icon = status.icon;
                      return <Icon className={`w-3 h-3 ${status.color}`} />;
                    })()}
                  </div>
                </div>

                {/* TTFB */}
                {metrics.ttfb && (
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300">TTFB</span>
                    <span className="text-white">{Math.round(metrics.ttfb)}ms</span>
                  </div>
                )}

                {/* Load Time */}
                {metrics.loadTime && (
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300">Load Time</span>
                    <span className="text-white">{Math.round(metrics.loadTime)}ms</span>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};