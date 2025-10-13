<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
'use client;

<<<<<<< HEAD
import React, { useEffect, useState } from 'react;

import { Eye, EyeOff, Volume2, VolumeX, Type, Contrast } from lucide-react;

interface AccessibilitySettings {}
  highContrast: boolean;

  largeText: boolean;

  reducedMotion: boolean;

  screenReader: boolean;

  focusVisible: boolean;

interface EnhancedAccessibilityProps {
  className?: string;
  children?: React.ReactNode;
}

export default function EnhancedAccessibility({ className = '', children }: EnhancedAccessibilityProps) {
  return (
    <div className={`enhanced-accessibility ${className}`}>
  onMetricsUpdate?: (metrics: AccessibilityMetrics) => void;
  enableMonitoring?: boolean;
  onMetricsUpdate,
  enableMonitoring = true
}) => {
  const [metrics, setMetrics] = useState<AccessibilityMetrics>({
    contrastRatio: 0,
    focusableElements: 0,
    headingStructure: 0,
    altTexts: 0,
    ariaLabels: 0,
    keyboardNavigation: false,
    screenReaderCompatible: false
  });

  const [isVisible, setIsVisible] = useState(false);

  const checkContrastRatio = useCallback(() => {
    if (typeof window === 'undefined') return 0;

    const elements = document.querySelectorAll('*');
    let totalRatio = 0;
    let checkedElements = 0;

    elements.forEach((element) => {
      const styles = window.getComputedStyle(element);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;

      if (color && backgroundColor && color !== 'rgba(0, 0, 0, 0)' && backgroundColor !== 'rgba(0, 0, 0, 0)') {
        // Simple contrast ratio calculation (simplified)
        const colorLuminance = getLuminance(color);
        const bgLuminance = getLuminance(backgroundColor);
        const ratio = (Math.max(colorLuminance, bgLuminance) + 0.05) / (Math.min(colorLuminance, bgLuminance) + 0.05);
        
        if (ratio > 0) {
          totalRatio += ratio;
          checkedElements++;
        }
      }
    });

    return checkedElements > 0 ? totalRatio / checkedElements : 0;
  }, []);

  const getLuminance = (color: string) => {
    // Simplified luminance calculation
    const rgb = color.match(/\d+/g);
    if (!rgb || rgb.length < 3) return 0;
    
    const [r, g, b] = rgb.map(Number);
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  };

  const checkFocusableElements = useCallback(() => {
    if (typeof window === 'undefined') return 0;

    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])'
    ];

    let count = 0;
    focusableSelectors.forEach(selector => {
      count += document.querySelectorAll(selector).length;
    });

    return count;
  }, []);

  const checkHeadingStructure = useCallback(() => {
    if (typeof window === 'undefined') return 0;

    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let score = 0;
    let lastLevel = 0;

    headings.forEach((heading) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level === 1) {
        score += 10; // h1 is important
      } else if (level <= lastLevel + 1) {
        score += 5; // Proper hierarchy
      } else {
        score -= 2; // Improper hierarchy
      }
      lastLevel = level;
    });

    return Math.max(0, score);
  }, []);

  const checkAltTexts = useCallback(() => {
    if (typeof window === 'undefined') return 0;

    const images = document.querySelectorAll('img');
    let altCount = 0;

    images.forEach((img) => {
      if (img.alt && img.alt.trim() !== '') {
        altCount++;
      }
    });

    return images.length > 0 ? (altCount / images.length) * 100 : 100;
  }, []);

  const checkAriaLabels = useCallback(() => {
    if (typeof window === 'undefined') return 0;

    const elements = document.querySelectorAll('[aria-label], [aria-labelledby]');
    return elements.length;
  }, []);

  const checkKeyboardNavigation = useCallback(() => {
    if (typeof window === 'undefined') return false;

    // Check if focus is visible
    const focusableElements = document.querySelectorAll('a, button, input, select, textarea, [tabindex]');
    let keyboardAccessible = true;

    focusableElements.forEach((element) => {
      if (element instanceof HTMLElement) {
        element.addEventListener('focus', () => {
          const styles = window.getComputedStyle(element);
          if (styles.outline === 'none' && !styles.boxShadow) {
            keyboardAccessible = false;
          }
        });
      }
    });

    return keyboardAccessible;
  }, []);

  const checkScreenReaderCompatibility = useCallback(() => {
    if (typeof window === 'undefined') return false;

    // Check for proper ARIA landmarks
    const landmarks = document.querySelectorAll('[role="main"], [role="navigation"], [role="banner"], [role="contentinfo"]');
    const hasMain = document.querySelector('main, [role="main"]');
    const hasNavigation = document.querySelector('nav, [role="navigation"]');
    
    return landmarks.length > 0 && hasMain && hasNavigation;
  }, []);

  const runAccessibilityAudit = useCallback(() => {
    if (!enableMonitoring) return;

    const newMetrics: AccessibilityMetrics = {
      contrastRatio: checkContrastRatio(),
      focusableElements: checkFocusableElements(),
      headingStructure: checkHeadingStructure(),
      altTexts: checkAltTexts(),
      ariaLabels: checkAriaLabels(),
      keyboardNavigation: checkKeyboardNavigation(),
      screenReaderCompatible: checkScreenReaderCompatibility()
=======
import React, { useEffect, useState } from 'react';
import SkipLink from './SkipLink';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  focusVisible: boolean;
  screenReader: boolean;
}

const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    focusVisible: false,
    screenReader: false
  });

  useEffect(() => {
    // Detect user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    setSettings(prev => ({
      ...prev,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast
    }));

    // Apply accessibility settings
    applyAccessibilitySettings({
      ...settings,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast
    });
  }, []);

  const applyAccessibilitySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast mode
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Large text mode
    if (newSettings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Focus visible
    if (newSettings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  };

  const toggleSetting = (setting: keyof AccessibilitySettings) => {
    const newSettings = {
      ...settings,
      [setting]: !settings[setting]
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1460
    };
    setSettings(newSettings);
    applyAccessibilitySettings(newSettings);
  };

<<<<<<< HEAD
    setMetrics(newMetrics);
    
    if (onMetricsUpdate) {
      onMetricsUpdate(newMetrics);
    }

    // Show accessibility indicator in development
    if (process.env['NODE_ENV'] === 'development') {
      setIsVisible(true);
      const timer = setTimeout(() => setIsVisible(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [
    enableMonitoring,
    onMetricsUpdate,
    checkContrastRatio,
    checkFocusableElements,
    checkHeadingStructure,
    checkAltTexts,
    checkAriaLabels,
    checkKeyboardNavigation,
    checkScreenReaderCompatibility
  ]);

  useEffect(() => {
    runAccessibilityAudit();

    // Run audit on DOM changes
    const observer = new MutationObserver(runAccessibilityAudit);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class', 'style', 'aria-label', 'aria-labelledby']
    });

    return () => observer.disconnect();
  }, [runAccessibilityAudit]);

  // Calculate accessibility score
  const getAccessibilityScore = useCallback(() => {
    const scores = [];
    
    // Contrast ratio score (0-100)
    if (metrics.contrastRatio > 0) {
      scores.push(Math.min(100, (metrics.contrastRatio / 4.5) * 100));
    }
    
    // Alt texts score
    scores.push(metrics.altTexts);
    
    // Heading structure score
    scores.push(Math.min(100, metrics.headingStructure));
    
    // ARIA labels bonus
    if (metrics.ariaLabels > 0) {
      scores.push(Math.min(100, metrics.ariaLabels * 10));
    }
    
    // Keyboard navigation bonus
    if (metrics.keyboardNavigation) {
      scores.push(100);
    } else {
      scores.push(0);
    }
    
    // Screen reader compatibility bonus
    if (metrics.screenReaderCompatible) {
      scores.push(100);
    } else {
      scores.push(50);
    }
    
    return scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
  }, [metrics]);

  const accessibilityScore = getAccessibilityScore();

  // Add accessibility enhancements
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Add skip links if not present
    if (!document.querySelector('.skip-link')) {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.className = 'skip-link';
      skipLink.textContent = 'Skip to main content';
      skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        z-index: 1000;
        transition: top 0.3s;
      `;
      
      skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
      });
      
      skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
      });
      
      document.body.insertBefore(skipLink, document.body.firstChild);
    }

    // Ensure main content has proper ID
    const mainContent = document.querySelector('main, [role="main"]');
    if (mainContent && !mainContent.id) {
      mainContent.id = 'main-content';
    }

    // Add focus indicators
    const style = document.createElement('style');
    style.textContent = `
      *:focus {
        outline: 2px solid #3b82f6 !important;
        outline-offset: 2px !important;
      }
      
      .skip-link:focus {
        outline: 2px solid #fff !important;
      }
    `;
    document.head.appendChild(style);
  }, []);

  if (!isVisible && process.env['NODE_ENV'] === 'production') {
    return <>{children}</>;
  }
=======
'use client';
import React, { useEffect, useState } from 'react';
import { Eye, EyeOff, Volume2, VolumeX, Type, Contrast } from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  screenReader: boolean;
  keyboardNavigation: boolean;
}

interface EnhancedAccessibilityProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247

  return (
    <>
      {children}
      {process.env['NODE_ENV'] === 'development' && (
        <div className="fixed bottom-4 left-4 bg-gray-900 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold">Accessibility Monitor</h3>
            <div className={`w-3 h-3 rounded-full ${
              accessibilityScore >= 90 ? 'bg-green-500' : 
              accessibilityScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
            }`} />
          </div>
          
          <div className="space-y-1 text-xs">
            <div className="flex justify-between">
              <span>Accessibility Score:</span>
              <span className="font-mono">{accessibilityScore}/100</span>
            </div>
            
            <div className="flex justify-between">
              <span>Focusable Elements:</span>
              <span className="font-mono">{metrics.focusableElements}</span>
            </div>
            
            <div className="flex justify-between">
              <span>Alt Text Coverage:</span>
              <span className="font-mono">{Math.round(metrics.altTexts)}%</span>
            </div>
            
            <div className="flex justify-between">
              <span>ARIA Labels:</span>
              <span className="font-mono">{metrics.ariaLabels}</span>
            </div>
            
            <div className="flex justify-between">
              <span>Keyboard Nav:</span>
              <span className="font-mono">{metrics.keyboardNavigation ? '✓' : '✗'}</span>
            </div>
            
            <div className="flex justify-between">
              <span>Screen Reader:</span>
              <span className="font-mono">{metrics.screenReaderCompatible ? '✓' : '✗'}</span>
            </div>
          </div>
        </div>
      )}
    </>
}
export default EnhancedAccessibility;
=======
'use client';
import React, { useEffect, useState } from 'react';

=======
'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAnalytics } from './EnhancedAnalytics';

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  screenReader: boolean;
<<<<<<< HEAD
}

const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {
=======
  keyboardNavigation: boolean;
}

interface AccessibilityContextType {
  settings: AccessibilitySettings;
  updateSettings: (settings: Partial<AccessibilitySettings>) => void;
  announceToScreenReader: (message: string) => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};

interface EnhancedAccessibilityProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({
  children,
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true,
  enableFocusManagement = true
}) => {
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
    fontSize: 'medium',
<<<<<<< HEAD
<<<<<<< HEAD
    screenReader: false
  });
=======
    screenReader: false,
    keyboardNavigation: true
  });

  const [showSettings, setShowSettings] = useState(false);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247

  // Load settings from localStorage
  useEffect(() => {
<<<<<<< HEAD
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    setSettings(prev => ({
      ...prev,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast
    }));

    // Listen for changes in user preferences
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');
    
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, reducedMotion: e.matches }));
    };
    
    const handleContrastChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, highContrast: e.matches }));
    };
    
    motionQuery.addEventListener('change', handleMotionChange);
    contrastQuery.addEventListener('change', handleContrastChange);
    
    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      contrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, []);

  useEffect(() => {
    // Apply accessibility settings to the document
    const root = document.documentElement;
    
    // High contrast mode
=======
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  // Apply accessibility settings
  useEffect(() => {
    const root = document.documentElement;
    
    // High contrast
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
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
<<<<<<< HEAD
    
    // Screen reader optimizations
    if (settings.screenReader) {
      root.classList.add('screen-reader-optimized');
    } else {
      root.classList.remove('screen-reader-optimized');
    }
  }, [settings]);

  // Keyboard navigation support
=======

    // Screen reader
    if (settings.screenReader) {
      root.classList.add('screen-reader-mode');
    } else {
      root.classList.remove('screen-reader-mode');
    }
  }, [settings]);

  // Keyboard navigation
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.altKey) {
        event.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
<<<<<<< HEAD
          mainContent.scrollIntoView({ behavior: 'smooth' });
        }
      }
      
      // Skip to navigation
      if (event.key === 'Tab' && event.altKey) {
        event.preventDefault();
        const navigation = document.querySelector('nav');
        if (navigation) {
          const firstLink = navigation.querySelector('a') as HTMLElement;
          if (firstLink) {
            firstLink.focus();
          }
        }
=======
        }
      }

      // Toggle accessibility settings
      if (event.key === 'Escape' && event.altKey) {
        event.preventDefault();
        setShowSettings(!showSettings);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
<<<<<<< HEAD
  }, []);
=======
  }, [enableKeyboardNavigation, showSettings]);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247

  // Announce page changes to screen readers
  useEffect(() => {
<<<<<<< HEAD
    const announcePageChange = () => {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = 'Page content has loaded';
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    };

    announcePageChange();
  }, []);

  return (
    <div className="accessibility-wrapper">
      {/* Accessibility Controls */}
      <div className="accessibility-controls" role="toolbar" aria-label="Accessibility controls">
        <button
          className="sr-only focus:not-sr-only"
          onClick={() => setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }))}
          aria-label="Toggle high contrast mode"
        >
          {settings.highContrast ? 'Disable' : 'Enable'} High Contrast
        </button>
        
        <button
          className="sr-only focus:not-sr-only"
          onClick={() => setSettings(prev => ({ ...prev, reducedMotion: !prev.reducedMotion }))}
          aria-label="Toggle reduced motion"
        >
          {settings.reducedMotion ? 'Enable' : 'Disable'} Animations
        </button>
        
        <div className="font-size-controls" role="group" aria-label="Font size controls">
          <button
            className="sr-only focus:not-sr-only"
            onClick={() => setSettings(prev => ({ ...prev, fontSize: 'small' }))}
            aria-label="Small font size"
          >
            A
          </button>
          <button
            className="sr-only focus:not-sr-only"
            onClick={() => setSettings(prev => ({ ...prev, fontSize: 'medium' }))}
            aria-label="Medium font size"
          >
            A
          </button>
          <button
            className="sr-only focus:not-sr-only"
            onClick={() => setSettings(prev => ({ ...prev, fontSize: 'large' }))}
            aria-label="Large font size"
          >
            A
          </button>
        </div>
      </div>
      
      {children}
    </div>
=======
    screenReader: false,
    keyboardNavigation: true
  });

  const updateSettings = (newSettings: Partial<AccessibilitySettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  const announceToScreenReader = (message: string) => {
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

  useEffect(() => {
    // Apply accessibility settings
    if (settings.highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    if (settings.reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }

    document.documentElement.style.fontSize = settings.fontSize === 'small' ? '14px' : 
                                            settings.fontSize === 'large' ? '18px' : '16px';
  }, [settings]);

  return (
    <AccessibilityContext.Provider value={{ settings, updateSettings, announceToScreenReader }}>
      {children}
    </AccessibilityContext.Provider>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
=======
  return (
    <>
      <SkipLink />
      <div className="accessibility-container">
        {/* Accessibility Toolbar */}
        <div className="accessibility-toolbar" role="toolbar" aria-label="Accessibility options">
          <button
            onClick={() => toggleSetting('highContrast')}
            className={`accessibility-btn ${settings.highContrast ? 'active' : ''}`}
            aria-pressed={settings.highContrast}
            title="Toggle high contrast mode"
          >
            <span aria-hidden="true">🔆</span>
            <span className="sr-only">High Contrast</span>
          </button>
          
          <button
            onClick={() => toggleSetting('largeText')}
            className={`accessibility-btn ${settings.largeText ? 'active' : ''}`}
            aria-pressed={settings.largeText}
            title="Toggle large text mode"
          >
            <span aria-hidden="true">🔍</span>
            <span className="sr-only">Large Text</span>
          </button>
          
          <button
            onClick={() => toggleSetting('reducedMotion')}
            className={`accessibility-btn ${settings.reducedMotion ? 'active' : ''}`}
            aria-pressed={settings.reducedMotion}
            title="Toggle reduced motion"
          >
            <span aria-hidden="true">⏸️</span>
            <span className="sr-only">Reduced Motion</span>
          </button>
        </div>

        {/* Main Content */}
        <div className={`accessibility-content ${settings.highContrast ? 'high-contrast' : ''} ${settings.largeText ? 'large-text' : ''}`}>
          {children}
        </div>
      </div>

      <style jsx>{`
        .accessibility-toolbar {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 1000;
          display: flex;
          gap: 8px;
          background: rgba(0, 0, 0, 0.8);
          padding: 8px;
          border-radius: 8px;
          backdrop-filter: blur(10px);
        }

        .accessibility-btn {
          background: transparent;
          border: 2px solid #fff;
          color: #fff;
          padding: 8px;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 16px;
        }

        .accessibility-btn:hover,
        .accessibility-btn:focus {
          background: #fff;
          color: #000;
        }

        .accessibility-btn.active {
          background: #8b5cf6;
          border-color: #8b5cf6;
        }

        .accessibility-btn:focus {
          outline: 2px solid #8b5cf6;
          outline-offset: 2px;
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

        .high-contrast {
          --text-primary: #ffffff;
          --text-secondary: #e5e7eb;
          --bg-primary: #000000;
          --bg-secondary: #1f2937;
          --accent: #ffff00;
        }

        .large-text {
          font-size: 1.2em;
        }

        .large-text h1 { font-size: 3em; }
        .large-text h2 { font-size: 2.5em; }
        .large-text h3 { font-size: 2em; }
        .large-text p { font-size: 1.3em; }

        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        .focus-visible *:focus {
          outline: 3px solid #8b5cf6;
          outline-offset: 2px;
        }
      `}</style>
    </>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1460
  );
};

export default EnhancedAccessibility;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0d10
=======
    if (!enableFocusManagement) return;

    const manageFocus = () => {
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      focusableElements.forEach((element) => {
        element.addEventListener('focus', () => {
          element.classList.add('focus-visible');
        });

        element.addEventListener('blur', () => {
          element.classList.remove('focus-visible');
        });
      });
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', manageFocus);
    } else {
      manageFocus();
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', manageFocus);
    };
  }, [enableFocusManagement]);

  const updateSetting = (key: keyof AccessibilitySettings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <>
      {children}
      
      {/* Accessibility Settings Panel */}
      {showSettings && (
        <div className="fixed top-4 right-4 bg-slate-800 border border-slate-700 rounded-lg p-4 z-50 shadow-lg">
          <h3 className="text-white font-semibold mb-4">Accessibility Settings</h3>
          
          <div className="space-y-3">
            <label className="flex items-center space-x-2 text-white">
              <input
                type="checkbox"
                checked={settings.highContrast}
                onChange={(e) => updateSetting('highContrast', e.target.checked)}
                className="rounded"
              />
              <Contrast className="w-4 h-4" />
              <span>High Contrast</span>
            </label>

            <label className="flex items-center space-x-2 text-white">
              <input
                type="checkbox"
                checked={settings.reducedMotion}
                onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                className="rounded"
              />
              <span>Reduce Motion</span>
            </label>

            <label className="flex items-center space-x-2 text-white">
              <input
                type="checkbox"
                checked={settings.screenReader}
                onChange={(e) => updateSetting('screenReader', e.target.checked)}
                className="rounded"
              />
              {settings.screenReader ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              <span>Screen Reader Mode</span>
            </label>

            <div className="flex items-center space-x-2 text-white">
              <Type className="w-4 h-4" />
              <span>Font Size:</span>
              <select
                value={settings.fontSize}
                onChange={(e) => updateSetting('fontSize', e.target.value)}
                className="bg-slate-700 text-white rounded px-2 py-1"
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
          </div>

          <button
            onClick={() => setShowSettings(false)}
            className="mt-4 w-full bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded transition-colors"
          >
            Close
          </button>
        </div>
      )}

      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setShowSettings(!showSettings)}
        className="fixed bottom-4 right-4 bg-cyan-600 hover:bg-cyan-700 text-white p-3 rounded-full shadow-lg z-40 transition-colors"
        aria-label="Toggle accessibility settings"
      >
        <Eye className="w-5 h-5" />
      </button>
    </>
  );
};

export default EnhancedAccessibility;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
