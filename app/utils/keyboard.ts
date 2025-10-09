
import { useEffect, useRef } from 'react';

// Keyboard navigation utilities
export const useKeyboardNavigation = () => {
  const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  
  const trapFocus = (element) => {
    const focusableContent = element.querySelectorAll(focusableElements);
    const firstFocusableElement = focusableContent[0];
    const lastFocusableElement = focusableContent[focusableContent.length - 1];
    
    element.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            firstFocusableElement.focus();
            e.preventDefault();
          }
        }
      }
    });
  };
  
  const handleEscape = (callback) => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        callback();
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  };
  
  return { trapFocus, handleEscape };
};

// Focus management hook
export const useFocusManagement = () => {
  const focusRef = useRef(null);
  
  const setFocus = () => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  };
  
  const restoreFocus = (previousElement) => {
    if (previousElement) {
      previousElement.focus();
    }
  };
  
  return { focusRef, setFocus, restoreFocus };
};
