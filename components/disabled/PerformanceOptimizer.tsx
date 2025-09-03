import Head from "next/head";
import React, { useEffect } from "react";

interface PerformanceOptimizerProps {
  preloadImages?: string[];
  preloadFonts?: string[];
  preloadScripts?: string[];
  className?: string;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  preloadImages = [],
  preloadFonts = [],
  preloadScripts = [],
  className = ""
}) => {
  useEffect(() => {
    // Preload critical resources
    preloadImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });

    preloadFonts.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.type = 'font/woff2';
      link.href = href;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    preloadScripts.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'script';
      link.href = src;
      document.head.appendChild(link);
    });

    // Cleanup function
    return () => {
      // Remove preload links when component unmounts
      const preloadLinks = document.querySelectorAll('link[rel="preload"]');
      preloadLinks.forEach(link => {
        if (preloadImages.includes(link.getAttribute('href') || '') ||
            preloadFonts.includes(link.getAttribute('href') || '') ||
            preloadScripts.includes(link.getAttribute('href') || '')) {
          link.remove();
        }
      });
    };
  }, [preloadImages, preloadFonts, preloadScripts]);

  return (
    <Head>
      {/* Performance hints */}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Resource hints */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="msapplication-tap-highlight" content="no" />
    </Head>
  );
};

export default PerformanceOptimizer;