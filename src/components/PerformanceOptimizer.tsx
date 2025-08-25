<<<<<<< HEAD
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, TrendingUp, AlertTriangle, CheckCircle, X, Settings, BarChart3, Cpu, HardDrive, Clock, Download } from 'lucide-react';
=======
import React, { useEffect, useCallback } from 'react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-638c

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  bundleSize: number;
  lighthouseScore: number;
  optimizationSuggestions: string[];
}

<<<<<<< HEAD
<<<<<<< HEAD
interface PerformanceOptimizerProps {
  showMetrics?: boolean;
  onOptimize?: (metrics: PerformanceMetrics) => void;
  autoOptimize?: boolean;
}
=======
export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [performanceMetrics, setPerformanceMetrics] = useState({
    pageLoadTime: 0,
    domContentLoaded: 0,
    firstContentfulPaint: 0
  });
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-7a35

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  showMetrics = false,
  onOptimize,
  autoOptimize = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    bundleSize: 0,
    lighthouseScore: 0,
    optimizationSuggestions: []
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [optimizationHistory, setOptimizationHistory] = useState<PerformanceMetrics[]>([]);

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    const startTime = performance.now();
    
<<<<<<< HEAD
    // Measure page load time
    const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
    
    // Estimate memory usage (if available)
    const memoryUsage = (performance as any).memory ? 
      Math.round((performance as any).memory.usedJSHeapSize / 1024 / 1024) : 0;
    
    // Estimate bundle size based on loaded scripts
    const scripts = document.querySelectorAll('script[src]');
    const bundleSize = Array.from(scripts).reduce((total, script) => {
      const src = script.getAttribute('src');
      if (src && src.includes('js/')) {
        return total + 100; // Rough estimate
      }
      return total;
    }, 0);
    
    // Calculate Lighthouse-like score
    let lighthouseScore = 100;
    if (loadTime > 3000) lighthouseScore -= 30;
    if (loadTime > 5000) lighthouseScore -= 20;
    if (memoryUsage > 50) lighthouseScore -= 20;
    if (bundleSize > 500) lighthouseScore -= 15;
    
    // Generate optimization suggestions
    const suggestions: string[] = [];
    if (loadTime > 2000) suggestions.push('Consider implementing lazy loading for images and components');
    if (memoryUsage > 50) suggestions.push('Optimize memory usage by cleaning up event listeners and references');
    if (bundleSize > 500) suggestions.push('Implement code splitting and tree shaking to reduce bundle size');
    if (lighthouseScore < 80) suggestions.push('Run Lighthouse audit for detailed performance insights');
    
    const newMetrics: PerformanceMetrics = {
      loadTime,
      memoryUsage,
      bundleSize,
      lighthouseScore,
      optimizationSuggestions: suggestions
=======
    // Hide loading state after a short delay to prevent flickering
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    // Enhanced performance monitoring
    const measurePerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');
        
        const fcp = paint.find(entry => entry.name === 'first-contentful-paint');
        
        setPerformanceMetrics({
          pageLoadTime: navigation.loadEventEnd - navigation.loadEventStart,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          firstContentfulPaint: fcp ? fcp.startTime : 0
        });

        // Log performance metrics for monitoring
        console.log('Performance Metrics:', {
          pageLoadTime: `${Math.round(navigation.loadEventEnd - navigation.loadEventStart)}ms`,
          domContentLoaded: `${Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart)}ms`,
          firstContentfulPaint: fcp ? `${Math.round(fcp.startTime)}ms` : 'N/A'
        });
      }
    };

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
      return () => window.removeEventListener('load', measurePerformance);
    }
  }, [location.pathname]);

  useEffect(() => {
    // Enhanced preloading strategies
    const preloadCriticalResources = () => {
      // Preload critical CSS with higher priority
      const criticalCSS = document.createElement('link');
      criticalCSS.rel = 'preload';
      criticalCSS.as = 'style';
      criticalCSS.href = '/src/index.css';
      criticalCSS.setAttribute('fetchpriority', 'high');
      document.head.appendChild(criticalCSS);

      // Preload critical fonts with display=swap for better performance
      const fontPreload = document.createElement('link');
      fontPreload.rel = 'preload';
      fontPreload.as = 'font';
      fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Orbitron:wght@400;500;600;700&display=swap';
      fontPreload.crossOrigin = 'anonymous';
      fontPreload.setAttribute('fetchpriority', 'high');
      document.head.appendChild(fontPreload);

      // Preload critical images with proper sizing hints
      const imagePreload = document.createElement('link');
      imagePreload.rel = 'preload';
      imagePreload.as = 'image';
      imagePreload.href = '/images/zion-tech-group-og.jpg';
      imagePreload.setAttribute('fetchpriority', 'high');
      document.head.appendChild(imagePreload);

      // Preload next route for better navigation performance
      const nextRoutePreload = document.createElement('link');
      nextRoutePreload.rel = 'prefetch';
      nextRoutePreload.href = '/services';
      document.head.appendChild(nextRoutePreload);
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-7a35
    };
    
    setMetrics(newMetrics);
    setOptimizationHistory(prev => [...prev.slice(-4), newMetrics]);
    
    if (onOptimize) {
      onOptimize(newMetrics);
    }
    
    return newMetrics;
  }, [onOptimize]);

<<<<<<< HEAD
  // Auto-optimization
  const performAutoOptimization = useCallback(() => {
    const currentMetrics = measurePerformance();
    
    if (currentMetrics.lighthouseScore < 70) {
      // Implement automatic optimizations
      if (currentMetrics.loadTime > 3000) {
        // Preload critical resources
        const criticalLinks = document.querySelectorAll('link[rel="preload"]');
        criticalLinks.forEach(link => link.setAttribute('rel', 'preload'));
      }
      
      if (currentMetrics.memoryUsage > 50) {
        // Suggest garbage collection
        if ('gc' in window) {
          (window as any).gc();
=======
    // Preload resources when component mounts
    preloadCriticalResources();

    // Enhanced intersection observer for lazy loading with better thresholds
    const observerOptions = {
      root: null,
      rootMargin: '100px', // Increased margin for earlier loading
      threshold: [0, 0.1, 0.5, 1.0] // Multiple thresholds for better performance
    };

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            // Add loading animation
            img.classList.add('loading');
            
            // Load image with error handling
            const newImg = new Image();
            newImg.onload = () => {
              img.src = img.dataset.src!;
              img.classList.remove('lazy', 'loading');
              img.classList.add('loaded');
            };
            newImg.onerror = () => {
              img.classList.remove('loading');
              img.classList.add('error');
              // Fallback to placeholder
              img.src = '/images/placeholder.jpg';
            };
            newImg.src = img.dataset.src;
            
            imageObserver.unobserve(img);
          }
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-7a35
        }
      }
    }
  }, [measurePerformance]);

  // Continuous monitoring
  useEffect(() => {
    if (!showMetrics) return;
    
    // Initial measurement
    measurePerformance();
    
    // Set up continuous monitoring
    const interval = setInterval(() => {
      measurePerformance();
    }, 30000); // Every 30 seconds
    
    // Auto-optimization interval
    const optimizationInterval = setInterval(() => {
      if (autoOptimize) {
        performAutoOptimization();
      }
    }, 60000); // Every minute
    
    return () => {
      clearInterval(interval);
      clearInterval(optimizationInterval);
    };
  }, [showMetrics, measurePerformance, autoOptimize]);

<<<<<<< HEAD
  // Performance tips
  const performanceTips = [
    'Use lazy loading for images and components',
    'Implement code splitting to reduce initial bundle size',
    'Optimize images and use modern formats (WebP, AVIF)',
    'Minimize third-party scripts and load them asynchronously',
    'Use service workers for caching and offline support',
    'Implement critical CSS inlining',
    'Use resource hints (preload, prefetch, preconnect)',
    'Optimize fonts with font-display: swap'
  ];

  if (!showMetrics) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-2xl max-w-sm"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/20">
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-cyan-400" />
                <h3 className="text-white font-semibold">Performance Monitor</h3>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                >
                  <BarChart3 className="w-4 h-4 text-white" />
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Metrics */}
            <div className="p-4 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <Clock className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">{metrics.loadTime}ms</div>
                  <div className="text-xs text-gray-400">Load Time</div>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <HardDrive className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">{metrics.memoryUsage}MB</div>
                  <div className="text-xs text-gray-400">Memory</div>
                </div>
              </div>
              
              <div className="text-center p-3 bg-white/5 rounded-lg">
                <Cpu className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <div className="text-white font-semibold">{metrics.lighthouseScore}/100</div>
                <div className="text-xs text-gray-400">Performance Score</div>
              </div>
            </div>

            {/* Optimization Suggestions */}
            {metrics.optimizationSuggestions.length > 0 && (
              <div className="p-4 border-t border-white/20">
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  <AlertTriangle className="w-4 h-4 text-yellow-400 mr-2" />
                  Optimization Tips
                </h4>
                <ul className="space-y-2">
                  {metrics.optimizationSuggestions.map((suggestion, index) => (
                    <li key={index} className="text-sm text-gray-300 flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Expanded View */}
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="border-t border-white/20"
              >
                <div className="p-4 space-y-4">
                  {/* Performance History */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">Performance History</h4>
                    <div className="space-y-2">
                      {optimizationHistory.map((metric, index) => (
                        <div key={index} className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">#{optimizationHistory.length - index}</span>
                          <span className={`font-semibold ${
                            metric.lighthouseScore > 80 ? 'text-green-400' : 
                            metric.lighthouseScore > 60 ? 'text-yellow-400' : 'text-red-400'
                          }`}>
                            {metric.lighthouseScore}/100
                          </span>
                          <span className="text-gray-400">{metric.loadTime}ms</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Tips */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">Quick Tips</h4>
                    <div className="space-y-2">
                      {performanceTips.slice(0, 4).map((tip, index) => (
                        <div key={index} className="text-sm text-gray-300 flex items-start">
                          <span className="text-cyan-400 mr-2">💡</span>
                          {tip}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Actions */}
            <div className="p-4 border-t border-white/20">
              <div className="flex space-x-2">
                <button
                  onClick={measurePerformance}
                  className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center"
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Measure
                </button>
                <button
                  onClick={performAutoOptimization}
                  className="flex-1 bg-purple-500 hover:bg-purple-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Optimize
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      {!isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => setIsVisible(true)}
          className="bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          title="Performance Monitor"
        >
          <Zap className="w-6 h-6" />
        </motion.button>
      )}
    </div>
  );
};

// Image Optimization Component
interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  placeholder?: string;
  lazy?: boolean;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzFlMjYzYiIvPjwvc3ZnPg==',
  lazy = true
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  if (hasError) {
    return (
      <div
        className={`bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-zion-slate-light text-sm">Image failed to load</span>
=======
  useEffect(() => {
    // Enhanced service worker registration with better error handling
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered successfully:', registration);
          
          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New version available
                  console.log('New version available');
                }
              });
            }
          });
        })
        .catch((registrationError) => {
          console.error('Service Worker registration failed:', registrationError);
        });
    }

    // Enhanced resource hints for better performance
    const addResourceHints = () => {
      // DNS prefetch for external domains
      const domains = [
        '//fonts.googleapis.com',
        '//fonts.gstatic.com',
        '//cdn.jsdelivr.net',
        '//unpkg.com'
      ];
      
      domains.forEach(domain => {
        const dnsPrefetch = document.createElement('link');
        dnsPrefetch.rel = 'dns-prefetch';
        dnsPrefetch.href = domain;
        document.head.appendChild(dnsPrefetch);
      });

      // Preconnect to critical domains
      const criticalDomains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com'
      ];
      
      criticalDomains.forEach(domain => {
        const preconnect = document.createElement('link');
        preconnect.rel = 'preconnect';
        preconnect.href = domain;
        preconnect.crossOrigin = 'anonymous';
        document.head.appendChild(preconnect);
      });
    };

    addResourceHints();
  }, []);

  useEffect(() => {
    // Enhanced caching strategies
    const implementCaching = () => {
      // Cache API for better offline support
      if ('caches' in window) {
        caches.open('zion-tech-group-v1').then((cache) => {
          // Cache critical resources
          const criticalResources = [
            '/',
            '/src/index.css',
            '/images/zion-tech-group-og.jpg'
          ];
          
          cache.addAll(criticalResources).catch((error) => {
            console.log('Caching failed for some resources:', error);
          });
        });
      }
    };

    implementCaching();
  }, []);

  // Enhanced loading indicator
  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
        <div className="text-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <div className="absolute inset-0 w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto" style={{ animationDelay: '-0.5s' }}></div>
          </div>
          <p className="text-cyan-400 text-lg font-medium">Loading Zion Tech Group...</p>
          <p className="text-gray-400 text-sm mt-2">Optimizing your experience</p>
        </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-7a35
      </div>
    );
  }

<<<<<<< HEAD
=======
  return (
    <>
      {children}
      {/* Performance monitoring overlay for development */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 bg-black/80 text-white p-3 rounded-lg text-xs font-mono backdrop-blur-sm">
          <div>FCP: {Math.round(performanceMetrics.firstContentfulPaint)}ms</div>
          <div>Load: {Math.round(performanceMetrics.pageLoadTime)}ms</div>
        </div>
      )}
    </>
  );
};

// Lazy loading wrapper for images
export const LazyImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}> = ({ src, alt, className, width, height }) => {
  const [isLoaded, setIsLoaded] = useState(false);

>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-7a35
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      {/* Placeholder */}
      {!isLoaded && (
        <img
          src={placeholder}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ width, height }}
        />
      )}
      
      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={lazy ? 'lazy' : 'eager'}
        onLoad={handleLoad}
        onError={handleError}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};

// Performance Monitoring Hook
export const usePerformanceMonitor = (componentName: string) => {
  useEffect(() => {
    const startTime = performance.now();
    
    return () => {
      const endTime = performance.now();
      const duration = endTime - startTime;
      
      if (duration > 16) { // 60fps threshold
        console.warn(`${componentName} took ${duration.toFixed(2)}ms to render`);
      }
    };
  }, [componentName]);
};

// Debounce Hook
export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// Throttle Hook
export const useThrottle = <T>(value: T, limit: number): T => {
  const [throttledValue, setThrottledValue] = useState<T>(value);
  const lastRan = useRef<number>(Date.now());

  useEffect(() => {
    const handler = setTimeout(() => {
      if (Date.now() - lastRan.current >= limit) {
        setThrottledValue(value);
        lastRan.current = Date.now();
      }
    }, limit - (Date.now() - lastRan.current));

    return () => {
      clearTimeout(handler);
    };
  }, [value, limit]);

  return throttledValue;
};
=======
export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Measure page load performance
      window.addEventListener('load', () => {
        setTimeout(() => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          if (navigation) {
            const metrics = {
              // Time to First Byte
              ttfb: navigation.responseStart - navigation.requestStart,
              // DOM Content Loaded
              domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
              // Load Complete
              loadComplete: navigation.loadEventEnd - navigation.fetchStart,
              // First Contentful Paint (estimated)
              fcp: navigation.domContentLoadedEventEnd - navigation.fetchStart,
            };

            // Log performance metrics
            console.log('🚀 Performance Metrics:', metrics);

            // Send to analytics if available
            if (window.gtag) {
              window.gtag('event', 'performance_metrics', {
                event_category: 'Performance',
                event_label: 'Page Load',
                value: Math.round(metrics.loadComplete),
                custom_parameters: metrics
              });
            }
          }
        }, 0);
      });

      // Monitor Core Web Vitals
      if ('PerformanceObserver' in window) {
        try {
          // Largest Contentful Paint
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            if (lastEntry) {
              console.log('🎯 LCP:', lastEntry.startTime);
              if (window.gtag) {
                window.gtag('event', 'core_web_vital', {
                  event_category: 'Web Vitals',
                  event_label: 'LCP',
                  value: Math.round(lastEntry.startTime)
                });
              }
            }
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

          // First Input Delay
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              const fidEntry = entry as PerformanceEntry & { processingStart: number };
              console.log('⚡ FID:', fidEntry.processingStart - fidEntry.startTime);
              if (window.gtag) {
                window.gtag('event', 'core_web_vital', {
                  event_category: 'Web Vitals',
                  event_label: 'FID',
                  value: Math.round(fidEntry.processingStart - fidEntry.startTime)
                });
              }
            });
          });
          fidObserver.observe({ entryTypes: ['first-input'] });

          // Cumulative Layout Shift
          const clsObserver = new PerformanceObserver((list) => {
            let clsValue = 0;
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
              }
            });
            console.log('📐 CLS:', clsValue);
            if (window.gtag) {
              window.gtag('event', 'core_web_vital', {
                event_category: 'Web Vitals',
                event_label: 'CLS',
                value: Math.round(clsValue * 1000) / 1000
              });
            }
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (error) {
          console.warn('Performance monitoring not supported:', error);
        }
      }
    }
  }, []);

  // Image optimization
  const optimizeImages = useCallback(() => {
    if (typeof window !== 'undefined') {
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        // Add loading="lazy" for images below the fold
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }

        // Add decoding="async" for better performance
        if (!img.hasAttribute('decoding')) {
          img.setAttribute('decoding', 'async');
        }

        // Add error handling
        img.addEventListener('error', () => {
          img.style.display = 'none';
          console.warn('Image failed to load:', img.src);
        });

        // Add intersection observer for progressive loading
        if ('IntersectionObserver' in window) {
          const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const img = entry.target as HTMLImageElement;
                if (img.dataset.src) {
                  img.src = img.dataset.src;
                  img.removeAttribute('data-src');
                  imageObserver.unobserve(img);
                }
              }
            });
          });

          imageObserver.observe(img);
        }
      });
    }
  }, []);

  // Resource hints optimization
  const addResourceHints = useCallback(() => {
    if (typeof window !== 'undefined' && !document.querySelector('link[rel="preconnect"][href="https://fonts.googleapis.com"]')) {
      // Add preconnect for external resources
      const preconnectLinks = [
        { href: 'https://fonts.googleapis.com', crossorigin: 'anonymous' },
        { href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { href: 'https://www.google-analytics.com' },
        { href: 'https://www.googletagmanager.com' }
      ];

      preconnectLinks.forEach(({ href, crossorigin }) => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = href;
        if (crossorigin) {
          link.setAttribute('crossorigin', crossorigin);
        }
        document.head.appendChild(link);
      });

      // Add DNS prefetch for social media
      const dnsPrefetchLinks = [
        'https://www.linkedin.com',
        'https://twitter.com',
        'https://github.com',
        'https://www.youtube.com'
      ];

      dnsPrefetchLinks.forEach((href) => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = href;
        document.head.appendChild(link);
      });
    }
  }, []);

  // Memory optimization
  const optimizeMemory = useCallback(() => {
    if (typeof window !== 'undefined') {
      // Clean up event listeners on page unload
      window.addEventListener('beforeunload', () => {
        // Remove all event listeners to prevent memory leaks
        const elements = document.querySelectorAll('*');
        elements.forEach((element) => {
          const clone = element.cloneNode(true);
          element.parentNode?.replaceChild(clone, element);
        });
      });

      // Monitor memory usage
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const checkMemory = () => {
          const used = Math.round(memory.usedJSHeapSize / 1048576);
          const total = Math.round(memory.totalJSHeapSize / 1048576);
          const limit = Math.round(memory.jsHeapSizeLimit / 1048576);
          
          console.log(`💾 Memory Usage: ${used}MB / ${total}MB (Limit: ${limit}MB)`);
          
          if (used > total * 0.8) {
            console.warn('⚠️ High memory usage detected');
          }
        };

        // Check memory every 30 seconds
        setInterval(checkMemory, 30000);
      }
    }
  }, []);

  useEffect(() => {
    measurePerformance();
    optimizeImages();
    addResourceHints();
    optimizeMemory();
  }, [measurePerformance, optimizeImages, addResourceHints, optimizeMemory]);

  return <>{children}</>;
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-638c
