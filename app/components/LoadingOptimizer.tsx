import { useEffect, useState } from 'react';

interface LoadingOptimizerProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  delay?: number;
}

const LoadingOptimizer = ({ 
  children, 
  fallback = <div className="loading-spinner" />, 
  delay = 200 
}: LoadingOptimizerProps) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (!showContent) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};

// Preload critical resources
export const preloadCriticalResources = () => {
  const criticalResources = [
    { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
    { href: '/images/hero-bg.webp', as: 'image' },
    { href: '/images/logo.svg', as: 'image' }
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource.href;
    link.as = resource.as;
    if (resource.type) link.type = resource.type;
    if (resource.crossorigin) link.crossOrigin = resource.crossorigin;
    document.head.appendChild(link);
  });
};

// Lazy load non-critical components
export const lazyLoadComponent = (importFn: () => Promise<any>) => {
  return React.lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(importFn());
      }, 100); // Small delay to prevent blocking
    });
  });
};

// Optimize images
export const optimizeImage = (src: string, width?: number, quality = 80) => {
  if (!src.startsWith('http')) return src;
  
  const params = new URLSearchParams();
  if (width) params.set('w', width.toString());
  params.set('q', quality.toString());
  params.set('f', 'webp');
  
  return `${src}?${params.toString()}`;
};

// Debounce function
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle function
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

export default LoadingOptimizer;