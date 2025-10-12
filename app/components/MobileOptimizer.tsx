import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

interface MobileOptimizerProps {
  children: React.ReactNode;
  className?: string;
}

const MobileOptimizer: React.FC<MobileOptimizerProps> = ({
  children,
  className = ''
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOptimized, setIsOptimized] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };

    const optimizeForMobile = () => {
      // Optimize images for mobile
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (isMobile && img.src.includes('/api/placeholder/')) {
          const newSrc = img.src.replace(/\d+x\d+/, '400x300');
          img.src = newSrc;
        }
      });

      // Optimize touch interactions
      const buttons = document.querySelectorAll('button, a');
      buttons.forEach(button => {
        button.style.minHeight = '44px';
        button.style.minWidth = '44px';
      });

      setIsOptimized(true);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    if (isMobile) {
      optimizeForMobile();
    } else {
      setIsOptimized(true);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  return (
    <>
      <Helmet>
        <title>Mobile Optimized - Zion Tech Group</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Helmet>
      
      <div className={`${isMobile ? 'mobile-optimized' : ''} ${className}`}>
        {isOptimized ? children : (
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
              <div className="w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-gray-600">Optimizing for mobile...</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileOptimizer;