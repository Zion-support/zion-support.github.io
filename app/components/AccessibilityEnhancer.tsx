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

    // Apply focus trapping to modals
    const modals = document.querySelectorAll('[role="dialog"], [role="modal"]');
    modals.forEach(modal => trapFocus(modal as HTMLElement));
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
