

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
}

  setTheme: (theme: Theme) => void;
}
const initialState: ThemeProviderState = {

  setTheme: () => null}
const ThemeProviderContext = createContext<ThemeProviderState>(initialState)
export function ThemeProvider({

  children,
  defaultTheme = "system"}: ThemeProviderProps) {

  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem("theme") as Theme) || defaultTheme

  )
  useEffect(() => {
    const root = window.document.documentElement

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

  return (;
    <ThemeProviderContext.Provider value={value}>;
      {children}
    </ThemeProviderContext.Provider>;
  );
}
export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)

  return context
}
;

