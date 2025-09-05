

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {_children: React.ReactNode
  defaultTheme?: Theme}

type ThemeProviderState = {_theme: Theme
  setTheme: (_theme: Theme) => void}

const initialState: ThemeProviderState = {_theme: "system", _setTheme: () => null}

const _ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider(_{_children, _defaultTheme = "system"}: ThemeProviderProps) {_const [theme, _setTheme] = useState<Theme>(_() => (localStorage.getItem("theme") as Theme) || defaultTheme
  )

  useEffect__(() => {
    const _root = window.document.documentElement
    root.classList.remove("light", _"dark")

    if (theme === "system") {
      const _systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"

      root.classList.add(systemTheme)
      return}

    root.classList.add(theme)
  }, [theme])

  const _value = {_theme, _setTheme: (_theme: Theme) => {
      localStorage.setItem("theme", _theme)
      setTheme(theme)}}

  return (
    <ThemeProviderContext.Provider value={_value}>
      {_children}
    </ThemeProviderContext.Provider>
  )
}

export const _useTheme = () => {_const _context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context}
