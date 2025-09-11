import React, { useState, useRef, useEffect } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './ResponsiveImage.css';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  placeholder?: string;
  sizes?: string;
  srcSet?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  placeholder,
  sizes,
  srcSet,
  onLoad,
  onError,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (isIntersecting && loading === 'lazy') {
      // Image is in viewport, start loading
      const img = imgRef.current;
      if (img && !isLoaded && !hasError) {
        img.src = src;
        if (srcSet) img.srcset = srcSet;
        if (sizes) img.sizes = sizes;
      }
    }
  }, [isIntersecting, loading, src, srcSet, sizes, isLoaded, hasError]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  const shouldLoad = loading === 'eager' || isIntersecting;

  return (
    <div
      ref={ref}
      className={`responsive-image ${className} ${
        isLoaded ? 'responsive-image--loaded' : ''
      } ${hasError ? 'responsive-image--error' : ''}`}
      style={{ width, height }}
    >
      {placeholder && !isLoaded && !hasError && (
        <div className="responsive-image__placeholder">
          <img
            src={placeholder}
            alt=""
            className="responsive-image__placeholder-img"
          />
        </div>
      )}
      
      {shouldLoad && (
        <img
          ref={imgRef}
          src={loading === 'eager' ? src : undefined}
          srcSet={loading === 'eager' ? srcSet : undefined}
          sizes={loading === 'eager' ? sizes : undefined}
          alt={alt}
          width={width}
          height={height}
          className="responsive-image__img"
          onLoad={handleLoad}
          onError={handleError}
          loading={loading}
        />
      )}
      
      {hasError && (
        <div className="responsive-image__error">
          <span>Failed to load image</span>
        </div>
      )}
    </div>
  );
};

export default ResponsiveImage;