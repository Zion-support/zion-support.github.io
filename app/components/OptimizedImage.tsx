<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import React, { useState, useCallback } from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
=======
import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7665

interface OptimizedImageProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default function OptimizedImage({ className = '', children }: OptimizedImageProps) {
  return (
    <div className={`${className}`}>
      {children}
=======
const OptimizedImage: React.FC<OptimizedImageProps> = ({
export default function OptimizedImage({
=======
const OptimizedImage: React.FC<OptimizedImageProps> = ({
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

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

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };
<<<<<<< HEAD
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setHasError(true);
    onError?.();
  }, [onError]);
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
<<<<<<< HEAD
        style={{ width, height }}
        style={{ width: width ? `${width}px` : 'auto', height: height ? `${height}px` : 'auto' }}
=======
style={{ width: width ? `${width}px` : 'auto', height: height ? `${height}px` : 'auto' }}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
      >
        <span className="text-gray-500 text-sm">Failed to load image</span>
      </div>
    );
  }

  return (
<<<<<<< HEAD
    <div ref={imgRef} className={`relative ${className}`} style={{ width, height }}>
=======
<div ref={imgRef} className={`relative ${className}`} style={{ width, height }}>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
      {!isLoaded && isInView && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded"></div>
      )}
      {isInView && (
        <motion.img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          onLoad={handleLoad}
          onError={handleError}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full object-cover"
        />
      )}
<<<<<<< HEAD
    <div className={`relative ${className}`} style={{ width: width ? `${width}px` : 'auto', height: height ? `${height}px` : 'auto' }}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
    </div>
  );
}
=======
export default function OptimizedImage({ className = '', children, ...props }: OptimizedImageProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
