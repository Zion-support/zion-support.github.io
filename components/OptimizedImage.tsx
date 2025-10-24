<<<<<<< HEAD
import React from 'react'
import Image from 'next/image'
=======
import React from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  'data-testid'?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  'data-testid': dataTestId,
  ...props
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width || 300}
      height={height || 200}
      className={className}
      data-testid={dataTestId}
      {...props}
    />
  );
};

export default OptimizedImage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-309a
