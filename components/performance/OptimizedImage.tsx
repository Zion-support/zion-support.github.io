import React from 'react';
import Image from 'next/image';
interface OptimizedImageProps {
  src: string, alt: string
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
  src
  alt
  width
  height
  className = ''
  priority = false
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
  quality = 85
  fill = false
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
    <Image
      src={src}
      alt={alt}
      width={width |800}
      height={height |600}
      className={className}
      priority={priority}
      sizes={sizes}
quality={quality}
      style={style}
  );
}
export default OptimizedImage;
  );
};

export default OptimizedImage;
