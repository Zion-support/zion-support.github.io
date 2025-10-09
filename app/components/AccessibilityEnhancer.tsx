import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableSkipLinks?: boolean;
  enableKeyboardNav?: boolean;
  enableFocusIndicators?: boolean;
}

/**
 * Accessibility Enhancer Component
 * Provides comprehensive accessibility improvements
 */
const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableSkipLinks = true,
  enableKeyboardNav = true,
  enableFocusIndicators = true,
}) => {
  // Skip links functionality
  useEffect(() => {
    if (enableSkipLinks) {
      const skipLinks = document.querySelectorAll('.skip-link');
      skipLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const target = document.querySelector((link as HTMLAnchorElement).getAttribute('href') || '');
          if (target) {
            (target as HTMLElement).focus();
            (target as HTMLElement).scrollIntoView();
          }
        });
      });
    }
  }, [enableSkipLinks]);

  // Keyboard navigation
  useEffect(() => {
    if (enableKeyboardNav) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      };

      const handleMouseDown = () => {
        document.body.classList.remove('keyboard-navigation');
      };

      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleMouseDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('mousedown', handleMouseDown);
      };
    }
  }, [enableKeyboardNav]);

  // Focus indicators
  useEffect(() => {
    if (enableFocusIndicators) {
      const style = document.createElement('style');
      style.textContent = `
        .keyboard-navigation *:focus {
          outline: 2px solid #4f46e5 !important;
          outline-offset: 2px !important;
        }
      `;
      document.head.appendChild(style);

      return () => {
        document.head.removeChild(style);
      };
    }
  }, [enableFocusIndicators]);

  return (
    <div className="accessibility-enhancer">
      {enableSkipLinks && (
        <div className="skip-links">
          <a href="#main-content" className="skip-link sr-only focus:not-sr-only">
            Skip to main content
          </a>
          <a href="#navigation" className="skip-link sr-only focus:not-sr-only">
            Skip to navigation
          </a>
        </div>
      )}
      {children}
    </div>
  );
};

export default AccessibilityEnhancer;
