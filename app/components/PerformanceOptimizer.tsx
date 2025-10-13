<<<<<<< HEAD
interface PerformanceOptimizerProps {
}
const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  useEffect(() => {
    // Performance optimization logic
    const optimizePerformance = () => {
      // Preload critical resources
      const criticalResources = [
        '/fonts/inter-var.woff2',
        '/images/hero-bg.jpg',
        '/images/logo.svg',
        '/icons/sprite.svg'
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.woff2') ? 'font' : 'image';
        if (resource.endsWith('.woff2')) {
          link.crossOrigin = 'anonymous';
        }
      // Optimize images
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
      // Preconnect to external domains
      const externalDomains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://cdnjs.cloudflare.com'
      ];

      externalDomains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
      // Enable resource hints
      const resourceHints = [
        { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
        { rel: 'dns-prefetch', href: '//cdnjs.cloudflare.com' }
      ];

      resourceHints.forEach(hint => {
        const link = document.createElement('link');
        link.rel = hint.rel;
        link.href = hint.href;
        document.head.appendChild(link);
      });
    };

    // Run optimization after component mounts
    const timer = setTimeout(optimizePerformance, 100);
    return () => clearTimeout(timer);
  }, []);

=======
import React from 'react';

interface PerformanceoptimizerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Performanceoptimizer({ className = '', children, ...props }: PerformanceoptimizerProps) {
>>>>>>> origin/main
  return (
    <div className={`performanceoptimizer-component ${className}`} {...props}>
      {children}
    </div>
  );
}
