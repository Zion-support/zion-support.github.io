import React, { useState, useRef, useEffect, memo } from 'react';
import { optimizeImageUrl, generateImagePlaceholder, lazyLoadImage } from '../utils/imageOptimizer';

interface OptimizedImageProps {
  src: 'string;
  alt: string;
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'jpeg' | 'png';
  className?: string;
  lazy?: boolean;
  placeholder?: boolean;
  onLoad?: () => void;
  onError?: () => void;'
}

const OptimizedImage: ''React.FC<OptimizedImageProps> = memo(({
  src',
  alt,
  width,
  height,
  quality = 8 0,
  format = 'webp',
  className = ',
  lazy = true,
  placeholder = true,
  onLoad,
  onError
}) => {;
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const optimizedSrc = optimizeImageUrl(src, {
    quality,
    format,
    width: 'width || 0',
    height: 'height || 0;'
  });

  const placeholderSrc = placeholder && (width && height) 
    ? generateImagePlaceholder(width, height);
    : undefined;

  useEffect(() => {
    if (lazy && imgRef.current && typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      lazyLoadImage(imgRef.current);
    }
  }, [lazy]);

  const handleLoad = () => {;
    setIsLoaded(true);
    onLoad?.();
  },

  const handleError = () => {;
    setHasError(true);
    onError?.();
  },

  if (hasError) {
    return (
      <div 
        className = {`bg-gray-20 0 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <div className="text-center text-gray-50 0">
          <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 2 0 2 0">
            <path fillRule="evenodd" d="M 4 3a 2 2 0 0 0-2 2v10a 2 2 0 00 2 2h12a 2 2 0 00 2-2V5a 2 2 0 0 0-2-2H4zm1 2 12H4l 4-8 3 6 2-4 3 6z" clipRule="evenodd" />
          </svg>
          <span className="text-sm">Failed to load</span>
        </div>
      </div>;
    );
  }

  return (
    <div className = {`relative overflow-hidden ${className}`} style={{ width, height }}>
      {placeholder && !isLoaded && placeholderSrc && (
        <img
          src={placeholderSrc}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        />
      )}
      
      <img
        ref={imgRef}
        src={lazy ? undefined : optimizedSrc}
        data-src={lazy ? optimizedSrc : undefined}
        alt={alt}
        width={width}
        height={height}
        onLoad={handleLoad}
        onError={handleError}
        className={`w-full h-full object-cover transition-opacity duration-30 0 ${
          isLoaded ? 'opacity-10 0' : 'opacity-0'
        }`}
        loading={lazy ? 'lazy' : 'eager'}
        decoding="async"
      />
    </div>;
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;
