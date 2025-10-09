'use client';
import React, { useEffect, useCallback } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableReducedMotion?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true,
  enableFocusManagement = true,
  enableReducedMotion = true
}) => {
  
  // Setup keyboard navigation
  const setupKeyboardNavigation = useCallback(() => {
    if (!enableKeyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
        const skipLink = document.querySelector('a[href="#main-content"]') as HTMLAnchorElement;
        if (skipLink) {
          skipLink.focus();
          event.preventDefault();
        }
      }
      
      // Escape key to close modals/dropdowns
      if (event.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.getAttribute('aria-expanded') === 'true') {
          activeElement.click();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation]);

  // Setup screen reader support
  const setupScreenReaderSupport = useCallback(() => {
    if (!enableScreenReaderSupport) return;

    // Add skip links
    const skipLinks = document.querySelectorAll('a[href^="#"]');
    skipLinks.forEach(link => {
      link.setAttribute('tabindex', '0');
    });

    // Ensure proper heading hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach((heading, index) => {
      if (index === 0 && heading.tagName !== 'H1') {
        // eslint-disable-next-line no-console
        console.warn('First heading should be H1 for better accessibility');
      }
    });

    // Add ARIA labels to interactive elements
    const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    buttons.forEach(button => {
      if (!button.textContent?.trim()) {
        button.setAttribute('aria-label', 'Button');
      }
    });

    // Add ARIA labels to links
    const links = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
    links.forEach(link => {
      if (!link.textContent?.trim() && !link.getAttribute('aria-label')) {
        const href = link.getAttribute('href');
        if (href) {
          link.setAttribute('aria-label', `Link to ${href}`);
        }
      }
    });
  }, [enableScreenReaderSupport]);

  // Setup high contrast mode
  const setupHighContrast = useCallback(() => {
    if (!enableHighContrast) return;

    const checkHighContrast = () => {
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
      if (prefersHighContrast) {
        document.body.classList.add('high-contrast');
      } else {
        document.body.classList.remove('high-contrast');
      }
    };

    checkHighContrast();
    
    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    mediaQuery.addEventListener('change', checkHighContrast);
    
    return () => mediaQuery.removeEventListener('change', checkHighContrast);
  }, [enableHighContrast]);

  // Setup focus management
  const setupFocusManagement = useCallback(() => {
    if (!enableFocusManagement) return;

    // Trap focus in modals
    const modals = document.querySelectorAll('[role="dialog"], [role="modal"]');
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
        
        modal.addEventListener('keydown', handleTabKey);
      }
    });

    // Focus management for dropdowns
    const dropdowns = document.querySelectorAll('[aria-expanded]');
    dropdowns.forEach(dropdown => {
      const handleFocus = () => {
        const firstFocusable = dropdown.querySelector(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ) as HTMLElement;
        if (firstFocusable) {
          firstFocusable.focus();
        }
      };
      
      dropdown.addEventListener('click', handleFocus);
    });
  }, [enableFocusManagement]);

  // Setup reduced motion
  const setupReducedMotion = useCallback(() => {
    if (!enableReducedMotion) return;

    const checkReducedMotion = () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        document.body.classList.add('reduced-motion');
      } else {
        document.body.classList.remove('reduced-motion');
      }
    };

    checkReducedMotion();
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    mediaQuery.addEventListener('change', checkReducedMotion);
    
    return () => mediaQuery.removeEventListener('change', checkReducedMotion);
  }, [enableReducedMotion]);

  // Initialize all accessibility features
  useEffect(() => {
    const cleanupFunctions = [
      setupKeyboardNavigation(),
      setupScreenReaderSupport(),
      setupHighContrast(),
      setupFocusManagement(),
      setupReducedMotion()
    ].filter(Boolean);

    return () => {
      cleanupFunctions.forEach(cleanup => {
        if (typeof cleanup === 'function') {
          cleanup();
        }
      });
    };
  }, [
    setupKeyboardNavigation,
    setupScreenReaderSupport,
    setupHighContrast,
    setupFocusManagement,
    setupReducedMotion
  ]);

  // Add accessibility styles
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      /* High contrast mode */
      .high-contrast {
        --text-primary: #ffffff;
        --text-secondary: #e5e5e5;
        --bg-primary: #000000;
        --bg-secondary: #1a1a1a;
        --accent: #00ffff;
      }
      
      .high-contrast .cyber-card,
      .high-contrast .hologram-card,
      .high-contrast .quantum-card {
        border: 2px solid var(--accent);
        background: var(--bg-secondary);
        color: var(--text-primary);
      }
      
      .high-contrast .neon-text {
        color: var(--accent);
        text-shadow: 0 0 10px var(--accent);
      }
      
      /* Reduced motion */
      .reduced-motion *,
      .reduced-motion *::before,
      .reduced-motion *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
      
      /* Focus indicators */
      .focus-visible:focus {
        outline: 2px solid #00ffff;
        outline-offset: 2px;
      }
      
      /* Skip links */
      .skip-link {
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        z-index: 1000;
        border-radius: 4px;
      }
      
      .skip-link:focus {
        top: 6px;
      }
    `;
    
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
};

export default AccessibilityEnhancer;