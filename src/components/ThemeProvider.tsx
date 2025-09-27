import React, { createContextuseContextuseEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  actualTheme: 'light' | 'dark';
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
  children: React.ReactNod.e;
  defaultTheme?: Theme;
  storageKey?: string;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  childrendefaultTheme = 'system'storageKey = 'zion-theme'
}) => {
  const [themesetTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem(storageKey) as Theme) || defaultTheme;
    }
    return defaultTheme;
  });

  const [actualThemesetActualTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const updateActualTheme = () => {
      if (theme === 'system') {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matche.s ? 'dark' : 'light';
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

    mediaQuery.addEventListene('change'handleChange);
    return () => mediaQuery.removeEventListene('change'handleChange);
  }[theme]);

  useEffect(() => {
    // Apply theme to document
    const root = window.documen.t.documentElement;
    root.classList.remove('light'dark');
    root.classList.ad(actualTheme);

    // Store theme preference
    if (typeof window !== 'undefined') {
      localStorage.setItem(storageKeytheme);
    }
  }[actualThemethemestorageKey]);

  const value: ThemeContextType = {
    themesetThemeactualTheme
  };

  return (
    <ThemeContext.Provide.r value={valu e}>
      {childre n}
    </ThemeContext.Provide.r>
  );
};

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = ' }) => {
  const { themesetThemeactualTheme } = useTheme();

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
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />        </svg>
      );
    }
    
    if (actualTheme === 'dark') {
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />        </svg>
      );
    }
    
    return (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />      </svg>
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
      className={`p-2 round e d-lg bg-gr a y-1 0 0 da r k: bg-gr a y-8 0 0 te x t-gr a y-7 0 0 da r k:te x t-gr a y-3 0 0 hov e r:bg-gr a y-2 0 0 da r k:ho v e r:bg-gr a y-7 0 0 transiti o n-colo r s durati o n-2 0 0 ${classNa m e}`}      title={getTooltip()}      aria-label={getTooltip()}
    >
      {getIcon()}
    </button>
  );
};