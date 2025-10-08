import React, { useEffect, useCallback } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  const enhanceAccessibility = useCallback(() => {
    // Add skip links
    const addSkipLinks = () => {
      const skipLinks = document.querySelector('.skip-links');
      if (!skipLinks) {
        const skipLinksContainer = document.createElement('div');
        skipLinksContainer.className = 'skip-links';
        skipLinksContainer.innerHTML = `
          <a href="#main-content" class="skip-link">Skip to main content</a>
          <a href="#navigation" class="skip-link">Skip to navigation</a>
          <a href="#footer" class="skip-link">Skip to footer</a>
        `;
        document.body.insertBefore(skipLinksContainer, document.body.firstChild);
      }
    };

    // Add ARIA labels to interactive elements
    const addAriaLabels = () => {
      // Add ARIA labels to buttons without text
      const iconButtons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
      iconButtons.forEach((button, index) => {
        const icon = button.querySelector('svg, i, [class*="icon"]');
        if (icon && !button.textContent?.trim()) {
          button.setAttribute('aria-label', `Button ${index + 1}`);
        }
      });

      // Add ARIA labels to links without text
      const iconLinks = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
      iconLinks.forEach((link, index) => {
        const icon = link.querySelector('svg, i, [class*="icon"]');
        if (icon && !link.textContent?.trim()) {
          link.setAttribute('aria-label', `Link ${index + 1}`);
        }
      });
    };

    // Enhance form accessibility
    const enhanceForms = () => {
      const forms = document.querySelectorAll('form');
      forms.forEach(form => {
        // Add required field indicators
        const requiredFields = form.querySelectorAll('input[required], select[required], textarea[required]');
        requiredFields.forEach(field => {
          const label = form.querySelector(`label[for="${field.id}"]`);
          if (label && !label.textContent?.includes('*')) {
            label.innerHTML += ' <span class="required" aria-label="required">*</span>';
          }
        });

        // Add error messages container
        const errorContainer = form.querySelector('.error-messages');
        if (!errorContainer) {
          const errorDiv = document.createElement('div');
          errorDiv.className = 'error-messages';
          errorDiv.setAttribute('aria-live', 'polite');
          errorDiv.setAttribute('aria-atomic', 'true');
          form.appendChild(errorDiv);
        }
      });
    };

    // Add focus management
    const enhanceFocusManagement = () => {
      // Add focus indicators
      const style = document.createElement('style');
      style.textContent = `
        .focus-visible:focus {
          outline: 2px solid #4f46e5 !important;
          outline-offset: 2px !important;
        }
        
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #000;
          color: #fff;
          padding: 8px;
          text-decoration: none;
          z-index: 1000;
          border-radius: 4px;
        }
        
        .skip-link:focus {
          top: 6px;
        }
        
        .required {
          color: #ef4444;
          font-weight: bold;
        }
      `;
      document.head.appendChild(style);

      // Add focus-visible polyfill
      if (!document.querySelector('script[src*="focus-visible"]')) {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/focus-visible@5.2.0/dist/focus-visible.min.js';
        script.async = true;
        document.head.appendChild(script);
      }
    };

    // Add keyboard navigation enhancements
    const enhanceKeyboardNavigation = () => {
      // Add tabindex to interactive elements
      const interactiveElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]');
      interactiveElements.forEach(element => {
        if (!element.hasAttribute('tabindex')) {
          element.setAttribute('tabindex', '0');
        }
      });

      // Add keyboard event handlers for custom components
      const customComponents = document.querySelectorAll('[role="button"], [role="tab"], [role="menuitem"]');
      customComponents.forEach(component => {
        component.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            (component as HTMLElement).click();
          }
        });
      });
    };

    // Add screen reader announcements
    const addScreenReaderAnnouncements = () => {
      const announcementContainer = document.querySelector('.sr-announcements');
      if (!announcementContainer) {
        const announcementDiv = document.createElement('div');
        announcementDiv.className = 'sr-announcements';
        announcementDiv.setAttribute('aria-live', 'polite');
        announcementDiv.setAttribute('aria-atomic', 'true');
        announcementDiv.style.position = 'absolute';
        announcementDiv.style.left = '-10000px';
        announcementDiv.style.width = '1px';
        announcementDiv.style.height = '1px';
        announcementDiv.style.overflow = 'hidden';
        document.body.appendChild(announcementDiv);
      }
    };

    // Run all enhancements
    addSkipLinks();
    addAriaLabels();
    enhanceForms();
    enhanceFocusManagement();
    enhanceKeyboardNavigation();
    addScreenReaderAnnouncements();
  }, []);

  useEffect(() => {
    // Run enhancements on mount
    enhanceAccessibility();

    // Re-run enhancements when DOM changes
    const observer = new MutationObserver(() => {
      enhanceAccessibility();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class', 'id', 'role', 'aria-label']
    });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, [enhanceAccessibility]);

  // Add keyboard shortcuts
  useEffect(() => {
    const handleKeyboardShortcuts = (e: KeyboardEvent) => {
      // Alt + M: Skip to main content
      if (e.altKey && e.key === 'm') {
        e.preventDefault();
        const mainContent = document.querySelector('#main-content');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: 'smooth' });
        }
      }

      // Alt + N: Skip to navigation
      if (e.altKey && e.key === 'n') {
        e.preventDefault();
        const navigation = document.querySelector('#navigation');
        if (navigation) {
          navigation.focus();
          navigation.scrollIntoView({ behavior: 'smooth' });
        }
      }

      // Alt + F: Skip to footer
      if (e.altKey && e.key === 'f') {
        e.preventDefault();
        const footer = document.querySelector('footer');
        if (footer) {
          footer.focus();
          footer.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('keydown', handleKeyboardShortcuts);

    return () => {
      document.removeEventListener('keydown', handleKeyboardShortcuts);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default AccessibilityEnhancer;