'use client'
import { useEffect } from 'react';

const CriticalResourcePreloader = () => {
  useEffect(() => {
    const preloadCriticalResources = () => {
      // Critical fonts
      const criticalFonts = [
        {
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap',
          as: 'style',
          crossorigin: 'anonymous'
        },
        {
          href: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous'
        }
      ];

      // Critical CSS
      const criticalCSS = [
        '/css/critical.css',
        '/css/tailwind.css'
      ];

      // Critical JavaScript
      const criticalJS = [
        '/js/critical.js',
        '/js/analytics.js'
      ];

      // Critical images
      const criticalImages = [
        '/images/hero-bg.jpg',
        '/images/logo.png'
      ];

      // Preload fonts
      criticalFonts.forEach(font => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = font.href;
        link.as = font.as;
        if (font.crossorigin) {
          link.crossOrigin = font.crossorigin;
        }
        if (font.type) {
          link.type = font.type;
        }
        document.head.appendChild(link);
      });

      // Preload CSS
      criticalCSS.forEach(css => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = css;
        link.as = 'style';
        document.head.appendChild(link);
      });

      // Preload JavaScript
      criticalJS.forEach(js => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = js;
        link.as = 'script';
        document.head.appendChild(link);
      });

      // Preload images
      criticalImages.forEach(image => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = image;
        link.as = 'image';
        document.head.appendChild(link);
      });

      // Preconnect to external domains
      const externalDomains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://www.google-analytics.com',
        'https://www.googletagmanager.com'
      ];

      externalDomains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        document.head.appendChild(link);
      });
    };

    preloadCriticalResources();
  }, []);

  return null; // This component doesn't render anything
};

export default CriticalResourcePreloader;