import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add skip navigation link
    const addSkipLink = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #2563eb;
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        transition: top 0.3s;
      `;
      
      skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
      });
      
      skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
      });
      
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Add ARIA landmarks
    const addLandmarks = () => {
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
        main.setAttribute('id', 'main-content');
      }

      const nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
        nav.setAttribute('aria-label', 'Main navigation');
      }

      const footer = document.querySelector('footer');
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo');
      }
    };

    // Add focus management
    const addFocusManagement = () => {
      // Add focus indicators
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }
        
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        
        .focus\:not-sr-only:focus {
          position: static;
          width: auto;
          height: auto;
          padding: 0.5rem;
          margin: 0;
          overflow: visible;
          clip: auto;
          white-space: normal;
        }
      `;
      document.head.appendChild(style);
    };

    // Add keyboard navigation
    const addKeyboardNavigation = () => {
      document.addEventListener('keydown', (e) => {
        // Skip to main content with Enter key
        if (e.key === 'Enter' && e.target === document.querySelector('a[href="#main-content"]')) {
          const main = document.getElementById('main-content');
          if (main) {
            main.focus();
            main.scrollIntoView();
          }
        }
      });
    };

    // Add screen reader announcements
    const addScreenReaderSupport = () => {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.id = 'announcements';
      document.body.appendChild(announcement);
    };

    // Initialize accessibility features
    addSkipLink();
    addLandmarks();
    addFocusManagement();
    addKeyboardNavigation();
    addScreenReaderSupport();

    // Add ARIA labels to interactive elements
    const addAriaLabels = () => {
      const buttons = document.querySelectorAll('button:not([aria-label])');
      buttons.forEach((button, index) => {
        if (!button.textContent?.trim()) {
          button.setAttribute('aria-label', `Button ${index + 1}`);
        }
      });

      const links = document.querySelectorAll('a:not([aria-label]):not([aria-describedby])');
      links.forEach((link, index) => {
        if (!link.textContent?.trim() && !link.querySelector('img')) {
          link.setAttribute('aria-label', `Link ${index + 1}`);
        }
      });

      const images = document.querySelectorAll('img:not([alt])');
      images.forEach((img, index) => {
        img.setAttribute('alt', `Image ${index + 1}`);
      });
    };

    // Run accessibility enhancements after a short delay to ensure DOM is ready
    setTimeout(addAriaLabels, 100);

  }, []);

  return null;
};

export default AccessibilityEnhancer;