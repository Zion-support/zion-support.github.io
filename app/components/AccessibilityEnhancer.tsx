<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-6f30
import { useEffect } from 'react';

export default function AccessibilityEnhancer() {
  useEffect(() => {
<<<<<<< HEAD
    // Basic accessibility enhancements
    document.body.setAttribute('data-theme', 'default');
    
    // Add skip link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);

    return () => {
      const existingSkipLink = document.querySelector('a[href="#main-content"]');
      if (existingSkipLink) {
        existingSkipLink.remove();
=======
    // Accessibility enhancements
    const enhanceAccessibility = () => {
      // Add skip links
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);

      // Add main content landmark
      const main = document.querySelector('main');
      if (main && !main.id) {
        main.id = 'main-content';
>>>>>>> cursor/fix-errors-and-merge-to-main-6f30
      }
    };

    enhanceAccessibility();
  }, []);

  return null;
<<<<<<< HEAD
}
=======
}
=======

interface AccessibilityEnhancerProps {
  className?: string;
  children?: React.ReactNode;
}

  children;
  }) => {
  return (
    <div: className ={`accessibilityenhancer ${className}`}>;



>>>>>>> cursor/fix-errors-and-merge-to-main-2dd2
>>>>>>> cursor/fix-errors-and-merge-to-main-6f30
