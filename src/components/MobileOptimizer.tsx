<<<<<<< HEAD
import React, { useEffect } from 'react';

const MobileOptimizer: React.FC = () => {
  useEffect(() => {
    // Mobile optimization code
    const optimizeMobile = () => {
      // Set viewport meta tag if not present
      let viewport = document.querySelector('meta[name="viewport"]');
      if (!viewport) {
        viewport = document.createElement('meta');
        viewport.setAttribute('name', 'viewport');
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
        document.head.appendChild(viewport);
      }

      // Add touch-friendly optimizations
      const addTouchOptimizations = () => {
        // Prevent zoom on double tap
        let lastTouchEnd = 0;
        document.addEventListener('touchend', (event) => {
          const now = new Date().getTime();
          if (now - lastTouchEnd <= 300) {
            event.preventDefault();
          }
          lastTouchEnd = now;
        }, false);

        // Optimize scroll performance
        document.addEventListener('touchstart', () => {}, { passive: true });
        document.addEventListener('touchmove', () => {}, { passive: true });
      };

      addTouchOptimizations();

      // Optimize images for mobile
      const optimizeImagesForMobile = () => {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
          // Add loading="lazy" for better performance
          if (!img.loading) {
            img.loading = 'lazy';
          }
          
          // Add responsive image attributes
          if (!img.sizes) {
            img.sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';
          }
        });
      };

      optimizeImagesForMobile();

      // Add mobile-specific CSS optimizations
      const addMobileCSS = () => {
        const style = document.createElement('style');
        style.textContent = `
          /* Mobile optimizations */
          @media (max-width: 768px) {
            * {
              -webkit-tap-highlight-color: transparent;
            }
            
            body {
              -webkit-text-size-adjust: 100%;
              -ms-text-size-adjust: 100%;
            }
            
            /* Improve touch targets */
            button, a, input, select, textarea {
              min-height: 44px;
              min-width: 44px;
            }
          }
        `;
        document.head.appendChild(style);
      };

      addMobileCSS();
    };

    optimizeMobile();
  }, []);

  return null; // This component doesn't render anything
};

export default MobileOptimizer;
=======
import React from 'react';

export default function MobileOptimizer(): JSX.Element {
  return <></>;
}

>>>>>>> fix/netlify-build
