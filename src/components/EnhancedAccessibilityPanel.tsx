import React, { useState, useEffect, useCallback, useMemo } from 'react';
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
  Settings,
  X,
  Accessibility,
  Keyboard,
  MousePointer,
  Highlighter,
  Palette,
  Sun,
  Moon,
  Monitor
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
  colorBlindFriendly: boolean;
  dyslexiaFriendly: boolean;
  highlighter: boolean;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
  theme: 'light' | 'dark' | 'auto';
}

const EnhancedAccessibilityPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: false,
    colorBlindFriendly: false,
    dyslexiaFriendly: false,
    highlighter: false,
    fontSize: 16,
    lineHeight: 1.5,
    letterSpacing: 0,
    theme: 'auto'
  });

  const [activeTab, setActiveTab] = useState<'visual' | 'navigation' | 'reading' | 'advanced'>('visual');

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('zion-accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.warn('Failed to parse accessibility settings:', error);
      }
    }
  }, []);

  // Save settings to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('zion-accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  // Apply accessibility settings to the document
  useEffect(() => {
    const root = document.documentElement;
    
    // Apply high contrast
    if (settings.highContrast) {
      root.style.setProperty('--zion-contrast', 'high');
      root.classList.add('high-contrast');
    } else {
      root.style.setProperty('--zion-contrast', 'normal');
      root.classList.remove('high-contrast');
    }

    // Apply large text
    if (settings.largeText) {
      root.style.setProperty('--zion-font-size', '18px');
      root.style.setProperty('--zion-line-height', '1.6');
    } else {
      root.style.setProperty('--zion-font-size', '16px');
      root.style.setProperty('--zion-line-height', '1.5');
    }

    // Apply reduced motion
    if (settings.reducedMotion) {
      root.style.setProperty('--zion-motion', 'reduced');
      root.classList.add('reduced-motion');
    } else {
      root.style.setProperty('--zion-motion', 'normal');
      root.classList.remove('reduced-motion');
    }

    // Apply focus indicator
    if (settings.focusIndicator) {
      root.style.setProperty('--zion-focus-visible', '2px solid #06b6d4');
    } else {
      root.style.setProperty('--zion-focus-visible', 'none');
    }

    // Apply dyslexia-friendly font
    if (settings.dyslexiaFriendly) {
      root.style.setProperty('--zion-font-family', 'OpenDyslexic, Arial, sans-serif');
      root.classList.add('dyslexia-friendly');
    } else {
      root.style.setProperty('--zion-font-family', 'Inter, system-ui, sans-serif');
      root.classList.remove('dyslexia-friendly');
    }

    // Apply color blind friendly
    if (settings.colorBlindFriendly) {
      root.classList.add('color-blind-friendly');
    } else {
      root.classList.remove('color-blind-friendly');
    }

    // Apply custom font size
    root.style.setProperty('--zion-custom-font-size', `${settings.fontSize}px`);
    root.style.setProperty('--zion-custom-line-height', settings.lineHeight.toString());
    root.style.setProperty('--zion-custom-letter-spacing', `${settings.letterSpacing}px`);

  }, [settings]);

  // Keyboard navigation support
  useEffect(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip if user is typing in an input
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
          setIsOpen(false);
          break;
        
        case 'h':
        case 'H':
          // Quick navigation to header
          document.querySelector('header')?.focus();
          break;
        
        case 'm':
        case 'M':
          // Quick navigation to main content
          document.querySelector('main')?.focus();
          break;
        
        case 'f':
        case 'F':
          // Quick navigation to footer
          document.querySelector('footer')?.focus();
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

  // Update setting with screen reader announcement
  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
    
    // Announce changes to screen readers
    const settingNames: Record<string, string> = {
      highContrast: 'High contrast',
      largeText: 'Large text',
      reducedMotion: 'Reduced motion',
      screenReader: 'Screen reader support',
      keyboardNavigation: 'Keyboard navigation',
      focusIndicator: 'Focus indicator',
      colorBlindFriendly: 'Color blind friendly',
      dyslexiaFriendly: 'Dyslexia friendly',
      highlighter: 'Text highlighter'
    };
    
    if (settingNames[key]) {
      announceToScreenReader(`${settingNames[key]} ${value ? 'enabled' : 'disabled'}`);
    }
  }, [announceToScreenReader]);

  // Reset all settings
  const resetSettings = useCallback(() => {
    setSettings({
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicator: false,
      colorBlindFriendly: false,
      dyslexiaFriendly: false,
      highlighter: false,
      fontSize: 16,
      lineHeight: 1.5,
      letterSpacing: 0,
      theme: 'auto'
    });
    announceToScreenReader('All accessibility settings have been reset');
  }, [announceToScreenReader]);

  // Toggle panel
  const togglePanel = useCallback(() => {
    setIsOpen(!isOpen);
    announceToScreenReader(`Accessibility panel ${!isOpen ? 'opened' : 'closed'}`);
  }, [isOpen, announceToScreenReader]);

  // Memoized tab content
  const tabContent = useMemo(() => {
    switch (activeTab) {
      case 'visual':
        return (
          <div className="space-y-6">
            {/* Visual Adjustments */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Visual Adjustments</h3>
              
              <div className="space-y-3">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.highContrast}
                    onChange={(e) => updateSetting('highContrast', e.target.checked)}
                    className="w-4 h-4 text-zion-cyan border-gray-300 rounded focus:ring-zion-cyan"
                  />
                  <span className="text-gray-700">High Contrast Mode</span>
                </label>

                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.largeText}
                    onChange={(e) => updateSetting('largeText', e.target.checked)}
                    className="w-4 h-4 text-zion-cyan border-gray-300 rounded focus:ring-zion-cyan"
                  />
                  <span className="text-gray-700">Large Text</span>
                </label>

                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.colorBlindFriendly}
                    onChange={(e) => updateSetting('colorBlindFriendly', e.target.checked)}
                    className="w-4 h-4 text-zion-cyan border-gray-300 rounded focus:ring-zion-cyan"
                  />
                  <span className="text-gray-700">Color Blind Friendly</span>
                </label>

                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.reducedMotion}
                    onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                    className="w-4 h-4 text-zion-cyan border-gray-300 rounded focus:ring-zion-cyan"
                  />
                  <span className="text-gray-700">Reduced Motion</span>
                </label>
              </div>
            </div>

            {/* Font Customization */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Font Customization</h3>
              
              <div className="space-y-3">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.dyslexiaFriendly}
                    onChange={(e) => updateSetting('dyslexiaFriendly', e.target.checked)}
                    className="w-4 h-4 text-zion-cyan border-gray-300 rounded focus:ring-zion-cyan"
                  />
                  <span className="text-gray-700">Dyslexia Friendly Font</span>
                </label>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Font Size: {settings.fontSize}px
                  </label>
                  <input
                    type="range"
                    min="12"
                    max="24"
                    value={settings.fontSize}
                    onChange={(e) => updateSetting('fontSize', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Line Height: {settings.lineHeight}
                  </label>
                  <input
                    type="range"
                    min="1.2"
                    max="2.0"
                    step="0.1"
                    value={settings.lineHeight}
                    onChange={(e) => updateSetting('lineHeight', parseFloat(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Letter Spacing: {settings.letterSpacing}px
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="2"
                    step="0.1"
                    value={settings.letterSpacing}
                    onChange={(e) => updateSetting('letterSpacing', parseFloat(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
              </div>
            </div>

            {/* Theme Selection */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Theme</h3>
              <div className="grid grid-cols-3 gap-2">
                {(['light', 'dark', 'auto'] as const).map((theme) => (
                  <button
                    key={theme}
                    onClick={() => updateSetting('theme', theme)}
                    className={`p-3 rounded-lg border-2 transition-colors ${
                      settings.theme === theme
                        ? 'border-zion-cyan bg-zion-cyan text-white'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {theme === 'light' && <Sun className="w-5 h-5 mx-auto mb-1" />}
                    {theme === 'dark' && <Moon className="w-5 h-5 mx-auto mb-1" />}
                    {theme === 'auto' && <Monitor className="w-5 h-5 mx-auto mb-1" />}
                    <span className="text-xs capitalize">{theme}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 'navigation':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Navigation & Focus</h3>
            
            <div className="space-y-3">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.keyboardNavigation}
                  onChange={(e) => updateSetting('keyboardNavigation', e.target.checked)}
                  className="w-4 h-4 text-zion-cyan border-gray-300 rounded focus:ring-zion-cyan"
                />
                <span className="text-gray-700">Enhanced Keyboard Navigation</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.focusIndicator}
                  onChange={(e) => updateSetting('focusIndicator', e.target.checked)}
                  className="w-4 h-4 text-zion-cyan border-gray-300 rounded focus:ring-zion-cyan"
                />
                <span className="text-gray-700">Enhanced Focus Indicators</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.screenReader}
                  onChange={(e) => updateSetting('screenReader', e.target.checked)}
                  className="w-4 h-4 text-zion-cyan border-gray-300 rounded focus:ring-zion-cyan"
                />
                <span className="text-gray-700">Screen Reader Support</span>
              </label>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">Keyboard Shortcuts</h4>
              <div className="text-sm text-blue-800 space-y-1">
                <div><kbd className="px-2 py-1 bg-blue-200 rounded text-xs">Tab</kbd> Navigate between elements</div>
                <div><kbd className="px-2 py-1 bg-blue-200 rounded text-xs">H</kbd> Go to header</div>
                <div><kbd className="px-2 py-1 bg-blue-200 rounded text-xs">M</kbd> Go to main content</div>
                <div><kbd className="px-2 py-1 bg-blue-200 rounded text-xs">F</kbd> Go to footer</div>
                <div><kbd className="px-2 py-1 bg-blue-200 rounded text-xs">Escape</kbd> Close panels</div>
              </div>
            </div>
          </div>
        );

      case 'reading':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Reading Assistance</h3>
            
            <div className="space-y-3">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.highlighter}
                  onChange={(e) => updateSetting('highlighter', e.target.checked)}
                  className="w-4 h-4 text-zion-cyan border-gray-300 rounded focus:ring-zion-cyan"
                />
                <span className="text-gray-700">Text Highlighter</span>
              </label>

              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium text-green-900 mb-2">Reading Features</h4>
                <div className="text-sm text-green-800 space-y-1">
                  <div>• Dyslexia-friendly font options</div>
                  <div>• Adjustable line height and spacing</div>
                  <div>• High contrast text options</div>
                  <div>• Screen reader compatibility</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'advanced':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Advanced Settings</h3>
            
            <div className="space-y-4">
              <button
                onClick={resetSettings}
                className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset All Settings</span>
              </button>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Current Settings</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>Font Size: {settings.fontSize}px</div>
                  <div>Line Height: {settings.lineHeight}</div>
                  <div>Letter Spacing: {settings.letterSpacing}px</div>
                  <div>Theme: {settings.theme}</div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  }, [activeTab, settings, updateSetting, resetSettings]);

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        onClick={togglePanel}
        className="fixed bottom-6 right-6 z-50 p-4 bg-zion-cyan text-white rounded-full shadow-lg hover:bg-zion-cyan-dark transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-zion-cyan/30"
        aria-label="Open accessibility panel"
        title="Accessibility Settings"
      >
        <Accessibility className="w-6 h-6" />
      </button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-40 overflow-hidden"
          >
            {/* Panel Header */}
            <div className="bg-zion-cyan text-white p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold flex items-center space-x-2">
                  <Accessibility className="w-5 h-5" />
                  <span>Accessibility</span>
                </h2>
                <button
                  onClick={togglePanel}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="border-b border-gray-200">
              <nav className="flex">
                {[
                  { id: 'visual', label: 'Visual', icon: Eye },
                  { id: 'navigation', label: 'Navigation', icon: Keyboard },
                  { id: 'reading', label: 'Reading', icon: Type },
                  { id: 'advanced', label: 'Advanced', icon: Settings }
                ].map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id as any)}
                    className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                      activeTab === id
                        ? 'text-zion-cyan border-b-2 border-zion-cyan'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Icon className="w-4 h-4 mx-auto mb-1" />
                    {label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-6 overflow-y-auto h-full">
              {tabContent}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen Reader Only Content */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Accessibility panel is available. Use the accessibility button to open it.
      </div>
    </>
  );
};

export default EnhancedAccessibilityPanel;
