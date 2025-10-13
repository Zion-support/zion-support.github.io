import React from 'react';
import React, { useState, useEffect, useCallback } from 'react';
import { Eye, Volume2, VolumeX, Type, MousePointer, Keyboard } from 'lucide-react';
interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusVisible: boolean;
}

interface ImprovedAccessibilityProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableLargeText?: boolean;
  enableReducedMotion?: boolean;
}

const ImprovedAccessibility: React.FC<ImprovedAccessibilityProps> = ({
//   children,
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = false,
  enableLargeText = false,
  enableReducedMotion = false
}) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
//     highContrast: enableHighContrast,
//     largeText: enableLargeText,
//     reducedMotion: enableReducedMotion,
//     screenReader: enableScreenReader,
//     keyboardNavigation: enableKeyboardNavigation,
//     focusVisible: false
  });

  const [isVisible, setIsVisible] = useState(false);

  // Apply accessibility settings
  useEffect(() => {
    const root = document.documentElement;

    // High contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Large text
    if (settings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Screen reader
    if (settings.screenReader) {
      root.setAttribute('aria-live', 'polite');
    } else {
      root.removeAttribute('aria-live');
    }

    // Keyboard navigation
    if (settings.keyboardNavigation) {
      root.classList.add('keyboard-navigation');
    } else {
      root.classList.remove('keyboard-navigation');
    }

    // Focus visible
    if (settings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  }, [settings]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.altKey) {
        event.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: 'smooth' });
        }
      // Toggle accessibility panel
      if (event.key === 'Tab' && event.altKey && event.ctrlKey) {
        event.preventDefault();
        setIsVisible(!isVisible);
      }

      // Focus visible
      if (event.key === 'Tab') {
        setSettings(prev => ({ ...prev, focusVisible: true }));
      }
    };

    const handleMouseDown = () => {
      setSettings(prev => ({ ...prev, focusVisible: false }));
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [settings.keyboardNavigation, isVisible]);

  // Announce changes to screen readers
  const announceToScreenReader = useCallback((message: string) => {
    if (settings.screenReader) {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = message;
      document.body.appendChild(announcement);

      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    }
  }, [settings.screenReader]);

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => {
      const newSettings = { ...prev, [key]: !prev[key] };
      announceToScreenReader(`${key} ${newSettings[key] ? 'enabled' : 'disabled'}`);
      return newSettings;
    });
  };

interface ImprovedAccessibilityProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ImprovedAccessibility({ className = '', children }: ImprovedAccessibilityProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
    <div>
      <h1>Component</h1>
      <p>This component is under construction.</p>
  </div>
    <div>
      <h1>Component</h1>
      <p>This component is under construction.</p>
    </div>
//     <>
      {children}

      {/* Accessibility Toggle Button */}
//       <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed top-4 right-4 z-50 bg-slate-800/90 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-3 text-white hover:bg-slate-700/90 transition-colors"
        aria-label="Open accessibility settings"w-5 h-5"fixed top-16 right-4 z-50 w-80 bg-slate-800/95 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-4 text-white"flex items-center justify-between mb-4"text-lg font-semibold"text-gray-400 hover:text-white"Close accessibility settings"space-y-4"flex items-center justify-between"flex items-center gap-2"w-4 h-4"text-sm"flex items-center justify-between"flex items-center gap-2"w-4 h-4"text-sm"flex items-center justify-between"flex items-center gap-2"w-4 h-4"text-sm"flex items-center justify-between"flex items-center gap-2"w-4 h-4"w-4 h-4"text-sm"flex items-center justify-between"flex items-center gap-2"w-4 h-4"text-sm"mt-6 pt-4 border-t border-white/10"text-sm font-semibold mb-2"text-xs text-gray-400 space-y-1"#main-content"sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded-lg z-50"
        onClick={(e) => {
          e.preventDefault();
          const mainContent = document.getElementById('main-content');
          if (mainContent) {
            mainContent.focus();
            mainContent.scrollIntoView({ behavior: 'smooth' });
          }
        }
//       >
//         Skip to main content
</a>

      {/* Accessibility Styles */}
      <style jsx global>{`
        .high-contrast {
          --tw-bg-opacity: 1;
          --tw-text-opacity: 1;
        }

        .high-contrast * {
          background-color: var(--tw-bg-opacity) !important;
          color: var(--tw-text-opacity) !important;
          border-color: currentColor !important;
        }

        .large-text {
          font-size: 1.125 rem;
        }

        .large-text h1 { font-size: 3.5 rem; }
        .large-text h2 { font-size: 2.5 rem; }
        .large-text h3 { font-size: 2 rem; }
        .large-text h4 { font-size: 1.5 rem; }
        .large-text h5 { font-size: 1.25 rem; }
        .large-text h6 { font-size: 1.125 rem; }

        .reduced-motion * {
          animation-duration: 0.01 ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01 ms !important;
        }

        .keyboard-navigation *:focus {
          outline: 2 px solid #06 b6 d4 !important;
          outline-offset: 2 px !important;
        }

        .focus-visible *:focus {
          outline: 2 px solid #06 b6 d4 !important;
          outline-offset: 2 px !important;
        }

        .sr-only {
          position: absolute;
          width: 1 px;
          height: 1 px;
          padding: 0;
          margin: -1 px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        .focus\\:not-sr-only:focus {
          position: static;
          width: auto;
          height: auto;
          padding: 0.5 rem 1 rem;
          margin: 0;
          overflow: visible;
          clip: auto;
          white-space: normal;
        }
      `}</style>
//     </>
  );
