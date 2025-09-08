import React, { createContext, useContext, useEffect, useState } from 'react';

import { createContext, useContext, useLayoutEffect, useState } from "react"
import { safeStorage } from "@/utils/safeStorage"
import { getThemeColors, applyThemeColors } from "@/utils/themeUtils"

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

export const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = safeStorage.getItem("theme") as Theme | null
    return stored || defaultTheme
  })

  const applyTheme = (t: Theme) => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")

    let resolved: Theme = t
    if (t === "system") {
      resolved = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    }

    root.classList.add(resolved)
    root.setAttribute("data-theme", resolved)

    const primaryColor = safeStorage.getItem("primaryColor") || "#3b82f6"
    const colors = getThemeColors(resolved, primaryColor)
    applyThemeColors(colors)
  }

  useLayoutEffect(() => {
    applyTheme(theme)
    safeStorage.setItem("theme", theme)
  }, [theme])

  const setCurrentTheme = (newTheme: Theme) => {
    safeStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
    setTheme(newTheme);
  };

  const toggleTheme = () => {
    let currentResolvedTheme = theme;
    if (currentResolvedTheme === "system") {
      currentResolvedTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
    }
    setCurrentTheme(currentResolvedTheme === "dark" ? "light" : "dark");
  };

  const value = {
    theme,
    setTheme: setCurrentTheme,
    toggleTheme,
  }

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