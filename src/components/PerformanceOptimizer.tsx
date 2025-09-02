    // Monitor Core Web Vitals
    // Observe all lazy elements
    const lazyElements = document.querySelectorAll('[data-lazy], img[data-src]');
    lazyElements.forEach((el) => observer.observe(el));
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
        let cls = 0;
        for (const entry of list.getEntries()) {
          if (entry instanceof LayoutShift) {
            cls += entry.value;
          }
        }
        setMetrics(prev => ({ ...prev, cls }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ 
          ...prev, 
          ttfb: navigationEntry.responseStart - navigationEntry.requestStart,
          domLoad: navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart,
          windowLoad: navigationEntry.loadEventEnd - navigationEntry.loadEventStart
        }));
      }

      // Store observers for cleanup
      observerRef.current = {
        disconnect: () => {
          fcpObserver.disconnect();
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
        }
      };
    }

    // Measure bundle size and memory usage
    if ('performance' in window) {
      const memory = (performance as any).memory;
      if (memory) {
        setMetrics(prev => ({
          ...prev,
          memoryUsage: memory.usedJSHeapSize / 1024 / 1024,
          cpuUsage: 0 // CPU usage requires more complex measurement
        }));
      }
    }

    // Estimate bundle size from loaded scripts
    const scripts = document.querySelectorAll('script[src]');
    let totalSize = 0;
    scripts.forEach(script => {
      const src = script.getAttribute('src');
      if (src && src.includes('chunk') || src.includes('main')) {
        totalSize += 100; // Rough estimate
      }
    });
    setMetrics(prev => ({ ...prev, bundleSize: totalSize * 1024 }));
  }, []);

  // Calculate performance score
  const calculatePerformanceScore = useCallback(() => {
    let score = 100;
    
    if (metrics.fcp && metrics.fcp > 1800) score -= 20;
    if (metrics.lcp && metrics.lcp > 2500) score -= 20;
    if (metrics.fid && metrics.fid > 100) score -= 20;
    if (metrics.cls && metrics.cls > 0.1) score -= 20;
    if (metrics.ttfb && metrics.ttfb > 600) score -= 20;
    
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  }, [metrics]);

  // Image optimization
  const optimizeImages = useCallback(() => {
    if (!optimizeImages) return;
    
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (img instanceof HTMLImageElement) {
        // Add lazy loading
        if (!img.loading) {
          img.loading = 'lazy';
        }
        
        // Add srcset for responsive images
        if (!img.srcset && img.src) {
          const src = img.src;
          const baseName = src.substring(0, src.lastIndexOf('.'));
          const extension = src.substring(src.lastIndexOf('.'));
          img.srcset = `${baseName}-300${extension} 300w, ${baseName}-600${extension} 600w, ${baseName}-900${extension} 900w`;
          img.sizes = '(max-width: 600px) 300px, (max-width: 900px) 600px, 900px';
        }
      }
    });
  }, [optimizeImages]);

  // Component lazy loading
  const implementLazyLoading = useCallback(() => {
    if (!lazyLoadComponents) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          if (target.dataset.src) {
            target.src = target.dataset.src;
            target.removeAttribute('data-src');
            observer.unobserve(target);
          }
        }
      });
    });

    const lazyElements = document.querySelectorAll('[data-src]');
    lazyElements.forEach(el => observer.observe(el));
  }, [lazyLoadComponents]);

  // Critical resource preloading
  const preloadCriticalResources = useCallback(() => {
    if (!preloadCritical) return;
    
    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/css/critical.css',
      '/js/main.js'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.includes('.css') ? 'style' : resource.includes('.js') ? 'script' : 'font';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }, [preloadCritical]);

  // Memory optimization
  const optimizeMemory = useCallback(() => {
    // Clean up event listeners
    const cleanup = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };

    // Set up periodic cleanup
    intervalRef.current = setInterval(cleanup, 30000);
    
    return cleanup;
  }, []);

  // Run all optimizations
  const runOptimizations = useCallback(async () => {
    if (!enabled) return;
    
    setIsOptimizing(true);
    setOptimizationStatus('Optimizing...');
    
    try {
      await Promise.all([
        optimizeImages(),
        implementLazyLoading(),
        preloadCriticalResources()
      ]);
      
      const cleanup = optimizeMemory();
      
      setOptimizations([
        'Images optimized with lazy loading',
        'Components configured for lazy loading',
        'Critical resources preloaded',
        'Memory management optimized'
      ]);
      
      setOptimizationStatus('Optimized');
      setShowOptimizationNotification(true);
      
      // Add to optimization history
      const improvement = Math.random() * 100 + 50; // Simulated improvement
      setOptimizationHistory(prev => [...prev, {
        action: 'Performance optimization',
        improvement
      }]);
      
      setTimeout(() => setShowOptimizationNotification(false), 3000);
      
      return cleanup;
    } catch (error) {
      console.error('Performance optimization failed:', error);
      setOptimizationStatus('Failed');
    } finally {
      setIsOptimizing(false);
    }
  }, [enabled, optimizeImages, implementLazyLoading, preloadCriticalResources, optimizeMemory]);

  // Optimize performance (main function)
  const optimizePerformance = useCallback(async () => {
    const cleanup = await runOptimizations();
    if (cleanup) {
      cleanup();
    }
  }, [runOptimizations]);

  // Check service worker status
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(() => {
        setServiceWorkerStatus('installed');
      }).catch(() => {
        setServiceWorkerStatus('failed');
      });
    }
  }, []);

  // Initialize performance monitoring
  useEffect(() => {
    if (enabled) {
      measurePerformance();
      
      // Update performance score when metrics change
      const score = calculatePerformanceScore();
      setPerformanceScore(score);
    }
  }, [enabled, measurePerformance, calculatePerformanceScore]);

  // Auto-optimize when enabled
  useEffect(() => {
    if (enabled && autoOptimize) {
      const timer = setTimeout(() => {
        runOptimizations();
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [enabled, autoOptimize, runOptimizations]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };

export default PerformanceOptimizer;
  }, []);
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap,
  TrendingUp,
  Clock,
  BarChart3,
  Activity,
  Cpu,
  HardDrive,
  Network,
  Smartphone,
  Monitor,
  Eye,
  Settings,
  RefreshCw,
  CheckCircle,
  AlertTriangle,
  Info,
  X,
  Play,
  Pause,
  Target,
  Gauge,
  Speed,
  Battery,
  Wifi,
  Signal
} from 'lucide-react';

interface PerformanceMetrics {
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  fcp: number; // First Contentful Paint
  si: number; // Speed Index
  tti: number; // Time to Interactive
  tbt: number; // Total Blocking Time
}

interface BundleAnalysis {
  totalSize: number;
  jsSize: number;
  cssSize: number;
  imageSize: number;
  fontSize: number;
  compressionRatio: number;
  chunkCount: number;
  largestChunks: Array<{
    name: string;
    size: number;
    percentage: number;
  }>;
}

interface PerformanceIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  category: 'core-web-vitals' | 'bundle' | 'images' | 'fonts' | 'caching';
  fixable: boolean;
  estimatedImpact: number;
}

interface PerformanceOptimizerProps {
  autoMonitor?: boolean;
  showAdvanced?: boolean;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  autoMonitor = true,
  showAdvanced = false,
  onMetricsUpdate
}) => {
  const [isMonitoring, setIsMonitoring] = useState(autoMonitor);
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [bundleAnalysis, setBundleAnalysis] = useState<BundleAnalysis | null>(null);
  const [issues, setIssues] = useState<PerformanceIssue[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [optimizationHistory, setOptimizationHistory] = useState<Array<{
    timestamp: Date;
    action: string;
    impact: number;
  }>>([]);

  // Performance monitoring interval
  useEffect(() => {
    if (!isMonitoring) return;

    const interval = setInterval(() => {
      measurePerformance();
    }, 10000); // Measure every 10 seconds

    return () => clearInterval(interval);
  }, [isMonitoring]);

  // Initial performance measurement
  useEffect(() => {
    if (autoMonitor) {
      measurePerformance();
      analyzeBundle();
    }
  }, [autoMonitor]);

  // Measure Core Web Vitals and performance metrics
  const measurePerformance = useCallback(async () => {
    try {
      // Use Performance API to get metrics
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const newMetrics: PerformanceMetrics = {
        ttfb: navigation.responseStart - navigation.requestStart,
        fcp: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
        lcp: 0, // Will be updated by LCP observer
        fid: 0, // Will be updated by FID observer
        cls: 0, // Will be updated by CLS observer
        si: 0, // Speed Index calculation
        tti: 0, // Time to Interactive
        tbt: 0, // Total Blocking Time
      };

      // LCP Observer
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          newMetrics.lcp = lastEntry.startTime;
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // FID Observer
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            newMetrics.fid = Math.max(newMetrics.fid, entry.processingStart - entry.startTime);
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // CLS Observer
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          list.getEntries().forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          newMetrics.cls = clsValue;
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      }

      setMetrics(newMetrics);
      onMetricsUpdate?.(newMetrics);
      
      // Analyze for issues
      analyzePerformanceIssues(newMetrics);
      
    } catch (error) {
      console.error('Error measuring performance:', error);
    }
  }, [onMetricsUpdate]);

  // Analyze bundle size and composition
  const analyzeBundle = useCallback(async () => {
    try {
      // This would typically come from webpack-bundle-analyzer or similar
      // For now, we'll simulate the analysis
      const mockBundleAnalysis: BundleAnalysis = {
        totalSize: 2.4 * 1024 * 1024, // 2.4MB
        jsSize: 1.8 * 1024 * 1024, // 1.8MB
        cssSize: 300 * 1024, // 300KB
        imageSize: 200 * 1024, // 200KB
        fontSize: 100 * 1024, // 100KB
        compressionRatio: 0.7, // 70% compression
        chunkCount: 45,
        largestChunks: [
          { name: 'vendor.js', size: 800 * 1024, percentage: 33 },
          { name: 'app.js', size: 600 * 1024, percentage: 25 },
          { name: 'styles.css', size: 300 * 1024, percentage: 12.5 },
        ]
      };

      setBundleAnalysis(mockBundleAnalysis);
    } catch (error) {
      console.error('Error analyzing bundle:', error);
    }
  }, []);

  // Analyze performance issues
  const analyzePerformanceIssues = useCallback((currentMetrics: PerformanceMetrics) => {
    const newIssues: PerformanceIssue[] = [];

    // LCP issues
    if (currentMetrics.lcp > 2500) {
      newIssues.push({
        id: 'lcp-slow',
        type: 'error',
        title: 'Slow Largest Contentful Paint',
        description: `LCP is ${currentMetrics.lcp}ms, should be under 2.5s`,
        impact: 'high',
        category: 'core-web-vitals',
        fixable: true,
        estimatedImpact: 15
      });
    }

    // FID issues
    if (currentMetrics.fid > 100) {
      newIssues.push({
        id: 'fid-slow',
        type: 'error',
        title: 'Slow First Input Delay',
        description: `FID is ${currentMetrics.fid}ms, should be under 100ms`,
        impact: 'high',
        category: 'core-web-vitals',
        fixable: true,
        estimatedImpact: 12
      });
    }

    // CLS issues
    if (currentMetrics.cls > 0.1) {
      newIssues.push({
        id: 'cls-high',
        type: 'warning',
        title: 'High Cumulative Layout Shift',
        description: `CLS is ${currentMetrics.cls.toFixed(3)}, should be under 0.1`,
        impact: 'medium',
        category: 'core-web-vitals',
        fixable: true,
        estimatedImpact: 8
      });
    }

    // Bundle size issues
    if (bundleAnalysis && bundleAnalysis.totalSize > 2 * 1024 * 1024) {
      newIssues.push({
        id: 'bundle-large',
        type: 'warning',
        title: 'Large Bundle Size',
        description: `Bundle is ${(bundleAnalysis.totalSize / 1024 / 1024).toFixed(1)}MB, consider code splitting`,
        impact: 'medium',
        category: 'bundle',
        fixable: true,
        estimatedImpact: 10
      });
    }

    setIssues(newIssues);
  }, [bundleAnalysis]);

  // Get performance score
  const getPerformanceScore = useCallback((currentMetrics: PerformanceMetrics) => {
    let score = 100;

    // LCP scoring
    if (currentMetrics.lcp > 4000) score -= 25;
    else if (currentMetrics.lcp > 2500) score -= 15;
    else if (currentMetrics.lcp > 2000) score -= 5;

    // FID scoring
    if (currentMetrics.fid > 300) score -= 25;
    else if (currentMetrics.fid > 100) score -= 15;
    else if (currentMetrics.fid > 50) score -= 5;

    // CLS scoring
    if (currentMetrics.cls > 0.25) score -= 25;
    else if (currentMetrics.cls > 0.1) score -= 15;
    else if (currentMetrics.cls > 0.05) score -= 5;

    return Math.max(0, score);
  }, []);

  // Get score color
  const getScoreColor = useCallback((score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  }, []);

  // Get score background
  const getScoreBackground = useCallback((score: number) => {
    if (score >= 90) return 'bg-green-100';
    if (score >= 70) return 'bg-yellow-100';
    return 'bg-red-100';
  }, []);

  // Get impact color
  const getImpactColor = useCallback((impact: string) => {
    switch (impact) {
      case 'high': return 'text-red-500 bg-red-50 border-red-200';
      case 'medium': return 'text-yellow-500 bg-yellow-50 border-yellow-200';
      case 'low': return 'text-blue-500 bg-blue-50 border-blue-200';
      default: return 'text-gray-500 bg-gray-50 border-gray-200';
    }
  }, []);

  // Filter issues by category
  const filteredIssues = useMemo(() => {
    if (selectedCategory === 'all') return issues;
    return issues.filter(issue => issue.category === selectedCategory);
  }, [issues, selectedCategory]);

  // Optimize performance
  const optimizePerformance = useCallback(async () => {
    setIsAnalyzing(true);
    
    // Simulate optimization process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Add optimization to history
    const optimization = {
      timestamp: new Date(),
      action: 'Performance optimization applied',
      impact: 15
    };
    
    setOptimizationHistory(prev => [optimization, ...prev.slice(0, 9)]);
    setIsAnalyzing(false);
    
    // Re-measure performance
    measurePerformance();
  }, [measurePerformance]);

  // Toggle monitoring
  const toggleMonitoring = useCallback(() => {
    setIsMonitoring(!isMonitoring);
  }, [isMonitoring]);

  if (!metrics && !bundleAnalysis) {
    return (
      <div className="text-center py-8">
        <Activity className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600">Loading performance data...</p>
      </div>
    );
  }

  return (
    <>
      {/* Floating Performance Button */}
      <button
        onClick={() => setShowPanel(!showPanel)}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300/50"
        aria-label="Open performance optimizer"
        title="Performance Optimizer"
      >
        <Zap className="w-6 h-6 mx-auto" />
      </button>

      {/* Performance Panel */}
      <AnimatePresence>
        {showPanel && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            className="fixed top-0 left-0 h-full w-96 bg-white shadow-2xl border-r border-gray-200 z-40 overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-green-500 to-blue-600 text-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Zap className="w-6 h-6" />
                  <h2 className="text-xl font-semibold">Performance</h2>
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                {metrics ? (
                  <div className="space-y-6">
                    {/* Performance Score */}
                    <div className="text-center">
                      <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700">
                        <StatusIcon className={`w-5 h-5 ${statusColors[status]}`} />
                        <span className="text-lg font-bold text-gray-900 dark:text-white">
                          Performance Score: {getPerformanceScore()}/100
                        </span>
                      </div>
                    </div>

                    {/* Core Web Vitals */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Core Web Vitals
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <MetricCard
                          title="FCP"
                          value={`${(metrics.fcp / 1000).toFixed(2)}s`}
                          status={metrics.fcp <= 1800 ? 'good' : 'poor'}
                          description="First Contentful Paint"
                          icon={Clock}
                        />
                        <MetricCard
                          title="LCP"
                          value={`${(metrics.lcp / 1000).toFixed(2)}s`}
                          status={metrics.lcp <= 2500 ? 'good' : 'poor'}
                          description="Largest Contentful Paint"
                          icon={TrendingUp}
                        />
                        <MetricCard
                          title="FID"
                          value={`${metrics.fid.toFixed(0)}ms`}
                          status={metrics.fid <= 100 ? 'good' : 'poor'}
                          description="First Input Delay"
                          icon={Zap}
                        />
                        <MetricCard
                          title="CLS"
                          value={metrics.cls.toFixed(3)}
                          status={metrics.cls <= 0.1 ? 'good' : 'poor'}
                          description="Cumulative Layout Shift"
                          icon={Activity}
                        />
                      </div>
                    </div>

                    {/* Additional Metrics */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Additional Metrics
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <MetricCard
                          title="TTFB"
                          value={`${metrics.ttfb.toFixed(0)}ms`}
                          status={metrics.ttfb <= 600 ? 'good' : 'poor'}
                          description="Time to First Byte"
                          icon={Network}
                        />
                        <MetricCard
                          title="DOM Size"
                          value={metrics.domSize.toLocaleString()}
                          status={metrics.domSize <= 1500 ? 'good' : 'poor'}
                          description="Total DOM Elements"
                          icon={Cpu}
                        />
                        <MetricCard
                          title="Resources"
                          value={metrics.resourceCount.toString()}
                          status={metrics.resourceCount <= 50 ? 'good' : 'poor'}
                          description="Total Resources"
                          icon={HardDrive}
                        />
                        <MetricCard
                          title="Total Size"
                          value={`${(metrics.totalSize / (1024 * 1024)).toFixed(1)}MB`}
                          status={metrics.totalSize <= 2 * 1024 * 1024 ? 'good' : 'poor'}
                          description="Resource Size"
                          icon={Smartphone}
                        />
                      </div>
                    </div>

                    {/* Optimization Suggestions */}
                    {optimizations.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                          Optimization Suggestions
                        </h3>
                        <div className="space-y-2">
                          {optimizations.map((optimization, index) => (
                            <div
                              key={index}
                              className="flex items-start space-x-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg"
                            >
                              <Info className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-yellow-800 dark:text-yellow-200">
                                {optimization}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Auto-optimization Toggle */}
                    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          Auto-optimization
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Automatically apply performance optimizations
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={autoOptimizationEnabled}
                          onChange={(e) => setAutoOptimizationEnabled(e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Performance Button */}
      {!isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsVisible(true)}
          className="fixed bottom-4 right-4 z-40 w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
          title="Performance Monitor"
        >
          <Activity className="w-6 h-6" />
        </motion.button>
      )}
    </>
  );
  return <>{children}</>;
};

export default PerformanceOptimizer;

=======
};

export default PerformanceOptimizer;
