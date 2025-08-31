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
  Palette,
  Keyboard,
  MousePointer,
  Accessibility,
  Settings,
  X,
  CheckCircle,
  AlertTriangle,
  Info,
  Brain
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  highSaturation: boolean;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
}

interface AccessibilityEnhancerProps {
  enabled?: boolean;
  showSettings?: boolean;
}

export function AccessibilityEnhancer({ 
  enabled = true, 
  showSettings = false 
}: AccessibilityEnhancerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(showSettings);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    highSaturation: false,
    fontSize: 100,
    lineHeight: 1.5,
    letterSpacing: 0,
  });
  const [issues, setIssues] = useState<AccessibilityIssue[]>([]);
  const [isScanning, setIsScanning] = useState(false);
  const [notifications, setNotifications] = useState<string[]>([]);

  // Load saved settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
        applySettings({ ...settings, ...parsed });
      } catch (error) {
        console.error('Failed to parse accessibility settings:', error);
      }
    }
  }, [applySettings]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip if not in keyboard navigation mode
      if (!settings.keyboardNavigation) return;
      
      const target = event.target as HTMLElement;
      
      // Tab navigation enhancement
      if (event.key === 'Tab') {
        const focusableElements = document.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        if (focusableElements.length > 0) {
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
          
          if (event.shiftKey && target === firstElement) {
            event.preventDefault();
            lastElement.focus();
          } else if (!event.shiftKey && target === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation]);

  // Apply accessibility settings to the document
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast mode
    if (newSettings.highContrast) {
      root.style.setProperty('--text-color', '#ffffff');
      root.style.setProperty('--bg-color', '#000000');
      root.style.setProperty('--accent-color', '#ffff00');
    } else {
      root.style.removeProperty('--text-color');
      root.style.removeProperty('--bg-color');
      root.style.removeProperty('--accent-color');
    }
    
    // Large text mode
    if (newSettings.largeText) {
      root.style.setProperty('--font-size-multiplier', '1.25');
    } else {
      root.style.removeProperty('--font-size-multiplier');
    }
    
    // Reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--animation-duration', '0.1s');
    } else {
      root.style.removeProperty('--animation-duration');
    }
    
    // High saturation
    if (newSettings.highSaturation) {
      root.style.setProperty('--saturation', '1.5');
    } else {
      root.style.removeProperty('--saturation');
    }
    
    // Font size adjustment
    root.style.setProperty('--font-size', `${newSettings.fontSize}%`);
    root.style.setProperty('--line-height', newSettings.lineHeight.toString());
    root.style.setProperty('--letter-spacing', `${newSettings.letterSpacing}px`);
    
    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  }, []);

  // Update settings and apply them
  const updateSettings = useCallback((newSettings: Partial<AccessibilitySettings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);
    applySettings(updatedSettings);
  }, [settings, applySettings]);

  // Scan for accessibility issues
  const scanForIssues = useCallback(async () => {
    setIsScanning(true);
    const newIssues: AccessibilityIssue[] = [];
    
    // Check for missing alt text on images
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        newIssues.push({
          id: `img-${index}`,
          type: 'missing-alt-text',
          severity: 'medium',
          element: img,
          description: 'Image missing alt text or aria-label',
          suggestion: 'Add descriptive alt text or aria-label attribute'
        });
      }
    });
    
    // Check for proper heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > previousLevel + 1) {
        newIssues.push({
          id: `heading-${index}`,
          type: 'heading-skip',
          severity: 'low',
          element: heading,
          description: 'Heading level skipped',
          suggestion: 'Use proper heading hierarchy (h1, h2, h3...)'
        });
      }
      previousLevel = level;
    });
    
    // Check for proper form labels
    const formInputs = document.querySelectorAll('input, select, textarea');
    formInputs.forEach((input, index) => {
      const id = input.getAttribute('id');
      const label = document.querySelector(`label[for="${id}"]`);
      const ariaLabel = input.getAttribute('aria-label');
      
      if (!label && !ariaLabel && !input.getAttribute('placeholder')) {
        newIssues.push({
          id: `input-${index}`,
          type: 'missing-label',
          severity: 'high',
          element: input,
          description: 'Form input missing label',
          suggestion: 'Add a label element or aria-label attribute'
        });
      }
    });
    
    // Check for sufficient color contrast (simplified)
    const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
    textElements.forEach((element, index) => {
      const style = window.getComputedStyle(element);
      const color = style.color;
      const backgroundColor = style.backgroundColor;
      
      // This is a simplified check - in production you'd use a proper contrast ratio library
      if (color === backgroundColor) {
        newIssues.push({
          id: `contrast-${index}`,
          type: 'low-contrast',
          severity: 'medium',
          element: element,
          description: 'Potential low color contrast',
          suggestion: 'Ensure sufficient contrast between text and background colors'
        });
      }
    });
    
    setIssues(newIssues);
    setIsScanning(false);
    
    // Show notification
    if (newIssues.length > 0) {
      setNotifications(prev => [...prev, `Found ${newIssues.length} accessibility issues`]);
    } else {
      setNotifications(prev => [...prev, 'No accessibility issues found']);
    }
  }, []);

  // Reset all settings to default
  const resetSettings = useCallback(() => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      highSaturation: false,
      fontSize: 100,
      lineHeight: 1.5,
      letterSpacing: 0,
    };
    
    setSettings(defaultSettings);
    applySettings(defaultSettings);
    setNotifications(prev => [...prev, 'Settings reset to default']);
  }, [applySettings]);

  // Quick actions
  const quickActions = [
    {
      name: 'High Contrast',
      icon: Contrast,
      action: () => updateSettings({ highContrast: !settings.highContrast }),
      active: settings.highContrast
    },
    {
      name: 'Large Text',
      icon: ZoomIn,
      action: () => updateSettings({ largeText: !settings.largeText }),
      active: settings.largeText
    },
    {
      name: 'Reduced Motion',
      icon: Eye,
      action: () => updateSettings({ reducedMotion: !settings.reducedMotion }),
      active: settings.reducedMotion
    },
    {
      name: 'High Saturation',
      icon: Palette,
      action: () => updateSettings({ highSaturation: !settings.highSaturation }),
      active: settings.highSaturation
    }
  ];

  if (!enabled) return null;

  return (
    <>
      {/* Floating Accessibility Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 bg-zion-cyan text-black p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-zion-cyan/50"
        onClick={() => setIsVisible(!isVisible)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Accessibility Settings"
      >
        <Accessibility size={24} />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed bottom-24 right-6 z-40 bg-gray-900 text-white rounded-lg shadow-2xl border border-zion-cyan/30 max-w-sm w-full"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-zion-cyan/30">
              <div className="flex items-center space-x-2">
                <Brain className="text-zion-cyan" size={20} />
                <h3 className="font-semibold text-lg">Accessibility</h3>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close accessibility panel"
              >
                <X size={20} />
              </button>
            </div>

            {/* Quick Actions */}
            <div className="p-4">
              <h4 className="text-sm font-medium text-gray-300 mb-3">Quick Actions</h4>
              <div className="grid grid-cols-2 gap-2">
                {quickActions.map((action) => (
                  <button
                    key={action.name}
                    onClick={action.action}
                    className={`flex items-center space-x-2 p-2 rounded-md text-sm transition-all duration-200 ${
                      action.active
                        ? 'bg-zion-cyan text-black'
                        : 'bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white'
                    }`}
                  >
                    <action.icon size={16} />
                    <span>{action.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Advanced Settings Toggle */}
            <div className="px-4 pb-2">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center space-x-2 text-sm text-zion-cyan hover:text-zion-cyan/80 transition-colors"
              >
                <Settings size={16} />
                <span>{isExpanded ? 'Hide' : 'Show'} Advanced Settings</span>
              </button>
            </div>

            {/* Advanced Settings */}
            {isExpanded && (
              <motion.div
                className="border-t border-zion-cyan/30"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-4 space-y-4">
                  {/* Font Size */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Font Size: {settings.fontSize}%
                    </label>
                    <input
                      type="range"
                      min="75"
                      max="200"
                      value={settings.fontSize}
                      onChange={(e) => updateSettings({ fontSize: parseInt(e.target.value) })}
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                    />
                  </div>

                  {/* Line Height */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Line Height: {settings.lineHeight}
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="3"
                      step="0.1"
                      value={settings.lineHeight}
                      onChange={(e) => updateSettings({ lineHeight: parseFloat(e.target.value) })}
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                    />
                  </div>

                  {/* Letter Spacing */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Letter Spacing: {settings.letterSpacing}px
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="5"
                      step="0.5"
                      value={settings.letterSpacing}
                      onChange={(e) => updateSettings({ letterSpacing: parseFloat(e.target.value) })}
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2 pt-2">
                    <button
                      onClick={scanForIssues}
                      disabled={isScanning}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white px-3 py-2 rounded-md text-sm transition-colors"
                    >
                      {isScanning ? 'Scanning...' : 'Scan Issues'}
                    </button>
                    <button
                      onClick={resetSettings}
                      className="flex-1 bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm transition-colors"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Issues Summary */}
            {issues.length > 0 && (
              <div className="border-t border-zion-cyan/30 p-4">
                <h4 className="text-sm font-medium text-gray-300 mb-2">
                  Found {issues.length} Issues
                </h4>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {issues.slice(0, 3).map((issue) => (
                    <div key={issue.id} className="flex items-start space-x-2 text-xs">
                      <AlertTriangle className="text-yellow-500 mt-0.5" size={14} />
                      <div>
                        <p className="text-gray-300">{issue.description}</p>
                        <p className="text-gray-500">{issue.suggestion}</p>
                      </div>
                    </div>
                  ))}
                  {issues.length > 3 && (
                    <p className="text-xs text-gray-500">
                      +{issues.length - 3} more issues...
                    </p>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Notifications */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {notifications.slice(-3).map((notification, index) => (
          <motion.div
            key={index}
            className="bg-zion-cyan text-black px-4 py-2 rounded-md shadow-lg max-w-sm"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center space-x-2">
              <CheckCircle size={16} />
              <span className="text-sm font-medium">{notification}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Custom CSS for slider */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #06b6d4;
          cursor: pointer;
        }
        
        .slider::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #06b6d4;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </>
  );
}

// Types for accessibility issues
interface AccessibilityIssue {
  id: string;
  type: string;
  severity: 'low' | 'medium' | 'high';
  element: Element;
  description: string;
  suggestion: string;
}
