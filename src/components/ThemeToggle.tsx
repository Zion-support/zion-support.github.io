import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Monitor, Zap, Brain, Atom } from 'lucide-react';

type Theme = 'light' | 'dark' | 'system' | 'ai' | 'quantum';

interface ThemeToggleProps {
  className?: string;
  showLabels?: boolean;
  variant?: 'default' | 'futuristic' | 'minimal';
}

export function ThemeToggle({ 
  className = '', 
  showLabels = true,
  variant = 'default'
}: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>('system');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('zion-theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setTheme(systemTheme);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    
    // Remove all theme classes
    root.classList.remove('light', 'dark', 'ai-theme', 'quantum-theme');
    
    // Apply current theme
    switch (theme) {
      case 'light':
        root.classList.add('light');
        break;
      case 'dark':
        root.classList.add('dark');
        break;
      case 'ai':
        root.classList.add('ai-theme');
        break;
      case 'quantum':
        root.classList.add('quantum-theme');
        break;
      case 'system':
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        root.classList.add(systemTheme);
        break;
    }

    localStorage.setItem('zion-theme', theme);
  }, [theme, mounted]);

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  const themes: { value: Theme; icon: React.ComponentType<any>; label: string; color: string }[] = [
    { value: 'light', icon: Sun, label: 'Light', color: 'from-yellow-400 to-orange-400' },
    { value: 'dark', icon: Moon, label: 'Dark', color: 'from-slate-600 to-slate-800' },
    { value: 'system', icon: Monitor, label: 'System', color: 'from-gray-500 to-gray-600' },
    { value: 'ai', icon: Brain, label: 'AI', color: 'from-cyan-400 to-blue-500' },
    { value: 'quantum', icon: Atom, label: 'Quantum', color: 'from-purple-400 to-pink-500' }
  ];

  if (!mounted) {
    return (
      <div className={`w-12 h-12 bg-gray-200 rounded-lg animate-pulse ${className}`} />
    );
  }

  if (variant === 'minimal') {
    return (
      <motion.button
        onClick={() => handleThemeChange(theme === 'light' ? 'dark' : 'light')}
        className={`p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-gray-200/20 hover:bg-white/20 transition-colors ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={theme}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </motion.div>
        </AnimatePresence>
      </motion.button>
    );
  }

  if (variant === 'futuristic') {
    return (
      <div className={`flex items-center space-x-2 ${className}`}>
        {themes.map((themeOption) => (
          <motion.button
            key={themeOption.value}
            onClick={() => handleThemeChange(themeOption.value)}
            className={`relative p-3 rounded-xl transition-all duration-300 ${
              theme === themeOption.value
                ? `bg-gradient-to-r ${themeOption.color} text-white shadow-lg shadow-${themeOption.color.split('-')[1]}-500/25`
                : 'bg-white/10 backdrop-blur-sm border border-gray-200/20 hover:bg-white/20 text-gray-300'
            }`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Switch to ${themeOption.label} theme`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={theme}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <themeOption.icon className="w-5 h-5" />
              </motion.div>
            </AnimatePresence>
            
            {/* Active indicator */}
            {theme === themeOption.value && (
              <motion.div
                className="absolute -bottom-1 left-1/2 w-2 h-2 bg-white rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    );
  }

  // Default variant
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {themes.map((themeOption) => (
        <motion.button
          key={themeOption.value}
          onClick={() => handleThemeChange(themeOption.value)}
          className={`relative p-2 rounded-lg transition-all duration-200 ${
            theme === themeOption.value
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-300'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={`Switch to ${themeOption.label} theme`}
        >
          <themeOption.icon className="w-4 h-4" />
          {showLabels && (
            <span className="ml-2 text-sm font-medium">{themeOption.label}</span>
          )}
        </motion.button>
      ))}
    </div>
  );
}
