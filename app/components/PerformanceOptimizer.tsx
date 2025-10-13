import React from 'react'
import { useEffect, Node } from 'react
interface PerformanceOptimizerProps {
  children: Node}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  useEffect(() => {
    // Performance optimization code'
    const optimizeImages = () => {
      const images = document.querySelectorAll('img')
      images.forEach((img) => {
<<<<<<< HEAD
        if (!img.hasAttribute('loading')) {';
          img.setAttribute('loading', 'lazy');
        }
      });
    }
    const optimizeFonts = () => {
      // Preload critical fonts;
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = '/fonts/inter.woff2';
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    }
=======
        if (!img.hasAttribute('loading')) {'
          img.setAttribute('loading', 'lazy')}
      })}
    const optimizeFonts = () => {
      // Preload critical fonts
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = '/fonts/inter.woff2'
      link.as = 'font'
      link.type = 'font/woff2'
      link.crossOrigin = 'anonymous'
      document.head.appendChild(link)}
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
    const optimizeResources = () => {
      // Preload critical resources
      const criticalResources = ['/css/critical.css','
        '/js/critical.js''
      ]
      criticalResources.forEach((resource) => {
<<<<<<< HEAD
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.css') ? 'style' : 'script';
        document.head.appendChild(link);
      });
    }
    // Run optimizations;
    optimizeImages();
    optimizeFonts();
    optimizeResources();

    // Cleanup function;
    return () => {
      // Cleanup if needed;
    }
  }, []);

  return <>{children}</>
}
export default PerformanceOptimizer;
=======
        const link = document.createElement('link')
        link.rel = 'preload'
        link.href = resource
        link.as = resource.endsWith('.css') ? 'style' : 'script'
        document.head.appendChild(link)})}
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
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
