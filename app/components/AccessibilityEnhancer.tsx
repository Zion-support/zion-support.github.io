'use client';

import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true,
  enableFocusManagement = true
}) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Keyboard navigation enhancements
    if (enableKeyboardNavigation) {
      const handleKeyboardNavigation = (e: KeyboardEvent) => {
        // Skip to main content
        if (e.key === 'Tab' && e.shiftKey && document.activeElement === document.body) {
          const skipLink = document.querySelector('[href="#main-content"]') as HTMLAnchorElement;
          if (skipLink) {
            skipLink.focus();
            e.preventDefault();
          }
        }

        // Escape key to close modals/dropdowns
        if (e.key === 'Escape') {
          const activeModal = document.querySelector('[role="dialog"][aria-hidden="false"]');
          if (activeModal) {
            const closeButton = activeModal.querySelector('[aria-label*="close"], [aria-label*="Close"]') as HTMLElement;
            if (closeButton) {
              closeButton.click();
            }
          }
        }

        // Arrow key navigation for carousels
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
          const carousel = document.querySelector('[role="region"][aria-label*="carousel"]');
          if (carousel && carousel.contains(document.activeElement)) {
            const buttons = carousel.querySelectorAll('button[aria-label*="previous"], button[aria-label*="next"]');
            if (e.key === 'ArrowLeft') {
              const prevButton = Array.from(buttons).find(btn => 
                btn.getAttribute('aria-label')?.includes('previous')
              ) as HTMLButtonElement;
              if (prevButton) prevButton.click();
            } else if (e.key === 'ArrowRight') {
              const nextButton = Array.from(buttons).find(btn => 
                btn.getAttribute('aria-label')?.includes('next')
              ) as HTMLButtonElement;
              if (nextButton) nextButton.click();
            }
          }
        }
      };

      document.addEventListener('keydown', handleKeyboardNavigation);
      return () => document.removeEventListener('keydown', handleKeyboardNavigation);
    }

    // Screen reader support
    if (enableScreenReaderSupport) {
      // Announce page changes
      const announcePageChange = () => {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = 'Page content has loaded';
        document.body.appendChild(announcement);
        
        setTimeout(() => {
          document.body.removeChild(announcement);
        }, 1000);
      };

      // Add ARIA landmarks
      const addAriaLandmarks = () => {
        const main = document.querySelector('main');
        if (main && !main.getAttribute('role')) {
          main.setAttribute('role', 'main');
        }

        const nav = document.querySelector('nav');
        if (nav && !nav.getAttribute('role')) {
          nav.setAttribute('role', 'navigation');
        }

        const footer = document.querySelector('footer');
        if (footer && !footer.getAttribute('role')) {
          footer.setAttribute('role', 'contentinfo');
        }

        // Add heading hierarchy
        const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        headings.forEach((heading, index) => {
          if (!heading.getAttribute('id')) {
            const id = `heading-${index}`;
            heading.setAttribute('id', id);
          }
        });
      };

      addAriaLandmarks();
      announcePageChange();
    }

    // High contrast mode support
    if (enableHighContrast) {
      const addHighContrastSupport = () => {
        // Add high contrast CSS class when needed
        const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
        
        const updateHighContrast = (e: MediaQueryListEvent) => {
          if (e.matches) {
            document.documentElement.classList.add('high-contrast');
          } else {
            document.documentElement.classList.remove('high-contrast');
          }
        };

        prefersHighContrast.addEventListener('change', updateHighContrast);
        updateHighContrast(prefersHighContrast);

        // Add reduced motion support
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        
        const updateReducedMotion = (e: MediaQueryListEvent) => {
          if (e.matches) {
            document.documentElement.classList.add('reduced-motion');
          } else {
            document.documentElement.classList.remove('reduced-motion');
          }
        };

        prefersReducedMotion.addEventListener('change', updateReducedMotion);
        updateReducedMotion(prefersReducedMotion);
      };

      addHighContrastSupport();
    }

    // Focus management
    if (enableFocusManagement) {
      const manageFocus = () => {
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
          firstElement?.focus();

          return () => {
            element.removeEventListener('keydown', handleTabKey);
          };
        };

        // Apply focus trap to modals
        const modals = document.querySelectorAll('[role="dialog"]');
        modals.forEach((modal) => {
          const cleanup = trapFocus(modal as HTMLElement);
          // Store cleanup function for later use
          (modal as any).__focusCleanup = cleanup;
        });
      };

      manageFocus();
    }

    // Add skip links
    const addSkipLinks = () => {
      const skipLinks = document.createElement('div');
      skipLinks.innerHTML = `
        <a href="#main-content" class="skip-link">Skip to main content</a>
        <a href="#navigation" class="skip-link">Skip to navigation</a>
        <a href="#footer" class="skip-link">Skip to footer</a>
      `;
      document.body.insertBefore(skipLinks, document.body.firstChild);
    };

    addSkipLinks();

  }, [enableKeyboardNavigation, enableScreenReaderSupport, enableHighContrast, enableFocusManagement]);

  return null;
};

export default AccessibilityEnhancer;