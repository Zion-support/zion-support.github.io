'use client';
import React, { useState, useCallback } from 'react';
import Image from 'next/image';

interface PerformanceImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

const PerformanceImage: React.FC<PerformanceImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  placeholder = 'empty',
  blurDataURL
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
    setIsLoading(false);
  }, []);

  if (hasError) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <span className="text-gray-500">Image failed to load</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && placeholder === 'blur' && blurDataURL && (
        <Image
          src={blurDataURL}
          alt=""
          fill
          className="absolute inset-0 w-full h-full object-cover filter blur-sm scale-110"
        />
      )}
      
      {isLoading && placeholder === 'empty' && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <span className="text-gray-500">Loading...</span>
        </div>
      )}
      
      <Image
        src={src}
        alt={alt}
        width={width || 800}
        height={height || 600}
        onLoad={handleLoad}
        onError={handleError}
        priority={priority}
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
      />
    </div>
  );
};

export default PerformanceImage;