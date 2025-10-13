import React, { useEffect, ReactNode } from 'react';

interface AccessibilityEnhancerProps {
  children: ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Enhanced accessibility features
    const enhanceAccessibility = () => {
      // Skip links for keyboard navigation
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);

      // Add ARIA landmarks
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
      }

      // Enhanced focus management
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      const focusable = document.querySelectorAll(focusableElements);
      
      focusable.forEach((element) => {
        element.addEventListener('focus', (e) => {
          e.target.style.outline = '2px solid #3b82f6';
          e.target.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', (e) => {
          e.target.style.outline = '';
          e.target.style.outlineOffset = '';
        });
      });

      // High contrast mode detection
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
      if (prefersHighContrast.matches) {
        document.documentElement.classList.add('high-contrast');
      }

      // Reduced motion detection
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (prefersReducedMotion.matches) {
        document.documentElement.classList.add('reduce-motion');
      }
    };

    enhanceAccessibility();

    return () => {
      // Cleanup
      const skipLink = document.querySelector('a[href="#main-content"]');
      if (skipLink) {
        skipLink.remove();
      }
    };
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
