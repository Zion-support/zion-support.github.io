import React, { useEffect, useState } from 'react';

interface MobileOptimizationSettings {
  touchOptimized: boolean;
  gestureNavigation: boolean;
  hapticFeedback: boolean;
  swipeGestures: boolean;
  mobileLayout: boolean;
}

const MobileOptimizer: React.FC = () => {
  const [settings, setSettings] = useState<MobileOptimizationSettings>({
    touchOptimized: true,
    gestureNavigation: true,
    hapticFeedback: false,
    swipeGestures: true,
    mobileLayout: true
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth <= 768;
      
      setIsMobile(isMobileDevice || (isTouchDevice && isSmallScreen));
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Apply mobile optimizations
    if (isMobile) {
      applyMobileOptimizations();
    }

    // Load saved settings
    const savedSettings = localStorage.getItem('mobile-settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  const applyMobileOptimizations = () => {
    const root = document.documentElement;
    
    // Add mobile-specific classes
    root.classList.add('mobile-optimized');
    
    // Set viewport meta tag for better mobile experience
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    }

    // Add touch-friendly styles
    const style = document.createElement('style');
    style.textContent = `
      .mobile-optimized * {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      
      .mobile-optimized button,
      .mobile-optimized a {
        min-height: 44px;
        min-width: 44px;
        touch-action: manipulation;
      }
      
      .mobile-optimized input,
      .mobile-optimized textarea {
        -webkit-user-select: text;
        -khtml-user-select: text;
        -moz-user-select: text;
        -ms-user-select: text;
        user-select: text;
      }
    `;
    document.head.appendChild(style);
  };

  const updateSetting = (key: keyof MobileOptimizationSettings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    localStorage.setItem('mobile-settings', JSON.stringify(newSettings));
    
    // Apply specific optimizations
    applySetting(key, value);
  };

  const applySetting = (key: keyof MobileOptimizationSettings, value: boolean) => {
    const root = document.documentElement;
    
    switch (key) {
      case 'touchOptimized':
        if (value) {
          root.classList.add('touch-optimized');
        } else {
          root.classList.remove('touch-optimized');
        }
        break;
        
      case 'gestureNavigation':
        if (value) {
          root.classList.add('gesture-navigation');
          enableGestureNavigation();
        } else {
          root.classList.remove('gesture-navigation');
          disableGestureNavigation();
        }
        break;
        
      case 'hapticFeedback':
        if (value && 'vibrate' in navigator) {
          root.classList.add('haptic-feedback');
        } else {
          root.classList.remove('haptic-feedback');
        }
        break;
        
      case 'swipeGestures':
        if (value) {
          enableSwipeGestures();
        } else {
          disableSwipeGestures();
        }
        break;
        
      case 'mobileLayout':
        if (value) {
          root.classList.add('mobile-layout');
        } else {
          root.classList.remove('mobile-layout');
        }
        break;
    }
  };

  const enableGestureNavigation = () => {
    // Enable swipe navigation between sections
    let startX = 0;
    let startY = 0;
    
    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };
    
    const handleTouchEnd = (e: TouchEvent) => {
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      
      const diffX = startX - endX;
      const diffY = startY - endY;
      
      // Horizontal swipe (navigation)
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) {
          // Swipe left - next section
          navigateToNextSection();
        } else {
          // Swipe right - previous section
          navigateToPreviousSection();
        }
      }
    };
    
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });
  };

  const disableGestureNavigation = () => {
    // Remove gesture navigation event listeners
    // Implementation would remove the specific listeners
  };

  const enableSwipeGestures = () => {
    // Enable swipe gestures for cards and components
    const cards = document.querySelectorAll('.swipeable-card');
    
    cards.forEach(card => {
      let startX = 0;
      
      const handleSwipeStart = (e: TouchEvent) => {
        startX = e.touches[0].clientX;
      };
      
      const handleSwipeEnd = (e: TouchEvent) => {
        const endX = e.changedTouches[0].clientX;
        const diffX = endX - startX;
        
        if (Math.abs(diffX) > 100) {
          if (diffX > 0) {
            // Swipe right - like or favorite
            handleCardAction(card, 'like');
          } else {
            // Swipe left - dismiss or dislike
            handleCardAction(card, 'dismiss');
          }
        }
      };
      
      card.addEventListener('touchstart', handleSwipeStart, { passive: true });
      card.addEventListener('touchend', handleSwipeEnd, { passive: true });
    });
  };

  const disableSwipeGestures = () => {
    // Remove swipe gesture event listeners
    // Implementation would remove the specific listeners
  };

  const navigateToNextSection = () => {
    // Navigate to next section
    const sections = document.querySelectorAll('section');
    const currentSection = document.querySelector('section:target');
    // Implementation for navigation logic
  };

  const navigateToPreviousSection = () => {
    // Navigate to previous section
    // Implementation for navigation logic
  };

  const handleCardAction = (card: Element, action: string) => {
    // Handle card swipe actions
    if (action === 'like') {
      card.classList.add('liked');
    } else if (action === 'dismiss') {
      card.classList.add('dismissed');
    }
  };

  // Add haptic feedback
  const triggerHapticFeedback = (type: 'light' | 'medium' | 'heavy' = 'light') => {
    if (settings.hapticFeedback && 'vibrate' in navigator) {
      const patterns = {
        light: [10],
        medium: [20],
        heavy: [50]
      };
      navigator.vibrate(patterns[type]);
    }
  };

  // Don't render anything on desktop
  if (!isMobile) {
    return null;
  }

  return (
    <div className="mobile-optimizer">
      {/* Mobile-specific optimizations are applied via CSS classes */}
      {/* This component mainly handles the logic and settings */}
    </div>
  );
};

export default MobileOptimizer;