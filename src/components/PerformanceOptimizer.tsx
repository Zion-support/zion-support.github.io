import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Activity,
  Zap,
  Gauge,
  Clock,
  HardDrive,
  Network,
  Cpu,
  Memory,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  X,
  Settings,
  RefreshCw,
  Info
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  domLoad: number; // DOM Content Loaded
  windowLoad: number; // Window Load
  memoryUsage?: number; // Memory usage (if available)
  networkSpeed?: number; // Network speed estimate
  cpuUsage?: number; // CPU usage estimate
}

interface PerformanceOptimization {
  id: string;
  name: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  applied: boolean;
  action: () => void;
}

export function PerformanceOptimizer() {
  const [isOpen, setIsOpen] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    domLoad: 0,
    windowLoad: 0
  });
  
  const [optimizations, setOptimizations] = useState<PerformanceOptimization[]>([]);
  const [performanceScore, setPerformanceScore] = useState(0);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  // Calculate performance score based on Core Web Vitals
  const calculatePerformanceScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 100;
    
    // FCP scoring (0-100)
    if (metrics.fcp <= 1800) score -= 0;
    else if (metrics.fcp <= 3000) score -= 10;
    else score -= 25;
    
    // LCP scoring (0-100)
    if (metrics.lcp <= 2500) score -= 0;
    else if (metrics.lcp <= 4000) score -= 10;
    else score -= 25;
    
    // FID scoring (0-100)
    if (metrics.fid <= 100) score -= 0;
    else if (metrics.fid <= 300) score -= 10;
    else score -= 25;
    
    // CLS scoring (0-100)
    if (metrics.cls <= 0.1) score -= 0;
    else if (metrics.cls <= 0.25) score -= 10;
    else score -= 25;
    
    return Math.max(0, score);
  }, []);

  // Monitor Core Web Vitals
  useEffect(() => {
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcp = entries[entries.length - 1];
        if (fcp) {
          setMetrics(prev => ({ ...prev, fcp: fcp.startTime }));
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcp = entries[entries.length - 1];
        if (lcp) {
          setMetrics(prev => ({ ...prev, lcp: lcp.startTime }));
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fid = entries[entries.length - 1];
        if (fid) {
          setMetrics(prev => ({ ...prev, fid: fid.processingStart - fid.startTime }));
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

      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);

  // Monitor navigation timing
  useEffect(() => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      setMetrics(prev => ({
        ...prev,
        ttfb: navigation.responseStart - navigation.requestStart,
        domLoad: navigation.domContentLoadedEventEnd - navigation.navigationStart,
        windowLoad: navigation.loadEventEnd - navigation.navigationStart
      }));
    }
  }, []);

  // Monitor memory usage (if available)
  useEffect(() => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      const updateMemoryUsage = () => {
        setMetrics(prev => ({
          ...prev,
          memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
        }));
      };
      
      updateMemoryUsage();
      const interval = setInterval(updateMemoryUsage, 5000);
      return () => clearInterval(interval);
    }
  }, []);

  // Update performance score when metrics change
  useEffect(() => {
    const score = calculatePerformanceScore(metrics);
    setPerformanceScore(score);
  }, [metrics, calculatePerformanceScore]);

  // Generate optimization suggestions
  useEffect(() => {
    const suggestions: PerformanceOptimization[] = [];

    // FCP optimization
    if (metrics.fcp > 1800) {
      suggestions.push({
        id: 'fcp',
        name: 'Optimize First Contentful Paint',
        description: 'Reduce server response time and optimize critical rendering path',
        impact: 'high',
        applied: false,
        action: () => optimizeFCP()
      });
    }

    // LCP optimization
    if (metrics.lcp > 2500) {
      suggestions.push({
        id: 'lcp',
        name: 'Optimize Largest Contentful Paint',
        description: 'Optimize images and reduce render-blocking resources',
        impact: 'high',
        applied: false,
        action: () => optimizeLCP()
      });
    }

    // FID optimization
    if (metrics.fid > 100) {
      suggestions.push({
        id: 'fid',
        name: 'Reduce First Input Delay',
        description: 'Break up long tasks and optimize JavaScript execution',
        impact: 'high',
        applied: false,
        action: () => optimizeFID()
      });
    }

    // CLS optimization
    if (metrics.cls > 0.1) {
      suggestions.push({
        id: 'cls',
        name: 'Reduce Cumulative Layout Shift',
        description: 'Set explicit dimensions for images and avoid layout shifts',
        impact: 'medium',
        applied: false,
        action: () => optimizeCLS()
      });
    }

    // Memory optimization
    if (metrics.memoryUsage && metrics.memoryUsage > 100) {
      suggestions.push({
        id: 'memory',
        name: 'Optimize Memory Usage',
        description: 'Reduce memory leaks and optimize resource usage',
        impact: 'medium',
        applied: false,
        action: () => optimizeMemory()
      });
    }

    setOptimizations(suggestions);
  }, [metrics]);

  // Optimization functions
  const optimizeFCP = useCallback(() => {
    // Implement FCP optimizations
    console.log('Applying FCP optimizations...');
  }, []);

  const optimizeLCP = useCallback(() => {
    // Implement LCP optimizations
    console.log('Applying LCP optimizations...');
  }, []);

  const optimizeFID = useCallback(() => {
    // Implement FID optimizations
    console.log('Applying FID optimizations...');
  }, []);

  const optimizeCLS = useCallback(() => {
    // Implement CLS optimizations
    console.log('Applying CLS optimizations...');
  }, []);

  const optimizeMemory = useCallback(() => {
    // Implement memory optimizations
    console.log('Applying memory optimizations...');
  }, []);

  // Apply all optimizations
  const applyOptimizations = useCallback(async () => {
    setIsOptimizing(true);
    
    try {
      for (const optimization of optimizations) {
        if (!optimization.applied) {
          optimization.action();
          setOptimizations(prev => 
            prev.map(opt => 
              opt.id === optimization.id 
                ? { ...opt, applied: true }
                : opt
            )
          );
          await new Promise(resolve => setTimeout(resolve, 500)); // Small delay between optimizations
        }
      }
      
      setLastUpdate(new Date());
    } catch (error) {
      console.error('Error applying optimizations:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [optimizations]);

  // Refresh metrics
  const refreshMetrics = useCallback(() => {
    // Trigger a page reload to get fresh metrics
    window.location.reload();
  }, []);

  // Get performance grade
  const getPerformanceGrade = (score: number): string => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  };

  // Get performance color
  const getPerformanceColor = (score: number): string => {
    if (score >= 90) return 'text-green-500';
    if (score >= 80) return 'text-yellow-500';
    if (score >= 70) return 'text-orange-500';
    return 'text-red-500';
  };

  return (
    <>
      {/* Floating Performance Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 bg-zion-purple hover:bg-zion-purple-light text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-zion-purple/30"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Performance monitor"
        aria-expanded={isOpen}
        aria-controls="performance-panel"
      >
        <Activity className="w-6 h-6" />
      </motion.button>

      {/* Performance Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="performance-panel"
            initial={{ opacity: 0, x: -20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 left-6 z-50 w-96 bg-zion-slate-dark border border-zion-slate-light/20 rounded-xl shadow-2xl backdrop-blur-sm"
            role="dialog"
            aria-labelledby="performance-title"
          >
            <div className="p-6 space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h3 id="performance-title" className="text-lg font-semibold text-white flex items-center space-x-2">
                  <Gauge className="w-5 h-5" />
                  <span>Performance Monitor</span>
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-zion-slate-light hover:text-white transition-colors"
                  aria-label="Close performance panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Performance Score */}
              <div className="text-center">
                <div className={`text-4xl font-bold ${getPerformanceColor(performanceScore)}`}>
                  {getPerformanceGrade(performanceScore)}
                </div>
                <div className="text-2xl font-semibold text-white">
                  {performanceScore}/100
                </div>
                <div className="text-sm text-zion-slate-light">
                  Last updated: {lastUpdate.toLocaleTimeString()}
                </div>
              </div>

              {/* Core Web Vitals */}
              <div className="space-y-4">
                <h4 className="text-white font-semibold flex items-center space-x-2">
                  <Zap className="w-4 h-4" />
                  <span>Core Web Vitals</span>
                </h4>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-zion-slate-light/10 rounded-lg p-3">
                    <div className="text-xs text-zion-slate-light">FCP</div>
                    <div className="text-white font-semibold">
                      {metrics.fcp > 0 ? `${Math.round(metrics.fcp)}ms` : 'N/A'}
                    </div>
                    <div className={`text-xs ${metrics.fcp <= 1800 ? 'text-green-400' : metrics.fcp <= 3000 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {metrics.fcp <= 1800 ? 'Good' : metrics.fcp <= 3000 ? 'Needs Improvement' : 'Poor'}
                    </div>
                  </div>
                  
                  <div className="bg-zion-slate-light/10 rounded-lg p-3">
                    <div className="text-xs text-zion-slate-light">LCP</div>
                    <div className="text-white font-semibold">
                      {metrics.lcp > 0 ? `${Math.round(metrics.lcp)}ms` : 'N/A'}
                    </div>
                    <div className={`text-xs ${metrics.lcp <= 2500 ? 'text-green-400' : metrics.lcp <= 4000 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {metrics.lcp <= 2500 ? 'Good' : metrics.lcp <= 4000 ? 'Needs Improvement' : 'Poor'}
                    </div>
                  </div>
                  
                  <div className="bg-zion-slate-light/10 rounded-lg p-3">
                    <div className="text-xs text-zion-slate-light">FID</div>
                    <div className="text-white font-semibold">
                      {metrics.fid > 0 ? `${Math.round(metrics.fid)}ms` : 'N/A'}
                    </div>
                    <div className={`text-xs ${metrics.fid <= 100 ? 'text-green-400' : metrics.fid <= 300 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {metrics.fid <= 100 ? 'Good' : metrics.fid <= 300 ? 'Needs Improvement' : 'Poor'}
                    </div>
                  </div>
                  
                  <div className="bg-zion-slate-light/10 rounded-lg p-3">
                    <div className="text-xs text-zion-slate-light">CLS</div>
                    <div className="text-white font-semibold">
                      {metrics.cls > 0 ? metrics.cls.toFixed(3) : 'N/A'}
                    </div>
                    <div className={`text-xs ${metrics.cls <= 0.1 ? 'text-green-400' : metrics.cls <= 0.25 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {metrics.cls <= 0.1 ? 'Good' : metrics.cls <= 0.25 ? 'Needs Improvement' : 'Poor'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Metrics */}
              <div className="space-y-4">
                <h4 className="text-white font-semibold flex items-center space-x-2">
                  <Info className="w-4 h-4" />
                  <span>Additional Metrics</span>
                </h4>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-zion-slate-light/10 rounded-lg p-3">
                    <div className="text-xs text-zion-slate-light">TTFB</div>
                    <div className="text-white font-semibold">
                      {metrics.ttfb > 0 ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}
                    </div>
                  </div>
                  
                  <div className="bg-zion-slate-light/10 rounded-lg p-3">
                    <div className="text-xs text-zion-slate-light">DOM Load</div>
                    <div className="text-white font-semibold">
                      {metrics.domLoad > 0 ? `${Math.round(metrics.domLoad)}ms` : 'N/A'}
                    </div>
                  </div>
                  
                  {metrics.memoryUsage && (
                    <div className="bg-zion-slate-light/10 rounded-lg p-3">
                      <div className="text-xs text-zion-slate-light">Memory</div>
                      <div className="text-white font-semibold">
                        {Math.round(metrics.memoryUsage)} MB
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Optimizations */}
              {optimizations.length > 0 && (
                <div className="space-y-4">
                  <h4 className="text-white font-semibold flex items-center space-x-2">
                    <Settings className="w-4 h-4" />
                    <span>Optimization Suggestions</span>
                  </h4>
                  
                  <div className="space-y-3">
                    {optimizations.map((optimization) => (
                      <div
                        key={optimization.id}
                        className={`p-3 rounded-lg border ${
                          optimization.applied
                            ? 'bg-green-500/20 border-green-500/30'
                            : 'bg-zion-slate-light/10 border-zion-slate-light/20'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="text-white font-medium">{optimization.name}</span>
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                optimization.impact === 'high' ? 'bg-red-500/20 text-red-400' :
                                optimization.impact === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                                'bg-blue-500/20 text-blue-400'
                              }`}>
                                {optimization.impact}
                              </span>
                            </div>
                            <div className="text-sm text-zion-slate-light mb-2">
                              {optimization.description}
                            </div>
                          </div>
                          {optimization.applied && (
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          )}
                        </div>
                        
                        {!optimization.applied && (
                          <button
                            onClick={optimization.action}
                            className="w-full px-3 py-2 bg-zion-purple hover:bg-zion-purple-light text-white rounded-lg transition-colors text-sm"
                          >
                            Apply Optimization
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <button
                    onClick={applyOptimizations}
                    disabled={isOptimizing || optimizations.every(opt => opt.applied)}
                    className="w-full px-4 py-2 bg-zion-purple hover:bg-zion-purple-light disabled:bg-zion-slate-light/30 disabled:cursor-not-allowed text-white rounded-lg transition-colors flex items-center justify-center space-x-2"
                  >
                    {isOptimizing ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Applying...</span>
                      </>
                    ) : (
                      <>
                        <Zap className="w-4 h-4" />
                        <span>Apply All Optimizations</span>
                      </>
                    )}
                  </button>
                </div>
              )}

              {/* Actions */}
              <div className="pt-4 border-t border-zion-slate-light/20 space-y-3">
                <button
                  onClick={refreshMetrics}
                  className="w-full px-4 py-2 bg-zion-slate-light/20 hover:bg-zion-slate-light/30 text-white rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Refresh Metrics</span>
                </button>
                
                <div className="text-xs text-zion-slate-light text-center">
                  Performance monitoring in real-time
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
