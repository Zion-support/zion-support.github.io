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
    images.forEach((img) => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        // Missing alt text - would log in real implementation
      }
    });

    // Check for missing form labels
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach((input) => {
      const id = input.getAttribute('id');
      const ariaLabel = input.getAttribute('aria-label');
      const ariaLabelledBy = input.getAttribute('aria-labelledby');
      
      if (!id && !ariaLabel && !ariaLabelledBy) {
        // Missing label - would log in real implementation
      }
    });

    // Check for proper heading hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let lastLevel = 0;
    headings.forEach((heading) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > lastLevel + 1) {
        // Heading hierarchy issue - would log in real implementation
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
          // Low contrast - would log in real implementation
        }
      }
    });
  }, [enableAutoDetection]);

  // Add keyboard shortcuts
  const addKeyboardShortcuts = useCallback(() => {
    if (typeof window === 'undefined' || !enableKeyboardShortcuts) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Alt + M: Focus main content
      if (event.altKey && event.key === 'm') {
        event.preventDefault();
        const main = document.querySelector('main');
        if (main) {
          main.focus();
        }
      }

      // Alt + N: Focus navigation
      if (event.altKey && event.key === 'n') {
        event.preventDefault();
        const nav = document.querySelector('nav');
        if (nav) {
          nav.focus();
        }
      }

      // Alt + S: Skip to content
      if (event.altKey && event.key === 's') {
        event.preventDefault();
        const skipLink = document.querySelector('[href="#main-content"]');
        if (skipLink) {
          (skipLink as HTMLElement).click();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardShortcuts]);

  useEffect(() => {
    detectAccessibilityIssues();
    const cleanup = addKeyboardShortcuts();
    return cleanup;
  }, [detectAccessibilityIssues, addKeyboardShortcuts]);

  return (
    <div className={`enhanced-accessibility-manager ${className}`}>
      {children}
    </div>
  );
});

EnhancedAccessibilityManager.displayName = 'EnhancedAccessibilityManager';

export default EnhancedAccessibilityManager;