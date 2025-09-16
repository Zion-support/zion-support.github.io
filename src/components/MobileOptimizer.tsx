import React, { useEffect, useState } from 'react';

const MobileOptimizer: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
      setOrientation(height > width ? 'portrait' : 'landscape');
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    window.addEventListener('orientationchange', checkDevice);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('orientationchange', checkDevice);
    };
  }, []);

  useEffect(() => {
    // Apply mobile-specific optimizations
    if (isMobile) {
      // Optimize touch interactions
      document.body.classList.add('mobile-optimized');
      
      // Add touch-friendly styles
      const style = document.createElement('style');
      style.textContent = `
        .mobile-optimized button {
          min-height: 44px;
          min-width: 44px;
        }
        
        .mobile-optimized input, 
        .mobile-optimized textarea {
          font-size: 16px; /* Prevents zoom on iOS */
        }
        
        .mobile-optimized .touch-target {
          min-height: 44px;
          min-width: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .mobile-optimized .swipeable {
          touch-action: pan-x;
        }
      `;
      document.head.appendChild(style);

      // Add swipe gestures
      addSwipeGestures();

      // Optimize images for mobile
      optimizeImagesForMobile();

      // Add pull-to-refresh functionality
      addPullToRefresh();

    } else {
      document.body.classList.remove('mobile-optimized');
    }

    if (isTablet) {
      document.body.classList.add('tablet-optimized');
    } else {
      document.body.classList.remove('tablet-optimized');
    }

    // Apply orientation-specific styles
    document.body.classList.add(`orientation-${orientation}`);

  }, [isMobile, isTablet, orientation]);

  const addSwipeGestures = () => {
    let startX = 0;
    let startY = 0;
    let endX = 0;
    let endY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      endX = e.changedTouches[0].clientX;
      endY = e.changedTouches[0].clientY;
      
      const diffX = startX - endX;
      const diffY = startY - endY;
      
      // Horizontal swipe
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) {
          // Swipe left - could trigger next action
          handleSwipeLeft();
        } else {
          // Swipe right - could trigger previous action
          handleSwipeRight();
        }
      }
      
      // Vertical swipe
      if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 50) {
        if (diffY > 0) {
          // Swipe up - could trigger scroll up
          handleSwipeUp();
        } else {
          // Swipe down - could trigger scroll down
          handleSwipeDown();
        }
      }
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  };

  const handleSwipeLeft = () => {
    // Trigger next action (e.g., next slide, next page)
    const nextButton = document.querySelector('[data-swipe-next]') as HTMLElement;
    if (nextButton) {
      nextButton.click();
    }
  };

  const handleSwipeRight = () => {
    // Trigger previous action (e.g., previous slide, previous page)
    const prevButton = document.querySelector('[data-swipe-prev]') as HTMLElement;
    if (prevButton) {
      prevButton.click();
    }
  };

  const handleSwipeUp = () => {
    // Scroll up
    window.scrollBy(0, -100);
  };

  const handleSwipeDown = () => {
    // Scroll down
    window.scrollBy(0, 100);
  };

  const optimizeImagesForMobile = () => {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Add loading="lazy" for better performance
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      
      // Add responsive image attributes
      if (!img.hasAttribute('sizes')) {
        img.setAttribute('sizes', '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw');
      }
    });
  };

  const addPullToRefresh = () => {
    let startY = 0;
    let currentY = 0;
    let isPulling = false;

    const handleTouchStart = (e: TouchEvent) => {
      if (window.scrollY === 0) {
        startY = e.touches[0].clientY;
        isPulling = true;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isPulling) return;
      
      currentY = e.touches[0].clientY;
      const pullDistance = currentY - startY;
      
      if (pullDistance > 0) {
        // Add pull-to-refresh visual feedback
        document.body.style.transform = `translateY(${Math.min(pullDistance * 0.5, 100)}px)`;
        
        if (pullDistance > 100) {
          // Show refresh indicator
          showRefreshIndicator();
        }
      }
    };

    const handleTouchEnd = () => {
      if (!isPulling) return;
      
      const pullDistance = currentY - startY;
      
      if (pullDistance > 100) {
        // Trigger refresh
        window.location.reload();
      } else {
        // Reset position
        document.body.style.transform = '';
        hideRefreshIndicator();
      }
      
      isPulling = false;
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  };

  const showRefreshIndicator = () => {
    let indicator = document.querySelector('.pull-to-refresh-indicator');
    if (!indicator) {
      indicator = document.createElement('div');
      indicator.className = 'pull-to-refresh-indicator';
      indicator.innerHTML = 'Release to refresh';
      indicator.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 10px 20px;
        border-radius: 20px;
        z-index: 1000;
        font-size: 14px;
      `;
      document.body.appendChild(indicator);
    }
  };

  const hideRefreshIndicator = () => {
    const indicator = document.querySelector('.pull-to-refresh-indicator');
    if (indicator) {
      indicator.remove();
    }
  };

  return null; // This component doesn't render anything visible
};

export default MobileOptimizer;