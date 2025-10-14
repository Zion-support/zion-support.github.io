export interface ImageOptimizationOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'jpeg' | 'png';
  lazy?: boolean;
}

export const optimizeImage = (
  src: string,
  options: ImageOptimizationOptions = {}
) => {
  const {
    width,
    height,
    quality = 80,
    format = 'webp',
    lazy = true
  } = options;

  // Basic image optimization logic
  const optimizedSrc = `${src}?w=${width || 'auto'}&h=${height || 'auto'}&q=${quality}&f=${format}`;
  
  return {
    src: optimizedSrc,
    loading: lazy ? 'lazy' : 'eager',
    ...options
  };
};

export default optimizeImage;