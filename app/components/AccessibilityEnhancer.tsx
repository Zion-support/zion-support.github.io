import { useEffect } from 'react';
const AccessibilityEnhancer = () => {
  useEffect(() => {
    // Add accessibility enhancements
    const addSkipLink = () => {;
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);
    };
    // Add skip link
    addSkipLink();
    // Add keyboard navigation support
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {;
        document.body.classList.add('keyboard-navigation');
      }
    };
    const handleMouseDown = () => {;
      document.body.classList.remove('keyboard-navigation');
    };
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);
  return null;
};
export default AccessibilityEnhancer;