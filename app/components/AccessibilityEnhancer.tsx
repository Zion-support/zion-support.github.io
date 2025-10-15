import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Add ARIA roles to semantic elements
    const addAriaRoles = () => {
      const nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
      }

      const footer = document.querySelector('footer');
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo');
      }

      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
      }
    };

    // Add focus management
    const addFocusManagement = () => {
      const existingSkipLink = document.querySelector('.skip-link');
      if (!existingSkipLink) {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-600 text-white px-4 py-2 rounded z-50';
        document.body.insertBefore(skipLink, document.body.firstChild);
      }
    };

    addAriaRoles();
    addFocusManagement();

    return () => {
      const skipLink = document.querySelector('.skip-link');
      if (skipLink) {
        skipLink.remove();
      }
    };
  }, []);

  return <div className="accessibility-enhanced">{children}</div>;
};

export default AccessibilityEnhancer;
