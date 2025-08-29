import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Gauge, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  X, 
  Settings,
  Monitor,
  Cpu,
  HardDrive,
  Wifi,
  Clock
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  fmp: number;
  si: number;
}

interface ResourceInfo {
  name: string;
  size: number;
  type: 'script' | 'stylesheet' | 'image' | 'font' | 'other';
  loadTime: number;
  status: 'loading' | 'loaded' | 'error';
}

interface PerformanceOptimizerProps {
  showMetrics?: boolean;
  autoOptimize?: boolean;
  showNotifications?: boolean;
}

export const EnhancedPerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  showMetrics = true,
  autoOptimize = true,
  showNotifications = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [resources, setResources] = useState<ResourceInfo[]>([]);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [notifications, setNotifications] = useState<Array<{
    id: string;
    type: 'success' | 'warning' | 'error' | 'info';
    message: string;
    timestamp: Date;
  }>>([]);

  const observerRef = useRef<PerformanceObserver | null>(null);
  const resourceTimingRef = useRef<PerformanceObserver | null>(null);

  // Performance monitoring
  const startPerformanceMonitoring = useCallback(() => {
    if ('PerformanceObserver' in window) {
      // Core Web Vitals monitoring
      try {
        observerRef.current = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'largest-contentful-paint') {
              const lcp = entry.startTime;
              setMetrics(prev => prev ? { ...prev, lcp } : { lcp, fcp: 0, fid: 0, cls: 0, ttfb: 0, fmp: 0, si: 0 });
            }
            if (entry.entryType === 'first-input') {
              const fid = entry.processingStart - entry.startTime;
              setMetrics(prev => prev ? { ...prev, fid } : { fid, fcp: 0, lcp: 0, cls: 0, ttfb: 0, fmp: 0, si: 0 });
            }
            if (entry.entryType === 'layout-shift') {
              const cls = (entry as any).value;
              setMetrics(prev => prev ? { ...prev, cls } : { cls, fcp: 0, lcp: 0, fid: 0, ttfb: 0, fmp: 0, si: 0 });
            }
          }
        });

        observerRef.current.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
      } catch (error) {
        console.warn('Performance monitoring not supported:', error);
      }

      // Resource timing monitoring
      try {
        resourceTimingRef.current = new PerformanceObserver((list) => {
          const newResources: ResourceInfo[] = [];
          
          for (const entry of list.getEntries()) {
            const resource = entry as PerformanceResourceTiming;
            if (resource.initiatorType && resource.transferSize > 0) {
              newResources.push({
                name: resource.name.split('/').pop() || resource.name,
                size: resource.transferSize,
                type: resource.initiatorType as any,
                loadTime: resource.responseEnd - resource.requestStart,
                status: 'loaded'
              });
            }
          }

          setResources(prev => [...prev, ...newResources]);
        });

        resourceTimingRef.current.observe({ entryTypes: ['resource'] });
      } catch (error) {
        console.warn('Resource timing monitoring not supported:', error);
      }
    }

    // Measure FCP and TTFB
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const ttfb = navigation.responseStart - navigation.requestStart;
        const fcp = performance.getEntriesByName('first-contentful-paint')[0] as PerformanceEntry;
        
        setMetrics(prev => prev ? { ...prev, ttfb, fcp: fcp ? fcp.startTime : 0 } : { 
          ttfb, 
          fcp: fcp ? fcp.startTime : 0, 
          lcp: 0, 
          fid: 0, 
          cls: 0, 
          fmp: 0, 
          si: 0 
        });
      }
    }
  }, []);

  // Performance optimization
  const performOptimizations = useCallback(async () => {
    setIsOptimizing(true);
    const newOptimizations: string[] = [];

    try {
      // Image optimization
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
          newOptimizations.push('Added lazy loading to images');
        }
        if (!img.decoding) {
          img.decoding = 'async';
          newOptimizations.push('Added async decoding to images');
        }
      });

      // Font optimization
      const fontLinks = document.querySelectorAll('link[rel="preload"][as="font"]');
      if (fontLinks.length === 0) {
        const fontLink = document.createElement('link');
        fontLink.rel = 'preload';
        fontLink.as = 'font';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600&display=swap';
        fontLink.crossOrigin = 'anonymous';
        document.head.appendChild(fontLink);
        newOptimizations.push('Added font preloading');
      }

      // Resource hints
      const dnsPrefetch = document.querySelector('link[rel="dns-prefetch"]');
      if (!dnsPrefetch) {
        const dnsLink = document.createElement('link');
        dnsLink.rel = 'dns-prefetch';
        dnsLink.href = '//fonts.googleapis.com';
        document.head.appendChild(dnsLink);
        newOptimizations.push('Added DNS prefetch for external resources');
      }

      // Memory optimization
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        if (memory.usedJSHeapSize > 50 * 1024 * 1024) { // 50MB
          newOptimizations.push('High memory usage detected - consider optimizing');
        }
      }

      setOptimizations(newOptimizations);

      if (newOptimizations.length > 0 && showNotifications) {
        addNotification('success', `Applied ${newOptimizations.length} optimizations`);
      }

    } catch (error) {
      console.error('Optimization failed:', error);
      addNotification('error', 'Some optimizations failed to apply');
    } finally {
      setIsOptimizing(false);
    }
  }, [showNotifications]);

  // Add notification
  const addNotification = useCallback((type: 'success' | 'warning' | 'error' | 'info', message: string) => {
    const id = Math.random().toString(36).substr(2, 9);
    const notification = {
      id,
      type,
      message,
      timestamp: new Date()
    };

    setNotifications(prev => [...prev, notification]);

    // Auto-remove notification after 5 seconds
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 5000);
  }, []);

  // Get performance score
  const getPerformanceScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 100;

    // LCP scoring (0-2500ms = good, 2500-4000ms = needs improvement, >4000ms = poor)
    if (metrics.lcp > 4000) score -= 30;
    else if (metrics.lcp > 2500) score -= 15;

    // FID scoring (0-100ms = good, 100-300ms = needs improvement, >300ms = poor)
    if (metrics.fid > 300) score -= 25;
    else if (metrics.fid > 100) score -= 10;

    // CLS scoring (0-0.1 = good, 0.1-0.25 = needs improvement, >0.25 = poor)
    if (metrics.cls > 0.25) score -= 25;
    else if (metrics.cls > 0.1) score -= 10;

    // TTFB scoring (0-800ms = good, 800-1800ms = needs improvement, >1800ms = poor)
    if (metrics.ttfb > 1800) score -= 20;
    else if (metrics.ttfb > 800) score -= 10;

    return Math.max(0, score);
  }, []);

  // Get performance grade
  const getPerformanceGrade = useCallback((score: number): string => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  }, []);

  // Get grade color
  const getGradeColor = useCallback((grade: string): string => {
    switch (grade) {
      case 'A': return 'text-green-400';
      case 'B': return 'text-blue-400';
      case 'C': return 'text-yellow-400';
      case 'D': return 'text-orange-400';
      case 'F': return 'text-red-400';
      default: return 'text-gray-400';
    }
  }, []);

  useEffect(() => {
    if (showMetrics) {
      setIsVisible(true);
      startPerformanceMonitoring();

      // Auto-optimize after page load
      if (autoOptimize) {
        const timer = setTimeout(() => {
          performOptimizations();
        }, 2000);

        return () => clearTimeout(timer);
      }
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (resourceTimingRef.current) {
        resourceTimingRef.current.disconnect();
      }
    };
  }, [showMetrics, autoOptimize, startPerformanceMonitoring, performOptimizations]);

  if (!isVisible) return null;

  const performanceScore = metrics ? getPerformanceScore(metrics) : 0;
  const performanceGrade = getPerformanceGrade(performanceScore);
  const gradeColor = getGradeColor(performanceGrade);

  return (
    <>
      {/* Floating Performance Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        onClick={() => setShowPanel(!showPanel)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-110 group"
        title="Performance Monitor"
      >
        <Zap className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
        
        {/* Performance Score Badge */}
        {metrics && (
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
            <span className={`text-sm font-bold ${gradeColor}`}>
              {performanceGrade}
            </span>
          </div>
        )}
      </motion.button>

      {/* Performance Panel */}
      <AnimatePresence>
        {showPanel && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-96 bg-slate-900/95 backdrop-blur-xl border-l border-slate-700/50 z-40 overflow-y-auto"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white flex items-center">
                  <Monitor className="w-5 h-5 mr-2 text-cyan-400" />
                  Performance Monitor
                </h3>
                <button
                  onClick={() => setShowPanel(false)}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Performance Score */}
              {metrics && (
                <div className="bg-slate-800/60 rounded-xl p-6 mb-6 border border-slate-700/50">
                  <div className="text-center mb-4">
                    <div className={`text-4xl font-bold ${gradeColor} mb-2`}>
                      {performanceGrade}
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">
                      {performanceScore}/100
                    </div>
                    <div className="text-sm text-slate-400">Performance Score</div>
                  </div>
                  
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        performanceScore >= 90 ? 'bg-green-500' :
                        performanceScore >= 80 ? 'bg-blue-500' :
                        performanceScore >= 70 ? 'bg-yellow-500' :
                        performanceScore >= 60 ? 'bg-orange-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${performanceScore}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Core Web Vitals */}
              {metrics && (
                <div className="bg-slate-800/60 rounded-xl p-6 mb-6 border border-slate-700/50">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <Gauge className="w-5 h-5 mr-2 text-cyan-400" />
                    Core Web Vitals
                  </h4>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">LCP</span>
                      <span className={`font-mono ${
                        metrics.lcp <= 2500 ? 'text-green-400' :
                        metrics.lcp <= 4000 ? 'text-yellow-400' : 'text-red-400'
                      }`}>
                        {metrics.lcp.toFixed(0)}ms
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">FID</span>
                      <span className={`font-mono ${
                        metrics.fid <= 100 ? 'text-green-400' :
                        metrics.fid <= 300 ? 'text-yellow-400' : 'text-red-400'
                      }`}>
                        {metrics.fid.toFixed(0)}ms
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">CLS</span>
                      <span className={`font-mono ${
                        metrics.cls <= 0.1 ? 'text-green-400' :
                        metrics.cls <= 0.25 ? 'text-yellow-400' : 'text-red-400'
                      }`}>
                        {metrics.cls.toFixed(3)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">TTFB</span>
                      <span className={`font-mono ${
                        metrics.ttfb <= 800 ? 'text-green-400' :
                        metrics.ttfb <= 1800 ? 'text-yellow-400' : 'text-red-400'
                      }`}>
                        {metrics.ttfb.toFixed(0)}ms
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Resource Analysis */}
              {resources.length > 0 && (
                <div className="bg-slate-800/60 rounded-xl p-6 mb-6 border border-slate-700/50">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <HardDrive className="w-5 h-5 mr-2 text-cyan-400" />
                    Resource Analysis
                  </h4>
                  
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {resources.slice(0, 5).map((resource, index) => (
                      <div key={index} className="flex justify-between items-center text-sm">
                        <span className="text-slate-300 truncate max-w-32">{resource.name}</span>
                        <span className="text-slate-400 font-mono">
                          {(resource.size / 1024).toFixed(1)}KB
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {resources.length > 5 && (
                    <div className="text-xs text-slate-500 text-center mt-2">
                      +{resources.length - 5} more resources
                    </div>
                  )}
                </div>
              )}

              {/* Optimizations */}
              <div className="bg-slate-800/60 rounded-xl p-6 mb-6 border border-slate-700/50">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Settings className="w-5 h-5 mr-2 text-cyan-400" />
                  Optimizations
                </h4>
                
                <button
                  onClick={performOptimizations}
                  disabled={isOptimizing}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mb-4"
                >
                  {isOptimizing ? 'Optimizing...' : 'Run Optimizations'}
                </button>

                {optimizations.length > 0 && (
                  <div className="space-y-2">
                    {optimizations.map((optimization, index) => (
                      <div key={index} className="flex items-center text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {optimization}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Notifications */}
              {notifications.length > 0 && (
                <div className="space-y-2">
                  {notifications.map((notification) => (
                    <motion.div
                      key={notification.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className={`p-3 rounded-lg text-sm ${
                        notification.type === 'success' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                        notification.type === 'warning' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' :
                        notification.type === 'error' ? 'bg-red-500/20 text-red-300 border border-red-500/30' :
                        'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                      }`}
                    >
                      {notification.message}
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};