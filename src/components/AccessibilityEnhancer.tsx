import React, { useEffect, useRef, useState, useCallback } from 'react';

// Minimal shim to ensure build stability after conflict noise

interface FocusTrapConfig {
  containerRef: React.RefObject<HTMLElement>;
  onEscape?: () => void;
  returnFocus?: boolean;
}

export function AccessibilityEnhancer() {
  // No-op hidden component
  return <div aria-hidden="true" style={{ display: 'none' }} />;
}

export function useFocusTrap({ containerRef, onEscape, returnFocus }: FocusTrapConfig) {
  const previousFocus = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    previousFocus.current = document.activeElement as HTMLElement;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onEscape) onEscape();
    };
    container.addEventListener('keydown', onKey);
    return () => {
      container.removeEventListener('keydown', onKey);
      if (returnFocus && previousFocus.current) previousFocus.current.focus();
    };
  }, [containerRef, onEscape, returnFocus]);
}

export function SkipLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 px-4 py-2 rounded-lg z-50">
      {children}
    </a>
  );
}

export function useAnnouncement() {
  const [announcements, setAnnouncements] = useState<Array<{ id: number; message: string; priority: 'polite' | 'assertive' }>>([]);
  const announce = useCallback((message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const id = Date.now();
    setAnnouncements(prev => [...prev, { id, message, priority }]);
    setTimeout(() => setAnnouncements(prev => prev.filter(a => a.id !== id)), 5000);
  }, []);
  return { announcements, announce } as const;
}
