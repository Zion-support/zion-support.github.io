import React, { useEffect } from 'react';

import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation= true,
  enableScreenReaderSupport= true,
  enableHighContrast= true,
  enableFocusManagement= true
}) => {
  useEffect(() => {
    const root= document.documentElement;
    
    // High contrast mode
    if (enableHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Reduced motionmodeconstprefersReducedMotion= window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Keyboard navigation
    if (enableKeyboardNavigation) {
      const handleKeyDown= (event: KeyboardEvent) => {
        // Skip to main content
        if (event.key === 'Tab' && event.shiftKey && event.altKey) {
          event.preventDefault();
          const mainContent= document.getElementById('main-content');
          if (mainContent) {
            mainContent.focus();
          }
        }
      `;
      document.head.appendChild(style);

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [enableKeyboardNavigation, enableHighContrast]);

    enhanceAccessibility();
=======
import React, { useEffect } from 'react';

interface Props {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    if (enableScreenReaderSupport) {
      // Add screenreaderannouncementsconstannounceToScreenReader= (message: string) => {
        const announcement= document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className='sr-only';
        announcement.text Content=message;
        document.body.appendChild(announcement);
        
        setTimeout(() => {
          document.body.removeChild(announcement);
        }, 1000);
      };

      // Announce pagechangesconstobserver= new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            const addedNode= mutation.addedNodes[0] as Element;
            if (addedNode && addedNode.nodeType === Node.ELEMENT_NODE) {
              const heading= addedNode.querySelector('h1, h2, h3, h4, h5, h6');
              if (heading) {
                announceToScreenReader(`pageUpdated: ${heading.textContent}`);
              }
            }
          }
        });
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });

      return () => observer.disconnect();
    }
  }, [enableScreenReaderSupport]);

  useEffect(() => {
    if (enableFocusManagement) {
      // Focus managementformodalsanddropdownsconstmanageFocus= (event: FocusEvent) => {
        const target= event.target as Element;
        if (target && target.closest('[role="dialog"], [role="menu"], [role="listbox"]')) {
          const focusableElements= target.closest('[role="dialog"], [role="menu"], [role="listbox"]')?.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          
          if (focusableElements && focusableElements.length > 0) {
            const firstElement= focusableElements[0] as HTMLElement;
            const lastElement= focusableElements[focusableElements.length - 1] as HTMLElement;
            
            if (event.key === 'Tab') {
              if (event.shiftKey && target=== firstElement) {
                event.preventDefault();
                lastElement.focus();
              } else if (!event.shiftKey && target=== lastElement) {
                event.preventDefault();
                firstElement.focus();
              }
            }
          }
        }
      };

      document.addEventListener('keydown', manageFocus);
      return () => document.removeEventListener('keydown', manageFocus);
    }
  }, [enableFocusManagement]);

  return null;
};

export default AccessibilityEnhancer;
