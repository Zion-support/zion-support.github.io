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
  }, [preloadImages]);

  return (
    <Head>
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Head>
  );
};

export default PerformanceOptimizer;