import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  placeholder?: string;
  blurDataURL?: string;
  onLoad?: () => void;
  onError?: () => void;
  threshold?: number;
  rootMargin?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down' | 'none';
  objectPosition?: string;
  quality?: number;
  sizes?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PC9zdmc+',
  blurDataURL,
  onLoad,
  onError,
  threshold = 0.1,
  rootMargin = '50px',
  objectFit = 'cover',
  objectPosition = 'center',
  quality = 75,
  sizes = '100vw',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState('');
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Generate optimized image URL
  const optimizedSrc = useMemo(() => {
    if (src.includes('w_') || src.includes('q_') || src.includes('f_auto')) {
      return src;
    }
    
    if (width && height) {
      return `${src}?w=${width}&h=${height}&q=${quality}&f=auto`;
    }
    return src;
  }, [src, width, height, quality]);

  // Generate blur placeholder
  const generateBlurDataURL = useCallback((w: number = 10, h: number = 10) => {
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#f3f4f6';
      ctx.fillRect(0, 0, w, h);
    }
    return canvas.toDataURL();
  }, []);

  const defaultBlurDataURL = useMemo(() => generateBlurDataURL(), [generateBlurDataURL]);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setHasError(true);
    onError?.();
  }, [onError]);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        setCurrentSrc(optimizedSrc);
        
        // Disconnect observer once image is in view
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      }
    });
  }, [optimizedSrc]);

  // Set up intersection observer
  useEffect(() => {
    if (!isInView && imgRef.current) {
      observerRef.current = new IntersectionObserver(handleIntersection, {
        rootMargin,
        threshold,
      });

      observerRef.current.observe(imgRef.current);

      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    }
  }, [isInView, handleIntersection, rootMargin, threshold]);

  // Preload image when in view
  useEffect(() => {
    if (isInView && optimizedSrc) {
      const img = new Image();
      img.src = optimizedSrc;
      img.onload = () => setCurrentSrc(optimizedSrc);
      img.onerror = handleError;
    }
  }, [isInView, optimizedSrc, handleError]);

  if (hasError) {
    return (
      <div
        className={`bg-gray-200 dark:bg-gray-700 flex items-center justify-center ${className}`}
        style={{ width, height }}
        role="img"
        aria-label={alt}
      >
        <div className="text-center p-4">
          <svg
            className="w-8 h-8 text-gray-400 mx-auto mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="text-xs text-gray-500">Failed to load image</p>
        </div>
      </div>
    );
  }

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      {/* Blur placeholder */}
      {(placeholder || blurDataURL || defaultBlurDataURL) && !isLoaded && (
        <img
          src={placeholder || blurDataURL || defaultBlurDataURL}
          alt=""
          className="absolute inset-0 w-full h-full object-cover blur-sm"
          style={{
            objectFit,
            objectPosition,
          }}
        />
      )}

      {/* Loading skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse" />
      )}

      {/* Main image */}
      {isInView && currentSrc && (
        <img
          src={currentSrc}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            objectFit,
            objectPosition,
          }}
          loading="lazy"
          decoding="async"
        />
      )}

      {/* Loading indicator */}
      {!isLoaded && !hasError && isInView && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

export default LazyImage;