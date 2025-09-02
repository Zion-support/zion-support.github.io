import React, { useEffect, useCallback } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  // Add keyboard navigation improvements
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    // Skip to main content with Tab key
    if (event.key === 'Tab' && !event.shiftKey) {
      const skipLink = document.getElementById('skip-to-main');
      if (skipLink && document.activeElement === document.body) {
        skipLink.focus();
      }
    }

    // Escape key to close modals/dropdowns
    if (event.key === 'Escape') {
      const activeModal = document.querySelector('[role="dialog"]:not([aria-hidden="true"])');
      if (activeModal) {
        const closeButton = activeModal.querySelector('[aria-label*="close"], [aria-label*="Close"]');
        if (closeButton && closeButton instanceof HTMLElement) {
          closeButton.click();
        }
      }
    }

    // Arrow keys for navigation
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      const focusedElement = document.activeElement;
      if (focusedElement && focusedElement.getAttribute('role') === 'menuitem') {
        event.preventDefault();
        const menuItems = Array.from(document.querySelectorAll('[role="menuitem"]'));
        const currentIndex = menuItems.indexOf(focusedElement);
        const nextIndex = event.key === 'ArrowDown' 
          ? (currentIndex + 1) % menuItems.length
          : (currentIndex - 1 + menuItems.length) % menuItems.length;
        
        const nextItem = menuItems[nextIndex] as HTMLElement;
        if (nextItem) {
          nextItem.focus();
        }
      }
    }
  }, []);

  // Add focus indicators and accessibility styles
  const addAccessibilityStyles = useCallback(() => {
    const style = document.createElement('style');
    style.textContent = `
      /* Focus indicators */
      *:focus {
        outline: 2px solid #0ea5e9 !important;
        outline-offset: 2px !important;
        box-shadow: 0 0 0 4px rgba(14, 165, 233, 0.2) !important;
      }
      
      /* Skip link */
      .skip-link {
        position: absolute;
        top: -40px;
        left: 6px;
        background: #0ea5e9;
        color: white;
        padding: 12px 16px;
        text-decoration: none;
        border-radius: 6px;
        z-index: 1000;
        font-weight: 600;
        transition: top 0.2s ease;
      }
      
      .skip-link:focus {
        top: 6px;
      }
      
      /* High contrast mode support */
      @media (prefers-contrast: high) {
        *:focus {
          outline: 3px solid #000 !important;
          outline-offset: 2px !important;
        }
      }
      
      /* Reduced motion support */
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
      
      /* Screen reader only content */
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
      
      /* Focus visible for better keyboard navigation */
      .focus-visible:focus {
        outline: 2px solid #0ea5e9 !important;
        outline-offset: 2px !important;
      }
    `;
    document.head.appendChild(style);
  }, []);

  // Add skip link
  const addSkipLink = useCallback(() => {
    if (!document.getElementById('skip-to-main')) {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'skip-link';
      skipLink.id = 'skip-to-main';
      document.body.insertBefore(skipLink, document.body.firstChild);
    }
  }, []);

  // Add ARIA landmarks
  const addAriaLandmarks = useCallback(() => {
    // Add main landmark if not present
    const mainContent = document.getElementById('main-content');
    if (mainContent && !mainContent.getAttribute('role')) {
      mainContent.setAttribute('role', 'main');
    }

    // Add navigation landmarks
    const navElements = document.querySelectorAll('nav');
    navElements.forEach((nav, index) => {
      if (!nav.getAttribute('aria-label') && !nav.getAttribute('aria-labelledby')) {
        nav.setAttribute('aria-label', `Navigation ${index + 1}`);
      }
    });

    // Add heading hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach((heading, index) => {
      if (!heading.id) {
        const text = heading.textContent?.toLowerCase().replace(/\s+/g, '-') || `heading-${index}`;
        heading.id = text;
      }
    });
  }, []);

  // Add live region for announcements
  const addLiveRegion = useCallback(() => {
    if (!document.getElementById('live-region')) {
      const liveRegion = document.createElement('div');
      liveRegion.id = 'live-region';
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      document.body.appendChild(liveRegion);
    }
  }, []);

  // Announce page changes
  const announcePageChange = useCallback((message: string) => {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
    }
  }, []);

  // Add form accessibility improvements
  const enhanceFormAccessibility = useCallback(() => {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      // Add required field indicators
      const requiredFields = form.querySelectorAll('[required]');
      requiredFields.forEach(field => {
        const label = form.querySelector(`label[for="${field.id}"]`);
        if (label && !label.textContent?.includes('*')) {
          label.innerHTML += ' <span aria-label="required">*</span>';
        }
      });

      // Add error message associations
      const errorMessages = form.querySelectorAll('.error-message, .field-error');
      errorMessages.forEach(error => {
        const fieldId = error.getAttribute('data-field');
        if (fieldId) {
          const field = form.querySelector(`#${fieldId}`);
          if (field) {
            const errorId = error.id || `error-${fieldId}`;
            error.id = errorId;
            field.setAttribute('aria-describedby', errorId);
            field.setAttribute('aria-invalid', 'true');
          }
        }
      });
    });
  }, []);

  // Initialize all accessibility features
  useEffect(() => {
    addAccessibilityStyles();
    addSkipLink();
    addAriaLandmarks();
    addLiveRegion();
    enhanceFormAccessibility();
    
    document.addEventListener('keydown', handleKeyDown);

    // Re-run enhancements when DOM changes
    const observer = new MutationObserver(() => {
      addAriaLandmarks();
      enhanceFormAccessibility();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      observer.disconnect();
    };
  }, [addAccessibilityStyles, addSkipLink, addAriaLandmarks, addLiveRegion, enhanceFormAccessibility, handleKeyDown]);

  // Expose announce function globally for use in other components
  useEffect(() => {
    (window as any).announceToScreenReader = announcePageChange;
  }, [announcePageChange]);

  return null;
};

export default AccessibilityEnhancer;