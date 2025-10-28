'use client';

import React, { useEffect, memo, useCallback } from 'react';

interface EnhancedAccessibilityManagerProps {
  enableAutoDetection?: boolean;
  enableKeyboardShortcuts?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const EnhancedAccessibilityManager: React.FC<EnhancedAccessibilityManagerProps> = memo(({ 
  enableAutoDetection = true, 
  enableKeyboardShortcuts = true,
  className = '',
  children
}) => {
  // Auto-detect accessibility issues
  const detectAccessibilityIssues = useCallback(() => {
    if (typeof window === 'undefined' || !enableAutoDetection) return;

    // Check for missing alt attributes
    const images = document.querySelectorAll('img');
    images.forEach((img, imgIndex) => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        console.warn(`Image ${imgIndex + 1} missing alt attribute:`, img.src);
      });

    // Check for missing form labels
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach((input, index) => {
      const id = input.getAttribute('id');
      const ariaLabel = input.getAttribute('aria-label');
      const ariaLabelledBy = input.getAttribute('aria-labelledby');
      
      if (!id && !ariaLabel && !ariaLabelledBy) {
        console.warn(`Form input ${index + 1} missing label:`, input);
      });

    // Check for proper heading hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let lastLevel = 0;
    headings.forEach((heading) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > lastLevel + 1) {
        console.warn(`Heading hierarchy issue: ${heading.tagName} after h${lastLevel}`, heading);
      }
      lastLevel = level;
    });

    // Check for sufficient color contrast (basic check)
    const elements = document.querySelectorAll('*');
    elements.forEach((element) => {
      const styles = window.getComputedStyle(element);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;
      
      if (color && backgroundColor && color !== 'rgba(0, 0, 0, 0)' && backgroundColor !== 'rgba(0, 0, 0, 0)') {
        // Basic contrast check - in a real implementation, you'd use a proper contrast calculation
        if (color === backgroundColor) {
          console.warn('Potential color contrast issue:', element);
        });
  }, [enableAutoDetection]);

  // Add keyboard shortcuts
  const addKeyboardShortcuts = useCallback(() => {
    if (typeof window === 'undefined' || !enableKeyboardShortcuts) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip if user is typing in an input
      if (event.target instanceof HTMLInputElement || 
          event.target instanceof HTMLTextAreaElement || 
          event.target instanceof HTMLSelectElement) {
        return;
      }

      // Alt + M: Focus main content
      if (event.altKey && event.key === 'm') {
        event.preventDefault();
        const main = document.querySelector('main');
        if (main) {
          main.focus();
        }

      // Alt + N: Focus navigation
      if (event.altKey && event.key === 'n') {
        event.preventDefault();
        const nav = document.querySelector('nav');
        if (nav) {
          const firstLink = nav.querySelector('a');
          if (firstLink) {
            firstLink.focus();
          }

      // Alt + F: Focus footer
      if (event.altKey && event.key === 'f') {
        event.preventDefault();
        const footer = document.querySelector('footer');
        if (footer) {
          const firstLink = footer.querySelector('a');
          if (firstLink) {
            firstLink.focus();
          }

      // Alt + S: Skip to content
      if (event.altKey && event.key === 's') {
        event.preventDefault();
        const skipLink = document.querySelector('[href="#main-content"]');
        if (skipLink instanceof HTMLElement) {
          skipLink.click();
        };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardShortcuts]);

  // Enhance focus management
  const enhanceFocusManagement = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Add focus indicators
    const style = document.createElement('style');
    style.textContent = `
      *:focus {
        outline: 2px solid #3b82f6 !important;
        outline-offset: 2px !important;
      }
      
      .focus-visible {
        outline: 2px solid #3b82f6 !important;
        outline-offset: 2px !important;
      }
    `;
    document.head.appendChild(style);

    // Trap focus in modals
    const trapFocus = (element: HTMLElement) => {
      const focusableElements = element.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            };

      element.addEventListener('keydown', handleTabKey);
      firstElement?.focus();
    };

    // Apply focus trap to modals
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            const modal = node.querySelector('[role="dialog"]');
            if (modal instanceof HTMLElement) {
              trapFocus(modal);
            });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  // Add ARIA live regions for announcements
  const addLiveRegions = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Create live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);

    // Create alert region for urgent announcements
    const alertRegion = document.createElement('div');
    alertRegion.setAttribute('aria-live', 'assertive');
    alertRegion.setAttribute('aria-atomic', 'true');
    alertRegion.className = 'sr-only';
    alertRegion.id = 'alert-region';
    document.body.appendChild(alertRegion);
  }, []);

  useEffect(() => {
    detectAccessibilityIssues();
    const cleanup = addKeyboardShortcuts();
    enhanceFocusManagement();
    addLiveRegions();

    return cleanup;
  }, [detectAccessibilityIssues, addKeyboardShortcuts, enhanceFocusManagement, addLiveRegions]);

  return (
    <div className={`enhanced-accessibility-manager ${className}`} style={{ display: 'none' }>{children}
    </div>
  );
});

EnhancedAccessibilityManager.displayName = 'EnhancedAccessibilityManager';

export default EnhancedAccessibilityManager;