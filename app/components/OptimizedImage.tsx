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
  children?: React.ReactNode;
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
  children,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setIsLoaded(true);
    }
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setHasError(true);
    onError?.();
  }, [onError]);

  const containerStyle: React.CSSProperties = {
    width: width ? `${width}px` : undefined,
    height: height ? `${height}px` : undefined,
  };

  if (hasError) {
    return (
      <div className={`${className} flex items-center justify-center bg-gray-200 text-gray-500`}>
        <span>Failed to load image</span>
  // Generate optimized image URL if using a service like Cloudinary
  const getOptimizedSrc = (originalSrc: string) => {
    if (originalSrc.startsWith('http') && !originalSrc.includes('cloudinary')) {
      return originalSrc;
    }
    
    // Add optimization parameters for Cloudinary or similar services
    const params = new URLSearchParams();
    if (quality) params.set('q', quality.toString());
    if (format) params.set('f', format);
    if (width) params.set('w', width.toString());
    if (height) params.set('h', height.toString());
    
    const separator = originalSrc.includes('?') ? '&' : '?';
    return `${originalSrc}${separator}${params.toString()}`;
  };

  const optimizedSrc = getOptimizedSrc(src);

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-500 text-sm">Failed to load image</span>
      </div>
    );
  }

  return (
    <div className={`${className} relative`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />
      {children}
    </div>
  );
};

export default OptimizedImage;

interface OptimizedImageProps {
  className?: string;
  children?: React.ReactNode;
}

export default function OptimizedImage({ className = '', children }: OptimizedImageProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
