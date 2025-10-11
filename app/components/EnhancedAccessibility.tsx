'use client';
import React, { useEffect, useState } from 'react';

interface EnhancedAccessibilityProps {
  children: React.ReactNode;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('normal');

  useEffect(() => {
    // Apply accessibility preferences
    const applyAccessibilityPreferences = () => {
      if (isHighContrast) {
        document.documentElement.classList.add('high-contrast');
      } else {
        document.documentElement.classList.remove('high-contrast');
      }

      document.documentElement.style.fontSize = fontSize === 'large' ? '1.2rem' : '1rem';
    };

    applyAccessibilityPreferences();
  }, [isHighContrast, fontSize]);

  useEffect(() => {
    // Add ARIA landmarks
    const addAriaLandmarks = () => {
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
      }

      const nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
      }

      const footer = document.querySelector('footer');
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo');
      }
    };

    addAriaLandmarks();
  }, []);

  return (
    <div className="accessibility-enhanced">
      {children}
    </div>
  );
};

export default EnhancedAccessibility;
