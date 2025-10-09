'use client';
import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableFocusManagement = true
}) => {
  useEffect(() => {
    // Keyboard navigation enhancements
    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content
        if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
          const skipLink = document.querySelector('a[href="#main-content"]') as HTMLAnchorElement;
          if (skipLink) {
            skipLink.focus();
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [enableKeyboardNavigation]);

  useEffect(() => {
    // Screen reader enhancements
    if (enableScreenReader) {
      // Add ARIA labels to interactive elements
      const buttons = document.querySelectorAll('button:not([aria-label])');
      buttons.forEach(button => {
        if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
          button.setAttribute('aria-label', 'Button');
        }
      });

      // Add role attributes where needed
      const cards = document.querySelectorAll('.cyber-card, .hologram-card, .quantum-card');
      cards.forEach(card => {
        if (!card.getAttribute('role')) {
          card.setAttribute('role', 'article');
        }
      });
    }
  }, [enableScreenReader]);

  useEffect(() => {
    // High contrast mode detection
    if (enableHighContrast) {
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      
      const handleContrastChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.body.classList.add('high-contrast');
        } else {
          document.body.classList.remove('high-contrast');
        }
      };

      mediaQuery.addEventListener('change', handleContrastChange);
      handleContrastChange(mediaQuery);

      return () => mediaQuery.removeEventListener('change', handleContrastChange);
    }
  }, [enableHighContrast]);

  useEffect(() => {
    // Focus management
    if (enableFocusManagement) {
      // Ensure focus is visible
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #00ffff !important;
          outline-offset: 2px !important;
        }
        
        .high-contrast * {
          border-color: #ffffff !important;
          color: #ffffff !important;
          background-color: #000000 !important;
        }
        
        .high-contrast .neon-text,
        .high-contrast .cyber-text,
        .high-contrast .holographic-text {
          color: #ffffff !important;
          text-shadow: none !important;
        }
      `;
      document.head.appendChild(style);

      // Manage focus for modals and dropdowns
      const handleFocusIn = (event: FocusEvent) => {
        const target = event.target as HTMLElement;
        if (target.closest('[role="dialog"]') || target.closest('[role="menu"]')) {
          // Keep focus within modal/dropdown
          const container = target.closest('[role="dialog"], [role="menu"]');
          if (container) {
            const focusableElements = container.querySelectorAll(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0] as HTMLElement;
            const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

            if (event.target === lastElement && event.key === 'Tab' && !event.shiftKey) {
              event.preventDefault();
              firstElement?.focus();
            } else if (event.target === firstElement && event.key === 'Tab' && event.shiftKey) {
              event.preventDefault();
              lastElement?.focus();
            }
          }
        }
      };

      document.addEventListener('focusin', handleFocusIn);
      return () => document.removeEventListener('focusin', handleFocusIn);
    }
  }, [enableFocusManagement]);

  return null;
};

export default AccessibilityEnhancer;