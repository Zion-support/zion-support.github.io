import React, { useState, useEffect, useCallback, useRef } from 'react';
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
  SkipForward,
  Accessibility,
  HelpCircle,
  Settings,
  X
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
}

interface AccessibilityEnhancerProps {
  enabled?: boolean;
  showControls?: boolean;
  onSettingsChange?: (settings: AccessibilitySettings) => void;
}

export const EnhancedAccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enabled = true,
  showControls = true,
  onSettingsChange
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: true,
    colorBlindFriendly: false,
    dyslexiaFriendly: false
  });

  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);
  const [showSkipLinks, setShowSkipLinks] = useState(false);
  const [announcement, setAnnouncement] = useState('');
  const focusHistoryRef = useRef<HTMLElement[]>([]);
  const skipLinksRef = useRef<HTMLDivElement>(null);

  // Apply accessibility settings to the document
  const applyAccessibilitySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    const body = document.body;

    // High contrast mode
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#cccccc');
      root.style.setProperty('--bg-primary', '#000000');
      root.style.setProperty('--bg-secondary', '#1a1a1a');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--text-primary');
      root.style.removeProperty('--text-secondary');
      root.style.removeProperty('--bg-primary');
      root.style.removeProperty('--bg-secondary');
    }

    // Large text mode
    if (newSettings.largeText) {
      root.classList.add('large-text');
      root.style.fontSize = '18px';
      root.style.lineHeight = '1.6';
    } else {
      root.classList.remove('large-text');
      root.style.fontSize = '';
      root.style.lineHeight = '';
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
      root.style.setProperty('--animation-duration', '0.01ms');
    } else {
      root.classList.remove('reduced-motion');
      root.style.removeProperty('--animation-duration');
    }

    // Color blind friendly mode
    if (newSettings.colorBlindFriendly) {
      root.classList.add('color-blind-friendly');
      root.style.setProperty('--accent-color', '#ff6b35');
      root.style.setProperty('--success-color', '#2d5a27');
      root.style.setProperty('--warning-color', '#8b4513');
      root.style.setProperty('--error-color', '#8b0000');
    } else {
      root.classList.remove('color-blind-friendly');
      root.style.removeProperty('--accent-color');
      root.style.removeProperty('--success-color');
      root.style.removeProperty('--warning-color');
      root.style.removeProperty('--error-color');
    }

    // Dyslexia friendly mode
    if (newSettings.dyslexiaFriendly) {
      root.classList.add('dyslexia-friendly');
      root.style.fontFamily = 'OpenDyslexic, Arial, sans-serif';
      root.style.letterSpacing = '0.12em';
      root.style.wordSpacing = '0.16em';
    } else {
      root.classList.remove('dyslexia-friendly');
      root.style.fontFamily = '';
      root.style.letterSpacing = '';
      root.style.wordSpacing = '';
    }

    // Focus indicator
    if (newSettings.focusIndicator) {
      root.classList.add('focus-visible');
      root.style.setProperty('--focus-ring', '2px solid #06b6d4');
    } else {
      root.classList.remove('focus-visible');
      root.style.removeProperty('--focus-ring');
    }

    // Screen reader announcements
    if (newSettings.screenReader) {
      announceToScreenReader('Accessibility settings updated');
    }

    setSettings(newSettings);
    onSettingsChange?.(newSettings);
    
    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  }, [onSettingsChange]);

  // Load saved settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
        applyAccessibilitySettings(parsed);
      } catch (error) {
        console.warn('Failed to parse saved accessibility settings:', error);
      }
    }
  }, [applyAccessibilitySettings]);

  // Enhanced keyboard navigation
  const handleKeyboardNavigation = useCallback((event: KeyboardEvent) => {
    if (!settings.keyboardNavigation) return;

    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>;

    const currentIndex = Array.from(focusableElements).findIndex(el => el === document.activeElement);

    switch (event.key) {
      case 'Tab':
        // Enhanced tab navigation with visual feedback
        if (event.shiftKey) {
          // Shift+Tab: go backwards
          const prevIndex = currentIndex > 0 ? currentIndex - 1 : focusableElements.length - 1;
          focusableElements[prevIndex]?.focus();
        } else {
          // Tab: go forwards
          const nextIndex = currentIndex < focusableElements.length - 1 ? currentIndex + 1 : 0;
          focusableElements[nextIndex]?.focus();
        }
        event.preventDefault();
        break;

      case 'Escape':
        // Close modals and dropdowns
        const openModals = document.querySelectorAll('[role="dialog"], [aria-expanded="true"]');
        openModals.forEach(modal => {
          if (modal instanceof HTMLElement) {
            modal.setAttribute('aria-expanded', 'false');
            modal.style.display = 'none';
          }
        });
        break;

      case 'h':
      case 'H':
        // Navigate to headings
        if (event.ctrlKey || event.metaKey) {
          event.preventDefault();
          const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
          const currentHeading = Array.from(headings).findIndex(h => h === document.activeElement);
          const nextHeading = headings[(currentHeading + 1) % headings.length] as HTMLElement;
          nextHeading?.focus();
        }
        break;

      case 'l':
      case 'L':
        // Navigate to links
        if (event.ctrlKey || event.metaKey) {
          event.preventDefault();
          const links = document.querySelectorAll('a[href]');
          const currentLink = Array.from(links).findIndex(l => l === document.activeElement);
          const nextLink = links[(currentLink + 1) % links.length] as HTMLElement;
          nextLink?.focus();
        }
        break;
    }
  }, [settings.keyboardNavigation]);

  // Track focus changes for better accessibility
  const handleFocusChange = useCallback((event: FocusEvent) => {
    const target = event.target as HTMLElement;
    if (target && target !== currentFocus) {
      setCurrentFocus(target);
      focusHistoryRef.current.push(target);
      
      // Keep only last 10 focus changes
      if (focusHistoryRef.current.length > 10) {
        focusHistoryRef.current.shift();
      }

      // Announce focus changes to screen readers
      if (settings.screenReader && target.getAttribute('aria-label')) {
        announceToScreenReader(target.getAttribute('aria-label') || 'Element focused');
      }
    }
  }, [currentFocus, settings.screenReader]);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    setAnnouncement(message);
    
    // Create live region for screen readers
    let liveRegion = document.getElementById('accessibility-live-region');
    if (!liveRegion) {
      liveRegion = document.createElement('div');
      liveRegion.id = 'accessibility-live-region';
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.style.position = 'absolute';
      liveRegion.style.left = '-10000px';
      liveRegion.style.width = '1px';
      liveRegion.style.height = '1px';
      liveRegion.style.overflow = 'hidden';
      document.body.appendChild(liveRegion);
    }
    
    liveRegion.textContent = message;
    
    // Clear announcement after a delay
    setTimeout(() => setAnnouncement(''), 3000);
  }, []);

  // Skip links functionality
  const handleSkipLink = useCallback((targetId: string) => {
    const target = document.getElementById(targetId);
    if (target) {
      target.focus();
      target.scrollIntoView({ behavior: 'smooth' });
      announceToScreenReader(`Skipped to ${target.getAttribute('aria-label') || targetId}`);
    }
  }, [announcement]);

  // Enhanced focus management
  useEffect(() => {
    if (!enabled) return;

    document.addEventListener('keydown', handleKeyboardNavigation);
    document.addEventListener('focusin', handleFocusChange);

    // Add skip links to the page
    const skipLinks = document.createElement('div');
    skipLinks.className = 'skip-links';
    skipLinks.setAttribute('role', 'navigation');
    skipLinks.setAttribute('aria-label', 'Skip to main content');
    
    const skipLinksHTML = `
      <a href="#main-content" class="skip-link" onclick="event.preventDefault(); window.accessibilityEnhancer?.handleSkipLink('main-content')">
        Skip to main content
      </a>
      <a href="#navigation" class="skip-link" onclick="event.preventDefault(); window.accessibilityEnhancer?.handleSkipLink('navigation')">
        Skip to navigation
      </a>
      <a href="#footer" class="skip-link" onclick="event.preventDefault(); window.accessibilityEnhancer?.handleSkipLink('footer')">
        Skip to footer
      </a>
    `;
    
    skipLinks.innerHTML = skipLinksHTML;
    document.body.insertBefore(skipLinks, document.body.firstChild);

    // Make skip links available globally
    (window as any).accessibilityEnhancer = { handleSkipLink };

    return () => {
      document.removeEventListener('keydown', handleKeyboardNavigation);
      document.removeEventListener('focusin', handleFocusChange);
      document.querySelector('.skip-links')?.remove();
      delete (window as any).accessibilityEnhancer;
    };
  }, [enabled, handleKeyboardNavigation, handleFocusChange, handleSkipLink]);

  // Toggle accessibility panel
  const togglePanel = useCallback(() => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      announceToScreenReader('Accessibility settings panel opened');
    }
  }, [isOpen, announceToScreenReader]);

  // Update individual setting
  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    applyAccessibilitySettings(newSettings);
  }, [settings, applyAccessibilitySettings]);

  // Quick accessibility shortcuts
  const quickActions = [
    {
      label: 'Toggle High Contrast',
      action: () => updateSetting('highContrast', !settings.highContrast),
      icon: Contrast,
      active: settings.highContrast
    },
    {
      label: 'Toggle Large Text',
      action: () => updateSetting('largeText', !settings.largeText),
      icon: Type,
      active: settings.largeText
    },
    {
      label: 'Toggle Reduced Motion',
      action: () => updateSetting('reducedMotion', !settings.reducedMotion),
      icon: Eye,
      active: settings.reducedMotion
    },
    {
      label: 'Toggle Focus Indicator',
      action: () => updateSetting('focusIndicator', !settings.focusIndicator),
      icon: MousePointer,
      active: settings.focusIndicator
    }
  ];

  if (!enabled) return null;

  return (
    <>
      {/* Skip Links */}
      <div className="skip-links" ref={skipLinksRef}>
        <a href="#main-content" className="skip-link" onClick={() => handleSkipLink('main-content')}>
          Skip to main content
        </a>
        <a href="#navigation" className="skip-link" onClick={() => handleSkipLink('navigation')}>
          Skip to navigation
        </a>
        <a href="#footer" className="skip-link" onClick={() => handleSkipLink('footer')}>
          Skip to footer
        </a>
      </div>

      {/* Accessibility Controls */}
      {showControls && (
        <div className="accessibility-controls">
          {/* Quick Actions Bar */}
          <div className="quick-actions-bar">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={action.action}
                className={`quick-action-btn ${action.active ? 'active' : ''}`}
                aria-label={action.label}
                title={action.label}
              >
                <action.icon size={20} />
              </button>
            ))}
            
            <button
              onClick={togglePanel}
              className="accessibility-toggle-btn"
              aria-label="Open accessibility settings"
              aria-expanded={isOpen}
            >
              <Accessibility size={24} />
            </button>
          </div>

          {/* Main Settings Panel */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="accessibility-panel"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                role="dialog"
                aria-label="Accessibility Settings"
                aria-modal="true"
              >
                <div className="panel-header">
                  <h3>Accessibility Settings</h3>
                  <button
                    onClick={togglePanel}
                    className="close-btn"
                    aria-label="Close accessibility settings"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="panel-content">
                  <div className="setting-group">
                    <h4>Visual Enhancements</h4>
                    <label className="setting-item">
                      <input
                        type="checkbox"
                        checked={settings.highContrast}
                        onChange={(e) => updateSetting('highContrast', e.target.checked)}
                      />
                      <span>High Contrast Mode</span>
                    </label>
                    <label className="setting-item">
                      <input
                        type="checkbox"
                        checked={settings.largeText}
                        onChange={(e) => updateSetting('largeText', e.target.checked)}
                      />
                      <span>Large Text</span>
                    </label>
                    <label className="setting-item">
                      <input
                        type="checkbox"
                        checked={settings.colorBlindFriendly}
                        onChange={(e) => updateSetting('colorBlindFriendly', e.target.checked)}
                      />
                      <span>Color Blind Friendly</span>
                    </label>
                    <label className="setting-item">
                      <input
                        type="checkbox"
                        checked={settings.dyslexiaFriendly}
                        onChange={(e) => updateSetting('dyslexiaFriendly', e.target.checked)}
                      />
                      <span>Dyslexia Friendly Font</span>
                    </label>
                  </div>

                  <div className="setting-group">
                    <h4>Navigation & Interaction</h4>
                    <label className="setting-item">
                      <input
                        type="checkbox"
                        checked={settings.keyboardNavigation}
                        onChange={(e) => updateSetting('keyboardNavigation', e.target.checked)}
                      />
                      <span>Enhanced Keyboard Navigation</span>
                    </label>
                    <label className="setting-item">
                      <input
                        type="checkbox"
                        checked={settings.focusIndicator}
                        onChange={(e) => updateSetting('focusIndicator', e.target.checked)}
                      />
                      <span>Focus Indicators</span>
                    </label>
                    <label className="setting-item">
                      <input
                        type="checkbox"
                        checked={settings.screenReader}
                        onChange={(e) => updateSetting('screenReader', e.target.checked)}
                      />
                      <span>Screen Reader Support</span>
                    </label>
                  </div>

                  <div className="setting-group">
                    <h4>Motion & Animation</h4>
                    <label className="setting-item">
                      <input
                        type="checkbox"
                        checked={settings.reducedMotion}
                        onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                      />
                      <span>Reduce Motion</span>
                    </label>
                  </div>

                  <div className="keyboard-shortcuts">
                    <h4>Keyboard Shortcuts</h4>
                    <div className="shortcut-list">
                      <div><kbd>Tab</kbd> Navigate elements</div>
                      <div><kbd>Shift + Tab</kbd> Navigate backwards</div>
                      <div><kbd>Ctrl/Cmd + H</kbd> Navigate headings</div>
                      <div><kbd>Ctrl/Cmd + L</kbd> Navigate links</div>
                      <div><kbd>Escape</kbd> Close modals</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Screen Reader Announcements */}
      {announcement && (
        <div
          id="accessibility-live-region"
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
        >
          {announcement}
        </div>
      )}

      {/* Focus History Indicator */}
      {settings.focusIndicator && currentFocus && (
        <div className="focus-indicator" aria-hidden="true">
          <div className="focus-ring" />
        </div>
      )}

      {/* Styles for accessibility features */}
      <style jsx>{`
        .skip-links {
          position: absolute;
          top: -40px;
          left: 6px;
          z-index: 1000;
        }

        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #06b6d4;
          color: white;
          padding: 8px;
          text-decoration: none;
          border-radius: 4px;
          transition: top 0.3s;
        }

        .skip-link:focus {
          top: 6px;
        }

        .accessibility-controls {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 1000;
        }

        .quick-actions-bar {
          display: flex;
          gap: 8px;
          margin-bottom: 8px;
        }

        .quick-action-btn {
          background: rgba(0, 0, 0, 0.8);
          color: white;
          border: none;
          border-radius: 8px;
          padding: 8px;
          cursor: pointer;
          transition: all 0.2s;
          backdrop-filter: blur(10px);
        }

        .quick-action-btn:hover,
        .quick-action-btn:focus {
          background: rgba(6, 182, 212, 0.9);
          transform: scale(1.05);
        }

        .quick-action-btn.active {
          background: #06b6d4;
        }

        .accessibility-toggle-btn {
          background: #06b6d4;
          color: white;
          border: none;
          border-radius: 8px;
          padding: 8px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .accessibility-toggle-btn:hover,
        .accessibility-toggle-btn:focus {
          background: #0891b2;
          transform: scale(1.05);
        }

        .accessibility-panel {
          position: absolute;
          top: 100%;
          right: 0;
          width: 350px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          border: 1px solid #e5e7eb;
          overflow: hidden;
        }

        .panel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 20px;
          background: #f8fafc;
          border-bottom: 1px solid #e5e7eb;
        }

        .panel-header h3 {
          margin: 0;
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
        }

        .close-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          border-radius: 4px;
          color: #6b7280;
        }

        .close-btn:hover {
          background: #f3f4f6;
          color: #374151;
        }

        .panel-content {
          padding: 20px;
          max-height: 400px;
          overflow-y: auto;
        }

        .setting-group {
          margin-bottom: 24px;
        }

        .setting-group h4 {
          margin: 0 0 12px 0;
          font-size: 16px;
          font-weight: 600;
          color: #374151;
        }

        .setting-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
          cursor: pointer;
        }

        .setting-item input[type="checkbox"] {
          width: 18px;
          height: 18px;
          accent-color: #06b6d4;
        }

        .keyboard-shortcuts {
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid #e5e7eb;
        }

        .shortcut-list {
          display: grid;
          gap: 8px;
        }

        .shortcut-list div {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: #6b7280;
        }

        kbd {
          background: #f3f4f6;
          border: 1px solid #d1d5db;
          border-radius: 4px;
          padding: 2px 6px;
          font-size: 12px;
          font-family: monospace;
        }

        .focus-indicator {
          position: fixed;
          pointer-events: none;
          z-index: 9999;
        }

        .focus-ring {
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          border: 2px solid #06b6d4;
          border-radius: 4px;
          animation: focusPulse 0.3s ease-out;
        }

        @keyframes focusPulse {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
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

        /* High contrast mode styles */
        .high-contrast {
          --text-primary: #ffffff !important;
          --text-secondary: #cccccc !important;
          --bg-primary: #000000 !important;
          --bg-secondary: #1a1a1a !important;
        }

        /* Large text mode styles */
        .large-text {
          font-size: 18px !important;
          line-height: 1.6 !important;
        }

        /* Reduced motion styles */
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        /* Focus visible styles */
        .focus-visible :focus {
          outline: 2px solid #06b6d4 !important;
          outline-offset: 2px !important;
        }

        /* Color blind friendly styles */
        .color-blind-friendly {
          --accent-color: #ff6b35 !important;
          --success-color: #2d5a27 !important;
          --warning-color: #8b4513 !important;
          --error-color: #8b0000 !important;
        }

        /* Dyslexia friendly styles */
        .dyslexia-friendly {
          font-family: OpenDyslexic, Arial, sans-serif !important;
          letter-spacing: 0.12em !important;
          word-spacing: 0.16em !important;
        }
      `}</style>
    </>
  );
};

export default EnhancedAccessibilityEnhancer;