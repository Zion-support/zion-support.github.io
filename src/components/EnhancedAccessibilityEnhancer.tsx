import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Eye,
  EyeOff,
  Volume2,
  VolumeX,
  ZoomIn,
  ZoomOut,
  Contrast,
  Type,
  MousePointer,
  Keyboard,
  Monitor,
  Smartphone,
  Accessibility,
  Settings,
  X,
  CheckCircle,
  AlertTriangle,
  Info
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicators: boolean;
  colorBlindness: 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  fontSize: 'small' | 'medium' | 'large' | 'xlarge';
  lineSpacing: 'tight' | 'normal' | 'loose';
  cursorSize: 'small' | 'medium' | 'large';
}

interface AccessibilityEnhancerProps {
  enabled?: boolean;
  showPanel?: boolean;
  onSettingsChange?: (settings: AccessibilitySettings) => void;
}

export const EnhancedAccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enabled = true,
  showPanel = false,
  onSettingsChange
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicators: true,
    colorBlindness: 'normal',
    fontSize: 'medium',
    lineSpacing: 'normal',
    cursorSize: 'medium'
  });

  const [accessibilityIssues, setAccessibilityIssues] = useState<string[]>([]);
  const [complianceScore, setComplianceScore] = useState<number>(0);

  // Apply accessibility settings to the document
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast
    if (newSettings.highContrast) {
      root.style.setProperty('--high-contrast', '1');
      root.classList.add('high-contrast');
    } else {
      root.style.setProperty('--high-contrast', '0');
      root.classList.remove('high-contrast');
    }

    // Large text
    if (newSettings.largeText) {
      root.style.setProperty('--large-text', '1');
      root.classList.add('large-text');
    } else {
      root.style.setProperty('--large-text', '0');
      root.classList.remove('large-text');
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--reduced-motion', '1');
      root.classList.add('reduced-motion');
    } else {
      root.style.setProperty('--reduced-motion', '0');
      root.classList.remove('reduced-motion');
    }

    // Focus indicators
    if (newSettings.focusIndicators) {
      root.style.setProperty('--focus-visible', '1');
      root.classList.add('focus-visible');
    } else {
      root.style.setProperty('--focus-visible', '0');
      root.classList.remove('focus-visible');
    }

    // Color blindness simulation
    root.style.setProperty('--color-blindness', newSettings.colorBlindness);
    root.className = root.className.replace(/color-blind-\w+/g, '');
    if (newSettings.colorBlindness !== 'normal') {
      root.classList.add(`color-blind-${newSettings.colorBlindness}`);
    }

    // Font size
    root.style.setProperty('--font-size', newSettings.fontSize);
    root.className = root.className.replace(/font-size-\w+/g, '');
    root.classList.add(`font-size-${newSettings.fontSize}`);

    // Line spacing
    root.style.setProperty('--line-spacing', newSettings.lineSpacing);
    root.className = root.className.replace(/line-spacing-\w+/g, '');
    root.classList.add(`line-spacing-${newSettings.lineSpacing}`);

    // Cursor size
    root.style.setProperty('--cursor-size', newSettings.cursorSize);
    root.className = root.className.replace(/cursor-size-\w+/g, '');
    root.classList.add(`cursor-size-${newSettings.cursorSize}`);

    // Update CSS custom properties
    Object.entries(newSettings).forEach(([key, value]) => {
      if (typeof value === 'boolean') {
        root.style.setProperty(`--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`, value ? '1' : '0');
      } else {
        root.style.setProperty(`--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`, value);
      }
    });
  }, []);

  // Update settings and apply them
  const updateSettings = useCallback((newSettings: Partial<AccessibilitySettings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);
    applySettings(updatedSettings);
    
    if (onSettingsChange) {
      onSettingsChange(updatedSettings);
    }

    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(updatedSettings));
  }, [settings, applySettings, onSettingsChange]);

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsedSettings = JSON.parse(savedSettings);
        setSettings(parsedSettings);
        applySettings(parsedSettings);
      } catch (error) {
        console.error('Failed to parse saved accessibility settings:', error);
      }
    }
  }, [applySettings]);

  // Accessibility audit function
  const performAccessibilityAudit = useCallback(() => {
    const issues: string[] = [];
    
    // Check for missing alt text on images
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        issues.push(`Image ${index + 1} missing alt text or aria-label`);
      }
    });

    // Check for proper heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > previousLevel + 1) {
        issues.push(`Heading structure issue: ${heading.tagName} follows ${previousLevel > 0 ? `h${previousLevel}` : 'no heading'}`);
      }
      previousLevel = level;
    });

    // Check for proper form labels
    const formControls = document.querySelectorAll('input, select, textarea');
    formControls.forEach((control, index) => {
      const id = control.getAttribute('id');
      const label = document.querySelector(`label[for="${id}"]`);
      const ariaLabel = control.getAttribute('aria-label');
      
      if (!label && !ariaLabel && !control.getAttribute('aria-labelledby')) {
        issues.push(`Form control ${index + 1} missing label or aria-label`);
      }
    });

    // Check for proper color contrast (simplified)
    const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
    textElements.forEach((element, index) => {
      const style = window.getComputedStyle(element);
      const color = style.color;
      const backgroundColor = style.backgroundColor;
      
      if (color === backgroundColor || color === 'transparent') {
        issues.push(`Potential contrast issue with element ${index + 1}`);
      }
    });

    setAccessibilityIssues(issues);
    
    // Calculate compliance score
    const totalChecks = 4;
    const passedChecks = totalChecks - Math.min(issues.length, totalChecks);
    const score = Math.round((passedChecks / totalChecks) * 100);
    setComplianceScore(score);
  }, []);

  // Keyboard navigation enhancement
  useEffect(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip if user is typing in an input field
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (event.key) {
        case 'Tab':
          // Enhanced tab navigation
          event.preventDefault();
          const focusableElements = document.querySelectorAll(
            'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const currentIndex = Array.from(focusableElements).findIndex(el => el === document.activeElement);
          const nextIndex = event.shiftKey ? 
            (currentIndex - 1 + focusableElements.length) % focusableElements.length :
            (currentIndex + 1) % focusableElements.length;
          
          (focusableElements[nextIndex] as HTMLElement)?.focus();
          break;
          
        case 'Escape':
          // Close any open modals or panels
          const modals = document.querySelectorAll('[role="dialog"], [role="modal"]');
          modals.forEach(modal => {
            if (modal.classList.contains('open')) {
              (modal as HTMLElement).click();
            }
          });
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation]);

  // Screen reader announcements
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

  if (!enabled) return null;

  return (
    <>
      {/* Floating Accessibility Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-50 p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open Accessibility Panel"
      >
        <Accessibility className="w-6 h-6 text-white" />
        <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-slate-700">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                    <Accessibility className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Accessibility Center
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      Customize your experience for better accessibility
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Visual Settings */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center">
                      <Eye className="w-5 h-5 mr-2" />
                      Visual Settings
                    </h3>
                    
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={settings.highContrast}
                          onChange={(e) => updateSettings({ highContrast: e.target.checked })}
                          className="rounded border-gray-300"
                        />
                        <span>High Contrast Mode</span>
                      </label>

                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={settings.largeText}
                          onChange={(e) => updateSettings({ largeText: e.target.checked })}
                          className="rounded border-gray-300"
                        />
                        <span>Large Text</span>
                      </label>

                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={settings.reducedMotion}
                          onChange={(e) => updateSettings({ reducedMotion: e.target.checked })}
                          className="rounded border-gray-300"
                        />
                        <span>Reduced Motion</span>
                      </label>

                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={settings.focusIndicators}
                          onChange={(e) => updateSettings({ focusIndicators: e.target.checked })}
                          className="rounded border-gray-300"
                        />
                        <span>Enhanced Focus Indicators</span>
                      </label>
                    </div>

                    <div className="space-y-3">
                      <label className="block">
                        <span className="block text-sm font-medium mb-1">Font Size</span>
                        <select
                          value={settings.fontSize}
                          onChange={(e) => updateSettings({ fontSize: e.target.value as any })}
                          className="w-full p-2 border border-gray-300 rounded-lg"
                        >
                          <option value="small">Small</option>
                          <option value="medium">Medium</option>
                          <option value="large">Large</option>
                          <option value="xlarge">Extra Large</option>
                        </select>
                      </label>

                      <label className="block">
                        <span className="block text-sm font-medium mb-1">Line Spacing</span>
                        <select
                          value={settings.lineSpacing}
                          onChange={(e) => updateSettings({ lineSpacing: e.target.value as any })}
                          className="w-full p-2 border border-gray-300 rounded-lg"
                        >
                          <option value="tight">Tight</option>
                          <option value="normal">Normal</option>
                          <option value="loose">Loose</option>
                        </select>
                      </label>

                      <label className="block">
                        <span className="block text-sm font-medium mb-1">Color Blindness Support</span>
                        <select
                          value={settings.colorBlindness}
                          onChange={(e) => updateSettings({ colorBlindness: e.target.value as any })}
                          className="w-full p-2 border border-gray-300 rounded-lg"
                        >
                          <option value="normal">Normal</option>
                          <option value="protanopia">Protanopia (Red-Blind)</option>
                          <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                          <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                        </select>
                      </label>
                    </div>
                  </div>

                  {/* Navigation & Interaction */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center">
                      <Keyboard className="w-5 h-5 mr-2" />
                      Navigation & Interaction
                    </h3>
                    
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={settings.keyboardNavigation}
                          onChange={(e) => updateSettings({ keyboardNavigation: e.target.checked })}
                          className="rounded border-gray-300"
                        />
                        <span>Enhanced Keyboard Navigation</span>
                      </label>

                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={settings.screenReader}
                          onChange={(e) => updateSettings({ screenReader: e.target.checked })}
                          className="rounded border-gray-300"
                        />
                        <span>Screen Reader Optimizations</span>
                      </label>
                    </div>

                    <div className="space-y-3">
                      <label className="block">
                        <span className="block text-sm font-medium mb-1">Cursor Size</span>
                        <select
                          value={settings.cursorSize}
                          onChange={(e) => updateSettings({ cursorSize: e.target.value as any })}
                          className="w-full p-2 border border-gray-300 rounded-lg"
                        >
                          <option value="small">Small</option>
                          <option value="medium">Medium</option>
                          <option value="large">Large</option>
                        </select>
                      </label>
                    </div>

                    {/* Quick Actions */}
                    <div className="space-y-3">
                      <h4 className="text-md font-medium">Quick Actions</h4>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => updateSettings({ fontSize: 'large' })}
                          className="p-2 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg text-sm hover:bg-blue-200 dark:hover:bg-blue-900/40 transition-colors"
                        >
                          <ZoomIn className="w-4 h-4 mx-auto mb-1" />
                          Zoom In
                        </button>
                        <button
                          onClick={() => updateSettings({ fontSize: 'small' })}
                          className="p-2 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg text-sm hover:bg-blue-200 dark:hover:bg-blue-900/40 transition-colors"
                        >
                          <ZoomOut className="w-4 h-4 mx-auto mb-1" />
                          Zoom Out
                        </button>
                        <button
                          onClick={() => updateSettings({ highContrast: !settings.highContrast })}
                          className="p-2 bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-lg text-sm hover:bg-purple-200 dark:hover:bg-purple-900/40 transition-colors"
                        >
                          <Contrast className="w-4 h-4 mx-auto mb-1" />
                          Toggle Contrast
                        </button>
                        <button
                          onClick={() => updateSettings({ reducedMotion: !settings.reducedMotion })}
                          className="p-2 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-lg text-sm hover:bg-green-200 dark:hover:bg-green-900/40 transition-colors"
                        >
                          <VolumeX className="w-4 h-4 mx-auto mb-1" />
                          Toggle Motion
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Accessibility Audit */}
                <div className="mt-8 p-4 bg-gray-50 dark:bg-slate-800 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Accessibility Audit
                    </h3>
                    <button
                      onClick={performAccessibilityAudit}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Run Audit
                    </button>
                  </div>

                  {complianceScore > 0 && (
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Compliance Score</span>
                        <span className={`text-lg font-bold ${
                          complianceScore >= 90 ? 'text-green-600' :
                          complianceScore >= 70 ? 'text-yellow-600' : 'text-red-600'
                        }`}>
                          {complianceScore}/100
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-500 ${
                            complianceScore >= 90 ? 'bg-green-600' :
                            complianceScore >= 70 ? 'bg-yellow-600' : 'bg-red-600'
                          }`}
                          style={{ width: `${complianceScore}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {accessibilityIssues.length > 0 && (
                    <div>
                      <h4 className="text-md font-medium mb-2 flex items-center">
                        <AlertTriangle className="w-4 h-4 mr-2 text-yellow-600" />
                        Issues Found ({accessibilityIssues.length})
                      </h4>
                      <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                        {accessibilityIssues.map((issue, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-red-500 mr-2">•</span>
                            {issue}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen reader only styles */}
      <style jsx>{`
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
};