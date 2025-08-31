import React, { useEffect, useCallback, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function PerformanceOptimizer({ 
  children, 
  threshold = 0.1, 
  rootMargin = '50px',
  triggerOnce = true 
}: PerformanceOptimizerProps) {
  const [ref, inView] = useInView({
    threshold,
    rootMargin,
    triggerOnce,
  });

  // Performance monitoring
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            console.log('FID:', entry.processingStart - entry.startTime);
          }
          if (entry.entryType === 'layout-shift') {
            console.log('CLS:', (entry as any).value);
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

      return () => observer.disconnect();
    }
  }, []);

  // Memoize children to prevent unnecessary re-renders
  const memoizedChildren = useMemo(() => children, [children]);

  // Optimize images when they come into view
  const handleImageOptimization = useCallback(() => {
    if (inView && typeof window !== 'undefined') {
      const images = document.querySelectorAll('img[data-src]');
      images.forEach((img) => {
        const dataSrc = img.getAttribute('data-src');
        if (dataSrc && img.src !== dataSrc) {
          img.src = dataSrc;
          img.removeAttribute('data-src');
        }
      });
    }
  }, [inView]);

  useEffect(() => {
    handleImageOptimization();
  }, [handleImageOptimization]);

  return (
    <div ref={ref} className="performance-optimized">
      {memoizedChildren}
    </div>
  );
}

// Enhanced Image Component with Lazy Loading
interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: string;
}

export function OptimizedImage({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2YzZjRmNiIvPjwvc3ZnPg=='
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleLoad = () => setIsLoaded(true);
  const handleError = () => setError(true);

  if (error) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <span className="text-gray-500 text-sm">Image failed to load</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ backgroundImage: `url(${placeholder})`, backgroundSize: 'cover' }}
        />
      )}
      <img
        src={priority ? src : placeholder}
        data-src={priority ? undefined : src}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority ? 'eager' : 'lazy'}
      />
    </div>
  );
}

// Performance Monitoring Hook
export function usePerformanceMonitoring() {
  const [metrics, setMetrics] = React.useState({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcp = entries.find(entry => entry.name === 'first-contentful-paint');
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
        const fid = entries[0];
        if (fid) {
          setMetrics(prev => ({ ...prev, fid: (fid as any).processingStart - fid.startTime }));
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
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

  return metrics;
}
