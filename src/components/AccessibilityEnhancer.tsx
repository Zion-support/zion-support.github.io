import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Add keyboard navigation support
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation');
    };

    // Add focus indicators
    const addFocusIndicators = () => {
      const style = document.createElement('style');
      style.textContent = `
        .keyboard-navigation *:focus {
          outline: 2px solid #06b6d4 !important;
          outline-offset: 2px !important;
        }
      `;
      document.head.appendChild(style);
    };

    // Add ARIA labels to interactive elements
    const enhanceAccessibility = () => {
      const buttons = document.querySelectorAll('button:not([aria-label])');
      buttons.forEach(button => {
        if (!button.getAttribute('aria-label') && button.textContent) {
          button.setAttribute('aria-label', button.textContent.trim());
        }
        // Add role if missing
        if (!button.getAttribute('role')) {
          button.setAttribute('role', 'button');
        }
      });

      const links = document.querySelectorAll('a:not([aria-label])');
      links.forEach(link => {
        if (!link.getAttribute('aria-label') && link.textContent) {
          link.setAttribute('aria-label', link.textContent.trim());
        }
        // Add external link indicators
        if (link.getAttribute('href')?.startsWith('http') && !link.getAttribute('href')?.includes('ziontechgroup.com')) {
          link.setAttribute('aria-label', `${link.textContent?.trim()} (opens in new tab)`);
          link.setAttribute('target', '_blank');
          link.setAttribute('rel', 'noopener noreferrer');
        }
      });

      // Add ARIA labels to images
      const images = document.querySelectorAll('img:not([alt])');
      images.forEach(img => {
        if (!img.getAttribute('alt')) {
          img.setAttribute('alt', '');
        }
      });

      // Add ARIA labels to form inputs
      const inputs = document.querySelectorAll('input:not([aria-label])');
      inputs.forEach(input => {
        const label = document.querySelector(`label[for="${input.getAttribute('id')}"]`);
        if (label && !input.getAttribute('aria-label')) {
          input.setAttribute('aria-label', label.textContent?.trim() || '');
        }
      });

      // Add skip links
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    addFocusIndicators();
    enhanceAccessibility();

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
