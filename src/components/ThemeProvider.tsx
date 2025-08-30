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
      
      // Update CSS custom properties for smooth transitions
      root.style.setProperty('--theme-transition', 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)');
      
      // Update color scheme meta tag
      const colorSchemeMeta = document.querySelector('meta[name="color-scheme"]');
      if (colorSchemeMeta) {
        colorSchemeMeta.setAttribute('content', newResolvedTheme);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'color-scheme';
        meta.content = newResolvedTheme;
        document.head.appendChild(meta);
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

  const value: ThemeContextType = {
    theme,
    setTheme,
    resolvedTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      <AnimatePresence mode="wait">
        <motion.div
          key={resolvedTheme}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className={`theme-${resolvedTheme}`}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </ThemeContext.Provider>
  );
}

// Theme Toggle Component
export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme, toggleTheme } = useTheme();
  
  const themes: { value: Theme; label: string; icon: string }[] = [
    { value: 'light', label: 'Light', icon: '☀️' },
    { value: 'dark', label: 'Dark', icon: '🌙' },
    { value: 'system', label: 'System', icon: '💻' },
  ];

  return (
    <div className="relative group">
      <button
        onClick={toggleTheme}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-zion-blue/10 hover:bg-zion-blue/20 border border-zion-purple/30 text-zion-slate-light hover:text-zion-cyan transition-all duration-300"
        aria-label="Toggle theme"
      >
        <span className="text-lg">
          {themes.find(t => t.value === theme)?.icon}
        </span>
        <span className="hidden sm:block text-sm font-medium">
          {themes.find(t => t.value === theme)?.label}
        </span>
      </button>
      
      {/* Theme Dropdown */}
      <div className="absolute right-0 mt-2 w-48 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-xl shadow-zion-purple/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        <div className="py-2">
          {themes.map((themeOption) => (
            <button
              key={themeOption.value}
              onClick={() => setTheme(themeOption.value)}
              className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-zion-purple/20 transition-colors ${
                theme === themeOption.value 
                  ? 'text-zion-cyan bg-zion-purple/20' 
                  : 'text-zion-slate-light hover:text-zion-cyan'
              }`}
            >
              <span className="text-lg">{themeOption.icon}</span>
              <span className="text-sm font-medium">{themeOption.label}</span>
              {theme === themeOption.value && (
                <div className="ml-auto w-2 h-2 bg-zion-cyan rounded-full"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// Theme-aware component wrapper
export function withTheme<T extends object>(
  Component: React.ComponentType<T>
): React.ComponentType<T> {
  return function ThemedComponent(props: T) {
    const { resolvedTheme } = useTheme();
    
    return (
      <div className={`theme-${resolvedTheme}`}>
        <Component {...props} />
      </div>
    );
  };
}

// CSS-in-JS theme styles
export const themeStyles = {
  light: {
    '--zion-bg-primary': '#ffffff',
    '--zion-bg-secondary': '#f8fafc',
    '--zion-bg-tertiary': '#f1f5f9',
    '--zion-text-primary': '#0f172a',
    '--zion-text-secondary': '#475569',
    '--zion-text-tertiary': '#64748b',
    '--zion-border-primary': '#e2e8f0',
    '--zion-border-secondary': '#cbd5e1',
    '--zion-accent-primary': '#06b6d4',
    '--zion-accent-secondary': '#0891b2',
    '--zion-shadow-sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    '--zion-shadow-md': '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    '--zion-shadow-lg': '0 10px 15px -3px rgb(0 0 0 / 0.1)',
  },
  dark: {
    '--zion-bg-primary': '#0f172a',
    '--zion-bg-secondary': '#1e293b',
    '--zion-bg-tertiary': '#334155',
    '--zion-text-primary': '#f8fafc',
    '--zion-text-secondary': '#cbd5e1',
    '--zion-text-tertiary': '#94a3b8',
    '--zion-border-primary': '#334155',
    '--zion-border-secondary': '#475569',
    '--zion-accent-primary': '#22d3ee',
    '--zion-accent-secondary': '#06b6d4',
    '--zion-shadow-sm': '0 1px 2px 0 rgb(0 0 0 / 0.3)',
    '--zion-shadow-md': '0 4px 6px -1px rgb(0 0 0 / 0.4)',
    '--zion-shadow-lg': '0 10px 15px -3px rgb(0 0 0 / 0.4)',
  },
};

// Apply theme styles to document
export function applyThemeStyles(theme: 'light' | 'dark') {
  const root = document.documentElement;
  const styles = themeStyles[theme];
  
  Object.entries(styles).forEach(([property, value]) => {
    root.style.setProperty(property, value);
  });
}

// Theme transition utilities
export const themeTransitions = {
  fast: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
  normal: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  slow: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  spring: 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
};
