<<<<<<< HEAD
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
=======
import React, { useState } from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-91ea

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

<<<<<<< HEAD
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
=======
export default function OptimizedImage({ 
  src, 
  alt, 
  className = '', 
  width, 
>>>>>>> cursor/fix-errors-and-merge-to-main-91ea
  height,
  className = '',
  priority = false,
  onLoad,
<<<<<<< HEAD
  onError,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
=======
  onError
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
>>>>>>> cursor/fix-errors-and-merge-to-main-91ea
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleLoad = () => {
<<<<<<< HEAD
    setIsLoaded(true);
=======
    setIsLoading(false);
>>>>>>> cursor/fix-errors-and-merge-to-main-91ea
    onLoad?.();
  };

  const handleError = () => {
<<<<<<< HEAD
=======
    setIsLoading(false);
>>>>>>> cursor/fix-errors-and-merge-to-main-91ea
    setHasError(true);
    onError?.();
  };

  if (hasError) {
    return (
<<<<<<< HEAD
      <div
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-500">Failed to load image</span>
=======
      <div className={`optimized-image-error ${className}`}>
        <div className="flex items-center justify-center w-full h-full bg-gray-100 text-gray-500">
          Failed to load image
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-91ea
      </div>
    );
  }

  return (
<<<<<<< HEAD
    <motion.div
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority ? 'eager' : 'lazy'}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
=======
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
      )}
      <img
        src={src}
        alt={alt}
        className="optimized-image"
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        onLoad={handleLoad}
        onError={handleError}
        style={{ opacity: isLoading ? 0 : 1 }}
>>>>>>> cursor/fix-errors-and-merge-to-main-91ea
      />
    </motion.div>
  );
<<<<<<< HEAD
};

export default OptimizedImage;
=======
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
    </div>
  )
}

export default OptimizedImage
>>>>>>> cursor/fix-errors-and-merge-to-main-91ea
