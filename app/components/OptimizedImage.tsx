import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

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
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
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
        rootMargin: '50px 0px',
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority, loading]);

  // Generate optimized src with WebP support
  const getOptimizedSrc = (originalSrc: string) => {
    if (originalSrc.startsWith('data:') || originalSrc.startsWith('blob:')) {
      return originalSrc;
    }

    // Check if browser supports WebP
    const supportsWebP = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    };

    // For external images, return as-is
    if (originalSrc.startsWith('http')) {
      return originalSrc;
    }

    // For local images, you could implement image optimization here
    // This is a placeholder for actual optimization logic
    return originalSrc;
  };

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setIsError(true);
    onError?.();
  };

  const optimizedSrc = getOptimizedSrc(src);

  return (
    <>
      {/* Preload critical images */}
      {priority && (
        <Helmet>
          <link rel="preload" as="image" href={optimizedSrc} />
        </Helmet>
      )}

      <div
        ref={imgRef}
        className={`relative overflow-hidden ${className}`}
        style={{ width, height }}
      >
        {/* Placeholder */}
        {!isLoaded && !isError && (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-purple-900 animate-pulse">
            {placeholder === 'blur' && blurDataURL && (
              <img
                src={blurDataURL}
                alt=""
                className="w-full h-full object-cover filter blur-sm"
                aria-hidden="true"
              />
            )}
          </div>
        )}

        {/* Error state */}
        {isError && (
          <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
            <div className="text-center text-gray-400">
              <div className="w-8 h-8 mx-auto mb-2">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <p className="text-xs">Failed to load image</p>
            </div>
          </div>
        )}

        {/* Actual image */}
        {isInView && !isError && (
          <img
            src={optimizedSrc}
            alt={alt}
            width={width}
            height={height}
            sizes={sizes}
            loading={loading}
            onLoad={handleLoad}
            onError={handleError}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              aspectRatio: width && height ? `${width}/${height}` : undefined
            }}
          />
        )}

        {/* Loading indicator */}
        {isInView && !isLoaded && !isError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
      </div>
    </>
  );
};

export default OptimizedImage;