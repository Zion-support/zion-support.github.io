import React, { useState, useEffect } from 'react';
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

type Theme = 'light' | 'dark' | 'system' | 'cyberpunk' | 'minimal' | 'retro';

interface ThemeToggleProps {
  className?: string;
  showAdvanced?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = '',
  showAdvanced = false,
  size = 'md'
}) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>('dark');
  const [isOpen, setIsOpen] = useState(false);
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);

  const themes: { value: Theme; label: string; icon: React.ComponentType<any>; description: string }[] = [
    { value: 'light', label: 'Light', icon: Sun, description: 'Clean and bright interface' },
    { value: 'dark', label: 'Dark', icon: Moon, description: 'Easy on the eyes' },
    { value: 'system', label: 'System', icon: Monitor, description: 'Follows your OS preference' },
    { value: 'cyberpunk', label: 'Cyberpunk', icon: Palette, description: 'Neon and futuristic' },
    { value: 'minimal', label: 'Minimal', icon: Settings, description: 'Simple and clean' },
    { value: 'retro', label: 'Retro', icon: Palette, description: 'Classic computing style' }
  ];

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('zion-theme') as Theme;
    if (savedTheme && themes.some(t => t.value === savedTheme)) {
      setCurrentTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      // Check system preference
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const defaultTheme: Theme = systemPrefersDark ? 'dark' : 'light';
      setCurrentTheme(defaultTheme);
      applyTheme(defaultTheme);
    }
  }, []);

  const applyTheme = (theme: Theme) => {
    const root = document.documentElement;
    
    // Remove all theme classes
    root.classList.remove('theme-light', 'theme-dark', 'theme-cyberpunk', 'theme-minimal', 'theme-retro');
    
    // Add new theme class
    if (theme !== 'system') {
      root.classList.add(`theme-${theme}`);
    }
    
    // Set data attribute for CSS custom properties
    root.setAttribute('data-theme', theme);
    
    // Apply system theme if needed
    if (theme === 'system') {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.classList.add(`theme-${systemPrefersDark ? 'dark' : 'light'}`);
      root.setAttribute('data-theme', systemPrefersDark ? 'dark' : 'light');
    }
    
    // Save to localStorage
    localStorage.setItem('zion-theme', theme);
    
    // Update meta theme-color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      const colors = {
        light: '#ffffff',
        dark: '#0f172a',
        cyberpunk: '#0a0a0a',
        minimal: '#f8fafc',
        retro: '#2d3748'
      };
      metaThemeColor.setAttribute('content', colors[theme] || colors.dark);
    }
  };

  const handleThemeChange = (theme: Theme) => {
    setCurrentTheme(theme);
    applyTheme(theme);
    setIsOpen(false);
    setIsAdvancedOpen(false);
  };

  const getCurrentThemeIcon = () => {
    const theme = themes.find(t => t.value === currentTheme);
    return theme ? theme.icon : Moon;
  };

  const getCurrentThemeLabel = () => {
    const theme = themes.find(t => t.value === currentTheme);
    return theme ? theme.label : 'Dark';
  };

  return (
    <div className={`relative ${className}`}>
      {/* Main Theme Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`${sizeClasses[size]} bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg flex items-center justify-center text-white transition-all duration-200 shadow-lg hover:shadow-xl`}
        aria-label={`Current theme: ${getCurrentThemeLabel()}. Click to change theme.`}
        title={`Current theme: ${getCurrentThemeLabel()}`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTheme}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <getCurrentThemeIcon className={iconSizes[size]} />
          </motion.div>
        </AnimatePresence>
      </motion.button>

      {/* Quick Theme Switcher */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-64 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden z-50"
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-white">Theme</h3>
                <button
                  onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
                  className="text-gray-400 hover:text-white transition-colors p-1"
                  title="Advanced theme settings"
                >
                  <Settings className="w-4 h-4" />
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                {themes.slice(0, 3).map((theme) => (
                  <button
                    key={theme.value}
                    onClick={() => handleThemeChange(theme.value)}
                    className={`p-3 rounded-lg border transition-all duration-200 ${
                      currentTheme === theme.value
                        ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
                        : 'border-slate-600 hover:border-slate-500 text-gray-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                    title={theme.description}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <theme.icon className="w-5 h-5" />
                      <span className="text-xs font-medium">{theme.label}</span>
                    </div>
                  </button>
                ))}
              </div>
              
              {showAdvanced && (
                <div className="mt-3 pt-3 border-t border-slate-700">
                  <button
                    onClick={() => setIsAdvancedOpen(true)}
                    className="w-full text-left text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    View all themes and customize...
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Advanced Theme Settings */}
      <AnimatePresence>
        {isAdvancedOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsAdvancedOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl w-full max-w-md max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Palette className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">Theme Settings</h2>
                    <p className="text-sm text-gray-400">Customize your experience</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsAdvancedOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(80vh-120px)]">
                <div className="space-y-4">
                  {themes.map((theme) => (
                    <button
                      key={theme.value}
                      onClick={() => handleThemeChange(theme.value)}
                      className={`w-full p-4 rounded-xl border transition-all duration-200 text-left ${
                        currentTheme === theme.value
                          ? 'border-cyan-400 bg-cyan-400/10'
                          : 'border-slate-600 hover:border-slate-500 hover:bg-slate-800/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            currentTheme === theme.value
                              ? 'bg-cyan-400/20 text-cyan-400'
                              : 'bg-slate-700 text-gray-400'
                          }`}>
                            <theme.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="font-semibold text-white">{theme.label}</div>
                            <div className="text-sm text-gray-400">{theme.description}</div>
                          </div>
                        </div>
                        {currentTheme === theme.value && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center"
                          >
                            <Check className="w-4 h-4 text-white" />
                          </motion.div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Custom Theme Options */}
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-4">Customization</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Auto-switch based on time</span>
                      <button className="w-12 h-6 bg-slate-700 rounded-full relative">
                        <div className="w-4 h-4 bg-white rounded-full absolute top-1 left-1 transition-transform duration-200" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Reduce motion</span>
                      <button className="w-12 h-6 bg-slate-700 rounded-full relative">
                        <div className="w-4 h-4 bg-white rounded-full absolute top-1 left-1 transition-transform duration-200" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
