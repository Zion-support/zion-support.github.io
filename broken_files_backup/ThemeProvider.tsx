"use client";
import * as React from "react";
export type Theme = "dark" | "light" | "system"
<<<<<<< HEAD:src/components/ThemeProvider.tsx

export type ThemeProviderProps = {
=======
type ThemeProviderProps = {
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/ThemeProvider.tsx
  children: React.ReactNode
}
export type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}
const initialState: ThemeProviderState = {
  theme: "dark",
  setTheme: () => null,
}
export const ThemeProviderContext = createContext<ThemeProviderState>(initialState)
<<<<<<< HEAD:src/components/ThemeProvider.tsx

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme] = useState<Theme>("dark")

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add("dark")
  }, [])

  const value = {
    theme,
    setTheme: () => {},
  }

=======
export function ThemeProvider({
  children,
  defaultTheme = "system",
}: ThemeProviderProps) {
  const [theme, setTheme] = React.useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(storageKey) || defaultTheme;
    }
    return defaultTheme;
  });
  React.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
      return;
    }
    root.classList.add(theme);
  }, [theme]);
  const value = React.useMemo(
    () => ({
      theme,
      setTheme: (theme: string) => {
        localStorage.setItem(storageKey, theme);
        setTheme(theme);
      },
    }),
    [theme, storageKey]
  );
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/ThemeProvider.tsx
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
export const useTheme = (): ThemeProviderState => {
  const context = useContext(ThemeProviderContext)
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")
  return context
}
