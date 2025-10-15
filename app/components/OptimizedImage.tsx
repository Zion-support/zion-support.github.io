import React, { useState, useRef, useEffect } from 'react';
import { usePerformanceOptimization } from '../hooks/usePerformanceOptimization';

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
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(placeholder || '');
  const imgRef = useRef<HTMLImageElement>(null);
  const { } = usePerformanceOptimization();

  // Generate optimized image URL (you can integrate with your image optimization service)
  const getOptimizedSrc = (originalSrc: string, _w?: number, _h?: number, _q: number = quality) => {
    // For now, return original src. In production, integrate with services like:
    // - Cloudinary: `https://res.cloudinary.com/your-cloud/image/fetch/w_${w},h_${h},q_${q},f_auto/${originalSrc}`
    // - Next.js Image Optimization: `/api/image?url=${encodeURIComponent(originalSrc)}&w=${w}&h=${h}&q=${q}`
    // - Vercel Image Optimization: `/_next/image?url=${encodeURIComponent(originalSrc)}&w=${w}&h=${h}&q=${q}`
    return originalSrc;
  };

  const optimizedSrc = getOptimizedSrc(src, width, height, quality);

  
  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !isLoaded && !hasError) {
        setCurrentSrc(optimizedSrc);
      }
    });
  };

  useEffect(() => {
    if (loading === 'lazy' && !priority) {
      const observer = new IntersectionObserver(handleIntersection, {
        rootMargin: '50px',
        threshold: 0.1,
      });

      if (imgRef.current) {
        observer.observe(imgRef.current);
      }

      return () => observer.disconnect();
    } else if (priority) {
      setCurrentSrc(optimizedSrc);
    }
    return undefined;
  }, [loading, priority, optimizedSrc, isLoaded, hasError]);

  if (hasError) {
    return (
      <div
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
        role="img"
        aria-label={alt}
      >
        <svg
          className="w-8 h-8 text-gray-400"
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
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      {placeholder && !isLoaded && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ backgroundImage: `url(${placeholder})`, backgroundSize: 'cover' }}
        />
      )}
      <img
        ref={imgRef}
        src={currentSrc}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={priority ? 'eager' : loading}
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          width: width ? `${width}px` : '100%',
          height: height ? `${height}px` : 'auto',
        }}
      />
    </div>
  );
};

export default OptimizedImage;