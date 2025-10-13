import React, { useState, useCallback, useRef } from 'react';
import { ImageIcon } from 'lucide-react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 75,
  placeholder = 'empty',
  blurDataURL,
  sizes = '100vw',
  loading = 'lazy',
  onLoad,
  onError,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  // Intersection Observer for lazy loading
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setHasError(true);
    setIsLoading(false);
    onError?.();
  }, [onError]);

  // Set up intersection observer for lazy loading
  React.useEffect(() => {
    if (priority || loading === 'eager') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [priority, loading]);

  // Generate optimized image URL
  const getOptimizedSrc = useCallback(() => {
    if (!src) return '';
    
    // If it's already an external URL with optimization, return as is
    if (src.startsWith('http') && (src.includes('w_') || src.includes('q_'))) {
      return src;
    }

    // For local images, you might want to use a service like Cloudinary or Next.js Image Optimization
    // For now, return the original src
    return src;
  }, [src]);

  const optimizedSrc = getOptimizedSrc();

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-200 text-gray-400 ${className}`}
        style={{ width, height }}
      >
        <div className="text-center">
          <ImageIcon className="w-8 h-8 mx-auto mb-2" />
          <p className="text-sm">Failed to load image</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`} ref={imgRef}>
      {/* Blur placeholder */}
      {placeholder === 'blur' && blurDataURL && isLoading && (
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm scale-110"
          style={{
            backgroundImage: `url(${blurDataURL})`,
          }}
        />
      )}

      {/* Loading skeleton */}
      {isLoading && placeholder === 'empty' && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
      )}

      {/* Actual image */}
      {isInView && (
        <img
          src={optimizedSrc}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          loading={loading}
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            width: width ? `${width}px` : '100%',
            height: height ? `${height}px` : 'auto',
          }}
        />
      )}

      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;