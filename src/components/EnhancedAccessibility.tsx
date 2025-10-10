import React, { useEffect } from 'react';

const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Add skip links
    const addSkipLinks = () => {
      const skipLinks = document.createElement('div');
      skipLinks.innerHTML = `
        <a href="#main-content" class="skip-link">Skip to main content</a>
        <a href="#navigation" class="skip-link">Skip to navigation</a>
        <a href="#footer" class="skip-link">Skip to footer</a>
      `;
      skipLinks.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        z-index: 1000;
      `;
      
      const skipLinkStyle = document.createElement('style');
      skipLinkStyle.textContent = `
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #000;
          color: #fff;
          padding: 8px;
          text-decoration: none;
          z-index: 1000;
          transition: top 0.3s;
        }
        .skip-link:focus {
          top: 6px;
        }
      `;
      
      document.head.appendChild(skipLinkStyle);
      document.body.insertBefore(skipLinks, document.body.firstChild);
    };

    // Add high contrast mode support
    const addHighContrastSupport = () => {
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      
      const updateContrast = () => {
        if (mediaQuery.matches) {
          document.body.classList.add('high-contrast');
        } else {
          document.body.classList.remove('high-contrast');
        }
      };

      mediaQuery.addEventListener('change', updateContrast);
      updateContrast();

      const contrastStyle = document.createElement('style');
      contrastStyle.textContent = `
        .high-contrast {
          filter: contrast(1.2) brightness(1.1);
        }
        .high-contrast .cyber-card {
          border: 2px solid #00ffff !important;
        }
        .high-contrast .neon-button {
          border: 2px solid #00ffff !important;
        }
      `;
      document.head.appendChild(contrastStyle);
    };

    // Add reduced motion support
    const addReducedMotionSupport = () => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      
      const updateMotion = () => {
        if (mediaQuery.matches) {
          document.body.classList.add('reduced-motion');
        } else {
          document.body.classList.remove('reduced-motion');
        }
      };

      mediaQuery.addEventListener('change', updateMotion);
      updateMotion();

      const motionStyle = document.createElement('style');
      motionStyle.textContent = `
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      `;
      document.head.appendChild(motionStyle);
    };

    // Initialize accessibility features
    addSkipLinks();
    addHighContrastSupport();
    addReducedMotionSupport();
  }, []);

  return <>{children}</>;
};

export default EnhancedAccessibility;