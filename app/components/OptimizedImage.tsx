import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/utils/cn';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sizes?: string;
  quality?: number;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  placeholder = 'empty',
  blurDataURL,
  sizes = '100vw',
  quality = 75,
  loading = 'lazy',
  onLoad,
  onError,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) {
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

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Generate optimized src with WebP support
  const getOptimizedSrc = (originalSrc: string) => {
    // If it's already an external URL or data URL, return as is
    if (originalSrc.startsWith('http') || originalSrc.startsWith('data:')) {
      return originalSrc;
    }

    // For local images, you could add optimization logic here
    // For now, return the original src
    return originalSrc;
  };

  const optimizedSrc = getOptimizedSrc(src);

  return (
    <div
      ref={imgRef}
      className={cn(
        'relative overflow-hidden',
        className
      )}
      style={{ width, height }}
    >
      {/* Placeholder */}
      {!isLoaded && !hasError && (
        <div
          className={cn(
            'absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800',
            'animate-pulse flex items-center justify-center'
          )}
        >
          {placeholder === 'blur' && blurDataURL && (
            <img
              src={blurDataURL}
              alt=""
              className="w-full h-full object-cover filter blur-sm"
              aria-hidden="true"
            />
          )}
          <div className="text-slate-400 text-sm">Loading...</div>
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
          <div className="text-slate-400 text-sm text-center">
            <div className="w-8 h-8 mx-auto mb-2 bg-slate-300 dark:bg-slate-600 rounded flex items-center justify-center">
              📷
            </div>
            Image failed to load
          </div>
        </div>
      )}

      {/* Actual image */}
      {isInView && !hasError && (
        <img
          src={optimizedSrc}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          loading={priority ? 'eager' : loading}
          className={cn(
            'transition-opacity duration-300',
            isLoaded ? 'opacity-100' : 'opacity-0',
            'w-full h-full object-cover'
          )}
          onLoad={handleLoad}
          onError={handleError}
          decoding="async"
        />
      )}
    </div>
  );
};

export default OptimizedImage;