import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {

  theme: Theme;
  setTheme: (theme: Theme)  => void;
  isDark: boolean}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')}
  return context};

interface ThemeProviderProps extends React.PropsWithChildren<{}> {

  children: React.ReactNode}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<any>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme') as Theme;
      if (saved && ['light', 'dark', 'system'].includes(saved)) {
        return saved}
    }
    return 'system'});

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    
    const updateTheme = () => {
      let effectiveTheme: 'light' | 'dark';
      
      if (theme === 'system') {
        effectiveTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'} else {
        effectiveTheme = theme}
      
      setIsDark(effectiveTheme === 'dark');
      
      if (effectiveTheme === 'dark') {
        root.classList.add('dark');
        root.classList.remove('light')} else {
        root.classList.add('light');
        root.classList.remove('dark')}
    };

    updateTheme();
    
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', updateTheme);
      return ()  => mediaQuery.removeEventListener('change', updateTheme)}
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('theme', theme)}, [theme]);

  const value = {
    theme,
    setTheme,
    isDark,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )};