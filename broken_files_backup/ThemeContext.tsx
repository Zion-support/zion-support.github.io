<<<<<<< HEAD:src/context/ThemeContext.tsx
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export type ThemeMode = "light" | "dark";

interface ThemeContextState {
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextState>({
  mode: "light",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleTheme: () => {},
});

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<ThemeMode>("light");

  const applyMode = (next: ThemeMode) => {
    const root = document.documentElement;
    if (next === "dark") {
      root.classList.add("dark");
=======
import * as React from 'react';
type Theme = 'light' | 'dark' | 'system';
interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}
const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = React.useState<Theme>('system');
  React.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/ThemeContext.tsx
    } else {
      root.classList.remove("dark");
    }
<<<<<<< HEAD:src/context/ThemeContext.tsx
  };

  useEffect(() => {
    const stored = localStorage.getItem("theme") as ThemeMode | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initial: ThemeMode = stored || (prefersDark ? "dark" : "light");
    setMode(initial);
    applyMode(initial);
  }, []);

  const toggleTheme = () => {
    const next: ThemeMode = mode === "light" ? "dark" : "light";
    setMode(next);
    localStorage.setItem("theme", next);
    applyMode(next);
  };

=======
  }, [theme]);
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/ThemeContext.tsx
  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
<<<<<<< HEAD:src/context/ThemeContext.tsx
}

export const useTheme = () => useContext(ThemeContext);
=======
};
export const useTheme = (): ThemeContextType => {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/ThemeContext.tsx
