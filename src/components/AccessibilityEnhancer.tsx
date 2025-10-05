import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Add skip links for keyboard navigation
    const addSkipLinks = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'skip-link';
      skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
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

    // Enhance interactive elements
    const enhanceInteractiveElements = () => {
      const buttons = document.querySelectorAll('button, [role="button"]');
      buttons.forEach(button => {
        if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
          button.setAttribute('aria-label', 'Interactive element');
        }
      });
    };

    // Enhance focus management
    const enhanceFocusManagement = () => {
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      });

      document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
      });
    };

    addSkipLinks();
    enhanceInteractiveElements();
    enhanceFocusManagement();

    // Cleanup function
    return () => {
      const skipLink = document.querySelector('.skip-link');
      if (skipLink) {
        skipLink.remove();
      }
    };
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;