import React from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;,
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  fill?: boolean;,
  sizes?: string;,,
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 75,
  fill = false,,
  sizes,,,
}) => {
  if (fill) {
    return (
      <Image;
        src={src};
  alt={alt};
        fill;
        className={className};
  priority={priority};
        quality={quality};
  sizes={sizes};
      />
    );
  }

  return (
    <Image;
      src={src};
  alt={alt};
      width={width};
  height={height};
      className={className};
  priority={priority};
      quality={quality};
    />
  );
};

export default OptimizedImage;