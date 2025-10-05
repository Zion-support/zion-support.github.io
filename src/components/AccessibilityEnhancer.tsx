import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
}) => {
  useEffect(() => {
    // Add accessibility enhancements
    const addSkipLinks = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'skip-link';
      skipLink.style.cssText = `
        position: absolute;
  top: -40px;
        left: 6px;
  background: #000;
        color: #fff;
  padding: 8px;
        text-decoration: none;
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
    };

    // Add ARIA labels to interactive elements
    const enhanceInteractiveElements = () => {
      const buttons = document.querySelectorAll('button:not([aria-label])');
      buttons.forEach(button => {
        if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
          button.setAttribute('aria-label', 'Button');
        }
      });

      const links = document.querySelectorAll('a:not([aria-label])');
      links.forEach(link => {
        if (!link.getAttribute('aria-label') && !link.textContent?.trim()) {
          link.setAttribute('aria-label', 'Link');
        }
      });
    };

    // Add focus management
    const enhanceFocusManagement = () => {
      document.addEventListener('keydown', e => {
        if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      });

      document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
      });
    };

    addSkipLinks();
    enhanceInteractiveElements();
    enhanceFocusManagement();

    // Re-run enhancements when DOM changes
    const observer = new MutationObserver(() => {
      enhanceInteractiveElements();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
