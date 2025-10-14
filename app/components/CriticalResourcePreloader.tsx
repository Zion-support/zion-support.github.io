import React, { useEffect, useState } from "react";

interface CriticalResourcePreloaderProps {
  children?: React.ReactNode;
}

const CriticalResourcePreloader: React.FC<CriticalResourcePreloaderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload critical resources
    const preloadResources = async () => {
      try {
        // Preload critical CSS
        const criticalCSS = document.createElement('link');
        criticalCSS.rel = 'preload';
        criticalCSS.as = 'style';
        criticalCSS.href = '/critical.css';
        document.head.appendChild(criticalCSS);

        // Preload critical fonts
        const criticalFont = document.createElement('link');
        criticalFont.rel = 'preload';
        criticalFont.as = 'font';
        criticalFont.type = 'font/woff2';
        criticalFont.href = '/fonts/inter-var.woff2';
        criticalFont.crossOrigin = 'anonymous';
        document.head.appendChild(criticalFont);

        // Preload critical images
        const criticalImages = [
          '/images/hero-bg.jpg',
          '/images/logo.svg',
          '/images/favicon.ico'
        ];

        await Promise.all(
          criticalImages.map(src => {
            return new Promise((resolve, reject) => {
              const img = new Image();
              img.onload = resolve;
              img.onerror = reject;
              img.src = src;
            });
          })
        );

        // Simulate loading time
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setIsLoading(false);
      } catch (error) {
        console.error('Error preloading resources:', error);
        setIsLoading(false);
      }
    };

    preloadResources();
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-slate-900 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default CriticalResourcePreloader;