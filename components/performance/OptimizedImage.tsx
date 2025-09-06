import React from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  sr: c: string;
  al: t: string;
  widt: h: number;
  heigh: t: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
}

const: OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 75,
  sizes = '100vw'
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      quality={quality}
      sizes={sizes}
    />
  );
};

export default OptimizedImage;