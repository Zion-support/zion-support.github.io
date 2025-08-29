import React, { useEffect, useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  Contrast, 
  MousePointer, 
  Keyboard,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Settings,
  X,
  CheckCircle,
  AlertTriangle,
  Info,
  Sun,
  Moon,
  Monitor,
  Accessibility,
  Braille,
  Headphones
} from 'lucide-react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableHighContrast?: boolean;
  enableReducedMotion?: boolean;
  enableScreenReader?: boolean;
  enableKeyboardNavigation?: boolean;
}

interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  focusIndicator: boolean;
  skipLinks: boolean;
}

export function AccessibilityEnhancer({
  children,
  enableHighContrast = true,
  enableReducedMotion = true,
  enableScreenReader = true,
  enableKeyboardNavigation = true
}: AccessibilityEnhancerProps) {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
    fontSize: 'medium',
    focusIndicator: true,
    skipLinks: true
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);

  // Initialize accessibility settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.warn('Failed to parse accessibility settings:', error);
      }
    }
  }, []);

  // Apply accessibility settings
  useEffect(() => {
    const root = document.documentElement;
    
    // High contrast mode
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Font size
    root.classList.remove('font-small', 'font-medium', 'font-large');
    root.classList.add(`font-${settings.fontSize}`);

    // Focus indicator
    if (settings.focusIndicator) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    // Save settings to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  // Keyboard navigation support
  useEffect(() => {
    if (!enableKeyboardNavigation) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.altKey) {
        e.preventDefault();
        const mainContent = document.querySelector('main');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
        }
      }

      // Skip to navigation
      if (e.key === 'Tab' && e.shiftKey && e.altKey) {
        e.preventDefault();
        const navigation = document.querySelector('nav');
        if (navigation) {
          (navigation as HTMLElement).focus();
        }
      }

      // Escape key to close modals/menus
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation]);

  // Focus management
  useEffect(() => {
    if (!enableKeyboardNavigation) return;

    const handleFocusIn = (e: FocusEvent) => {
      setCurrentFocus(e.target as HTMLElement);
      
      // Announce focus changes to screen readers
      if (enableScreenReader && e.target instanceof HTMLElement) {
        const label = e.target.getAttribute('aria-label') || 
                     e.target.getAttribute('title') || 
                     e.target.textContent;
        
        if (label) {
          announceToScreenReader(`Focused on ${label}`);
        }
      }
    };

    document.addEventListener('focusin', handleFocusIn);
    return () => document.removeEventListener('focusin', handleFocusIn);
  }, [enableKeyboardNavigation, enableScreenReader]);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    if (!enableScreenReader) return;

    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;

    document.body.appendChild(announcement);
    
    // Remove after announcement
    setTimeout(() => {
      if (announcement.parentNode) {
        announcement.parentNode.removeChild(announcement);
      }
    }, 1000);
  }, [enableScreenReader]);

  // Toggle accessibility setting
  const toggleSetting = useCallback((key: keyof AccessibilitySettings, value?: any) => {
    setSettings(prev => ({
      ...prev,
      [key]: value !== undefined ? value : !prev[key]
    }));
  }, []);

  // Skip links component
  const SkipLinks = () => {
    if (!settings.skipLinks) return null;

    return (
      <div className="skip-links">
        <a 
          href="#main-content" 
          className="skip-link"
          onClick={(e) => {
            e.preventDefault();
            const mainContent = document.getElementById('main-content');
            if (mainContent) {
              mainContent.focus();
              announceToScreenReader('Skipped to main content');
            }
          }}
        >
          Skip to main content
        </a>
        <a 
          href="#navigation" 
          className="skip-link"
          onClick={(e) => {
            e.preventDefault();
            const navigation = document.getElementById('navigation');
            if (navigation) {
              navigation.focus();
              announceToScreenReader('Skipped to navigation');
            }
          }}
        >
          Skip to navigation
        </a>
      </div>
    );
  };

  // Accessibility menu
  const AccessibilityMenu = () => {
    if (!isMenuOpen) return null;

    return (
      <div 
        className="accessibility-menu"
        role="dialog"
        aria-labelledby="accessibility-menu-title"
        aria-modal="true"
      >
        <div className="accessibility-menu-header">
          <h2 id="accessibility-menu-title">Accessibility Settings</h2>
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close accessibility menu"
            className="close-button"
          >
            ×
          </button>
        </div>
        
        <div className="accessibility-menu-content">
          {enableHighContrast && (
            <div className="setting-group">
              <label className="setting-label">
                <input
                  type="checkbox"
                  checked={settings.highContrast}
                  onChange={(e) => toggleSetting('highContrast', e.target.checked)}
                />
                High Contrast Mode
              </label>
              <p className="setting-description">
                Increases color contrast for better visibility
              </p>
            </div>
          )}

          {enableReducedMotion && (
            <div className="setting-group">
              <label className="setting-label">
                <input
                  type="checkbox"
                  checked={settings.reducedMotion}
                  onChange={(e) => toggleSetting('reducedMotion', e.target.checked)}
                />
                Reduced Motion
              </label>
              <p className="setting-description">
                Reduces animations and motion effects
              </p>
            </div>
          )}

          <div className="setting-group">
            <label className="setting-label">Font Size</label>
            <div className="font-size-controls">
              {(['small', 'medium', 'large'] as const).map((size) => (
                <button
                  key={size}
                  onClick={() => toggleSetting('fontSize', size)}
                  className={`font-size-button ${settings.fontSize === size ? 'active' : ''}`}
                  aria-pressed={settings.fontSize === size}
                >
                  {size.charAt(0).toUpperCase() + size.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {enableKeyboardNavigation && (
            <div className="setting-group">
              <label className="setting-label">
                <input
                  type="checkbox"
                  checked={settings.focusIndicator}
                  onChange={(e) => toggleSetting('focusIndicator', e.target.checked)}
                />
                Focus Indicator
              </label>
              <p className="setting-description">
                Shows clear focus indicators for keyboard navigation
              </p>
            </div>
          )}

          <div className="setting-group">
            <label className="setting-label">
              <input
                type="checkbox"
                checked={settings.skipLinks}
                onChange={(e) => toggleSetting('skipLinks', e.target.checked)}
              />
              Skip Links
            </label>
            <p className="setting-description">
              Provides quick navigation to main content areas
            </p>
          </div>
        </div>

        <div className="accessibility-menu-footer">
          <button
            onClick={() => {
              setSettings({
                highContrast: false,
                reducedMotion: false,
                fontSize: 'medium',
                focusIndicator: true,
                skipLinks: true
              });
              announceToScreenReader('Accessibility settings reset to default');
            }}
            className="reset-button"
          >
            Reset to Default
          </button>
        </div>
      </div>
    );
  };

  // Accessibility toggle button
  const AccessibilityToggle = () => (
    <button
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      aria-label="Open accessibility settings"
      aria-expanded={isMenuOpen}
      className="accessibility-toggle"
    >
      <svg className="accessibility-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2v20M2 12h20" />
        <path d="M12 2a10 10 0 0 1 0 20" />
      </svg>
      <span className="sr-only">Accessibility</span>
    </button>
  );

  return (
    <AccessibilityContext.Provider value={{ settings, announceToScreenReader }}>
      <SkipLinks />
      
      <div className="accessibility-controls">
        <AccessibilityToggle />
        <AccessibilityMenu />
      </div>

      {/* Focus trap for accessibility menu */}
      {isMenuOpen && (
        <FocusTrap
          onDeactivate={() => setIsMenuOpen(false)}
          focusTrapOptions={{
            clickOutsideDeactivates: true,
            escapeDeactivates: true
          }}
        >
          <AccessibilityMenu />
        </FocusTrap>
      )}

      {children}
    </AccessibilityContext.Provider>
  );
}

// Context for accessibility settings
const AccessibilityContext = React.createContext<{
  settings: AccessibilitySettings;
  announceToScreenReader: (message: string) => void;
}>({
  settings: {
    highContrast: false,
    reducedMotion: false,
    fontSize: 'medium',
    focusIndicator: true,
    skipLinks: true
  },
  announceToScreenReader: () => {}
});

export const useAccessibility = () => React.useContext(AccessibilityContext);

// Focus trap component for modals
function FocusTrap({ children, onDeactivate, focusTrapOptions }: {
  children: React.ReactNode;
  onDeactivate: () => void;
  focusTrapOptions: any;
}) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const focusableElements = containerRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    if (firstElement) {
      firstElement.focus();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div ref={containerRef} className="focus-trap">
      {children}
    </div>
  );
}

// Screen reader only text component
export function ScreenReaderOnly({ children }: { children: React.ReactNode }) {
  return (
    <span className="sr-only">
      {children}
    </span>
  );
}

// Accessible button component
export function AccessibleButton({
  children,
  onClick,
  disabled = false,
  loading = false,
  ...props
}: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  [key: string]: any;
}) {
  const { announceToScreenReader } = useAccessibility();

  const handleClick = useCallback(() => {
    if (onClick && !disabled && !loading) {
      onClick();
      announceToScreenReader('Button clicked');
    }
  }, [onClick, disabled, loading, announceToScreenReader]);

  return (
    <button
      onClick={handleClick}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading && (
        <span className="loading-spinner" aria-hidden="true">
          <svg className="animate-spin" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          </svg>
        </span>
      )}
      {children}
    </button>
  );
}

// Accessible form field component
export function AccessibleFormField({
  label,
  error,
  required = false,
  children,
  ...props
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  [key: string]: any;
}) {
  const id = React.useId();
  const errorId = React.useId();

  return (
    <div className="form-field" {...props}>
      <label htmlFor={id} className="form-label">
        {label}
        {required && <span className="required-indicator" aria-label="required">*</span>}
      </label>
      
      {React.cloneElement(children as React.ReactElement, {
        id,
        'aria-describedby': error ? errorId : undefined,
        'aria-invalid': error ? 'true' : 'false',
        required
      })}
      
      {error && (
        <div id={errorId} className="error-message" role="alert">
          {error}
        </div>
      )}
    </div>
  );
}
