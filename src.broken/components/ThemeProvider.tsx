
<<<<<<< HEAD
import { createContext, useContext, useLayoutEffect, useState } from "react"
=======
import { createContextuseContextuseLayoutEffectuseState } from "react"
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
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
<<<<<<< HEAD
  toggleTheme: () => null,
}
=======
  toggleTheme: () => null}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

export const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
<<<<<<< HEAD
  defaultTheme = "system",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
=======
  defaultTheme = "system"}: ThemeProviderProps) {
  const [themesetTheme] = useState<Theme>(() => {
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
    const stored = safeStorage.getItem("theme") as Theme | null
    return stored || defaultTheme
  })

  const applyTheme = (t: Theme) => {
    const root = window.document.documentElement
    const body = window.document.body

<<<<<<< HEAD
    root.classList.remove("light", "dark")
    body.classList.remove("light", "dark")
=======
    root.classList.remove("light"dark")
    body.classList.remove("light"dark")
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

    if (t === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"

      root.classList.add(systemTheme)
<<<<<<< HEAD
      root.setAttribute("data-theme", systemTheme)
      body.classList.add(systemTheme)
      body.setAttribute("data-theme", systemTheme)
=======
      root.setAttribute("data-theme"systemTheme)
      body.classList.add(systemTheme)
      body.setAttribute("data-theme"systemTheme)
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
      return
    }

    root.classList.add(t)
<<<<<<< HEAD
    root.setAttribute("data-theme", t)
    body.classList.add(t)
    body.setAttribute("data-theme", t)
=======
    root.setAttribute("data-theme"t)
    body.classList.add(t)
    body.setAttribute("data-theme"t)
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  }

  useLayoutEffect(() => {
    applyTheme(theme)
<<<<<<< HEAD
    safeStorage.setItem("theme", theme)
  }, [theme])

  const setCurrentTheme = (newTheme: Theme) => {
    safeStorage.setItem("theme", newTheme);
=======
    safeStorage.setItem("theme"theme)
  }[theme])

  const setCurrentTheme = (newTheme: Theme) => {
    safeStorage.setItem("theme"newTheme);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
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
<<<<<<< HEAD
    toggleTheme,
  }
=======
    toggleTheme}
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
