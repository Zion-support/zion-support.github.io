import React from 'react';

// Next.js Image stub for Vite compatibility
interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: string;
  blurDataURL?: string;
  fill?: boolean;
  sizes?: string;
  style?: React.CSSProperties;
  [key: string]: unknown;
}

export const Image: React.FC<ImageProps> = ({ 
  src, 
  alt, 
  width, 
  height, 
  className, 
  style,
  ...props 
}) => {
  const imageStyle = {
    width: width ? `${width}px` : undefined,
    height: height ? `${height}px` : undefined,
    ...style,
  };

  return React.createElement('img', {
    src,
    alt,
    className,
    style: imageStyle,
    ...props,
  });
};

export default Image;