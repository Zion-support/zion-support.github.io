import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  Contrast, 
  MousePointer, 
  Keyboard,
  Accessibility,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicators: boolean;
}

export function AccessibilityEnhancer() {
  const [isVisible, setIsVisible] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicators: true
  });
  const [accessibilityScore, setAccessibilityScore] = useState(0);
  const [issues, setIssues] = useState<string[]>([]);

  // Apply accessibility settings
  const applySettings = useCallback((newSettings: Partial<AccessibilitySettings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);

    // Apply high contrast
    if (updatedSettings.highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    // Apply large text
    if (updatedSettings.largeText) {
      document.documentElement.classList.add('large-text');
    } else {
      document.documentElement.classList.remove('large-text');
    }

    // Apply reduced motion
    if (updatedSettings.reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }

    // Apply focus indicators
    if (updatedSettings.focusIndicators) {
      document.documentElement.classList.add('focus-visible');
    } else {
      document.documentElement.classList.remove('focus-visible');
    }

    // Store settings in localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(updatedSettings));
  }, [settings]);

  // Check accessibility issues
  const checkAccessibility = useCallback(() => {
    const newIssues: string[] = [];
    let score = 100;

    // Check for missing alt text
    const images = document.querySelectorAll('img');
    const imagesWithoutAlt = Array.from(images).filter(img => !img.alt);
    if (imagesWithoutAlt.length > 0) {
      newIssues.push(`${imagesWithoutAlt.length} images missing alt text`);
      score -= 20;
    }

    // Check for missing ARIA labels
    const interactiveElements = document.querySelectorAll('button, input, select, textarea, a');
    const elementsWithoutAria = Array.from(interactiveElements).filter(el => 
      !el.getAttribute('aria-label') && !el.getAttribute('aria-labelledby')
    );
    if (elementsWithoutAria.length > 0) {
      newIssues.push(`${elementsWithoutAria.length} interactive elements missing ARIA labels`);
      score -= 15;
    }

    // Check for proper heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let headingLevel = 0;
    let headingIssues = 0;
    headings.forEach(heading => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > headingLevel + 1) {
        headingIssues++;
      }
      headingLevel = level;
    });
    if (headingIssues > 0) {
      newIssues.push(`${headingIssues} heading structure issues`);
      score -= 10;
    }

    // Check for color contrast (simplified)
    const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
    const lowContrastElements = Array.from(textElements).filter(el => {
      const style = window.getComputedStyle(el);
      const color = style.color;
      const backgroundColor = style.backgroundColor;
      // This is a simplified check - in production you'd use a proper contrast checker
      return color === backgroundColor;
    });
    if (lowContrastElements.length > 0) {
      newIssues.push(`${lowContrastElements.length} potential contrast issues`);
      score -= 15;
    }

    setIssues(newIssues);
    setAccessibilityScore(Math.max(0, score));
  }, []);

  // Enhance keyboard navigation
  const enhanceKeyboardNavigation = useCallback(() => {
    const focusableElements = document.querySelectorAll(
      'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    focusableElements.forEach((element, index) => {
      element.setAttribute('tabindex', index.toString());
      
      // Add keyboard event listeners
      element.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (element instanceof HTMLElement) {
            element.click();
          }
        }
      });

      // Add focus indicators
      element.addEventListener('focus', () => {
        element.classList.add('focus-visible');
      });

      element.addEventListener('blur', () => {
        element.classList.remove('focus-visible');
      });
    });
  }, []);

  // Add ARIA labels to common elements
  const addARIALabels = useCallback(() => {
    // Add labels to navigation
    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('aria-label')) {
      nav.setAttribute('aria-label', 'Main navigation');
    }

    // Add labels to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
        button.setAttribute('aria-label', 'Button');
      }
    });

    // Add labels to form inputs
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
      if (!input.getAttribute('aria-label') && !input.getAttribute('placeholder')) {
        input.setAttribute('aria-label', 'Input field');
      }
    });
  }, []);

  // Initialize accessibility features
  useEffect(() => {
    // Load saved settings
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
        applySettings(parsed);
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }

    // Check accessibility on load
    setTimeout(checkAccessibility, 1000);

    // Enhance keyboard navigation
    enhanceKeyboardNavigation();

    // Add ARIA labels
    addARIALabels();

    // Add skip link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add main content landmark
    const main = document.querySelector('main');
    if (main && !main.id) {
      main.id = 'main-content';
    }
  }, [checkAccessibility, enhanceKeyboardNavigation, addARIALabels, applySettings]);

  // Toggle visibility
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.button
        onClick={toggleVisibility}
        className="fixed bottom-4 left-4 z-50 p-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Accessibility Settings"
        title="Accessibility Settings"
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -300, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -300, scale: 0.9 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-4 left-20 z-40 w-80 bg-slate-900/95 backdrop-blur-sm border border-slate-700 rounded-lg shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-700">
            <div className="flex items-center space-x-2">
              <Accessibility className="w-5 h-5 text-purple-400" />
              <h3 className="text-white font-semibold">Accessibility</h3>
            </div>
            <button
              onClick={toggleVisibility}
              className="p-1 text-slate-400 hover:text-white transition-colors"
              aria-label="Close accessibility panel"
            >
              ×
            </button>
          </div>

          {/* Content */}
          <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
            {/* Accessibility Score */}
            <div className="text-center p-4 bg-slate-800/50 rounded-lg">
              <div className="text-3xl font-bold text-white mb-2">{accessibilityScore}</div>
              <div className={`text-2xl font-bold ${accessibilityScore >= 90 ? 'text-green-400' : accessibilityScore >= 70 ? 'text-yellow-400' : 'text-red-400'}`}>
                {accessibilityScore >= 90 ? 'A' : accessibilityScore >= 70 ? 'B' : accessibilityScore >= 50 ? 'C' : 'D'}
              </div>
              <div className="text-slate-400 text-sm">Accessibility Score</div>
            </div>

            {/* Settings */}
            <div className="space-y-3">
              <h4 className="text-white font-semibold">Settings</h4>
              
              <div className="space-y-2">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.highContrast}
                    onChange={(e) => applySettings({ highContrast: e.target.checked })}
                    className="w-4 h-4 text-purple-600 bg-slate-700 border-slate-600 rounded focus:ring-purple-500"
                  />
                  <Contrast className="w-4 h-4 text-purple-400" />
                  <span className="text-slate-300 text-sm">High Contrast</span>
                </label>

                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.largeText}
                    onChange={(e) => applySettings({ largeText: e.target.checked })}
                    className="w-4 h-4 text-purple-600 bg-slate-700 border-slate-600 rounded focus:ring-purple-500"
                  />
                  <Type className="w-4 h-4 text-purple-400" />
                  <span className="text-slate-300 text-sm">Large Text</span>
                </label>

                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.reducedMotion}
                    onChange={(e) => applySettings({ reducedMotion: e.target.checked })}
                    className="w-4 h-4 text-purple-600 bg-slate-700 border-slate-600 rounded focus:ring-purple-500"
                  />
                  <Eye className="w-4 h-4 text-purple-400" />
                  <span className="text-slate-300 text-sm">Reduced Motion</span>
                </label>

                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.focusIndicators}
                    onChange={(e) => applySettings({ focusIndicators: e.target.checked })}
                    className="w-4 h-4 text-purple-600 bg-slate-700 border-slate-600 rounded focus:ring-purple-500"
                  />
                  <MousePointer className="w-4 h-4 text-purple-400" />
                  <span className="text-slate-300 text-sm">Focus Indicators</span>
                </label>
              </div>
            </div>

            {/* Issues */}
            {issues.length > 0 && (
              <div>
                <h4 className="text-white font-semibold flex items-center mb-3">
                  <AlertTriangle className="w-4 h-4 mr-2 text-orange-400" />
                  Issues Found
                </h4>
                <div className="space-y-2">
                  {issues.map((issue, index) => (
                    <div key={index} className="text-sm text-slate-300 bg-slate-800/50 p-2 rounded">
                      {issue}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex space-x-2">
              <button
                onClick={checkAccessibility}
                className="flex-1 px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded transition-colors"
              >
                Recheck
              </button>
              
              <button
                onClick={enhanceKeyboardNavigation}
                className="px-3 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium rounded transition-colors"
                title="Enhance keyboard navigation"
              >
                <Keyboard className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* CSS for accessibility features */}
      <style jsx>{`
        .high-contrast {
          filter: contrast(150%);
        }
        
        .large-text {
          font-size: 1.2em;
        }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        .focus-visible {
          outline: 3px solid #8b5cf6 !important;
          outline-offset: 2px !important;
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
      `}</style>
    </>
  );
}
