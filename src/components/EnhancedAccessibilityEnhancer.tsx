import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Eye,
  EyeOff,
  Volume2,
  VolumeX,
  Keyboard,
  MousePointer,
  Accessibility,
  Settings,
  X,
  CheckCircle,
  AlertTriangle,
  Info,
  ZoomIn,
  ZoomOut,
  Contrast,
  Type,
  Palette,
  Headphones,
  Braille,
  Hand,
  Brain,
  Heart,
  Shield,
  Users,
  Globe,
  Zap,
  Target,
  Rocket,
  Atom,
  Cloud,
  Database,
  Workflow,
  Lock,
  BarChart3,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Globe2,
  Bot,
  Eye as EyeIcon,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  FileText,
  MessageCircle,
  BarChart,
  Users2,
  Settings as SettingsIcon
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
  colorBlindness: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  fontSize: 'small' | 'medium' | 'large' | 'extra-large';
  lineSpacing: 'tight' | 'normal' | 'loose';
  letterSpacing: 'tight' | 'normal' | 'wide';
}

interface AccessibilityIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  message: string;
  element?: string;
  wcagLevel: 'A' | 'AA' | 'AAA';
  impact: 'high' | 'medium' | 'low';
  suggestion: string;
}

const EnhancedAccessibilityEnhancer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: true,
    colorBlindness: 'none',
    fontSize: 'medium',
    lineSpacing: 'normal',
    letterSpacing: 'normal'
  });
  const [issues, setIssues] = useState<AccessibilityIssue[]>([]);
  const [isScanning, setIsScanning] = useState(false);
  const [currentFocus, setCurrentFocus] = useState<string>('');

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
    if (updatedSettings.largeText) {
      document.documentElement.classList.add('large-text');
    } else {
      document.documentElement.classList.remove('large-text');
    }

    // Apply reduced motion
    if (updatedSettings.reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }

    // Apply color blindness filters
    document.documentElement.style.filter = updatedSettings.colorBlindness !== 'none' 
      ? `url(#${updatedSettings.colorBlindness})` 
      : 'none';

    // Apply font size
    const fontSizeMap = {
      'small': '14px',
      'medium': '16px',
      'large': '18px',
      'extra-large': '20px'
    };
    document.documentElement.style.fontSize = fontSizeMap[updatedSettings.fontSize];

    // Apply line spacing
    const lineSpacingMap = {
      'tight': '1.2',
      'normal': '1.5',
      'loose': '2.0'
    };
    document.documentElement.style.lineHeight = lineSpacingMap[updatedSettings.lineSpacing];

    // Apply letter spacing
    const letterSpacingMap = {
      'tight': '-0.5px',
      'normal': '0px',
      'wide': '1px'
    };
    document.documentElement.style.letterSpacing = letterSpacingMap[updatedSettings.letterSpacing];

    // Apply focus indicator
    if (updatedSettings.focusIndicator) {
      document.documentElement.classList.add('focus-visible');
    } else {
      document.documentElement.classList.remove('focus-visible');
    }

    // Store settings in localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(updatedSettings));
  }, [settings]);

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsedSettings = JSON.parse(savedSettings);
        setSettings(parsedSettings);
        applySettings(parsedSettings);
      } catch (error) {
        console.error('Failed to parse accessibility settings:', error);
      }
    }
  }, []);

  // Accessibility audit
  const performAccessibilityAudit = useCallback(async () => {
    setIsScanning(true);
    const newIssues: AccessibilityIssue[] = [];

    try {
      // Check for missing alt text on images
      const images = document.querySelectorAll('img');
      images.forEach((img, index) => {
        if (!img.alt && !img.getAttribute('aria-label')) {
          newIssues.push({
            id: `img-alt-${index}`,
            type: 'error',
            message: 'Image missing alt text',
            element: img.tagName.toLowerCase(),
            wcagLevel: 'A',
            impact: 'high',
            suggestion: 'Add descriptive alt text or aria-label to the image'
          });
        }
      });

      // Check for proper heading structure
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      let previousLevel = 0;
      headings.forEach((heading, index) => {
        const currentLevel = parseInt(heading.tagName.charAt(1));
        if (currentLevel - previousLevel > 1) {
          newIssues.push({
            id: `heading-structure-${index}`,
            type: 'warning',
            message: 'Heading level skipped',
            element: heading.tagName.toLowerCase(),
            wcagLevel: 'AA',
            impact: 'medium',
            suggestion: 'Ensure proper heading hierarchy (h1 → h2 → h3)'
          });
        }
        previousLevel = currentLevel;
      });

      // Check for form labels
      const formInputs = document.querySelectorAll('input, select, textarea');
      formInputs.forEach((input, index) => {
        const id = input.getAttribute('id');
        const label = document.querySelector(`label[for="${id}"]`);
        const ariaLabel = input.getAttribute('aria-label');
        
        if (!label && !ariaLabel && !input.getAttribute('aria-labelledby')) {
          newIssues.push({
            id: `form-label-${index}`,
            type: 'error',
            message: 'Form input missing label',
            element: input.tagName.toLowerCase(),
            wcagLevel: 'A',
            impact: 'high',
            suggestion: 'Add a label, aria-label, or aria-labelledby attribute'
          });
        }
      });

      // Check for color contrast (simplified)
      const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
      textElements.forEach((element, index) => {
        const style = window.getComputedStyle(element);
        const color = style.color;
        const backgroundColor = style.backgroundColor;
        
        // This is a simplified check - in a real implementation, you'd use a color contrast library
        if (color === backgroundColor || color === 'transparent') {
          newIssues.push({
            id: `color-contrast-${index}`,
            type: 'warning',
            message: 'Potential color contrast issue',
            element: element.tagName.toLowerCase(),
            wcagLevel: 'AA',
            impact: 'medium',
            suggestion: 'Ensure sufficient color contrast between text and background'
          });
        }
      });

      // Check for keyboard navigation
      const interactiveElements = document.querySelectorAll('a, button, input, select, textarea, [tabindex]');
      interactiveElements.forEach((element, index) => {
        if (element.getAttribute('tabindex') === '-1' && !element.hasAttribute('aria-hidden')) {
          newIssues.push({
            id: `keyboard-nav-${index}`,
            type: 'warning',
            message: 'Element not keyboard accessible',
            element: element.tagName.toLowerCase(),
            wcagLevel: 'A',
            impact: 'medium',
            suggestion: 'Ensure element is keyboard accessible or add aria-hidden if appropriate'
          });
        }
      });

      // Check for ARIA attributes
      const ariaElements = document.querySelectorAll('[aria-*]');
      ariaElements.forEach((element, index) => {
        const ariaInvalid = element.getAttribute('aria-invalid');
        if (ariaInvalid && !['true', 'false', 'grammar', 'spelling'].includes(ariaInvalid)) {
          newIssues.push({
            id: `aria-invalid-${index}`,
            type: 'error',
            message: 'Invalid aria-invalid value',
            element: element.tagName.toLowerCase(),
            wcagLevel: 'A',
            impact: 'high',
            suggestion: 'Use valid aria-invalid values: true, false, grammar, or spelling'
          });
        }
      });

      setIssues(newIssues);
    } catch (error) {
      console.error('Accessibility audit failed:', error);
    } finally {
      setIsScanning(false);
    }
  }, []);

  // Quick accessibility actions
  const quickActions = [
    {
      name: 'High Contrast',
      icon: Contrast,
      action: () => applySettings({ highContrast: !settings.highContrast }),
      active: settings.highContrast
    },
    {
      name: 'Large Text',
      icon: Type,
      action: () => applySettings({ largeText: !settings.largeText }),
      active: settings.largeText
    },
    {
      name: 'Reduced Motion',
      icon: Activity,
      action: () => applySettings({ reducedMotion: !settings.reducedMotion }),
      active: settings.reducedMotion
    },
    {
      name: 'Focus Indicator',
      icon: Target,
      action: () => applySettings({ focusIndicator: !settings.focusIndicator }),
      active: settings.focusIndicator
    }
  ];

  // Color blindness options
  const colorBlindnessOptions = [
    { value: 'none', label: 'None', icon: Eye },
    { value: 'protanopia', label: 'Protanopia (Red-Blind)', icon: EyeOff },
    { value: 'deuteranopia', label: 'Deuteranopia (Green-Blind)', icon: EyeOff },
    { value: 'tritanopia', label: 'Tritanopia (Blue-Blind)', icon: EyeOff }
  ];

  // Font size options
  const fontSizeOptions = [
    { value: 'small', label: 'Small', size: '14px' },
    { value: 'medium', label: 'Medium', size: '16px' },
    { value: 'large', label: 'Large', size: '18px' },
    { value: 'extra-large', label: 'Extra Large', size: '20px' }
  ];

  return (
    <>
      {/* Accessibility Panel */}
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          className="fixed top-20 right-4 w-96 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl z-40 p-4 max-h-[80vh] overflow-y-auto"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <Accessibility className="w-5 h-5 text-cyan-400 mr-2" />
              Accessibility
            </h3>
            <button
              onClick={() => setIsVisible(false)}
              className="p-1 hover:bg-white/10 rounded-lg transition-colors duration-200"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Quick Actions */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-white mb-3">Quick Actions</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickActions.map((action) => (
                <button
                  key={action.name}
                  onClick={action.action}
                  className={`p-3 rounded-lg transition-all duration-200 flex flex-col items-center space-y-2 ${
                    action.active
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  <action.icon className="w-5 h-5" />
                  <span className="text-xs font-medium">{action.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Font Size */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-white mb-3">Font Size</h4>
            <div className="grid grid-cols-2 gap-2">
              {fontSizeOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => applySettings({ fontSize: option.value as any })}
                  className={`p-2 rounded-lg transition-all duration-200 text-center ${
                    settings.fontSize === option.value
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  <div className="text-xs font-medium">{option.label}</div>
                  <div className="text-xs opacity-60" style={{ fontSize: option.size }}>
                    Aa
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Color Blindness */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-white mb-3">Color Blindness Support</h4>
            <div className="space-y-2">
              {colorBlindnessOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => applySettings({ colorBlindness: option.value as any })}
                  className={`w-full p-3 rounded-lg transition-all duration-200 flex items-center space-x-3 ${
                    settings.colorBlindness === option.value
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  <option.icon className="w-4 h-4" />
                  <span className="text-sm">{option.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Line Spacing */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-white mb-3">Line Spacing</h4>
            <div className="grid grid-cols-3 gap-2">
              {[
                { value: 'tight', label: 'Tight', spacing: '1.2' },
                { value: 'normal', label: 'Normal', spacing: '1.5' },
                { value: 'loose', label: 'Loose', spacing: '2.0' }
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => applySettings({ lineSpacing: option.value as any })}
                  className={`p-2 rounded-lg transition-all duration-200 text-center ${
                    settings.lineSpacing === option.value
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  <div className="text-xs font-medium">{option.label}</div>
                  <div className="text-xs opacity-60" style={{ lineHeight: option.spacing }}>
                    Line
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Accessibility Audit */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-white mb-3">Accessibility Audit</h4>
            <button
              onClick={performAccessibilityAudit}
              disabled={isScanning}
              className="w-full p-3 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 rounded-lg transition-all duration-200 disabled:opacity-50 flex items-center justify-center space-x-2"
            >
              {isScanning ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current" />
                  <span>Scanning...</span>
                </>
              ) : (
                <>
                  <Shield className="w-4 h-4" />
                  <span>Run Audit</span>
                </>
              )}
            </button>
          </div>

          {/* Issues Display */}
          {issues.length > 0 && (
            <div className="mb-6">
              <h4 className="text-sm font-medium text-white mb-3">
                Issues Found ({issues.length})
              </h4>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {issues.slice(0, 5).map((issue) => (
                  <div
                    key={issue.id}
                    className={`p-3 rounded-lg border ${
                      issue.type === 'error'
                        ? 'bg-red-500/10 border-red-500/30 text-red-300'
                        : issue.type === 'warning'
                        ? 'bg-yellow-500/10 border-yellow-500/30 text-yellow-300'
                        : 'bg-blue-500/10 border-blue-500/30 text-blue-300'
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {issue.type === 'error' ? (
                        <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                      ) : issue.type === 'warning' ? (
                        <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      ) : (
                        <Info className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <div className="text-xs font-medium mb-1">{issue.message}</div>
                        <div className="text-xs opacity-70">{issue.suggestion}</div>
                        <div className="text-xs opacity-50 mt-1">
                          WCAG {issue.wcagLevel} • {issue.impact} impact
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {issues.length > 5 && (
                  <div className="text-center text-xs text-gray-400">
                    +{issues.length - 5} more issues
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Reset Button */}
          <button
            onClick={() => {
              const defaultSettings: AccessibilitySettings = {
                highContrast: false,
                largeText: false,
                reducedMotion: false,
                screenReader: false,
                keyboardNavigation: false,
                focusIndicator: true,
                colorBlindness: 'none',
                fontSize: 'medium',
                lineSpacing: 'normal',
                letterSpacing: 'normal'
              };
              setSettings(defaultSettings);
              applySettings(defaultSettings);
            }}
            className="w-full p-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-200"
          >
            Reset to Defaults
          </button>
        </motion.div>
      )}

      {/* Accessibility Toggle Button */}
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed top-32 right-4 p-3 bg-black/80 backdrop-blur-xl border border-white/10 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-30 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="Accessibility Settings"
      >
        <Accessibility className="w-5 h-5 text-cyan-400 group-hover:text-white" />
      </motion.button>

      {/* Color Blindness SVG Filters */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="protanopia">
            <feColorMatrix
              type="matrix"
              values="0.567 0.433 0 0 0 0.558 0.442 0 0 0 0 0.242 0.758 0 0 0 0 0 1 0"
            />
          </filter>
          <filter id="deuteranopia">
            <feColorMatrix
              type="matrix"
              values="0.625 0.375 0 0 0 0.7 0.3 0 0 0 0 0.3 0.7 0 0 0 0 0 1 0"
            />
          </filter>
          <filter id="tritanopia">
            <feColorMatrix
              type="matrix"
              values="0.95 0.05 0 0 0 0 0.433 0.567 0 0 0 0.475 0.525 0 0 0 0 0 1 0"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default EnhancedAccessibilityEnhancer;
