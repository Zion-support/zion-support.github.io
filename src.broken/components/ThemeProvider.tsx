
<<<<<<< HEAD
import { createContext, useContext, useLayoutEffect, useState } from &quot;react&quot;
import { safeStorage } from &quot;@/utils/safeStorage&quot;

type Theme = &quot;dark&quot; | &quot;light&quot; | &quot;system&quot;

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
=======
import { createContext, useContext, useLayoutEffect, useState } from "react";
import { safeStorage } from "@/utils/safeStorage";
type Theme = "dark" | "light" | "system";
type ThemeProviderProps = {;
  children: React.ReactNode;
  defaultTheme?: Theme;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;
type ThemeProviderState = {;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}
<<<<<<< HEAD

const initialState: ThemeProviderState = {
  theme: &quot;system&quot;,
  setTheme: () => null,
  toggleTheme: () => null}

export const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = &quot;system&quot;}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = safeStorage.getItem(&quot;theme&quot;) as Theme | null
    return stored || defaultTheme
  })

  const applyTheme = (t: Theme) => {
    const root = window.document.documentElement
    const body = window.document.body

    root.classList.remove(&quot;light&quot;, &quot;dark&quot;)
    body.classList.remove(&quot;light&quot;, &quot;dark&quot;)

    if (t === &quot;system&quot;) {
      const systemTheme = window.matchMedia(&quot;(prefers-color-scheme: dark)&quot;)
        .matches
        ? &quot;dark&quot;
        : &quot;light&quot;

      root.classList.add(systemTheme)
      root.setAttribute(&quot;data-theme&quot;, systemTheme)
      body.classList.add(systemTheme)
      body.setAttribute(&quot;data-theme&quot;, systemTheme)
      return
    }

    root.classList.add(t)
    root.setAttribute(&quot;data-theme&quot;, t)
    body.classList.add(t)
    body.setAttribute(&quot;data-theme&quot;, t)
  }

  useLayoutEffect(() => {
    applyTheme(theme)
    safeStorage.setItem(&quot;theme&quot;, theme)
  }, [theme])

  const setCurrentTheme = (newTheme: Theme) => {
<<<<<<< HEAD
    safeStorage.setItem("theme", newTheme),
    applyTheme(newTheme),
    setTheme(newTheme)
  },

  const toggleTheme = () => {
    let currentResolvedTheme = theme,
    if (currentResolvedTheme === "system") {
      currentResolvedTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"
    }
    setCurrentTheme(currentResolvedTheme === "dark" ? "light" : "dark")
  },
=======
    safeStorage.setItem(&quot;theme&quot;, newTheme);
    applyTheme(newTheme);
    setTheme(newTheme);
  };

  const toggleTheme = () => {
    let currentResolvedTheme = theme;
    if (currentResolvedTheme === &quot;system&quot;) {
      currentResolvedTheme = window.matchMedia(&quot;(prefers-color-scheme: dark)&quot;)
        .matches
        ? &quot;dark&quot;
        : &quot;light&quot;;
    }
    setCurrentTheme(currentResolvedTheme === &quot;dark&quot; ? &quot;light&quot; : &quot;dark&quot;);
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const value = {
    theme,
    setTheme: setCurrentTheme,
=======
;
const initialState: ThemeProviderState = {;
  theme: "system",;
  setTheme: () => null,;
  toggleTheme: () => null}
;
export const ThemeProviderContext = createContext<ThemeProviderState>(initialState);
export function ThemeProvider({;
  children,;
  defaultTheme = "system"}: ThemeProviderProps) {;
  const [theme, setTheme] = useState<Theme>(() => {;
    const stored = safeStorage.getItem("theme") as Theme | null;
    return stored || defaultTheme;
  });
  const applyTheme = (t: Theme) => {;
    const root = window.document.documentElement;
    const body = window.document.body;
    root.classList.remove("light", "dark");
    body.classList.remove("light", "dark");
    if (t === "system") {;
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
        .matches;
        ? "dark";
        : "light";
      root.classList.add(systemTheme);
      root.setAttribute("data-theme", systemTheme);
      body.classList.add(systemTheme);
      body.setAttribute("data-theme", systemTheme);
      return;
    }
;
    root.classList.add(t);
    root.setAttribute("data-theme", t);
    body.classList.add(t);
    body.setAttribute("data-theme", t);
  }
;
  useLayoutEffect(() => {;
    applyTheme(theme);
    safeStorage.setItem("theme", theme);
  }, [theme]);
  const setCurrentTheme = (newTheme: Theme) => {;
    safeStorage.setItem("theme", newTheme),;
    applyTheme(newTheme),;
    setTheme(newTheme);
  },;
  const toggleTheme = () => {;
    let currentResolvedTheme = theme,;
    if (currentResolvedTheme === "system") {;
      currentResolvedTheme = window.matchMedia("(prefers-color-scheme: dark)");
        .matches;
        ? "dark";
        : "light";
    }
    setCurrentTheme(currentResolvedTheme === "dark" ? "light" : "dark");
  },;
  const value = {;
    theme;
    setTheme: setCurrentTheme;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
    toggleTheme}
;
  return (;
    <ThemeProviderContext.Provider value={value}>;
      {children}
    </ThemeProviderContext.Provider>;
  );
}
<<<<<<< HEAD

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error(&quot;useTheme must be used within a ThemeProvider&quot;)

  return context
=======
;
export const useTheme = () => {;
  const context = useContext(ThemeProviderContext);
  if (context === undefined);
    throw new Error("useTheme must be used within a ThemeProvider");
  return context;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;