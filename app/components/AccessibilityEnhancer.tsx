'use client';
import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = false,
  enableFocusManagement = true,
  children
}) => {
  const [isHighContrast, setIsHighContrast] = useState(enableHighContrast);

  useEffect(() => {
    if (enableHighContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    return () => {
      document.documentElement.classList.remove('high-contrast');
    };
  }, [enableHighContrast]);

  useEffect(() => {
    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Handle keyboard navigation
        if (event.key === 'Tab') {
          // Ensure focus is visible
          document.documentElement.classList.add('keyboard-navigation');
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [enableKeyboardNavigation]);

  useEffect(() => {
    if (enableScreenReaderSupport) {
      // Add screen reader support
      const addSkipLinks = () => {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
        document.body.insertBefore(skipLink, document.body.firstChild);
      };

      const enhanceInteractiveElements = () => {
        const buttons = document.querySelectorAll('button:not([aria-label])');
        buttons.forEach(button => {
          if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
            button.setAttribute('aria-label', 'Button');
          }
        });

        const links = document.querySelectorAll('a:not([aria-label])');
        links.forEach(link => {
          if (!link.getAttribute('aria-label') && !link.textContent?.trim()) {
            link.setAttribute('aria-label', 'Link');
          }
        });
      };

      addSkipLinks();
      enhanceInteractiveElements();
    }
  }, [enableScreenReaderSupport]);

  useEffect(() => {
    if (enableFocusManagement) {
      // Add focus management
      const handleFocusIn = (event: FocusEvent) => {
        const target = event.target as HTMLElement;
        if (target) {
          target.classList.add('focus-visible');
        }
      };

      const handleFocusOut = (event: FocusEvent) => {
        const target = event.target as HTMLElement;
        if (target) {
          target.classList.remove('focus-visible');
        }
      };

      document.addEventListener('focusin', handleFocusIn);
      document.addEventListener('focusout', handleFocusOut);

      return () => {
        document.removeEventListener('focusin', handleFocusIn);
        document.removeEventListener('focusout', handleFocusOut);
      };
    }
  }, [enableFocusManagement]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;