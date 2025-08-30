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
  Gauge,
  Target
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  fcpScore: 'good' | 'needs-improvement' | 'poor';
  lcpScore: 'good' | 'needs-improvement' | 'poor';
  fidScore: 'good' | 'needs-improvement' | 'poor';
  clsScore: 'good' | 'needs-improvement' | 'poor';
}

interface PerformanceAlert {
  id: string;
  type: 'warning' | 'error' | 'info';
  message: string;
  timestamp: Date;
}

export function EnhancedPerformanceMonitor() {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    fcpScore: 'good',
    lcpScore: 'good',
    fidScore: 'good',
    clsScore: 'good'
  });
  const [alerts, setAlerts] = useState<PerformanceAlert[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const getScoreColor = (score: 'good' | 'needs-improvement' | 'poor') => {
    switch (score) {
      case 'good': return 'text-green-400';
      case 'needs-improvement': return 'text-yellow-400';
      case 'poor': return 'text-red-400';
      default: return 'text-gray-400';
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

  const measurePerformance = useCallback(() => {
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcp = entries[entries.length - 1];
        if (fcp) {
          const fcpValue = fcp.startTime;
          let fcpScore: 'good' | 'needs-improvement' | 'poor' = 'good';
          if (fcpValue > 2500) fcpScore = 'poor';
          else if (fcpValue > 1800) fcpScore = 'needs-improvement';

          setMetrics(prev => ({ ...prev, fcp: fcpValue, fcpScore }));
          
          if (fcpScore !== 'good') {
            addAlert('warning', `FCP is ${fcpScore}: ${fcpValue.toFixed(0)}ms`);
          }
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcp = entries[entries.length - 1];
        if (lcp) {
          const lcpValue = lcp.startTime;
          let lcpScore: 'good' | 'needs-improvement' | 'poor' = 'good';
          if (lcpValue > 4000) lcpScore = 'poor';
          else if (lcpValue > 2500) lcpScore = 'needs-improvement';

          setMetrics(prev => ({ ...prev, lcp: lcpValue, lcpScore }));
          
          if (lcpScore !== 'good') {
            addAlert('warning', `LCP is ${lcpScore}: ${lcpValue.toFixed(0)}ms`);
          }
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fid = entries[entries.length - 1];
        if (fid) {
          const fidValue = fid.processingStart - fid.startTime;
          let fidScore: 'good' | 'needs-improvement' | 'poor' = 'good';
          if (fidValue > 300) fidScore = 'poor';
          else if (fidValue > 100) fidScore = 'needs-improvement';

          setMetrics(prev => ({ ...prev, fid: fidValue, fidScore }));
          
          if (fidScore !== 'good') {
            addAlert('warning', `FID is ${fidScore}: ${fidValue.toFixed(0)}ms`);
          }
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
        
        let clsScore: 'good' | 'needs-improvement' | 'poor' = 'good';
        if (clsValue > 0.25) clsScore = 'poor';
        else if (clsValue > 0.1) clsScore = 'needs-improvement';

        setMetrics(prev => ({ ...prev, cls: clsValue, clsScore }));
        
        if (clsScore !== 'good') {
          addAlert('warning', `CLS is ${clsScore}: ${clsValue.toFixed(3)}`);
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
        setMetrics(prev => ({ ...prev, ttfb }));
        
        if (ttfb > 600) {
          addAlert('info', `TTFB is high: ${ttfb.toFixed(0)}ms`);
        }
      }
    }
  }, []);

  const addAlert = (type: 'warning' | 'error' | 'info', message: string) => {
    const alert: PerformanceAlert = {
      id: Date.now().toString(),
      type,
      message,
      timestamp: new Date()
    };
    setAlerts(prev => [alert, ...prev.slice(0, 4)]);
  };

  useEffect(() => {
    measurePerformance();
    
    // Monitor for performance issues
    const interval = setInterval(() => {
      const memory = (performance as any).memory;
      if (memory && memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.8) {
        addAlert('error', 'High memory usage detected');
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [measurePerformance]);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleExpanded = () => setIsExpanded(!isExpanded);

  if (!isVisible) {
    return (
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed bottom-4 right-4 z-50 bg-zion-cyan text-black p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        onClick={toggleVisibility}
        aria-label="Open Performance Monitor"
      >
        <Activity className="w-6 h-6" />
      </motion.button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      className="fixed bottom-4 right-4 z-50 bg-slate-900/95 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-2xl max-w-sm"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-700">
        <div className="flex items-center gap-2">
          <Gauge className="w-5 h-5 text-zion-cyan" />
          <h3 className="font-semibold text-white">Performance Monitor</h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleExpanded}
            className="p-1 hover:bg-slate-700 rounded transition-colors"
            aria-label={isExpanded ? 'Collapse' : 'Expand'}
          >
            <BarChart3 className="w-4 h-4 text-slate-400" />
          </button>
          <button
            onClick={toggleVisibility}
            className="p-1 hover:bg-slate-700 rounded transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4 text-slate-400" />
          </button>
        </div>
      </div>

      {/* Metrics */}
      <div className="p-4 space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-slate-800/50 p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <Zap className="w-4 h-4 text-zion-cyan" />
              <span className="text-xs text-slate-400">FCP</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white font-mono text-sm">
                {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : '--'}
              </span>
              <span className={getScoreColor(metrics.fcpScore)}>
                {getScoreIcon(metrics.fcpScore)}
              </span>
            </div>
          </div>

          <div className="bg-slate-800/50 p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <Target className="w-4 h-4 text-zion-cyan" />
              <span className="text-xs text-slate-400">LCP</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white font-mono text-sm">
                {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : '--'}
              </span>
              <span className={getScoreColor(metrics.lcpScore)}>
                {getScoreIcon(metrics.lcpScore)}
              </span>
            </div>
          </div>

          <div className="bg-slate-800/50 p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <Clock className="w-4 h-4 text-zion-cyan" />
              <span className="text-xs text-slate-400">FID</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white font-mono text-sm">
                {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : '--'}
              </span>
              <span className={getScoreColor(metrics.fidScore)}>
                {getScoreIcon(metrics.fidScore)}
              </span>
            </div>
          </div>

          <div className="bg-slate-800/50 p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="w-4 h-4 text-zion-cyan" />
              <span className="text-xs text-slate-400">CLS</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white font-mono text-sm">
                {metrics.cls ? metrics.cls.toFixed(3) : '--'}
              </span>
              <span className={getScoreColor(metrics.clsScore)}>
                {getScoreIcon(metrics.clsScore)}
              </span>
            </div>
          </div>
        </div>

        {metrics.ttfb && (
          <div className="bg-slate-800/50 p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <Activity className="w-4 h-4 text-zion-cyan" />
              <span className="text-xs text-slate-400">TTFB</span>
            </div>
            <span className="text-white font-mono text-sm">
              {metrics.ttfb.toFixed(0)}ms
            </span>
          </div>
        )}

        {/* Alerts */}
        {alerts.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-slate-300">Recent Alerts</h4>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              <AnimatePresence>
                {alerts.map((alert) => (
                  <motion.div
                    key={alert.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className={`p-2 rounded text-xs ${
                      alert.type === 'error' ? 'bg-red-900/50 text-red-200' :
                      alert.type === 'warning' ? 'bg-yellow-900/50 text-yellow-200' :
                      'bg-blue-900/50 text-blue-200'
                    }`}
                  >
                    {alert.message}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}