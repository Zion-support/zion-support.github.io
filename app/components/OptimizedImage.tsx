import React, { useState, useRef, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
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
  width,
  height,
  className = '',
  priority = false,
  placeholder,
  effect = 'blur',
  threshold = 100,
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Generate optimized src for different screen sizes
  const generateSrcSet = (originalSrc: string) => {
    if (originalSrc.startsWith('http') || originalSrc.startsWith('/api/placeholder')) {
      return originalSrc;
    }
    
    // For local images, generate different sizes
    const basePath = originalSrc.replace(/\.[^/.]+$/, '');
    const extension = originalSrc.split('.').pop();
    
    return `${basePath}-${width || 400}w.${extension} ${width || 400}w,
            ${basePath}-${(width || 400) * 2}w.${extension} ${(width || 400) * 2}w,
            ${basePath}-${(width || 400) * 3}w.${extension} ${(width || 400) * 3}w`;
  };

  const optimizedSrc = generateSrcSet(src);

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
        role="img"
        aria-label={`Failed to load image: ${alt}`}
      >
        <span className="text-gray-500 text-sm">Image unavailable</span>
      </div>
    );
  }

  if (priority) {
    return (
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        onLoad={handleLoad}
        onError={handleError}
        loading="eager"
        decoding="async"
      />
    );
  }

  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
      effect={effect}
      threshold={threshold}
      placeholderSrc={placeholder}
      onLoad={handleLoad}
      onError={handleError}
      loading="lazy"
      decoding="async"
      sizes={`(max-width: 768px) ${width ? Math.min(width, 400) : 400}px, 
              (max-width: 1024px) ${width ? Math.min(width, 600) : 600}px, 
              ${width || 800}px`}
    />
  );
};

export default OptimizedImage;