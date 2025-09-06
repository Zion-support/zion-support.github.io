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
 f6b849a806966ab0803a1eba10ab812addf04f56
interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
}
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width = 800,
  height = 600,
  className = "",
  priority = false,
  quality = 75,
}) => {
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}

 a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> f6b849a806966ab0803a1eba10ab812addf04f56
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
