import React, { useEffect, useRef } from 'react';

interface AccessibilityEnhancerProps {
  enableSkipLinks?: boolean;
  enableFocusIndicators?: boolean;
  enableHighContrast?: boolean;
  enableReducedMotion?: boolean;
}

export function AccessibilityEnhancer({
  enableSkipLinks = true,
  enableFocusIndicators = true,
  enableHighContrast = false,
  enableReducedMotion = false
}: AccessibilityEnhancerProps) {
  const skipLinksRef = useRef<HTMLDivElement>(null);
  const focusableElementsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    // Initialize accessibility features
    initializeAccessibility();
    
    // Cleanup function
    return () => {
      cleanupAccessibility();
    };
  }, []);

  const initializeAccessibility = () => {
    // Add skip links
    if (enableSkipLinks) {
      addSkipLinks();
    }

    // Enhance focus indicators
    if (enableFocusIndicators) {
      enhanceFocusIndicators();
    }

    // Add ARIA labels to interactive elements
    addARIALabels();

    // Enhance keyboard navigation
    enhanceKeyboardNavigation();

    // Add high contrast mode
    if (enableHighContrast) {
      enableHighContrastMode();
    }

    // Handle reduced motion preferences
    if (enableReducedMotion) {
      handleReducedMotion();
    }

    // Add focus management
    setupFocusManagement();
  };

  const addSkipLinks = () => {
    if (!skipLinksRef.current) return;

    const skipLinks = [
      { href: '#main-content', text: 'Skip to main content' },
      { href: '#navigation', text: 'Skip to navigation' },
      { href: '#footer', text: 'Skip to footer' }
    ];

    skipLinks.forEach(({ href, text }) => {
      const link = document.createElement('a');
      link.href = href;
      link.textContent = text;
      link.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      skipLinksRef.current?.appendChild(link);
    });
  };

  const enhanceFocusIndicators = () => {
    // Add custom focus styles
    const style = document.createElement('style');
    style.textContent = `
      .focus-visible {
        outline: 2px solid #3b82f6 !important;
        outline-offset: 2px !important;
        border-radius: 4px !important;
      }
      
      .focus-ring {
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5) !important;
      }
      
      button:focus-visible,
      a:focus-visible,
      input:focus-visible,
      select:focus-visible,
      textarea:focus-visible {
        outline: 2px solid #3b82f6 !important;
        outline-offset: 2px !important;
      }
    `;
    document.head.appendChild(style);

    // Add focus-visible class to elements
    const focusableElements = document.querySelectorAll(
      'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    focusableElements.forEach((element) => {
      element.addEventListener('focus', () => {
        element.classList.add('focus-visible');
      });
      
      element.addEventListener('blur', () => {
        element.classList.remove('focus-visible');
      });
    });
  };

  const addARIALabels = () => {
    // Add ARIA labels to buttons without text
    const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    buttons.forEach((button) => {
      const icon = button.querySelector('svg, i');
      if (icon && !button.textContent?.trim()) {
        const title = button.title || icon.getAttribute('aria-label') || 'Button';
        button.setAttribute('aria-label', title);
      }
    });

    // Add ARIA labels to form inputs
    const inputs = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
    inputs.forEach((input) => {
      const label = input.closest('label');
      if (label && !input.getAttribute('aria-label')) {
        const labelText = label.textContent?.trim();
        if (labelText) {
          input.setAttribute('aria-label', labelText);
        }
      }
    });

    // Add ARIA labels to navigation
    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('aria-label')) {
      nav.setAttribute('aria-label', 'Main navigation');
    }

    // Add ARIA labels to sections
    const sections = document.querySelectorAll('section:not([aria-label]):not([aria-labelledby])');
    sections.forEach((section, index) => {
      const heading = section.querySelector('h1, h2, h3, h4, h5, h6');
      if (heading && !section.getAttribute('aria-label')) {
        section.setAttribute('aria-label', heading.textContent || `Section ${index + 1}`);
      }
    });
  };

  const enhanceKeyboardNavigation = () => {
    // Enhanced tab navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    // Escape key handling
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        // Close modals, dropdowns, etc.
        const modals = document.querySelectorAll('[data-modal]');
        modals.forEach((modal) => {
          if (modal.classList.contains('open')) {
            modal.classList.remove('open');
            modal.setAttribute('aria-hidden', 'true');
          }
        });

        // Close dropdowns
        const dropdowns = document.querySelectorAll('[data-dropdown]');
        dropdowns.forEach((dropdown) => {
          if (dropdown.classList.contains('open')) {
            dropdown.classList.remove('open');
            dropdown.setAttribute('aria-expanded', 'false');
          }
        });
      }
    });

    // Arrow key navigation for custom components
    document.addEventListener('keydown', (e) => {
      const target = e.target as HTMLElement;
      
      if (target.closest('[role="tablist"]')) {
        handleTabNavigation(e, target);
      }
      
      if (target.closest('[role="menu"]')) {
        handleMenuNavigation(e, target);
      }
    });
  };

  const handleTabNavigation = (e: KeyboardEvent, target: HTMLElement) => {
    const tablist = target.closest('[role="tablist"]');
    if (!tablist) return;

    const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));
    const currentIndex = tabs.findIndex(tab => tab === target || tab.contains(target));
    
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (currentIndex + 1) % tabs.length;
      (tabs[nextIndex] as HTMLElement).focus();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = currentIndex === 0 ? tabs.length - 1 : currentIndex - 1;
      (tabs[prevIndex] as HTMLElement).focus();
    }
  };

  const handleMenuNavigation = (e: KeyboardEvent, target: HTMLElement) => {
    const menu = target.closest('[role="menu"]');
    if (!menu) return;

    const menuItems = Array.from(menu.querySelectorAll('[role="menuitem"]'));
    const currentIndex = menuItems.findIndex(item => item === target || item.contains(target));
    
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (currentIndex + 1) % menuItems.length;
      (menuItems[nextIndex] as HTMLElement).focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = currentIndex === 0 ? menuItems.length - 1 : currentIndex - 1;
      (menuItems[prevIndex] as HTMLElement).focus();
    }
  };

  const enableHighContrastMode = () => {
    const style = document.createElement('style');
    style.textContent = `
      .high-contrast {
        filter: contrast(150%) brightness(110%) !important;
      }
      
      .high-contrast * {
        border-color: #000000 !important;
      }
      
      .high-contrast button,
      .high-contrast a {
        background-color: #000000 !important;
        color: #ffffff !important;
        border: 2px solid #ffffff !important;
      }
    `;
    document.head.appendChild(style);
    document.body.classList.add('high-contrast');
  };

  const handleReducedMotion = () => {
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      const style = document.createElement('style');
      style.textContent = `
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      `;
      document.head.appendChild(style);
    }
  };

  const setupFocusManagement = () => {
    // Trap focus in modals
    const modals = document.querySelectorAll('[data-modal]');
    modals.forEach((modal) => {
      const focusableElements = modal.querySelectorAll(
        'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements.length > 0) {
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
        
        modal.addEventListener('keydown', (e) => {
          if (e.key === 'Tab') {
            if (e.shiftKey) {
              if (document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
              }
            } else {
              if (document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
              }
            }
          }
        });
      }
    });

    // Return focus when modal closes
    const modalTriggers = document.querySelectorAll('[data-modal-trigger]');
    modalTriggers.forEach((trigger) => {
      const modalId = trigger.getAttribute('data-modal-trigger');
      const modal = document.querySelector(`[data-modal="${modalId}"]`);
      
      if (modal) {
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'aria-hidden') {
              const isHidden = modal.getAttribute('aria-hidden') === 'true';
              if (isHidden && document.activeElement === modal) {
                (trigger as HTMLElement).focus();
              }
            }
          });
        });
        
        observer.observe(modal, { attributes: true });
      }
    });
  };

  const cleanupAccessibility = () => {
    // Remove event listeners and styles
    document.body.classList.remove('keyboard-navigation', 'high-contrast');
    
    // Remove custom styles
    const customStyles = document.querySelectorAll('style[data-accessibility]');
    customStyles.forEach(style => style.remove());
  };

  return (
    <div ref={skipLinksRef} className="accessibility-enhancer">
      {/* Skip links will be dynamically added here */}
    </div>
  );
}
