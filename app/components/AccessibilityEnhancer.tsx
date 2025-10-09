import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add accessibility enhancements
    const addAriaLabels = () => {
      const buttons = document.querySelectorAll('button:not([aria-label])');
      buttons.forEach((button, index) => {
        if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
          button.setAttribute('aria-label', `Button ${index + 1}`);
        }
      });
    };

    const addFocusManagement = () => {
      // Add focus management for better keyboard navigation
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      focusableElements.forEach((element) => {
        element.addEventListener('focus', (e) => {
          (e.target as HTMLElement).style.outline = '2px solid #06b6d4';
        });
        
        element.addEventListener('blur', (e) => {
          (e.target as HTMLElement).style.outline = 'none';
        });
      });
    };

    const addSkipLinks = () => {
      // Add skip to main content link
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-600 text-white px-4 py-2 rounded z-50';
      skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #0891b2;
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        transition: top 0.3s;
      `;
      
      skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
      });
      
      skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
      });
      
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    const addColorContrast = () => {
      // Ensure sufficient color contrast
      const style = document.createElement('style');
      style.textContent = `
        .text-gray-300 {
          color: #d1d5db !important;
        }
        .text-gray-400 {
          color: #9ca3af !important;
        }
        .bg-slate-900 {
          background-color: #0f172a !important;
        }
        .bg-slate-800 {
          background-color: #1e293b !important;
        }
      `;
      document.head.appendChild(style);
    };

    const addKeyboardNavigation = () => {
      // Add keyboard navigation support
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      });
      
      document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
      });
    };

    const addScreenReaderSupport = () => {
      // Add screen reader announcements
      const announce = (message: string) => {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = message;
        document.body.appendChild(announcement);
        
        setTimeout(() => {
          document.body.removeChild(announcement);
        }, 1000);
      };

      // Announce page changes
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            const addedNode = mutation.addedNodes[0] as Element;
            if (addedNode.nodeType === Node.ELEMENT_NODE) {
              const heading = addedNode.querySelector('h1, h2, h3, h4, h5, h6');
              if (heading) {
                announce(`New section: ${heading.textContent}`);
              }
            }
          }
        });
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    };

    const addFormAccessibility = () => {
      // Enhance form accessibility
      const forms = document.querySelectorAll('form');
      forms.forEach((form) => {
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach((input) => {
          const label = form.querySelector(`label[for="${input.id}"]`);
          if (!label && !input.getAttribute('aria-label')) {
            input.setAttribute('aria-label', input.getAttribute('placeholder') || 'Input field');
          }
        });
      });
    };

    // Initialize accessibility enhancements
    addAriaLabels();
    addFocusManagement();
    addSkipLinks();
    addColorContrast();
    addKeyboardNavigation();
    addScreenReaderSupport();
    addFormAccessibility();

    // Re-run on DOM changes
    const observer = new MutationObserver(() => {
      addAriaLabels();
      addFocusManagement();
      addFormAccessibility();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
};

export default AccessibilityEnhancer;