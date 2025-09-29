import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Skip focus outline for mouse users, keep it for keyboard users
    let isUsingKeyboard = false;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        isUsingKeyboard = true;
        document.body.classList.add('using-keyboard');
      }
    };

    const handleMouseDown = () => {
      isUsingKeyboard = false;
      document.body.classList.remove('using-keyboard');
    };

    // Add event listeners
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    // Add skip to content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2';
    skipLink.style.cssText = `
      position: absolute;
      left: -9999px;
      width: 1px;
      height: 1px;
      overflow: hidden;
    `;
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Enhance form accessibility
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      const inputs = form.querySelectorAll('input, textarea, select');
      inputs.forEach((input, index) => {
        const element = input as HTMLInputElement;
        
        // Add proper labels if missing
        if (!element.id && !element.getAttribute('aria-label')) {
          element.id = `input-${index}`;
        }

        // Add error handling attributes
        if (element.hasAttribute('required')) {
          element.setAttribute('aria-required', 'true');
        }

        // Add validation feedback
        element.addEventListener('invalid', () => {
          element.setAttribute('aria-invalid', 'true');
        });

        element.addEventListener('input', () => {
          if (element.checkValidity()) {
            element.setAttribute('aria-invalid', 'false');
          }
        });
      });
    });

    // Enhance button accessibility
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
        button.setAttribute('aria-label', 'Button');
      }
    });

    // Enhance link accessibility
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      if (link.href && link.href.startsWith('http') && !link.href.includes(window.location.hostname)) {
        link.setAttribute('rel', 'noopener noreferrer');
        if (!link.getAttribute('aria-label')) {
          link.setAttribute('aria-label', `${link.textContent} (opens in new tab)`);
        }
      }
    });

    // Add focus indicators for interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, textarea, select, [tabindex]');
    interactiveElements.forEach(element => {
      element.addEventListener('focus', () => {
        element.classList.add('focus-visible');
      });

      element.addEventListener('blur', () => {
        element.classList.remove('focus-visible');
      });
    });

    // Enhance image accessibility
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.alt && img.getAttribute('role') !== 'presentation') {
        img.alt = 'Image';
      }
    });

    // Add high contrast mode detection
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
    if (prefersHighContrast.matches) {
      document.body.classList.add('high-contrast');
    }

    // Add reduced motion detection
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
      document.body.classList.add('reduce-motion');
    }

    // Add dark mode detection
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
    const handleDarkModeChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    };

    if (prefersDarkMode.matches) {
      document.body.classList.add('dark');
    }

    prefersDarkMode.addEventListener('change', handleDarkModeChange);

    // Cleanup function
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
      prefersDarkMode.removeEventListener('change', handleDarkModeChange);
      
      // Remove skip link
      if (skipLink.parentNode) {
        skipLink.parentNode.removeChild(skipLink);
      }
    };
  }, []);

  return null;
};

export default AccessibilityEnhancer;