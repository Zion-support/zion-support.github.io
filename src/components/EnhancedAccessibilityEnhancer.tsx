import React, { useEffect, useCallback, useState } from 'react';
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
  enabled: boolean;
}

export default function EnhancedAccessibilityEnhancer({ enabled }: AccessibilityEnhancerProps) {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isLargeText, setIsLargeText] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [focusVisible, setFocusVisible] = useState(false);

  // Enhanced keyboard navigation
  const enhanceKeyboardNavigation = useCallback(() => {
    if (!enabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      
      // Skip if target is an input, textarea, or select
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT') {
        return;
      }

      switch (event.key) {
        case 'Tab':
          // Ensure focus is visible
          setFocusVisible(true);
          break;
        case 'Escape':
          // Close modals, dropdowns, etc.
          const modals = document.querySelectorAll('[role="dialog"], [role="menu"], [role="listbox"]');
          modals.forEach(modal => {
            if (modal.getAttribute('aria-hidden') !== 'true') {
              const closeButton = modal.querySelector('[aria-label*="close"], [aria-label*="Close"]');
              if (closeButton) {
                (closeButton as HTMLElement).click();
              }
            }
          });
          break;
        case 'Enter':
        case ' ':
          // Handle custom button interactions
          if (target.getAttribute('role') === 'button' && !target.getAttribute('tabindex')) {
            event.preventDefault();
            target.click();
          }
          break;
      }
    };

    // Enhanced focus management
    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      
      // Add focus indicator
      target.classList.add('focus-visible');
      
      // Announce focus changes to screen readers
      if (target.getAttribute('aria-label')) {
        announceToScreenReader(`Focused on ${target.getAttribute('aria-label')}`);
      }
      
      // Ensure focus is within viewport
      target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    };

    const handleFocusOut = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      target.classList.remove('focus-visible');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, [enabled]);

  // Enhanced ARIA labels and roles
  const enhanceARIA = useCallback(() => {
    if (!enabled) return;

    // Add missing ARIA labels to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea, [role="button"], [role="link"]');
    
    interactiveElements.forEach(element => {
      const el = element as HTMLElement;
      
      // Add aria-label if missing and element has no accessible name
      if (!el.getAttribute('aria-label') && !el.getAttribute('aria-labelledby') && !el.textContent?.trim()) {
        const tagName = el.tagName.toLowerCase();
        const role = el.getAttribute('role') || tagName;
        
        switch (role) {
          case 'button':
            el.setAttribute('aria-label', 'Button');
            break;
          case 'link':
            el.setAttribute('aria-label', 'Link');
            break;
          case 'input':
            el.setAttribute('aria-label', 'Input field');
            break;
        }
      }
      
      // Add role to elements that need it
      if (tagName === 'button' && !el.getAttribute('role')) {
        el.setAttribute('role', 'button');
      }
      
      if (tagName === 'a' && !el.getAttribute('role')) {
        el.setAttribute('role', 'link');
      }
    });

    // Enhance form accessibility
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      const formEl = form as HTMLFormElement;
      
      if (!formEl.getAttribute('aria-label') && !formEl.getAttribute('aria-labelledby')) {
        const legend = formEl.querySelector('legend');
        if (legend) {
          formEl.setAttribute('aria-labelledby', legend.id || 'form-legend');
        } else {
          formEl.setAttribute('aria-label', 'Form');
        }
      }
    });

    // Enhance navigation accessibility
    const navs = document.querySelectorAll('nav');
    navs.forEach((nav, index) => {
      if (!nav.getAttribute('aria-label')) {
        nav.setAttribute('aria-label', `Navigation ${index + 1}`);
      }
    });

    // Enhance list accessibility
    const lists = document.querySelectorAll('ul, ol');
    lists.forEach(list => {
      if (!list.getAttribute('role')) {
        list.setAttribute('role', 'list');
      }
    });

    const listItems = document.querySelectorAll('li');
    listItems.forEach(item => {
      if (!item.getAttribute('role')) {
        item.setAttribute('role', 'listitem');
      }
    });
  }, [enabled]);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    if (!enabled) return;

    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, [enabled]);

  // High contrast mode
  const toggleHighContrast = useCallback(() => {
    setIsHighContrast(prev => {
      const newValue = !prev;
      document.documentElement.classList.toggle('high-contrast', newValue);
      announceToScreenReader(`High contrast mode ${newValue ? 'enabled' : 'disabled'}`);
      return newValue;
    });
  }, [announceToScreenReader]);

  // Large text mode
  const toggleLargeText = useCallback(() => {
    setIsLargeText(prev => {
      const newValue = !prev;
      document.documentElement.classList.toggle('large-text', newValue);
      announceToScreenReader(`Large text mode ${newValue ? 'enabled' : 'disabled'}`);
      return newValue;
    });
  }, [announceToScreenReader]);

  // Reduced motion mode
  const toggleReducedMotion = useCallback(() => {
    setIsReducedMotion(prev => {
      const newValue = !prev;
      document.documentElement.classList.toggle('reduced-motion', newValue);
      announceToScreenReader(`Reduced motion mode ${newValue ? 'enabled' : 'disabled'}`);
      return newValue;
    });
  }, [announceToScreenReader]);

  // Skip to main content functionality
  const addSkipLinks = useCallback(() => {
    if (!enabled) return;

    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:outline-none focus:ring-2 focus:ring-blue-500';
    
    document.body.insertBefore(skipLink, document.body.firstChild);
  }, [enabled]);

  // Enhanced focus indicators
  const enhanceFocusIndicators = useCallback(() => {
    if (!enabled) return;

    const style = document.createElement('style');
    style.textContent = `
      .focus-visible {
        outline: 3px solid #0ea5e9 !important;
        outline-offset: 2px !important;
        border-radius: 4px !important;
      }
      
      .high-contrast .focus-visible {
        outline: 3px solid #ffffff !important;
        outline-offset: 2px !important;
      }
      
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
      
      .high-contrast {
        filter: contrast(150%) brightness(120%);
      }
      
      .large-text {
        font-size: 1.2em;
      }
      
      .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    `;
    
    document.head.appendChild(style);
  }, [enabled]);

  // Accessibility toolbar
  const addAccessibilityToolbar = useCallback(() => {
    if (!enabled) return;

    const toolbar = document.createElement('div');
    toolbar.className = 'accessibility-toolbar fixed top-4 right-4 z-50 bg-white border border-gray-300 rounded-lg shadow-lg p-2';
    toolbar.setAttribute('role', 'toolbar');
    toolbar.setAttribute('aria-label', 'Accessibility options');
    
    toolbar.innerHTML = `
      <button class="accessibility-btn p-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              aria-label="Toggle high contrast" 
              onclick="window.toggleHighContrast()">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
        </svg>
      </button>
      <button class="accessibility-btn p-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              aria-label="Toggle large text" 
              onclick="window.toggleLargeText()">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      <button class="accessibility-btn p-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              aria-label="Toggle reduced motion" 
              onclick="window.toggleReducedMotion()">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      </button>
    `;
    
    document.body.appendChild(toolbar);
    
    // Add global functions for button clicks
    (window as any).toggleHighContrast = toggleHighContrast;
    (window as any).toggleLargeText = toggleLargeText;
    (window as any).toggleReducedMotion = toggleReducedMotion;
  }, [enabled, toggleHighContrast, toggleLargeText, toggleReducedMotion]);

  useEffect(() => {
    if (!enabled) return;

    enhanceKeyboardNavigation();
    enhanceARIA();
    addSkipLinks();
    enhanceFocusIndicators();
    addAccessibilityToolbar();

    // Check user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsReducedMotion(true);
      document.documentElement.classList.add('reduced-motion');
    }

    // Announce page load
    announceToScreenReader('Page loaded successfully');

    return () => {
      // Cleanup
      document.documentElement.classList.remove('high-contrast', 'large-text', 'reduced-motion');
    };
  }, [enabled, enhanceKeyboardNavigation, enhanceARIA, addSkipLinks, enhanceFocusIndicators, addAccessibilityToolbar, announceToScreenReader]);

  return null;
}