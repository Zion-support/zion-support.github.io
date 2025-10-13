import React from 'react';
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import React, { useState, useCallback } from 'react';

interface OptimizedImageProps {
interface OptimizedImageProps {,
    src: string;,
    alt: string;
  width?: number;
  height?: number;
  className?: string;
  children?: React.ReactNode;
}

export default function OptimizedImage({ className = '', children }: OptimizedImageProps) {
  return (
    <div className={`${className}`}>
      {children}
const OptimizedImage: React.FC<OptimizedImageProps> = ({
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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, [priority]);

import React, { useState, useRef, useEffect, forwardRef } from 'react';

  src: string;
  priority?: boolean;
  onLoad?: () => void;
  onError?: () => void;

const OptimizedImage = forwardRef<HTMLImageElement, OptimizedImageProps>(({
}, ref) => {

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
}: OptimizedImageProps) {

  const handleLoad = useCallback(() => {
  }, [onLoad]);

  const handleError = useCallback(() => {
  }, [onError]);

  if (hasError) {
      <div
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
        style={{ width: width ? `${width}px` : 'auto', height: height ? `${height}px` : 'auto' }}
      <div >
  className={`bg-gray-200 flex items-center justify-center ${className}`}>
      >
        <span className="text-gray-500 text-sm">Failed to load image</span>

    const img = imgRef.current;
    if (img) {
      img.addEventListener('load', handleLoad);
      img.addEventListener('error', handleError);

      return () => {
        img.removeEventListener('load', handleLoad);
        img.removeEventListener('error', handleError);
  }, [onLoad, onError]);

      <div className={`optimized-image-container ${className}`} style={{ width, height }}>
        <div className="flex items-center justify-center h-full bg-gray-200 text-gray-500">
          Failed to load image
        </div>

    <div ref={imgRef} className={`relative ${className}`} style={{ width, height }}>
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
          onError={handleError}>
  initial={{ opacity: 0 }}>
  animate={{ opacity: isLoaded ? 1 : 0 }}>
  transition={{ duration: 0.3 }}>
  className="w-full h-full object-cover"
        />
    <div className={`relative ${className}`} style={{ width: width ? `${width}px` : 'auto', height: height ? `${height}px` : 'auto' }}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
      <img
        onError={handleError}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
export default function OptimizedImage({ className = '', children, ...props }: OptimizedImageProps) {
        <div className="component" {...props}>
        <div className="animate-pulse bg-gray-200 w-full h-full flex items-center justify-center">
          <div className="text-gray-400">Loading...</div>
        ref={(node) => {
          imgRef.current = node;
          if (typeof ref === 'function') {
            ref(node);
          } else if (ref) {
            ref.current = node;
        }}
        className={`optimized-image ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;
