import React, { useState, useCallback } from 'react';
import { useLazyImage } from '../utils/lazyLoading';
import { imageOptimizer, ImageOptimizationOptions } from '../utils/imageOptimization';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholder?: string;
  optimizationOptions?: ImageOptimizationOptions;
  fallbackSrc?: string;
  onLoad?: () => void;
  onError?: () => void;
  className?: string;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  srcSet?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  placeholder,
  optimizationOptions = {},
  fallbackSrc,
  onLoad,
  onError,
  className = '',
  loading = 'lazy',
  sizes,
  srcSet,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Generate optimized image URL
  const optimizedSrc = imageOptimizer.generateOptimizedUrl(src, optimizationOptions);
  
  // Generate blur placeholder if none provided
  const blurPlaceholder = placeholder || imageOptimizer.generateBlurPlaceholder();
  
  // Use lazy loading hook
  const { elementRef, imageSrc, isLoaded } = useLazyImage(optimizedSrc, blurPlaceholder);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  }, [onError]);

  // Determine which image source to use
  const currentSrc = hasError && fallbackSrc ? fallbackSrc : (imageSrc || '');
  const currentAlt = hasError ? `${alt} (fallback)` : alt;

  return (
    <div
      ref={elementRef}
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: optimizationOptions.width && optimizationOptions.height 
        ? `${optimizationOptions.width}/${optimizationOptions.height}` 
        : undefined 
      }}
    >
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Main image */}
      <img
        {...props}
        src={currentSrc || undefined}
        alt={currentAlt}
        loading={loading}
        sizes={sizes}
        srcSet={srcSet}
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className || ''}`}
        style={{
          ...props.style,
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
      
      {/* Error state */}
      {hasError && !fallbackSrc && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <p className="text-sm">Failed to load image</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LazyImage;