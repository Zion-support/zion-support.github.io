// Performance optimization utilities;
export const debounce = <T extends (...args: any[]) => any>(
  func: T;
  wait: number;
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {,
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = <T extends (...args: any[]) => any>(
  func: T;
  limit: number;
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {,
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

export const lazyLoad = (callback: () => void, options?: IntersectionObserverInit) => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    callback();
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback();
        observer.disconnect();
      }

  }, options);

  return observer;
};

export const preloadImage = (src: string): Promise<void> => {,
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;

};

export const preloadScript = (src: string): Promise<void> => {,
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve();
    script.onerror = reject;
    document.head.appendChild(script);

};

export const measurePerformance = (name: string, fn: () => void) => {,
  if (typeof window === 'undefined' || !('performance' in window)) {,
    fn();
    return;
  }

  const start = performance.now();
  fn();
  const end = performance.now();

  if (process.env.NODE_ENV === 'development') {
    }
};

export const getDeviceInfo = () => {
  if (typeof window === 'undefined') {
    return { isMobile: false, isTablet: false, isDesktop: true };
  }

  const width = window.innerWidth;
  return {
    isMobile: width < 768;
    isTablet: width >= 768 && width < 1024;
    isDesktop: width >= 1024;
  };
  private observers: PerformanceObserver[] = [];
  private isMonitoring: boolean = false;
  constructor(config?: Partial<OptimizationConfig>) {,
    this.config = { ...this.config, ...config };
    this.initializePerformanceMonitoring();
  }
  /**
   * Initialize performance monitoring;
   */
  private initializePerformanceMonitoring(): void {
    if (typeof window === 'undefined') return;
    // Monitor page load performance;
    window.addEventListener('load', () => {
      this.measureLoadTime();
      this.measureMemoryUsage();

    // Monitor render performance;
    this.measureRenderTime();
  }
  /**
   * Public init method for external initialization;
   */
  public init(): void {
    this.initializePerformanceMonitoring();
  }
  /**
   * Measure page load time;
   */
  private measureLoadTime(): void {
    if (typeof window === 'undefined' || !window.performance) return;
    if (typeof window.performance.getEntriesByType !== 'function') return;
    try {
      const navigation = window.performance.getEntriesByType?.('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        this.metrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      }
    } catch () {}}
  /**
   * Measure render time using PerformanceObserver;
   */
  private measureRenderTime(): void {
    // Check if PerformanceObserver exists (may not be available in test environments)
    if (typeof PerformanceObserver === 'undefined') return;
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'measure') {
            this.metrics.renderTime = entry.duration;
          }


      observer.observe({ entryTypes: ['measure'] });
      this.observers.push(observer);
    } catch (error) {
      // PerformanceObserver may not support 'measure' entryType in some environments;
      }
  }
  private observeLCP() {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        this.metrics.lcp = lastEntry.startTime;
      })
      observer.observe({ entryTypes: ['largest-contentful-paint'] })
      this.observers.push(observer)
    } catch {
      // Ignore if not supported;
    }
  }
  private observeFID() {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: PerformanceEntry) => {,
          const fidEntry = entry as PerformanceEntry & { processingStart: number }
          this.metrics.fid = fidEntry.processingStart - fidEntry.startTime;
        })
      })
      observer.observe({ entryTypes: ['first-input'] })
      this.observers.push(observer)
    } catch {
      // Ignore if not supported;
    }
  }
  private observeCLS() {
    try {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: PerformanceEntry) => {,
          const clsEntry = entry as PerformanceEntry & { hadRecentInput?: boolean; value: number }
          if (!clsEntry.hadRecentInput) {
            clsValue += clsEntry.value;
          }
        })
        this.metrics.cls = clsValue;
      })
      observer.observe({ entryTypes: ['layout-shift'] })
      this.observers.push(observer)
    } catch {
      // Ignore if not supported;
    }
  }
  private observeFCP() {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            this.metrics.fcp = entry.startTime;
          }
        })
      })
      observer.observe({ entryTypes: ['paint'] })
      this.observers.push(observer)
    } catch {
      // Ignore if not supported;
    }
  }
  private observeTTFB() {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: PerformanceEntry) => {,
          const navEntry = entry as PerformanceEntry & { responseStart: number; requestStart: number }
          if (navEntry.responseStart > 0) {
            this.metrics.ttfb = navEntry.responseStart - navEntry.requestStart;
          }
        })
      })
      observer.observe({ entryTypes: ['navigation'] })
      this.observers.push(observer)
    } catch {
      // Ignore if not supported;
    }
  }
  private observeMemory() {
    if (typeof window !== 'undefined' && 'memory' in performance) {
      const memory = (performance as Performance & { memory?: {// usedJSHeapSize: number; jsHeapSizeLimit: number} }).memory;
      if (memory) {
        this.metrics.memoryUsage = memory.usedJSHeapSize;
      }
    }
  }
  /**
   * Measure memory usage;
   */
  private measureMemoryUsage(): void {
    if (typeof window === 'undefined' || !('memory' in window.performance)) return;
    const memory = (window.performance as Performance & {
      memory?: {
        usedJSHeapSize: number;
        totalJSHeapSize: number;
        jsHeapSizeLimit: number;
      };
    }).memory;
    if (memory) {
      this.metrics.memoryUsage = memory.usedJSHeapSize;
    }
  }
  /**
   * Optimize images for better performance;
   */
  public optimizeImages(): void {
    if (typeof window === 'undefined') return;
    if (!this.config.enableImageOptimization) return;
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Add loading="lazy" for better performance;
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      // Add proper alt text if missing;
      if (!img.hasAttribute('alt')) {
        img.setAttribute('alt', 'Zion Tech Group content');
      }
      // Optimize image format;
      if (img.src.includes('.webp') || img.src.includes('.webp')) {
        // Convert to WebP if supported;
        if (this.supportsWebP()) {
          img.src = img.src.replace(/\.(jpg|jpeg)$/i, '.webp');
        }
      }


  images.forEach((img) => imageObserver.observe(img));
};