import React from 'react';

interface AccessibilityEnhancerProps {
  children?: React.ReactNode;
}

export default function AccessibilityEnhancer({ children }: AccessibilityEnhancerProps) {
  React.useEffect(() => {
    // Add accessibility enhancements
    const addSkipLink = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded';
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    const addAriaLabels = () => {
      // Add ARIA labels to interactive elements
      const buttons = document.querySelectorAll('button:not([aria-label])');
      buttons.forEach((button, index) => {
        if (!button.textContent?.trim()) {
          button.setAttribute('aria-label', `Button ${index + 1}`);
        }
      });
    };

    addSkipLink();
    addAriaLabels();

    return () => {
      // Cleanup if needed
    };
  }, []);

  return <>{children}</>;
}