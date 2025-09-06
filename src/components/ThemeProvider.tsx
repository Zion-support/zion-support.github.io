<<<<<<< HEAD
import React, { createContext, useContext, useState } from 'react';

interface ThemeContextType {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
=======
import React, { createContext, useContext, useEffect, useState } from 'react';
type Theme = 'light' | 'dark' | 'system';interface ThemeProviderProps  {children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}interface ThemeProviderState  {theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}const initialState: ThemeProviderState = {theme: 'system',setTheme: () => null,toggleTheme: () => null}const ThemeProviderContext  = createContext<ThemeProviderState>(initialState)export function ThemeProvider() {const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem(storageKey) as Theme) || defaultTheme;
  )useEffect(() => {const root  = window.document.documentElement;root.classList.remove('light', 'dark')if (theme === 'system') {const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
        ? 'dark';
        : 'light';root.classList.add(systemTheme)return;
    }root.classList.add(theme)}, [theme])const value = {theme,setTheme: (theme: Theme) => {localStorage.setItem(storageKey, theme)setTheme(theme)},toggleTheme: () => {const newTheme = theme === 'light' ? 'dark' : 'light';
      localStorage.setItem(storageKey, newTheme)setTheme(newTheme)}}return (<ThemeProviderContext.Provider {...props} value={value}>;
      {children}
    </ThemeProviderContext.Provider>;
  )}export const useTheme = () => {const context  = useContext(ThemeProviderContext)if (context === undefined)throw new Error('useTheme must be used within a ThemeProvider')return context;
}
>>>>>>> 157aff07b859488146569974cc7382910d9762e2
