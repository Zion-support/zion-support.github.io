
import { createContext, useContext, useLayoutEffect, useState } from &quot;react&quot;
import { safeStorage } from &quot;@/utils/safeStorage&quot;

type Theme = &quot;dark&quot; | &quot;light&quot; | &quot;system&quot;

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

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
    toggleTheme}

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error(&quot;useTheme must be used within a ThemeProvider&quot;)

  return context
}
