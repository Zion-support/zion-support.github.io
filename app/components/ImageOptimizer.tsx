'use client';
import React, { useState, useRef, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface ImageOptimizerProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: string;
  effect?: 'blur' | 'opacity' | 'black-and-white';
  threshold?: number;
}

const ImageOptimizer: React.FC<ImageOptimizerProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  placeholder,
  effect = 'blur',
  threshold = 100
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) {
      setIsLoaded(true);
    }
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError(true);
  };

  // Generate optimized src with WebP format and responsive sizes
  const getOptimizedSrc = (originalSrc: string, width?: number) => {
    if (originalSrc.startsWith('http') || originalSrc.startsWith('data:')) {
      return originalSrc;
    }
    
    // For local images, add optimization parameters
    const baseUrl = originalSrc;
    const params = new URLSearchParams();
    
    if (width) {
      params.set('w', width.toString());
    }
    
    // Add quality parameter
    params.set('q', '80');
    
    // Add format parameter for WebP
    params.set('f', 'webp');
    
    return `${baseUrl}?${params.toString()}`;
  };

  if (error) {
    return (
      <div 
        className={`bg-gray-200 dark:bg-gray-700 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-500 text-sm">Image not available</span>
      </div>
    );
  }

  if (priority) {
    return (
      <img
        ref={imgRef}
        src={getOptimizedSrc(src, width)}
        alt={alt}
        className={className}
        width={width}
        height={height}
        onLoad={handleLoad}
        onError={handleError}
        loading="eager"
        decoding="async"
      />
    );
  }

  return (
    <LazyLoadImage
      src={getOptimizedSrc(src, width)}
      alt={alt}
      className={className}
      width={width}
      height={height}
      effect={effect}
      threshold={threshold}
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
      loading="lazy"
      decoding="async"
    />
  );
};

export default ImageOptimizer;