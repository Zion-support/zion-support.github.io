<<<<<<< HEAD
import React, { useState } from 'react';

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

export default function OptimizedImage({ 
  src, 
  alt, 
  className = '', 
  width, 
  height,
  priority = false,
  onLoad,
  onError;
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
  
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
  
    setIsLoading(false);
    setHasError(true);
    onError?.();
  };

  if (hasError) {
    return (
    <div className={`optimized-image-error ${className}`}>
        <div className="flex items-center justify-center w-full h-full bg-gray-100 text-gray-500">
          Failed to load image
        className="optimized-image"
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}"
        onLoad={handleLoad}
        onError={handleError}
        style={{ opacity: isLoading ? 0 : 1 }}
      />
    </div>
  );
}
=======
'use client';
import React from 'react';

export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Components</h1>
        <p className="text-gray-300 text-lg">
          This page is under development.
        </p>
      </div>
    </div>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-1a0a
