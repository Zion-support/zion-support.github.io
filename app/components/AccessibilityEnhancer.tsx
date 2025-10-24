import React, { ReactNode, useEffect } from 'react';
'use client'

interface AccessibilityEnhancerProps {
  children: ReactNode;
  className?: string;
};

  const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children, className }) => {
  useEffect(() => {
    // Enhance accessibility features
    const Page = () => {
      // Add skip links
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);

      // Add main content landmark
      const mainContent = document.querySelector('main');
      if (mainContent && !mainContent.id) {
        mainContent.id = 'main-content';
      }

      // Enhance focus management
      const focusableElements = document.querySelectorAll(
        'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );
      
      focusableElements.forEach((element) => {
        element.setAttribute('tabindex', '0');
      });
    };

    enhanceAccessibility();
  }, []);

  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default Page;