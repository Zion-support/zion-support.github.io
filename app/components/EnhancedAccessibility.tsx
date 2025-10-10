'use client';
import React, { useEffect, ReactNode } from 'react';

interface EnhancedAccessibilityProps {
  children: ReactNode;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({ children }) => {
  useEffect(() => {
    // Add skip links
    const addSkipLinks = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-600 text-white px-4 py-2 rounded-lg font-semibold z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Enhance focus management
    const enhanceFocusManagement = () => {
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      const focusableContent = document.querySelectorAll(focusableElements);
      
      focusableContent.forEach((element) => {
        element.addEventListener('focus', () => {
          element.classList.add('focus-visible');
        });
        element.addEventListener('blur', () => {
          element.classList.remove('focus-visible');
        });
      });
    };

    addSkipLinks();
    enhanceFocusManagement();

    // Cleanup function
    return () => {
      const skipLink = document.querySelector('a[href="#main-content"]');
      if (skipLink) {
        skipLink.remove();
      }
    };
  }, []);

  return <>{children}</>;
};

export default EnhancedAccessibility;