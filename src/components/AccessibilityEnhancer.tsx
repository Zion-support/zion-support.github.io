import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
    skipLink.setAttribute('tabIndex', '1');
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add ARIA landmarks
    const main = document.querySelector('main');
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main');
      main.setAttribute('id', 'main-content');
    }

    // Add navigation landmarks
    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('role')) {
      nav.setAttribute('role', 'navigation');
      nav.setAttribute('aria-label', 'Main navigation');
    }

    // Add heading hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach((heading, index) => {
      if (!heading.getAttribute('id')) {
        const id = `heading-${index}`;
        heading.setAttribute('id', id);
      }
    });

    // Add focus management for modals and dropdowns
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        // Close any open modals or dropdowns
        const openElements = document.querySelectorAll('[aria-expanded="true"]');
        openElements.forEach(element => {
          element.setAttribute('aria-expanded', 'false');
          element.classList.remove('open');
        });
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Add reduced motion support
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.style.setProperty('--animation-duration', '0.01ms');
        document.documentElement.style.setProperty('--animation-iteration-count', '1');
      } else {
        document.documentElement.style.removeProperty('--animation-duration');
        document.documentElement.style.removeProperty('--animation-iteration-count');
      }
    };

    prefersReducedMotion.addEventListener('change', handleMotionChange);
    handleMotionChange(prefersReducedMotion);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      prefersReducedMotion.removeEventListener('change', handleMotionChange);
    };
  }, []);

  return null;
};

export default AccessibilityEnhancer;