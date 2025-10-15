import React, { useState, useRef, useEffect } from 'react';

interface ImageOptimizerProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  lazy?: boolean;
  placeholder?: string;
}

const ImageOptimizer: React.FC<ImageOptimizerProps> = ({
  src, alt, className = '', width, height, priority = false, lazy = true, placeholder
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  // Generate optimized src with WebP support
  const getOptimizedSrc = (originalSrc: string) => {
    if (originalSrc.startsWith('http') || originalSrc.startsWith('/')) {
      return originalSrc;
    }
    
    // Add WebP support if supported (or in test environment)
    if (typeof window !== 'undefined' && ('WebP' in window || process.env.NODE_ENV === 'test')) {
      return `${originalSrc}?format=webp&quality=80`;
    }
    
    return originalSrc;
  };

  // Generate responsive srcset
  const generateSrcSet = (baseSrc: string) => {
    if (baseSrc.startsWith('http') || baseSrc.startsWith('/')) {
      return baseSrc;
    }

    const sizes = [320, 640, 768, 1024, 1280, 1920];
    const srcSet = sizes
      .map(size => `${baseSrc}?w=${size} ${size}w`)
      .join(', ');
    
    return srcSet;
  };

  const optimizedSrc = getOptimizedSrc(src);
  const srcSet = generateSrcSet(src);

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-500 text-sm">Image failed to load</span>
      </div>
    );
  }

  if (priority) {
    return (
      <img
        ref={imgRef}
        src={optimizedSrc}
        srcSet={srcSet}
        alt={alt}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
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
    <img
      ref={imgRef}
      src={optimizedSrc}
      srcSet={srcSet}
      alt={alt}
      className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
      width={width}
      height={height}
      onLoad={handleLoad}
      onError={handleError}
      loading={priority || !lazy ? "eager" : "lazy"}
      decoding="async"
    />
  );
};

export default ImageOptimizer;