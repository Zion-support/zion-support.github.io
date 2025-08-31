import React, { useState, useEffect, useCallback } from 'react';
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
}

interface AccessibilityEnhancerProps {
  enabled: boolean;
  showPanel?: boolean;
}

export const EnhancedAccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enabled,
  showPanel = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showAccessibilityPanel, setShowAccessibilityPanel] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicators: true,
    zoomLevel: 100
  });

  const [accessibilityIssues, setAccessibilityIssues] = useState<string[]>([]);
  const [accessibilityScore, setAccessibilityScore] = useState(85);

  // Apply accessibility settings
  const applyAccessibilitySettings = useCallback((newSettings: Partial<AccessibilitySettings>) => {
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

    // Apply zoom level
    document.documentElement.style.fontSize = `${updatedSettings.zoomLevel}%`;

    // Apply focus indicators
    if (updatedSettings.focusIndicators) {
      document.documentElement.classList.add('show-focus');
    } else {
      document.documentElement.classList.remove('show-focus');
    }

    // Store settings in localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(updatedSettings));
  }, [settings]);

  // Load saved settings
  useEffect(() => {
    if (!enabled) return;

    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsedSettings = JSON.parse(savedSettings);
        setSettings(parsedSettings);
        applyAccessibilitySettings(parsedSettings);
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }

    setIsVisible(true);
  }, [enabled, applyAccessibilitySettings]);

  // Enhanced keyboard navigation
  useEffect(() => {
    if (!enabled || !settings.keyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip if user is typing in an input field
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (event.key) {
        case 'Tab':
          // Enhanced tab navigation with visual indicators
          if (event.shiftKey) {
            // Shift+Tab: Navigate backwards
            event.preventDefault();
            const focusableElements = getFocusableElements();
            const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement);
            const previousIndex = currentIndex > 0 ? currentIndex - 1 : focusableElements.length - 1;
            focusableElements[previousIndex]?.focus();
          }
          break;
        
        case 'Escape':
          // Close modals and panels
          const modals = document.querySelectorAll('[role="dialog"], [data-modal="true"]');
          if (modals.length > 0) {
            const lastModal = modals[modals.length - 1] as HTMLElement;
            lastModal.style.display = 'none';
          }
          break;
        
        case 'h':
        case 'H':
          // Navigate to home
          if (event.ctrlKey || event.metaKey) {
            event.preventDefault();
            window.location.href = '/';
          }
          break;
        
        case 's':
        case 'S':
          // Navigate to services
          if (event.ctrlKey || event.metaKey) {
            event.preventDefault();
            window.location.href = '/services';
          }
          break;
        
        case 'c':
        case 'C':
          // Navigate to contact
          if (event.ctrlKey || event.metaKey) {
            event.preventDefault();
            window.location.href = '/contact';
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enabled, settings.keyboardNavigation]);

  // Get focusable elements
  const getFocusableElements = (): HTMLElement[] => {
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]'
    ];
    
    return Array.from(document.querySelectorAll(focusableSelectors.join(','))) as HTMLElement[];
  };

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

  // Accessibility audit
  const runAccessibilityAudit = useCallback(() => {
    const issues: string[] = [];
    let score = 100;

    // Check for alt text on images
    const images = document.querySelectorAll('img');
    const imagesWithoutAlt = Array.from(images).filter(img => !img.alt);
    if (imagesWithoutAlt.length > 0) {
      issues.push(`${imagesWithoutAlt.length} images missing alt text`);
      score -= 10;
    }

    // Check for proper heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    for (const heading of headings) {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > previousLevel + 1) {
        issues.push('Heading structure is not hierarchical');
        score -= 5;
        break;
      }
      previousLevel = level;
    }

    // Check for form labels
    const formInputs = document.querySelectorAll('input, select, textarea');
    const inputsWithoutLabels = Array.from(formInputs).filter(input => {
      const id = input.getAttribute('id');
      if (!id) return true;
      return !document.querySelector(`label[for="${id}"]`);
    });
    if (inputsWithoutLabels.length > 0) {
      issues.push(`${inputsWithoutLabels.length} form inputs missing labels`);
      score -= 8;
    }

    // Check for ARIA labels
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
    const elementsWithoutAria = Array.from(interactiveElements).filter(element => {
      return !element.getAttribute('aria-label') && !element.getAttribute('aria-labelledby');
    });
    if (elementsWithoutAria.length > 0) {
      issues.push(`${elementsWithoutAria.length} interactive elements missing ARIA labels`);
      score -= 7;
    }

    setAccessibilityIssues(issues);
    setAccessibilityScore(Math.max(0, score));
  }, []);

  // Run audit on mount and when settings change
  useEffect(() => {
    if (enabled) {
      runAccessibilityAudit();
    }
  }, [enabled, runAccessibilityAudit]);

  if (!enabled || !isVisible) return null;

  return (
    <>
      {/* Floating Accessibility Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed bottom-4 left-4 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAccessibilityPanel(!showAccessibilityPanel)}
          className="relative p-3 rounded-full shadow-lg bg-zion-purple text-white hover:shadow-xl transition-all duration-300"
          aria-label="Accessibility Settings"
        >
          <Accessibility className="w-5 h-5" />
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-zion-purple">
              {accessibilityScore}
            </span>
          </div>
        </motion.button>
      </motion.div>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {showAccessibilityPanel && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 bg-zion-slate-dark border border-zion-purple/20 rounded-2xl p-6 max-w-sm w-full max-h-[80vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Accessibility className="w-6 h-6 text-zion-cyan" />
                <h2 className="text-xl font-bold text-white">Accessibility</h2>
              </div>
              <button
                onClick={() => setShowAccessibilityPanel(false)}
                className="p-2 hover:bg-zion-purple/20 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-zion-slate-light" />
              </button>
            </div>

            {/* Accessibility Score */}
            <div className="mb-6 p-4 bg-zion-slate-darker rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-zion-slate-light">Accessibility Score</span>
                <span className={`text-lg font-bold ${
                  accessibilityScore >= 90 ? 'text-green-400' :
                  accessibilityScore >= 70 ? 'text-yellow-400' :
                  'text-red-400'
                }`}>
                  {accessibilityScore}/100
                </span>
              </div>
              <div className="w-full bg-zion-slate-light rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-300 ${
                    accessibilityScore >= 90 ? 'bg-green-400' :
                    accessibilityScore >= 70 ? 'bg-yellow-400' :
                    'bg-red-400'
                  }`}
                  style={{ width: `${accessibilityScore}%` }}
                />
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => applyAccessibilitySettings({ highContrast: !settings.highContrast })}
                  className={`p-3 rounded-lg border transition-all duration-300 ${
                    settings.highContrast 
                      ? 'bg-zion-cyan border-zion-cyan text-white' 
                      : 'border-zion-purple/20 text-zion-slate-light hover:border-zion-cyan'
                  }`}
                >
                  <Contrast className="w-5 h-5 mx-auto mb-2" />
                  <span className="text-xs">High Contrast</span>
                </button>
                
                <button
                  onClick={() => applyAccessibilitySettings({ largeText: !settings.largeText })}
                  className={`p-3 rounded-lg border transition-all duration-300 ${
                    settings.largeText 
                      ? 'bg-zion-cyan border-zion-cyan text-white' 
                      : 'border-zion-purple/20 text-zion-slate-light hover:border-zion-cyan'
                  }`}
                >
                  <Type className="w-5 h-5 mx-auto mb-2" />
                  <span className="text-xs">Large Text</span>
                </button>
                
                <button
                  onClick={() => applyAccessibilitySettings({ reducedMotion: !settings.reducedMotion })}
                  className={`p-3 rounded-lg border transition-all duration-300 ${
                    settings.reducedMotion 
                      ? 'bg-zion-cyan border-zion-cyan text-white' 
                      : 'border-zion-purple/20 text-zion-slate-light hover:border-zion-cyan'
                  }`}
                >
                  <Eye className="w-5 h-5 mx-auto mb-2" />
                  <span className="text-xs">Reduce Motion</span>
                </button>
                
                <button
                  onClick={() => applyAccessibilitySettings({ focusIndicators: !settings.focusIndicators })}
                  className={`p-3 rounded-lg border transition-all duration-300 ${
                    settings.focusIndicators 
                      ? 'bg-zion-cyan border-zion-cyan text-white' 
                      : 'border-zion-purple/20 text-zion-slate-light hover:border-zion-cyan'
                  }`}
                >
                  <MousePointer className="w-5 h-5 mx-auto mb-2" />
                  <span className="text-xs">Focus Indicators</span>
                </button>
              </div>
            </div>

            {/* Zoom Control */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-4">Text Size</h3>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => applyAccessibilitySettings({ zoomLevel: Math.max(50, settings.zoomLevel - 10) })}
                  className="p-2 bg-zion-purple/20 rounded-lg hover:bg-zion-purple/30 transition-colors"
                >
                  <ZoomOut className="w-4 h-4 text-white" />
                </button>
                
                <span className="text-white font-medium min-w-[4rem] text-center">
                  {settings.zoomLevel}%
                </span>
                
                <button
                  onClick={() => applyAccessibilitySettings({ zoomLevel: Math.min(200, settings.zoomLevel + 10) })}
                  className="p-2 bg-zion-purple/20 rounded-lg hover:bg-zion-purple/30 transition-colors"
                >
                  <ZoomIn className="w-4 h-4 text-white" />
                </button>
                
                <button
                  onClick={() => applyAccessibilitySettings({ zoomLevel: 100 })}
                  className="p-2 bg-zion-purple/20 rounded-lg hover:bg-zion-purple/30 transition-colors"
                  title="Reset to 100%"
                >
                  <RotateCcw className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Accessibility Issues */}
            {accessibilityIssues.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-400" />
                  Issues Found
                </h3>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {accessibilityIssues.map((issue, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                      <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <p className="text-yellow-300 text-sm">{issue}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Keyboard Shortcuts */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Keyboard className="w-5 h-5 text-zion-cyan" />
                Keyboard Shortcuts
              </h3>
              <div className="space-y-2 text-sm text-zion-slate-light">
                <div className="flex justify-between">
                  <span>Tab</span>
                  <span>Navigate elements</span>
                </div>
                <div className="flex justify-between">
                  <span>Ctrl/Cmd + H</span>
                  <span>Go to Home</span>
                </div>
                <div className="flex justify-between">
                  <span>Ctrl/Cmd + S</span>
                  <span>Go to Services</span>
                </div>
                <div className="flex justify-between">
                  <span>Ctrl/Cmd + C</span>
                  <span>Go to Contact</span>
                </div>
                <div className="flex justify-between">
                  <span>Escape</span>
                  <span>Close modals</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Accessibility Styles */}
      <style jsx global>{`
        .high-contrast {
          filter: contrast(150%) brightness(110%);
        }
        
        .large-text {
          font-size: 1.2em;
        }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        .show-focus *:focus {
          outline: 3px solid #06b6d4 !important;
          outline-offset: 2px !important;
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
      `}</style>
    </>
  );
};