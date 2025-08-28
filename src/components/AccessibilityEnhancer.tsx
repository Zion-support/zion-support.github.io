import React, { useEffect, useRef, useState } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  focusVisible: boolean;
}

export const AccessibilityEnhancer: React.FC = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    focusVisible: false
  });
  
  const focusTrapRef = useRef<HTMLDivElement>(null);
  const skipLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Check user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    setSettings(prev => ({
      ...prev,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast
    }));

    // Apply accessibility settings to document
    const root = document.documentElement;
    
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    if (settings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }
    
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    if (settings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  }, [settings]);

  // Keyboard navigation enhancement
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey === false) {
        const skipLink = skipLinkRef.current;
        if (skipLink && document.activeElement === document.body) {
          skipLink.focus();
        }
      }

      // Focus trap for modals
      if (event.key === 'Tab') {
        const focusableElements = focusTrapRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        if (focusableElements && focusableElements.length > 0) {
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
          
          if (event.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              event.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              event.preventDefault();
            }
          }
        }
      }

      // Escape key handling
      if (event.key === 'Escape') {
        const modals = document.querySelectorAll('[role="dialog"]');
        const openModal = Array.from(modals).find(modal => 
          modal.getAttribute('aria-hidden') !== 'true'
        );
        
        if (openModal) {
          const closeButton = openModal.querySelector('[aria-label*="close"], [aria-label*="Close"]');
          if (closeButton instanceof HTMLElement) {
            closeButton.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Screen reader announcements
  useEffect(() => {
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
        if (mutation.type === 'childList') {
          const addedNodes = Array.from(mutation.addedNodes);
          const heading = addedNodes.find(node => 
            node.nodeType === Node.ELEMENT_NODE && 
            (node as Element).tagName?.match(/^H[1-6]$/)
          );
          
          if (heading) {
            announceToScreenReader(`Navigated to ${(heading as Element).textContent}`);
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
  }, []);

  // Focus management
  useEffect(() => {
    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      
      // Add focus indicator
      target.classList.add('focused');
      
      // Announce focus changes for screen readers
      if (target.getAttribute('aria-label')) {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.className = 'sr-only';
        announcement.textContent = `Focused on ${target.getAttribute('aria-label')}`;
        document.body.appendChild(announcement);
        
        setTimeout(() => {
          document.body.removeChild(announcement);
        }, 1000);
      }
    };

    const handleFocusOut = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      target.classList.remove('focused');
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);
    
    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, []);

  // ARIA enhancements
  useEffect(() => {
    // Add missing ARIA labels
    const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    buttons.forEach((button, index) => {
      if (!button.textContent?.trim()) {
        button.setAttribute('aria-label', `Button ${index + 1}`);
      }
    });

    // Add missing ARIA descriptions for form fields
    const inputs = document.querySelectorAll('input:not([aria-describedby])');
    inputs.forEach((input) => {
      const label = input.closest('label');
      if (label) {
        const description = label.querySelector('.description, .help-text');
        if (description) {
          const id = `desc-${Math.random().toString(36).substr(2, 9)}`;
          description.id = id;
          input.setAttribute('aria-describedby', id);
        }
      }
    });
  }, []);

  // High contrast mode toggle
  const toggleHighContrast = () => {
    setSettings(prev => ({
      ...prev,
      highContrast: !prev.highContrast
    }));
  };

  // Large text mode toggle
  const toggleLargeText = () => {
    setSettings(prev => ({
      ...prev,
      largeText: !prev.largeText
    }));
  };

  // Focus visible mode toggle
  const toggleFocusVisible = () => {
    setSettings(prev => ({
      ...prev,
      focusVisible: !prev.focusVisible
    }));
  };

  return (
    <>
      {/* Skip to main content link */}
      <a
        ref={skipLinkRef}
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>

      {/* Accessibility controls */}
      <div className="fixed top-4 right-4 bg-white/90 backdrop-blur-sm border border-gray-300 rounded-lg p-4 shadow-lg z-40">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Accessibility</h3>
        <div className="space-y-2">
          <button
            onClick={toggleHighContrast}
            className={`w-full px-3 py-2 text-xs rounded ${
              settings.highContrast 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700'
            }`}
            aria-label={`${settings.highContrast ? 'Disable' : 'Enable'} high contrast mode`}
          >
            High Contrast
          </button>
          
          <button
            onClick={toggleLargeText}
            className={`w-full px-3 py-2 text-xs rounded ${
              settings.largeText 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700'
            }`}
            aria-label={`${settings.largeText ? 'Disable' : 'Enable'} large text mode`}
          >
            Large Text
          </button>
          
          <button
            onClick={toggleFocusVisible}
            className={`w-full px-3 py-2 text-xs rounded ${
              settings.focusVisible 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700'
            }`}
            aria-label={`${settings.focusVisible ? 'Disable' : 'Enable'} focus indicators`}
          >
            Focus Indicators
          </button>
        </div>
      </div>

      {/* Focus trap reference */}
      <div ref={focusTrapRef} className="sr-only" />
    </>
  );
};
