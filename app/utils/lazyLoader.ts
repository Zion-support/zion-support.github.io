/**
 * Lazy Loading Utility for Zion Tech Group Website
 * Provides efficient lazy loading for images and components
 */

export interface LazyLoadOptions {
  rootMargin?: string;
  threshold?: number;
  enableIntersectionObserver?: boolean;
}

export class LazyLoader {
  private observer: IntersectionObserver | null = null;
  private options: LazyLoadOptions;

  constructor(options: LazyLoadOptions = {}) {
    this.options = {
      rootMargin: '50px',
      threshold: 0.1,
      enableIntersectionObserver: true,
      ...options,
    };
  }

  /**
   * Initialize lazy loading for images
   */
  initImageLazyLoading(): void {
    if (typeof window === 'undefined') return;

    const images = document.querySelectorAll('img[data-src]');
    
    if (this.options.enableIntersectionObserver && 'IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              this.loadImage(img);
              this.observer?.unobserve(img);
            }
          });
        },
        {
          rootMargin: this.options.rootMargin,
          threshold: this.options.threshold,
        }
      );

      images.forEach((img) => this.observer?.observe(img));
    } else {
      // Fallback for browsers without IntersectionObserver
      images.forEach((img) => this.loadImage(img as HTMLImageElement));
    }
  }

  /**
   * Load an image and handle loading states
   */
  private loadImage(img: HTMLImageElement): void {
    const src = img.getAttribute('data-src');
    if (!src) return;

    // Add loading class
    img.classList.add('lazy-loading');

    const imageLoader = new Image();
    
    imageLoader.onload = () => {
      img.src = src;
      img.classList.remove('lazy-loading');
      img.classList.add('lazy-loaded');
      img.removeAttribute('data-src');
    };

    imageLoader.onerror = () => {
      img.classList.remove('lazy-loading');
      img.classList.add('lazy-error');
      console.warn('Failed to load image:', src);
    };

    imageLoader.src = src;
  }

  /**
   * Initialize lazy loading for components
   */
  initComponentLazyLoading(): void {
    if (typeof window === 'undefined') return;

    const components = document.querySelectorAll('[data-lazy-component]');
    
    if (this.options.enableIntersectionObserver && 'IntersectionObserver' in window) {
      const componentObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const element = entry.target as HTMLElement;
              this.loadComponent(element);
              componentObserver.unobserve(element);
            }
          });
        },
        {
          rootMargin: this.options.rootMargin,
          threshold: this.options.threshold,
        }
      );

      components.forEach((component) => componentObserver.observe(component));
    }
  }

  /**
   * Load a lazy component
   */
  private loadComponent(element: HTMLElement): void {
    const componentName = element.getAttribute('data-lazy-component');
    if (!componentName) return;

    // Add loading state
    element.classList.add('lazy-loading');

    // Simulate component loading (in real implementation, this would load the actual component)
    setTimeout(() => {
      element.classList.remove('lazy-loading');
      element.classList.add('lazy-loaded');
      element.removeAttribute('data-lazy-component');
    }, 100);
  }

  /**
   * Initialize all lazy loading
   */
  init(): void {
    this.initImageLazyLoading();
    this.initComponentLazyLoading();
  }

  /**
   * Cleanup observers
   */
  destroy(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }
}

// Default lazy loader instance
export const lazyLoader = new LazyLoader();

// Auto-initialize on DOM ready
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => lazyLoader.init());
  } else {
    lazyLoader.init();
  }
}