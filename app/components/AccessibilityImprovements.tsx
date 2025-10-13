import React, { useEffect } from 'react';

const AccessibilityImprovements: React.FC = () => {
  useEffect(() => {
    // Add skip links
    const addSkipLinks = () => {
      const skipLinks = document.createElement('div');
      skipLinks.className = 'skip-links';
      skipLinks.innerHTML = `
        <a href="#main-content" class="skip-link">Skip to main content</a>
        <a href="#navigation" class="skip-link">Skip to navigation</a>
        <a href="#footer" class="skip-link">Skip to footer</a>
      `;
      document.body.insertBefore(skipLinks, document.body.firstChild);
    };

    // Enhance focus management
    const enhanceFocusManagement = () => {
      let isKeyboardNavigation = false;

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          isKeyboardNavigation = true;
          document.body.classList.add('keyboard-navigation');
        }
      };

      const handleMouseDown = () => {
        isKeyboardNavigation = false;
        document.body.classList.remove('keyboard-navigation');
      };

      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleMouseDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('mousedown', handleMouseDown);
      };
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
        nav.setAttribute('aria-label', 'Main navigation');
      }

      const footer = document.querySelector('footer');
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo');
      }
    };

    // Enhance form accessibility
    const enhanceFormAccessibility = () => {
      const forms = document.querySelectorAll('form');
      forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach((input, index) => {
          const inputElement = input as HTMLInputElement;
          if (!inputElement.id) {
            inputElement.id = `input-${index}`;
          }
          if (!inputElement.getAttribute('aria-describedby')) {
            const label = form.querySelector(`label[for="${inputElement.id}"]`);
            if (label) {
              const errorId = `error-${inputElement.id}`;
              inputElement.setAttribute('aria-describedby', errorId);
            }
          }
        });
      });
    };

    // Initialize accessibility improvements
    addSkipLinks();
    const cleanupFocus = enhanceFocusManagement();
    addAriaLandmarks();
    enhanceFormAccessibility();

    // Add CSS for skip links and keyboard navigation
    const style = document.createElement('style');
    style.textContent = `
      .skip-links {
        position: absolute;
        top: -40px;
        left: 6px;
        z-index: 1000;
      }
      
      .skip-link {
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        transition: top 0.3s;
      }
      
      .skip-link:focus {
        top: 6px;
      }
      
      .keyboard-navigation *:focus {
        outline: 2px solid #3b82f6 !important;
        outline-offset: 2px !important;
      }
      
      .high-contrast {
        filter: contrast(150%) brightness(1.2);
      }
      
      .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      cleanupFocus();
      document.head.removeChild(style);
    };
  }, []);

  return null;
};

export default AccessibilityImprovements;