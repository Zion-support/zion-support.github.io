'use client'
import React, { useEffect, useState } from 'react'

interface EnhancedAccessibilityProps {
  children: React.ReactNode;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('normal');

  useEffect(() => {
    // Check for high contrast preference
    const checkHighContrast = () => {
      if (window.matchMedia('(prefers-contrast: high)').matches) {
        setIsHighContrast(true);
      }
    };

    // Add keyboard navigation support
    const addKeyboardNavigation = () => {
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      });

      document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
      });
    };

    // Add screen reader announcements
    const addScreenReaderSupport = () => {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.id = 'announcements';
      document.body.appendChild(announcement);
    };

    // Add focus indicators
    const addFocusIndicators = () => {
      const style = document.createElement('style');
      style.textContent = `
        .keyboard-navigation *:focus {
          outline: 2px solid #00ffff !important;
          outline-offset: 2px !important;
        }
        
        .high-contrast {
          filter: contrast(150%) brightness(1.2);
        }
        
        .large-text {
          font-size: 1.25rem !important;
        }
        
        .extra-large-text {
          font-size: 1.5rem !important;
        }
      `;
      document.head.appendChild(style);
    };

    checkHighContrast();
    addKeyboardNavigation();
    addScreenReaderSupport();
    addFocusIndicators();
  }, []);

  useEffect(() => {
    // Apply accessibility settings
    if (isHighContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }

    if (fontSize === 'large') {
      document.body.classList.add('large-text');
      document.body.classList.remove('extra-large-text');
    } else if (fontSize === 'extra-large') {
      document.body.classList.add('extra-large-text');
      document.body.classList.remove('large-text');
    } else {
      document.body.classList.remove('large-text', 'extra-large-text');
    }
  }, [isHighContrast, fontSize]);

  const announceToScreenReader = (message: string) => {
    const announcement = document.getElementById('announcements');
    if (announcement) {
      announcement.textContent = message;
    }
  };

  return (
    <div className="accessibility-enhanced">
      {children}
    </div>
  );
};

export default EnhancedAccessibility;