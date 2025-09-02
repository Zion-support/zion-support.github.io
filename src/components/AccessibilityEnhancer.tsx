import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, Type, Volume2, VolumeX, Contrast, Settings } from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
}

interface AccessibilityEnhancerProps {
  enabled?: boolean;
  showControls?: boolean;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enabled = true,
  showControls = false,
  position = 'bottom-right'
}) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false
  });
  const [isOpen, setIsOpen] = useState(false);

  // Apply accessibility settings to document
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
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
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    // Screen reader optimizations
    if (newSettings.screenReader) {
      root.classList.add('screen-reader-optimized');
    } else {
      root.classList.remove('screen-reader-optimized');
    }
  }, []);

  // Update settings
  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
    
    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  }, [settings, applySettings]);

  // Load settings from localStorage
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
        applySettings(parsed);
      } catch (error) {
        console.error('Failed to parse accessibility settings:', error);
      }
    }
  }, [applySettings]);

  // Add skip links
  useEffect(() => {
    if (!enabled || typeof document === 'undefined') return;

    const skipLinks = document.createElement('div');
    skipLinks.className = 'skip-links';
    skipLinks.innerHTML = `
      <a href="#main-content" class="skip-link">Skip to main content</a>
      <a href="#navigation" class="skip-link">Skip to navigation</a>
      <a href="#footer" class="skip-link">Skip to footer</a>
    `;
    
    document.body.insertBefore(skipLinks, document.body.firstChild);

    return () => {
      if (skipLinks.parentNode) {
        skipLinks.parentNode.removeChild(skipLinks);
      }
    };
  }, [enabled]);

  // Add accessibility styles
  useEffect(() => {
    if (!enabled || typeof document === 'undefined') return;

    const style = document.createElement('style');
    style.textContent = `
      .skip-links {
        position: absolute;
        top: -100px;
        left: 0;
        z-index: 1000;
      }
      
      .skip-link {
        position: absolute;
        top: 0;
        left: 0;
        background: #000;
        color: #fff;
        padding: 8px 16px;
        text-decoration: none;
        border-radius: 0 0 4px 0;
        font-weight: bold;
        transition: top 0.3s;
      }
      
      .skip-link:focus {
        top: 0;
        outline: 2px solid #fff;
        outline-offset: 2px;
      }
      
      .high-contrast {
        filter: contrast(150%) brightness(120%);
      }
      
      .high-contrast * {
        border-color: currentColor !important;
      }
      
      .large-text {
        font-size: 1.2em;
      }
      
      .large-text h1 { font-size: 2.5em; }
      .large-text h2 { font-size: 2em; }
      .large-text h3 { font-size: 1.75em; }
      .large-text h4 { font-size: 1.5em; }
      .large-text h5 { font-size: 1.25em; }
      .large-text h6 { font-size: 1.1em; }
      
      .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
      
      .screen-reader-optimized {
        /* Enhanced focus indicators */
      }
      
      .screen-reader-optimized *:focus {
        outline: 3px solid #0066cc !important;
        outline-offset: 2px !important;
      }
      
      /* Accessibility controls */
      .accessibility-controls {
        position: fixed;
        z-index: 1000;
        background: white;
        border: 1px solid #ccc;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        padding: 16px;
        min-width: 250px;
      }
      
      .accessibility-controls.bottom-right {
        bottom: 20px;
        right: 20px;
      }
      
      .accessibility-controls.bottom-left {
        bottom: 20px;
        left: 20px;
      }
      
      .accessibility-controls.top-right {
        top: 20px;
        right: 20px;
      }
      
      .accessibility-controls.top-left {
        top: 20px;
        left: 20px;
      }
      
      .accessibility-toggle {
        position: fixed;
        z-index: 1001;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #0066cc;
        color: white;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
      }
      
      .accessibility-toggle:hover {
        background: #0052a3;
        transform: scale(1.1);
      }
      
      .accessibility-toggle.bottom-right {
        bottom: 20px;
        right: 20px;
      }
      
      .accessibility-toggle.bottom-left {
        bottom: 20px;
        left: 20px;
      }
      
      .accessibility-toggle.top-right {
        top: 20px;
        right: 20px;
      }
      
      .accessibility-toggle.top-left {
        top: 20px;
        left: 20px;
      }
      
      .accessibility-option {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 12px;
        padding: 8px 0;
        border-bottom: 1px solid #eee;
      }
      
      .accessibility-option:last-child {
        margin-bottom: 0;
        border-bottom: none;
      }
      
      .accessibility-option label {
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        font-size: 14px;
        color: #333;
      }
      
      .accessibility-option input[type="checkbox"] {
        width: 18px;
        height: 18px;
        accent-color: #0066cc;
      }
    `;
    
    document.head.appendChild(style);

    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  const positionClasses = {
    'top-left': 'top-left',
    'top-right': 'top-right',
    'bottom-left': 'bottom-left',
    'bottom-right': 'bottom-right'
  };

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        className={`accessibility-toggle ${positionClasses[position]}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Accessibility settings"
        aria-expanded={isOpen}
      >
        <Settings className="w-5 h-5" />
      </button>

      {/* Accessibility Controls Panel */}
      <AnimatePresence>
        {isOpen && showControls && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className={`accessibility-controls ${positionClasses[position]}`}
            role="dialog"
            aria-labelledby="accessibility-title"
          >
            <h3 id="accessibility-title" className="text-lg font-semibold mb-4">
              Accessibility Settings
            </h3>
            
            <div className="accessibility-option">
              <label htmlFor="high-contrast">
                <Contrast className="w-4 h-4" />
                High Contrast
              </label>
              <input
                id="high-contrast"
                type="checkbox"
                checked={settings.highContrast}
                onChange={(e) => updateSetting('highContrast', e.target.checked)}
                aria-describedby="high-contrast-desc"
              />
            </div>
            <div id="high-contrast-desc" className="sr-only">
              Increases contrast for better visibility
            </div>
            
            <div className="accessibility-option">
              <label htmlFor="large-text">
                <Type className="w-4 h-4" />
                Large Text
              </label>
              <input
                id="large-text"
                type="checkbox"
                checked={settings.largeText}
                onChange={(e) => updateSetting('largeText', e.target.checked)}
                aria-describedby="large-text-desc"
              />
            </div>
            <div id="large-text-desc" className="sr-only">
              Increases text size for better readability
            </div>
            
            <div className="accessibility-option">
              <label htmlFor="reduced-motion">
                <EyeOff className="w-4 h-4" />
                Reduce Motion
              </label>
              <input
                id="reduced-motion"
                type="checkbox"
                checked={settings.reducedMotion}
                onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                aria-describedby="reduced-motion-desc"
              />
            </div>
            <div id="reduced-motion-desc" className="sr-only">
              Reduces animations and transitions
            </div>
            
            <div className="accessibility-option">
              <label htmlFor="screen-reader">
                <Volume2 className="w-4 h-4" />
                Screen Reader
              </label>
              <input
                id="screen-reader"
                type="checkbox"
                checked={settings.screenReader}
                onChange={(e) => updateSetting('screenReader', e.target.checked)}
                aria-describedby="screen-reader-desc"
              />
            </div>
            <div id="screen-reader-desc" className="sr-only">
              Optimizes for screen reader users
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AccessibilityEnhancer;