import React, { useEffect, ReactNode } from 'react';

interface AccessibilityEnhancerProps {
  children: ReactNode;
  enableSkipLinks?: boolean;
  enableFocusManagement?: boolean;
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableSkipLinks = true,
  enableFocusManagement = true,
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true
}) => {
  useEffect(() => {
    const addSkipLinks = () => {
      if (!enableSkipLinks) return;

      // Create skip to main content link
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'skip-link';
      skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
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

    const enhanceInteractiveElements = () => {
      // Add proper ARIA labels to interactive elements
      const buttons = document.querySelectorAll('button:not([aria-label])');
      buttons.forEach((button) => {
        if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
          button.setAttribute('aria-label', 'Button');
        }
      });

      // Add role to clickable divs
      const clickableDivs = document.querySelectorAll('div[onclick]');
      clickableDivs.forEach((div) => {
        div.setAttribute('role', 'button');
        div.setAttribute('tabindex', '0');
      });

      // Ensure images have alt text
      const images = document.querySelectorAll('img:not([alt])');
      images.forEach((img) => {
        img.setAttribute('alt', '');
      });
    };

    const enhanceFocusManagement = () => {
      if (!enableFocusManagement) return;

      // Add focus indicators
      const style = document.createElement('style');
      style.textContent = `
        .focus-visible {
          outline: 2px solid #4A90E2;
          outline-offset: 2px;
        }
        
        .keyboard-navigation *:focus {
          outline: 2px solid #4A90E2;
          outline-offset: 2px;
        }
      `;
      document.head.appendChild(style);

      // Add keyboard navigation class
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      });

      document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
      });
    };

    const setupScreenReaderSupport = () => {
      if (!enableScreenReaderSupport) return;

      // Add live region for announcements
      const liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      liveRegion.style.cssText = `
        position: absolute;
        left: -10000px;
        width: 1px;
        height: 1px;
        overflow: hidden;
      `;
      document.body.appendChild(liveRegion);

      // Announce page changes
      const announce = (message: string) => {
        liveRegion.textContent = message;
        setTimeout(() => {
          liveRegion.textContent = '';
        }, 1000);
      };

      // Make announce function globally available
      (window as any).announceToScreenReader = announce;
    };

    const setupKeyboardNavigation = () => {
      if (!enableKeyboardNavigation) return;

      // Handle escape key for modals and dropdowns
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          const modals = document.querySelectorAll('[role="dialog"]');
          modals.forEach((modal) => {
            const closeButton = modal.querySelector('[aria-label="Close"]');
            if (closeButton) {
              (closeButton as HTMLElement).click();
            }
          });
        }
      });

      // Handle arrow key navigation for custom components
      document.addEventListener('keydown', (e) => {
        const focusedElement = document.activeElement;
        if (focusedElement?.getAttribute('role') === 'menuitem') {
          const menuItems = Array.from(
            focusedElement.parentElement?.querySelectorAll('[role="menuitem"]') || []
          );
          const currentIndex = menuItems.indexOf(focusedElement);

          if (e.key === 'ArrowDown' && currentIndex < menuItems.length - 1) {
            e.preventDefault();
            (menuItems[currentIndex + 1] as HTMLElement).focus();
          } else if (e.key === 'ArrowUp' && currentIndex > 0) {
            e.preventDefault();
            (menuItems[currentIndex - 1] as HTMLElement).focus();
          }
        }
      });
    };

    // Initialize all enhancements
    addSkipLinks();
    enhanceInteractiveElements();
    enhanceFocusManagement();
    setupScreenReaderSupport();
    setupKeyboardNavigation();

    // Cleanup function
    return () => {
      // Remove skip links
      const skipLinks = document.querySelectorAll('.skip-link');
      skipLinks.forEach(link => link.remove());

      // Remove live region
      const liveRegion = document.querySelector('[aria-live="polite"]');
      if (liveRegion) {
        liveRegion.remove();
      }

      // Remove global functions
      delete (window as any).announceToScreenReader;
    };
  }, [enableSkipLinks, enableFocusManagement, enableKeyboardNavigation, enableScreenReaderSupport]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;