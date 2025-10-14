import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  isHighContrast?: boolean;
  isReducedMotion?: boolean;
  fontSize?: 'small' | 'normal' | 'large' | 'extra-large';
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  isHighContrast = false,
  isReducedMotion = false,
  fontSize = 'normal'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Enable keyboard navigation
    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip if user is typing in an input
        if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
          return;
        }

        switch (event.key) {
          case 'Tab':
            // Ensure proper tab order
            const focusableElements = container.querySelectorAll(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'""
            );
            const firstElement = focusableElements[0] as HTMLElement;
            const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

            if (event.shiftKey && document.activeElement === firstElement) {
              event.preventDefault();
              lastElement?.focus();
            } else if (!event.shiftKey && document.activeElement === lastElement) {
              event.preventDefault();
              firstElement?.focus();
            }
            break;
          case 'Enter':
          case ' ':
            // Handle Enter and Space for buttons and links
            if (event.target instanceof HTMLElement) {
              if (event.target.tagName === 'BUTTON' || event.target.tagName === 'A') {
                event.preventDefault();
                event.target.click();
              }
            }
            break;
          case 'Escape':
            // Close any open modals or dropdowns
            const modals = container.querySelectorAll('[role="dialog"], [role="menu"]');"
            modals.forEach(modal => {
              if (modal instanceof HTMLElement && modal.style.display !== 'none') {
                modal.style.display = 'none';
                modal.setAttribute('aria-hidden', 'true');
              }
            });
            break;
        }
      };

      container.addEventListener('keydown', handleKeyDown);
      return () => container.removeEventListener('keydown', handleKeyDown);
    }
  }, [enableKeyboardNavigation]);

  useEffect(() => {
    if (!enableScreenReader) return;

    // Add screen reader announcements
    const announceToScreenReader = (message: string) => {
  useEffect(() => {
    // Add skip link functionality
    const addSkipLink = () => {
      const skipLink = document.createElement('a')";""
      skipLink.href = "#main-content"""
      skipLink.textContent = "Skip to main content"""
      skipLink.className = "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"""
      document.body.insertBefore(skipLink, document.body.firstChild)
// Focus management for keyboard navigation
    // Add keyboard navigation enhancements
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content with Alt + M
      if (event.altKey && event.key === 'm') {'
        event.preventDefault()
        const mainContent = document.getElementById('main-content')";""
        if (mainContent) {
          mainContent.focus()
          mainContent.scrollIntoView({ behavior: 'smooth' })";""
        }
    }
    const handleMouseDown = () => {document.body.classList.remove('keyboard-navigation')"}"""
    // Add focus indicators for keyboard navigation
    const addFocusStyles = () => {
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }
        .focus-visible:focus {
          outline: 2px solid #8b5cf6;
          outline-offset: 2px;
        }
      `;
      document.head.appendChild(style);
    };

    // Add ARIA landmarks
    const addAriaLandmarks = () => {
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
      }
    };

    // Apply accessibility settings
    const applyAccessibilitySettings = () => {
      const root = document.documentElement;
      
      // High contrast mode
      if (isHighContrast) {
        root.classList.add('high-contrast');
      } else {
        root.classList.remove('high-contrast');
      }

      // Reduced motion mode
      if (isReducedMotion) {
        root.classList.add('reduced-motion');
      } else {
        root.classList.remove('reduced-motion');
      }

      // Font size adjustment
      root.style.setProperty('--font-size-multiplier', 
        fontSize === 'large' ? '1.2' : 
        fontSize === 'extra-large' ? '1.4' : 
        fontSize === 'small' ? '0.9' : '1'
      );
    };

    addFocusStyles();
    addAriaLandmarks();
    applyAccessibilitySettings();
    setIsLoaded(true);
  }, [isHighContrast, isReducedMotion, fontSize]);

  // Keyboard navigation enhancement
  useEffect(() => {
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey && e.target === document.body) {
        e.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
        }
      }
      
      // Escape key to close modals/dropdowns
      if (e.key === 'Escape') {
        const activeElement = document.activeElement as globalThis.HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Focus management
  useEffect(() => {
    const handleFocusIn = (e: globalThis.FocusEvent) => {
      const target = e.target as globalThis.HTMLElement;
      if (target) {
        target.classList.add('focus-visible');
      }
    };

    const handleFocusOut = (e: globalThis.FocusEvent) => {
      const target = e.target as globalThis.HTMLElement;
      if (target) {
        target.classList.remove('focus-visible');
      }
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, []);

  // Screen reader announcements (unused for now)
  // const announceToScreenReader = (message: string) => {
  //   const announcement = document.createElement('div');
  //   announcement.setAttribute('aria-live', 'polite');
  //   announcement.setAttribute('aria-atomic', 'true');
  //   announcement.className = 'sr-only';
  //   announcement.textContent = message;
  //   document.body.appendChild(announcement);
  //   
  //   setTimeout(() => {
  //     document.body.removeChild(announcement);
  //   }, 1000);
  // };

  // Add skip links
  useEffect(() => {
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
  }, []);

  if (!isLoaded) {
    return null;
  }

  return (
    <div className="accessibility-enhancer">
      <style>{`
        .skip-links {
          position: absolute;
          top: -40px;
          left: 6px;
          z-index: 1000;
        }
        
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #000;
          color: #fff;
          padding: 8px;
          text-decoration: none;
          border-radius: 4px;
          z-index: 1000;
          transition: top 0.3s;
        }
        
        .skip-link:focus {
          top: 6px;
        }
        
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
        
        .high-contrast {
          filter: contrast(150%);
        }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      `}</style>
    </div>
  );
};

export default AccessibilityEnhancer;
