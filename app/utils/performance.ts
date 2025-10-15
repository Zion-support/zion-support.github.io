// Performance optimization utilities

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;
  
  return (...args: Parameters<T>) => {
    if (timeout) {
      clearTimeout(timeout);
    }
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

export const requestIdleCallback = (callback: () => void, options?: { timeout?: number }) => {
  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    return window.requestIdleCallback(callback, options);
  } else {
    return setTimeout(callback, 1);
  }
};

export const cancelIdleCallback = (id: number) => {
  if (typeof window !== 'undefined' && 'cancelIdleCallback' in window) {
    window.cancelIdleCallback(id);
  } else {
    clearTimeout(id);
  }
};

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadImages = async (srcs: string[]): Promise<void> => {
  await Promise.all(srcs.map(preloadImage));
};

export const isInViewport = (element: Element): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

export const measurePerformance = (name: string, fn: () => void) => {
  if (process.env.NODE_ENV === 'development') {
    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(`${name} took ${end - start} milliseconds`);
  } else {
    fn();
  }
};

export const getPerformanceMetrics = () => {
  if (typeof window === 'undefined' || !window.performance) {
    return null;
  }

  const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  if (!navigation) return null;

  return {
    domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
    loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
    firstPaint: window.performance.getEntriesByName('first-paint')[0]?.startTime || 0,
    firstContentfulPaint: window.performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0,
  };
};