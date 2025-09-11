import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  Contrast, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  Accessibility,
  Settings,
  X,
  CheckCircle,
  AlertTriangle,
  Info,
  Keyboard,
  MousePointer,
  Smartphone
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
  colorBlind: boolean;
  dyslexia: boolean;
}

interface EnhancedAccessibilityProps {
  enabled?: boolean;
  showControls?: boolean;
  className?: string;
}

export const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({
  enabled = true,
  showControls = true,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: true,
    focusIndicator: true,
    colorBlind: false,
    dyslexia: false
  });
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);
  const [announcements, setAnnouncements] = useState<string[]>([]);

  // Apply accessibility settings to document
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#e5e7eb');
      root.style.setProperty('--bg-primary', '#000000');
      root.style.setProperty('--bg-secondary', '#1f2937');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--text-primary');
      root.style.removeProperty('--text-secondary');
      root.style.removeProperty('--bg-primary');
      root.style.removeProperty('--bg-secondary');
    }

    // Large text
    if (newSettings.largeText) {
      root.style.fontSize = '18px';
      root.style.lineHeight = '1.6';
    } else {
      root.style.fontSize = '16px';
      root.style.lineHeight = '1.5';
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--reduced-motion', 'reduce');
    } else {
      root.style.removeProperty('--reduced-motion');
    }

    // Focus indicator
    if (newSettings.focusIndicator) {
      root.style.setProperty('--focus-ring', '2px solid #3b82f6');
    } else {
      root.style.setProperty('--focus-ring', 'none');
    }

    // Color blind support
    if (newSettings.colorBlind) {
      root.classList.add('color-blind-support');
    } else {
      root.classList.remove('color-blind-support');
    }

    // Dyslexia support
    if (newSettings.dyslexia) {
      root.style.fontFamily = 'OpenDyslexic, Arial, sans-serif';
      root.style.letterSpacing = '0.1em';
      root.style.wordSpacing = '0.2em';
    } else {
      root.style.fontFamily = '';
      root.style.letterSpacing = '';
      root.style.wordSpacing = '';
    }

    setSettings(newSettings);
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  }, []);

  // Load saved settings on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      const parsed = JSON.parse(savedSettings);
      setSettings(parsed);
      applySettings(parsed);
    }
  }, [applySettings]);

  // Screen reader announcements
  const announce = useCallback((message: string) => {
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
  }, []);

  // Enhanced keyboard navigation
  useEffect(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      
      // Skip if in input/textarea
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return;

      switch (e.key) {
        case 'Tab':
          // Enhanced tab navigation with visual feedback
          setCurrentFocus(target);
          target.style.outline = '2px solid #3b82f6';
          target.style.outlineOffset = '2px';
          
          setTimeout(() => {
            target.style.outline = '';
            target.style.outlineOffset = '';
          }, 2000);
          break;
          
        case 'Enter':
        case ' ':
          if (target.tagName === 'BUTTON' || target.getAttribute('role') === 'button') {
            e.preventDefault();
            target.click();
            announce(`Activated ${target.textContent || target.getAttribute('aria-label') || 'button'}`);
          }
          break;
          
        case 'Escape':
          // Close modals, dropdowns, etc.
          const modals = document.querySelectorAll('[role="dialog"], [data-modal]');
          modals.forEach(modal => {
            if (modal.getAttribute('aria-hidden') === 'false') {
              (modal as HTMLElement).click();
            }
          });
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation, announce]);

  // Focus management
  useEffect(() => {
    if (!settings.focusIndicator) return;

    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      target.style.outline = '2px solid #3b82f6';
      target.style.outlineOffset = '2px';
      
      if (settings.screenReader) {
        const label = target.getAttribute('aria-label') || 
                     target.getAttribute('title') || 
                     target.textContent;
        if (label) announce(`Focused on ${label}`);
      }
    };

    const handleFocusOut = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      target.style.outline = '';
      target.style.outlineOffset = '';
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);
    
    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, [settings.focusIndicator, settings.screenReader, announce]);

  // Skip to main content link
  useEffect(() => {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    return () => {
      if (skipLink.parentNode) {
        skipLink.parentNode.removeChild(skipLink);
      }
    };
  }, []);

  // Quick accessibility actions
  const quickActions = [
    {
      icon: Contrast,
      label: 'Toggle High Contrast',
      action: () => {
        const newSettings = { ...settings, highContrast: !settings.highContrast };
        applySettings(newSettings);
        announce(`High contrast ${newSettings.highContrast ? 'enabled' : 'disabled'}`);
      },
      active: settings.highContrast
    },
    {
      icon: Type,
      label: 'Toggle Large Text',
      action: () => {
        const newSettings = { ...settings, largeText: !settings.largeText };
        applySettings(newSettings);
        announce(`Large text ${newSettings.largeText ? 'enabled' : 'disabled'}`);
      },
      active: settings.largeText
    },
    {
      icon: ZoomIn,
      label: 'Increase Zoom',
      action: () => {
        const currentZoom = parseFloat(getComputedStyle(document.documentElement).fontSize) / 16;
        const newZoom = Math.min(currentZoom + 0.1, 2.0);
        document.documentElement.style.fontSize = `${newZoom * 16}px`;
        announce(`Zoom increased to ${Math.round(newZoom * 100)}%`);
      }
    },
    {
      icon: ZoomOut,
      label: 'Decrease Zoom',
      action: () => {
        const currentZoom = parseFloat(getComputedStyle(document.documentElement).fontSize) / 16;
        const newZoom = Math.max(currentZoom - 0.1, 0.5);
        document.documentElement.style.fontSize = `${newZoom * 16}px`;
        announce(`Zoom decreased to ${Math.round(newZoom * 100)}%`);
      }
    },
    {
      icon: RotateCcw,
      label: 'Reset Zoom',
      action: () => {
        document.documentElement.style.fontSize = '16px';
        announce('Zoom reset to 100%');
      }
    }
  ];

  if (!enabled) return null;

  return (
    <>
      {/* Accessibility Toggle Button */}
      {showControls && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-6 z-50 p-4 bg-cyan-600 text-white rounded-full shadow-2xl shadow-cyan-500/30 hover:bg-cyan-700 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
          aria-label="Open accessibility settings"
          title="Accessibility Settings"
        >
          <Accessibility className="w-6 h-6" />
        </motion.button>
      )}

      {/* Quick Actions Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-24 left-6 z-40 space-y-2"
      >
        {quickActions.map((action, index) => (
          <motion.button
            key={action.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={action.action}
            className={`p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
              action.active 
                ? 'bg-cyan-600 text-white shadow-cyan-500/50' 
                : 'bg-slate-800/90 text-gray-300 hover:bg-slate-700/90 hover:text-white'
            }`}
            aria-label={action.label}
            title={action.label}
          >
            <action.icon className="w-5 h-5" />
          </motion.button>
        ))}
      </motion.div>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-slate-900/95 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 shadow-2xl shadow-cyan-500/20 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center space-x-3">
                  <Accessibility className="w-7 h-7 text-cyan-400" />
                  <span>Accessibility Settings</span>
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-slate-800"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Settings Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {Object.entries(settings).map(([key, value]) => {
                  const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                  const Icon = key === 'highContrast' ? Contrast : 
                              key === 'largeText' ? Type : 
                              key === 'reducedMotion' ? Eye : 
                              key === 'screenReader' ? Volume2 : 
                              key === 'keyboardNavigation' ? Keyboard : 
                              key === 'focusIndicator' ? MousePointer : 
                              key === 'colorBlind' ? Eye : 
                              key === 'dyslexia' ? Type : Settings;

                  return (
                    <div key={key} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                      <div className="flex items-center space-x-3">
                        <Icon className="w-5 h-5 text-cyan-400" />
                        <span className="text-white font-medium">{label}</span>
                      </div>
                      <button
                        onClick={() => {
                          const newSettings = { ...settings, [key]: !value };
                          applySettings(newSettings);
                          announce(`${label} ${newSettings[key as keyof AccessibilitySettings] ? 'enabled' : 'disabled'}`);
                        }}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                          value ? 'bg-cyan-600' : 'bg-slate-600'
                        }`}
                        role="switch"
                        aria-checked={value}
                        aria-label={`Toggle ${label}`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            value ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Quick Tips */}
              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4 mb-6">
                <h3 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center space-x-2">
                  <Info className="w-5 h-5" />
                  <span>Accessibility Tips</span>
                </h3>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>• Use Tab key to navigate through interactive elements</li>
                  <li>• Press Enter or Space to activate buttons</li>
                  <li>• Use Escape key to close modals and menus</li>
                  <li>• High contrast mode improves text readability</li>
                  <li>• Large text mode increases font sizes</li>
                  <li>• Screen reader announcements provide audio feedback</li>
                </ul>
              </div>

              {/* Status Indicators */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="flex items-center space-x-2 p-3 bg-slate-800/50 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-300">Focus Management</span>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-slate-800/50 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-300">Keyboard Navigation</span>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-slate-800/50 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-300">Screen Reader Ready</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen Reader Only Announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {announcements.map((announcement, index) => (
          <div key={index}>{announcement}</div>
        ))}
      </div>
    </>
  );
};