import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Enhance accessibility features
    const enhanceAccessibility = () => {
      // Add skip links
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);

      // Add main content landmark
      const mainContent = document.querySelector('main') || document.querySelector('[role="main"]');
      if (mainContent && !mainContent.id) {
        mainContent.id = 'main-content';
      }

      // Enhance focus management
      const focusableElements = document.querySelectorAll(
        'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );

      focusableElements.forEach((element) => {
        element.addEventListener('focus', (e) => {
          (e.target as HTMLElement).classList.add('focus-visible');
        });

        element.addEventListener('blur', (e) => {
          (e.target as HTMLElement).classList.remove('focus-visible');
        });
      });
    };

    // Run enhancement after DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', enhanceAccessibility);
    } else {
      enhanceAccessibility();
    }

    return () => {
      // Cleanup if needed
    };
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;