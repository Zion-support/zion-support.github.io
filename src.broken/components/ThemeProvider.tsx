
<<<<<<< HEAD
import { createContext, useContext, useLayoutEffect, useState } from &quot;react&quot;
import { safeStorage } from &quot;@/utils/safeStorage&quot;
=======
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

type Theme = &quot;dark&quot; | &quot;light&quot; | &quot;system&quot;

type ThemeProviderProps = {_children: React.ReactNode
  defaultTheme?: Theme}

type ThemeProviderState = {_theme: Theme
  setTheme: (_theme: Theme) => void
  toggleTheme: () => void}

<<<<<<< HEAD
const initialState: ThemeProviderState = {
  theme: &quot;system&quot;,
  setTheme: () => null,
  toggleTheme: () => null}
=======
const initialState: ThemeProviderState = {_theme: "system", _setTheme: () => null, _toggleTheme: () => null}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export const _ThemeProviderContext = createContext<ThemeProviderState>(initialState)

<<<<<<< HEAD
export function ThemeProvider({
  children,
  defaultTheme = &quot;system&quot;}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = safeStorage.getItem(&quot;theme&quot;) as Theme | null
    return stored || defaultTheme
  })
=======
export function ThemeProvider(_{_children, _defaultTheme = "system"}: ThemeProviderProps) {_const [theme, _setTheme] = useState<Theme>__(() => {
    const _stored = safeStorage.getItem("theme") as Theme | null
    return stored || defaultTheme})
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _applyTheme = (_t: Theme) => {_const _root = window.document.documentElement
    const _body = window.document.body

<<<<<<< HEAD
    root.classList.remove(&quot;light&quot;, &quot;dark&quot;)
    body.classList.remove(&quot;light&quot;, &quot;dark&quot;)

    if (t === &quot;system&quot;) {
      const systemTheme = window.matchMedia(&quot;(prefers-color-scheme: dark)&quot;)
=======
    root.classList.remove("light", _"dark")
    body.classList.remove("light", _"dark")

    if (t === "system") {
      const _systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        .matches
        ? &quot;dark&quot;
        : &quot;light&quot;

      root.classList.add(systemTheme)
<<<<<<< HEAD
      root.setAttribute(&quot;data-theme&quot;, systemTheme)
      body.classList.add(systemTheme)
      body.setAttribute(&quot;data-theme&quot;, systemTheme)
      return
    }
=======
      root.setAttribute("data-theme", _systemTheme)
      body.classList.add(systemTheme)
      body.setAttribute("data-theme", _systemTheme)
      return}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    root.classList.add(t)
    root.setAttribute(&quot;data-theme&quot;, t)
    body.classList.add(t)
    body.setAttribute(&quot;data-theme&quot;, t)
  }

<<<<<<< HEAD
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
=======
  useLayoutEffect__(() => {_applyTheme(theme)
    safeStorage.setItem("theme", _theme)}, [theme])

  const _setCurrentTheme = (_newTheme: Theme) => {_safeStorage.setItem("theme", _newTheme);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    applyTheme(newTheme);
    setTheme(newTheme);};

<<<<<<< HEAD
  const toggleTheme = () => {
    let currentResolvedTheme = theme;
    if (currentResolvedTheme === &quot;system&quot;) {
      currentResolvedTheme = window.matchMedia(&quot;(prefers-color-scheme: dark)&quot;)
        .matches
        ? &quot;dark&quot;
        : &quot;light&quot;;
    }
    setCurrentTheme(currentResolvedTheme === &quot;dark&quot; ? &quot;light&quot; : &quot;dark&quot;);
=======
  const _toggleTheme = () => {_let _currentResolvedTheme = theme;
    if (currentResolvedTheme === "system") {
      currentResolvedTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";}
    setCurrentTheme(currentResolvedTheme === "dark" ? "light" : "dark");
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

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
