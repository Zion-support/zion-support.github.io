import React, { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const location = useLocation();

  // Focus management
  const manageFocus = useCallback(() => {
    // Skip to main content functionality
    const skipLink = document.querySelector('.skip-link') as HTMLAnchorElement;
    if (skipLink) {
      skipLink.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(skipLink.getAttribute('href') || '#main-content') as HTMLElement;
        if (target) {
          target.focus();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    // Focus trap for modals
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
      firstElement?.focus();

      return () => {
        element.removeEventListener('keydown', handleTabKey);
      };
    };

    // Apply focus trap to modals
    const modals = document.querySelectorAll('[role="dialog"], [role="modal"]');
    modals.forEach(modal => trapFocus(modal as HTMLElement));
  }, []);

  // Keyboard navigation enhancements
  const enhanceKeyboardNavigation = useCallback(() => {
    // Arrow key navigation for custom components
    const handleArrowNavigation = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      
      // Skip if target is an input or textarea
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        return;
      }

      const currentElement = target.closest('[data-navigation-group]') as HTMLElement;
      if (!currentElement) return;

      const navigableElements = Array.from(
        currentElement.querySelectorAll('[tabindex]:not([tabindex="-1"]), button, a, [role="button"]')
      ) as HTMLElement[];

      const currentIndex = navigableElements.indexOf(target);
      if (currentIndex === -1) return;

      let nextIndex = currentIndex;

      switch (e.key) {
        case 'ArrowDown':
        case 'ArrowRight':
          e.preventDefault();
          nextIndex = (currentIndex + 1) % navigableElements.length;
          break;
        case 'ArrowUp':
        case 'ArrowLeft':
          e.preventDefault();
          nextIndex = currentIndex === 0 ? navigableElements.length - 1 : currentIndex - 1;
          break;
        case 'Home':
          e.preventDefault();
          nextIndex = 0;
          break;
        case 'End':
          e.preventDefault();
          nextIndex = navigableElements.length - 1;
          break;
        default:
          return;
      }

      navigableElements[nextIndex]?.focus();
    };

    document.addEventListener('keydown', handleArrowNavigation);
    
    return () => {
      document.removeEventListener('keydown', handleArrowNavigation);
    };
  }, []);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, []);

  // High contrast mode detection
  const handleHighContrastMode = useCallback(() => {
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    if (prefersHighContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add('high-contrast');
      } else {
        document.documentElement.classList.remove('high-contrast');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  // Reduced motion preferences
  const handleReducedMotion = useCallback(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      document.documentElement.classList.add('reduced-motion');
      // Disable animations
      const style = document.createElement('style');
      style.textContent = `
        .reduced-motion *,
        .reduced-motion *::before,
        .reduced-motion *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      `;
      document.head.appendChild(style);
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add('reduced-motion');
      } else {
        document.documentElement.classList.remove('reduced-motion');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  // Form accessibility enhancements
  const enhanceFormAccessibility = useCallback(() => {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
      // Add required field indicators
      const requiredFields = form.querySelectorAll('[required]');
      requiredFields.forEach(field => {
        const label = form.querySelector(`label[for="${field.id}"]`);
        if (label && !label.textContent?.includes('*')) {
          label.innerHTML += ' <span class="text-red-400" aria-label="required">*</span>';
        }
      });

      // Add error announcements
      const inputs = form.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        input.addEventListener('invalid', () => {
          const errorMessage = input.getAttribute('data-error') || 'Please fill out this field correctly.';
          announceToScreenReader(errorMessage, 'assertive');
        });
      });
    });
  }, [announceToScreenReader]);

  // Image alt text validation
  const validateImageAltText = useCallback(() => {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        console.warn('Image missing alt text:', img.src);
        img.setAttribute('alt', '');
        img.setAttribute('aria-hidden', 'true');
      }
    });
  }, []);

  // Link accessibility
  const enhanceLinkAccessibility = useCallback(() => {
    const links = document.querySelectorAll('a');
    
    links.forEach(link => {
      // Add external link indicators
      if (link.hostname !== window.location.hostname) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
        
        const externalIcon = document.createElement('span');
        externalIcon.setAttribute('aria-label', 'Opens in new tab');
        externalIcon.className = 'sr-only';
        externalIcon.textContent = ' (opens in new tab)';
        link.appendChild(externalIcon);
      }

      // Add skip link functionality
      if (link.classList.contains('skip-link')) {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href')?.substring(1);
          const target = document.getElementById(targetId || '');
          if (target) {
            target.focus();
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      }
    });
  }, []);

  // Initialize accessibility enhancements
  useEffect(() => {
    manageFocus();
    const cleanupKeyboard = enhanceKeyboardNavigation();
    const cleanupHighContrast = handleHighContrastMode();
    const cleanupReducedMotion = handleReducedMotion();
    
    enhanceFormAccessibility();
    validateImageAltText();
    enhanceLinkAccessibility();

    return () => {
      cleanupKeyboard();
      cleanupHighContrast();
      cleanupReducedMotion();
    };
  }, [
    manageFocus,
    enhanceKeyboardNavigation,
    handleHighContrastMode,
    handleReducedMotion,
    enhanceFormAccessibility,
    validateImageAltText,
    enhanceLinkAccessibility
  ]);

  // Re-run accessibility checks on route change
  useEffect(() => {
    setTimeout(() => {
      enhanceFormAccessibility();
      validateImageAltText();
      enhanceLinkAccessibility();
    }, 100);
  }, [location.pathname, enhanceFormAccessibility, validateImageAltText, enhanceLinkAccessibility]);

  return (
    <>
      {children}
      {/* Screen reader only content */}
      <div className="sr-only" aria-live="polite" aria-atomic="true" id="announcements"></div>
    </>
  );
};

export default AccessibilityEnhancer;