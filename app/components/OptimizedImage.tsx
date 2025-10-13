import React, { useState, useCallback } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  placeholder?: string;
  effect?: 'blur' | 'opacity' | 'black-and-white';
  threshold?: number;
  onLoad?: () => void;
  onError?: () => void;
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  placeholder,
  effect = 'blur',
  threshold = 100,
  onLoad,
  onError,
  priority = false,
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

  // Generate optimized src with WebP support
  const getOptimizedSrc = (originalSrc: string) => {
    if (originalSrc.startsWith('http') || originalSrc.startsWith('data:')) {
      return originalSrc;
    }
    
    // Add width/height parameters for responsive images
    const params = new URLSearchParams();
    if (width) params.set('w', width.toString());
    if (height) params.set('h', height.toString());
    params.set('q', '80'); // Quality
    params.set('f', 'webp'); // Format
    
    const separator = originalSrc.includes('?') ? '&' : '?';
    return `${originalSrc}${separator}${params.toString()}`;
  };

  // Generate placeholder
  const getPlaceholder = () => {
    if (placeholder) return placeholder;
    
    // Generate a simple gradient placeholder
    const canvas = document.createElement('canvas');
    canvas.width = width || 300;
    canvas.height = height || 200;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#f3f4f6');
      gradient.addColorStop(1, '#e5e7eb');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    
    return canvas.toDataURL();
  };

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <div className="text-gray-400 text-sm">Failed to load image</div>
      </div>
    );
  }

  return (
    <LazyLoadImage
      src={getOptimizedSrc(src)}
      alt={alt}
      width={width}
      height={height}
      className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
      placeholderSrc={getPlaceholder()}
      effect={effect}
      threshold={threshold}
      onLoad={handleLoad}
      onError={handleError}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      // Additional performance optimizations
      style={{
        willChange: 'opacity',
        transform: 'translateZ(0)', // Hardware acceleration
      }}
    />
  );
};

export default OptimizedImage;