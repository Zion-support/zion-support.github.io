import React, { useEffect } from 'react';
import Head from 'next/head';

interface PerformanceOptimizerProps {
  preloadImages?: string[];
<<<<<<< HEAD
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ preloadImages = [] }) => {
  useEffect(() => {
    // Preload critical images
    preloadImages.forEach((imageSrc) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = imageSrc;
      document.head.appendChild(link);
    });

    // Optimize font loading
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.as = 'font';
    fontLink.type = 'font/woff2';
    fontLink.crossOrigin = 'anonymous';
    fontLink.href = '/fonts/inter-var.woff2';
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
      document.head.appendChild(link);
    });

    // Preload critical fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.as = 'style';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap';
>>>>>>> origin/main
    document.head.appendChild(fontLink);

    // Add performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
<<<<<<< HEAD
        console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart);
=======
        console.log('Performance metrics:', {
          domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
          loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
          firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime,
          firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime
        });
>>>>>>> origin/main
      });
    }
  }, [preloadImages]);

  return (
    <Head>
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
<<<<<<< HEAD
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
=======
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      {criticalCSS && <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />}
>>>>>>> origin/main
    </Head>
  );
};

export default PerformanceOptimizer;