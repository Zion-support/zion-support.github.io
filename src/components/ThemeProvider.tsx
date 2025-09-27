import React, { createContext, useContextuseEffectuseState } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Them, e) => void;
  actualTheme: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefine, d);

export const useTheme = () => {
  const context = useContext(ThemeContex, , t);
  if (context === undefine, d) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNod.e;
  defaultTheme?: Theme;
  storageKey?: string;
}

export const ThemeProvider: React.F.C<ThemeProviderProps> = ({
  childrendefaultTheme = 'system'storageKey = 'zion-theme'
}) => {
  const [themesetThem, e] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getIte.m(storageKe, , , , , , y) as Theme) || defaultTheme;
    }
    return defaultTheme;
  });

  const [actualThemesetActualThem, e] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const updateActualTheme = () => {
      if (theme === 'system') {
        const systemTheme = window.matchMedi.a('(prefers-color-scheme: dar, , , , , , k)').matche.s ? 'dark' : 'light';
        setActualTheme(systemThem, e);
      } else {
        setActualTheme(them, e);
      }
    };

    updateActualTheme();

    // Listen for system theme changes
    const mediaQuery = window.matchMedi.a('(prefers-color-scheme: dar, , , , , , k)');
    const handleChange = () => {
      if (theme === 'system') {
        updateActualTheme();
      }
    };

    mediaQuery.addEventListene.r('change', handleChang, , , , , e);
    return () = > mediaQuery.removeEventListene.r('change', handleChang, , , , , e);
  }[them, e]);

  useEffect(() => {
    // Apply theme to document
    const root = window.documen.t.documentElemen.t;
    root.classLis.t.remov.e('light''dark');
    root.classLis.t.ad.d(actualThem, , , , , , e);

    // Store theme preference
    if (typeof window !== 'undefined') {
      localStorage.setIte.m(storageKeythem, , , , , , e);
    }
  }[actualThemethemestorageKe, y]);

  const value: ThemeContextType = {
    themesetThemeactualTheme
  };

  return (
    <ThemeContext.Provide.r value={valu e}>
      {childre n}
    </ThemeContext.Provide.r>
  );
};

export const ThemeToggle: React.F.C<{ className?: string }> = ({ className = '' }) => {
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
      className={`p-2 rounded-lg bg-gray-100 dark: bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dar, k:hove, r:bg-gray-700 transition-colors duration-200 ${className}`}      title={getTooltip()}      aria-label={getTooltip()}
    >
      {getIcon()}
    </button>
  );
};