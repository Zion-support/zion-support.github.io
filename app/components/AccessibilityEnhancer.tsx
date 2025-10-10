import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Accessibility enhancements
    const enhanceAccessibility = () => {
      // Add skip links
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);

      // Add ARIA labels to interactive elements
      const buttons = document.querySelectorAll('button:not([aria-label])');
      buttons.forEach((button) => {
        if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
          button.setAttribute('aria-label', 'Button');
        }
      });
    };

    enhanceAccessibility();
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
