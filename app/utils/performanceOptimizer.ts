// Performance optimization utilities
export interface PerformanceConfig {
  enableLazyLoading: boolean;
  enablePreloading: boolean;
  enableImageOptimization: boolean;
  enableCodeSplitting: boolean;
  enableCaching: boolean;
  maxImageSize: number;
  preloadCriticalImages: string[];
  preloadCriticalFonts: string[];
  preloadCriticalScripts: string[];
}

const defaultConfig: PerformanceConfig = {
  enableLazyLoading: true,
  enablePreloading: true,
  enableImageOptimization: true,
  enableCodeSplitting: true,
  enableCaching: true,
  maxImageSize: 1024 * 1024, // 1MB
  preloadCriticalImages: [],
  preloadCriticalFonts: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
  ],
  preloadCriticalScripts: []
};

class PerformanceOptimizer {
  private config: PerformanceConfig;
  private imageObserver: IntersectionObserver | null = null;
  private preloadedResources: Set<string> = new Set();

  constructor(config: Partial<PerformanceConfig> = {}) {
    this.config = { ...defaultConfig, ...config };
    this.initialize();
  }

  private initialize() {
    if (typeof window === 'undefined') return;

    if (this.config.enableLazyLoading) {
      this.setupLazyLoading();
    }

    if (this.config.enablePreloading) {
      this.preloadCriticalResources();
    }

    if (this.config.enableImageOptimization) {
      this.optimizeImages();
    }
  }

  private setupLazyLoading() {
    if (!('IntersectionObserver' in window)) return;

    this.imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            this.loadLazyElement(target);
            this.imageObserver?.unobserve(target);
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    // Observe all lazy elements
    const lazyElements = document.querySelectorAll('[data-src], [data-bg-src], [data-lazy]');
    lazyElements.forEach((el) => this.imageObserver?.observe(el));
  }

  private loadLazyElement(element: HTMLElement) {
    // Lazy load images
    if (element.tagName === 'IMG' && element.dataset.src) {
      const img = element as HTMLImageElement;
      img.src = element.dataset.src;
      img.removeAttribute('data-src');
      
      // Add loading state
      img.onload = () => {
        img.classList.add('loaded');
      };
    }

    // Lazy load background images
    if (element.dataset.bgSrc) {
      element.style.backgroundImage = `url(${element.dataset.bgSrc})`;
      element.removeAttribute('data-bg-src');
      element.classList.add('loaded');
    }

    // Lazy load components
    if (element.dataset.lazy) {
      const componentName = element.dataset.lazy;
      this.loadLazyComponent(componentName, element);
    }
  }

  private async loadLazyComponent(componentName: string, container: HTMLElement) {
    try {
      // Dynamic import for code splitting
      const module = await import(`../components/${componentName}`);
      const Component = module.default;
      
      if (Component) {
        // Render component (this would need React rendering in real implementation)
        container.innerHTML = `<div class="lazy-component-loaded">${componentName} loaded</div>`;
      }
    } catch (error) {
      console.warn(`Failed to load lazy component: ${componentName}`, error);
    }
  }

  private preloadCriticalResources() {
    // Preload critical fonts
    this.config.preloadCriticalFonts.forEach((fontUrl) => {
      this.preloadResource(fontUrl, 'font', 'anonymous');
    });

    // Preload critical images
    this.config.preloadCriticalImages.forEach((imageUrl) => {
      this.preloadImage(imageUrl);
    });

    // Preload critical scripts
    this.config.preloadCriticalScripts.forEach((scriptUrl) => {
      this.preloadResource(scriptUrl, 'script');
    });
  }

  private preloadResource(href: string, as: string, crossorigin?: string) {
    if (this.preloadedResources.has(href)) return;

    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    
    if (crossorigin) {
      link.crossOrigin = crossorigin;
    }

    link.onload = () => {
      this.preloadedResources.add(href);
    };

    link.onerror = () => {
      console.warn(`Failed to preload resource: ${href}`);
    };

    document.head.appendChild(link);
  }

  private preloadImage(src: string) {
    if (this.preloadedResources.has(src)) return;

    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      this.preloadedResources.add(src);
    };

    img.onerror = () => {
      console.warn(`Failed to preload image: ${src}`);
    };
  }

  private optimizeImages() {
    const images = document.querySelectorAll('img');
    
    images.forEach((img) => {
      const image = img as HTMLImageElement;
      
      // Add loading attribute for native lazy loading
      if (!image.loading) {
        image.loading = 'lazy';
      }

      // Add decoding attribute for better performance
      if (!image.decoding) {
        image.decoding = 'async';
      }

      // Optimize image size if too large
      if (image.naturalWidth > 1920 || image.naturalHeight > 1080) {
        image.style.maxWidth = '100%';
        image.style.height = 'auto';
      }
    });
  }

  // Public methods
  public preloadPage(pagePath: string) {
    if (this.config.enablePreloading) {
      this.preloadResource(pagePath, 'document');
    }
  }

  public optimizeBundle() {
    if (this.config.enableCodeSplitting) {
      // This would integrate with your bundler's code splitting
      console.log('Bundle optimization enabled');
    }
  }

  public enableCaching() {
    if (this.config.enableCaching && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered:', registration);
        })
        .catch((error) => {
          console.warn('Service Worker registration failed:', error);
        });
    }
  }

  public cleanup() {
    if (this.imageObserver) {
      this.imageObserver.disconnect();
      this.imageObserver = null;
    }
    this.preloadedResources.clear();
  }

  public updateConfig(newConfig: Partial<PerformanceConfig>) {
    this.config = { ...this.config, ...newConfig };
    this.cleanup();
    this.initialize();
  }
}

// Export singleton instance
export const performanceOptimizer = new PerformanceOptimizer();

// Export utility functions
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): T => {
  let timeout: NodeJS.Timeout;
  return ((...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  }) as T;
};

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): T => {
  let inThrottle: boolean;
  return ((...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  }) as T;
};

export const measurePerformance = (name: string, fn: () => void) => {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${name} took ${end - start} milliseconds`);
};

export default PerformanceOptimizer;