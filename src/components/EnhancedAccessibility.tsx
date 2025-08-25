import React, { useState, useEffect, useRef } from 'react';
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
  Settings,
  X,
  Check,
  AlertTriangle,
  Info,
  Accessibility
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  soundEffects: boolean;
  autoPlayMedia: boolean;
  voiceCommands: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
  colorBlindSupport: boolean;
}

interface EnhancedAccessibilityProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({ 
  position = 'bottom-right' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    soundEffects: true,
    autoPlayMedia: false,
    voiceCommands: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: true,
    colorBlindSupport: false,
  });
  const [activeTab, setActiveTab] = useState<'quick' | 'advanced' | 'help'>('quick');
  const [announcement, setAnnouncement] = useState<string>('');
  const [isAnnouncing, setIsAnnouncing] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Apply accessibility settings to the document
  useEffect(() => {
    const root = document.documentElement;
    
    // High contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--contrast-ratio', '4.5');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--contrast-ratio');
    }

    // Large text
    if (settings.largeText) {
      root.classList.add('large-text');
      root.style.setProperty('--font-size-scale', '1.25');
    } else {
      root.classList.remove('large-text');
      root.style.removeProperty('--font-size-scale');
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
      root.style.setProperty('--animation-duration', '0.01ms');
    } else {
      root.classList.remove('reduced-motion');
      root.style.removeProperty('--animation-duration');
    }

    // Focus indicator
    if (settings.focusIndicator) {
      root.classList.add('focus-visible');
      root.style.setProperty('--focus-outline', '3px solid #3b82f6');
    } else {
      root.classList.remove('focus-visible');
      root.style.removeProperty('--focus-outline');
    }

    // Color blind support
    if (settings.colorBlindSupport) {
      root.classList.add('color-blind-support');
      root.style.setProperty('--color-blind-filter', 'protanopia');
    } else {
      root.classList.remove('color-blind-support');
      root.style.removeProperty('--color-blind-filter');
    }

    // Announce changes to screen readers
    if (settings.screenReader) {
      announceChange('Accessibility settings updated');
    }
  }, [settings]);

  // Keyboard navigation support
  useEffect(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (e.key) {
        case 'Tab':
          // Enhanced tab navigation
          e.preventDefault();
          const focusableElements = document.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const currentIndex = Array.from(focusableElements).findIndex(el => el === document.activeElement);
          const nextIndex = e.shiftKey ? (currentIndex - 1 + focusableElements.length) % focusableElements.length : (currentIndex + 1) % focusableElements.length;
          (focusableElements[nextIndex] as HTMLElement)?.focus();
          break;
        case 'Escape':
          if (isOpen) {
            setIsOpen(false);
            setIsExpanded(false);
          }
          break;
        case 'h':
        case 'H':
          if (e.ctrlKey) {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation, isOpen]);

  // Screen reader announcements
  const announceChange = (message: string) => {
    if (!settings.screenReader) return;
    
    setAnnouncement(message);
    setIsAnnouncing(true);
    
    setTimeout(() => {
      setIsAnnouncing(false);
      setAnnouncement('');
    }, 3000);
  };

  // Toggle setting with announcement
  const toggleSetting = (key: keyof AccessibilitySettings) => {
    const newSettings = { ...settings, [key]: !settings[key] };
    setSettings(newSettings);
    
    const settingNames = {
      highContrast: 'High contrast',
      largeText: 'Large text',
      reducedMotion: 'Reduced motion',
      screenReader: 'Screen reader support',
      keyboardNavigation: 'Keyboard navigation',
      focusIndicator: 'Focus indicator',
      colorBlindSupport: 'Color blind support'
    };
    
    announceChange(`${settingNames[key]} ${newSettings[key] ? 'enabled' : 'disabled'}`);
  };

  // Quick actions
  const quickActions = [
    {
      icon: Contrast,
      label: 'High Contrast',
      description: 'Increase color contrast',
      action: () => toggleSetting('highContrast'),
      active: settings.highContrast
    },
    {
      icon: Type,
      label: 'Large Text',
      description: 'Increase text size',
      action: () => toggleSetting('largeText'),
      active: settings.largeText
    },
    {
      icon: MousePointer,
      label: 'Focus Indicator',
      description: 'Show focus outlines',
      action: () => toggleSetting('focusIndicator'),
      active: settings.focusIndicator
    },
    {
      icon: Volume2,
      label: 'Screen Reader',
      description: 'Enable announcements',
      action: () => toggleSetting('screenReader'),
      active: settings.screenReader
    }
  ];

  // Get position classes
  const getPositionClasses = () => {
    switch (position) {
      case 'top-left': return 'top-4 left-4';
      case 'top-right': return 'top-4 right-4';
      case 'bottom-left': return 'bottom-4 left-4';
      case 'bottom-right': return 'bottom-4 right-4';
      default: return 'bottom-4 right-4';
    }
  };

  return (
    <>
      {/* Screen Reader Announcements */}
      <div 
        aria-live="polite" 
        aria-atomic="true" 
        className="sr-only"
        style={{ 
          position: 'absolute', 
          left: '-10000px', 
          width: '1px', 
          height: '1px', 
          overflow: 'hidden' 
        }}
      >
        {announcement}
      </div>

      {/* Main Accessibility Button */}
      <div className={`fixed ${getPositionClasses()} z-50`}>
        <motion.button
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Accessibility controls"
          aria-expanded={isOpen}
          aria-haspopup="dialog"
        >
          <Accessibility className="w-6 h-6" />
        </motion.button>

        {/* Accessibility Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={panelRef}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="absolute bottom-full right-0 mb-2 w-80 bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
              role="dialog"
              aria-label="Accessibility Settings"
              aria-modal="true"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Accessibility className="w-5 h-5" />
                    Accessibility
                  </h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white/80 hover:text-white transition-colors p-1 rounded-full hover:bg-white/20"
                    aria-label="Close accessibility panel"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-blue-100 text-sm mt-1">
                  Customize your experience
                </p>
              </div>

              {/* Tab Navigation */}
              <div className="flex border-b border-gray-200 dark:border-gray-700">
                {[
                  { id: 'quick', label: 'Quick', icon: Settings },
                  { id: 'advanced', label: 'Advanced', icon: Settings },
                  { id: 'help', label: 'Help', icon: Info }
                ].map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id as any)}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 text-sm font-medium transition-colors ${
                      activeTab === id
                        ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50 dark:bg-blue-900/20'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                    }`}
                    aria-selected={activeTab === id}
                    role="tab"
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-4 max-h-96 overflow-y-auto">
                {/* Quick Actions Tab */}
                {activeTab === 'quick' && (
                  <div className="space-y-3">
                    {quickActions.map((action, index) => (
                      <button
                        key={index}
                        onClick={action.action}
                        className={`w-full p-3 rounded-lg border transition-all duration-200 text-left hover:shadow-md ${
                          action.active
                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                            : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                        }`}
                        aria-pressed={action.active}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${
                            action.active 
                              ? 'bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-400' 
                              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                          }`}>
                            <action.icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-gray-900 dark:text-white">
                              {action.label}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              {action.description}
                            </div>
                          </div>
                          {action.active && (
                            <Check className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {/* Advanced Settings Tab */}
                {activeTab === 'advanced' && (
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-900 dark:text-white">Advanced Features</h4>
                      
                      <label className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Keyboard className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">Keyboard Navigation</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Enhanced keyboard shortcuts</div>
                          </div>
                        </div>
                        <input
                          type="checkbox"
                          checked={settings.keyboardNavigation}
                          onChange={() => toggleSetting('keyboardNavigation')}
                          className="sr-only"
                        />
                        <div className={`w-6 h-6 rounded-full border-2 transition-colors ${
                          settings.keyboardNavigation
                            ? 'border-blue-500 bg-blue-500'
                            : 'border-gray-300 dark:border-gray-600'
                        }`}>
                          {settings.keyboardNavigation && (
                            <Check className="w-4 h-4 text-white m-0.5" />
                          )}
                        </div>
                      </label>

                      <label className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Eye className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">Color Blind Support</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Enhanced color perception</div>
                          </div>
                        </div>
                        <input
                          type="checkbox"
                          checked={settings.colorBlindSupport}
                          onChange={() => toggleSetting('colorBlindSupport')}
                          className="sr-only"
                        />
                        <div className={`w-6 h-6 rounded-full border-2 transition-colors ${
                          settings.colorBlindSupport
                            ? 'border-blue-500 bg-blue-500'
                            : 'border-gray-300 dark:border-gray-600'
                        }`}>
                          {settings.colorBlindSupport && (
                            <Check className="w-4 h-4 text-white m-0.5" />
                          )}
                        </div>
                      </label>

                      <label className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                          <MousePointer className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">Reduced Motion</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Minimize animations</div>
                          </div>
                        </div>
                        <input
                          type="checkbox"
                          checked={settings.reducedMotion}
                          onChange={() => toggleSetting('reducedMotion')}
                          className="sr-only"
                        />
                        <div className={`w-6 h-6 rounded-full border-2 transition-colors ${
                          settings.reducedMotion
                            ? 'border-blue-500 bg-blue-500'
                            : 'border-gray-300 dark:border-gray-600'
                        }`}>
                          {settings.reducedMotion && (
                            <Check className="w-4 h-4 text-white m-0.5" />
                          )}
                        </div>
                      </label>
                    </div>
                  </div>
                )}

                {/* Help Tab */}
                {activeTab === 'help' && (
                  <div className="space-y-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                        <div className="text-sm text-blue-800 dark:text-blue-200">
                          <p className="font-medium mb-2">Keyboard Shortcuts</p>
                          <ul className="space-y-1 text-xs">
                            <li><kbd className="bg-white dark:bg-gray-800 px-1 py-0.5 rounded text-xs">Ctrl + H</kbd> Toggle accessibility panel</li>
                            <li><kbd className="bg-white dark:bg-gray-800 px-1 py-0.5 rounded text-xs">Tab</kbd> Navigate between elements</li>
                            <li><kbd className="bg-white dark:bg-gray-800 px-1 py-0.5 rounded text-xs">Escape</kbd> Close panels</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                        <div className="text-sm text-yellow-800 dark:text-yellow-200">
                          <p className="font-medium mb-2">Need Help?</p>
                          <p>Contact our support team for additional accessibility assistance.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-3 text-center">
                <button
                  onClick={() => {
                    setSettings({
                      highContrast: false,
                      largeText: false,
                      reducedMotion: false,
                      screenReader: false,
                      keyboardNavigation: false,
                      focusIndicator: true,
                      colorBlindSupport: false,
                    });
                    announceChange('Accessibility settings reset to default');
                  }}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 text-sm transition-colors"
                  aria-label="Reset to default settings"
                >
                  Reset to Default
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};