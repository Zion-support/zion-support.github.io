import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SkipForward, Volume2, VolumeX, Eye, EyeOff, Keyboard, Activity } from 'lucide-react';
import { PerformanceDashboard } from '../performance/PerformanceDashboard';

interface AccessibilityContextType {
  highContrast: boolean;
  toggleHighContrast: () => void;
  fontSize: 'small' | 'medium' | 'large';
  setFontSize: (size: 'small' | 'medium' | 'large') => void;
  reducedMotion: boolean;
  toggleReducedMotion: () => void;
  focusVisible: boolean;
  setFocusVisible: (visible: boolean) => void;
  announceToScreenReader: (message: string) => void;
  showPerformanceDashboard: boolean;
  togglePerformanceDashboard: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};

interface AccessibilityProviderProps {
  children: React.ReactNode;
}

export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({ children }) => {
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [reducedMotion, setReducedMotion] = useState(false);
  const [focusVisible, setFocusVisible] = useState(false);
  const [showAccessibilityMenu, setShowAccessibilityMenu] = useState(false);
  const [showPerformanceDashboard, setShowPerformanceDashboard] = useState(false);
  const [announcements, setAnnouncements] = useState<string[]>([]);
  const liveRegionRef = useRef<HTMLDivElement>(null);

  // Load accessibility preferences from localStorage
  useEffect(() => {
    const savedHighContrast = localStorage.getItem('zion-high-contrast') === 'true';
    const savedFontSize = localStorage.getItem('zion-font-size') as 'small' | 'medium' | 'large' || 'medium';
    const savedReducedMotion = localStorage.getItem('zion-reduced-motion') === 'true';

    setHighContrast(savedHighContrast);
    setFontSize(savedFontSize);
    setReducedMotion(savedReducedMotion);
  }, []);

  // Apply accessibility settings to document
  useEffect(() => {
    document.documentElement.classList.toggle('high-contrast', highContrast);
    document.documentElement.classList.toggle('reduced-motion', reducedMotion);
    document.documentElement.style.fontSize = fontSize === 'small' ? '14px' : fontSize === 'large' ? '18px' : '16px';
  }, [highContrast, fontSize, reducedMotion]);

  // Save preferences to localStorage
  useEffect(() => {
    localStorage.setItem('zion-high-contrast', highContrast.toString());
    localStorage.setItem('zion-font-size', fontSize);
    localStorage.setItem('zion-reduced-motion', reducedMotion.toString());
  }, [highContrast, fontSize, reducedMotion]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ctrl/Cmd + K to toggle accessibility menu
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        setShowAccessibilityMenu(prev => !prev);
      }

      // Ctrl/Cmd + Shift + H to toggle high contrast
      if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'H') {
        event.preventDefault();
        toggleHighContrast();
      }

      // Ctrl/Cmd + Shift + F to toggle font size
      if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'F') {
        event.preventDefault();
        setFontSize(prev => prev === 'small' ? 'medium' : prev === 'medium' ? 'large' : 'small');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleHighContrast = () => {
    setHighContrast(prev => !prev);
    announceToScreenReader(`High contrast ${!highContrast ? 'enabled' : 'disabled'}`);
  };

  const toggleReducedMotion = () => {
    setReducedMotion(prev => !prev);
    announceToScreenReader(`Reduced motion ${!reducedMotion ? 'enabled' : 'disabled'}`);
  };

  const togglePerformanceDashboard = () => {
    setShowPerformanceDashboard(prev => !prev);
    announceToScreenReader(`Performance dashboard ${!showPerformanceDashboard ? 'opened' : 'closed'}`);
  };

  const announceToScreenReader = (message: string) => {
    setAnnouncements(prev => [...prev, message]);
    setTimeout(() => {
      setAnnouncements(prev => prev.filter(announcement => announcement !== message));
    }, 5000);
  };

  const contextValue: AccessibilityContextType = {
    highContrast,
    toggleHighContrast,
    fontSize,
    setFontSize,
    reducedMotion,
    toggleReducedMotion,
    focusVisible,
    setFocusVisible,
    announceToScreenReader,
    showPerformanceDashboard,
    togglePerformanceDashboard,
  };

  return (
    <AccessibilityContext.Provider value={contextValue}>
      {children}
      
      {/* Skip Links */}
      <div className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50">
        <a
          href="#main-content"
          className="block px-4 py-2 bg-zion-cyan text-zion-slate-dark font-semibold rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-zion-purple"
        >
          Skip to main content
        </a>
        <a
          href="#navigation"
          className="block px-4 py-2 bg-zion-cyan text-zion-slate-dark font-semibold rounded-lg shadow-lg mt-2 focus:outline-none focus:ring-2 focus:ring-zion-purple"
        >
          Skip to navigation
        </a>
      </div>

      {/* Accessibility Menu Toggle */}
      <button
        onClick={() => setShowAccessibilityMenu(prev => !prev)}
        className="fixed bottom-4 right-4 z-50 p-3 bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-zion-purple"
        aria-label="Accessibility settings"
        aria-expanded={showAccessibilityMenu}
      >
        <Keyboard className="w-6 h-6" />
      </button>

      {/* Accessibility Menu */}
      <AnimatePresence>
        {showAccessibilityMenu && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-20 right-4 z-50 w-80 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-zion-cyan/20 p-6"
            role="dialog"
            aria-label="Accessibility settings"
          >
            <h3 className="text-lg font-semibold text-zion-slate-dark mb-4">Accessibility Settings</h3>
            
            <div className="space-y-4">
              {/* High Contrast Toggle */}
              <div className="flex items-center justify-between">
                <div>
                  <label htmlFor="high-contrast" className="text-sm font-medium text-zion-slate-dark">
                    High Contrast
                  </label>
                  <p className="text-xs text-zion-slate/60">Enhanced visual contrast</p>
                </div>
                <button
                  id="high-contrast"
                  onClick={toggleHighContrast}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-zion-purple focus:ring-offset-2 ${
                    highContrast ? 'bg-zion-cyan' : 'bg-zion-slate/30'
                  }`}
                  aria-pressed={highContrast}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      highContrast ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Font Size Control */}
              <div>
                <label htmlFor="font-size" className="block text-sm font-medium text-zion-slate-dark mb-2">
                  Font Size
                </label>
                <select
                  id="font-size"
                  value={fontSize}
                  onChange={(e) => setFontSize(e.target.value as 'small' | 'medium' | 'large')}
                  className="w-full px-3 py-2 border border-zion-slate/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                >
                  <option value="small">Small (14px)</option>
                  <option value="medium">Medium (16px)</option>
                  <option value="large">Large (18px)</option>
                </select>
              </div>

              {/* Reduced Motion Toggle */}
              <div className="flex items-center justify-between">
                <div>
                  <label htmlFor="reduced-motion" className="text-sm font-medium text-zion-slate-dark">
                    Reduced Motion
                  </label>
                  <p className="text-xs text-zion-slate/60">Minimize animations</p>
                </div>
                <button
                  id="reduced-motion"
                  onClick={toggleReducedMotion}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-zion-purple focus:ring-offset-2 ${
                    reducedMotion ? 'bg-zion-cyan' : 'bg-zion-slate/30'
                  }`}
                  aria-pressed={reducedMotion}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      reducedMotion ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Performance Dashboard Button */}
              <div className="pt-4 border-t border-zion-slate/20">
                <button
                  onClick={togglePerformanceDashboard}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark font-medium rounded-lg transition-colors"
                >
                  <Activity className="w-4 h-4" />
                  Performance Dashboard
                </button>
              </div>

              {/* Keyboard Shortcuts Info */}
              <div className="pt-4 border-t border-zion-slate/20">
                <h4 className="text-sm font-medium text-zion-slate-dark mb-2">Keyboard Shortcuts</h4>
                <div className="text-xs text-zion-slate/60 space-y-1">
                  <p><kbd className="px-1 py-0.5 bg-zion-slate/20 rounded">Ctrl/Cmd + K</kbd> Toggle this menu</p>
                  <p><kbd className="px-1 py-0.5 bg-zion-slate/20 rounded">Ctrl/Cmd + Shift + H</kbd> Toggle high contrast</p>
                  <p><kbd className="px-1 py-0.5 bg-zion-slate/20 rounded">Ctrl/Cmd + Shift + F</kbd> Cycle font sizes</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Live Region for Screen Reader Announcements */}
      <div
        ref={liveRegionRef}
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {announcements.map((announcement, index) => (
          <div key={index}>{announcement}</div>
        ))}
      </div>

      {/* Performance Dashboard */}
      <PerformanceDashboard 
        isOpen={showPerformanceDashboard}
        onClose={() => setShowPerformanceDashboard(false)}
      />
    </AccessibilityContext.Provider>
  );
};