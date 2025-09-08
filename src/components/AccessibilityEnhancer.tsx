import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Volume2, 
  VolumeX, 
  Eye, 
  EyeOff, 
  Contrast, 
  Type, 
  MousePointer,
  Keyboard,
  Accessibility
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  colorBlindFriendly: boolean;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
}

interface AccessibilityFeature {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  category: 'visual' | 'auditory' | 'motor' | 'cognitive';
  impact: 'high' | 'medium' | 'low';
}

export function AccessibilityEnhancer() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: false
  });

  useEffect(() => {
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }

    // Apply settings to document
    applyAccessibilitySettings(settings);
  }, []);

  const applyAccessibilitySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Large text
    if (newSettings.largeText) {
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

    // Color blind friendly
    if (settings.colorBlindFriendly) {
      root.classList.add('color-blind-friendly');
    } else {
      root.classList.remove('color-blind-friendly');
    }

    // Font size
    root.style.setProperty('--text-scale', `${settings.fontSize / 100}`);
    
    // Line height
    root.style.setProperty('--line-height', settings.lineHeight.toString());
    
    // Letter spacing
    root.style.setProperty('--letter-spacing', `${settings.letterSpacing}px`);

  }, [settings]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!settings.keyboardNavigation) return;

      switch (event.key) {
        case 'Tab':
          // Enhanced tab navigation
          const focusableElements = document.querySelectorAll(
            'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

          if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          } else if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
          break;

        case 'Escape':
          setIsOpen(false);
          break;

        case 'h':
        case 'H':
          if (event.ctrlKey) {
            event.preventDefault();
            document.querySelector('a[href="/"]')?.click();
          }
          break;

        case 's':
        case 'S':
          if (event.ctrlKey) {
            event.preventDefault();
            document.querySelector('a[href="/services"]')?.click();
          }
          break;

        case 'c':
        case 'C':
          if (event.ctrlKey) {
            event.preventDefault();
            document.querySelector('a[href="/contact"]')?.click();
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation, isOpen]);

  // Toggle feature
  const toggleFeature = useCallback((featureId: string) => {
    setFeatures(prev => prev.map(feature => 
      feature.id === featureId 
        ? { ...feature, enabled: !feature.enabled }
        : feature
    ));
  }, []);

  // Update setting
  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  }, []);

  // Reset to defaults
  const resetToDefaults = useCallback(() => {
    setSettings({
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false,
      colorBlindFriendly: false,
      fontSize: 100,
      lineHeight: 1.5,
      letterSpacing: 0,
    });
  }, []);

  // Get impact color
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'text-red-500 bg-red-50 border-red-200';
      case 'medium': return 'text-yellow-500 bg-yellow-50 border-yellow-200';
      case 'low': return 'text-blue-500 bg-blue-50 border-blue-200';
      default: return 'text-gray-500 bg-gray-50 border-gray-200';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [settings.keyboardNavigation]);

  // Skip to main content link
  useEffect(() => {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-zion-blue focus:text-white focus:rounded focus:outline-none focus:ring-2 focus:ring-zion-cyan';
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    return () => {
      if (document.body.contains(skipLink)) {
        document.body.removeChild(skipLink);
      }
    };
  }, []);

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 p-3 bg-zion-blue hover:bg-zion-purple text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2"
        aria-label="Accessibility settings"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
      >
        <Accessibility size={24} />
      </button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-0 right-0 h-full w-96 bg-white shadow-2xl border-l border-gray-200 z-40 overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-cyan-500 to-purple-600 text-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Accessibility className="w-6 h-6" />
                  <h2 className="text-xl font-semibold">Accessibility</h2>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-cyan-100 mt-2 text-sm">
                Customize your experience for better accessibility
              </p>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Quick Actions */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => updateSetting('highContrast', !settings.highContrast)}
                    className={`p-3 rounded-lg border transition-all duration-200 ${
                      settings.highContrast
                        ? 'bg-cyan-50 border-cyan-300 text-cyan-700'
                        : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Contrast className="w-5 h-5 mx-auto mb-2" />
                    <span className="text-sm font-medium">High Contrast</span>
                  </button>

                  <button
                    onClick={() => updateSetting('largeText', !settings.largeText)}
                    className={`p-3 rounded-lg border transition-all duration-200 ${
                      settings.largeText
                        ? 'bg-cyan-50 border-cyan-300 text-cyan-700'
                        : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <ZoomIn className="w-5 h-5 mx-auto mb-2" />
                    <span className="text-sm font-medium">Large Text</span>
                  </button>

                  <button
                    onClick={() => updateSetting('reducedMotion', !settings.reducedMotion)}
                    className={`p-3 rounded-lg border transition-all duration-200 ${
                      settings.reducedMotion
                        ? 'bg-cyan-50 border-cyan-300 text-cyan-700'
                        : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <EyeOff className="w-5 h-5 mx-auto mb-2" />
                    <span className="text-sm font-medium">Reduced Motion</span>
                  </button>

                  <button
                    onClick={() => updateSetting('colorBlindFriendly', !settings.colorBlindFriendly)}
                    className={`p-3 rounded-lg border transition-all duration-200 ${
                      settings.colorBlindFriendly
                        ? 'bg-cyan-50 border-cyan-300 text-cyan-700'
                        : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Palette className="w-5 h-5 mx-auto mb-2" />
                    <span className="text-sm font-medium">Color Blind Friendly</span>
                  </button>
                </div>
              </div>

              {/* Text Settings */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">Text Settings</h3>
                
                {/* Font Size */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Font Size: {settings.fontSize}%
                  </label>
                  <input
                    type="range"
                    min="80"
                    max="200"
                    step="10"
                    value={settings.fontSize}
                    onChange={(e) => updateSetting('fontSize', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>

                {/* Line Height */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
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

                {/* Letter Spacing */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
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

              {/* Navigation Settings */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">Navigation</h3>
                
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={settings.keyboardNavigation}
                    onChange={(e) => updateSetting('keyboardNavigation', e.target.checked)}
                    className="w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500"
                  />
                  <div>
                    <span className="text-sm font-medium text-gray-700">Enhanced Keyboard Navigation</span>
                    <p className="text-xs text-gray-500">Use Alt + Tab to skip to main content</p>
                  </div>
                </label>

                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={settings.screenReader}
                    onChange={(e) => updateSetting('screenReader', e.target.checked)}
                    className="w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500"
                  />
                  <div>
                    <span className="text-sm font-medium text-gray-700">Screen Reader Optimized</span>
                    <p className="text-xs text-gray-500">Enhanced ARIA labels and semantic structure</p>
                  </div>
                </label>
              </div>

              {/* Accessibility Features Status */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">Features Status</h3>
                <div className="space-y-2">
                  {features.map((feature) => (
                    <div
                      key={feature.id}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        {getCategoryIcon(feature.category)}
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-gray-700">{feature.name}</span>
                            <span className={`text-xs px-2 py-1 rounded-full ${getImpactColor(feature.impact)}`}>
                              {feature.impact}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500">{feature.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {feature.enabled ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : (
                          <AlertTriangle className="w-5 h-5 text-yellow-500" />
                        )}
                        <button
                          onClick={() => toggleFeature(feature.id)}
                          className={`px-3 py-1 text-xs rounded-full transition-colors ${
                            feature.enabled
                              ? 'bg-green-100 text-green-700 hover:bg-green-200'
                              : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                          }`}
                        >
                          {feature.enabled ? 'Enabled' : 'Disabled'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {/* High Contrast */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-sm font-medium text-zion-slate dark:text-white">
                    <Contrast size={16} />
                    High Contrast
                  </label>
                  <button
                    onClick={() => toggleSetting('highContrast')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 ${
                      settings.highContrast ? 'bg-zion-blue' : 'bg-gray-300'
                    }`}
                    aria-pressed={settings.highContrast}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Large Text */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-sm font-medium text-zion-slate dark:text-white">
                    <Type size={16} />
                    Large Text
                  </label>
                  <button
                    onClick={() => toggleSetting('largeText')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 ${
                      settings.largeText ? 'bg-zion-blue' : 'bg-gray-300'
                    }`}
                    aria-pressed={settings.largeText}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.largeText ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Reduced Motion */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-sm font-medium text-zion-slate dark:text-white">
                    <Eye size={16} />
                    Reduced Motion
                  </label>
                  <button
                    onClick={() => toggleSetting('reducedMotion')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 ${
                      settings.reducedMotion ? 'bg-zion-blue' : 'bg-gray-300'
                    }`}
                    aria-pressed={settings.reducedMotion}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Screen Reader */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-sm font-medium text-zion-slate dark:text-white">
                    {settings.screenReader ? <Volume2 size={16} /> : <VolumeX size={16} />}
                    Screen Reader
                  </label>
                  <button
                    onClick={() => toggleSetting('screenReader')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 ${
                      settings.screenReader ? 'bg-zion-blue' : 'bg-gray-300'
                    }`}
                    aria-pressed={settings.screenReader}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.screenReader ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Keyboard Navigation */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-sm font-medium text-zion-slate dark:text-white">
                    <Keyboard size={16} />
                    Keyboard Navigation
                  </label>
                  <button
                    onClick={() => toggleSetting('keyboardNavigation')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 ${
                      settings.keyboardNavigation ? 'bg-zion-blue' : 'bg-gray-300'
                    }`}
                    aria-pressed={settings.keyboardNavigation}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Focus Indicator */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-sm font-medium text-zion-slate dark:text-white">
                    <MousePointer size={16} />
                    Focus Indicator
                  </label>
                  <button
                    onClick={() => toggleSetting('focusIndicator')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 ${
                      settings.focusIndicator ? 'bg-zion-blue' : 'bg-gray-300'
                    }`}
                    aria-pressed={settings.focusIndicator}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Keyboard Shortcuts Help */}
              {settings.keyboardNavigation && (
                <div className="mt-6 p-4 bg-zion-cyan/10 rounded-lg">
                  <h3 className="text-sm font-semibold text-zion-slate dark:text-white mb-2">
                    Keyboard Shortcuts
                  </h3>
                  <div className="text-xs text-zion-slate/70 dark:text-white/70 space-y-1">
                    <div>Ctrl + H: Home</div>
                    <div>Ctrl + S: Services</div>
                    <div>Ctrl + C: Contact</div>
                    <div>Escape: Close panel</div>
                    <div>Tab: Navigate elements</div>
                  </div>
                  <div className="flex justify-between">
                    <span>Alt + Tab:</span>
                    <span>Skip to main content</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tab:</span>
                    <span>Navigate through elements</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Enter/Space:</span>
                    <span>Activate buttons/links</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Skip Links */}
      <div className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4">
        <a
          href="#main-content"
          className="bg-cyan-500 text-white px-4 py-2 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-300"
        >
          Skip to main content
        </a>
        <a
          href="#navigation"
          className="bg-purple-500 text-white px-4 py-2 rounded-lg shadow-lg ml-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
        >
          Skip to navigation
        </a>
      </div>
    </>
  );
};

export default AccessibilityEnhancer;
