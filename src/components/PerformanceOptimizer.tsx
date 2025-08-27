import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  delay?: number;
  duration?: number;
  y?: number;
  scale?: number;
  opacity?: number;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  className = '',
  threshold = 0.1,
  rootMargin = '0px',
  delay = 0,
  duration = 0.6,
  y = 20,
  scale = 1,
  opacity = 1
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold, rootMargin });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y, scale: scale === 1 ? 1 : 0.95 }}
      animate={isInView ? { opacity, y: 0, scale: 1 } : { opacity: 0, y, scale: scale === 1 ? 1 : 0.95 }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

// Lazy loading wrapper for images
export const LazyImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
}> = ({ src, alt, className = '', placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzM0MTU2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2YzZjRmNiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+' }) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
  }, [src]);

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-60'}`}
    />
  );
};

// Intersection observer hook for performance
export const useIntersectionObserver = (
  options: IntersectionObserverInit = {}
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return [setRef, isIntersecting] as const;
};

// Performance monitoring component
export const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0
  });

  useEffect(() => {
    // Monitor First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcp = entries[0];
      setMetrics(prev => ({ ...prev, fcp: fcp.startTime }));
    });

    // Monitor Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lcp = entries[entries.length - 1];
      setMetrics(prev => ({ ...prev, lcp: lcp.startTime }));
    });

    // Monitor First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fid = entries[0];
      setMetrics(prev => ({ ...prev, fid: fid.processingStart - fid.startTime }));
    });

    // Monitor Cumulative Layout Shift
    const clsObserver = new PerformanceObserver((list) => {
      let cls = 0;
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          cls += entry.value;
        }
      }
      setMetrics(prev => ({ ...prev, cls }));
    });

    try {
      fcpObserver.observe({ entryTypes: ['paint'] });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      fidObserver.observe({ entryTypes: ['first-input'] });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (error) {
      console.warn('Performance monitoring not supported:', error);
    }

    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-zion-slate-dark/90 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-4 text-white text-xs font-mono z-50">
      <div className="mb-2 font-semibold text-zion-cyan">Performance Metrics</div>
      <div>FCP: {metrics.fcp.toFixed(0)}ms</div>
      <div>LCP: {metrics.lcp.toFixed(0)}ms</div>
      <div>FID: {metrics.fid.toFixed(0)}ms</div>
      <div>CLS: {metrics.cls.toFixed(3)}</div>
    </div>
  );
};

// Virtual scrolling component for large lists
export const VirtualList: React.FC<{
  items: any[];
  itemHeight: number;
  containerHeight: number;
  renderItem: (item: any, index: number) => React.ReactNode;
}> = ({ items, itemHeight, containerHeight, renderItem }) => {
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const visibleItemCount = Math.ceil(containerHeight / itemHeight);
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(startIndex + visibleItemCount + 1, items.length);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  }, []);

  const totalHeight = items.length * itemHeight;
  const offsetY = startIndex * itemHeight;

  return (
    <div
      ref={containerRef}
      style={{ height: containerHeight, overflow: 'auto' }}
      onScroll={handleScroll}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div style={{ transform: `translateY(${offsetY}px)` }}>
          {items.slice(startIndex, endIndex).map((item, index) => (
            <div key={startIndex + index} style={{ height: itemHeight }}>
              {renderItem(item, startIndex + index)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Debounced input component
export const DebouncedInput: React.FC<{
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  delay?: number;
}> = ({ value, onChange, placeholder = '', className = '', delay = 300 }) => {
  const [inputValue, setInputValue] = useState(value);
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
      className={`px-3 py-2 border border-zion-cyan/20 bg-zion-blue-dark/50 text-white placeholder-zion-slate-light rounded-md focus:outline-none focus:border-zion-cyan/40 transition-colors ${className}`}
    />
  );
};

// Memoized component wrapper
export const MemoizedComponent: React.FC<{
  children: React.ReactNode;
  dependencies?: any[];
}> = React.memo(({ children }) => <>{children}</>);

// Error boundary component
export class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode; fallback?: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
          <h3 className="font-semibold mb-2">Something went wrong</h3>
          <p className="text-sm">{this.state.error?.message}</p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="mt-2 px-3 py-1 bg-red-500/20 hover:bg-red-500/30 rounded text-sm transition-colors"
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
