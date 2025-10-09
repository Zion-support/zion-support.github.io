
interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`${className}`}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      style={{
        width: width ? `${width}px` : 'auto',
        height: height ? `${height}px` : 'auto'
      }}
    />
  );
};

export default OptimizedImage;
