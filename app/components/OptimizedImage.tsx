import React, { useState, useRef, useEffect, memo } from "react";
import Image from "next/image";
import { optimizeImageUrl, generateImagePlaceholder, lazyLoadImage } from '../utils/imageOptimizer';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'jpeg' | 'png';
  className?: string;
  lazy?: boolean;
  placeholder?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = memo(({
  src,
  alt,
  width,
  height,
  quality = 80,
  format = 'webp',
  className = '',
  lazy = true,
  placeholder = true,
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const optimizedSrc = optimizeImageUrl(src, {
    quality,
    format,
    width: width || 0,
    height: height || 0
  });

  const placeholderSrc = placeholder && (width && height) 
    ? generateImagePlaceholder(width, height)
    : undefined;

  useEffect(() => {
    if (lazy && imgRef.current && typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      lazyLoadImage(imgRef.current);
    }
  }, [lazy]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <div className="text-center text-gray-500">
          <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm1 2h12l-4-8-3 6-2-4-3 6z" clipRule="evenodd" />
          </svg>
          <span className="text-sm">Failed to load</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      {placeholder && !isLoaded && placeholderSrc && (
        <Image
          src={placeholderSrc}
          alt=""
          width={width || 0}
          height={height || 0}
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        />
      )}
      <Image
        ref={imgRef}
        src={lazy ? placeholderSrc || '/placeholder.jpg' : optimizedSrc}
        alt={alt}
        width={width || 0}
        height={height || 0}
        onLoad={handleLoad}
        onError={handleError}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading={lazy ? 'lazy' : 'eager'}
        quality={quality}
      />
    </div>
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;