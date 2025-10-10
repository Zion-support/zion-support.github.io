'use client';

import React, { useEffect, useState } from 'react';

interface AdvancedAccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableVoiceControl?: boolean;
  enableTextToSpeech?: boolean;
}

const AdvancedAccessibilityEnhancer: React.FC<AdvancedAccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true,
  enableFocusManagement = true,
  enableVoiceControl = false,
  enableTextToSpeech = false
}) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    if (enableKeyboardNavigation) {
      // Add keyboard navigation support
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Tab') {
          // Enhanced tab navigation
          const focusableElements = document.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          // Focus management logic here
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [enableKeyboardNavigation]);

  useEffect(() => {
    if (enableScreenReaderSupport) {
      // Add screen reader support
      const addAriaLabels = () => {
        const buttons = document.querySelectorAll('button:not([aria-label])');
        buttons.forEach((button) => {
          if (!button.getAttribute('aria-label')) {
            button.setAttribute('aria-label', button.textContent || 'Button');
          }
        });
      };

      addAriaLabels();
    }
  }, [enableScreenReaderSupport]);

  useEffect(() => {
    if (enableHighContrast) {
      // Apply high contrast mode
      const body = document.body;
      if (isHighContrast) {
        body.classList.add('high-contrast');
      } else {
        body.classList.remove('high-contrast');
      }
    }
  }, [enableHighContrast, isHighContrast]);

  useEffect(() => {
    if (enableFocusManagement) {
      // Enhanced focus management
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      focusableElements.forEach((element) => {
        element.addEventListener('focus', () => {
          element.classList.add('focus-visible');
        });

        element.addEventListener('blur', () => {
          element.classList.remove('focus-visible');
        });
      });
    }
  }, [enableFocusManagement]);

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
  };

  const increaseFontSize = () => {
    setFontSize(prev => Math.min(prev + 2, 24));
    document.documentElement.style.fontSize = `${fontSize + 2}px`;
  };

  const decreaseFontSize = () => {
    setFontSize(prev => Math.max(prev - 2, 12));
    document.documentElement.style.fontSize = `${fontSize - 2}px`;
  };

  return (
    <div className="accessibility-controls">
      <style jsx>{`
        .high-contrast {
          filter: contrast(150%) brightness(120%);
        }
        
        .focus-visible {
          outline: 3px solid #0066cc;
          outline-offset: 2px;
        }
        
        .accessibility-controls {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 1000;
          background: rgba(0, 0, 0, 0.8);
          padding: 10px;
          border-radius: 8px;
          color: white;
        }
        
        .accessibility-controls button {
          margin: 5px;
          padding: 8px 12px;
          background: #0066cc;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        
        .accessibility-controls button:hover {
          background: #0052a3;
        }
      `}</style>
      
      {enableHighContrast && (
        <button onClick={toggleHighContrast}>
          {isHighContrast ? 'Normal Contrast' : 'High Contrast'}
        </button>
      )}
      
      <button onClick={increaseFontSize}>A+</button>
      <button onClick={decreaseFontSize}>A-</button>
    </div>
  );
};

export default AdvancedAccessibilityEnhancer;