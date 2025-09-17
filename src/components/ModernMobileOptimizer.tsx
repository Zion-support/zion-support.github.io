import React, { useEffect } from 'react';

const ModernMobileOptimizer: React.FC = () => {
  useEffect(() => {
    // Modern mobile optimization
    const optimizeMobile = () => {
      // Add PWA meta tags
      const addPWAMeta = () => {
        const metaTags = [
          { name: 'theme-color', content: '#3B82F6' },
          { name: 'apple-mobile-web-app-capable', content: 'yes' },
          { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
          { name: 'apple-mobile-web-app-title', content: 'Zion Tech Group' },
          { name: 'mobile-web-app-capable', content: 'yes' }
        ];

        metaTags.forEach(tag => {
          let meta = document.querySelector(`meta[name="${tag.name}"]`);
          if (!meta) {
            meta = document.createElement('meta');
            meta.setAttribute('name', tag.name);
            document.head.appendChild(meta);
          }
          meta.setAttribute('content', tag.content);
        });
      };

      addPWAMeta();

      // Optimize touch interactions
      const optimizeTouch = () => {
        // Add touch-action CSS
        const style = document.createElement('style');
        style.textContent = `
          * {
            touch-action: manipulation;
          }
          
          @media (max-width: 768px) {
            button, a, input, select, textarea {
              min-height: 44px;
              min-width: 44px;
            }
            
            /* Improve scrolling performance */
            .scroll-container {
              -webkit-overflow-scrolling: touch;
            }
          }
        `;
        document.head.appendChild(style);
      };

      optimizeTouch();

      // Add mobile-specific event listeners
      const addMobileEvents = () => {
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

      addMobileEvents();
    };

    optimizeMobile();
  }, []);

  return null;
};

export default ModernMobileOptimizer;