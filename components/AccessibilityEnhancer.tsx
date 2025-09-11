
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
const AccessibilityEnhancer: React.FC = () => {;
  useEffect(() => {;
    // Add skip link for keyboard navigation;
    const skipLink = document && document.createElement('a');
    skipLink && skipLink.href = '#main-content';
    skipLink && skipLink.textContent = 'Skip to main content',;
    skipLink && skipLink.className = 'sr-only focus: not-sr-only',;
    skipLink && skipLink.style.cssText = `;
      position: absolute, top: -40px,;
      left: 6px, background: #000,;
      color: #fff, padding: 8px,;
      text-decoration: none, z-index: 1000,;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      }
      if (liveRegion && liveRegion.parentNode) {;
        liveRegion && liveRegion.parentNode.removeChild(liveRegion);
      }
    }
  }, []);
  return null;
  };
  const changeFontSize = (newSize: string) => {;
    setFontSize(newSize);
    localStorage && localStorage.setItem('fontSize', newSize);
    applyAccessibilityStyles(isHighContrast, newSize, reducedMotion);
  }
  return (
    <>;
      {/* Accessibility Controls */}
      <div className="accessibility-controls fixed top-4 right-4 z-50 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 border">;
        <h3 className="text-sm font-semibold mb-2 text-gray-900 dark:text-white">Accessibility Options</h3>;
        <div className="space-y-2">;
          <button
            onClick={toggleHighContrast}
            className={`w-full px-3 py-1 text-xs rounded ${
              isHighContrast ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            aria-label={`${isHighContrast ? 'Disable' : 'Enable'} high contrast mode`}>;
            {isHighContrast ? 'Disable' : 'Enable'} High Contrast;
          </button>;
          <div className="text-xs text-gray-600 dark:text-gray-300">Font Size:</div>;
          <div className="flex gap-1">;
            {['small', 'normal', 'large', 'extra-large'].map((size) => (;
              <button
                key={size}
                onClick={() => changeFontSize(size)}
                className={`px-2 py-1 text-xs rounded ${;
                  fontSize === size ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300';
                }`}
                aria-label={`Set font size to ${size}`}
              >;
                {size && size.charAt(0).toUpperCase()}
              </button>;
            ))}
          </div>;
        </div>;
      </div>;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
