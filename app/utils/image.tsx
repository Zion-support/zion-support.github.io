'use client';
import React, { useState, useCallback } from 'react';
interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  _quality?: number;
  _placeholder?: 'blur' | 'empty';
  _blurDataURL?: string;
  fill?: boolean;
  sizes?: string;
  style?: React.CSSProperties;
  onLoad?: () => void;
  onError?: () => void;
}

// Focus management utility
const focusElement = (element: HTMLElement | null) => {
  if (element) {
    element.focus();
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};

// Skip to main content functionality
const skipToMain = () => {
  const main = document.querySelector('main');
  if (main) {
    focusElement(main);
  }
};


export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  _quality = 75,
  _placeholder = 'empty',
  _blurDataURL,
  fill = false,
  sizes,
  style,
  onLoad,
  onError,
  ...props
}) => {
  const [, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  }, [onLoad]);
  const handleError = useCallback(() => {
    setHasError(true);
    if (onError) onError();
  }, [onError]);
  const imageStyle: React.CSSProperties = {
    ...style,
    ...(fill && {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    })
  };
  if (hasError) {
    return (
      <div
        className={`bg-gray-100 flex items-center justify-center ${className}`}
        style={imageStyle}
        {...props}
      >
        <span className="text-gray-700 text-sm">Failed to load image</span>
      </div>
    );
  }
  return (
    <img aria-label="Image"
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={imageStyle}
      sizes={sizes}
      loading={priority ? 'eager' : 'lazy'}
      onLoad={handleLoad}
      onError={handleError}
      {...props}
    />
  );
};
export default Image;