'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sizes?: string;
  fill?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
  onLoad?: () => void;
  onError?: () => void;
<<<<<<< HEAD
=======
  loading?: 'lazy' | 'eager';
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
>>>>>>> main
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 75,
  placeholder = 'empty',
  blurDataURL,
  sizes,
  fill = false,
  style,
  onClick,
  onLoad,
  onError,
  loading = 'lazy',
  objectFit = 'cover',
  objectPosition = 'center'
}) => {
<<<<<<< HEAD
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imageRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return;

=======
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
>>>>>>> main
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
<<<<<<< HEAD
      { threshold: 0.1 }
=======
      {
<<<<<<< HEAD
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  };

  // Generate a simple blur placeholder if none provided
  const defaultBlurDataURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=';

  if (hasError) {
    return (
      <div
        ref={imageRef}
        className={`flex items-center justify-center bg-gray-200 text-gray-500 ${className}`}
        style={style}
        onClick={onClick}
      >
        <div className="text-center">
          <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
          </svg>
          <p className="text-sm">Failed to load image</p>
        </div>
      </div>
    );
  }

  if (!isInView) {
    return (
      <div
        ref={imageRef}
        className={`bg-gray-200 animate-pulse ${className}`}
        style={style}
      />
=======
'

        rootMargin: '50px', // Start loading 50px before the image comes into view
        threshold: 0.1}
>>>>>>> main
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  const imageProps = {
    src,
    alt,
    quality,
    priority,
    placeholder,
    blurDataURL,
    sizes,
    onLoad: handleLoad,
    onError: handleError,
    style: {
      objectFit,
      objectPosition,
      ...style
    }
  };

  if (fill) {
    return (
      <div
        ref={imgRef}
        className={`relative overflow-hidden ${className}`}
        style={style}
        onClick={onClick}
      >
<<<<<<< HEAD
        {isInView && !hasError && (
          <Image
            {...imageProps}
            fill
            className={`transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
          </div>
        )}
        {hasError && (
          <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
            <div className="text-gray-400 text-center">
              <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm">Failed to load image</p>
            </div>
          </div>
        )}
=======
        <div className="text-center">"
          <svg""
            className='mx-auto h-8 w-8 mb-2'
            fill="none"""
            viewBox="0 0 24 24"""
            stroke="currentColor"
          >"
            <path""
              strokeLinecap="round"""
              strokeLinejoin="round""
              strokeWidth={2}""
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />"
          </svg>""
          <p className="text-xs">Image failed to load</p>
        </div>
>>>>>>> main
      </div>
>>>>>>> main
    );
  }

  return (
    <div
<<<<<<< HEAD
      ref={imageRef}
      className={`relative overflow-hidden ${className}`}
      style={style}
      onClick={onClick}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
        </div>
      )}
      
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        quality={quality}
        priority={priority}
        placeholder={placeholder}
        blurDataURL={placeholder === 'blur' ? (blurDataURL || defaultBlurDataURL) : undefined}
        sizes={sizes}
=======
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      onClick={onClick}
    >
      {isInView && !hasError && (
        <Image
          {...imageProps}
          width={width}
          height={height}
          loading={loading}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
<<<<<<< HEAD
      {!isLoaded && !hasError && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center"
          style={{ width, height }}
        >
          <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
        </div>
      )}
      {hasError && (
        <div 
          className="absolute inset-0 bg-gray-100 flex items-center justify-center"
          style={{ width, height }}
        >
          <div className="text-gray-400 text-center">
            <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-sm">Failed to load image</p>
          </div>
=======

      {/* Next.js Image component */}
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}`
        height={fill ? undefined : height}``
>>>>>>> main
        className={`transition-opacity duration-300 ${
'
''`
          isLoading ? 'opacity-0' : 'opacity-100'``
        }`}
<<<<<<< HEAD
        onLoad={handleLoad}
        onError={handleError}
      />
=======
        priority={priority}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        sizes={sizes}
        fill={fill}
        onLoad={handleLoad}
        onError={handleError}
        style={{
'

          objectFit: fill ? 'cover' : 'contain'}}
      />

      {/* Loading spinner */}"
      {isLoading && (""
        <div className="absolute inset-0 flex items-center justify-center z-20">""
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
>>>>>>> main
        </div>
      )}
>>>>>>> main
    </div>
  );
};

export default OptimizedImage;