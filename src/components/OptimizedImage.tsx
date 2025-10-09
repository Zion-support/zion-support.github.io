import React, { useState, useCallback } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  placeholder?: string;
  blurDataURL?: string;
  sizes?: string;
  quality?: number;
  format?: 'webp' | 'avif' | 'jpeg' | 'png';
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
  placeholder,
  blurDataURL,
  sizes = '100vw',
  quality = 85,
  format = 'webp',
  loading = 'lazy',
  onLoad,
  onError,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setHasError(true);
    onError?.();
  }, [onError]);

  // Generate optimized image URL with WebP/AVIF support
  const getOptimizedSrc = (originalSrc: string) => {
    if (originalSrc.startsWith('data:') || originalSrc.startsWith('blob:')) {
      return originalSrc;
    }

    // For external images, use a placeholder service or return original
    if (originalSrc.startsWith('http')) {
      return originalSrc;
    }

    // For local images, you could implement image optimization here
    return originalSrc;
  };

  const optimizedSrc = getOptimizedSrc(src);

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
        role="img"
        aria-label={alt}
      >
        <span className="text-gray-500 text-sm">Image failed to load</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <LazyLoadImage
        src={optimizedSrc}
        alt={alt}
        width={width}
        height={height}
        effect="blur"
        placeholderSrc={blurDataURL || placeholder}
        threshold={100}
        delayMethod="throttle"
        delayTime={300}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        sizes={sizes}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          width: width ? `${width}px` : '100%',
          height: height ? `${height}px` : 'auto',
        }}
      />
      
      {/* Loading skeleton */}
      {!isLoaded && !hasError && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center"
          style={{ width, height }}
        >
          <div className="w-8 h-8 border-2 border-gray-300 border-t-cyan-400 rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;