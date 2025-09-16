import React, { useEffect, useCallback, useState } from 'react';

interface MobileOptimizerProps {
  children: React.ReactNode;
}

const MobileOptimizer: React.FC<MobileOptimizerProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');

  // Detect device type and orientation
  const detectDevice = useCallback(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    setIsMobile(width < 768);
    setIsTablet(width >= 768 && width < 1024);
    setOrientation(height > width ? 'portrait' : 'landscape');
  }, []);

  // Optimize touch interactions
  const optimizeTouchInteractions = useCallback(() => {
    // Add touch-friendly classes
    if (isMobile) {
      document.body.classList.add('mobile-device');
    } else {
      document.body.classList.remove('mobile-device');
    }

    if (isTablet) {
      document.body.classList.add('tablet-device');
    } else {
      document.body.classList.remove('tablet-device');
    }

    // Add orientation classes
    document.body.classList.add(`${orientation}-orientation`);
  }, [isMobile, isTablet, orientation]);

  // Optimize images for mobile
  const optimizeImagesForMobile = useCallback(() => {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
      if (isMobile) {
        // Add mobile-specific attributes
        img.setAttribute('loading', 'lazy');
        img.setAttribute('decoding', 'async');
        
        // Add responsive image handling
        if (!img.hasAttribute('data-mobile-optimized')) {
          img.setAttribute('data-mobile-optimized', 'true');
          
          // Create responsive image sources
          const src = img.src;
          const srcset = img.getAttribute('srcset');
          
          if (!srcset && src) {
            // Generate srcset for different screen sizes
            const baseSrc = src.replace(/\.(jpg|jpeg|png|webp)$/, '');
            const extension = src.match(/\.(jpg|jpeg|png|webp)$/)?.[0] || '.jpg';
            
            const newSrcset = [
              `${baseSrc}-320w${extension} 320w`,
              `${baseSrc}-640w${extension} 640w`,
              `${baseSrc}-1024w${extension} 1024w`,
              `${baseSrc}-1920w${extension} 1920w`
            ].join(', ');
            
            img.setAttribute('srcset', newSrcset);
            img.setAttribute('sizes', '(max-width: 320px) 320px, (max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px');
          }
        }
      }
    });
  }, [isMobile]);

  // Optimize font sizes for mobile
  const optimizeFontSizes = useCallback(() => {
    const root = document.documentElement;
    
    if (isMobile) {
      root.style.fontSize = '14px';
    } else if (isTablet) {
      root.style.fontSize = '15px';
    } else {
      root.style.fontSize = '16px';
    }
  }, [isMobile, isTablet]);

  // Add mobile-specific CSS classes
  const addMobileClasses = useCallback(() => {
    const body = document.body;
    
    // Remove existing device classes
    body.classList.remove('mobile-device', 'tablet-device', 'desktop-device');
    body.classList.remove('portrait-orientation', 'landscape-orientation');
    
    // Add current device class
    if (isMobile) {
      body.classList.add('mobile-device');
    } else if (isTablet) {
      body.classList.add('tablet-device');
    } else {
      body.classList.add('desktop-device');
    }
    
    // Add orientation class
    body.classList.add(`${orientation}-orientation`);
  }, [isMobile, isTablet, orientation]);

  // Handle viewport changes
  const handleViewportChange = useCallback(() => {
    detectDevice();
  }, [detectDevice]);

  // Optimize scroll performance for mobile
  const optimizeScrollPerformance = useCallback(() => {
    if (isMobile) {
      // Add smooth scrolling
      document.documentElement.style.scrollBehavior = 'smooth';
      
      // Add touch scrolling optimization
      document.body.style.webkitOverflowScrolling = 'touch';
    }
  }, [isMobile]);

  // Add mobile-specific event listeners
  const addMobileEventListeners = useCallback(() => {
    // Handle orientation change
    const handleOrientationChange = () => {
      setTimeout(detectDevice, 100); // Small delay to ensure accurate dimensions
    };

    // Handle resize
    const handleResize = () => {
      detectDevice();
    };

    window.addEventListener('orientationchange', handleOrientationChange);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
      window.removeEventListener('resize', handleResize);
    };
  }, [detectDevice]);

  useEffect(() => {
    // Initial setup
    detectDevice();
    
    // Add event listeners
    const cleanup = addMobileEventListeners();
    
    return cleanup;
  }, [detectDevice, addMobileEventListeners]);

  useEffect(() => {
    // Run optimizations when device type changes
    optimizeTouchInteractions();
    optimizeImagesForMobile();
    optimizeFontSizes();
    addMobileClasses();
    optimizeScrollPerformance();
  }, [optimizeTouchInteractions, optimizeImagesForMobile, optimizeFontSizes, addMobileClasses, optimizeScrollPerformance]);

  return (
    <div className={`mobile-optimizer ${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''} ${orientation}`}>
      {children}
    </div>
  );
};

export default MobileOptimizer;