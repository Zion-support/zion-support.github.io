'use client';
import React, {useEffect} from 'react';


    if (enableKeyboardNavigation && typeof window !== 'undefined') {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content;
        if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
          const skipLink = document.querySelector('a[href="#main-content"]') as HTMLAnchorElement;
          if (skipLink) {
            skipLink.focus();
            event.preventDefault();}}

        // Close dropdowns with Escape key;
        if (event.key === 'Escape') {const openDropdowns = document.querySelectorAll('[aria-expanded="true"]');
          openDropdowns.forEach(dropdown => {)
            (dropdown as HTMLElement).setAttribute('aria-expanded', 'false');})
        }
      }

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }

      const liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      liveRegion.id = 'live-region';
      document.body.appendChild(liveRegion);


        if (e.matches) {
          document.documentElement.classList.add('high-contrast');}else {document.documentElement.classList.remove('high-contrast');}}}

      if (prefersHighContrast.matches) {
        document.documentElement.classList.add('high-contrast');
      }

      prefersHighContrast.addEventListener('change', handleContrastChange);
      return () => prefersHighContrast.removeEventListener('change', handleContrastChange);
    }
  }, [enableHighContrast]);


};

export default AccessibilityEnhancer;
