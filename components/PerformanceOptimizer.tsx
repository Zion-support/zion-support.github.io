import React, { useEffect } from 'react';
import Head from 'next/head';

interface PerformanceOptimizerProps {
  preloadImages?: string[];
<<<<<<< HEAD
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
=======
  criticalCSS?: string;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ 
  preloadImages = [
    '/images/hero-bg.jpg',
    '/images/logo.png'
  ], 
  criticalCSS 
}) => {
  useEffect(() => {
    // Preload critical images
    preloadImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
>>>>>>> main
      document.head.appendChild(link);
    });

    // Preload critical fonts
<<<<<<< HEAD
    preloadFonts.forEach((fontSrc) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = fontSrc;
      document.head.appendChild(link);
    });
=======
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.as = 'style';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap';
    document.head.appendChild(fontLink);
>>>>>>> main

    // Add performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        console.log('Performance metrics:', {
          domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
          loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
<<<<<<< HEAD
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
=======
          firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime,
          firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime
        });
      });
    }
  }, [preloadImages]);

  return (
    <Head>
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      {criticalCSS && <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />}
>>>>>>> main
    </Head>
  );
};

export default PerformanceOptimizer;