// Image utility component

import React, { useState, useCallback } from 'react';

export interface ImageProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  loading?: 'lazy' | 'eager';
  placeholder?: string;
  fallback?: string;
  onLoad?: () => void;
  onError?: () => void;
  [key: string]: any;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  loading = 'lazy',
  placeholder,
  fallback,
  onLoad,
  onError,
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState(placeholder || src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
    setImageSrc(src);
    onLoad?.();
  }, [src, onLoad]);

  const handleError = useCallback(() => {
    setIsLoading(false);
    setHasError(true);
    if (fallback) {
      setImageSrc(fallback);
    }
    onError?.();
  }, [fallback, onError]);

  return (
    <div className={`image-container ${className || ''}`} style={{ width, height }}>
      {isLoading && placeholder && (
        <div className="image-placeholder">
          <div className="image-placeholder-content">
            <div className="image-placeholder-spinner" />
          </div>
        </div>
      )}
      
      <img
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          display: isLoading ? 'none' : 'block',
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
        {...props}
      />
      
      {hasError && !fallback && (
        <div className="image-error">
          <div className="image-error-content">
            <span>Failed to load image</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Image;