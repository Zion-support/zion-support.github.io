import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableFocusManagement = true,
}) => {
  useEffect(() => {
    // Skip to main content functionality
    if (enableKeyboardNavigation) {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded z-50';
      skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #06b6d4;
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
    }

    // High contrast mode
    if (enableHighContrast) {
      const highContrastMediaQuery = window.matchMedia('(prefers-contrast: high)');
      
      const applyHighContrast = () => {
        if (highContrastMediaQuery.matches) {
          document.documentElement.style.setProperty('--text-primary', '#ffffff');
          document.documentElement.style.setProperty('--text-secondary', '#e5e7eb');
          document.documentElement.style.setProperty('--bg-primary', '#000000');
          document.documentElement.style.setProperty('--bg-secondary', '#111827');
        } else {
          document.documentElement.style.removeProperty('--text-primary');
          document.documentElement.style.removeProperty('--text-secondary');
          document.documentElement.style.removeProperty('--bg-primary');
          document.documentElement.style.removeProperty('--bg-secondary');
        }
      };

      applyHighContrast();
      highContrastMediaQuery.addEventListener('change', applyHighContrast);
    }

    // Focus management
    if (enableFocusManagement) {
      // Trap focus within modals
      const trapFocus = (element: HTMLElement) => {
        const focusableElements = element.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        const handleTabKey = (e: KeyboardEvent) => {
          if (e.key === 'Tab') {
            if (e.shiftKey) {
              if (document.activeElement === firstElement) {
                lastElement.focus();
                e.preventDefault();
              }
            } else {
              if (document.activeElement === lastElement) {
                firstElement.focus();
                e.preventDefault();
              }
            }
          }
        };

        element.addEventListener('keydown', handleTabKey);
        firstElement?.focus();

        return () => {
          element.removeEventListener('keydown', handleTabKey);
        };
      };

      // Apply focus trap to modals
      const modals = document.querySelectorAll('[role="dialog"]');
      modals.forEach(modal => {
        trapFocus(modal as HTMLElement);
      });
    }

    // Screen reader announcements
    if (enableScreenReader) {
      const announceToScreenReader = (message: string) => {
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
                announceToScreenReader(`Page changed to: ${heading.textContent}`);
              }
            }
          }
        });
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });

      return () => {
        observer.disconnect();
      };
    }

    // Keyboard navigation enhancements
    if (enableKeyboardNavigation) {
      // Add keyboard shortcuts
      const handleKeyDown = (e: KeyboardEvent) => {
        // Alt + M: Focus main content
        if (e.altKey && e.key === 'm') {
          e.preventDefault();
          const mainContent = document.getElementById('main-content');
          if (mainContent) {
            mainContent.focus();
          }
        }

        // Alt + N: Focus navigation
        if (e.altKey && e.key === 'n') {
          e.preventDefault();
          const navigation = document.querySelector('nav');
          if (navigation) {
            const firstLink = navigation.querySelector('a');
            if (firstLink) {
              (firstLink as HTMLElement).focus();
            }
          }
        }

        // Alt + S: Focus search
        if (e.altKey && e.key === 's') {
          e.preventDefault();
          const searchInput = document.querySelector('input[type="search"]');
          if (searchInput) {
            (searchInput as HTMLElement).focus();
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [enableKeyboardNavigation, enableScreenReader, enableHighContrast, enableFocusManagement]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;