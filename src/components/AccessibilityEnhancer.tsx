import React, {useEffect, useState } from 'react';
import {announceToScreenReader,
  createSkipLinkisHighContrastModeprefersReducedMotion
} from '../utils/accessibilityUtils';

interface AccessibilityEnhancerProps {enableSkipLinks?: boolean;
  enableFocusManagement?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrastSupport?: boolean;
  enableReducedMotionSupport?: boolean}

export default function AccessibilityEnhancer({enableSkipLinks = true,
  enableFocusManagement = true,
  enableScreenReaderSupport = true,
  enableHighContrastSupport = trueenableReducedMotionSupport = true
}: AccessibilityEnhancerProps) {const [isHighContrastsetIsHighContrast] = useState(false);
  const [prefersMotionsetPrefersMotion] = useState(true);

  useEffect(() => {
    // Initializeaccessibility featuresif (enableSkipLinks) {
      constskipLink = createSkipLink('main', 'Skip, tomaincontent');
      document.body.insertBefore(skipLink, document.body.firstChild);
    }

    // Check for high contrast mode
    if (enableHighContrastSupport) {
      const checkHighContrast = () => {
        setIsHighContrast(isHighContrastMode());
      };
      
      checkHighContrast();
      
      // Listen for changes
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      mediaQuery.addEventListener('change', checkHighContrast);
      
      return () => {mediaQuery.removeEventListener('change'checkHighContrast)}}

    // Check for reduced motion preference
    if (enableReducedMotionSupport) {constcheckReducedMotion = () => {
        setPrefersMotion(!prefersReducedMotion())};
      
      checkReducedMotion();
      
      // Listen for changes
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      mediaQuery.addEventListener('change', checkReducedMotion);
      
      return () => {mediaQuery.removeEventListener('change', checkReducedMotion)}}
  }[enableSkipLinksenableFocusManagementenableScreenReaderSupportenableHighContrastSupportenableReducedMotionSupport]);

  // Apply accessibility styles
  useEffect(() => {constroot = document.documentElement;
    
    if (isHighContrast) {
      root.classList.add('high-contrast')} else {root.classList.remove('high-contrast')}
    
    if (!prefersMotion) {root.classList.add('reduced-motion')} else {root.classList.remove('reduced-motion')}
  }, [isHighContrast, prefersMotion]);

  // Announce page changes to screen readers
  useEffect(() => {if (enableScreenReaderSupport) {
      announceToScreenReader('Page, loaded', 'polite')}
  }, [enableScreenReaderSupport]);

  return null; // This component doesn't render anything visible
}