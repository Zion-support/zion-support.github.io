'use client';
import React, { useEffect } from 'react';

interface AdvancedAccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AdvancedAccessibilityEnhancer: React.FC<AdvancedAccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Advanced accessibility enhancements
    const enhanceAccessibility = () => {
      // Add high contrast mode toggle
      const contrastToggle = document.createElement('button');
      contrastToggle.textContent = 'Toggle High Contrast';
      contrastToggle.className = 'sr-only focus:not-sr-only fixed top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-md z-50';
      contrastToggle.onclick = () => {
        document.body.classList.toggle('high-contrast');
      };
      document.body.appendChild(contrastToggle);

      // Add font size controls
      const fontSizeControls = document.createElement('div');
      fontSizeControls.className = 'sr-only focus:not-sr-only fixed top-16 right-4 bg-gray-800 text-white p-2 rounded-md z-50';
      fontSizeControls.innerHTML = `
        <button onclick="document.body.style.fontSize='0.875rem'">A-</button>
        <button onclick="document.body.style.fontSize='1rem'">A</button>
        <button onclick="document.body.style.fontSize='1.125rem'">A+</button>
      `;
      document.body.appendChild(fontSizeControls);
    };

    enhanceAccessibility();
  }, []);

  return <>{children}</>;
};

export default AdvancedAccessibilityEnhancer;