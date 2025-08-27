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
  BarChart3,
  Gauge,
  Monitor,
  HardDrive,
  Wifi,
  WifiOff
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  domLoad: number | null;
  windowLoad: number | null;
  loadTime: number;
  renderTime: number;
  memoryUsage?: number;
  fps: number;
  networkSpeed?: number;
  isOnline: boolean;
}

interface PerformanceScore {
  score: number;
  grade: 'A' | 'B' | 'C' | 'D' | 'F';
  color: string;
}

interface PerformanceMonitorProps {
  showMetrics?: boolean;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  className?: string;
}

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  showMetrics = false,
  onMetricsUpdate,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    domLoad: null,
    windowLoad: null,
    loadTime: 0,
    renderTime: 0,
    fps: 0,
    isOnline: navigator.onLine
  });
  const [scores, setScores] = useState<Record<string, PerformanceScore>>({});
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const calculateScore = useCallback((metric: number, thresholds: number[]): PerformanceScore => {
    if (metric <= thresholds[0]) return { score: 100, grade: 'A', color: 'text-green-400' };
    if (metric <= thresholds[1]) return { score: 80, grade: 'B', color: 'text-yellow-400' };
    if (metric <= thresholds[2]) return { score: 60, grade: 'C', color: 'text-orange-400' };
    if (metric <= thresholds[3]) return { score: 40, grade: 'D', color: 'text-red-400' };
    return { score: 20, grade: 'F', color: 'text-red-600' };
  }, []);

  const updateMetrics = useCallback(() => {
    if ('performance' in window) {
      const perf = performance;
      
      // Core Web Vitals
      const fcpEntry = perf.getEntriesByName('first-contentful-paint')[0] as PerformanceEntry;
      const fcp = fcpEntry ? fcpEntry.startTime : null;
      
      const lcpEntry = perf.getEntriesByName('largest-contentful-paint')[0] as PerformanceEntry;
      const lcp = lcpEntry ? lcpEntry.startTime : null;
      
      const fidEntry = perf.getEntriesByName('first-input-delay')[0] as PerformanceEntry;
      const fid = fidEntry ? (fidEntry as any).processingStart - fidEntry.startTime : null;
      
      const clsEntry = perf.getEntriesByName('cumulative-layout-shift')[0] as PerformanceEntry;
      const cls = clsEntry ? (clsEntry as any).value : null;
      
      // Navigation timing
      const navigationEntry = perf.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const ttfb = navigationEntry ? navigationEntry.responseStart - navigationEntry.requestStart : null;
      const domLoad = navigationEntry ? navigationEntry.domContentLoadedEventEnd - navigationEntry.navigationStart : null;
      const windowLoad = navigationEntry ? navigationEntry.loadEventEnd - navigationEntry.navigationStart : null;
      
      // Additional metrics
      const loadTime = navigationEntry ? navigationEntry.loadEventEnd - navigationEntry.loadEventStart : 0;
      const renderTime = performance.now();
      
      // Memory usage
      let memoryUsage: number | undefined;
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // MB
      }

      // FPS calculation
      let fps = 0;
      if (typeof requestAnimationFrame !== 'undefined') {
        let frameCount = 0;
        let lastTime = performance.now();
        
        const countFrames = () => {
          frameCount++;
          const currentTime = performance.now();
          
          if (currentTime - lastTime >= 1000) {
            fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
            frameCount = 0;
            lastTime = currentTime;
          }
          
          requestAnimationFrame(countFrames);
        };
        
        requestAnimationFrame(countFrames);
      }

      // Network speed estimation
      let networkSpeed: number | undefined;
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        if (connection && connection.effectiveType) {
          const speedMap: { [key: string]: number } = {
            'slow-2g': 0.5,
            '2g': 1,
            '3g': 3,
            '4g': 10
          };
          networkSpeed = speedMap[connection.effectiveType] || 5;
        }
      }

      const newMetrics: PerformanceMetrics = {
        fcp, lcp, fid, cls, ttfb, domLoad, windowLoad,
        loadTime, renderTime, memoryUsage, fps, networkSpeed,
        isOnline: navigator.onLine
      };

      setMetrics(newMetrics);
      onMetricsUpdate?.(newMetrics);

      // Calculate scores
      const newScores = {
        fcp: fcp ? calculateScore(fcp, [1800, 3000, 4000, 5000]) : { score: 0, grade: 'F', color: 'text-gray-400' },
        lcp: lcp ? calculateScore(lcp, [2500, 4000, 5000, 6000]) : { score: 0, grade: 'F', color: 'text-gray-400' },
        fid: fid ? calculateScore(fid, [100, 300, 500, 1000]) : { score: 0, grade: 'F', color: 'text-gray-400' },
        cls: cls ? calculateScore(cls, [0.1, 0.25, 0.4, 0.5]) : { score: 0, grade: 'F', color: 'text-gray-400' }
      };
      setScores(newScores);

      // Check for performance issues
      const issues = [];
      if (fcp && fcp > 3000) issues.push('First Contentful Paint is slow');
      if (lcp && lcp > 5000) issues.push('Largest Contentful Paint is slow');
      if (fid && fid > 500) issues.push('First Input Delay is high');
      if (cls && cls > 0.4) issues.push('Cumulative Layout Shift is poor');
      
      if (issues.length > 0) {
        setAlertMessage(issues.join(', '));
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 5000);
      }
    }
  }, [calculateScore, onMetricsUpdate]);

  // Network status monitoring
  useEffect(() => {
    const handleOnline = () => setMetrics(prev => ({ ...prev, isOnline: true }));
    const handleOffline = () => setMetrics(prev => ({ ...prev, isOnline: false }));

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    // Initial metrics
    updateMetrics();
    
    // Set up performance observer for Core Web Vitals
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint' || 
              entry.entryType === 'first-input-delay' || 
              entry.entryType === 'layout-shift') {
            updateMetrics();
          }
        }
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input-delay', 'layout-shift'] });
      return () => observer.disconnect();
    }
    
    // Update metrics periodically
    const interval = setInterval(updateMetrics, 10000);
    return () => clearInterval(interval);
  }, [updateMetrics]);

  const formatMetric = (value: number | null, unit: string = 'ms'): string => {
    if (value === null) return 'N/A';
    if (unit === 'ms') return `${Math.round(value)}ms`;
    if (unit === 's') return `${(value / 1000).toFixed(2)}s`;
    return value.toFixed(3);
  };

  const getMetricColor = (score: PerformanceScore): string => {
    return score.color.replace('text-', 'bg-').replace('-400', '-500').replace('-600', '-700');
  };

  if (!showMetrics) {
    return null;
  }

  return (
    <>
      {/* Performance Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-50 p-4 bg-zion-purple text-white rounded-full shadow-lg hover:bg-zion-purple-dark transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-zion-purple/50"
        aria-label="Open performance monitor"
        title="Performance Monitor"
      >
        <Activity size={24} />
      </button>

      {/* Performance Alert */}
      <AnimatePresence>
        {showAlert && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 p-4 bg-red-500 text-white rounded-lg shadow-lg flex items-center gap-3"
          >
            <AlertTriangle size={20} />
            <span>{alertMessage}</span>
            <button
              onClick={() => setShowAlert(false)}
              className="ml-2 p-1 hover:bg-red-600 rounded"
            >
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Performance Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 left-0 w-96 bg-zion-slate-dark border-r border-zion-purple/30 z-50 overflow-y-auto"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-zion-purple flex items-center gap-2">
                  <Monitor size={24} />
                  Performance
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-zion-slate-light hover:text-white transition-colors"
                  aria-label="Close performance panel"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Core Web Vitals */}
              <div className="space-y-4 mb-6">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Zap size={20} className="text-zion-purple" />
                  Core Web Vitals
                </h3>
                
                {/* FCP */}
                <div className="p-3 bg-zion-slate-light/10 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-zion-slate-light">First Contentful Paint</span>
                    <span className={`text-sm font-semibold ${scores.fcp?.color || 'text-gray-400'}`}>
                      {scores.fcp?.grade || 'N/A'}
                    </span>
                  </div>
                  <div className="text-lg font-bold text-white">
                    {formatMetric(metrics.fcp)}
                  </div>
                  <div className="w-full bg-zion-slate-light/20 rounded-full h-2 mt-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${getMetricColor(scores.fcp)}`}
                      style={{ width: `${scores.fcp?.score || 0}%` }}
                    />
                  </div>
                </div>

                {/* LCP */}
                <div className="p-3 bg-zion-slate-light/10 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-zion-slate-light">Largest Contentful Paint</span>
                    <span className={`text-sm font-semibold ${scores.lcp?.color || 'text-gray-400'}`}>
                      {scores.lcp?.grade || 'N/A'}
                    </span>
                  </div>
                  <div className="text-lg font-bold text-white">
                    {formatMetric(metrics.lcp)}
                  </div>
                  <div className="w-full bg-zion-slate-light/20 rounded-full h-2 mt-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${getMetricColor(scores.lcp)}`}
                      style={{ width: `${scores.lcp?.score || 0}%` }}
                    />
                  </div>
                </div>

                {/* FID */}
                <div className="p-3 bg-zion-slate-light/10 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-zion-slate-light">First Input Delay</span>
                    <span className={`text-sm font-semibold ${scores.fid?.color || 'text-gray-400'}`}>
                      {scores.fid?.grade || 'N/A'}
                    </span>
                  </div>
                  <div className="text-lg font-bold text-white">
                    {formatMetric(metrics.fid)}
                  </div>
                  <div className="w-full bg-zion-slate-light/20 rounded-full h-2 mt-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${getMetricColor(scores.fid)}`}
                      style={{ width: `${scores.fid?.score || 0}%` }}
                    />
                  </div>
                </div>

                {/* CLS */}
                <div className="p-3 bg-zion-slate-light/10 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-zion-slate-light">Cumulative Layout Shift</span>
                    <span className={`text-sm font-semibold ${scores.cls?.color || 'text-gray-400'}`}>
                      {scores.cls?.grade || 'N/A'}
                    </span>
                  </div>
                  <div className="text-lg font-bold text-white">
                    {formatMetric(metrics.cls, '')}
                  </div>
                  <div className="w-full bg-zion-slate-light/20 rounded-full h-2 mt-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${getMetricColor(scores.cls)}`}
                      style={{ width: `${scores.cls?.score || 0}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Additional Metrics */}
              <div className="space-y-4 mb-6">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <BarChart3 size={20} className="text-zion-purple" />
                  Additional Metrics
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-zion-slate-light/10 rounded-lg text-center">
                    <div className="text-sm text-zion-slate-light mb-1">TTFB</div>
                    <div className="text-lg font-bold text-white">
                      {formatMetric(metrics.ttfb)}
                    </div>
                  </div>
                  <div className="p-3 bg-zion-slate-light/10 rounded-lg text-center">
                    <div className="text-sm text-zion-slate-light mb-1">DOM Load</div>
                    <div className="text-lg font-bold text-white">
                      {formatMetric(metrics.domLoad)}
                    </div>
                  </div>
                  <div className="p-3 bg-zion-slate-light/10 rounded-lg text-center">
                    <div className="text-sm text-zion-slate-light mb-1">Window Load</div>
                    <div className="text-lg font-bold text-white">
                      {formatMetric(metrics.windowLoad)}
                    </div>
                  </div>
                  <div className="p-3 bg-zion-slate-light/10 rounded-lg text-center">
                    <div className="text-sm text-zion-slate-light mb-1">Overall Score</div>
                    <div className="text-lg font-bold text-white">
                      {Math.round(Object.values(scores).reduce((acc, score) => acc + score.score, 0) / 4)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Real-time Metrics */}
              <div className="space-y-4 mb-6">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Gauge size={20} className="text-zion-purple" />
                  Real-time Metrics
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-zion-slate-light">Load Time:</span>
                    <span className="text-white font-semibold">{metrics.loadTime.toFixed(0)}ms</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-zion-slate-light">FPS:</span>
                    <span className="text-white font-semibold">{metrics.fps}</span>
                  </div>
                  
                  {metrics.memoryUsage && (
                    <div className="flex items-center gap-2">
                      <HardDrive className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-zion-slate-light">Memory:</span>
                      <span className="text-white font-semibold">{metrics.memoryUsage.toFixed(1)}MB</span>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-2">
                    {metrics.isOnline ? (
                      <Wifi className="w-4 h-4 text-green-400" />
                    ) : (
                      <WifiOff className="w-4 h-4 text-red-400" />
                    )}
                    <span className="text-sm text-zion-slate-light">Status:</span>
                    <span className="text-white font-semibold">{metrics.isOnline ? 'Online' : 'Offline'}</span>
                  </div>
                  
                  {metrics.networkSpeed && (
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-purple-400" />
                      <span className="text-sm text-zion-slate-light">Speed:</span>
                      <span className="text-white font-semibold">{metrics.networkSpeed}G</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Performance Tips */}
              <div className="p-4 bg-zion-purple/10 border border-zion-purple/20 rounded-lg">
                <h4 className="font-semibold text-zion-purple mb-2 flex items-center gap-2">
                  <Info size={16} />
                  Performance Tips
                </h4>
                <ul className="text-sm text-zion-slate-light space-y-1">
                  <li>• Optimize images and use WebP format</li>
                  <li>• Minimize JavaScript bundle size</li>
                  <li>• Use CDN for static assets</li>
                  <li>• Enable compression and caching</li>
                  <li>• Monitor Core Web Vitals regularly</li>
                </ul>
              </div>

              {/* Refresh Button */}
              <button
                onClick={updateMetrics}
                className="w-full mt-6 p-3 bg-zion-purple text-white rounded-lg hover:bg-zion-purple-dark transition-colors flex items-center justify-center gap-2"
              >
                <TrendingUp size={16} />
                Refresh Metrics
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
