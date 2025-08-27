import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Contrast, 
  Type, 
  MousePointer, 
  Keyboard,
  Settings,
  X,
  CheckCircle,
  AlertTriangle,
  Info,
  Accessibility,
  ZoomIn,
  ZoomOut,
  RotateCcw
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicators: boolean;
  zoomLevel: number;
  colorBlindness: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
}

interface AccessibilityEnhancerProps {
  enabled?: boolean;
  showControls?: boolean;
}

const EnhancedAccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enabled = true,
  showControls = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicators: true,
    zoomLevel: 100,
    colorBlindness: 'none'
  });

  const [accessibilityIssues, setAccessibilityIssues] = useState<string[]>([]);
  const [accessibilityScore, setAccessibilityScore] = useState(0);

  // Apply accessibility settings to the document
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--contrast-multiplier', '1.5');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--contrast-multiplier');
    }

    // Large text
    if (newSettings.largeText) {
      root.style.fontSize = '120%';
      root.classList.add('large-text');
    } else {
      root.style.fontSize = '100%';
      root.classList.remove('large-text');
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--motion-reduction', '0.1');
      root.classList.add('reduced-motion');
    } else {
      root.style.removeProperty('--motion-reduction');
      root.classList.remove('reduced-motion');
    }

    // Focus indicators
    if (newSettings.focusIndicators) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    // Zoom level
    root.style.setProperty('--zoom-level', `${newSettings.zoomLevel}%`);

    // Color blindness simulation
    if (newSettings.colorBlindness !== 'none') {
      root.classList.add(`color-blind-${newSettings.colorBlindness}`);
    } else {
      root.classList.remove('color-blind-protanopia', 'color-blind-deuteranopia', 'color-blind-tritanopia');
    }

    setSettings(newSettings);
    localStorage.setItem('zion-accessibility-settings', JSON.stringify(newSettings));
  }, []);

  // Load saved settings
  useEffect(() => {
    if (!enabled) return;

    const savedSettings = localStorage.getItem('zion-accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        applySettings({ ...settings, ...parsed });
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }
  }, [enabled, applySettings]);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    if (!settings.screenReader) return;

    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, [settings.screenReader]);

  // Keyboard navigation enhancement
  useEffect(() => {
    if (!enabled || !settings.keyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip if user is typing in an input
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (event.key) {
        case 'h':
        case 'H':
          if (event.ctrlKey) {
            event.preventDefault();
            document.getElementById('home-link')?.click();
            announceToScreenReader('Navigated to home page');
          }
          break;
        case 's':
        case 'S':
          if (event.ctrlKey) {
            event.preventDefault();
            document.getElementById('services-link')?.click();
            announceToScreenReader('Navigated to services page');
          }
          break;
        case 'a':
        case 'A':
          if (event.ctrlKey) {
            event.preventDefault();
            document.getElementById('about-link')?.click();
            announceToScreenReader('Navigated to about page');
          }
          break;
        case 'c':
        case 'C':
          if (event.ctrlKey) {
            event.preventDefault();
            document.getElementById('contact-link')?.click();
            announceToScreenReader('Navigated to contact page');
          }
          break;
        case 'Escape':
          // Close any open modals or dropdowns
          const activeElement = document.activeElement as HTMLElement;
          if (activeElement && activeElement.blur) {
            activeElement.blur();
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enabled, settings.keyboardNavigation, announceToScreenReader]);

  // Accessibility audit
  const runAccessibilityAudit = useCallback(() => {
    const issues: string[] = [];
    let score = 100;

    // Check for missing alt text on images
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        issues.push('Image missing alt text or aria-label');
        score -= 5;
      }
    });

    // Check for proper heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    headings.forEach((heading) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > previousLevel + 1) {
        issues.push('Heading structure is not hierarchical');
        score -= 3;
      }
      previousLevel = level;
    });

    // Check for proper form labels
    const formInputs = document.querySelectorAll('input, select, textarea');
    formInputs.forEach((input) => {
      const id = input.getAttribute('id');
      const label = document.querySelector(`label[for="${id}"]`);
      if (!label && !input.getAttribute('aria-label')) {
        issues.push('Form input missing label or aria-label');
        score -= 5;
      }
    });

    // Check for proper ARIA landmarks
    const landmarks = document.querySelectorAll('main, nav, header, footer, aside, section');
    if (landmarks.length === 0) {
      issues.push('No ARIA landmarks found');
      score -= 10;
    }

    // Check for proper focus management
    const focusableElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]');
    let hasFocusableElements = false;
    focusableElements.forEach((element) => {
      if (element.getAttribute('tabindex') !== '-1') {
        hasFocusableElements = true;
      }
    });
    if (!hasFocusableElements) {
      issues.push('No focusable elements found');
      score -= 15;
    }

    setAccessibilityIssues(issues);
    setAccessibilityScore(Math.max(0, score));
  }, []);

  // Run audit on mount and when settings change
  useEffect(() => {
    if (!enabled) return;
    
    const timer = setTimeout(runAccessibilityAudit, 2000);
    return () => clearTimeout(timer);
  }, [enabled, runAccessibilityAudit, settings]);

  if (!enabled || !showControls) return null;

  return (
    <>
      {/* Floating Accessibility Button */}
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-6 left-6 z-50 p-3 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5 }}
        aria-label="Accessibility Settings"
      >
        <Accessibility className="w-6 h-6 text-white" />
        <div className="absolute -top-2 -right-2 w-3 h-3 bg-zion-neon rounded-full animate-pulse"></div>
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed bottom-24 left-6 z-40 w-80 bg-zion-slate-dark/95 backdrop-blur-md rounded-2xl shadow-2xl border border-zion-purple/20"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            role="dialog"
            aria-labelledby="accessibility-panel-title"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-zion-purple/20">
              <div className="flex items-center space-x-2">
                <Accessibility className="w-5 h-5 text-zion-purple" />
                <h3 id="accessibility-panel-title" className="text-white font-semibold">
                  Accessibility Settings
                </h3>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="text-zion-purple/60 hover:text-zion-purple transition-colors"
                aria-label="Close accessibility panel"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Settings */}
            <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
              {/* Visual Settings */}
              <div className="space-y-3">
                <h4 className="text-zion-purple text-sm font-medium">Visual Settings</h4>
                
                {/* High Contrast */}
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.highContrast}
                    onChange={(e) => applySettings({ ...settings, highContrast: e.target.checked })}
                    className="w-4 h-4 text-zion-purple bg-zion-slate border-zion-purple/30 rounded focus:ring-zion-purple focus:ring-2"
                  />
                  <Contrast className="w-4 h-4 text-zion-purple/60" />
                  <span className="text-white text-sm">High Contrast</span>
                </label>

                {/* Large Text */}
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.largeText}
                    onChange={(e) => applySettings({ ...settings, largeText: e.target.checked })}
                    className="w-4 h-4 text-zion-purple bg-zion-slate border-zion-purple/30 rounded focus:ring-zion-purple focus:ring-2"
                  />
                  <Type className="w-4 h-4 text-zion-purple/60" />
                  <span className="text-white text-sm">Large Text</span>
                </label>

                {/* Reduced Motion */}
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.reducedMotion}
                    onChange={(e) => applySettings({ ...settings, reducedMotion: e.target.checked })}
                    className="w-4 h-4 text-zion-purple bg-zion-slate border-zion-purple/30 rounded focus:ring-zion-purple focus:ring-2"
                  />
                  <Eye className="w-4 h-4 text-zion-purple/60" />
                  <span className="text-white text-sm">Reduced Motion</span>
                </label>

                {/* Focus Indicators */}
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.focusIndicators}
                    onChange={(e) => applySettings({ ...settings, focusIndicators: e.target.checked })}
                    className="w-4 h-4 text-zion-purple bg-zion-slate border-zion-purple/30 rounded focus:ring-zion-purple focus:ring-2"
                  />
                  <MousePointer className="w-4 h-4 text-zion-purple/60" />
                  <span className="text-white text-sm">Focus Indicators</span>
                </label>
              </div>

              {/* Navigation Settings */}
              <div className="space-y-3">
                <h4 className="text-zion-purple text-sm font-medium">Navigation</h4>
                
                {/* Keyboard Navigation */}
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.keyboardNavigation}
                    onChange={(e) => applySettings({ ...settings, keyboardNavigation: e.target.checked })}
                    className="w-4 h-4 text-zion-purple bg-zion-slate border-zion-purple/30 rounded focus:ring-zion-purple focus:ring-2"
                  />
                  <Keyboard className="w-4 h-4 text-zion-purple/60" />
                  <span className="text-white text-sm">Enhanced Keyboard Navigation</span>
                </label>

                {/* Screen Reader */}
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.screenReader}
                    onChange={(e) => applySettings({ ...settings, screenReader: e.target.checked })}
                    className="w-4 h-4 text-zion-purple bg-zion-slate border-zion-purple/30 rounded focus:ring-zion-purple focus:ring-2"
                  />
                  <Volume2 className="w-4 h-4 text-zion-purple/60" />
                  <span className="text-white text-sm">Screen Reader Support</span>
                </label>
              </div>

              {/* Zoom Control */}
              <div className="space-y-3">
                <h4 className="text-zion-purple text-sm font-medium">Zoom Level</h4>
                <div className="flex items-center space-x-3">
                  <ZoomOut className="w-4 h-4 text-zion-purple/60" />
                  <input
                    type="range"
                    min="50"
                    max="200"
                    step="25"
                    value={settings.zoomLevel}
                    onChange={(e) => applySettings({ ...settings, zoomLevel: parseInt(e.target.value) })}
                    className="flex-1 h-2 bg-zion-slate rounded-lg appearance-none cursor-pointer slider"
                  />
                  <ZoomIn className="w-4 h-4 text-zion-purple/60" />
                  <span className="text-white text-sm w-12 text-center">{settings.zoomLevel}%</span>
                </div>
                <button
                  onClick={() => applySettings({ ...settings, zoomLevel: 100 })}
                  className="flex items-center space-x-2 text-zion-purple/60 hover:text-zion-purple text-xs transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset to 100%</span>
                </button>
              </div>

              {/* Color Blindness */}
              <div className="space-y-3">
                <h4 className="text-zion-purple text-sm font-medium">Color Blindness Support</h4>
                <select
                  value={settings.colorBlindness}
                  onChange={(e) => applySettings({ ...settings, colorBlindness: e.target.value as any })}
                  className="w-full bg-zion-slate border border-zion-purple/30 rounded-lg px-3 py-2 text-white text-sm focus:ring-2 focus:ring-zion-purple focus:border-transparent"
                >
                  <option value="none">No Color Blindness</option>
                  <option value="protanopia">Protanopia (Red-Blind)</option>
                  <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                  <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                </select>
              </div>

              {/* Accessibility Score */}
              <div className="space-y-3 pt-3 border-t border-zion-purple/20">
                <div className="flex items-center justify-between">
                  <h4 className="text-zion-purple text-sm font-medium">Accessibility Score</h4>
                  <span className={`text-sm font-bold ${
                    accessibilityScore >= 90 ? 'text-green-500' : 
                    accessibilityScore >= 70 ? 'text-yellow-500' : 'text-red-500'
                  }`}>
                    {accessibilityScore}/100
                  </span>
                </div>
                
                {accessibilityIssues.length > 0 && (
                  <div className="space-y-2">
                    <h5 className="text-zion-purple/80 text-xs font-medium">Issues Found:</h5>
                    <div className="space-y-1">
                      {accessibilityIssues.slice(0, 3).map((issue, index) => (
                        <div key={index} className="text-white/80 text-xs bg-zion-slate/30 p-2 rounded-lg flex items-start space-x-2">
                          <AlertTriangle className="w-3 h-3 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <span>{issue}</span>
                        </div>
                      ))}
                      {accessibilityIssues.length > 3 && (
                        <div className="text-white/60 text-xs text-center">
                          +{accessibilityIssues.length - 3} more issues
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <button
                  onClick={runAccessibilityAudit}
                  className="w-full bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple text-sm py-2 rounded-lg transition-colors"
                >
                  Run Accessibility Audit
                </button>
              </div>

              {/* Keyboard Shortcuts Help */}
              <div className="space-y-3 pt-3 border-t border-zion-purple/20">
                <h4 className="text-zion-purple text-sm font-medium">Keyboard Shortcuts</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-white/60">Ctrl + H:</div>
                  <div className="text-white">Home</div>
                  <div className="text-white/60">Ctrl + S:</div>
                  <div className="text-white">Services</div>
                  <div className="text-white/60">Ctrl + A:</div>
                  <div className="text-white">About</div>
                  <div className="text-white/60">Ctrl + C:</div>
                  <div className="text-white">Contact</div>
                  <div className="text-white/60">Escape:</div>
                  <div className="text-white">Close/Blur</div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-3 bg-zion-slate/30 rounded-b-2xl">
              <div className="flex items-center justify-between text-xs">
                <span className="text-white/60">Settings saved automatically</span>
                <CheckCircle className="w-4 h-4 text-green-500" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global CSS for accessibility features */}
      <style jsx global>{`
        .high-contrast {
          --text-contrast: 1.5;
          --border-contrast: 2;
        }
        
        .large-text {
          font-size: 120% !important;
        }
        
        .reduced-motion {
          --motion-reduction: 0.1;
        }
        
        .reduced-motion * {
          animation-duration: calc(var(--motion-reduction) * 1s) !important;
          transition-duration: calc(var(--motion-reduction) * 1s) !important;
        }
        
        .focus-visible *:focus {
          outline: 3px solid #22ddd2 !important;
          outline-offset: 2px !important;
        }
        
        .color-blind-protanopia {
          filter: url('#protanopia-filter');
        }
        
        .color-blind-deuteranopia {
          filter: url('#deuteranopia-filter');
        }
        
        .color-blind-tritanopia {
          filter: url('#tritanopia-filter');
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
        
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #22ddd2;
          cursor: pointer;
        }
        
        .slider::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #22ddd2;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </>
  );
};

export default EnhancedAccessibilityEnhancer;