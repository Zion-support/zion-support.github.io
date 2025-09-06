
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
}
;
type ThemeProviderState = {;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}
const initialState: ThemeProviderState = {
  theme: "system",
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
  )

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem("theme", theme)
      setTheme(theme)
    }}
;
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
    throw new Error("useTheme must be used within a ThemeProvider")
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

  return context
}
;