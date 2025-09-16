
import { safeStorage } from "@/utils/safeStorage"

type Theme = "dark" | "light" | "system"

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
  theme: "system",
  setTheme: () => null,

export const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
    const stored = safeStorage.getItem("theme") as Theme | null
    return stored || defaultTheme
  })

  const applyTheme = (t: Theme) => {
    const root = window.document.documentElement
    const body = window.document.body


    if (t === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(t)
  }

  useLayoutEffect(() => {
    applyTheme(theme)
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

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
