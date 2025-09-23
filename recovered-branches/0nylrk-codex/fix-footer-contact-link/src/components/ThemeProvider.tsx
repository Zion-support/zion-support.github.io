
<<<<<<< HEAD
import { createContextuseContextuseEffectuseState } from "react"
=======
import { createContext, useContext, useEffect, useState } from "react"
>>>>>>> origin/auto/autonomy-17186719616

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "system",
<<<<<<< HEAD

  setTheme: () => null}
=======
  setTheme: () => null,
}
>>>>>>> origin/auto/autonomy-17186719616

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
<<<<<<< HEAD
  defaultTheme = "system"}: ThemeProviderProps) {
  const [themesetTheme] = useState<Theme>(
    () => (localStorage.getItem("theme") as Theme) || defaultTheme


=======
  defaultTheme = "system",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem("theme") as Theme) || defaultTheme
>>>>>>> origin/auto/autonomy-17186719616
  )

  useEffect(() => {
    const root = window.document.documentElement
<<<<<<< HEAD
    root.classList.remove("light"dark")
=======
    root.classList.remove("light", "dark")
>>>>>>> origin/auto/autonomy-17186719616

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
<<<<<<< HEAD
  }[theme])
=======
  }, [theme])
>>>>>>> origin/auto/autonomy-17186719616

  const value = {
    theme,
    setTheme: (theme: Theme) => {
<<<<<<< HEAD
      localStorage.setItem("theme"theme)
      setTheme(theme)
    }}
=======
      localStorage.setItem("theme", theme)
      setTheme(theme)
    },
  }
>>>>>>> origin/auto/autonomy-17186719616

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
