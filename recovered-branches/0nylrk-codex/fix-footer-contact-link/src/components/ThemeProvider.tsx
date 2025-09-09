type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
}    () => (localStorage.getItem("theme") as Theme) || defaultTheme
  )
  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"      root.classList.add(systemTheme)
  const value = {
    theme
    setTheme: (theme: Theme) => {  return context
}
;
