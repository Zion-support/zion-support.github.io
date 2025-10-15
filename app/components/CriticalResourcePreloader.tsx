import React, { useEffect } from 'react';

interface CriticalResourcePreloaderProps {
  children: React.ReactNode;
}

const CriticalResourcePreloader: React.FC<CriticalResourcePreloaderProps> = ({ children }) => {
  useEffect(() => {
    // Preload critical resources
    const preloadResources = () => {
      const criticalResources = [
        { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2' },
        { href: '/images/hero-bg.jpg', as: 'image' },
        { href: '/images/logo.svg', as: 'image' },
        { href: '/css/critical.css', as: 'style' }
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource.href;
        link.as = resource.as;
        if (resource.type) {
          link.type = resource.type;
        }
        document.head.appendChild(link);
      });
    };

    preloadResources();
  }, []);

  return <>{children}</>;
};

export default CriticalResourcePreloader;
