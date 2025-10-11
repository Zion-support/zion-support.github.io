'use client';
import React, { useEffect } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  fontSize: number;
  reducedMotion: boolean;
}

const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Initialize accessibility features
    const initializeAccessibility = () => {
      // Add keyboard navigation support
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      });

      document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
      });
    };

    initializeAccessibility();
  }, []);

  return <>{children}</>;
};

export default EnhancedAccessibility;