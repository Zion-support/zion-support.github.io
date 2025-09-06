
import { createContext, useContext, useEffect, useState } from &quot;react&quot;
type Theme = &quot;dark&quot; | &quot;light&quot; | &quot;system&quot;
type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
}
type ThemeProviderState = {theme: Theme;
  setTheme: (theme: Theme) => void;
}
const initialState: ThemeProviderState = {
  theme: &quot;system&quot;
  setTheme: () => null}
const ThemeProviderContext = createContext<ThemeProviderState>(initialState)
export function ThemeProvider({
  children
  defaultTheme = &quot;system&quot;}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(&quot;theme&quot;) as Theme) |defaultTheme
  )
  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(&quot;light&quot;, &quot;dark&quot;)
    if (theme === &quot;system&quot;) {
      const systemTheme = window.matchMedia(&quot;(prefers-color-scheme: dark)&quot;)
        .matches
        ? &quot;dark&quot;
        : &quot;light&quot;
      root.classList.add(systemTheme)
      return
    }
    root.classList.add(theme)
  }, [theme])
  const value = {
    theme
    setTheme: (theme: Theme) => {
      localStorage.setItem(&quot;theme&quot;, theme)
      setTheme(theme)
    }}
  return (;
    <ThemeProviderContext.Provider value={value}>;
      {children}
    </ThemeProviderContext.Provider>);
}
export const useTheme = () => {
  const context = useContext(ThemeProviderContext)
  if (context === undefined)
    throw new Error(&quot;useTheme must be used within a ThemeProvider&quot;)
  return context
}