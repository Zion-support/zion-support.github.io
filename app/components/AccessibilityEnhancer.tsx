import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableAriaLabels?: boolean;
  enableReducedMotion?: boolean;
  enableSkipLinks?: boolean;
  enableColorContrast?: boolean;
  enableFontScaling?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true,
  enableFocusManagement = true,
  enableAriaLabels = true,
  enableReducedMotion = true,
  enableSkipLinks = true,
  enableColorContrast = true,
  enableFontScaling = true,
}) => {
  useEffect(() => {
    // Skip links
    if (enableSkipLinks) {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50';
      skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #2563eb;
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        transition: top 0.3s;
      `;
      
      skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
      });
      
      skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
      });
      
      document.body.insertBefore(skipLink, document.body.firstChild);
    }

    // Keyboard navigation
    if (enableKeyboardNavigation) {
      const handleKeyDown = (e: KeyboardEvent) => {
        // Escape key to close modals/dropdowns
        if (e.key === 'Escape') {
          const activeElement = document.activeElement as HTMLElement;
          if (activeElement && activeElement.blur) {
            activeElement.blur();
          }
        }
        
        // Tab navigation enhancement
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

    // Focus management
    if (enableFocusManagement) {
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      
      const trapFocus = (element: HTMLElement) => {
        const focusableContent = element.querySelectorAll(focusableElements);
        const firstFocusableElement = focusableContent[0] as HTMLElement;
        const lastFocusableElement = focusableContent[focusableContent.length - 1] as HTMLElement;

        element.addEventListener('keydown', (e) => {
          if (e.key === 'Tab') {
            if (e.shiftKey) {
              if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus();
                e.preventDefault();
              }
            } else {
              if (document.activeElement === lastFocusableElement) {
                firstFocusableElement.focus();
                e.preventDefault();
              }
            }
          }
        });
      };

      // Apply focus trap to modals and dropdowns
      const modals = document.querySelectorAll('[role="dialog"], [role="menu"], [role="listbox"]');
      modals.forEach(trapFocus);
    }

    // ARIA labels enhancement
    if (enableAriaLabels) {
      // Add ARIA labels to buttons without text
      const iconButtons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
      iconButtons.forEach((button) => {
        const icon = button.querySelector('svg, i, [class*="icon"]');
        if (icon && !button.textContent?.trim()) {
          button.setAttribute('aria-label', 'Button');
        }
      });

      // Add ARIA labels to links without text
      const iconLinks = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
      iconLinks.forEach((link) => {
        const icon = link.querySelector('svg, i, [class*="icon"]');
        if (icon && !link.textContent?.trim()) {
          link.setAttribute('aria-label', 'Link');
        }
      });

      // Add role attributes to custom components
      const customButtons = document.querySelectorAll('.cyber-button:not([role])');
      customButtons.forEach((button) => {
        button.setAttribute('role', 'button');
      });

      const customCards = document.querySelectorAll('.cyber-card:not([role])');
      customCards.forEach((card) => {
        card.setAttribute('role', 'article');
      });
    }

    // High contrast mode
    if (enableHighContrast) {
      const highContrastMediaQuery = window.matchMedia('(prefers-contrast: high)');
      
      const applyHighContrast = () => {
        if (highContrastMediaQuery.matches) {
          document.body.classList.add('high-contrast');
        } else {
          document.body.classList.remove('high-contrast');
        }
      };

      applyHighContrast();
      highContrastMediaQuery.addEventListener('change', applyHighContrast);
    }

    // Reduced motion
    if (enableReducedMotion) {
      const reducedMotionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      
      const applyReducedMotion = () => {
        if (reducedMotionMediaQuery.matches) {
          document.body.classList.add('reduced-motion');
        } else {
          document.body.classList.remove('reduced-motion');
        }
      };

      applyReducedMotion();
      reducedMotionMediaQuery.addEventListener('change', applyReducedMotion);
    }

    // Color contrast enhancement
    if (enableColorContrast) {
      const style = document.createElement('style');
      style.textContent = `
        .high-contrast {
          --text-primary: #ffffff;
          --text-secondary: #e5e7eb;
          --bg-primary: #000000;
          --bg-secondary: #111827;
          --accent: #60a5fa;
        }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        .keyboard-navigation *:focus {
          outline: 2px solid #60a5fa !important;
          outline-offset: 2px !important;
        }
        
        @media (prefers-contrast: high) {
          .cyber-button {
            border: 2px solid currentColor;
          }
          
          .cyber-card {
            border: 2px solid currentColor;
          }
        }
      `;
      document.head.appendChild(style);
    }

    // Font scaling
    if (enableFontScaling) {
      const fontSizeMediaQuery = window.matchMedia('(min-width: 1200px)');
      
      const applyFontScaling = () => {
        if (fontSizeMediaQuery.matches) {
          document.body.style.fontSize = '16px';
        } else {
          document.body.style.fontSize = '14px';
        }
      };

      applyFontScaling();
      fontSizeMediaQuery.addEventListener('change', applyFontScaling);
    }

    // Screen reader support
    if (enableScreenReaderSupport) {
      // Add live region for dynamic content
      const liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      liveRegion.id = 'live-region';
      document.body.appendChild(liveRegion);

      // Announce page changes
      const announcePageChange = (message: string) => {
        const liveRegion = document.getElementById('live-region');
        if (liveRegion) {
          liveRegion.textContent = message;
        }
      };

      // Listen for route changes
      window.addEventListener('popstate', () => {
        announcePageChange('Page changed');
      });
    }

  }, [
    enableKeyboardNavigation,
    enableScreenReaderSupport,
    enableHighContrast,
    enableFocusManagement,
    enableAriaLabels,
    enableReducedMotion,
    enableSkipLinks,
    enableColorContrast,
    enableFontScaling,
  ]);

  return null;
};

export default AccessibilityEnhancer;