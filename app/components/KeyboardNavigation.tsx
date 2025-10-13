import React, { useEffect, useRef } from 'react';

interface KeyboardNavigationProps {
  children: React.ReactNode;
  className?: string;
}

const KeyboardNavigation: React.FC<KeyboardNavigationProps> = ({ 
  children, 
  className = '' 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Only handle keyboard navigation when not in input fields
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement ||
        event.target instanceof HTMLSelectElement ||
        (event.target as HTMLElement)?.contentEditable === 'true'
      ) {
        return;
      }

      const container = containerRef.current;
      if (!container) return;

      const focusableElements = container.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );

      const focusableArray = Array.from(focusableElements) as HTMLElement[];
      const currentIndex = focusableArray.indexOf(document.activeElement as HTMLElement);

      switch (event.key) {
        case 'ArrowDown':
        case 'ArrowRight':
          event.preventDefault();
          const nextIndex = currentIndex < focusableArray.length - 1 ? currentIndex + 1 : 0;
          focusableArray[nextIndex]?.focus();
          break;

        case 'ArrowUp':
        case 'ArrowLeft':
          event.preventDefault();
          const prevIndex = currentIndex > 0 ? currentIndex - 1 : focusableArray.length - 1;
          focusableArray[prevIndex]?.focus();
          break;

        case 'Home':
          event.preventDefault();
          focusableArray[0]?.focus();
          break;

        case 'End':
          event.preventDefault();
          focusableArray[focusableArray.length - 1]?.focus();
          break;

        case 'Enter':
        case ' ':
          if (document.activeElement instanceof HTMLElement) {
            const activeElement = document.activeElement;
            if (activeElement.tagName === 'BUTTON' || activeElement.getAttribute('role') === 'button') {
              event.preventDefault();
              activeElement.click();
            }
          }
          break;

        case 'Escape':
          // Close any open modals or dropdowns
          const openDropdowns = container.querySelectorAll('[aria-expanded="true"]');
          openDropdowns.forEach(dropdown => {
            (dropdown as HTMLElement).setAttribute('aria-expanded', 'false');
            (dropdown as HTMLElement).blur();
          });
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`keyboard-navigation ${className}`}
      role="navigation"
      aria-label="Keyboard navigation"
    >
      {children}
    </div>
  );
};

export default KeyboardNavigation;