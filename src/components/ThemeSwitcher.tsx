import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sun, 
  Moon, 
  Monitor, 
  Palette,
  Settings,
  Check,
  X
} from 'lucide-react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeSwitcherProps {
  showPanel?: boolean;
  autoDetect?: boolean;
  enableCustomization?: boolean;
}

interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  border: string;
}

const defaultThemes: Record<Theme, ThemeColors> = {
  light: {
    primary: '#06b6d4',
    secondary: '#8b5cf6',
    accent: '#f59e0b',
    background: '#ffffff',
    surface: '#f8fafc',
    text: '#0f172a',
    border: '#e2e8f0'
  },
  dark: {
    primary: '#06b6d4',
    secondary: '#8b5cf6',
    accent: '#f59e0b',
    background: '#0f172a',
    surface: '#1e293b',
    text: '#f8fafc',
    border: '#334155'
  },
  system: {
    primary: '#06b6d4',
    secondary: '#8b5cf6',
    accent: '#f59e0b',
    background: 'var(--system-bg)',
    surface: 'var(--system-surface)',
    text: 'var(--system-text)',
    border: 'var(--system-border)'
  }
};

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  showPanel = false,
  autoDetect = true,
  enableCustomization = true
}) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>('system');
  const [isOpen, setIsOpen] = useState(false);
  const [customColors, setCustomColors] = useState<ThemeColors>(defaultThemes.light);
  const [showCustomization, setShowCustomization] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Apply theme to document
  const applyTheme = useCallback((theme: Theme) => {
    setIsTransitioning(true);
    
    const root = document.documentElement;
    const colors = theme === 'system' ? defaultThemes.system : defaultThemes[theme];
    
    // Remove existing theme classes
    root.classList.remove('theme-light', 'theme-dark', 'theme-system');
    
    // Add new theme class
    root.classList.add(`theme-${theme}`);
    
    // Apply CSS custom properties
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
    
    // Set data attribute for CSS targeting
    root.setAttribute('data-theme', theme);
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
    
    // Update state
    setCurrentTheme(theme);
    
    // Smooth transition
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  }, []);

  // Get system theme
  const getSystemTheme = useCallback((): Theme => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  }, []);

  // Apply system theme
  const applySystemTheme = useCallback(() => {
    const systemTheme = getSystemTheme();
    const colors = defaultThemes[systemTheme];
    
    const root = document.documentElement;
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
  }, [getSystemTheme]);

  // Handle system theme change
  const handleSystemThemeChange = useCallback((e: MediaQueryListEvent) => {
    if (currentTheme === 'system') {
      applySystemTheme();
    }
  }, [currentTheme, applySystemTheme]);

  // Initialize theme
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
      setCurrentTheme(savedTheme);
    } else if (autoDetect) {
      setCurrentTheme('system');
    }

    // Apply initial theme
    if (savedTheme && savedTheme !== 'system') {
      applyTheme(savedTheme);
    } else {
      applySystemTheme();
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, [autoDetect, applyTheme, applySystemTheme, handleSystemThemeChange]);

  // Theme change handlers
  const handleThemeChange = useCallback((theme: Theme) => {
    if (theme === 'system') {
      applySystemTheme();
    } else {
      applyTheme(theme);
    }
    setCurrentTheme(theme);
  }, [applyTheme, applySystemTheme]);

  // Custom color change handler
  const handleCustomColorChange = useCallback((key: keyof ThemeColors, value: string) => {
    setCustomColors(prev => ({ ...prev, [key]: value }));
    
    // Apply immediately
    document.documentElement.style.setProperty(`--color-${key}`, value);
  }, []);

  // Apply custom colors
  const applyCustomColors = useCallback(() => {
    const root = document.documentElement;
    Object.entries(customColors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
    
    // Save custom colors
    localStorage.setItem('custom-colors', JSON.stringify(customColors));
    setShowCustomization(false);
  }, [customColors]);

  // Reset custom colors
  const resetCustomColors = useCallback(() => {
    setCustomColors(defaultThemes.light);
    localStorage.removeItem('custom-colors');
  }, []);

  // Load custom colors
  useEffect(() => {
    const savedColors = localStorage.getItem('custom-colors');
    if (savedColors) {
      try {
        const parsed = JSON.parse(savedColors);
        setCustomColors(parsed);
      } catch (error) {
        console.warn('Failed to load custom colors:', error);
      }
    }
  }, []);

  return (
    <>
      {/* Theme Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-20 z-50 w-14 h-14 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Theme Settings"
        aria-label="Toggle theme settings"
      >
        <Palette className="w-7 h-7 text-white mx-auto" />
      </motion.button>

      {/* Theme Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            className="fixed top-20 left-6 z-40 w-96 bg-slate-900/95 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-2xl"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Palette className="w-5 h-5 text-orange-400" />
                  Theme Settings
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Close theme settings"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Theme Options */}
              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-3 gap-3">
                  {(['light', 'dark', 'system'] as Theme[]).map((theme) => (
                    <button
                      key={theme}
                      onClick={() => handleThemeChange(theme)}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                        currentTheme === theme
                          ? 'border-orange-400 bg-orange-400/10'
                          : 'border-slate-600 hover:border-slate-500'
                      }`}
                    >
                      <div className="flex flex-col items-center gap-2">
                        {theme === 'light' && <Sun className="w-6 h-6 text-yellow-400" />}
                        {theme === 'dark' && <Moon className="w-6 h-6 text-blue-400" />}
                        {theme === 'system' && <Monitor className="w-6 h-6 text-green-400" />}
                        <span className="text-sm font-medium text-white capitalize">{theme}</span>
                        {currentTheme === theme && (
                          <Check className="w-4 h-4 text-orange-400" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Customization Toggle */}
              {enableCustomization && (
                <div className="mb-6">
                  <button
                    onClick={() => setShowCustomization(!showCustomization)}
                    className="w-full px-4 py-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg transition-colors flex items-center justify-between"
                  >
                    <span className="text-white font-medium">Customize Colors</span>
                    <Settings className={`w-5 h-5 text-gray-400 transition-transform ${
                      showCustomization ? 'rotate-90' : ''
                    }`} />
                  </button>
                </div>
              )}

              {/* Color Customization Panel */}
              <AnimatePresence>
                {showCustomization && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-4 p-4 bg-slate-800/30 rounded-lg border border-slate-600/50">
                      <h4 className="text-sm font-medium text-white mb-3">Custom Colors</h4>
                      
                      {Object.entries(customColors).map(([key, value]) => (
                        <div key={key} className="flex items-center gap-3">
                          <label className="text-xs text-gray-300 capitalize min-w-[60px]">
                            {key}
                          </label>
                          <input
                            type="color"
                            value={value}
                            onChange={(e) => handleCustomColorChange(key as keyof ThemeColors, e.target.value)}
                            className="w-12 h-8 rounded border border-slate-600 cursor-pointer"
                            aria-label={`Customize ${key} color`}
                          />
                          <input
                            type="text"
                            value={value}
                            onChange={(e) => handleCustomColorChange(key as keyof ThemeColors, e.target.value)}
                            className="flex-1 px-2 py-1 bg-slate-700 border border-slate-600 rounded text-xs text-white font-mono"
                            placeholder="#000000"
                          />
                        </div>
                      ))}
                      
                      <div className="flex gap-2 pt-2">
                        <button
                          onClick={applyCustomColors}
                          className="flex-1 px-3 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded text-sm font-medium transition-colors"
                        >
                          Apply
                        </button>
                        <button
                          onClick={resetCustomColors}
                          className="px-3 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded text-sm font-medium transition-colors"
                        >
                          Reset
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Current Theme Info */}
              <div className="p-3 bg-slate-800/30 rounded-lg">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Current Theme:</span>
                  <span className="text-white font-medium capitalize">{currentTheme}</span>
                </div>
                {currentTheme === 'system' && (
                  <div className="text-xs text-gray-400 mt-1">
                    System: {getSystemTheme()}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Theme Transition Overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 z-[60] pointer-events-none"
          />
        )}
      </AnimatePresence>


    </>
  );
};