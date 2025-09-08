import React, { createContext, useContext, useEffect, useState } from 'react';


  theme: Theme;


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