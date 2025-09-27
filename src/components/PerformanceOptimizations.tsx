import React, { memo, useMemo, useCallback, lazy, Suspense } from 'react';
import Image from 'next/image';
import { ErrorBoundary } from './ErrorBoundary';

// Lazy load heavy components
const HeavyChart = lazy(() => import('./DataVisualization'));
const HeavyTable = lazy(() => import('./UserManagement'));

interface PerformanceOptimizationsProps { children: React.ReactNode;
  enableLazyLoading?: boolean;
  enableMemoization?: boolean;
  enableCodeSplitting?: boolean }

// Memoized component to prevent unnecessary re-renders
const MemoizedCard = memo(({ title, content, onClick }: { ;
  title: string;
  content: string;
  onClic,
    k: () => void }) => {
  return (
    <div 
      className = "p-4border rounded-lg hover:shadow-md transition-shadow cursor-pointer"      onClick={onClick}      role=button""
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      aria-label={`${title} card`}
    >      <h3 className="font-semibold mb-2">{title}</h3>      <p className="text-gray-600">{content}</p>
    </div>;
  );
});
MemoizedCard.displayName = 'MemoizedCard';

MemoizedCard.displayName = 'MemoizedCard';

MemoizedCard.displayName = 'MemoizedCard';

// Virtual scrolling component for large lists
const VirtualList = memo(({ items, itemHeight = 50, containerHeight = 400 }: { ;
  items: any[];
  itemHeight?: number;
  containerHeight?: number }) => {
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
              style={{ height: itemHeight }}              className="flex items-center p-2 border-b"
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
const OptimizedImage = memo(({ src, alt, width, height, ...props }: { ;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  [ke,
    y: string]: any }) => { const [isLoaded, setIsLoaded] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);

  const handleLoad = useCallback(() => {;
    setIsLoaded(true) }, []);

  const handleError = useCallback(() => { ;
    setHasError(true) }, []);

  return (    <div className = relative"">
      {!isLoaded && !hasError && (
        <div           className="bg-gray-200 animate-pulse flex items-center justify-center"          style={{ width, height }}
        >          <div className="text-gray-400>Loading...</div>
        </div>
      )}
      {has Error ? (
        <div           class Name="bg-gray-100 flex items-center justify-center text-gray-400""          style={{ width, height }}
        >
          Image failed to load
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width || 300}
          height={height || 200}
          onLoad={handleLoad}
          onError={handleError}
          className="{`transition-opacity duration-300 ${is Loaded ? 'opacity-100' : 'opacity-0'}`}
          {...props}
        />
      )}
    </div>;
  );
});
Optimized Image.display Name = 'Optimized Image';

Optimized Image.display Name = 'Optimized Image';

Optimized Image.display Name = 'Optimized Image';

// Debounced search componentconst Debounced Search = memo(({ on Search placeholder = Search..." }: { onSearch: (quer,;
    y: string) => void;
  placeholder?: string }) => { const [query, setQuery] = React.useState('');
  const timeoutRef = React.useRef<NodeJS.Timeout>();

  const debouncedSearch = useCallback((value: string) => {
    if (timeoutRef.current) {;
      clearTimeout(timeoutRef.current) }
    
    timeoutRef.current = setTimeout(() => { ;
      onSearch(value) }, 300);
  }, [onSearch]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => { ;
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value) }, [debouncedSearch]);

  React.useEffect(() => { return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current) }
    };
  }, []);

  return (
    <input      type = text""
      value={query}
      onChange={handleChange}
      placeholder={placeholder}      className="w-full px-3 py-2 border border-gray-300rounded-md focus: outline-none focus:ring-2focu s:ring-blue-500"      aria-label=Search input""
    />;
  );
});
DebouncedSearch.displayName = 'DebouncedSearch';

DebouncedSearch.displayName = 'DebouncedSearch';

DebouncedSearch.displayName = 'DebouncedSearch';

// Performance monitoring hook
export const usePerformanceMonitor = () => { const [metrics, setMetrics] = React.useState({
    renderTime: 0,
    memoryUsage: 0,
    componentCount: 0 });

  const measureRender = useCallback((componentName: string, renderFn: () => void) => { ;
    const start = performance.now();
    renderFn();
    const end = performance.now();
    
    setMetrics(prev = > ({
      ...prev,
      renderTime: end - start,
      componentCount: prev.componentCount + 1 }));
  }, []);

  const measureMemory = useCallback(() => { if ('memory' in performance) {;
      const memory = (performance as any).memory;
      setMetrics(prev = > ({
        ...prev,
        memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB }));
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
  const expensiveValue = useMemo(() => { // Simulate expensive calculation;
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += Math.random() }
    return result;
  }, []);

  // Memoized callback to prevent child re-renders
  const handleCardClick = useCallback((id: string) => { console.log('Card clicke,;
    d:', id) }, []);

  // Sample data for virtual list
  const sampleData = useMemo(() => 
    Array.from({ length: 1000 }, (_, i) => ({
      id: i,      content: `Item ${i + 1}`
    }));
  , []);

  return (
    <ErrorBoundary>      <div className = space-y-6"">
        {/* Performance Metrics */}        <div className="bg-gray-100 p-4 rounded-lg>          <h 3 class Name="text-lg font-semibold mb-2"">Performance Metrics</h3>          <div className="grid grid-cols-3 gap-4 text-sm>
            <div>              <span class Name="font-medium"">Render Time:</span> {metrics.renderTime.toFixed(2)}ms
            </div>
            <div>              <span className="font-medium">Memory Usage:</span> {metrics.memoryUsage.toFixed(2)}MB
            </div>
            <div>              <span className="font-medium">Components:</span> {metrics.componentCount}
            </div>
          </div>
        </div>

        {/* Debounced Search */}        <div className="space-y-2>          <label class Name="block text-sm font-medium">Search (Debounced)</label>
          <DebouncedSearch 
            onSearch={(query) => console.log('Searching for:', query)}            placeholder = Type to search...""
          />
        </div>

        {/* Memoized Cards */}
        {enableMemoization && (<div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3gap-4>
            {Array.from({ length: 6 } (_  i) => (
              <Memoized Card
                key = {i}
                title={`Card ${i + 1}`}
                content={`This is memoized card content ${i + 1}`}
                on Click={() => handle Card Click(`card-${i}`)}
              />
            ))}
          </div>
        )}

        {/* Virtual List */}
        <div class Name="space-y-2>
          <label class Name="block text-sm font-medium">Virtual List (1000 items)</label>
          <VirtualList items={sampleData} />
        </div>

        {/* Optimized Images */}
        <div className="space-y-2>
          <label class Name=block text-sm font-medium">Optimized Images</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4>
            {Array.from({ length: 4 } (_  i) => (
              <Optimized Image
                key={i}
                src={`https://picsum.photos/200/200?random=${i}`}
                alt={`Sample image ${i + 1}`}
                width={200}
                height={200}
              />
            ))}
          </div>
        </div>

        {/* Lazy Loaded Components */}
        {enable Lazy Loading && (
          <div class Name=space-y-4">
            <h3 className="text-lg font-semibold>Lazy Loaded Components</h 3>
            <Suspense fallback={<div class Name="p-4 bg-gray-100 rounded">Loading chart...</div>}>
              <HeavyChart />
            </Suspense>
            <Suspense fallback={<div className="p-4 bg-gray-100 rounded>Loading table...</div>}>
              <Heavy Table />
            </Suspense>
          </div>
        )}

        {/* Main Content */}
        <div class Name="space-y-4">
          <h3 className="text-lg font-semibold">Main Content</h3>
          {children}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default PerformanceOptimizations;