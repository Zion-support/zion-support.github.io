export const performanceUtils = {
  measurePerformance: (name: string, fn: () => void) => {
    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(`${name} took ${end - start} milliseconds`);
    return end - start;
  },

  getPerformanceMetrics: () => {
    if (typeof window === 'undefined') return null;
    
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paint = performance.getEntriesByType('paint');
    
    return {
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
      firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime || 0,
      firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
    };
  },

  optimizeImages: () => {
    if (typeof window === 'undefined') return false;
    
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });
    return true;
  },

  preloadCriticalResources: () => {
    if (typeof window === 'undefined') return false;
    
    const criticalResources = [
      { href: '/fonts/main.woff2', as: 'font', type: 'font/woff2' },
      { href: '/css/critical.css', as: 'style' }
    ];

    criticalResources.forEach(({ href, as, type }) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      link.as = as;
      if (type) link.type = type;
      document.head.appendChild(link);
    });
    return true;
  },

  preloadFonts: () => {
    if (typeof window === 'undefined') return false;
    
    const fonts = [
      { href: '/fonts/main.woff2', type: 'font/woff2' },
      { href: '/fonts/main.woff', type: 'font/woff' }
    ];

    fonts.forEach(font => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = font.href;
      link.as = 'font';
      if (font.type) link.type = font.type;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
    return true;
  },

  debounce: (func: (...args: any[]) => void, wait: number) => {
    let timeout: NodeJS.Timeout;
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  throttle: (func: (...args: any[]) => void, limit: number) => {
    let inThrottle: boolean;
    return function executedFunction(...args: any[]) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  optimizeThirdParty: () => {
    if (typeof window !== 'undefined') {
      // Defer non-critical scripts
      const scripts = document.querySelectorAll('script[src]');
      scripts.forEach((script) => {
        if (script.getAttribute('src')?.includes('analytics') || 
            script.getAttribute('src')?.includes('ads')) {
          script.setAttribute('defer', 'true');
        }
      });

      // Preload critical resources
      const criticalResources = [
        { href: '/fonts/main.woff2', as: 'font', type: 'font/woff2' },
        { href: '/css/critical.css', as: 'style' }
      ];

      criticalResources.forEach(({ href, as, type }) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = href;
        link.as = as;
        if (type) link.type = type;
        document.head.appendChild(link);
      });
    }
  },

  cleanup: () => {
    // Cleanup function for performance monitoring
    if (typeof window !== 'undefined') {
      // Remove any performance observers
      const observers = performance.getEntriesByType('measure');
      observers.forEach(entry => {
        performance.clearMeasures(entry.name);
      });
    }
  }
};

export default performanceUtils;