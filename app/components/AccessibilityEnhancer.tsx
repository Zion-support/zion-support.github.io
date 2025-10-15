import React, { useEffect, useRef } from 'react';

const AccessibilityEnhancer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Add skip link functionality
    const addSkipLink = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Focus management for keyboard navigation
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content with Alt + M
      if (event.altKey && event.key === 'm') {
        event.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Add ARIA landmarks
    const addAriaLandmarks = () => {
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
        main.setAttribute('id', 'main-content');
        main.setAttribute('tabindex', '-1');
      }

      const nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
        nav.setAttribute('aria-label', 'Main navigation');
      }

      const header = document.querySelector('header');
      if (header && !header.getAttribute('role')) {
        header.setAttribute('role', 'banner');
      }

      const footer = document.querySelector('footer');
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo');
      }
    };

    // Enhance form accessibility
    const enhanceForms = () => {
      const forms = document.querySelectorAll('form');
      forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
          const label = form.querySelector(`label[for="${input.id}"]`);
          if (!label && !input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
            const placeholder = input.getAttribute('placeholder');
            if (placeholder) {
              input.setAttribute('aria-label', placeholder);
            }
          }
        });
      });
    };

    // Add high contrast mode toggle
    const addHighContrastToggle = () => {
      const toggle = document.createElement('button');
      toggle.textContent = 'High Contrast';
      toggle.className = 'fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded z-50';
      toggle.setAttribute('aria-label', 'Toggle high contrast mode');
      
      toggle.addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
        const isHighContrast = document.body.classList.contains('high-contrast');
        toggle.textContent = isHighContrast ? 'Normal Contrast' : 'High Contrast';
        localStorage.setItem('highContrast', isHighContrast.toString());
      });

      // Check for saved preference
      const savedPreference = localStorage.getItem('highContrast');
      if (savedPreference === 'true') {
        document.body.classList.add('high-contrast');
        toggle.textContent = 'Normal Contrast';
      }

      document.body.appendChild(toggle);
    };

    // Initialize accessibility features
    addSkipLink();
    addAriaLandmarks();
    enhanceForms();
    addHighContrastToggle();

    // Add event listeners
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;