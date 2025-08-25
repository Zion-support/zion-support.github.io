<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
=======
import React, { createContext, useContext, useState, useEffect } from 'react';
>>>>>>> origin/cursor/check-and-fix-github-actions-e92c
=======
>>>>>>> origin/cursor/build-project-and-deploy-with-netlify-1c1d
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

<<<<<<< HEAD
=======
<<<<<<< HEAD
interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children, 
  defaultTheme = 'system' 
}) => {
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
export function ThemeProvider({ 
  children, 
  defaultTheme = 'dark' 
}: { 
  children: React.ReactNode;
  defaultTheme?: Theme;
}) {
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/check-and-fix-github-actions-e92c
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    const root = window.document.documentElement;
<<<<<<< HEAD
=======
<<<<<<< HEAD
    
    root.classList.remove('light', 'dark');
    
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    root.classList.remove('light', 'dark');

>>>>>>> origin/cursor/check-and-fix-github-actions-e92c
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}