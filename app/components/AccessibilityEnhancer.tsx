import React, { useEffect, ReactNode } from 'react';

interface AccessibilityEnhancerProps {
  children: ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Skip focus management for keyboard navigation
    const skipLinks = document.querySelectorAll('[data-skip-link]');
    skipLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector((e.target as HTMLElement).getAttribute('href') || '');
        if (target) {
          (target as HTMLElement).focus();
        }
      });
    });

    // Enhance focus indicators
    const style = document.createElement('style');
    style.textContent = `
      *:focus {
        outline: 2px solid #06b6d4 !important;
        outline-offset: 2px !important;
      }
      
      .focus-visible:focus {
        outline: 2px solid #06b6d4 !important;
        outline-offset: 2px !important;
      }
      
      [role="button"]:focus,
      [role="link"]:focus,
      [role="menuitem"]:focus {
        outline: 2px solid #06b6d4 !important;
        outline-offset: 2px !important;
      }
    `;
    document.head.appendChild(style);

    // Add skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded z-50';
    skipLink.setAttribute('data-skip-link', 'true');
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add ARIA landmarks
    const main = document.querySelector('main');
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main');
      main.setAttribute('aria-label', 'Main content');
    }

    // Enhance form accessibility
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      if (!form.getAttribute('aria-label') && !form.querySelector('legend')) {
        form.setAttribute('aria-label', 'Form');
      }
    });

    // Enhance button accessibility
    const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    buttons.forEach(button => {
      if (!button.textContent?.trim()) {
        button.setAttribute('aria-label', 'Button');
      }
    });

    // Enhance link accessibility
    const links = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
    links.forEach(link => {
      if (!link.textContent?.trim() && !link.getAttribute('aria-label')) {
        link.setAttribute('aria-label', 'Link');
      }
    });

    // Add high contrast mode support
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
    const handleHighContrast = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add('high-contrast');
      } else {
        document.documentElement.classList.remove('high-contrast');
      }
    };
    
    prefersHighContrast.addEventListener('change', handleHighContrast);
    if (prefersHighContrast.matches) {
      document.documentElement.classList.add('high-contrast');
    }

    // Add reduced motion support
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleReducedMotion = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add('reduce-motion');
      } else {
        document.documentElement.classList.remove('reduce-motion');
      }
    };
    
    prefersReducedMotion.addEventListener('change', handleReducedMotion);
    if (prefersReducedMotion.matches) {
      document.documentElement.classList.add('reduce-motion');
    }

    // Cleanup function
    return () => {
      document.head.removeChild(style);
      document.body.removeChild(skipLink);
      prefersHighContrast.removeEventListener('change', handleHighContrast);
      prefersReducedMotion.removeEventListener('change', handleReducedMotion);
    };
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;