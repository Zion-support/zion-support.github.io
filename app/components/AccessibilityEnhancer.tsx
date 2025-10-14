import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
<<<<<<< HEAD
    // Add skip link functionality
    const addSkipLink = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);
<<<<<<< HEAD
<<<<<<< HEAD
    }
// Focus management for keyboard navigation
=======
    // Add keyboard navigation enhancements
>>>>>>> cursor/analyze-improve-and-deploy-application-4227
=======
    };

    // Focus management for keyboard navigation
>>>>>>> cursor/analyze-improve-and-deploy-application-19e3
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
<<<<<<< HEAD
<<<<<<< HEAD
    }
=======
    };

>>>>>>> cursor/analyze-improve-and-deploy-application-19e3
    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation');
    };

    // Add focus indicators for keyboard navigation
=======
    };

    // Add focus styles
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
    const addFocusStyles = () => {
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #3b82f6;
=======
    };

    // Add focus indicators for keyboard navigation
    const addFocusStyles = () => {
      const style = document.createElement('style');
      style.textContent = `
        .focus-visible:focus {
          outline: 2px solid #8b5cf6;
>>>>>>> cursor/analyze-improve-and-deploy-application-4227
          outline-offset: 2px;
        }
      `;
      document.head.appendChild(style);
<<<<<<< HEAD
<<<<<<< HEAD
    }
=======
    };

>>>>>>> cursor/analyze-improve-and-deploy-application-19e3
    // Add ARIA landmarks
    const addAriaLandmarks = () => {
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
      }
    };

<<<<<<< HEAD
<<<<<<< HEAD
    // Reduced motion mode
    if (isReducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
=======
    // Initialize accessibility features
    addSkipLink();
    addFocusStyles();
    addAriaLandmarks();
>>>>>>> cursor/analyze-improve-and-deploy-application-19e3

    // Add event listeners
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  // Keyboard navigation enhancement
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey && e.target === document.body) {
        e.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // High contrast mode
  useEffect(() => {
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
    
    const handleContrastChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.body.classList.add('high-contrast');
      } else {
        document.body.classList.remove('high-contrast');
      }
    };

<<<<<<< HEAD
    return () => {
      focusableElements.forEach(element => {
        element.removeEventListener('focus', handleFocus);
        element.removeEventListener('blur', handleBlur);
      const nav = document.querySelector('nav');      if (nav && !nav.getAttribute('role')) {
=======
      const nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('role')) {
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
        nav.setAttribute('role', 'navigation');
      }

      const footer = document.querySelector('footer');
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo');
      }
    }
    // Add alt text to images without alt attributes
    const addAltText = () => {
      const images = document.querySelectorAll('img:not([alt])');
      images.forEach((img, index) => {
        if (!img.getAttribute('alt')) {
          img.setAttribute('alt', `Image ${index + 1}`);
        }
      });
    }
    // Initialize accessibility enhancements
    addSkipLink();
    addFocusStyles();
    addAriaLandmarks();
    addAltText();
<<<<<<< HEAD
=======
    };

    document.addEventListener('keydown', handleKeyDown);
    addFocusStyles();
>>>>>>> cursor/analyze-improve-and-deploy-application-4227

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
<<<<<<< HEAD
      document.removeEventListener('mousedown', handleMouseDown);
    }
=======
    if (prefersHighContrast.matches) {
      document.body.classList.add('high-contrast');
    }

    prefersHighContrast.addEventListener('change', handleContrastChange);
    return () => prefersHighContrast.removeEventListener('change', handleContrastChange);
>>>>>>> cursor/analyze-improve-and-deploy-application-19e3
  }, []);

  // Reduced motion mode
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.body.classList.add('reduced-motion');
      } else {
        document.body.classList.remove('reduced-motion');
      }
    };

    if (prefersReducedMotion.matches) {
      document.body.classList.add('reduced-motion');
    }

    prefersReducedMotion.addEventListener('change', handleMotionChange);
    return () => prefersReducedMotion.removeEventListener('change', handleMotionChange);
  }, []);

  return null;
<<<<<<< HEAD
}
export default AccessibilityEnhancer;
=======
  }, []);

  return null;
=======
    };
  }, []);

  return null;
>>>>>>> cursor/analyze-improve-and-deploy-application-4227
};

export default AccessibilityEnhancer;
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
=======
};

export default AccessibilityEnhancer;
>>>>>>> cursor/analyze-improve-and-deploy-application-19e3
