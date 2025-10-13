import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

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

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  onLoad,
  onError,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
<<<<<<< HEAD
=======
  onError;
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
>>>>>>> cursor/fix-errors-and-merge-to-main-91ea
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-1cdc
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleLoad = () => {
    setIsLoaded(true);
<<<<<<< HEAD
=======
  
    setIsLoading(false);
>>>>>>> cursor/fix-errors-and-merge-to-main-91ea
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-1cdc
    onLoad?.();
  };

  const handleError = () => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
  
    setIsLoading(false);
>>>>>>> cursor/fix-errors-and-merge-to-main-91ea
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-1cdc
    setHasError(true);
    onError?.();
  };

  if (hasError) {
    return (
      <div
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
<<<<<<< HEAD
        <span className="text-gray-500">Failed to load image
=======
    <div className={`optimized-image-error ${className}`}>
        <div className="flex items-center justify-center w-full h-full bg-gray-100 text-gray-500">
          Failed to load image;
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-91ea
=======
        <span className="text-gray-500">Failed to load image</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-1cdc
      </div>
  );
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
    );
  }

  return (
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
      />
  );
};

<<<<<<< HEAD
export default OptimizedImage;
<<<<<<< HEAD
=======
export default OptimizedImage;
>>>>>>> origin/main
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-1cdc
