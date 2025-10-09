import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
<<<<<<< HEAD
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
=======
  loading?: 'lazy' | 'eager';
  priority?: boolean;
>>>>>>> main
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
<<<<<<< HEAD
  priority = false,
  quality = 75,
  placeholder = 'empty',
  blurDataURL
=======
  loading = 'lazy',
  priority = false
>>>>>>> main
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
<<<<<<< HEAD
      loading={priority ? 'eager' : 'lazy'}
      style={{
        objectFit: 'cover',
        objectPosition: 'center'
=======
      loading={priority ? 'eager' : loading}
      decoding="async"
      style={{
        maxWidth: '100%',
        height: 'auto'
>>>>>>> main
      }}
    />
  );
};

export default OptimizedImage;