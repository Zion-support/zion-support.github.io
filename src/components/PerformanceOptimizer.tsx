import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  showMetrics?: boolean;
}

export function PerformanceOptimizer({ children, showMetrics = false }: PerformanceOptimizerProps) {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const measurePerformance = useCallback(() => {
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      const lcp = paintEntries.find(entry => entry.name === 'largest-contentful-paint');

      const performanceMetrics: PerformanceMetrics = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        firstContentfulPaint: fcp ? fcp.startTime : 0,
        largestContentfulPaint: lcp ? lcp.startTime : 0,
        cumulativeLayoutShift: 0, // Would need to be calculated from LayoutShift API
        firstInputDelay: 0 // Would need to be calculated from FirstInput API
      };

      setMetrics(performanceMetrics);
    }
  }, []);

  const preloadCriticalResources = useCallback(() => {
    // Preload critical CSS and fonts
    const criticalResources = [
      '/fonts/Orbitron-Regular.woff2',
      '/fonts/Orbitron-Bold.woff2'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }, []);

  const optimizeImages = useCallback(() => {
    // Add loading="lazy" to non-critical images
    const images = document.querySelectorAll('img:not([data-critical])');
    images.forEach(img => {
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
    });
  }, []);

  const enableIntersectionObserver = useCallback(() => {
    // Lazy load components when they come into view
    const observerOptions = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const lazyElements = document.querySelectorAll('[data-lazy]');
    lazyElements.forEach(el => observer.observe(el));
  }, []);

  useEffect(() => {
    // Optimize on mount
    preloadCriticalResources();
    optimizeImages();
    enableIntersectionObserver();

    // Measure performance after page load
    if (document.readyState === 'complete') {
      setTimeout(measurePerformance, 100);
    } else {
      window.addEventListener('load', () => {
        setTimeout(measurePerformance, 100);
      });
    }

    setIsLoaded(true);

    return () => {
      // Cleanup
      window.removeEventListener('load', measurePerformance);
    };
  }, [preloadCriticalResources, optimizeImages, enableIntersectionObserver, measurePerformance]);

  const getPerformanceScore = (metrics: PerformanceMetrics): number => {
    let score = 100;

    // Deduct points based on performance metrics
    if (metrics.firstContentfulPaint > 2000) score -= 20;
    if (metrics.largestContentfulPaint > 4000) score -= 20;
    if (metrics.loadTime > 3000) score -= 15;
    if (metrics.cumulativeLayoutShift > 0.1) score -= 10;

    return Math.max(0, score);
  };

  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  if (showMetrics && metrics) {
    const score = getPerformanceScore(metrics);
    
    return (
      <>
        <PerformanceMetricsDisplay metrics={metrics} score={score} />
        {children}
      </>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

interface PerformanceMetricsDisplayProps {
  metrics: PerformanceMetrics;
  score: number;
}

function PerformanceMetricsDisplay({ metrics, score }: PerformanceMetricsDisplayProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-4 right-4 bg-zion-slate-dark/90 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-4 text-white z-50 max-w-sm"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold">Performance Score</h3>
        <span className={`text-lg font-bold ${getScoreColor(score)}`}>
          {score}/100
        </span>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-zion-slate-light">FCP:</span>
          <span className={metrics.firstContentfulPaint < 2000 ? 'text-green-400' : 'text-red-400'}>
            {Math.round(metrics.firstContentfulPaint)}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-zion-slate-light">LCP:</span>
          <span className={metrics.largestContentfulPaint < 4000 ? 'text-green-400' : 'text-red-400'}>
            {Math.round(metrics.largestContentfulPaint)}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-zion-slate-light">Load Time:</span>
          <span className={metrics.loadTime < 3000 ? 'text-green-400' : 'text-red-400'}>
            {Math.round(metrics.loadTime)}ms
          </span>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-zion-slate-light/20">
        <div className="w-full bg-zion-slate-light/20 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-500 ${
              score >= 90 ? 'bg-green-400' : score >= 70 ? 'bg-yellow-400' : 'bg-red-400'
            }`}
            style={{ width: `${score}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
}

// Lazy loading hook
export function useLazyLoad<T>(
  data: T[],
  itemsPerPage: number = 10
) {
  const [displayedItems, setDisplayedItems] = useState<T[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const startIndex = 0;
    const endIndex = currentPage * itemsPerPage;
    const newItems = data.slice(startIndex, endIndex);
    
    setDisplayedItems(newItems);
    setHasMore(endIndex < data.length);
  }, [data, currentPage, itemsPerPage]);

  const loadMore = useCallback(() => {
    if (hasMore) {
      setCurrentPage(prev => prev + 1);
    }
  }, [hasMore]);

  return {
    displayedItems,
    hasMore,
    loadMore,
    currentPage
  };
}

// Image optimization component
interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  critical?: boolean;
  sizes?: string;
  onLoad?: () => void;
}

export function OptimizedImage({
  src,
  alt,
  className = '',
  critical = false,
  sizes = '100vw',
  onLoad
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-zion-slate-light/20 animate-pulse rounded" />
      )}
      
      {hasError ? (
        <div className="absolute inset-0 bg-zion-slate-light/10 flex items-center justify-center">
          <span className="text-zion-slate-light text-sm">Image failed to load</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          sizes={sizes}
          loading={critical ? 'eager' : 'lazy'}
          data-critical={critical ? 'true' : undefined}
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </div>
  );
}

// Code splitting wrapper
interface LazyComponentProps {
  fallback?: React.ReactNode;
  children: React.ReactNode;
}

export function LazyComponent({ 
  fallback = <div className="animate-pulse bg-zion-slate-light/20 h-32 rounded" />,
  children 
}: LazyComponentProps) {
  return (
    <React.Suspense fallback={fallback}>
      {children}
    </React.Suspense>
  );
}
