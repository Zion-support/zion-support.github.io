import React, { useState, useRef, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface EnhancedImageOptimizerProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: string;
  effect?: 'blur' | 'opacity' | 'black-and-white';
  threshold?: number;
  onLoad?: () => void;
  onError?: () => void;
}

const EnhancedImageOptimizer: React.FC<EnhancedImageOptimizerProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  placeholder,
  effect = 'blur',
  threshold = 100,
  onLoad,
  onError,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Generate optimized image URLs
  const generateOptimizedSrc = (originalSrc: string, width?: number, quality: number = 80) => {
    if (originalSrc.startsWith('data:') || originalSrc.startsWith('blob:')) {
      return originalSrc;
    }
    
    // For external images, use a placeholder service or return original
    if (originalSrc.startsWith('http')) {
      return originalSrc;
    }
    
    // For local images, you could implement optimization here
    return originalSrc;
  };

  const optimizedSrc = generateOptimizedSrc(src, width);
  const optimizedSrcSet = width ? `${optimizedSrc} ${width}w` : undefined;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: threshold / 100 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

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
        className={`bg-gray-200 dark:bg-gray-700 flex items-center justify-center ${className}`}
        style={{ width, height }}
        role="img"
        aria-label={`Failed to load image: ${alt}`}
      >
        <span className="text-gray-500 text-sm">Image unavailable</span>
      </div>
    );
  }

  if (priority || isInView) {
    return (
      <LazyLoadImage
        ref={imgRef}
        src={optimizedSrc}
        srcSet={optimizedSrcSet}
        alt={alt}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        width={width}
        height={height}
        effect={effect}
        placeholder={
          placeholder ? (
            <div
              className={`bg-gray-200 dark:bg-gray-700 animate-pulse ${className}`}
              style={{ width, height }}
            />
          ) : undefined
        }
        onLoad={handleLoad}
        onError={handleError}
        threshold={threshold}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
    );
  }

  return (
    <div
      ref={imgRef}
      className={`bg-gray-200 dark:bg-gray-700 animate-pulse ${className}`}
      style={{ width, height }}
      role="img"
      aria-label={`Loading image: ${alt}`}
    />
  );
};

export default EnhancedImageOptimizer;