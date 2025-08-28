import React, { useEffect, useCallback, useState } from 'react';

interface AccessibilityEnhancerProps {
  enabled?: boolean;
}

export const EnhancedAccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ 
  enabled = true 
}) => {
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [reducedMotion, setReducedMotion] = useState(false);

  const enhanceKeyboardNavigation = useCallback(() => {
    if (!enabled) return;

    // Add skip links
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add main content landmark
    const mainContent = document.querySelector('main');
    if (mainContent && !mainContent.id) {
      mainContent.id = 'main-content';
    }

    // Enhance focus management
    const focusableElements = document.querySelectorAll(
      'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    focusableElements.forEach((element) => {
      if (!element.hasAttribute('aria-label') && !element.textContent?.trim()) {
        element.setAttribute('aria-label', 'Interactive element');
      }
    });
  }, [enabled]);

  const enhanceARIA = useCallback(() => {
    if (!enabled) return;

    // Add missing ARIA labels
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach((img) => {
      img.setAttribute('alt', 'Decorative image');
      img.setAttribute('aria-hidden', 'true');
    });

    // Add form labels
    const inputs = document.querySelectorAll('input:not([aria-label]):not([id])');
    inputs.forEach((input, index) => {
      const label = document.createElement('label');
      label.textContent = `Input field ${index + 1}`;
      label.setAttribute('for', `input-${index}`);
      input.id = `input-${index}`;
      input.parentNode?.insertBefore(label, input);
    });

    // Add button labels
    const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    buttons.forEach((button) => {
      if (!button.textContent?.trim()) {
        button.setAttribute('aria-label', 'Button');
      }
    });
  }, [enabled]);

  const enhanceScreenReader = useCallback(() => {
    if (!enabled) return;

    // Add live regions for dynamic content
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);

    // Add status messages
    const statusRegion = document.createElement('div');
    statusRegion.setAttribute('aria-live', 'status');
    statusRegion.setAttribute('aria-atomic', 'false');
    statusRegion.className = 'sr-only';
    statusRegion.id = 'status-region';
    document.body.appendChild(statusRegion);
  }, [enabled]);

  const applyHighContrast = useCallback(() => {
    if (!enabled) return;

    const root = document.documentElement;
    if (highContrast) {
      root.style.setProperty('--text-color', '#000000');
      root.style.setProperty('--bg-color', '#ffffff');
      root.style.setProperty('--border-color', '#000000');
    } else {
      root.style.removeProperty('--text-color');
      root.style.removeProperty('--bg-color');
      root.style.removeProperty('--border-color');
    }
  }, [enabled, highContrast]);

  const applyFontSize = useCallback(() => {
    if (!enabled) return;

    const root = document.documentElement;
    root.style.fontSize = `${fontSize}px`;
  }, [enabled, fontSize]);

  const applyReducedMotion = useCallback(() => {
    if (!enabled) return;

    const root = document.documentElement;
    if (reducedMotion) {
      root.style.setProperty('--animation-duration', '0.01ms');
      root.style.setProperty('--transition-duration', '0.01ms');
    } else {
      root.style.removeProperty('--animation-duration');
      root.style.removeProperty('--transition-duration');
    }
  }, [enabled, reducedMotion]);

  useEffect(() => {
    if (!enabled) return;

    enhanceKeyboardNavigation();
    enhanceARIA();
    enhanceScreenReader();
  }, [enabled, enhanceKeyboardNavigation, enhanceARIA, enhanceScreenReader]);

  useEffect(() => {
    applyHighContrast();
  }, [applyHighContrast]);

  useEffect(() => {
    applyFontSize();
  }, [applyFontSize]);

  useEffect(() => {
    applyReducedMotion();
  }, [applyReducedMotion]);

  // Don't render anything - this is a utility component
  return null;
};