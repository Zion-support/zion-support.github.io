// Performance utilities for optimizing React components and application performance

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = <T extends (...args: any[]) => any>(
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

export const memoize = <T extends (...args: any[]) => any>(
  func: T
): T => {
  const cache = new Map();
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

export const createLazyComponent = <T extends React.ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>
): React.LazyExoticComponent<T> => {
  return React.lazy(importFunc);
};

export const measurePerformance = (name: string, fn: () => void): void => {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${name} took ${end - start} milliseconds`);
};

export const createPerformanceObserver = (
  callback: (entries: PerformanceEntry[]) => void
): PerformanceObserver | null => {
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver(callback);
    observer.observe({ entryTypes: ['measure', 'navigation', 'resource'] });
    return observer;
  }
  return null;
};

export const measureComponentRender = (
  componentName: string,
  renderFn: () => void
): void => {
  const start = performance.now();
  renderFn();
  const end = performance.now();
  
  if (end - start > 16) { // More than one frame at 60fps
    console.warn(`${componentName} render took ${end - start}ms, consider optimizing`);
  }
};

export const createVirtualizedList = <T>(
  items: T[],
  itemHeight: number,
  containerHeight: number,
  renderItem: (item: T, index: number) => React.ReactNode
): {
  visibleItems: T[];
  startIndex: number;
  endIndex: number;
  totalHeight: number;
} => {
  const visibleCount = Math.ceil(containerHeight / itemHeight);
  const totalHeight = items.length * itemHeight;
  
  return {
    visibleItems: items.slice(0, visibleCount),
    startIndex: 0,
    endIndex: visibleCount - 1,
    totalHeight
  };
};

export const optimizeImages = (images: HTMLImageElement[]): void => {
  images.forEach(img => {
    if (!img.complete) {
      img.loading = 'lazy';
    }
  });
};

export const preloadCriticalResources = (urls: string[]): void => {
  urls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = url;
    link.as = url.endsWith('.css') ? 'style' : 'script';
    document.head.appendChild(link);
  });
};

export const createIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options?: IntersectionObserverInit
): IntersectionObserver | null => {
  if ('IntersectionObserver' in window) {
    return new IntersectionObserver(callback, options);
  }
  return null;
};

export const createResizeObserver = (
  callback: (entries: ResizeObserverEntry[]) => void
): ResizeObserver | null => {
  if ('ResizeObserver' in window) {
    return new ResizeObserver(callback);
  }
  return null;
};

export const createMutationObserver = (
  callback: (mutations: MutationRecord[]) => void,
  options?: MutationObserverInit
): MutationObserver | null => {
  if ('MutationObserver' in window) {
    return new MutationObserver(callback);
  }
  return null;
};

export const batchUpdates = (updates: (() => void)[]): void => {
  // Use React's batching if available, otherwise batch manually
  if (typeof React !== 'undefined' && React.unstable_batchedUpdates) {
    React.unstable_batchedUpdates(() => {
      updates.forEach(update => update());
    });
  } else {
    updates.forEach(update => update());
  }
};

export const createScheduler = (): {
  schedule: (fn: () => void, priority?: 'high' | 'normal' | 'low') => void;
  cancel: (id: number) => void;
} => {
  const tasks = new Map<number, () => void>();
  let nextId = 0;

  const schedule = (fn: () => void, priority: 'high' | 'normal' | 'low' = 'normal'): number => {
    const id = nextId++;
    const delay = priority === 'high' ? 0 : priority === 'normal' ? 1 : 5;
    
    const timeoutId = setTimeout(() => {
      fn();
      tasks.delete(id);
    }, delay);
    
    tasks.set(id, fn);
    return id;
  };

  const cancel = (id: number): void => {
    tasks.delete(id);
  };

  return { schedule, cancel };
};

export const createPerformanceMonitor = (): {
  start: (name: string) => void;
  end: (name: string) => void;
  getMetrics: () => Record<string, number>;
  clear: () => void;
} => {
  const metrics: Record<string, number> = {};
  const startTimes: Record<string, number> = {};

  const start = (name: string): void => {
    startTimes[name] = performance.now();
  };

  const end = (name: string): void => {
    if (startTimes[name]) {
      metrics[name] = performance.now() - startTimes[name];
      delete startTimes[name];
    }
  };

  const getMetrics = (): Record<string, number> => {
    return { ...metrics };
  };

  const clear = (): void => {
    Object.keys(metrics).forEach(key => delete metrics[key]);
    Object.keys(startTimes).forEach(key => delete startTimes[key]);
  };

  return { start, end, getMetrics, clear };
};

export const createResourcePreloader = (): {
  preload: (url: string, type?: string) => Promise<void>;
  preloadBatch: (urls: string[], type?: string) => Promise<void>;
} => {
  const preload = (url: string, type: string = 'script'): Promise<void> => {
    return new Promise((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = url;
      link.as = type;
      
      link.onload = () => resolve();
      link.onerror = () => reject(new Error(`Failed to preload ${url}`));
      
      document.head.appendChild(link);
    });
  };

  const preloadBatch = async (urls: string[], type: string = 'script'): Promise<void> => {
    await Promise.all(urls.map(url => preload(url, type)));
  };

  return { preload, preloadBatch };
};

export const createMemoryMonitor = (): {
  getMemoryUsage: () => MemoryInfo | null;
  isMemoryLow: () => boolean;
  getMemoryPressure: () => 'low' | 'medium' | 'high';
} => {
  const getMemoryUsage = (): MemoryInfo | null => {
    if ('memory' in performance) {
      return (performance as any).memory;
    }
    return null;
  };

  const isMemoryLow = (): boolean => {
    const memory = getMemoryUsage();
    if (!memory) return false;
    
    const usedRatio = memory.usedJSHeapSize / memory.totalJSHeapSize;
    return usedRatio > 0.8;
  };

  const getMemoryPressure = (): 'low' | 'medium' | 'high' => {
    const memory = getMemoryUsage();
    if (!memory) return 'low';
    
    const usedRatio = memory.usedJSHeapSize / memory.totalJSHeapSize;
    
    if (usedRatio < 0.5) return 'low';
    if (usedRatio < 0.8) return 'medium';
    return 'high';
  };

  return { getMemoryUsage, isMemoryLow, getMemoryPressure };
};

export const createNetworkMonitor = (): {
  getConnectionInfo: () => NetworkInformation | null;
  isSlowConnection: () => boolean;
  getConnectionType: () => string;
} => {
  const getConnectionInfo = (): NetworkInformation | null => {
    if ('connection' in navigator) {
      return (navigator as any).connection;
    }
    return null;
  };

  const isSlowConnection = (): boolean => {
    const connection = getConnectionInfo();
    if (!connection) return false;
    
    return connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g';
  };

  const getConnectionType = (): string => {
    const connection = getConnectionInfo();
    return connection?.effectiveType || 'unknown';
  };

  return { getConnectionInfo, isSlowConnection, getConnectionType };
};

export const createBundleAnalyzer = (): {
  analyzeBundle: () => Promise<BundleAnalysis>;
  getBundleSize: () => number;
  getChunkSizes: () => Record<string, number>;
} => {
  const analyzeBundle = async (): Promise<BundleAnalysis> => {
    // This would typically integrate with a bundle analyzer
    return {
      totalSize: 0,
      chunks: {},
      modules: {},
      assets: {}
    };
  };

  const getBundleSize = (): number => {
    return 0; // Placeholder
  };

  const getChunkSizes = (): Record<string, number> => {
    return {}; // Placeholder
  };

  return { analyzeBundle, getBundleSize, getChunkSizes };
};

interface BundleAnalysis {
  totalSize: number;
  chunks: Record<string, number>;
  modules: Record<string, number>;
  assets: Record<string, number>;
}

interface MemoryInfo {
  usedJSHeapSize: number;
  totalJSHeapSize: number;
  jsHeapSizeLimit: number;
}

interface NetworkInformation {
  effectiveType: string;
  downlink: number;
  rtt: number;
  saveData: boolean;
}

// React import for TypeScript
import React from 'react';