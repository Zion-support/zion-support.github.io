
'use client';
import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true,
  enableFocusManagement = true,
}) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [focusVisible, setFocusVisible] = useState(false);

  useEffect(() => {
    if (enableKeyboardNavigation) {
      setupKeyboardNavigation();
    }
    if (enableScreenReaderSupport) {
      setupScreenReaderSupport();
    }
    if (enableHighContrast) {
      setupHighContrastMode();
    }
    if (enableFocusManagement) {
      setupFocusManagement();
    }

    return () => {
      // Cleanup event listeners
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, [enableKeyboardNavigation, enableScreenReaderSupport, enableHighContrast, enableFocusManagement]);

  const setupKeyboardNavigation = () => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey && document.activeElement === document.body) {
        const skipLink = document.querySelector('a[href="#main-content"]');
        if (skipLink) {
          (skipLink as HTMLElement).focus();
        }
      }

      // Close dropdowns on Escape
      if (e.key === 'Escape') {
        const openDropdowns = document.querySelectorAll('[aria-expanded="true"]');
        openDropdowns.forEach(dropdown => {
          dropdown.setAttribute('aria-expanded', 'false');
        });
      }

      // Handle arrow key navigation for menus
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        const activeElement = document.activeElement;
        if (activeElement?.getAttribute('role') === 'menuitem') {
          e.preventDefault();
          const menuItems = Array.from(document.querySelectorAll('[role="menuitem"]'));
          const currentIndex = menuItems.indexOf(activeElement);
          const nextIndex = e.key === 'ArrowDown' 
            ? Math.min(currentIndex + 1, menuItems.length - 1)
            : Math.max(currentIndex - 1, 0);
          (menuItems[nextIndex] as HTMLElement).focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
  };

  const setupScreenReaderSupport = () => {
    // Add ARIA labels to interactive elements
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach(button => {
      if (!button.textContent?.trim()) {
        button.setAttribute('aria-label', 'Button');
      }
    });

    // Add ARIA labels to links
    const links = document.querySelectorAll('a:not([aria-label])');
    links.forEach(link => {
      if (!link.textContent?.trim()) {
        link.setAttribute('aria-label', 'Link');
      }
    });

    // Add role attributes to custom components
    const cards = document.querySelectorAll('.cyber-card, .hologram-card, .quantum-card');
    cards.forEach(card => {
      if (!card.getAttribute('role')) {
        card.setAttribute('role', 'article');
      }
    });

    // Add live regions for dynamic content
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);
  };

  const setupHighContrastMode = () => {
    // Check for system high contrast preference
    if (window.matchMedia('(prefers-contrast: high)').matches) {
      setIsHighContrast(true);
      document.body.classList.add('high-contrast');
    }

    // Listen for changes in contrast preference
    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    const handleContrastChange = (e: MediaQueryListEvent) => {
      setIsHighContrast(e.matches);
      if (e.matches) {
        document.body.classList.add('high-contrast');
      } else {
        document.body.classList.remove('high-contrast');
      }
    };

    mediaQuery.addEventListener('change', handleContrastChange);
  };

  const setupFocusManagement = () => {
    const handleFocusIn = (e: FocusEvent) => {
      setFocusVisible(true);
      const target = e.target as HTMLElement;
      
      // Add focus indicator
      target.classList.add('focus-visible');
      
      // Announce focus changes to screen readers
      if (target.getAttribute('aria-label') || target.textContent) {
        announceToScreenReader(`Focused on ${target.getAttribute('aria-label') || target.textContent}`);
      }
    };

    const handleFocusOut = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      target.classList.remove('focus-visible');
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);
  };

  const announceToScreenReader = (message: string) => {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
    }
  };

  const toggleHighContrast = useCallback(() => {
    setIsHighContrast(!isHighContrast);
    if (!isHighContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, [isHighContrast]);

  return (
    <div className="accessibility-enhancer">
      <button
        onClick={toggleHighContrast}
        className="accessibility-toggle"
        aria-label={`Toggle high contrast mode. Currently ${isHighContrast ? 'on' : 'off'}`}
      >
        {isHighContrast ? '🌙' : '☀️'} High Contrast
      </button>
    </div>
  );
};

export default AccessibilityEnhancer;