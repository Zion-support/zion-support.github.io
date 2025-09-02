'use client';

import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 75,
  placeholder = 'empty',
  blurDataURL,
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      {...(width && { width })}
      {...(height && { height })}
      className={className}
      priority={priority}
      quality={quality}
      placeholder={placeholder}
      {...(blurDataURL && { blurDataURL })}
    />
  );
};

export default OptimizedImage;