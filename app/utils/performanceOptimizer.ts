/**
 * Performance Optimizer
 * Comprehensive performance monitoring and optimization utilities
 */

export interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  bundleSize: number;
  isOptimized: boolean;
  recommendations: string[];
}

export interface OptimizationOptions {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCaching?: boolean;
  enableCompression?: boolean;
}

class PerformanceOptimizer {
  private metrics: PerformanceMetrics = {
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    bundleSize: 0,
    isOptimized: false,
    recommendations: [],
  };

  private options: OptimizationOptions = {
    enableImageOptimization: true,
    enableLazyLoading: true,
    enablePreloading: true,
    enableCaching: true,
    enableCompression: true,
  };

  constructor(options?: OptimizationOptions) {
    if (options) {
      this.options = { ...this.options, ...options };
    }
  }

  // Measure page load performance
  measureLoadTime(): number {
    if (typeof window === 'undefined') return 0;
    
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    return navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
  }

  // Measure render performance
  measureRenderTime(): number {
    if (typeof window === 'undefined') return 0;
    
    const paintEntries = performance.getEntriesByType('paint');
    const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    return fcp ? fcp.startTime : 0;
  }

  // Get memory usage
  getMemoryUsage(): number {
    if (typeof window === 'undefined' || !(window as any).performance?.memory) return 0;
    
    const memory = (window as any).performance.memory;
    return memory ? memory.usedJSHeapSize : 0;
  }

  // Optimize images
  optimizeImages(): void {
    if (typeof window === 'undefined' || !this.options.enableImageOptimization) return;

    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });
  }

  // Enable lazy loading
  enableLazyLoading(): void {
    if (typeof window === 'undefined' || !this.options.enableLazyLoading) return;

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
  }

  // Preload critical resources
  preloadCriticalResources(): void {
    if (typeof window === 'undefined' || !this.options.enablePreloading) return;

    const criticalResources = [
      '/fonts/inter.woff2',
      '/css/critical.css',
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'font';
      document.head.appendChild(link);
    });
  }

  // Enable caching strategies
  enableCaching(): void {
    if (typeof window === 'undefined' || !this.options.enableCaching) return;

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service Worker registered:', registration);
        })
        .catch(error => {
          console.error('Service Worker registration failed:', error);
        });
    }
  }

  // Generate performance recommendations
  generateRecommendations(): string[] {
    const recommendations: string[] = [];
    
    if (this.metrics.loadTime > 3000) {
      recommendations.push('Consider optimizing images and reducing bundle size');
    }
    
    if (this.metrics.memoryUsage > 50 * 1024 * 1024) { // 50MB
      recommendations.push('High memory usage detected. Consider optimizing components');
    }
    
    if (this.metrics.bundleSize > 500 * 1024) { // 500KB
      recommendations.push('Bundle size is large. Consider code splitting');
    }

    return recommendations;
  }

  // Run comprehensive optimization
  async optimize(): Promise<PerformanceMetrics> {
    this.metrics.loadTime = this.measureLoadTime();
    this.metrics.renderTime = this.measureRenderTime();
    this.metrics.memoryUsage = this.getMemoryUsage();
    this.metrics.bundleSize = this.estimateBundleSize();
    
    this.optimizeImages();
    this.enableLazyLoading();
    this.preloadCriticalResources();
    this.enableCaching();
    
    this.metrics.recommendations = this.generateRecommendations();
    this.metrics.isOptimized = this.metrics.recommendations.length === 0;
    
    return this.metrics;
  }

  // Estimate bundle size (simplified)
  private estimateBundleSize(): number {
    if (typeof window === 'undefined') return 0;
    
    const scripts = document.querySelectorAll('script[src]');
    let totalSize = 0;
    
    scripts.forEach(script => {
      const src = script.getAttribute('src');
      if (src && src.includes('_next/static')) {
        // Rough estimation based on Next.js bundle structure
        totalSize += 100 * 1024; // 100KB per script estimate
      }
    });
    
    return totalSize;
  }

  // Get current metrics
  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }
}

export default PerformanceOptimizer;