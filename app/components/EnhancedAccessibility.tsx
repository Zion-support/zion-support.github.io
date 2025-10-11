'use client';
import React, { useEffect } from 'react';

interface EnhancedAccessibilityProps {
  children: React.ReactNode;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({ children }) => {
  useEffect(() => {
    // Add high contrast mode toggle
    const toggleHighContrast = () => {
      if (document.body.classList.contains('high-contrast')) {
        document.body.classList.remove('high-contrast');
      } else {
        document.body.classList.add('high-contrast');
      }
    };

    // Add keyboard navigation support
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return <>{children}</>;
};

export default EnhancedAccessibility;
