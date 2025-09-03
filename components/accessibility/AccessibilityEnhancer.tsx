import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  skipToContent?: boolean;
  focusManagement?: boolean;
  keyboardNavigation?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  skipToContent = true,
  focusManagement = true,
  keyboardNavigation = true
}) => {
  useEffect(() => {
    // Add skip to content functionality
    if (skipToContent) {
      const handleSkipToContent = (e: KeyboardEvent) => {
        if (e.key === 'Tab' && !e.shiftKey) {
          const skipLink = document.getElementById('skip-to-content');
          if (skipLink && document.activeElement === document.body) {
            skipLink.focus();
          }
        }
      };

      document.addEventListener('keydown', handleSkipToContent);
      return () => document.removeEventListener('keydown', handleSkipToContent);
    }
  }, [skipToContent]);

  useEffect(() => {
    // Focus management for modals and dynamic content
    if (focusManagement) {
      const handleFocusManagement = () => {
        // Add focus trap for modals
        const modals = document.querySelectorAll('[role="dialog"]');
        modals.forEach(modal => {
          const focusableElements = modal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusableElements.length > 0) {
            const firstElement = focusableElements[0] as HTMLElement;
            const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
            
            const handleTabKey = (e: KeyboardEvent) => {
              if (e.key === 'Tab') {
                if (e.shiftKey) {
                  if (document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                  }
                } else {
                  if (document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                  }
                }
              }
            };

            modal.addEventListener('keydown', handleTabKey);
          }
        });
      };

      handleFocusManagement();
    }
  }, [focusManagement]);

  useEffect(() => {
    // Enhanced keyboard navigation
    if (keyboardNavigation) {
      const handleKeyboardNavigation = (e: KeyboardEvent) => {
        // Add keyboard shortcuts
        if (e.ctrlKey || e.metaKey) {
          switch (e.key) {
            case 'k':
              e.preventDefault();
              const searchInput = document.querySelector('input[type="search"]') as HTMLInputElement;
              if (searchInput) {
                searchInput.focus();
              }
              break;
            case '/':
              e.preventDefault();
              const mainContent = document.querySelector('main') as HTMLElement;
              if (mainContent) {
                mainContent.focus();
              }
              break;
          }
        }
      };

      document.addEventListener('keydown', handleKeyboardNavigation);
      return () => document.removeEventListener('keydown', handleKeyboardNavigation);
    }
  }, [keyboardNavigation]);

  return (
    <>
      {skipToContent && (
        <a
          id="skip-to-content"
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50"
        >
          Skip to main content
        </a>
      )}
      {children}
    </>
  );
};

export default AccessibilityEnhancer;