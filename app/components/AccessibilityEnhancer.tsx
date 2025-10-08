import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Enhance keyboard navigation
    const enhanceKeyboardNavigation = () => {
      // Add keyboard navigation to all interactive elements
      const interactiveElements = document.querySelectorAll(
        'button, a, input, textarea, select, [tabindex], [role="button"], [role="link"]'
      );

      interactiveElements.forEach((element) => {
        element.addEventListener('keydown', (event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            const target = event.target as HTMLElement;
            if (target.matches('button, [role="button"]')) {
              event.preventDefault();
              target.click();
            }
          }
        });
      });
    };

    // Add skip links
    const addSkipLinks = () => {
      const skipLinks = [
        { href: '#main-content', text: 'Skip to main content' },
        { href: '#navigation', text: 'Skip to navigation' },
        { href: '#footer', text: 'Skip to footer' }
      ];

      const skipLinksContainer = document.createElement('div');
      skipLinksContainer.className = 'skip-links';
      skipLinksContainer.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        z-index: 1000;
      `;

      skipLinks.forEach(link => {
        const skipLink = document.createElement('a');
        skipLink.href = link.href;
        skipLink.textContent = link.text;
        skipLink.className = 'skip-link';
        skipLink.style.cssText = `
          display: block;
          padding: 8px 16px;
          background: #000;
          color: #fff;
          text-decoration: none;
          border-radius: 4px;
          margin-bottom: 4px;
          transition: top 0.3s;
        `;
        
        skipLink.addEventListener('focus', () => {
          skipLink.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', () => {
          skipLink.style.top = '-40px';
        });

        skipLinksContainer.appendChild(skipLink);
      });

      document.body.insertBefore(skipLinksContainer, document.body.firstChild);
    };

    // Enhance focus management
    const enhanceFocusManagement = () => {
      // Add focus indicators
      const style = document.createElement('style');
      style.textContent = `
        .keyboard-focus:focus {
          outline: 2px solid #4f46e5 !important;
          outline-offset: 2px !important;
        }
        
        .skip-link:focus {
          top: 6px !important;
        }
      `;
      document.head.appendChild(style);

      // Add focus class to focused elements
      document.addEventListener('keydown', (event) => {
        if (event.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      });

      document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
      });
    };

    // Add ARIA labels to interactive elements
    const addAriaLabels = () => {
      // Add ARIA labels to buttons without text
      const iconButtons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
      iconButtons.forEach((button) => {
        const icon = button.querySelector('svg, i');
        if (icon && !button.textContent?.trim()) {
          const iconName = icon.getAttribute('data-icon') || 'button';
          button.setAttribute('aria-label', iconName);
        }
      });

      // Add ARIA labels to links without text
      const iconLinks = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
      iconLinks.forEach((link) => {
        const icon = link.querySelector('svg, i');
        if (icon && !link.textContent?.trim()) {
          const iconName = icon.getAttribute('data-icon') || 'link';
          link.setAttribute('aria-label', iconName);
        }
      });
    };

    // Enhance form accessibility
    const enhanceFormAccessibility = () => {
      const forms = document.querySelectorAll('form');
      forms.forEach((form) => {
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach((input) => {
          const inputElement = input as HTMLInputElement;
          
          // Add required indicator
          if (inputElement.required && !form.querySelector(`[for="${inputElement.id}"] .required`)) {
            const label = form.querySelector(`label[for="${inputElement.id}"]`);
            if (label) {
              const required = document.createElement('span');
              required.textContent = ' *';
              required.className = 'required';
              required.setAttribute('aria-label', 'required');
              required.style.color = '#ef4444';
              label.appendChild(required);
            }
          }

          // Add error states
          inputElement.addEventListener('invalid', () => {
            inputElement.setAttribute('aria-invalid', 'true');
            inputElement.classList.add('error');
          });

          inputElement.addEventListener('input', () => {
            if (inputElement.checkValidity()) {
              inputElement.setAttribute('aria-invalid', 'false');
              inputElement.classList.remove('error');
            }
          });
        });
      });
    };

    // Add live regions for dynamic content
    const addLiveRegions = () => {
      const liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      liveRegion.id = 'live-region';
      document.body.appendChild(liveRegion);
    };

    // Initialize all enhancements
    enhanceKeyboardNavigation();
    addSkipLinks();
    enhanceFocusManagement();
    addAriaLabels();
    enhanceFormAccessibility();
    addLiveRegions();

    // Cleanup
    return () => {
      const skipLinks = document.querySelector('.skip-links');
      if (skipLinks) {
        skipLinks.remove();
      }
      
      const liveRegion = document.getElementById('live-region');
      if (liveRegion) {
        liveRegion.remove();
      }
    };
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;