import React, { useState, useRef, useEffect, forwardRef } from 'react';
import { motion } from 'framer-motion';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage = forwardRef<HTMLImageElement, OptimizedImageProps>(({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  onLoad,
  onError
}, ref) => {
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

  useEffect(() => {
    const img = imgRef.current;
    if (img) {
      img.addEventListener('load', handleLoad);
      img.addEventListener('error', handleError);

      return () => {
        img.removeEventListener('load', handleLoad);
        img.removeEventListener('error', handleError);
      };
    }
  }, [onLoad, onError]);

  if (hasError) {
    return (
      <div className={`optimized-image-container ${className}`} style={{ width, height }}>
        <div className="flex items-center justify-center h-full bg-gray-200 text-gray-500">
          Failed to load image
        </div>
      </div>
    );
  }

  return (
    <div className={`optimized-image-container ${className}`} style={{ width, height }}>
      {!isLoaded && (
        <div className="animate-pulse bg-gray-200 w-full h-full flex items-center justify-center">
          <div className="text-gray-400">Loading...</div>
        </div>
      )}
      <motion.img
        ref={(node) => {
          imgRef.current = node;
          if (typeof ref === 'function') {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        className={`optimized-image ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;
