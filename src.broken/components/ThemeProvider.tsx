
import { createContext, useContext, useLayoutEffect, useState } from &quot;react&quot;
import { safeStorage } from &quot;@/utils/safeStorage&quot;
export const _ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = &quot;system&quot;}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = safeStorage.getItem(&quot;theme&quot;) as Theme | null
    return stored || defaultTheme
  })
  const _applyTheme = (_t: Theme) => {_const _root = window.document.documentElement
    const _body = window.document.body

    root.classList.remove(&quot;light&quot;, &quot;dark&quot;)
    body.classList.remove(&quot;light&quot;, &quot;dark&quot;)

    if (t === &quot;system&quot;) {
      const systemTheme = window.matchMedia(&quot;(prefers-color-scheme: dark)&quot;)        .matches
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
  },    applyTheme(newTheme);
    setTheme(newTheme);};

  const toggleTheme = () => {
    let currentResolvedTheme = theme;
    if (currentResolvedTheme === &quot;system&quot;) {
      currentResolvedTheme = window.matchMedia(&quot;(prefers-color-scheme: dark)&quot;)
        .matches
        ? &quot;dark&quot;
        : &quot;light&quot;;
    }
    setCurrentTheme(currentResolvedTheme === &quot;dark&quot; ? &quot;light&quot; : &quot;dark&quot;);  };

  const _value = {_theme, _setTheme: setCurrentTheme, _toggleTheme}

  return (
    <ThemeProviderContext.Provider value={_value}>
      {_children}
    </ThemeProviderContext.Provider>
  )
}

export const _useTheme = () => {_const _context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error(&quot;useTheme must be used within a ThemeProvider&quot;)

  return context}
