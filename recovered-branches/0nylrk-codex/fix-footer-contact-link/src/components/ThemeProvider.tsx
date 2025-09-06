
<<<<<<< HEAD
import { createContext, useContext, useEffect, useState } from &quot;react&quot;
type Theme = &quot;dark&quot; | &quot;light&quot; | &quot;system&quot;
=======
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
}
<<<<<<< HEAD
type ThemeProviderState = {theme: Theme;
=======
;
type ThemeProviderState = {;
  theme: Theme;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  setTheme: (theme: Theme) => void;
}
const initialState: ThemeProviderState = {
<<<<<<< HEAD
  theme: &quot;system&quot;
=======
  theme: "system",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  setTheme: () => null}
const ThemeProviderContext = createContext<ThemeProviderState>(initialState)
export function ThemeProvider({
<<<<<<< HEAD
  children,;
  defaultTheme = &quot;system&quot;}: ThemeProviderProps) {
=======
  children,
  defaultTheme = "system"}: ThemeProviderProps) {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem("theme") as Theme) || defaultTheme
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  )
  useEffect(() => {
    const root = window.document.documentElement
<<<<<<< HEAD
    root.classList.remove(&quot;light&quot;, &quot;dark&quot;)
    if (theme === &quot;system&quot;) {
      const systemTheme = window.matchMedia(&quot;(prefers-color-scheme: dark)&quot;)
        .matches
        ? &quot;dark&quot;
        : &quot;light&quot;
=======
    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      root.classList.add(systemTheme)
      return
    }
    root.classList.add(theme)
  }, [theme])
  const value = {
    theme
    setTheme: (theme: Theme) => {
      localStorage.setItem("theme", theme)
      setTheme(theme)
    }}
<<<<<<< HEAD
=======
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (;
    <ThemeProviderContext.Provider value={value}>;
      {children}
    </ThemeProviderContext.Provider>;
  );
}
export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

<<<<<<< HEAD
  if (context === undefined);
    throw new Error(&quot;useTheme must be used within a ThemeProvider&quot;)
=======
  if (context === undefined)
<<<<<<< HEAD
    throw new Error(&quot;useTheme must be used within a ThemeProvider&quot;)
  return context
}
=======
    throw new Error("useTheme must be used within a ThemeProvider")
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

  return context
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
