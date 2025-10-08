import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Skip to main content functionality
    const skipLink = document.querySelector('a[href="#main-content"]') as HTMLAnchorElement;
    if (skipLink) {
      skipLink.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.getElementById('main-content');
        if (target) {
          target.focus();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    // Enhanced keyboard navigation for dropdowns
    const dropdowns = document.querySelectorAll('[data-dropdown]');
    dropdowns.forEach((dropdown) => {
      const button = dropdown.querySelector('[data-dropdown-button]') as HTMLButtonElement;
      const menu = dropdown.querySelector('[data-dropdown-menu]') as HTMLElement;
      
      if (button && menu) {
        const handleKeyDown = (e: KeyboardEvent) => {
          if (e.key === 'Escape') {
            button.focus();
            menu.setAttribute('aria-expanded', 'false');
          }
        };

        button.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const isExpanded = menu.getAttribute('aria-expanded') === 'true';
            menu.setAttribute('aria-expanded', (!isExpanded).toString());
            if (!isExpanded) {
              const firstItem = menu.querySelector('a, button') as HTMLElement;
              firstItem?.focus();
            }
          }
        });

        menu.addEventListener('keydown', handleKeyDown);
      }
    });

    // Focus management for modals and overlays
    const modals = document.querySelectorAll('[role="dialog"]');
    modals.forEach((modal) => {
      const focusableElements = modal.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement?.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement?.focus();
            }
          }
        }
      };

      modal.addEventListener('keydown', handleTabKey);
    });

    // Announce dynamic content changes to screen readers
    const announceToScreenReader = (message: string) => {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = message;
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    };

    // Enhanced form validation announcements
    const forms = document.querySelectorAll('form');
    forms.forEach((form) => {
      form.addEventListener('invalid', (e) => {
        const target = e.target as HTMLInputElement;
        if (target.validationMessage) {
          announceToScreenReader(`Error: ${target.validationMessage}`);
        }
      });
    });

    // High contrast mode detection and enhancement
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
    const updateHighContrast = () => {
      if (prefersHighContrast.matches) {
        document.documentElement.classList.add('high-contrast');
      } else {
        document.documentElement.classList.remove('high-contrast');
      }
    };

    updateHighContrast();
    prefersHighContrast.addEventListener('change', updateHighContrast);

    // Reduced motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateReducedMotion = () => {
      if (prefersReducedMotion.matches) {
        document.documentElement.classList.add('reduce-motion');
      } else {
        document.documentElement.classList.remove('reduce-motion');
      }
    };

    updateReducedMotion();
    prefersReducedMotion.addEventListener('change', updateReducedMotion);

    // Cleanup function
    return () => {
      // Remove event listeners if needed
      dropdowns.forEach((dropdown) => {
        const button = dropdown.querySelector('[data-dropdown-button]') as HTMLButtonElement;
        const menu = dropdown.querySelector('[data-dropdown-menu]') as HTMLElement;
        
        if (button && menu) {
          button.removeEventListener('keydown', () => {});
          menu.removeEventListener('keydown', () => {});
        }
      });

      modals.forEach((modal) => {
        modal.removeEventListener('keydown', () => {});
      });

      forms.forEach((form) => {
        form.removeEventListener('invalid', () => {});
      });
    };
  }, []);

  return null;
};

export default AccessibilityEnhancer;