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
  HardDrive,
  Network,
  Monitor,
  Smartphone,
  Globe,
  Settings,
  RefreshCw
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
  totalSize: number;
}

interface PerformanceScore {
  score: number;
  grade: 'A' | 'B' | 'C' | 'D' | 'F';
  color: string;
}

export function AdvancedPerformanceMonitor() {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [scores, setScores] = useState<Partial<Record<keyof PerformanceMetrics, PerformanceScore>>>({});
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [optimizationTips, setOptimizationTips] = useState<string[]>([]);

  // Calculate performance scores
  const calculateScore = useCallback((metric: keyof PerformanceMetrics, value: number): PerformanceScore => {
    let score = 0;
    let grade: 'A' | 'B' | 'C' | 'D' | 'F';
    let color = '';

    switch (metric) {
      case 'fcp':
        if (value <= 1800) { score = 100; grade = 'A'; color = 'text-green-500'; }
        else if (value <= 3000) { score = 80; grade = 'B'; color = 'text-yellow-500'; }
        else if (value <= 4000) { score = 60; grade = 'C'; color = 'text-orange-500'; }
        else if (value <= 5000) { score = 40; grade = 'D'; color = 'text-red-500'; }
        else { score = 20; grade = 'F'; color = 'text-red-600'; }
        break;
      case 'lcp':
        if (value <= 2500) { score = 100; grade = 'A'; color = 'text-green-500'; }
        else if (value <= 4000) { score = 80; grade = 'B'; color = 'text-yellow-500'; }
        else if (value <= 6000) { score = 60; grade = 'C'; color = 'text-orange-500'; }
        else if (value <= 8000) { score = 40; grade = 'D'; color = 'text-red-500'; }
        else { score = 20; grade = 'F'; color = 'text-red-600'; }
        break;
      case 'fid':
        if (value <= 100) { score = 100; grade = 'A'; color = 'text-green-500'; }
        else if (value <= 300) { score = 80; grade = 'B'; color = 'text-yellow-500'; }
        else if (value <= 500) { score = 60; grade = 'C'; color = 'text-orange-500'; }
        else if (value <= 800) { score = 40; grade = 'D'; color = 'text-red-500'; }
        else { score = 20; grade = 'F'; color = 'text-red-600'; }
        break;
      case 'cls':
        if (value <= 0.1) { score = 100; grade = 'A'; color = 'text-green-500'; }
        else if (value <= 0.25) { score = 80; grade = 'B'; color = 'text-yellow-500'; }
        else if (value <= 0.4) { score = 60; grade = 'C'; color = 'text-orange-500'; }
        else if (value <= 0.6) { score = 40; grade = 'D'; color = 'text-red-500'; }
        else { score = 20; grade = 'F'; color = 'text-red-600'; }
        break;
      case 'ttfb':
        if (value <= 800) { score = 100; grade = 'A'; color = 'text-green-500'; }
        else if (value <= 1200) { score = 80; grade = 'B'; color = 'text-yellow-500'; }
        else if (value <= 2000) { score = 60; grade = 'C'; color = 'text-orange-500'; }
        else if (value <= 3000) { score = 40; grade = 'D'; color = 'text-red-500'; }
        else { score = 20; grade = 'F'; color = 'text-red-600'; }
        break;
      default:
        score = 100; grade = 'A'; color = 'text-green-500';
    }

    return { score, grade, color };
  }, []);

  // Collect performance metrics
  const collectMetrics = useCallback(async () => {
    if (!('PerformanceObserver' in window)) return;

    const newMetrics: Partial<PerformanceMetrics> = {};
    const newScores: Partial<Record<keyof PerformanceMetrics, PerformanceScore>> = {};

    try {
      // Core Web Vitals
      if ('PerformanceObserver' in window) {
        // FCP (First Contentful Paint)
        const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
        if (fcpEntry) {
          newMetrics.fcp = Math.round(fcpEntry.startTime);
          newScores.fcp = calculateScore('fcp', newMetrics.fcp);
        }

        // LCP (Largest Contentful Paint)
        const lcpEntry = performance.getEntriesByName('largest-contentful-paint')[0];
        if (lcpEntry) {
          newMetrics.lcp = Math.round(lcpEntry.startTime);
          newScores.lcp = calculateScore('lcp', newMetrics.lcp);
        }

        // FID (First Input Delay) - requires user interaction
        if ('PerformanceEventTiming' in window) {
          const fidEntries = performance.getEntriesByType('first-input');
          if (fidEntries.length > 0) {
            newMetrics.fid = Math.round(fidEntries[0].processingStart - fidEntries[0].startTime);
            newScores.fid = calculateScore('fid', newMetrics.fid);
          }
        }

        // CLS (Cumulative Layout Shift)
        if ('PerformanceObserver' in window) {
          let clsValue = 0;
          const clsEntries = performance.getEntriesByType('layout-shift');
          clsEntries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          newMetrics.cls = Math.round(clsValue * 1000) / 1000;
          newScores.cls = calculateScore('cls', newMetrics.cls);
        }
      }

      // Navigation timing
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        newMetrics.ttfb = Math.round(navigationEntry.responseStart - navigationEntry.requestStart);
        newMetrics.domLoad = Math.round(navigationEntry.domContentLoadedEventEnd - navigationEntry.navigationStart);
        newMetrics.windowLoad = Math.round(navigationEntry.loadEventEnd - navigationEntry.navigationStart);
        
        newScores.ttfb = calculateScore('ttfb', newMetrics.ttfb);
      }

      // Memory usage
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        newMetrics.jsHeapSize = Math.round(memory.usedJSHeapSize / 1024 / 1024);
        newMetrics.jsHeapUsed = Math.round(memory.totalJSHeapSize / 1024 / 1024);
      }

      // Network requests
      const resources = performance.getEntriesByType('resource');
      newMetrics.networkRequests = resources.length;
      newMetrics.totalSize = resources.reduce((total, resource) => {
        const transferSize = (resource as PerformanceResourceTiming).transferSize || 0;
        return total + transferSize;
      }, 0);

      setMetrics(newMetrics as PerformanceMetrics);
      setScores(newScores);

      // Generate optimization tips
      generateOptimizationTips(newMetrics as PerformanceMetrics, newScores);

    } catch (error) {
      console.error('Error collecting performance metrics:', error);
    }
  }, [calculateScore]);

  // Generate optimization tips based on metrics
  const generateOptimizationTips = useCallback((metrics: PerformanceMetrics, scores: Partial<Record<keyof PerformanceMetrics, PerformanceScore>>) => {
    const tips: string[] = [];

    if (scores.fcp?.grade === 'C' || scores.fcp?.grade === 'D' || scores.fcp?.grade === 'F') {
      tips.push('Optimize First Contentful Paint: Minimize render-blocking resources, optimize CSS delivery');
    }

    if (scores.lcp?.grade === 'C' || scores.lcp?.grade === 'D' || scores.lcp?.grade === 'F') {
      tips.push('Improve Largest Contentful Paint: Optimize images, use next-gen formats, implement lazy loading');
    }

    if (scores.fid?.grade === 'C' || scores.fid?.grade === 'D' || scores.fid?.grade === 'F') {
      tips.push('Reduce First Input Delay: Minimize JavaScript execution time, break up long tasks');
    }

    if (scores.cls?.grade === 'C' || scores.cls?.grade === 'D' || scores.cls?.grade === 'F') {
      tips.push('Fix Cumulative Layout Shift: Set explicit dimensions for images and media elements');
    }

    if (scores.ttfb?.grade === 'C' || scores.ttfb?.grade === 'D' || scores.ttfb?.grade === 'F') {
      tips.push('Optimize Time to First Byte: Improve server response time, use CDN, optimize database queries');
    }

    if (metrics.networkRequests > 50) {
      tips.push('Reduce network requests: Combine CSS/JS files, use sprites, implement resource hints');
    }

    if (metrics.totalSize > 5 * 1024 * 1024) { // 5MB
      tips.push('Reduce total page size: Compress assets, use modern image formats, implement lazy loading');
    }

    setOptimizationTips(tips);
  }, []);

  // Start monitoring
  const startMonitoring = useCallback(() => {
    setIsMonitoring(true);
    collectMetrics();

    // Set up continuous monitoring
    const interval = setInterval(collectMetrics, 10000); // Every 10 seconds

    return () => clearInterval(interval);
  }, [collectMetrics]);

  // Stop monitoring
  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
  }, []);

  useEffect(() => {
    // Initial metrics collection
    collectMetrics();

    // Set up performance observer for Core Web Vitals
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint' || 
              entry.entryType === 'first-input' || 
              entry.entryType === 'layout-shift') {
            collectMetrics();
          }
        });
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

      return () => observer.disconnect();
    }
  }, [collectMetrics]);

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 z-50 p-3 bg-zion-blue-dark border border-zion-purple/30 rounded-full shadow-lg hover:bg-zion-blue hover:scale-110 transition-all duration-300"
        title="Performance Monitor"
      >
        <Activity className="w-6 h-6 text-zion-cyan" />
      </button>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.9 }}
        className="fixed bottom-4 right-4 z-50 w-96 max-h-[80vh] bg-zion-blue-dark border border-zion-purple/30 rounded-xl shadow-2xl shadow-zion-purple/20 overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-zion-blue-darker border-b border-zion-purple/20">
          <div className="flex items-center space-x-2">
            <Activity className="w-5 h-5 text-zion-cyan" />
            <h3 className="text-white font-semibold">Performance Monitor</h3>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={isMonitoring ? stopMonitoring : startMonitoring}
              className={`p-2 rounded-lg transition-colors ${
                isMonitoring 
                  ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30' 
                  : 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
              }`}
              title={isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
            >
              <RefreshCw className={`w-4 h-4 ${isMonitoring ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4 max-h-[calc(80vh-80px)] overflow-y-auto">
          {metrics ? (
            <>
              {/* Core Web Vitals */}
              <div className="space-y-3">
                <h4 className="text-zion-cyan font-medium flex items-center">
                  <Gauge className="w-4 h-4 mr-2" />
                  Core Web Vitals
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {scores.fcp && (
                    <div className="bg-zion-blue/20 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-zion-slate-light">FCP</span>
                        <span className={`text-sm font-bold ${scores.fcp.color}`}>
                          {scores.fcp.grade}
                        </span>
                      </div>
                      <div className="text-white font-mono text-sm">
                        {metrics.fcp}ms
                      </div>
                    </div>
                  )}
                  {scores.lcp && (
                    <div className="bg-zion-blue/20 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-zion-slate-light">LCP</span>
                        <span className={`text-sm font-bold ${scores.lcp.color}`}>
                          {scores.lcp.grade}
                        </span>
                      </div>
                      <div className="text-white font-mono text-sm">
                        {metrics.lcp}ms
                      </div>
                    </div>
                  )}
                  {scores.fid && (
                    <div className="bg-zion-blue/20 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-zion-slate-light">FID</span>
                        <span className={`text-sm font-bold ${scores.fid.color}`}>
                          {scores.fid.grade}
                        </span>
                      </div>
                      <div className="text-white font-mono text-sm">
                        {metrics.fid}ms
                      </div>
                    </div>
                  )}
                  {scores.cls && (
                    <div className="bg-zion-blue/20 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-zion-slate-light">CLS</span>
                        <span className={`text-sm font-bold ${scores.cls.color}`}>
                          {scores.cls.grade}
                        </span>
                      </div>
                      <div className="text-white font-mono text-sm">
                        {metrics.cls}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="space-y-3">
                <h4 className="text-zion-cyan font-medium flex items-center">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Performance Metrics
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-zion-slate-light">TTFB:</span>
                    <span className="text-white font-mono">{metrics.ttfb}ms</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zion-slate-light">DOM Load:</span>
                    <span className="text-white font-mono">{metrics.domLoad}ms</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zion-slate-light">Window Load:</span>
                    <span className="text-white font-mono">{metrics.windowLoad}ms</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zion-slate-light">Network Requests:</span>
                    <span className="text-white font-mono">{metrics.networkRequests}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zion-slate-light">Total Size:</span>
                    <span className="text-white font-mono">
                      {Math.round(metrics.totalSize / 1024 / 1024 * 100) / 100}MB
                    </span>
                  </div>
                </div>
              </div>

              {/* Memory Usage */}
              {metrics.jsHeapSize && (
                <div className="space-y-3">
                  <h4 className="text-zion-cyan font-medium flex items-center">
                    <HardDrive className="w-4 h-4 mr-2" />
                    Memory Usage
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-zion-slate-light">JS Heap Used:</span>
                      <span className="text-white font-mono">{metrics.jsHeapSize}MB</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-zion-slate-light">JS Heap Total:</span>
                      <span className="text-white font-mono">{metrics.jsHeapUsed}MB</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Optimization Tips */}
              {optimizationTips.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-zion-cyan font-medium flex items-center">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Optimization Tips
                  </h4>
                  <div className="space-y-2">
                    {optimizationTips.map((tip, index) => (
                      <div key={index} className="text-xs text-zion-slate-light bg-zion-blue/10 rounded-lg p-2">
                        {tip}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-zion-cyan mx-auto mb-4"></div>
              <p className="text-zion-slate-light">Collecting performance data...</p>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
