import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add keyboard navigation improvements
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content with Tab key
      if (event.key === 'Tab' && event.target === document.body) {
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: 'smooth' });
        }
      }

      // Escape key to close modals/dropdowns
      if (event.key === 'Escape') {
        const activeDropdown = document.querySelector('[aria-expanded="true"]');
        if (activeDropdown) {
          (activeDropdown as HTMLElement).click();
        }
      }
    };

    // Add focus indicators
    const addFocusStyles = () => {
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #06b6d4 !important;
          outline-offset: 2px !important;
        }
        
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #06b6d4;
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

    // Add skip link
    const addSkipLink = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.className = 'skip-link';
      skipLink.textContent = 'Skip to main content';
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Improve form accessibility
    const improveFormAccessibility = () => {
      const forms = document.querySelectorAll('form');
      forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach((input, index) => {
          const inputElement = input as HTMLInputElement;
          
          // Add proper labels if missing
          if (!inputElement.labels?.length && !inputElement.getAttribute('aria-label')) {
            const label = document.createElement('label');
            label.htmlFor = inputElement.id || `input-${index}`;
            label.textContent = inputElement.placeholder || 'Input field';
            inputElement.id = inputElement.id || `input-${index}`;
            inputElement.parentNode?.insertBefore(label, inputElement);
          }

          // Add required indicators
          if (inputElement.required) {
            inputElement.setAttribute('aria-required', 'true');
          }
        });
      });
    };

    // Add ARIA labels to interactive elements
    const addAriaLabels = () => {
      const buttons = document.querySelectorAll('button:not([aria-label])');
      buttons.forEach(button => {
        const text = button.textContent?.trim();
        if (text && text.length < 50) {
          button.setAttribute('aria-label', text);
        }
      });

      const links = document.querySelectorAll('a:not([aria-label])');
      links.forEach(link => {
        const text = link.textContent?.trim();
        if (text && text.length < 50) {
          link.setAttribute('aria-label', text);
        }
      });
    };

    // Initialize accessibility enhancements
    addFocusStyles();
    addSkipLink();
    improveFormAccessibility();
    addAriaLabels();

    // Add event listeners
    document.addEventListener('keydown', handleKeyDown);

    // Re-run accessibility improvements when DOM changes
    const observer = new MutationObserver(() => {
      addAriaLabels();
      improveFormAccessibility();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      observer.disconnect();
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default AccessibilityEnhancer;