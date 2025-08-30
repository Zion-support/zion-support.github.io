import React, { createContext, useContext, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'zion-theme'
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem(storageKey) as Theme) || defaultTheme;
    }
    return defaultTheme;
  });

  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const root = window.document.documentElement;
    
    const updateTheme = () => {
      let newResolvedTheme: 'light' | 'dark';
      
      if (theme === 'system') {
        newResolvedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      } else {
        newResolvedTheme = theme;
      }
      
      setResolvedTheme(newResolvedTheme);
      
      // Remove existing theme classes
      root.classList.remove('light', 'dark');
      
      // Add new theme class
      root.classList.add(newResolvedTheme);
      
      // Update CSS custom properties
      if (newResolvedTheme === 'light') {
        root.style.setProperty('--zion-bg-primary', '#ffffff');
        root.style.setProperty('--zion-bg-secondary', '#f8fafc');
        root.style.setProperty('--zion-text-primary', '#1e293b');
        root.style.setProperty('--zion-text-secondary', '#64748b');
        root.style.setProperty('--zion-border', '#e2e8f0');
      } else {
        root.style.setProperty('--zion-bg-primary', '#0f172a');
        root.style.setProperty('--zion-bg-secondary', '#1e293b');
        root.style.setProperty('--zion-text-primary', '#f1f5f9');
        root.style.setProperty('--zion-text-secondary', '#94a3b8');
        root.style.setProperty('--zion-border', '#334155');
      }
    };

    updateTheme();
    
    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        updateTheme();
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [theme]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(storageKey, theme);
    }
  }, [theme, storageKey]);

  const toggleTheme = () => {
    setTheme(current => {
      if (current === 'light') return 'dark';
      if (current === 'dark') return 'system';
      return 'light';
    });
  };

  const value = {
    theme,
    setTheme,
    resolvedTheme,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      <AnimatePresence mode="wait">
        <motion.div
          key={resolvedTheme}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={`theme-${resolvedTheme}`}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </ThemeContext.Provider>
  );
}

// Theme toggle button component
export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme, toggleTheme } = useTheme();
  
  const themes: { value: Theme; label: string; icon: string }[] = [
    { value: 'light', label: 'Light', icon: '☀️' },
    { value: 'dark', label: 'Dark', icon: '🌙' },
    { value: 'system', label: 'System', icon: '💻' }
  ];

  return (
    <div className="relative group">
      <button
        onClick={toggleTheme}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-zion-slate-800/50 hover:bg-zion-slate-700/50 transition-colors border border-zion-slate-700/50"
        aria-label={`Current theme: ${theme}. Click to change theme.`}
      >
        <span className="text-lg">
          {themes.find(t => t.value === theme)?.icon}
        </span>
        <span className="text-sm text-zion-slate-light">
          {themes.find(t => t.value === theme)?.label}
        </span>
      </button>
      
      {/* Theme dropdown */}
      <div className="absolute right-0 top-full mt-2 w-32 bg-zion-slate-800 border border-zion-slate-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {themes.map((themeOption) => (
          <button
            key={themeOption.value}
            onClick={() => setTheme(themeOption.value)}
            className={`w-full flex items-center space-x-2 px-3 py-2 text-left hover:bg-zion-slate-700/50 transition-colors ${
              theme === themeOption.value ? 'bg-zion-slate-700/50 text-zion-cyan' : 'text-zion-slate-light'
            }`}
          >
            <span className="text-lg">{themeOption.icon}</span>
            <span className="text-sm">{themeOption.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// Quick theme toggle (just light/dark)
export function QuickThemeToggle() {
  const { resolvedTheme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-zion-slate-800/50 hover:bg-zion-slate-700/50 transition-colors border border-zion-slate-700/50"
      aria-label={`Switch to ${resolvedTheme === 'light' ? 'dark' : 'light'} theme`}
    >
      <motion.span
        key={resolvedTheme}
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-lg"
      >
        {resolvedTheme === 'light' ? '🌙' : '☀️'}
      </motion.span>
    </button>
  );
}
