import { useEffect } from 'react';
const CriticalResourcePreloader: React.FC = () => {
  useEffect(() => {
    // Preload critical resources;
    const preloadCriticalResources = () => {
      // Preload critical fonts;
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
      fontLink.as = 'style';
      document.head.appendChild(fontLink);
      // Preload critical images;
      const criticalImages = [
        '/logo.svg',
        '/og-image.jpg',
        '/favicon.svg'
      ];
      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = src;
        link.as = 'image';
        document.head.appendChild(link);
      });
      // Preload critical CSS;
      const criticalCSS = document.createElement('link');
      criticalCSS.rel = 'preload';
      criticalCSS.href = '/assets/index.css';
      criticalCSS.as = 'style';
      document.head.appendChild(criticalCSS);
    };
    // Preload critical JavaScript;
    const preloadCriticalJS = () => {
      const criticalJS = document.createElement('link');
      criticalJS.rel = 'modulepreload';
      criticalJS.href = '/assets/index.js';
      document.head.appendChild(criticalJS);
    };
    // DNS prefetch for external domains;
    const prefetchExternalDomains = () => {
      const domains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://www.google-analytics.com',
        'https://www.googletagmanager.com'
      ];
      domains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = domain;
        document.head.appendChild(link);
      });
    };
    // Initialize preloading;
    preloadCriticalResources();
    preloadCriticalJS();
    prefetchExternalDomains();
    // Preload next page on hover;
    const preloadOnHover = () => {
      const links = document.querySelectorAll('a[href^="/"]');
      links.forEach(link => {
        link.addEventListener('mouseenter', () => {
          const href = link.getAttribute('href');
          if (href && !href.startsWith('#')) {
            const prefetchLink = document.createElement('link');
            prefetchLink.rel = 'prefetch';
            prefetchLink.href = href;
            document.head.appendChild(prefetchLink);
          }
        }, { once: true });
      });
    };
    // Apply preloading after DOM is ready;
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', preloadOnHover);
    } else {
      preloadOnHover();
    }
  }, []);
  return null;
};
export default CriticalResourcePreloader; origin/cursor/analyze-improve-and-deploy-application-13a2
;