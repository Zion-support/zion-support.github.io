// Performance utility functions

export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
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

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadImages = async (urls: string[]): Promise<void> => {
  const promises = urls.map(url => preloadImage(url));
  await Promise.allSettled(promises);
};

export const preloadResource = (href: string, as: string): void => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  document.head.appendChild(link);
};

export const measurePerformance = (name: string, fn: () => void): void => {
  if (typeof window !== 'undefined' && window.performance) {
    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(`[Performance] ${name}: ${(end - start).toFixed(2)}ms`);
  } else {
    fn();
  }
};

export const measureAsyncPerformance = async <T>(
  name: string,
  fn: () => Promise<T>
): Promise<T> => {
  if (typeof window !== 'undefined' && window.performance) {
    const start = performance.now();
    const result = await fn();
    const end = performance.now();
    console.log(`[Performance] ${name}: ${(end - start).toFixed(2)}ms`);
    return result;
  } else {
    return await fn();
  }
};

export const getResourceTiming = (name: string) => {
  if (typeof window === 'undefined' || !window.performance) return null;
  
  const resources = window.performance.getEntriesByName(name);
  return resources.length > 0 ? resources[0] : null;
};

export const getNavigationTiming = () => {
  if (typeof window === 'undefined' || !window.performance) return null;
  
  const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  return navigation;
};

export const getWebVitals = () => {
  if (typeof window === 'undefined' || !window.performance) return null;
  
  const navigation = getNavigationTiming();
  if (!navigation) return null;
  
  return {
    domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
    loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
    firstByte: navigation.responseStart - navigation.requestStart,
    domInteractive: navigation.domInteractive - navigation.navigationStart,
  };
};

export const createIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
): IntersectionObserver | null => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }
  
  return new IntersectionObserver(callback, {
    rootMargin: '50px',
    threshold: 0.1,
    ...options,
  });
};

export const observeElement = (
  element: Element,
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
): (() => void) => {
  const observer = createIntersectionObserver(callback, options);
  if (!observer) return () => {};
  
  observer.observe(element);
  
  return () => observer.unobserve(element);
};

export const lazyLoadImage = (img: HTMLImageElement): void => {
  if (!img.dataset.src) return;
  
  const observer = createIntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLImageElement;
        if (target.dataset.src) {
          target.src = target.dataset.src;
          target.removeAttribute('data-src');
          observer?.unobserve(target);
        }
      }
    });
  });
  
  if (observer) {
    observer.observe(img);
  }
};

export const optimizeImages = (): void => {
  const images = document.querySelectorAll('img[data-src]');
  images.forEach((img) => lazyLoadImage(img as HTMLImageElement));
};