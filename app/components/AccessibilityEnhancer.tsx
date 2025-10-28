'use client';

import React, { useEffect, useState, memo } from 'react';

interface AccessibilityEnhancerProps {
  className?: string;
  children?: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = memo(({ 
  className = '', 
  children 
}) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('normal');
  const [reducedMotion, setReducedMotion] = useState(false);

  const applyAccessibilityFeatures = React.useCallback(() => {
    const root = document.documentElement;

    // Apply high contrast
    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Apply font size
    root.classList.remove('font-small', 'font-normal', 'font-large', 'font-xl');
    root.classList.add(`font-${fontSize}`);

    // Apply reduced motion
    if (reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Add focus indicators
    addFocusIndicators();

    // Improve keyboard navigation
    improveKeyboardNavigation();

    // Add skip links
    addSkipLinks();
  }, [isHighContrast, fontSize, reducedMotion]);

  useEffect(() => {
    // Check for user preferences
    const checkUserPreferences = () => {
      // Check for high contrast preference
      if (window.matchMedia('(prefers-contrast: high)').matches) {
        setIsHighContrast(true);
      }

      // Check for reduced motion preference
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setReducedMotion(true);
      }

      // Check for font size preference
      const savedFontSize = localStorage.getItem('fontSize');
      if (savedFontSize) {
        setFontSize(savedFontSize);
      }
    };

    // Set up media query listeners
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleHighContrastChange = (e: MediaQueryListEvent) => {
      setIsHighContrast(e.matches);
    };

    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    // Add event listeners
    highContrastQuery.addEventListener('change', handleHighContrastChange);
    reducedMotionQuery.addEventListener('change', handleReducedMotionChange);

    // Initial check
    checkUserPreferences();

    // Apply accessibility features
    applyAccessibilityFeatures();

    return () => {
      highContrastQuery.removeEventListener('change', handleHighContrastChange);
      reducedMotionQuery.removeEventListener('change', handleReducedMotionChange);
    };
  }, [applyAccessibilityFeatures]);

  useEffect(() => {
    applyAccessibilityFeatures();
  }, [applyAccessibilityFeatures]);

  const addFocusIndicators = () => {
    const style = document.createElement('style');
    style.textContent = `
      .focus-visible {
        outline: 2px solid #3b82f6 !important;
        outline-offset: 2px !important;
      }
      
      .high-contrast .focus-visible {
        outline: 3px solid #ffffff !important;
        outline-offset: 3px !important;
      }
    `;
    document.head.appendChild(style);
  };

  const improveKeyboardNavigation = () => {
    // Add keyboard event listeners for better navigation
    document.addEventListener('keydown', (e) => {
      // Skip to main content with Alt + M
      if (e.altKey && e.key === 'm') {
        e.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: 'smooth' });
        }
      }

      // Skip to navigation with Alt + N
      if (e.altKey && e.key === 'n') {
        e.preventDefault();
        const navigation = document.querySelector('nav');
        if (navigation) {
          const firstLink = navigation.querySelector('a') as HTMLAnchorElement;
          if (firstLink) {
            firstLink.focus();
          }
        }
      }
    });
  };

  const addSkipLinks = () => {
    // Check if skip links already exist
    if (document.getElementById('skip-links')) return;

    const skipLinks = document.createElement('div');
    skipLinks.id = 'skip-links';
    skipLinks.className = 'skip-links';
    skipLinks.innerHTML = `
      <a href="#main-content" class="skip-link">Skip to main content</a>
      <a href="#navigation" class="skip-link">Skip to navigation</a>
    `;

    // Add styles for skip links
    const style = document.createElement('style');
    style.textContent = `
      .skip-links {
        position: absolute;
        top: -40px;
        left: 6px;
        z-index: 1000;
      }
      
      .skip-link {
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        transition: top 0.3s;
      }
      
      .skip-link:focus {
        top: 6px;
      }
    `;
    document.head.appendChild(style);

    // Insert skip links at the beginning of body
    document.body.insertBefore(skipLinks, document.body.firstChild);
  };

  const handleFontSizeChange = (newSize: string) => {
    setFontSize(newSize);
    localStorage.setItem('fontSize', newSize);
  };

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
  };

  return (
    <div className={`accessibility-enhancer ${className}`}>
      {children}
      
      {/* Accessibility Controls */}
      <div className="accessibility-controls" style={{ position: 'fixed', top: '10px', right: '10px', zIndex: 1000 }}>
        <div className="flex gap-2">
          <button
            onClick={() => handleFontSizeChange('small')}
            className={`px-2 py-1 text-xs rounded ${fontSize === 'small' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
            aria-label="Small font size"
          >
            A
          </button>
          <button
            onClick={() => handleFontSizeChange('normal')}
            className={`px-2 py-1 text-sm rounded ${fontSize === 'normal' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
            aria-label="Normal font size"
          >
            A
          </button>
          <button
            onClick={() => handleFontSizeChange('large')}
            className={`px-2 py-1 text-base rounded ${fontSize === 'large' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
            aria-label="Large font size"
          >
            A
          </button>
          <button
            onClick={() => handleFontSizeChange('xl')}
            className={`px-2 py-1 text-lg rounded ${fontSize === 'xl' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
            aria-label="Extra large font size"
          >
            A
          </button>
          <button
            onClick={toggleHighContrast}
            className={`px-2 py-1 text-xs rounded ${isHighContrast ? 'bg-yellow-600 text-white' : 'bg-gray-200 text-gray-800'}`}
            aria-label="Toggle high contrast"
          >
            HC
          </button>
        </div>
      </div>
    </div>
  );
});

AccessibilityEnhancer.displayName = 'AccessibilityEnhancer';export default AccessibilityEnhancer;