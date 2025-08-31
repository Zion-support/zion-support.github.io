import React, { useEffect, useState, useCallback, useRef } from 'react';
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
  Accessibility,
  SkipForward,
  CheckCircle,
  AlertTriangle,
  Info
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
}

interface AccessibilityIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  element: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  fixable: boolean;
}

export const EnhancedAccessibilityEnhancer: React.FC<{
  children: React.ReactNode;
  showPanel?: boolean;
  autoScan?: boolean;
}> = ({ children, showPanel = false, autoScan = true }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: true,
    focusIndicator: true
  });
  
  const [issues, setIssues] = useState<AccessibilityIssue[]>([]);
  const [isScanning, setIsScanning] = useState(false);
  const [showSkipLinks, setShowSkipLinks] = useState(false);
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);
  const focusHistoryRef = useRef<HTMLElement[]>([]);

  // Skip links for keyboard navigation
  const skipLinks = [
    { id: 'main-content', label: 'Skip to main content' },
    { id: 'navigation', label: 'Skip to navigation' },
    { id: 'footer', label: 'Skip to footer' }
  ];

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

    // Apply focus indicator
    if (updatedSettings.focusIndicator) {
      document.documentElement.classList.add('focus-visible');
    } else {
      document.documentElement.classList.remove('focus-visible');
    }

    // Store settings in localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(updatedSettings));
  }, [settings]);

  // Scan for accessibility issues
  const scanAccessibility = useCallback(async () => {
    setIsScanning(true);
    const newIssues: AccessibilityIssue[] = [];

    try {
      // Check for missing alt text
      const images = document.querySelectorAll('img');
      images.forEach((img, index) => {
        if (!img.alt && !img.ariaLabel) {
          newIssues.push({
            id: `missing-alt-${index}`,
            type: 'warning',
            element: img.tagName.toLowerCase(),
            description: 'Image missing alt text or aria-label',
            impact: 'medium',
            fixable: true
          });
        }
      });

      // Check for missing ARIA labels
      const interactiveElements = document.querySelectorAll('button, input, select, textarea, a[href]');
      interactiveElements.forEach((element, index) => {
        const tagName = element.tagName.toLowerCase();
        const hasLabel = element.getAttribute('aria-label') || 
                        element.getAttribute('aria-labelledby') ||
                        element.getAttribute('title');
        
        if (!hasLabel && !element.textContent?.trim()) {
          newIssues.push({
            id: `missing-aria-${index}`,
            type: 'warning',
            element: tagName,
            description: `${tagName} element missing accessible label`,
            impact: 'medium',
            fixable: true
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
            id: `heading-skip-${index}`,
            type: 'warning',
            element: heading.tagName.toLowerCase(),
            description: 'Heading level skipped (h1 → h3)',
            impact: 'low',
            fixable: true
          });
        }
        previousLevel = level;
      });

      // Check for color contrast (simplified)
      const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
      textElements.forEach((element, index) => {
        const style = window.getComputedStyle(element);
        const color = style.color;
        const backgroundColor = style.backgroundColor;
        
        if (color === backgroundColor || color === 'transparent') {
          newIssues.push({
            id: `contrast-${index}`,
            type: 'error',
            element: element.tagName.toLowerCase(),
            description: 'Potential color contrast issue',
            impact: 'high',
            fixable: true
          });
        }
      });

      // Check for keyboard navigation
      const focusableElements = document.querySelectorAll('a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (focusableElements.length === 0) {
        newIssues.push({
          id: 'no-focusable-elements',
          type: 'error',
          element: 'document',
          description: 'No focusable elements found',
          impact: 'high',
          fixable: false
        });
      }

    } catch (error) {
      console.warn('Accessibility scan failed:', error);
    }

    setIssues(newIssues);
    setIsScanning(false);
  }, []);

  // Handle keyboard navigation
  const handleKeyboardNavigation = useCallback((event: KeyboardEvent) => {
    if (!settings.keyboardNavigation) return;

    const focusableElements = Array.from(
      document.querySelectorAll('a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])')
    ).filter(el => !(el as HTMLElement).hidden) as HTMLElement[];

    if (focusableElements.length === 0) return;

    const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement);
    let nextIndex = currentIndex;

    switch (event.key) {
      case 'Tab':
        if (event.shiftKey) {
          nextIndex = currentIndex <= 0 ? focusableElements.length - 1 : currentIndex - 1;
        } else {
          nextIndex = currentIndex >= focusableElements.length - 1 ? 0 : currentIndex + 1;
        }
        break;
      case 'ArrowDown':
      case 'ArrowRight':
        nextIndex = currentIndex >= focusableElements.length - 1 ? 0 : currentIndex + 1;
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        nextIndex = currentIndex <= 0 ? focusableElements.length - 1 : currentIndex - 1;
        break;
      case 'Home':
        nextIndex = 0;
        break;
      case 'End':
        nextIndex = focusableElements.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    focusableElements[nextIndex]?.focus();
    setCurrentFocus(focusableElements[nextIndex]);
    
    // Add to focus history
    if (focusableElements[nextIndex]) {
      focusHistoryRef.current.push(focusableElements[nextIndex]);
      if (focusHistoryRef.current.length > 10) {
        focusHistoryRef.current.shift();
      }
    }
  }, [settings.keyboardNavigation]);

  // Handle focus changes
  const handleFocusChange = useCallback((event: FocusEvent) => {
    const target = event.target as HTMLElement;
    setCurrentFocus(target);
    
    if (target) {
      focusHistoryRef.current.push(target);
      if (focusHistoryRef.current.length > 10) {
        focusHistoryRef.current.shift();
      }
    }
  }, []);

  // Initialize accessibility
  useEffect(() => {
    // Load saved settings
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
        applySettings(parsed);
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }

    // Add event listeners
    document.addEventListener('keydown', handleKeyboardNavigation);
    document.addEventListener('focusin', handleFocusChange);

    // Show skip links on Tab press
    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        setShowSkipLinks(true);
        setTimeout(() => setShowSkipLinks(false), 5000);
      }
    };
    document.addEventListener('keydown', handleTabKey);

    // Auto-scan if enabled
    if (autoScan) {
      setTimeout(scanAccessibility, 2000);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyboardNavigation);
      document.removeEventListener('focusin', handleFocusChange);
      document.removeEventListener('keydown', handleTabKey);
    };
  }, [handleKeyboardNavigation, handleFocusChange, autoScan, scanAccessibility, applySettings]);

  // Get issue color
  const getIssueColor = (type: string) => {
    switch (type) {
      case 'error': return 'text-red-500 bg-red-50 border-red-200';
      case 'warning': return 'text-yellow-500 bg-yellow-50 border-yellow-200';
      case 'info': return 'text-blue-500 bg-blue-50 border-blue-200';
      default: return 'text-zion-slate bg-zion-slate/10 border-zion-slate/200';
    }
  };

  // Get impact color
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'text-red-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-blue-500';
      default: return 'text-zion-slate';
    }
  };

  return (
    <>
      {children}

      {/* Skip Links */}
      <AnimatePresence>
        {showSkipLinks && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-0 left-0 right-0 z-50 bg-zion-cyan text-white p-2"
          >
            <div className="container mx-auto flex flex-wrap gap-2 justify-center">
              {skipLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zion-cyan"
                  onClick={() => setShowSkipLinks(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Accessibility Panel */}
      {showPanel && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          className="fixed top-0 right-0 h-full w-80 bg-white/95 backdrop-blur-xl shadow-2xl border-l border-zion-cyan/20 p-6 overflow-y-auto z-40"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-zion-slate-dark flex items-center gap-2">
              <Accessibility className="w-6 h-6 text-zion-cyan" />
              Accessibility
            </h3>
          </div>

          {/* Settings */}
          <div className="space-y-4 mb-6">
            <h4 className="font-medium text-zion-slate-dark">Settings</h4>
            
            <div className="space-y-3">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.highContrast}
                  onChange={(e) => applySettings({ highContrast: e.target.checked })}
                  className="w-4 h-4 text-zion-cyan rounded focus:ring-zion-cyan"
                />
                <Contrast className="w-4 h-4 text-zion-slate" />
                <span className="text-sm text-zion-slate">High Contrast</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.largeText}
                  onChange={(e) => applySettings({ largeText: e.target.checked })}
                  className="w-4 h-4 text-zion-cyan rounded focus:ring-zion-cyan"
                />
                <Type className="w-4 h-4 text-zion-slate" />
                <span className="text-sm text-zion-slate">Large Text</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.reducedMotion}
                  onChange={(e) => applySettings({ reducedMotion: e.target.checked })}
                  className="w-4 h-4 text-zion-cyan rounded focus:ring-zion-cyan"
                />
                <Eye className="w-4 h-4 text-zion-slate" />
                <span className="text-sm text-zion-slate">Reduced Motion</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.focusIndicator}
                  onChange={(e) => applySettings({ focusIndicator: e.target.checked })}
                  className="w-4 h-4 text-zion-cyan rounded focus:ring-zion-cyan"
                />
                <MousePointer className="w-4 h-4 text-zion-slate" />
                <span className="text-sm text-zion-slate">Focus Indicator</span>
              </label>
            </div>
          </div>

          {/* Scan Results */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-zion-slate-dark">Accessibility Issues</h4>
              <button
                onClick={scanAccessibility}
                disabled={isScanning}
                className="px-3 py-1 bg-zion-cyan hover:bg-zion-cyan/80 text-white text-sm rounded transition-colors disabled:opacity-50"
              >
                {isScanning ? 'Scanning...' : 'Scan'}
              </button>
            </div>

            {issues.length > 0 ? (
              <div className="space-y-3">
                {issues.map((issue) => (
                  <div
                    key={issue.id}
                    className={`p-3 rounded-lg border ${getIssueColor(issue.type)}`}
                  >
                    <div className="flex items-start space-x-2">
                      {issue.type === 'error' ? (
                        <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5" />
                      ) : issue.type === 'warning' ? (
                        <AlertTriangle className="w-4 h-4 text-yellow-500 mt-0.5" />
                      ) : (
                        <Info className="w-4 h-4 text-blue-500 mt-0.5" />
                      )}
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-medium">{issue.element}</span>
                          <span className={`text-xs ${getImpactColor(issue.impact)}`}>
                            {issue.impact} impact
                          </span>
                        </div>
                        <p className="text-xs text-zion-slate/70">{issue.description}</p>
                        {issue.fixable && (
                          <button className="mt-1 text-xs text-zion-cyan hover:text-zion-cyan/80 transition-colors">
                            Fix automatically →
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-4 text-zion-slate/60">
                <CheckCircle className="w-8 h-8 mx-auto mb-2 text-green-500" />
                <p className="text-sm">No accessibility issues found</p>
              </div>
            )}
          </div>

          {/* Focus History */}
          {focusHistoryRef.current.length > 0 && (
            <div className="mt-6 pt-6 border-t border-zion-slate/20">
              <h4 className="font-medium text-zion-slate-dark mb-3">Focus History</h4>
              <div className="space-y-2">
                {focusHistoryRef.current.slice(-5).reverse().map((element, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-xs text-zion-slate/60"
                  >
                    <Keyboard className="w-3 h-3" />
                    <span className="truncate">
                      {element.tagName.toLowerCase()}
                      {element.textContent && `: ${element.textContent.slice(0, 30)}...`}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      )}
    </>
  );
};