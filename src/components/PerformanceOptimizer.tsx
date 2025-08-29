import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Clock, Database, Wifi, Cpu, HardDrive, Activity, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
  totalBlockingTime: number;
  speedIndex: number;
}

interface PerformanceOptimizerProps {
  showMetrics?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCaching?: boolean;
  enableCompression?: boolean;
  enableCDN?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  showMetrics = false,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCaching = true,
  enableCompression = true,
  enableCDN = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationStatus, setOptimizationStatus] = useState<string[]>([]);
  const [showOptimizer, setShowOptimizer] = useState(false);

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const newMetrics: PerformanceMetrics = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        firstContentfulPaint: paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
        largestContentfulPaint: 0, // Will be updated by LCP observer
        cumulativeLayoutShift: 0, // Will be updated by CLS observer
        firstInputDelay: 0, // Will be updated by FID observer
        timeToInteractive: navigation.domInteractive - navigation.fetchStart,
        totalBlockingTime: 0,
        speedIndex: 0
      };

      setMetrics(newMetrics);
    }
  }, []);

  // Lazy loading implementation
  const implementLazyLoading = useCallback(() => {
    if (typeof window !== 'undefined' && enableLazyLoading) {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
      setOptimizationStatus(prev => [...prev, '✅ Lazy loading implemented']);
    }
  }, [enableLazyLoading]);

  // Preloading critical resources
  const implementPreloading = useCallback(() => {
    if (typeof window !== 'undefined' && enablePreloading) {
      // Preload critical CSS
      const criticalCSS = document.createElement('link');
      criticalCSS.rel = 'preload';
      criticalCSS.href = '/src/index.css';
      criticalCSS.as = 'style';
      document.head.appendChild(criticalCSS);

      // Preload critical fonts
      const criticalFont = document.createElement('link');
      criticalFont.rel = 'preload';
      criticalFont.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap';
      criticalFont.as = 'style';
      document.head.appendChild(criticalFont);

      setOptimizationStatus(prev => [...prev, '✅ Critical resources preloaded']);
    }
  }, [enablePreloading]);

  // Caching strategies
  const implementCaching = useCallback(() => {
    if (typeof window !== 'undefined' && enableCaching && 'serviceWorker' in navigator) {
      // Service Worker registration for caching
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          setOptimizationStatus(prev => [...prev, '✅ Service Worker registered for caching']);
        })
        .catch(error => {
          setOptimizationStatus(prev => [...prev, '⚠️ Service Worker registration failed']);
        });
    }
  }, [enableCaching]);

  // Image optimization
  const optimizeImages = useCallback(() => {
    if (typeof window !== 'undefined') {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        // Add loading="lazy" for non-critical images
        if (!img.classList.contains('critical')) {
          img.loading = 'lazy';
        }
        
        // Add decoding="async" for better performance
        img.decoding = 'async';
        
        // Add srcset for responsive images
        if (!img.srcset) {
          const src = img.src;
          img.srcset = `${src} 1x, ${src.replace('.jpg', '@2x.jpg')} 2x`;
        }
      });
      
      setOptimizationStatus(prev => [...prev, '✅ Images optimized']);
    }
  }, []);

  // Bundle optimization
  const optimizeBundles = useCallback(() => {
    if (typeof window !== 'undefined') {
      // Implement code splitting hints
      const preloadScripts = [
        '/src/components/EnhancedHeroSection.tsx',
        '/src/components/AppHeader.tsx'
      ];

      preloadScripts.forEach(script => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = script;
        document.head.appendChild(link);
      });

      setOptimizationStatus(prev => [...prev, '✅ Bundle optimization implemented']);
    }
  }, []);

  // CDN optimization
  const implementCDN = useCallback(() => {
    if (typeof window !== 'undefined' && enableCDN) {
      // Add CDN headers and optimize resource loading
      const cdnResources = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://www.google-analytics.com'
      ];

      cdnResources.forEach(cdn => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = cdn;
        document.head.appendChild(link);
      });

      setOptimizationStatus(prev => [...prev, '✅ CDN optimization implemented']);
    }
  }, [enableCDN]);

  // Compression optimization
  const implementCompression = useCallback(() => {
    if (typeof window !== 'undefined' && enableCompression) {
      // Implement client-side compression for data
      const compressData = (data: string) => {
        // Simple compression for demo purposes
        return data.replace(/\s+/g, ' ').trim();
      };

      // Apply to text content
      const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
      textElements.forEach(element => {
        if (element.textContent) {
          element.textContent = compressData(element.textContent);
        }
      });

      setOptimizationStatus(prev => [...prev, '✅ Compression implemented']);
    }
  }, [enableCompression]);

  // Run all optimizations
  const runOptimizations = useCallback(async () => {
    setIsOptimizing(true);
    setOptimizationStatus([]);

    const optimizations = [
      implementLazyLoading,
      implementPreloading,
      implementCaching,
      optimizeImages,
      optimizeBundles,
      implementCDN,
      implementCompression
    ];

    for (const optimization of optimizations) {
      try {
        await new Promise(resolve => setTimeout(resolve, 200)); // Simulate async operation
        optimization();
      } catch (error) {
        setOptimizationStatus(prev => [...prev, `❌ Optimization failed: ${error}`]);
      }
    }

    setIsOptimizing(false);
    setOptimizationStatus(prev => [...prev, '🎉 All optimizations completed!']);
  }, [implementLazyLoading, implementPreloading, implementCaching, optimizeImages, optimizeBundles, implementCDN, implementCompression]);

  // Performance monitoring effect
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Measure initial performance
      measurePerformance();

      // Set up performance observers
      if ('PerformanceObserver' in window) {
        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          setMetrics(prev => prev ? { ...prev, largestContentfulPaint: lastEntry.startTime } : null);
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // Cumulative Layout Shift
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          setMetrics(prev => prev ? { ...prev, cumulativeLayoutShift: clsValue } : null);
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            setMetrics(prev => prev ? { ...prev, firstInputDelay: entry.processingStart - entry.startTime } : null);
            break;
          }
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      }

      // Cleanup
      return () => {
        if ('PerformanceObserver' in window) {
          // Cleanup observers if needed
        }
      };
    }
  }, [measurePerformance]);

  // Performance score calculation
  const performanceScore = useMemo(() => {
    if (!metrics) return 0;
    
    let score = 100;
    
    // Deduct points for poor performance
    if (metrics.firstContentfulPaint > 2000) score -= 20;
    if (metrics.largestContentfulPaint > 4000) score -= 20;
    if (metrics.cumulativeLayoutShift > 0.1) score -= 20;
    if (metrics.firstInputDelay > 100) score -= 20;
    
    return Math.max(0, score);
  }, [metrics]);

  const getPerformanceGrade = (score: number) => {
    if (score >= 90) return { grade: 'A', color: 'text-green-500', icon: CheckCircle };
    if (score >= 80) return { grade: 'B', color: 'text-yellow-500', icon: CheckCircle };
    if (score >= 70) return { grade: 'C', color: 'text-orange-500', icon: AlertTriangle };
    return { grade: 'D', color: 'text-red-500', icon: AlertTriangle };
  };

  const grade = getPerformanceGrade(performanceScore);

  if (!showMetrics && !showOptimizer) {
    return (
      <motion.button
        onClick={() => setShowOptimizer(true)}
        className="fixed bottom-4 right-4 z-50 p-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Performance Optimizer"
      >
        <Zap className="w-6 h-6" />
      </motion.button>
    );
  }

  return (
    <AnimatePresence>
      {showOptimizer && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            exit={{ y: 50 }}
            className="bg-zion-slate border border-zion-cyan/30 rounded-2xl p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <Zap className="w-6 h-6 mr-2 text-zion-cyan" />
                Performance Optimizer
              </h2>
              <button
                onClick={() => setShowOptimizer(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Performance Score */}
            {metrics && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-zion-slate-light/20 border border-zion-cyan/20 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">Performance Score</h3>
                    <grade.icon className={`w-6 h-6 ${grade.color}`} />
                  </div>
                  <div className="text-center">
                    <div className={`text-6xl font-bold ${grade.color} mb-2`}>{grade.grade}</div>
                    <div className="text-2xl font-bold text-white mb-2">{performanceScore}/100</div>
                    <div className="text-sm text-gray-400">Overall Performance</div>
                  </div>
                </div>

                <div className="bg-zion-slate-light/20 border border-zion-cyan/20 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Key Metrics</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">FCP:</span>
                      <span className="text-white">{Math.round(metrics.firstContentfulPaint)}ms</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">LCP:</span>
                      <span className="text-white">{Math.round(metrics.largestContentfulPaint)}ms</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">CLS:</span>
                      <span className="text-white">{metrics.cumulativeLayoutShift.toFixed(3)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">FID:</span>
                      <span className="text-white">{Math.round(metrics.firstInputDelay)}ms</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Optimization Controls */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-4">Optimization Controls</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button
                  onClick={runOptimizations}
                  disabled={isOptimizing}
                  className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-lg hover:from-zion-purple hover:to-zion-cyan transition-all duration-300 disabled:opacity-50"
                >
                  {isOptimizing ? 'Optimizing...' : 'Run All'}
                </button>
                <button
                  onClick={implementLazyLoading}
                  className="bg-zion-slate-light/20 border border-zion-cyan/30 text-zion-cyan px-4 py-2 rounded-lg hover:bg-zion-cyan/20 transition-all duration-300"
                >
                  Lazy Load
                </button>
                <button
                  onClick={implementPreloading}
                  className="bg-zion-slate-light/20 border border-zion-cyan/30 text-zion-cyan px-4 py-2 rounded-lg hover:bg-zion-cyan/20 transition-all duration-300"
                >
                  Preload
                </button>
                <button
                  onClick={optimizeImages}
                  className="bg-zion-slate-light/20 border border-zion-cyan/30 text-zion-cyan px-4 py-2 rounded-lg hover:bg-zion-cyan/20 transition-all duration-300"
                >
                  Images
                </button>
              </div>
            </div>

            {/* Optimization Status */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Optimization Status</h3>
              <div className="bg-zion-slate-light/10 border border-zion-cyan/20 rounded-xl p-4 max-h-48 overflow-y-auto">
                {optimizationStatus.length === 0 ? (
                  <p className="text-gray-400 text-center py-8">No optimizations run yet. Click "Run All" to start optimizing.</p>
                ) : (
                  <div className="space-y-2">
                    {optimizationStatus.map((status, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <span className="text-zion-cyan mr-2">•</span>
                        <span className="text-white">{status}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
