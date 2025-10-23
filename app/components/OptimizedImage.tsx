"use client";
import React, { useState, useEffect, useRef } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  placeholder?: string;
  sizes?: string;
  quality?: number;
  loading?: "lazy" | "eager";
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  placeholder,
  sizes,
  loading = "lazy",
  onLoad,
  onError,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setIsError(true);
    onError?.();
  };

  // Generate WebP src if supported
  const getOptimizedSrc = (originalSrc: string) => {
    if (originalSrc.startsWith("data:") || originalSrc.startsWith("blob:")) {
      return originalSrc;
    }
    // For external images, return as-is
    if (originalSrc.startsWith("http")) {
      return originalSrc;
    }
    // For local images, you could implement WebP conversion here
    return originalSrc;
  };

  return (
    <div 
      className="relative" 
      style={{ width, height }}
    >
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ width, height }}
        />
      )}
      <img
        ref={imgRef}
        src={getOptimizedSrc(src)}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : loading}
        onLoad={handleLoad}
        onError={handleError}
        className={`${className} transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${isError ? "opacity-50" : ""}`}
        sizes={sizes}
      />
      {isError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500">
          Failed to load image
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;