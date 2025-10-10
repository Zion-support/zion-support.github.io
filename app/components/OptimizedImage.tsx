'use client';

interface OptimizedImageProps {
  src: string,
  alt: string,
  width?: number;
  height?: number;
  className?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
}) => {
const Component = () => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      }}
    />
  );
};

export default OptimizedImage;
