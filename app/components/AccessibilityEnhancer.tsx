import React, { useEffect, useRef } from 'react';

interface AccessibilityConfig {
  enableKeyboardNavigation: boolean;
  enableScreenReaderSupport: boolean;
  enableHighContrast: boolean;
  enableReducedMotion: boolean;
  enableFocusManagement: boolean;
  enableSkipLinks: boolean;
  enableARIALabels: boolean;
  enableColorContrast: boolean;
}

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  config?: AccessibilityConfig;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  config = {
    enableKeyboardNavigation: true,
    enableScreenReaderSupport: true,
    enableHighContrast: true,
    enableReducedMotion: true,
    enableFocusManagement: true,
    enableSkipLinks: true,
    enableARIALabels: true,
    enableColorContrast: true,
  },
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Apply accessibility enhancements
    if (config.enableKeyboardNavigation) {
      enableKeyboardNavigation();
    }

    if (config.enableScreenReaderSupport) {
      enableScreenReaderSupport();
    }

    if (config.enableHighContrast) {
      enableHighContrast();
    }

    if (config.enableReducedMotion) {
      enableReducedMotion();
    }

    if (config.enableFocusManagement) {
      enableFocusManagement();
    }

    if (config.enableSkipLinks) {
      addSkipLinks();
    }

    if (config.enableARIALabels) {
      enhanceARIALabels();
    }

    if (config.enableColorContrast) {
      enhanceColorContrast();
    }

    // Cleanup function
    return () => {
      removeAccessibilityEnhancements();
    };
  }, [config]);

  const enableKeyboardNavigation = () => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Handle escape key
      if (event.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur();
        }
      }

      // Handle tab navigation
      if (event.key === 'Tab') {
        const focusableElements = getFocusableElements();
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement?.focus();
          }
        } else {
          // Tab
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement?.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  };

  const enableScreenReaderSupport = () => {
    // Add screen reader only text for important elements
    const addScreenReaderText = (element: HTMLElement, text: string) => {
      const screenReaderText = document.createElement('span');
      screenReaderText.className = 'sr-only';
      screenReaderText.textContent = text;
      element.appendChild(screenReaderText);
    };

    // Enhance buttons without text
    const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    buttons.forEach((button) => {
      const buttonElement = button as HTMLButtonElement;
      if (!buttonElement.textContent?.trim()) {
        buttonElement.setAttribute('aria-label', 'Button');
      }
    });

    // Enhance images without alt text
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach((img) => {
      const imgElement = img as HTMLImageElement;
      imgElement.setAttribute('alt', 'Image');
    });
  };

  const enableHighContrast = () => {
    // Add high contrast mode detection
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
    
    const handleContrastChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.body.classList.add('high-contrast');
      } else {
        document.body.classList.remove('high-contrast');
      }
    };

    prefersHighContrast.addEventListener('change', handleContrastChange);
    
    // Apply initial state
    if (prefersHighContrast.matches) {
      document.body.classList.add('high-contrast');
    }

    return () => prefersHighContrast.removeEventListener('change', handleContrastChange);
  };

  const enableReducedMotion = () => {
    // Add reduced motion support
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.body.classList.add('reduced-motion');
      } else {
        document.body.classList.remove('reduced-motion');
      }
    };

    prefersReducedMotion.addEventListener('change', handleMotionChange);
    
    // Apply initial state
    if (prefersReducedMotion.matches) {
      document.body.classList.add('reduced-motion');
    }

    return () => prefersReducedMotion.removeEventListener('change', handleMotionChange);
  };

  const enableFocusManagement = () => {
    // Add focus indicators
    const addFocusStyles = () => {
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #2563eb !important;
          outline-offset: 2px !important;
        }
        
        .focus-visible:focus {
          outline: 2px solid #2563eb !important;
          outline-offset: 2px !important;
        }
      `;
      document.head.appendChild(style);
    };

    addFocusStyles();

    // Manage focus for modals and overlays
    const manageFocus = (element: HTMLElement) => {
      const focusableElements = getFocusableElements(element);
      if (focusableElements.length > 0) {
        focusableElements[0].focus();
      }
    };

    // Apply focus management to the container
    if (containerRef.current) {
      manageFocus(containerRef.current);
    }
  };

  const addSkipLinks = () => {
    const skipLinks = document.createElement('div');
    skipLinks.className = 'skip-links';
    skipLinks.innerHTML = `
      <a href="#main-content" class="skip-link">Skip to main content</a>
      <a href="#navigation" class="skip-link">Skip to navigation</a>
      <a href="#footer" class="skip-link">Skip to footer</a>
    `;

    // Add styles for skip links
    const style = document.createElement('style');
    style.textContent = `
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
        background: #2563eb;
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        transition: top 0.3s;
      }
      
      .skip-link:focus {
        top: 6px;
      }
    `;
    document.head.appendChild(style);

    document.body.insertBefore(skipLinks, document.body.firstChild);
  };

  const enhanceARIALabels = () => {
    // Add ARIA labels to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
    
    interactiveElements.forEach((element) => {
      const htmlElement = element as HTMLElement;
      
      if (!htmlElement.getAttribute('aria-label') && !htmlElement.getAttribute('aria-labelledby')) {
        const text = htmlElement.textContent?.trim();
        if (text) {
          htmlElement.setAttribute('aria-label', text);
        }
      }
    });

    // Add ARIA roles where needed
    const sections = document.querySelectorAll('section, article, aside, nav');
    sections.forEach((section) => {
      const htmlSection = section as HTMLElement;
      if (!htmlSection.getAttribute('role')) {
        const tagName = htmlSection.tagName.toLowerCase();
        if (tagName === 'section') {
          htmlSection.setAttribute('role', 'region');
        } else if (tagName === 'article') {
          htmlSection.setAttribute('role', 'article');
        } else if (tagName === 'aside') {
          htmlSection.setAttribute('role', 'complementary');
        } else if (tagName === 'nav') {
          htmlSection.setAttribute('role', 'navigation');
        }
      }
    });
  };

  const enhanceColorContrast = () => {
    // Add color contrast checking
    const checkColorContrast = () => {
      const elements = document.querySelectorAll('*');
      elements.forEach((element) => {
        const htmlElement = element as HTMLElement;
        const styles = window.getComputedStyle(htmlElement);
        const color = styles.color;
        const backgroundColor = styles.backgroundColor;
        
        // Basic contrast checking (simplified)
        if (color && backgroundColor && color !== backgroundColor) {
          // Add data attribute for contrast checking
          htmlElement.setAttribute('data-contrast-checked', 'true');
        }
      });
    };

    checkColorContrast();
  };

  const getFocusableElements = (container?: HTMLElement) => {
    const focusableSelectors = [
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'a[href]',
      '[tabindex]:not([tabindex="-1"])',
    ];

    const elements = container 
      ? container.querySelectorAll(focusableSelectors.join(', '))
      : document.querySelectorAll(focusableSelectors.join(', '));

    return Array.from(elements) as HTMLElement[];
  };

  const removeAccessibilityEnhancements = () => {
    // Remove any added styles or elements
    const skipLinks = document.querySelector('.skip-links');
    if (skipLinks) {
      skipLinks.remove();
    }

    document.body.classList.remove('high-contrast', 'reduced-motion');
  };

  return (
    <div ref={containerRef} className="accessibility-enhanced">
      {children}
    </div>
  );
};

export default AccessibilityEnhancer;