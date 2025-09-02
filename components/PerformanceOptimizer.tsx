import React, { useEffect } from 'react';
import Head from 'next/head';

interface PerformanceOptimizerProps {
  preloadImages?: string[];
  preloadFonts?: string[];
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  preloadImages = [],
  preloadFonts = []
}) => {
  useEffect(() => {
    // Preload critical images
    preloadImages.forEach((imageSrc) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = imageSrc;
      document.head.appendChild(link);
    });

    // Preload critical fonts
    preloadFonts.forEach((fontSrc) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = fontSrc;
      document.head.appendChild(link);
    });

    // Add performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        console.log('Performance metrics:', {
          domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
          loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
          totalTime: perfData.loadEventEnd - perfData.fetchStart
        });
      });
    }
  }, [preloadImages, preloadFonts]);

  return (
    <Head>
      {/* DNS prefetch for external domains */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Resource hints */}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
    </Head>
  );
};

export default PerformanceOptimizer;