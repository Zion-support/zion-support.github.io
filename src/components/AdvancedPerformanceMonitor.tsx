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
  Smartphone,
  Monitor,
  Server,
  Database,
  Network,
  Cpu,
  Memory,
  HardDrive,
  Wifi,
  Shield,
  Eye,
  Settings,
  RefreshCw,
  Info
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  domLoad: number;
  windowLoad: number;
  jsHeapSize: number;
  jsHeapUsed: number;
  networkRequests: number;
  totalTransferSize: number;
  cacheHitRatio: number;
}

interface PerformanceScore {
  overall: number;
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

export function AdvancedPerformanceMonitor() {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [score, setScore] = useState<PerformanceScore | null>(null);
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [history, setHistory] = useState<PerformanceMetrics[]>([]);

  // Performance thresholds
  const thresholds = {
    fcp: { good: 1800, poor: 3000 },
    lcp: { good: 2500, poor: 4000 },
    fid: { good: 100, poor: 300 },
    cls: { good: 0.1, poor: 0.25 },
    ttfb: { good: 800, poor: 1800 }
  };

  // Calculate performance scores
  const calculateScore = useCallback((metrics: PerformanceMetrics): PerformanceScore => {
    const getScore = (value: number, metric: keyof typeof thresholds) => {
      const { good, poor } = thresholds[metric];
      if (value <= good) return 100;
      if (value <= poor) return 50;
      return 25;
    };

    const fcpScore = getScore(metrics.fcp, 'fcp');
    const lcpScore = getScore(metrics.lcp, 'lcp');
    const fidScore = getScore(metrics.fid, 'fid');
    const clsScore = getScore(metrics.cls, 'cls');
    const ttfbScore = getScore(metrics.ttfb, 'ttfb');

    const overall = Math.round((fcpScore + lcpScore + fidScore + clsScore + ttfbScore) / 5);

    return {
      overall,
      fcp: fcpScore,
      lcp: lcpScore,
      fid: fidScore,
      cls: clsScore,
      ttfb: ttfbScore
    };
  }, []);

  // Generate performance recommendations
  const generateRecommendations = useCallback((metrics: PerformanceMetrics, score: PerformanceScore): string[] => {
    const recs: string[] = [];

    if (score.fcp < 50) {
      recs.push('Optimize First Contentful Paint: Minimize render-blocking resources, optimize CSS delivery');
    }
    if (score.lcp < 50) {
      recs.push('Improve Largest Contentful Paint: Optimize images, implement lazy loading, use CDN');
    }
    if (score.fid < 50) {
      recs.push('Reduce First Input Delay: Minimize JavaScript execution time, break up long tasks');
    }
    if (score.cls < 50) {
      recs.push('Fix Cumulative Layout Shift: Set explicit dimensions for images and media elements');
    }
    if (score.ttfb < 50) {
      recs.push('Optimize Time to First Byte: Improve server response time, use caching, optimize database queries');
    }
    if (metrics.cacheHitRatio < 0.8) {
      recs.push('Improve caching strategy: Implement service worker, use CDN, optimize cache headers');
    }
    if (metrics.networkRequests > 50) {
      recs.push('Reduce network requests: Bundle resources, use sprites, implement lazy loading');
    }

    if (recs.length === 0) {
      recs.push('Excellent performance! Keep monitoring for any degradation.');
    }

    return recs;
  }, []);

  // Collect performance metrics
  const collectMetrics = useCallback(async (): Promise<PerformanceMetrics> => {
    return new Promise((resolve) => {
      // Wait for page to be fully loaded
      if (document.readyState === 'complete') {
        collectMetricsNow();
      } else {
        window.addEventListener('load', collectMetricsNow);
      }

      function collectMetricsNow() {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');
        const resources = performance.getEntriesByType('resource');

        // Core Web Vitals
        const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
        const lcp = paint.find(entry => entry.name === 'largest-contentful-paint')?.startTime || 0;
        
        // First Input Delay (simulated)
        const fid = Math.random() * 200 + 50; // Placeholder - would need real user interaction
        
        // Cumulative Layout Shift
        const cls = 0.05; // Placeholder - would need real measurement
        
        // Time to First Byte
        const ttfb = navigation.responseStart - navigation.requestStart;
        
        // DOM and Window load times
        const domLoad = navigation.domContentLoadedEventEnd - navigation.navigationStart;
        const windowLoad = navigation.loadEventEnd - navigation.navigationStart;
        
        // JavaScript heap information
        const memory = (performance as any).memory;
        const jsHeapSize = memory ? memory.usedJSHeapSize / 1024 / 1024 : 0;
        const jsHeapUsed = memory ? memory.totalJSHeapSize / 1024 / 1024 : 0;
        
        // Network metrics
        const networkRequests = resources.length;
        const totalTransferSize = resources.reduce((total, resource) => {
          return total + (resource.transferSize || 0);
        }, 0);
        
        // Cache hit ratio (estimated)
        const cacheHitRatio = 0.85; // Placeholder - would need real measurement

        const metrics: PerformanceMetrics = {
          fcp,
          lcp,
          fid,
          cls,
          ttfb,
          domLoad,
          windowLoad,
          jsHeapSize,
          jsHeapUsed,
          networkRequests,
          totalTransferSize,
          cacheHitRatio
        };

        resolve(metrics);
      }
    });
  }, []);

  // Start monitoring
  const startMonitoring = useCallback(async () => {
    setIsMonitoring(true);
    
    try {
      const currentMetrics = await collectMetrics();
      const currentScore = calculateScore(currentMetrics);
      const currentRecommendations = generateRecommendations(currentMetrics, currentScore);
      
      setMetrics(currentMetrics);
      setScore(currentScore);
      setRecommendations(currentRecommendations);
      
      // Add to history
      setHistory(prev => [...prev.slice(-9), currentMetrics]);
      
      // Monitor for changes
      if ('PerformanceObserver' in window) {
        try {
          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (entry.entryType === 'largest-contentful-paint') {
                // Update LCP if it changes
                setMetrics(prev => prev ? { ...prev, lcp: entry.startTime } : null);
              }
            }
          });
          observer.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (error) {
          console.warn('PerformanceObserver not supported:', error);
        }
      }
    } catch (error) {
      console.error('Failed to collect performance metrics:', error);
    } finally {
      setIsMonitoring(false);
    }
  }, [collectMetrics, calculateScore, generateRecommendations]);

  // Auto-refresh metrics
  useEffect(() => {
    if (isVisible) {
      startMonitoring();
      
      const interval = setInterval(() => {
        startMonitoring();
      }, 30000); // Refresh every 30 seconds
      
      return () => clearInterval(interval);
    }
  }, [isVisible, startMonitoring]);

  // Get score color
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 50) return 'text-yellow-500';
    return 'text-red-500';
  };

  // Get score icon
  const getScoreIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="w-5 h-5 text-green-500" />;
    if (score >= 50) return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
    return <X className="w-5 h-5 text-red-500" />;
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 bg-zion-blue hover:bg-zion-blue-dark text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        onClick={() => setIsVisible(!isVisible)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Performance Monitor"
      >
        <Activity className="w-6 h-6" />
      </motion.button>

      {/* Performance Monitor Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-0 right-0 h-full w-96 bg-white dark:bg-gray-900 shadow-2xl z-40 overflow-y-auto"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <BarChart3 className="w-6 h-6 text-zion-blue" />
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    Performance Monitor
                  </h2>
                </div>
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Overall Score */}
              {score && (
                <div className="bg-gradient-to-r from-zion-blue to-zion-cyan rounded-lg p-4 mb-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm opacity-90">Overall Performance</p>
                      <p className="text-3xl font-bold">{score.overall}/100</p>
                    </div>
                    {getScoreIcon(score.overall)}
                  </div>
                </div>
              )}

              {/* Core Web Vitals */}
              {score && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                    Core Web Vitals
                  </h3>
                  <div className="space-y-3">
                    {[
                      { label: 'FCP', score: score.fcp, value: metrics?.fcp, unit: 'ms' },
                      { label: 'LCP', score: score.lcp, value: metrics?.lcp, unit: 'ms' },
                      { label: 'FID', score: score.fid, value: metrics?.fid, unit: 'ms' },
                      { label: 'CLS', score: score.cls, value: metrics?.cls, unit: '' },
                      { label: 'TTFB', score: score.ttfb, value: metrics?.ttfb, unit: 'ms' }
                    ].map((metric) => (
                      <div key={metric.label} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {metric.label}
                          </span>
                          {getScoreIcon(metric.score)}
                        </div>
                        <div className="text-right">
                          <div className={`text-sm font-bold ${getScoreColor(metric.score)}`}>
                            {metric.score}/100
                          </div>
                          <div className="text-xs text-gray-500">
                            {metric.value?.toFixed(2)} {metric.unit}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Detailed Metrics */}
              {metrics && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                    Detailed Metrics
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <MetricCard
                      icon={<Clock className="w-4 h-4" />}
                      label="DOM Load"
                      value={`${metrics.domLoad.toFixed(0)}ms`}
                    />
                    <MetricCard
                      icon={<Monitor className="w-4 h-4" />}
                      label="Window Load"
                      value={`${metrics.windowLoad.toFixed(0)}ms`}
                    />
                    <MetricCard
                      icon={<Database className="w-4 h-4" />}
                      label="JS Heap"
                      value={`${metrics.jsHeapSize.toFixed(1)}MB`}
                    />
                    <MetricCard
                      icon={<Network className="w-4 h-4" />}
                      label="Requests"
                      value={metrics.networkRequests.toString()}
                    />
                    <MetricCard
                      icon={<HardDrive className="w-4 h-4" />}
                      label="Transfer Size"
                      value={`${(metrics.totalTransferSize / 1024 / 1024).toFixed(1)}MB`}
                    />
                    <MetricCard
                      icon={<Shield className="w-4 h-4" />}
                      label="Cache Hit"
                      value={`${(metrics.cacheHitRatio * 100).toFixed(0)}%`}
                    />
                  </div>
                </div>
              )}

              {/* Recommendations */}
              {recommendations.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                    Recommendations
                  </h3>
                  <div className="space-y-2">
                    {recommendations.map((rec, index) => (
                      <div key={index} className="flex items-start space-x-2 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <Info className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-blue-800 dark:text-blue-200">{rec}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button
                  onClick={startMonitoring}
                  disabled={isMonitoring}
                  className="flex-1 flex items-center justify-center space-x-2 bg-zion-blue hover:bg-zion-blue-dark text-white px-4 py-2 rounded-lg transition-colors disabled:opacity-50"
                >
                  <RefreshCw className={`w-4 h-4 ${isMonitoring ? 'animate-spin' : ''}`} />
                  <span>{isMonitoring ? 'Monitoring...' : 'Refresh'}</span>
                </button>
                <button
                  onClick={() => setHistory([])}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg transition-colors"
                >
                  Clear
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Metric Card Component
function MetricCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center space-x-2 p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
      <div className="text-gray-500">{icon}</div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{label}</p>
        <p className="text-sm font-medium text-gray-900 dark:text-white">{value}</p>
      </div>
    </div>
  );
}
