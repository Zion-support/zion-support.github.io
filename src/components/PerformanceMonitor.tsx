import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Zap, Clock, TrendingUp, AlertTriangle } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  loadTime: number; // Total page load time
}

interface PerformanceScore {
  score: number;
  grade: 'A' | 'B' | 'C' | 'D' | 'F';
  color: string;
}

export const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [score, setScore] = useState<PerformanceScore | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or when explicitly enabled
    if (process.env.NODE_ENV === 'development' || localStorage.getItem('zion-show-performance') === 'true') {
      setIsVisible(true);
      measurePerformance();
    }
  }, []);

  const measurePerformance = () => {
    // Measure page load time
    const loadTime = performance.now();
    
    // Measure Core Web Vitals
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const fcp = entries[entries.length - 1] as PerformanceEntry;
        if (fcp) {
          updateMetrics({ fcp: fcp.startTime });
        }
      }).observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lcp = entries[entries.length - 1] as PerformanceEntry;
        if (lcp) {
          updateMetrics({ lcp: lcp.startTime });
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const fid = entries[entries.length - 1] as PerformanceEntry;
        if (fid) {
          updateMetrics({ fid: fid.processingStart - fid.startTime });
        }
      }).observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      new PerformanceObserver((entryList) => {
        let cls = 0;
        for (const entry of entryList.getEntries()) {
          if (!entry.hadRecentInput) {
            cls += (entry as any).value;
          }
        }
        updateMetrics({ cls });
      }).observe({ entryTypes: ['layout-shift'] });
    }

    // Measure Time to First Byte
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      const ttfb = navigation.responseStart - navigation.requestStart;
      updateMetrics({ ttfb, loadTime });
    }

    // Fallback load time measurement
    window.addEventListener('load', () => {
      const totalLoadTime = performance.now();
      updateMetrics({ loadTime: totalLoadTime });
    });
  };

  const updateMetrics = (newMetrics: Partial<PerformanceMetrics>) => {
    setMetrics(prev => {
      const updated = { ...prev, ...newMetrics } as PerformanceMetrics;
      
      // Calculate performance score
      if (updated.fcp && updated.lcp && updated.fid && updated.cls) {
        const score = calculatePerformanceScore(updated);
        setScore(score);
      }
      
      return updated;
    });
  };

  const calculatePerformanceScore = (metrics: PerformanceMetrics): PerformanceScore => {
    let totalScore = 0;
    let maxScore = 0;

    // FCP scoring (0-25 points)
    if (metrics.fcp <= 1800) totalScore += 25;
    else if (metrics.fcp <= 3000) totalScore += 15;
    else if (metrics.fcp <= 4000) totalScore += 5;
    maxScore += 25;

    // LCP scoring (0-25 points)
    if (metrics.lcp <= 2500) totalScore += 25;
    else if (metrics.lcp <= 4000) totalScore += 15;
    else if (metrics.lcp <= 6000) totalScore += 5;
    maxScore += 25;

    // FID scoring (0-25 points)
    if (metrics.fid <= 100) totalScore += 25;
    else if (metrics.fid <= 300) totalScore += 15;
    else if (metrics.fid <= 500) totalScore += 5;
    maxScore += 25;

    // CLS scoring (0-25 points)
    if (metrics.cls <= 0.1) totalScore += 25;
    else if (metrics.cls <= 0.25) totalScore += 15;
    else if (metrics.cls <= 0.4) totalScore += 5;
    maxScore += 25;

    const percentage = (totalScore / maxScore) * 100;
    
    let grade: PerformanceScore['grade'];
    let color: string;
    
    if (percentage >= 90) {
      grade = 'A';
      color = 'text-green-400';
    } else if (percentage >= 80) {
      grade = 'B';
      color = 'text-blue-400';
    } else if (percentage >= 70) {
      grade = 'C';
      color = 'text-yellow-400';
    } else if (percentage >= 60) {
      grade = 'D';
      color = 'text-orange-400';
    } else {
      grade = 'F';
      color = 'text-red-400';
    }

    return { score: percentage, grade, color };
  };

  const formatMetric = (value: number, unit: string = 'ms'): string => {
    if (value < 1000) return `${Math.round(value)}${unit}`;
    return `${(value / 1000).toFixed(1)}s`;
  };

  const getMetricColor = (value: number, thresholds: { good: number; needsImprovement: number }): string => {
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.needsImprovement) return 'text-yellow-400';
    return 'text-red-400';
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed bottom-6 left-6 bg-zion-slate-dark/95 backdrop-blur-xl border border-zion-cyan/20 rounded-xl shadow-2xl shadow-zion-cyan/20 p-4 max-w-sm z-40"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-zion-cyan font-medium flex items-center">
          <Activity className="w-4 h-4 mr-2" />
          Performance Monitor
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-zion-slate-light hover:text-zion-cyan transition-colors"
        >
          ×
        </button>
      </div>

      {score && (
        <div className="mb-4 p-3 bg-zion-slate-light/10 rounded-lg border border-zion-cyan/20">
          <div className="flex items-center justify-between">
            <span className="text-sm text-zion-slate-light">Overall Score</span>
            <span className={`text-2xl font-bold ${score.color}`}>
              {score.grade}
            </span>
          </div>
          <div className="mt-2">
            <div className="w-full bg-zion-slate-light/20 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-500 ${
                  score.score >= 90 ? 'bg-green-400' :
                  score.score >= 80 ? 'bg-blue-400' :
                  score.score >= 70 ? 'bg-yellow-400' :
                  score.score >= 60 ? 'bg-orange-400' : 'bg-red-400'
                }`}
                style={{ width: `${score.score}%` }}
              />
            </div>
            <span className={`text-xs mt-1 block ${score.color}`}>
              {Math.round(score.score)}%
            </span>
          </div>
        </div>
      )}

      {metrics && (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="flex items-center space-x-2">
              <Zap className="w-3 h-3 text-zion-cyan" />
              <span className="text-zion-slate-light">FCP:</span>
              <span className={getMetricColor(metrics.fcp, { good: 1800, needsImprovement: 3000 })}>
                {formatMetric(metrics.fcp)}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-3 h-3 text-zion-cyan" />
              <span className="text-zion-slate-light">LCP:</span>
              <span className={getMetricColor(metrics.lcp, { good: 2500, needsImprovement: 4000 })}>
                {formatMetric(metrics.lcp)}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-3 h-3 text-zion-cyan" />
              <span className="text-zion-slate-light">FID:</span>
              <span className={getMetricColor(metrics.fid, { good: 100, needsImprovement: 300 })}>
                {formatMetric(metrics.fid)}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <AlertTriangle className="w-3 h-3 text-zion-cyan" />
              <span className="text-zion-slate-light">CLS:</span>
              <span className={getMetricColor(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}>
                {metrics.cls.toFixed(3)}
              </span>
            </div>
          </div>

          {metrics.loadTime && (
            <div className="pt-2 border-t border-zion-cyan/20">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zion-slate-light">Load Time:</span>
                <span className={getMetricColor(metrics.loadTime, { good: 2000, needsImprovement: 4000 })}>
                  {formatMetric(metrics.loadTime)}
                </span>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="mt-4 pt-3 border-t border-zion-cyan/20">
        <button
          onClick={() => {
            localStorage.setItem('zion-show-performance', 'false');
            setIsVisible(false);
          }}
          className="text-xs text-zion-slate-light hover:text-zion-cyan transition-colors"
        >
          Hide permanently
        </button>
      </div>
    </motion.div>
  );
};
