import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

export const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Add skip navigation link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      background: #2563eb;
      color: white;
      padding: 8px 16px;
      text-decoration: none;
      border-radius: 4px;
      z-index: 1000;
      transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', () => {
      skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
      skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add ARIA landmarks
    const main = document.querySelector('main');
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main');
      main.setAttribute('id', 'main-content');
    }

    // Add focus management
    const focusableElements = document.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    );

    focusableElements.forEach((element) => {
      if (!element.getAttribute('tabindex')) {
        element.setAttribute('tabindex', '0');
      }
    });

    // Add keyboard navigation for dropdowns
    const dropdowns = document.querySelectorAll('[role="menu"], [role="listbox"]');
    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener('keydown', (e) => {
        const target = e.target as HTMLElement;
        const items = dropdown.querySelectorAll('[role="menuitem"], [role="option"]');
        const currentIndex = Array.from(items).indexOf(target);

        switch (e.key) {
          case 'ArrowDown':
            e.preventDefault();
            const nextIndex = (currentIndex + 1) % items.length;
            (items[nextIndex] as HTMLElement).focus();
            break;
          case 'ArrowUp':
            e.preventDefault();
            const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
            (items[prevIndex] as HTMLElement).focus();
            break;
          case 'Escape':
            dropdown.setAttribute('aria-expanded', 'false');
            break;
        }
      });
    });

    return () => {
      // Cleanup
      if (skipLink.parentNode) {
        skipLink.parentNode.removeChild(skipLink);
      }
    };
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;