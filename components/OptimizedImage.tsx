<<<<<<< HEAD
  width?: number;
  height?: number;
  class_name?: string;
  priority?: boolean;
  quality?: number;
}
const OptimizedImage: React.FC < OptimizedImageProps> = ({
  src;
  alt;

  width = 800;
  height = 600;
=======
import React from 'react';
import Image from 'next/image';
interface OptimizedImageProps {
  src: string,
  alt: string,
  width?: number,
  height?: number,
  className?: string,
  priority?: boolean,
  quality?: number;
};
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width = 800,
  height = 600,
  className = '',
  priority = false,
  quality = 75
}) => {
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
<<<<<<< HEAD
export default OptimizedImage;
=======
      className={className}
      priority={priority}
      quality={quality}
      placeholder="blur"
      blurDataURL="data:image/jpeg,base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
    />
  );
};

export default OptimizedImage;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
