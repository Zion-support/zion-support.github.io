import React, { useEffect } from 'react';

interface CriticalResourcePreloaderProps {
  children: React.ReactNode;
}

const CriticalResourcePreloader: React.FC<CriticalResourcePreloaderProps> = ({ children }) => {
  useEffect(() => {
    // Preload critical resources
    const preloadResources = () => {
      // Preload critical CSS
      const criticalCSS = document.createElement('link');
      criticalCSS.rel = 'preload';
      criticalCSS.as = 'style';
      criticalCSS.href = '/styles/critical.css';
      document.head.appendChild(criticalCSS);

      // Preload critical fonts
      const criticalFont = document.createElement('link');
      criticalFont.rel = 'preload';
      criticalFont.as = 'font';
      criticalFont.type = 'font/woff2';
      criticalFont.crossOrigin = 'anonymous';
      criticalFont.href = '/fonts/inter-var.woff2';
      document.head.appendChild(criticalFont);
    };

    preloadResources();
  }, []);

  return <>{children}</>;
};

export default CriticalResourcePreloader;