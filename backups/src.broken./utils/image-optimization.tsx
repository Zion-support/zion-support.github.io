/**
 * Image optimization utilities
 * Provides lazy loading, responsive images, and format optimization
 */

import React, { useState, useRef, useEffect } from 'react';

export interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  placeholder?: string;
  sizes?: string;
  quality?: number;
  priority?: boolean;
  onLoad?: () => void;
  onError?: () => void;
  lazy?: boolean;
}

export interface ImageFormat {
  webp: boolean;
  avif: boolean;
  jpeg: boolean;
  png: boolean;
}

// Check browser support for modern image formats
const checkImageFormatSupport = (): ImageFormat => {
  if (typeof window === 'undefined') {
    return { webp: false, avif: false, jpeg: true, png: true };
  }

  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  const ctx = canvas.getContext('2d');

  return {
    webp: canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0,
    avif: canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0,
    jpeg: true,
    png: true,
  };
};

// Generate optimized image sources
export const generateImageSources = (
  src: string,
  sizes: string = '100vw',
  quality: number = 80
): { srcSet: string; type: string }[] => {
  const formatSupport = checkImageFormatSupport();
  const sources: { srcSet: string; type: string }[] = [];

  // Generate different sizes for responsive images
  const breakpoints = [320, 640, 768, 1024, 1280, 1920];
  const baseUrl = src.replace(/\.(jpg|jpeg|png|webp|avif)$/i, '');

  // AVIF format (best compression)
  if (formatSupport.avif) {
    const avifSrcSet = breakpoints
      .map(w => `${baseUrl}-${w}w.avif ${w}w`)
      .join(', ');
    sources.push({ srcSet: avifSrcSet, type: 'image/avif' });
  }

  // WebP format (good compression, wide support)
  if (formatSupport.webp) {
    const webpSrcSet = breakpoints
      .map(w => `${baseUrl}-${w}w.webp ${w}w`)
      .join(', ');
    sources.push({ srcSet: webpSrcSet, type: 'image/webp' });
  }

  // Fallback formats
  const fallbackSrcSet = breakpoints
    .map(w => `${baseUrl}-${w}w.jpg ${w}w`)
    .join(', ');
  sources.push({ srcSet: fallbackSrcSet, type: 'image/jpeg' });

  return sources;
};

// Intersection Observer hook for lazy loading
export const useIntersectionObserver = (
  ref: React.RefObject<HTMLElement>,
  options: IntersectionObserverInit = {}
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1, ...options }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isIntersecting;
};

// Optimized Image Component
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+',
  sizes = '100vw',
  quality = 80,
  priority = false,
  onLoad,
  onError,
  lazy = true,
}) => {
  const [imageSrc, setImageSrc] = useState(priority ? src : placeholder);
  const [isLoaded, setIsLoaded] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const isIntersecting = useIntersectionObserver(imgRef, { threshold: 0.1 });

  useEffect(() => {
    if (priority || !lazy) {
      loadImage();
      return;
    }

    if (isIntersecting && !isLoaded && !hasError) {
      loadImage();
    }
  }, [isIntersecting, priority, lazy, isLoaded, hasError]);

  const loadImage = () => {
    const img = new Image();
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
      onLoad?.();
    };
    img.onerror = () => {
      setHasError(true);
      onError?.();
    };
    img.src = src;
  };

  const sources = generateImageSources(src, sizes, quality);

  return (
    <picture>
      {sources.slice(0, -1).map((source, index) => (
        <source
          key={index}
          srcSet={source.srcSet}
          sizes={sizes}
          type={source.type}
        />
      ))}
      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-50'
        } ${hasError ? 'opacity-30' : ''} ${className}`}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={onLoad}
        onError={onError}
      />
    </picture>
  );
};

// Image preloader utility
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

// Batch image preloader
export const preloadImages = async (srcs: string[]): Promise<void> => {
  const promises = srcs.map(src => preloadImage(src));
  await Promise.allSettled(promises);
};

// Generate responsive image URLs
export const generateResponsiveImageUrl = (
  baseUrl: string,
  width: number,
  quality: number = 80,
  format: 'webp' | 'avif' | 'jpeg' | 'png' = 'webp'
): string => {
  const extension = format === 'jpeg' ? 'jpg' : format;
  return `${baseUrl}-${width}w.${extension}?q=${quality}`;
};

// Image optimization service (for server-side)
export const optimizeImage = async (
  imageUrl: string,
  options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'webp' | 'avif' | 'jpeg' | 'png';
  } = {}
): Promise<string> => {
  const {
    width = 800,
    height,
    quality = 80,
    format = 'webp'
  } = options;

  // This would typically call an image optimization service
  // For now, return the original URL with query parameters
  const params = new URLSearchParams({
    w: width.toString(),
    q: quality.toString(),
    f: format,
  });

  if (height) {
    params.set('h', height.toString());
  }

  return `${imageUrl}?${params.toString()}`;
};

// Lazy loading hook for multiple images
export const useLazyImages = (imageRefs: React.RefObject<HTMLElement>[]) => {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observers = imageRefs.map((ref, index) => {
      if (!ref.current) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setLoadedImages(prev => new Set([...prev, index]));
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(ref.current);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, [imageRefs]);

  return loadedImages;
};

export default OptimizedImage;