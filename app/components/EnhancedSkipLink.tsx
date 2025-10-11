'use client';
import React, { useEffect } from 'react';

const SkipLink: React.FC = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Create skip link if it doesn't exist
    const existingSkipLink = document.querySelector('a[href="#main-content"]');
    if (existingSkipLink) return;

    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded-lg font-medium z-50 transition-all duration-200';
    
    // Add focus styles
    skipLink.style.position = 'absolute';
    skipLink.style.left = '-9999px';
    skipLink.style.top = '0';
    skipLink.style.zIndex = '9999';
    skipLink.style.padding = '8px 16px';
    skipLink.style.backgroundColor = '#06b6d4';
    skipLink.style.color = 'white';
    skipLink.style.borderRadius = '8px';
    skipLink.style.fontWeight = '500';
    skipLink.style.textDecoration = 'none';
    skipLink.style.transition = 'all 0.2s ease';

    // Show on focus
    skipLink.addEventListener('focus', () => {
      skipLink.style.left = '16px';
      skipLink.style.top = '16px';
    });

    // Hide on blur
    skipLink.addEventListener('blur', () => {
      skipLink.style.left = '-9999px';
      skipLink.style.top = '0';
    });

    // Insert at the beginning of body
    document.body.insertBefore(skipLink, document.body.firstChild);

    return () => {
      if (document.body.contains(skipLink)) {
        document.body.removeChild(skipLink);
      }
    };
  }, []);

  return null;
};

export default SkipLink;