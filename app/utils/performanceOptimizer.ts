<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// Performanceoptimizer utility functions
export function performanceoptimizer() {
  // Implementation here
  return null;
=======
// Performance optimization utilities;
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {,
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  func: T,
  wait: number,
): ((...args: Parameters<T>) => void) => {,}
  let timeout: NodeJS.Timeout;
<<<<<<< HEAD
  return (...args: Parameters<T>) => {,}
=======
  return (...args: Parameters<T>) => {}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = <T extends (...args: any[]) => any>(
<<<<<<< HEAD
  func: T,
  limit: number,
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean,
  return (...args: Parameters<T>) => {
    if (!inThrottle) {,
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  func: T,
  limit: number,
): ((...args: Parameters<T>) => void) => {,}
  let inThrottle: boolean,
  return (...args: Parameters<T>) => {,}
    if (!inThrottle) {}
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

export const lazyLoad = (callback: () => void, options?: IntersectionObserverInit) => {}
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {}
    callback();
    return;
  }

  const observer = new IntersectionObserver((entries) => {}
    entries.forEach((entry) => {}
      if (entry.isIntersecting) {}
        callback();
        observer.disconnect();
      }

  }, options);

  return observer;
};

<<<<<<< HEAD
export const preloadImage = (src: string,): Promise<void> => {,
  return new Promise((resolve, reject) => {
export const preloadImage = (src: string,): Promise<void> => {,}
=======
export const preloadImage = (src: string): Promise<void> => {}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  return new Promise((resolve, reject) => {}
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;

};

<<<<<<< HEAD
export const preloadScript = (src: string,): Promise<void> => {,
  return new Promise((resolve, reject) => {
export const preloadScript = (src: string,): Promise<void> => {,}
=======
export const preloadScript = (src: string): Promise<void> => {}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  return new Promise((resolve, reject) => {}
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve();
    script.onerror = reject;
    document.head.appendChild(script);

};

<<<<<<< HEAD
export const measurePerformance = (name: string, fn: () => void) => {,
  if (typeof window === 'undefined' || !('performance' in window)) {,
export const measurePerformance = (name: string, fn: () => void) => {,}
=======
export const measurePerformance = (name: string, fn: () => void) => {}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  if (typeof window === 'undefined' || !('performance' in window)) {}
    fn();
    return;
  }

  const start = performance.now();
  fn();
  const end = performance.now();

  if (process.env.NODE_ENV === 'development') {}
    }
};

export const getDeviceInfo = () => {}
  if (typeof window === 'undefined') {}
    return { isMobile: false, isTablet: false, isDesktop: true; };
  }

  const width = window.innerWidth;
<<<<<<< HEAD
  return {
    isMobile: width < 768;
    isTablet: width >= 768 && width < 1024;
    isDesktop: width >= 1024;
  };
  private observers: PerformanceObserver[] = [];
  private isMonitoring: boolean = false;
  constructor(config?: Partial<OptimizationConfig>) {,
  return {}
    isMobile: width < 768,
    isTablet: width >= 768 && width < 1024,
    isDesktop: width >= 1024,};
=======
  return {}
    isMobile: width < 768,
    isTablet: width >= 768 && width < 1024,
    isDesktop: width >= 1024};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  private observers: PerformanceObserver[] = [];
  private isMonitoring: boolean = false;
  constructor(config?: Partial<OptimizationConfig>) {}
'use client';
/**
 * Performance optimization utilities for the Zion Tech Group website;
 * Provides tools for monitoring and optimizing application performance;
 */
// Simple logger for performance optimizer;
const logger = {/* TODO: Fix JSX expression */,}
  },
  performanc,
  e: (messag,
  e: string, dat)
<<<<<<< HEAD
  a: Record<string, unknown>, context?: string) => {/* TODO: Fix JSX expression */,}
=======
  a: Record<string, unknown>, context?: string) => {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  },
  erro,
  r: (messag,
  e: string, erro)
<<<<<<< HEAD
  r: Error,) => {/* TODO: Fix JSX expression */,}
=======
  r: Error) => {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  }
};
interface PerformanceMetrics {/* TODO: Fix JSX expression */,}
}
interface OptimizationConfig {/* TODO: Fix JSX expression */,}
}
interface PerformanceConfig extends OptimizationConfig {}
class PerformanceOptimizer {/* TODO: Fix JSX expression */,}
  };
  private,
  config: OptimizationConfig = {/* TODO: Fix JSX expression */,}
  };
  private,
  observers: PerformanceObserver[] = [];
  private,
  isMonitoring: boolean = false;
<<<<<<< HEAD
  constructor(config?: Partial<OptimizationConfig>) {/* TODO: Fix JSX expression */,}
=======
  constructor(config?: Partial<OptimizationConfig>) {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    this.config = { ...this.config, ...config };
    this.initializePerformanceMonitoring();
  }
  /**
   * Initialize performance monitoring;
   */
<<<<<<< HEAD
  private initializePerformanceMonitoring(): void {}
    if (typeof window === 'undefined') return;
    // Monitor page load performance;
    window.addEventListener('load', () => {
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    // Monitor page load performance
    window.addEventListener('load', () => {}
      this.measureLoadTime();
      this.measureMemoryUsage();

<<<<<<< HEAD
  private initializePerformanceMonitoring(): void {/* TODO: Fix JSX expression */,}
=======
  private initializePerformanceMonitoring(): void {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    });
    // Monitor render performance;
    this.measureRenderTime();
  }
  /**
   * Public init method for external initialization;
   */
<<<<<<< HEAD
  public init(): void {}
    this.initializePerformanceMonitoring();
  public init(): void {/* TODO: Fix JSX expression */,}
=======
  public init(): void {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  }
  /**
   * Measure page load time;
   */
<<<<<<< HEAD
  private measureLoadTime(): void {}
    if (typeof window === 'undefined' || !window.performance) return;
    if (typeof window.performance.getEntriesByType !== 'function') return;
    try {}
      const navigation = window.performance.getEntriesByType?.('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {}
        this.metrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart;
  private measureLoadTime(): void {/* TODO: Fix JSX expression */,}
=======
  private measureLoadTime(): void {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
      }
    } catch (error) {
    }
  }
  /**
   * Measure render time using PerformanceObserver;
   */
<<<<<<< HEAD
  private measureRenderTime(): void {}
    // Check if PerformanceObserver exists (may not be available in test environments)
    if (typeof PerformanceObserver === 'undefined') return;
    try {}
      const observer = new PerformanceObserver((list) => {}
        const entries = list.getEntries();
        entries.forEach((entry) => {}
          if (entry.entryType === 'measure') {}
            this.metrics.renderTime = entry.duration;
          }


      observer.observe({ entryTypes: ['measure'] ,});
      this.observers.push(observer);
    } catch (error) {
      // PerformanceObserver may not support 'measure' entryType in some environments;
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    } catch (error) {}
      // PerformanceObserver may not support 'measure' entryType in some environments
      }
  }
  private observeLCP() {}
    try {}
      const observer = new PerformanceObserver((list) => {}
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        this.metrics.lcp = lastEntry.startTime;
<<<<<<< HEAD
  private measureRenderTime(): void {/* TODO: Fix JSX expression */,}
=======
  private measureRenderTime(): void {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
          }
        });
      });
      observer.observe({/* TODO: Fix JSX expression */,})
  s: ['measure'] ,});
      this.observers.push(observer);
    } catch (error) {/* TODO: Fix JSX expression */,}
      }
  }
<<<<<<< HEAD
  private observeLCP() {/* TODO: Fix JSX expression */,}
=======
  private observeLCP() {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
      })
      observer.observe({/* TODO: Fix JSX expression */,})
  s: ['largest-contentful-paint'] ,})
      this.observers.push(observer)
<<<<<<< HEAD
    } catch {
      // Ignore if not supported;
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    } catch {}
      // Ignore if not supported
    }
  }
  private observeFID() {}
    try {}
      const observer = new PerformanceObserver((list) => {}
        const entries = list.getEntries()
<<<<<<< HEAD
        entries.forEach((entry: PerformanceEntry,) => {,
        entries.forEach((entry: PerformanceEntry,) => {,}
          const fidEntry = entry as PerformanceEntry & { processingStart: number; }
    } catch {/* TODO: Fix JSX expression */,}
    }
  }
  private observeFID() {/* TODO: Fix JSX expression */,}
  t: number; }
=======
        entries.forEach((entry: PerformanceEntry) => {}
          const fidEntry = entry as PerformanceEntry & { processingStart: number }
    } catch {/* TODO: Fix JSX expression */}
    }
  }
  private observeFID() {/* TODO: Fix JSX expression */}
  t: number }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
          this.metrics.fid = fidEntry.processingStart - fidEntry.startTime;
        })
      })
      observer.observe({/* TODO: Fix JSX expression */,})
  s: ['first-input'] ,})
      this.observers.push(observer)
<<<<<<< HEAD
    } catch {
      // Ignore if not supported;
    }
  }
  private observeCLS() {
    try {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: PerformanceEntry,) => {,
          const clsEntry = entry as PerformanceEntry & { hadRecentInput?: boolean; value: number; }
          if (!clsEntry.hadRecentInput) {
            clsValue += clsEntry.value;
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    } catch {}
      // Ignore if not supported
    }
  }
  private observeCLS() {}
    try {}
      let clsValue = 0
      const observer = new PerformanceObserver((list) => {}
        const entries = list.getEntries()
        entries.forEach((entry: PerformanceEntry,) => {,}
          const clsEntry = entry as PerformanceEntry & { hadRecentInput?: boolean; value: number; }
          if (!clsEntry.hadRecentInput) {}
            clsValue += clsEntry.value
          }
        })
        this.metrics.cls = clsValue;
      })
      observer.observe({ entryTypes: ['layout-shift'] ,})
      this.observers.push(observer)
<<<<<<< HEAD
    } catch {
      // Ignore if not supported;
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    } catch {}
      // Ignore if not supported
    }
  }
  private observeFCP() {}
    try {}
      const observer = new PerformanceObserver((list) => {}
        const entries = list.getEntries()
<<<<<<< HEAD
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            this.metrics.fcp = entry.startTime;
        entries.forEach((entry) => {}
          if (entry.name === 'first-contentful-paint') {}
            this.metrics.fcp = entry.startTime
    } catch {/* TODO: Fix JSX expression */,}
=======
        entries.forEach((entry) => {}
          if (entry.name === 'first-contentful-paint') {}
            this.metrics.fcp = entry.startTime
    } catch {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    }
  }
  private observeCLS() {/* TODO: Fix JSX expression */,}
  e: number; }
          if (!clsEntry.hadRecentInput) {/* TODO: Fix JSX expression */,}
          }
        })
        this.metrics.cls = clsValue;
      })
      observer.observe({/* TODO: Fix JSX expression */,})
  s: ['layout-shift'] ,})
      this.observers.push(observer)
    } catch {/* TODO: Fix JSX expression */,}
    }
  }
<<<<<<< HEAD
  private observeFCP() {/* TODO: Fix JSX expression */,}
=======
  private observeFCP() {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
          }
        })
      })
      observer.observe({/* TODO: Fix JSX expression */,})
  s: ['paint'] ,})
      this.observers.push(observer)
<<<<<<< HEAD
    } catch {
      // Ignore if not supported;
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    } catch {}
      // Ignore if not supported
    }
  }
  private observeTTFB() {}
    try {}
      const observer = new PerformanceObserver((list) => {}
        const entries = list.getEntries()
<<<<<<< HEAD
        entries.forEach((entry: PerformanceEntry,) => {,
          const navEntry = entry as PerformanceEntry & { responseStart: number; requestStart: number; }
          if (navEntry.responseStart > 0) {
            this.metrics.ttfb = navEntry.responseStart - navEntry.requestStart;
        entries.forEach((entry: PerformanceEntry,) => {,}
          const navEntry = entry as PerformanceEntry & { responseStart: number; requestStart: number; }
          if (navEntry.responseStart > 0) {}
            this.metrics.ttfb = navEntry.responseStart - navEntry.requestStart
    } catch {/* TODO: Fix JSX expression */,}
    }
  }
  private observeTTFB() {/* TODO: Fix JSX expression */,}
  t: number; }
          if (navEntry.responseStart > 0) {/* TODO: Fix JSX expression */,}
=======
        entries.forEach((entry: PerformanceEntry) => {}
          const navEntry = entry as PerformanceEntry & { responseStart: number; requestStart: number }
          if (navEntry.responseStart > 0) {}
            this.metrics.ttfb = navEntry.responseStart - navEntry.requestStart
    } catch {/* TODO: Fix JSX expression */}
    }
  }
  private observeTTFB() {/* TODO: Fix JSX expression */}
  t: number }
          if (navEntry.responseStart > 0) {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
          }
        })
      })
      observer.observe({/* TODO: Fix JSX expression */,})
  s: ['navigation'] ,})
      this.observers.push(observer)
<<<<<<< HEAD
    } catch {
      // Ignore if not supported;
    }
  }
  private observeMemory() {
    if (typeof window !== 'undefined' && 'memory' in performance) {
      const memory = (performance as Performance & { memory?: {// usedJSHeapSize: number; jsHeapSizeLimit: number;} }).memory;
      if (memory) {
        this.metrics.memoryUsage = memory.usedJSHeapSize;
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    } catch {}
      // Ignore if not supported
    }
  }
  private observeMemory() {}
    if (typeof window !== 'undefined' && 'memory' in performance) {}
      const memory = (performance as Performance & { memory?: {// usedJSHeapSize: number; jsHeapSizeLimit: number;} }).memory
      if (memory) {}
        this.metrics.memoryUsage = memory.usedJSHeapSize
<<<<<<< HEAD
    } catch {/* TODO: Fix JSX expression */,}
    }
  }
  private observeMemory() {/* TODO: Fix JSX expression */,}
  t: number;} }).memory;
      if (memory) {/* TODO: Fix JSX expression */,}
=======
    } catch {/* TODO: Fix JSX expression */}
    }
  }
  private observeMemory() {/* TODO: Fix JSX expression */}
  t: number} }).memory;
      if (memory) {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
      }
    }
  }
  /**
   * Measure memory usage;
   */
<<<<<<< HEAD
  private measureMemoryUsage(): void {}
    if (typeof window === 'undefined' || !('memory' in window.performance)) return;
    const memory = (window.performance as Performance & {}
      memory?: {}
        usedJSHeapSize: number,
        totalJSHeapSize: number,
        jsHeapSizeLimit: number;
      };
    }).memory;
    if (memory) {}
      this.metrics.memoryUsage = memory.usedJSHeapSize;
  private measureMemoryUsage(): void {/* TODO: Fix JSX expression */,}
      };
    }).memory;
    if (memory) {/* TODO: Fix JSX expression */,}
=======
  private measureMemoryUsage(): void {/* TODO: Fix JSX expression */}
      };
    }).memory;
    if (memory) {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    }
  }
  /**
   * Optimize images for better performance;
   */
<<<<<<< HEAD
  public optimizeImages(): void {}
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
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    images.forEach((img) => {}
      // Add loading="lazy" for better performance
      if (!img.hasAttribute('loading')) {}
        img.setAttribute('loading', 'lazy');
      }
      // Add proper alt text if missing
      if (!img.hasAttribute('alt')) {}
        img.setAttribute('alt', 'Zion Tech Group content');
      }
      // Optimize image format
      if (img.src.includes('.webp') || img.src.includes('.webp')) {}
        // Convert to WebP if supported
        if (this.supportsWebP()) {}
          img.src = img.src.replace(/\.(jpg|jpeg)$/i, '.webp');
        }
      }


  images.forEach((img) => imageObserver.observe(img));
};
<<<<<<< HEAD
  public optimizeImages(): void {/* TODO: Fix JSX expression */,}
=======
  public optimizeImages(): void {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
      }
      // Add proper alt text if missing;
      if (!img.hasAttribute('alt')) {/* TODO: Fix JSX expression */,}
      }
      // Optimize image format;
      if (img.src.includes('.jpg') || img.src.includes('.jpeg')) {/* TODO: Fix JSX expression */,}
        }
      }
    });
  }
  /**
   * Check if browser supports WebP;
   */
  private supportsWebP(): boolean {/* TODO: Fix JSX expression */,}
  }
  /**
   * Setup lazy loading for better performance;
   */
  public setupLazyLoading(): void {/* TODO: Fix JSX expression */,}
              } else {/* TODO: Fix JSX expression */,}
                element.style.backgroundImage = `url(${src})`;
              }
              element.removeAttribute('data-lazy');
              lazyObserver.unobserve(element);
            }
          }
        });
      });
      lazyElements.forEach((element) => {/* TODO: Fix JSX expression */,}
      });
    }
    this.metrics.lazyLoading = true;
  }
  /**
   * Enable code splitting for better performance;
   */
  enableCodeSplitting(): void {/* TODO: Fix JSX expression */,}
    if (process.env.NODE_ENV === 'development') {}
  }
  /**
   * Enable caching strategies;
   */
  enableCaching(): void {/* TODO: Fix JSX expression */,}
        if (process.env.NODE_ENV === 'development') {}
      })
      .catch((error) => {/* TODO: Fix JSX expression */,}
        if (process.env.NODE_ENV === 'development') {}
      });
  }
  /**
   * Get current performance metrics;
   */
  getMetrics(): PerformanceMetrics {/* TODO: Fix JSX expression */,}
    return { ...this.metrics };
  }
  /**
   * Get performance score (0-100)
   */
  getPerformanceScore(): number {/* TODO: Fix JSX expression */,}
  }
  /**
   * Generate performance report;
   */
  generateReport(): string {/* TODO: Fix JSX expression */,}`
  Score: ${score,}`;
  }
  /**
   * Lazy load images for better performance;
   */
  lazyLoadImages(): void {/* TODO: Fix JSX expression */,}
        }
      });
    });
    images.forEach(img => imageObserver.observe(img));
    logger.info('Lazy loading initialized for images', 'PerformanceOptimizer');
  }
  /**
   * Add critical resource hints;
   */
<<<<<<< HEAD
  addCriticalResourceHints(): void {/* TODO: Fix JSX expression */,}
  n: 'anonymous' ,},
      {/* TODO: Fix JSX expression */,}
  s: 'style' ,}];
    criticalResources.forEach(resource => {/* TODO: Fix JSX expression */,})
=======
  addCriticalResourceHints(): void {/* TODO: Fix JSX expression */}
  n: 'anonymous' },
      {/* TODO: Fix JSX expression */}
  s: 'style' }];
    criticalResources.forEach(resource => {/* TODO: Fix JSX expression */})
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    });
    logger.info('Critical resource hints added', 'PerformanceOptimizer');
  }
  /**
   * Measure page load metrics;
   */
  measurePageLoad(): PerformanceMetrics | null {/* TODO: Fix JSX expression */,}
    };
  }
  /**
   * Report web vitals;
   */
  reportWebVitals(metric)
<<<<<<< HEAD
  s: PerformanceMetrics,): void {/* TODO: Fix JSX expression */,}
    if (typeof window !== 'undefined' && (window as { gtag?: Function }).gtag) {/* TODO: Fix JSX expression */,}
  g: Function; }).gtag('event', 'web_vitals', {/* TODO: Fix JSX expression */,})
=======
  s: PerformanceMetrics): void {/* TODO: Fix JSX expression */}
    if (typeof window !== 'undefined' && (window as { gtag?: Function }).gtag) {/* TODO: Fix JSX expression */}
  g: Function }).gtag('event', 'web_vitals', {/* TODO: Fix JSX expression */})
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
          });
        }
      });
    }
  }
  /**
   * Cleanup observers and resources;
   */
  public cleanup(): void {/* TODO: Fix JSX expression */,}
  }
  /**
   * Generate comprehensive performance report;
   */
  generateComprehensiveReport(): string {/* TODO: Fix JSX expression */,}
  Score: ${score,}/100;
Load,
  Time: ${metrics.loadTime.toFixed(2),}ms;
Render,
  Time: ${metrics.renderTime.toFixed(2),}ms;
Memory,
  Usage: ${(metrics.memoryUsage / 1024 / 1024).toFixed(2),}MB;
Bundle,
  Size: ${metrics.bundleSize,}KB;
Cache Hit,
  Rate: ${metrics.cacheHitRate,}%
Recommendation,
  s: ${score < 80 ? '- Consider optimizing images and enabling compression' : '',}
${metrics.loadTime > 2000 ? '- Implement lazy loading for better initial load time' : ''}
${metrics.memoryUsage > 30 * 1024 * 1024 ? '- Review memory usage and optimize components' : ''}`
    `.trim();
  }
  /**
   * Optimize the entire application;
   */
  optimize(): void {/* TODO: Fix JSX expression */,}
    }
  }
}
// Export singleton instance;
export const performanceOptimizer = new PerformanceOptimizer();
export default PerformanceOptimizer;
export { PerformanceOptimizer, type PerformanceMetrics, type PerformanceConfig };
`
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
