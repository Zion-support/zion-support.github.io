<<<<<<< HEAD
import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('normal');
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check for user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReducedMotion(prefersReducedMotion);

    // Apply accessibility settings from localStorage
    const savedHighContrast = localStorage.getItem('highContrast') === 'true';
    const savedFontSize = localStorage.getItem('fontSize') || 'normal';
    
    setIsHighContrast(savedHighContrast);
    setFontSize(savedFontSize);
=======
import React, { useEffect } from "react"
const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {"
    if (typeof window !== "undefined") {,
      // comment
const handleKeyDown = (event: KeyboardEvent) => {"
        if (event.key === "Tab") {",
          document.body.classList.add("keyboard-navigation"),
        }

      }

      const handleMouseDown = () => {"
        document.body.classList.remove("keyboard-navigation")
}

"
      document.addEventListener("keydown", handleKeyDown)
}
      document.addEventListener("mousedown", handleMouseDown)
}
      // comment
const style = document.createElement("style")
}
      style.textContent = "
        .keyboard-navigation *:focus {
          outline: 2px solid #3B82F6 !important,
          outline-offset: 2px !important,
      "
      document.head.appendChild(style)
}
      return () => {"
        document.removeEventListener("keydown", handleKeyDown)
}
        document.removeEventListener("mousedown", handleMouseDown)
}
>>>>>>> main

    }

<<<<<<< HEAD
  const applyAccessibilityStyles = (highContrast: boolean, fontSize: string, reducedMotion: boolean) => {
    const root = document.documentElement;
    
    // High contrast mode
    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Font size adjustments
    root.classList.remove('font-small', 'font-normal', 'font-large', 'font-extra-large');
    root.classList.add(`font-${fontSize}`);

    // Reduced motion
    if (reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
  };

  const toggleHighContrast = () => {
    const newValue = !isHighContrast;
    setIsHighContrast(newValue);
    localStorage.setItem('highContrast', newValue.toString());
    applyAccessibilityStyles(newValue, fontSize, reducedMotion);
  };

  const changeFontSize = (newSize: string) => {
    setFontSize(newSize);
    localStorage.setItem('fontSize', newSize);
    applyAccessibilityStyles(isHighContrast, newSize, reducedMotion);
  };

  return (
    <>
      {/* Accessibility Controls */}
      <div className="accessibility-controls fixed top-4 right-4 z-50 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 border">
        <h3 className="text-sm font-semibold mb-2 text-gray-900 dark:text-white">
          Accessibility Options
        </h3>
        
        <div className="space-y-2">
          <button
            onClick={toggleHighContrast}
            className={`w-full px-3 py-1 text-xs rounded ${
              isHighContrast 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            aria-label={`${isHighContrast ? 'Disable' : 'Enable'} high contrast mode`}
          >
            {isHighContrast ? 'Disable' : 'Enable'} High Contrast
          </button>
          
          <div className="text-xs text-gray-600 dark:text-gray-300">
            Font Size:
          </div>
          <div className="flex gap-1">
            {['small', 'normal', 'large', 'extra-large'].map((size) => (
              <button
                key={size}
                onClick={() => changeFontSize(size)}
                className={`px-2 py-1 text-xs rounded ${
                  fontSize === size
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                aria-label={`Set font size to ${size}`}
              >
                {size.charAt(0).toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>

      {/* Screen reader only content */}
      <div className="sr-only">
        <h1>Zion Tech Group - Technology Solutions Provider</h1>
        <p>Leading technology solutions provider helping businesses transform their digital presence 
          with cutting-edge AI, quantum computing, blockchain infrastructure, and innovative development services.
        </p>
      </div>

      {/* Main content */}
      <div id="main-content">
        {children}
      </div>
    </>
  );
};

export default AccessibilityEnhancer;
=======
  }, [])
}
  return null


'export default AccessibilityEnhancer
>>>>>>> main
