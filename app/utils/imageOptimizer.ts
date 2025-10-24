/**
 * Image optimization utilities for better performance
 */

export interface ImageOptimizationOptions {
  quality?: number;
  format?: 'webp' | 'avif' | 'jpeg' | 'png';
  width?: number;
  height?: number;
  blur?: boolean;
}

export const optimizeImageUrl = (
  src: string,
  options: ImageOptimizationOptions = {}
): string => {
  const {
    quality = 80,
    format = 'webp',
    width,
    height,
    blur = false
  } = options;

  // For external images, use a placeholder service or CDN
  if (src.startsWith('http')) {
    // If using a CDN like Cloudinary, Vercel, or similar
    const params = new URLSearchParams();
    if (quality) params.set('q', quality.toString());
    if (format) params.set('f', format);
    if (width) params.set('w', width.toString());
    if (height) params.set('h', height.toString());
    if (blur) params.set('blur', '20');
    
    return `${src}?${params.toString()}`;
  }

  return src;
};

export const generateImagePlaceholder = (width: number, height: number): string => {
  return `data:image/svg+xml;base64,${btoa(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6"/>
      <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#9ca3af" font-family="Arial, sans-serif" font-size="14">
        Loading...
      </text>
    </svg>
  `)}`;
};

export const preloadCriticalImages = (imageUrls: string[]): void => {
  imageUrls.forEach((url) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
  });
};

export const lazyLoadImage = (img: HTMLImageElement): void => {
  // Check if IntersectionObserver is available (e.g., in test environments)
  if (typeof IntersectionObserver === 'undefined') {
    // Fallback: load image immediately
    if (img.dataset.src) {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    }
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLImageElement;
          if (target.dataset.src) {
            target.src = target.dataset.src;
            target.removeAttribute('data-src');
            observer.unobserve(target);
          }
        }
      });
    },
    { rootMargin: '50px' }
  );

  observer.observe(img);
};
