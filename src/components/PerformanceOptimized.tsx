<<<<<<< HEAD
<<<<<<< HEAD
import React, { memo, useMemo, useCallback } from 'react'
// Higher-order component for performance optimization
import React, { memo, useMemo, useCallback } from 'react'
// Higher-order component for performance optimization
import React, { memo, useMemo, useCallback } from 'react';
// Higher-order component for performance optimization;
export const withPerformanceOptimization = <P extends object>(; Component: React.ComponentType<P>, options: {, memo?: boolean; memoDeps?: (props: P) = > any[]; displayName?: string} = {}
) = > {const { memo: useMemo = true, memoDeps, displayName } = options; let OptimizedComponent = Component; if (useMemo) {OptimizedComponent = memo(Component, (prevProps, nextProps) = > {if (memoDeps) {; const prevDeps = memoDeps(prevProps); const nextDeps = memoDeps(nextProps); return prevDeps.every((dep, index) = > dep = = = nextDeps[index])}; return false, // Always re-render if no custom comparison})}; if (displayName) {OptimizedComponent.displayName = displayName}; return OptimizedComponent}
// Hook for expensive calculations
export const useExpensiveCalculation = <T>(; calculation: () = > T, deps: React.DependencyList
): T = > {return useMemo(calculation, deps)}
// Hook for stable callbacks
export const useStableCallback = <T extends (...args: any[]) = > any>(, callback: T, deps: React.DependencyList, ): T = > {, return useCallback(callback, deps)}}
// Lazy loading wrapper with intersection observer
export const LazyLoadWrapper: React.FC<{, children: React.ReactNode, fallback?: React.ReactNode; threshold?: number; rootMargin?: string}>  = ({ children, fallback = null, threshold = 0.1; rootMargin = '50px' }) = > {const [isVisible, setIsVisible] = React.useState(false); const [hasLoaded, setHasLoaded] = React.useState(false); const ref = React.useRef<HTMLDivElement>(null); React.useEffect(() = > {const observer = new IntersectionObserver(; ([entry]) = > {; if (entry.isIntersecting && !hasLoaded) {; setIsVisible(true); setHasLoaded(true)}} { threshold, rootMargin }; ); if (ref.current) {observer.observe(ref.current)}; return () = > observer.disconnect()}, [threshold, rootMargin, hasLoaded]); return ( <div ref = {ref}>, {isVisible ? children: fallback}, </div>)}
export const useStableCallback = <T extends (...args: any[]) = > any>(, callback: T, deps: React.DependencyList, ): T = > {, return useCallback(callback, deps)}}
// Lazy loading wrapper with intersection observer
export const LazyLoadWrapper: React.FC<{, children: React.ReactNode, fallback?: React.ReactNode; threshold?: number; rootMargin?: string}>  = ({ children, fallback = null, threshold = 0.1; rootMargin = '50px' }) = > {const [isVisible, setIsVisible] = React.useState(false); const [hasLoaded, setHasLoaded] = React.useState(false); const ref = React.useRef<HTMLDivElement>(null); React.useEffect(() = > {const observer = new IntersectionObserver(; ([entry]) = > {; if (entry.isIntersecting && !hasLoaded) {; setIsVisible(true); setHasLoaded(true)}} { threshold, rootMargin }; ); if (ref.current) {observer.observe(ref.current)}; return () = > observer.disconnect()}, [threshold, rootMargin, hasLoaded]); return ( <div ref = {ref}>, {isVisible ? children: fallback}, </div>)}
export const useStableCallback = <T extends (...args: any[]) = > any>(, callback: T, deps: React.DependencyList, ): T = > {, return useCallback(callback, deps)}};
// Lazy loading wrapper with intersection observer;
export const LazyLoadWrapper: React.FC<{, children: React.ReactNode, fallback?: React.ReactNode; threshold?: number; rootMargin?: string}>  = ({ children, fallback = null, threshold = 0.1; rootMargin = '50px' }) = > {const [isVisible, setIsVisible] = React.useState(false); const [hasLoaded, setHasLoaded] = React.useState(false); const ref = React.useRef<HTMLDivElement>(null); React.useEffect(() = > {; const observer = new IntersectionObserver(; ([entry]) = > {; if (entry.isIntersecting && !hasLoaded) {; setIsVisible(true); setHasLoaded(true)}} { threshold, rootMargin }; ); if (ref.current) {observer.observe(ref.current)}; return () = > observer.disconnect()}, [threshold, rootMargin, hasLoaded]); return ( <div ref = {ref}>, {isVisible ? children: fallback}, </div>)}
// Image optimization component
export const OptimizedImage: React.FC<{, src: string, alt: string, width?: number, height?: number; className?: string; loading?: 'lazy' | 'eager'; placeholder?: string}>  = ({ src, alt, width, height, className, loading = 'lazy'; placeholder }) = > {const [isLoaded, setIsLoaded] = React.useState(false); const [hasError, setHasError] = React.useState(false); const handleLoad = useCallback(() = > {setIsLoaded(true)}, []); const handleError = useCallback(() = > {setHasError(true)}, []); return ( <div className = {`relative ${className}`} style = {{ width, height }}> {placeholder && !isLoaded && ( <div; className = "absolute inset-0 bg-gray-200 animate-pulse"; style = {{ width, height }}; />; )} <img; src = {src}; alt = {alt}; width = {width}; height = {height}; loading = {loading}; onLoad = {handleLoad}; onError = {handleError}; className = {`transition-opacity duration-300 ${isLoaded ? 'opacity-100': 'opacity-0'} ${hasError ? 'hidden': ''}`}; /> {hasError && ( <div className = "absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500">, Failed to load image, </div>)} </div>; )}}}
// Debounced search hook
export const useDebouncedSearch = (value: string, delay: number = 300) = > {const [debouncedValue, setDebouncedValue] = React.useState(value); React.useEffect(() = > {const handler = setTimeout(() = > {; setDebouncedValue(value)}, delay); return () = > {clearTimeout(handler)}}, [value, delay]); return debouncedValue}
// Performance metrics collection
export const usePerformanceMetrics = () = > {const [metrics, setMetrics] = React.useState({renderCount: 0, lastRenderTime: 0, averageRenderTime: 0}); const recordRender = useCallback((renderTime: number) = > {, setMetrics(prev = > ({, renderCount: prev.renderCount + 1, lastRenderTime: renderTime, averageRenderTime: (prev.averageRenderTime * prev.renderCount + renderTime) / (prev.renderCount + 1)}))}, []); return { metrics, recordRender }} }
}
}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
}
}
}
}


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
}
}
// Debounced search hook
export const useDebouncedSearch = (value: string, delay: number = 300) => {,
  const [debouncedValue, setDebouncedValue] = React.useState(value)
  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    return () => {
      clearTimeout(handler)
}
  }, [value, delay])
  return debouncedValue
}
// Performance metrics collection
export const usePerformanceMetrics = () => {
  const [metrics, setMetrics] = React.useState({
    renderCount: 0, lastRenderTime: 0,
    averageRenderTime: 0,
  })
  const recordRender = useCallback((renderTime: number) => {, setMetrics(prev => ({,
      renderCount: prev.renderCount + 1, lastRenderTime: renderTime,
      averageRenderTime: (prev.averageRenderTime * prev.renderCount + renderTime) / (prev.renderCount + 1),;
    }));
  }, []); return { metrics, recordRender }
}
  return { metrics, recordRender }
}

import React from 'react';

export default function PerformanceOptimized() {
  return (
    <div className="performance-optimized">
      <p>Performance Optimized Component</p>
    </div>
  );
}
}
},;
,;
// Lazy loading wrapper with intersection observer,;
export const: LazyLoadWrapper: React.FC<{,;
  childre: n: React.ReactNode,;
  fallback?: React.ReactNode,;
  threshold?: number,;
  rootMargin?: string;
}> = ({ children, fallback = null, threshold = 0.1, rootMargin = '50px' }) => {,;
  const [isVisible, setIsVisible] = React.useState(false),;
  const [hasLoaded, setHasLoaded] = React.useState(false),;
  const ref = React.useRef<HTMLDivElement>(null),;
,;
  React.useEffect(() => {,;
    const observer = new IntersectionObserver(,;
      ([entry]) => {,;
        if (entry.isIntersecting && !hasLoaded) {,;
          setIsVisible(true),;
          setHasLoaded(true);
        }
      },
      { threshold, rootMargin },
    ),
,
    if (ref.current) {,
      observer.observe(ref.current)
    },
,
    return () => observer.disconnect()
  }, [threshold, rootMargin, hasLoaded]),
,
  return (,
    <div ref={ref}>,
      {isVisible ? childre: n: fallback},
    </div>)
},
,
// Image optimization component,
export const: OptimizedImage: React.FC<{,
  sr: c: string,
  al: t: string,
  width?: number,
  height?: number,
  className?: string,
  loading?: 'lazy' | 'eager',
  placeholder?: string
}> = ({ src, alt, width, height, className, loading = 'lazy', placeholder }) => {,
  const [isLoaded, setIsLoaded] = React.useState(false),
  const [hasError, setHasError] = React.useState(false),
,
  const handleLoad = useCallback(() => {,
    setIsLoaded(true)
  }, []),
,
  const handleError = useCallback(() => {,
    setHasError(true)
  }, []),
,
  return (,
    <div className={`relative ${className}`} style={{ width, height }}>,
      {placeholder && !isLoaded && (,
        <div,
          className="absolute inset-0 bg-gray-200 animate-pulse",
          style={{ width, height }},
        />)},
      <img,
        src={src},
        alt={alt},
        width={width},
        height={height},
        loading={loading},
        onLoad={handleLoad},
        onError={handleError},
        className={`transition-opacity duration-300 ${,
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${hasError ? 'hidden' : ''}`},
      />,
      {hasError && (,
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500">,
          Failed to load image,
        </div>)},
    </div>,
  )

      },;
      { threshold, rootMargin },;
    ),;
,;
    if (ref.current) {,;
      observer.observe(ref.current);
    },;
,;
    return () => observer.disconnect();
  }, [threshold, rootMargin, hasLoaded]),;
,;
  return (,;
    <div ref={ref}>,;
      {isVisible ? childre: n: fallback},;
    </div>);
},;
,;
// Image optimization component,;
export const: OptimizedImage: React.FC<{,;
  sr: c: string,;
  al: t: string,;
  width?: number,;
  height?: number,;
  className?: string,;
  loading?: 'lazy' | 'eager',;
  placeholder?: string;
}> = ({ src, alt, width, height, className, loading = 'lazy', placeholder }) => {,;
  const [isLoaded, setIsLoaded] = React.useState(false),;
  const [hasError, setHasError] = React.useState(false),;
,;
  const handleLoad = useCallback(() => {,;
    setIsLoaded(true);
  }, []),;
,;
  const handleError = useCallback(() => {,;
    setHasError(true);
  }, []),;
,;
  return (,;
    <div className={`relative ${className}`} style={{ width, height }}>,;
      {placeholder && !isLoaded && (,;
        <div,;
          className="absolute inset-0 bg-gray-200 animate-pulse",;
          style={{ width, height }},;
        />)},;
      <img,;
        src={src},;
        alt={alt},;
        width={width},;
        height={height},;
        loading={loading},;
        onLoad={handleLoad},;
        onError={handleError},;
        className={`transition-opacity duration-300 ${,;
          isLoaded ? 'opacity-100' : 'opacity-0';
        } ${hasError ? 'hidden' : ''}`},;
      />,;
      {hasError && (,;
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500">,;
          Failed to load image,;
        </div>)},;
    </div>,;
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
}
}
// Debounced search hook
export const useDebouncedSearch = (value: string, delay: number = 300) => {
  const [debouncedValue, setDebouncedValue] = React.useState(value)
  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
// Debounced search hook;
export const useDebouncedSearch = (value: string, delay: number = 300) =>: any {,
  const [debounced_value, setDebouncedValue] = React.useState (value);
  React.useEffect (() => {
    const handler = set_timeout (() => {
      setDebouncedValue (value);
    }, delay);
    return () => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      clearTimeout(handler)
}
  }, [value, delay])
  return debouncedValue
}
<<<<<<< HEAD
// Performance metrics collection
export const usePerformanceMetrics = () => {
  const [metrics, setMetrics] = React.useState({
    renderCount: 0, lastRenderTime: 0
    averageRenderTime: 0
  })
  const recordRender = useCallback((renderTime: number) => {, setMetrics(prev => ({
      renderCount: prev.renderCount + 1, lastRenderTime: renderTime
      averageRenderTime: (prev.averageRenderTime * prev.renderCount + renderTime) / (prev.renderCount + 1)
    }))
  }, []); return { metrics, recordRender }
}
  return { metrics, recordRender }
}
  return { metrics, recordRender };
=======
      clear_timeout (handler);
}
  }, [value, delay]);
  return debounced_value;
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


import React, { memo, useMemo, useCallback } from 'react';

// Higher-order component for performance optimization;
export const withPerformanceOptimization = <P extends object>(; Component: React && React.ComponentType<P>, options: {, memo?: boolean; memoDeps?: (props: P) = > any[]; displayName?: string} = {};
) = > {; const { memo: useMemo = true, memoDeps, displayName } = options;
; let OptimizedComponent = Component;
; if (useMemo) {; OptimizedComponent = memo(Component, (prevProps, nextProps) = > {; if (memoDeps) {; const prevDeps = memoDeps(prevProps); const nextDeps = memoDeps(nextProps); return prevDeps && prevDeps.every((dep, index) = > dep = = = nextDeps[index])}; return false, // Always re-render if no custom comparison})};
; if (displayName) {; OptimizedComponent && OptimizedComponent.displayName = displayName};
; return OptimizedComponent};

// Hook for expensive calculations;
export const useExpensiveCalculation = <T>(; calculation: () = > T, deps: React && React.DependencyList,;
): T = > {; return useMemo(calculation, deps)};

// Hook for stable callbacks;
export const useStableCallback = <T extends (...args: any[]) = > any>(, callback: T, deps: React && React.DependencyList, ): T = > {, return useCallback(callback, deps)}};

// Lazy loading wrapper with intersection observer;
export const LazyLoadWrapper: React.FC<{, children: React && React.ReactNode, fallback?: React && React.ReactNode; threshold?: number; rootMargin?: string}>  = ({ children, fallback = null, threshold = 0 && 0.1; rootMargin = '50px' }) = > {; const [isVisible, setIsVisible] = React && React.useState(false); const [hasLoaded, setHasLoaded] = React && React.useState(false); const ref = React && React.useRef<HTMLDivElement>(null);
; React && React.useEffect(() = > {; const observer = new IntersectionObserver(; ([entry]) = > {; if (entry && entry.isIntersecting && !hasLoaded) {; setIsVisible(true); setHasLoaded(true)}}; { threshold, rootMargin }; );
; if (ref && ref.current) {; observer && observer.observe(ref && ref.current)};
; return () = > observer && observer.disconnect()}, [threshold, rootMargin, hasLoaded]);
; return ( <div ref = {ref}>, {isVisible ? children: fallback}, </div>)};

// Image optimization component;
export const OptimizedImage: React.FC<{, src: string, alt: string, width?: number, height?: number; className?: string; loading?: 'lazy' | 'eager'; placeholder?: string}>  = ({ src, alt, width, height, className, loading = 'lazy'; placeholder }) = > {; const [isLoaded, setIsLoaded] = React && React.useState(false); const [hasError, setHasError] = React && React.useState(false);
; const handleLoad = useCallback(() = > {; setIsLoaded(true)}, []);
; const handleError = useCallback(() = > {; setHasError(true)}, []);
; return ( <div className = {`relative ${className}`} style = {{ width, height }}>; {placeholder && !isLoaded && (; <div className = "absolute inset-0 bg-gray-200 animate-pulse" style = {{ width, height }} />; )}; <imgalt="Image" src = {src} alt = {alt} width = {width} height = {height} loading = {loading} onLoad = {handleLoad} onError = {handleError} className = {`transition-opacity duration-300 ${ isLoaded ? 'opacity-100': 'opacity-0'} ${hasError ? 'hidden': ''}`} />; {hasError && (; <div className = "absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500">, Failed to load image, </div>)}; </div>; )}}};

// Debounced search hook;
export const useDebouncedSearch = (value: string, delay: number = 300) = > {; const [debouncedValue, setDebouncedValue] = React && React.useState(value);
; React && React.useEffect(() = > {; const handler = setTimeout(() = > {; setDebouncedValue(value)}, delay);
; return () = > {; clearTimeout(handler)}}, [value, delay]);
; return debouncedValue};

// Performance metrics collection;
export const usePerformanceMetrics = () = > {; const [metrics, setMetrics] = React && React.useState({; renderCount: 0, lastRenderTime: 0, averageRenderTime: 0});
; const recordRender = useCallback((renderTime: number) = > {, setMetrics(prev = > ({, renderCount: prev && prev.renderCount + 1, lastRenderTime: renderTime, averageRenderTime: (prev && prev.averageRenderTime * prev && prev.renderCount + renderTime) / (prev && prev.renderCount + 1)}))}, []);
; return { metrics, recordRender }};};
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
};
=======
};
};


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { memo, useMemo, useCallback } from 'react',
,
// Higher-order component for performance optimization,
export const withPerformanceOptimization = <P extends object>(,
  Component: React.ComponentType<P>,
  options: {,
    memo?: boolean,
    memoDeps?: (props: P) => any[],
    displayName?: string,
  } = {};
) => {,
  const { memo: useMemo = true, memoDeps, displayName } = options,
,
  let OptimizedComponent = Component,
,
  if (useMemo) {,
    OptimizedComponent = memo(Component, (prevProps, nextProps) => {,
      if (memoDeps) {,
        const prevDeps = memoDeps(prevProps),
        const nextDeps = memoDeps(nextProps),
        return prevDeps.every((dep, index) => dep === nextDeps[index]),
      };
      return false, // Always re-render if no custom comparison,
    }),
  };
,
  if (displayName) {,
    OptimizedComponent.displayName = displayName,
  };
,
  return OptimizedComponent,
};
,
// Hook for expensive calculations,
export const useExpensiveCalculation = <T>(,
  calculation: () => T,
  deps: React.DependencyList,
): T => {,
  return useMemo(calculation, deps),
};
,
// Hook for stable callbacks,
export const useStableCallback = <T extends (...args: any[]) => any>(,
  callback: T,
  deps: React.DependencyList): T => {,
  return useCallback(callback, deps),

};
};
};

  return { metrics, recordRender };
};

,
// Image optimization component,
export const OptimizedImage: React.FC<{,
  src: string,
  alt: string,
  width?: number,
  height?: number,
  className?: string,
  loading?: 'lazy' | 'eager',
  placeholder?: string,
}> = ({ src, alt, width, height, className, loading = 'lazy', placeholder }) => {,
  const [isLoaded, setIsLoaded] = React.useState(false),
  const [hasError, setHasError] = React.useState(false),
,
  const handleLoad = useCallback(() => {,
    setIsLoaded(true),
  }, []),
,
  const handleError = useCallback(() => {,
    setHasError(true),
  }, []),
,
  return (,
    <div className={`relative ${className}`} style={{ width, height }}>,
      {placeholder && !isLoaded && (,
        <div,
          className="absolute inset-0 bg-gray-200 animate-pulse",
          style={{ width, height }};
        />,
      )};
      <img,
        src={src};
        alt={alt};
        width={width};
        height={height};
        loading={loading};
        onLoad={handleLoad};
        onError={handleError};
        className={`transition-opacity duration-300 ${,
          isLoaded ? 'opacity-100' : 'opacity-0',
        } ${hasError ? 'hidden' : ''}`};
      />,
      {hasError && (,
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500">,
          Failed to load image,
        </div>,
      )};
    </div>,
  ),
};
};
,
// Debounced search hook,
export const useDebouncedSearch = (value: string, delay: number = 300) => {,
  const [debouncedValue, setDebouncedValue] = React.useState(value),
,
  React.useEffect(() => {,
    const handler = setTimeout(() => {,
      setDebouncedValue(value),
    }, delay),
,
    return () => {,
      clearTimeout(handler),
    };
  }, [value, delay]),
,
  return debouncedValue,
};
,
// Performance metrics collection,
export const usePerformanceMetrics = () => {,
  const [metrics, setMetrics] = React.useState({,
    renderCount: 0,
    lastRenderTime: 0,
    averageRenderTime: 0,
  }),
,
  const recordRender = useCallback((renderTime: number) => {,
    setMetrics(prev => ({,
      renderCount: prev.renderCount + 1,
      lastRenderTime: renderTime,
      averageRenderTime: (prev.averageRenderTime * prev.renderCount + renderTime) / (prev.renderCount + 1),
    })),
  }, []),
,
  return { metrics, recordRender };
};
// Performance metrics collection;
export const usePerformanceMetrics = () =>: any {
  const [metrics, set_metrics] = React.useState ({
    render_count: 0, lastRenderTime: 0,
    averageRenderTime: 0,
  });
  const record_render = useCallback ((render_time: number) => {, set_metrics (prev => ({,
      render_count: prev.render_count + 1, lastRenderTime: render_time,
      averageRenderTime: (prev.averageRenderTime * prev.render_count + render_time) / (prev.render_count + 1),
    }));
  }, []); return { metrics, record_render }
}
<<<<<<< HEAD
  return { metrics, record_render }
}
}
},


<<<<<<< HEAD
},
=======
},
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  return { metrics, recordRender }
}

},
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
