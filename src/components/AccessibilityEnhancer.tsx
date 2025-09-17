import React, { useEffect, useCallback } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  // Keyboard navigation enhancement
  const enhanceKeyboardNavigation = useCallback(() => {
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        const focusable = document.querySelectorAll(focusableElements);
        const firstFocusable = focusable[0] as HTMLElement;
        const lastFocusable = focusable[focusable.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstFocusable) {
            lastFocusable?.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusable) {
            firstFocusable?.focus();
            e.preventDefault();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // High contrast mode toggle
  const toggleHighContrast = useCallback(() => {
    const body = document.body;
    if (body.classList.contains('high-contrast')) {
      body.classList.remove('high-contrast');
      localStorage.setItem('high-contrast', 'false');
    } else {
      body.classList.add('high-contrast');
      localStorage.setItem('high-contrast', 'true');
    }
  }, []);

  // Large text mode toggle
  const toggleLargeText = useCallback(() => {
    const body = document.body;
    if (body.classList.contains('large-text')) {
      body.classList.remove('large-text');
      localStorage.setItem('large-text', 'false');
    } else {
      body.classList.add('large-text');
      localStorage.setItem('large-text', 'true');
    }
  }, []);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, []);

  // Focus management
  const manageFocus = useCallback(() => {
    const skipLinks = document.querySelectorAll('.skip-link');
    skipLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href') || '');
        if (target) {
          (target as HTMLElement).focus();
          (target as HTMLElement).scrollIntoView();
        }
      });
    });
  }, []);

  // Initialize accessibility features
  useEffect(() => {
    // Load saved preferences
    const highContrast = localStorage.getItem('high-contrast') === 'true';
    const largeText = localStorage.getItem('large-text') === 'true';
    
    if (highContrast) {
      document.body.classList.add('high-contrast');
    }
    if (largeText) {
      document.body.classList.add('large-text');
    }

    // Set up keyboard navigation
    const cleanupKeyboard = enhanceKeyboardNavigation();
    
    // Set up focus management
    manageFocus();

    // Add accessibility controls to the page
    const controls = document.createElement('div');
    controls.className = 'accessibility-controls fixed top-4 right-4 z-50 bg-white p-4 rounded-lg shadow-lg';
    controls.innerHTML = `
      <h3 class="text-lg font-semibold mb-2">Accessibility Options</h3>
      <button id="toggle-contrast" class="block w-full mb-2 px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Toggle High Contrast
      </button>
      <button id="toggle-text-size" class="block w-full mb-2 px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600">
        Toggle Large Text
      </button>
      <button id="skip-to-content" class="block w-full px-3 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
        Skip to Main Content
      </button>
    `;
    document.body.appendChild(controls);

    // Add event listeners
    const contrastBtn = document.getElementById('toggle-contrast');
    const textSizeBtn = document.getElementById('toggle-text-size');
    const skipBtn = document.getElementById('skip-to-content');

    contrastBtn?.addEventListener('click', toggleHighContrast);
    textSizeBtn?.addEventListener('click', toggleLargeText);
    skipBtn?.addEventListener('click', () => {
      const main = document.querySelector('main');
      if (main) {
        (main as HTMLElement).focus();
        main.scrollIntoView();
        announceToScreenReader('Skipped to main content');
      }
    });

    return () => {
      cleanupKeyboard();
      const controlsElement = document.querySelector('.accessibility-controls');
      if (controlsElement) {
        document.body.removeChild(controlsElement);
      }
    };
  }, [enhanceKeyboardNavigation, toggleHighContrast, toggleLargeText, manageFocus, announceToScreenReader]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;