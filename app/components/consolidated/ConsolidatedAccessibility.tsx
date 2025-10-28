
'use client';
import React from 'react';
import Link from 'next/link';



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

    // Add ARIA labels to links without descriptive text
    document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])').forEach(link => {
      if (!link.textContent?.trim() && !link.getAttribute('title')) {
        const href = link.getAttribute('href');
        if (href) {
          link.setAttribute('aria-label', `Link to ${href}`);
        }
      }
    });

    // Add role="button" to clickable divs
    document.querySelectorAll('div[onclick], div[onclick]').forEach(div => {
      div.setAttribute('role', 'button');
      div.setAttribute('tabindex', '0');
    });

    // Add role="list" to ul elements
    document.querySelectorAll('ul:not([role])').forEach(ul => {
      ul.setAttribute('role', 'list');
    });

    // Add role="listitem" to li elements
    document.querySelectorAll('li:not([role])').forEach(li => {
      li.setAttribute('role', 'listitem');
    });
  }, []);

  // Enhance keyboard navigation
  const enhanceKeyboardNavigation = useCallback(() => {
    // Add keyboard support for custom components
    document.addEventListener('keydown', (e) => {
      // Enter and Space key support for custom buttons
      if ((e.key === 'Enter' || e.key === ' ') && 
          (e.target as HTMLElement).getAttribute('role') === 'button') {
        e.preventDefault();
        (e.target as HTMLElement).click();
      }

      // Arrow key navigation for custom menus
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        const menu = (e.target as HTMLElement).closest('[role="menu"]');
        if (menu) {
          e.preventDefault();
          const items = Array.from(menu.querySelectorAll('[role="menuitem"]'));
          const currentIndex = items.indexOf(e.target as HTMLElement);
          const nextIndex = e.key === 'ArrowDown' 
            ? (currentIndex + 1) % items.length
            : (currentIndex - 1 + items.length) % items.length;
          (items[nextIndex] as HTMLElement).focus();
        }
      }
    });
  }, []);

  // Add high contrast mode support
  const addHighContrastSupport = useCallback(() => {
    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    
    const handleContrastChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.body.classList.add('high-contrast');
      } else {
        document.body.classList.remove('high-contrast');
      }
    };

    mediaQuery.addEventListener('change', handleContrastChange);
    handleContrastChange({ matches: mediaQuery.matches } as MediaQueryListEvent);

    // Add high contrast styles
    const style = document.createElement('style');
    style.textContent = `
      .high-contrast {
        filter: contrast(1.5) brightness(1.2);
      }
      .high-contrast * {
        border-color: currentColor !important;
      }
    `;
    document.head.appendChild(style);
  }, []);

  // Add reduced motion support
  const addReducedMotionSupport = useCallback(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.body.classList.add('reduced-motion');
      } else {
        document.body.classList.remove('reduced-motion');
      }
    };

    mediaQuery.addEventListener('change', handleMotionChange);
    handleMotionChange({ matches: mediaQuery.matches } as MediaQueryListEvent);

    // Add reduced motion styles
    const style = document.createElement('style');
    style.textContent = `
      .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    `;
    document.head.appendChild(style);
  }, []);

  useEffect(() => {
    addSkipLinks();
    enhanceFocusManagement();
    enhanceARIA();
    enhanceKeyboardNavigation();
    addHighContrastSupport();
    addReducedMotionSupport();
  }, [
    addSkipLinks,
    enhanceFocusManagement,
    enhanceARIA,
    enhanceKeyboardNavigation,
    addHighContrastSupport,
    addReducedMotionSupport
  ]);

  return (
    <div className={`consolidated-accessibility ${className}`} style={{ display: 'none' }}>
      {/* This component doesn't render anything visible */}
    </div>
  );
});

ConsolidatedAccessibility.displayName = 'ConsolidatedAccessibility';

export default ConsolidatedAccessibility;