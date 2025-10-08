import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Enhance keyboard navigation
    const enhanceKeyboardNavigation = () => {
      // Add focus indicators
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #4f46e5 !important;
          outline-offset: 2px !important;
        }
        
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #4f46e5;
          color: white;
          padding: 8px;
          text-decoration: none;
          border-radius: 4px;
          z-index: 1000;
        }
        
        .skip-link:focus {
          top: 6px;
        }
      `;
      document.head.appendChild(style);
    };

    // Add skip links
    const addSkipLinks = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'skip-link';
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Enhance form accessibility
    const enhanceForms = () => {
      const forms = document.querySelectorAll('form');
      forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach((input, index) => {
          const inputElement = input as HTMLInputElement;
          if (!inputElement.id) {
            inputElement.id = `input-${index}`;
          }
          if (!inputElement.getAttribute('aria-label') && !inputElement.getAttribute('aria-labelledby')) {
            const label = form.querySelector(`label[for="${inputElement.id}"]`);
            if (!label) {
              inputElement.setAttribute('aria-label', inputElement.placeholder || `Input ${index + 1}`);
            }
          }
        });
      });
    };

    // Enhance images
    const enhanceImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.alt && !img.getAttribute('aria-label')) {
          img.alt = 'Decorative image';
        }
      });
    };

    // Enhance buttons
    const enhanceButtons = () => {
      const buttons = document.querySelectorAll('button');
      buttons.forEach(button => {
        if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
          button.setAttribute('aria-label', 'Button');
        }
      });
    };

    // Run enhancements
    enhanceKeyboardNavigation();
    addSkipLinks();
    enhanceForms();
    enhanceImages();
    enhanceButtons();

    // Cleanup function
    return () => {
      const skipLink = document.querySelector('.skip-link');
      if (skipLink) {
        skipLink.remove();
      }
    };
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
