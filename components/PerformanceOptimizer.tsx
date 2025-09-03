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
            console.log('LCP:', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            console.log('FID:', entry.processingStart - entry.startTime);
          }
          if (entry.entryType === 'layout-shift') {
            console.log('CLS:', entry.value);
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

      return () => observer.disconnect();
    }
  }, []);

  return (
    <Head>
      {/* Preload critical resources */}
      {preloadImages.map((image, index) => (
        <link
          key={index}
          rel="preload"
          as="image"
          href={image}
        />
      ))}
      
      {preloadFonts.map((font, index) => (
        <link
          key={index}
          rel="preload"
          as="style"
          href={font}
        />
      ))}

      {/* Critical CSS */}
      {criticalCSS && (
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
      )}

      {/* Performance hints */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
      
      {/* DNS prefetch for external domains */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      
      {/* Resource hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Head>
  );
};

export default PerformanceOptimizer;