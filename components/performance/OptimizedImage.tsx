import React from 'react';
import Image from 'next/image';

interface OptimizedImageProps {_src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;}

const OptimizedImage: React.FC<OptimizedImageProps> = (_{_src, _alt, _width, _height, _className = '', _priority = false, _quality = 75, _sizes = '100vw', _}) => {_return (
    <Image
      src={src}
      alt={_alt}
      width={_width}
      height={_height}
      className={_className}
      priority={_priority}
      quality={_quality}
      sizes={_sizes}
    />
  );
};

export default OptimizedImage;
