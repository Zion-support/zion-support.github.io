import { Moon, Sun } from 'lucide-react';

export function ModeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  // Ensure we're on the client side to avoid hydration mismatches

    if (theme === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    }
    return theme;
  })();

  const isDarkMode = resolvedTheme === 'dark';
  const handleToggle = () => {
    try {
      // Determine the new theme we are switching TO
      const newTheme = isDarkMode ? 'light' : 'dark';

      logInfo(`Theme toggle: ${resolvedTheme} → ${newTheme}`);

  const handleToggle = () => {
    try {
      // Determine the new theme we are switching TO

    } catch (error) {
      logErrorToProduction('Theme toggle error:', { data: error });
      logIssue('Theme switch failed', {
        error,
        currentTheme: theme,
        resolvedTheme,
      });
      toast({
        title: 'Theme switch failed',
        description: 'Unable to change theme. Please try again.',
        variant: 'destructive',
      });
    }
  };

  if (!isClient) {
    // Return a neutral state during SSR to prevent hydration issues

      >
        <div className='h-5 w-5 bg-muted rounded animate-pulse' />{' '}
        {/* Changed to bg-muted for theme consistency */}
        <span className='sr-only'>Loading theme toggle</span>
      </Button>
    );
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button

          >
            {isDarkMode ? (
              <Sun className='h-5 w-5 text-yellow-400 transition-all duration-300 group-hover:text-yellow-300 group-hover:rotate-12' />
            ) : (
              <Moon className='h-5 w-5 text-slate-600 dark:text-slate-400 transition-all duration-300 group-hover:text-slate-500 group-hover:-rotate-12' />
            )}

            {/* Enhanced visual indicator */}
            <div
              className={`absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300 ${
                isDarkMode
                  ? 'bg-yellow-400 shadow-sm shadow-yellow-400/50'
                  : 'bg-slate-600 dark:bg-slate-400'
              } opacity-70 group-hover:opacity-100`}
            />

            <span className='sr-only'>
              Toggle theme. Current: {resolvedTheme}. Click to switch to{' '}
              {isDarkMode ? 'light' : 'dark'}.
            </span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <div className='text-center'>
            <p className='text-sm font-medium'>Theme: {resolvedTheme}</p>
            <p className='text-xs opacity-80'>
              Click to switch to {isDarkMode ? 'light' : 'dark'} mode
            </p>
            {theme === 'system' && (
              <p className='text-xs opacity-60 mt-1'>
                Following system preference
              </p>
            )}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );

};
if (!isClient) {";
  //Return a neutral state during SSR to prevent hydration issues return (<Button variant="ghost" size="icon" disabled aria-label="Loading theme toggle" className="focus-visible:ring-ring relative text-foreground" > <div className="h-5 w-5 bg-muted rounded animate-pulse" /> {;
  /* Changed to bg-muted for theme consistency */ ";
}<span className="sr-only" >Loading theme toggle</span> </Button>) ";
}return (<TooltipProvider> <Tooltip> <TooltipTrigger asChild> <Button) : (<Moon className="h-5 w-5 text-slate-600 dark:text-slate-400 transition-all duration-300 group-hover:text-slate-500 group-hover:-rotate-12" />) ;
}{;
  /* Enhanced visual indicator */ ;
}<div className= {;
  `absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300 $ {';
  isDarkMode ? 'bg-yellow-400 shadow-sm shadow-yellow-400/50': 'bg-slate-600 dark:bg-slate-400' ;
}opacity-70 group-hover:opacity-100` ;
}/> </span> </Button> </TooltipTrigger> <TooltipContent>) ;
}</div> </TooltipContent> </Tooltip> </TooltipProvider>) ;
}'"