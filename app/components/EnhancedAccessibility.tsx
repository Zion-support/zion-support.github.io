'use client';
import React, { useEffect, useCallback } from 'react';

interface EnhancedAccessibilityProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableSkipLinks?: boolean;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true,
  enableFocusManagement = true,
  enableSkipLinks = true
}) => {
  // Keyboard navigation enhancements
  const setupKeyboardNavigation = useCallback(() => {
    if (typeof window === 'undefined' || !enableKeyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content with Tab
      if (event.key === 'Tab' && event.target === document.body) {
        const skipLink = document.querySelector('[href="#main-content"]') as HTMLElement;
        if (skipLink) {
          skipLink.focus();
        }
      }

      // Close modals with Escape
      if (event.key === 'Escape') {
        const modals = document.querySelectorAll('[role="dialog"]');
        modals.forEach(modal => {
          const closeButton = modal.querySelector('[aria-label="Close"]') as HTMLElement;
          if (closeButton) {
            closeButton.click();
          }
        });
      }

      // Navigate between interactive elements
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        const interactiveElements = document.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const currentIndex = Array.from(interactiveElements).indexOf(event.target as Element);
        
        if (currentIndex !== -1) {
          const nextIndex = event.key === 'ArrowDown' 
            ? Math.min(currentIndex + 1, interactiveElements.length - 1)
            : Math.max(currentIndex - 1, 0);
          
          (interactiveElements[nextIndex] as HTMLElement)?.focus();
          event.preventDefault();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation]);

  // Screen reader support
  const setupScreenReaderSupport = useCallback(() => {
    if (typeof window === 'undefined' || !enableScreenReaderSupport) return;

    // Add ARIA landmarks
    const main = document.querySelector('main');
    if (main && !main.hasAttribute('role')) {
      main.setAttribute('role', 'main');
    }

    // Add ARIA labels to interactive elements
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach(button => {
      const text = button.textContent?.trim();
      if (text && !button.hasAttribute('aria-label')) {
        button.setAttribute('aria-label', text);
      }
    });

    // Add ARIA labels to links
    const links = document.querySelectorAll('a:not([aria-label])');
    links.forEach(link => {
      const text = link.textContent?.trim();
      if (text && !link.hasAttribute('aria-label')) {
        link.setAttribute('aria-label', text);
      }
    });

    // Announce page changes to screen readers
    const announcePageChange = (title: string) => {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = `Page changed to ${title}`;
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    };

    // Listen for route changes
    const observer = new MutationObserver(() => {
      const title = document.title;
      if (title) {
        announcePageChange(title);
      }
    });

    observer.observe(document.head, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [enableScreenReaderSupport]);

  // High contrast mode support
  const setupHighContrast = useCallback(() => {
    if (typeof window === 'undefined' || !enableHighContrast) return;

    const checkHighContrast = () => {
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      document.documentElement.classList.toggle('high-contrast', prefersHighContrast);
      document.documentElement.classList.toggle('reduced-motion', prefersReducedMotion);
    };

    checkHighContrast();
    
    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    mediaQuery.addEventListener('change', checkHighContrast);
    motionQuery.addEventListener('change', checkHighContrast);
    
    return () => {
      mediaQuery.removeEventListener('change', checkHighContrast);
      motionQuery.removeEventListener('change', checkHighContrast);
    };
  }, [enableHighContrast]);

  // Focus management
  const setupFocusManagement = useCallback(() => {
    if (typeof window === 'undefined' || !enableFocusManagement) return;

    let lastFocusedElement: HTMLElement | null = null;

    const handleFocusIn = (event: FocusEvent) => {
      lastFocusedElement = event.target as HTMLElement;
    };

    const handleFocusOut = (event: FocusEvent) => {
      const currentTarget = event.currentTarget as HTMLElement;
      const relatedTarget = event.relatedTarget as HTMLElement;
      
      // If focus is leaving the current target and not going to a child
      if (!currentTarget.contains(relatedTarget)) {
        lastFocusedElement = currentTarget;
      }
    };

    // Add focus indicators
    const addFocusIndicators = () => {
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #00ffff !important;
          outline-offset: 2px !important;
        }
        
        *:focus:not(:focus-visible) {
          outline: none !important;
        }
        
        *:focus-visible {
          outline: 2px solid #00ffff !important;
          outline-offset: 2px !important;
        }
      `;
      document.head.appendChild(style);
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);
    addFocusIndicators();

    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, [enableFocusManagement]);

  // Skip links
  const setupSkipLinks = useCallback(() => {
    if (typeof window === 'undefined' || !enableSkipLinks) return;

    const skipLinks = [
      { href: '#main-content', text: 'Skip to main content' },
      { href: '#navigation', text: 'Skip to navigation' },
      { href: '#footer', text: 'Skip to footer' }
    ];

    skipLinks.forEach(link => {
      const skipLink = document.createElement('a');
      skipLink.href = link.href;
      skipLink.textContent = link.text;
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);
    });
  }, [enableSkipLinks]);

  useEffect(() => {
    const cleanupFunctions = [
      setupKeyboardNavigation(),
      setupScreenReaderSupport(),
      setupHighContrast(),
      setupFocusManagement(),
      setupSkipLinks()
    ].filter(Boolean);

    return () => {
      cleanupFunctions.forEach(cleanup => {
        if (typeof cleanup === 'function') {
          cleanup();
        }
      });
    };
  }, [setupKeyboardNavigation, setupScreenReaderSupport, setupHighContrast, setupFocusManagement, setupSkipLinks]);

  return null;
};

export default EnhancedAccessibility;