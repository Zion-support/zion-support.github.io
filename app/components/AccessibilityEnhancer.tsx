import React, { useEffect, useState } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState<'small' | 'normal' | 'large' | 'extra-large'>('normal');

  useEffect(() => {
    // Load accessibility preferences from localStorage
    const savedHighContrast = localStorage.getItem('highContrast') === 'true';
    const savedReducedMotion = localStorage.getItem('reducedMotion') === 'true';
    const savedFontSize = localStorage.getItem('fontSize') as 'small' | 'normal' | 'large' | 'extra-large' || 'normal';

    setIsHighContrast(savedHighContrast);
    setIsReducedMotion(savedReducedMotion);
    setFontSize(savedFontSize);

    // Apply accessibility styles
    const root = document.documentElement;
    
    // High contrast mode
    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Reduced motion mode
    if (isReducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Font size adjustment
    root.style.setProperty('--font-size-multiplier', 
      fontSize === 'large' ? '1.2' : 
      fontSize === 'extra-large' ? '1.4' : 
      fontSize === 'small' ? '0.9' : '1'
    );

    // Add ARIA landmarks
    const addAriaLandmarks = () => {
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
      }

      const nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
      }

      const footer = document.querySelector('footer');
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo');
      }
    };

    addAriaLandmarks();
    
    // Add alt text to images without alt attributes
    const addAltText = () => {
      const images = document.querySelectorAll('img:not([alt])');
      images.forEach((img, index) => {
        if (!img.getAttribute('alt')) {
          img.setAttribute('alt', `Image ${index + 1}`);
        }
      });
    };

    addAltText();

    // Add skip links
    const addSkipLinks = () => {
      const existingSkipLinks = document.querySelector('.skip-links');
      if (existingSkipLinks) return;

      const skipLinks = document.createElement('div');
      skipLinks.className = 'skip-links';
      skipLinks.innerHTML = `
        <a href="#main-content" class="skip-link">Skip to main content</a>
        <a href="#navigation" class="skip-link">Skip to navigation</a>
      `;
      document.body.insertBefore(skipLinks, document.body.firstChild);
    };

    addSkipLinks();

    // Add focus management
    const addFocusManagement = () => {
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      const handleFocus = (e: FocusEvent) => {
        const target = e.target as HTMLElement;
        if (target) {
          target.classList.add('focus-visible');
        }
      };

      const handleBlur = (e: FocusEvent) => {
        const target = e.target as HTMLElement;
        if (target) {
          target.classList.remove('focus-visible');
        }
      };

      focusableElements.forEach(element => {
        element.addEventListener('focus', handleFocus);
        element.addEventListener('blur', handleBlur);
      });

      return () => {
        focusableElements.forEach(element => {
          element.removeEventListener('focus', handleFocus);
          element.removeEventListener('blur', handleBlur);
        });
      };
    };

    const cleanup = addFocusManagement();

    return () => {
      cleanup();
    };
  }, [isHighContrast, isReducedMotion, fontSize]);

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

  // Don't render anything visible
  return null;
};

export default AccessibilityEnhancer;