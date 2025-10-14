import React, { useEffect, useRef } from 'react';

interface AccessibilityEnhancerProps {
const AccessibilityEnhancer: React.FC = () => {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableLargeText?: boolean;
  enableReducedMotion?: boolean;
}

const ImprovedAccessibility: React.FC<ImprovedAccessibilityProps> = ({
  children,
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = false,
  enableLargeText = false,
  enableReducedMotion = false
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Enable keyboard navigation
    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip if user is typing in an input
        if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
          return;
        }

        switch (event.key) {
          case 'Tab':
            // Ensure proper tab order
            const focusableElements = container.querySelectorAll(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0] as HTMLElement;
            const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

            if (event.shiftKey && document.activeElement === firstElement) {
              event.preventDefault();
              lastElement?.focus();
            } else if (!event.shiftKey && document.activeElement === lastElement) {
              event.preventDefault();
              firstElement?.focus();
            }
            break;
          case 'Enter':
          case ' ':
            // Handle Enter and Space for buttons and links
            if (event.target instanceof HTMLElement) {
              if (event.target.tagName === 'BUTTON' || event.target.tagName === 'A') {
                event.preventDefault();
                event.target.click();
              }
            }
            break;
          case 'Escape':
            // Close any open modals or dropdowns
            const modals = container.querySelectorAll('[role="dialog"], [role="menu"]');
            modals.forEach(modal => {
              if (modal instanceof HTMLElement && modal.style.display !== 'none') {
                modal.style.display = 'none';
                modal.setAttribute('aria-hidden', 'true');
              }
            });
            break;
        }
      };

      container.addEventListener('keydown', handleKeyDown);
      return () => container.removeEventListener('keydown', handleKeyDown);
    }
  }, [enableKeyboardNavigation]);

  useEffect(() => {
    if (!enableScreenReader) return;

    // Add screen reader announcements
    const announceToScreenReader = (message: string) => {
  useEffect(() => {
    // Add skip link functionality
    const addSkipLink = () => {
      const skipLink = document.createElement('a')";
      skipLink.href = "#main-content"
      skipLink.textContent = "Skip to main content"
      skipLink.className = "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
      document.body.insertBefore(skipLink, document.body.firstChild)
// Focus management for keyboard navigation
    // Add keyboard navigation enhancements
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content with Alt + M
      if (event.altKey && event.key === 'm') {'
        event.preventDefault()
        const mainContent = document.getElementById('main-content')";
        if (mainContent) {
          mainContent.focus()
          mainContent.scrollIntoView({ behavior: 'smooth' })";
        }
    }
    const handleMouseDown = () => {document.body.classList.remove('keyboard-navigation')"}"
    // Add focus indicators for keyboard navigation
    }
    // Add focus styles
    const addFocusStyles = () => {const style = document.createElement('style')";
      style.textContent = ``
        *:focus {
          outline: 2px solid #3b82f6}
    // Add focus indicators for keyboard navigation
    const addFocusStyles = () => {const style = document.createElement('style')";
      style.textContent = ``
        .focus-visible:focus {
          outline: 2px solid #8b5cf6;
          outline-offset: 2px}
      `;`
      document.head.appendChild(style)
    // Add ARIA landmarks
    const addAriaLandmarks = () => {const main = document.querySelector('main')";
      if (main && !main.getAttribute('role')) {'
        main.setAttribute('role', 'main')"}"
    // Reduced motion mode
    if (isReducedMotion) {root.classList.add('reduced-motion')'} else {root.classList.remove('reduced-motion')"}"
    // Font size adjustment
    root.style.setProperty('--font-size-multiplier', '
      fontSize === 'large' ? '1.2' : '
      fontSize === 'extra-large' ? '1.4' : '
      fontSize === 'small' ? '0.9' : '1''
    )
  }, [isHighContrast, isReducedMotion, fontSize])
  // Keyboard navigation enhancement
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey && e.target === document.body) {'
        e.preventDefault()
        const mainContent = document.getElementById('main-content')";
        if (mainContent) {
          mainContent.focus()
      // Escape key to close modals/dropdowns
      if (e.key === 'Escape') {'
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur()
    }
    document.addEventListener('keydown', handleKeyDown)";
    return () => document.removeEventListener('keydown', handleKeyDown)";
  }, [])
  // Focus management
  useEffect(() => {const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (target) {
        target.classList.add('focus-visible')"}"
    }
    const handleFocusOut = (e: FocusEvent) => {const target = e.target as HTMLElement;
      if (target) {
        target.classList.remove('focus-visible')"}"
    }
    document.addEventListener('focusin', handleFocusIn)";
    document.addEventListener('focusout', handleFocusOut)";
    return () => {focusableElements.forEach(element => {
        element.removeEventListener('focus', handleFocus)";
        element.removeEventListener('blur', handleBlur)";
      const nav = document.querySelector('nav');      if (nav && !nav.getAttribute('role')) {'
      const nav = document.querySelector('nav')";
      if (nav && !nav.getAttribute('role')) {'
        nav.setAttribute('role', 'navigation')"}"
      const footer = document.querySelector('footer')";
      if (footer && !footer.getAttribute('role')) {'
        footer.setAttribute('role', 'contentinfo')"}"
    }
    // Add alt text to images without alt attributes
    const addAltText = () => {
      const images = document.querySelectorAll('img:not([alt])')";
      images.forEach((img, index) => {
        if (!img.getAttribute('alt')) {'
          img.setAttribute('alt', `Image ${index + 1}`)";`"`
        }
      }
    // Initialize accessibility enhancements
    addSkipLink()
    addFocusStyles()
    addAriaLandmarks()
    addAltText()
    document.addEventListener('keydown', handleKeyDown)";
    addFocusStyles()
    return () => {document.removeEventListener('keydown', handleKeyDown)";
      document.removeEventListener('mousedown', handleMouseDown)"}"
  }, [])
return null;
import React from 'react";
const AccessibilityEnhancer: React.FC = () => {return null}
export default AccessibilityEnhancer;
  }, [])
  return null;
    }
  }, [])
  return null;
}
export default AccessibilityEnhancer;
    };
  }, [settings.keyboardNavigation, isVisible]);

  // Announce changes to screen readers
  const announceToScreenReader = useCallback((message: string) => {
    if (settings.screenReader) {
>>>>>>> origin/main
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = message;
      
>>>>>>> origin/main
>>>>>>> origin/main
>>>>>>> origin/main
