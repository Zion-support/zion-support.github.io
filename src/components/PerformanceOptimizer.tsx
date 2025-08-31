import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}
}

interface BundleAnalysis {
  totalSize: number;
  chunkCount: number;
  largestChunks: Array<{ name: string; size: number }>;
  optimizationScore: number;
}

interface PerformanceOptimizerProps {
  enabled?: boolean;
  showMetrics?: boolean;
  autoOptimize?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enabled = true,
  showMetrics = false,
  autoOptimize = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [bundleAnalysis, setBundleAnalysis] = useState<BundleAnalysis | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationHistory, setOptimizationHistory] = useState<Array<{ timestamp: number; action: string; impact: string }>>([]);

  // Performance monitoring
  const measurePerformance = useCallback(async () => {
    if (!enabled || !('PerformanceObserver' in window)) return;

    try {
      // Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => prev ? { ...prev, lcp: entry.startTime } : null);
          }
        });
      });

      observer.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Contentful Paint
      const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
      if (fcpEntry) {
        setMetrics(prev => prev ? { ...prev, fcp: fcpEntry.startTime } : null);
>>>>>>> cursor/analyze-improve-and-deploy-application-75e8
      }

      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => prev ? { ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart } : null);
      }

    } catch (error) {
      console.warn('Performance monitoring failed:', error);
    }
<<<<<<< HEAD

    // Monitor First Contentful Paint
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
              console.log('FCP:', entry.startTime);
              performanceDataRef.current.fcp = entry.startTime;
            }
          }
        });

        observer.observe({ entryTypes: ['paint'] });
      } catch (error) {
        console.warn('FCP monitoring failed:', error);
      }
    }

    // Monitor Time to First Byte
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'navigation') {
              const navEntry = entry as PerformanceNavigationTiming;
              const ttfb = navEntry.responseStart - navEntry.requestStart;
              console.log('TTFB:', ttfb);
              performanceDataRef.current.ttfb = ttfb;
            }
          }
        });

        observer.observe({ entryTypes: ['navigation'] });
      } catch (error) {
        console.warn('TTFB monitoring failed:', error);
      }
    }
  }, [enablePerformanceMonitoring]);

  // Lazy loading with Intersection Observer
  const setupLazyLoading = useCallback(() => {
    if (!enableLazyLoading || !enableIntersectionObserver) return;

    const images = document.querySelectorAll('img[data-src]');
    if (images.length === 0) return;

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.dataset.src;
          if (src) {
            img.src = src;
            img.classList.remove('lazy');
            img.removeAttribute('data-src');
            observerRef.current?.unobserve(img);
          }
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01,
    });

    images.forEach((img) => {
      observerRef.current?.observe(img);
    });
  }, [enableLazyLoading, enableIntersectionObserver]);

  // Resource hints for performance
  const addResourceHints = useCallback(() => {
    // Preconnect to external domains
    const domains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://www.google-analytics.com',
    ];

    domains.forEach(domain => {
      if (!document.querySelector(`link[href="${domain}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      }
    });

    // DNS prefetch for additional domains
    const dnsDomains = [
      '//cdn.jsdelivr.net',
      '//unpkg.com',
    ];

    dnsDomains.forEach(domain => {
      if (!document.querySelector(`link[href="${domain}"]`)) {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = domain;
        document.head.appendChild(link);
      }
    });
  }, []);

  // Critical CSS inline loading
  const loadCriticalCSS = useCallback(() => {
    const criticalCSS = document.querySelector('link[data-critical]');
    if (criticalCSS) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = criticalCSS.getAttribute('href') || '';
      link.media = 'print';
      link.onload = () => {
        link.media = 'all';
      };
      document.head.appendChild(link);
    }
  }, []);

  // Performance optimization suggestions
  const getOptimizationSuggestions = useCallback(() => {
    const metrics = performanceDataRef.current;
    const suggestions: string[] = [];

    if (metrics.fcp > 1800) {
      suggestions.push('First Contentful Paint is slow. Optimize critical rendering path.');
    }

    if (metrics.lcp > 2500) {
      suggestions.push('Largest Contentful Paint is slow. Optimize images and fonts.');
    }

    if (metrics.fid > 100) {
      suggestions.push('First Input Delay is high. Reduce JavaScript execution time.');
    }

    if (metrics.cls > 0.1) {
      suggestions.push('Cumulative Layout Shift is high. Ensure stable layouts.');
    }

    if (metrics.ttfb > 600) {
      suggestions.push('Time to First Byte is slow. Optimize server response time.');
    }

    return suggestions;
  }, []);

  // Apply optimizations
  const applyOptimizations = useCallback(() => {
    const suggestions = getOptimizationSuggestions();
    
    if (suggestions.length > 0) {
      console.log('Performance optimization suggestions:', suggestions);
      
      // Auto-apply some optimizations
      if (suggestions.some(s => s.includes('images'))) {
        // Optimize images
        const images = document.querySelectorAll('img');
        images.forEach(img => {
          if (img.loading !== 'lazy') {
            img.loading = 'lazy';
          }
        });
      }

      if (suggestions.some(s => s.includes('JavaScript'))) {
        // Defer non-critical scripts
        const scripts = document.querySelectorAll('script:not([data-critical])');
        scripts.forEach(script => {
          if (!script.defer && !script.async) {
            script.defer = true;
          }
        });
      }
    }
  }, [getOptimizationSuggestions]);

  // Initialize performance monitoring
  useEffect(() => {
    monitorPerformance();
    addResourceHints();
    loadCriticalCSS();
  }, [monitorPerformance, addResourceHints, loadCriticalCSS]);

  // Setup lazy loading
  useEffect(() => {
    setupLazyLoading();

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [setupLazyLoading]);

  // Apply optimizations after metrics are collected
  useEffect(() => {
    const timer = setTimeout(() => {
      applyOptimizations();
    }, 5000); // Wait 5 seconds for metrics to be collected

    return () => clearTimeout(timer);
  }, [applyOptimizations]);

  return <>{children}</>;
=======
  }, [enabled]);

  // Bundle analysis
  const analyzeBundle = useCallback(async () => {
    if (!enabled) return;

    try {
      const chunks = performance.getEntriesByType('resource');
      const jsChunks = chunks.filter(chunk => chunk.name.endsWith('.js'));
      
      const totalSize = jsChunks.reduce((sum, chunk) => sum + (chunk as any).transferSize || 0, 0);
      const largestChunks = jsChunks
        .map(chunk => ({ name: chunk.name.split('/').pop() || 'unknown', size: (chunk as any).transferSize || 0 }))
        .sort((a, b) => b.size - a.size)
        .slice(0, 5);

      const optimizationScore = Math.max(0, 100 - (totalSize / 1024 / 1024) * 10); // Penalize large bundles

      setBundleAnalysis({
        totalSize,
        chunkCount: jsChunks.length,
        largestChunks,
        optimizationScore: Math.round(optimizationScore)
      });
    } catch (error) {
      console.warn('Bundle analysis failed:', error);
    }
  }, [enabled]);

  // Auto-optimization
  const performOptimization = useCallback(async () => {
    if (!enabled || !autoOptimize) return;

    setIsOptimizing(true);
    const startTime = Date.now();

    try {
      // Preload critical resources
      const criticalPaths = ['/css/index.css', '/js/chunk-BB6i6xP_.js'];
      criticalPaths.forEach(path => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = path;
        link.as = path.endsWith('.css') ? 'style' : 'script';
        document.head.appendChild(link);
      });

      // Optimize images
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
      });

      // Add intersection observer for better lazy loading
      if ('IntersectionObserver' in window) {
        const lazyElements = document.querySelectorAll('[data-lazy]');
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const element = entry.target as HTMLElement;
              element.classList.add('lazy-loaded');
              observer.unobserve(element);
            }
          });
        });

        lazyElements.forEach(el => observer.observe(el));
      }

      const endTime = Date.now();
      const impact = `Optimization completed in ${endTime - startTime}ms`;
      
      setOptimizationHistory(prev => [...prev, {
        timestamp: Date.now(),
        action: 'Auto-optimization',
        impact
      }]);

    } catch (error) {
      console.warn('Auto-optimization failed:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [enabled, autoOptimize]);

  // Memory management
  const optimizeMemory = useCallback(() => {
    if (!enabled) return;

    try {
      // Clear unused event listeners
      const cleanup = () => {
        // This is a placeholder for actual cleanup logic
        // In a real implementation, you'd track and remove unused listeners
      };

      // Schedule garbage collection if available
      if ('gc' in window) {
        (window as any).gc();
      }

      // Clear console in production
      if (process.env.NODE_ENV === 'production') {
        console.clear();
      }

    } catch (error) {
      console.warn('Memory optimization failed:', error);
    }
  }, [enabled]);

  // Effects
  useEffect(() => {
    if (!enabled) return;

    measurePerformance();
    analyzeBundle();

    const interval = setInterval(() => {
      measurePerformance();
      analyzeBundle();
    }, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, [enabled, measurePerformance, analyzeBundle]);

  useEffect(() => {
    if (!enabled || !autoOptimize) return;

    const timer = setTimeout(performOptimization, 2000); // Optimize after 2 seconds
    return () => clearTimeout(timer);
  }, [enabled, autoOptimize, performOptimization]);

  // Memory optimization on visibility change
  useEffect(() => {
    if (!enabled) return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        optimizeMemory();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [enabled, optimizeMemory]);

  if (!enabled || !showMetrics) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="fixed bottom-4 right-4 bg-zion-slate-dark border border-zion-purple/20 rounded-lg p-4 shadow-lg backdrop-blur-sm z-50 max-w-sm"
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-white">Performance Monitor</h3>
          <div className="flex items-center space-x-2">
            {isOptimizing && (
              <div className="w-3 h-3 bg-zion-cyan rounded-full animate-pulse" />
            )}
            <button
              onClick={performOptimization}
              className="text-xs text-zion-cyan hover:text-white transition-colors"
            >
              Optimize
            </button>
          </div>
        </div>

        {metrics && (
          <div className="space-y-2 mb-3">
            <div className="text-xs text-zion-slate-light">
              <span className="text-zion-cyan">FCP:</span> {metrics.fcp?.toFixed(0)}ms
            </div>
            <div className="text-xs text-zion-slate-light">
              <span className="text-zion-cyan">LCP:</span> {metrics.lcp?.toFixed(0)}ms
            </div>
            <div className="text-xs text-zion-slate-light">
              <span className="text-zion-cyan">TTFB:</span> {metrics.ttfb?.toFixed(0)}ms
            </div>
          </div>
        )}

        {bundleAnalysis && (
          <div className="space-y-2 mb-3">
            <div className="text-xs text-zion-slate-light">
              <span className="text-zion-cyan">Bundle Score:</span> {bundleAnalysis.optimizationScore}/100
            </div>
            <div className="text-xs text-zion-slate-light">
              <span className="text-zion-cyan">Chunks:</span> {bundleAnalysis.chunkCount}
            </div>
            <div className="text-xs text-zion-slate-light">
              <span className="text-zion-cyan">Total Size:</span> {(bundleAnalysis.totalSize / 1024 / 1024).toFixed(2)}MB
            </div>
          </div>
        )}

        {optimizationHistory.length > 0 && (
          <div className="text-xs text-zion-slate-light">
            <div className="text-zion-cyan mb-1">Recent Optimizations:</div>
            {optimizationHistory.slice(-2).map((item, index) => (
              <div key={index} className="text-xs opacity-75">
                {item.action}: {item.impact}
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
>>>>>>> cursor/analyze-improve-and-deploy-application-75e8
};
