// Image optimization utilities
export interface ImageOptimizationOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png' | 'avif';
  fit?: 'cover' | 'contain' | 'fill' | 'inside' | 'outside';
}

export class ImageOptimizer {
  private static readonly DEFAULT_OPTIONS: ImageOptimizationOptions = {
    quality: 80,
    format: 'webp',
    fit: 'cover',
  };

  /**
   * Optimize image URL with specified options
   */
  static optimizeImage(
    src: string,
    options: ImageOptimizationOptions = {}
  ): string {
    const opts = { ...this.DEFAULT_OPTIONS, ...options };
    
    // If it's already an optimized URL or external URL, return as is
    if (src.startsWith('http') || src.includes('?')) {
      return src;
    }

    // For local images, you would typically use an image optimization service
    // This is a placeholder implementation
    const params = new URLSearchParams();
    
    if (opts.width) params.append('w', opts.width.toString());
    if (opts.height) params.append('h', opts.height.toString());
    if (opts.quality) params.append('q', opts.quality.toString());
    if (opts.format) params.append('f', opts.format);
    if (opts.fit) params.append('fit', opts.fit);

    const queryString = params.toString();
    return queryString ? `${src}?${queryString}` : src;
  }

  /**
   * Generate responsive image srcset
   */
  static generateSrcSet(
    baseSrc: string,
    sizes: number[] = [320, 640, 768, 1024, 1280, 1920]
  ): string {
    return sizes
      .map(size => `${this.optimizeImage(baseSrc, { width: size })} ${size}w`)
      .join(', ');
  }

  /**
   * Generate responsive image sizes attribute
   */
  static generateSizes(breakpoints: { [key: string]: string } = {}): string {
    const defaultBreakpoints = {
      '(max-width: 640px)': '100vw',
      '(max-width: 768px)': '100vw',
      '(max-width: 1024px)': '100vw',
      '(max-width: 1280px)': '100vw',
    };

    const bp = { ...defaultBreakpoints, ...breakpoints };
    
    return Object.entries(bp)
      .map(([query, size]) => `${query} ${size}`)
      .join(', ') + ', 100vw';
  }

  /**
   * Lazy load image with intersection observer
   */
  static lazyLoadImage(
    img: HTMLImageElement,
    options: IntersectionObserverInit = {}
  ): () => void {
    const defaultOptions: IntersectionObserverInit = {
      rootMargin: '50px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const image = entry.target as HTMLImageElement;
          
          if (image.dataset.src) {
            image.src = image.dataset.src;
            image.classList.remove('lazy');
            image.classList.add('loaded');
            observer.unobserve(image);
          }
        }
      });
    }, { ...defaultOptions, ...options });

    observer.observe(img);

    return () => observer.disconnect();
  }

  /**
   * Preload critical images
   */
  static preloadImage(src: string, options: ImageOptimizationOptions = {}): void {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = this.optimizeImage(src, options);
    document.head.appendChild(link);
  }

  /**
   * Check if WebP is supported
   */
  static async isWebPSupported(): Promise<boolean> {
    return new Promise((resolve) => {
      const webP = new Image();
      webP.onload = webP.onerror = () => {
        resolve(webP.height === 2);
      };
      webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    });
  }

  /**
   * Get optimal image format based on browser support
   */
  static async getOptimalFormat(): Promise<'webp' | 'avif' | 'jpeg'> {
    // Check for AVIF support first
    const avifSupported = await this.isAVIFSupported();
    if (avifSupported) return 'avif';

    // Check for WebP support
    const webpSupported = await this.isWebPSupported();
    if (webpSupported) return 'webp';

    // Fallback to JPEG
    return 'jpeg';
  }

  /**
   * Check if AVIF is supported
   */
  private static async isAVIFSupported(): Promise<boolean> {
    return new Promise((resolve) => {
      const avif = new Image();
      avif.onload = avif.onerror = () => {
        resolve(avif.height === 2);
      };
      avif.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABgAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEAwgMgkfAAAAAAAABAAAAAA==';
    });
  }
}

// React hook for image optimization
export const useImageOptimization = () => {
  const optimizeImage = (src: string, options?: ImageOptimizationOptions) => {
    return ImageOptimizer.optimizeImage(src, options);
  };

  const generateSrcSet = (src: string, sizes?: number[]) => {
    return ImageOptimizer.generateSrcSet(src, sizes);
  };

  const generateSizes = (breakpoints?: { [key: string]: string }) => {
    return ImageOptimizer.generateSizes(breakpoints);
  };

  return {
    optimizeImage,
    generateSrcSet,
    generateSizes,
  };
};