import React, { useEffect, useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Eye,
  EyeOff,
  Volume2,
  VolumeX,
  Sun,
  Moon,
  Monitor,
  Type,
  Contrast,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Accessibility,
  CheckCircle,
  AlertTriangle,
  Info,
  X,
  Settings,
  Palette,
  Smartphone,
  Globe,
  Languages
} from 'lucide-react';

interface AccessibilityEnhancerProps {
  enabled: boolean;
  enableHighContrast?: boolean;
  enableLargeText?: boolean;
  enableReducedMotion?: boolean;
  enableFocusIndicators?: boolean;
}

export function EnhancedAccessibilityEnhancer({
  enabled,
  enableHighContrast = true,
  enableLargeText = true,
  enableReducedMotion = true,
  enableFocusIndicators = true
}: AccessibilityEnhancerProps) {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isLargeText, setIsLargeText] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isFocusVisible, setIsFocusVisible] = useState(true);

  // High contrast mode
  const toggleHighContrast = useCallback(() => {
    if (!enabled || !enableHighContrast) return;
    
    const newState = !isHighContrast;
    setIsHighContrast(newState);
    
    if (newState) {
      document.documentElement.classList.add('high-contrast');
      document.documentElement.style.setProperty('--zion-cyan', '#ffffff');
      document.documentElement.style.setProperty('--zion-slate', '#000000');
      document.documentElement.style.setProperty('--zion-slate-light', '#ffffff');
      document.documentElement.style.setProperty('--zion-slate-dark', '#000000');
    } else {
      document.documentElement.classList.remove('high-contrast');
      document.documentElement.style.removeProperty('--zion-cyan');
      document.documentElement.style.removeProperty('--zion-slate');
      document.documentElement.style.removeProperty('--zion-slate-light');
      document.documentElement.style.removeProperty('--zion-slate-dark');
    }
    
    localStorage.setItem('zion-high-contrast', newState.toString());
  }, [enabled, enableHighContrast, isHighContrast]);

  // Large text mode
  const toggleLargeText = useCallback(() => {
    if (!enabled || !enableLargeText) return;
    
    const newState = !isLargeText;
    setIsLargeText(newState);
    
    if (newState) {
      document.documentElement.classList.add('large-text');
      document.documentElement.style.fontSize = '120%';
    } else {
      document.documentElement.classList.remove('large-text');
      document.documentElement.style.fontSize = '100%';
    }
    
    localStorage.setItem('zion-large-text', newState.toString());
  }, [enabled, enableLargeText, isLargeText]);

  // Reduced motion mode
  const toggleReducedMotion = useCallback(() => {
    if (!enabled || !enableReducedMotion) return;
    
    const newState = !isReducedMotion;
    setIsReducedMotion(newState);
    
    if (newState) {
      document.documentElement.classList.add('reduced-motion');
      document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    } else {
      document.documentElement.classList.remove('reduced-motion');
      document.documentElement.style.removeProperty('--animation-duration');
    }
    
    localStorage.setItem('zion-reduced-motion', newState.toString());
  }, [enabled, enableReducedMotion, isReducedMotion]);

  // Focus indicators
  const toggleFocusIndicators = useCallback(() => {
    if (!enabled || !enableFocusIndicators) return;
    
    const newState = !isFocusVisible;
    setIsFocusVisible(newState);
    
    if (newState) {
      document.documentElement.classList.add('focus-visible');
    } else {
      document.documentElement.classList.remove('focus-visible');
    }
    
    localStorage.setItem('zion-focus-visible', newState.toString());
  }, [enabled, enableFocusIndicators, isFocusVisible]);

  // Keyboard navigation enhancements
  const enhanceKeyboardNavigation = useCallback(() => {
    if (!enabled) return;

    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-zion-cyan text-white rounded-lg';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Enhanced focus management
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        const focusable = Array.from(document.querySelectorAll(focusableElements))
          .filter((el: any) => el.offsetParent !== null) as HTMLElement[];
        
        if (focusable.length > 0) {
          const firstFocusable = focusable[0];
          const lastFocusable = focusable[focusable.length - 1];
          
          if (e.shiftKey && document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable.focus();
          } else if (!e.shiftKey && document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable.focus();
          }
        }
      }
    });

    // ARIA live regions for dynamic content
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'aria-live-region';
    document.body.appendChild(liveRegion);
  }, [enabled]);

  // Screen reader enhancements
  const enhanceScreenReaderSupport = useCallback(() => {
    if (!enabled) return;

    // Add ARIA labels to interactive elements
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach((button, index) => {
      if (!button.textContent?.trim()) {
        button.setAttribute('aria-label', `Button ${index + 1}`);
      }
    });

    // Add ARIA descriptions to complex elements
    const complexElements = document.querySelectorAll('[data-aria-description]');
    complexElements.forEach((element) => {
      const description = element.getAttribute('data-aria-description');
      if (description) {
        element.setAttribute('aria-describedby', `desc-${element.id || Math.random()}`);
        
        const descElement = document.createElement('div');
        descElement.id = `desc-${element.id || Math.random()}`;
        descElement.className = 'sr-only';
        descElement.textContent = description;
        element.appendChild(descElement);
      }
    });

    // Enhance form accessibility
    const forms = document.querySelectorAll('form');
    forms.forEach((form) => {
      const inputs = form.querySelectorAll('input, textarea, select');
      inputs.forEach((input) => {
        if (!input.hasAttribute('aria-describedby')) {
          const label = form.querySelector(`label[for="${input.id}"]`);
          if (label) {
            input.setAttribute('aria-describedby', `${input.id}-description`);
            
            const descElement = document.createElement('div');
            descElement.id = `${input.id}-description`;
            descElement.className = 'sr-only';
            descElement.textContent = `Required field: ${label.textContent}`;
            input.parentNode?.appendChild(descElement);
          }
        }
      });
    });
  }, [enabled]);

  // Load saved preferences
  useEffect(() => {
    if (!enabled) return;

    const savedHighContrast = localStorage.getItem('zion-high-contrast') === 'true';
    const savedLargeText = localStorage.getItem('zion-large-text') === 'true';
    const savedReducedMotion = localStorage.getItem('zion-reduced-motion') === 'true';
    const savedFocusVisible = localStorage.getItem('zion-focus-visible') !== 'false';

    if (savedHighContrast) setIsHighContrast(true);
    if (savedLargeText) setIsLargeText(true);
    if (savedReducedMotion) setIsReducedMotion(true);
    if (savedFocusVisible) setIsFocusVisible(true);
  }, [enabled]);

  // Apply accessibility enhancements
  useEffect(() => {
    if (!enabled) return;

    enhanceKeyboardNavigation();
    enhanceScreenReaderSupport();

    // Apply saved preferences
    if (isHighContrast) toggleHighContrast();
    if (isLargeText) toggleLargeText();
    if (isReducedMotion) toggleReducedMotion();
    if (isFocusVisible) toggleFocusIndicators();
  }, [enabled, isHighContrast, isLargeText, isReducedMotion, isFocusVisible, toggleHighContrast, toggleLargeText, toggleReducedMotion, toggleFocusIndicators, enhanceKeyboardNavigation, enhanceScreenReaderSupport]);

  // Add accessibility controls to the page
  useEffect(() => {
    if (!enabled) return;

    const controlsContainer = document.createElement('div');
    controlsContainer.className = 'accessibility-controls fixed top-4 right-4 z-50 bg-white dark:bg-zion-slate-800 rounded-lg shadow-lg p-4 border border-zion-cyan/20';
    controlsContainer.setAttribute('role', 'toolbar');
    controlsContainer.setAttribute('aria-label', 'Accessibility controls');
    
    controlsContainer.innerHTML = `
      <div class="flex flex-col space-y-2">
        <button 
          class="accessibility-btn px-3 py-2 text-sm rounded-md transition-colors ${isHighContrast ? 'bg-zion-cyan text-white' : 'bg-gray-100 dark:bg-zion-slate-700 text-gray-700 dark:text-gray-300'}"
          onclick="window.toggleHighContrast()"
          aria-label="Toggle high contrast mode"
        >
          High Contrast
        </button>
        <button 
          class="accessibility-btn px-3 py-2 text-sm rounded-md transition-colors ${isLargeText ? 'bg-zion-cyan text-white' : 'bg-gray-100 dark:bg-zion-slate-700 text-gray-700 dark:text-gray-300'}"
          onclick="window.toggleLargeText()"
          aria-label="Toggle large text mode"
        >
          Large Text
        </button>
        <button 
          class="accessibility-btn px-3 py-2 text-sm rounded-md transition-colors ${isReducedMotion ? 'bg-zion-cyan text-white' : 'bg-gray-100 dark:bg-zion-slate-700 text-gray-700 dark:text-gray-300'}"
          onclick="window.toggleReducedMotion()"
          aria-label="Toggle reduced motion mode"
        >
          Reduced Motion
        </button>
        <button 
          class="accessibility-btn px-3 py-2 text-sm rounded-md transition-colors ${isFocusVisible ? 'bg-zion-cyan text-white' : 'bg-gray-100 dark:bg-zion-slate-700 text-gray-700 dark:text-gray-300'}"
          onclick="window.toggleFocusIndicators()"
          aria-label="Toggle focus indicators"
        >
          Focus Indicators
        </button>
      </div>
    `;

    document.body.appendChild(controlsContainer);

    // Add global functions for button clicks
    (window as any).toggleHighContrast = toggleHighContrast;
    (window as any).toggleLargeText = toggleLargeText;
    (window as any).toggleReducedMotion = toggleReducedMotion;
    (window as any).toggleFocusIndicators = toggleFocusIndicators;

    return () => {
      if (controlsContainer.parentNode) {
        controlsContainer.parentNode.removeChild(controlsContainer);
      }
      delete (window as any).toggleHighContrast;
      delete (window as any).toggleLargeText;
      delete (window as any).toggleReducedMotion;
      delete (window as any).toggleFocusIndicators;
    };
  }, [enabled, isHighContrast, isLargeText, isReducedMotion, isFocusVisible, toggleHighContrast, toggleLargeText, toggleReducedMotion, toggleFocusIndicators]);

  return null; // This component doesn't render anything
}