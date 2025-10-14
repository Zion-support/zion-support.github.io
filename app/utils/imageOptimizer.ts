interface ImageOptimizerProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  quality?: number;
}

export function optimizeImage({
  src,
  width,
  quality = 80
}: Pick<ImageOptimizerProps, 'src' | 'width' | 'quality'>): string {
  // Basic image optimization logic
  const optimizedSrc = src.includes('?') 
    ? `${src}&w=${width || 800}&q=${quality}`
    : `${src}?w=${width || 800}&q=${quality}`;
  
  return optimizedSrc;
}

export function generateImageProps({
  src,
  alt,
  width,
  height,
  className = '',
  quality = 80
}: ImageOptimizerProps) {
  return {
    src: optimizeImage({ src, width, quality }),
    alt,
    width: width || 800,
    height: height || 600,
    className: `optimized-image ${className}`,
    loading: 'lazy' as const,
    decoding: 'async' as const
  };
}