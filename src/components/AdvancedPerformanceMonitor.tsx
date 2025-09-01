import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  Clock, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle,
  X,
  Info,
  BarChart3
} from 'lucide-react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  fcp: number | null;
  fmp: number | null;
  si: number | null;
  tti: number | null;
}

interface PerformanceScore {
  score: number;
  grade: 'A' | 'B' | 'C' | 'D' | 'F';
  color: string;
}

export function AdvancedPerformanceMonitor({ 
  showMetrics = false,
  autoHide = true,
  hideDelay = 5000
}: {
  showMetrics?: boolean;
  autoHide?: boolean;
  hideDelay?: number;
}) {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    fcp: null,
    fmp: null,
    si: null,
    tti: null
  });
  
  const [isVisible, setIsVisible] = useState(showMetrics);
  const [overallScore, setOverallScore] = useState<PerformanceScore>({
    score: 0,
    grade: 'F',
    color: 'text-red-500'
  });

  // Performance thresholds based on Core Web Vitals
  const thresholds = {
    lcp: { good: 2500, needsImprovement: 4000 },
    fid: { good: 100, needsImprovement: 300 },
    cls: { good: 0.1, needsImprovement: 0.25 },
    ttfb: { good: 800, needsImprovement: 1800 },
    fcp: { good: 1800, needsImprovement: 3000 },
    fmp: { good: 2000, needsImprovement: 4000 },
    si: { good: 3400, needsImprovement: 5800 },
    tti: { good: 3800, needsImprovement: 7300 }
  };

  // Calculate performance score
  const calculateScore = useCallback((metrics: PerformanceMetrics): PerformanceScore => {
    let totalScore = 0;
    let metricCount = 0;

    Object.entries(metrics).forEach(([key, value]) => {
      if (value !== null && thresholds[key as keyof typeof thresholds]) {
        const threshold = thresholds[key as keyof typeof thresholds];
        let score = 0;

        if (value <= threshold.good) {
          score = 100;
        } else if (value <= threshold.needsImprovement) {
          score = 50;
        } else {
          score = 0;
        }

        totalScore += score;
        metricCount++;
      }
    });

    const averageScore = metricCount > 0 ? totalScore / metricCount : 0;
    
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
  }, []) ;

    return { score: Math.round(averageScore), grade, color };
  }, []);

  // Measure Core Web Vitals
  const measureCoreWebVitals = useCallback(() => {
    if ('PerformanceObserver' in window) {
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'first-input') {
            setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);

  // Measure other performance metrics
  const measureOtherMetrics = useCallback(() => {
    if (performance.timing) {
      const timing = performance.timing;
      
      // Time to First Byte (TTFB)
      const ttfb = timing.responseStart - timing.requestStart;
      setMetrics(prev => ({ ...prev, ttfb }));

      // First Contentful Paint (FCP)
      if ('PerformanceObserver' in window) {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });
      }

      // First Meaningful Paint (FMP) - approximated
      const fmp = timing.domContentLoadedEventEnd - timing.navigationStart;
      setMetrics(prev => ({ ...prev, fmp }));

      // Speed Index (SI) - approximated
      const si = timing.domContentLoadedEventEnd - timing.navigationStart;
      setMetrics(prev => ({ ...prev, si }));

      // Time to Interactive (TTI) - approximated
      const tti = timing.domContentLoadedEventEnd - timing.navigationStart;
      setMetrics(prev => ({ ...prev, tti }));
    }
  }, []);

  // Get metric status
  const getMetricStatus = (key: keyof PerformanceMetrics, value: number | null) => {
    if (value === null) return { status: 'pending', icon: Clock, color: 'text-gray-400' };
    
    const threshold = thresholds[key];
    if (value <= threshold.good) {
      return { status: 'good', icon: CheckCircle, color: 'text-green-500' };
    } else if (value <= threshold.needsImprovement) {
      return { status: 'needs-improvement', icon: AlertTriangle, color: 'text-yellow-500' };
    } else {
      return { status: 'poor', icon: AlertTriangle, color: 'text-red-500' };
    }
  };

  // Format metric value
  const formatMetricValue = (key: keyof PerformanceMetrics, value: number | null) => {
    if (value === null) return 'Pending...';
    
    switch (key) {
      case 'cls':
        return value.toFixed(3);
      case 'lcp':
      case 'fid':
      case 'ttfb':
      case 'fcp':
      case 'fmp':
      case 'si':
      case 'tti':
        return `${Math.round(value)}ms`;
      default:
        return value.toString();
    }
  };

  // Get metric description
  const getMetricDescription = (key: keyof PerformanceMetrics) => {
    const descriptions = {
      lcp: 'Largest Contentful Paint - Time to render the largest content element',
      fid: 'First Input Delay - Time from first user interaction to response',
      cls: 'Cumulative Layout Shift - Visual stability measure',
      ttfb: 'Time to First Byte - Server response time',
      fcp: 'First Contentful Paint - First content render time',
      fmp: 'First Meaningful Paint - First meaningful content render',
      si: 'Speed Index - Visual loading speed',
      tti: 'Time to Interactive - Time until page is interactive'
    };
    return descriptions[key];
  };

  useEffect(() => {
    const cleanup = measureCoreWebVitals();
    measureOtherMetrics();

    // Auto-hide after delay
    if (autoHide && isVisible) {
      const timer = setTimeout(() => setIsVisible(false), hideDelay);
      return () => clearTimeout(timer);
    }

    return cleanup;
  }, [measureCoreWebVitals, measureOtherMetrics, autoHide, isVisible, hideDelay]);

  useEffect(() => {
    const score = calculateScore(metrics);
    setOverallScore(score);
  }, [metrics, calculateScore]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed bottom-4 right-4 z-50 max-w-sm w-full bg-slate-800/95 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-700/50">
          <div className="flex items-center space-x-2">
            <Activity className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-semibold text-white">Performance Monitor</h3>
          </div>
          <div className="flex items-center space-x-2">
            <div className={`text-2xl font-bold ${overallScore.color}`}>
              {overallScore.grade}
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="p-1 hover:bg-slate-700/50 rounded-lg transition-colors duration-200"
            >
              <X className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Overall Score */}
        <div className="p-4 bg-slate-700/30">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-300">Overall Score</span>
            <span className="text-sm text-gray-400">{overallScore.score}/100</span>
          </div>
          <div className="w-full bg-slate-600 rounded-full h-2">
            <motion.div
              className="h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${overallScore.score}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Metrics List */}
        <div className="max-h-96 overflow-y-auto">
          {Object.entries(metrics).map(([key, value]) => {
            const status = getMetricStatus(key as keyof PerformanceMetrics, value);
            const Icon = status.icon;
            
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex items-center justify-between p-3 border-b border-slate-700/30 hover:bg-slate-700/20 transition-colors duration-200"
              >
                <div className="flex items-center space-x-3 flex-1">
                  <Icon className={`w-4 h-4 ${status.color}`} />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-white capitalize">
                      {key.toUpperCase()}
                    </div>
                    <div className="text-xs text-gray-400">
                      {getMetricDescription(key as keyof PerformanceMetrics)}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-sm font-mono ${status.color}`}>
                    {formatMetricValue(key as keyof PerformanceMetrics, value)}
                  </div>
                  <div className="text-xs text-gray-500 capitalize">
                    {status.status.replace('-', ' ')}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-700/20 border-t border-slate-700/30">
          <div className="flex items-center justify-between text-xs text-gray-400">
            <span>Core Web Vitals</span>
            <div className="flex items-center space-x-1">
              <BarChart3 className="w-3 h-3" />
              <span>Real-time</span>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}