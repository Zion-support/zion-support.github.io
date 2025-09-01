import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface OptimizedImageProps {

  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({

  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes = '100vw',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOTNhM2E0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+TG9hZGluZy4uLjwvdGV4dD48L3N2Zz4=',
  onLoad,
  onError
}) => {

  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {

    if (priority && imgRef.current) {

      imgRef.current.loading = 'eager';
    }
  }, [priority]);

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
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width: width || 'auto', height: height || 'auto' }}
      >
        <span className="text-gray-500 text-sm">Image failed to load</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder */}
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-gray-100 animate-pulse"
          style={{ width: width || '100%', height: height || '100%' }}
        />
      )}
      
      {/* Main Image */}
      <motion.img
        ref={imgRef}
        src={isLoaded ? src : placeholder}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={priority ? 'eager' : 'lazy'}
        className={`transition-opacity duration-300 ${

          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={handleLoad}
        onError={handleError}
        style={{

          width: width ? `${width}px` : '100%',
          height: height ? `${height}px` : 'auto'
        }}
      />
      
      {/* Loading Spinner */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
        </div>
      )}
    </div>
  );
};

// WebP Image Component with Fallback
export const WebPImage: React.FC<OptimizedImageProps & { webpSrc?: string }> = ({

  src,
  webpSrc,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes = '100vw',
  placeholder,
  onLoad,
  onError
}) => {

  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {

    if (priority && imgRef.current) {

      imgRef.current.loading = 'eager';
    }
  }, [priority]);

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
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width: width || 'auto', height: height || 'auto' }}
      >
        <span className="text-gray-500 text-sm">Image failed to load</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder */}
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-gray-100 animate-pulse"
          style={{ width: width || '100%', height: height || '100%' }}
        />
      )}
      
      {/* WebP Image with Fallback */}
      <picture>
        {webpSrc && (
          <source
            srcSet={webpSrc}
            type="image/webp"
            sizes={sizes}
          />
        )}
        <motion.img
          ref={imgRef}
          src={isLoaded ? src : placeholder}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          loading={priority ? 'eager' : 'lazy'}
          className={`transition-opacity duration-300 ${

            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          style={{

            width: width ? `${width}px` : '100%',
            height: height ? `${height}px` : 'auto'
          }}
        />
      </picture>
      
      {/* Loading Spinner */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
        </div>
      )}
    </div>
  );
};