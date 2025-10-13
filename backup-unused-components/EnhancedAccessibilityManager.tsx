import React from 'react';

interface AccessibilityManagerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableVoiceNavigation?: boolean;
  enableReducedMotion?: boolean;
}

const EnhancedAccessibilityManager: React.FC<AccessibilityManagerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableFocusManagement = true,
  enableVoiceNavigation = false,
  enableReducedMotion = true,
}) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [isVoiceNavigationActive, setIsVoiceNavigationActive] = useState(false);

  // High contrast mode
  const toggleHighContrast = useCallback(() => {
    setIsHighContrast(prev => {
      const newValue = !prev;
      document.documentElement.classList.toggle('high-contrast', newValue);
      localStorage.setItem('high-contrast', newValue.toString());
      return newValue;
    });
  }, []);

  // Font size adjustment
  const adjustFontSize = useCallback((increment: number) => {
    setFontSize(prev => {
      const newSize = Math.max(12, Math.min(24, prev + increment));
      document.documentElement.style.fontSize = `${newSize}px`;
      localStorage.setItem('font-size', newSize.toString());
      return newSize;
    });
  }, []);

  // Reduced motion
  const toggleReducedMotion = useCallback(() => {
    setIsReducedMotion(prev => {
      const newValue = !prev;
      document.documentElement.classList.toggle('reduced-motion', newValue);
      localStorage.setItem('reduced-motion', newValue.toString());
      return newValue;
    });
  }, []);

  // Voice navigation functions
  const startVoiceNavigation = useCallback(() => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      // Voice navigation started
    };

    recognition.onresult = (event: any) => {
      const command = event.results[event.results.length - 1][0].transcript.toLowerCase().trim();
      
      // Navigation commands
      if (command.includes('go to') || command.includes('navigate to')) {
        const target = command.replace(/go to|navigate to/g, '').trim();
        const element = document.querySelector(`[aria-label*="${target}"], [title*="${target}"]`) as HTMLElement;
        if (element) {
          element.focus();
          element.click();
        }
      } else if (command.includes('click') || command.includes('press')) {
        const target = command.replace(/click|press/g, '').trim();
        const element = document.querySelector(`[aria-label*="${target}"], [title*="${target}"]`) as HTMLElement;
        if (element) {
          element.click();
        }
      } else if (command.includes('scroll')) {
        if (command.includes('up')) {
          window.scrollBy(0, -100);
        } else if (command.includes('down')) {
          window.scrollBy(0, 100);
        }
      }
    };

    recognition.onerror = (event: any) => {
      // Speech recognition error handled silently
    };

    recognition.start();
    (window as any).voiceRecognition = recognition;
  }, []);

  const stopVoiceNavigation = useCallback(() => {
    if ((window as any).voiceRecognition) {
      (window as any).voiceRecognition.stop();
      (window as any).voiceRecognition = null;
    }
  }, []);

  // Voice navigation toggle
  const toggleVoiceNavigation = useCallback(() => {
    if (!enableVoiceNavigation) return;
    
    setIsVoiceNavigationActive(prev => {
      const newValue = !prev;
      if (newValue) {
        startVoiceNavigation();
      } else {
        stopVoiceNavigation();
      }
      return newValue;
    });
  }, [enableVoiceNavigation, startVoiceNavigation, stopVoiceNavigation]);

  // Keyboard navigation enhancements
  const setupKeyboardNavigation = useCallback(() => {
    if (!enableKeyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.altKey) {
        event.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: 'smooth' });
        }
      }

      // Escape key to close modals/dropdowns
      if (event.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur();
        }
      }

      // Arrow key navigation for custom components
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        const focusableElements = document.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const currentIndex = Array.from(focusableElements).indexOf(document.activeElement as Element);
        
        if (currentIndex !== -1) {
          const nextIndex = event.key === 'ArrowDown' 
            ? Math.min(currentIndex + 1, focusableElements.length - 1)
            : Math.max(currentIndex - 1, 0);
          
          (focusableElements[nextIndex] as HTMLElement)?.focus();
          event.preventDefault();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation]);

  // Screen reader enhancements
  const setupScreenReaderSupport = useCallback(() => {
    if (!enableScreenReader) return;

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

      // Add heading hierarchy
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      headings.forEach((heading, index) => {
        if (!heading.getAttribute('id')) {
          heading.setAttribute('id', `heading-${index}`);
        }
      });
    };

    // Announce page changes to screen readers
    const announcePageChange = () => {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = `Page loaded: ${document.title}`;
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    };

    addAriaLandmarks();
    announcePageChange();

    // Re-run on route changes
    const observer = new MutationObserver(() => {
      addAriaLandmarks();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [enableScreenReader]);

  // Focus management
  const setupFocusManagement = useCallback(() => {
    if (!enableFocusManagement) return () => {};

    // Focus trap for modals
    const trapFocus = (element: HTMLElement) => {
      const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
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

    // Focus management for dynamic content
    const manageFocus = () => {
      const skipLink = document.getElementById('skip-to-main');
      if (skipLink) {
        skipLink.addEventListener('click', (e) => {
          e.preventDefault();
          const mainContent = document.getElementById('main-content');
          if (mainContent) {
            mainContent.focus();
            mainContent.scrollIntoView({ behavior: 'smooth' });
          }
        });
      }
    };

    manageFocus();

    // Store focus trap function globally for use in modals
    (window as any).trapFocus = trapFocus;

    return () => {
      // Cleanup function if needed
    };
  }, [enableFocusManagement]);

  // Initialize accessibility features
  useEffect(() => {
    // Load saved preferences
    const savedHighContrast = localStorage.getItem('high-contrast') === 'true';
    const savedFontSize = parseInt(localStorage.getItem('font-size') || '16');
    const savedReducedMotion = localStorage.getItem('reduced-motion') === 'true';

    setIsHighContrast(savedHighContrast);
    setFontSize(savedFontSize);
    setIsReducedMotion(savedReducedMotion);

    if (savedHighContrast) {
      document.documentElement.classList.add('high-contrast');
    }
    if (savedReducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    }
    document.documentElement.style.fontSize = `${savedFontSize}px`;

    // Setup accessibility features
    const cleanupKeyboard = setupKeyboardNavigation();
    const cleanupScreenReader = setupScreenReaderSupport();
    const cleanupFocus = setupFocusManagement();

    return () => {
      cleanupKeyboard?.();
      cleanupScreenReader?.();
      cleanupFocus?.();
    };
  }, [setupKeyboardNavigation, setupScreenReaderSupport, setupFocusManagement]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopVoiceNavigation();
    };
  }, []);

  // Accessibility controls component
  const AccessibilityControls = () => (
    <div className="fixed bottom-4 right-4 z-50 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-200">
      <h3 className="text-sm font-semibold text-gray-700 mb-3">Accessibility</h3>
      <div className="space-y-2">
        {enableHighContrast && (
//           <button
            onClick={toggleHighContrast}
            className={`w-full px-3 py-1 text-xs rounded ${
//               isHighContrast ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            aria-label={`${isHighContrast ? 'Disable' : 'Enable'} high contrast mode`}
//           >
//             High Contrast
</button>
        )}
        
        <div className="flex items-center space-x-2">
//           <button
            onClick={() => adjustFontSize(-2)}
            className="px-2 py-1 text-xs bg-gray-200 text-gray-700 rounded"
            aria-label="Decrease font size"
//           >
//             A-
</button>
          <span className="text-xs text-gray-600">{fontSize}px</span>
//           <button
            onClick={() => adjustFontSize(2)}
            className="px-2 py-1 text-xs bg-gray-200 text-gray-700 rounded"
            aria-label="Increase font size"
//           >
//             A+
</button>
</div>
        
        {enableReducedMotion && (
//           <button
            onClick={toggleReducedMotion}
            className={`w-full px-3 py-1 text-xs rounded ${
//               isReducedMotion ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            aria-label={`${isReducedMotion ? 'Disable' : 'Enable'} reduced motion`}
//           >
//             Reduced Motion
</button>
        )}
        
        {enableVoiceNavigation && (
//           <button
            onClick={toggleVoiceNavigation}
            className={`w-full px-3 py-1 text-xs rounded ${
//               isVoiceNavigationActive ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            aria-label={`${isVoiceNavigationActive ? 'Stop' : 'Start'} voice navigation`}
//           >
            {isVoiceNavigationActive ? 'Stop Voice' : 'Voice Nav'}
</button>
        )}
</div>
</div>
  );
}
