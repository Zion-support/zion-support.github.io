'use client';

import React, { memo, useMemo, useCallback } from 'react';
import { Suspense } from 'react';

// Performance optimization utilities
export const MemoizedComponent = memo(({ children, ...props }: any) => {
  return <div {...props}>{children}</div>;
});

// Lazy loading wrapper with better error handling
export const LazyWrapper = ({ children, fallback }: { children: React.ReactNode; fallback?: React.ReactNode }) => {
  return (
    <Suspense fallback={fallback || <div className="animate-pulse bg-gray-200 h-32 rounded-lg" />}>
      {children}
    </Suspense>
  );
};

// Optimized image component
export const OptimizedImage = memo(({ 
  src, 
  alt, 
  width, 
  height, 
  className = "",
  priority = false 
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`${className} transition-opacity duration-300`}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );
});

// Debounced search hook
export const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// Virtual scrolling hook for large lists
export const useVirtualScroll = (items: any[], itemHeight: number, containerHeight: number) => {
  const [scrollTop, setScrollTop] = React.useState(0);

  const visibleItems = useMemo(() => {
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.min(
      startIndex + Math.ceil(containerHeight / itemHeight) + 1,
      items.length
    );

    return items.slice(startIndex, endIndex).map((item, index) => ({
      ...item,
      index: startIndex + index,
    }));
  }, [items, itemHeight, containerHeight, scrollTop]);

  const totalHeight = items.length * itemHeight;
  const offsetY = scrollTop;

  return {
    visibleItems,
    totalHeight,
    offsetY,
    setScrollTop,
  };
};

// Performance monitoring component
export const PerformanceMonitor = memo(() => {
  const [metrics, setMetrics] = React.useState<any>(null);

  React.useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const navigationEntry = entries.find(entry => entry.entryType === 'navigation') as PerformanceNavigationTiming;
        
        if (navigationEntry) {
          setMetrics({
            domContentLoaded: navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart,
            loadComplete: navigationEntry.loadEventEnd - navigationEntry.loadEventStart,
            firstPaint: entries.find(entry => entry.name === 'first-paint')?.startTime || 0,
            firstContentfulPaint: entries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
          });
        }
      });

      observer.observe({ entryTypes: ['navigation', 'paint'] });

      return () => observer.disconnect();
    }
  }, []);

  if (!metrics) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-2 rounded text-xs">
      <div>DOM Load: {metrics.domContentLoaded?.toFixed(2)}ms</div>
      <div>Page Load: {metrics.loadComplete?.toFixed(2)}ms</div>
      <div>First Paint: {metrics.firstPaint?.toFixed(2)}ms</div>
      <div>FCP: {metrics.firstContentfulPaint?.toFixed(2)}ms</div>
    </div>
  );
});

// Optimized button component
export const OptimizedButton = memo(({ 
  children, 
  onClick, 
  className = "",
  disabled = false,
  ...props 
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  [key: string]: any;
}) => {
  const handleClick = useCallback((e: React.MouseEvent) => {
    if (disabled) return;
    e.preventDefault();
    onClick?.();
  }, [onClick, disabled]);

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`${className} transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed`}
      {...props}
    >
      {children}
    </button>
  );
});

// Memory usage monitor
export const MemoryMonitor = memo(() => {
  const [memoryInfo, setMemoryInfo] = React.useState<any>(null);

  React.useEffect(() => {
    const updateMemoryInfo = () => {
      if ('memory' in performance) {
        setMemoryInfo({
          used: Math.round((performance as any).memory.usedJSHeapSize / 1024 / 1024),
          total: Math.round((performance as any).memory.totalJSHeapSize / 1024 / 1024),
          limit: Math.round((performance as any).memory.jsHeapSizeLimit / 1024 / 1024),
        });
      }
    };

    updateMemoryInfo();
    const interval = setInterval(updateMemoryInfo, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!memoryInfo) return null;

  return (
    <div className="fixed bottom-4 left-4 bg-black bg-opacity-75 text-white p-2 rounded text-xs">
      <div>Memory: {memoryInfo.used}MB / {memoryInfo.total}MB</div>
      <div>Limit: {memoryInfo.limit}MB</div>
    </div>
  );
});

export default PerformanceOptimizations;