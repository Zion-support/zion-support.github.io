import React, { useEffect } from 'react';
import Head from 'next/head';

interface PerformanceOptimizerProps {
  preloadImages?: string[];
  preloadFonts?: string[];
  criticalCSS?: string;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  preloadImages = [], 
  preloadFonts = [
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap'
  ], 
  criticalCSS
}) => {
  useEffect(() => {
    // Performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP: ', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            console.log('FID: ', entry.processingStart - entry.startTime);
          }
          if (entry.entryType === 'layout-shift') {
            console.log('CLS: ', entry.value);
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

      return () => observer.disconnect();
    }
  }, []);

  // Preload critical resources
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Preload images
      preloadImages.forEach((image) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = image;
        document.head.appendChild(link);
      });

      // Preload fonts
      preloadFonts.forEach((font) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = font;
        document.head.appendChild(link);
      });
    }
  }, [preloadImages, preloadFonts]);

  return (
    <Head>
      {criticalCSS && (
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
      )}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    </Head>
  );
};

export default PerformanceOptimizer;