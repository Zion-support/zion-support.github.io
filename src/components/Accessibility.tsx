import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Keyboard, 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX,
  Contrast,
  ZoomIn,
  ZoomOut,
  RotateCcw
} from 'lucide-react';

interface AccessibilityProps {
  className?: string;
}

export function Accessibility({ className = '' }: AccessibilityProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [muted, setMuted] = useState(false);
  const [showKeyboardShortcuts, setShowKeyboardShortcuts] = useState(false);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl/Cmd + K to open accessibility menu
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
      
      // Ctrl/Cmd + Plus to increase font size
      if ((e.ctrlKey || e.metaKey) && e.key === '=') {
        e.preventDefault();
        setFontSize(prev => Math.min(prev + 2, 24));
      }
      
      // Ctrl/Cmd + Minus to decrease font size
      if ((e.ctrlKey || e.metaKey) && e.key === '-') {
        e.preventDefault();
        setFontSize(prev => Math.max(prev - 2, 12));
      }
      
      // Ctrl/Cmd + 0 to reset font size
      if ((e.ctrlKey || e.metaKey) && e.key === '0') {
        e.preventDefault();
        setFontSize(16);
      }
      
      // Ctrl/Cmd + H to toggle high contrast
      if ((e.ctrlKey || e.metaKey) && e.key === 'h') {
        e.preventDefault();
        setHighContrast(!highContrast);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Apply accessibility settings
  useEffect(() => {
    const root = document.documentElement;
    
    // Apply font size
    root.style.fontSize = `${fontSize}px`;
    
    // Apply high contrast
    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Apply muted state
    if (muted) {
      root.classList.add('muted');
    } else {
      root.classList.remove('muted');
    }
  }, [fontSize, highContrast, muted]);

  const resetSettings = () => {
    setFontSize(16);
    setHighContrast(false);
    setMuted(false);
  };

  const keyboardShortcuts = [
    { key: 'Ctrl/Cmd + K', description: 'Open accessibility menu' },
    { key: 'Ctrl/Cmd + Plus', description: 'Increase font size' },
    { key: 'Ctrl/Cmd + Minus', description: 'Decrease font size' },
    { key: 'Ctrl/Cmd + 0', description: 'Reset font size' },
    { key: 'Ctrl/Cmd + H', description: 'Toggle high contrast' },
    { key: 'Tab', description: 'Navigate through elements' },
    { key: 'Enter/Space', description: 'Activate buttons and links' },
    { key: 'Arrow Keys', description: 'Navigate through options' },
    { key: 'Escape', description: 'Close modals and menus' }
  ];

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-3 bg-zion-cyan text-white rounded-full shadow-lg hover:bg-zion-cyan-dark transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-zion-cyan/30 ${className}`}
        aria-label="Accessibility options"
        aria-expanded={isOpen}
      >
        <Keyboard className="w-6 h-6" />
      </button>

      {/* Accessibility Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-80 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-xl"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Accessibility</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-zion-slate-light hover:text-white transition-colors"
                  aria-label="Close accessibility menu"
                >
                  ×
                </button>
              </div>

              {/* Font Size Control */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-zion-slate-light mb-3">
                  Font Size: {fontSize}px
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setFontSize(prev => Math.max(prev - 2, 12))}
                    className="p-2 bg-zion-slate-light/10 hover:bg-zion-cyan/20 text-zion-cyan rounded-lg transition-colors"
                    aria-label="Decrease font size"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <div className="flex-1 bg-zion-slate-light/10 rounded-lg p-2 text-center text-white">
                    {fontSize}px
                  </div>
                  <button
                    onClick={() => setFontSize(prev => Math.min(prev + 2, 24))}
                    className="p-2 bg-zion-slate-light/10 hover:bg-zion-cyan/20 text-zion-cyan rounded-lg transition-colors"
                    aria-label="Increase font size"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* High Contrast Toggle */}
              <div className="mb-6">
                <button
                  onClick={() => setHighContrast(!highContrast)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${
                    highContrast 
                      ? 'bg-zion-cyan text-white' 
                      : 'bg-zion-slate-light/10 text-zion-slate-light hover:bg-zion-cyan/10 hover:text-zion-cyan'
                  }`}
                  aria-label={`${highContrast ? 'Disable' : 'Enable'} high contrast mode`}
                >
                  <span className="flex items-center gap-2">
                    <Contrast className="w-4 h-4" />
                    High Contrast
                  </span>
                  {highContrast ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                </button>
              </div>

              {/* Mute Toggle */}
              <div className="mb-6">
                <button
                  onClick={() => setMuted(!muted)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${
                    muted 
                      ? 'bg-zion-cyan text-white' 
                      : 'bg-zion-slate-light/10 text-zion-slate-light hover:bg-zion-cyan/10 hover:text-zion-cyan'
                  }`}
                  aria-label={`${muted ? 'Unmute' : 'Mute'} audio`}
                >
                  <span className="flex items-center gap-2">
                    {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    {muted ? 'Muted' : 'Audio On'}
                  </span>
                </button>
              </div>

              {/* Reset Button */}
              <div className="mb-6">
                <button
                  onClick={resetSettings}
                  className="w-full flex items-center justify-center gap-2 p-3 bg-zion-slate-light/10 text-zion-slate-light hover:bg-zion-cyan/10 hover:text-zion-cyan rounded-lg transition-all duration-300"
                  aria-label="Reset accessibility settings"
                >
                  <RotateCcw className="w-4 h-4" />
                  Reset to Default
                </button>
              </div>

              {/* Keyboard Shortcuts */}
              <div>
                <button
                  onClick={() => setShowKeyboardShortcuts(!showKeyboardShortcuts)}
                  className="w-full text-left text-sm text-zion-cyan hover:text-zion-cyan-light transition-colors mb-3"
                >
                  {showKeyboardShortcuts ? 'Hide' : 'Show'} Keyboard Shortcuts
                </button>
                
                <AnimatePresence>
                  {showKeyboardShortcuts && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-2"
                    >
                      {keyboardShortcuts.map((shortcut, index) => (
                        <div key={index} className="flex justify-between text-xs text-zion-slate-light">
                          <kbd className="px-2 py-1 bg-zion-slate-light/10 rounded font-mono">
                            {shortcut.key}
                          </kbd>
                          <span>{shortcut.description}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen Reader Announcements */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
        id="accessibility-announcements"
      />
    </>
  );
}

// High contrast CSS styles
export const highContrastStyles = `
  .high-contrast {
    --zion-cyan: #00ffff !important;
    --zion-purple: #ff00ff !important;
    --zion-blue: #0080ff !important;
    --zion-slate: #000000 !important;
    --zion-slate-light: #ffffff !important;
    --zion-slate-dark: #000000 !important;
  }
  
  .high-contrast * {
    border-color: #ffffff !important;
    background-color: #000000 !important;
    color: #ffffff !important;
  }
  
  .high-contrast .bg-zion-cyan {
    background-color: #00ffff !important;
    color: #000000 !important;
  }
  
  .high-contrast .text-zion-cyan {
    color: #00ffff !important;
  }
`;

// Muted styles
export const mutedStyles = `
  .muted * {
    animation: none !important;
    transition: none !important;
  }
  
  .muted .animate-pulse,
  .muted .animate-spin,
  .muted .animate-bounce {
    animation: none !important;
  }
`;