<<<<<<< HEAD
import React from 'react'
import Image from 'next/image'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  'data-testid'?: string
  [key: string]: any
=======
import React from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
>>>>>>> origin/main
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '' 
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width || 800}
      height={height || 600}
      className={className}
    />
  );
};

export default OptimizedImage;
