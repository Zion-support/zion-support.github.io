'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { logger } from '../utils/productionLogger';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableARIALabels?: boolean;
  enableSkipLinks?: boolean;
}

const EnhancedAccessibility: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true,
  enableFocusManagement = true,
  enableARIALabels = true,
  enableSkipLinks = true
}) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);

  // Check for user preferences
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (!enableKeyboardNavigation || typeof window === 'undefined') return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.altKey) {
        event.preventDefault();
        const main = document.querySelector('main');
        if (main) {
          main.focus();
          main.scrollIntoView({ behavior: 'smooth' });
        }
      }

      // Escape key to close modals/dropdowns
      if (event.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.getAttribute('aria-expanded') === 'true') {
          activeElement.click();
        }
      }

      // Arrow keys for navigation
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        const focusableElements = document.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const currentIndex = Array.from(focusableElements).indexOf(document.activeElement as Element);
        
        if (currentIndex !== -1) {
          event.preventDefault();
          const nextIndex = event.key === 'ArrowDown' 
            ? Math.min(currentIndex + 1, focusableElements.length - 1)
            : Math.max(currentIndex - 1, 0);
          
          (focusableElements[nextIndex] as HTMLElement).focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation]);

  // Screen reader support
  useEffect(() => {
    if (!enableScreenReaderSupport || typeof window === 'undefined') return;

    // Add screen reader announcements
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
          const addedNode = mutation.addedNodes[0] as HTMLElement;
          if (addedNode.nodeType === Node.ELEMENT_NODE) {
            const heading = addedNode.querySelector('h1, h2, h3, h4, h5, h6');
            if (heading) {
              announceToScreenReader(`New section: ${heading.textContent}`);
            }
          }
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => observer.disconnect();
  }, [enableScreenReaderSupport]);

  // High contrast mode
  useEffect(() => {
    if (!enableHighContrast || typeof window === 'undefined') return;

    const toggleHighContrast = () => {
      setIsHighContrast(prev => {
        const newState = !prev;
        document.documentElement.classList.toggle('high-contrast', newState);
        logger.debug('High contrast mode toggled', { enabled: newState });
        return newState;
      });
    };

    // Add keyboard shortcut for high contrast (Ctrl+Shift+H)
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'H') {
        event.preventDefault();
        toggleHighContrast();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableHighContrast]);

  // Focus management
  useEffect(() => {
    if (!enableFocusManagement || typeof window === 'undefined') return;

    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      setCurrentFocus(target);
      
      // Add focus indicator
      target.classList.add('focus-visible');
      
      // Log focus for debugging
      logger.debug('Focus changed', { 
        element: target.tagName, 
        id: target.id, 
        className: target.className 
      });
    };

    const handleFocusOut = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      target.classList.remove('focus-visible');
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, [enableFocusManagement]);

  // ARIA labels enhancement
  useEffect(() => {
    if (!enableARIALabels || typeof window === 'undefined') return;

    const enhanceARIALabels = () => {
      // Add missing alt text to images
      const images = document.querySelectorAll('img:not([alt])');
      images.forEach((img, index) => {
        img.setAttribute('alt', `Image ${index + 1}`);
        logger.debug('Added alt text to image', { index: index + 1 });
      });

      // Add aria-labels to buttons without text
      const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
      buttons.forEach((button, index) => {
        const icon = button.querySelector('svg, i');
        if (icon && !button.textContent?.trim()) {
          button.setAttribute('aria-label', `Button ${index + 1}`);
          logger.debug('Added aria-label to button', { index: index + 1 });
        }
      });

      // Add role attributes where needed
      const clickableDivs = document.querySelectorAll('div[onclick]:not([role])');
      clickableDivs.forEach((div) => {
        div.setAttribute('role', 'button');
        div.setAttribute('tabindex', '0');
      });

      // Enhance form labels
      const inputs = document.querySelectorAll('input:not([aria-labelledby]):not([aria-label])');
      inputs.forEach((input) => {
        const label = document.querySelector(`label[for="${input.id}"]`);
        if (!label && !input.getAttribute('aria-label')) {
          input.setAttribute('aria-label', (input as HTMLInputElement).placeholder || 'Input field');
        }
      });
    };

    // Run enhancement on load and when DOM changes
    enhanceARIALabels();
    
    const observer = new MutationObserver(enhanceARIALabels);
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => observer.disconnect();
  }, [enableARIALabels]);

  // Skip links
  useEffect(() => {
    if (!enableSkipLinks || typeof window === 'undefined') return;

    const addSkipLinks = () => {
      const existingSkipLinks = document.querySelector('.skip-links');
      if (existingSkipLinks) return;

      const skipLinks = document.createElement('div');
      skipLinks.className = 'skip-links';
      skipLinks.innerHTML = `
        <a href="#main-content" class="skip-link">Skip to main content</a>
        <a href="#navigation" class="skip-link">Skip to navigation</a>
        <a href="#footer" class="skip-link">Skip to footer</a>
      `;
      
      document.body.insertBefore(skipLinks, document.body.firstChild);
    };

    addSkipLinks();
  }, [enableSkipLinks]);

  // Reduced motion support
  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (isReducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }
  }, [isReducedMotion]);

  return (
    <>
      {/* Skip Links */}
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
        
        .focus-visible {
          outline: 2px solid #00ffff;
          outline-offset: 2px;
        }
        
        .high-contrast {
          filter: contrast(150%) brightness(120%);
        }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      `}</style>
      
      {/* Accessibility Controls */}
      <div className="accessibility-controls" style={{ position: 'fixed', top: '10px', right: '10px', zIndex: 1000 }}>
        <button
          onClick={() => setIsHighContrast(!isHighContrast)}
          aria-label={`${isHighContrast ? 'Disable' : 'Enable'} high contrast mode`}
          className="accessibility-toggle"
          style={{
            background: isHighContrast ? '#000' : '#fff',
            color: isHighContrast ? '#fff' : '#000',
            border: '1px solid #ccc',
            padding: '8px 12px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '12px'
          }}
        >
          {isHighContrast ? 'HC: ON' : 'HC: OFF'}
        </button>
      </div>
    </>
  );
};

export default EnhancedAccessibility;