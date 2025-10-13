import React, { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
<<<<<<< HEAD
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
=======
  onLoad?: () => void;
  onError?: () => void;
  children?: React.ReactNode;
>>>>>>> 01a7da73ce4c3be8c79b6cf84a9d7a13c7877ac0
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
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);
=======
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
>>>>>>> 01a7da73ce4c3be8c79b6cf84a9d7a13c7877ac0

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
<<<<<<< HEAD
      <div
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-500 text-sm">Failed to load image</span>
=======
      <div className={`${className} flex items-center justify-center bg-gray-200 text-gray-500`}>
        <span>Failed to load image</span>
>>>>>>> 01a7da73ce4c3be8c79b6cf84a9d7a13c7877ac0
      </div>
    );
  }

  return (
<<<<<<< HEAD
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {placeholder && !isLoaded && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ width, height }}
        />
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      )}
=======
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
>>>>>>> 01a7da73ce4c3be8c79b6cf84a9d7a13c7877ac0
    </div>
  );
};

<<<<<<< HEAD
export default OptimizedImage;
=======
export default OptimizedImage;
>>>>>>> 01a7da73ce4c3be8c79b6cf84a9d7a13c7877ac0
