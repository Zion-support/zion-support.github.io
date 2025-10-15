import React, { useState, useCallback } from 'react';
import { ImageIcon } from 'lucide-react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  quality?: number;
  sizes?: string;
  loading?: 'lazy' | 'eager';
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  placeholder = 'empty',
  quality = 75,
  sizes = '100vw',
  loading = 'lazy'
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleError = useCallback(() => {
    setIsLoading(false);
    setHasError(true);
  }, []);

  // Generate WebP src if supported
  const getOptimizedSrc = (originalSrc: string) => {
    if (originalSrc.startsWith('http') || originalSrc.startsWith('data:')) {
      return originalSrc;
    }
    
    // For local images, you might want to implement WebP conversion
    // This is a placeholder for WebP support
    return originalSrc;
  };

  const optimizedSrc = getOptimizedSrc(src);

  if (hasError) {
    return (
      <div 
        className={`bg-slate-700 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <ImageIcon className="w-8 h-8 text-slate-400" />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div 
          className="absolute inset-0 bg-slate-700 animate-pulse flex items-center justify-center"
          style={{ width, height }}
        >
          <ImageIcon className="w-8 h-8 text-slate-400" />
        </div>
      )}
      <img
        src={optimizedSrc}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        sizes={sizes}
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } ${className}`}
        style={{
          width: width ? `${width}px` : 'auto',
          height: height ? `${height}px` : 'auto',
        }}
      />
    </div>
  );
};

export default OptimizedImage;