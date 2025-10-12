// Utility file: performanceOptimizations

export interface OptimizationConfig {
  enableImageOptimization: boolean;
  enableLazyLoading: boolean;
  enableCodeSplitting: boolean;
  enableCaching: boolean;
  enableCompression: boolean;
}

export class PerformanceOptimizations {
  private config: OptimizationConfig;

  constructor(config: OptimizationConfig = {
    enableImageOptimization: true,
    enableLazyLoading: true,
    enableCodeSplitting: true,
    enableCaching: true,
    enableCompression: true
  }) {
    this.config = config;
  }

  optimizeImages(): void {
    if (!this.config.enableImageOptimization) return;

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
    });
  }

  enableLazyLoading(): void {
    if (!this.config.enableLazyLoading) return;

    const lazyElements = document.querySelectorAll('[data-lazy]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          element.classList.add('loaded');
          observer.unobserve(element);
        }
      });
    });

    lazyElements.forEach((element) => observer.observe(element));
  }

  preloadCriticalResources(): void {
    const criticalResources = [
      '/fonts/inter.woff2',
      '/images/hero-bg.jpg',
      '/images/logo.png',
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.woff2') ? 'font' : 'image';
      if (resource.endsWith('.woff2')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });
  }

  optimizeScrollPerformance(): void {
    let ticking = false;
    const updateScrollPosition = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', updateScrollPosition, { passive: true });
  }

  initialize(): void {
    this.optimizeImages();
    this.enableLazyLoading();
    this.preloadCriticalResources();
    this.optimizeScrollPerformance();
  }
}

export const performanceOptimizations = new PerformanceOptimizations();