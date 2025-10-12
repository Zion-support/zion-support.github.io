import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

interface LoadingOptimizerProps {
  children: React.ReactNode;
  minLoadTime?: number;
  className?: string;
}

const LoadingOptimizer: React.FC<LoadingOptimizerProps> = ({
  children,
  minLoadTime = 500,
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
    const preloadResources = () => {
      const criticalImages = [
        '/images/hero-bg.jpg',
        '/images/logo.png'
      ];

      criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };

    preloadResources();
    optimizeLoading();
  }, [minLoadTime, startTime]);

  return (
    <>
      <Helmet>
        <title>Loading Optimizer - Zion Tech Group</title>
      </Helmet>
      
      <div className={className}>
        {isReady ? (
          children
        ) : (
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-gray-600">Optimizing your experience...</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LoadingOptimizer;