import React, { useEffect } from 'react';

import React,{ useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true,
  enableFocusManagement = true
}) => {
  useEffect(() => {
    // Enhance accessibility features
    const enhanceAccessibility = () => {
      // Add skip links
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);

    // Keyboard navigation
    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content
        if (event.key === 'Tab' && event.shiftKey && event.altKey) {
          event.preventDefault();
          const mainContent = document.getElementById('main-content');
          if (mainContent) {
            mainContent.focus();
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  },[enableKeyboardNavigation, enableHighContrast]);

  useEffect(() => {
    if (enableScreenReaderSupport) {
      // Add screen reader announcements
      const announceToScreenReader = (message: string) => {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live','polite');
        announcement.setAttribute('aria-atomic','true');
        announcement.className ='sr-only';
        announcement.textContent = message;
        document.body.appendChild(announcement);
        
        setTimeout(() => {
          document.body.removeChild(announcement);
        }, 1000);
      };

      // Announce page changes
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type==='childList' && mutation.addedNodes.length > 0) {
            const addedNode = mutation.addedNodes[0] as Element;
            if (addedNode && addedNode.nodeType === Node.ELEMENT_NODE) {
              const heading = addedNode.querySelector('h1, h2, h3, h4, h5, h6');
              if (heading) {
                announceToScreenReader(`Page updated: ${heading.textContent}`);
              }
            }
          }
        });
      });

      // Add ARIA labels where needed
      const images = document.querySelectorAll('img:not([alt])');
      images.forEach((img) => {
        img.setAttribute('alt', '');
      });
    };

    enhanceAccessibility();

  useEffect(() => {
    if (enableFocusManagement) {
      // Focus management for modals and dropdowns
      const manageFocus = (event: FocusEvent) => {
        const target = event.target as Element;
        if (target && target.closest('[role="dialog"],[role="menu"],[role="listbox"]')) {
          const focusableElements = target.closest('[role="dialog"],[role="menu"],[role="listbox"]')?.querySelectorAll(
            'button,[href], input, select, textarea,[tabindex]:not([tabindex ="-1"])'
          );
          
          if (focusableElements && focusableElements.length > 0) {
            const firstElement = focusableElements[0] as HTMLElement;
            const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
            
            if (event.key ==='Tab') {
              if (event.shiftKey && target === firstElement) {
                event.preventDefault();
                lastElement.focus();
              } else if (!event.shiftKey && target === lastElement) {
                event.preventDefault();
                firstElement.focus();
              }
            }
          }
        }
      };

  return null; // This component doesn't render anything
};

      const nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('role')) => {
        nav.setAttribute('role', 'navigation');
      }

      const footer = document.querySelector('footer');
      if (footer && !footer.getAttribute('role')) => {
        footer.setAttribute('role', 'contentinfo');
      }
    };

    addAriaLandmarks();
  }, []);

  // Add alt text to images without alt attributes
  useEffect(() => {
    const addAltText = () => {
      const images = document.querySelectorAll('img:not([alt])');
      images.forEach((img, index) => {
        if (!img.getAttribute('alt')) => {
          img.setAttribute('alt', `Image ${index + 1}`);
        }
      });
    };

    addAltText();
  }, []);

  return (
    <div className="accessibility-control s fixedbottom-4left-4z-50bg-slate-800p-4rounded-lgshadow-lg">
      <h3 className="text-whitefont-semiboldmb-3">Accessibility</h3>
      
      const handleKeyDown = (e: KeyboardEvent) => {
        // Trap focus within modals
        if (e.key === 'Tab') {
          const modal = document.querySelector('[role="dialog"]');
          if (modal) {
            const focusableContent = modal.querySelectorAll(focusableElements);
            const firstFocusableElement = focusableContent[0] as HTMLElement;
            const lastFocusableElement = focusableContent[focusableContent.length - 1] as HTMLElement;

            if (e.shiftKey) {
              if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus();
                e.preventDefault();
              }
            } else {
              if (document.activeElement === lastFocusableElement) {
                firstFocusableElement.focus();
                e.preventDefault();
              }
            }
          }
        }

        <div className="space-y-1">
          <label className="text-whitetext-sm">Font Size</label>
          <select
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value as 'small' | 'normal' | 'large')}
            className="w-fullbg-slate-700text-whiteroundedpx-2py-1text-sm"
          >
            <option value="small">Small</option>
            <option value="normal">Normal</option>
            <option value="large">Large</option>
            <option value="extra-large">Extra Large</option>
          </select>
          </div>
        </div>
      </div>
    </div> ); }; export default Accessibility Enhancer;
  )
export default Accessibility;; Enhancer
