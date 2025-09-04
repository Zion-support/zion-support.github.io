import React, { useEffect, PropsWithChildren } from 'react';

export default function AccessibilityEnhancer({ children }: PropsWithChildren) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    };
    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    const style = document.createElement('style');
    style.textContent = `.keyboard-navigation *:focus { outline: 2px solid #3B82F6 !important; outline-offset: 2px !important; }`;
    document.head.appendChild(style);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
      document.head.removeChild(style);
    };
  }, []);

  return <>{children}</>;
}
