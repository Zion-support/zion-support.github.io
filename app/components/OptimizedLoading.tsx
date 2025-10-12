import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Loader2 } from 'lucide-react';

interface OptimizedLoadingProps {
  children: React.ReactNode;
  minLoadTime?: number;
  className?: string;
}

const OptimizedLoading: React.FC<OptimizedLoadingProps> = ({
  children,
  minLoadTime = 300,
  className = ''
}) => {
  const [isReady, setIsReady] = useState(false);
  const [startTime] = useState(Date.now());

  useEffect(() => {
    const optimizeLoading = () => {
      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadTime - elapsed);
      
      setTimeout(() => {
        setIsReady(true);
      }, remainingTime);
    };

    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = '/fonts/inter.woff2';
      fontLink.as = 'font';
      fontLink.type = 'font/woff2';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);

      // Preload critical images
      const criticalImages = [
        '/images/hero-bg.jpg',
        '/images/logo.png'
      ];

      criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };

    preloadCriticalResources();
    optimizeLoading();
  }, [minLoadTime, startTime]);

  return (
    <>
      <Helmet>
        <title>Loading - Zion Tech Group</title>
      </Helmet>
      
      <div className={className}>
        {isReady ? (
          children
        ) : (
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
              <Loader2 className="w-12 h-12 text-cyan-500 animate-spin mx-auto mb-4" />
              <p className="text-gray-600 font-medium">Optimizing your experience...</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default OptimizedLoading;