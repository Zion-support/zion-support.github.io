<<<<<<< HEAD
import React, { useState, useRef, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
=======
import React, { useState, useCallback } from 'react';
import { LazyImage } from './LazyImage';
>>>>>>> cursor/analyze-improve-and-deploy-application-26cd

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  placeholder?: string;
<<<<<<< HEAD
  effect?: 'blur' | 'black-and-white' | 'opacity';
  threshold?: number;
  onLoad?: () => void;
  onError?: () => void;
=======
  sizes?: string;
>>>>>>> cursor/analyze-improve-and-deploy-application-26cd
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
<<<<<<< HEAD
  placeholder,
  effect = 'blur',
  threshold = 100,
  onLoad,
  onError
=======
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2Y3ZjhmOSIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOWNhM2FmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+TG9hZGluZy4uLjwvdGV4dD48L3N2Zz4=',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
>>>>>>> cursor/analyze-improve-and-deploy-application-26cd
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

<<<<<<< HEAD
  const handleLoad = () => {
=======
  const handleLoad = useCallback(() => {
>>>>>>> cursor/analyze-improve-and-deploy-application-26cd
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
  }, []);

  // Generate responsive image sources
  const generateSrcSet = (baseSrc: string) => {
    const baseUrl = baseSrc.replace(/\.[^/.]+$/, '');
    const extension = baseSrc.split('.').pop();
    
    return [
      `${baseUrl}-320w.${extension} 320w`,
      `${baseUrl}-640w.${extension} 640w`,
      `${baseUrl}-1024w.${extension} 1024w`,
      `${baseUrl}-1280w.${extension} 1280w`,
      `${baseUrl}-1920w.${extension} 1920w`
    ].join(', ');
  };

<<<<<<< HEAD
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

=======
>>>>>>> cursor/analyze-improve-and-deploy-application-26cd
  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
        role="img"
<<<<<<< HEAD
        aria-label={`Failed to load image: ${alt}`}
=======
        aria-label={alt}
>>>>>>> cursor/analyze-improve-and-deploy-application-26cd
      >
        <span className="text-gray-500 text-sm">Image unavailable</span>
      </div>
    );
  }
<<<<<<< HEAD

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
=======

  return (
    <LazyImage
      src={src}
      srcSet={generateSrcSet(src)}
>>>>>>> cursor/analyze-improve-and-deploy-application-26cd
      alt={alt}
      width={width}
      height={height}
      className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
<<<<<<< HEAD
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
=======
      onLoad={handleLoad}
      onError={handleError}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      sizes={sizes}
      style={{
        backgroundImage: `url(${placeholder})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
>>>>>>> cursor/analyze-improve-and-deploy-application-26cd
    />
  );
};

export default OptimizedImage;