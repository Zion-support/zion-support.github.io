import React, { useEffect } from 'react';
import Head from 'next/head';

interface PerformanceOptimizerProps {
  preloadImages?: string[];
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ preloadImages = [] }) => {
  useEffect(() => {
    // Preload critical images
    preloadImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });

    // Optimize scroll performance
    let ticking = false;
    const optimizeScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Scroll optimization logic here
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', optimizeScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', optimizeScroll);
    };
  }, [preloadImages]);

  return (
    <Head>
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
    </Head>
  );
};

export default PerformanceOptimizer;