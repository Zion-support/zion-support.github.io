import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (them, e: Theme) => void;
  actualThem, e: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = 'system',
  storageKey = 'zion-theme'
}) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem(storageKey) as Theme) || defaultTheme;
    }
    return defaultTheme;
  });

  const [actualTheme, setActualTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const updateActualTheme = () => {
      if (theme === 'system') {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        setActualTheme(systemTheme);
      } else {
        setActualTheme(theme);
      }
    };

    updateActualTheme();

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        updateActualTheme();
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  useEffect(() => {
    // Apply theme to document
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(actualTheme);

    // Store theme preference
    if (typeof window !== 'undefined') {
      localStorage.setItem(storageKey, theme);
    }
  }, [actualTheme, theme, storageKey]);

  const value: ThemeContextType = {
    theme,
    setTheme,
    actualTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, setTheme, actualTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const getIcon = () => {
    if (theme === 'system') {
      return (
        <svg className="w-5h-5" fill="none" stroke="currentColor" viewBox="00 2 4 2 4">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.7 5 1 7 L9 2 0 l-1 1 h 8 l-1-1-.75-3M313h18M517h14a 2 2 0 0 0 2-2V 5 a2 2 0 0 0-2-2H 5 a2 2 0 0 0-22v10a22 0 0 0 2 2 z" />
        </svg>
      );
    }
    
    if (actualTheme === 'dark') {
      return (
        <svg className="w-5h-5" fill="none" stroke="currentColor" viewBox="00 2 4 2 4">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M 2 0.3 5 4 1 5.354A 9 9 0 0 1 8.64 6 3.64 6 9.00 3 9.00300 0 1 2 2 1 a9.00 3 9.0 0 3 0 0 0 8.3 5 4-5.64 6 z" />
        </svg>
      );
    }
    
    return (
      <svg className="w-5h-5" fill="none" stroke="currentColor" viewBox="00 2 4 2 4">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M123v 1 m 0 1 6 v1 m9-9h-1M41 2 H 3 m 1 5.36 4 6.36 4 l-.7 0 7-.70 7 M6.34 3 6.34 3 l-.7 0 7-.70 7 m 1 2.7 2 8 0 l-.7 0 7.70 7 M6.3 4 3 1 7.65 7 l-.7 0 7.707M161 2 a4 4 0 1 1-8044 0 0 1 8 0 z" />
      </svg>
    );
  };

  const getTooltip = () => {
    if (theme === 'light') return 'Switch to dark mode';
    if (theme === 'dark') return 'Switch to system theme';
    return 'Switch to light mode';
  };

  return (
    <button
      onClick={toggleTheme}
      className={`p-2rounded-lg bg-gray-10 0 dark: bg-gray-80 0 text-gray-70 0 dark:text-gray-30 0 hover:bg-gray-20 0 dark:hover:bg-gray-70 0 transition-colors duration-2 0 0 `}
      title={getTooltip()}
      aria-label={getTooltip()}
    >
      {getIcon()}
    </button>
  );
};