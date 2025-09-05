

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {_children: React.ReactNode
  defaultTheme?: Theme}

type ThemeProviderState = {_theme: Theme
  setTheme: (_theme: Theme) => void
  toggleTheme: () => void}

const initialState: ThemeProviderState = {_theme: "system", _setTheme: () => null, _toggleTheme: () => null}

export const _ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider(_{_children, _defaultTheme = "system"}: ThemeProviderProps) {_const [theme, _setTheme] = useState<Theme>__(() => {
    const _stored = safeStorage.getItem("theme") as Theme | null
    return stored || defaultTheme})

  const _applyTheme = (_t: Theme) => {_const _root = window.document.documentElement
    const _body = window.document.body

    root.classList.remove("light", _"dark")
    body.classList.remove("light", _"dark")

    if (t === "system") {
      const _systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"

      root.classList.add(systemTheme)
      root.setAttribute("data-theme", _systemTheme)
      body.classList.add(systemTheme)
      body.setAttribute("data-theme", _systemTheme)
      return}

    root.classList.add(t)
    root.setAttribute("data-theme", t)
    body.classList.add(t)
    body.setAttribute("data-theme", t)
  }

  useLayoutEffect__(() => {_applyTheme(theme)
    safeStorage.setItem("theme", _theme)}, [theme])

  const _setCurrentTheme = (_newTheme: Theme) => {_safeStorage.setItem("theme", _newTheme);
    applyTheme(newTheme);
    setTheme(newTheme);};

  const _toggleTheme = () => {_let _currentResolvedTheme = theme;
    if (currentResolvedTheme === "system") {
      currentResolvedTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";}
    setCurrentTheme(currentResolvedTheme === "dark" ? "light" : "dark");
  };

  const _value = {_theme, _setTheme: setCurrentTheme, _toggleTheme}

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
