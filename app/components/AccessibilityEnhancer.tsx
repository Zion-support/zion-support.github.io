import React, { useEffect } from 'react';

interface Props {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    // Accessibility enhancements
    document.documentElement.setAttribute('lang', 'en');
    
    // Add skip links
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    return () => {
      const existingSkipLink = document.querySelector('a[href="#main-content"]');
      if (existingSkipLink) {
        existingSkipLink.remove();
      }
    };
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;