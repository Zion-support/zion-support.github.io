// Performance utilities for optimization
export const defaultConfig = {
  enabled: true,
  debug: false
};

export const defaultFunction = () => {
  return null;
};

// Performance utilities object
export const performanceUtils = {
  monitorWebVitals: () => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log('Performance metric:', entry.name, entry.value);
        }
      });
      
      try {
        observer.observe({ entryTypes: ['measure', 'navigation'] });
      } catch (e) {
        // Ignore if not supported
      }
    }
  },

  optimizeImages: () => {
    if (typeof window !== 'undefined') {
      // Lazy load images with intersection observer
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
      
      // Also set loading="lazy" for regular images
      const regularImages = document.querySelectorAll('img:not([data-src])');
      regularImages.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
      });
    }
  },

  optimizeFonts: () => {
    if (typeof window !== 'undefined') {
      // Preload critical fonts
      const fontPreloads = [
        { href: '/fonts/inter-var.woff2', type: 'font/woff2' },
        { href: '/fonts/inter-var.woff', type: 'font/woff' }
      ];

      fontPreloads.forEach(font => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = font.href;
        link.as = 'font';
        link.type = font.type;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    }
  },

  optimizeThirdPartyScripts: () => {
    if (typeof window !== 'undefined') {
      // Defer non-critical scripts
      const scripts = document.querySelectorAll('script[data-defer]');
      scripts.forEach(script => {
        script.setAttribute('defer', '');
      });
      
      // Also optimize regular scripts
      const regularScripts = document.querySelectorAll('script[src]:not([data-defer])');
      regularScripts.forEach(script => {
        if (!script.async && !script.defer) {
          script.async = true;
        }
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
      const observers = document.querySelectorAll('[data-performance-observer]');
      observers.forEach(observer => observer.remove());
      console.log('Performance utilities cleanup');
    }
  }
};
