import React, { useState, useCallback } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface ImageOptimizerProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  placeholder?: string;
  effect?: 'blur' | 'black-and-white' | 'opacity';
  threshold?: number;
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png';
  sizes?: string;
  priority?: boolean;
}

const ImageOptimizer: React.FC<ImageOptimizerProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  placeholder,
  effect = 'blur',
  threshold = 100,
  quality = 80,
  format = 'webp',
  sizes,
  priority = false
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
  }, []);

  // Generate optimized src with quality and format parameters
  const optimizedSrc = React.useMemo(() => {
    if (src.startsWith('data:') || src.startsWith('blob:')) {
      return src;
    }
    
    // For external images, you might want to use an image optimization service
    // like Cloudinary, ImageKit, or Next.js Image Optimization
    return src;
  }, [src]);

  // Generate srcSet for responsive images
  const srcSet = React.useMemo(() => {
    if (sizes && !src.startsWith('data:') && !src.startsWith('blob:')) {
      const baseUrl = src.split('?')[0];
      const params = src.includes('?') ? src.split('?')[1] : '';
      
      return [
        `${baseUrl}?w=320&q=${quality}&f=${format}${params ? `&${params}` : ''} 320w`,
        `${baseUrl}?w=640&q=${quality}&f=${format}${params ? `&${params}` : ''} 640w`,
        `${baseUrl}?w=1024&q=${quality}&f=${format}${params ? `&${params}` : ''} 1024w`,
        `${baseUrl}?w=1280&q=${quality}&f=${format}${params ? `&${params}` : ''} 1280w`
      ].join(', ');
    }
    return undefined;
  }, [src, quality, format, sizes]);

  if (hasError) {
    return (
      <div 
        className={`${className} bg-gray-200 flex items-center justify-center`}
        style={{ width, height }}
      >
        <span className="text-gray-500 text-sm">Failed to load image</span>
      </div>
    );
  }

  if (priority) {
    return (
      <img
        src={optimizedSrc}
        srcSet={srcSet}
        alt={alt}
        className={className}
        width={width}
        height={height}
        sizes={sizes}
        loading="eager"
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
      />
    );
  }

  return (
    <div className="relative">
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center"
          style={{ width, height }}
        />
      )}
      <LazyLoadImage
        src={optimizedSrc}
        srcSet={srcSet}
        alt={alt}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        width={width}
        height={height}
        effect={effect}
        placeholderSrc={placeholder}
        threshold={threshold}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
        decoding="async"
        sizes={sizes}
      />
    </div>
  );
};

export default ImageOptimizer;