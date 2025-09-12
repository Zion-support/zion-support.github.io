<<<<<<< HEAD
import React from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
}

interface PerformanceOptimizerProps {
  className?: string;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ className = '' }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationComplete, setOptimizationComplete] = useState(false);

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const firstPaint = paint.find(entry => entry.name === 'first-paint');
      const firstContentfulPaint = paint.find(entry => entry.name === 'first-contentful-paint');
      
      const metrics: PerformanceMetrics = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        firstContentfulPaint: firstContentfulPaint ? firstContentfulPaint.startTime : 0,
        largestContentfulPaint: 0, // Would need to use PerformanceObserver
        cumulativeLayoutShift: 0, // Would need to use PerformanceObserver
        firstInputDelay: 0, // Would need to use PerformanceObserver
        timeToInteractive: navigation.domInteractive - navigation.domContentLoadedEventStart
      };

      setMetrics(metrics);
    }
  }, []);

  // Image optimization
  const optimizeImages = useCallback(async () => {
    const images = document.querySelectorAll('img');
    const promises = Array.from(images).map((img) => {
      return new Promise<void>((resolve) => {
        if (img.complete) {
          resolve();
        } else {
          img.onload = () => resolve();
          img.onerror = () => resolve();
        }
      });
    });

    await Promise.all(promises);
  }, []);

  // Lazy loading implementation
  const implementLazyLoading = useCallback(() => {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  }, []);

  // Service worker registration
  const registerServiceWorker = useCallback(async () => {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        console.log('Service Worker registered:', registration);
      } catch (error) {
        console.log('Service Worker registration failed:', error);
      }
    }
  }, []);

  // Performance optimization
  const optimizePerformance = useCallback(async () => {
    setIsOptimizing(true);
    
    try {
      // Optimize images
      await optimizeImages();
      
      // Implement lazy loading
      implementLazyLoading();
      
      // Register service worker
      await registerServiceWorker();
      
      // Preload critical resources
      const criticalResources = [
        '/fonts/inter-var.woff2',
        '/css/critical.css'
      ];
      
      criticalResources.forEach((resource) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.woff2') ? 'font' : 'style';
        link.crossOrigin = resource.endsWith('.woff2') ? 'anonymous' : '';
        document.head.appendChild(link);
      });
      
      setOptimizationComplete(true);
    } catch (error) {
      console.error('Performance optimization failed:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [optimizeImages, implementLazyLoading, registerServiceWorker]);

  useEffect(() => {
    // Measure initial performance
    measurePerformance();
    
    // Implement basic optimizations on mount
    implementLazyLoading();
    
    // Register service worker
    registerServiceWorker();
  }, [measurePerformance, implementLazyLoading, registerServiceWorker]);

  const getPerformanceScore = (metrics: PerformanceMetrics) => {
    let score = 100;
    
    if (metrics.loadTime > 3000) score -= 20;
    if (metrics.firstContentfulPaint > 1500) score -= 20;
    if (metrics.timeToInteractive > 3500) score -= 20;
    
    return Math.max(0, score);
  };

  const getPerformanceGrade = (score: number) => {
    if (score >= 90) return { grade: 'A', color: 'text-green-600', bg: 'bg-green-100' };
    if (score >= 80) return { grade: 'B', color: 'text-blue-600', bg: 'bg-blue-100' };
    if (score >= 70) return { grade: 'C', color: 'text-yellow-600', bg: 'bg-yellow-100' };
    if (score >= 60) return { grade: 'D', color: 'text-orange-600', bg: 'bg-orange-100' };
    return { grade: 'F', color: 'text-red-600', bg: 'bg-red-100' };
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Performance Header */}
      <div className="text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-900 mb-4"
=======
import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface PerformanceLayoutShift {
  value: number;
}

interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
}

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  showMetrics?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  onMetricsUpdate,
  showMetrics = false
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    domContentLoaded: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0,
    timeToInteractive: 0,
    networkRequests: 0,
    cacheHitRate: 0
  });

  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationHistory, setOptimizationHistory] = useState<Array<{
    timestamp: Date;
    action: string;
    improvement: number;
  }>>([]);

  const observerRef = useRef<PerformanceObserver | null>(null);
  const metricsRef = useRef<PerformanceMetrics>(metrics);

  useEffect(() => {
    metricsRef.current = metrics;
  }, [metrics]);

  useEffect(() => {
    initializePerformanceMonitoring();
    return () => cleanupPerformanceMonitoring();
  }, []);

  const initializePerformanceMonitoring = () => {
    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        newMetrics.largestContentfulPaint = lastEntry.startTime;
        setMetrics(newMetrics);
        onMetricsUpdate?.(newMetrics);
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }

    setMetrics(newMetrics);
    onMetricsUpdate?.(newMetrics);
  }, [onMetricsUpdate]);

  // Optimize images and resources
  const optimizeResources = useCallback(() => {
    // Preload critical resources
    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/css/critical.css'
    ];
    
    criticalResources.forEach(resource => {
      if (!document.querySelector(`link[href="${resource}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.woff2') ? 'font' : 'style';
        document.head.appendChild(link);
      }
    });
  }, []);

  // Manual optimization trigger
  const triggerOptimization = useCallback(() => {
    if (metrics) {
      analyzeAndOptimize(metrics);
    }
  }, [metrics, analyzeAndOptimize]);

  useEffect(() => {
    if (showMetrics) {
      setIsVisible(true);
      measurePerformance();
      
      // Set up continuous monitoring
      const interval = setInterval(measurePerformance, 30000); // Every 30 seconds
      
      return () => clearInterval(interval);
    }
  }, [showMetrics, measurePerformance]);

  // Enhanced CLS monitoring
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let clsValue = 0;
    let clsEntries: PerformanceEntry[] = [];
    
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const layoutShiftEntry = entry as any;
        if (!layoutShiftEntry.hadRecentInput) {
          clsValue += layoutShiftEntry.value || 0;
          clsEntries.push(entry);
        }
      }
      
      if (metrics) {
        setMetrics(prev => prev ? { ...prev, cls: Math.round(clsValue * 1000) / 1000 } : null);
      }
    });

    observer.observe({ entryTypes: ['layout-shift'] });

    return () => observer.disconnect();
  }, [metrics]);

  // Enhanced FID monitoring
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let fidValue = 0;
    
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        fidValue = Math.max(fidValue, (entry as any).processingStart - (entry as any).startTime);
      }
      
      if (metrics) {
        setMetrics(prev => prev ? { ...prev, fid: Math.round(fidValue) } : null);
      }
    });

    observer.observe({ entryTypes: ['first-input'] });

    return () => observer.disconnect();
  }, [metrics]);

  if (!showMetrics || !isVisible) return null;

  const getPerformanceScore = (metric: keyof PerformanceMetrics) => {
    if (!metrics) return 0;
    
    const thresholds: Record<keyof PerformanceMetrics, { good: number; needsImprovement: number }> = {
      fcp: { good: 1800, needsImprovement: 3000 },
      lcp: { good: 2500, needsImprovement: 4000 },
      fid: { good: 100, needsImprovement: 300 },
      cls: { good: 0.1, needsImprovement: 0.25 },
      ttfb: { good: 600, needsImprovement: 1800 },
      domLoad: { good: 100, needsImprovement: 300 },
      windowLoad: { good: 200, needsImprovement: 600 }
    };
    
    const value = metrics[metric];
    const threshold = thresholds[metric];
    
    if (value <= threshold.good) return 100;
    if (value <= threshold.needsImprovement) return 50;
    return 25;
  };

  const performanceScore = getPerformanceScore();
  const performanceGrade = getPerformanceGrade(performanceScore);

  return (
    <>
      {/* Performance Metrics Display */}
      {showMetrics && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed bottom-4 right-4 bg-gray-900 text-white p-4 rounded-lg shadow-lg z-50 max-w-xs"
>>>>>>> origin/content/blog-sept12
        >
          {children}
        </motion.div>
      ) : (
        <div className="animate-pulse">
          <div className="h-64 bg-white/5 rounded-lg"></div>
        </div>
      )}
    </div>
  );
}

// Lazy loading wrapper for images
export function LazyImage({ 
  src, 
  alt, 
  className = "", 
  placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
}: {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
}) {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    let didCancel = false;

    if (imageRef && imageSrc === placeholder) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (
                !didCancel &&
                (entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                setImageSrc(src);
                observer.unobserve(imageRef);
              }
            });
          },
          {
            threshold: 0.01,
            rootMargin: '75%',
          }
        );
        observer.observe(imageRef);
      } else {
        // Fallback for older browsers
        setImageSrc(src);
      }
    }
    return () => {
      didCancel = true;
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef!);
      }
    };
  }, [src, imageSrc, imageRef, placeholder]);

  return (
    <img
      ref={setImageRef}
      src={imageSrc}
      alt={alt}
      className={className}
      loading="lazy"
      onLoad={() => {
        if (imageSrc === placeholder) {
          setImageSrc(src);
        }
      }}
    />
  );
}

// Preload critical resources
export function ResourcePreloader() {
  useEffect(() => {
    // Preload critical CSS
    const criticalCSS = document.createElement('link');
    criticalCSS.rel = 'preload';
    criticalCSS.as = 'style';
    criticalCSS.href = '/critical.css';
    document.head.appendChild(criticalCSS);

    // Preload critical fonts
    const fontPreload = document.createElement('link');
    fontPreload.rel = 'preload';
    fontPreload.as = 'font';
    fontPreload.href = '/fonts/inter-var.woff2';
    fontPreload.crossOrigin = 'anonymous';
    document.head.appendChild(fontPreload);

    // Preconnect to external domains
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://api.ziontechgroup.com'
    ];

    preconnectDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      document.head.appendChild(link);
    });

    return () => {
      // Cleanup
      document.head.removeChild(criticalCSS);
      document.head.removeChild(fontPreload);
      preconnectDomains.forEach((domain) => {
        const link = document.head.querySelector(`link[href="${domain}"]`);
        if (link) document.head.removeChild(link);
      });
    };
  }, []);

  return null;
}

// Debounced scroll handler for performance
export function useDebouncedScroll(callback: () => void, delay: number = 16) {
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(callback, delay);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [callback, delay]);
}

// Virtual scrolling for large lists
export function VirtualList<T>({
  items,
  itemHeight,
  containerHeight,
  renderItem,
}: {
  items: T[];
  itemHeight: number;
  containerHeight: number;
  renderItem: (item: T, index: number) => React.ReactNode;
}) {
  const [scrollTop, setScrollTop] = useState(0);
  
  const visibleItems = Math.ceil(containerHeight / itemHeight);
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(startIndex + visibleItems + 1, items.length);
  
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  const totalHeight = items.length * itemHeight;
  const offsetY = startIndex * itemHeight;

  return (
    <div
      style={{ height: containerHeight, overflow: 'auto' }}
      onScroll={handleScroll}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div style={{ transform: `translateY(${offsetY}px)` }}>
          {items.slice(startIndex, endIndex).map((item, index) =>
            renderItem(item, startIndex + index)
          )}
        </div>
      </div>

      {/* Performance Metrics */}
      {metrics && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-center space-x-3 mb-3">
              <Clock className="w-6 h-6 text-blue-600" />
              <h3 className="font-semibold text-gray-900">Load Time</h3>
            </div>
            <div className="text-2xl font-bold text-gray-900">
              {metrics.loadTime.toFixed(0)}ms
            </div>
            <div className="text-sm text-gray-600">
              {metrics.loadTime < 1000 ? 'Excellent' : metrics.loadTime < 3000 ? 'Good' : 'Needs Improvement'}
            </div>
          </div>
<<<<<<< HEAD

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-center space-x-3 mb-3">
              <Eye className="w-6 h-6 text-green-600" />
              <h3 className="font-semibold text-gray-900">First Paint</h3>
            </div>
            <div className="text-2xl font-bold text-gray-900">
              {metrics.firstContentfulPaint.toFixed(0)}ms
            </div>
            <div className="text-sm text-gray-600">
              {metrics.firstContentfulPaint < 800 ? 'Excellent' : metrics.firstContentfulPaint < 1500 ? 'Good' : 'Needs Improvement'}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-center space-x-3 mb-3">
              <Cpu className="w-6 h-6 text-purple-600" />
              <h3 className="font-semibold text-gray-900">Interactive</h3>
            </div>
            <div className="text-2xl font-bold text-gray-900">
              {metrics.timeToInteractive.toFixed(0)}ms
            </div>
            <div className="text-sm text-gray-600">
              {metrics.timeToInteractive < 2000 ? 'Excellent' : metrics.timeToInteractive < 3500 ? 'Good' : 'Needs Improvement'}
            </div>
          </div>
        </motion.div>
      )}

      {/* Performance Score */}
      {metrics && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-4 bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-2">Performance Score</div>
              <div className={`text-4xl font-bold ${getPerformanceGrade(getPerformanceScore(metrics)).color}`}>
                {getPerformanceGrade(getPerformanceScore(metrics)).grade}
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-2">Score</div>
              <div className="text-3xl font-bold text-gray-900">
                {getPerformanceScore(metrics)}/100
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Optimization Controls */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center"
      >
        <button
          onClick={optimizePerformance}
          disabled={isOptimizing}
          className={`inline-flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
            isOptimizing
              ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
              : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl'
          }`}
        >
          {isOptimizing ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Optimizing...</span>
            </>
          ) : (
            <>
              <Zap className="w-5 h-5" />
              <span>Optimize Performance</span>
            </>
          )}
        </button>
      </motion.div>

      {/* Optimization Status */}
      {optimizationComplete && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-50 border border-green-200 rounded-lg p-4 text-center"
        >
          <div className="flex items-center justify-center space-x-2 text-green-800">
            <Shield className="w-5 h-5" />
            <span className="font-semibold">Performance optimization completed successfully!</span>
          </div>
          <p className="text-green-700 text-sm mt-2">
            Images optimized, lazy loading implemented, and service worker registered.
          </p>
        </motion.div>
      )}

      {/* Performance Tips */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="bg-blue-50 border border-blue-200 rounded-lg p-6"
      >
        <h3 className="text-lg font-semibold text-blue-900 mb-4">Performance Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
          <div className="flex items-start space-x-2">
            <Download className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <span>Use WebP images and implement lazy loading</span>
          </div>
          <div className="flex items-start space-x-2">
            <Wifi className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <span>Enable compression and caching headers</span>
          </div>
          <div className="flex items-start space-x-2">
            <TrendingUp className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <span>Minimize JavaScript bundles and defer non-critical CSS</span>
          </div>
          <div className="flex items-start space-x-2">
            <Shield className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <span>Implement service worker for offline support</span>
          </div>
        </div>
      </motion.div>
    </div>
=======
          {isOptimizing && (
            <div className="text-cyan-400 text-xs mt-2">Optimizing resources...</div>
          )}
        </motion.div>
      )}

      {/* Performance Optimization Button */}
      <motion.button
        onClick={optimizePerformance}
        disabled={isOptimizing}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-green-600 to-emerald-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Optimize performance"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOptimizing ? (
            <motion.div
              key="loading"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <Activity className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="ready"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            >
              <Zap className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Optimization History */}
      <AnimatePresence>
        {optimizationHistory.length > 0 && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed bottom-24 right-6 z-40 bg-gray-900/95 backdrop-blur-sm text-white p-4 rounded-lg shadow-lg border border-gray-700 max-w-sm"
          >
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <h3 className="font-semibold">Recent Optimizations</h3>
            </div>
            
            <div className="space-y-2 text-sm max-h-32 overflow-y-auto">
              {optimizationHistory.slice(-3).map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <div className="flex-1">
                    <div className="text-xs text-gray-400">
                      {item.timestamp.toLocaleTimeString()}
                    </div>
                    <div className="text-xs">
                      {item.action} (+{item.improvement.toFixed(1)}%)
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Performance Tips */}
      <div className="sr-only">
        <h2>Performance Optimization Tips</h2>
        <ul>
          <li>Enable lazy loading for images</li>
          <li>Use WebP format for images</li>
          <li>Minimize JavaScript bundle size</li>
          <li>Implement proper caching strategies</li>
          <li>Use CDN for static assets</li>
          <li>Optimize critical rendering path</li>
        </ul>
      </div>
    </>
>>>>>>> origin/content/blog-sept12
  );
};

export default PerformanceOptimizer;
