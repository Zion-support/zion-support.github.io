<<<<<<< HEAD
import React from 'react';
import Image from 'next/image';

=======
>>>>>>> cursor/automate-test-improve-and-merge-code-6d57
interface OptimizedImageProps {
  src: string,
  alt: string,
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
}
<<<<<<< HEAD

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src;
  alt;
  width;
  height;
  priority = false;
  className;
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';
}) => {
  return (
    <Image
=======
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  quality = 75,
  sizes = "100vw",
}) => {
>>>>>>> cursor/automate-test-improve-and-merge-code-6d57
      src={src}
      alt={alt}
      width={width}
      height={height}
<<<<<<< HEAD
      priority={priority}
      className={className}
      sizes={sizes}
      quality={85}
    />
  );
};

export default OptimizedImage;
=======
      className={className}
      priority={priority}
>>>>>>> cursor/automate-test-improve-and-merge-code-6d57
