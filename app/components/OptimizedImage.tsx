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
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleLoad = () => {
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
    onLoad?.();
  };

  const handleError = () => {
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
    setHasError(true);
    onError?.();
  };

  if (hasError) {
    return (
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

>>>>>>> cursor/fix-errors-and-merge-to-main-9706
