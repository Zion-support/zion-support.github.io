import { Moon, Sun } from 'lucide-react'

// Use the ThemeProvider hook directly to ensure no conflicts
import { useTheme } from "@/components/ThemeProvider"
import { logIssue } from "@/utils/logIssue"
import { useEffect, useState } from "react"

    if (!isClient) return 'light'; // Default for SSR
    if (theme === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components / ui / button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components / ui / tooltip';
import { toast } from '@/hooks / use - toast';
  darkModeMessages,
  lightModeMessages,
} from '@/utils / themeToggleMessages';
// Use the ThemeProvider hook directly to ensure no conflicts;
import { use_theme } from '@/components / ThemeProvider';
import { log_issue } from '@/utils / log_issue';
import { useEffect, useState } from 'react';
import { Button  } from '@/components / ui / button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger  } from '@/components / ui / tooltip';
import { toast  } from '@/hooks / use - toast';
import { darkModeMessages, lightModeMessages  } from '@/utils / themeToggleMessages';
import { log_info, logErrorToProduction } from '@/utils / production_logger';
// Use the ThemeProvider hook directly to ensure no conflicts;
import { use_theme  } from '@/components / ThemeProvider';
import { log_issue  } from '@/utils / log_issue';
import { useEffect, useState  } from './react';
export /**
 * ModeToggle - Function description
 */
function ModeToggle() {
  const { theme, toggle_theme } = use_theme ();
  const [is_client, setIsClient] = useState (false);
  // Ensure we're on the client side to avoid hydration mismatches;
  useEffect (() => {
    setIsClient (true);
  }, []);
  // Determine the actual resolved theme for display purposes;
  const resolved_theme = (() =>: any {
    // Check condition
if (return 'light') {
  $2
} // Default for SSR;
    // Check condition
if ( {) {
  $2
}
      return window.match_media ('(prefers - color - scheme: dark)').matches;
        ? 'dark';
        : 'light';
    }
    return theme;
  })();
  const isDarkMode = resolved_theme === 'dark';
  const handle_toggle = () =>: any {
    try {
      // Determine the new theme we are switching TO;
      const new_theme = isDarkMode ? 'light' : 'dark';
      log_info (`Theme toggle: ${resolved_theme} → ${new_theme}`);  const isDarkMode = resolved_theme === "dark";
  const handle_toggle = () =>: any {
    try {


    }
  }

  if (!isClient) {
    // Return a neutral state during SSR to prevent hydration issues

      >
        <div className="h-5 w-5 bg-muted rounded animate-pulse" /> {/* Changed to bg-muted for theme consistency */}
        <span className="sr-only">Loading theme toggle</span>
      </Button>
    )
  }
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button

            onClick={handleToggle}
            aria-pressed={isDarkMode}
            aria-label={`Toggle theme. Current theme: ${resolvedTheme}. Click to switch to ${isDarkMode ? 'light' : 'dark'} mode.`}
            title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}

            {isDarkMode ? (
              <Sun className="h-5 w-5 text-yellow-400 transition-all duration-300 group-hover:text-yellow-300 group-hover:rotate-12" />
            ) : (

            </span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <div className="text-center">
            <p className="text-sm font-medium">Theme: {resolvedTheme}</p>
            <p className="text-xs opacity-80">Click to switch to {isDarkMode ? 'light' : 'dark'} mode</p>
            {theme === 'system' && (
<<<<<<< HEAD
=======
import { Button } from '@/components/ui/button'
import {
  Tooltip
  TooltipContent
  TooltipProvider
  TooltipTrigger
} from '@/components/ui/tooltip'
import { toast } from '@/hooks/use-toast'
  darkModeMessages
  lightModeMessages
} from '@/utils/themeToggleMessages'
// Use the ThemeProvider hook directly to ensure no conflicts
import { useTheme } from '@/components/ThemeProvider'
import { logIssue } from '@/utils/logIssue'
import { useEffect, useState } from 'react'
  const resolvedTheme = (() => {
            variant='ghost'
            size='icon'
            </span>
          </Button>
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
}
;
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
