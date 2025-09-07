
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { toast } from '@/hooks/use-toast'
import { darkModeMessages, lightModeMessages } from '@/utils/themeToggleMessages'


import { useTheme } from '@/components/ThemeProvider';
import { logIssue } from '@/utils/logIssue';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { toast } from '@/hooks/use-toast';
import { darkModeMessages, lightModeMessages } from '@/utils/themeToggleMessages';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger',;
// Use the ThemeProvider hook directly to ensure no conflicts;
import { useTheme } from '@/components/ThemeProvider';
import { logIssue } from '@/utils/logIssue';
import { useEffect, useState } from 'react';

  if (!isClient) {;
    // Return a neutral state during SSR to prevent hydration issues;
    return (;
      <Button;
        variant='ghost';
        size='icon';
        disabled;
        aria-label='Loading theme toggle';
        className='focus-visible:ring-ring relative text-foreground';
      >;
        <div className='h-5 w-5 bg-muted rounded animate-pulse' /> {/* Changed to bg-muted for theme consistency */}
        <span className='sr-only'>Loading theme toggle</span>;
      </Button>;
    );
  }
;
  return (;
    <TooltipProvider>;
      <Tooltip>;
        <TooltipTrigger asChild>;
          <Button;
            variant='ghost';
            size='icon';
            onClick={handleToggle}
            aria-pressed={isDarkMode}
            aria-label={`Toggle theme. Current theme: ${resolvedTheme}. Click to switch to ${isDarkMode ? 'light' : 'dark'} mode.`}
            title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
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

            />;

            <span className='sr-only'>;

              Toggle theme. Current: {resolvedTheme}. Click to switch to{' '}
              {isDarkMode ? 'light' : 'dark'}.;
            </span>;
          </Button>;
        </TooltipTrigger>;
        <TooltipContent>;
          <div className='text-center'>;
            <p className='text-sm font-medium'>Theme: {resolvedTheme}</p>;
            <p className='text-xs opacity-80'>;
              Click to switch to {isDarkMode ? 'light' : 'dark'} mode;
            </p>;
            {theme === 'system' && (;
              <p className='text-xs opacity-60 mt-1'>;
                Following system preference;
              </p>;
            )}


            className='focus-visible:ring-ring relative group text-foreground' // Added text-foreground
            data-testid='theme-toggle'
            data-theme={resolvedTheme}
          >
            {isDarkMode ? (
              <Sun className='h-5 w-5 text-yellow-400 transition-all duration-300 group-hover:text-yellow-300 group-hover:rotate-12' />
            ) : (
              <Moon className='h-5 w-5 text-slate-600 dark:text-slate-400 transition-all duration-300 group-hover:text-slate-500 group-hover:-rotate-12' />
            )}
;
            {/* Enhanced visual indicator */}
            <div className={`absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300 ${
              isDarkMode 
                ? 'bg-yellow-400 shadow-sm shadow-yellow-400/50' 
                : 'bg-slate-600 dark:bg-slate-400'
            } opacity-70 group-hover:opacity-100`} />
            <span className='sr-only'>
              Toggle theme. Current: {resolvedTheme}. Click to switch to {isDarkMode ? 'light' : 'dark'}.

            {isDarkMode ? (
              <Sun className='h-5 w-5 text-yellow-400 transition-all duration-300 group-hover:text-yellow-300 group-hover:rotate-12' />
            ) : (
            </span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <div className='text-center'>
            <p className='text-sm font-medium'>Theme: {resolvedTheme}</p>
            <p className='text-xs opacity-80'>Click to switch to {isDarkMode ? 'light' : 'dark'} mode</p>
            {theme === 'system' && (
              <p className='text-xs opacity-60 mt-1'>Following system preference</p>
            )}
          </div>;
        </TooltipContent>;
      </Tooltip>;
    </TooltipProvider>;
  );
}
;
    // Return a neutral state during SSR to prevent hydration issues;
      >;
        <div className='h - 5 w - 5 bg - muted rounded animate - pulse' />{' '}
        {/* Changed to bg - muted for theme consistency */}
        <span className='sr - only'>Loading theme toggle</span>;
      </Button>);
  }
  return (
    <TooltipProvider>;
      <Tooltip>;
        <TooltipTrigger as_child>;
          <Button;
            variant='ghost';
            size='icon';
            on_click={handle_toggle}
            aria - pressed={isDarkMode}
            aria - label={`Toggle theme. Current theme: ${resolved_theme}. Click to switch to ${isDarkMode ? 'light' : 'dark'} mode.`}
            title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            className='focus - visible:ring - ring relative group text - foreground' // Added text - foreground;
            data - testid='theme - toggle';
            data - theme={resolved_theme}          >;
            {isDarkMode ? (
              <Sun className='h - 5 w - 5 text - yellow - 400 transition - all duration - 300 group - hover:text - yellow - 300 group - hover:rotate - 12' />) : (
              <Moon className='h - 5 w - 5 text - slate - 600 dark:text - slate - 400 transition - all duration - 300 group - hover:text - slate - 500 group - hover:-rotate - 12' />)}
            {/* Enhanced visual indicator */}
            <div;
              className={`absolute -bottom - 0.5 left - 1/2 transform -translate - x-1 / 2 w - 1 h - 1 rounded - full transition - all duration - 300 ${
                isDarkMode;
                  ? 'bg - yellow - 400 shadow - sm shadow - yellow - 400 / 50';
                  : 'bg - slate - 600 dark:bg - slate - 400';
              } opacity - 70 group - hover:opacity - 100`}
            />;
            <span className='sr - only'>;
              Toggle theme. Current: {resolved_theme}. Click to switch to{' '}
              {isDarkMode ? 'light' : 'dark'}.;
            </span>;
          </Button>;
        </TooltipTrigger>;
        <TooltipContent>;
          <div className='text - center'>;
            <p className='text - sm font - medium'>Theme: {resolved_theme}</p>;
            <p className='text - xs opacity - 80'>;
              Click to switch to {isDarkMode ? 'light' : 'dark'} mode;
            </p>;
            {theme === 'system' && (
              <p className='text - xs opacity - 60 mt - 1'>;
                Following system preference;
              </p>)}
          </div>;
        </TooltipContent>;
      </Tooltip>;
    </TooltipProvider>);
}
// Check condition
if ( {') {
  $2
}
  //Return a neutral state during SSR to prevent hydration issues return (<Button variant='ghost' size='icon' disabled aria - label='Loading theme toggle' className='focus - visible:ring - ring relative text - foreground' > <div className='h - 5 w - 5 bg - muted rounded animate - pulse' /> {
  /* Changed to bg - muted for theme consistency */ ';
}<span className='sr - only' >Loading theme toggle</span> </Button>) ';
}return (<TooltipProvider> <Tooltip> <TooltipTrigger as_child> <Button) : (<Moon className='h - 5 w - 5 text - slate - 600 dark:text - slate - 400 transition - all duration - 300 group - hover:text - slate - 500 group - hover:-rotate - 12' />);
}{
  /* Enhanced visual indicator */;
}<div className= {
  `absolute -bottom - 0.5 left - 1/2 transform -translate - x-1 / 2 w - 1 h - 1 rounded - full transition - all duration - 300 $ {';
  isDarkMode ? 'bg - yellow - 400 shadow - sm shadow - yellow - 400 / 50': 'bg - slate - 600 dark:bg - slate - 400';
}opacity - 70 group - hover:opacity - 100`;
}/> </span> </Button> </TooltipTrigger> <TooltipContent>);
}</div> </TooltipContent> </Tooltip> </TooltipProvider>);
}''}
}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );

origin/cursor/automate-test-improve-and-merge-code-2533
};
if (!isClient) {';
  //Return a neutral state during SSR to prevent hydration issues return (<Button variant='ghost' size='icon' disabled aria-label='Loading theme toggle' className='focus-visible:ring-ring relative text-foreground' > <div className='h-5 w-5 bg-muted rounded animate-pulse' /> {;
  /* Changed to bg-muted for theme consistency */ ';
}<span className='sr-only' >Loading theme toggle</span> </Button>) ';
}return (<TooltipProvider> <Tooltip> <TooltipTrigger asChild> <Button) : (<Moon className='h-5 w-5 text-slate-600 dark:text-slate-400 transition-all duration-300 group-hover:text-slate-500 group-hover:-rotate-12' />) ;
}{;
  /* Enhanced visual indicator */ ;
}<div className= {;
  `absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300 $ {';
  isDarkMode ? 'bg-yellow-400 shadow-sm shadow-yellow-400/50': 'bg-slate-600 dark:bg-slate-400' ;
}opacity-70 group-hover:opacity-100` ;
}/> </span> </Button> </TooltipTrigger> <TooltipContent>) ;
}</div> </TooltipContent> </Tooltip> </TooltipProvider>) ;
}''
  );
}
;
origin/cursor/automate-test-improve-and-merge-code-2533
import { Button } from '@/components/ui/button';''
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';''
import { toast } from '@/hooks/use-toast';''
import { darkModeMessages, lightModeMessages } from '@/utils/themeToggleMessages';''
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
// Use the ThemeProvider hook directly to ensure no conflicts;
import { useTheme } from '@/components/ThemeProvider';''
import { logIssue } from '@/utils/logIssue';''
import { useEffect, useState } from 'react';')
export function ModeToggle() {;
  const { theme, toggleTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);
  // Ensure we're on the client side to avoid hydration mismatches;
  useEffect(() => {;

        <div className='h-5 w-5 bg-muted rounded animate-pulse' />{' '}
</div>
        <span className='sr-only'>Loading theme toggle</span>;
      ;
    <TooltipProvider>;

      <Tooltip>;

        <TooltipTrigger asChild>;


          <Button;
            variant='ghost';''
            size='icon';'
            onClick={handleToggle}
            aria-pressed={isDarkMode}'`;
            aria-label={`Toggle theme. Current theme: ${resolvedTheme}. Click to switch to ${isDarkMode ? 'light' : 'dark'} mode.`}`;
            title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            />;


            <span className='sr-only'>;
</span>
            </span>;
        <TooltipContent>;

          <div className='text-center'>;
            <p className='text-sm font-medium'>Theme: {resolvedTheme}</p>;
            <p className='text-xs opacity-80'>;
</p>
            </p>;
              <p className='text-xs opacity-60 mt-1'>;
              <Sun className='h-5 w-5 text-yellow-400 transition-all duration-300 group-hover:text-yellow-300 group-hover:rotate-12' />'
              <Moon className='h-5 w-5 text-slate-600 dark:text-slate-400 transition-all duration-300 group-hover:text-slate-500 group-hover:-rotate-12' />'
`;
            <div className={`absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300 ${
              isDarkMode;'
                ? 'bg-yellow-400 shadow-sm shadow-yellow-400/50
                : 'bg-slate-600 dark:bg-slate-400`;
            } opacity-70 group-hover:opacity-100`} />
            <span className='sr-only'>'
        <TooltipContent>
          <div className='text-center'>'
            <p className='text-sm font-medium'>Theme: {resolvedTheme}</p>''
            <p className='text-xs opacity-80'>Click to switch to {isDarkMode ? 'light' : 'dark'} mode</p>
              <p className='text-xs opacity-60 mt-1'>Following system preference</p>'
          </div>;
    ;'
        <div className='h - 5 w - 5 bg - muted rounded animate - pulse' />{' '}
        <span className='sr - only'>Loading theme toggle</span>;
      );


        <TooltipTrigger as_child>;

            variant='ghost';
            size='icon';
            on_click={handle_toggle}
            aria - pressed={isDarkMode}`;
            aria - label={`Toggle theme. Current theme: ${resolved_theme}. Click to switch to ${isDarkMode ? 'light' : 'dark'} mode.`}`;
            className='focus - visible:ring - ring relative group text - foreground' // Added text - foreground;
            data - testid='theme - toggle';
            data - theme={resolved_theme}          >;

              <Sun className='h - 5 w - 5 text - yellow - 400 transition - all duration - 300 group - hover:text - yellow - 300 group - hover:rotate - 12' />) : (
)
              <Moon className='h - 5 w - 5 text - slate - 600 dark:text - slate - 400 transition - all duration - 300 group - hover:text - slate - 500 group - hover:-rotate - 12' />)}

            <div;`;
              className={`absolute -bottom - 0.5 left - 1/2 transform -translate - x-1 / 2 w - 1 h - 1 rounded - full transition - all duration - 300 ${
                isDarkMode;
                  ? 'bg - yellow - 400 shadow - sm shadow - yellow - 400 / 50';
                  : 'bg - slate - 600 dark:bg - slate - 400';`;
              } opacity - 70 group - hover:opacity - 100`}
            <span className='sr - only'>;

          <div className='text - center'>;
            <p className='text - sm font - medium'>Theme: {resolved_theme}</p>;
            <p className='text - xs opacity - 80'>;
              <p className='text - xs opacity - 60 mt - 1'>;
              </p>)}
  //Return a neutral state during SSR to prevent hydration issues return (<Button variant='ghost' size='icon' disabled aria - label='Loading theme toggle' className='focus - visible:ring - ring relative text - foreground' > <div className='h - 5 w - 5 bg - muted rounded animate - pulse' /> {'
)'
}<span className='sr - only' >Loading theme toggle</span> ) ';''
}return (<TooltipProvider> <Tooltip> <TooltipTrigger as_child> <Button) : (<Moon className='h - 5 w - 5 text - slate - 600 dark:text - slate - 400 transition - all duration - 300 group - hover:text - slate - 500 group - hover:-rotate - 12' />);'

}<div className= {'`;
  `absolute -bottom - 0.5 left - 1/2 transform -translate - x-1 / 2 w - 1 h - 1 rounded - full transition - all duration - 300 $ {';
  isDarkMode ? 'bg - yellow - 400 shadow - sm shadow - yellow - 400 / 50': 'bg - slate - 600 dark:bg - slate - 400';`;
}opacity - 70 group - hover:opacity - 100`;
}/> </span>   <TooltipContent>);
}</div>   );`;
pr-12325
