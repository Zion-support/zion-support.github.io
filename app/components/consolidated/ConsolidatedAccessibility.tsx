'use client';

import React, { useEffect, memo, useCallback } from 'react';

interface ConsolidatedAccessibilityProps {
  className?: string;
}

const ConsolidatedAccessibility: React.FC<ConsolidatedAccessibilityProps> = memo(({ className = '' }) => {
  // Add skip links
  const addSkipLinks = useCallback(() => {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded';
    document.body.insertBefore(skipLink, document.body.firstChild);
  }, []);

  // Enhance focus management
  const enhanceFocusManagement = useCallback(() => {
    // Add focus indicators
    const style = document.createElement('style');
    style.textContent = `
      *:focus {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
      }
      .focus-visible:focus:not(:focus-visible) {
        outline: none;
      }
    `;
    document.head.appendChild(style);

    // Trap focus in modals
    const trapFocus = (element: HTMLElement) => {
      const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        }
      };

      element.addEventListener('keydown', handleTabKey);
      return () => element.removeEventListener('keydown', handleTabKey);
    };

    // Apply focus trap to modals
    document.querySelectorAll('[role="dialog"]').forEach(modal => {
      trapFocus(modal as HTMLElement);
    });
  }, []);

  // Add ARIA labels and roles
  const enhanceARIA = useCallback(() => {
    // Add ARIA labels to interactive elements without labels
    document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])').forEach(button => {
      if (!button.textContent?.trim()) {
        button.setAttribute('aria-label', 'Button');
      }
    });

    // Add ARIA labels to images without alt text
    document.querySelectorAll('img:not([alt])').forEach(img => {
      img.setAttribute('alt', 'Image');
    });

    // Add role attributes where needed
    document.querySelectorAll('main:not([role])').forEach(main => {
      main.setAttribute('role', 'main');
    });

    document.querySelectorAll('nav:not([role])').forEach(nav => {
      nav.setAttribute('role', 'navigation');
    });
  }, []);

  // Enhance keyboard navigation
  const enhanceKeyboardNavigation = useCallback(() => {
    // Add keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // Alt + M: Focus main content
      if (e.altKey && e.key === 'm') {
        e.preventDefault();
        const main = document.querySelector('main');
        if (main) {
          (main as HTMLElement).focus();
        }
      }

      // Alt + N: Focus navigation
      if (e.altKey && e.key === 'n') {
        e.preventDefault();
        const nav = document.querySelector('nav');
        if (nav) {
          (nav as HTMLElement).focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    addSkipLinks();
    enhanceFocusManagement();
    enhanceARIA();
    const cleanup = enhanceKeyboardNavigation();

    return cleanup;
  }, [addSkipLinks, enhanceFocusManagement, enhanceARIA, enhanceKeyboardNavigation]);

  return (
    <div className={`consolidated-accessibility ${className}`} style={{ display: 'none' }}>
      {/* This component doesn't render anything visible */}
    </div>
  );
});

ConsolidatedAccessibility.displayName = 'ConsolidatedAccessibility';

export default ConsolidatedAccessibility;