import React, { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  placeholder?: 'blur' | 'empty';
}

class ImageOptimizer {
  private static instance: ImageOptimizer;
  private observer: IntersectionObserver | null = null;
  private loadedImages: Set<string> = new Set();

  private constructor() {
    this.setupIntersectionObserver();
  }

  public static getInstance(): ImageOptimizer {
    if (!ImageOptimizer.instance) {
      ImageOptimizer.instance = new ImageOptimizer();
    }
    return ImageOptimizer.instance;
  }

  private setupIntersectionObserver(): void {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                this.loadedImages.add(img.dataset.src);
                this.observer?.unobserve(img);
              }
            }
          });
        },
        {
          rootMargin: '50px 0px',
          threshold: 0.1,
        }
      );
    }
  }

  public optimizeImageUrl(src: string, options: { width?: number; height?: number; quality?: number } = {}): string {
    if (!src) return src;

    const { width, height, quality = 80 } = options;
    
    // If it's already an optimized URL or external, return as is
    if (src.startsWith('data:') || src.startsWith('blob:') || src.includes('http')) {
      return src;
    }

    // For local images, we could add optimization parameters here
    // This is a placeholder for future optimization logic
    return src;
  }

  public observeImage(img: HTMLImageElement): void {
    if (this.observer && img.dataset.src) {
      this.observer.observe(img);
    }
  }

  public generateBlurDataURL(width: number = 10, height: number = 10): string {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, '#f3f4f6');
      gradient.addColorStop(1, '#e5e7eb');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    }
    return canvas.toDataURL('image/jpeg', 0.1);
  }

  public preloadImage(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = reject;
      img.src = src;
    });
  }

  public preloadImages(srcs: string[]): Promise<void[]> {
    return Promise.all(srcs.map(src => this.preloadImage(src)));
  }

  public cleanup(): void {
    this.observer?.disconnect();
    this.loadedImages.clear();
  }
}

export const useImageOptimization = () => {
  const optimizer = ImageOptimizer.getInstance();
  return {
    optimizeUrl: optimizer.optimizeImageUrl.bind(optimizer),
    observeImage: optimizer.observeImage.bind(optimizer),
    generateBlurDataURL: optimizer.generateBlurDataURL.bind(optimizer),
    preloadImage: optimizer.preloadImage.bind(optimizer),
    preloadImages: optimizer.preloadImages.bind(optimizer)
  };
};

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  loading = 'lazy',
  placeholder = 'blur'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const { optimizeUrl, observeImage, generateBlurDataURL } = useImageOptimization();

  const optimizedSrc = optimizeUrl(src, {
    width,
    height,
    quality: 80
  });

  useEffect(() => {
    if (imageRef.current && loading === 'lazy' && !priority) {
      observeImage(imageRef.current);
    }
  }, [imageRef, loading, priority, observeImage]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!hasError ? (
        <img
          ref={imageRef}
          src={priority ? optimizedSrc : undefined}
          data-src={!priority ? optimizedSrc : undefined}
          alt={alt}
          width={width}
          height={height}
          className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={handleLoad}
          onError={handleError}
        />
      ) : (
        <div className="flex items-center justify-center bg-gray-200 text-gray-500" style={{ width, height }}>
          Image failed to load
        </div>
      )}
      {placeholder === 'blur' && !isLoaded && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{
            backgroundImage: `url(${generateBlurDataURL(width || 100, height || 100)})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      )}
    </div>
  );
};