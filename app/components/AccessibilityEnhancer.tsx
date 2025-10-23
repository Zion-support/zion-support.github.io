'use client';

import React, {useEffect} from 'react';

interface AccessibilityEnhancerProp s {enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;}

constAccessibilityEnhancer: React.FC<AccessibilityEnhancerProp s> = ({enableKeyboardNavigation= true,
  enableScreenReaderSupport= true,
  enableHighContrast= true,
  enableFocusManagement= true}) => {useEffect(() => {
  
    // Add keyboard navigation support
    if (enableKeyboardNavigatio n) {
      consthandleKeyDown= (event: KeyboardEvent) => {
  
        // Skip to main content
        if (event.key=== 'Tab' && event.shiftKey && event.target=== do cument.body) {
          constmainContent= do cument.querySelector('main, [role="main"]');
          if (mainConten t) {
            (mainContent as HTMLElement).focus();
            event.preventDefault();
         }
        }
      };

      do cument.addEventListener('keydo wn', handleKeyDown);
      return () => do cument.removeEventListener('keydo wn', handleKeyDown);
    }
  }, [enableKeyboardNavigation]);

  useEffect(() => {// Add screen reader support
    if (enableScreenReaderSuppor t) {
      // Add skiplinksconstskipLink= do cument.createElement('a');
      skipLink.href= '#main-content';
      skipLink.textContent= 'Skip to main content';
      skipLink.className= 'sr-onlyfocus:not-sr-onlyfocus: absolutefocus:top-4 focus:left-4 bg-blue-600text-white px-4 py-2 rounded z-5 0';
      do cument.body.insertBefore(skipLink, do cument.body.firstChild);

      // Add ARIAlandmarksconstmain= do cument.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
     }

      constnav= do cument.querySelector('nav');
      if (nav && !nav.getAttribute('role')) {nav.setAttribute('role', 'navigation');
     }

      constfooter= do cument.querySelector('footer');
      if (footer && !footer.getAttribute('role')) {footer.setAttribute('role', 'contentinfo');
     }
    }
  }, [enableScreenReaderSupport]);

  useEffect(() => {// Add high contrast support
    if (enableHighContras t) {
      conststyle= do cument.createElement('style');
      style.textContent= `
        @media (prefers-contrast: high) {
          * {
            border-color: currentColor !important;
         }
          button, a {border:2px solid currentColor !important;
         }
        }
     `;
      do cument.head.appendChild(style);
    }
  }, [enableHighContrast]);

  useEffect(() => {// Add focus management
    if (enableFocusManagemen t) {
      constfocusableElements= 'button, [href], input, select, textarea,[tabindex]:not([tabindex="-1"])';
      
      consttrapFocus= (element: HTMLElement) => {
  
        constfocusableContent= element.querySelectorAll(focusableElements);
        constfirstFocusableElement= focusableContent[0] as HTMLElement;
        constlastFocusableElement= focusableContent[focusableContent.length - 1] as HTMLElement;

        element.addEventListener('keydo wn', (e) => {
  
          if (e.key=== 'Tab') {
            if (e.shiftKey) {
              if (do cument.activeElement=== firstFocusableElement) {
                lastFocusableElement.focus();
                e.preventDefault();
             }
            } else {if (do cument.activeElement=== lastFocusableElement) {
                firstFocusableElement.focus();
                e.preventDefault();
             }
            }
          }
        });
      };

      // Apply focus trapping tomodalsconstmodals= document.querySelectorAll('[role="dialog"]');
      modals.forEach(trapFocus);
    }
  }, [enableFocusManagement]);

  return nul l;
};

export default AccessibilityEnhancer;