import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isKeyboardNavigation, setIsKeyboardNavigation] = useState(false);
  const [highContrastMode, setHighContrastMode] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    // Keyboard navigation detection
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setIsKeyboardNavigation(true);
        document.body.classList.add('keyboard-navigation');
      }
    };

    const handleMouseDown = () => {
      setIsKeyboardNavigation(false);
      document.body.classList.remove('keyboard-navigation');
    };

    // High contrast mode detection
    const checkHighContrast = () => {
      if (window.matchMedia('(prefers-contrast: high)').matches) {
        setHighContrastMode(true);
        document.body.classList.add('high-contrast');
      }
    };

    // Font size preferences
    const checkFontSize = () => {
      const savedFontSize = localStorage.getItem('fontSize');
      if (savedFontSize) {
        setFontSize(parseInt(savedFontSize));
        document.documentElement.style.fontSize = `${savedFontSize}px`;
      }
    };

    // Reduced motion preferences
    const checkReducedMotion = () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduced-motion');
      }
    };

    // Initialize accessibility features
    checkHighContrast();
    checkFontSize();
    checkReducedMotion();

    // Add event listeners
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    // Add skip links
    addSkipLinks();

    // Enhance focus management
    enhanceFocusManagement();

    // Add ARIA labels to interactive elements
    addAriaLabels();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  const addSkipLinks = () => {
    const skipLinks = [
      { href: '#main-content', text: 'Skip to main content' },
      { href: '#navigation', text: 'Skip to navigation' },
      { href: '#footer', text: 'Skip to footer' }
    ];

    skipLinks.forEach(link => {
      const existingLink = document.querySelector(`a[href="${link.href}"]`);
      if (!existingLink) {
        const skipLink = document.createElement('a');
        skipLink.href = link.href;
        skipLink.textContent = link.text;
        skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50 transition-all duration-200';
        skipLink.setAttribute('tabindex', '1');
        document.body.insertBefore(skipLink, document.body.firstChild);
      }
    });
  };

  const enhanceFocusManagement = () => {
    // Add focus indicators for keyboard navigation
    const style = document.createElement('style');
    style.textContent = `
      .keyboard-navigation *:focus {
        outline: 2px solid #4f46e5 !important;
        outline-offset: 2px !important;
      }
      
      .keyboard-navigation button:focus,
      .keyboard-navigation a:focus,
      .keyboard-navigation input:focus,
      .keyboard-navigation textarea:focus,
      .keyboard-navigation select:focus {
        box-shadow: 0 0 0 2px #4f46e5 !important;
      }
      
      .high-contrast {
        filter: contrast(1.2) brightness(1.1);
      }
      
      .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    `;
    document.head.appendChild(style);
  };

  const addAriaLabels = () => {
    // Add ARIA labels to buttons without text
    const iconButtons = document.querySelectorAll('button:not([aria-label])');
    iconButtons.forEach(button => {
      const icon = button.querySelector('svg');
      if (icon && !button.textContent?.trim()) {
        const iconName = icon.getAttribute('data-lucide') || 'button';
        button.setAttribute('aria-label', iconName.replace(/-/g, ' '));
      }
    });

    // Add ARIA labels to links
    const links = document.querySelectorAll('a:not([aria-label])');
    links.forEach(link => {
      if (link.textContent?.trim()) {
        link.setAttribute('aria-label', `Link to ${link.textContent.trim()}`);
      }
    });

    // Add role attributes to interactive elements
    const interactiveElements = document.querySelectorAll('[role="button"]:not(button)');
    interactiveElements.forEach(element => {
      element.setAttribute('tabindex', '0');
      element.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          (element as HTMLElement).click();
        }
      });
    });
  };

  const toggleHighContrast = () => {
    setHighContrastMode(!highContrastMode);
    document.body.classList.toggle('high-contrast');
  };

  const increaseFontSize = () => {
    const newSize = Math.min(fontSize + 2, 24);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}px`;
    localStorage.setItem('fontSize', newSize.toString());
  };

  const decreaseFontSize = () => {
    const newSize = Math.max(fontSize - 2, 12);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}px`;
    localStorage.setItem('fontSize', newSize.toString());
  };

  const resetFontSize = () => {
    setFontSize(16);
    document.documentElement.style.fontSize = '16px';
    localStorage.removeItem('fontSize');
  };

  return (
    <>
      {children}
      
      {/* Accessibility Controls */}
      <div className="fixed bottom-4 left-4 z-50 space-y-2">
        <button
          onClick={toggleHighContrast}
          className="bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
          aria-label="Toggle high contrast mode"
          title="Toggle high contrast mode"
        >
          {highContrastMode ? '🌞' : '🌙'}
        </button>
        
        <div className="bg-gray-800 text-white p-2 rounded-lg shadow-lg">
          <div className="text-xs mb-1">Font Size</div>
          <div className="flex gap-1">
            <button
              onClick={decreaseFontSize}
              className="bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded text-xs"
              aria-label="Decrease font size"
            >
              A-
            </button>
            <button
              onClick={resetFontSize}
              className="bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded text-xs"
              aria-label="Reset font size"
            >
              A
            </button>
            <button
              onClick={increaseFontSize}
              className="bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded text-xs"
              aria-label="Increase font size"
            >
              A+
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccessibilityEnhancer;