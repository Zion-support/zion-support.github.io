import React, { useState, useRef, useEffect } from 'react';

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

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  onLoad,
  onError
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.addEventListener('load', () => {
        setIsLoading(false);
        onLoad?.();
      });
      
      imgRef.current.addEventListener('error', () => {
        setHasError(true);
        setIsLoading(false);
        onError?.();
      });
    }
  }, [onLoad, onError]);

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width: width ? `${width}px` : '100%', height: height ? `${height}px` : '200px' }}
      >
        <span className="text-gray-500">Failed to load image</span>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} style={{ width: width ? `${width}px` : '100%', height: height ? `${height}px` : 'auto' }}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <span className="text-gray-500">Loading...</span>
        </div>
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
      />
    </div>
  );
}