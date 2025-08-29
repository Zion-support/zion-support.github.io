import React, { useEffect, useRef, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  className?: string;
}

export function PerformanceOptimizer({
  children,
  threshold = 0.1,
  rootMargin = '50px',
  triggerOnce = true,
  className = ''
}: PerformanceOptimizerProps) {
  const [ref, inView] = useInView({
    threshold,
    rootMargin,
    triggerOnce
  });

  return (
    <div ref={ref} className={className}>
      {inView ? children : <div className="h-32 bg-zion-slate-light/10 rounded-lg animate-pulse" />}
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
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  placeholder = 'empty',
  blurDataURL
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isInView, setIsInView] = React.useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: '100px',
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      setIsInView(true);
    }
  }, [inView]);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    // Fallback to a placeholder or default image
    if (imgRef.current) {
      imgRef.current.src = '/images/placeholder-image.jpg';
    }
  }, []);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {placeholder === 'blur' && blurDataURL && !isLoaded && (
        <div
          className="absolute inset-0 bg-cover bg-center blur-sm scale-110"
          style={{ backgroundImage: `url(${blurDataURL})` }}
        />
      )}
      
      {isInView && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      )}
      
      {!isLoaded && placeholder === 'empty' && (
        <div className="absolute inset-0 bg-zion-slate-light/20 animate-pulse" />
      )}
    </div>
  );
}

// Lazy load component with intersection observer
interface LazyLoadProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
}

export function LazyLoad({
  children,
  fallback,
  threshold = 0.1,
  rootMargin = '50px',
  className = ''
}: LazyLoadProps) {
  const [ref, inView] = useInView({
    threshold,
    rootMargin,
    triggerOnce: true
  });

  const defaultFallback = (
    <div className="flex items-center justify-center h-32 bg-zion-slate-light/10 rounded-lg">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-zion-cyan"></div>
    </div>
  );

  return (
    <div ref={ref} className={className}>
      {inView ? children : (fallback || defaultFallback)}
    </div>
  );
}

// Performance monitoring hook
export function usePerformanceMonitor(componentName: string) {
  const startTime = useRef(performance.now());
  const renderCount = useRef(0);

  useEffect(() => {
    const endTime = performance.now();
    const renderTime = endTime - startTime.current;
    
    renderCount.current += 1;
    
    // Log performance metrics in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`[${componentName}] Render #${renderCount.current}: ${renderTime.toFixed(2)}ms`);
    }
    
    // Update start time for next render
    startTime.current = performance.now();
  });

  // Monitor memory usage
  useEffect(() => {
    if ('memory' in performance && process.env.NODE_ENV === 'development') {
      const memory = (performance as any).memory;
      console.log(`[${componentName}] Memory: ${(memory.usedJSHeapSize / 1024 / 1024).toFixed(2)}MB used`);
    }
  }, []);

  return {
    renderCount: renderCount.current
  };
}

// Virtual scrolling component for large lists
interface VirtualListProps<T> {
  items: T[];
  itemHeight: number;
  containerHeight: number;
  renderItem: (item: T, index: number) => React.ReactNode;
  overscan?: number;
}

export function VirtualList<T>({
  items,
  itemHeight,
  containerHeight,
  renderItem,
  overscan = 5
}: VirtualListProps<T>) {
  const [scrollTop, setScrollTop] = React.useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalHeight = items.length * itemHeight;
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
  const endIndex = Math.min(
    items.length,
    Math.ceil((scrollTop + containerHeight) / itemHeight) + overscan
  );

  const visibleItems = items.slice(startIndex, endIndex);
  const offsetY = startIndex * itemHeight;

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ height: containerHeight, overflow: 'auto' }}
      onScroll={handleScroll}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div style={{ transform: `translateY(${offsetY}px)` }}>
          {visibleItems.map((item, index) => renderItem(item, startIndex + index))}
        </div>
      </div>
    </div>
  );
}

// Debounced input component
interface DebouncedInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  delay?: number;
  className?: string;
}

export function DebouncedInput({
  value,
  onChange,
  placeholder = '',
  delay = 300,
  className = ''
}: DebouncedInputProps) {
  const [inputValue, setInputValue] = React.useState(value);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      onChange(inputValue);
    }, delay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [inputValue, onChange, delay]);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder={placeholder}
      className={`px-4 py-2 border border-zion-slate-light/30 rounded-lg bg-zion-slate-light/10 text-white placeholder-zion-slate-light/50 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent ${className}`}
    />
  );
}

// Main performance optimizer wrapper
export function PerformanceOptimizerWrapper({ children }: { children: React.ReactNode }) {
  // Monitor overall app performance
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // Monitor Core Web Vitals
      if ('web-vital' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS(console.log);
          getFID(console.log);
          getFCP(console.log);
          getLCP(console.log);
          getTTFB(console.log);
        });
      }
    }
  }, []);

  return <>{children}</>;
}
