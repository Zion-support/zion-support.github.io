// Image optimization utilities for better performance

export interface ImageOptimizationOptions {
  quality?: number;
  format?: 'webp' | 'avif' | 'jpeg' | 'png';
  width?: number;
  height?: number;
  lazy?: boolean;
}

export const optimizeImage = (src: string, options: ImageOptimizationOptions = {}): string => {
  const {
    quality = 80,
    format = 'webp',
    width,
    height,
  } = options;

  // For now, return the original src
  // In a real implementation, you would use a service like Cloudinary or ImageKit
  return src;
};

export const generateResponsiveImages = (src: string, sizes: number[]): string[] => {
  return sizes.map(size => optimizeImage(src, { width: size }));
};

export const preloadCriticalImages = (images: string[]) => {
  if (typeof window === 'undefined') return;

  images.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

export const lazyLoadImage = (img: HTMLImageElement) => {
  if (typeof window === 'undefined') return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const image = entry.target as HTMLImageElement;
        if (image.dataset.src) {
          image.src = image.dataset.src;
          image.classList.remove('lazy');
          observer.unobserve(image);
        }
      }
    });
  });

  observer.observe(img);
};