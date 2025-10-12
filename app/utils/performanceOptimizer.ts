// Utility file: performanceOptimizer

export interface OptimizerConfig {
  enableImageOptimization: boolean;
  enableLazyLoading: boolean;
  enableCodeSplitting: boolean;
  enableCaching: boolean;
}

export class PerformanceOptimizer {
  private config: OptimizerConfig;

  constructor(config: OptimizerConfig = {
    enableImageOptimization: true,
    enableLazyLoading: true,
    enableCodeSplitting: true,
    enableCaching: true
  }) {
    this.config = config;
  }

  optimizeImages(): void {
    if (!this.config.enableImageOptimization) return;

    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  }

  enableLazyLoading(): void {
    if (!this.config.enableLazyLoading) return;

    const lazyElements = document.querySelectorAll('[data-lazy]');
    const lazyObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          element.classList.add('loaded');
          lazyObserver.unobserve(element);
        }
      });
    });

    lazyElements.forEach((element) => lazyObserver.observe(element));
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

export const performanceOptimizer = new PerformanceOptimizer();