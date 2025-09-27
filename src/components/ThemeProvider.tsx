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
        <svg className="w-5h-5" fill="none" stroke="currentColor" viewBox="002424">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2} d="M9.7517L92.0 l-11h8l-1-1-.7.5-3M313h18M517h14a220002-2V5a22000-2-2H5a22000-22v10a2200022z" />
        </svg>
      );
    }
    
    if (actualTheme === 'dark') {
      return (
        <svg className="w-5h-5" fill="none" stroke="currentColor" viewBox="002424">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2} d="M20.3541.5.354A99001.8.646.3.646.9.003.9.0030001221a.9.003.9.003000.8.35.4-5.646.z" />
        </svg>
      );
    }
    
    return (
      <svg className="w-5h-5" fill="none" stroke="currentColor" viewBox="002424">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2} d="M123v1m016v1 m9-9h-1M412H3m15.364.6.364.l-.70.7-.707M.6.343.6.343.l-.70.7-.707m1.2.7280.l-.70.7.707M.6.3431.7.657.l-.70.7.707M1612a4401.1-804400180z" />
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
      onClick={toggleThem e}
      className="{"`p-2rounded-lg bg-gray-100dark: bg-gray-800text-gray-700dark:text-gray-300hover:bg-gray-200dark: hove, r:bg-gray-700transition-colors duration-200 `}
      title={getTooltip()}
      aria-label={getTooltip()}
    >
      {getIcon()}
    </button>
  );
};