import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Add keyboard navigation enhancements
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip links functionality
      if (event.key === 'Tab' && event.shiftKey === false) {
        const focusableElements = document.querySelectorAll(
          'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
        
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement?.focus();
        }
      }
    };

    // Add focus indicators
    const addFocusIndicators = () => {
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
        
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #000;
          color: #fff;
          padding: 8px;
          text-decoration: none;
          z-index: 1000;
        }
        
        .skip-link:focus {
          top: 6px;
        }
      `;
      document.head.appendChild(style);
    };

    // Add skip links
    const addSkipLinks = () => {
      const skipLinks = document.createElement('div');
      skipLinks.innerHTML = `
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <a href="#navigation" className="skip-link">Skip to navigation</a>
      `;
      document.body.insertBefore(skipLinks, document.body.firstChild);
    };

    // Initialize accessibility features
    addFocusIndicators();
    addSkipLinks();
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
