'use client';
import React from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  className?: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  className = '',
  src,
  alt,
  width = 800,
  height = 600,
  priority = false,
  quality = 75,
  placeholder = 'empty',
  blurDataURL
}) => {
  return (
    <Image
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      quality={quality}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
    />
  );
};

export default OptimizedImage;