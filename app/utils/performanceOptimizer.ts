// Performance optimization utilities
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

export const batchUpdates = (updates: (() => void)[]): void => {
  // Use React's batching if available
  if (typeof window !== 'undefined' && 'React' in window) {
    const React = (window as unknown as { React: { unstable_batchedUpdates?: (fn: () => void) => void } }).React;
    if (React && React.unstable_batchedUpdates) {
      React.unstable_batchedUpdates(() => {
        updates.forEach(update => update());
      });
    } else {
      updates.forEach(update => update());
    }
  } else {
    updates.forEach(update => update());
  }
};

export const createVirtualScroller = (
  itemHeight: number,
  containerHeight: number,
  itemCount: number
) => {
  let scrollTop = 0;
  
  const getVisibleRange = () => {
    const start = Math.floor(scrollTop / itemHeight);
    const end = Math.min(
      itemCount - 1,
      Math.floor((scrollTop + containerHeight) / itemHeight)
    );
    return { start, end };
  };
  
  const getTotalHeight = () => itemCount * itemHeight;
  
  const getOffsetY = () => {
    const { start } = getVisibleRange();
    return start * itemHeight;
  };
  
  const updateScrollTop = (newScrollTop: number) => {
    scrollTop = newScrollTop;
  };
  
  return {
    getVisibleRange,
    getTotalHeight,
    getOffsetY,
    updateScrollTop
  };
};

export const optimizeImages = (images: HTMLImageElement[]): void => {
  images.forEach(img => {
    // Add loading="lazy" if not already present
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
    
    // Add decoding="async" if not already present
    if (!img.hasAttribute('decoding')) {
      img.setAttribute('decoding', 'async');
    }
  });
};

export const preloadCriticalResources = (urls: string[]): void => {
  urls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = url;
    link.as = 'fetch';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

export const createIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options?: IntersectionObserverInit
): IntersectionObserver | null => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }
  
  return new IntersectionObserver(callback, options);
};

export const measurePerformance = <T>(name: string, fn: () => T): T => {
  const startTime = performance.now();
  const result = fn();
  const endTime = performance.now();
  
  console.log(`${name} took ${endTime - startTime} milliseconds`);
  return result;
};

export const measureAsyncPerformance = async <T>(name: string, fn: () => Promise<T>): Promise<T> => {
  const startTime = performance.now();
  const result = await fn();
  const endTime = performance.now();
  
  console.log(`${name} took ${endTime - startTime} milliseconds`);
  return result;
};