import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
    skipLink.style.position = 'absolute';
    skipLink.style.left = '-9999px';
    skipLink.style.top = 'auto';
    skipLink.style.width = '1px';
    skipLink.style.height = '1px';
    skipLink.style.overflow = 'hidden';
    
    skipLink.addEventListener('focus', () => {
      skipLink.style.left = '6px';
      skipLink.style.top = '7px';
      skipLink.style.width = 'auto';
      skipLink.style.height = 'auto';
    });
    
    skipLink.addEventListener('blur', () => {
      skipLink.style.left = '-9999px';
      skipLink.style.top = 'auto';
      skipLink.style.width = '1px';
      skipLink.style.height = '1px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add focus trap for modals
    const addFocusTrap = (element: HTMLElement) => {
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
      
      return () => {
        element.removeEventListener('keydown', handleTabKey);
      };
    };
    
    // Add high contrast mode support
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
    const updateHighContrast = () => {
      if (prefersHighContrast.matches) {
        document.documentElement.classList.add('high-contrast');
      } else {
        document.documentElement.classList.remove('high-contrast');
      }
    };
    
    prefersHighContrast.addEventListener('change', updateHighContrast);
    updateHighContrast();
    
    // Add reduced motion support
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateReducedMotion = () => {
      if (prefersReducedMotion.matches) {
        document.documentElement.classList.add('reduce-motion');
      } else {
        document.documentElement.classList.remove('reduce-motion');
      }
    };
    
    prefersReducedMotion.addEventListener('change', updateReducedMotion);
    updateReducedMotion();
    
    // Announce page changes to screen readers
    const announcePageChange = (message: string) => {
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
    
    // Listen for route changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.target === document.body) {
          announcePageChange('Page content updated');
        }
      });
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => {
      observer.disconnect();
      prefersHighContrast.removeEventListener('change', updateHighContrast);
      prefersReducedMotion.removeEventListener('change', updateReducedMotion);
    };
  }, []);
  
  return null;
};

export default AccessibilityEnhancer;