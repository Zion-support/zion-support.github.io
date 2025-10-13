import React from 'react';
import React, { useState, useRef, useEffect } from 'react';

interface LazyImageProps {
import { ImageIcon } from 'lucide-react';
  src: string;
  alt: string;

  className?: string;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
  priority?: boolean;
  size?: string;
  quality?: number;
}

export default function LazyImage({ className = '', children }: LazyImageProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
export default function LazyImage({ className = '', children, ...props }: LazyImageProps) {
        <div className="component" {...props}>
const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  placeholder,
  onLoad,
  onError,
  priority = false,
  size = '100vw',
  quality = 75
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.1

    if (imgRef.current) {
      observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();

  const optimizedSrc = `${src}?w=800&q=${quality}&f=webp`;

    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Placeholder */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
          {placeholder ? (
            <img
              src={placeholder}
              alt=""
              className="w-full h-full object-cover opacity-50"
            />
          ) : (
            <ImageIcon className="w-8 h-8 text-gray-400" />
          )}

      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
          <div className="text-center">
            <ImageIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-xs text-gray-500">Failed to load image</p>

      {/* Actual Image */}
      {isInView && !hasError && (
          src={optimizedSrc}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          size={size}


export default LazyImage;


  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PC9zdmc+',
  onError
  const [isInView, setIsInView] = useState(false);

      { threshold: 0.1 }


  }, []);



      {!isLoaded && (
          className="absolute inset-0 w-full h-full object-cover blur-sm"
      {isInView && (
          src={src}


  placeholder = '/placeholder.jpg',
}: LazyImageProps) {






    <div ref={imgRef} className={`relative ${className}`}>
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
          className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}







          className="absolute inset-0 w-full h-full object-cover"







      {!isInView ? (
          className="w-full h-full object-cover blur-sm"
        <>
        </>
export default function Lazyimage({ className = '', children, ...props }: LazyimageProps) {







      {!isLoaded && placeholder && (
          <span className="text-gray-400 text-sm">Loading...</span>
          className={`transition-opacity duration-300 ${
export default $1;
