

type Theme = "dark" | "light" | "system"
>>>>>>> origin/cursor/delete-old-data-records-6bba

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
}    () => (localStorage.getItem("theme") as Theme) || defaultTheme
  )
  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(&quot;light&quot;, &quot;dark&quot;)
    if (theme === &quot;system&quot;) {
      const systemTheme = window.matchMedia(&quot;(prefers-color-scheme: dark)&quot;)
        .matches
        ? &quot;dark&quot;
        : &quot;light&quot;      root.classList.add(systemTheme)
      return
    }
    root.classList.add(theme)
  }, [theme])
  const value = {
    theme
    setTheme: (theme: Theme) => {  return context
}
;
