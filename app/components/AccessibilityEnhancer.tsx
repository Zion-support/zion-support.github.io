'use client';
import React, { useEffect, useCallback } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  const addFocusManagement = useCallback(() => {
    // Add focus management for modals and dropdowns
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    
    const trapFocus = (element: HTMLElement) => {
      const focusableContent = element.querySelectorAll(focusableElements);
      const firstFocusableElement = focusableContent[0] as HTMLElement;
      const lastFocusableElement = focusableContent[focusableContent.length - 1] as HTMLElement;

      element.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
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
      });
    };

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    // Apply focus trapping to modals
    const modals = document.querySelectorAll('[role="dialog"], [role="modal"]');
    modals.forEach(modal => trapFocus(modal as HTMLElement));

    // Add ARIA live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);

    // Add color blind support
    const colorBlindSupport = () => {
      const style = document.createElement('style');
      style.textContent = `
        .color-blind-protanopia {
          filter: hue-rotate(90deg) saturate(1.2);
        }
        .color-blind-deuteranopia {
          filter: hue-rotate(180deg) saturate(1.2);
        }
        .color-blind-tritanopia {
          filter: hue-rotate(270deg) saturate(1.2);
        }
      `;
      document.head.appendChild(style);
    };

    colorBlindSupport();

    // Add screen reader announcements
    const announceToScreenReader = (message: string) => {
      const liveRegion = document.getElementById('live-region');
      if (liveRegion) {
        liveRegion.textContent = message;
      }
    };

    // Make announcements available globally
    (window as unknown as { announceToScreenReader: (message: string) => void }).announceToScreenReader = announceToScreenReader;

    // Add keyboard shortcuts
    const handleKeyboardShortcuts = (e: KeyboardEvent) => {
      // Alt + 1: Skip to main content
      if (e.altKey && e.key === '1') {
        e.preventDefault();
        const mainContent = document.querySelector('main, [role="main"]');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
          mainContent.scrollIntoView();
        }
      }

      // Alt + 2: Skip to navigation
      if (e.altKey && e.key === '2') {
        e.preventDefault();
        const navigation = document.querySelector('nav, [role="navigation"]');
        if (navigation) {
          (navigation as HTMLElement).focus();
          navigation.scrollIntoView();
        }
      }

      // Alt + 3: Skip to footer
      if (e.altKey && e.key === '3') {
        e.preventDefault();
        const footer = document.querySelector('footer, [role="contentinfo"]');
        if (footer) {
          (footer as HTMLElement).focus();
          footer.scrollIntoView();
        }
      }
    };

    document.addEventListener('keydown', handleKeyboardShortcuts);

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('keydown', handleKeyboardShortcuts);
      
      const skipLink = document.querySelector('a[href="#main-content"]');
      if (skipLink) {
        skipLink.remove();
      }
      
      const liveRegion = document.getElementById('live-region');
      if (liveRegion) {
        liveRegion.remove();
      }
    };
  }, []);

  const addKeyboardNavigation = useCallback(() => {
    // Add keyboard navigation for custom components
    const customButtons = document.querySelectorAll('[data-custom-button]');
    
    customButtons.forEach(button => {
      button.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          (button as HTMLElement).click();
        }
      });
    });
  }, []);

  const addAriaLabels = useCallback(() => {
    // Add missing ARIA labels to interactive elements
    const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    buttons.forEach(button => {
      const text = button.textContent?.trim();
      if (text && text.length > 0) {
        button.setAttribute('aria-label', text);
      }
    });

    const links = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
    links.forEach(link => {
      const text = link.textContent?.trim();
      if (text && text.length > 0) {
        link.setAttribute('aria-label', text);
      }
    });
  }, []);

  const addSkipLinks = useCallback(() => {
    // Add skip links for better navigation
    if (!document.querySelector('.skip-link')) {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);
    }
  }, []);

  const enhanceColorContrast = useCallback(() => {
    // Check and enhance color contrast
    const elements = document.querySelectorAll('*');
    elements.forEach(element => {
      const styles = window.getComputedStyle(element);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;
      
      // Simple contrast check (this is a basic implementation)
      if (color && backgroundColor && color !== backgroundColor) {
        // Add high contrast mode toggle
        if (!document.querySelector('.contrast-toggle')) {
          const toggle = document.createElement('button');
          toggle.textContent = 'High Contrast';
          toggle.className = 'contrast-toggle fixed bottom-4 right-4 bg-yellow-600 text-black px-3 py-2 rounded text-sm z-50';
          toggle.addEventListener('click', () => {
            document.body.classList.toggle('high-contrast');
          });
          document.body.appendChild(toggle);
        }
      }
    });
  }, []);

  const addScreenReaderSupport = useCallback(() => {
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
  }, []);

  useEffect(() => {
    // Run all accessibility enhancements
    addFocusManagement();
    addKeyboardNavigation();
    addAriaLabels();
    addSkipLinks();
    enhanceColorContrast();
    addScreenReaderSupport();

    // Re-run on DOM changes
    const observer = new MutationObserver(() => {
      addFocusManagement();
      addKeyboardNavigation();
      addAriaLabels();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
    };
  }, [addFocusManagement, addKeyboardNavigation, addAriaLabels, addSkipLinks, enhanceColorContrast, addScreenReaderSupport]);

  return null; // This component doesn't render anything
};

export default AccessibilityEnhancer;
