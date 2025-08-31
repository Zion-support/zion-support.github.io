import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Monitor, Palette } from 'lucide-react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function ThemeToggle({ className = '', showLabel = false, size = 'md' }: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>('system');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = window.document.documentElement;
    
    // Remove existing theme classes
    root.classList.remove('light', 'dark');
    
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
    
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        const systemTheme = mediaQuery.matches ? 'dark' : 'light';
        root.classList.add(systemTheme);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

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

  const themes: { value: Theme; icon: React.ComponentType<any>; label: string; color: string }[] = [
    { value: 'light', icon: Sun, label: 'Light', color: 'from-yellow-400 to-orange-500' },
    { value: 'dark', icon: Moon, label: 'Dark', color: 'from-blue-600 to-purple-600' },
    { value: 'system', icon: Monitor, label: 'System', color: 'from-gray-500 to-gray-600' }
  ];

  const currentTheme = themes.find(t => t.value === theme);

  if (!mounted) {
    return (
      <div className={`${sizeClasses[size]} rounded-lg bg-gray-200 animate-pulse ${className}`} />
    );
  }

  return (
    <div className={`relative ${className}`}>
      {/* Main Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          const currentIndex = themes.findIndex(t => t.value === theme);
          const nextIndex = (currentIndex + 1) % themes.length;
          setTheme(themes[nextIndex].value);
        }}
        className={`
          ${sizeClasses[size]} rounded-lg bg-gradient-to-r ${currentTheme?.color} 
          text-white shadow-lg hover:shadow-xl transition-all duration-300
          flex items-center justify-center group
        `}
        aria-label={`Switch to ${themes[(themes.findIndex(t => t.value === theme) + 1) % themes.length].label} theme`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={theme}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {currentTheme && <currentTheme.icon className={iconSizes[size]} />}
          </motion.div>
        </AnimatePresence>
      </motion.button>

      {/* Theme Label */}
      {showLabel && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
        >
          <span className="text-xs text-gray-600 font-medium">
            {currentTheme?.label}
          </span>
        </motion.div>
      )}

      {/* Quick Theme Picker (appears on hover) */}
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
        <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-2 flex gap-1">
          {themes.map((themeOption) => (
            <motion.button
              key={themeOption.value}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(themeOption.value)}
              className={`
                w-8 h-8 rounded-md bg-gradient-to-r ${themeOption.color} 
                text-white flex items-center justify-center transition-all duration-200
                ${theme === themeOption.value ? 'ring-2 ring-blue-500 ring-offset-2' : ''}
              `}
              aria-label={`Switch to ${themeOption.label} theme`}
            >
              <themeOption.icon className="w-4 h-4" />
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}

// Hook for using theme in components
export function useTheme() {
  const [theme, setTheme] = useState<Theme>('system');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const themes: Theme[] = ['light', 'dark', 'system'];
    const currentIndex = themes.findIndex(t => t.value === theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  const isDark = mounted && (
    theme === 'dark' || 
    (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  return {
    theme,
    setTheme,
    toggleTheme,
    isDark,
    mounted
  };
}

// Theme Provider Component
interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
}

export function ThemeProvider({ children, defaultTheme = 'system' }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
    
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  if (!mounted) {
    return <div className="min-h-screen bg-gray-50" />;
  }

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      {children}
    </div>
  );
}
