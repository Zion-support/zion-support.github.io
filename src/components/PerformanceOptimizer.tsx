import React, { useEffect, useRef, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function PerformanceOptimizer({
  children,
  className = '',
  threshold = 0.1,
  rootMargin = '50px',
  triggerOnce = true
}: PerformanceOptimizerProps) {
  const { ref, inView } = useInView({
    threshold,
    rootMargin,
    triggerOnce
  });
  const [recommendations, setRecommendations] = useState<PerformanceRecommendation[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  return (
    <div ref={ref} className={className}>
      {inView ? children : <div className="h-32 bg-slate-800/20 rounded-lg animate-pulse" />}
    </div>
  );
}

// Image optimization component
interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  placeholder?: string;
  priority?: boolean;
  sizes?: string;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzMzMzMzMyIvPjwvc3ZnPg==',
  priority = false,
  sizes = '100vw'
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [error, setError] = React.useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setError(true);
  }, []);

  useEffect(() => {
    if (priority && imgRef.current) {
      imgRef.current.loading = 'eager';
    }
  }, [priority]);

  if (error) {
    return (
      <div className={`bg-slate-800 flex items-center justify-center ${className}`}>
        <div className="text-slate-400 text-sm">Image failed to load</div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-800 animate-pulse" />
      )}

      {/* Actual Image */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          width: width ? `${width}px` : '100%',
          height: height ? `${height}px` : 'auto'
        }}
      />
    </div>
  );
}

// Lazy loaded component wrapper
interface LazyComponentProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
}

export function LazyComponent({
  children,
  fallback = <div className="h-32 bg-slate-800/20 rounded-lg animate-pulse" />,
  className = ''
}: LazyComponentProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: '100px',
    triggerOnce: true
  });

  return (
    <div ref={ref} className={className}>
      {inView ? children : fallback}
    </div>
  );
}

// Performance monitoring hook
export function usePerformanceMonitor(componentName: string) {
  const renderCount = useRef(0);
  const startTime = useRef(performance.now());

  useEffect(() => {
    renderCount.current += 1;

    if (process.env.NODE_ENV === 'development') {
      const renderTime = performance.now() - startTime.current;
      console.log(`[${componentName}] Render #${renderCount.current} took ${renderTime.toFixed(2)}ms`);
    }

    startTime.current = performance.now();
  });

  // Monitor memory usage in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && 'memory' in performance) {
      const memory = (performance as any).memory;
      if (memory.usedJSHeapSize > 50 * 1024 * 1024) { // 50MB threshold
        console.warn(`[${componentName}] High memory usage: ${(memory.usedJSHeapSize / 1024 / 1024).toFixed(2)}MB`);
      }
    }
  });

  return {
    renderCount: renderCount.current
  };
}

// Debounced hook for performance optimization
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = React.useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// Throttled hook for performance optimization
export function useThrottle<T>(value: T, limit: number): T {
  const [throttledValue, setThrottledValue] = React.useState<T>(value);
  const lastRan = useRef(Date.now());

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
}

// Virtual scrolling hook for large lists
export function useVirtualScroll<T>(
  items: T[],
  itemHeight: number,
  containerHeight: number,
  overscan: number = 5
) {
  const [scrollTop, setScrollTop] = React.useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const visibleRange = React.useMemo(() => {
    const start = Math.floor(scrollTop / itemHeight);
    const end = Math.min(
      start + Math.ceil(containerHeight / itemHeight) + overscan,
      items.length
    );

    return {
      start: Math.max(0, start - overscan),
      end
    };
  }, [scrollTop, itemHeight, containerHeight, overscan, items.length]);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  }, []);

  const totalHeight = items.length * itemHeight;
  const offsetY = visibleRange.start * itemHeight;

  return {
    containerRef,
    handleScroll,
    totalHeight,
    offsetY,
    visibleItems: items.slice(visibleRange.start, visibleRange.end),
    visibleRange
  };
}

// Export the main component as default
export default PerformanceOptimizer;
