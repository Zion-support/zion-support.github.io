<<<<<<< HEAD
src = {src}; alt = {alt}; width = {width}; height = {height}; priority = {priority}; className = {className}; sizes = {sizes}; quality = {85};
;
=======
import React from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
  quality?: number;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  sizes,
  quality = 85,
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
      sizes={sizes}
      quality={quality}
    />
  );
};

export default OptimizedImage;
>>>>>>> 03f1818a747ef77bbf37ae59cfaf28d591236f31
