'use client';

import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Add skip links
    const skipLinks = document.createElement('div');
    skipLinks.className = 'skip-links';
    skipLinks.innerHTML = `
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <a href="#main-navigation" className="skip-link">Skip to navigation</a>
    `;
    document.body.insertBefore(skipLinks, document.body.firstChild);

    // Add ARIA landmarks
    const main = document.querySelector('main');
    if (main) {
      main.setAttribute('role', 'main');
      main.setAttribute('id', 'main-content');
    }

    const nav = document.querySelector('nav');
    if (nav) {
      nav.setAttribute('role', 'navigation');
      nav.setAttribute('id', 'main-navigation');
      nav.setAttribute('aria-label', 'Main navigation');
    }

    const header = document.querySelector('header');
    if (header) {
      header.setAttribute('role', 'banner');
    }

    const footer = document.querySelector('footer');
    if (footer) {
      footer.setAttribute('role', 'contentinfo');
    }

    // Add CSS for skip links
    const style = document.createElement('style');
    style.textContent = `
      .skip-link {
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        z-index: 1000;
        border-radius: 4px;
      }
      .skip-link:focus {
        top: 6px;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;