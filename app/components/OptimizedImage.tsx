import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
<<<<<<< HEAD
  loading?: 'lazy' | 'eager';
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-18a0
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
<<<<<<< HEAD
  loading = 'lazy',
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-18a0
  priority = false
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
<<<<<<< HEAD
      loading={priority ? 'eager' : loading}
      decoding="async"
      style={{
        maxWidth: '100%',
        height: 'auto'
      }}
=======
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
>>>>>>> cursor/fix-errors-and-merge-to-main-18a0
    />
  );
};

export default OptimizedImage;