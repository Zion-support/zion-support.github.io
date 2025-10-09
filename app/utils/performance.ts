// Performance optimization utilities

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

export const lazyLoad = (callback: () => void, options?: IntersectionObserverInit) => {
  if (typeof window === 'undefined') return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback();
          observer.disconnect();
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '50px',
      ...options,
    }
  );

  return observer;
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

export const getImageOptimizedSrc = (src: string, width?: number, quality = 75): string => {
  if (src.startsWith('data:') || src.startsWith('blob:')) {
    return src;
  }
  
  // For external images, return as-is
  if (src.startsWith('http')) {
    return src;
  }
  
  // For local images, you could add optimization logic here
  return src;
};

export const measurePerformance = (name: string, fn: () => void) => {
  if (typeof window === 'undefined') {
    fn();
    return;
  }

  const start = performance.now();
  fn();
  const end = performance.now();
  
  if (process.env.NODE_ENV === 'development') {
    console.log(`${name} took ${end - start} milliseconds`);
  }
};

export const getCoreWebVitals = (): Promise<{
  FCP: number;
  LCP: number;
  FID: number;
  CLS: number;
  TTFB: number;
}> => {
  return new Promise((resolve) => {
    const vitals: any = {};
    let vitalsCount = 0;

    const checkVitals = () => {
      vitalsCount++;
      if (vitalsCount >= 5) {
        resolve(vitals);
      }
    };

    // First Contentful Paint
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          vitals.FCP = entry.startTime;
          checkVitals();
        }
      }
    }).observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      vitals.LCP = lastEntry.startTime;
      checkVitals();
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        vitals.FID = entry.processingStart - entry.startTime;
        checkVitals();
      }
    }).observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift
    let clsValue = 0;
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
      vitals.CLS = clsValue;
      checkVitals();
    }).observe({ entryTypes: ['layout-shift'] });

    // Time to First Byte
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      vitals.TTFB = navigationEntry.responseStart - navigationEntry.requestStart;
      checkVitals();
    }
  });
};