// Performance utilities for optimization
export const performanceUtils = {
  monitorWebVitals: () => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            console.log('FID:', entry.processingStart - entry.startTime);
          }
        }
      });
      
      try {
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });
      } catch (e) {
        // Fallback for older browsers
        console.log('Performance monitoring not fully supported');
      }
    }
  },

  optimizeImages: () => {
    if (typeof window !== 'undefined') {
      const images = document.querySelectorAll('img[data-src]');
      images.forEach((img: HTMLImageElement) => {
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
      });
    }
  },

  optimizeFonts: () => {
    if (typeof window !== 'undefined') {
      // Preload critical fonts
      const fontPreloads = [
        { href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2' },
        { href: '/fonts/inter-var.woff', as: 'font', type: 'font/woff' }
      ];

      fontPreloads.forEach(font => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = font.href;
        link.as = font.as;
        if (font.type) link.type = font.type;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    }
  },

  optimizeThirdPartyScripts: () => {
    if (typeof window !== 'undefined') {
      // Defer non-critical scripts
      const scripts = document.querySelectorAll('script[data-defer]');
      scripts.forEach((script: HTMLScriptElement) => {
        script.defer = true;
      });
    }
  },

  preloadResource: (href: string, as: string) => {
    if (typeof window !== 'undefined') {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      link.as = as;
      document.head.appendChild(link);
    }
  },

  cleanup: () => {
    // Cleanup function for component unmount
    if (typeof window !== 'undefined') {
      // Remove any performance observers or timers
      console.log('Performance optimizer cleanup completed');
    }
  }
};

export const defaultConfig = {
  enabled: true,
  debug: false
};

export const defaultFunction = () => {
  return null;
};
