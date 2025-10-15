import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  placeholder?: string;
  sizes?: string;
  quality?: number;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  onError?: () => void;
  blurDataURL?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down' | 'none';
  objectPosition?: string;
  draggable?: boolean;
  decoding?: 'sync' | 'async' | 'auto';
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  placeholder,
  sizes = '100vw',
  quality = 75,
  loading = 'lazy',
  onLoad,
  onError,
  blurDataURL,
  objectFit = 'cover',
  objectPosition = 'center',
  draggable = false,
  decoding = 'async',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(placeholder || '');
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Generate optimized image URL with better optimization
  const getOptimizedSrc = useCallback((originalSrc: string, w?: number, h?: number, q: number = quality) => {
    // Check if it's already an optimized URL
    if (originalSrc.includes('w_') || originalSrc.includes('q_') || originalSrc.includes('f_auto')) {
      return originalSrc;
    }

    // For production, integrate with services like:
    // - Cloudinary: `https://res.cloudinary.com/your-cloud/image/fetch/w_${w},h_${h},q_${q},f_auto/${originalSrc}`
    // - Next.js Image Optimization: `/api/image?url=${encodeURIComponent(originalSrc)}&w=${w}&h=${h}&q=${q}`
    // - Vercel Image Optimization: `/_next/image?url=${encodeURIComponent(originalSrc)}&w=${w}&h=${h}&q=${q}`
    // - ImageKit: `https://ik.imagekit.io/your-id/tr:w-${w},h-${h},q-${q},f-auto/${originalSrc}`
    
    // For now, return original src with basic optimization
    if (w && h) {
      return `${originalSrc}?w=${w}&h=${h}&q=${q}&f=auto`;
    }
    return originalSrc;
  }, [quality]);

  const optimizedSrc = useMemo(() => getOptimizedSrc(src, width, height, quality), [src, width, height, getOptimizedSrc]);

  // Preload critical images
  useEffect(() => {
    if (priority && optimizedSrc) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = optimizedSrc;
      document.head.appendChild(link);

      return () => {
        document.head.removeChild(link);
      };
    }
  }, [priority, optimizedSrc]);

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
        if (!isLoaded && !hasError) {
          setCurrentSrc(optimizedSrc);
        }
        // Disconnect observer once image is in view
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      }
    });
  }, [isLoaded, hasError, optimizedSrc]);

  // Set up intersection observer for lazy loading
  useEffect(() => {
    if (loading === 'lazy' && !priority && !isInView) {
      observerRef.current = new IntersectionObserver(handleIntersection, {
        rootMargin: '50px',
        threshold: 0.1,
      });

      if (imgRef.current) {
        observerRef.current.observe(imgRef.current);
      }

      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    } else if (priority || isInView) {
      setCurrentSrc(optimizedSrc);
    }
  }, [loading, priority, isInView, handleIntersection, optimizedSrc]);

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
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      {/* Blur placeholder */}
      {(placeholder || blurDataURL || defaultBlurDataURL) && !isLoaded && (
        <div
          className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse"
          style={{
            backgroundImage: `url(${placeholder || blurDataURL || defaultBlurDataURL})`,
            backgroundSize: 'cover',
            backgroundPosition: objectPosition,
            filter: 'blur(5px)',
            transform: 'scale(1.1)',
          }}
        />
      )}

      {/* Loading skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse" />
      )}

      {/* Main image */}
      <img
        ref={imgRef}
        src={currentSrc}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={priority ? 'eager' : loading}
        decoding={decoding}
        draggable={draggable}
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          width: width ? `${width}px` : '100%',
          height: height ? `${height}px` : 'auto',
          objectFit,
          objectPosition,
        }}
      />

      {/* Loading indicator */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;