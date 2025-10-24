'use client';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  placeholder?: string;
  effect?: 'blur' | 'black-and-white' | 'opacity';
  threshold?: number;
  visibleByDefault?: boolean;
  wrapperClassName?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  placeholder,
  effect = 'blur',
  threshold = 100,
  visibleByDefault = false,
  wrapperClassName = '',
  style,
  onClick
}) => {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      placeholder={placeholder}
      effect={effect}
      threshold={threshold}
      visibleByDefault={visibleByDefault}
      wrapperClassName={wrapperClassName}
      style={style}
      onClick={onClick}
      loading="lazy"
    />
  );
};

export default OptimizedImage;