import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  TypeOff, 
  Contrast, 
  Sun, 
  Moon,
  HelpCircle,
  X
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'normal' | 'large' | 'xlarge';
  focusIndicator: 'default' | 'high' | 'extreme';
}

export function AccessibilityEnhancer() {
  const [settings, setSettings] = React.useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
    fontSize: 'normal',
    focusIndicator: 'default'
  });

  // Enhanced keyboard navigation
  const enhanceKeyboardNavigation = useCallback(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.altKey) {
        event.preventDefault();
        const mainContent = document.querySelector('main');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
        }
      }

      // Enhanced arrow key navigation for custom components
      if (event.target instanceof HTMLElement) {
        const target = event.target;
        
        if (target.getAttribute('role') === 'button' || target.tagName === 'BUTTON') {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            target.click();
          }
        }

        // Enhanced navigation for custom dropdowns
        if (target.getAttribute('data-dropdown')) {
          const dropdown = target.nextElementSibling;
          if (dropdown && event.key === 'ArrowDown') {
            event.preventDefault();
            const firstItem = dropdown.querySelector('[role="menuitem"]');
            if (firstItem) {
              (firstItem as HTMLElement).focus();
            }
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Enhanced focus management
  const enhanceFocusManagement = useCallback(() => {
    // Add focus indicators to all focusable elements
    const focusableElements = document.querySelectorAll(
      'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"]), [contenteditable="true"]'
    );

    focusableElements.forEach(element => {
      if (element instanceof HTMLElement) {
        element.addEventListener('focus', () => {
          element.classList.add('focus-visible');
          element.setAttribute('aria-describedby', 'focus-description');
        });

        element.addEventListener('blur', () => {
          element.classList.remove('focus-visible');
          element.removeAttribute('aria-describedby');
        });
      }
    });

    // Create focus description element
    let focusDescription = document.getElementById('focus-description');
    if (!focusDescription) {
      focusDescription = document.createElement('div');
      focusDescription.id = 'focus-description';
      focusDescription.className = 'sr-only';
      focusDescription.setAttribute('aria-live', 'polite');
      document.body.appendChild(focusDescription);
    }
  }, []);

  // Enhanced ARIA support
  const enhanceARIA = useCallback(() => {
    // Add missing ARIA labels
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach(img => {
      if (img instanceof HTMLImageElement) {
        img.alt = img.title || 'Image';
        img.setAttribute('aria-label', img.alt);
      }
    });

    // Add ARIA labels to interactive elements
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach(button => {
      if (button instanceof HTMLButtonElement) {
        const text = button.textContent?.trim();
        if (text) {
          button.setAttribute('aria-label', text);
        }
      }
    });

    // Add ARIA labels to form inputs
    const inputs = document.querySelectorAll('input:not([aria-label])');
    inputs.forEach(input => {
      if (input instanceof HTMLInputElement) {
        const label = input.labels?.[0]?.textContent;
        const placeholder = input.placeholder;
        if (label) {
          input.setAttribute('aria-label', label);
        } else if (placeholder) {
          input.setAttribute('aria-label', placeholder);
        }
      }
    });
  }, []);

  // Enhanced screen reader support
  const enhanceScreenReaderSupport = useCallback(() => {
    // Add live regions for dynamic content
    const addLiveRegion = (id: string, type: 'polite' | 'assertive' = 'polite') => {
      let liveRegion = document.getElementById(id);
      if (!liveRegion) {
        liveRegion = document.createElement('div');
        liveRegion.id = id;
        liveRegion.className = 'sr-only';
        liveRegion.setAttribute('aria-live', type);
        liveRegion.setAttribute('aria-atomic', 'true');
        document.body.appendChild(liveRegion);
      }
    };

    // Add common live regions
    addLiveRegion('notifications', 'assertive');
    addLiveRegion('status-updates', 'polite');
    addLiveRegion('form-validation', 'polite');

    // Enhanced heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach((heading, index) => {
      if (heading instanceof HTMLElement) {
        if (!heading.id) {
          heading.id = `heading-${index}`;
        }
        heading.setAttribute('tabindex', '-1');
      }
    });
  }, []);

  // High contrast mode
  const applyHighContrast = useCallback((enabled: boolean) => {
    if (enabled) {
      document.documentElement.classList.add('high-contrast');
      document.documentElement.style.setProperty('--zion-text-primary', '255 255 255');
      document.documentElement.style.setProperty('--zion-text-secondary', '255 255 255');
      document.documentElement.style.setProperty('--zion-bg-primary', '0 0 0');
      document.documentElement.style.setProperty('--zion-bg-secondary', '0 0 0');
    } else {
      document.documentElement.classList.remove('high-contrast');
      document.documentElement.style.removeProperty('--zion-text-primary');
      document.documentElement.style.removeProperty('--zion-text-secondary');
      document.documentElement.style.removeProperty('--zion-bg-primary');
      document.documentElement.style.removeProperty('--zion-bg-secondary');
    }
  }, []);

  // Reduced motion mode
  const applyReducedMotion = useCallback((enabled: boolean) => {
    if (enabled) {
      document.documentElement.classList.add('reduced-motion');
      document.documentElement.style.setProperty('--animation-duration-fast', '0ms');
      document.documentElement.style.setProperty('--animation-duration-normal', '0ms');
      document.documentElement.style.setProperty('--animation-duration-slow', '0ms');
    } else {
      document.documentElement.classList.remove('reduced-motion');
      document.documentElement.style.removeProperty('--animation-duration-fast');
      document.documentElement.style.removeProperty('--animation-duration-normal');
      document.documentElement.style.removeProperty('--animation-duration-slow');
    }
  }, []);

  // Font size adjustment
  const applyFontSize = useCallback((size: 'normal' | 'large' | 'xlarge') => {
    const sizeMap = {
      normal: '16px',
      large: '18px',
      xlarge: '20px'
    };

    document.documentElement.style.fontSize = sizeMap[size];
    
    // Update CSS custom properties
    const scale = size === 'normal' ? 1 : size === 'large' ? 1.125 : 1.25;
    document.documentElement.style.setProperty('--font-scale', scale.toString());
  }, []);

  // Focus indicator enhancement
  const applyFocusIndicator = useCallback((level: 'default' | 'high' | 'extreme') => {
    const indicatorMap = {
      default: '2px solid #22ddd2',
      high: '3px solid #22ddd2',
      extreme: '4px solid #22ddd2'
    };

    document.documentElement.style.setProperty('--focus-indicator', indicatorMap[level]);
  }, []);

  // Apply accessibility settings
  useEffect(() => {
    applyHighContrast(settings.highContrast);
    applyReducedMotion(settings.reducedMotion);
    applyFontSize(settings.fontSize);
    applyFocusIndicator(settings.focusIndicator);
  }, [settings, applyHighContrast, applyReducedMotion, applyFontSize, applyFocusIndicator]);

  // Initialize accessibility enhancements
  useEffect(() => {
    const cleanupKeyboard = enhanceKeyboardNavigation();
    enhanceFocusManagement();
    enhanceARIA();
    enhanceScreenReaderSupport();

    // Check user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');

    if (prefersReducedMotion.matches) {
      setSettings(prev => ({ ...prev, reducedMotion: true }));
    }

    if (prefersHighContrast.matches) {
      setSettings(prev => ({ ...prev, highContrast: true }));
    }

    return cleanupKeyboard;
  }, [enhanceKeyboardNavigation, enhanceFocusManagement, enhanceARIA, enhanceScreenReaderSupport]);

  // Accessibility controls
  const toggleHighContrast = () => {
    setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }));
  };

  const toggleReducedMotion = () => {
    setSettings(prev => ({ ...prev, reducedMotion: !prev.reducedMotion }));
  };

  const increaseFontSize = () => {
    setSettings(prev => ({
      ...prev,
      fontSize: prev.fontSize === 'normal' ? 'large' : 'xlarge'
    }));
  };

  const decreaseFontSize = () => {
    setSettings(prev => ({
      ...prev,
      fontSize: prev.fontSize === 'xlarge' ? 'large' : 'normal'
    }));
  };

  const cycleFocusIndicator = () => {
    setSettings(prev => ({
      ...prev,
      focusIndicator: prev.focusIndicator === 'default' ? 'high' : 
                     prev.focusIndicator === 'high' ? 'extreme' : 'default'
    }));
  };

  return (
    <div className="accessibility-controls fixed bottom-4 right-4 z-50">
      <div className="bg-zion-slate-dark bg-opacity-90 backdrop-blur-sm rounded-lg p-4 shadow-2xl border border-zion-cyan">
        <h3 className="text-zion-cyan text-sm font-semibold mb-3">Accessibility</h3>
        
        <div className="space-y-2">
          <button
            onClick={toggleHighContrast}
            className={`w-full px-3 py-2 text-xs rounded ${
              settings.highContrast 
                ? 'bg-zion-cyan text-zion-slate-dark' 
                : 'bg-zion-slate-light text-white'
            }`}
            aria-label={`${settings.highContrast ? 'Disable' : 'Enable'} high contrast mode`}
          >
            {settings.highContrast ? '✓' : '○'} High Contrast
          </button>

          <button
            onClick={toggleReducedMotion}
            className={`w-full px-3 py-2 text-xs rounded ${
              settings.reducedMotion 
                ? 'bg-zion-cyan text-zion-slate-dark' 
                : 'bg-zion-slate-light text-white'
            }`}
            aria-label={`${settings.reducedMotion ? 'Disable' : 'Enable'} reduced motion`}
          >
            {settings.reducedMotion ? '✓' : '○'} Reduced Motion
          </button>

          <div className="flex space-x-1">
            <button
              onClick={decreaseFontSize}
              className="px-2 py-1 bg-zion-slate-light text-white text-xs rounded"
              aria-label="Decrease font size"
            >
              A-
            </button>
            <button
              onClick={increaseFontSize}
              className="px-2 py-1 bg-zion-slate-light text-white text-xs rounded"
              aria-label="Increase font size"
            >
              A+
            </button>
          </div>

          <button
            onClick={cycleFocusIndicator}
            className="w-full px-3 py-2 text-xs rounded bg-zion-slate-light text-white"
            aria-label={`Focus indicator: ${settings.focusIndicator}`}
          >
            Focus: {settings.focusIndicator}
          </button>
        </div>
      </div>
    </div>
  );
}