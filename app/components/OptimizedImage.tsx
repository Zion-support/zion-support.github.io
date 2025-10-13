import React, { useState, useCallback } from 'react';
// @ts-expect-error - Missing type definitions
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png' | 'avif';
  priority?: boolean;
  placeholder?: string;
  effect?: 'blur' | 'opacity' | 'black-and-white';
  threshold?: number;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  quality = 80,
  format = 'webp',
  priority = false,
  placeholder,
  effect = 'blur',
  threshold = 100,
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

  // Generate optimized image URL if using a service like Cloudinary
  const getOptimizedSrc = (originalSrc: string) => {
    if (originalSrc.startsWith('http') && !originalSrc.includes('cloudinary')) {
      return originalSrc;
    }
    
    // Add optimization parameters for Cloudinary or similar services
    const params = new URLSearchParams();
    if (quality) params.set('q', quality.toString());
    if (format) params.set('f', format);
    if (width) params.set('w', width.toString());
    if (height) params.set('h', height.toString());
    
    const separator = originalSrc.includes('?') ? '&' : '?';
    return `${originalSrc}${separator}${params.toString()}`;
  };

  const optimizedSrc = getOptimizedSrc(src);

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-500 text-sm">Failed to load image</span>
      </div>
    );
  }

  return (
    <LazyLoadImage
      src={optimizedSrc}
      alt={alt}
      className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
      width={width}
      height={height}
      effect={effect}
      threshold={threshold}
      placeholderSrc={placeholder}
      onLoad={handleLoad}
      onError={handleError}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
    />
  );
};

export default OptimizedImage;