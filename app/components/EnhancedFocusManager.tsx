'use client';
import React, { useEffect, useRef } from 'react';

interface FocusManagerProps {
  children: React.ReactNode;
  trapFocus?: boolean;
  restoreFocus?: boolean;
  initialFocusRef?: React.RefObject<HTMLElement>;
}

const EnhancedFocusManager: React.FC<FocusManagerProps> = ({
  children,
  trapFocus = false,
  restoreFocus = false,
  initialFocusRef
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (restoreFocus) {
      previousActiveElement.current = document.activeElement as HTMLElement;
    }

    if (initialFocusRef?.current) {
      initialFocusRef.current.focus();
    }

    if (trapFocus && containerRef.current) {
      const focusableElements = containerRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement?.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement?.focus();
              e.preventDefault();
            }
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      firstElement?.focus();

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        if (restoreFocus && previousActiveElement.current) {
          previousActiveElement.current.focus();
        }
      };
    }
  }, [trapFocus, restoreFocus, initialFocusRef]);

  return (
    <div ref={containerRef} className="focus-manager">
      {children}
    </div>
  );
};

export default EnhancedFocusManager;