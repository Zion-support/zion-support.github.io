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
    windowLoad: 0,
    memoryUsage: 0,
    networkSpeed: 0,
    cpuUsage: 0
  });
  const [optimizations, setOptimizations] = useState<PerformanceOptimization[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  // Performance monitoring
  const measurePerformance = useCallback(async () => {
    setIsAnalyzing(true);
    
    try {
      // Measure Core Web Vitals
      const vitals = await import('web-vitals');
      
      // FCP
      vitals.onFCP((metric) => {
        setMetrics(prev => ({ ...prev, fcp: metric.value }));
      });

      // LCP
      vitals.onLCP((metric) => {
        setMetrics(prev => ({ ...prev, lcp: metric.value }));
      });

      // FID
      vitals.onFID((metric) => {
        setMetrics(prev => ({ ...prev, fid: metric.value }));
      });

      // CLS
      vitals.onCLS((metric) => {
        setMetrics(prev => ({ ...prev, cls: metric.value }));
      });

      // TTFB
      vitals.onTTFB((metric) => {
        setMetrics(prev => ({ ...prev, ttfb: metric.value }));
      });

      // DOM Load
      if (document.readyState === 'complete') {
        setMetrics(prev => ({ 
          ...prev, 
          domLoad: performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart,
          windowLoad: performance.timing.loadEventEnd - performance.timing.navigationStart
        }));
      }

      // Memory usage (if available)
      if ('memory' in performance) {
        setMetrics(prev => ({ 
          ...prev, 
          memoryUsage: (performance as any).memory.usedJSHeapSize / 1024 / 1024 // MB
        }));
      }

      // Network speed estimate
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        setMetrics(prev => ({ 
          ...prev, 
          networkSpeed: connection.downlink || 0
        }));
      }

      // CPU usage estimate (if available)
      if ('hardwareConcurrency' in navigator) {
        setMetrics(prev => ({ 
          ...prev, 
          cpuUsage: navigator.hardwareConcurrency || 0
        }));
      }

      // Generate optimization suggestions
      generateOptimizations();
      
    } catch (error) {
      console.error('Performance measurement failed:', error);
    } finally {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
    }
  }, []);

  // Generate optimization suggestions based on metrics
  const generateOptimizations = useCallback(() => {
    const suggestions: PerformanceOptimization[] = [];

    // Image optimization
    if (metrics.lcp > 2500) {
      suggestions.push({
        id: 'image-optimization',
        name: 'Optimize Images',
        description: 'Large images are slowing down your LCP. Consider using WebP format and lazy loading.',
        impact: 'high',
        applied: false,
        action: () => {
          // Implement image optimization
          console.log('Optimizing images...');
        }
      });
    }

    // Bundle size optimization
    if (metrics.fcp > 1800) {
      suggestions.push({
        id: 'bundle-optimization',
        name: 'Reduce Bundle Size',
        description: 'Large JavaScript bundles are delaying FCP. Consider code splitting and tree shaking.',
        impact: 'high',
        applied: false,
        action: () => {
          // Implement bundle optimization
          console.log('Optimizing bundle...');
        }
      });
    }

    // CSS optimization
    if (metrics.fcp > 1500) {
      suggestions.push({
        id: 'css-optimization',
        name: 'Optimize CSS',
        description: 'Unused CSS is blocking rendering. Consider critical CSS extraction.',
        impact: 'medium',
        applied: false,
        action: () => {
          // Implement CSS optimization
          console.log('Optimizing CSS...');
        }
      });
    }

    // Font optimization
    if (metrics.fcp > 1200) {
      suggestions.push({
        id: 'font-optimization',
        name: 'Optimize Fonts',
        description: 'Font loading is blocking text rendering. Consider font preloading.',
        impact: 'medium',
        applied: false,
        action: () => {
          // Implement font optimization
          console.log('Optimizing fonts...');
        }
      });
    }

    // Third-party script optimization
    if (metrics.fid > 100) {
      suggestions.push({
        id: 'third-party-optimization',
        name: 'Optimize Third-party Scripts',
        description: 'Third-party scripts are causing input delays. Consider async loading.',
        impact: 'high',
        applied: false,
        action: () => {
          // Implement third-party optimization
          console.log('Optimizing third-party scripts...');
        }
      });
    }

    // Layout shift prevention
    if (metrics.cls > 0.1) {
      suggestions.push({
        id: 'layout-shift-prevention',
        name: 'Prevent Layout Shifts',
        description: 'Content is shifting during load. Reserve space for dynamic content.',
        impact: 'high',
        applied: false,
        action: () => {
          // Implement layout shift prevention
          console.log('Preventing layout shifts...');
        }
      });
    }

    setOptimizations(suggestions);
  }, [metrics]);

  // Apply optimization
  const applyOptimization = useCallback((id: string) => {
    setOptimizations(prev => 
      prev.map(opt => 
        opt.id === id 
          ? { ...opt, applied: true }
          : opt
      )
    );
    
    const optimization = optimizations.find(opt => opt.id === id);
    if (optimization) {
      optimization.action();
    }
  }, [optimizations]);

  // Get performance score
  const getPerformanceScore = useCallback(() => {
    let score = 100;
    
    if (metrics.fcp > 1800) score -= 20;
    else if (metrics.fcp > 1500) score -= 10;
    
    if (metrics.lcp > 4000) score -= 25;
    else if (metrics.lcp > 2500) score -= 15;
    
    if (metrics.fid > 300) score -= 20;
    else if (metrics.fid > 100) score -= 10;
    
    if (metrics.cls > 0.25) score -= 20;
    else if (metrics.cls > 0.1) score -= 10;
    
    if (metrics.ttfb > 600) score -= 15;
    else if (metrics.ttfb > 200) score -= 5;
    
    return Math.max(0, score);
  }, [metrics]);

  // Get performance grade
  const getPerformanceGrade = useCallback(() => {
    const score = getPerformanceScore();
    if (score >= 90) return { grade: 'A', color: 'text-green-500' };
    if (score >= 80) return { grade: 'B', color: 'text-yellow-500' };
    if (score >= 70) return { grade: 'C', color: 'text-orange-500' };
    if (score >= 60) return { grade: 'D', color: 'text-red-500' };
    return { grade: 'F', color: 'text-red-600' };
  }, [getPerformanceScore]);

  // Get impact color
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'text-red-500 bg-red-50 border-red-200';
      case 'medium': return 'text-yellow-500 bg-yellow-50 border-yellow-200';
      case 'low': return 'text-green-500 bg-green-50 border-green-200';
      default: return 'text-gray-500 bg-gray-50 border-gray-200';
    }
  };

  const performanceGrade = getPerformanceGrade();
  const performanceScore = getPerformanceScore();

  return (
    <>
      {/* Performance Optimizer Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-zion-cyan to-zion-purple text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open Performance Optimizer"
      >
        <Activity className="w-6 h-6" />
      </motion.button>

      {/* Performance Optimizer Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-zion-slate-dark rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-zion-cyan to-zion-purple p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Activity className="w-8 h-8" />
                    <div>
                      <h2 className="text-2xl font-bold">Performance Optimizer</h2>
                      <p className="text-zion-cyan-light">Monitor and optimize your app's performance</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                {/* Performance Score */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-zion-slate-dark dark:text-white">
                      Performance Score
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className={`text-3xl font-bold ${performanceGrade.color}`}>
                        {performanceGrade.grade}
                      </span>
                      <span className="text-2xl font-bold text-zion-slate-dark dark:text-white">
                        {performanceScore}/100
                      </span>
                    </div>
                  </div>
                  
                  <div className="w-full bg-gray-200 dark:bg-zion-slate-light rounded-full h-3">
                    <motion.div
                      className="bg-gradient-to-r from-zion-cyan to-zion-purple h-3 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${performanceScore}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  <div className="bg-zion-slate-light/10 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="w-5 h-5 text-zion-cyan" />
                      <span className="font-semibold text-zion-slate-dark dark:text-white">FCP</span>
                    </div>
                    <div className="text-2xl font-bold text-zion-slate-dark dark:text-white">
                      {metrics.fcp.toFixed(0)}ms
                    </div>
                    <div className="text-sm text-zion-slate-light">
                      First Contentful Paint
                    </div>
                  </div>

                  <div className="bg-zion-slate-light/10 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Gauge className="w-5 h-5 text-zion-purple" />
                      <span className="font-semibold text-zion-slate-dark dark:text-white">LCP</span>
                    </div>
                    <div className="text-2xl font-bold text-zion-slate-dark dark:text-white">
                      {metrics.lcp.toFixed(0)}ms
                    </div>
                    <div className="text-sm text-zion-slate-light">
                      Largest Contentful Paint
                    </div>
                  </div>

                  <div className="bg-zion-slate-light/10 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Zap className="w-5 h-5 text-zion-cyan" />
                      <span className="font-semibold text-zion-slate-dark dark:text-white">FID</span>
                    </div>
                    <div className="text-2xl font-bold text-zion-slate-dark dark:text-white">
                      {metrics.fid.toFixed(0)}ms
                    </div>
                    <div className="text-sm text-zion-slate-light">
                      First Input Delay
                    </div>
                  </div>

                  <div className="bg-zion-slate-light/10 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-zion-purple" />
                      <span className="font-semibold text-zion-slate-dark dark:text-white">CLS</span>
                    </div>
                    <div className="text-2xl font-bold text-zion-slate-dark dark:text-white">
                      {metrics.cls.toFixed(3)}
                    </div>
                    <div className="text-sm text-zion-slate-light">
                      Cumulative Layout Shift
                    </div>
                  </div>

                  <div className="bg-zion-slate-light/10 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Network className="w-5 h-5 text-zion-cyan" />
                      <span className="font-semibold text-zion-slate-dark dark:text-white">TTFB</span>
                    </div>
                    <div className="text-2xl font-bold text-zion-slate-dark dark:text-white">
                      {metrics.ttfb.toFixed(0)}ms
                    </div>
                    <div className="text-sm text-zion-slate-light">
                      Time to First Byte
                    </div>
                  </div>

                  <div className="bg-zion-slate-light/10 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <HardDrive className="w-5 h-5 text-zion-purple" />
                      <span className="font-semibold text-zion-slate-dark dark:text-white">Memory</span>
                    </div>
                    <div className="text-2xl font-bold text-zion-slate-dark dark:text-white">
                      {metrics.memoryUsage?.toFixed(1) || 'N/A'}MB
                    </div>
                    <div className="text-sm text-zion-slate-light">
                      Memory Usage
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button
                    onClick={measurePerformance}
                    disabled={isAnalyzing}
                    className="flex items-center space-x-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isAnalyzing ? (
                      <RefreshCw className="w-5 h-5 animate-spin" />
                    ) : (
                      <Activity className="w-5 h-5" />
                    )}
                    <span>{isAnalyzing ? 'Analyzing...' : 'Analyze Performance'}</span>
                  </button>

                  <button
                    onClick={() => {
                      setMetrics({
                        fcp: 0, lcp: 0, fid: 0, cls: 0, ttfb: 0,
                        domLoad: 0, windowLoad: 0, memoryUsage: 0,
                        networkSpeed: 0, cpuUsage: 0
                      });
                      setOptimizations([]);
                      setAnalysisComplete(false);
                    }}
                    className="flex items-center space-x-2 bg-zion-slate-light/20 text-zion-slate-dark dark:text-white px-6 py-3 rounded-lg font-semibold hover:bg-zion-slate-light/30 transition-all duration-300"
                  >
                    <RefreshCw className="w-5 h-5" />
                    <span>Reset</span>
                  </button>
                </div>

                {/* Optimizations */}
                {analysisComplete && (
                  <div>
                    <h3 className="text-xl font-semibold text-zion-slate-dark dark:text-white mb-4">
                      Optimization Suggestions
                    </h3>
                    
                    {optimizations.length === 0 ? (
                      <div className="text-center py-8">
                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                        <h4 className="text-lg font-semibold text-zion-slate-dark dark:text-white mb-2">
                          Great Performance!
                        </h4>
                        <p className="text-zion-slate-light">
                          No optimizations needed at this time.
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {optimizations.map((optimization) => (
                          <motion.div
                            key={optimization.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`p-4 rounded-lg border-2 ${
                              optimization.applied 
                                ? 'bg-green-50 border-green-200' 
                                : 'bg-white dark:bg-zion-slate-light/5 border-zion-slate-light/20'
                            }`}
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-2">
                                  <h4 className="font-semibold text-zion-slate-dark dark:text-white">
                                    {optimization.name}
                                  </h4>
                                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getImpactColor(optimization.impact)}`}>
                                    {optimization.impact} impact
                                  </span>
                                  {optimization.applied && (
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                  )}
                                </div>
                                <p className="text-zion-slate-light text-sm mb-3">
                                  {optimization.description}
                                </p>
                                {!optimization.applied && (
                                  <button
                                    onClick={() => applyOptimization(optimization.id)}
                                    className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300"
                                  >
                                    Apply Optimization
                                  </button>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}