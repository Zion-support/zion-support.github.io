import React, { useState } from 'react';
import React, { useState, useRef, useEffect } from 'react';

interface ImageOptimizerProps {
  src: string;,
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: string;
}

const ImageOptimizer: React.FC<ImageOptimizerProps> = ({
  src, alt, className = '', _width, _height, priority = false, _placeholder, effect = 'blur', threshold = 100, _onLoad, _onError
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
  const getOptimizedSrc = (_originalSrc: string) => {
    if (originalSrc.startsWith('http') || originalSrc.startsWith('/')) {
      return originalSrc;
    }
    
    // Add WebP support if supported
    if (typeof window !== 'undefined' && 'WebP' in window) {
      const webpSrc = originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      return webpSrc;
    }
    
    return originalSrc;
  };

  // Generate responsive srcset
  const generateSrcSet = (_baseSrc: string) => {
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
    <>
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
      ></></div>
        <span className="text-gray-500 text-sm">Image failed to load</span>
      </div>
    </>
  );
  }

  if (priority) {
    return (
    <>
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
      /></></img>
    </>
  );
  }

  return (

})