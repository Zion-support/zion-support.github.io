import React, { useEffect, useState } from 'react';

interface EnhancedAccessibilityProps {
  children: React.ReactNode;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    // Check for high contrast preference
    const checkHighContrast = () => {
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      setIsHighContrast(mediaQuery.matches);
      
      mediaQuery.addEventListener('change', (e) => {
        setIsHighContrast(e.matches);
      });
    };

    // Check for reduced motion preference
    const checkReducedMotion = () => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setIsReducedMotion(mediaQuery.matches);
      
      mediaQuery.addEventListener('change', (e) => {
        setIsReducedMotion(e.matches);
      });
    };

    // Add accessibility controls
    const addAccessibilityControls = () => {
      const controls = document.createElement('div');
      controls.id = 'accessibility-controls';
      controls.className = 'fixed top-4 right-4 z-50 bg-slate-800 p-4 rounded-lg shadow-lg';
      controls.innerHTML = `
        <h3 class="text-white font-semibold mb-3">Accessibility</h3>
        <div class="space-y-2">
          <label class="flex items-center text-white text-sm">
            <input type="checkbox" id="high-contrast-toggle" class="mr-2">
            High Contrast
          </label>
          <label class="flex items-center text-white text-sm">
            <input type="checkbox" id="reduced-motion-toggle" class="mr-2">
            Reduced Motion
          </label>
          <div class="flex items-center text-white text-sm">
            <label htmlFor="font-size-slider" class="mr-2">Font Size:</label>
            <input type="range" id="font-size-slider" min="12" max="24" value="16" class="w-20">
          </div>
        </div>
      `;
      document.body.appendChild(controls);

      // Add event listeners
      const highContrastToggle = document.getElementById('high-contrast-toggle') as HTMLInputElement;
      const reducedMotionToggle = document.getElementById('reduced-motion-toggle') as HTMLInputElement;
      const fontSizeSlider = document.getElementById('font-size-slider') as HTMLInputElement;

      highContrastToggle.addEventListener('change', (e) => {
        const target = e.target as HTMLInputElement;
        document.body.classList.toggle('high-contrast', target.checked);
      });

      reducedMotionToggle.addEventListener('change', (e) => {
        const target = e.target as HTMLInputElement;
        document.body.classList.toggle('reduce-motion', target.checked);
      });

      fontSizeSlider.addEventListener('input', (e) => {
        const target = e.target as HTMLInputElement;
        const newSize = parseInt(target.value);
        setFontSize(newSize);
        document.documentElement.style.fontSize = `${newSize}px`;
      });
    };

    // Add screen reader announcements
    const addScreenReaderSupport = () => {
      const announce = (message: string) => {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = message;
        document.body.appendChild(announcement);
        
        setTimeout(() => {
          document.body.removeChild(announcement);
        }, 1000);
      };

      // Make announce function globally available
      (window as any).announce = announce;
    };

    // Add focus management
    const addFocusManagement = () => {
      let focusHistory: HTMLElement[] = [];

      const saveFocus = () => {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement !== document.body) {
          focusHistory.push(activeElement);
        }
      };

      const restoreFocus = () => {
        const lastFocused = focusHistory.pop();
        if (lastFocused && typeof lastFocused.focus === 'function') {
          lastFocused.focus();
        }
      };

      // Add focus management to window
      (window as any).saveFocus = saveFocus;
      (window as any).restoreFocus = restoreFocus;

      // Trap focus in modals
      const trapFocus = (element: HTMLElement) => {
        const focusableElements = element.querySelectorAll(
          'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        const handleTabKey = (e: KeyboardEvent) => {
          if (e.key === 'Tab') {
            if (e.shiftKey) {
              if (document.activeElement === firstElement) {
                lastElement.focus();
                e.preventDefault();
              }
            } else {
              if (document.activeElement === lastElement) {
                firstElement.focus();
                e.preventDefault();
              }
            }
          }
        };

        element.addEventListener('keydown', handleTabKey);
        firstElement?.focus();

        return () => {
          element.removeEventListener('keydown', handleTabKey);
        };
      };

      (window as any).trapFocus = trapFocus;
    };

    // Add keyboard shortcuts
    const addKeyboardShortcuts = () => {
      const shortcuts = {
        'Alt+1': () => {
          const main = document.querySelector('main');
          if (main) {
            main.focus();
            main.scrollIntoView({ behavior: 'smooth' });
          }
        },
        'Alt+2': () => {
          const nav = document.querySelector('nav');
          if (nav) {
            const firstLink = nav.querySelector('a');
            if (firstLink) {
              (firstLink as HTMLElement).focus();
            }
          }
        },
        'Alt+3': () => {
          const footer = document.querySelector('footer');
          if (footer) {
            footer.focus();
            footer.scrollIntoView({ behavior: 'smooth' });
          }
        },
        'Alt+h': () => {
          document.body.classList.toggle('high-contrast');
        },
        'Alt+m': () => {
          document.body.classList.toggle('reduce-motion');
        }
      };

      const handleKeyDown = (e: KeyboardEvent) => {
        const key = `${e.altKey ? 'Alt+' : ''}${e.key}`;
        const shortcut = shortcuts[key as keyof typeof shortcuts];
        if (shortcut) {
          e.preventDefault();
          shortcut();
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    };

    // Initialize all accessibility features
    checkHighContrast();
    checkReducedMotion();
    addAccessibilityControls();
    addScreenReaderSupport();
    addFocusManagement();
    const cleanup = addKeyboardShortcuts();

    return cleanup;
  }, []);

  // Apply dynamic styles based on preferences
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .high-contrast {
        filter: contrast(1.5) brightness(1.2);
      }
      
      .high-contrast .cyber-card {
        border: 3px solid #00ffff !important;
        background: rgba(0, 0, 0, 0.95) !important;
        color: #ffffff !important;
      }
      
      .high-contrast .neon-button {
        border: 3px solid #00ffff !important;
        background: #000000 !important;
        color: #ffffff !important;
      }
      
      .reduce-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
      
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
      
      .focus-visible {
        outline: 3px solid #00ffff !important;
        outline-offset: 2px !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [isHighContrast, isReducedMotion, fontSize]);

  return <>{children}</>;
};

export default EnhancedAccessibility;