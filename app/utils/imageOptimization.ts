interface ImageOptimizationOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'jpeg' | 'png';
  lazy?: boolean;
}

export const optimizeImageUrl = (
  src: string,
  options: ImageOptimizationOptions = {}
): string => {
  const {
    width,
    height,
    quality = 80,
    format = 'webp'
  } = options;

  // If it's already an external URL with optimization, return as is
  if (src.startsWith('http') && (src.includes('w_') || src.includes('q_'))) {
    return src;
  }

  // For local images, you might want to use a service like Cloudinary or similar
  // This is a placeholder implementation
  let optimizedUrl = src;
  
  if (width || height) {
    const params = new URLSearchParams();
    if (width) params.set('w', width.toString());
    if (height) params.set('h', height.toString());
    params.set('q', quality.toString());
    params.set('f', format);
    
    optimizedUrl += `?${params.toString()}`;
  }

  return optimizedUrl;
};

export const getImageDimensions = (src: string): Promise<{ width: number; height: number }> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve({ width: img.naturalWidth, height: img.naturalHeight });
    };
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const generateResponsiveImageSrc = (
  baseSrc: string,
  sizes: number[]
): string => {
  const srcSet = sizes
    .map(size => `${optimizeImageUrl(baseSrc, { width: size })} ${size}w`)
    .join(', ');
  
  return srcSet;
};