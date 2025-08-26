import React, { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes = '100vw',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzIyZGRkMiIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=',
  onLoad,
  onError,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Generate responsive image sources
  const generateSrcSet = (imageSrc: string) => {
    const baseUrl = new URL(imageSrc, window.location.origin);
    const widths = [320, 640, 768, 1024, 1280, 1920];
    
    return widths
      .map(w => `${baseUrl.origin}${baseUrl.pathname}?w=${w}&q=80 ${w}w`)
      .join(', ');
  };

  // Generate WebP sources if supported
  const generateWebPSrcSet = (imageSrc: string) => {
    const baseUrl = new URL(imageSrc, window.location.origin);
    const widths = [320, 640, 768, 1024, 1280, 1920];
    
    return widths
      .map(w => `${baseUrl.origin}${baseUrl.pathname}?w=${w}&q=80&fmt=webp ${w}w`)
      .join(', ');
  };

  // Check WebP support
  const [webpSupported, setWebpSupported] = useState(false);
  useEffect(() => {
    const checkWebPSupport = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    };
    setWebpSupported(checkWebPSupport());
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Don't render if not in view and not priority
  if (!isInView) {
    return (
      <div
        ref={imgRef}
        className={`bg-gradient-to-br from-zion-slate to-zion-slate-dark animate-pulse ${className}`}
        style={{ width, height }}
        aria-label={alt}
      />
    );
  }

  if (hasError) {
    return (
      <div
        className={`bg-red-900/20 border border-red-500/30 rounded flex items-center justify-center text-red-400 text-sm ${className}`}
        style={{ width, height }}
        role="img"
        aria-label={`Error loading image: ${alt}`}
      >
        <span>Failed to load image</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      {/* Placeholder */}
      {!isLoaded && (
        <img
          src={placeholder}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        />
      )}

      {/* Main image */}
      <picture>
        {/* WebP format for supported browsers */}
        {webpSupported && (
          <source
            type="image/webp"
            srcSet={generateWebPSrcSet(src)}
            sizes={sizes}
          />
        )}
        
        {/* Fallback image */}
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading={priority ? 'eager' : 'lazy'}
          onLoad={handleLoad}
          onError={handleError}
          sizes={sizes}
          srcSet={generateSrcSet(src)}
        />
      </picture>

      {/* Loading indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-zion-slate/50">
          <div className="w-8 h-8 border-2 border-zion-cyan border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

// HOC for wrapping images with optimization
export const withImageOptimization = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return React.forwardRef<HTMLImageElement, P>((props, ref) => (
    <OptimizedImage {...(props as any)} ref={ref} />
  ));
};

// Utility hook for image preloading
export const useImagePreload = (src: string) => {
  const [isPreloaded, setIsPreloaded] = useState(false);

  useEffect(() => {
    if (!src) return;

    const img = new Image();
    img.onload = () => setIsPreloaded(true);
    img.onerror = () => setIsPreloaded(false);
    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return isPreloaded;
};