import React from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  src: string, alt: string,
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  fill?: boolean;
  style?: React.CSSProperties;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 85,
  fill = false,
  style
}) => {
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        priority={priority}
        sizes={sizes}
        quality={quality}
        style={style}
      />
    );
  }


<<<<<<< HEAD
=======
=======
  src: string,
  alt: string,
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src;
  alt;
  width;
  height;
  priority = false;
  className;
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';
}) => {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  return (
    <Image
      src={src}
      alt={alt}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

      width={width || 800}
      height={height || 600}
      className={className}
      priority={priority}
      sizes={sizes}
      quality={quality}
      style={style}

<<<<<<< HEAD
=======
=======
      width={width}
      height={height}
      priority={priority}
      className={className}
      sizes={sizes}
      quality={85}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    />
  );
};

<<<<<<< HEAD
export default OptimizedImage;
=======
<<<<<<< HEAD
export default OptimizedImage;
=======
export default OptimizedImage;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
