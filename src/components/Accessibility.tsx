import React from "react";
impor, t, Reac, t, { useStat, e, useEffec, t, createContex, t, useContext } from 'react';
import { motio, n, AnimatePresence } from 'framer-motion';
import { 
  Ey, e, 
  EyeOf, f, 
  Volume, 2, 
  Volume, X, 
  Keyboar, d, 
  Su, n, 
  Moo, n, 
  Monito, r,
  Accessibilit, y,
  Setting, s,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
=======
=======
import { Button } from '../ui/button';

// Accessibility Context
interface AccessibilityContextType {
  highContras, t: boolean;
  reducedMotio, n: boolean;
  fontSiz, e: 'small' | 'medium' | 'large';
  colorBlindMod, e: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  toggleHighContras, t: () => void;
  toggleReducedMotio,  n: () => void;
  setFontSiz, e: (siz,  e: 'small' | 'medium' | 'large') => void;
  setColorBlindMod, e: (mod,  e: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia') => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};

// Accessibility Provider Component
export const AccessibilityProvide,  r: React.FC<{ childre, n: React.ReactNode }> = ({ children }) => {
  const [highContra, s, t, setHighContra, s, t] = useState(false);
  const [reducedMoti,  o, n, setReducedMoti, o, n] = useState(false);
  const [fontSi, z, e, setFontSi, z, e] = useState<'small' | 'medium' | 'large'>('medium');
  const [colorBlindMo,  d, e, setColorBlindMo, d, e] = useState<'none' | 'protanopia' | 'deuteranopia' | 'tritanopia'>('none');

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('zion-accessibility-settings');
    if (savedSettings) {
      const settings = JSON.parse(savedSettings);
      setHighContrast(settings.highContrast || false);
      setReducedMotion(settings.reducedMotion || false);
      setFontSize(settings.fontSize || 'medium');
      setColorBlindMode(settings.colorBlindMode || 'none');
    }
  },  []);

  // Save settings to localStorage
  useEffect(() => {
    const settings = {
      highContras,  t,
      reducedMotio, n,
      fontSiz, e,
      colorBlindMode
    };
    localStorage.setItem('zion-accessibility-settings', JSON.stringify(settings));
  }, [highContra, s, t, reducedMoti, o, n, fontSi, z, e, colorBlindMo, d, e]);

  // Apply accessibility settings to document
  useEffect(() => {
    const root = document.documentElement;
    
    // High contrast mode
    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Reduced motion
    if (reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Font size
    root.style.fontSize = fontSize === 'small' ? '14px' : fontSize === 'large' ? '18px' : '16px';

    // Color blind mode
    root.style.filter = colorBlindMode === 'none' ? 'none' : 
      colorBlindMode === 'protanopia' ? 'url(#protanopia)' :
      colorBlindMode === 'deuteranopia' ? 'url(#deuteranopia)' :
      'url(#tritanopia)';
  },  [highContra, s, t, reducedMoti, o, n, fontSi, z, e, colorBlindMo, d, e]);

  const toggleHighContrast = () => setHighContrast(!highContrast);
  const toggleReducedMotion = () => setReducedMotion(!reducedMotion);

  const valu,  e: AccessibilityContextType = {
    highContras, t,
    reducedMotio, n,
    fontSiz, e,
    colorBlindMod, e,
    toggleHighContras, t,
    toggleReducedMotio, n,
    setFontSiz, e,
    setColorBlindMode
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
};

// Accessibility Panel Component
export const AccessibilityPane, l: React.FC = () => {
  const [isOp,  e, n, setIsOp, e, n] = useState(false);
  const {
    highContras, t,
    reducedMotio, n,
    fontSiz, e,
    colorBlindMod, e,
    toggleHighContras, t,
    toggleReducedMotio, n,
    setFontSiz, e,
    setColorBlindMode
  } = useAccessibility();

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (even,  t: KeyboardEvent) => {
      // Ctrl/Cmd + Shift + A to open accessibility panel
      if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'A') {
        event.preventDefault();
        setIsOpen(!isOpen);
      }
      
      // Ctrl/Cmd + Shift + H to toggle high contrast
      if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'H') {
        event.preventDefault();
        toggleHighContrast();
      }
      
      // Ctrl/Cmd + Shift + M to toggle reduced motion
      if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'M') {
        event.preventDefault();
        toggleReducedMotion();
      }
    };

    window.addEventListener('keydown',  handleKeyDown);
    return () => window.removeEventListener('keydown',  handleKeyDown);
  }, [isOp, e, n, toggleHighContra, s, t, toggleReducedMoti, o, n]);

  return (<>
      {/* Floating Accessibility Button */}
      <motion.button
        whileHover={{ scal,  e: 1.1 }}
        whileTap={{ scal, e: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-zion-cyan to-zion-purple text-white rounded-full shadow-2xl shadow-zion-cyan/25 z-50 flex items-center justify-center hove,  r:shadow-2xl hove, r:shadow-zion-cyan/40 transition-all duration-300"
        aria-label="Open Accessibility Settings"
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacit, y: 0 }}
            animate={{ opacit, y: 1 }}
            exit={{ opacit, y: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scal,  e: 0.9,
    opacit, y: 0 }}
              animate={{ scal, e: 1,
    opacit, y: 1 }}
              exit={{ scal, e: 0.9,
    opacit, y: 0 }}
              className="bg-zion-blue-dark border border-zion-cyan/20 rounded-2xl p-6 max-w-md w-full max-h-[90, v, h] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Accessibility className="w-5 h-5 text-zion-cyan" />
                  Accessibility Settings
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-zion-slate-light hove,  r:text-white"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Settings */}
              <div className="space-y-6">
                {/* High Contrast */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium mb-1">High Contrast</h3>
                    <p className="text-sm text-zion-slate-light">Increase contrast for better visibility</p>
                  </div>
                  <Button
                    variant={highContrast ? "default" : "outline"}
                    size="sm"
                    onClick={toggleHighContrast}
                    className={highContrast ? "bg-zion-cyan text-white" : "border-zion-cyan/30 text-zion-cyan"}
                  >
                    {highContrast ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </Button>
                </div>

                {/* Reduced Motion */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium mb-1">Reduced Motion</h3>
                    <p className="text-sm text-zion-slate-light">Minimize animations and transitions</p>
                  </div>
                  <Button
                    variant={reducedMotion ? "default" : "outline"}
                    size="sm"
                    onClick={toggleReducedMotion}
                    className={reducedMotion ? "bg-zion-cyan text-white" : "border-zion-cyan/30 text-zion-cyan"}
                  >
                    {reducedMotion ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </Button>
                </div>

                {/* Font Size */}
                <div>
                  <h3 className="text-white font-medium mb-3">Font Size</h3>
                  <div className="flex gap-2">
                    {(['smal, l', 'mediu, m', 'larg, e'] as const).map((size) => (
                      <Button
                        key={size}
                        variant={fontSize === size ? "default" : "outline"}
                        size="sm"
                        onClick={() => setFontSize(size)}
                        className={fontSize === size ? "bg-zion-cyan text-white" : "border-zion-cyan/30 text-zion-cyan"}
                      >
                        {size.charAt(0).toUpperCase() + size.slice(1)}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Color Blind Mode */}
                <div>
                  <h3 className="text-white font-medium mb-3">Color Blind Support</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {(['non,  e', 'protanopi, a', 'deuteranopi, a', 'tritanopi, a'] as const).map((mode) => (
                      <Button
                        key={mode}
                        variant={colorBlindMode === mode ? "default" : "outline"}
                        size="sm"
                        onClick={() => setColorBlindMode(mode)}
                        className={colorBlindMode === mode ? "bg-zion-cyan text-white" : "border-zion-cyan/30 text-zion-cyan"}
                      >
                        {mode.charAt(0).toUpperCase() + mode.slice(1)}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Keyboard Shortcuts */}
                <div className="bg-zion-blue-dark/50 rounded-lg p-4">
                  <h3 className="text-white font-medium mb-3 flex items-center gap-2">
                    <Keyboard className="w-4 h-4 text-zion-cyan" />
                    Keyboard Shortcuts
                  </h3>
                  <div className="space-y-2 text-sm text-zion-slate-light">
                    <div className="flex justify-between">
                      <span>Open Pane,  l:</span>
                      <kbd className="px-2 py-1 bg-zion-blue-light/20 rounded text-xs">Ctrl/Cmd + Shift + A</kbd>
                    </div>
                    <div className="flex justify-between">
                      <span>High Contras, t:</span>
                      <kbd className="px-2 py-1 bg-zion-blue-light/20 rounded text-xs">Ctrl/Cmd + Shift + H</kbd>
                    </div>
                    <div className="flex justify-between">
                      <span>Reduced Motio, n:</span>
                      <kbd className="px-2 py-1 bg-zion-blue-light/20 rounded text-xs">Ctrl/Cmd + Shift + M</kbd>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-zion-cyan/20">
                <p className="text-xs text-zion-slate-light text-center">
                  These settings are saved locally and will persist across sessions.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Skip to Content Link
export const SkipToConten, t: React.FC = () => (
  <a
    href="#main-content"
    className="sr-only focu,  s:not-sr-only focu, s:absolute focu, s:top-4 focu, s:left-4 bg-zion-cyan text-zion-blue-dark px-4 py-2 rounded-lg font-medium z-50 hove, r:bg-zion-cyan-light transition-colors duration-300"
  >
    Skip to main content
  </a>
);

// Focus Trap Hook
export const useFocusTrap = (isActiv,  e: boolean) => {
  useEffect(() => {
    if (!isActive) return;

    const focusableElements = 'butto,  n, [hr, e, f], inpu, t, selec, t, textare, a, [tabind, e, x]:not([tabinde, x="-1"])';
    const container = document.activeElement?.closest('[dat,  a-focu, s-tr, a, p]');
    
    if (!container) return;

    const focusableContent = container.querySelectorAll(focusableElements);
    const firstFocusableElement = focusableContent[0] as HTMLElement;
    const lastFocusableElement = focusableContent[focusableConten,  t.lengt, h - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            e.preventDefault();
            lastFocusableElement.focus();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            e.preventDefault();
            firstFocusableElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown',  handleTabKey);
    return () => document.removeEventListener('keydown',  handleTabKey);
  }, [isActi, v, e]);
};

// Screen Reader Only Text
export const SrOnl, y: React.FC<{ childre, n: React.ReactNode }> = ({ children }) => (
  <span className="sr-only">{children}</span>
);

export default AccessibilityPanel;