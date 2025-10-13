import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Skip to main content functionality
    const addSkipLink = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded z-50';
      skipLink.style.zIndex = '9999';
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // High contrast mode toggle
    const addHighContrastToggle = () => {
      const toggle = document.createElement('button');
      toggle.textContent = 'Toggle High Contrast';
      toggle.className = 'fixed bottom-4 left-4 bg-gray-800 text-white px-3 py-2 rounded text-sm z-50';
      toggle.onclick = () => {
        document.body.classList.toggle('high-contrast');
      };
      document.body.appendChild(toggle);
    };

    // Focus management
    const enhanceFocus = () => {
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      });

      document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
      });
    };

    // ARIA labels for interactive elements
    const addAriaLabels = () => {
      const buttons = document.querySelectorAll('button:not([aria-label])');
      buttons.forEach((button) => {
        if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
          button.setAttribute('aria-label', 'Button');
        }
      });
    };

    // Initialize accessibility enhancements
    addSkipLink();
    addHighContrastToggle();
    enhanceFocus();
    addAriaLabels();

    // Add CSS for accessibility
    const style = document.createElement('style');
    style.textContent = `
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
      
      .focus\\:not-sr-only:focus {
        position: static;
        width: auto;
        height: auto;
        padding: inherit;
        margin: inherit;
        overflow: visible;
        clip: auto;
        white-space: normal;
      }
      
      .keyboard-navigation *:focus {
        outline: 2px solid #8b5cf6;
        outline-offset: 2px;
      }
      
      .high-contrast {
        filter: contrast(150%) brightness(1.2);
      }
      
      .high-contrast * {
        border-color: currentColor !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      // Cleanup
      const skipLink = document.querySelector('a[href="#main-content"]');
      const toggle = document.querySelector('button[onclick*="high-contrast"]');
      if (skipLink) skipLink.remove();
      if (toggle) toggle.remove();
    };
  }, []);

  return null;
};

export default AccessibilityEnhancer;