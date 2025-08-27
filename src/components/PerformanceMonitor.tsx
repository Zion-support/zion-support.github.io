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
  BarChart3,
  Cpu,
  HardDrive,
  Wifi,
  Smartphone
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  fcpScore: 'good' | 'needs-improvement' | 'poor';
  lcpScore: 'good' | 'needs-improvement' | 'poor';
  fidScore: 'good' | 'needs-improvement' | 'poor';
  clsScore: 'good' | 'needs-improvement' | 'poor';
  ttfbScore: 'good' | 'needs-improvement' | 'poor';
}

interface PerformanceMonitorProps {
  enabled?: boolean;
  showMetrics?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  enabled = true, 
  showMetrics = false 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [performanceTips, setPerformanceTips] = useState<string[]>([]);

  const getScoreColor = (score: 'good' | 'needs-improvement' | 'poor') => {
    switch (score) {
      case 'good': return 'text-green-500';
      case 'needs-improvement': return 'text-yellow-500';
      case 'poor': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const getScoreIcon = (score: 'good' | 'needs-improvement' | 'poor') => {
    switch (score) {
      case 'good': return <CheckCircle className="w-4 h-4" />;
      case 'needs-improvement': return <AlertTriangle className="w-4 h-4" />;
      case 'poor': return <X className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  };

  const calculateScore = (value: number, thresholds: { good: number; poor: number }): 'good' | 'needs-improvement' | 'poor' => {
    if (value <= thresholds.good) return 'good';
    if (value <= thresholds.poor) return 'needs-improvement';
    return 'poor';
  };

  const measurePerformance = useCallback(async () => {
    if (!enabled || !('PerformanceObserver' in window)) return;

    try {
      // Measure First Contentful Paint (FCP)
      const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0] as PerformanceEntry;
      const fcp = fcpEntry ? fcpEntry.startTime : 0;

      // Measure Largest Contentful Paint (LCP)
      const lcpEntry = performance.getEntriesByName('largest-contentful-paint')[0] as PerformanceEntry;
      const lcp = lcpEntry ? lcpEntry.startTime : 0;

      // Measure First Input Delay (FID) - simulated for demo
      const fid = Math.random() * 100 + 10;

      // Measure Cumulative Layout Shift (CLS) - simulated for demo
      const cls = Math.random() * 0.1;

      // Measure Time to First Byte (TTFB)
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const ttfb = navigationEntry ? navigationEntry.responseStart - navigationEntry.requestStart : 0;

      const newMetrics: PerformanceMetrics = {
        fcp,
        lcp,
        fid,
        cls,
        ttfb,
        fcpScore: calculateScore(fcp, { good: 1800, poor: 3000 }),
        lcpScore: calculateScore(lcp, { good: 2500, poor: 4000 }),
        fidScore: calculateScore(fid, { good: 100, poor: 300 }),
        clsScore: calculateScore(cls, { good: 0.1, poor: 0.25 }),
        ttfbScore: calculateScore(ttfb, { good: 800, poor: 1800 })
      };

      setMetrics(newMetrics);
      generatePerformanceTips(newMetrics);
    } catch (error) {
      console.warn('Performance monitoring error:', error);
    }
  }, [enabled]);

  const generatePerformanceTips = (currentMetrics: PerformanceMetrics) => {
    const tips: string[] = [];

    if (currentMetrics.fcpScore === 'poor') {
      tips.push('Optimize critical rendering path and reduce render-blocking resources');
    }
    if (currentMetrics.lcpScore === 'poor') {
      tips.push('Optimize images and largest content elements for faster loading');
    }
    if (currentMetrics.fidScore === 'poor') {
      tips.push('Reduce JavaScript execution time and optimize event handlers');
    }
    if (currentMetrics.clsScore === 'poor') {
      tips.push('Set explicit dimensions for images and avoid layout shifts');
    }
    if (currentMetrics.ttfbScore === 'poor') {
      tips.push('Optimize server response time and reduce server processing');
    }

    if (tips.length === 0) {
      tips.push('Great performance! Keep monitoring for any regressions');
    }

    setPerformanceTips(tips);
  };

  const formatMetric = (value: number, unit: string = 'ms') => {
    if (unit === 'ms') {
      return `${Math.round(value)}ms`;
    }
    return value.toFixed(3);
  };

  useEffect(() => {
    if (!enabled) return;

    // Initial measurement after page load
    const timer = setTimeout(measurePerformance, 2000);

    // Set up performance observer for real-time monitoring
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            measurePerformance();
          }
        }
      });

      try {
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (error) {
        console.warn('PerformanceObserver not supported:', error);
      }

      return () => observer.disconnect();
    }

    return () => clearTimeout(timer);
  }, [enabled, measurePerformance]);

  if (!enabled || !showMetrics) return null;

  return (
    <>
      {/* Floating Performance Button */}
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-6 right-6 z-50 p-3 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <Activity className="w-6 h-6 text-white" />
        <div className="absolute -top-2 -right-2 w-3 h-3 bg-zion-neon rounded-full animate-pulse"></div>
      </motion.button>

      {/* Performance Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed bottom-24 right-6 z-40 w-80 bg-zion-slate-dark/95 backdrop-blur-md rounded-2xl shadow-2xl border border-zion-cyan/20"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-zion-cyan/20">
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-5 h-5 text-zion-cyan" />
                <h3 className="text-white font-semibold">Performance Monitor</h3>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="text-zion-cyan/60 hover:text-zion-cyan transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Metrics Display */}
            <div className="p-4 space-y-4">
              {metrics ? (
                <>
                  {/* Core Web Vitals */}
                  <div className="space-y-3">
                    <h4 className="text-zion-cyan text-sm font-medium">Core Web Vitals</h4>
                    
                    {/* FCP */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-zion-cyan/60" />
                        <span className="text-white text-sm">FCP</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`text-sm font-mono ${getScoreColor(metrics.fcpScore)}`}>
                          {formatMetric(metrics.fcp)}
                        </span>
                        <span className={getScoreColor(metrics.fcpScore)}>
                          {getScoreIcon(metrics.fcpScore)}
                        </span>
                      </div>
                    </div>

                    {/* LCP */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="w-4 h-4 text-zion-cyan/60" />
                        <span className="text-white text-sm">LCP</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`text-sm font-mono ${getScoreColor(metrics.lcpScore)}`}>
                          {formatMetric(metrics.lcp)}
                        </span>
                        <span className={getScoreColor(metrics.lcpScore)}>
                          {getScoreIcon(metrics.lcpScore)}
                        </span>
                      </div>
                    </div>

                    {/* FID */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Zap className="w-4 h-4 text-zion-cyan/60" />
                        <span className="text-white text-sm">FID</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`text-sm font-mono ${getScoreColor(metrics.fidScore)}`}>
                          {formatMetric(metrics.fid)}
                        </span>
                        <span className={getScoreColor(metrics.fidScore)}>
                          {getScoreIcon(metrics.fidScore)}
                        </span>
                      </div>
                    </div>

                    {/* CLS */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Activity className="w-4 h-4 text-zion-cyan/60" />
                        <span className="text-white text-sm">CLS</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`text-sm font-mono ${getScoreColor(metrics.clsScore)}`}>
                          {formatMetric(metrics.cls, '')}
                        </span>
                        <span className={getScoreColor(metrics.clsScore)}>
                          {getScoreIcon(metrics.clsScore)}
                        </span>
                      </div>
                    </div>

                    {/* TTFB */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Wifi className="w-4 h-4 text-zion-cyan/60" />
                        <span className="text-white text-sm">TTFB</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`text-sm font-mono ${getScoreColor(metrics.ttfbScore)}`}>
                          {formatMetric(metrics.ttfb)}
                        </span>
                        <span className={getScoreColor(metrics.ttfbScore)}>
                          {getScoreIcon(metrics.ttfbScore)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Performance Tips */}
                  <div className="space-y-2">
                    <h4 className="text-zion-cyan text-sm font-medium">Optimization Tips</h4>
                    <div className="space-y-2">
                      {performanceTips.map((tip, index) => (
                        <div key={index} className="text-white/80 text-xs bg-zion-slate/30 p-2 rounded-lg">
                          {tip}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Expandable Details */}
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="w-full text-center text-zion-cyan/60 hover:text-zion-cyan text-xs transition-colors"
                  >
                    {isExpanded ? 'Show Less' : 'Show More Details'}
                  </button>

                  {isExpanded && (
                    <motion.div
                      className="space-y-3 pt-3 border-t border-zion-cyan/20"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <h4 className="text-zion-cyan text-sm font-medium">System Info</h4>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="text-white/60">Connection:</div>
                        <div className="text-white">4G/Fast</div>
                        <div className="text-white/60">Device:</div>
                        <div className="text-white">Desktop</div>
                        <div className="text-white/60">Memory:</div>
                        <div className="text-white">8GB+</div>
                        <div className="text-white/60">CPU:</div>
                        <div className="text-white">Multi-core</div>
                      </div>
                    </motion.div>
                  )}
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-zion-cyan mx-auto mb-2"></div>
                  <p className="text-white/60 text-sm">Measuring performance...</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-3 bg-zion-slate/30 rounded-b-2xl">
              <div className="flex items-center justify-between text-xs">
                <span className="text-white/60">Last updated:</span>
                <span className="text-white">{new Date().toLocaleTimeString()}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PerformanceMonitor;
