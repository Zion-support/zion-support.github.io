// Performance optimization utilities
import React from 'react';

// Debounce function
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number,
  immediate = false
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };

    const callNow = immediate && !timeout;
    
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    
    if (callNow) func(...args);
  };
};

// Throttle function
export const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Memoization utility
export const memoize = <T extends (...args: unknown[]) => unknown>(
  func: T
): T => {
  const cache = new Map<string, ReturnType<T>>();

  return ((...args: Parameters<T>) => {
    const key = JSON.stringify(args);
    
    if (cache.has(key)) {
      return cache.get(key);
    }
    
    const result = func(...args);
    cache.set(key, result);
    return result;
  }) as T;
};

// Image lazy loading hook
export const useLazyImage = (src: string, placeholder?: string) => {
  const [imageSrc, setImageSrc] = React.useState(placeholder || '');
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
    img.src = src;
  }, [src]);

  return { imageSrc, isLoaded };
};

// Intersection Observer hook
export const useIntersectionObserver = (
  ref: React.RefObject<HTMLElement>,
  options: IntersectionObserverInit = {}
) => {
  const [isIntersecting, setIsIntersecting] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      options
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return isIntersecting;
};

// Performance monitoring hook
export const usePerformanceMonitor = (componentName: string) => {
  React.useEffect(() => {
    const startTime = performance.now();
    
    return () => {
      const endTime = performance.now();
      const duration = endTime - startTime;
      
      console.log(`${componentName} render time: ${duration.toFixed(2)}ms`);
    };
  }, [componentName]);
};

// Bundle size optimization
export const preloadComponent = (importFunc: () => Promise<{ default: React.ComponentType }>) => {
  return () => {
    const [Component, setComponent] = React.useState<React.ComponentType | null>(null);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
      importFunc().then((module) => {
        setComponent(() => module.default);
        setIsLoading(false);
      });
    }, []);

    if (isLoading) {
      return React.createElement('div', null, 'Loading...');
    }

    return Component ? React.createElement(Component) : null;
  };
};

// Memory optimization
export const useMemoryOptimization = () => {
  React.useEffect(() => {
    // Force garbage collection if available
    if ('gc' in window && typeof (window as unknown as { gc: () => void }).gc === 'function') {
      (window as unknown as { gc: () => void }).gc();
    }
  }, []);
};

// Resource hints hook
export const usePreloadResource = (href: string, as: string) => {
  React.useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [href, as]);
};

// Virtual scrolling hook
export const useVirtualScrolling = (
  itemCount: number,
  itemHeight: number,
  containerHeight: number
) => {
  const [scrollTop, setScrollTop] = React.useState(0);
  
  const visibleStart = Math.floor(scrollTop / itemHeight);
  const visibleEnd = Math.min(
    itemCount - 1,
    Math.floor((scrollTop + containerHeight) / itemHeight)
  );
  
  const visibleItems = [];
  for (let i = visibleStart; i <= visibleEnd; i++) {
    visibleItems.push(i);
  }
  
  const totalHeight = itemCount * itemHeight;
  const offsetY = visibleStart * itemHeight;
  
  return {
    visibleItems,
    totalHeight,
    offsetY,
    setScrollTop
  };
};