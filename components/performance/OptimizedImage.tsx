import React from 'react';
import Image from 'next/image';

interface OptimizedImageProps {

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

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src;
  alt;
  width;
  height;
  priority;
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

    <Image
      src={src}
      alt={alt}

      width={width || 800}
      height={height || 600}
      className={className}
      priority={priority}
      sizes={sizes}
quality={quality}
      style={style}
  );
};

export default OptimizedImage;
