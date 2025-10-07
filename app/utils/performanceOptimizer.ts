/**
 * Performance Optimization Utilities
 * Provides utilities for optimizing application performance
 */

/**
 * Debounce function to limit the rate of function calls
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function to ensure a function is called at most once in a specified time period
 */
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

/**
 * Memoize function to cache results of expensive function calls
 */
export function memoize<T extends (...args: unknown[]) => unknown>(
  func: T
): T {
  const cache = new Map<string, ReturnType<T>>();

  return ((...args: Parameters<T>) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = func(...args);
    cache.set(key, result as ReturnType<T>);
    return result;
  }) as T;
}

/**
 * Lazy load images with Intersection Observer
 */
export function lazyLoadImages(selector: string = 'img[data-src]'): void {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return;
  }

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        const src = img.getAttribute('data-src');
        if (src) {
          img.src = src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      }
    });
  });

  document.querySelectorAll(selector).forEach((img) => {
    imageObserver.observe(img);
  });
}

/**
 * Preload critical resources
 */
export function preloadResource(
  href: string,
  as: 'script' | 'style' | 'font' | 'image'
): void {
  if (typeof document === 'undefined') return;

  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;

  if (as === 'font') {
    link.crossOrigin = 'anonymous';
  }

  document.head.appendChild(link);
}

/**
 * Optimize images for web
 */
export function getOptimizedImageUrl(
  url: string,
  width?: number,
  quality: number = 80
): string {
  if (!url) return '';

  const params = new URLSearchParams();
  if (width) params.append('w', width.toString());
  params.append('q', quality.toString());
  params.append('fm', 'webp');

  return `${url}?${params.toString()}`;
}

/**
 * Measure function execution time
 */
export function measurePerformance<T extends (...args: unknown[]) => unknown>(
  func: T,
  label?: string
): T {
  return ((...args: Parameters<T>) => {
    const start = performance.now();
    const result = func(...args);
    const end = performance.now();
    const duration = end - start;

    if (label) {
      console.log(`${label}: ${duration.toFixed(2)}ms`);
    }

    return result;
  }) as T;
}

/**
 * Request idle callback wrapper with fallback
 */
export function requestIdleCallback(
  callback: IdleRequestCallback,
  options?: IdleRequestOptions
): number {
  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    return window.requestIdleCallback(callback, options);
  }
  // Fallback for browsers that don't support requestIdleCallback
  return setTimeout(() => {
    const start = Date.now();
    callback({
      didTimeout: false,
      timeRemaining: () => Math.max(0, 50 - (Date.now() - start)),
    });
  }, 1) as unknown as number;
}

/**
 * Cancel idle callback wrapper
 */
export function cancelIdleCallback(id: number): void {
  if (typeof window !== 'undefined' && 'cancelIdleCallback' in window) {
    window.cancelIdleCallback(id);
  } else {
    clearTimeout(id);
  }
}

/**
 * Batch DOM updates to minimize reflows
 */
export function batchDOMUpdates(updates: () => void): void {
  if (typeof window === 'undefined') return;

  requestAnimationFrame(() => {
    updates();
  });
}

/**
 * Get optimal chunk size for data processing
 */
export function getOptimalChunkSize(totalItems: number): number {
  // Process in chunks of 100-1000 items depending on total size
  if (totalItems < 1000) return totalItems;
  if (totalItems < 10000) return 100;
  return 1000;
}

/**
 * Process large arrays in chunks to avoid blocking the main thread
 */
export async function processInChunks<T, R>(
  items: T[],
  processor: (item: T) => R,
  chunkSize?: number
): Promise<R[]> {
  const results: R[] = [];
  const size = chunkSize || getOptimalChunkSize(items.length);

  for (let i = 0; i < items.length; i += size) {
    const chunk = items.slice(i, i + size);
    const chunkResults = chunk.map(processor);
    results.push(...chunkResults);

    // Give the browser a chance to handle other tasks
    await new Promise((resolve) => setTimeout(resolve, 0));
  }

  return results;
}

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Get connection quality information
 */
export function getConnectionQuality(): {
  effectiveType: string;
  downlink: number;
  rtt: number;
  saveData: boolean;
} {
  if (
    typeof navigator === 'undefined' ||
    !('connection' in navigator)
  ) {
    return {
      effectiveType: 'unknown',
      downlink: 0,
      rtt: 0,
      saveData: false,
    };
  }

  const connection = (navigator as any).connection;
  return {
    effectiveType: connection.effectiveType || 'unknown',
    downlink: connection.downlink || 0,
    rtt: connection.rtt || 0,
    saveData: connection.saveData || false,
  };
}

/**
 * Adaptive loading based on network conditions
 */
export function shouldLoadHeavyContent(): boolean {
  const connection = getConnectionQuality();

  // Don't load heavy content on slow connections or when data saver is on
  if (connection.saveData) return false;
  if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
    return false;
  }

  return true;
}

export default {
  debounce,
  throttle,
  memoize,
  lazyLoadImages,
  preloadResource,
  getOptimizedImageUrl,
  measurePerformance,
  requestIdleCallback,
  cancelIdleCallback,
  batchDOMUpdates,
  getOptimalChunkSize,
  processInChunks,
  prefersReducedMotion,
  getConnectionQuality,
  shouldLoadHeavyContent,
};
