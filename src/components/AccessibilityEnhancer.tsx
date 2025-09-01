import React, { useEffect, useState, useCallback } from 'react';
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
  Brain,
  Type
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

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enabled?: boolean;
  showControls?: boolean;
  autoDetect?: boolean;
}

export const AccessibilityEnhancer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: true,
    highSaturation: false,
    dyslexiaFriendly: false,
    colorBlindMode: false
  });

  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Array<{ id: string; type: 'success' | 'warning' | 'info'; message: string }>>([]);

  // Auto-detect user preferences
  useEffect(() => {
    if (!enabled || !autoDetect) return;

    const mediaQueries = {
      prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)'),
      prefersHighContrast: window.matchMedia('(prefers-contrast: high)'),
      prefersLargeText: window.matchMedia('(prefers-reduced-data: reduce)')
    };

    const handleMediaChange = () => {
      setSettings(prev => ({
        ...prev,
        reducedMotion: mediaQueries.prefersReducedMotion.matches,
        highContrast: mediaQueries.prefersHighContrast.matches,
        largeText: mediaQueries.prefersLargeText.matches
      }));
    };

    handleMediaChange();

    mediaQueries.prefersReducedMotion.addEventListener('change', handleMediaChange);
    mediaQueries.prefersHighContrast.addEventListener('change', handleMediaChange);
    mediaQueries.prefersLargeText.addEventListener('change', handleMediaChange);

    return () => {
      mediaQueries.prefersReducedMotion.removeEventListener('change', handleMediaChange);
      mediaQueries.prefersHighContrast.removeEventListener('change', handleMediaChange);
      mediaQueries.prefersLargeText.removeEventListener('change', handleMediaChange);
    };
  }, [enabled, autoDetect]);

  // Apply accessibility settings
  useEffect(() => {
    if (!enabled) return;

    const root = document.documentElement;
    
    // High contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Large text
    if (settings.largeText) {
      root.style.fontSize = '18px';
    } else {
      root.style.fontSize = '16px';
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Focus indicator
    if (settings.focusIndicator) {
      root.style.setProperty('--focus-ring', '2px solid #06b6d4');
    } else {
      root.style.setProperty('--focus-ring', 'none');
    }

    // High saturation
    if (settings.highSaturation) {
      root.classList.add('high-saturation');
    } else {
      root.classList.remove('high-saturation');
    }

    // Dyslexia friendly
    if (settings.dyslexiaFriendly) {
      root.classList.add('dyslexia-friendly');
    } else {
      root.classList.remove('dyslexia-friendly');
    }

    // Color blind mode
    if (settings.colorBlindMode) {
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

  // Add notification
  const addNotification = useCallback((type: 'success' | 'warning' | 'info', message: string) => {
    const id = Date.now().toString();
    setNotifications(prev => [...prev, { id, type, message }]);
    
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 5000);
  }, []);

  // Load saved settings
  useEffect(() => {
    if (!enabled) return;

    const saved = localStorage.getItem('zion-accessibility-settings');
    if (saved) {
      try {
        const parsedSettings = JSON.parse(saved);
        setSettings(prev => ({ ...prev, ...parsedSettings }));
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }

      // Toggle accessibility panel
      if (e.key === 'a' && e.altKey) {
        e.preventDefault();
        setIsOpen(!isOpen);
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
  }, [enabled]);

  // Save settings
  useEffect(() => {
    if (!enabled) return;

    localStorage.setItem('zion-accessibility-settings', JSON.stringify(settings));
  }, [enabled, settings]);

  if (!enabled) return null;

  return (
    <>
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-zion-cyan text-white px-4 py-2 rounded-lg shadow-lg"
      >
        Skip to main content
      </a>

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

            {/* Settings */}
            <div className="p-4 space-y-4">
              {/* High Contrast */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Contrast className="w-5 h-5 text-zion-cyan" />
                  <span className="text-sm font-medium">High Contrast</span>
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

              {/* Reset Button */}
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={() => toggleSetting('highContrast')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.highContrast ? 'bg-zion-cyan' : 'bg-gray-200'
                  }`}
                  aria-label={`${settings.highContrast ? 'Disable' : 'Enable'} high contrast`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Keyboard Shortcuts Help */}
              <div className="pt-4 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Keyboard Shortcuts</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Alt + A:</span>
                    <span>Toggle accessibility panel</span>
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
                <button
                  onClick={() => toggleSetting('largeText')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.largeText ? 'bg-zion-cyan' : 'bg-gray-200'
                  }`}
                  aria-label={`${settings.largeText ? 'Disable' : 'Enable'} large text`}
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
                <div className="flex items-center gap-3">
                  <MousePointer className="w-5 h-5 text-zion-cyan" />
                  <span className="text-sm font-medium">Reduced Motion</span>
                </div>
                <button
                  onClick={() => toggleSetting('reducedMotion')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.reducedMotion ? 'bg-zion-cyan' : 'bg-gray-200'
                  }`}
                  aria-label={`${settings.reducedMotion ? 'Disable' : 'Enable'} reduced motion`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Focus Indicator */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MousePointer className="w-5 h-5 text-zion-cyan" />
                  <span className="text-sm font-medium">Focus Indicator</span>
                </div>
                <button
                  onClick={() => toggleSetting('focusIndicator')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.focusIndicator ? 'bg-zion-cyan' : 'bg-gray-200'
                  }`}
                  aria-label={`${settings.focusIndicator ? 'Disable' : 'Enable'} focus indicator`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Help */}
              <div className="pt-4 border-t border-gray-200 dark:border-zion-slate-700">
                <button
                  onClick={() => addNotification('info', 'Keyboard shortcuts: Tab to navigate, Shift+Tab to go back, Escape to close modals')}
                  className="flex items-center gap-2 text-sm text-zion-cyan hover:text-zion-cyan-dark transition-colors"
                >
                  <Info className="w-4 h-4" />
                  Keyboard Shortcuts
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 left-4 p-3 bg-zion-cyan text-white rounded-full shadow-lg hover:bg-zion-cyan-dark transition-colors z-40 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2"
        aria-label="Open accessibility panel"
        aria-expanded={isOpen}
      >
        <Accessibility className="w-6 h-6" />
      </button>

      {/* Notifications */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        <AnimatePresence>
          {notifications.map(notification => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              className={`flex items-center gap-3 p-4 rounded-lg shadow-lg max-w-sm ${
                notification.type === 'success' ? 'bg-green-500 text-white' :
                notification.type === 'warning' ? 'bg-yellow-500 text-white' :
                'bg-blue-500 text-white'
              }`}
            >
              {notification.type === 'success' && <CheckCircle className="w-5 h-5" />}
              {notification.type === 'warning' && <AlertTriangle className="w-5 h-5" />}
              {notification.type === 'info' && <Info className="w-5 h-5" />}
              <span className="text-sm font-medium">{notification.message}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Render children */}
      {children}

      {/* CSS for accessibility features */}
      <style jsx>{`
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #06b6d4;
          color: white;
          padding: 8px;
          text-decoration: none;
          border-radius: 4px;
          z-index: 10000;
        }
        
        .skip-link:focus {
          top: 6px;
        }
        
        .high-contrast {
          filter: contrast(1.5);
        }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        .high-saturation {
          filter: saturate(1.5);
        }
        
        .dyslexia-friendly {
          font-family: 'OpenDyslexic', 'Comic Sans MS', sans-serif;
          line-height: 1.6;
          letter-spacing: 0.1em;
        }
        
        .color-blind-friendly {
          filter: grayscale(0.3) contrast(1.2);
        }
      `}</style>
    </>
  );
};

export default AccessibilityEnhancer;
