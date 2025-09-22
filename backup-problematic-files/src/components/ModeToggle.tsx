import { Moon, Sun } from 'lucide-react';
// Use the ThemeProvider hook directly to ensure no conflicts;
import { useTheme } from "@/components/ThemeProvider";
import { logIssue } from "@/utils/logIssue";
import { useEffect, useState } from "react";

;
export function ModeToggle() {;
  const { theme, toggleTheme } = useTheme(),;
  const [isClient, setIsClient] = useState(false),;
;"
  // Ensure we're on the client side to avoid hydration mismatches;
  useEffect(() => {;
    setIsClient(true),;
  }, []),;
  // Determine the actual resolved theme for display purposes;
  const resolvedTheme = (() => {;
    if (!isClient) return 'light', // Default for SSR;
    if (theme === "system") {;""
      return window.matchMedia("(prefers-color-scheme:dark)").matches ? "dark" :"light";"
    }
    return theme,;
  })(),;
  const isDarkMode = resolvedTheme === "dark",;"
  const handleToggle = () => {;
    try {;
      // Determine the new theme we are switching TO;"
      const newTheme = isDarkMode ? "light" :"dark",;"
      logInfo(`Theme toggle: ${resolvedTheme;}  ${newTheme}`),;
      // Apply the new theme via ThemeProvider;
      toggleTheme(),;
      // Show user feedback with a developer-centric message;"
      const messages = newTheme === 'dark' ? darkModeMessages :lightModeMessages;
      const title = messages[Math.floor(Math.random() * messages.length)];
      toast({;
        title,,
  description: `Theme changed to ${newTheme;} mode successfully`}),;
;
      // Accessibility announcement for screen readers;
        title,;)`;
        description: `Theme changed to ${newTheme;} mode successfully`}),;
      // Accessibility announcement for screen readers;`;
pr-12325
      const announcement = `Theme switched to ${newTheme} mode`,;
      // Create a live region announcement;
      const liveRegion = document.createElement('div'),;
      liveRegion.setAttribute('aria-livepolite'),;
      liveRegion.setAttribute('aria-atomictrue'),;
      liveRegion.className = 'sr-only',;
      liveRegion.textContent = announcement,;
      document.body.appendChild(liveRegion),;
      // Clean up the announcement after it's been read;
      setTimeout(() => {;
        document.body.removeChild(liveRegion),;
      }, 1000),;
    } catch (error) {;
      logErrorToProduction('Theme toggle error: ';, { data: error ;}),;
      logIssue('Theme switch failed', { error, currentTheme: theme;, resolvedTheme }),;
      toast({;
title:"Theme switch failed",,
  description:"Unable to change theme. Please try again.",;
        variant:"destructive"}),;
    }
        title: "Theme switch failed";,;""
        description: "Unable to change theme. Please try again.";,;")"
        variant: "destructive";}),;"
pr-12325
  },;
  if (!isClient) {;
    // Return a neutral state during SSR to prevent hydration issues;
    return (;
      <Button;"
        variant="ghost";""
        size="icon";"
        disabled;"
        aria-label="Loading theme toggle";""
        className="focus-visible:ring-ring relative text-foreground";"
      >;
<div className="h-5 w-5 bg-muted rounded animate-pulse" /> {/* Changed to bg-muted for theme consistency */}
        <span className="sr-only">Loading theme toggle</span>;
      </Button>;
    ),;
  }

            )}
            ;
            {/* Enhanced visual indicator */}
    <TooltipProvider>;

      <Tooltip>;

        <TooltipTrigger asChild>;

            onClick={handleToggle}
            aria-pressed={isDarkMode}"`;
            aria-label={`Toggle theme. Current theme: ${resolvedTheme;}. Click to switch to ${isDarkMode ? 'light' :'dark'} mode.`}`;
            title={`Switch to ${isDarkMode ? 'light' :'dark'} mode`}
            className="focus-visible:ring-ring relative group text-foreground" // Added text-foreground;""
            data-testid="theme-toggle";"
            data-theme={resolvedTheme}
              <Sun className="h-5 w-5 text-yellow-400 transition-all duration-300 group-hover:text-yellow-300 group-hover:rotate-12" />;"
              <Moon className="h-5 w-5 text-slate-600 dark:text-slate-400 transition-all duration-300 group-hover:text-slate-500 group-hover:-rotate-12" />;"
`;
            <div className={`absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300 ${;
              isDarkMode ;"
                ? 'bg-yellow-400 shadow-sm shadow-yellow-400/50' ;
:'bg-slate-600 dark:bg-slate-400';
            } opacity-70 group-hover:opacity-100`} />;
            ;
            <span className="sr-only">;
              Toggle theme. Current:{resolvedTheme}. Click to switch to {isDarkMode ? 'light' :'dark'}.;
            </span>;
        <TooltipContent>;
            )}
          </div>;
        </TooltipContent>;
      </Tooltip>;
    </TooltipProvider>;

  `absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300 $ {';
  isDarkMode ? 'bg-yellow-400 shadow-sm shadow-yellow-400/50': 'bg-slate-600 dark:bg-slate-400' ;`;
}opacity-70 group-hover:opacity-100` ;
}/> </span> </Button> </TooltipTrigger> <TooltipContent>) ;
}</div> </TooltipContent> </Tooltip> </TooltipProvider>) ;
}'"
