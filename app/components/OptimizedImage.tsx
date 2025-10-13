import React, { useState, useCallback } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: string;
  effect?: 'blur' | 'black-and-white' | 'opacity';
  threshold?: number;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
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

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setHasError(true);
    onError?.();
  }, [onError]);

  // Generate optimized src with WebP format and responsive sizing
  const getOptimizedSrc = (originalSrc: string, size?: number) => {
    if (originalSrc.startsWith('http') || originalSrc.startsWith('data:')) {
      return originalSrc;
    }
    
    // For local images, add optimization parameters
    const baseUrl = originalSrc.split('?')[0];
    const params = new URLSearchParams();
    
    if (size) {
      params.set('w', size.toString());
    }
    params.set('f', 'webp');
    params.set('q', '85');
    
    return `${baseUrl}?${params.toString()}`;
  };

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

  if (priority) {
    return (
      <img
        src={getOptimizedSrc(src, width)}
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
    <LazyLoadImage
      src={getOptimizedSrc(src, width)}
      alt={alt}
      className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
      width={width}
      height={height}
      effect={effect}
      placeholderSrc={placeholder || `data:image/svg+xml;base64,${btoa(`
        <svg width="${width || 400}" height="${height || 300}" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="#f3f4f6"/>
          <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#9ca3af" font-family="Arial, sans-serif" font-size="14">
            Loading...
          </text>
        </svg>
      `)}`}
      threshold={threshold}
      onLoad={handleLoad}
      onError={handleError}
      loading="lazy"
      decoding="async"
    />
  );
};

export default OptimizedImage;