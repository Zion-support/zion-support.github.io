import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    const savedSettings = localStorage.getItem('zion-accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings({ ...DEFAULT_SETTINGS, ...parsed });
        applySettings({ ...DEFAULT_SETTINGS, ...parsed });
      } catch (error) {
        // console.warn('Failed to parse accessibility settings:', error);
      }
    };

    // Add focus indicators for keyboard navigation
    const addFocusStyles = () => {
      const style = document.createElement('style');
      style.textContent = `
        .focus-visible:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }
        
        [data-skip-to-main] {
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
        
        [data-skip-to-main]:focus {
          top: 6px;
        }
      `;
      document.head.appendChild(style);
    };

    // Add skip to main content link
    const addSkipLink = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.setAttribute('data-skip-to-main', 'true');
      skipLink.className = 'sr-only focus:not-sr-only';
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
          
          const label = form.querySelector(`label[for="${inputElement.id}"]`);
          if (!label && inputElement.placeholder) {
            const labelElement = document.createElement('label');
            labelElement.htmlFor = inputElement.id;
            labelElement.textContent = inputElement.placeholder;
            labelElement.className = 'sr-only';
            inputElement.parentNode?.insertBefore(labelElement, inputElement);
          }
        });
      });
    };

    // Add ARIA labels to interactive elements
    const addAriaLabels = () => {
      const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
      buttons.forEach(button => {
        const buttonElement = button as HTMLButtonElement;
        if (!buttonElement.textContent?.trim()) {
          buttonElement.setAttribute('aria-label', 'Button');
        }
      });

      const links = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
      links.forEach(link => {
        const linkElement = link as HTMLAnchorElement;
        if (!linkElement.textContent?.trim() && !linkElement.title) {
          linkElement.setAttribute('aria-label', 'Link');
        }
      });
    };

    // Initialize accessibility enhancements
    addFocusStyles();
    addSkipLink();
    enhanceForms();
    addAriaLabels();

    // Add event listeners
    document.addEventListener('keydown', handleKeyDown);

    // Re-run enhancements when DOM changes
    const observer = new MutationObserver(() => {
      enhanceForms();
      addAriaLabels();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      observer.disconnect();
    };
  }, []);

  return null; // This component doesn't render anything
};

export default AccessibilityEnhancer;