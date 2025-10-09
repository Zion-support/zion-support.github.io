'use client';
import { useEffect, useRef } from 'react';

export default function FocusManager() {
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Store focus when modal opens
    const storeFocus = () => {
      previousFocusRef.current = document.activeElement as HTMLElement;
    };

    // Restore focus when modal closes
    const restoreFocus = () => {
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
        previousFocusRef.current = null;
      }
    };

    // Listen for modal open/close events
    document.addEventListener('modal:open', storeFocus);
    document.addEventListener('modal:close', restoreFocus);

    return () => {
      document.removeEventListener('modal:open', storeFocus);
      document.removeEventListener('modal:close', restoreFocus);
    };
  }, []);

  return null;
}