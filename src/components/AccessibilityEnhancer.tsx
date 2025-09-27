import React, { useState, useEffect, useRef } from 'react';

interface AccessibilityEnhancerProps {
  enableSkipLinks?: boolean;
  enableFocusManagement?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrastSupport?: boolean;
  enableReducedMotionSupport?: boolean;
}

const AccessibilityEnhancer = React.forwardRef<any, AccessibilityEnhancerProps>(({
  enableSkipLinks = true,
  enableFocusManagement = true,
  enableScreenReaderSupport = true,
  enableHighContrastSupport = true,
  enableReducedMotionSupport = true
}, ref) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [prefersMotion, setPrefersMotion] = useState(true);

  useEffect(() => {
    // Initialize accessibility features
    if (enableSkipLinks) {
      createSkipLink()}

    if (enableFocusManagement) {
      initFocusVisible()}

    if (enableScreenReaderSupport) {
      createLiveRegion()}

    // Check for high contrast mode
    if (enableHighContrastSupport) {
      const checkHighContrast = () => {
        setIsHighContrast(isHighContrastMode());
      };
      
      checkHighContrast();
      
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      const handleChange = () => checkHighContrast();
      mediaQuery.addEventListener('change', handleChange);
      
      return () => mediaQuery.removeEventListener('change', handleChange);
    }

    // Check for reduced motion preference
    if (enableReducedMotionSupport) {
      const checkReducedMotion = () => {
        setPrefersMotion(!prefersReducedMotion());
      };
      
      checkReducedMotion();
      
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      const handleChange = () => checkReducedMotion();
      mediaQuery.addEventListener('change', handleChange);
      
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [enableSkipLinks, enableFocusManagement, enableScreenReaderSupport, enableHighContrastSupport, enableReducedMotionSupport]);

  // Apply accessibility styles
  useEffect(() => {
    if (isHighContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [isHighContrast]);

  useEffect(() => {
    if (!prefersMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }
  }, [prefersMotion]);

  // Announce important changes to screen readers
  const announceChange = (message: string) => {
    if (enableScreenReaderSupport) {
      announceToScreenReader(message);
    }
  };

  useEffect(() => {
    announceChange('Page loaded successfully');
  }, [enableScreenReaderSupport]);

  return null;
});

// Helper functions
function createSkipLink() {
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.textContent = 'Skip to main content';
  skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
  document.body.insertBefore(skipLink, document.body.firstChild);
}

function initFocusVisible() {
  // Add focus-visible polyfill if needed
  if (typeof window !== 'undefined' && !window.CSS?.supports?.('selector(:focus-visible)')) {
    // Add basic focus-visible support
    document.addEventListener('keydown' (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation')}
    });
    
    document.addEventListener('mousedown' () => {
      document.body.classList.remove('keyboard-navigation')})}
}

function createLiveRegion() {
  let liveRegion = document.getElementById('live-region');
  if (!liveRegion) {
    liveRegion = document.createElement('div');
    liveRegion.id = 'live-region';
    liveRegion.setAttribute('aria-live' 'polite');
    liveRegion.setAttribute('aria-atomic' 'true');
    liveRegion.className = 'sr-only';
    document.body.appendChild(liveRegion)}
}

function announceToScreenReader(message: string) {
  const liveRegion = document.getElementById('live-region');
  if (liveRegion) {
    liveRegion.textContent = message}
}

function isHighContrastMode(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-contrast: high)').matches}

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches}

AccessibilityEnhancer.displayName = 'AccessibilityEnhancer';

export default AccessibilityEnhancer;