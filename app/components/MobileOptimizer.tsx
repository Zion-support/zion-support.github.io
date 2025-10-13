import React, {   useEffect   } from 'react';
export default function MobileOptimizer() {
  useEffect(() => {
    // Add viewport meta tag if not present
    let viewport = document.querySelector('meta[name="viewport"
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.setAttribute('name', 'viewport');'
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes');'
      document.head.appendChild(viewport);
    }

    // Add touch-friendly classes
    const addTouchClasses = () => {
  
      const buttons = document.querySelectorAll('button, a[role="button"
      buttons.forEach(button => {
        if (!button.classList.contains('touch-friendly')) {
          button.classList.add('touch-friendly', 'min-h-[44px]', 'min-w-[44px]');'
        }
      });
    };

    // Initial setup
    addTouchClasses();

    // Re-run on DOM changes
    const observer = new MutationObserver(addTouchClasses);
    observer.observe(document.body, { childList: true, subtree: true });

    // Handle orientation changes
    const handleOrientationChange = () => {
  
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    };

    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      observer.disconnect();
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  return null;
}