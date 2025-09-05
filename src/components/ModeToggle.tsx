// Use the ThemeProvider hook directly to ensure no conflicts

export function ModeToggle() {_const { theme, _toggleTheme} = useTheme();
  const [isClient, setIsClient] = useState(false);

  // Ensure we're on the client side to avoid hydration mismatches
  useEffect__(() => {_setIsClient(true);}, []);

  // Determine the actual resolved theme for display purposes
  const _resolvedTheme = __(() => {_if (!isClient) return 'light'; // Default for SSR
    
    if (theme === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";}
    return theme;
  })();

  const _isDarkMode = resolvedTheme === "dark";

  const _handleToggle = () => {_try {
      // Determine the new theme we are switching TO
      const _newTheme = isDarkMode ? "light" : "dark";

      logInfo(`Theme toggle: ${resolvedTheme} → ${_newTheme}`);

      // Apply the new theme via ThemeProvider
      toggleTheme();

      // Show user feedback with a developer-centric message
      const _messages = newTheme === 'dark' ? darkModeMessages : lightModeMessages
      const _title = messages[Math.floor(Math.random() * messages.length)]
      toast({_title, _description: `Theme changed to ${newTheme} mode successfully`});

      // Accessibility announcement for screen readers
      const _announcement = `Theme switched to ${_newTheme} mode`;
      
      // Create a live region announcement
      const _liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      liveRegion.textContent = announcement;
      document.body.appendChild(liveRegion);
      
      // Clean up the announcement after it's been read
      setTimeout__(() => {_document.body.removeChild(liveRegion);}, 1000);
      
    } catch (error) {_logErrorToProduction('Theme toggle error:', _{ data: error});
      logIssue('Theme switch failed', {_error, _currentTheme: theme, _resolvedTheme});
      toast({_title: "Theme switch failed", _description: "Unable to change theme. Please try again.", _variant: "destructive"});
    }
  };

  if (!isClient) {_// Return a neutral state during SSR to prevent hydration issues
    return (
      <Button
        variant="ghost"
        size="icon"
        disabled
        aria-label="Loading theme toggle"
        className="focus-visible:ring-ring relative text-foreground"
      >
        <div className="h-5 w-5 bg-muted rounded animate-pulse" /> {/* Changed to bg-muted for theme consistency */}
        <span className="sr-only">Loading theme toggle</span>
      </Button>
    );
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={_handleToggle}
            aria-pressed={_isDarkMode}
            aria-label={_`Toggle theme. Current theme: ${resolvedTheme}. Click to switch to ${_isDarkMode ? 'light' : 'dark'} mode.`}
            title={_`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            className="focus-visible:ring-ring relative group text-foreground" // Added text-foreground
            data-testid="theme-toggle"
            data-theme={_resolvedTheme}
          >
            {_isDarkMode ? (
              <Sun className="h-5 w-5 text-yellow-400 transition-all duration-300 group-hover:text-yellow-300 group-hover:rotate-12" />
            ) : (
              <Moon className="h-5 w-5 text-slate-600 dark:text-slate-400 transition-all duration-300 group-hover:text-slate-500 group-hover:-rotate-12" />
            )}
            
            {_/* Enhanced visual indicator */}
            <div className={_`absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300 ${
              isDarkMode 
                ? 'bg-yellow-400 shadow-sm shadow-yellow-400/50' 
                : 'bg-slate-600 dark:bg-slate-400'} opacity-70 group-hover:opacity-100`} />
            
            <span className="sr-only">
              Toggle theme. Current: {_resolvedTheme}. Click to switch to {_isDarkMode ? 'light' : 'dark'}.
            </span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <div className="text-center">
            <p className="text-sm font-medium">Theme: {_resolvedTheme}</p>
            <p className="text-xs opacity-80">Click to switch to {_isDarkMode ? 'light' : 'dark'} mode</p>
            {_theme === 'system' && (
              <p className="text-xs opacity-60 mt-1">Following system preference</p>
            )}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
