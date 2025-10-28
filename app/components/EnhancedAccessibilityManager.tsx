'use client';

import React, { memo, useCallback, useEffect } from 'react';

interface EnhancedAccessibilityManagerProps {
  enableAutoDetection?: boolean;
  enableKeyboardShortcuts?: boolean;
  children?: React.ReactNode;
}

const EnhancedAccessibilityManager: React.FC<EnhancedAccessibilityManagerProps> = memo(({ 
  enableAutoDetection = true, 
  enableKeyboardShortcuts = true,
  children 
}) => {
  const detectAccessibilityIssues = useCallback(() => {
    if (typeof window === 'undefined' || !enableAutoDetection) return;

    // Check for missing alt attributes
    const images = document.querySelectorAll('img');
    images.forEach((img, imgIndex) => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        console.warn(`Image ${imgIndex + 1} missing alt attribute:`, img.src);
      }
    });

    // Check for missing form labels
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach((input, index) => {
      const id = input.getAttribute('id');
      const ariaLabel = input.getAttribute('aria-label');
      const ariaLabelledBy = input.getAttribute('aria-labelledby');
      
      if (!id && !ariaLabel && !ariaLabelledBy) {
        console.warn(`Form input ${index + 1} missing label:`, input);
      }
    });
  }, [enableAutoDetection]);

  const addKeyboardShortcuts = useCallback(() => {
    if (typeof window === 'undefined' || !enableKeyboardShortcuts) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Add keyboard shortcuts here
      if (event.ctrlKey && event.key === 'k') {
        event.preventDefault();
        // Focus search
        const searchInput = document.querySelector('input[type="search"]') as HTMLInputElement;
        if (searchInput) {
          searchInput.focus();
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
    <div className="enhanced-accessibility-manager">
      {children}
    </div>
  );
});

EnhancedAccessibilityManager.displayName = 'EnhancedAccessibilityManager';

export default EnhancedAccessibilityManager;