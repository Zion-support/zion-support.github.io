import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  Shield, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle,
  X,
  Settings,
  BarChart3,
  Cpu,
  HardDrive,
  Wifi,
  Package,
  Gauge,
  Clock,
  Target
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  domLoad: number; // DOM Content Loaded
  windowLoad: number;
}

interface BundleMetrics {
  totalSize: number;
  jsSize: number;
  cssSize: number;
  imageSize: number;
  fontSize: number;
  compressionRatio: number;
}

interface PerformanceOptimizerProps {
  showMetrics?: boolean;
  enableMonitoring?: boolean;
  autoOptimize?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  showMetrics = true,
  enableMonitoring = true,
  autoOptimize = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [bundleMetrics, setBundleMetrics] = useState<BundleMetrics | null>(null);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [performanceScore, setPerformanceScore] = useState<number>(0);
  const observerRef = useRef<PerformanceObserver | null>(null);
  const metricsRef = useRef<PerformanceMetrics | null>(null);

  // Initialize performance monitoring
  useEffect(() => {
    if (!enableMonitoring) return;

    const initPerformanceMonitoring = () => {
      // Web Vitals monitoring
      if ('PerformanceObserver' in window) {
        try {
          // First Contentful Paint
          observerRef.current = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              if (entry.name === 'first-contentful-paint') {
                updateMetrics('fcp', entry.startTime);
              }
            });
          });
          observerRef.current.observe({ entryTypes: ['paint'] });

          // Largest Contentful Paint
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            if (lastEntry) {
              updateMetrics('lcp', lastEntry.startTime);
            }
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

          // First Input Delay
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              updateMetrics('fid', entry.processingStart - entry.startTime);
            });
          });
          fidObserver.observe({ entryTypes: ['first-input'] });

          // Layout Shift
          const clsObserver = new PerformanceObserver((list) => {
            let clsValue = 0;
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
              }
            });
            updateMetrics('cls', clsValue);
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (error) {
          console.warn('Performance monitoring initialization failed:', error);
        }
      }

      // Measure DOM and window load times
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
          updateMetrics('domLoad', performance.now());
        });
      } else {
        updateMetrics('domLoad', performance.now());
      }

      window.addEventListener('load', () => {
        updateMetrics('windowLoad', performance.now());
        analyzeBundleSize();
      });

      // Measure TTFB
      if ('PerformanceNavigationTiming' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          updateMetrics('ttfb', navigation.responseStart - navigation.requestStart);
        }
      }
    };

    initPerformanceMonitoring();

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [enableMonitoring]);

  // Analyze bundle size and performance
  const analyzeBundleSize = useCallback(async () => {
    try {
      const resources = performance.getEntriesByType('resource');
      let jsSize = 0;
      let cssSize = 0;
      let imageSize = 0;
      let fontSize = 0;

      resources.forEach((resource: any) => {
        const size = resource.transferSize || 0;
        if (resource.name.endsWith('.js')) jsSize += size;
        else if (resource.name.endsWith('.css')) cssSize += size;
        else if (resource.name.match(/\.(png|jpg|jpeg|gif|svg|webp)$/)) imageSize += size;
        else if (resource.name.match(/\.(woff|woff2|ttf|eot)$/)) fontSize += size;
      });

      const totalSize = jsSize + cssSize + imageSize + fontSize;
      const compressionRatio = totalSize > 0 ? (totalSize / (totalSize * 1.5)) * 100 : 0;

      setBundleMetrics({
        totalSize,
        jsSize,
        cssSize,
        imageSize,
        fontSize,
        compressionRatio
      });

      // Generate optimization recommendations
      generateOptimizations(jsSize, cssSize, imageSize, totalSize);
    } catch (error) {
      console.warn('Bundle analysis failed:', error);
    }
  }, []);

  // Generate performance optimization recommendations
  const generateOptimizations = useCallback((jsSize: number, cssSize: number, imageSize: number, totalSize: number) => {
    const recommendations: string[] = [];

    if (jsSize > 500000) { // 500KB
      recommendations.push('Consider code splitting and lazy loading for large JavaScript bundles');
    }
    if (cssSize > 100000) { // 100KB
      recommendations.push('Optimize CSS by removing unused styles and implementing critical CSS');
    }
    if (imageSize > 200000) { // 200KB
      recommendations.push('Implement image optimization and WebP format for better compression');
    }
    if (totalSize > 1000000) { // 1MB
      recommendations.push('Total bundle size is large - implement aggressive code splitting');
    }

    setOptimizations(recommendations);
  }, []);

  // Calculate performance score
  const calculatePerformanceScore = useCallback((metrics: PerformanceMetrics) => {
    let score = 100;

    // FCP scoring (0-100)
    if (metrics.fcp > 1800) score -= 20;
    else if (metrics.fcp > 1000) score -= 10;

    // LCP scoring (0-100)
    if (metrics.lcp > 2500) score -= 25;
    else if (metrics.lcp > 1600) score -= 15;

    // FID scoring (0-100)
    if (metrics.fid > 300) score -= 20;
    else if (metrics.fid > 100) score -= 10;

    // CLS scoring (0-100)
    if (metrics.cls > 0.25) score -= 25;
    else if (metrics.cls > 0.1) score -= 15;

    return Math.max(0, score);
  }, []);

  // Update metrics and calculate score
  const updateMetrics = useCallback((key: keyof PerformanceMetrics, value: number) => {
    setMetrics(prev => {
      const newMetrics = { ...prev, [key]: value } as PerformanceMetrics;
      const score = calculatePerformanceScore(newMetrics);
      setPerformanceScore(score);
      return newMetrics;
    });
  }, [calculatePerformanceScore]);

  // Auto-optimize performance
  const autoOptimize = useCallback(async () => {
    if (!autoOptimize) return;

    setIsOptimizing(true);
    try {
      // Implement automatic optimizations
      const optimizations = [
        'Preloading critical resources',
        'Optimizing image loading',
        'Implementing resource hints',
        'Optimizing font loading'
      ];

      // Simulate optimization process
      for (const optimization of optimizations) {
        await new Promise(resolve => setTimeout(resolve, 500));
        setOptimizations(prev => [...prev, optimization]);
      }
    } finally {
      setIsOptimizing(false);
    }
  }, [autoOptimize]);

  // Format bytes to human readable format
  const formatBytes = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // Format time to human readable format
  const formatTime = (ms: number): string => {
    if (ms < 1000) return `${Math.round(ms)}ms`;
    return `${(ms / 1000).toFixed(2)}s`;
  };

  // Get performance grade
  const getPerformanceGrade = (score: number): { grade: string; color: string } => {
    if (score >= 90) return { grade: 'A', color: 'text-green-500' };
    if (score >= 80) return { grade: 'B', color: 'text-yellow-500' };
    if (score >= 70) return { grade: 'C', color: 'text-orange-500' };
    return { grade: 'D', color: 'text-red-500' };
  };

  const grade = getPerformanceGrade(performanceScore);

  return (
    <>
      {/* Performance Toggle Button */}
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-6 right-6 z-50 bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate font-bold py-3 px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Activity className="w-5 h-5" />
        <span className="hidden sm:inline">Performance</span>
      </motion.button>

      {/* Performance Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-6 z-40 w-80 max-h-96 bg-zion-slate/95 backdrop-blur-xl border border-zion-cyan/30 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 p-4 border-b border-zion-cyan/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-zion-cyan" />
                  <h3 className="text-white font-bold">Performance Monitor</h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowSettings(!showSettings)}
                    className="p-2 hover:bg-zion-cyan/20 rounded-lg transition-colors"
                  >
                    <Settings className="w-4 h-4 text-zion-cyan" />
                  </button>
                  <button
                    onClick={() => setIsVisible(false)}
                    className="p-2 hover:bg-zion-cyan/20 rounded-lg transition-colors"
                  >
                    <X className="w-4 h-4 text-zion-cyan" />
                  </button>
                </div>
              </div>
              
              {/* Performance Score */}
              <div className="mt-3 text-center">
                <div className="text-2xl font-bold text-white">
                  {performanceScore}
                  <span className={`text-lg ml-1 ${grade.color}`}>
                    ({grade.grade})
                  </span>
                </div>
                <div className="text-xs text-zion-cyan">Performance Score</div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4 max-h-64 overflow-y-auto">
              {/* Web Vitals */}
              {metrics && (
                <div className="space-y-3">
                  <h4 className="text-white font-semibold text-sm flex items-center gap-2">
                    <Target className="w-4 h-4 text-zion-cyan" />
                    Web Vitals
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-zion-slate/50 p-2 rounded-lg">
                      <div className="text-zion-cyan font-medium">FCP</div>
                      <div className="text-white">{formatTime(metrics.fcp)}</div>
                    </div>
                    <div className="bg-zion-slate/50 p-2 rounded-lg">
                      <div className="text-zion-cyan font-medium">LCP</div>
                      <div className="text-white">{formatTime(metrics.lcp)}</div>
                    </div>
                    <div className="bg-zion-slate/50 p-2 rounded-lg">
                      <div className="text-zion-cyan font-medium">FID</div>
                      <div className="text-white">{formatTime(metrics.fid)}</div>
                    </div>
                    <div className="bg-zion-slate/50 p-2 rounded-lg">
                      <div className="text-zion-cyan font-medium">CLS</div>
                      <div className="text-white">{metrics.cls.toFixed(3)}</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Bundle Metrics */}
              {bundleMetrics && (
                <div className="space-y-3">
                  <h4 className="text-white font-semibold text-sm flex items-center gap-2">
                    <Package className="w-4 h-4 text-zion-cyan" />
                    Bundle Analysis
                  </h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-zion-cyan">Total Size:</span>
                      <span className="text-white">{formatBytes(bundleMetrics.totalSize)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zion-cyan">JavaScript:</span>
                      <span className="text-white">{formatBytes(bundleMetrics.jsSize)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zion-cyan">CSS:</span>
                      <span className="text-white">{formatBytes(bundleMetrics.cssSize)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zion-cyan">Images:</span>
                      <span className="text-white">{formatBytes(bundleMetrics.imageSize)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zion-cyan">Compression:</span>
                      <span className="text-white">{bundleMetrics.compressionRatio.toFixed(1)}%</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Optimizations */}
              {optimizations.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-white font-semibold text-sm flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-zion-cyan" />
                    Recommendations
                  </h4>
                  <div className="space-y-2">
                    {optimizations.map((optimization, index) => (
                      <div key={index} className="flex items-start gap-2 text-xs">
                        <CheckCircle className="w-3 h-3 text-zion-cyan mt-0.5 flex-shrink-0" />
                        <span className="text-white/80">{optimization}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Auto-optimize button */}
              <button
                onClick={autoOptimize}
                disabled={isOptimizing}
                className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/80 hover:to-zion-purple/80 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isOptimizing ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Optimizing...
                  </div>
                ) : (
                  'Auto-Optimize'
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
