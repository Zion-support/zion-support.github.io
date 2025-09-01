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

export const AccessibilityEnhancer: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({

    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    colorBlindFriendly: false,
    fontSize: 100,
    lineHeight: 1.5,
    letterSpacing: 0});

  const [features, setFeatures] = useState<AccessibilityFeature[]>([
    {

      id: 'skip-links',
      name: 'Skip Links',
      description: 'Quick navigation to main content areas',
      enabled: true,
      category: 'motor',
      impact: 'high'
    },
    {

      id: 'focus-indicators',
      name: 'Focus Indicators',
      description: 'Clear visual indicators for keyboard navigation',
      enabled: true,
      category: 'visual',
      impact: 'high'
    },
    {

      id: 'alt-text',
      name: 'Alt Text',
      description: 'Descriptive text for images and media',
      enabled: true,
      category: 'visual',
      impact: 'high'
    },
    {

      id: 'semantic-html',
      name: 'Semantic HTML',
      description: 'Proper HTML structure for screen readers',
      enabled: true,
      category: 'cognitive',
      impact: 'medium'
    },
    {

      id: 'color-contrast',
      name: 'Color Contrast',
      description: 'High contrast ratios for better readability',
      enabled: true,
      category: 'visual',
      impact: 'high'
    },
    {

      id: 'keyboard-shortcuts',
      name: 'Keyboard Shortcuts',
      description: 'Alternative navigation methods',
      enabled: false,
      category: 'motor',
      impact: 'medium'
    }
  ]);

  // Apply accessibility settings to the document
  useEffect(() => {

    const root = document.documentElement;
    
    // High contrast mode
    if (settings.highContrast) {

      root.classList.add('high-contrast');
    } else {

      root.classList.remove('high-contrast');
    }

    // Large text mode
    if (settings.largeText) {

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

    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (e: KeyboardEvent) => {

      // Skip to main content
      if (e.key === 'Tab' && e.altKey) {

        e.preventDefault();
        const mainContent = document.querySelector('main') || document.querySelector('#main-content');
        if (mainContent) {

          (mainContent as HTMLElement).focus();
        }
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
      letterSpacing: 0});
  }, []);

  // Get impact color
  const getImpactColor = (impact: string) => {

    switch (impact) {

      case 'high': return 'text-red-500 bg-red-50 border-red-200';
      case 'medium': return 'text-yellow-500 bg-yellow-50 border-yellow-200';
      case 'low': return 'text-blue-500 bg-blue-50 border-blue-200';
      default: return 'text-gray-500 bg-gray-50 border-gray-200';
    }
  };

  // Get category icon
  const getCategoryIcon = (category: string) => {

    switch (category) {

      case 'visual': return <Eye className="w-4 h-4" />;
      case 'auditory': return <Volume2 className="w-4 h-4" />;
      case 'motor': return <MousePointer className="w-4 h-4" />;
      case 'cognitive': return <Brain className="w-4 h-4" />;
      default: return <Accessibility className="w-4 h-4" />;
    }
  };

  return (
    <>
      {/* Floating Accessibility Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-300/50"
        aria-label="Open accessibility settings"
        title="Accessibility Settings (Alt + A)"
      >
        <Accessibility className="w-6 h-6 mx-auto" />
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

              {/* Reset Button */}
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={resetToDefaults}
                  className="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors font-medium"
                >
                  Reset to Defaults
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
