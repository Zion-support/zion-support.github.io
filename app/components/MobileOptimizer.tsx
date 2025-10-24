import { useEffect } from 'react';

const MobileOptimizer = () => {
  useEffect(() => {
    // Prevent zoom on input focus for iOS
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    }

    // Add touch-friendly classes
    const buttons = document.querySelectorAll('button, a, [role="button"]');
    buttons.forEach((button) => {
      if (!button.classList.contains('touch-manipulation')) {
        button.classList.add('touch-manipulation');
      }
    });

    // Optimize images for mobile
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      const imageElement = img as HTMLImageElement;
      if (!imageElement.loading) {
        imageElement.loading = 'lazy';
      }
      if (!imageElement.decoding) {
        imageElement.decoding = 'async';
      }
    });

    // Add mobile-specific CSS
    const style = document.createElement('style');
    style.textContent = `
      .touch-manipulation {
        touch-action: manipulation;
      }
      
      @media (max-width: 768px) {
        * {
          -webkit-tap-highlight-color: transparent;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
};

export default MobileOptimizer;