import React, { useEffect } from 'react';

const MobileOptimizer: React.FC = () => {
  useEffect(() => {
    // Prevent zoom on input focus for iOS
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    }

    // Add touch-friendly classes
    document.body.classList.add('touch-friendly');

    // Optimize for mobile performance
    const optimizeForMobile = () => {
      // Reduce animations on mobile
      if (window.innerWidth < 768) {
        document.documentElement.classList.add('reduce-animations');
      }
    };

    optimizeForMobile();
    window.addEventListener('resize', optimizeForMobile);

    return () => {
      window.removeEventListener('resize', optimizeForMobile);
    };
  }, []);

  return null;
};

export default MobileOptimizer;