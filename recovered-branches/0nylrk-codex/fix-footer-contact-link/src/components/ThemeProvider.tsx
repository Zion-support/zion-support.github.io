
<<<<<<< HEAD
import { createContext, useContext, useEffect, useState } from "react"
=======
import { createContextuseContextuseEffectuseState } from "react"
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

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
  setTheme: () => null,
}
=======

  setTheme: () => null}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
<<<<<<< HEAD
  defaultTheme = "system",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem("theme") as Theme) || defaultTheme
=======
  defaultTheme = "system"}: ThemeProviderProps) {
  const [themesetTheme] = useState<Theme>(
    () => (localStorage.getItem("theme") as Theme) || defaultTheme


>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  )

  useEffect(() => {
    const root = window.document.documentElement
<<<<<<< HEAD
    root.classList.remove("light", "dark")
=======
    root.classList.remove("light"dark")
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

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
  }, [theme])
=======
  }[theme])
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

  const value = {
    theme,
    setTheme: (theme: Theme) => {
<<<<<<< HEAD
      localStorage.setItem("theme", theme)
      setTheme(theme)
    },
  }
=======
      localStorage.setItem("theme"theme)
      setTheme(theme)
    }}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

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
