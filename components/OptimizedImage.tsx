import React from 'react';
import Image from 'next/image';
interface OptimizedImageProps {
<<<<<<< HEAD
  src: string
  alt: string
=======
<<<<<<< HEAD
  src: string;
  alt: string;
=======
  src: string,
  alt: string,
>>>>>>> origin/main
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
}
const OptimizedImage: React.FC<OptimizedImageProps> = ({
<<<<<<< HEAD
  src,
  alt,
  width = 800,
  height = 600,
  className = '',
  priority = false,
=======
  src;
  alt;

  width = 800;
  height = 600;
  className = '';
  priority = false;
<<<<<<< HEAD
  quality = 75

=======
>>>>>>> origin/main
  quality = 75,
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
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
      placeholder="blur"
      blurDataURL="data:image/jpeg,base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
<<<<<<< HEAD
/>  );
}
=======
    />  );
};

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export default OptimizedImage;