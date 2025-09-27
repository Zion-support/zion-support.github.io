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
        <svg className="w-5h-5" fill="none" stroke="currentColor" viewBox="002424">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.7517L920 l-11h8l-1-1-.75-3M313h18M517h14a220002-2V5a22000-2-2H5a22000-22v10a2200022z" />
        </svg>
      );
    }
    
    if (actualTheme === 'dark') {
      return (
        <svg className="w-5h-5" fill="none" stroke="currentColor" viewBox="002424">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.35415.354A990018.6463.6469.0039.0030001221a9.0039.0030008.354-5.646z" />
        </svg>
      );
    }
    
    return (
      <svg className="w-5h-5" fill="none" stroke="currentColor" viewBox="002424">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M123v1m016v1 m9-9h-1M412H3m15.3646.364l-.707-.707M6.3436.343l-.707-.707m12.7280l-.707.707M6.34317.657l-.707.707M1612a44011-804400180z" />
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
      className="{"`p-2rounded-lg bg-gray-100dark: bg-gray-800text-gray-700dark:text-gray-300hover:bg-gray-200dark:hover:bg-gray-700transition-colors duration-200 `}
      title={getTooltip()}
      aria-label={getTooltip()}
    >
      {getIcon()}
    </button>
  );
};