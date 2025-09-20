import React from "react;";

export function ModeToggle() {;
return (;
<button className="p-2 rounded-lg bg-zion-slate/10 hove;  r: bg-zion-slate/20 transition-colors">;
<svg className="w-5 h-5 text-zion-slate-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">;
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />;
</svg>;
</button>;
);
}<//button><///button>;
import { Moon, Sun,  } from 'lucide-react'
import { Button,  } from '@/components/ui/button'
import { Tooltip,
TooltipContent
, , TooltipProvider,
TooltipTrigger,
 } from '@/components/ui/tooltip'
import { toast,  } from '@/hooks/use-toast'
  darkModeMessages,
lightModeMessages,
} from '@/utils/themeToggleMessages'
// Use the ThemeProvider hook directly to ensure no conflicts,
import { useTheme,  } from '@/components/ThemeProvider'
import { logIssue,  } from '@/utils/logIssue'
import { useEffect, useState,  } from 'react'
import { Button,  } from "@/components/ui/button"
import { Tooltip,, TooltipContent,, TooltipProvider, TooltipTrigger,  } from "@/components/ui/tooltip"
import { toast,  } from "@/hooks/use-toast"
import { darkModeMessages, lightModeMessages,  } from "@/utils/themeToggleMessages"
import { logInfo, logErrorToProduction,  } from '@/utils/productionLogger';
// Use the ThemeProvider hook directly to ensure no conflicts,
import { useTheme,  } from "@/components/ThemeProvider"
import { logIssue,  } from "@/utils/logIssue"
import { useEffect, useState,  } from "react"
export function ModeToggle() {

  const { theme, toggleTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);
  // Ensure we're on the client side to avoid hydration mismatches,
useEffect(() => {
    setIsClient(true)
  }, [])
  // Determine the actual resolved theme for display purposes,
if (!isClient) {
    // Return a neutral state during SSR to prevent hydration issues
      >
        <div className='h-5 w-5 bg-muted rounded animate-pulse' />{' '}
        {/* Changed to bg-muted for theme consistency */}
        <span className='sr-only'>Loading theme toggle</span>
      </Button>
    )
  }
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button,
variant='ghost'
            size='icon'
            onClick={handleToggle}
            aria-pressed={isDarkMode}
            aria-label={`Toggle theme. Current theme: ${resolvedTheme}. Click to switch to ${isDarkMode ? 'light' : 'dark'} mode.`}
            title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            className='focus-visible:ring-ring relative group text-foreground' // Added text-foreground,
data-testid='theme-toggle'
            data-theme={resolvedTheme}          >
            {isDarkMode ? (
              <Sun className='h-5 w-5 text-yellow-400 transition-all duration-300 group-hover:text-yellow-300 group-hover:rotate-12' />
            ) : (
              <Moon className='h-5 w-5 text-slate-600 dark:text-slate-400 transition-all duration-300 group-hover:text-slate-500 group-hover:-rotate-12' />
            )}
            {/* Enhanced visual indicator */}
            <div,
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
  )
}
if (!isClient) {"
  //Return a neutral state during SSR to prevent hydration issues return (<Button variant="ghost" size="icon" disabled aria-label="Loading theme toggle" className="focus-visible:ring-ring relative text-foreground" > <div className="h-5 w-5 bg-muted rounded animate-pulse" /> {
  /* Changed to bg-muted for theme consistency */ "
}<span className="sr-only" >Loading theme toggle</span> </Button>) "
}return (<TooltipProvider> <Tooltip> <TooltipTrigger asChild> <Button) : (<Moon className="h-5 w-5 text-slate-600 dark:text-slate-400 transition-all duration-300 group-hover:text-slate-500 group-hover:-rotate-12" />)
}{
  /* Enhanced visual indicator */
}<div className= {
  `absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300 $ {'
  isDarkMode ? 'bg-yellow-400 shadow-sm shadow-yellow-400/50': 'bg-slate-600 dark:bg-slate-400'
}opacity-70 group-hover:opacity-100`
}/> </span> </Button> </TooltipTrigger> <TooltipContent>)
}</div> </TooltipContent> </Tooltip> </TooltipProvider>)
}'"}
