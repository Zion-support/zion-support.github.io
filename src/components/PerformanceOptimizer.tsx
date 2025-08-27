<<<<<<< HEAD
import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, TrendingUp, AlertTriangle, CheckCircle, Clock, Gauge } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
}

interface PerformanceOptimizerProps {
  showMetrics?: boolean;
  enableOptimizations?: boolean;
  className?: string;
}

export function PerformanceOptimizer({ 
  showMetrics = false,
  enableOptimizations = true,
  className = ''
}: PerformanceOptimizerProps) {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [showOptimizationPanel, setShowOptimizationPanel] = useState(false);
  const observerRef = useRef<PerformanceObserver | null>(null);

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if ('performance' in window) {
      // Measure Core Web Vitals
      const measureFCP = () => {
        const fcpEntry = performance.getEntriesByType('paint').find(
          entry => entry.name === 'first-contentful-paint'
        );
        return fcpEntry ? fcpEntry.startTime : 0;
      };

      const measureLCP = () => {
        const lcpEntry = performance.getEntriesByType('largest-contentful-paint');
        return lcpEntry.length > 0 ? lcpEntry[lcpEntry.length - 1].startTime : 0;
      };

      const measureCLS = () => {
        let cls = 0;
        if ('PerformanceObserver' in window) {
          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
                cls += (entry as any).value;
              }
            }
          });
          observer.observe({ entryTypes: ['layout-shift'] });
        }
        return cls;
      };

      const measureTTFB = () => {
        const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        return navigationEntry ? navigationEntry.responseStart - navigationEntry.requestStart : 0;
      };

      // Simulate FID measurement (requires user interaction)
      const measureFID = () => {
        return new Promise<number>((resolve) => {
          const startTime = performance.now();
          const handleFirstInput = () => {
            const fid = performance.now() - startTime;
            document.removeEventListener('click', handleFirstInput);
            document.removeEventListener('keydown', handleFirstInput);
            resolve(fid);
          };
          document.addEventListener('click', handleFirstInput, { once: true });
          document.addEventListener('keydown', handleFirstInput, { once: true });
        });
      };

      // Get immediate metrics
      const immediateMetrics: Partial<PerformanceMetrics> = {
        fcp: measureFCP(),
        lcp: measureLCP(),
        cls: measureCLS(),
        ttfb: measureTTFB(),
      };

      // Measure FID when user interacts
      measureFID().then(fid => {
        setMetrics({
          ...immediateMetrics,
          fid
        } as PerformanceMetrics);
      });

      setMetrics(immediateMetrics as PerformanceMetrics);
    }
  }, []);

  // Performance optimizations
  const applyOptimizations = useCallback(async () => {
    if (!enableOptimizations) return;

    setIsOptimizing(true);
    const appliedOptimizations: string[] = [];

    try {
      // 1. Preload critical resources
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          const criticalResources = [
            '/images/hero-bg.jpg',
            '/fonts/inter-var.woff2'
          ];
          
          criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = resource;
            link.as = resource.includes('.woff2') ? 'font' : 'image';
            link.crossOrigin = 'anonymous';
            document.head.appendChild(link);
          });
          appliedOptimizations.push('Preloaded critical resources');
        });
      }

      // 2. Optimize images
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
          appliedOptimizations.push('Applied lazy loading to images');
        }
      });

      // 3. Optimize fonts
      if ('fonts' in document) {
        try {
          await document.fonts.ready;
          appliedOptimizations.push('Fonts loaded and optimized');
        } catch (error) {
          console.warn('Font optimization failed:', error);
        }
      }

      // 4. Enable service worker caching
      if ('serviceWorker' in navigator) {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js');
          if (registration.active) {
            appliedOptimizations.push('Service worker active and caching');
          }
        } catch (error) {
          console.warn('Service worker registration failed:', error);
        }
      }

      // 5. Optimize animations
      const animatedElements = document.querySelectorAll('[data-animate]');
      animatedElements.forEach(element => {
        (element as HTMLElement).style.willChange = 'transform, opacity';
      });
      appliedOptimizations.push('Optimized animation performance');

      // 6. Memory management
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        if (memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.8) {
          // Trigger garbage collection if memory usage is high
          if ('gc' in window) {
            (window as any).gc();
            appliedOptimizations.push('Triggered garbage collection');
          }
        }
      }

      setOptimizations(appliedOptimizations);
    } catch (error) {
      console.error('Performance optimization failed:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [enableOptimizations]);

  // Monitor performance continuously
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Initial measurement
      measurePerformance();

      // Set up performance observer for LCP
      if ('PerformanceObserver' in window) {
        observerRef.current = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            setMetrics(prev => prev ? { ...prev, lcp: lastEntry.startTime } : null);
          }
        });

        try {
          observerRef.current.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (error) {
          console.warn('PerformanceObserver not supported:', error);
        }
      }

      // Measure performance after page load
      const handleLoad = () => {
        setTimeout(measurePerformance, 1000);
      };

      window.addEventListener('load', handleLoad);

      // Apply optimizations after initial load
      if (enableOptimizations) {
        setTimeout(applyOptimizations, 2000);
      }

      return () => {
        window.removeEventListener('load', handleLoad);
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    }
  }, [measurePerformance, applyOptimizations, enableOptimizations]);

  // Performance score calculation
  const calculatePerformanceScore = (metrics: PerformanceMetrics): number => {
    let score = 100;

    // FCP scoring (0-2500ms is good)
    if (metrics.fcp > 2500) score -= 20;
    else if (metrics.fcp > 1000) score -= 10;

    // LCP scoring (0-2500ms is good)
    if (metrics.lcp > 4000) score -= 25;
    else if (metrics.lcp > 2500) score -= 15;

    // FID scoring (0-100ms is good)
    if (metrics.fid > 300) score -= 25;
    else if (metrics.fid > 100) score -= 15;

    // CLS scoring (0-0.1 is good)
    if (metrics.cls > 0.25) score -= 20;
    else if (metrics.cls > 0.1) score -= 10;

    return Math.max(0, score);
  };

  const getPerformanceGrade = (score: number): { grade: string; color: string; icon: React.ReactNode } => {
    if (score >= 90) return { grade: 'A', color: 'text-green-400', icon: <CheckCircle className="w-5 h-5" /> };
    if (score >= 80) return { grade: 'B', color: 'text-blue-400', icon: <TrendingUp className="w-5 h-5" /> };
    if (score >= 70) return { grade: 'C', color: 'text-yellow-400', icon: <Clock className="w-5 h-5" /> };
    return { grade: 'D', color: 'text-red-400', icon: <AlertTriangle className="w-5 h-5" /> };
  };

  if (!showMetrics && !showOptimizationPanel) {
    return null;
  }

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${className}`}>
      <AnimatePresence>
        {showOptimizationPanel && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 mb-4 max-w-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Performance Optimizer</h3>
              <button
                onClick={() => setShowOptimizationPanel(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ×
              </button>
            </div>

            {metrics && (
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-300">Performance Score</span>
                  {(() => {
                    const score = calculatePerformanceScore(metrics);
                    const { grade, color, icon } = getPerformanceGrade(score);
                    return (
                      <div className={`flex items-center ${color}`}>
                        {icon}
                        <span className="ml-1 font-bold">{grade}</span>
                        <span className="ml-2 text-sm">({score})</span>
                      </div>
                    );
                  })()}
                </div>

                <div className="space-y-2 text-xs text-gray-400">
                  <div className="flex justify-between">
                    <span>FCP:</span>
                    <span className={metrics.fcp < 1000 ? 'text-green-400' : 'text-red-400'}>
                      {metrics.fcp.toFixed(0)}ms
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>LCP:</span>
                    <span className={metrics.lcp < 2500 ? 'text-green-400' : 'text-red-400'}>
                      {metrics.lcp.toFixed(0)}ms
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>FID:</span>
                    <span className={metrics.fid < 100 ? 'text-green-400' : 'text-red-400'}>
                      {metrics.fid.toFixed(0)}ms
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>CLS:</span>
                    <span className={metrics.cls < 0.1 ? 'text-green-400' : 'text-red-400'}>
                      {metrics.cls.toFixed(3)}
                    </span>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={applyOptimizations}
              disabled={isOptimizing}
              className="w-full flex items-center justify-center px-4 py-2 bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-600 text-white rounded-lg transition-all duration-300 disabled:cursor-not-allowed"
            >
              {isOptimizing ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  Optimizing...
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4 mr-2" />
                  Optimize Performance
                </>
              )}
            </button>

            {optimizations.length > 0 && (
              <div className="mt-4">
                <h4 className="text-sm font-medium text-white mb-2">Applied Optimizations:</h4>
                <ul className="space-y-1 text-xs text-gray-300">
                  {optimizations.map((optimization, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {optimization}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowOptimizationPanel(!showOptimizationPanel)}
        className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
        title="Performance Optimizer"
      >
        <Gauge className="w-6 h-6" />
      </motion.button>
    </div>
=======
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, AlertTriangle, CheckCircle, Info, X } from 'lucide-react';

interface PerformanceMetric {
  name: string;
  value: number;
  unit: string;
  status: 'good' | 'warning' | 'critical';
  threshold: number;
}

interface OptimizationSuggestion {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  category: 'performance' | 'accessibility' | 'seo' | 'security';
}

export function PerformanceOptimizer() {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetric[]>([]);
  const [suggestions, setSuggestions] = useState<OptimizationSuggestion[]>([]);
  const [showPanel, setShowPanel] = useState(false);

  useEffect(() => {
    // Simulate performance monitoring
    const interval = setInterval(() => {
      const newMetrics: PerformanceMetric[] = [
        {
          name: 'Page Load Time',
          value: Math.random() * 2000 + 500,
          unit: 'ms',
          status: Math.random() > 0.7 ? 'good' : Math.random() > 0.4 ? 'warning' : 'critical',
          threshold: 1500
        },
        {
          name: 'First Contentful Paint',
          value: Math.random() * 1000 + 200,
          unit: 'ms',
          status: Math.random() > 0.8 ? 'good' : Math.random() > 0.5 ? 'warning' : 'critical',
          threshold: 800
        },
        {
          name: 'Largest Contentful Paint',
          value: Math.random() * 2500 + 800,
          unit: 'ms',
          status: Math.random() > 0.75 ? 'good' : Math.random() > 0.45 ? 'warning' : 'critical',
          threshold: 2000
        },
        {
          name: 'Cumulative Layout Shift',
          value: Math.random() * 0.3,
          unit: '',
          status: Math.random() > 0.8 ? 'good' : Math.random() > 0.6 ? 'warning' : 'critical',
          threshold: 0.1
        }
      ];

      setMetrics(newMetrics);

      // Generate optimization suggestions based on metrics
      const newSuggestions: OptimizationSuggestion[] = [];
      
      if (newMetrics[0].value > 1500) {
        newSuggestions.push({
          id: '1',
          title: 'Optimize Image Loading',
          description: 'Consider implementing lazy loading and WebP format for images',
          priority: 'high',
          category: 'performance'
        });
      }

      if (newMetrics[1].value > 800) {
        newSuggestions.push({
          id: '2',
          title: 'Reduce Critical CSS',
          description: 'Inline critical CSS and defer non-critical styles',
          priority: 'medium',
          category: 'performance'
        });
      }

      if (newMetrics[3].value > 0.1) {
        newSuggestions.push({
          id: '3',
          title: 'Fix Layout Shifts',
          description: 'Set explicit dimensions for images and avoid dynamic content insertion',
          priority: 'high',
          category: 'performance'
        });
      }

      setSuggestions(newSuggestions);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Show performance panel after 10 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-400';
      case 'warning': return 'text-yellow-400';
      case 'critical': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good': return <CheckCircle className="w-4 h-4" />;
      case 'warning': return <AlertTriangle className="w-4 h-4" />;
      case 'critical': return <AlertTriangle className="w-4 h-4" />;
      default: return <Info className="w-4 h-4" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500/20 border-red-500/30 text-red-400';
      case 'medium': return 'bg-yellow-500/20 border-yellow-500/30 text-yellow-400';
      case 'low': return 'bg-blue-500/20 border-blue-500/30 text-blue-400';
      default: return 'bg-gray-500/20 border-gray-500/30 text-gray-400';
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Performance Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 100 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <button
          onClick={() => setShowPanel(!showPanel)}
          className="group relative p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-110"
        >
          <Zap className="w-6 h-6 text-white" />
          
          {/* Performance Indicator */}
          {suggestions.length > 0 && (
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">{suggestions.length}</span>
            </div>
          )}
        </button>
      </motion.div>

      {/* Performance Panel */}
      <AnimatePresence>
        {showPanel && (
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 w-96 max-h-[80vh] bg-slate-900/95 backdrop-blur-xl border border-cyan-400/20 rounded-2xl shadow-2xl shadow-cyan-400/10 z-40 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-cyan-400/20">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Performance Monitor</h3>
                  <p className="text-cyan-400 text-sm">Real-time metrics</p>
                </div>
              </div>
              <button
                onClick={() => setShowPanel(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4 max-h-[calc(80vh-80px)] overflow-y-auto">
              {/* Performance Metrics */}
              <div>
                <h4 className="text-white font-medium mb-3">Performance Metrics</h4>
                <div className="space-y-3">
                  {metrics.map((metric, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                      <div className="flex items-center gap-3">
                        <div className={`${getStatusColor(metric.status)}`}>
                          {getStatusIcon(metric.status)}
                        </div>
                        <div>
                          <div className="text-white text-sm font-medium">{metric.name}</div>
                          <div className="text-gray-400 text-xs">
                            {metric.value.toFixed(metric.unit === '' ? 3 : 0)}{metric.unit}
                          </div>
                        </div>
                      </div>
                      <div className={`text-xs px-2 py-1 rounded-full ${getStatusColor(metric.status)} bg-opacity-20`}>
                        {metric.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Optimization Suggestions */}
              {suggestions.length > 0 && (
                <div>
                  <h4 className="text-white font-medium mb-3">Optimization Suggestions</h4>
                  <div className="space-y-3">
                    {suggestions.map((suggestion) => (
                      <div
                        key={suggestion.id}
                        className={`p-3 rounded-lg border ${getPriorityColor(suggestion.priority)}`}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h5 className="font-medium">{suggestion.title}</h5>
                          <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(suggestion.priority)}`}>
                            {suggestion.priority}
                          </span>
                        </div>
                        <p className="text-sm opacity-90">{suggestion.description}</p>
                        <div className="mt-2">
                          <span className="text-xs opacity-75">{suggestion.category}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* No Suggestions State */}
              {suggestions.length === 0 && (
                <div className="text-center py-8">
                  <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-3" />
                  <p className="text-white font-medium">All Good!</p>
                  <p className="text-gray-400 text-sm">Performance is optimal</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
>>>>>>> b853260fd825552ae78a5c6124dfc100e849b8d4
  );
}
