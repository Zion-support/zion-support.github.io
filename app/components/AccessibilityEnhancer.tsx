import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add skip links
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
    skipLink.setAttribute('aria-label', 'Skip to main content');
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add main content landmark
    const main = document.querySelector('main');
    if (main && !main.id) {
      main.id = 'main-content';
      main.setAttribute('role', 'main');
      main.setAttribute('aria-label', 'Main content');
    }

    // Add navigation landmarks
    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('aria-label')) {
      nav.setAttribute('aria-label', 'Main navigation');
    }

    // Add footer landmark
    const footer = document.querySelector('footer');
    if (footer && !footer.getAttribute('role')) {
      footer.setAttribute('role', 'contentinfo');
    }

    // Enhance focus management
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation');
    };

    // Add focus visible styles
    const style = document.createElement('style');
    style.textContent = `
      .keyboard-navigation *:focus {
        outline: 2px solid #3b82f6 !important;
        outline-offset: 2px !important;
      }
    `;
    document.head.appendChild(style);

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
      style.remove();
    };
  }, []);

  return null;
};

export default AccessibilityEnhancer;
