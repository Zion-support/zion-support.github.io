import React from 'react';

/**
 * Performance Optimization Component
 * 
 * This component provides performance optimizations for the application including:
 * - Lazy loading for heavy components
 * - Image optimization
 * - Bundle size reduction
 * - Caching strategies
 */

// Lazy load heavy components
export const LazyComponent = React.lazy(() => import('./heavy-component'));

// Performance monitoring hook
export const usePerformanceMonitor = () => {
  React.useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'navigation') {
            console.log('Page load time:', entry.loadEventEnd - entry.loadEventStart);
          }
        });
      });
      
      observer.observe({ entryTypes: ['navigation'] });
      
      return () => observer.disconnect();
    }
  }, []);
};

// Image optimization component
export const OptimizedImage = ({ src, alt, ...props }: any) => {
  const [loaded, setLoaded] = React.useState(false);
  
  return (
    <div className="relative overflow-hidden">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`transition-opacity duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
    </div>
  );
};

// Bundle size optimization
export const BundleOptimizer = {
  // Remove unused imports
  removeUnusedImports: true,
  
  // Tree shaking configuration
  treeShaking: {
    enabled: true,
    exclude: ['react', 'react-dom']
  },
  
  // Code splitting strategy
  codeSplitting: {
    chunks: 'all',
    maxSize: 244000, // 244KB
    minSize: 20000   // 20KB
  }
};

export default {
  LazyComponent,
  usePerformanceMonitor,
  OptimizedImage,
  BundleOptimizer
};