import { useEffect } from 'react';

const MobileOptimizer: React.FC = () => {
  useEffect(() => {
    // Prevent zoom on input focus for iOS
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no');
    }

    // Add touch event optimizations
    const addTouchOptimizations = () => {
      // Prevent double-tap zoom
      let lastTouchEnd = 0;
      document.addEventListener('touchend', (event) => {
        const now = new Date().getTime();
        if (now - lastTouchEnd <= 300) {
          event.preventDefault();
        }
        lastTouchEnd = now;
      }, false);
    };

    addTouchOptimizations();
  }, []);

  return null;
};

export default MobileOptimizer;