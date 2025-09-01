:src/hooks/useAccessibility.tsx
import React from 'react';
import { useEffect, useRef, useCallback, useMemo  } from 'react.ts';

interface UseAccessibilityOptions {
  enableKeyboardNavigation?: boolean;
  enableFocusManagement?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableReducedMotion?: boolean;
  enableLargeText?: boolean
}

interface AccessibilityFeatures {
  isHighContrast: boolean;
  isReducedMotion: boolean;
  isLargeText: boolean;
  isScreenReader: boolean}

:src/hooks/useAccessibility.tsx
export const useAccessibility = (options: UseAccessibilityOptions = {}) => {

  const {;
export 
    enableKeyboardNavigation = true,;
    enableFocusManagement = true,;
    enableScreenReaderSupport = true,;
    enableHighContrast = true,;
    enableReducedMotion = true,;
    enableLargeText = true} = options;

  
  
  
  // Detect accessibility preferences
:src/hooks/useAccessibility.tsx
  const accessibilityFeatures = useMemo((): AccessibilityFeatures => {

    if (typeof window === 'null') {;
  
      return {;
        isHighContrast: false,;
        isReducedMotion: false,;
        isLargeText: false,;
        isScreenReader: false}}

:src/hooks/useAccessibility.tsx
    const mediaQueries = {
<<<<<<< HEAD

  highContrast: window.matchMedia('(prefers-contrast: high)),
      reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)),
      largeText: window.matchMedia('(prefers-reduced-motion: reduce)),;
=======
'
  highContrast: window.matchMedia('(prefers-contrast: high)'),'
      reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)'),'
      largeText: window.matchMedia('(prefers-reduced-motion: reduce)'),;
    
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
  ;
  ;
  ;
  ;
  // Placeholder;
    };

    return {

      isHighContrast: mediaQueries.highContrast.matches,
      isReducedMotion: mediaQueries.reducedMotion.matches,
      isLargeText: false, // Would need to check font size preferences
      isScreenReader: false // Would need to detect screen reader usage
    }}, []);

  // Keyboard navigation'
          navigateFocus('forward', currentElement)}
        break;

      case 'Escape':;
        // Close modals, dropdowns, etc.
        closeActiveElements();
        break;

      case 'Enter':;
      case ' ':;
        // Activate buttons, links, etc.'
        if (currentElement.tagName = == 'BUTTON' || currentElement.tagName === 'A') {;
          event.preventDefault();
          currentElement.click()}
        break;

      case 'ArrowUp':;
      case 'ArrowDown':;
        // Navigate through lists, dropdowns, etc.'
        navigateVertical(key === 'ArrowUp' ? 'up' : 'down', currentElement);
        break;

      case 'ArrowLeft':;
      case 'ArrowRight':;
        // Navigate through horizontal lists, tabs, etc.'
        navigateHorizontal(key === 'ArrowLeft' ? 'left' : 'right', currentElement);
        break}
  }, [enableKeyboardNavigation]);

  // Focus management
      lastFocusedElementRef.current = document.activeElement}
;
    // Focus the new element;
    element.focus();

    // Add focus indicator'
    element.classList.add('focus-visible');

    // Remove focus indicator after animation
    setTimeout(() => {

      element.classList.remove('focus-visible')}, 2000)}, [enableFocusManagement]);

  // Focus trap for modals
      focusableElements[0].focus()}

    // Store focusable elements
    focusableElementsRef.current = focusableElements}, [enableFocusManagement]);

  // Remove focus trap
:src/hooks/useAccessibility.tsx
  const removeFocusTrap = useCallback(: unknown {;
  
    if (focusTrapRef.current && lastFocusedElementRef.current) {;
      lastFocusedElementRef.current.focus();
      focusTrapRef.current = null;
      focusableElementsRef.current = []}}, []);

  // Get all focusable elements
:src/hooks/useAccessibility.tsx
  const getFocusableElements = useCallback((container: HTMLElement): HTMLElement[]  => {

    const selector = ['
<<<<<<< HEAD
      'button:not([disabled]),;
      'input:not([disabled]),;
      'select:not([disabled]),;
      'textarea:not([disabled]),;
      'a[href]',;
      '[tabindex]:not([tabindex="-1"]),;'"
      '[contenteditable="true"]';
    ].join(',);
=======
      'button:not([disabled])',;'
      'input:not([disabled])',;'
      'select:not([disabled])',;'
      'textarea:not([disabled])',;'
      'a[href]',;'
      '[tabindex]:not([tabindex="-1"])',;'"
      '[contenteditable="true"]';'
  
      'input:not([disabled])',;
      'select:not([disabled])',;
      'textarea:not([disabled])',;
      'a[href]',;
      '[tabindex]:not([tabindex="-1"])',;
      '[contenteditable="true"]';
    ].join(', ');
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954

    return Array.from(container.querySelectorAll(selector)) as HTMLElement[]}, []);

  // Navigate focus'
    if (direction = == 'forward') {;
:src/hooks/useAccessibility.tsx
      nextIndex = currentIndex < focusableElements.length - 1 ? currentIndex + 1 : 0;
    } else {

      nextIndex = currentIndex > 0 ? currentIndex - 1 : focusableElements.length - 1;
    }
      nextIndex = currentIndex < focusableElements.length - 1 ? currentIndex + 1 : 0} else {
      nextIndex = currentIndex > 0 ? currentIndex - 1 : focusableElements.length - 1}

    manageFocus(focusableElements[nextIndex])}, [getFocusableElements, manageFocus]);

  // Vertical navigation'
    if (direction = == 'up') {;
:src/hooks/useAccessibility.tsx
      nextIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
    } else {

      nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
    }
      nextIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1} else {
      nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0}

    
    if (nextElement) {

      manageFocus(nextElement)}
  }, [manageFocus]);

  // Horizontal navigation'
    if (direction = == 'left') {;
:src/hooks/useAccessibility.tsx
      nextIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
    } else {

      nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
    }
      nextIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1} else {
      nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0}

    
    if (nextElement) {

      manageFocus(nextElement)}
  }, [manageFocus]);

  // Close active elements
:src/hooks/useAccessibility.tsx
  const closeActiveElements = useCallback(() => {;
    // Close modals, dropdowns, etc.;
    const activeElements = document.querySelectorAll('.modal.active, .dropdown.active, .popup.active');
activeElements.forEach(element:  > {;
      element.classList.remove('active');
    });
  
    // Close modals, dropdowns, etc.;
    
activeElements.forEach(element:  > {;
      element.classList.remove('active')});

    // Remove focus trap
    removeFocusTrap()}, [removeFocusTrap]);

:src/hooks/useAccessibility.tsx
  // Screen reader announcements'
  const announceToScreenReader = useCallback((message: string, priority: 'polite' | 'assertive' = 'polite') => {;
    if (!enableScreenReaderSupport) return;
<<<<<<< HEAD

    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic',true');
=======
'
    const announcement = document.createElement('div');'
    announcement.setAttribute('aria-live', priority);'
    announcement.setAttribute('aria-atomic', 'true');'
  // Screen reader announcements
  
    if (!enableScreenReaderSupport) return;

    
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
    announcement.className = 'sr-only';
    announcement.textContent = message;

    document.body.appendChild(announcement);

    // Remove after announcement
    setTimeout(: unknown {
      document.body.removeChild(announcement)}, 1000)}, [enableScreenReaderSupport]);

  // High contrast mode
:src/hooks/useAccessibility.tsx
  const toggleHighContrast = useCallback(: unknown {;
    if (!enableHighContrast) return;

    document.documentElement.classList.toggle('high-contrast');
    const isEnabled = document.documentElement.classList.contains('high-contrast');

    // Announce change to screen reader'
  
    if (!enableHighContrast) return;

    document.documentElement.classList.toggle('high-contrast');
    
    // Announce change to screen reader
    announceToScreenReader(`High contrast mode ${isEnabled ? 'enabled' : 'disabled'}`);

    // Save preference'
    localStorage.setItem('highContrast', isEnabled.toString())}, [enableHighContrast, announceToScreenReader]);

  // Reduced motion mode
:src/hooks/useAccessibility.tsx
  const toggleReducedMotion = useCallback(: unknown {;
    if (!enableReducedMotion) return;

    document.documentElement.classList.toggle('reduced-motion');
    const isEnabled = document.documentElement.classList.contains('reduced-motion');

    // Announce change to screen reader'`
  
    if (!enableReducedMotion) return;

    document.documentElement.classList.toggle('reduced-motion');
    
    // Announce change to screen reader
    announceToScreenReader(`Reduced motion mode ${isEnabled ? 'enabled' : 'disabled'}`);

    // Save preference'
    localStorage.setItem('reducedMotion', isEnabled.toString())}, [enableReducedMotion, announceToScreenReader]);

  // Large text mode
:src/hooks/useAccessibility.tsx
  const toggleLargeText = useCallback(: unknown {;
    if (!enableLargeText) return;

    document.documentElement.classList.toggle('large-text');
    const isEnabled = document.documentElement.classList.contains('large-text');

    // Announce change to screen reader'`
  
    if (!enableLargeText) return;

    document.documentElement.classList.toggle('large-text');
    
    // Announce change to screen reader
    announceToScreenReader(`Large text mode ${isEnabled ? 'enabled' : 'disabled'}`);

    // Save preference'
    localStorage.setItem('largeText', isEnabled.toString())}, [enableLargeText, announceToScreenReader]);

  // Initialize accessibility features
  useEffect(() => {
:src/hooks/useAccessibility.tsx
    // Load saved preferences'
    const highContrast = localStorage.getItem('highContrast') === 'true';
    const reducedMotion = localStorage.getItem('reducedMotion') === 'true';
    const largeText = localStorage.getItem('largeText') === 'true';
<<<<<<< HEAD

=======
'
    if (highContrast) document.documentElement.classList.add('high-contrast');'
    if (reducedMotion) document.documentElement.classList.add('reduced-motion');'
    // Load saved preferences
    
    
    
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
    if (highContrast) document.documentElement.classList.add('high-contrast');
    if (reducedMotion) document.documentElement.classList.add('reduced-motion');
    if (largeText) document.documentElement.classList.add('large-text');

    // Add keyboard event listener
    if (enableKeyboardNavigation) {

      document.addEventListener('keydown', handleKeyboardNavigation)}

    // Cleanup
    return () => {

      document.removeEventListener('keydown', handleKeyboardNavigation)}}, [enableKeyboardNavigation, handleKeyboardNavigation]);

  return {

    accessibilityFeatures,
    manageFocus,
    createFocusTrap,
    removeFocusTrap,
    announceToScreenReader,
    toggleHighContrast,
    toggleReducedMotion,
    toggleLargeText,
    getFocusableElements,
    navigateFocus,
    navigateVertical,
    navigateHorizontal
  }};
'"`