'use client';
import { useEffect, useRef } from 'react';

export default function KeyboardNavigation() {
  const mainContentRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
        event.preventDefault();
        mainContentRef.current?.focus();
      }
      
      // Escape key to close modals/menus
      if (event.key === 'Escape') {
        const openMenus = document.querySelectorAll('[aria-expanded="true"]');
        openMenus.forEach(menu => {
          const button = menu.querySelector('button');
          button?.click();
        });
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded"
      onClick={(e) => {
        e.preventDefault();
        mainContentRef.current?.focus();
      }}
    >
      Skip to main content
    </a>
  );
}