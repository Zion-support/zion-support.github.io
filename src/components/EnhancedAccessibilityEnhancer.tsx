import React, { useEffect, useState, useCallback, useRef } from 'react';
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
  Monitor, 
  Smartphone,
  Accessibility,
  HelpCircle,
  Settings,
  X,
  Check,
  AlertTriangle,
  Info
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
  colorBlindness: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  fontSize: 'normal' | 'large' | 'extra-large';
  lineSpacing: 'normal' | 'relaxed' | 'very-relaxed';
  cursorSize: 'normal' | 'large' | 'extra-large';
}

interface AccessibilityEnhancerProps {
  enabled?: boolean;
  showPanel?: boolean;
  autoApply?: boolean;
}

export const EnhancedAccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enabled = true,
  showPanel = false,
  autoApply = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: true,
    colorBlindness: 'none',
    fontSize: 'normal',
    lineSpacing: 'normal',
    cursorSize: 'normal'
  });

  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);
  const [focusHistory, setFocusHistory] = useState<HTMLElement[]>([]);
  const [announcements, setAnnouncements] = useState<string[]>([]);
  const [accessibilityIssues, setAccessibilityIssues] = useState<string[]>([]);

  const focusIndicatorRef = useRef<HTMLDivElement>(null);
  const announcementRef = useRef<HTMLDivElement>(null);

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
    document.documentElement.style.fontSize = 
      updatedSettings.fontSize === 'large' ? '18px' : 
      updatedSettings.fontSize === 'extra-large' ? '24px' : '16px';

    // Apply line spacing
    document.documentElement.style.lineHeight = 
      updatedSettings.lineSpacing === 'relaxed' ? '1.6' : 
      updatedSettings.lineSpacing === 'very-relaxed' ? '2.0' : '1.4';

    // Apply cursor size
    document.documentElement.style.cursor = 
      updatedSettings.cursorSize === 'large' ? 'url("data:image/svg+xml,..."), auto' : 
      updatedSettings.cursorSize === 'extra-large' ? 'url("data:image/svg+xml,..."), auto' : 'default';

    // Apply reduced motion
    if (updatedSettings.reducedMotion) {
      document.documentElement.style.setProperty('--motion-reduce', '1');
    } else {
      document.documentElement.style.removeProperty('--motion-reduce');
    }

    // Apply color blindness filters
    const root = document.documentElement;
    root.style.filter = updatedSettings.colorBlindness !== 'none' 
      ? `url(#${updatedSettings.colorBlindness})` 
      : 'none';

    // Store settings in localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(updatedSettings));
  }, [settings]);

  // Screen reader announcements
  const announce = useCallback((message: string) => {
    if (!settings.screenReader) return;

    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;

    document.body.appendChild(announcement);
    
    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);

    setAnnouncements(prev => [...prev, message]);
  }, [settings.screenReader]);

  // Enhanced focus management
  const enhanceFocus = useCallback((element: HTMLElement) => {
    if (!settings.focusIndicator) return;

    setCurrentFocus(element);
    setFocusHistory(prev => [...prev.slice(-9), element]);

    // Create or update focus indicator
    if (focusIndicatorRef.current) {
      const rect = element.getBoundingClientRect();
      focusIndicatorRef.current.style.left = `${rect.left}px`;
      focusIndicatorRef.current.style.top = `${rect.top}px`;
      focusIndicatorRef.current.style.width = `${rect.width}px`;
      focusIndicatorRef.current.style.height = `${rect.height}px`;
      focusIndicatorRef.current.style.display = 'block';
    }

    // Announce focus for screen readers
    const accessibleName = element.getAttribute('aria-label') || 
                          element.getAttribute('alt') || 
                          element.textContent || 
                          element.tagName.toLowerCase();
    
    announce(`Focused on ${accessibleName}`);
  }, [settings.focusIndicator, announce]);

  // Keyboard navigation enhancement
  const enhanceKeyboardNavigation = useCallback(() => {
    if (!settings.keyboardNavigation) return;

    const focusableElements = document.querySelectorAll(
      'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    focusableElements.forEach((element) => {
      element.addEventListener('focus', (e) => enhanceFocus(e.target as HTMLElement));
      element.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          (e.target as HTMLElement).click();
        }
      });
    });
  }, [settings.keyboardNavigation, enhanceFocus]);

  // Accessibility audit
  const runAccessibilityAudit = useCallback(() => {
    const issues: string[] = [];

    // Check for missing alt text
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        issues.push(`Image ${index + 1} missing alt text`);
      }
    });

    // Check for proper heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > previousLevel + 1) {
        issues.push(`Heading structure issue: h${level} follows h${previousLevel}`);
      }
      previousLevel = level;
    });

    // Check for proper form labels
    const formControls = document.querySelectorAll('input, select, textarea');
    formControls.forEach((control, index) => {
      const id = control.getAttribute('id');
      const label = document.querySelector(`label[for="${id}"]`);
      if (!label && !control.getAttribute('aria-label')) {
        issues.push(`Form control ${index + 1} missing label`);
      }
    });

    // Check for sufficient color contrast (basic check)
    const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
    textElements.forEach((element, index) => {
      const style = window.getComputedStyle(element);
      const color = style.color;
      const backgroundColor = style.backgroundColor;
      
      // Basic contrast check (simplified)
      if (color === backgroundColor) {
        issues.push(`Element ${index + 1} has insufficient color contrast`);
      }
    });

    setAccessibilityIssues(issues);
  }, []);

  // Initialize accessibility features
  useEffect(() => {
    if (!enabled) return;

    // Load saved settings
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        applySettings(parsed);
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }

    // Set up global focus tracking
    document.addEventListener('focusin', (e) => {
      if (e.target instanceof HTMLElement) {
        enhanceFocus(e.target);
      }
    });

    // Set up keyboard navigation
    enhanceKeyboardNavigation();

    // Run initial accessibility audit
    if (autoApply) {
      setTimeout(runAccessibilityAudit, 2000);
    }

    return () => {
      document.removeEventListener('focusin', (e) => {
        if (e.target instanceof HTMLElement) {
          enhanceFocus(e.target);
        }
      });
    };
  }, [enabled, autoApply, enhanceFocus, enhanceKeyboardNavigation, runAccessibilityAudit, applySettings]);

  // Clean up focus indicator
  useEffect(() => {
    const timer = setTimeout(() => {
      if (focusIndicatorRef.current) {
        focusIndicatorRef.current.style.display = 'none';
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentFocus]);

  if (!enabled) return null;

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsVisible(!isVisible)}
        className="fixed top-4 right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        title="Accessibility Settings"
        aria-label="Open accessibility settings"
      >
        <Accessibility className="h-5 w-5" />
      </motion.button>

      {/* Focus Indicator */}
      <div
        ref={focusIndicatorRef}
        className="fixed pointer-events-none z-40 border-2 border-blue-500 bg-blue-500/20 rounded transition-all duration-200"
        style={{ display: 'none' }}
        aria-hidden="true"
      />

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed right-4 top-20 bg-white/95 backdrop-blur-md border border-gray-200 rounded-lg shadow-xl z-50 w-96 max-h-[80vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Accessibility Settings</h2>
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="Close accessibility settings"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Visual Enhancements */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Visual Enhancements</h3>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={settings.highContrast}
                        onChange={(e) => applySettings({ highContrast: e.target.checked })}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">High Contrast</span>
                    </label>

                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={settings.largeText}
                        onChange={(e) => applySettings({ largeText: e.target.checked })}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">Large Text</span>
                    </label>

                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={settings.reducedMotion}
                        onChange={(e) => applySettings({ reducedMotion: e.target.checked })}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">Reduced Motion</span>
                    </label>
                  </div>
                </div>

                {/* Font Size */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Font Size</h3>
                  <select
                    value={settings.fontSize}
                    onChange={(e) => applySettings({ fontSize: e.target.value as any })}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="normal">Normal</option>
                    <option value="large">Large</option>
                    <option value="extra-large">Extra Large</option>
                  </select>
                </div>

                {/* Line Spacing */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Line Spacing</h3>
                  <select
                    value={settings.lineSpacing}
                    onChange={(e) => applySettings({ lineSpacing: e.target.value as any })}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="normal">Normal</option>
                    <option value="relaxed">Relaxed</option>
                    <option value="very-relaxed">Very Relaxed</option>
                  </select>
                </div>

                {/* Color Blindness Support */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Color Blindness Support</h3>
                  <select
                    value={settings.colorBlindness}
                    onChange={(e) => applySettings({ colorBlindness: e.target.value as any })}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="none">None</option>
                    <option value="protanopia">Protanopia (Red-Blind)</option>
                    <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                    <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                  </select>
                </div>

                {/* Navigation Enhancements */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Navigation</h3>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={settings.keyboardNavigation}
                        onChange={(e) => applySettings({ keyboardNavigation: e.target.checked })}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">Enhanced Keyboard Navigation</span>
                    </label>

                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={settings.focusIndicator}
                        onChange={(e) => applySettings({ focusIndicator: e.target.checked })}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">Focus Indicator</span>
                    </label>

                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={settings.screenReader}
                        onChange={(e) => applySettings({ screenReader: e.target.checked })}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">Screen Reader Support</span>
                    </label>
                  </div>
                </div>

                {/* Quick Actions */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Actions</h3>
                  <div className="space-y-2">
                    <button
                      onClick={runAccessibilityAudit}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-sm transition-colors"
                    >
                      Run Accessibility Audit
                    </button>
                    <button
                      onClick={() => announce('Accessibility settings applied')}
                      className="w-full bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded text-sm transition-colors"
                    >
                      Test Screen Reader
                    </button>
                  </div>
                </div>

                {/* Accessibility Issues */}
                {accessibilityIssues.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2" />
                      Issues Found ({accessibilityIssues.length})
                    </h3>
                    <div className="space-y-2 max-h-32 overflow-y-auto">
                      {accessibilityIssues.map((issue, index) => (
                        <div key={index} className="text-sm text-yellow-700 bg-yellow-50 p-2 rounded">
                          {issue}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Help */}
                <div className="border-t pt-4">
                  <button className="flex items-center text-blue-600 hover:text-blue-800 text-sm">
                    <HelpCircle className="h-4 w-4 mr-2" />
                    Accessibility Help
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen Reader Announcements */}
      <div
        ref={announcementRef}
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      />

      {/* CSS for accessibility features */}
      <style jsx>{`
        .high-contrast {
          filter: contrast(150%) brightness(110%);
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
        
        [data-motion-reduce="1"] * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      `}</style>
    </>
  );
};