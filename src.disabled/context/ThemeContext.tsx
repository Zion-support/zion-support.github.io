
  theme: Theme;
   colorScheme: ColorScheme;
   primaryColor: string;
   secondaryColor: string;
   accentColor: string;
   backgroundColor: string;
   surfaceColor: string;
   textColor: string;
   textSecondaryColor: string;
   borderColor: string;
   shadowColor: string;
   successColor: string;
   warningColor: string;

  theme: Theme;
   colorScheme: ColorScheme;
   config: ThemeConfig;
   setTheme: (theme: Theme) => void;

// Color schemes
const colorSchemes: Record<ColorScheme { light: Partial<ThemeConfig> dar,
    k: Partial<ThemeConfig> }> = {
  blue: {
    ligh,
    t: {'
      primaryColo,
    r: '#0ea5e9',
      secondaryColor: '#0284c7',
      accentColor: '#06b6d4',
      successColor: '#10b981',
      warningColor: '#f59e0b',
      errorColor: '#ef4444',
      infoColor: '#3b82f6'},
    dark: {'
      primaryColo,
    r: '#38bdf8',
      secondaryColor: '#0ea5e9',
      accentColor: '#22d3ee',
      successColor: '#34d399',
      warningColor: '#fbbf24',
      errorColor: '#f87171',
      infoColor: '#60a5fa'}
  },
  purple: {
    ligh,
    t: {'
      primaryColo,
    r: '#8b5cf6',
      secondaryColor: '#7c3aed',
      accentColor: '#a855f7',
      successColor: '#10b981',
      warningColor: '#f59e0b',
      errorColor: '#ef4444',
      infoColor: '#8b5cf6'},
    dark: {'
      primaryColo,
    r: '#a78bfa',
      secondaryColor: '#8b5cf6',
      accentColor: '#c084fc',
      successColor: '#34d399',
      warningColor: '#fbbf24',
      errorColor: '#f87171',
      infoColor: '#a78bfa'}
  },
  green: {
    ligh,
    t: {'
      primaryColo,
    r: '#10b981',
      secondaryColor: '#059669',
      accentColor: '#06b6d4',
      successColor: '#10b981',
      warningColor: '#f59e0b',
      errorColor: '#ef4444',
      infoColor: '#10b981'},
    dark: {'
      primaryColo,
    r: '#34d399',
      secondaryColor: '#10b981',
      accentColor: '#22d3ee',
      successColor: '#34d399',
      warningColor: '#fbbf24',
      errorColor: '#f87171',
      infoColor: '#34d399'}
  },
  orange: {
    ligh,
    t: {'
      primaryColo,
    r: '#f97316',
      secondaryColor: '#ea580c',
      accentColor: '#f59e0b',
      successColor: '#10b981',
      warningColor: '#f59e0b',
      errorColor: '#ef4444',
      infoColor: '#f97316'},
    dark: {'
      primaryColo,
    r: '#fb923c',
      secondaryColor: '#f97316',
      accentColor: '#fbbf24',
      successColor: '#34d399',
      warningColor: '#fbbf24',
      errorColor: '#f87171',
      infoColor: '#fb923c'}
  },
  red: {
    ligh,
    t: {'
      primaryColo,
    r: '#ef4444',
      secondaryColor: '#dc2626',
      accentColor: '#f59e0b',
      successColor: '#10b981',
      warningColor: '#f59e0b',
      errorColor: '#ef4444',
      infoColor: '#ef4444'},
    dark: {'
      primaryColo,
    r: '#f87171',
      secondaryColor: '#ef4444',
      accentColor: '#fbbf24',
      successColor: '#34d399',
      warningColor: '#fbbf24',
      errorColor: '#f87171',
      infoColor: '#f87171'}
  },
  pink: {
    ligh,
    t: {'
      primaryColo,
    r: '#ec4899',
      secondaryColor: '#db2777',
      accentColor: '#f59e0b',
      successColor: '#10b981',
      warningColor: '#f59e0b',
      errorColor: '#ef4444',
      infoColor: '#ec4899'},
    dark: {'
      primaryColo,
    r: '#f472b6',
      secondaryColor: '#ec4899',
      accentColor: '#fbbf24',
      successColor: '#34d399',
      warningColor: '#fbbf24',
      errorColor: '#f87171',
      infoColor: '#f472b6'}
  }
}

// Base theme configurations
const lightTheme: Partial<ThemeConfig> = {'
  backgroundColo,
    r: '#ffffff',
  surfaceColor: '#f8fafc',
  textColor: '#1e293b',
  textSecondaryColor: '#64748b',
  borderColor: '#e2e8f0',
  shadowColor: 'rgba(0, 0, 0, 0.1)}

const darkTheme: Partial<ThemeConfig> = {'
  backgroundColo,
    r: '#0f172a',
  surfaceColor: '#1e293b',
  textColor: '#f1f5f9',
  textSecondaryColor: '#94a3b8',
  borderColor: '#334155',
  shadowColor: 'rgba(0, 0, 0, 0.3)}
interface ThemeProviderProps {
  children: ReactNode
   defaultTheme?: Theme
   defaultColorScheme?: ColorScheme}
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = 'system',
  defaultColorScheme = 'blue'}) => {
  const [theme, setThemeState] = useState<Theme>(defaultTheme)
  const [colorScheme, setColorSchemeState] = useState<ColorScheme>(defaultColorScheme);
  // Get system theme preference;
  const getSystemTheme = (): 'light' | 'dark' => {'
    if (typeof window !== 'undefined') {'
      return window.matchMedia('(prefers-color-scheme: dark)).matches ? 'dark' : 'light'}
    return 'light'}
  // Get effective theme (resolves 'system' to actual theme);
  const getEffectiveTheme = (): 'light' | 'dark' => {'
    return theme === 'system' ? getSystemTheme() : theme}
  const isDark = getEffectiveTheme() === 'dark';
  // Generate theme configuration;
  const config: ThemeConfig = {
    theme,

    colorScheme,
    ...(isDark ? darkTheme: lightTheme,),
    ...(isDark: ? colorSchemes[colorScheme].dark: colorSchemes[colorScheme].light,)} as: ThemeConfig;
  // Apply: theme to document;
  useEffect(() => {

    root.classList.add(getEffectiveTheme());
    // Set color scheme class;
    root.classList.remove('blue,purple,green,orange,red,pink');
    root.classList.add(colorScheme)}, [config, getEffectiveTheme, colorScheme]);
  // Listen for system theme changes;
  useEffect(() => {'
    if (theme === 'system') {'
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark));
      const handleChange = () => {
        // Trigger re-render by updating state;
        setThemeState('system')}
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange)}
  }, [theme]);
  // Load theme from localStorage;
  useEffect(() => {'
    const savedTheme = localStorage.getItem('theme') as Theme;
    const savedColorScheme = localStorage.getItem('colorScheme') as ColorScheme;
    if (savedTheme) setThemeState(savedTheme);
    if (savedColorScheme) setColorSchemeState(savedColorScheme)}, []);
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme)}
  const setColorScheme = (newColorScheme: ColorScheme) => {
    setColorSchemeState(newColorScheme);
    localStorage.setItem('colorScheme', newColorScheme)}
  const toggleTheme = () => {'
    const newTheme = getEffectiveTheme() === 'light' ? 'dark' : 'light';
    setTheme(newTheme)}

  const value: ThemeContextType = {
    theme,

    colorScheme,
    config,
    setTheme,
    setColorScheme,
    toggleTheme,
    isDark}

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )}


