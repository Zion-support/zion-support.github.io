/**
 * Performance utilities for optimizing React components and application performance
 */

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

export const lazyLoad = (callback: () => void, options: IntersectionObserverInit = {}) => {
  if (typeof window === 'undefined') return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback();
        observer.unobserve(entry.target);
      }
    });
  }, options);

  return observer;
};

export const measurePerformance = (name: string, fn: () => void) => {
  if (typeof window === 'undefined') return fn();

  const start = performance.now();
  const result = fn();
  const end = performance.now();
  
  console.log(`${name} took ${end - start} milliseconds`);
  return result;
};

export const createPerformanceObserver = (callback: (entries: PerformanceEntry[]) => void) => {
  if (typeof window === 'undefined') return null;

  const observer = new PerformanceObserver(callback);
  observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] });
  return observer;
};

export const getPerformanceMetrics = () => {
  if (typeof window === 'undefined') return null;

  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  const paint = performance.getEntriesByType('paint');

  return {
    navigation: {
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
      totalTime: navigation.loadEventEnd - navigation.fetchStart,
    },
    paint: {
      firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime || 0,
      firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
    },
  };
};

export const optimizeImages = (images: NodeListOf<HTMLImageElement>) => {
  images.forEach((img) => {
    if (img.dataset.src) {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    }
  });
};

export const preloadCriticalResources = (resources: string[]) => {
  resources.forEach((resource) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.css') ? 'style' : 'script';
    document.head.appendChild(link);
  });
};

export const deferNonCriticalCSS = () => {
  const nonCriticalCSS = document.querySelectorAll('link[rel="stylesheet"]:not([data-critical])');
  nonCriticalCSS.forEach((link) => {
    link.setAttribute('media', 'print');
    link.setAttribute('onload', 'this.media="all"');
  });
};

export const optimizeBundleSize = () => {
  // Dynamic imports for code splitting
  const loadComponent = (componentName: string) => {
    return import(`../components/${componentName}`).catch((error) => {
      console.error(`Failed to load component ${componentName}:`, error);
    });
  };

  return { loadComponent };
};

export const createVirtualScroller = (
  container: HTMLElement,
  itemHeight: number,
  renderItem: (index: number) => HTMLElement
) => {
  let scrollTop = 0;
  let containerHeight = 0;
  let itemCount = 0;

  const updateVisibleItems = () => {
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.min(startIndex + Math.ceil(containerHeight / itemHeight) + 1, itemCount);
    
    container.innerHTML = '';
    for (let i = startIndex; i < endIndex; i++) {
      const item = renderItem(i);
      item.style.position = 'absolute';
      item.style.top = `${i * itemHeight}px`;
      container.appendChild(item);
    }
  };

  const handleScroll = () => {
    scrollTop = container.scrollTop;
    updateVisibleItems();
  };

  container.addEventListener('scroll', throttle(handleScroll, 16));
  
  return {
    setItemCount: (count: number) => {
      itemCount = count;
      container.style.height = `${count * itemHeight}px`;
      updateVisibleItems();
    },
    destroy: () => {
      container.removeEventListener('scroll', handleScroll);
    },
  };
};

export default {
  debounce,
  throttle,
  memoize,
  lazyLoad,
  measurePerformance,
  createPerformanceObserver,
  getPerformanceMetrics,
  optimizeImages,
  preloadCriticalResources,
  deferNonCriticalCSS,
  optimizeBundleSize,
  createVirtualScroller,
};