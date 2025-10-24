import React, { memo } from 'react';
import { useImageOptimization } from '../hooks/useImageOptimization';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  placeholder?: string;
  lazy?: boolean;
  quality?: number;
  format?: 'webp' | 'avif' | 'jpeg' | 'png';
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = memo(({
  src,
  alt,
  width,
  height,
  className = '',
  placeholder,
  lazy = true,
  quality = 80,
  format = 'webp',
  priority = false
}) => {
  const { imageSrc, isLoaded, shouldLoad } = useImageOptimization({
    src,
    placeholder,
    lazy: lazy && !priority,
    quality,
    format
  });

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      data-src={src}
      style={{ width, height }}
    >
      {placeholder && !isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ backgroundImage: `url(${placeholder})`, backgroundSize: 'cover' }}
        />
      )}
      <img
        src={shouldLoad ? imageSrc : placeholder}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;