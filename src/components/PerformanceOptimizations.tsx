import React, { Suspense, memo } from 'react';
import ErrorBoundary from './ErrorBoundary';
import LoadingSpinner from './LoadingSpinner';

// Lazy load heavy components (example - can be used for actual heavy components)
// const HeavyComponent = lazy(() => import('./HeavyComponent'));

// Memoized components for better performance
const MemoizedCard = memo(({ children, className, ...props }: any) => (
  <div className={`bg-white rounded-lg shadow-md p-6 ${className}`} {...props}>
    {children}
  </div>
));

// Intersection Observer hook for lazy loading
export const useIntersectionObserver = (
  ref: React.RefObject<HTMLElement>,
  options: IntersectionObserverInit = {}
) => {
  const [isIntersecting, setIsIntersecting] = React.useState(false);
  const [hasIntersected, setHasIntersected] = React.useState(false);

  React.useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      { threshold: 0.1, ...options }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [ref, options, hasIntersected]);

  return { isIntersecting, hasIntersected };
};

// Virtual scrolling component for large lists
export const VirtualList = memo(({ 
  items, 
  itemHeight = 50, 
  containerHeight = 400,
  renderItem 
}: {
  items: any[];
  itemHeight?: number;
  containerHeight?: number;
  renderItem: (item: any, index: number) => React.ReactNode;
}) => {
  const [scrollTop, setScrollTop] = React.useState(0);
  
  const visibleStart = Math.floor(scrollTop / itemHeight);
  const visibleEnd = Math.min(
    visibleStart + Math.ceil(containerHeight / itemHeight) + 1,
    items.length
  );
  
  const visibleItems = items.slice(visibleStart, visibleEnd);
  const totalHeight = items.length * itemHeight;
  const offsetY = visibleStart * itemHeight;

  return (
    <div
      className="overflow-auto"
      style={{ height: containerHeight }}
      onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div style={{ transform: `translateY(${offsetY}px)` }}>
          {visibleItems.map((item, index) => 
            renderItem(item, visibleStart + index)
          )}
        </div>
      </div>
    </div>
  );
});

// Image optimization component
export const OptimizedImage = memo(({ 
  src, 
  alt, 
  className = '',
  loading = 'lazy',
  ...props 
}: {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  [key: string]: any;
}) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);

  const handleLoad = () => setIsLoaded(true);
  const handleError = () => setHasError(true);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      )}
      {hasError ? (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-500">
          <span>Failed to load image</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={loading}
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          {...props}
        />
      )}
    </div>
  );
});

// Debounced search component
export const DebouncedSearch = memo(({ 
  onSearch, 
  placeholder = 'Search...',
  delay = 300 
}: {
  onSearch: (query: string) => void;
  placeholder?: string;
  delay?: number;
}) => {
  const [query, setQuery] = React.useState('');
  const [debouncedQuery, setDebouncedQuery] = React.useState('');

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, delay);

    return () => clearTimeout(timer);
  }, [query, delay]);

  React.useEffect(() => {
    onSearch(debouncedQuery);
  }, [debouncedQuery, onSearch]);

  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder={placeholder}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
  );
});

// Performance monitoring component
export const PerformanceMonitor = memo(() => {
  const [metrics, setMetrics] = React.useState({
    renderTime: 0,
    memoryUsage: 0,
    componentCount: 0
  });

  React.useEffect(() => {
    const startTime = performance.now();
    
    const measurePerformance = () => {
      const endTime = performance.now();
      const renderTime = endTime - startTime;
      
      // Get memory usage if available
      const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;
      
      setMetrics({
        renderTime: Math.round(renderTime * 100) / 100,
        memoryUsage: Math.round(memoryUsage / 1024 / 1024 * 100) / 100,
        componentCount: document.querySelectorAll('[data-component]').length
      });
    };

    // Measure after render
    const timer = setTimeout(measurePerformance, 100);
    
    return () => clearTimeout(timer);
  }, []);

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-2 rounded text-xs font-mono">
      <div>Render: {metrics.renderTime}ms</div>
      <div>Memory: {metrics.memoryUsage}MB</div>
      <div>Components: {metrics.componentCount}</div>
    </div>
  );
});

// Main performance optimizations wrapper
const PerformanceOptimizations: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        <PerformanceMonitor />
        {children}
      </Suspense>
    </ErrorBoundary>
  );
};

export default PerformanceOptimizations;