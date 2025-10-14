<<<<<<< HEAD
import { useEffect, Node } from 'react
interface PerformanceOptimizerProps { children: Node }
;
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-54ad
const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  useEffect(() => {
    // Performance optimization code'';
const optimizeImages = () => {;
const images = document.querySelectorAll('img')'
      images.forEach((img) => {
<<<<<<< HEAD

        if (!img.hasAttribute('loading')) {';
          img.setAttribute('loading', 'lazy');
import React from 'react';'
{ useEffect, Node } from 'react';
interface PerformanceOptimizerProps { children: Node; }

}}}}}
=======
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  enableImageOptimization = true,
  enableLazyLoading = true,
  enableCodeSplitting = true,
  enablePrefetching = true,
  enableCriticalCSS = true,
  enableResourceHints = true,
}) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Image optimization
    if (enableImageOptimization) {
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
        // Add fetchpriority for above-the-fold images
        if (img.getBoundingClientRect().top < window.innerHeight) {
          img.setAttribute('fetchpriority', 'high');
        }
      });
    }
      link.rel = 'preload'
      link.href = '/fonts/inter.woff2'
      link.as = 'font'
      link.type = 'font/woff2'
      ];

      prefetchLinks.forEach((href) => {
        const existingLink = document.querySelector(`link[href="${href}"]`);
        if (!existingLink) {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = href;
          document.head.appendChild(link);
        }
      });
    }
    // Run optimizations;
    optimizeImages()
    optimizeFonts()
    optimizeResources()
    // Cleanup function;
  return <>{children}</>
}
export default PerformanceOptimizer;
        const link = document.createElement('link')'
        link.rel = 'preload''
        link.href = resource
        link.as = resource.endsWith('.css') ? 'style' : 'script''
        document.head.appendChild(link)}
    // Run optimizations
    optimizeImages()
    optimizeFonts()
    optimizeResources()
    // Cleanup function
    return () => {
      // Cleanup if needed}}, [])
  return <>{children}</>
}
export default PerformanceOptimizer
      // Cleanup if needed;}
  }, [])
  return <>{children}</>
};

export default PerformanceOptimizer;
>>>>>>> cursor/fix-errors-and-merge-to-main-54ad
