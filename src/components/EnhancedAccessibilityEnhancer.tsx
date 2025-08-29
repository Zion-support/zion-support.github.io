import React, { useEffect, useCallback, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  Contrast, 
  ZoomIn, 
  ZoomOut,
  Palette,
  Settings,
  X,
  Accessibility,
  Braille,
  Headphones
} from 'lucide-react';

interface AccessibilityEnhancerProps {
  enabled?: boolean;
  enableARIALabels?: boolean;
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusIndicators?: boolean;
  enableSkipLinks?: boolean;
}

export const EnhancedAccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enabled = true,
  enableARIALabels = true,
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableFocusIndicators = true,
  enableSkipLinks = true,
}) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const focusableElementsRef = useRef<HTMLElement[]>([]);
  const skipLinksRef = useRef<HTMLDivElement>(null);

  // Add ARIA labels and roles
  const enhanceARIALabels = useCallback(() => {
    if (!enableARIALabels) return;

    // Add ARIA labels to common elements
    const addARIALabels = () => {
      // Navigation elements
      const navs = document.querySelectorAll('nav');
      navs.forEach((nav, index) => {
        if (!nav.getAttribute('aria-label')) {
          nav.setAttribute('aria-label', `Main navigation ${index + 1}`);
        }
      });

      // Buttons without text
      const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
      buttons.forEach((button) => {
        const icon = button.querySelector('svg, img');
        if (icon && !button.textContent?.trim()) {
          const iconAlt = icon.getAttribute('alt') || icon.getAttribute('aria-label');
          if (iconAlt) {
            button.setAttribute('aria-label', iconAlt);
          }
        }
      });

      // Images without alt text
      const images = document.querySelectorAll('img:not([alt])');
      images.forEach((img) => {
        if (!img.getAttribute('alt')) {
          img.setAttribute('alt', 'Decorative image');
          img.setAttribute('role', 'presentation');
        }
      });

      // Form elements
      const inputs = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
      inputs.forEach((input) => {
        const label = input.closest('label');
        if (label && !input.getAttribute('aria-label')) {
          input.setAttribute('aria-label', label.textContent || 'Form input');
        }
      });

      // Links without descriptive text
      const links = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
      links.forEach((link) => {
        if (link.textContent?.trim() === 'Learn more' || link.textContent?.trim() === 'Click here') {
          const context = link.closest('section, article, div')?.querySelector('h1, h2, h3, h4, h5, h6');
          if (context) {
            link.setAttribute('aria-label', `${link.textContent} about ${context.textContent}`);
          }
        }
      });
    };

    addARIALabels();
    
    // Re-run when DOM changes
    const observer = new MutationObserver(addARIALabels);
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => observer.disconnect();
  }, [enableARIALabels]);

  // Enhanced keyboard navigation
  const enhanceKeyboardNavigation = useCallback(() => {
    if (!enableKeyboardNavigation) return;

    // Get all focusable elements
    const getFocusableElements = () => {
      const focusableSelectors = [
        'a[href]',
        'button:not([disabled])',
        'input:not([disabled])',
        'select:not([disabled])',
        'textarea:not([disabled])',
        '[tabindex]:not([tabindex="-1"])',
        '[contenteditable="true"]'
      ];
      
      return Array.from(document.querySelectorAll(focusableSelectors.join(','))) as HTMLElement[];
    };

    // Handle keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey && e.altKey) {
        e.preventDefault();
        const main = document.querySelector('main');
        if (main) {
          (main as HTMLElement).focus();
        }
      }

      // Escape key to close modals/dropdowns
      if (e.key === 'Escape') {
        const openModal = document.querySelector('[data-modal="open"]');
        const openDropdown = document.querySelector('[data-dropdown="open"]');
        
        if (openModal) {
          (openModal as HTMLElement).setAttribute('data-modal', 'closed');
        }
        if (openDropdown) {
          (openDropdown as HTMLElement).setAttribute('data-dropdown', 'closed');
        }
      }

      // Arrow key navigation for custom components
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        const focusableElements = getFocusableElements();
        const currentIndex = focusableElements.indexOf(target);
        
        if (currentIndex !== -1) {
          let nextIndex = currentIndex;
          
          switch (e.key) {
            case 'ArrowRight':
            case 'ArrowDown':
              nextIndex = (currentIndex + 1) % focusableElements.length;
              break;
            case 'ArrowLeft':
            case 'ArrowUp':
              nextIndex = currentIndex === 0 ? focusableElements.length - 1 : currentIndex - 1;
              break;
          }
          
          if (nextIndex !== currentIndex) {
            e.preventDefault();
            focusableElements[nextIndex].focus();
          }
        }
      }
    };

    // Add keyboard event listeners
    document.addEventListener('keydown', handleKeyDown);
    
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation]);

  // Screen reader enhancements
  const enhanceScreenReader = useCallback(() => {
    if (!enableScreenReader) return;

    // Add live regions for dynamic content
    const addLiveRegions = () => {
      const liveRegions = [
        { id: 'status-messages', 'aria-live': 'polite' },
        { id: 'error-messages', 'aria-live': 'assertive' },
        { id: 'loading-status', 'aria-live': 'polite' }
      ];

      liveRegions.forEach(region => {
        if (!document.getElementById(region.id)) {
          const div = document.createElement('div');
          div.id = region.id;
          div.setAttribute('aria-live', region['aria-live']);
          div.setAttribute('aria-atomic', 'true');
          div.className = 'sr-only';
          document.body.appendChild(div);
        }
      });
    };

    // Add skip links
    const addSkipLinks = () => {
      if (!enableSkipLinks) return;
      
      const skipLinks = [
        { href: '#main-content', text: 'Skip to main content' },
        { href: '#navigation', text: 'Skip to navigation' },
        { href: '#footer', text: 'Skip to footer' }
      ];

      if (skipLinksRef.current) {
        skipLinksRef.current.innerHTML = '';
        
        skipLinks.forEach(link => {
          const skipLink = document.createElement('a');
          skipLink.href = link.href;
          skipLink.textContent = link.text;
          skipLink.className = 'skip-link';
          skipLinksRef.current?.appendChild(skipLink);
        });
      }
    };

    // Add screen reader only content
    const addScreenReaderContent = () => {
      const style = document.createElement('style');
      style.textContent = `
        .sr-only {
          position: absolute !important;
          width: 1px !important;
          height: 1px !important;
          padding: 0 !important;
          margin: -1px !important;
          overflow: hidden !important;
          clip: rect(0, 0, 0, 0) !important;
          white-space: nowrap !important;
          border: 0 !important;
        }
        
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #000;
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
        
        .focus-visible {
          outline: 2px solid #22ddd2 !important;
          outline-offset: 2px !important;
        }
      `;
      document.head.appendChild(style);
    };

    addLiveRegions();
    addSkipLinks();
    addScreenReaderContent();
  }, [enableScreenReader, enableSkipLinks]);

  // High contrast mode
  const enhanceHighContrast = useCallback(() => {
    if (!enableHighContrast) return;

    const toggleHighContrast = () => {
      setIsHighContrast(prev => !prev);
      document.body.classList.toggle('high-contrast');
    };

    // Add high contrast toggle button
    const addHighContrastToggle = () => {
      const existingToggle = document.getElementById('high-contrast-toggle');
      if (existingToggle) return;

      const toggle = document.createElement('button');
      toggle.id = 'high-contrast-toggle';
      toggle.setAttribute('aria-label', 'Toggle high contrast mode');
      toggle.className = 'accessibility-toggle';
      toggle.innerHTML = '🌙';
      toggle.onclick = toggleHighContrast;
      
      // Position the toggle button
      toggle.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1000;
        background: #22ddd2;
        color: #000;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 20px;
        cursor: pointer;
        box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        transition: all 0.3s ease;
      `;
      
      document.body.appendChild(toggle);
    };

    // Add high contrast styles
    const addHighContrastStyles = () => {
      const style = document.createElement('style');
      style.textContent = `
        .high-contrast {
          --bg-primary: #000000 !important;
          --bg-secondary: #ffffff !important;
          --text-primary: #ffffff !important;
          --text-secondary: #000000 !important;
          --accent: #ffff00 !important;
          --border: #ffffff !important;
        }
        
        .high-contrast * {
          background-color: var(--bg-primary) !important;
          color: var(--text-primary) !important;
          border-color: var(--border) !important;
        }
        
        .high-contrast button,
        .high-contrast a {
          background-color: var(--bg-secondary) !important;
          color: var(--text-secondary) !important;
          border: 2px solid var(--border) !important;
        }
        
        .high-contrast button:hover,
        .high-contrast a:hover {
          background-color: var(--accent) !important;
          color: var(--text-secondary) !important;
        }
      `;
      document.head.appendChild(style);
    };

    addHighContrastToggle();
    addHighContrastStyles();
  }, [enableHighContrast]);

  // Focus indicators
  const enhanceFocusIndicators = useCallback(() => {
    if (!enableFocusIndicators) return;

    // Add focus visible polyfill
    const addFocusVisiblePolyfill = () => {
      const style = document.createElement('style');
      style.textContent = `
        .focus-visible {
          outline: 3px solid #22ddd2 !important;
          outline-offset: 2px !important;
          border-radius: 4px !important;
        }
        
        .focus-visible:not(:focus-visible) {
          outline: none !important;
        }
        
        /* Custom focus styles for different elements */
        button:focus-visible,
        a:focus-visible,
        input:focus-visible,
        select:focus-visible,
        textarea:focus-visible {
          outline: 3px solid #22ddd2 !important;
          outline-offset: 2px !important;
        }
        
        /* Remove default focus styles */
        *:focus {
          outline: none;
        }
      `;
      document.head.appendChild(style);
    };

    // Handle focus events
    const handleFocus = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      target.classList.add('focus-visible');
    };

    const handleBlur = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      target.classList.remove('focus-visible');
    };

    // Add focus event listeners
    document.addEventListener('focusin', handleFocus);
    document.addEventListener('focusout', handleBlur);

    addFocusVisiblePolyfill();

    return () => {
      document.removeEventListener('focusin', handleFocus);
      document.removeEventListener('focusout', handleBlur);
    };
  }, [enableFocusIndicators]);

  // Font size controls
  const addFontSizeControls = useCallback(() => {
    const controls = document.createElement('div');
    controls.className = 'accessibility-controls';
    controls.innerHTML = `
      <button id="increase-font" aria-label="Increase font size">A+</button>
      <button id="decrease-font" aria-label="Decrease font size">A-</button>
      <button id="reset-font" aria-label="Reset font size">A</button>
    `;
    
    controls.style.cssText = `
      position: fixed;
      top: 80px;
      right: 20px;
      z-index: 1000;
      display: flex;
      flex-direction: column;
      gap: 5px;
    `;

    // Font size control styles
    const style = document.createElement('style');
    style.textContent = `
      .accessibility-controls button {
        background: #22ddd2;
        color: #000;
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        font-size: 14px;
        cursor: pointer;
        font-weight: bold;
        transition: all 0.3s ease;
      }
      
      .accessibility-controls button:hover {
        background: #1bc5b8;
        transform: scale(1.1);
      }
      
      .accessibility-controls button:focus-visible {
        outline: 3px solid #ffff00;
        outline-offset: 2px;
      }
    `;
    document.head.appendChild(style);

    // Add event listeners
    const increaseBtn = controls.querySelector('#increase-font');
    const decreaseBtn = controls.querySelector('#decrease-font');
    const resetBtn = controls.querySelector('#reset-font');

    increaseBtn?.addEventListener('click', () => {
      setFontSize(prev => Math.min(prev + 2, 24));
      document.documentElement.style.fontSize = `${fontSize + 2}px`;
    });

    decreaseBtn?.addEventListener('click', () => {
      setFontSize(prev => Math.max(prev - 2, 12));
      document.documentElement.style.fontSize = `${fontSize - 2}px`;
    });

    resetBtn?.addEventListener('click', () => {
      setFontSize(16);
      document.documentElement.style.fontSize = '16px';
    });

    document.body.appendChild(controls);
  }, [fontSize]);

  // Reduced motion support
  const addReducedMotionSupport = useCallback(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
      document.body.classList.toggle('reduced-motion', e.matches);
    };

    mediaQuery.addEventListener('change', handleReducedMotionChange);
    document.body.classList.toggle('reduced-motion', mediaQuery.matches);

    // Add reduced motion styles
    const style = document.createElement('style');
    style.textContent = `
      .reduced-motion *,
      .reduced-motion *::before,
      .reduced-motion *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    `;
    document.head.appendChild(style);

    return () => mediaQuery.removeEventListener('change', handleReducedMotionChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    // Initialize accessibility enhancements
    const cleanupFunctions = [
      enhanceARIALabels(),
      enhanceKeyboardNavigation(),
      enhanceScreenReader(),
      enhanceHighContrast(),
      enhanceFocusIndicators(),
      addFontSizeControls(),
      addReducedMotionSupport(),
    ].filter(Boolean);

    // Add skip links container
    if (enableSkipLinks) {
      const skipContainer = document.createElement('div');
      skipContainer.ref = skipLinksRef;
      skipContainer.className = 'skip-links-container';
      skipContainer.style.cssText = 'position: absolute; top: 0; left: 0; z-index: 1001;';
      document.body.appendChild(skipContainer);
    }

    // Cleanup
    return () => {
      cleanupFunctions.forEach(cleanup => cleanup?.());
      
      // Remove accessibility controls
      const controls = document.querySelector('.accessibility-controls');
      const toggle = document.getElementById('high-contrast-toggle');
      const skipContainer = document.querySelector('.skip-links-container');
      
      controls?.remove();
      toggle?.remove();
      skipContainer?.remove();
      
      // Remove classes
      document.body.classList.remove('high-contrast', 'reduced-motion');
    };
  }, [enabled, enhanceARIALabels, enhanceKeyboardNavigation, enhanceScreenReader, enhanceHighContrast, enhanceFocusIndicators, addFontSizeControls, addReducedMotionSupport, enableSkipLinks]);

  return null;
};