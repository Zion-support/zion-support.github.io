import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy'
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={loading}
      decoding="async"
    />
  );
</li></OptimizedImageProps></HTMLImageElement></Helmet></link></div></div></div></div></div></div></img></OptimizedImageProps></HTMLImageElement></Helmet></link></div></div></div></div></div></div></img>};

export default OptimizedImage;
