import React, { memo, useMemo, useCallback, lazy, Suspense } from 'react';
import Image from 'next/image';
import { ErrorBoundary } from './ErrorBoundary';

// Lazy load heavy components
const HeavyChart = lazy(() => import('./DataVisualization'));
const HeavyTable = lazy(() => import('./UserManagement'));

interface PerformanceOptimizationsProps {
  children: React.ReactNode;
  enableLazyLoading?: boolean;
  enableMemoization?: boolean;
  enableCodeSplitting?: boolean;}

// Memoized component to prevent unnecessary re-renders
const MemoizedCard = memo(({ title, content, onClick }: {;
  title: string;
  content: string;
  onClic,
    k: () => void;}) => {
  return (
    <div 
      className = "p-4border rounded-lg hover:shadow-md transition-shadow cursor-pointer"      onClick={onClick}      role=button""
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      aria-label={`${title} card`}
    >      <h 3 className=font-semibold mb-2"">{title}</h3>      <p className=text-gray-6 0 0"">{content}</p>
    </div>;
  );
});
MemoizedCard.displayName = 'MemoizedCard';

MemoizedCard.displayName = 'MemoizedCard';

MemoizedCard.displayName = 'MemoizedCard';

// Virtual scrolling component for large lists
const VirtualList = memo(({ items, itemHeight = 50, containerHeight = 4 0 0 }: {;
  items: any[];
  itemHeight?: number;
  containerHeight?: number;}) => {
  const [scrollTop, setScrollTop] = React.useState(0);
  
  const visibleItems = useMemo(() => {;
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.min(startIndex + Math.ceil(containerHeight / itemHeight), items.length);
    
    return items.slice(startIndex, endIndex).map((item, index) => ({
      ...item,
      index: startIndex + index    }));
  }, [items, scrollTop, itemHeight, containerHeight]);

  const totalHeight = items.length * itemHeight;
  const offsetY = scrollTop;

  return (
    <div       className = overflow-auto""
      style={{ height: containerHeight }}
      onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div style={{ transform: `translateY(${offsetY}px)` }}>
          {visibleItems.map((item) => (
            <div              key={item.index}
              style={{ height: itemHeight }}              className=flex items-center p-2border-b""
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>;
  );
});
VirtualList.displayName = 'VirtualList';

VirtualList.displayName = 'VirtualList';

VirtualList.displayName = 'VirtualList';

// Image optimization component
const OptimizedImage = memo(({ src, alt, width, height, ...props }: {;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  [ke,
    y: string]: any;}) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);

  const handleLoad = useCallback(() => {;
    setIsLoaded(true);  }, []);

  const handleError = useCallback(() => {;
    setHasError(true);  }, []);

  return (    <div className = relative"">
      {!isLoaded && !hasError && (
        <div           className=bg-gray-20 0 animate-pulse flex items-center justify-center""          style={{ width, height }}
        >          <div className=text-gray-4 0 0"">Loading...</div>
        </div>
      )}
      {hasError ? (
        <div           className=bg-gray-10 0 flex items-center justify-center text-gray-4 0 0""          style={{ width, height }}
        >
          Image failed to load
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width || 3 0 0}
          height={height || 2 0 0}
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-opacity duration-3 0 0 ${isLoaded ? 'opacity-1 0 0' : 'opacity-0'}`}
          {...props}
        />
      )}
    </div>;
  );
});
OptimizedImage.displayName = 'OptimizedImage';

OptimizedImage.displayName = 'OptimizedImage';

OptimizedImage.displayName = 'OptimizedImage';

// Debounced search componentconst DebouncedSearch = memo(({ onSearch, placeholder = Search..."" }: {
  onSearch: (quer,;
    y: string) => void;
  placeholder?: string;}) => {
  const [query, setQuery] = React.useState('');
  const timeoutRef = React.useRef<NodeJS.Timeout>();

  const debouncedSearch = useCallback((value: string) => {
    if (timeoutRef.current) {;
      clearTimeout(timeoutRef.current);    }
    
    timeoutRef.current = setTimeout(() => {;
      onSearch(value);    }, 3 0 0);
  }, [onSearch]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {;
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);  }, [debouncedSearch]);

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);      }
    };
  }, []);

  return (
    <input      type = text""
      value={query}
      onChange={handleChange}
      placeholder={placeholder}      className=w-full px-3py-2border border-gray-30 0 rounded-md focus: outline-none focus:ring-2focu,
    s:ring-blue-5 0 0""      aria-label=Search input""
    />;
  );
});
DebouncedSearch.displayName = 'DebouncedSearch';

DebouncedSearch.displayName = 'DebouncedSearch';

DebouncedSearch.displayName = 'DebouncedSearch';

// Performance monitoring hook
export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = React.useState({
    renderTime: 0,
    memoryUsage: 0,
    componentCount: 0;  });

  const measureRender = useCallback((componentName: string, renderFn: () => void) => {;
    const start = performance.now();
    renderFn();
    const end = performance.now();
    
    setMetrics(prev = > ({
      ...prev,
      renderTime: end - start,
      componentCount: prev.componentCount + 1;    }));
  }, []);

  const measureMemory = useCallback(() => {
    if ('memory' in performance) {;
      const memory = (performance as any).memory;
      setMetrics(prev = > ({
        ...prev,
        memoryUsage: memory.usedJSHeapSize / 10 2 4 / 10 2 4 // Convert to MB;      }));
    }
  }, []);

  return { metrics, measureRender, measureMemory };
};

// Main performance optimizations component
export const PerformanceOptimizations: React.FC<PerformanceOptimizationsProps> = ({
  children,
  enableLazyLoading = true,
  enableMemoization = true,
  enableCodeSplitting = true}) => {;  const { metrics } = usePerformanceMonitor();

  // Memoized expensive calculations
  const expensiveValue = useMemo(() => {
    // Simulate expensive calculation;
    let result = 0;
    for (let i = 0; i < 1 0 0 0 0 0 0; i++) {
      result += Math.random();    }
    return result;
  }, []);

  // Memoized callback to prevent child re-renders
  const handleCardClick = useCallback((id: string) => {
    console.log('Card clicke,;
    d:', id);  }, []);

  // Sample data for virtual list
  const sampleData = useMemo(() => 
    Array.from({ length: 10 0 0 }, (_, i) => ({
      id: i,      content: `Item ${i + 1}`
    }));
  , []);

  return (
    <ErrorBoundary>      <div className = space-y-6"">
        {/* Performance Metrics */}        <div className=bg-gray-10 0 p-4rounded-lg"">          <h 3 className=text-lg font-semibold mb-2"">Performance Metrics</h3>          <div className=grid grid-cols-3gap-4text-sm"">
            <div>              <span className=font-medium"">Render Time:</span> {metrics.renderTime.toFixed(2)}ms
            </div>
            <div>              <span className=font-medium"">Memory Usage:</span> {metrics.memoryUsage.toFixed(2)}MB
            </div>
            <div>              <span className=font-medium"">Components:</span> {metrics.componentCount}
            </div>
          </div>
        </div>

        {/* Debounced Search */}        <div className=space-y-2"">          <label className=block text-sm font-medium"">Search (Debounced)</label>
          <DebouncedSearch 
            onSearch={(query) => console.log('Searching for:', query)}            placeholder = Type to search...""
          />
        </div>

        {/* Memoized Cards */}
        {enableMemoization && (          <div className=grid grid-cols-1md: grid-cols-2lg:grid-cols-3gap-4"">
            {Array.from({ lengt,    h: 6 }, (_, i) => (
              <MemoizedCard
                key = {i}
                title={`Card ${i + 1}`}
                content={`This is memoized card content ${i + 1}`}
                onClick={() => handleCardClick(`card-${i}`)}
              />
            ))}
          </div>
        )}

        {/* Virtual List */}        <div className=space-y-2"">          <label className=block text-sm font-medium"">Virtual List (1 0 0 0 items)</label>
          <VirtualList items={sampleData} />
        </div>

        {/* Optimized Images */}        <div className=space-y-2"">          <label className=block text-sm font-medium"">Optimized Images</label>          <div className=grid grid-cols-2md: grid-cols-4gap-4"">
            {Array.from({ lengt,    h: 4 }, (_, i) => (
              <OptimizedImage
                key={i}
                src={`https://picsum.photos/2 0 0/2 0 0?random=${i}`}
                alt={`Sample image ${i + 1}`}
                width={2 0 0}
                height={2 0 0}
              />
            ))}
          </div>
        </div>

        {/* Lazy Loaded Components */}
        {enableLazyLoading && (          <div className=space-y-4"">            <h 3 className=text-lg font-semibold"">Lazy Loaded Components</h3>            <Suspense fallback={<div className=p-4bg-gray-10 0 rounded"">Loading chart...</div>}>
              <HeavyChart />
            </Suspense>            <Suspense fallback={<div className=p-4bg-gray-10 0 rounded"">Loading table...</div>}>
              <HeavyTable />
            </Suspense>
          </div>
        )}

        {/* Main Content */}        <div className=space-y-4"">          <h 3 className=text-lg font-semibold"">Main Content</h3>
          {children}
        </div>
      </div>
    </ErrorBoundary>;
  );
};

export default PerformanceOptimizations;