<<<<<<< HEAD
import React, { useState } from 'react';
=======
'use client';
import React, { useState, useCallback } from 'react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0d10

interface OptimizedImageProps {
  src: string;
  alt: string;
<<<<<<< HEAD
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
=======
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sizes?: string;
  loading?: 'lazy' | 'eager';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0d10
  onLoad?: () => void;
  onError?: () => void;
}

<<<<<<< HEAD
export default function OptimizedImage({ 
  src, 
  alt, 
  className = '', 
  width, 
  height,
  priority = false,
  onLoad,
  onError
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  };

  if (hasError) {
    return (
      <div className={`optimized-image-error ${className}`}>
        <div className="flex items-center justify-center w-full h-full bg-gray-100 text-gray-500">
          Failed to load image
        className="optimized-image"
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        onLoad={handleLoad}
        onError={handleError}
        style={{ opacity: isLoading ? 0 : 1 }}
      />
    </div>
  );
}
=======
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
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setHasError(true);
    onError?.();
  }, [onError]);

  // Intersection Observer for lazy loading
  React.useEffect(() => {
    if (priority || isInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.1
      }
    );

    const imgElement = document.querySelector(`[data-src="${src}"]`);
    if (imgElement) {
      observer.observe(imgElement);
    }

    return () => observer.disconnect();
  }, [src, priority, isInView]);

  // Generate responsive image sources
  const generateSrcSet = (baseSrc: string, widths: number[]) => {
    return widths
      .map(w => `${baseSrc}?w=${w}&q=${quality} ${w}w`)
      .join(', ');
  };

  const responsiveWidths = [320, 640, 768, 1024, 1280, 1536];
  const srcSet = generateSrcSet(src, responsiveWidths);

  // Generate WebP sources for better compression
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const webpSrcSet = generateSrcSet(webpSrc, responsiveWidths);

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
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      {/* Blur placeholder */}
      {placeholder === 'blur' && blurDataURL && !isLoaded && (
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm scale-110"
          style={{
            backgroundImage: `url(${blurDataURL})`,
            backgroundSize: 'cover'
          }}
        />
      )}

      {/* Loading skeleton */}
      {!isLoaded && !blurDataURL && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

      {/* Picture element for WebP support */}
      <picture>
        <source
          srcSet={webpSrcSet}
          sizes={sizes}
          type="image/webp"
        />
        <img
          src={isInView ? src : undefined}
          data-src={src}
          srcSet={isInView ? srcSet : undefined}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          loading={priority ? 'eager' : loading}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </picture>

      {/* Loading indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0d10
